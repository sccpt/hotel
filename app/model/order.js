'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
const { getDays, orderId } = require('../utils/tools');
const { Op } = require("sequelize");
const moment = require('moment');

module.exports = app => {
    const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

    const Order = app.model.define('tc_orders', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: INTEGER
        },
        roomid: {
            allowNull: false,
            type: INTEGER,
            comment: '房间id'
        },
        uid: {
            allowNull: false,
            type: INTEGER,
            comment: '用户id'
        },
        start_time: {
            allowNull: false,
            type: STRING,
            comment: '入住时间'
        },
        end_time: {
            allowNull: false,
            type: STRING,
            comment: '退房时间'
        },
        from_type: {
            allowNull: true,
            type: INTEGER,
            defaultValue: 0,
            comment: '来源分类，默认值0为散客，1渠道2公司3网络4团体房'
        },
        order_id: {
            allowNull: false,
            type: STRING,
            comment: '订单编号'
        },
        price: {
            allowNull: false,
            type: INTEGER,
            comment: '总金额'
        },
        people: {
            allowNull: false,
            type: STRING,
            comment: '预定人'
        },
        people_mobile: {
            allowNull: false,
            type: STRING,
            comment: '预定人手机'
        },
        mycome: {
            allowNull: true,
            type: STRING,
            comment: '到达时间'
        },
        content: {
            allowNull: true,
            type: TEXT,
            comment: '备注'
        },
        deposit_price: {
            allowNull: true,
            type: INTEGER,
            comment: '押金'
        },
        confirm_price: {
            allowNull: true,
            type: INTEGER,
            comment: '退房实收金额'
        },
        status: {
            allowNull: false,
            type: INTEGER,
            defaultValue: 2,
            comment: '订单状态，1已入住2未入住3取消订单4退房'
        },
        price_extras: {
            allowNull: true,
            type: INTEGER,
            comment: '额外消费'
        },
        pay_uname: {
            allowNull: true,
            type: STRING,
            comment: '付款人'
        },
        pay_type: {
            allowNull: true,
            type: INTEGER,
            defaultValue: 1,
            comment: '支付方式：1微信，2支付宝，3，现金'
        },
        pay_status: {
            allowNull: false,
            type: INTEGER,
            defaultValue: 0,
            comment: '支付状态，0未支付，1已支付'
        },
        pay_id: {
            allowNull: true,
            type: STRING,
            comment: '微信支付的订单号'
        },
        pay_money: {
            allowNull: true,
            type: INTEGER,
            defaultValue: 0,
            comment: '微信支付总金额，用于退款'
        },
        refund_status: {
            allowNull: true,
            type: INTEGER,
            defaultValue: 0,
            comment: '退款状态，0已退款，1未退款'
        },
        eat_type: {
            allowNull: true,
            type: INTEGER,
            defaultValue: 0,
            comment: '是否含早餐：0不含，1包含'
        },
        createdAt: {
            allowNull: true,
            type: DATE,
            comment: '创建时间'
        },
        createdBy: {
            allowNull: true,
            type: STRING,
            comment: '创建者'
        },
        updatedAt: {
            allowNull: true,
            type: DATE,
            comment: '更新时间'
        },
        updatedBy: {
            allowNull: true,
            type: STRING,
            comment: '更新者'
        }
    });

    Order.associate = function () {
        app.model.Order.belongsTo(app.model.Room, { foreignKey: 'roomid', targetKey: 'id', as: 'room' });
        // app.model.Room.belongsTo(app.model.Floor, { foreignKey: 'floor_id', targetKey: 'id', as: 'floor' });
        // app.model.Room.belongsTo(app.model.HotelType, { foreignKey: 'room_type_id', targetKey: 'id', as: 'type' });
    };

    // 新增
    Order.createOrder = async (query) => {
        const transaction = await app.transaction();
        const lock = await app.model.Room.findOne({
            where: {
                id: query.roomid,
            },
            lock: transaction.LOCK.UPDATE,
        }, { transaction });
        if (lock.status == 1) {
            await app.model.Room.update({ status: query.roomStatus }, { where: { id: query.roomid }, transaction });
            return await Order.create(query, { transaction });
        }
        return;
    };

    // 修改
    Order.updateOrder = async (query, where) => {
        const transaction = await app.transaction();
        // 锁定当前房间
        const roomData = await app.model.Room.findOne({
            where: {
                id: query.roomid,
            },
            lock: transaction.LOCK.UPDATE,
        }, { transaction });

        // 锁定订单
        const lockOrder = await Order.findOne({
            ...where,
            lock: transaction.LOCK.UPDATE,
        }, { transaction });

        // 判断原有的房间是否存在被修改
        if (query.roomid !== query.roomOldId) {
            if (roomData.status == 1) {
                // 批量修改房间的状态
                await app.model.Room.bulkCreate([{ id: query.roomid, status: query.roomStatus }, { id: query.roomOldId, status: 1 }], { updateOnDuplicate: ["status"], transaction });
                return await Order.update(query, { ...where, transaction });
            }
            // 如果房间状态不空闲，直接返回
            return;
        }

        // 修改的房间号相等，没有改变房间号，但是存在修改了订单状态，因此依然要改变一次房间状态
        await app.model.Room.update({ status: query.roomStatus }, { where: { id: query.roomid }, transaction });
        // 如果是退房，批量修改对应的订餐状态为已完成
        if (query.status == 3 || query.status == 4) {
            const foodOrder = await app.model.FoodOrders.findAll({
                where: {
                    room_order_id: lockOrder.order_id,
                },
                lock: transaction.LOCK.UPDATE,
            }, { transaction });
            const foodOrderUpdate = [];
            for (let i = 0; i < foodOrder.length; i++) {
                foodOrderUpdate.push({
                    id: foodOrder[i].id,
                    status: 2,
                });
            }
            await app.model.FoodOrders.bulkCreate(foodOrderUpdate, { updateOnDuplicate: ["status"], transaction });
        }
        query.uid = lockOrder.uid;
        return await Order.update(query, { ...where, transaction });
    };

    // 删除
    Order.deleteOrder = async (query) => {
        const transaction = await app.transaction();
        // 如果订单状态为已入住和预定状态，删除订单的同时，将这条订单绑定的房间状态修改为空闲
        if (query.status == 1 || query.status == 2) {
            await app.model.Room.findOne({
                where: {
                    id: query.roomid,
                },
                lock: transaction.LOCK.UPDATE,
            }, { transaction });
            await app.model.Room.update({ status: 1 }, { where: { id: query.roomid }, transaction });
            return await Order.destroy({ where: { id: query.id }, transaction });
        }
        return await Order.destroy({ where: { id: query.id }, transaction });
    };

    // 小程序下订单
    Order.weappCreate = async (query) => {
        const transaction = await app.transaction();
        // 校验预定的入住时间
        const now = moment(moment(new Date()).format('YYYY-MM-DD H:mm:ss'));
        const startTime = moment(moment(`${query.start_time} 18:00:00`).format('YYYY-MM-DD H:mm:ss'));
        const day = startTime.diff(now, 'day');
        if (day > 30) {
            return;
        }
        const lock = await app.model.Room.findOne({
            where: {
                status: 1,
                room_type_id: query.typeId,
            },
            order: [app.Sequelize.literal('rand()')],
            lock: transaction.LOCK.UPDATE,
        }, { transaction });
        if (lock && lock.id) {
            await app.model.Room.update({ status: 2 }, { where: { id: lock.id }, transaction });
            query.roomid = lock.id;
            const days = getDays(query.start_time, query.end_time);
            let totalPrice = 0;
            for (let i = 0; i < days.length; i++) {
                const dayPrice = await app.model.WeeksPrice.getRoomPrice(days[i], query.typeId);
                if (dayPrice) {
                    totalPrice += Number(dayPrice);
                }
            }
            if (totalPrice) {
                query.price = totalPrice;
                query.order_id = orderId();
                // const roomType = await app.model.HotelType.findByPk(query.typeId);
                const res = await Order.create(query, { transaction });
                if (res) {
                    return res;
                }
                return;
            }
            return;
        }
        return;
    };

    // 小程序取消订单
    Order.weappCancel = async (query) => {
        const transaction = await app.transaction();
        // 找到订单并锁定
        const res = await Order.findOne({
            where: {
                id: query.id,
                uid: query.uid,
            },
            lock: transaction.LOCK.UPDATE,
        });
        if (res && res.id && res.status == 2) {
            const now = moment(moment(new Date()).format('YYYY-MM-DD H:mm:ss'));
            const startTime = moment(moment(`${res.start_time} 18:00:00`).format('YYYY-MM-DD H:mm:ss'));
            const minute = startTime.diff(now, 'minute');
            const hours = Math.floor(minute / 60);
            // 距离入住时间18点大于24小时的订单才能取消
            if (hours < 24 && res.pay_status == 1) {
                return;
            }
            // 锁定订单绑定的房屋
            await app.model.Room.findOne({
                where: {
                    id: res.roomid,
                },
                lock: transaction.LOCK.UPDATE,
            });
            // 修改房屋的状态
            await app.model.Room.update({ status: 1 }, { where: { id: res.roomid }, transaction });
            // 批量修改订餐订单的状态
            const foodOrder = await app.model.FoodOrders.findAll({
                where: {
                    room_order_id: res.order_id,
                },
                lock: transaction.LOCK.UPDATE,
            }, { transaction });
            const foodOrderUpdate = [];
            for (let i = 0; i < foodOrder.length; i++) {
                foodOrderUpdate.push({
                    id: foodOrder[i].id,
                    status: 3,
                });
            }
            await app.model.FoodOrders.bulkCreate(foodOrderUpdate, { updateOnDuplicate: ["status"], transaction });
            // 修改订单的状态并返回
            return await Order.update({ status: 3 }, { where: { id: query.id }, transaction });
        }
        return;
    };


    // 小程序查询订单详情
    Order.weappDetails = async ({ id, uid }) => {
        const res = await Order.findOne({
            where: { id, uid },
            include: [
                {
                    model: app.model.Room,
                    as: 'room',
                    attributes: ['id', 'name', 'room_type_id'],
                    include: [
                        {
                            model: app.model.HotelType,
                            as: 'type',
                            attributes: ['id', 'name', 'instructions', 'cancel_rules'],
                        },
                    ]
                },
            ]
        });
        if (res.pay_status == 0) {
            const pay_time = await app.getTackTime(res.id);
            res.dataValues.pay_time = pay_time || 0;
            return res;
        }
        return res;
    };

    // 小程序订单列表
    Order.weappFindAll = async (query) => {
        const res = await Order.findAll({
            where: query,
            order: [['createdAt', 'DESC']],
            include: [
                {
                    model: app.model.Room,
                    as: 'room',
                    attributes: ['id', 'name', 'room_type_id', 'status'],
                    include: [
                        {
                            model: app.model.HotelType,
                            as: 'type',
                            attributes: ['id', 'name', 'photo'],
                        },
                    ]
                },
            ]
        });
        if (res) {
            for (let i = 0; i < res.length; i++) {
                if (res[i].status == 2 && res[i].pay_status == 0) {
                    const pay_time = await app.getTackTime(res[i].id);
                    res[i].dataValues.pay_time = pay_time || 0;
                }
            }
            return res;
        }
        return;
    };

    // 一次查询多个订单信息,并返回总金额
    Order.weappGetMore = async (query) => {
        const ids = query.ids.split(',');
        let obj = {};
        let totalPrice = 0;
        const orderIds = [];
        for (let i = 0; i < ids.length; i++) {
            const res = await Order.findOne({
                where: {
                    id: ids[i],
                    uid: query.uid,
                },
                include: [
                    {
                        model: app.model.Room,
                        as: 'room',
                        attributes: ['id', 'name', 'room_type_id'],
                        include: [
                            {
                                model: app.model.HotelType,
                                as: 'type',
                                attributes: ['id', 'name', 'instructions', 'cancel_rules'],
                            },
                        ]
                    },
                ]
            });
            if (res) {
                obj = {
                    start_time: res.start_time,
                    end_time: res.end_time,
                    roomName: res.room.type.name,
                    instructions: res.room.type.instructions,
                    cancel_rules: res.room.type.cancel_rules,
                };
                orderIds.push(res.order_id);
                totalPrice += Number(res.price);
            }
        }
        obj.price = totalPrice;
        obj.order_id = orderIds.join('_');
        if (obj.price) {
            return obj;
        }
        return;
    };

    // 小程序支付成功后，通过订单编号查询总金额并返回订单id和总金额
    Order.weappGetMoreById = async (order_ids) => {
        const orders = order_ids.split('_');
        let totalPrice = 0;
        const orderIds = [];
        for (let i = 0; i < orders.length; i++) {
            const res = await Order.findOne({
                where: {
                    order_id: orders[i],
                },
            });
            if (res) {
                orderIds.push(res.id);
                totalPrice += Number(res.price);
            }
        }
        if (totalPrice) {
            return {
                ids: orderIds.join('_'),
                price: totalPrice,
            };
        }
        return;
    };

    // 小程序支付成功后，批量修改订单状态
    Order.weappUpdate = async ({ ids, pay_id, pay_money }) => {
        const transaction = await app.transaction();
        const order_ids = ids.split('_');
        // 批量锁定订单
        const lock = await Order.findAll({
            where: {
                id: {
                    [Op.or]: order_ids,
                }
            },
            lock: transaction.LOCK.UPDATE,
        }, { transaction });
        if (lock) {
            const params = [];
            for (let i = 0; i < order_ids.length; i++) {
                params.push({
                    id: order_ids[i],
                    pay_status: 1,
                    pay_id,
                    pay_money,
                });
            }
            // 批量修改订单
            return await Order.bulkCreate(params, { updateOnDuplicate: ["pay_status", 'pay_id', 'pay_money'], transaction });
        }
        return;
    };

    return Order;
};
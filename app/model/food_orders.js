'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
const { orderId } = require('../utils/tools');
const moment = require('moment');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = app => {
    const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

    const FoodOrders = app.model.define('food_orders', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: INTEGER
        },
        order_id: {
            allowNull: false,
            type: STRING,
            comment: '生成的订单id'
        },
        uid: {
            allowNull: false,
            type: STRING,
            comment: 'openid'
        },
        room_order_id: {
            allowNull: false,
            type: STRING,
            comment: '房间预定的订单编号'
        },
        eat_time: {
            allowNull: false,
            type: DATE,
            comment: '用餐时间'
        },
        status: {
            allowNull: false,
            type: INTEGER,
            defaultValue: 0,
            comment: '状态（0，已订餐，1，备餐中，2，已完成，3，取消订单）'
        },
        price: {
            allowNull: false,
            type: INTEGER,
            comment: '总金额'
        },
        food_ids: {
            allowNull: false,
            type: STRING,
            comment: '商品的ids，用于订单详情等'
        },
        eva_status: {
            allowNull: true,
            type: INTEGER,
            defaultValue: 0,
            comment: '评价状态（0，未评价，1，已评价）'
        },
        people: {
            allowNull: true,
            type: STRING,
            comment: '预定人'
        },
        phone: {
            allowNull: true,
            type: STRING,
            comment: '预定人电话'
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

    FoodOrders.associate = function () {
        FoodOrders.belongsToMany(app.model.Foods, {
            through: {
                model: app.model.FoodMids,
                unique: false,
            },
            foreignKey: 'order_id',
            constraints: false
        });
    }

    // 删除订单
    FoodOrders.deleteOrder = async (id) => {
        const transaction = await app.transaction();
        await FoodOrders.findOne({
            where: {
                id,
            },
            lock: transaction.LOCK.UPDATE,
        });

        await app.model.FoodMids.destroy({
            where: {
                order_id: id,
            }
        }, transaction);

        return FoodOrders.destroy({ where: { id } }, transaction);
    };

    // 下订单
    FoodOrders.weappCreate = async (query) => {
        const transaction = await app.transaction();
        // 校验订房订单号是否有效
        const roomOrder = await app.model.Order.findOne({
            where: {
                order_id: query.room_order_id,
                uid: query.uid,
            },
            lock: transaction.LOCK.UPDATE,
        });
        if (!roomOrder || roomOrder.pay_status == 0 || roomOrder.status == 3 || roomOrder.status == 4) {
            return;
        }
        // 校验订餐时间，点餐时间不能大于订房结束时间。 点餐时间不能小于订房开始时间
        if (query.eat_time > `${roomOrder.end_time} 14:00` || query.eat_time < `${roomOrder.start_time} 9:00`) {
            return;
        }
        if (!query.foods) {
            return;
        }
        query.order_id = orderId();
        let totalPrice = 0;
        const foodIds = query.ids.split(',');
        const contPrice = (id) => {
            for (let j = 0; j < query.foods.length; j++) {
                if (query.foods[j].id == id) {
                    totalPrice += Number(query.foods[j].price);
                }
            }
        };
        for (let i = 0; i < foodIds.length; i++) {
            contPrice(foodIds[i]);
        }
        query.price = totalPrice;
        query.food_ids = query.ids;
        const parmas = { ...query };
        delete parmas.foods;
        const res = await FoodOrders.create(parmas, { transaction });
        for (let i = 0; i < foodIds.length; i++) {
            await app.model.FoodMids.create({ order_id: res.id, food_id: foodIds[i] }, { transaction });
        }
        // 修改房间订单的额外消费值
        const priceExtras = totalPrice + Number(roomOrder.price_extras);
        await app.model.Order.update({ price_extras: priceExtras }, { where: { id: roomOrder.id }, transaction });

        if (res) {
            return {
                id: res.id,
                order_id: res.order_id,
                eat_time: moment(res.eat_time).format('YYYY-MM-DD H:mm'),
                price: res.price,
            }
        }
        return;
    };

    // 小程序取消订单
    FoodOrders.weappCancel = async (query) => {
        const transaction = await app.transaction();
        // 找到订单并锁定
        const res = await FoodOrders.findOne({
            where: {
                id: query.id,
                uid: query.uid,
            },
            lock: transaction.LOCK.UPDATE,
        });
        if (res && res.id && res.status == 0) {
            // 修改房间订单的额外消费值
            const roomOrder = await app.model.Order.findOne({
                where: {
                    order_id: res.room_order_id,
                    uid: query.uid,
                },
                lock: transaction.LOCK.UPDATE,
            });
            const priceExtras = Number(roomOrder.price_extras) - Number(res.price);
            await app.model.Order.update({ price_extras: priceExtras }, { where: { id: roomOrder.id }, transaction });
            // 修改订单的状态并返回
            return await FoodOrders.update({ status: 3 }, { where: { id: query.id }, transaction });
        }
        return;
    };

    // 评价
    FoodOrders.weappEval = async (query) => {
        const transaction = await app.transaction();
        console.log(query);
        // 找到对应的订单并锁定
        const res = await FoodOrders.findOne({
            where: {
                id: query.orderId,
                uid: query.uid,
            },
            lock: transaction.LOCK.UPDATE,
        });
        if (res && res.status == 2 && res.eva_status == 0) {
            const foodIds = res.food_ids.split(',');
            const ids = Array.from(new Set(foodIds));
            // 对比id，并创建评论
            for (let i = 0; i < ids.length; i++) {
                for (let j = 0; j < query.evals.length; j++) {
                    if (query.evals[j].id == ids[i]) {
                        await app.model.FoodEvaluates.create({
                            food_id: ids[i],
                            uid: query.uid,
                            good: query.evals[j].good,
                            name: query.evals[j].name,
                            content: query.evals[j].content || '默认评价',
                            createdAt: new Date(),
                            createdBy: query.evals[j].name,
                        }, { transaction });
                    }
                }
            }
            return await FoodOrders.update({ eva_status: 1 }, { where: { id: query.orderId }, transaction });
        }
        return;
    };

    return FoodOrders;
};
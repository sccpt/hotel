'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
const { getDays, getAverage } = require('../utils/tools');

module.exports = app => {
    const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

    const HotelType = app.model.define('tc_hotel_room_types', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: INTEGER
        },
        name: {
            allowNull: false,
            type: STRING,
            comment: '名称'
        },
        isTop: {
            allowNull: true,
            type: INTEGER,
            defaultValue: 0,
            comment: '首页推荐'
        },
        area: {
            allowNull: true,
            type: INTEGER,
            comment: '面积'
        },
        window: {
            allowNull: true,
            type: INTEGER,
            defaultValue: 1,
            comment: '窗户：0无，1有'
        },
        wifi: {
            allowNull: true,
            type: STRING,
            comment: '网络'
        },
        floor: {
            allowNull: true,
            type: STRING,
            comment: '楼层'
        },
        people_num: {
            allowNull: true,
            type: STRING,
            comment: '可住几人'
        },
        smoking: {
            allowNull: true,
            type: STRING,
            comment: '吸烟'
        },
        bed_type: {
            allowNull: true,
            type: STRING,
            comment: '床型'
        },
        meals: {
            allowNull: true,
            type: STRING,
            comment: '餐食'
        },
        photo: {
            allowNull: false,
            type: STRING,
            comment: '封面照片'
        },
        photo_s: {
            allowNull: false,
            type: TEXT,
            comment: '多图'
        },
        support: {
            allowNull: true,
            type: TEXT,
            comment: '便利设施'
        },
        bathroom: {
            allowNull: true,
            type: TEXT,
            comment: '浴室'
        },
        food: {
            allowNull: true,
            type: TEXT,
            comment: '食品饮料'
        },
        media: {
            allowNull: true,
            type: TEXT,
            comment: '媒体科技'
        },
        landscape: {
            allowNull: true,
            type: TEXT,
            comment: '室外景观'
        },
        facilities: {
            allowNull: true,
            type: TEXT,
            comment: '其它设施'
        },
        instructions: {
            allowNull: true,
            type: TEXT,
            comment: '预定须知'
        },
        cancel_rules: {
            allowNull: true,
            type: TEXT,
            comment: '取消规则'
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

    // HotelType.associate = function () {
    //     app.model.HotelType.belongsTo(app.model.WeeksPrice, { foreignKey: 'id', targetKey: 'typeId', as: 'week' });
    //     app.model.HotelType.belongsTo(app.model.DayPrice, { foreignKey: 'id', targetKey: 'typeId', as: 'day' });
    // }

    HotelType.roomTypeList = async ({ startTime, endTime }) => {
        const typeData = await HotelType.findAll();
        const arr = [];
        // 便利房型数据
        for (let i = 0; i < typeData.length; i++) {
            // 获取当前房型状态为空闲的房间数量
            const roomCount = await app.model.Room.count({
                where: {
                    room_type_id: typeData[i].id,
                    status: 1,
                },
            });
            // 如果空闲的房间数量不为0
            if (roomCount) {
                // 获取时间范围的所有时间
                const days = getDays(startTime, endTime);
                const priceArr = [];
                // 遍历所有时间，获取这个时间的价格
                for (let j = 0; j < days.length; j++) {
                    const dayPrice = await app.model.WeeksPrice.getRoomPrice(days[j], typeData[i].id);
                    if (dayPrice) {
                        priceArr.push(dayPrice);
                    }
                }
                const data = {
                    room: typeData[i],
                    price: getAverage(priceArr),
                };
                arr.push(data);
            }
        }
        return arr;
    };

    HotelType.roomTypeOrder = async ({ id, startTime, endTime }) => {
        // 用房型id去获取空闲房间的数量
        const roomCount = await app.model.Room.count({
            where: {
                room_type_id: id,
                status: 1,
            },
        });
        // 如果还有空闲的房间
        if (roomCount) {
            const priceArr = [];
            // 获取时间范围的所有时间
            const days = getDays(startTime, endTime);
            for (let i = 0; i < days.length; i++) {
                const dayPrice = await app.model.WeeksPrice.getRoomPrice(days[i], id);
                priceArr.push({
                    time: days[i],
                    price: dayPrice,
                });
            }
            const roomData = await HotelType.findByPk(id);
            return {
                room: roomData,
                price: priceArr,
            };
        }
        return;
    };


    return HotelType;
};
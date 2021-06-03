'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const moment = require('moment');

module.exports = app => {
    const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

    const WeeksPrice = app.model.define('tc_specialweeks', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: INTEGER
        },
        weeks: {
            allowNull: false,
            type: STRING,
            comment: '天（周一：1，周二：2，周三：3，周四：4，周五：5，周六：6，周日：7）'
        },
        price: {
            allowNull: false,
            type: STRING,
            comment: '价格'
        },
        breakfast: {
            allowNull: true,
            type: STRING,
            comment: '含早餐'
        },
        message: {
            allowNull: true,
            type: TEXT,
            comment: '价格说明'
        },
        typeId: {
            allowNull: false,
            type: INTEGER,
            comment: '房型'
        },
        status: {
            allowNull: true,
            type: INTEGER,
            defaultValue: 1,
            comment: '价格状态（1正常 0停用）'
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

    WeeksPrice.associate = function () {
        app.model.WeeksPrice.belongsTo(app.model.HotelType, { foreignKey: 'typeId', targetKey: 'id', as: 'roomType' });
    }

    WeeksPrice.getRoomPrice = async (time, typeId) => {
        const dayPrice = await app.model.DayPrice.findOne({
            where: {
                typeId,
                startdate: {
                    [Op.lte]: time,
                },
                enddate: {
                    [Op.gte]: time
                }
            }
        });

        if (dayPrice && dayPrice.price) {
            return dayPrice.price;
        }

        let weeks = 1;
        switch (moment(time).format('dddd')) {
            case '星期一':
                weeks = 1;
                break;
            case '星期二':
                weeks = 2;
                break;
            case '星期三':
                weeks = 3;
                break;
            case '星期四':
                weeks = 4;
                break;
            case '星期五':
                weeks = 5;
                break;
            case '星期六':
                weeks = 6;
                break;
            case '星期日':
                weeks = 7;
                break;
        };
        const weeksPrice = await WeeksPrice.findOne({
            where: {
                typeId,
                weeks,
            }
        });

        return weeksPrice.price;
    }

    return WeeksPrice;
};
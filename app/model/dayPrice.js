'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

module.exports = app => {
    const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

    const DayPrice = app.model.define('tc_specialdates', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: INTEGER
        },
        startdate: {
            allowNull: false,
            type: DATE,
            comment: '开始日期'
        },
        enddate: {
            allowNull: false,
            type: DATE,
            comment: '结束日期'
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

    DayPrice.associate = function () {
        app.model.DayPrice.belongsTo(app.model.HotelType, { foreignKey: 'typeId', targetKey: 'id', as: 'roomType' });
    }

    return DayPrice;
};
'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

module.exports = app => {
    const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

    const Floor = app.model.define('tc_hotel_floors', {
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
        orderNum: {
            allowNull: true,
            type: INTEGER,
            defaultValue: 1,
            comment: '排序'
        },
        status: {
            allowNull: true,
            type: INTEGER,
            defaultValue: 1,
            comment: '楼层状态：1使用中，0未开放'
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

    // Floor.associate = function () {
    //     app.model.Floor.hasMany(app.model.Room, { foreignKey: 'floor_id', targetKey: 'id', as: 'room' });
    // }

    return Floor;
};
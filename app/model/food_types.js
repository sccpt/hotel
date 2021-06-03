'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

module.exports = app => {
    const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

    const FoodTypes = app.model.define('food_types', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: INTEGER
        },
        title: {
            allowNull: false,
            type: STRING,
            comment: '名称'
        },
        orderNum: {
            allowNull: true,
            type: INTEGER,
            defaultValue: 0,
            comment: '显示排序'
        },
        remark: {
            allowNull: true,
            type: STRING,
            comment: 'openid'
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

    return FoodTypes;
};
'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

module.exports = app => {
    const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

    const FoodEvaluates = app.model.define('food_evaluates', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: INTEGER
        },
        food_id: {
            allowNull: false,
            type: INTEGER,
            comment: '商品id'
        },
        uid: {
            allowNull: false,
            type: STRING,
            comment: 'openid'
        },
        good: {
            allowNull: false,
            defaultValue: 1,
            type: INTEGER,
            comment: '好评（0，差评，1，好评）'
        },
        name: {
            allowNull: false,
            type: STRING,
            comment: '用户昵称'
        },
        content: {
            allowNull: false,
            type: STRING,
            comment: '内容'
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

    FoodEvaluates.associate = function () {
        FoodEvaluates.belongsTo(app.model.Foods, { foreignKey: 'food_id', targetKey: 'id', as: 'food', constraints: false });
    };

    return FoodEvaluates;
};
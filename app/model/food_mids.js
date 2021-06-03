'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

module.exports = app => {
    const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

    const FoodMids = app.model.define('food_mids', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: INTEGER
        },
        order_id: {
            allowNull: false,
            type: INTEGER,
            comment: '订单id'
        },
        food_id: {
            allowNull: false,
            type: INTEGER,
            comment: '商品id'
        },
    });

    return FoodMids;
};
'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-03-06
 */

module.exports = app => {
    const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

    const Foods = app.model.define('foods', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: INTEGER
        },
        type_id: {
            allowNull: false,
            type: INTEGER,
            comment: '类型'
        },
        title: {
            allowNull: false,
            type: STRING,
            comment: '标题'
        },
        content: {
            allowNull: false,
            type: TEXT,
            comment: '内容'
        },
        isTop: {
            allowNull: true,
            type: INTEGER,
            defaultValue: 0,
            comment: '推荐：0不，1是'
        },
        price: {
            allowNull: false,
            type: INTEGER,
            comment: '价格'
        },
        info: {
            allowNull: true,
            type: STRING,
            comment: '描述'
        },
        sales: {
            allowNull: true,
            type: INTEGER,
            comment: '销量'
        },
        photo: {
            allowNull: true,
            type: STRING,
            comment: '封面图片'
        },
        photos: {
            allowNull: true,
            type: STRING,
            comment: '更多图片'
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

    Foods.associate = function () {
        Foods.belongsToMany(app.model.FoodOrders, {
            through: {
                model: app.model.FoodMids,
                unique: false,
            },
            foreignKey: 'food_id',
            constraints: false
        });

        Foods.hasMany(app.model.FoodEvaluates, {
            foreignKey: 'food_id',
            sourceKey: 'id',
            as: 'eval',
            constraints: false
        });
    }

    return Foods;
};
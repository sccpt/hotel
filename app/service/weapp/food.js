'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
const Service = require('egg').Service;
const { Op } = require('sequelize');

class WeappFoodService extends Service {
    // 下单
    async create(query) {
        const { app, ctx } = this;
        const idArr = query.ids.split(',');
        const ids = Array.from(new Set(idArr));
        const foods = await this.findFood(ids);
        query.foods = foods;
        const res = await this.ctx.model.FoodOrders.weappCreate(query);
        if (res) {
            // 推送新订单消息
            await ctx.service[app.config.public].admin.system.notice.send('new_food', {
                title: '订餐信息',
                content: `有客户订了“${res.eat_time}”的餐，请注意备餐！`,
                createdAt: query.createdAt,
            });
        }
        return res;
    }

    // 获取详情
    async findByPk(id) {
        const { app } = this;
        return await this.ctx.model.Foods.findOne({
            where: { id },
            include: [{
                model: app.model.FoodEvaluates,
                as: 'eval',
                attributes: ['id', 'food_id', 'good', 'name', 'content', 'createdAt'],
            }]
        });
    }

    // 查找指定商品
    async findFood(ids) {
        return await this.ctx.model.Foods.findAll({
            where: {
                id: {
                    [Op.or]: ids,
                }
            }
        });
    }

    // 查询订单
    async findOrder(query) {
        const where = {
            uid: query.uid,
        };
        if (query.status) {
            where.status = query.status;
        }
        return await this.ctx.model.FoodOrders.findAll({
            where,
            order: [['createdAt', 'DESC']],
            include: [{
                model: this.app.model.Foods,
                attributes: ['id', 'title', 'price', 'photo'],
            }]
        });
    }

    // 取消订单
    async cancel(query) {
        const { app, ctx } = this;
        const res = await ctx.model.FoodOrders.weappCancel(query);
        if (res) {
            // 推送消息
            if (query.eat_time) {
                await ctx.service[app.config.public].admin.system.notice.send('cancel_food', {
                    title: '取消订餐',
                    content: `有客户取消了“${query.eat_time}”的餐，请注意！`,
                    createdAt: new Date(),
                });
            }
        }
        return res;
    }

    // 订单详情
    async orderDetails(where) {
        return await this.ctx.model.FoodOrders.findOne({
            where,
            include: [{
                model: this.app.model.Foods,
                attributes: ['id', 'title', 'price', 'photo'],
            }]
        });
    }

    // 创建评论
    async evalCreate(query) {
        return await this.ctx.model.FoodOrders.weappEval(query);
    }

    // 我的评论
    async evalShow(uid) {
        return await this.ctx.model.FoodEvaluates.findAll({
            where: {
                uid,
            },
            include: [{
                model: this.app.model.Foods,
                attributes: ['id', 'title', 'price', 'photo'],
                as: 'food',
            }]
        });
    }

}

module.exports = WeappFoodService;
'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const Service = require('egg').Service;

class WeappOrderService extends Service {

    // 新增
    async create(query) {
        const { app, ctx } = this;
        const res = await this.ctx.model.Order.weappCreate(query);
        if (res) {
            // 超过30分钟自动取消订单
            app.addDelayTask('cancelOrder', res.id, {}, 1800);

            // 推送新订单消息
            const roomData = await app.model.Room.findByPk(res.roomid);
            await ctx.service[app.config.public].admin.system.notice.send('new_order', {
                title: '新订单',
                content: `房间号：${roomData.name}，入住时间：${res.start_time}`,
                createdAt: query.createdAt,
                createdBy: query.createdBy,
            });
        }
        return res;
    }

    // 取消
    async cancel(query) {
        const { app, ctx } = this;
        const res = await ctx.model.Order.weappCancel(query);
        if (res) {
            // 推送消息
            if (query.room) {
                await ctx.service[app.config.public].admin.system.notice.send('cancel_order', {
                    title: '取消订单',
                    content: `房间号：${query.room}已被取消预定`,
                    createdAt: new Date(),
                });
            } else {
                await ctx.service[app.config.public].admin.system.notice.send('cancel_order', {
                    title: '取消订单',
                    content: `订单号：${query.order_id}过期支付，系统自动取消`,
                    createdAt: new Date(),
                });
            }
            ctx.service.weapp.pay.refund(query.id);
        }
        return res;
    }

    // 详情
    async details(query) {
        return await this.ctx.model.Order.weappDetails(query);
    }

    // 列表
    async findList(query) {
        return await this.ctx.model.Order.weappFindAll(query);
    }

    // 一次查询多个订单信息
    async getMore(query) {
        return await this.ctx.model.Order.weappGetMore(query);
    }

    // 我的首页-订单统计
    async statistics(uid) {
        const { app } = this;
        const room = await this.ctx.model.Order.count({
            where: {
                uid,
            },
        });
        const food = await this.ctx.model.FoodOrders.count({
            where: {
                uid,
            },
        });
        return { room, food };
    }
}

module.exports = WeappOrderService;
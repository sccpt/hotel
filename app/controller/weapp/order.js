'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
const Controller = require('egg').Controller;
const { toJson } = require('../../utils/tools');

class WeappOrderController extends Controller {

    // 新增
    /* 
     参数： typeId, uid, start_time, end_time, order_id, price, people, people_mobile,content, status:2, pay_status
    */
    async create() {
        const { ctx, service } = this;
        let validateResult = await ctx.checkValidate(ctx.request.body, 'weapp' + '.create');
        if (!validateResult) return;
        let query = ctx.request.body;
        query.createdAt = new Date();
        query.uid = query.openid;

        query.from_type = 3;
        query.typeId = ctx.helper.parseInt(query.typeId);
        query.status = 2;
        query.pay_status = 0;
        // 处理一次订多个房间
        const { roomNum } = query;
        const arr = [];
        for (let i = 0; i < roomNum; i++) {
            const result = await service.weapp.order.create(query);
            if (result) {
                const transaction = await ctx.app.getTransaction();
                if (transaction) {
                    transaction.commit();
                    ctx.app.deleteTransaction();
                }
                arr.push(toJson(result));
            } else {
                const transaction = await ctx.app.getTransaction();
                if (transaction) {
                    transaction.rollback();
                    ctx.app.deleteTransaction();
                }
            }
        }
        const result = {};
        let ids = '';
        for (let j = 0; j < arr.length; j++) {
            ids += `${arr[j].id},`
        }
        result.ids = ids;
        result.succes = arr.length;
        // const result = await service.weapp.order.create(query);
        if (result.ids) {
            ctx.returnBody(result, 100020);
        } else {
            ctx.returnBody('订单创建失败', 0);
        }
    }

    // 查询订单
    async index() {
        const { ctx, service } = this;
        // 查询参数
        const query = {
            uid: ctx.request.body.openid,
        };
        if (ctx.query.status) {
            query.status = ctx.query.status;
        }
        if (ctx.query.pay_status) {
            query.pay_status = ctx.query.pay_status;
        }
        //const result = await service[this.app.config.public].admin.hotel.order.findList(query);
        const result = await service.weapp.order.findList(query);
        ctx.returnBody(result, 100010);
    }

    // 取消订单
    async cancel() {
        const { ctx, service } = this;
        let validateResult = await ctx.checkValidate(ctx.request.body, 'weapp' + '.cancel');
        if (!validateResult) return;
        const query = ctx.request.body;
        query.updatedAt = new Date();
        query.uid = query.openid;
        query.id = ctx.helper.parseInt(query.id);
        const result = await service.weapp.order.cancel(query);
        if (result) {
            ctx.returnBody(null, 100030);
        } else {
            ctx.returnBody(null, 100031, 500);
        }
    }

    // 查询订单详情
    async show() {
        const { ctx, service } = this;
        let validateResult = await ctx.checkValidate(ctx.params, 'base.show')
        if (!validateResult) return
        const uid = ctx.request.body.openid;
        const id = ctx.helper.parseInt(ctx.params.id);
        const query = { uid, id };
        const result = await service.weapp.order.details(query);
        ctx.returnBody(result, 100010);
    }

    // 一次查询多个订单信息,可传入逗号隔开的多个id查询 或_隔开的多个orderid查询
    async getMore() {
        const { ctx, service } = this;
        const uid = ctx.request.body.openid;
        const query = { uid, ids: ctx.request.body.ids, orders: ctx.request.body.orders };
        const result = await service.weapp.order.getMore(query);
        ctx.returnBody(result, 100010);
    }

    // 我的首页-订单统计
    async statistics() {
        const { ctx, service } = this;
        const uid = ctx.request.body.openid;
        const result = await service.weapp.order.statistics(uid);
        ctx.returnBody(result, 100010);
    }

}

module.exports = WeappOrderController;
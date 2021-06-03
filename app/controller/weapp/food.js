'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
const { Controller } = require('egg');

class FoodsController extends Controller {
    // 获取所有商品
    async getList() {
        const { ctx, service } = this;
        const query = {
            offset: 1,
            limit: 100,
        };
        if (ctx.query.type_id) {
            query.type_id = ctx.query.type_id;
        }
        const result = await service[this.app.config.public].admin.food.foods.findList(query, [['sales', 'DESC']]);
        ctx.returnBody(result, 100010);
    }

    // 获取分类
    async getType() {
        const { ctx, service } = this;
        const query = {
            offset: 1,
            limit: 100,
        };
        const result = await service[this.app.config.public].admin.food.types.findList(query);
        ctx.returnBody(result, 100010);
    }

    // 获取商品详情
    async getDetails() {
        const { ctx, service } = this;
        let validateResult = await ctx.checkValidate(ctx.params, 'base.show')
        if (!validateResult) return;
        const result = await service.weapp.food.findByPk(ctx.params.id);
        ctx.returnBody(result, 100010);
    }

    // 获取指定的商品
    async getFood() {
        const { ctx, service } = this;
        const idArr = ctx.query.ids.split(',');
        const ids = Array.from(new Set(idArr));
        const result = await service.weapp.food.findFood(ids);
        ctx.returnBody(result, 100010);
    }

    // 下订单
    async create() {
        const { ctx, service } = this;
        let validateResult = await ctx.checkValidate(ctx.request.body, 'weapp' + '.food');
        if (!validateResult) return;
        let query = ctx.request.body;
        query.createdAt = new Date();
        query.uid = query.openid;
        query.status = 0;
        const result = await service.weapp.food.create(query);
        if (result) {
            ctx.returnBody(result, 100020);
        } else {
            ctx.returnBody('订单创建失败', 0);
        }
    }

    // 获取订单信息
    async getOrder() {
        const { ctx, service } = this;
        // 查询参数
        const query = {
            uid: ctx.request.body.openid,
        };
        if (ctx.query.status) {
            query.status = ctx.query.status;
        }
        const result = await service.weapp.food.findOrder(query);
        ctx.returnBody(result, 100010);
    }

    // 取消订单
    async cancel() {
        const { ctx, service } = this;
        let validateResult = await ctx.checkValidate(ctx.request.body, 'weapp' + '.cancelFood');
        if (!validateResult) return;
        const query = ctx.request.body;
        query.updatedAt = new Date();
        query.uid = query.openid;
        query.id = ctx.helper.parseInt(query.id);
        const result = await service.weapp.food.cancel(query);
        if (result) {
            ctx.returnBody(null, 100030);
        } else {
            ctx.returnBody(null, 100031, 500);
        }
    }

    // 查询订单详情
    async orderShow() {
        const { ctx, service } = this;
        let validateResult = await ctx.checkValidate(ctx.params, 'base.show')
        if (!validateResult) return;
        const uid = ctx.request.body.openid;
        const id = ctx.helper.parseInt(ctx.params.id);
        const query = { uid, id };
        const result = await service.weapp.food.orderDetails(query);
        ctx.returnBody(result, 100010);
    }

    // 创建评论
    async evalCreate() {
        const { ctx, service } = this;
        let validateResult = await ctx.checkValidate(ctx.request.body, 'weapp' + '.eval');
        if (!validateResult) return;
        const query = ctx.request.body;
        query.uid = query.openid;
        query.orderId = ctx.helper.parseInt(query.orderId);
        const result = await service.weapp.food.evalCreate(query);
        if (result) {
            ctx.returnBody('评论成功', 100020);
        } else {
            ctx.returnBody('评论失败', 0);
        }
    }

    // 我的评论
    async evalShow() {
        const { ctx, service } = this;
        const uid = ctx.request.body.openid;
        const result = await service.weapp.food.evalShow(uid);
        ctx.returnBody(result, 100010);
    }

}

module.exports = FoodsController;
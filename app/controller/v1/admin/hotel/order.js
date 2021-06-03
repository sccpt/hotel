'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
const BaseController = require('../../base');
const { orderId } = require('../../../../utils/tools');

class Controller extends BaseController {
    constructor(...arg) {
        super(...arg);
        this.serviceName = 'order';
        this.modleName = 'hotel';
    }

    // 查询
    async index() {
        const { ctx, service } = this;
        // 查询参数
        const query = {
            limit: ctx.helper.parseInt(ctx.query.pageSize),
            offset: ctx.helper.parseInt(ctx.query.pageNum),
            people: ctx.query.people,
            people_mobile: ctx.query.people_mobile,
            status: ctx.query.status,
        };
        const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findList(query);
        ctx.returnBody(result, 100010);
    }

    // 新增
    async create() {
        const { ctx, service } = this;
        let validateResult = await ctx.checkValidate(ctx.request.body, this.serviceName + '.create')
        if (!validateResult) return;
        const order_id = orderId();
        let query = ctx.request.body;
        query.createdAt = new Date();
        query.createdBy = ctx.state.user.userName;
        query.order_id = order_id;
        if (query.status == 1) {
            query.roomStatus = 3;
        } else if (query.status == 2) {
            query.roomStatus = 2;
        } else if (query.status == 3) {
            query.roomStatus = 1;
        } else if (query.status == 4) {
            query.roomStatus = 1;
        }
        const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].create(query);
        if (result) {
            ctx.returnBody(null, 100020);
        } else {
            ctx.returnBody(null, 0);
        }
    }

    // 修改
    async update() {
        const { ctx, service } = this;
        let validateResult = await ctx.checkValidate(ctx.request.body, this.serviceName + '.update');
        if (!validateResult) return;
        let query = ctx.request.body;
        query.updatedAt = new Date();
        query.updatedBy = ctx.state.user.userName;
        const id = this.ctx.helper.parseInt(ctx.params.id);
        if (query.status == 1) {
            query.roomStatus = 3;
        } else if (query.status == 2) {
            query.roomStatus = 2;
        } else if (query.status == 3) {
            query.roomStatus = 1;
        } else if (query.status == 4) {
            query.roomStatus = 1;
        }

        const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].update(query, { id });

        if (result) {
            ctx.returnBody(null, 100030);
        } else {
            ctx.returnBody(null, 0);
        }
    }

    // 删除
    async destroy() {
        const { ctx, service } = this;
        let validateResult = await ctx.checkValidate(ctx.params, 'base.destroy')
        if (!validateResult) return
        const query = ctx.request.body;
        query.id = ctx.params.id;
        const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].destroy(query);
        if (result) {
            ctx.returnBody(null, 100040);
        } else {
            ctx.returnBody(null, 100041, 500);
        }
    }
}

module.exports = Controller;
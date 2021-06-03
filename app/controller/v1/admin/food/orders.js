'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
const BaseController = require('../../base');

class Controller extends BaseController {
    constructor(...arg) {
        super(...arg);
        this.serviceName = 'orders';
        this.modleName = 'food';
    }

    // 查询
    async index() {
        const { ctx, service } = this;
        // 查询参数
        const query = {
            limit: ctx.helper.parseInt(ctx.query.pageSize),
            offset: ctx.helper.parseInt(ctx.query.pageNum),
        };
        if (ctx.query.room_order_id) {
            query.room_order_id = ctx.query.room_order_id;
        }
        if (ctx.query.eat_time) {
            query.eat_time = ctx.query.eat_time;
        }
        if (ctx.query.status) {
            query.status = ctx.query.status;
        }
        const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findList(query);
        ctx.returnBody(result, 100010);
    }

    // 删除
    async destroy() {
        const { ctx, service } = this;
        let validateResult = await ctx.checkValidate(ctx.params, 'base.destroy')
        if (!validateResult) return;
        const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].destroy(ctx.params.id);

        if (result) {
            ctx.returnBody(null, 100040);
        } else {
            ctx.returnBody(null, 100041, 500);
        }
    }
}

module.exports = Controller;
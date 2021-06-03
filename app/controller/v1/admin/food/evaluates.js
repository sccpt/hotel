'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
const BaseController = require('../../base');

class Controller extends BaseController {
    constructor(...arg) {
        super(...arg);
        this.serviceName = 'evaluates';
        this.modleName = 'food';
    }

    // 查询
    async index() {
        const { ctx, service } = this;
        // 查询参数
        const query = {
            limit: ctx.helper.parseInt(ctx.query.pageSize),
            offset: ctx.helper.parseInt(ctx.query.pageNum),
            good: ctx.query.good,
        };
        const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findList(query);
        ctx.returnBody(result, 100010);
    }
}

module.exports = Controller;
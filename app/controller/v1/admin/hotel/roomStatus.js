'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
const Controller = require('egg').Controller;

class BaseController extends Controller {
    
    async getStatus() {
        const { ctx, service } = this;
        const query = {
            status: ctx.query.status,
        };
        const result = await service[this.app.config.public].admin.hotel.room.findStatus(query);
        ctx.returnBody(result, 100010);
    }
}

module.exports = BaseController;
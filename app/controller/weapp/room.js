'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const { Controller } = require('egg');

class RoomController extends Controller {
    async getList() {
        const { ctx, service } = this;
        const query = {
            startTime: ctx.query.startTime,
            endTime: ctx.query.endTime,
        };
        const result = await service.weapp.roomType.findRoomType(query);
        ctx.returnBody(result, 100010);
    }

    async show() {
        const { ctx, service } = this;
        let validateResult = await ctx.checkValidate(ctx.params, 'base.show');
        if (!validateResult) return;
        let id = ctx.helper.parseInt(ctx.params.id)
        const result = await service[this.app.config.public].admin.hotel.hotelType.findByPk(id);
        ctx.returnBody(result, 100010);
    }

    async getTypeOrder() {
        const { ctx, service } = this;
        const query = {
            startTime: ctx.query.startTime,
            endTime: ctx.query.endTime,
            id: ctx.helper.parseInt(ctx.query.id)
        };
        const result = await service.weapp.roomType.roomTypeOrder(query);
        if (result) {
            ctx.returnBody(result, 100010);
        } else {
            ctx.returnBody('房间都被预定满了', 0);
        }
    }
}

module.exports = RoomController;
'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const Service = require('egg').Service;

class WeappRoomType extends Service {
    async findRoomType(query) {
        return await this.ctx.model.HotelType.roomTypeList(query);
    }

    async roomTypeOrder(query) {
        return await this.ctx.model.HotelType.roomTypeOrder(query);
    }
}

module.exports = WeappRoomType;
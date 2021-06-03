'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
const Controller = require('egg').Controller;
const { toJson } = require('../../utils/tools');
const moment = require('moment');

class GetRoomController extends Controller {
    async getDayPrice(typeId) {
        const { ctx, service } = this;
        const query = {
            limit: 1,
            offset: 1,
            startTime: moment().format('YYYY-MM-DD'),
            endTime: moment().format('YYYY-MM-DD'),
            typeId,
        };
        const dayPrice = await service[this.app.config.public].admin.hotel.dayPrice.findList(query);
        const dayJson = toJson(dayPrice);
        return dayJson;
    }

    async getWeeks(typeId) {
        const { ctx, service } = this;
        let weeks = 1;
        switch (moment().format('dddd')) {
            case '星期一':
                weeks = 1;
                break;
            case '星期二':
                weeks = 2;
                break;
            case '星期三':
                weeks = 3;
                break;
            case '星期四':
                weeks = 4;
                break;
            case '星期五':
                weeks = 5;
                break;
            case '星期六':
                weeks = 6;
                break;
            case '星期日':
                weeks = 7;
                break;
        }
        const weekQuery = {
            limit: 1,
            offset: 1,
            typeId,
            weeks,
        };
        const weeksPrice = await service[this.app.config.public].admin.hotel.weeksPrice.findList(weekQuery);
        const weeksJson = toJson(weeksPrice);
        return weeksJson;
    }

    async getRooms(params) {
        const { ctx, service } = this;
        const rooms = await service.page.room.findList(params);
        const roomJson = toJson(rooms);
        for (let i = 0; i < roomJson.rows.length; i++) {
            const dayJson = await this.getDayPrice(roomJson.rows[i].id);
            if (dayJson.count) {
                roomJson.rows[i].price = dayJson.rows[0].price;
            } else {
                const weeksJson = await this.getWeeks(roomJson.rows[i].id);
                if (weeksJson.count) {
                    roomJson.rows[i].price = weeksJson.rows[0].price;
                }
            }
        }
        return roomJson;
    }
}

module.exports = GetRoomController;
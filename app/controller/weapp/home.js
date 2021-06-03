'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
const GetRoomController = require("../page/getRoom");
const { toJson } = require('../../utils/tools');

class HomeController extends GetRoomController {

    async getArticle(type, limit) {
        const { ctx, service } = this;
        const data = await service.page.article.findList({
            limit,
            offset: 1,
            type,
        });

        const json = toJson(data);
        return json;
    }

    async index() {
        const { ctx } = this;
        const rooms = await this.getRooms({
            limit: 10,
            offset: 1,
        });
        const banner = await this.getArticle('banner', 6);
        ctx.returnBody({
            banner: banner.rows,
            rooms: rooms.rows,
        }, 100010);
    }

}

module.exports = HomeController;
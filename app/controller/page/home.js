const GetRoomController = require("./getRoom");
const { toJson, changeData } = require('../../utils/tools');

class HomeController extends GetRoomController {

    async getArticle(type, limit) {
        const { ctx, service } = this;
        const data = await service.page.article.findList({
            limit,
            offset: 1,
            type,
            isTop: 1,
        });

        const json = toJson(data);
        return json;
    }

    async getDataForIndexPage() {
        const { ctx } = this;
        const rooms = await this.getRooms({
            limit: 2,
            offset: 1,
            isTop: 1,
        });
        const news = await this.getArticle('news', 3);
        const photo = await this.getArticle('photo', 6);
        const food = await this.getArticle('food', 3);
        const data = {
            rooms: rooms.rows,
            news: changeData(news.rows, 30, 70),
            photo: changeData(photo.rows, 20, 10),
            food: changeData(food.rows, 16, 70),
            title: '首页',
        };
        await ctx.render('index.html', data);
    }
}

module.exports = HomeController;
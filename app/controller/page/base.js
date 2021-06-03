'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
const GetRoomController = require('./getRoom');
const { toJson, changeData } = require('../../utils/tools');
const moment = require('moment');

class BaseController extends GetRoomController {

    async index() {
        const { ctx, service } = this;
        const limit = this.typeName === 'photo' ? 12 : 3;
        // 查询参数
        const query = {
            limit,
            type: this.typeName,
            offset: ctx.helper.parseInt(ctx.params.id || 1)
        };
        const result = await service.page.article.findList(query);
        const rooms = toJson(await this.getRooms({
            limit: 4,
            offset: 1,
        }));
        const datas = toJson(result);
        const pages = [];
        if (ctx.params.id == undefined || ctx.params.id == 1) {
            pages.push({
                url: '#'
            });
        } else {
            pages.push({
                url: `/${this.typeName}/list/${ctx.params.id - 1}.html`
            });
        }
        const totalPage = Math.ceil(datas.count / limit);
        for (let i = 0; i < totalPage; i++) {
            if (ctx.params.id == undefined || (i + 1) == ctx.params.id) {
                pages.push({
                    num: i + 1,
                    url: `/${this.typeName}/list/${i + 1}.html`,
                    active: 1
                });
            } else {
                pages.push({
                    num: i + 1,
                    url: `/${this.typeName}/list/${i + 1}.html`
                });
            }
        }
        if (ctx.params.id < totalPage) {
            pages.push({
                url: `/${this.typeName}/list/${ctx.params.id + 1}.html`
            });
        } else {
            pages.push({
                url: '#'
            });
        }
        let title = '';
        switch (this.typeName) {
            case 'food':
                title = '美食商品';
                break;
            case 'news':
                title = '促销动态';
                break;
            case 'photo':
                title = '照片图库';
                break;
            case 'hotel':
                title = '酒店信息';
                break;
        }

        const data = {
            title: `${title}-第${ctx.params.id || 1}页`,
            typeName: this.typeName,
            rows: changeData(datas.rows || [], 40, 220, this.typeName),
            pages,
            rooms: rooms.rows || [],
        };

        if (this.typeName === 'photo') {
            await ctx.render('pic.html', data);
        } else {
            await ctx.render('list.html', data);
        }
    }

    // 查询单个
    async show() {
        const { ctx, service } = this;
        let validateResult = await ctx.checkValidate(ctx.params, 'base.show');
        if (!validateResult) return;
        let id = ctx.helper.parseInt(ctx.params.id);
        const result = await service.page.article.findByPk(id);
        const rooms = toJson(await this.getRooms({
            limit: 4,
            offset: 1,
        }));
        const datas = toJson(result);
        if (datas.photos) {
            datas.photos = datas.photos.split(',');
        }
        const data = {
            ...datas,
            typeName: this.typeName,
            rooms: rooms.rows || [],
        };
        if (this.typeName === 'photo') {
            await ctx.render('pic_details.html', data);
        } else {
            await ctx.render('details.html', data);
        }
    }
}

module.exports = BaseController;
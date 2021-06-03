'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
const GetRoomController = require('./getRoom');
const { toJson } = require('../../utils/tools');

class BaseController extends GetRoomController {
    constructor(...arg) {
        super(...arg)
        this.typeName = 'room'
    }

    async index() {
        const { ctx, service } = this;
        // 查询参数
        const query = {
            limit: 4,
            offset: ctx.helper.parseInt(ctx.params.id || 1)
        };
        const result = toJson(await this.getRooms(query));
        const datas = toJson(result);
        const pages = [];
        if (ctx.params.id == undefined || ctx.params.id == 1) {
            pages.push({
                url: '#'
            });
        } else {
            pages.push({
                url: `/${this.typeName}/list/${ctx.params.id - 1}`
            });
        }
        const totalPage = Math.ceil(datas.count / 4);
        for (let i = 0; i < totalPage; i++) {
            if (ctx.params.id == undefined || (i + 1) == ctx.params.id) {
                pages.push({
                    num: i + 1,
                    url: `/${this.typeName}/list/${i + 1}`,
                    active: 1
                });
            } else {
                pages.push({
                    num: i + 1,
                    url: `/${this.typeName}/list/${i + 1}`
                });
            }
        }
        if (ctx.params.id < totalPage) {
            pages.push({
                url: `/${this.typeName}/list/${ctx.params.id + 1}`
            });
        } else {
            pages.push({
                url: '#'
            });
        }
        const data = {
            title: `房型列表-第${ctx.params.id || 1}页`,
            typeName: this.typeName,
            rows: datas.rows,
            pages,
        };

        await ctx.render('room.html', data);
    }

    // 查询单个
    async show() {
        const { ctx, service } = this;
        let validateResult = await ctx.checkValidate(ctx.params, 'base.show');
        if (!validateResult) return;
        let id = ctx.helper.parseInt(ctx.params.id);
        const result = await service.page.room.findByPk(id);
        const rooms = toJson(await this.getRooms({
            limit: 3,
            offset: 1,
        }));
        const datas = toJson(result);
        if (datas.photo_s) {
            datas.photos = datas.photo_s.split(',');
        }
        const data = {
            ...datas,
            title: datas.name,
            typeName: this.typeName,
            rooms: rooms.rows || [],
        };
        await ctx.render('room_details.html', data);
    }
}

module.exports = BaseController;
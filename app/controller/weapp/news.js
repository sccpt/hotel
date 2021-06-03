'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const { Controller } = require('egg');

class NewsController extends Controller {
    // 获取列表
    async getList() {
        const { ctx, service } = this;
        // 查询参数
        const query = {
            limit: ctx.helper.parseInt(ctx.query.pageSize),
            offset: ctx.helper.parseInt(ctx.query.pageNum),
            type: 'news',
        };
        const result = await service[this.app.config.public].admin.blog.article.findList(query);
        ctx.returnBody(result, 100010);
    }

    // 查询单个
    async getDetails() {
        const { ctx, service } = this;
        let validateResult = await ctx.checkValidate(ctx.params, 'base.show')
        if (!validateResult) return
        let id = ctx.helper.parseInt(ctx.params.id)
        const result = await service[this.app.config.public].admin.blog.article.findByPk(id);
        ctx.returnBody(result, 100010);
    }
}

module.exports = NewsController;
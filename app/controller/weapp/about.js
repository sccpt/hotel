'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const { Controller } = require('egg');

class AboutController extends Controller {
    async get() {
        const { ctx, service } = this;
        const contact = await service[this.app.config.public].admin.blog.article.findByPk(10);
        const about = await service[this.app.config.public].admin.blog.article.findByPk(9);

        ctx.returnBody({
            contact,
            about,
        }, 100010);
    }
}

module.exports = AboutController;
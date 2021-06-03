'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
// app/controller/users.js
const BaseController = require("../../base");


class Controller extends BaseController {
  constructor(...arg) {
    super(...arg)
    this.serviceName = 'article'
    this.modleName = 'blog'
  }
  // 查询
  async getArticle() {
    const {ctx, service} = this;
    // 查询参数
    const query = {
      limit: ctx.helper.parseInt(ctx.query.pageSize),
      offset: ctx.helper.parseInt(ctx.query.pageNum),
      userId: ctx.query.userId,
      title: ctx.query.title,
      type: ctx.query.type
    };
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findList(query);
    ctx.returnBody(result, 100010);
  }

  // 根据id查询
  async getArticleById() {
    const {ctx, service} = this;
    let id = ctx.helper.parseInt(ctx.params.id)
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findByPk(id);
    ctx.returnBody(result, 100010);
  }
}

module.exports = Controller;
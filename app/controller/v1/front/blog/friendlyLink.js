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
    this.serviceName = 'friendlyLink'
    this.modleName = 'blog'
  }

  // 查询
  async getAllLink() {
    const {ctx, service} = this;
    // 查询参数
    const query = {
      userId: ctx.query.userId
    };
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findAll(query);
    ctx.returnBody(result, 100010);
  }
}

module.exports = Controller;
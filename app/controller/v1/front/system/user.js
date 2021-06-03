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
    this.serviceName = 'user'
    this.modleName = 'system'
  }
  // 查询用户信息
  async getInfo () {
    const { ctx, service } = this;
    let userId = ctx.helper.parseInt(ctx.query.userId)
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findOne(userId);
    ctx.returnBody(result, 100010);
  }
}

module.exports = Controller;
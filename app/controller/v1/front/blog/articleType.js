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
    this.serviceName = 'articleType'
    this.modleName = 'blog'
  }
  async getAllType () {
    const {ctx, service} = this;
    const query = {
      userId: ctx.query.userId
    };
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findAll(query);
    ctx.returnBody(result, 100010);
  }
}

module.exports = Controller;
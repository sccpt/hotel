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
    this.serviceName = 'menu'
    this.modleName = 'system'
  }
  // 查询
  async index() {
    const {ctx, service} = this;
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findAllMenu();
    ctx.returnBody(result, 100010);
  }
  
  // 查询用户菜单
  async userMenu() {
    const {ctx, service} = this;
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findByUser();
    ctx.returnBody(result, 100010);
  }
}

module.exports = Controller;
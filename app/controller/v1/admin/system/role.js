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
    this.serviceName = 'role'
    this.modleName = 'system'
  }

  // 查询
  async index() {
    const {ctx, service} = this;
    console.log(ctx.state.user.createdBy, 111111111111111111111)
    // 查询参数
    const query = {
      limit: ctx.helper.parseInt(ctx.query.pageSize),
      offset: ctx.helper.parseInt(ctx.query.pageNum),
      roleName: ctx.query.roleName,
      status: ctx.query.status,
      createdBy: ctx.state.user.id === 1 ? null : ctx.state.user.userName
    };
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findList(query, [['roleSort', 'ASC']]);
    ctx.returnBody(result, 100010);
  }

  // 修改角色状态
  async changeRoleStatus () {
    const {ctx, service} = this;
    // 查询参数
    const query = {
      status: ctx.request.body.status
    };
    const id = this.ctx.helper.parseInt(ctx.request.body.id);
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].updateStatus(query, {
      id
    });
    if (result) {
      ctx.returnBody(null, 100030);
    } else {
      ctx.returnBody(null, 100031, 500);
    }
  }

  // 查询单个
  async show() {
    const {ctx, service} = this;
    let validateResult = await ctx.checkValidate(ctx.params, 'base.show')
    if (!validateResult) return
    let id = ctx.helper.parseInt(ctx.params.id)
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findOne(id);
    ctx.returnBody(result, 100010);
  }
}

module.exports = Controller;
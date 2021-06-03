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
    this.serviceName = 'department'
    this.modleName = 'system'
  }

  // 查询单个
  async index() {
    const {ctx, service} = this;
    // 查询参数
    const query = {
      limit: ctx.helper.parseInt(ctx.query.pageSize),
      offset: ctx.helper.parseInt(ctx.query.pageNum)
    };
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findList(query, [['orderNum', 'ASC']]);
    ctx.returnBody(result, 100010);
  }

  // 修改
  async update() {
    const {ctx, service} = this;
    let validateResult = await ctx.checkValidate(ctx.request.body, this.serviceName + '.update')
    if (!validateResult) return
    let query = ctx.request.body
    const id = this.ctx.helper.parseInt(ctx.params.id);
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].update(query, {
      deptId: id
    });
    if (result) {
      ctx.returnBody(null, 100030);
    } else {
      ctx.returnBody(null, 100031, 500);
    }
  }
}

module.exports = Controller;
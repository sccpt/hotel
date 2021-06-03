'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
const Controller = require('egg').Controller;

class BaseController extends Controller {
  // 查询
  async index() {
    const {ctx, service} = this;
    // 查询参数
    const query = {
      limit: ctx.helper.parseInt(ctx.query.pageSize),
      offset: ctx.helper.parseInt(ctx.query.pageNum)
    };
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findList(query);
    ctx.returnBody(result, 100010);
  }

  // 查询单个
  async show() {
    const {ctx, service} = this;
    let validateResult = await ctx.checkValidate(ctx.params, 'base.show')
    if (!validateResult) return
    let id = ctx.helper.parseInt(ctx.params.id)
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findByPk(id);
    ctx.returnBody(result, 100010);
  }

  // 新增
  async create() {
    const {ctx, service} = this;
    let validateResult = await ctx.checkValidate(ctx.request.body, this.serviceName + '.create')
    if (!validateResult) return
    let query = ctx.request.body
    query.createdAt = new Date()
    query.createdBy = ctx.state.user.userName
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].create(query);
    if (result) {
      ctx.returnBody(null, 100020);
    } else {
      ctx.returnBody(null, 100021, 500);
    }
  }

  // 修改
  async update() {
    const {ctx, service} = this;
    let validateResult = await ctx.checkValidate(ctx.request.body, this.serviceName + '.update')
    if (!validateResult) return
    let query = ctx.request.body
    query.updatedAt = new Date()
    query.updatedBy = ctx.state.user.userName
    const id = this.ctx.helper.parseInt(ctx.params.id);
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].update(query, {
      id
    });
    if (result) {
      ctx.returnBody(null, 100030);
    } else {
      ctx.returnBody(null, 100031, 500);
    }
  }

  // 删除
  async destroy() {
    const {ctx, service} = this;
    let validateResult = await ctx.checkValidate(ctx.params, 'base.destroy')
    if (!validateResult) return
    const ids = ctx.params.id.split(',');
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].destroy(ids);
    
    if (result) {
      ctx.returnBody(null, 100040);
    } else {
      ctx.returnBody(null, 100041, 500);
    }
  }
}

module.exports = BaseController;
'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const Controller = require('egg').Controller;

class DefaultController extends Controller {
  async ping() {
    // const { ctx, app } = this;
    // const message = ctx.args[0];
    // await ctx.socket.emit('res', `服务器做出了回应`);
  }
}

module.exports = DefaultController;

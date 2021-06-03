'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const BaseService = require("../../base");


class Service extends BaseService {
  constructor(...arg) {
    super(...arg)
    this.modelName = 'Notice'
  }

  /**
   * 发送消息
   */
  async send(acticon, notice) {
    const { ctx, app } = this;
    const result = await app.model[this.modelName].create(notice); // 持久化消息
    const msg = ctx.helper.parseSocketMsg(acticon, result); // 封装数据
    app.io.of('/').emit('notice', msg); // 向客户端发送
    return result;
  }

}

module.exports = Service;
'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const BaseService = require("../../base");


class Service extends BaseService {
  constructor(...arg) {
    super(...arg)
    this.modelName = 'ArticleType'
  }

  async findAll (query) {
    let obj = {
      where: query
    }
    return await this.ctx.model[this.modelName].findAndCountAll(obj);
  }
}

module.exports = Service;
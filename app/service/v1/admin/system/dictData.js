'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const BaseService = require("../../base");


class Service extends BaseService {
  constructor(...arg) {
    super(...arg)
    this.modelName = 'DictData'
  }
  
  // 查询某条数据
  async findByType (query) {
    return await this.ctx.model[this.modelName].findAll({
      where: query
    });
  }
}

module.exports = Service;
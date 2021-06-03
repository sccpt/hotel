'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const BaseService = require("../../base");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


class Service extends BaseService {
  constructor(...arg) {
    super(...arg)
    this.modelName = 'DictType'
  }

  // 删除
  async destroy (ids) {
    try {
      // 建立事务对象
      let transaction = await this.ctx.model.transaction();
      
      let dictType = await this.ctx.model[this.modelName].findAll({
        where: {
          id: {
            [Op.or]: ids
          }
        },
        transaction
      });
      let dictTypeLists = dictType.map(item => item.dictType);
      
      await this.ctx.model.DictData.destroy({
        where: {
          dictType: {
            [Op.or]: dictTypeLists
          }
        },
        transaction
      });
      await this.ctx.model[this.modelName].destroy({
        where: {
          id: {
            [Op.or]: ids
          }
        },
        transaction
      });
      // 提交事务
      await transaction.commit();
      return true;
    } catch (error) {
      this.ctx.throw(500, '服务器错误');
    }
  }
}

module.exports = Service;
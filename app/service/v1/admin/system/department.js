'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const BaseService = require("../../base");


class Service extends BaseService {
  constructor(...arg) {
    super(...arg)
    this.modelName = 'Departments'
  }

  // 刪除id
  async destroy (deptId) {
    try {
      // 建立事务对象
      let transaction = await this.ctx.model.transaction();
      
      // 事务增操作
      let depts = await this.ctx.model[this.modelName].findAll({
        where: {
          parentId: deptId
        },
        transaction
      });
      if (depts.length) {
        throw Error('含有子元素，不能删除')
      }

      // 判断该部门是否有用户
      let users = await this.ctx.model['Users'].findAll({
        where: {
          deptId
        },
        transaction
      });

      if (users.length) {
        throw Error('该部门还有用户，不能删除')
      }

      // 刪除数据
      await this.ctx.model[this.modelName].destroy({
        where: {
          deptId
        }
      })
      // 提交事务
      await transaction.commit();
      return true
    } catch (error) {
      this.ctx.throw(500, error)
    }
  }
}

module.exports = Service;
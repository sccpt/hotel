'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const BaseService = require("../../base");
const { getDeptWhere } = require("../../../../utils/tools");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


class Service extends BaseService {
  constructor(...arg) {
    super(...arg)
    this.modelName = 'Users'
  }

  // 查询, 传页面，分页返回，否则全部返回
  async findList(query, order=[['createdAt', 'DESC']]) {
    let obj = {
      where: {},
      order,
      include: [{
        model: this.ctx.model['Departments']
      }]
    }
    if (query.offset) {
      query.limit = query.limit ? query.limit : 10
      query.offset = (query.offset - 1) * query.limit
      obj.limit = query.limit
      obj.offset = query.offset
    } else {
      query.limit = null
      query.offset = null
    }
    for (let key in query) {
      if (key !== 'limit' && key !== 'offset') {
        if (key === 'deptId') {
          obj.where[key] = getDeptWhere(this.ctx, {
            deptId: query.deptId
          }).deptId
        } else {
          obj.where[key] = {
            // 模糊查询
            [Op.like]:'%' + query[key] + '%'
          }
        }
      }
    }
    
    return await this.ctx.model[this.modelName].findAndCountAll(obj);
  }

  // 查询某条数据
  async findOne (id) {
    return await this.ctx.model[this.modelName].findOne({
      where: {
        id
      },
      include: [{
        model: this.ctx.model['Roles'],
        as: 'roles'
      }]
    })
  }

  // 新增
  async create (query) {
    try {
      // 建立事务对象
      let transaction = await this.ctx.model.transaction();
      
      // 事务增操作
      let user = await this.ctx.model.Users.create(query, {
        transaction
      });
      let roleIds = this.ctx.request.body['roleIds']
      let roleQuery = []
      for (let i = 0; i < roleIds.length; i++) {
        let obj = {}
        obj.roleId = roleIds[i]
        obj.userId = user.id
        roleQuery.push(obj)
      }

      // 事务批量增操作
      await this.ctx.model.UserRole.bulkCreate(roleQuery, {
          transaction
      });
      // 提交事务
      await transaction.commit();
      return true
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        this.ctx.throw(500, '用户名已经被占用') 
      } else {
        this.ctx.throw(500, '服务器错误') 
      }
    }
  }

  // 修改密码
  async resetPwd(query, id) {
    return await this.ctx.model[this.modelName].update(query, {
      where: {
        id
      }
    });
  }

  // 修改头像
  async updateUserImg(query, id) {
    console.log(query)
    return await this.ctx.model[this.modelName].update(query, {
      where: {
        id
      }
    });
  }

  // 修改
  async update (query, id) {
    try {
      // 建立事务对象
      let transaction = await this.ctx.model.transaction();
      
      // 事务增操作
      await this.ctx.model.Users.update(query, {
        where: {
          id
        },
        transaction
      });
      await this.ctx.model.UserRole.destroy({
        where: {
          userId: id
        },
        transaction
      })
      let roleIds = this.ctx.request.body['roleIds']
      let roleQuery = []
      for (let i = 0; i < roleIds.length; i++) {
        let obj = {}
        obj.roleId = roleIds[i]
        obj.userId = id
        roleQuery.push(obj)
      }

      // 事务批量增操作
      await this.ctx.model.UserRole.bulkCreate(roleQuery, {
          transaction
      });
      // 提交事务
      await transaction.commit();
      return true
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        this.ctx.throw(500, '用户名已经被占用') 
      } else {
        this.ctx.throw(500, '服务器错误') 
      }
    }
  }

  // 删除
  async destroy (ids) {
    try {
      // 建立事务对象
      let transaction = await this.ctx.model.transaction();
      
      await this.ctx.model.Users.destroy({
        where: {
          id: {
            [Op.or]: ids
          }
        },
        transaction
      });
      await this.ctx.model.UserRole.destroy({
        where: {
          userId: {
            [Op.or]: ids
          }
        },
        transaction
      })
      // 提交事务
      await transaction.commit();
      return true
    } catch (error) {
      this.ctx.throw(500, '服务器错误') 
    }
  }
}

module.exports = Service;
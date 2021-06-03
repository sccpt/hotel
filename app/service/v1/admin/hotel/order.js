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
    this.modelName = 'Order'
  }

  async findList(query, order = [['createdAt', 'DESC']]) {
    const { app } = this;
    let obj = {
      where: {},
      order,
      include: [
        {
          model: app.model.Room,
          as: 'room',
          attributes: ['id', 'name', 'room_type_id', 'floor_id', 'status'],
          include: [
            {
              model: app.model.Floor,
              as: 'floor',
              attributes: ['id', 'name'],
            },
            {
              model: app.model.HotelType,
              as: 'type',
              attributes: ['id', 'name', 'photo'],
            },
          ]
        },
      ]
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
        if (!query[key]) {
          query[key] = ''
        }
        obj.where[key] = {
          [Op.like]: '%' + query[key] + '%'
        }
      }
    }
    return await this.ctx.model[this.modelName].findAndCountAll(obj);
  }

  // 新增
  async create(query) {
    return await this.ctx.model[this.modelName].createOrder(query);
  }

  // 修改
  async update(query, where) {
    return await this.ctx.model[this.modelName].updateOrder(query, {
      where
    });
  }

  // 删除
  async destroy(query) {
    return await this.ctx.model[this.modelName].deleteOrder(query)
  }

}

module.exports = Service;
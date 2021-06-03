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
        this.modelName = 'FoodOrders'
    }

    // 查询, 传页码，分页返回，否则全部返回
    async findList(query, order = [['createdAt', 'DESC']]) {
        const { app } = this;
        let obj = {
            where: {},
            order,
            include: [
                { model: app.model.Foods, attributes: ['id', 'title'] }
            ],
            distinct: true,
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
            if (key !== 'limit' && key !== 'offset' && key !== 'eat_time') {
                if (!query[key]) {
                    query[key] = ''
                }
                obj.where[key] = {
                    [Op.like]: '%' + query[key] + '%'
                }
            } else if (key == 'eat_time') {
                obj.where[key] = {
                    [Op.gte]: `${query[key]} 00:00:00`,
                    [Op.lte]: `${query[key]} 23:59:59`,
                }
            }
        }
        return await this.ctx.model[this.modelName].findAndCountAll(obj);
    }

    // 删除
    async destroy(id) {
        return await this.ctx.model[this.modelName].deleteOrder(id);
    }
}

module.exports = Service;
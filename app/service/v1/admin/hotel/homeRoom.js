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
        this.modelName = 'Room';
    }

    async findList(query, order = [['createdAt', 'DESC']]) {
        const { app } = this;
        let obj = {
            attributes: [Sequelize.col('floor.name'), Sequelize.col('type.name'), 'name', 'status', 'id'],
            where: {},
            order,
            include: [
                {
                    model: app.model.Floor,
                    as: 'floor',
                    attributes: ['id', 'name']
                },
                {
                    model: app.model.HotelType,
                    as: 'type',
                    attributes: ['id', 'name']
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
                // switch (key) {
                //     case 'floor':
                //         obj.where['$floor.name$'] = {
                //             [Op.like]: '%' + query[key] + '%'
                //         };
                //         break;
                //     case 'type':
                //         obj.where['$type.name$'] = {
                //             [Op.like]: '%' + query[key] + '%'
                //         };
                //         break;

                //     default:
                //         obj.where[key] = {
                //             [Op.like]: '%' + query[key] + '%'
                //         };
                //         break;
                // }
            }
        }
        return await this.ctx.model[this.modelName].findAll(obj);
    }

}

module.exports = Service;
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
        this.modelName = 'DayPrice';
    }

    async findList(query, order = [['createdAt', 'DESC']]) {
        const { app } = this;
        let obj = {
            where: {},
            order,
            include: [
                {
                    model: app.model.HotelType,
                    as: 'roomType',
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

        const searchTime = () => {
            if (query.startTime && query.endTime) {
                obj.where.startdate = {
                    [Op.lte]: query.startTime
                };
                obj.where.enddate = {
                    [Op.gte]: query.endTime
                };
            } else {
                return [];
            }
        };

        for (let key in query) {
            if (key !== 'limit' && key !== 'offset') {
                if (!query[key]) {
                    query[key] = ''
                }

                switch (key) {
                    case 'startTime':
                        searchTime();
                        break;
                    case 'endTime':
                        searchTime();
                        break;

                    case 'typeId':
                        obj.where[key] = query[key];
                        break;

                    default:
                        obj.where[key] = {
                            [Op.like]: '%' + query[key] + '%'
                        };
                        break;
                }
            }
        }
        return await this.ctx.model[this.modelName].findAndCountAll(obj);
    }

}

module.exports = Service;
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
        this.modelName = 'Room'
    }

    async findList(query, order = [['createdAt', 'DESC']]) {
        const { app } = this;
        let obj = {
            where: {},
            order,
            include: [
                {
                    model: app.model.Floor,
                    as: 'floor',
                },
                {
                    model: app.model.HotelType,
                    as: 'type',
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

    async findStatus() {
        const { app } = this;
        const free = await this.ctx.model[this.modelName].count({
            where: {
                status: 1,
            },
        });
        const busy = await this.ctx.model[this.modelName].count({
            where: {
                status: 3,
            },
        });
        const fault = await this.ctx.model[this.modelName].count({
            where: {
                status: 4,
            },
        });
        const clean = await this.ctx.model[this.modelName].count({
            where: {
                status: 5,
            },
        });
        return { free, busy, fault, clean };
    }

    async update(query, where) {
        return await this.ctx.model[this.modelName].updateRoom(query, {
            where
        });
    }

    // ??????
    async destroy(id) {
        return await this.ctx.model[this.modelName].deleteRoom(id);
    }

}

module.exports = Service;
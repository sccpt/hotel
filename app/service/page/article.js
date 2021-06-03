'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const BaseService = require("./base");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


class Service extends BaseService {
    constructor(...arg) {
        super(...arg)
        this.modelName = 'Articles'
    }
}

module.exports = Service;
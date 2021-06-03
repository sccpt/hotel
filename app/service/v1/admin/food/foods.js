'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const BaseService = require("../../base");

class Service extends BaseService {
    constructor(...arg) {
        super(...arg)
        this.modelName = 'Foods'
    }
}

module.exports = Service;
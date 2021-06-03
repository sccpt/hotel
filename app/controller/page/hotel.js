'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
const BaseController = require("./base");

class Controller extends BaseController {
    constructor(...arg) {
        super(...arg)
        this.typeName = 'hotel'
    }
}

module.exports = Controller;
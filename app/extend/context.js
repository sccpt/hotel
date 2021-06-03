'use strict';
/*
 * @Author: yurui 
 * @Date: 2020-11-21
 */
const httpCode = require('../utils/http-code');

module.exports = {
  // response通用返回
  returnBody(data = null, code = 0, status = 200) {
    this.status = status
    this.body = {
      code,
      message: httpCode[code] ? httpCode[code] : 'success',
      data
    };
  },
  async checkValidate(datas, path) {
    try { // 校验规则, 如果沒有新建文件则不校验
      let validate = Object.assign({}, datas)
      return await this.validate(path, validate)
    } catch (error) {
      console.log(error)
      return true
    }
  }
};
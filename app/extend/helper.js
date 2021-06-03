'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
const uuidv1 = require('uuid/v1');

module.exports = {
  uuidv1,
  // 转数字类型
  parseInt(string) {
    if (typeof string === 'number') return string;
    if (!string) return string;
    return parseInt(string) || 0;
  },

  // 字符串转对象，转换出错返回{}或者默认值
  JSONParse(str, defaultResult) {
    try {
      return JSON.parse(str);
    } catch (e) {
      return defaultResult || {};
    }
  },

  // 封装socket.io数据格式
  parseSocketMsg(action, payload = {}, metadata = {}) {
    return {
      meta: { timestamp: Date.now(), ...metadata },
      data: { action, payload },
    };
  },

};
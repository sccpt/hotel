'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

/** @type Egg.EggPlugin */
const path = require('path');
module.exports = {
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  },
  // 加密
  bcrypt: {
    enable: true,
    package: 'egg-bcrypt'
  },
  // 验证
  validatePlus: {
    enable: true,
    package: 'egg-validate-plus',
  },
  // 跨域问题
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  io: {
    enable: true,
    package: 'egg-socket.io',
  }
};

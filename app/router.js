'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/admin')(app); // 后台管理系统
  require('./router/home')(app); // web端
  require('./router/weapp')(app); // 小程序
};

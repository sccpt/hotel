/* eslint valid-jsdoc: "off" */

'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require('path');

module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1605250020379_4355';
  config.public = 'v1' // 版本
  config.whiteList = [
    '/',
    `/api/${config.public}/login`,
    `/api/${config.public}/logout`,
    `/api/${config.public}/captcha`,
    `/api/${config.public}/front/*`,
    '/admin/*',
    '/news/*',
    '/food/*',
    '/photo/*',
    '/hotel/*',
    '/room/*',
  ] // api 白名单

  // file模式上传文件
  config.multipart = {
    mode: 'file',
  };

  config.weapp = {
    appId: 'wx3bdegg65165654fef', // 小程序appid
    appSecret: 'fwfefwe5655g5grgr33555fefe', // 小程序密钥
    mch_id: '123456', // 小程序商户id
    mch_key: '123456', // 小程序商户key
    notify_url: 'https://www.baidu.com/weapp/pay/callback',  // 小程序支付成功回调地址
  };

  config.static = {
    prefix: '/',
    dir: [path.join(__dirname, '../app/public'), path.join(__dirname, '../www')]// 多静态文件入口
  }

  // add your middleware config here
  config.middleware = [
    "gzip",
    'errorHandler', // 全局错误处理
    'jwt'
  ];

  config.gzip = {
    threshold: 1024, // 小于 1k 的响应体不压缩
  };

  config.jwt = {
    secret: 'hotel@yurui',
    expiresIn: 60 * 60 * 24 // 1天过期
  };

  config.bodyParser = {
    jsonLimit: '1mb',
    formLimit: '1mb',
  };
  config.bcrypt = {
    saltRounds: 10 // default 10
  }

  config.validatePlus = {
    resolveError(ctx, errors) {
      if (errors.length) {
        ctx.type = 'json';
        ctx.status = 400;
        ctx.body = {
          code: 400,
          error: errors,
          message: '参数错误',
        };
      }
    }
  }

  config.sequelize = {
    dialect: 'mysql', // 表示使用mysql
    host: '127.0.0.1', // 连接的数据库主机地址
    port: 3306, // mysql服务端口
    database: 'root', // 数据库名
    username: 'root', // 数据库用户名
    password: '123456', // 数据库密码
    timezone: '+8:00', // 由于orm用的UTC时间，这里必须加上东八区，否则取出来的时间相差8小时
    define: {  // model的全局配置
      timestamps: false,   // 添加create,update,delete时间戳
      freezeTableName: false,  // 防止修改表名为复数
      underscored: false  // 防止驼峰式字段被默认转为下划线
    },
    dialectOptions: { // 让读取date类型数据时返回字符串而不是UTC时间
      dateStrings: true,
      typeCast(field, next) {
        if (field.type === "DATETIME") {
          return field.string();
        }
        return next();
      }
    }
  };

  // nunjucks模板引擎
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['*']
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  config.io = {
    init: {}, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
    },
  };

  config.redis = {
    clients: {
      default: {
        host: '127.0.0.1',
        port: '6379',
        password: '',
        db: '0',
      },
      subscribe: {
        host: '127.0.0.1',
        port: '6379',
        password: '',
        db: '1',
      },
      session: {
        host: '127.0.0.1',
        port: '6379',
        password: '',
        db: '2',
      },
    },
    agent: true,
  };


  return {
    ...config
  };
};

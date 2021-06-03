'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const rule = {
  userName: [
    { required: true, message: '用户名不能为空' }
  ],
  password: [
    { required: true, message: '密码不能为空' }
    // {
    //   // eslint-disable-next-line no-unused-vars
    //   validator(rule, value, callback, source, options) {
    //     const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
    //     if (pattern.test(value)) {
    //       callback(); // 验证通过
    //       return;
    //     }
    //     callback({ message: '密码最少包含一个大小写字母、数字并且为8-16位' }); // 验证不通过
    //   },
    // },
  ],
  captcha: [
    {
      required: true,
      message: '验证码不能为空'
    }
  ]
};

module.exports = rule;
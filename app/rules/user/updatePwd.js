'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const rule = {
  id: [
    { required: true, message: 'id不能为空' }
  ],
  password: [
    { required: true, message: '密码不能为空' }
  ],
  newPassword: [
    { required: true, message: '新密码不能为空' }
  ]
};

module.exports = rule;
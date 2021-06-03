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
  ],
  deptId: [
    {
      required: true,
      message: 'deptId不能为空'
    }
  ],
  roleIds: [
    {
      required: true,
      type: 'array',
      message: 'roleIds不能为空'
    }
  ]
};

module.exports = rule;
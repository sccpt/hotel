'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const rule = {
  id: [
    { required: true, message: 'id不能为空' }
  ],
  avatar: [
    { required: true, message: '头像不能为空' }
  ]
};

module.exports = rule;
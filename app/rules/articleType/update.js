'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const rule = {
  id: [
    { required: true, message: 'id不能为空' }
  ],
  userId: [ 
    { required: true, message: 'userId不能为空' }
  ],
  title: [
    { required: true, message: '名称不能为空' }
  ],
  key: [
    { required: true, message: 'key不能为空' }
  ],
  orderNum: [
    { required: true, message: '显示排序不能为空' }
  ]
};

module.exports = rule;
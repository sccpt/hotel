'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const rule = {
  id: [
    { required: true, message: 'id不能为空' }
  ],
  parentId: [ 
    { required: true, message: 'parentId不能为空' }
  ],
  title: [
    { required: true, message: '菜单名称不能为空' }
  ],
  orderNum: [
    { required: true, message: '菜单名称不能为空' }
  ]
};

module.exports = rule;
'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const rule = {
  deptId: [
    { required: true, message: 'deptId不能为空' }
  ],
  parentId: [
    { required: true, message: 'parentId不能为空' }
  ],
  deptName: [
    { required: true, message: '部门名称不能为空' }
  ],
  orderNum: [
    { required: true, message: '显示顺序不能为空' }
  ]
};

module.exports = rule;
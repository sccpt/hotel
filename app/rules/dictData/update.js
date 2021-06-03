'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const rule = {
  id: [
    { required: true, message: 'id不能为空' }
  ],
  dictSort: [
    { required: true, message: '字典排序不能为空' }
  ],
  dictLabel: [
    { required: true, message: '字典标签不能为空' }
  ],
  dictValue: [
    { required: true, message: '字典键值不能为空' }
  ],
  dictType: [
    { required: true, message: '字典类型不能为空' }
  ]
};

module.exports = rule;
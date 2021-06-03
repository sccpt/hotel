'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const rule = {
  dictName: [ 
    { required: true, message: '字典名称不能为空' }
  ],
  dictType: [
    { required: true, message: '字典类型不能为空' }
  ]
};

module.exports = rule;
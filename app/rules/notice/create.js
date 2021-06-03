'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const rule = {
  title: [
    { required: true, message: '公告标题不能为空' }
  ],
  content: [
    { required: true, message: '内容不能为空' }
  ]
};

module.exports = rule;
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
    { required: true, message: '标题不能为空' }
  ],
  subTitle: [
    { required: true, message: '副标题不能为空' }
  ],
  type: [
    { required: true, message: '类型不能为空' }
  ],
  content: [
    { required: true, message: '内容不能为空' }
  ]
};

module.exports = rule;
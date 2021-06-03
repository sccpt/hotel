'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const rule = {
  id: [
    { required: true, message: '标题id不能为空' }
  ],
  isRead: [
    { required: true, message: '是否已读不能为空' }
  ],
};

module.exports = rule;
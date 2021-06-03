'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const rule = {
    roomid: [
        { required: true, message: '房间id不能为空' }
    ],
    roomOldId: [
        { required: true, message: '旧房间id不能为空' }
    ],
};

module.exports = rule;
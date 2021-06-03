'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const rule = {
    typeId: [
        { required: true, message: '房型id不能为空' }
    ],
    start_time: [
        { required: true, message: '入住时间不能为空' }
    ],
    end_time: [
        { required: true, message: '退房时间不能为空' }
    ],
    roomNum: [
        { required: true, message: '房间数量不能为空' }
    ],
    people: [
        { required: true, message: '预定人姓名不能为空' }
    ],
    people_mobile: [
        { required: true, message: '预定人电话不能为空' }
    ],
};

module.exports = rule;
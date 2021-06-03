'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const rule = {
    ids: [
        { required: true, message: '餐品不能为空' }
    ],
    room_order_id: [
        { required: true, message: '预定房间订单号不能为空' }
    ],
    eat_time: [
        { required: true, message: '用餐时间不能为空' }
    ],
};

module.exports = rule;
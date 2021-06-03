'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const rule = {
    orderId: [
        { required: true, message: '订单id不能为空' }
    ],
    evals: [
        { required: true, message: '评论不能为空' }
    ],
};

module.exports = rule;
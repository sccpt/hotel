'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const { Controller } = require('egg');
const wxpayUitls = require('../../utils/wxpayUitls');

class PayController extends Controller {
    // 统一下单
    async unifiedorder() {
        const { ctx } = this;
        const query = ctx.request.body;
        query.uid = query.openid;
        const result = await ctx.service.weapp.pay.unifiedorder(query);
        if (result) {
            ctx.returnBody(result, 100020);
        } else {
            ctx.returnBody('服务调用失败', 0);
        }
    }

    // 支付回调通知
    async wechatNotify() {
        const { ctx } = this;
        const res = await ctx.service.weapp.pay.wechatNotify();
        if (res) {
            ctx.body = wxpayUitls.createXML({ return_code: 'SUCCESS' });
        }
    }
}

module.exports = PayController;
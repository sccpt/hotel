'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
const { Service } = require('egg');
const fs = require('fs');
const wxpayUitls = require('../../utils/wxpayUitls');

class WeappPayService extends Service {

  // 返回签名参数
  returnParams(order_id, price, openid) {
    const { ctx, app } = this;
    return {
      appid: app.config.weapp.appId,
      mch_id: app.config.weapp.mch_id,
      // 随机字符串，长度要求在32位以内。推荐随机数生成算法
      nonce_str: 'AGY5JX6KFQL',
      // 商品简单描述，该字段请按照规范传递，具体请见参数规定
      body: '房间预定',
      // 商户系统内部订单号，要求32个字符内，只能是数字、大小写字母_-|*且在同一个商户号下唯一。详见商户订单号
      out_trade_no: order_id,
      // 符合ISO 4217标准的三位字母代码，默认人民币：CNY，详细列表请参见货币类型
      fee_type: 'CNY',
      // 订单总金额，单位为分，详见支付金额
      total_fee: price,
      // 支持IPV4和IPV6两种格式的IP地址。调用微信支付API的机器IP
      spbill_create_ip: '192.168.43.187' || ctx.request.ip,
      // 异步接收微信支付结果通知的回调地址，通知url必须为外网可访问的url，不能携带参数。
      notify_url: 'https://www.baidu.com',
      // 小程序取值如下：JSAPI，详细说明见参数规定
      trade_type: 'JSAPI',
      // trade_type=JSAPI，此参数必传，用户在商户appid下的唯一标识。openid如何获取，可参考【获取openid】。
      openid,
    };
  }

  // 统一下单
  async unifiedorder(query) {
    const { ctx, app } = this;
    const orderData = await ctx.model.Order.weappGetMore(query);
    if (orderData) {
      const url = 'https://api.mch.weixin.qq.com/pay/unifiedorder';
      //动态生成统一下单需要的签名MD5字符串
      const params = this.returnParams(orderData.order_id, wxpayUitls.getmoney(orderData.price), query.openid);
      params.sign = wxpayUitls.createSign(params, app.config.weapp.mch_id);
      console.log(params);
      const res = await ctx.curl(url, {
        method: 'POST',
        dataType: 'text/xml', // 注意接口数据类型
        data: wxpayUitls.createXML(params) //动态生成的xml
      });
      // console.log('统一下单结果：', res, 'data:', res.data.toString());
      // 解析统一下单后返回的xml
      const { xml } = await wxpayUitls.parserXML(res.data.toString());
      const r = {
        appId: app.config.weapp.appId,
        timeStamp: Date.now().toString(), //注意类型String
        nonceStr: xml.nonce_str,
        package: 'prepay_id=' + xml.prepay_id,
        signType: 'MD5'
      };
      //  paySign:wxpayUitls.createSign(r,mch_key) 动态生成wx.requestPayment使用的签名paySign MD5字符串
      return { ...r, paySign: wxpayUitls.createSign(r, app.config.weapp.mch_id) };
    }
    return;
  }

  // 处理微信支付通知
  async wechatNotify() {
    const { ctx, app } = this;
    let data = '';
    ctx.req.setEncoding('utf8');
    ctx.req.on('data', function (chunk) {
      data += chunk;
    });
    let that = this;
    return new Promise((resolve, reject) => {
      ctx.req.on('end', async () => {
        try {
          const { xml } = await wxpayUitls.parserXML(data);
          if (xml && xml.return_code == 'SUCCESS') {
            // 签名验证
            const params = that.returnParams(xml.out_trade_no, Number(xml.total_fee), xml.openid);
            const sign = wxpayUitls.createSign(params, app.config.weapp.mch_id);
            if (xml.sign == sign && xml.out_trade_no) {
              const orderDatas = await app.model.Order.weappGetMoreById(xml.out_trade_no);
              const totalPrice = wxpayUitls.getmoney(orderDatas.price);
              // 验证金额
              if (orderDatas && totalPrice == xml.total_fee) {
                const res = await app.model.Order.weappUpdate({ ids: orderDatas.ids, pay_id: xml.transaction_id, pay_money: xml.total_fee });
                if (res) {
                  resolve(true);
                }
                reject(false);
              }
              reject(false);
            }
            reject(false);
          }
          reject(false);
        } catch (error) {
          reject(false);
        }
      });
    });
  }


  // 退款
  async refund(id) {
    const { ctx, app } = this;
    const datas = await app.model.Order.findByPk(id);
    if (datas.pay_status == 1) {
      // 推送消息
      await ctx.service[app.config.public].admin.system.notice.send('pay_refund', {
        title: '发起退款',
        content: `订单号:${datas.order_id}取消预定，已发起退款，请注意退款状态！`,
        createdAt: new Date(),
      });
      const params = {
        appid: app.config.weapp.appId,
        mch_id: app.config.weapp.mch_id,
        nonce_str: wxpayUitls.createNonceStr(),// 随机字符串
        transaction_id: datas.pay_id, // 微信支付订单号
        out_refund_no: datas.order_id, // 商户退款单号
        total_fee: datas.pay_money, // 订单金额
        refund_fee: wxpayUitls.getmoney(datas.price), // 退款金额
        refund_desc: '取消房间预定', // 退款原因
      };
      params.sign = wxpayUitls.createSign(params, app.config.weapp.mch_id);

      const res = await ctx.curl('https://api.mch.weixin.qq.com/secapi/pay/refund', {
        method: 'POST',
        cert: fs.readFileSync('./app/cert/apiclient_cert.pem'),
        key: fs.readFileSync('./app/cert/apiclient_key.pem'),
        dataType: 'text/xml', // 注意接口数据类型
        data: wxpayUitls.createXML(params) //动态生成的xml
      });

      const { xml } = await wxpayUitls.parserXML(res.data.toString());
      if (xml && xml.return_code == 'SUCCESS') {
        await app.model.Order.update({ refund_status: 1 }, { where: { id } });
      }
    }
  }
}

module.exports = WeappPayService;
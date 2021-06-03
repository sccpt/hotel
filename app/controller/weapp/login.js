'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
const BaseController = require('./base');

class WeappController extends BaseController {
    // 登录
    async login() {
        const { ctx, app } = this;
        const { code } = ctx.request.body;
        const sessionid = ctx.helper.uuidv1();
        const { appId, appSecret } = app.config.weapp;
        // 登录凭证校验
        const weappInfo = await ctx.curl(`https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`, {
            dataType: 'json',
        }) || {};
        const { openid, session_key } = weappInfo.data || {};

        if (openid) {
            const result = JSON.stringify({ openid, session_key });
            // 保存openId和session_key到redis
            await app.redis.get('default').setex(sessionid, 3600 * 24, result);
        } else {
            return this.fail(ctx.ERROR_CODE, weappInfo.data.errmsg);
        }
        this.success(sessionid);
    }
    
}

module.exports = WeappController;
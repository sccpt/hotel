'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

const Service = require('egg').Service;
const svgCaptcha = require('svg-captcha');

class CommonService extends Service {
  async login(query) {
    const { ctx } = this;
    // 在当前数据库中验证此用户思否存在
    const result = await ctx.model.Users.findOne({
      where: {
        userName: query.userName
      },
      include: [
        {
          model: this.ctx.model['Departments']
        },
        // {
        //   model: this.ctx.model['Roles'],
        //   as: 'roles'
        // }
      ]
    });
    return result;
  }
  // 产生验证码
  async captcha() {
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 160,
      height: 50,
      ignoreChars: '0oO1ilI', // 验证码字符中排除 0o1i
      noise: 2, // 干扰线条的数量
      color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
      bacground: '#cc9966'
    });
    this.ctx.session.code = captcha.text;
    return captcha;
  }
}

module.exports = CommonService;
const Subscription = require('egg').Subscription;

// 定时任务
class getInfo extends Subscription {
  static get schedule(){
    return {
      interval: 1000 * 60 * 60 * 24, // 1天时间
      // cron: '*/3 * * * * *',
      type: 'worker'
    }
  }

  async subscribe(){
    const info = this.ctx.info;
    console.log(Date.now(), info)
  }
}

module.exports = getInfo;
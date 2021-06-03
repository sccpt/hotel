// app.js
import network from './utils/network';

App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        network.request({
          url: `login`,
          method: 'POST',
          data: {
            code: res.code,
          },
          header: {
            'content-type': 'application/json'
          },
          success(res) {
            wx.setStorageSync('sessionid', res.data.data);
          },
          fail(res) {
            wx.showToast({
              title: '数据请求失败',
              icon: 'error',
              duration: 2000
            });
          },
        });
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
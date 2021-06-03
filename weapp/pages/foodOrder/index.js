// pages/order/index.js
import network from '../../utils/network';
/*
 * @Author: yurui 
 * @Date: 2021-05-28
 */
import Dialog from '../../vant-weapp/dist/dialog/dialog';
import {
  domain
} from '../../utils/config';
import {
  moment
} from '../../utils/util';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    domain,
    all: [],
    pay: [],
    check: [],
    finish: [],
    nowTime: moment().format('YYYY-MM-DD') + '12:00:00',
  },

  goDetails(e) {
    wx.navigateTo({
      url: `/pages/foodOrderDetails/index?id=${e.currentTarget.id}`
    });
  },

  goEval(e) {
    wx.navigateTo({
      url: `/pages/foodEval/index?id=${e.currentTarget.id}`
    });
  },

  getData(query, type) {
    const that = this;
    network.request({
      url: `food/orders`,
      data: query,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.data.code == 100010) {
          if (type == 'finish') {
            const datas = [...that.data.finish, ...res.data.data];
            that.setData({
              [type]: datas,
            });
          } else {
            that.setData({
              [type]: res.data.data,
            });
          }
        }
      },
      fail(res) {
        wx.showToast({
          title: '数据请求失败',
          icon: 'error',
          duration: 2000
        });
      },
    });
  },

  onCancel(e) {
    const that = this;
    Dialog.confirm({
        title: '取消订餐',
        message: '请确认是否要继续执行该操作？',
      })
      .then(() => {
        network.request({
          url: `food/order/cancel`,
          method: 'POST',
          data: {
            id: e.currentTarget.id,
          },
          header: {
            'content-type': 'application/json'
          },
          success(res) {
            if (res.data.code == 100030) {
              wx.showToast({
                title: '订餐取消成功！',
                icon: 'success',
                duration: 2000
              });
              setTimeout(() => {
                wx.navigateTo({
                  url: `/pages/foodOrderDetails/index?id=${e.currentTarget.id}`
                });
              }, 1500)
            } else {
              wx.showToast({
                title: '订餐取消失败，请电话联系我们！',
                icon: 'none',
                duration: 2000
              });
            }
          },
          fail(res) {
            wx.showToast({
              title: '数据请求失败',
              icon: 'error',
              duration: 2000
            });
          },
        });
      })
      .catch(() => {
        // on cancel
      });
  },

  goHome() {
    wx.navigateTo({
      url: `/pages/index/index`
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      all: [],
      pay: [],
      check: [],
      finish: [],
    });
    this.getData({}, 'all');
    this.getData({
      status: 0,
    }, 'pay');
    this.getData({
      status: 1,
    }, 'check');
    this.getData({
      status: 2,
    }, 'finish');
    this.getData({
      status: 3,
    }, 'finish');
    this.setData({
      active: Number(options.active),
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// pages/foodBuy/index.js
import network from '../../utils/network';
/*
 * @Author: yurui 
 * @Date: 2021-05-28
 */
import {
  domain
} from '../../utils/config';
import Dialog from '../../vant-weapp/dist/dialog/dialog';
import {
  moment
} from '../../utils/util';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    domain,
    foods: [],
    ids: '',
    totalNum: 0,
    totalPrice: 0,
    orders: [],
    showTime: false,
    showOrder: false,
    orderId: '',
    eatTime: '',
    minTime: '',
    maxTime: '',
  },

  changeCarData(arr) {
    var map = {},
      dest = [];
    for (var i = 0; i < arr.length; i++) {
      var ai = arr[i];
      if (!map[ai.id]) {
        dest.push({
          id: ai.id,
          title: ai.title,
          photo: ai.photo,
          price: ai.price,
          num: ai.num
        });
        map[ai.id] = ai;
      } else {
        for (var j = 0; j < dest.length; j++) {
          var dj = dest[j];
          if (dj.id == ai.id) {
            dj.num = parseFloat(dj.num) + parseFloat(ai.num);
            dj.price = parseFloat(dj.price) + parseFloat(ai.price);
            break;
          }
        }
      }
    };
    return dest;
  },

  getData(ids) {
    const that = this;
    network.request({
      url: `food/more?ids=${ids}`,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.data.code == 100010) {
          const idArr = ids.split(',');
          const foods = res.data.data;
          const arr = [];
          let totalPrice = 0;
          for (let i = 0; i < idArr.length; i++) {
            for (let j = 0; j < foods.length; j++) {
              if (idArr[i] == foods[j].id) {
                totalPrice += Number(foods[j].price);
                arr.push({
                  ...foods[j],
                  num: 1,
                });
              }
            }
          }
          const foodArr = that.changeCarData(arr);
          that.setData({
            foods: foodArr,
            ids,
            totalNum: arr.length,
            totalPrice,
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
  },

  getOrder() {
    const that = this;
    network.request({
      url: `order/list`,
      data: {
        pay_status: 1,
        status: 2,
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.data.code == 100010) {
          if (res.data.data && res.data.data.length != 0) {
            that.setData({
              orders: res.data.data,
            });
          } else {
            Dialog.alert({
              message: '没有找到你的订房订单，请先订房再订餐！',
              confirmButtonText: '马上去订房'
            }).then(() => {
              wx.navigateTo({
                url: '/pages/index/index'
              });
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

  openOrder() {
    this.setData({
      showOrder: true,
    });
  },

  onCloseOrder() {
    this.setData({
      showOrder: false,
    });
  },

  onSelectOrder(e) {
    this.setData({
      orderId: e.currentTarget.dataset.id,
      minTime: `${e.currentTarget.dataset.start} 9:00`,
      maxTime: `${e.currentTarget.dataset.end} 14:00`,
      showOrder: false,
    });
  },

  openTime() {
    if (this.data.minTime) {
      this.setData({
        showTime: true,
      });
    } else {
      wx.showToast({
        title: '请先选择订单',
        icon: 'error',
        duration: 2000
      });
    }
  },

  onConfirm(e) {
    if (e && e.detail) {
      this.setData({
        eatTime: e.detail.label,
        showTime: false,
      });
    }
  },

  onCloseTime() {
    this.setData({
      showTime: false,
    });
  },

  onBuy() {
    if (!this.data.orderId) {
      wx.showToast({
        title: '请选择订单',
        icon: 'error',
        duration: 2000
      });
      return;
    }
    if (!this.data.eatTime) {
      wx.showToast({
        title: '请选择就餐时间',
        icon: 'error',
        duration: 2000
      });
      return;
    }
    const that = this;
    network.request({
      url: `food/create`,
      method: 'POST',
      data: {
        ids: that.data.ids,
        room_order_id: that.data.orderId,
        eat_time: that.data.eatTime,
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.data.code == 100020) {
          wx.redirectTo({
            url: `/pages/success/index?id=${res.data.data.id}&order=${res.data.data.order_id}&time=${res.data.data.eat_time}&price=${res.data.data.price}`
          });
        } else {
          wx.showToast({
            title: '在线订餐失败，可电话点餐！',
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(options.ids);
    this.getOrder();
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
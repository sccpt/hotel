// pages/orderDetails/index.js
import network from '../../utils/network';
/*
 * @Author: yurui 
 * @Date: 2021-05-28
 */
import {
  domain
} from '../../utils/config';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: {},
    domain,
    foods: [],
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

  getData(id) {
    const that = this;
    network.request({
      url: `food/order/details/${id}`,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.data.code == 100010) {
          const arr = [];
          const idArr = res.data.data.food_ids.split(',');
          const foods = res.data.data.foods;
          for (let i = 0; i < idArr.length; i++) {
            for (let j = 0; j < foods.length; j++) {
              if (idArr[i] == foods[j].id) {
                arr.push({
                  ...foods[j],
                  num: 1,
                });
              }
            }
          }
          const foodsArr = that.changeCarData(arr);
          that.setData({
            datas: res.data.data,
            foods: foodsArr,
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

  goHome() {
    wx.navigateTo({
      url: `/pages/food/index`
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(options.id);
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
    var pages = getCurrentPages();
    var beforePage = pages[pages.length - 2];
    beforePage.onLoad({
      active: 0
    });
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
// pages/food/index.js
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
    types: [],
    active: 0,
    title: '全部',
    list: [],
    domain,
    num: 0,
    total: 0,
    carList: [],
    carList2: [],
    show: false,
  },

  getData(type) {
    const that = this;
    network.request({
      url: `food/list?type_id=${type}`,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.data.code == 100010) {
          that.setData({
            list: res.data.data.rows,
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

  getType() {
    const that = this;
    network.request({
      url: `food/types`,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.data.code == 100010) {
          that.setData({
            types: res.data.data.rows,
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

  handleType(e) {
    this.setData({
      active: e.currentTarget.dataset.active,
      title: e.currentTarget.dataset.title,
    });
    this.getData(e.currentTarget.dataset.id || '');
  },

  goDetails(e) {
    wx.navigateTo({
      url: `/pages/foodDetails/index?id=${e.currentTarget.dataset.id}`
    });
  },

  onShowCar() {
    this.setData({
      show: true,
    });
  },

  onClose() {
    this.setData({
      show: false,
    });
  },

  handleBuy(e) {
    const total = this.data.total + Number(e.currentTarget.dataset.price);
    const carList = [...this.data.carList, {
      id: e.currentTarget.dataset.id,
      title: e.currentTarget.dataset.title,
      photo: e.currentTarget.dataset.photo,
      price: e.currentTarget.dataset.price,
      num: 1,
    }];
    this.setData({
      num: this.data.num += 1,
      total,
      carList,
      carList2: this.changeCarData(carList),
    });
  },

  handleMinus(food) {
    const total = this.data.total - Number(food.price);
    const carList = this.data.carList;
    let index = -1;
    for (let i = 0; i < carList.length; i++) {
      if (food.id == carList[i].id) {
        index = i;
      }
    }
    if (index > -1) {
      carList.splice(index, 1);
    }
    this.setData({
      num: this.data.num -= 1,
      total,
      carList,
      carList2: this.changeCarData(carList),
    });
  },

  onChange(e) {
    let food = {};
    const carList = this.data.carList;
    for (let i = 0; i < carList.length; i++) {
      if (e.currentTarget.dataset.id == carList[i].id) {
        food = carList[i];
      }
    }
    if (e.detail > e.currentTarget.dataset.num) {
      const parmas = {
        currentTarget: {
          dataset: {
            ...food,
          },
        }
      };
      this.handleBuy(parmas);
    } else {
      this.handleMinus(food);
    }
  },

  gobuy() {
    const arr = [];
    const carList = this.data.carList;
    for (let i = 0; i < carList.length; i++) {
      arr.push(carList[i].id);
    }
    const ids = arr.join(',');
    if (ids) {
      wx.navigateTo({
        url: `/pages/foodBuy/index?ids=${ids}`
      });
    } else {
      wx.showToast({
        title: '请选择商品',
        icon: 'error',
        duration: 2000
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData('');
    this.getType();
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
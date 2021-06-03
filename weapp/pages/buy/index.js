// pages/buy/index.js
import {
  moment
} from '../../utils/util';
import network from '../../utils/network';
/*
 * @Author: yurui 
 * @Date: 2021-05-28
 */

Page({

  /**
   * 页面的初始数据
   */
  data: {
    startTime: '',
    endTime: '',
    totalTime: '',
    datas: {},
    roomNum: 1,
    people: '',
    people_mobile: '',
    content: '',
    totalPrice: '',
    start_time: '',
    end_time: '',
    typeId: '',
    show: false,
    roomPrice: 0,
  },

  onClose() {
    this.setData({
      show: false
    });
  },

  onChangeRoom(event) {
    const {
      roomPrice,
    } = this.data;
    this.setData({
      roomNum: event.detail,
      totalPrice: event.detail * roomPrice,
    });
  },

  showPopup() {
    this.setData({
      show: true
    });
  },

  getData(id, startTime, endTime) {
    const that = this;
    network.request({
      url: `order/buy?id=${id}&startTime=${startTime}&endTime=${endTime}`,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.data.code == 100010) {
          that.setData({
            datas: res.data.data,
          });
          const priceArr = res.data.data.price;
          let totalPrice = 0;
          for (let i = 0; i < priceArr.length; i++) {
            totalPrice += Number(priceArr[i].price);
          }
          that.setData({
            totalPrice,
            roomPrice: totalPrice,
          });
        } else if (res.data.code == 0) {
          wx.showToast({
            title: res.data.data,
            icon: 'none',
            duration: 2000
          });
          wx.navigateBack();
        } else {
          wx.showToast({
            title: '数据获取失败!',
            icon: 'none',
            duration: 2000
          });
          wx.navigateBack();
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

  onChangePeople(event) {
    this.setData({
      people: event.detail,
    });
  },

  onChangeTel(event) {
    this.setData({
      people_mobile: event.detail,
    });
  },

  onChangeInfo(event) {
    this.setData({
      content: event.detail,
    });
  },

  goPay() {
    const {
      typeId,
      start_time,
      end_time,
      people,
      people_mobile,
      content,
      roomNum,
    } = this.data;
    if (!people) {
      wx.showToast({
        title: '入住人姓名必填！',
        icon: 'error',
        duration: 2000
      });
      return;
    }
    if (!people_mobile) {
      wx.showToast({
        title: '联系电话必填！',
        icon: 'error',
        duration: 2000
      });
      return;
    }
    const myreg = /^1[0-9]{10}$/;
    if (!myreg.test(people_mobile)) {
      wx.showToast({
        title: '手机号码有误！',
        icon: 'error',
        duration: 2000
      });
      return;
    }
    const query = {
      typeId,
      start_time,
      end_time,
      people,
      people_mobile,
      content,
      roomNum,
    };
    this.submit(query);
  },
  submit(query) {
    const that = this;
    network.request({
      url: `order/create`,
      method: 'POST',
      data: query,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.data.code == 100020) {
          wx.redirectTo({
            url: `/pages/pay/index?ids=${res.data.data.ids}&succes=${res.data.data.succes}&roomNum=${query.roomNum}`
          });
        } else {
          wx.showToast({
            title: '订单创建失败，请电话联系我们！',
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
    this.setData({
      totalTime: moment(options.endTime).diff(moment(options.startTime), 'days'),
      startTime: moment(options.startTime).format('MM月DD日'),
      endTime: moment(options.endTime).format('MM月DD日'),
      start_time: moment(options.startTime).format('YYYY-MM-DD'),
      end_time: moment(options.endTime).format('YYYY-MM-DD'),
      typeId: options.id,
    });
    this.getData(options.id, options.startTime, options.endTime);
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
import {
  moment
} from '../../utils/util';
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
    domain,
    startTime: moment().format('MM月DD日'),
    endTime: moment().add(1, 'days').format('MM月DD日'),
    startWeek: moment().format('dddd'),
    endWeek: moment().add(1, 'days').format('dddd'),
    totalTime: '1',
    show: false,
    allStartTime: moment().format('YYYY-MM-DD'),
    allEndTime: moment().add(1, 'days').format('YYYY-MM-DD'),
    datas: [],
    showUser: false,
  },

  goBuy(e) {
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      wx.redirectTo({
        url: `/pages/buy/index?id=${e.currentTarget.id}&startTime=${this.data.allStartTime}&endTime=${this.data.allEndTime}`
      });
    } else {
      this.setData({
        showUser: true
      });
    }
  },
  onCloseUser() {
    this.setData({
      showUser: false
    });
  },

  getUserInfo(event) {
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        wx.setStorageSync('userInfo', res.userInfo);
      }
    })
  },

  onDisplay() {
    this.setData({
      show: true
    });
  },
  onClose() {
    this.setData({
      show: false
    });
  },
  onConfirm(event) {
    const [start, end] = event.detail;
    this.setData({
      show: false,
      startTime: moment(start).format('MM月DD日'),
      endTime: moment(end).format('MM月DD日'),
      startWeek: moment(start).format('dddd'),
      endWeek: moment(end).format('dddd'),
      totalTime: moment(end).diff(moment(start), 'days'),
      allStartTime: moment(start).format('YYYY-MM-DD'),
      allEndTime: moment(end).format('YYYY-MM-DD'),
    });
    this.getData(moment(start).format('YYYY-MM-DD'), moment(end).format('YYYY-MM-DD'));
  },

  getData(startTime, endTime) {
    const that = this;
    network.request({
      url: `room?startTime=${startTime}&endTime=${endTime}`,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.data.code == 100010) {
          that.setData({
            datas: res.data.data,
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

  goRoomDetails(e) {
    wx.navigateTo({
      url: `/pages/roomDetails/index?id=${e.currentTarget.id}`
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      allStartTime: moment(options.startTime).format('YYYY-MM-DD'),
      allEndTime: moment(options.endTime).format('YYYY-MM-DD'),
      startTime: moment(options.startTime).format('MM月DD日'),
      endTime: moment(options.endTime).format('MM月DD日'),
      startWeek: moment(options.startTime).format('dddd'),
      endWeek: moment(options.endTime).format('dddd'),
      totalTime: moment(options.endTime).diff(moment(options.startTime), 'days'),
    });
    this.getData(options.startTime, options.endTime);
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
// pages/my/index.js
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
    avatarUrl: '',
    nickName: '点击登录',
    showUser: false,
    roomOrderNum: 0,
    foodOrderNum: 0,
  },
  getData() {
    const that = this;
    network.request({
      url: `order/statistics`,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.data.code == 100010) {
          that.setData({
            roomOrderNum: res.data.data.room,
            foodOrderNum: res.data.data.food,
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
  onCloseUser() {
    this.setData({
      showUser: false
    });
  },

  getUserProfile(event) {
    const that = this;
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        wx.setStorageSync('userInfo', res.userInfo);
        that.setData({
          avatarUrl: res.userInfo.avatarUrl,
          nickName: res.userInfo.nickName
        });
      }
    })
  },
  goList(e) {
    wx.navigateTo({
      url: `/pages/order/index?active=${e.currentTarget.id}`
    });
  },
  goFood() {
    wx.navigateTo({
      url: `/pages/foodOrder/index?active=0`
    });
  },
  goEval() {
    wx.navigateTo({
      url: `/pages/foodMyEval/index`
    });
  },
  onLogin() {
    const userInfo = wx.getStorageSync('userInfo');
    if (!userInfo) {
      this.setData({
        showUser: true
      });
    } else {
      this.setData({
        avatarUrl: userInfo.avatarUrl,
        nickName: userInfo.nickName
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.onLogin();
    this.getData();
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
// pages/newsDetails/index.js
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
    datas: {},
  },
  getData(id) {
    const that = this;
    network.request({
      url: `news/details/${id}`,
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
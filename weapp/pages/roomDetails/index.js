import network from '../../utils/network';
/*
 * @Author: yurui 
 * @Date: 2021-05-28
 */
import {
  moment
} from '../../utils/util';
import {
  domain
} from '../../utils/config';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    domain,
    banner: [],
    datas: {},
    photoNum: 0,
  },

  goYuding() {
    wx.navigateTo({
      url: `/pages/room/index?startTime=${moment().format('YYYY-MM-DD')}&endTime=${moment().add(1, 'days').format('YYYY-MM-DD')}`
    });
  },

  getData(id) {
    const that = this;
    network.request({
      url: `room/details/${id}`,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.data.code == 100010) {
          if (res.data.data.photo_s) {
            const photos = res.data.data.photo_s.split(',');
            that.setData({
              banner: photos,
              photoNum: photos.length,
            });
          }
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
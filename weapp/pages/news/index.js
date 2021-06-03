// pages/news/index.js
import {
  domain
} from '../../utils/config';
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
    domain,
    listdata: [],
    paginated: {},
    p: 0, //当前分页；默认第一页
    hasMore: true //提示
  },

  goDetails(e) {
    wx.navigateTo({
      url: `/pages/newsDetails/index?id=${e.currentTarget.id}`
    });
  },

  loadmore: function () {
    const that = this;
    const page = ++that.data.p;
    network.request({
      url: `news?pageNum=${page}&pageSize=10`,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.data.rows && res.data.data.rows.length !== 0) {
          that.setData({
            "listdata": that.data.listdata.concat(res.data.data.rows), //加载数据
            "paginated": {
              total: res.data.data.count,
              totalPages: Math.ceil(res.data.data.count / 10),
            },
            "p": page
          })
        } else {
          that.setData({
            "hasMore": false
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadmore();
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
    this.setData({
      p: 0,
      listdata: [],
      hasMore: true,
      paginated: {}
    });
    this.loadmore();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const that = this;
    const paginated = that.data.paginated;
    if (this.data.p < paginated.totalPages) {
      this.loadmore();
    } else {
      that.setData({
        "hasMore": false
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// index.js
// 获取应用实例
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
  data: {
    startTime: moment().format('MM月DD日'),
    endTime: moment().add(1, 'days').format('MM月DD日'),
    startWeek: moment().format('dddd'),
    endWeek: moment().add(1, 'days').format('dddd'),
    totalTime: '1',
    autoplay: true,
    show: false,
    banner: [],
    rooms: [],
    domain,
    allStartTime: moment().format('YYYY-MM-DD'),
    allEndTime: moment().add(1, 'days').format('YYYY-MM-DD'),
  },
  // 事件处理函数
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
      allStartTime: moment(start).format('YYYY-MM-DD'),
      allEndTime: moment(end).format('YYYY-MM-DD'),
      startTime: moment(start).format('MM月DD日'),
      endTime: moment(end).format('MM月DD日'),
      startWeek: moment(start).format('dddd'),
      endWeek: moment(end).format('dddd'),
      totalTime: moment(end).diff(moment(start), 'days'),
    });
  },
  getData() {
    const that = this;
    network.request({
      url: `home`,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.data.code == 100010) {
          that.setData({
            banner: res.data.data.banner,
            rooms: res.data.data.rooms,
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
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    this.getData();
  },
  goYuding() {
    wx.navigateTo({
      url: `/pages/room/index?startTime=${this.data.allStartTime}&endTime=${this.data.allEndTime}`
    });
  },
  goRoomDetails(e) {
    wx.navigateTo({
      url: `/pages/roomDetails/index?id=${e.currentTarget.id}`
    });
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
import {
  domain
} from './config';

const sessionid = wx.getStorageSync('sessionid');

var requestHandler = {
  url: '',
  data: {},
  method: '',
  header: {},
  success: function (res) {},
  fail: function () {},
  complete: function () {}
}

function request(requestHandler) {
  var data = requestHandler.data;
  var url = requestHandler.url;
  var method = requestHandler.method || 'GET';
  var header = requestHandler.header;
  wx.showLoading({
    title: '加载中',
  });
  wx.request({
    url: domain + '/weapp/' + url,
    data: data,
    method: method,
    header: {
      ...header,
      sessionid,
    },
    success: function (res) {
      requestHandler.success(res);
      wx.hideLoading();
    },
    fail: function () {
      wx.hideLoading();
      requestHandler.fail();
    },
    complete: function () {}
  })
}

module.exports = {
  request: request
}
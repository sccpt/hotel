// pages/components/tabbar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    active: Number,
  },

  lifetimes: {
    attached: function () {
      wx.hideHomeButton();
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange: (event) => {
      switch (event.detail) {
        case 0:
          wx.redirectTo({
            url: '/pages/index/index'
          });
          break;
        case 1:
          wx.redirectTo({
            url: '/pages/news/index'
          });
          break;
        case 2:
          wx.navigateTo({
            url: '/pages/food/index'
          });
          break;
        case 3:
          wx.redirectTo({
            url: '/pages/about/index'
          });
          break;
        case 4:
          wx.redirectTo({
            url: '/pages/my/index'
          });
          break;
      }
    },
  }
})
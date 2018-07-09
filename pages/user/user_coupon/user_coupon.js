// pages/user/user_coupon/user_coupon.js

//获取应用实例
const app = getApp()

Page({
  data: {
    navData: [
      {
        text: '未使用'
      },
      {
        text: '已失效'
      }
    ],
    currentTab: 0,
  },
  //事件处理函数
  onLoad: function () {

  },
  switchNav(event) {
    var cur = event.currentTarget.dataset.current;
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
    // console.log("点击tab",event, cur, singleNavWidth, this.data.navScrollLeft);
  },
  switchTab(event) {
    var cur = event.detail.current;

    this.setData({
      currentTab: cur
    });
    // console.log("滑动内容",event, cur, singleNavWidth, this.data.navScrollLeft);
  }
})
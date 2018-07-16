// pages/user/user_index/user_index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    firstItems:[
      {
        icon: "icon-mingpian",
        label: "个人信息",
        bgColor: "#39d87b",
        toUrl: "#"
      }
    ],
    secondItems:[
      {
        icon: "icon-lieb",
        label: "已购买",
        bgColor: "#fcb644",
        toUrl: "../user_course/user_course"
      },
      {
        icon: "icon-gouwuchekong",
        label: "已赠送",
        bgColor: "#fbc660",
        toUrl: "#"
      },
      {
        icon: "icon-liwu",
        label: "优惠券",
        bgColor: "#f4a56d",
        toUrl: "../user_coupon/user_coupon"
      }
    ],
    thirdItems:[
      {
        icon: "icon-youhuiquan",
        label: "联系客服",
        info:"0571-12345678",
        bgColor: "#f98264",
        toUrl: "#"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.dir(app.globalData.userInfo);
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    } else {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo
        })
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
// pages/user/user.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    inforArr: [{
      "icon": "icon-mingpian",
      "title": "个人信息",
      "bgColor": "#4dd372",
      "navigatorUrl": "#"
    }
    ],
    activeArr: [{
      "icon": "icon-lieb",
      "title": "我的活动",
      "bgColor": "#fdba38",
      "navigatorUrl": "#"
    }, {
      "icon": "icon-gouwuchekong",
      "title": "我的已购",
      "bgColor": "#fbc65c",
      "navigatorUrl": "#"
    }, {
      "icon": "icon-liwu",
      "title": "赠送记录",
      "bgColor": "#ff936c",
      "navigatorUrl": "#"
    }, {
      "icon": "icon-youhuiquan",
      "title": "优惠券",
      "bgColor": "#ff7e66",
      "navigatorUrl": "#"
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("-----userPage onload");
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    } else {
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
//index.js
import http from "../../utils/http.js"
const util = require('../../utils/util.js')
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    quickEnter: [
      {
        "icon": "icon-shipin",
        "name": "1元体验"
      },
      {
        "icon": "icon-iconnew",
        "name": "最新课表"
      }, {
        "icon": "icon-huangguan",
        "name": "线下体验"
      },
      {
        "icon": "icon-zixun",
        "name": "我要咨询"
      }],
    listCourses: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("-----indexPage onload");
    this.getListCourse();



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
    console.log("下拉刷新");
    wx.showNavigationBarLoading();
    this.getListCourse();
    setTimeout(function () {
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    }, 2000);
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

  },
  // upper(){
  //   wx.startPullDownRefresh();
  //   setTimeout(function(){
  //     wx.stopPullDownRefresh()
  //   },2000)
  // }
  getListCourse() {
    //此处访问首页课程接口模拟本地数据
    var courses = util.get_index_courses().data;
    if (courses.code == "200") {
      this.setData({ listCourses: courses.data });
    }
  }
})
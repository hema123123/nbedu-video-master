// pages/user/user_course/user_course.js
const util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navData: [{
        text: '专题课1'
      },
      {
        text: '体验课'
      }
    ],
    currentTab: 0,
    listZtCourses: [],
    listZxCourses: []
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getListZtCourse()
    this.getListZxCourse()
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

  },
  getListZtCourse() {
    //此处访问首页课程接口模拟本地数据
    var courses = util.get_index_ztcourses().data;
    if (courses.code == "200") {
      this.setData({ listZtCourses: courses.data });
    }
  },
  getListZxCourse() {
    //此处访问首页课程接口模拟本地数据
    var courses = util.get_index_zxcourses().data;
    if (courses.code == "200") {
      this.setData({ listZxCourses: courses.data });
    }
  }
})
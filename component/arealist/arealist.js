// component/arealist/arealist.js
const util = require('../../utils/util.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag: {
      type:Boolean,
      value:false
    },
    data: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //页面跳转
    gotoList_infor(e) {
      let obj = {
        courseId: e.currentTarget.dataset.courseId,
        name: e.currentTarget.dataset.courseName
      }
      wx.navigateTo({
        url: util.createURL("../list_infor/list_infor", obj)
      });
    }
  }
})
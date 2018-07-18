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
        sort: e.currentTarget.dataset.sort,
        id: e.currentTarget.dataset.id,
        name: e.currentTarget.dataset.name
      }
      console.log(obj);
      wx.navigateTo({
        url: util.createURL("../../detail/detail", obj)
      });
    }
  }
})
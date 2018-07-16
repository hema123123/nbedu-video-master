// component/slidetab/slidetab.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    navsort: Array,
    currentTab: {
      type:Number,
      value:0
    }
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
  }
})
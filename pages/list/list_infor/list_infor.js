// pages/list/list_infor/list_infor.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlay: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("-----detailsPage onload");
    console.log("options:", options);
    wx.setNavigationBarTitle({
      title: options.name
    });

    // var that = this
    // //登陆获取code
    // wx.login({
    //   success: function (res) {
    //     console.log("用户登录后获取的信心：", res, res.code)
    //     //获取openid
    //     that.getOpenId(res.code)
    //   }
    // });

  },

  // //后台处理微信获取用户那个code的处理  
  // getOpenId: function (code) {
  //   var that = this;
  //   wx.request({
  //     url: "https://api.weixin.qq.com/sns/jscode2session?appid=小程序appid&secret=小程序应用密钥&js_code=" + code + "&grant_type=authorization_code",
  //     data: {},
  //     method: 'GET',
  //     success: function (res) {
  //       that.generateOrder(res.data.openid)

  //     },
  //     fail: function () {
  //       // fail

  //     },
  //     complete: function () {
  //       // complete

  //     }
  //   })
  // },
  // /**生成商户订单 获取（param）*/
  // generateOrder: function (openid) {
  //   var that = this
  //   //统一支付
  //   wx.request({
  //     url: '后台路径',
  //     method: 'GET',
  //     data: {
  //       gfee: '商品价钱',
  //       gname: '商品名称',
  //       openId: openid
  //       // （商品价钱和商品名称根据自身需要是否传值, openid为必传）
  //     },
  //     success: function (res) {
  //       var pay = res.data
  //       //发起支付
  //       var timeStamp = pay[0].timeStamp;
  //       var packages = pay[0].package;
  //       var paySign = pay[0].paySign;
  //       var nonceStr = pay[0].nonceStr;
  //       var param = { "timeStamp": timeStamp, "package": packages, "paySign": paySign, "signType": "MD5", "nonceStr": nonceStr };
  //       that.pay(param)

  //     },
  //   })
  // },
  // /* 支付  */
  // pay: function (param) {
  //   console.log("支付")
  //   console.log(param)
  //   wx.requestPayment({
  //     timeStamp: param.timeStamp,
  //     nonceStr: param.nonceStr,
  //     package: param.package,
  //     signType: param.signType,
  //     paySign: param.paySign,
  //     success: function (res) {
  //       // success
  //       wx.navigateBack({
  //         delta: 1, // 回退前 delta(默认为1) 页面
  //         success: function (res) {
  //           wx.showToast({
  //             title: '支付成功',
  //             icon: 'success',
  //             duration: 2000
  //           })

  //         },
  //         fail: function () {
  //           // fail


  //         },
  //         complete: function () {
  //           // complete

  //         }
  //       })

  //     },
  //     fail: function (res) {
  //       // fail

  //     },
  //     complete: function () {
  //       // complete

  //     }
  //   })

  // },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('courseVideo')
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '【视频课-彩铅】小森林彩铅疗愈课',
      path: '/page/detail/detail?id=123',
      success: function (res) {
        console.log("转发成功", res);
      },
      fail: function (res) {
        console.log("转发失败", res);
      }
    }
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },
  coursePlay() {
    this.setData({ isPlay: !this.data.isPlay });
    this.data.isPlay ? this.videoContext.play() : this.videoContext.pause();
  },
  gotopay() {
    console.log("这里要去支付啦");
    wx.requestPayment({
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {
      },
      'fail': function (res) {
      }
    })
  }
})
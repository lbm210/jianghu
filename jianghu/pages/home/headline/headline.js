// pages/home/headline/headline.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showPop: false,
    itemData: [
      {
        state: 1,
        nmb: 1532453213,
        time: 1532487644321,
        txt:
          "3月22日晚在晋安区湖塘路段丢失黑色双肩包和钱包各一个，内含身份证、驾驶证和行驶证及一些合同资料，有拾到者请与我联系，重谢！",
        imgUrl: "../../../images/big-dog.png",
        needMoney: 120.0 // 需付金额
      },
      {
        state: 2,
        nmb: 1532453213,
        time: 1532487644321,
        txt:
          "3月22日晚在晋安区湖塘路段丢失黑色双肩包和钱包各一个，内含身份证、驾驶证和行驶证及一些合同资料，有拾到者请与我联系，重谢！",
        imgUrl: "../../../images/big-dog.png",
        money: 120.0, // 微信应付金额
        smallMoney: 20.0, //零钱抵扣
        realPayment: 300 //实付款
      },
      {
        state: 3,
        nmb: 1532453213,
        time: 1532487644321,
        txt:
          "3月22日晚在晋安区湖塘路段丢失黑色双肩包和钱包各一个，内含身份证、驾驶证和行驶证及一些合同资料，有拾到者请与我联系，重谢！",
        imgUrl: "../../../images/big-dog.png",
        money: 120.0, // 微信应付金额
        smallMoney: 20.0, //零钱抵扣
        realPayment: 300 //实付款
      },
      {
        state: 4,
        nmb: 1532453213,
        time: 1532487644321,
        txt:
          "3月22日晚在晋安区湖塘路段丢失黑色双肩包和钱包各一个，内含身份证、驾驶证和行驶证及一些合同资料，有拾到者请与我联系，重谢！",
        imgUrl: "../../../images/big-dog.png",
        money: 120.0, // 微信应付金额
        smallMoney: 20.0, //零钱抵扣
        realPayment: 300 //实付款
      },
      {
        state: 5,
        nmb: 1532453213,
        time: 1532487644321,
        txt:
          "3月22日晚在晋安区湖塘路段丢失黑色双肩包和钱包各一个，内含身份证、驾驶证和行驶证及一些合同资料，有拾到者请与我联系，重谢！",
        imgUrl: "../../../images/big-dog.png",
        money: 120.0, // 微信应付金额
        smallMoney: 20.0, //零钱抵扣
        realPayment: 300 //实付款
      },
      {
        state: 6,
        nmb: 1532453213,
        time: 1532487644321,
        txt:
          "3月22日晚在晋安区湖塘路段丢失黑色双肩包和钱包各一个，内含身份证、驾驶证和行驶证及一些合同资料，有拾到者请与我联系，重谢！",
        imgUrl: "../../../images/big-dog.png",
        money: 120.0, // 微信应付金额
        smallMoney: 20.0, //零钱抵扣
        realPayment: 300 //实付款
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},


  toCostheadline:function(){
    wx.navigateTo({
      url:'../costheadline/costheadline'
    })
  },
  /** 申请失败原因 */
  errReason: function () {
    this.setData({
      showPop: true,
      popErrReason: true
    })
  },
  /** 申请退款*/
  refund: function (e) {
    this.setData({
      showPop: true,
      popRefund: true
    })
  },
  /** 退款路径*/
  refundPath: function (e) {
    this.setData({
      showPop: true,
      popRefundPath: true
    })
  },
  /** 联系客服 */
  telKF: function () {
    this.setData({
      showPop: true,
      popKF: true
    })
  },
  /** 帖子效果 */
  effect: function () {
    this.setData({
      showPop: true,
      popEffect: true
    })
  },
  pop: function () {
    this.setData({
      showPop: false,
      popKF: false,
      popEffect: false,
      popErrReason: false,
      popRefund: false,
      popRefundPath: false
    })
  }
});
const ut = require('../../../utils/util')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showPop:false,
    itemData: [
      {
        state: 1,
        nmb: 1533213,
        time: 1532487644321,
        txt:
          "3月22日晚在晋安区湖塘路段丢失黑色双肩包和钱包各一个，内含身份证、驾驶证和行驶证及一些合同资料，有拾到者请与我联系，重谢！",
        imgUrl: "../../../images/big-dog.png",
        money: 120.0, //待付金额
        smallMoney: 20.0 //零钱抵扣
      },
      {
        state: 2,
        nmb: 15324513,
        time: 1532487644321,
        txt:
          "3月22日晚在晋安区湖塘路段丢失黑色双肩包和钱包各一个，内含身份证、驾驶证和行驶证及一些合同资料，有拾到者请与我联系，重谢！",
        imgUrl: "../../../images/big-dog.png",
        money: 120.0, //应付金额
        smallMoney: 20.0, //零钱抵扣
        surMoney: 1230.0, //剩余助推金
        ztMoney: 1230.0 // 助推总金额
      },
      {
        state: 3,
        nmb: 153243213,
        time: 1532487644321,
        txt:
          "3月22日晚在晋安区湖塘路段丢失黑色双肩包和钱包各一个，内含身份证、驾驶证和行驶证及一些合同资料，有拾到者请与我联系，重谢！",
        imgUrl: "../../../images/big-dog.png",
        money: 120.0, //应付金额
        smallMoney: 20.0, //零钱抵扣
        surMoney: 1230.0, //剩余助推金
        ztMoney: 1230.0 // 助推总金额
      },
      {
        state: 4,
        nmb: 1532453213,
        time: 1532487644321,
        txt:
          "3月22日晚在晋安区湖塘路段丢失黑色双肩包和钱包各一个，内含身份证、驾驶证和行驶证及一些合同资料，有拾到者请与我联系，重谢！",
        imgUrl: "../../../images/big-dog.png",
        money: 120.0, //应付金额
        smallMoney: 20.0, //零钱抵扣
        surMoney: 1230.0, //剩余助推金
        ztMoney: 1230.0 // 助推总金额
      },
      {
        state: 5,
        nmb: 132453213,
        time: 1532487644321,
        txt:
          "3月22日晚在晋安区湖塘路段丢失黑色双肩包和钱包各一个，内含身份证、驾驶证和行驶证及一些合同资料，有拾到者请与我联系，重谢！",
        imgUrl: "../../../images/big-dog.png",
        money: 120.0, //应付金额
        smallMoney: 20.0, //零钱抵扣
        surMoney: 1230.0, //剩余助推金
        ztMoney: 1230.0 // 助推总金额
      },
      {
        state: 6,
        nmb: 15324533,
        time: 1532487644321,
        txt:
          "3月22日晚在晋安区湖塘路段丢失黑色双肩包和钱包各一个，内含身份证、驾驶证和行驶证及一些合同资料，有拾到者请与我联系，重谢！",
        imgUrl: "../../../images/big-dog.png",
        money: 120.0, //应付金额
        smallMoney: 20.0, //零钱抵扣
        surMoney: 1230.0, //剩余助推金
        ztMoney: 1230.0 // 助推总金额
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setTime();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},
  /** */
  goToCreatcard: function(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../../fabu/creatcard/creatcard?id=id"
    });
  },
  setTime: function() {
    var data = this.data.itemData.map(function(val) {
      val.time = ut.formatTime(new Date(val.time));
      return val;
    });
    this.setData({
      itemData: data
    });
  },
  toAddBoost:function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url:'../addboost/addboost?id=id'
    });
  },
  /** 关闭帖子 */
  closeCard:function(e){
    var id = e.currentTarget.dataset.id;
    wx.setStorageSync('closeCardId',id);
    this.setData({
      showPop:true,
      popClose:true
    })
  },
  determine:function(){
    var id = wx.getStorageSync('closeCardId');
    // wx.request({
    //   url:'',
    //   data:{
    //     id:id
    //   },
    //   success:function(red){

    //   }
    // })
    this.setData({
      showPop: false,
      popClose: false,
    })
  },
  /** 联系客服 */
  telKF:function(){
    this.setData({
      showPop: true,
      popKF: true
    })
  },
  /** 帖子效果 */
  effect:function(){
    this.setData({
      showPop: true,
      popEffect: true
    })
  },
  /** 失败原因 */
  errReason:function(){
    this.setData({
      showPop: true,
      popErrReason: true
    })
  },
  /** 退款路径*/
  refundPath:function(e){
    this.setData({
      showPop: true,
      popRefundPath: true
    })
  },
  /** 审核失败二次编辑 */
  goToSecondEdit:function(e){
    var id = e.currentTarget.dataset.id;
    wx.setStorageSync('secondEditId',id)
    wx.navigateTo({
      url:'../../fabu/secondEdit/secondEdit'
    })
  },
  pop:function(){
    this.setData({
      showPop: false,
      popClose: false,
      popKF: false,
      popEffect: false,
      popReason:false,
      popRefundPath: false
    })
  }
});
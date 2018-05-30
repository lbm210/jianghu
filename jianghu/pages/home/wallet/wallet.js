const ut = require('../../../utils/util')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    profitData: [
      {
        txt: "获取助推金",
        time: 135432454324,
        money: 0.21
      },
      {
        txt: "支付",
        time: 135432454324,
        money: 0.21
      },
      {
        txt: "获取助推金",
        time: 135432454324,
        money: 0.21
      },
      {
        txt: "提现",
        time: 135432454324,
        money: 0.21
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
  setTime: function() {
    var data = this.data.profitData.map(function(val) {
      val.time = ut.formatTime(new Date(val.time));
      return val;
    });
    this.setData({
      profitData: data
    });
  },
  toFB:function(){
    wx.redirectTo({
      url:'../../fabu/creatcard/creatcard'
    })
  },
  toIndex:function(){
    wx.switchTab({
      url:'../../index/index'
    })
  },
});
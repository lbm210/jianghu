const ut = require('../../../utils/util');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    itemData: [
      {
        imgUrl: "../../../images/girl.png",
        name: "胡一菲",
        time: 1524039865288,
        money: 0.35
      },
      {
        imgUrl: "../../../images/girl.png",
        name: "胡一菲",
        time: 1524039855288,
        money: 0.35
      },
      {
        imgUrl: "../../../images/girl.png",
        name: "胡一菲",
        time: 1524038865288,
        money: 0.35
      },
      {
        imgUrl: "../../../images/girl.png",
        name: "胡一菲",
        time: 1524039065288,
        money: 0.35
      },
      {
        imgUrl: "../../../images/girl.png",
        name: "胡一菲",
        time: 1524039805288,
        money: 0.35
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
    var data = this.data.itemData.map(function(val) {
      val.time = ut.formatTime(new Date(val.time));
      return val;
    });
    this.setData({
      itemData: data
    });
  }
});
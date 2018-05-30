// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      tx: "../../images/mv.png",
      name: "张士林",
      phone: 15563654524
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

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
  telKF: function () {
    this.setData({
      showPop: true,
      popKF: true
    })
  },
  pop: function () {
    this.setData({
      showPop: false,
      popKF: false
    })
  },
  jumpPage: function(e) {
    var id = e.target.id
    if (id == "wallet") {
      wx.navigateTo({ url: "wallet/wallet" });
    } else if(id == "card") {
      wx.navigateTo({ url: "card/card" });
    } else if(id == "headline") {
      wx.navigateTo({ url: "headline/headline" });
    } else if(id == "helped") {
      wx.navigateTo({ url: "helped/helped" });
    }
  }
});
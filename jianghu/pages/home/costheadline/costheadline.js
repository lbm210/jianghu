// pages/home/costheadline/costheadline.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    checked: false,
    money: 1000,
    smallMoney: "20.00"
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
   *  零钱开关
   */
  switchSmallChange: function(e) {
    this.setData({
      checked: !this.data.checked
    });
  },
  toFB: function() {
    wx.redirectTo({
      url: "../../fabu/creatcard/creatcard"
    });
  },
  toIndex: function() {
    wx.switchTab({
      url: "../../index/index"
    });
  }
});
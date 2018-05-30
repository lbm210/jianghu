// pages/home/addboost/addboost.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    checked: false,
    moneyData: [
      { id: "m1", nmb: 10, on: false },
      { id: "m2", nmb: 20, on: true },
      { id: "m3", nmb: 50, on: true },
      { id: "m4", nmb: 100, on: true },
      { id: "m5", nmb: 300, on: true },
      { id: "m6", nmb: 500, on: true }
    ]
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

  /** 零钱开关 */
  switchSmallChange: function(e) {
    this.setData({
      checked: !this.data.checked
    });
  },
  /** 获取用户加助金额 */
  getMoney: function(e) {
    let that = this;
    let id = e.target.id;
    let moneyData = this.data.moneyData.map(function(item) {
      if (id == item.id) {
        item.on = !item.on;
        if (!item.on) {
          that.setData({
            checkMoney: item.nmb
          });
          console.log(that.data.checkMoney);
        } else {
          that.setData({ checkMoney: 0 });
        }
      } else {
        item.on = true;
      }
      return item;
    });
    this.setData({ moneyData: moneyData });
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
const ut = require('../../../utils/util');
const pub = require('../../../public/public');

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
    ],
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
    this.setData({ textLength: 0 });
    this.setTime();
    this.initMoney();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // this.initMoney();
  },
  /** 初始化金额 */
  initMoney:function(){
    for (var i = 0; i < this.data.moneyData.length;i++){
      if (!this.data.moneyData[i].on){
        this.setData({
          checkMoney: this.data.moneyData[i].nmb
        })
      }
    }
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
  /** 零钱开关 */
  switchSmallChange: function(e) {
    this.setData({
      checked: !this.data.checked
    });
  },
  /** 设置textaera length */
  showVlaLength: function(e) {
    this.setData({ textLength: e.detail.value.length });
  },
  /** 设置时间显示格式 */
  setTime: function() {
    var data = this.data.itemData.map(function(val) {
      val.time = ut.formatTime(new Date(val.time));
      return val;
    });
    this.setData({
      itemData: data
    });
  },
  /** 输入加助金额 */
  setMoney: function(e) {
    let checkMoney = pub.trim(e.detail.value);
    let moneyData = this.data.moneyData.map(function(item) {
      item.on = true;
      return item;
    });
    this.setData({
      moneyData: moneyData,
      checkMoney: checkMoney
    });
  },
  /** 买单 */
  payment:function(){
    wx.requestPayment({
      success:function(){

      },
      fail:function(err){
        console.log(err)
      }
    });
  }
});
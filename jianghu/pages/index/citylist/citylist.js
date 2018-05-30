// pages/index/citylist/citylist.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cityListState: false,
    cityData: [
      { id: 51, city: "朝阳在线" },
      { id: 52, city: "朝阳1在线" },
      { id: 53, city: "朝阳213在线" },
      { id: 54, city: "朝阳345在线" },
      { id: 55, city: "朝阳546在线" },
      { id: 41, city: "a在线" },
      { id: 1, city: "昌平在线" },
      { id: 2, city: "东城在线" },
      { id: 3, city: "西城在线" },
      { id: 4, city: "海淀在线" },
      { id: 5, city: "崇文在线" },
      { id: 6, city: "大兴在线" },
      { id: 7, city: "通州在线" },
      { id: 8, city: "门头沟在线" },
      { id: 9, city: "延庆在线" },
      { id: 10, city: "怀柔在线" },
      { id: 12, city: "燕郊在线" },
      { id: 11, city: "三河在线" },
      { id: 13, city: "天津在线" },
      { id: 14, city: "北京在线" },
      { id: 15, city: "上海在线" },
      { id: 16, city: "广州在线" },
      { id: 17, city: "深圳在线" },
      { id: 18, city: "东莞在线" },
      { id: 19, city: "南京在线" },
      { id: 20, city: "成都在线" },
      { id: 21, city: "重庆在线" }
    ],
    cityList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},
  showList: function() {
    this.setData({ cityListState: true });
  },
  dataShow: function(e) {
    if (!e.detail.value) {
      this.setData({ cityListState: false });
    }
  },
  changeCity: function(e) {
    var val = e.detail.value,
      arr = [];
    this.data.cityData.map(function(item) {
      console.log(item.city.indexOf(val));
      if (item.city.indexOf(val) != -1 && val) {
        arr.push(item);
      }
    });
    console.log(arr);
    this.setData({
      cityList: arr
    });
  },
  searchCity: function() {
    if (!this.data.cityList.length) {
      wx.showToast({
        title: "暂无此城市或城市拼写错误，请重新输入",
        icon: "none"
      });
      setTimeout(() => {
        this.setData({ cityListState: false });
      }, 1500);
    }
  },
  /** 返回首页 并保存选中的城市 */
  setCity:function(e){
    // console.log(e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id;
    var address;
    this.data.cityData.map(function(item) {
      if (item.id == id) {
        address = item.city
      }
    });
    address = address.substring(0,address.length-2)
    wx.removeStorageSync('address')
    wx.removeStorageSync('addressId')
    wx.setStorageSync('address',address);
    wx.setStorageSync('addressId',id );
    wx.switchTab({ url: "../index" });
  }
});
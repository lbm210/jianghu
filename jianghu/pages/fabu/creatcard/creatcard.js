const pub = require('../../../public/public')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showPop: false,
    popState:1, //弹窗状态
    textLength: 0,
    userInfo: {
      tit: "",
      text: null,
      happendate: "",
      address: "",
      phone: null,
      date: null, //有效期
      reward: null, //悬赏金
      boostmoney: 200, //助推金
      smallmoney: 0, //零钱
      money: 200 //应付金额
    },
    imgUrlData:[],
    state: 0,
    validateCode: null
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

  
  /** 选择上传图片 */
  chooseImg: function() {
    let that = this;
    if (!that.data.imgUrlData) {
      var imgData = []
    } else {
      var imgData = that.data.imgUrlData;
    } 
    var length = imgData.length
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        
        for (var i = 0; i < tempFilePaths.length; i++) {
          if (i + length > 8 )return;
          imgData.push({ 
            imgUrl: tempFilePaths[i], 
            show: true, 
            id: "img" + (i + length)
          });
          that.setData({ imgUrlData: imgData });
        }
      }
    });
  },
  /** 删除照片 */
  deleteImg: function(e) {
    let that = this
    let id = e.target.id;
    var imgData = this.data.imgUrlData
    imgData.forEach(function (value, index, arr) {
      if (value.id == id) {
        imgData.splice(index,1)
      }
      that.setData({ imgUrlData: imgData });
    });
  },
  /** 设置输入字数 */
  showVlaLength: function(e) {
    this.setData({ textLength: e.detail.value.length });
  },
  /** 零钱开关 */
  switchSmallChange: function(e) {
    this.setData({
      checked: !this.data.checked
    });
  },
  /** 设置助推金 */
  setBoostmoney:function(e){
    this.setData({ 
      'userInfo.boostmoney': e.detail.value
    });
  },
  regPhone: function(e) {
    let value = pub.trim(e.detail.value);
    let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
    console.log(reg.test(value));
    if (!reg.test(value)) {
      wx.showToast({
        title: "手机号码格式不正确",
        icon: "none",
        mask: true
      });
      this.setData({
        regPhone: false
      });
    } else {
      this.setData({ regPhone: true });
    }
  },
  getValidate: function() {
    let state = this.data.regPhone;
    if (!state) {
      wx.showToast({
        title: "手机号码格式不正确",
        icon: "none",
        mask: true
      });
      return;
    }
    var that = this;
    var time = 10;
    var timeInteval = setInterval(function() {
      time--;
      that.setData({
        countDown: time,
        state: 1
      });
      if (time < 0) {
        clearInterval(timeInteval);
        that.setData({
          state: 2
        });
      }
    }, 1000);
  },
  againValidate: function() {
    var that = this;
    var time = 10;
    var timeInteval = setInterval(function() {
      time--;
      that.setData({
        countDown: time,
        state: 1
      });
      if (time < 0) {
        clearInterval(timeInteval);
        that.setData({
          state: 2
        });
      }
    }, 1000);
  },
  
  validateCode: function(e) {
     e.detail.value
   
    var nmb = 1234;
    var code = e.detail.value;
    if (nmb == code) {
      this.setData({ ERR_OK: true });
    }else{
      this.setData({ ERR_OK: false });
    }
  },
  payment: function() {
    wx.showToast({
      title: "支付成功",
      mask: true
    });
  },
  setDate: function(e) {
    let date = e.detail.value;
    this.setData({
      date: date,
      'userInfo.happendate': date
    });
  },
  /** 助推金说明 */
  prompt:function(){
    this.setData({
      showPop:true
    })
  },
  pop:function(){
    this.setData({
      showPop: false
    })
  }
});
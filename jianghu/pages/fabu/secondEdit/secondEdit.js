const pub = require('../../../public/public')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showPop: false,
    textLength: 0,
    userInfo: {
      tit: "",
      text: null,
      happendate: "",
      address: "",
      date: null, //有效期
      reward: null, //悬赏金
      money: 200 //已付
    },
    state: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var userId = wx.getStorageSync("secondEditId");
    // this.setData({
    //   userId: userId
    // })
    this.getData(userId);
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
  /** 请求数据 */
  getData: function(id) {
    var id = id;
    console.log(id);
  },

  /** 选择上传图片 */
  chooseImg: function() {
    let that = this;
    if (!that.data.imgUrlData) {
      var imgData = [];
    } else {
      var imgData = that.data.imgUrlData;
    }
    var length = imgData.length;
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;

        for (var i = 0; i < tempFilePaths.length; i++) {
          if (i + length > 8) return;
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
    let that = this;
    let id = e.target.id;
    var imgData = this.data.imgUrlData;
    imgData.forEach(function(value, index, arr) {
      if (value.id == id) {
        imgData.splice(index, 1);
      }
      that.setData({ imgUrlData: imgData });
    });
  },
  /** 设置输入字数 */
  showVlaLength: function(e) {
    this.setData({ textLength: e.detail.value.length });
  },
  /** 设置时间 */
  setDate: function(e) {
    let date = e.detail.value;
    this.setData({
      date: date,
      "userInfo.happendate": date
    });
  },
  /** 提交审核 */
  submitReview: function() {
    console.log(123);
    var that = this;
    this.setData({
      once: true
    });
    setTimeout(() => {
      that.setData({
        showPop: true,
        once: false
      });
    }, 500);
  },
  /** 弹窗 */
  pop: function() {
    this.setData({
      showPop: false
    });
  }
});
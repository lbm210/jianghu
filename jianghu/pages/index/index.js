const ut = require('../../utils/util')
//获取应用实例
const app = getApp()

Page({
  data: {
    load:true,
    loading:true,
    loadingTxt:'正在加载...',
    address: "白城兆南",
    motto: "",
    userInfo: {},
    hasUserInfo: false,
    dynamic: {
      indicatorDots: false,
      autoplay: true,
      interval: 4000,
      duration: 1000,
      vertical: true,
      circular: true,
      text: [
        "卡时间段和阿萨德发斯蒂芬阿萨德飞蒂芬阿asdf asdf asdfas fasdf sadf斯蒂芬阿斯蒂芬萨",
        "的说法是否阿斯蒂芬阿斯蒂芬阿斯蒂芬萨达按时",
        "大阿斯蒂芬阿斯蒂芬阿斯蒂芬阿萨德发斯蒂芬是的发送到发阿斯蒂芬按时"
      ]
    },
    indaList: [
      {
        tit: "江湖救急(个)",
        nbm: 6699
      },
      {
        tit: "爱心助推(次)",
        nbm: 126699
      },
      {
        tit: "爱心人气",
        nbm: 26699
      },
      {
        tit: "推广大使",
        nbm: 36699
      }
    ],
    infoData: [
      {
        id: 10,
        state: 0,
        txUrl: "../../images/tx10.png",
        name: "快乐崇拜",
        time: 1524039865288,
        phone: 15636568965,
        txt: "谁看家我家狗拉谁看家我家狗拉谁看家我家狗拉",
        ioUrl: "../../images/dog.png",
        hpImglist: [
          "../../images/girl.png",
          "../../images/girl.png",
          "../../images/girl.png",
          "../../images/girl.png",
          "../../images/girl.png",
          "../../images/girl.png"
        ],
        nbm: 120
      },
      {
        id: 11,
        state: 1,
        txUrl: "../../images/tx10.png",
        name: "快乐崇拜",
        time: 1524039815288,
        phone: 15636568965,
        txt: "谁看家我家狗拉谁看家我家狗拉谁看家我家狗拉",
        ioUrl: "../../images/dog.png",
        hpImglist: [
          "../../images/girl.png",
          "../../images/girl.png",
          "../../images/girl.png",
          "../../images/girl.png",
          "../../images/girl.png",
          "../../images/girl.png"
        ],
        nbm: 120
      }
    ],
    ztList: [
      {
        imgUrl: "../../images/girl.png",
        name: "张三"
      },
      {
        imgUrl: "../../images/girl.png",
        name: "李四"
      }
    ],
    fbList: [
      {
        imgUrl: "../../images/girl.png",
        name: "angel"
      },
      {
        imgUrl: "../../images/girl.png",
        name: "李四"
      }
    ]
  },

  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          hasUserInfo: true
        });
      };
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    }
    this.setTime();
    this.setName();
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.getAddress();
  },

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
  onReachBottom: function(e) {
    var that = this;
    this.setData({
      load:true,
      loading:true
    })
    wx.request({
      url:'',
      success:function(res){
        if(res.data){
          var data = that.data.infoData.concat(res.data);
          that.setData({ infoData: data });
        }else{
          that.setData({ 
            loading:false,
            loadingTxt:'没有更多数据了'
          });
        }
      }
    })
  },

  /** 获取地理位置 */
  getAddress: function() {
    var that = this;
    var address = wx.getStorageSync("address");
    console.log(address)
    if (!address) {
      wx.getSetting({
        success: res => {
          if (!res.authSetting["scope.userLocation"]) {
            wx.authorize({
              scope: "scope.userLocation",
              success: function(res) {
                console.log(res);
              }
            });
          }
          wx.getLocation({
            success: res => {
              var latitude = res.latitude;
              var longitude = res.longitude;
              console.log(latitude, longitude);
              //   wx.request({
              //     url: "",
              //     data: {
              //       latitude: latitude,
              //       longitude: longitude
              //     },
              //     success:function(res){
              //       console.log(res)
              //       that.setData({

              //       })
              //     }
              //  })
            }
          });
        }
      });
    } else {
      that.setData({
        address: address,
        addressId: wx.getStorageSync("addressId")
      });
      // wx.request({
      //   url:'',
      //   data:{},
      //   success:function(res){
      //     that.setData({
      //       address: address,
      //       addressId: wx.getStorageSync("addressId")
      //     });
      //   }
      // })
    }
  },
  isChinese: function(val) {
    var str = val.name.slice(0, 1);
    if (str.charCodeAt() > 255) {
      val.name = val.name.slice(0, 1) + "**";
    } else {
      val.name = val.name.slice(0, 2) + "**";
    }
  },
  setName: function() {
    var that = this;
    var data = this.data.ztList.map(function(val) {
      that.isChinese(val);
      return val;
    });
    var fData = this.data.fbList.map(function(val) {
      that.isChinese(val);
      return val;
    });

    this.setData({
      ztList: data,
      fbList: fData
    });
  },
  setTime: function() {
    var data = this.data.infoData.map(function(val) {
      val.time = ut.formatTime(new Date(val.time));
      return val;
    });
    this.setData({
      infoData: data
    });
  },
  goInfo: function(e) {
    let id = e.currentTarget.id;
    wx.navigateTo({
      url: '../details/details'
    });
  },
  getCity:function(e) {
    wx.navigateTo({
      url:'citylist/citylist'
    })
  }
});

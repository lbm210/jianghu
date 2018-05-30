// pages/details/details.js
const ut = require('../../utils/util')
const pub = require('../../public/public')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    display:'none',
    mask: false,
    gzh:'白城之窗',
    wx:'tnccoo',
    userInfo: {
      tx: "../../images/tx10.png",
      name: "小张",
      phone: 15698658956,
      time: "2018/4/25",
      date: 10,
      tit:
        "本人于18日晚20点在新华小区遗失一只爱犬，感谢爱心帮助寻找，万分感谢！",
      money: 200,
      happenTime: "2014/4/12 18:30",
      address: "北京市昌平区温泉广场",
      text:
        "3月22日晚在晋安区湖塘路段丢失黑色双肩包和钱包各一个，内含身份证、驾驶证和行驶证及一些合同资料，有拾到者请与我联系，重谢！",
      imgUrl: [
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=811071632,1787347836&fm=27&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1808865818,583971105&fm=27&gp=0.jpg",
        "https://up.enterdesk.com/edpic/b4/fc/c7/b4fcc7c394509660f8ff422010c58782.jpg",
        "https://up.enterdesk.com/edpic/16/a0/af/16a0aff5a531b4a3be85bf12f0a3928a.jpg",
      ]
    },
    money: "未设置",
    nmb: 100,
    boostImg: [
      "../../images/girl.png",
      "",
      "../../images/girl.png",
      "../../images/girl.png",
      "../../images/girl.png",
      "../../images/girl.png",
      "../../images/girl.png",
      "../../images/girl.png",
      "../../images/girl.png"
    ],
    browseData: {
      browseN: 45321,
      canyu: 45324
    },
    indicator: {
      left: 100
    },
    infoData: [
      {
        id: 10,
        state: 0,
        txUrl: "../../images/tx10.png",
        name: "快乐崇拜",
        time: 1524039865288,
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

  /** 生命周期函数--监听页面加载 */
  onLoad: function(options) {
    /** 接受参数 */
    // this.getParam(options);
    this.setName();
    this.setTime();
  },

  /** 生命周期函数--监听页面初次渲染完成 */
  onReady: function() {},

  /** 生命周期函数--监听页面显示 */
  onShow: function() {},

  /** 获取跳转页面的数据 */
  getParam: function(options) {
    this.setData({
      id: options.id
    });
  },
  telKefu: function() {
    this.setData({
      showKefuPop:true
    })
  },
  toFB: function() {
    wx.switchTab({
      url: "../fabu/fabu"
    });
  },
  /** 设置名字 */
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
    var fData = that.data.fbList.map(function(val) {
      that.isChinese(val);
      return val;
    });

    that.setData({
      fbList: fData
    });
  },
  /** 设置时间 */
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
    // wx.redirectTo({
    //   url: `../details/details?id= ${id}`
    // });
  },
  /** 跳转首页 */
  gotoIndex:function(){
    wx.switchTab({
      url:'../index/index'
    })
  },
  /** 跳转到查看更多页面 */
  seyMore: function() {
    wx.navigateTo({ url: "moreABM/moreABM" });
  },
  /** 跳转到我的求助帖 */
  toCard:function(){
    console.log(123)
    wx.navigateTo({ url: "../home/card/card" });
  },
  /** 关闭弹窗 */
  pop:function(){
    this.setData({
      showPop:false,
      showKefuPop:false
    })
  },
  goToAddBoost: function() {
    wx.navigateTo({ url: "addboostmoney/addboostmoney" });
  },
  goToBoost: function() {
    wx.navigateTo({ url: "boost/boost" });
  },
  /** 弹窗显示 */
  tel: function() {
    this.setData({
      mask: true
    });
  },
  /** 关闭弹窗 */
  close: function() {
    this.setData({
      mask: false
    });
  },
  /** 打电话 */
  telphone: function() {
    wx.makePhoneCall({
      phoneNumber: this.userInfo.phone
    });
  },
  /** 复制 */
  copy: function() {
    var that = this;
    var phone = String(that.data.userInfo.phone);
    wx.setClipboardData({
      data: phone,
      success: function(res) {
        wx.getClipboardData({
          success: function(res) {
            console.log(res.data); // data
          }
        });
      }
    });
  },
  /** 添加到通讯录 */
  addPhoneContact: function() {
    let name = this.data.userInfo.name,
      phone = this.data.userInfo.phone;
    wx.addPhoneContact({
      firstName: name,
      mobilePhoneNumber: phone,
      success: function(res) {
        console.log(res.errMsg);
      }
    });
  },
  /** 关闭助推说明 */
  introPop:function(){
    this.setData({
      showIntroPop: false
    })
  },
  /**设置转发 */
  share:function(){
    this.setData({
      showIntroPop:true
    })
  },
  onShareAppMessage: function(res) {
    this.setData({
      showIntroPop: false
    })
    var that = this;
    return {
      path: "/pages/details/details",
      success: function(res) {
        // that.goToBoost();
        that.setData({
          showPop:true,
          popState:4
        })
      },
      fail: function(res) {
        //转发失败
      }
    };
  },
  /** 查看大图 */
  swiper:function(e){
    var that = this
    this.setData({
      imgSwiper:true
    })
    let index = e.currentTarget.dataset.index;
    let pictures = that.data.userInfo.imgUrl
    wx.previewImage({
      current: pictures[index],
      urls: that.data.userInfo.imgUrl
    })
  },
  /** 获得用户信息 */
  bindGetUserInfo: function (e) {
    this.setData({
      userTx: e.detail.userInfo.avatarUrl,
      userName: e.detail.userInfo.nickName
    })
  },
  /** 回复信息 */
  reply:function(){
    this.setData({
      display: 'flex',
      focus:true,
      userId: e.target.id
    })
  },
  /** 保存回复内容 */
  setComment:function(e){
    this.setData({
      commentTxt: pub.trim(e.detail.value)
    })
  },
  /** 隐藏输入框 */
  intHide:function(){
    this.setData({
      display: 'none',
      focus: false
    })
  },
  comment: function () {
    var text = this.data.commentTxt;
    var name = this.data.userName;
    var img = this.data.userTx;
    // wx.request({
    //   url:'',
    //   data:{},
    //   success:function(res){

    //   }
    // })
    this.setData({
      display: 'none',
      focus: false
    })
  }
});
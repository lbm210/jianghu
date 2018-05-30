const pub = require('../../../public/public')
const ut = require('../../../utils/util')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    display: 'none',
    itemData: [
      {
        id: "123",
        txUrl: "../../../images/girl.png",
        name: "高圆圆",
        money: 10.0,
        time: 1524039865288,
        text: "我家的狗丢了"
      },
      {
        id: "123",
        txUrl: "../../../images/girl.png",
        name: "高圆圆",
        money: 10.0,
        time: 1524039865288,
        text: "我家的狗丢了",
        replyData: [
          {
            name: "贾静雯",
            text: "我家的狗也丢了"
          }
        ]
      },
      {
        id: "123",
        txUrl: "../../../images/girl.png",
        name: "高圆圆",
        money: 10.0,
        time: 1524039865288,
        text: "我家的狗丢了",
        replyData: [
          {
            name: "贾静雯",
            text: "我家的狗也丢了"
          },
          {
            name: "黄渤",
            text: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿"
          },
          {
            name: "蔡依林",
            text: "我家的狗也丢了"
          },
          {
            name: "周海媚",
            text: "我家的狗也丢了"
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
  },

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
  /** 获得用户信息 */
  bindGetUserInfo:function(e){
    this.setData({
      userTx: e.detail.userInfo.avatarUrl,
      userName: e.detail.userInfo.nickName
    })
  },
  /** 回复信息 */
  reply: function (e) {
    this.setData({
      display: 'flex',
      focus: true,
      userId: e.target.id
    })
  },
  /** 保存回复内容 */
  setComment: function (e) {
    this.setData({
      commentTxt: pub.trim(e.detail.value),
    })
  },
  /** 隐藏输入框 */
  intHide: function () {
    this.setData({
      display: 'none',
      focus: false
    })
  },
  /** 评论 */
  comment: function () {
    var text = this.data.commentTxt;
    var name = this.data.userName;
    var img = this.data.userTx;
    var id = this.data.userId;
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
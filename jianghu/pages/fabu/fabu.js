// pages/fabu/fabu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gzh:'白城之窗',
    helpNum: 3129,
    pubList: [
      {
        iconUrl: "../../images/publish-in1.png",
        num: 1,
        tit: "发起江湖救急",
      },
      {
        iconUrl: "../../images/publish-in2.png",
        num: 2,
        tit: "好友助推帮扩散",
      },
      {
        iconUrl: "../../images/publish-in3.png",
        num: 3,
        tit: "申请上头条",
      }
    ]
  },
  toPublish: function () {
    wx.navigateTo({ url: "./creatcard/creatcard" });
  }
})
// pages/home/helped/helped.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    infoData: [
      {
        id: 10,
        state: 1,
        txUrl: "../../../images/mv.png",
        name: "快乐崇拜",
        time: 1524039865288,
        txt: "谁看家我家狗拉谁看家我家狗拉谁看家我家狗拉",
        ioUrl: "../../../images/dog.png",
        hpImglist: [
          "../../../images/girl.png",
          "../../../images/girl.png",
          "../../../images/girl.png",
          "../../../images/girl.png",
          "../../../images/girl.png",
          "../../../images/girl.png"
        ],
        nbm: 120
      },
      {
        id: 11,
        state: 1,
        txUrl: "../../../images/mv.png",
        name: "快乐崇拜",
        time: 1524039815288,
        txt: "谁看家我家狗拉谁看家我家狗拉谁看家我家狗拉",
        ioUrl: "../../../images/dog.png",
        hpImglist: [
          "../../../images/girl.png",
          "../../../images/girl.png",
          "../../../images/girl.png",
          "../../../images/girl.png",
          "../../../images/girl.png",
          "../../../images/girl.png"
        ],
        nbm: 120
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
  onReady: function() {},

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
  goInfo: function(e) {
    var id = e.currentTarget.id;
    console.log(id)
    wx.navigateTo({
      url:'../../details/details?id'
    })
  }
});
const pub = require('../../public/public');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading:false,
    disabled: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },


  getUsername:function(e){
    let username = pub.trim(e.detail.value)
    this.setData({
      username: username
    })
  },
  getPassword: function (e) {
    let password = pub.trim(e.detail.value)
    this.setData({
      password: password
    })
  },
  login:function(){
    var that = this;
    var data = {};
    data.username = that.data.username;
    data.password = that.data.password;
    console.log(data)
    that.setData({disabled:true,loading:'loading'})
  //   wx.request({
  //     url:'',
  //     data:data,
  //     success:function(res){
      var res = false
        if(res){
          wx.showToast({
            title: '设置成功！',
            icon: 'success',
            duration: 2000,
            success: function () {
              that.setData({ disabled: false, loading: false })
              wx.navigateBack()
            }
          })
        }else{
          wx.showToast({
            title: '账号或密码错误！请重新输入！',
            icon: 'none',
            success: function () {
              that.setData({ disabled: false, loading: false })
            }
          })
        }
  //     },
          // fail:function(err){
          //   console.log(err)
          // }
  //   })
  },
  goRetrieve:function(){
    wx.navigateTo({
      url:'retrieve/retrieve'
    })
  },
  goRegister:function(){
    wx.navigateTo({
      url: 'register/register'
    })
  }
})
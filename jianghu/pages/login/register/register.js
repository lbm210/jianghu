const pub = require('../../../public/public')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:'获取验证码',
    disabled:false,
    loginDisabled:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  getPhone: function (e) {
    let phone = pub.trim(e.detail.value)
    this.setData({
      phone: phone
    })
  },
  getVerifyingCode:function(){
    pub.getVerifyingCode(this)
  },
  setVerifyingCode:function(e){
    var code = pub.trim(e.detail.value)
    this.setData({
      code: code
    })
  },
  login:function(){
    var that = this;
    var code = that.data.code;
    var verifyingCode = that.data.verifyingCode;
    that.setData({
      loginDisabled:true
    })
    if (code && code == verifyingCode){
      // wx.request({
      //   url:'',
      //   data:phone,
      //   success:function(res){
      //     console.log(res)
      //     if(res.msg){
            wx.navigateTo({
              url:'../login'
            })
      //     }
      //   },
      //   fail:function(err){
      //     that.setData({
      //       loginDisabled: false
      //     })
      //    }
      //   }
      // })
    }else{
      wx.showToast({
        title:'验证码不正确',
        icon:'none'
      });
      that.setData({
        loginDisabled: false
      })
    }
  }
})
const pub = require('../../../public/public')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '获取验证码',
    disabled: false,
    loginDisabled: false,
    code_OK:false  //不显示重新设置密码
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  /** 获取电话 */
  getPhone: function (e) {
    let phone = pub.trim(e.detail.value)
    this.setData({
      phone: phone
    })
  },
  /** 检验电话并发布验证码 */
  getVerifyingCode: function () {
    pub.getVerifyingCode(this)
  },
  /** 获取设置验证码 */
  setVerifyingCode: function (e) {
    var code = pub.trim(e.detail.value)
    this.setData({
      code: code
    })
  },
  /** 检验验证码以及下一步操作 */
  next:function(){
    var that = this;
    var code = that.data.code;
    var verifyingCode = that.data.verifyingCode;
    that.setData({
      loginDisabled: true
    })
    if (code && code == verifyingCode) {
      // wx.request({
      //   url:'',
      //   data:phone,
      //   success:function(res){
      //     console.log(res)
      //     if(res.msg){
      that.setData({
        code_OK:true
      })
      //     }
      //   },
      //   fail:function(err){
      //     that.setData({
      //       loginDisabled: true
      //     })
      //    }
      //   }
      // })
    } else {
      wx.showToast({
        title: '验证码不正确',
        icon: 'none'
      });
      that.setData({
        code_OK: false,
        loginDisabled: false
      })
    }
  },
  /** 设置新密码 */
  setPassword:function(e){
    var password = pub.trim(e.detail.value)
    this.setData({
      password: password
    })
  },
  setPasswordS:function(e){
    var password = pub.trim(e.detail.value)
    this.setData({
      passwordS: password
    })
  },
  /** 判断密码并更新 */
  confirm:function(){
    var password = this.data.password,
    passwordS = this.data.passwordS;
    // if (password == passwordS) {
    //   wx.request({
    //     url:'',
    //     data:password,
    //     success:function(res){
    //       if(res.msg){
            wx.showToast({
              title: '设置成功！',
              icon: 'success',
              duration: 2000,
              success: function () {
                wx.navigateTo({
                  url: '../login'
                })
              }
            })
    //       }
    //     }
    //   })
    // }else{
    //   wx.showToast({
    //     title:'密码不一致，请重新输入！',
    //     icon:'none'
    //   })
    // }
  }
})
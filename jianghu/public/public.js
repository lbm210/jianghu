const trim = (string) => {
  return string.replace(/(^\s*)|(\s*$)/g, '');
}

/** 获取验证码 */
const getVerifyingCode = (that) => {
  var that = that;
  let phone = that.data.phone;
  let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
  if (phone == '' || !reg.test(phone)) {
    wx.showToast({
      title: '手机号码不正确请重新输入',
      mask: true,
      icon: 'none'
    })
  } else {
    let s = 60;
    let stimer = setInterval(function () {
      s--;
      that.setData({
        text: s + '秒后可重发',
        disabled: true
      })
      if (s == 0) {
        clearInterval(stimer);
        that.setData({
          text: '重新获取',
          disabled: false
        })
        s = 60
      }
    }, 1000);
    // wx.request({
    //   url:'',
    //   data:phone,
    //   success:function(res){
    //     console.log(res)
    that.setData({
      verifyingCode:1234
    })
    //   }
    // })
  }
}

module.exports = {
  trim: trim,
  getVerifyingCode: getVerifyingCode
};
function getPhoneNumber(e) {
  // 参数e是绑定的授权方法自动传入过来的, 主要是为了拿到vi和encryptedData值从后台换取用户联系方式 
  console.log(e.detail.errMsg)
  if ("getPhoneNumber:ok" != e.detail.errMsg) {
    wx.showToast({
      icon: 'none',
      title: '快捷登陆失败'
    })
    return;
  }
  var self = this;
  //调用后台接口获取用户手机号码
  api.sendPost({
    url: api.decode_phone,
    params: {
      encrypted: encryptedData,
      iv: iv,
      code: code
    },
    success: function (data) {
      // 获取到的手机号码
      var phone = data.phone;
    },
    fail: function (msg) {

    }
  })
}
module.exports = {
  getPhoneNumber: getPhoneNumber,
}
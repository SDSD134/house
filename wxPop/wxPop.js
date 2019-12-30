function getPhoneNumber(e) {
  // 参数e是绑定的授权方法自动传入过来的, 主要是为了拿到vi和encryptedData值从后台换取用户联系方式 
  console.log(e.detail.errMsg)
  console.log(e.detail.iv)
  console.log(e.detail.encryptedData)
  if ("getPhoneNumber:ok" != e.detail.errMsg) {
    wx.showToast({
      icon: 'none',
      title: '快捷登陆失败'
    })
    return;
  }
  wx.checkSession({
    success () {
      var self = this;
      //调用后台接口获取用户手机号码
      wx.request({
        url: 'http://localhost/index/users/code2seesion',
        method: "post",
        data: {
          sessionId:"",
          iv: e.detail.iv,
          id:"",
          signature: e.detail.encryptedData,
        },
        success: function (data) {
          // 获取到的手机号码
          if(data.status != 200) {
            wx.showModal({
              title: '错误',
              content: '解析出现错误',
            })
          }
        },
        fail: function (msg) {

        }
      })
    },
    fail () {
      wx.login({
        success:function(res){
          if (res.code) {
            // wx.request({
            //   url: '',
            //   success: function (response) {
            //     wx.setStorage({
            //       key: 'cookies',
            //       data: response.data.res.cookies
            //     })
            //     // wx.getUserInfo({
            //     //   success:function(res) {
            //     //     // 取得用户微信信息，调用后端接口更新用户信息
            //     //     const userInfo = res.userInfo
            //     //     const encryptedData = res.encryptedData
            //     //     const iv = res.iv
            //     //     const params = {
            //     //       nick_name: userInfo.nickName,
            //     //       gender: userInfo.gender,
            //     //       province: userInfo.province,
            //     //       city: userInfo.city,
            //     //       country: userInfo.country,
            //     //       avatar_url: userInfo.avatarUrl,
            //     //       encrypted_data: encryptedData,
            //     //       encrypt_iv: iv
            //     //     }
            //     //   }
            //     // })
            //   }
            // })
            wx.request({
              url: '',
              method: "post",
              data: {
                code: "",
                iv: e.detail.iv,
                id: "",
                signature: e.detail.encryptedData,
              },
              success: function (data) {
                // 获取到的手机号码
                if (data.status != 200) {
                  wx.showModal({
                    title: '错误',
                    content: '解析出现错误',
                  })
                }
              },
              fail: function (msg) {

              }
            })
          }
        }
      })

    }
  })

}

module.exports = {
  getPhoneNumber: getPhoneNumber,
}
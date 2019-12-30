//app.js
const util = require('./utils/utils.js')
App({
  util,
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: response => {
        
        // 获取用户信息
        wx.getSetting({
          success: res => {
            if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
              wx.getUserInfo({
                success: res => {
                  // 可以将 res 发送给后台解码出 unionId
                  this.globalData.userInfo = res.userInfo
                  // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                  // 所以此处加入 callback 以防止这种情况
                  if (this.userInfoReadyCallback) {
                    this.userInfoReadyCallback(res)
                  }
                  console.log(res.encryptedData)
                  // 发送 res.code 到后台换取 openId, sessionKey, unionId
                  wx.request({
                    url: 'http://localhost:8080/user/login',  //用户登录接口
                    method: "post",
                    header:{
                      'content-type': 'application/x-www-form-urlencoded'
                    },
                    data: {
                      code: response.code,
                      rawData:res.rawData,
                      signature:res.signature,
                      encryptedData:res.encryptedData,
                      iv:res.iv,
                    },
                    success:function(res) {
                      console.log(res.data)
                    },
                    fail:function(res){
                      console.log(res.data)
                    }
                  })

                }
              })
            }
          }
        })
       
      }
    })
    
    // 获取系统状态栏信息
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
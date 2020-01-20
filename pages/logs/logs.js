const app = getApp()
Component({
  options: {
    addGlobalClass: true,

  },
  data: {
    factoryLength:1,
    statusLength:0,
    x:0,
    starCount: 0,
    forksCount: 0,
    visitTotal: 0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  methods: {
    join: function (e) {
      wx.navigateTo({
        url: '../logs/join/join'
      })
    },
    joinSuccess: function (e) {
      wx.navigateTo({
        url: '../logs/joinSuccess/joinSuccess'
      })
    },
    choose: function (e) {
      wx.navigateTo({
        url: '../logs/choose/choose'
      })
    },
    set: function (e) {
      wx.navigateTo({
        url: '../logs/set/set'
      })
    },
    //事件处理函数
    bindViewTap: function () {
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths
        }
      })
    },
    
    onLoad: function () {
      console.log(wx.getStorageSync("userInfo"))
      if (wx.getStorageSync("userInfo")) {
        this.setData({
          userInfo: wx.getStorageSync("userInfo"),
          hasUserInfo: true
        })
      } else if (this.data.canIUse) {
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        app.userInfoReadyCallback = res => {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      } else {
        // 在没有 open-type=getUserInfo 版本的兼容处理
        wx.getUserInfo({
          success: res => {
            app.globalData.userInfo = res.userInfo
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
      }

    },
    getUserInfo: function (e) {
      wx.setStorageSync("userInfo", e.detail.userInfo)
      var userImage = e.detail.userInfo.avatarUrl
      var userId = wx.getStorageSync("openid")
      var userName = e.detail.userInfo.nickName
      console.log(e.detail.userInfo.avatarUrl)
      console.log(wx.getStorageSync("openid"))
      console.log(e.detail.userInfo.nickName)
      wx.request({
        url: getApp().globalData.path + 'addUserUrl' + getApp().globalData.path2,
        header:
        {
          'content-type': 'application/json'
        },
        data: {
          "userImage": userImage,
          "userId": userId,
          "userName": userName,
          "id": userId
        },
        method: "post",
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
        }
      })
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }
  }
})
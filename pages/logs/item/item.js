// pages/logs/item/item.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    diarylength:1,
    list: [
      {
        imgArr: '../../../image/28.jpg',
        title: '米丽达花园',
        show:'在售',
        city:'嘉兴市'
       
      },
      {
        imgArr: '../../../image/28.jpg',
        title: '米丽达花园',
       
      },
      {
        imgArr: '../../../image/28.jpg',
        title: '米丽达花园',
        show: '在售',
        city: '嘉兴市'
      },
      {
        imgArr: '../../../image/28.jpg',
        title: '米丽达花园',
        show: '在售',
        city: '嘉兴市'
     
      }
    ]

  },
  join: function (e) {
    wx.navigateTo({
      url: '../join/join'
    })
  },
  // 滑动删除
  // ListTouch触摸开始
  ListTouchStart(e) {
    this.setData({
      ListTouchStart: e.touches[0].pageX
    })
  },

  // ListTouch计算方向
  ListTouchMove(e) {
    this.setData({
      ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
    })
  },

  // ListTouch计算滚动
  ListTouchEnd(e) {
    if (this.data.ListTouchDirection == 'left') {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    } else {
      this.setData({
        modalName: null
      })
    }
    this.setData({
      ListTouchDirection: null
    })
  },

  //点击删除按钮事件
  delItem: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    //获取列表中要删除项的下标
    wx.showModal({
      title: '提示',
      content: '确定要此纪录吗？',
      success: function (sm) {
        var they = that;
        if (sm.confirm) {
          // 用户点击了确定 可以调用删除方法了
          wx.request({
           // url:
           // data: {
              
            //},
            success: function (res) {
              if (res.data == "ok") {
                wx.showToast({
                  title: '删除成功',
                })

                var logList = they.data.logList;
                logList.splice(e.currentTarget.dataset.number, 1)
                if (logList.length == 0) {
                  they.setData({
                    loglength: 0
                  })

                }
                //更新列表的状态
                they.setData({
                  logList: logList
                });
              } else {
                wx.showToast({
                  title: '删除失败',
                })
              }
            }
          })
        }
      }
    })

  },
  revise: function (e) {
    wx.navigateTo({
      url: '../item/revise/revise'
    })
  }, 
 makeover: function (e) {
    wx.navigateTo({
      url: '../item/makeover/makeover'
    })
  }, 
})
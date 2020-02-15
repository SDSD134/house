// pages/logs/custom/custom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    diarylength: 1,
    diarylength01: 1,
    diarylength02: 1,
    currentTabIndex: 0,
    list: [
      {
        title: '第一次申请',
      },
      {
        title: '第一次申请',

      },
      {
        title: '第一次申请',
      },
      {
        title: '第一次申请',

      }
    ],
    listOne: [
      {
        title: '第一次申请',
      },
      {
        title: '第一次申请',

      },
      {
        title: '第一次申请',
      },
      {
        title: '第一次申请',

      }
    ],
    listTwo: [
      {
        title: '第一次申请',
        reason:'信息虚假'
      },
      {
        title: '第一次申请',
        reason: '信息虚假'

      },
      {
        title: '第一次申请',
        reason: '信息虚假'
      },
      {
        title: '第一次申请',
        reason: '信息虚假'
      }
    ]

  },

  onTabsItemTap: function (event) {
    let index = event.currentTarget.dataset.index;
    this.setData({
      currentTabIndex: index
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

  }
})
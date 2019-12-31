// pages/logs/invite/invite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTabIndex: 0,

  },
  onTabsItemTap: function (event) {
    let index = event.currentTarget.dataset.index;
    //0为充值，1为邀请

    this.setData({
      currentTabIndex: index
    })
    if(index == 1) {
      wx.request({
        url: '',
      })
    }
  }
})
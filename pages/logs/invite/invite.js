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
    console.log(index)
    this.setData({
      currentTabIndex: index
    })
  }
})
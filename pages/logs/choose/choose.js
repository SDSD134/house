// pages/logs/choose/choose.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listOne: [
      {
        top: '总代/开发商',
        bottom: '我有项目，来找渠道分销',
      },
      {
        top: '分销/渠道经纪人',
        bottom: '我有客户，来找优质项目',
      },
      {
        top: '独立经纪人',
        bottom: '我先看看喽',
      },
    ],

  },
  status: function (e) {
    wx.navigateTo({
      url: '../status/status'
    })
  },
  
  // 点击变色
  goIndex: function (e) {
    let index = e.currentTarget.dataset.index;
    //  console.log('每个index',list)
    this.setData({
      idx: index
    })
  },
  getIndex: function (e) {
    let index = e.currentTarget.dataset.index;
    //  console.log('每个index',list)
    this.setData({
      idIndex: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
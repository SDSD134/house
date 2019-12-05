// pages/lead/lead.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leadList:[
      {
        title:'2019上海房价上涨最新你消息',
        content:'2019上海房价上涨最新你消息2019上海房价上涨最新你消息2019上海房价上涨最新你消息2019上海房价上涨最新你消息2019上海房价上涨最新你消息',
        img:'../../image/26.jpg',
        type:'公告',
        time:'2019-11-11 16:44:44'
      },
      {
        title: '2019上海房价上涨最新你消息',
        content: '2019上海房价上涨最新你消息2019上海房价上涨最新你消息2019上海房价上涨最新你消息2019上海房价上涨最新你消息2019上海房价上涨最新你消息',
        img: '../../image/26.jpg',
        type: '动态',
        time: '2019-11-11 16:44:44'
      },
      {
        title: '2019上海房价上涨最新你消息',
        content: '2019上海房价上涨最新你消息2019上海房价上涨最新你消息2019上海房价上涨最新你消息2019上海房价上涨最新你消息2019上海房价上涨最新你消息',
        img: '../../image/26.jpg',
        type: '公告',
        time: '2019-11-11 16:44:44'
      }
    ]

  },
  leadDetails: function (e) {
    wx.navigateTo({
      url: '../lead/leadDetails/leadDetails'
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
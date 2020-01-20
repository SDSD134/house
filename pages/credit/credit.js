// pages/credit/credit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num1:0,
    num2:0,
    name1:'哈哈哈',
    name2:'好人啊',
    phone:'12312345678',
    list: [
      {
        name:'黄**',
        factory:'世萌地产',
        plate:'浙**79nk',
        content:'这个女的，冒充。。。。。。。。。',
        time:'2019.11.12',
        place:'浙江嘉兴市'
      },
      {
        name: '黄**',
        factory: '世萌地产',
        plate: '浙**79nk',
        content: '这个女的，冒充。。。。。。。。。',
        time: '2019.11.12',
        place: '浙江嘉兴市'
      }, {
        name: '黄**',
        factory: '世萌地产',
        plate: '浙**79nk',
        content: '这个女的，冒充。。。。。。。。。',
        time: '2019.11.12',
        place: '浙江嘉兴市'
      }
    ]
  },
  report: function (e) {
    wx.navigateTo({
      url: '../credit/report/report'
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
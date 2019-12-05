// pages/factoryDetails/factoryDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    brand:[
      {
        img:'../../image/26.jpg',
        title:'临水家园',
        price:'12200元/m^3',
        place:'嘉兴市-海盐县'
      },
      {
        img: '../../image/26.jpg',
        title: '临水家园',
        price: '12200元/m^3',
        place: '嘉兴市-海盐县'
      },
      {
        img: '../../image/26.jpg',
        title: '临水家园',
        price: '12200元/m^3',
        place: '嘉兴市-海盐县'
      },
      {
        img: '../../image/26.jpg',
        title: '临水家园',
        price: '12200元/m^3',
        place: '嘉兴市-海盐县'
      }
    ],
    comment: [
      {
        name: '孙楠',
        content: '体量：8141套，面积段：68-88-110平，均价：18888元/平。',
        time: '201-11-11 15：33：33 '
      },
      {
        name: '孙楠',
        content: '体量：8141套，面积段：68-88-110平，均价：18888元/平。',
        time: '201-11-11 15：33：33 '
      },
      {
        name: '孙楠',
        content: '体量：8141套，面积段：68-88-110平，均价：18888元/平。',
        time: '201-11-11 15：33：33 '
      }
    ],

  },
  mark: function (e) {
    wx.navigateTo({
      url: '../factoryDetails/mark/mark'
    })
  },
  attestation: function (e) {
    wx.navigateTo({
      url: '../factoryDetails/attestation/attestation'
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
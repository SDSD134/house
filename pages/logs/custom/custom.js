// pages/logs/custom/custom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTabIndex: 0,
    typelist:[
      {
        type:'报备',
        number:'0'
      },
      {
        type: '到访',
        number: '0'
      },
      {
        type: '认筹',
        number: '0'
      },
      {
        type: '成交',
        number: '0'
      },
      {
        type: '签约',
        number: '0'
      },
      {
        type: '结佣',
        number: '0'
      },
      {
        type: '退筹',
        number: '0'
      },
      {
        type: '退房',
        number: '0'
      },
      {
        type: '跟进',
        number: '0'
      }
    ],
    list: [
      {
        imgArr: '../../../image/27.jpg',
        title: '嘉兴有限科技公司',
        score: '9.7',
        number: '8',
        person: '1111',

      },
      {
        imgArr: '../../../image/27.jpg',
        title: '嘉兴有限科技公司',
        score: '9.7',
        number: '8',
        person: '1111',
      },
      {
        imgArr: '../../../image/27.jpg',
        title: '嘉兴有限科技公司',
        score: '9.7',
        number: '8',
        person: '1111',
      },
      {
        imgArr: '../../../image/27.jpg',
        title: '嘉兴有限科技公司',
        score: '9.7',
        number: '8',
        person: '1111',
      }
    ]

  },
  
  onTabsItemTap: function (event) {
    let index = event.currentTarget.dataset.index;
    this.setData({
      currentTabIndex: index
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
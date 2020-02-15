// pages/logs/custom/custom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    diarylength:1,
    diarylength01:1,
    currentTabIndex: 0,
    
    list: [
      {
        result:'未处理',
        name:'小孙',
        phone:'15090907023',
        buildname:'临水家园',
        time:'2019-11-11',
        imgArr: '../../../image/27.jpg',
        detail:'小孙',
        address:'哈尔滨责任有限公司'
  

      },
      {
        result: '未处理',
        name: '小孙',
        phone: '15090907023',
        buildname: '临水家园',
        time: '2019-11-11',
        imgArr: '../../../image/27.jpg',
        detail: '小孙',
        address: '哈尔滨责任有限公司'


      },
      {
        result: '未处理',
        name: '小孙',
        phone: '15090907023',
        buildname: '临水家园',
        time: '2019-11-11',
        imgArr: '../../../image/27.jpg',
        detail: '小孙',
        address: '哈尔滨责任有限公司'


      },
      {
        result: '未处理',
        name: '小孙',
        phone: '15090907023',
        buildname: '临水家园',
        time: '2019-11-11',
        imgArr: '../../../image/27.jpg',
        detail: '小孙',
        address: '哈尔滨责任有限公司'


      }
    ],
    list01: [
      {
        result: '未处理',
        name: '小孙',
        phone: '15090907023',
        buildname: '临水家园',
        time: '2019-11-11',
        imgArr: '../../../image/27.jpg',
        detail: '小孙',
        address: '哈尔滨责任有限公司'
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
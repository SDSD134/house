// pages/estateDetails/parameter/parameter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buildingId:"",
    buildingVo:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
      
      this.setData({
        buildingId:options.id
      })
    console.log(that.data.buildingId);
      
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
    let that  = this
    var userId = ""
    wx.getStorage({
      key: 'user',
      success: function (res) {
        userId = res.data.userId
       // console.log(userId),
          wx.request({
            url: 'http://localhost:8080/building/detailBuilding',
            data: {
              buildingId: that.data.buildingId,
              userId: userId,
            },
            success(res) {
              that.setData({
                swiperList: res.data.data
              })
              console.log(that.data.swiperList)
            },
            fail(res) {
              console.log(res)
            },

          })
      },
    })
  
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
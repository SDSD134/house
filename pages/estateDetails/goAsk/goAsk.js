// pages/estateDetails/goAsk/goAsk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buildingName:'',
    buildingId:'',
    text:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.setData({
     buildingId:options.buildingId,
     buildingName:options.buildingName
   })
  },
  textareaAInput(e) {
    this.setData({
      text:e.detail.value
    })
  },
  ask(){
    let that = this
    wx.request({
      url: 'http://localhost:8080/comment/askQuestion',
      data:{
        commentBuildingId: this.data.buildingId,
        userId: wx.getStorageSync('user').userId,
        commentContext: this.data.text,
        commentType: 1
      },
      success(res) {
        console.log(res)
        if (res.data.status == 200) {
          console.log("进入")
          wx.navigateTo({
            url: "../../estateDetails/estateDetails?id="+that.data.buildingId,
          })
        } else {
          wx.showToast({
            title: '提问失败',
          })
        }
      },
      fail() {
        wx.showToast({
          title: '提问失败',
        })
      }
      
    })
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
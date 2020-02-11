// pages/estateDetails/goAnswer/goAnswer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commentId:"",
    commentContext:"",
    replyContext:"",
    buildingName:","
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.commentId != "" && options.commentContext != ""&& options.buildingName!="") {
      this.setData({
        commentId:options.commentId,
        commentContext:options.commentContext,
        buildingName:options.buildingName
      })
    }

  },
  replyQuestion(e){
    let that = this
    wx.request({
      url: 'http://localhost:8080/comment/reply',
      data:{
        commentId:that.data.commentId,
        userId:wx.getStorageSync('user').userId,
        replyContext:that.data.replyContext
      },
      success(res) {
        console.log(res)
        wx.navigateTo({
          url: "../../estateDetails/toAsk/toAsk?commentId"+that.data.commentId+"&buildingName="+that.data.buildingName
        })
      },
      fail(res) {
        wx.showToast({
          title: '回复失败',
        })
      }
    })
  },

  textareaAInput(e) {
    console.log(e.detail.value)
    this.setData({
      replyContext:e.detail.value
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
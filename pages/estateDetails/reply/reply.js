// pages/estateDetails/reply/reply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList: [
      {
        img: '../../../image/26.jpg',
      },
      {
        img: '../../../image/26.jpg',
      },
      {
        img: '../../../image/26.jpg',
      },
     
    ],
    comment: [
      {
        name: '孙楠',
        content: '体量：8141套，面积段：68-88-110平，均价：18888元/平。',
        time: '201-11-11 15：33：33 '
      },
    ],
    replyContext: '',
    reply:[],
    superReply:[],

  },
  //回复评论内容
  reply: function (e) {
    let that = this
    wx.request({
      url: 'http://localhost:8080/comment/reply',
      method:'GET',
      data:{
        commentId:that.data.commentId,
        userId:wx.getStorageSync('user').userId,
        superReplyId:that.data.superReply.superReplyId,
        superReplyUserId: that.data.superReply.superReplyId,
        replyContext: that.data.replyContext,

      },
      success(res) {
        wx.setStorage({
          key: 'comment',
          data: that.data.comment,
          success: function (res2) {
            wx.navigateTo({
              url: '../reply/reply'
            })
           },
        }) 
      },
      fail(res) {
        wx.showToast({
          title: '评论失败',
        })
      }
    })
    
  
  },
  //回复
  replyComment:function(e) {
    let that = this
    wx.request({
      url: 'http://localhost:8080/comment/reply',
      method: 'GET',
      data: {
        commentId: that.data.commentId,
        userId: wx.getStorageSync('user').userId,
        replyContext: that.data.replyContext,

      },
      success(res) {
        wx.setStorage({
          key: 'comment',
          data: that.data.comment,
          success: function (res2) {
            wx.navigateTo({
              url: '../reply/reply'
            })
          },
        })
      },
      fail(res) {
        wx.showToast({
          title: '评论失败',
        })
      }
    })
    wx.navigateTo({
      url: '../reply/reply'
    })

  },
  replyInput:function(e) {
   
    this.setData({
      replyContext: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.getStorage({
      key: 'comment',
      success: function(res) {
        var comment = []
        comment.push(res.data)
        console.log(res.data)
        that.setData({
          comment:comment
        })
        console.log(that.data.comment)
        wx.removeStorage({
          key: 'comment',
          success: function(res) {},
        })
      },
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
      wx.request({
        url: '',
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
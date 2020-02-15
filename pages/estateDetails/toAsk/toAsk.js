// pages/estateDetails/toAsk/toAsk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    question:[],
    buildingId:"",
    buildingName:"",
    size:''

  },
  estateDetails: function (e) {
    wx.navigateTo({
      url: '../../estateDetails/estateDetails'
    })
  },
  goAsk: function (e) {
    console.log(this.data.question)
    let that = this 
    wx.navigateTo({
      url: "../../estateDetails/goAsk/goAsk?buildingId="+that.data.question.commentBuildingId+"&buildingName="+that.data.buildingName
    })
  },
  goAnswer: function (e) {
    let that = this
    wx.navigateTo({
      url: "../../estateDetails/goAnswer/goAnswer?commentId="+that.data.question.commentId+"&commentContext="+that.data.question.commentContext+"&buildingName="+that.data.buildingName
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let that = this
      if(options.commentId != "" && options.buildingName != "") {
        this.setData({
          buildingId:options.buildingId,
          buildingName:options.buildingName
        })
        wx.request({
          url: 'http://localhost:8080/comment/getCommentReply',
          data:{
            commentId:options.commentId
          },
          success(res) {
            if (res.data.status == "200") {
              console.log("进入提问详细页面")
              that.setData({
                comment:res.data.data
              })
              console.log(that.data.comment)
            }
            var size = that.data.comment.length
            
            that.setData({
              size:size
            })
          }
        })
      }
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
    let that = this
    wx.getStorage({
      key: 'question',
      success: function(res) {
       // console.log(res.data)
        that.setData({
          question:res.data
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
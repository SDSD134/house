// pages/logs/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    diarylength: 0,
    isCollected: true,
    list: [
      {
        imgArr: '../../../image/28.jpg',
        title: '米丽达花园',
        show: '在售',
        city: '嘉兴市',
        money1: '6.5',
        money2: '1.12',
        type: '住宅',
        factory: 'hhhhhhhhhhhhh'
      },
      {
        imgArr: '../../../image/28.jpg',
        title: '米丽达花园',
        show: '在售',
        city: '嘉兴市',
        money1: '6.5',
        money2: '1.12',
        type: '住宅'
      }
    ]

  },
  // 收藏
  handleCollection() {
    let isCollected = !this.data.isCollected
    this.setData({
      // 下面本来是这样子的:isCollected=isCollected,可以简写
      isCollected
    })
    //提示用户
    wx.showToast({
      title: isCollected ? '收藏成功' : '取消收藏',
      icon: 'success'
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
   /* let that = this;
    wx.request({
      url: 'http://localhost:8080/collect/isCollect',
      data:{
        userId: 'f'
      },
      success(res){
        console.log(res.data.data)
       // console.log(res.data.data.equal("true"))
        if(res.data.data== 1) {
            that.setData({
              diarylength:1
            })
          wx.request({
            url: 'http://localhost:8080/collect/userController',
            data: {
              userId: 'f'
            },
            success(re) {
              that.setData({
                list: re.data.data
              })
            }
          })
        } else {
          that.setData({
            diarylength:0
          })
        }
      }
    })
  */

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
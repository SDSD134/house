// pages/estateDetails/error/error.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgListMore: [],
  },
  ChooseImageMore() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgListMore.length != 0) {
          this.setData({
            imgListMore: this.data.imgListMore.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgListMore: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImageMore(e) {
    wx.previewImage({
      urls: this.data.imgListMore,
      current: e.currentTarget.dataset.url
    });
  },
  DelImgMore(e) {
    wx.showModal({
      title: '亲爱的',
      content: '确定要删除吗？',
      cancelText: '再看看',
      confirmText: '再见',
      success: res => {
        if (res.confirm) {
          this.data.imgListMore.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgListMore: this.data.imgListMore
          })
        }
      }
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
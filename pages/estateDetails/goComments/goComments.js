// pages/estateDetails/goComments/goComments.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgListMore: [],
    commentContext:'',
    comment_id:'',
    buildingId:'',
    isLead:''
  },
  ChooseImageMore() {
    wx.chooseImage({
      count: 3, //默认9
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
      title: '删除',
      content: '确定要删除吗？',
      cancelText: '取消',
      confirmText: '确定',
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

  publish:function(e) {
    let that = this;
    var image = that.data.imgListMore;
    if (that.data.commentContext == null || that.data.commentContext == '' ) {
      wx.showModal({
        title: '错误',
        content: '内容不可以为空',
        confirmText: '确定',
      })
      return;
    }
    if (that.data.isLead == null || that.data.isLead == '') {
      wx.showModal({
        title: '错误',
        content: '请选择是否看房',
        confirmText: '确定',
      })
      return;
    }
    wx.showToast({
      title: '评论中',
      icon:'loading',
      duration:3000,
      mask:true
    })
    wx.request({
      url: 'http://localhost:8080/comment/commentBuilding',
      data:{
        'commentContext': that.data.commentContext,
        'commentType':0,
        'userId': wx.getStorageSync('user').userId,
        'commentBuildingId': that.data.buildingId,
        'isLead':that.data.isLead
      },
      success(res) {
        if(res.data.status == 200) {
          var commentId = res.data.data
          if (image.length > 0) {
            for (let i = 0; i < image.length; i++) {
              wx.uploadFile({
                url: 'http://localhost:8080/upload/commentUploadPicture',
                filePath: image[i],
                name: 'file',
                formData: {
                  'relationId': commentId
                },
                success(res) {
                  // const data = res.data
                  that.setData({
                    imgListMore: [],
                    comment_id: ''
                  })
                  console.log(res)
                  if (this.data.status == 200) {
                    wx.navigateTo({
                      url: "../../estateDetails/estateDetails?buildingId="+this.data.buildingId
                    })
                  } else {
                    wx.hideToast();
                    wx.showToast({
                      title: '评论失败',
                    })
                  }
                } ,
                fail(res) {
                  wx.hideToast();
                  wx.showToast({
                    title: '评论失败',
                    icon: 'none',
                    duration: 2000
                  })
                }
              })
            }
          } 
        } else {
          wx.hideToast();
          wx.showToast({
            title: '评论失败',
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail(res) {
        wx.showToast({
          title: '评论失败',
          icon: 'none',
          duration: 2000
        })
      }
    })
    // if (image.length > 0){
    //   for (let i = 0; i < image.length; i++) {
    //     wx.uploadFile({
    //       url: 'http://localhost:8080/comment/askQuestion',
    //       filePath: image[i],
    //       name: 'file',
    //       formData: {
    //         'commentContext': that.data.commentContext,
    //         'comment_id': that.data.comment_id,
    //         'commentType': 1,
    //         'userId': 'f',
    //         'commentBuildingId': 1
    //       },
    //       success(res) {
    //        // const data = res.data
    //         console.log(res)
    //         if (this.dat.status == 200) {
    //           this.setData({
    //             comment_id: data.data.data
    //           })
    //         }
    //       },
    //       fail(res) {
    //         console.log("失败");
    //       }
    //     })
    //   }
    // } else {
    //   console.log("进入");
    //   wx.request({
    //     url: 'http://localhost:8080/comment/askQuestion',
    //     filePath: null,
    //     name: 'file',
    //     data: {
    //       'commentContext': that.data.commentContext,
    //       'comment_id': that.data.comment_id,
    //       'commentType': 1,
    //       'userId': 'f',
    //       'commentBuildingId': 1
    //     },
    //     success(res) {
    //       // const data = res.data
    //       console.log(res)
    //       // if (this.data.data.status = 200) {
    //       //   this.setData({
    //       //     comment_id: data.data.comment_id
    //       //   })
    //       // }
    //     },
    //     fail(res) {
    //       console.log("失败");
    //     }

    //   })
    // }
    
    
  },
 
  textareaAInput:function(e) {
    this.setData({
      commentContext: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("评论楼盘id" + options.buildingId)
    this.setData({
      buildingId:options.buildingId
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

  },

  isLead:function(e) {
    console.log(e.target.dataset.islead)
    this.setData({
      isLead: e.target.dataset.islead
    })
  }
})
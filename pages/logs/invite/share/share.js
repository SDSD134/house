var util = getApp().util
Page({
  data: {
    cardCur: 0,
    // swiperList: [{
    //   id: 0,
    //   url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    // }, {
    //   id: 1,
    //   url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    // }, {
    //   id: 2,
    //   url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    // }, {
    //   id: 3,
    //   url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    // }, {
    //   id: 4,
    //   url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    // }, {
    //   id: 5,
    //   url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    // }, {
    //   id: 6,
    //   url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    // }],

    posterConfig: {
      width: 750,
      height: 1334,
      backgroundColor: '#fff',
      debug: false,
      pixelRatio: 1,
      // blocks: [
      //   {
      //     width: 690,
      //     height: 808,
      //     x: 30,
      //     y: 183,
      //     borderWidth: 2,
      //     borderColor: '#f0c2a0',
      //     borderRadius: 20,
      //   },
      //   {
      //     width: 634,
      //     height: 74,
      //     x: 59,
      //     y: 770,
      //     backgroundColor: '#fff',
      //     opacity: 0.5,
      //     zIndex: 100,
      //   },
      // ],
      // texts: [
      //   {
      //     x: 113,
      //     y: 61,
      //     baseLine: 'middle',
      //     text: '伟仔',
      //     fontSize: 32,
      //     color: '#8d8d8d',
      //   },
      //   {
      //     x: 30,
      //     y: 113,
      //     baseLine: 'top',
      //     text: '发现一个好物，推荐给你呀',
      //     fontSize: 38,
      //     color: '#080808',
      //   },
      //   {
      //     x: 92,
      //     y: 810,
      //     fontSize: 38,
      //     baseLine: 'middle',
      //     text: '标题标题标题标题标题标题标题标题标题',
      //     width: 570,
      //     lineNum: 1,
      //     color: '#8d8d8d',
      //     zIndex: 200,
      //   },
      //   {
      //     x: 59,
      //     y: 895,
      //     baseLine: 'middle',
      //     text: [
      //       {
      //         text: '2人拼',
      //         fontSize: 28,
      //         color: '#ec1731',
      //       },
      //       {
      //         text: '¥99',
      //         fontSize: 36,
      //         color: '#ec1731',
      //         marginLeft: 30,
      //       }
      //     ]
      //   },
      //   {
      //     x: 522,
      //     y: 895,
      //     baseLine: 'middle',
      //     text: '已拼2件',
      //     fontSize: 28,
      //     color: '#929292',
      //   },
      //   {
      //     x: 59,
      //     y: 945,
      //     baseLine: 'middle',
      //     text: [
      //       {
      //         text: '商家发货&售后',
      //         fontSize: 28,
      //         color: '#929292',
      //       },
      //       {
      //         text: '七天退货',
      //         fontSize: 28,
      //         color: '#929292',
      //         marginLeft: 50,
      //       },
      //       {
      //         text: '运费险',
      //         fontSize: 28,
      //         color: '#929292',
      //         marginLeft: 50,
      //       },
      //     ]
      //   },
      //   {
      //     x: 360,
      //     y: 1065,
      //     baseLine: 'top',
      //     text: '长按识别小程序码',
      //     fontSize: 38,
      //     color: '#080808',
      //   },
      //   {
      //     x: 360,
      //     y: 1123,
      //     baseLine: 'top',
      //     text: '超值好货一起拼',
      //     fontSize: 28,
      //     color: '#929292',
      //   },
      // ],
      images: [
        {
          width: 62,
          height: 62,
          x: 30,
          y: 30,
          borderRadius: 62,
          url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
          zIndex:10
        },
        {
          width: 750,
          height: 1334,
          x: 0,
          y: 0,
          url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
          zIndex:-1
        },
        {
          width: 220,
          height: 220,
          x: 92,
          y: 1020,
          url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
          zIndex:10
        },
        {
          width: 750,
          height: 90,
          x: 0,
          y: 1244,
          url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
        }
      ]
    }
  },
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  onPosterSuccess(e) {
    const { detail } = e;
    wx.previewImage({
      current: detail,
      urls: [detail]
    })
  },
  saveImage() {
    util.hideToast()
    wx.getStorage({
      key: 'poster',
      success: function(res) {
        console.log(res.data)
        util.checkPermission('writePhotosAlbum', () => {
          wx.saveImageToPhotosAlbum({
            filePath: res.data,
            success(res) {
              util.showModal('提示', '保存成功', false)
            }
          })
        }, '保存图片需要权限，请提供保存到相册的权限。');
      },
      fail:function(res) {
        util.showModal('失败', '请先生成海报', false)
      }
    })
  },
  onShareAppMessage: function () {
    var userid = ''
    wx.getStorage({
      key: 'userId',
      success: function(res) {
        userid = res.data
      },
    })
    return {
      title: '弹出分享时显示的分享标题',
      desc: '分享页面的内容',
      path: 'pages/index/index?parentid='+userid // 路径，传递参数到指定页面。
    }

  }

})



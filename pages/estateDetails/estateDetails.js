const app = getApp();
var QQMapWX = require('../../lib/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({
  data: {
    // 展开
     list01: [
      { 
        title:'成交总价',
        word:'180万'
      }, 
       {
         title: '成交总价',
         word: '180万'
       }, 
       {
         title: '成交总价',
         word: '180万'
       } 
    ],
    // 展开折叠
    selectedFlag:false,
    brand: [
      {
        img: 'http://bpic.588ku.com/element_origin_min_pic/16/10/30/528aa13209e86d5d9839890967a6b9c1.jpg',
        title: 'a',
        price: '2室1厅 100m^2',
      },
      {
        img: '../../image/29.jpg',
        title: 'a',
        price: '2室1厅 100m^2',
      },
      {
        img: '../../image/29.jpg',
        title: 'a',
        price: '2室1厅 100m^2',
      },
      {
        img: '../../image/29.jpg',
        title: 'a',
        price: '2室1厅 100m^2',
      }
    ],
    distance:"",
    latitude:"",
    longitude:"",
    buildingVo:"",
    id:"",
    // 海报,
    maskHidden: false,
    maskHiddens: false,
    // 地图
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/image/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/image/location.png'
    }],
    // 结束
    currentTabIndex: 0,
    isCollected: false,
    isSubscribe: false,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
    iconList: [{
      icon: 'cardboardfill',
      color: 'red',
      name: '公交'
    }, {
      icon: 'recordfill',
      color: 'orange',
      name: '学校'
    }, {
      icon: 'picfill',
      color: 'yellow',
      name: '餐饮'
    }, {
      icon: 'noticefill',
      color: 'olive',
      name: '购物'
    }, {
      icon: 'upstagefill',
      color: 'cyan',
      name: '医院'
    }],
    list: [
      {
        imgArr: '../../image/28.jpg',
        title: '米丽达花园',
        show: '在售',
        city: '嘉兴市',
        money1: '6.5',
        money2: '1.12',
        type: '住宅',
        factory: 'hhhhhhhhhhhhh'
      },
      {
        imgArr: '../../image/28.jpg',
        title: '米丽达花园',
        show: '在售',
        city: '嘉兴市',
        money1: '6.5',
        money2: '1.12',
        type: '住宅'
      },
      {
        imgArr: '../../image/28.jpg',
        title: '米丽达花园',
        show: '在售',
        city: '嘉兴市',
        money1: '6.5',
        money2: '1.12',
        type: '住宅'
      },
      {
        imgArr: '../../image/28.jpg',
        title: '米丽达花园',
        show: '在售',
        city: '嘉兴市',
        money1: '6.5',
        money2: '1.12',
        type: '住宅'
      }
    ],
    market:[
      {
        name:'李俊',
        phone:'1111****111'
        
      }
    ],
    trends: [
      {
        name: '李俊',
        build:'新房区',
        day:'20191111',
        time:'22.00'

      },
      {
        name: '李俊',
        build: '新房区',
        day: '20191111',
        time: '22.00'

      }
    ],
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
    gridCol: 5,
    skin: true
  },
  // 展开折叠选择 
  changeToggle: function (e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.selectedFlag) {
      this.data.selectedFlag = false;
    } else {
      this.data.selectedFlag = true;
    }

    this.setData({
      selectedFlag: this.data.selectedFlag
    })
  },
  // 打电话
  tel: function () {
    wx.makePhoneCall({
      phoneNumber: '15094597034',
    })
  },
  // 选择
  onTabsItemTap: function (event) {
    let index = event.currentTarget.dataset.index;
    this.setData({
      currentTabIndex: index
    })
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
  // 订阅
  subscribeTo() {
    let isSubscribe = !this.data.isSubscribe
    this.setData({
      // 下面本来是这样子的:isCollected=isCollected,可以简写
      isSubscribe
    })
    //提示用户
    wx.showToast({
      title: isSubscribe ? '订阅成功' : '取消订阅',
      icon: 'success'
    })
  },
  // 跳转
  parameter: function (e) {
    wx.navigateTo({
      url: '../estateDetails/parameter/parameter?id=' + this.data.id
    })
  },
  error:function(e) {
    wx.navigateTo({
      url: '../estateDetails/error/error'
    })
  },
  trendsDetail: function (e) {
    wx.navigateTo({
      url: '../estateDetails/trends/trends'
    })
  },
  comments: function (e) {
    wx.navigateTo({
      url: '../estateDetails/comments/comments'
    })
  },
  goComments:function (e) {
      wx.navigateTo({
        url: '../estateDetails/goComments/goComments'
      })
  },
  calculator: function (e) {
    wx.navigateTo({
      url: '../estateDetails/calculator/calculator'
    })
  },
  plan: function (e) {
    wx.navigateTo({
      url: '../estateDetails/plan/plan?plan=' + this.data.buildingVo.buildingBaseInfo.buildingEmploy
    })
  },
  ask: function (e) {
    wx.navigateTo({
      url: '../estateDetails/ask/ask'
    })
  },
  goAsk: function (e) {
    wx.navigateTo({
      url: '../estateDetails/goAsk/goAsk'
    })
  },
  estateDetails: function (e) {
    wx.navigateTo({
      url: '../estateDetails/estateDetails'
    })
  },
  map: function (e) {
    wx.navigateTo({
      url: '../map/map'
    })
  }, 
  reply: function (e) {
    wx.navigateTo({
      url: '../estateDetails/reply/reply'
    })
  },
//  分享
 share:function(){
  //  var that = this;
   this.setData({
     maskHiddens: true
   }); 
   },
   cancel: function () {
    this.setData({
      maskHiddens: false
    });
   },
  //  var that=this
  //  wx.showActionSheet({
  //    itemList: ['分享给微信好友', '生成海报'],
  //    success: function (res) {
  //      console.log(res.tapIndex)
  //      if (res.tapIndex === 0){
  //        that.onShareAppMessage()
  //      } 
  //      if (res.tapIndex === 1)
  //      {
  //        that.formSubmit()
  //      }   
  //    }
  //  })

  //点击生成
  formSubmit: function() {
    // console.log("shibai");
    var that = this;
    this.setData({
      maskHidden: false
    });
    wx.showToast({
      title: '生成中',
      icon: 'loading',
      duration: 1000
    });
    setTimeout(function () {
      wx.hideToast()
      that.createNewImg();
      that.setData({
        maskHidden: true
      });
    }, 1000)
  },
  //将canvas转换为图片保存到本地，然后将图片路径传给image图片的src
  createNewImg: function () {
    var that = this;
    var context = wx.createCanvasContext('mycanvas');
    context.setFillStyle("#6899FF")
    context.fillRect(0, 0, 375, 667)
    var path = "/image/3.png";
    context.drawImage(path, 10, 10, 355, 647);
    context.setFontSize(24);
    context.setFillStyle('#E0A859');
    context.setTextAlign('center');
    context.fillText("楼/盘/推/荐", 180, 50);
    context.stroke();
    context.setFontSize(14);
    context.setFillStyle('#949494');
    context.setTextAlign('center');
    context.fillText("—— 向您推荐一个好楼盘 ——", 180, 80);
    context.stroke();
    var path1 = "/image/27.jpg";
    context.drawImage(path1, 20, 100, 335, 217);
    var path2 = "/image/111.jpg";
    context.drawImage(path2, 146, 520, 80, 80);
    context.setFontSize(20);
    context.setFillStyle('#5A5472');
    context.setTextAlign('left');
    context.fillText("风清云都", 30, 347);
    context.stroke();

    context.setFontSize(20);
    context.setFillStyle('#FD7B48');
    context.setTextAlign('right');
    context.fillText("1200m^2", 335, 347);
    context.stroke();

    context.setFontSize(16);
    context.setFillStyle('#AAACBA');
    context.setTextAlign('left');
    context.fillText("地址：嘉兴市南湖区越秀北路洪兴交界处", 30, 377);
    context.stroke();

    context.setFontSize(16);
    context.setFillStyle('#AAACBA');
    context.setTextAlign('left');
    context.fillText("面积：29-50m^2", 30, 407);
    context.stroke();

    context.setFontSize(20);
    context.setFillStyle('#FD7B48');
    context.setTextAlign('left');
    context.fillText("地理位置好，环境优美，物超所值！", 30, 457);
    context.stroke();
    context.draw();

    //将生成好的图片保存到本地，需要延迟一会，绘制期间耗时
    setTimeout(function () {
      wx.canvasToTempFilePath({
        canvasId: 'mycanvas',
        success: function (res) {
          var tempFilePath = res.tempFilePath;
          that.setData({
            imagePath: tempFilePath,
            canvasHidden: true
          });
        },
        fail: function (res) {
          console.log(res);
        }
      });
    }, 200);
  },
  //点击保存到相册
  baocun: function () {
    var that = this
    wx.saveImageToPhotosAlbum({
      filePath: that.data.imagePath,
      success(res) {
        wx.showModal({
          content: '图片已保存到相册，赶紧晒一下吧~',
          showCancel: false,
          confirmText: '好的',
          confirmColor: '#333',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定');
              /* 该隐藏的隐藏 */
              that.setData({
                maskHidden: false
              })
            }
          }, fail: function (res) {
            console.log(11111)
          }
        })
      }
    })
  },
  

  onShareAppMessage: function () {
    console.log("dd")
    var userid = ''
    wx.getStorage({
      key: 'user',
      success: function (res) {
        userid = res.data.userId
      },
    })
    return {
      title: '弹出分享时显示的分享标题',
      desc: '分享页面的内容',
      path: 'pages/index/index?parentid=' + userid // 路径，传递参数到指定页面。
    }
  },
 

// map
  onReady: function (e) {
    let that =this
    this.mapCtx = wx.createMapContext('myMap')
    wx.request({
      url: 'https://www.dikashi.top/house/user/getUser',
      data: {
        userId: that.data.buildingVo.building.userId
      },
      success(res) {
        that.setData({
          market:res.data.data
        })
        console.log(that.data.market)
      }
    })

      // wx.request({
      //   url: 'http://localhost:8080/comment/getComment',
      //   data: {
      //     userId: that.data.buildingVo.building.userId,
      //     building:
      //   },
      //   success(res) {
      //     that.setData({
      //       market: res.data.data
      //     })
      //     console.log(that.data.market)
      //   }
      // })

  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  },
  seeMap(buildingVo) {
    let that = this;
    qqmapsdk.geocoder({
      //address: that.data.buildingVo.buildingBaseInfo.buildingProvince + that.data.buildingVo.buildingBaseInfo.buildingAddress,
      address: buildingVo.buildingBaseInfo.buildingProvince + buildingVo.buildingBaseInfo.buildingAddress,
      //address: '嘉兴南湖邮轮东侧',
      success:function(res) {
        console.log(res);
        that.setData({
          latitude: res.result.location.lat,
          longitude: res.result.location.lng
        })
        wx.getLocation({
          type: 'wgs84',
          success: (res) => {
            let latitude = res.latitude
            let longitude = res.longitude
            qqmapsdk.calculateDistance({
              mode: 'straight',
              from: {
                latitude: latitude,
                longitude: longitude,
              },
              to: [{
                latitude: that.data.latitude,
                longitude: that.data.longitude
              }],
              success:function(res) {
                var distance = res.result.elements[0].distance
                var distance = distance/1000
                console.log(distance)
                that.setData({
                  distance:distance
                })
              }
            })
          },
        })
      },
      fail:function(res) {
        console.log(res);
      }
    
    })
  },

  tomap:function() {
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      scale: 28
    })
  },
  // 图片放大
  previewImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    console.log(this.data.brand.img);

    
    var imgArr = this.data.brand;
    wx.previewImage({
      current: imgArr[index].img,     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { 
        
      },
      fail: function (res) {
        console.log(imgArr[index].img);
        console.log(imgArr.img);
      },
      complete: function (res) { },
    })
  },


  // 备案
  record: function () {
      wx.showModal({
        title: '提示',
        content: '请报备真实有效的客户信息，若多次报备虚假客户，你的客户可能会永久被禁用哦！',
        success: function (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '../estateDetails/record/record'
            })
            console.log('继续报备')
          } else {
            console.log('取消')
          }

        }
      })
   },
  onShow() {
    let that = this
    this._getUserLocation();
    
    
  },
  onLoad(options) {
    console.log(options.id)
    var id = options.id
    qqmapsdk = new QQMapWX({
      key: 'JXSBZ-BNCCG-M44Q6-IOJAS-UODZF-B5BFJ'
    });
    let that = this;
    this.setData({
      id:id
    })
    wx.request({
      url: 'https://www.dikashi.top/house/upload/imageByDes',
      data: {
        buildingId:id,
        description: '1',
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
    var userId = ''
    wx.getStorage({
      key: 'user',
      success: function(res) {
        console.log(res.data.userId)
        userId = res.data.userId
      },
    })
    wx.request({
      url: 'https://www.dikashi.top/house/building/buildingInfo?',
      data:{
        buildingId:this.data.id,
        userId:userId,
        isViewUser:true,
      },
      success(res) {
        console.log(res.data.data)
        that.setData({
          buildingVo: res.data.data
        })
        that.seeMap(res.data.data)
      }
    })
      
   
  },
  _getUserLocation(){
    var a=4;
    if(a>5){
    wx.showModal({
      title: '提示',
      content: '免费用户最多可浏览5个楼盘资料，如需浏览更多楼盘资料请点击>去开通<浏览VIP会员，即可限制浏览楼盘资料',
      success: function (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '../logs/vip/vip'
          })  
        } else {
          wx.switchTab({
            url: '../index/index'
          })
        }
      }
    })
    }
  }
})
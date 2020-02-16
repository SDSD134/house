const app = getApp();
var QQMapWX = require('../../lib/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({
  data: {
    // 海报要用值
    path:'../../image/3.png',
    path1:'../../image/27.jpg',
    path2:'../../image/111.jpg',
    path3:'临水家园',
    path4:'12000元/m^2',
    path5:'上海莆田区濮阳路2468好号',
    path6: '50平方米',
    path7:'5%',
    path8:'上海加航区浦元路2468号',
    path9:'都是地铁啥都有哈哈哈哈',
    path10:'第四人民医院',
    path11:'华晨超市',
    path12:'第一小学，第一中学',
    path13:'健身会馆',

    x:1,
    y:1,
    copyData:"",
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
    mask:false,
    masks:false,
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
    gridCol: 5,
    skin: true,
    list: [
      {
        imgArr: '../../image/28.jpg',
        title: '米丽达花园',
        show: '在售',
        city: '嘉兴市',
        money1: '6.5',
        money2: '1.12',
        type: '住宅',
        factory: '米兰达'
      },
      {
        imgArr: '../../image/28.jpg',
        title: '米丽达花园',
        show: '在售',
        city: '嘉兴市',
        money1: '6.5',
        money2: '1.12',
        type: '住宅',
        factory: '米兰达'
      },
      {
        imgArr: '../../image/28.jpg',
        title: '米丽达花园',
        show: '在售',
        city: '嘉兴市',
        money1: '6.5',
        money2: '1.12',
        type: '住宅',
        factory: '米兰达'
      },
      {
        imgArr: '../../image/28.jpg',
        title: '米丽达花园',
        show: '在售',
        city: '嘉兴市',
        money1: '6.5',
        money2: '1.12',
        type: '住宅',
        factory: '米兰达'
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
        time:'2019-11-11 22.00'

      },
      {
        name: '李俊',
        build: '新房区',
        day: '20191111',
        time: '22.00'

      }
    ],
   comment: [
      // {
      //   name: '孙楠',
      //   content: '体量：8141套，面积段：68-88-110平，均价：18888元/平。',
      //   time: '201-11-11 15：33：33 '
      // },
      // {
      //   name: '孙楠',
      //   content: '体量：8141套，面积段：68-88-110平，均价：18888元/平。',
      //   time: '201-11-11 15：33：33 '
      // },
      // {
      //   name: '孙楠',
      //   content: '体量：8141套，面积段：68-88-110平，均价：18888元/平。',
      //   time: '201-11-11 15：33：33 '
      // }
    ],
    askList:[
      {
        ask:'好吗？？？？？？？',
        answer:'好好好'
      },
      {
        ask: '好吗？？？？？？？',
        answer: '好好好'
      }
    ],
   
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
  tel: function (e) {
    console.log(e.currentTarget.dataset.phone)
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone,
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
  //复制
  copyBtn: function (e) {
    var that = this;
    wx.setClipboardData({
      //去找上面的数据
      data: that.data.copyData,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
        });
      }
    });
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
    let that = this
    wx.navigateTo({
      url: "../estateDetails/trends/trends?buildingId="+that.data.id+"&buildingName="+ that.data.buildingVo.buildingBaseInfo.buildingName
    })
  },
  comments: function (e) {
    let that = this;
    wx.navigateTo({
      url: "../estateDetails/comments/comments?buildingId="+that.data.id
    })
  },
  goComments:function (e) {
      wx.navigateTo({
        url: "../estateDetails/goComments/goComments?buildingId="+ this.data.id
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
  agent: function (e) {
    wx.navigateTo({
      url: '../estateDetails/agent/agent'
    })
  },
  goAsk: function (e) {
    let that = this
    wx.navigateTo({
      url: "../estateDetails/goAsk/goAsk?buildingId="+that.data.id+"&buildingName="+that.data.buildingVo.buildingBaseInfo.buildingName
      })
  },
  toAsk: function (e) {
    let that = this
    console.log(e.currentTarget.dataset.index)
    wx.setStorage({
      key: 'question',
      data: this.data.askList[e.currentTarget.dataset.index],
      success(res) {
        wx.navigateTo({
          url: "../estateDetails/toAsk/toAsk?commentId=" + that.data.askList[e.currentTarget.dataset.index].commentId+"&buildingName="+that.data.buildingVo.buildingBaseInfo.buildingName
        })
      }
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
    var comment= ""
    for (let i = 0 ;i < this.data.comment.length;i++) {
      if (this.data.comment[i].commentId == e.target.dataset.id ) {
        comment = this.data.comment[i]
        console.log(comment)
        wx.setStorageSync('comment', comment)
      }
    }
    wx.navigateTo({
      url: '../estateDetails/reply/reply' 
    })
  },
// 海报
  post: function () {
    //  var that = this;
    this.setData({
      mask: true,
      maskHiddens:false
    });
  },
  cancels: function () {
    this.setData({
      mask: false
    });
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
  // 点击生成二维码
  maSubmit: function () {
    // console.log("shibai");
    var that = this;
    this.setData({
      masks: false
    });
    wx.showToast({
      title: '生成中',
      icon: 'loading',
      duration: 1000
    });
    setTimeout(function () {
      wx.hideToast()
      that.createImg();
      that.setData({
        masks: true
      });
    }, 1000)
  },
  createImg: function () {
    var that = this;
    var context = wx.createCanvasContext('canvas');
    context.setFillStyle("#6899FF")
    context.fillRect(0, 0, 375, 385)
     
    context.setFillStyle("#FFFFFF")
    context.fillRect(10, 10, 355, 365)

    context.setFillStyle("#6899FF")
    context.fillRect(20, 20, 335, 345)
    var path2 = that.data.path2;
    context.drawImage(path2, 35, 35, 305, 315);

    
    context.draw();

    //将生成好的图片保存到本地，需要延迟一会，绘制期间耗时
    setTimeout(function () {
      wx.canvasToTempFilePath({
        canvasId: 'canvas',
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
  baocun01: function () {
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
                masks: false
              })
            }
          }, fail: function (res) {
            console.log(11111)
          }
        })
      }
    })
  },

  //点击生成海报
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
    context.fillRect(0, 0, 375, 867)
    var path = that.data.path;
    context.drawImage(path, 10, 10, 355, 847);
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
    var path1 = that.data.path1;
    context.drawImage(path1, 35, 100, 305, 217);
    var path2 = that.data.path2;
    context.drawImage(path2, 150, 750, 60, 70);

    var path3 = that.data.path3;
    context.setFontSize(20);
    context.setFillStyle('#5A5472');
    context.setTextAlign('left');
    context.fillText(path3, 30, 347);
    context.stroke();

    var path4 = that.data.path4;
    context.setFontSize(20);
    context.setFillStyle('#FD7B48');
    context.setTextAlign('right');
    context.fillText(path4, 335, 347);
    context.stroke();

    context.setFontSize(16);
    context.setFillStyle('#AAACBA');
    context.setTextAlign('left');
    context.fillText("面积：", 30, 377);
    context.stroke();

    var path5 = that.data.path5;
    context.setFontSize(16);
    context.setFillStyle('#AAACBA');
    context.setTextAlign('left');
    context.fillText(path5, 60, 377);
    context.stroke();

    context.setFontSize(16);
    context.setFillStyle('#AAACBA');
    context.setTextAlign('left');
    context.fillText("地址：", 30, 407);
    context.stroke();

    var path6 = that.data.path6;
    context.setFontSize(16);
    context.setFillStyle('#AAACBA');
    context.setTextAlign('left');
    context.fillText(path6, 60, 407);
    context.stroke();

    context.setFontSize(20);
    context.setFillStyle('#5A5472');
    context.setTextAlign('left');
    context.fillText("佣金方案", 30, 437);
    context.stroke();
   
    var path7 = that.data.path7;
    context.setFontSize(20);
    context.setFillStyle('#FD7B48');
    context.setTextAlign('right');
    context.fillText(path7, 335, 437);
    context.stroke();
    
    context.setFontSize(20);
    context.setFillStyle('#5A5472');
    context.setTextAlign('left');
    context.fillText("楼房卖点", 30, 467);
    context.stroke();

    context.setFontSize(16);
    context.setFillStyle('#AAACBA');
    context.setTextAlign('left');
    context.fillText("1.位置:", 30, 497);
    context.stroke();
    var path8 = that.data.path8;
    context.setFontSize(16);
    context.setFillStyle('#AAACBA');
    context.setTextAlign('left');
    context.fillText(path8, 80, 497);
    context.stroke();
    
    context.setFontSize(16);
    context.setFillStyle('#AAACBA');
    context.setTextAlign('left');
    context.fillText("2.地理优势：", 30, 527);
    context.stroke();
    var path9 = that.data.path9;
    context.setFontSize(16);
    context.setFillStyle('#AAACBA');
    context.setTextAlign('left');
    context.fillText(path9, 120, 527);
    context.stroke();

    context.setFontSize(16);
    context.setFillStyle('#AAACBA');
    context.setTextAlign('left');
    context.fillText("3.小区配套：", 30, 557);
    context.stroke();

    context.setFontSize(16);
    context.setFillStyle('#AAACBA');
    context.setTextAlign('left');
    context.fillText("医院：", 50, 587);
    context.stroke();
    var path10 = that.data.path10;
    context.setFontSize(16);
    context.setFillStyle('#AAACBA');
    context.setTextAlign('left');
    context.fillText(path10, 90, 587);
    context.stroke();

    context.setFontSize(16);
    context.setFillStyle('#AAACBA');
    context.setTextAlign('left');
    context.fillText("超市：", 50, 617);
    context.stroke();
    var path11 = that.data.path11;
    context.setFontSize(16);
    context.setFillStyle('#AAACBA');
    context.setTextAlign('left');
    context.fillText(path11, 90, 617);
    context.stroke();

    context.setFontSize(16);
    context.setFillStyle('#AAACBA');
    context.setTextAlign('left');
    context.fillText("学校：", 50, 647);
    context.stroke();
    var path12 = that.data.path12;
    context.setFontSize(16);
    context.setFillStyle('#AAACBA');
    context.setTextAlign('left');
    context.fillText(path12, 90, 647);
    context.stroke();

    context.setFontSize(16);
    context.setFillStyle('#AAACBA');
    context.setTextAlign('left');
    context.fillText("娱乐设施：", 50, 677);
    context.stroke();
    var path13 = that.data.path13;
    context.setFontSize(16);
    context.setFillStyle('#AAACBA');
    context.setTextAlign('left');
    context.fillText(path13, 130, 677);
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
      path: 'pages/estateDetails/agent/agent?parentid=' + userid // 路径，传递参数到指定页面。
    }
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
    var userId = wx.getStorageSync('user').userId
    console.log(options)
    var id = options.id
    var buildingVo = ""
    qqmapsdk = new QQMapWX({
      key: 'JXSBZ-BNCCG-M44Q6-IOJAS-UODZF-B5BFJ'
    });
    let that = this;
    this.setData({
      id:id
    })
    wx.request({
      url: 'http://localhost:8080/upload/imageByDes',
      data: {
        buildingId:id,
        description: '1',
      },
      success(res) {
        that.setData({
          swiperList: res.data.data
        })
        console.log(that.data.swiperList)
        wx.request({
          url: 'http://localhost:8080/house/upload/imageByDes',
          data: {
            buildingId: id,
            description: '2',
          },
          success(res) {
            console.log("户型图")
            that.setData({
              brand: res.data.data
            })
          }
        })
      },
      fail(res) {
        console.log(res)
      },

    })
    var userId = ""
    userId = wx.getStorageSync('user').userId
    
    wx.request({
      url: 'http://localhost:8080/building/buildingInfo?',
      data:{
        buildingId:this.data.id,
        userId:userId,
        isViewUser:true,
      },
      success(res) {
        console.log(res.data)
        that.setData({
          buildingVo: res.data.data
        })

        if(res.data.status == 200 ){
          console.log("res")
          wx.request({
            url: 'http://localhost:8080/assistantUser/list',
            data: {
              buildingId: id
            },
            success(res) {
              console.log("市场专员")
              console.log(res.data)
              that.setData({
                market: res.data.data
              })
              console.log(that.data.market)
            }
          }),
            wx.request({
              url: 'http://localhost:8080/comment/getComment',
              data: {
                buildingId: that.data.id,
                commentType: 2,
                pageNum:1,
                pageSize:2
              },
              success(resComment) {
                console.log("公司动态")
                console.log(resComment)
                that.setData({
                  trends: resComment.data.data
                })
              }
            }),
            wx.request({
            url: 'http://localhost:8080/comment/getComment',
              data: {
                buildingId:that.data.id,
                commentType:0,
              },
              success(resComment) {
                console.log("测试")
                console.log(resComment)
                that.setData({
                  comment:resComment.data.data
                })
              }
            }),
            wx.request({
              url: 'http://localhost:8080/comment/getComment',
              data: {
                buildingId: that.data.id,
                commentType: 1,
              },
              success(question) {
                console.log("测试")
                console.log(question)
                that.setData({
                  askList: question.data.data
                })
              }
            }),
            wx.request({
            url: 'http://localhost:8080/building/recentBuilding',
              data: {
                userId:wx.getStorageSync('user').userId,
              //  country: that.data.buildingVo.buildingBaseInfo.buildingAddress,
                country: "西安",
              },
              success(question) {
                console.log("最近楼盘")
                console.log(question)
                that.setData({
                  list: question.data.data
                })
              }
            })

          
        }
       
        
        that.seeMap(res.data.data)
      }
    })
   
      
   
  },

  // map
  onReady: function (e) {
    let that = this
    this.mapCtx = wx.createMapContext('myMap')

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
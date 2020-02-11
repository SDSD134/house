var QQMapWX = require('../../lib/qqmap-wx-jssdk.js');
//var getPhoneNumber = require('../../wxPopView/wxPopView.js');
var qqmapsdk;
var common = require('../../wxPop/wxPop.js');
// var userId  ;
// wx.getStorage({
//   key: 'user',
//   success: function(res) {
//     console.log("缓存为" + res)
//     userId = res.data.userId
//   },
// })
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否显示
    isShow: {
      type: Boolean,
      value: true
    },
    // 弹框标题
    title: {
      type: String,
      value: '!提示'
    },
    // 弹框内容
    content: {
      type: String,
      value: '您还没有登录，请选择微信登录或者手机号登录'
    },
    // 是否显示取消按钮
    showCancel: {
      type: Boolean,
      value: true
    },
    // 确认按钮文本
    confirmText: {
      type: String,
      value: '手机号'
    },
    // 确认按钮的open-type
    open_type: {
      type: String,
      value: ''
    },
  },
  data: {
    x:1,
    //轮播图配置
    autoplay: true,
    interval: 3000,
    duration: 1000,
    isCollected: false,
    
    noticeList: [{
      content0: "国庆假期暂停发货温馨提醒：尊敬的用户",
      content1: "国庆节假期将至，我们将在10.1-10.7节日期间暂"
    },
    {
      content0: "停发货，并停止客服服务，将于10月8日恢复正常",
      content1: "发货及客服服务，在此祝您假期愉快！"
    },
    ],
    enjoyList:[
      {
        content: "停发货，并停止客服服务，将于10月8日恢复"
      },
      {
        content: "停发货，并停止客服服务，将于10月8日恢复"
      },
      {
        content: "停发货，并停止客服服务，将于10月8日恢复"
      },
    ],
    starCount: 0,
    forksCount: 0,
    visitTotal: 0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    cardCur: 0,
    currentTabIndex: 0,
    // swiperList: [{
    //   id: 0,
    //   type: 'image',
    //   url: 'http://file06.16sucai.com/2018/0218/b91612d875e4a8c003a62744cc82bae1.jpg'
    // }, {
    //   id: 1,
    //   type: 'image',
    //     url: 'http://file06.16sucai.com/2018/0218/b91612d875e4a8c003a62744cc82bae1.jpg',
    // }, {
    //   id: 2,
    //   type: 'image',
    //     url: 'http://file06.16sucai.com/2018/0218/b91612d875e4a8c003a62744cc82bae1.jpg'
    // }],
    brand: [
      {
        img: '../../image/26.jpg',
        title: '临水家园',
        price: '12200元/m^3',
        place: '嘉兴市-海盐县'
      },
      {
        img: '../../image/26.jpg',
        title: '临水家园',
        price: '12200元/m^3',
        place: '嘉兴市-海盐县'
      },
      {
        img: '../../image/26.jpg',
        title: '临水家园',
        price: '12200元/m^3',
        place: '嘉兴市-海盐县'
      },
      {
        img: '../../image/26.jpg',
        title: '临水家园',
        price: '12200元/m^3',
        place: '嘉兴市-海盐县'
      }
    ],
    brandTwo: [
      {
        imgArr:
          'http://file06.16sucai.com/2018/0218/b91612d875e4a8c003a62744cc82bae1.jpg',
          title:'哈尔滨市',
          number:'12'
      },
      {
        imgArr:
          '../../image/27.jpg',
        title: '哈尔滨市',
        number: '12'
      }
      ,
      {
        imgArr:
          '../../image/28.jpg',
        title: '哈尔滨市',
        number: '12'
      },
      {
        imgArr:
          '../../image/28.jpg',
        title: '哈尔滨市',
        number: '12'
      },
      {
        imgArr:
          '../../image/28.jpg',
        title: '哈尔滨市',
        number: '12'
      }
    ],
    brandThree: [
      {
        imgArr:
          '../../image/26.jpg'
      },
      {
        imgArr:
          '../../image/27.jpg'
      }
      ,
      {
        imgArr:
          '../../image/28.jpg'
      }
    ],
    list:[
      {
        imgArr:'../../image/28.jpg',
        title:'米丽达花园',
        show:'在售',
        city:'嘉兴市',
        money1:'6.5',
        money2:'1.12',
        type:'住宅'
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
    list1: [
      {
        imgArr: '../../image/26.jpg',
        title: '米丽达花园',
        show: '在售',
        city: '嘉兴市',
        money1: '6.5',
        money2: '1.12',
        type: '住宅'
      },
      {
        imgArr: '../../image/26.jpg',
        title: '米丽达花园',
        show: '在售',
        city: '嘉兴市',
        money1: '6.5',
        money2: '1.12',
        type: '住宅'
      }
    ],
    list2: [
      {
        imgArr: '../../image/27.jpg',
        title: '米丽达花园',
        show: '在售',
        city: '嘉兴市',
        money1: '6.5',
        money2: '1.12',
        type: '住宅'
      },
      {
        imgArr: '../../image/27.jpg',
        title: '米丽达花园',
        show: '在售',
        city: '嘉兴市',
        money1: '6.5',
        money2: '1.12',
        type: '住宅'
      }
    ],
    list3: [
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
    list4:[]

  },
  methods: {
    // 轮播图
    onLoad: function () {
      var that = this;
      var userId = ""
      userId = wx.getStorageSync('user').userId
      var data = {
        "datas": [
          {
            "id": 1,
            "imgurl": "http://file06.16sucai.com/2018/0218/b91612d875e4a8c003a62744cc82bae1.jpg"
          },
          {
            "id": 2,
            "imgurl": "http://file06.16sucai.com/2018/0218/b91612d875e4a8c003a62744cc82bae1.jpg"
          },
          {
            "id": 3,
            "imgurl": "http://file06.16sucai.com/2018/0218/b91612d875e4a8c003a62744cc82bae1.jpg"
          }
        ]
      };
      qqmapsdk = new QQMapWX({
        key: 'JXSBZ-BNCCG-M44Q6-IOJAS-UODZF-B5BFJ'
      });
      if(userId != "") {
        wx.request({
          url: 'http://localhost:8080/building/select/hot',
          data: {
            userId:userId ,
          },
          success(res) {
            console.log(res)
            if (res.data.status == 200) {
              console.log(res.data.data),
                that.setData({
                  list: res.data.data,
                })
            }
            //console.log(that.list)
          }
        })
      }
     
      
      that.setData({
        lunboData: data.datas
      })
    },
    getPhoneNumber: function (e) {
      common.getPhoneNumber(e);
    },
    // 跳转
    lead: function (e) {
      wx.navigateTo({
        url: '../lead/lead'
      })
    },
    jump: function (e) {
      wx.switchTab({
        if(id = 0) { 
          url: '../home/home'
          },
        if(id=1){
          url: '../factory/factory'
        },
        if(id = 2) {
          url: '../logs/logs'
        }
        
      })
    },
    estateDetails: function (e) {
      wx.navigateTo({
        url: '../estateDetails/estateDetails?id=' + e.currentTarget.dataset.buildingid
      })
    },
    home: function (e) {
      wx.switchTab({
        url: '../home/home'
      })
    },
    haiwai: function (e) {
      wx.switchTab({
        url: '../home/home？region[2]="海外"'
      })
    },
    close: function () {
      this.setData({
        hide: true
      });
    },
    Success: function (e) {
      wx.navigateTo({
        url: '../phoneLogin/phoneLogin'
      })
    },
    Cancel: function (e) {
      var myEventDetail = e // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('Cancel', myEventDetail, myEventOption)
      this.close();
    },
    
 
  
  // //轮播图
  // onLoad(options) {
  //   console.log(options);
  //   this.towerSwiper('swiperList');
  //   // 初始化towerSwiper 传已有的数组名即可
  //   qqmapsdk = new QQMapWX({
  //     key: 'JXSBZ-BNCCG-M44Q6-IOJAS-UODZF-B5BFJ'
  //   });
  // },
  // DotStyle(e) {
  //   this.setData({
  //     DotStyle: e.detail.value
  //   })
  // },
  // // cardSwiper
  // cardSwiper(e) {
  //   this.setData({
  //     cardCur: e.detail.current
  //   })
  // },
  // // towerSwiper
  // // 初始化towerSwiper
  // towerSwiper(name) {
  //   let list = this.data[name];
  //   for (let i = 0; i < list.length; i++) {
  //     list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
  //     list[i].mLeft = i - parseInt(list.length / 2)
  //   }
  //   this.setData({
  //     swiperList: list
  //   })
  // },
  // // towerSwiper触摸开始
  // towerStart(e) {
  //   this.setData({
  //     towerStart: e.touches[0].pageX
  //   })
  // },
  // // towerSwiper计算方向
  // towerMove(e) {
  //   this.setData({
  //     direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
  //   })
  // },
  // // towerSwiper计算滚动
  // towerEnd(e) {
  //   let direction = this.data.direction;
  //   let list = this.data.swiperList;
  //   if (direction == 'right') {
  //     let mLeft = list[0].mLeft;
  //     let zIndex = list[0].zIndex;
  //     for (let i = 1; i < list.length; i++) {
  //       list[i - 1].mLeft = list[i].mLeft
  //       list[i - 1].zIndex = list[i].zIndex
  //     }
  //     list[list.length - 1].mLeft = mLeft;
  //     list[list.length - 1].zIndex = zIndex;
  //     this.setData({
  //       swiperList: list
  //     })
  //   } else {
  //     let mLeft = list[list.length - 1].mLeft;
  //     let zIndex = list[list.length - 1].zIndex;
  //     for (let i = list.length - 1; i > 0; i--) {
  //       list[i].mLeft = list[i - 1].mLeft
  //       list[i].zIndex = list[i - 1].zIndex
  //     }
  //     list[0].mLeft = mLeft;
  //     list[0].zIndex = zIndex;
  //     this.setData({
  //       swiperList: list
  //     })
  //   }
  // },
  // 选择
  onTabsItemTap: function (event) {
    let that = this
    var userId = ""
    // wx.getStorage({
    //   key: 'userId',
    //   success: function(res) {
    //     userId = res.data.userId
    //   },
    // })
    userId = wx.getStorageSync('user').userId
    
    let index = event.currentTarget.dataset.index;
    
    this.setData({
      currentTabIndex: index
    })
    if(index == 0) {
      wx.request({
        url: 'localhost:8080/building/select/hot',
        data: {
          userId: userId,
        },
        success(res) {
          if (res.data.status == 200) {
            console.log(res.data.data),
              that.setData({
                list: res.data.data,
              })
          }
        }
      })
    } else if (index == 1) {
      wx.request({
        url: 'http://localhost:8080/building/select/hot',
        data: {
          userId: userId,
        },
        success(res) {
          console.log(res)
          if (res.data.status == 200) {
            console.log(res.data.data),
              that.setData({
                list1: res.data.data,
              })
          }
          //console.log(that.list)
        }
      })
    } else if(index == 2) {
      wx.request({
        url: 'http://localhost:8080/building/select/viewTime',
        data: {
          userId: userId,
        },
        success(res) {
          console.log(res)
          if (res.data.status == 200) {
            console.log(res.data.data),
              that.setData({
                list2: res.data.data,
              })
          }
          //console.log(that.list)
        }
      })
    } else if(index == 3) {
      wx.request({
        url: 'http://localhost:8080/building/select/lowPrice',
        data: {
          userId: userId,
        },
        success(res) {
          console.log(res)
          if (res.data.status == 200) {
            console.log(res.data.data),
              that.setData({
                list3: res.data.data,
              })
          }
          //console.log(that.list)
        }
      })
    } 
    
   
  },

  
  onShow() {
    var userId = ""
   this._getUserLocation();
    let that = this
    userId = wx.getStorageSync('user').userId
    console.log(userId)
    if(userId != ""){
      // wx.request({
      //   url: 'https://www.dikashi.top/house/building/listBuilding',
      //   data: {
      //     userId: userId
      //   },
      //   success(res) {
      //     console.log(1)
      //     console.log(res)
      //     if (res.data.status == 200) {
      //       console.log(res.data.data),
      //         that.setData({
      //           list: res.data.data,
      //           list1: res.data.data,
      //           list2: res.data.data,
      //           list3: res.data.data,
      //         })
      //     }
      //     //console.log(that.list)
      //   }
      // }),
      wx.request({
        url: 'http://localhost:8080/building/recentBuilding',
        data: {
          userId: userId
        },
        success(resq) {
          console.log(resq)
          if (resq.data.status == "200") {
            console.log(resq.data.data)
            that.setData({
              brand: resq.data.data
            })
          } else {
            that.setData({
              brand: []
            })
          }
        }
      }),
      wx.request({
        url: 'http://localhost:8080/country/hotCountry',
        data: {
          count:3
        },
        header: {
          userId:userId
        },
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          console.log(res.data)
        },
        fail: function(res) {},
        complete: function(res) {},
      }),
      wx.request({
        url: 'http://localhost:8080/building/select/hot',
        data: {
          userId: userId
        },
        success(res) {
          console.log(res.data)
          that.setData({
            list: res.data.data
          })
        }
      })

    }
   
     
  },


    // _getUserLocation() {
    //   wx.getSetting({
    //     success: (res) => {
    //       console.log(JSON.stringify(res))
    //       console.log(res.authSetting['scope.userLocation']);
    //       // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
    //       // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
    //       // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
    //       if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
    //         console.log(1)
    //         wx.showModal({
    //           title: '请求授权当前位置',
    //           content: '需要获取您的地理位置，请确认授权',
    //           success: function (res) {
    //             if (res.cancel) {
    //               wx.showToast({
    //                 title: '拒绝授权',
    //                 icon: 'none',
    //                 duration: 1000
    //               })
    //             } else if (res.confirm) {
    //               console.log(2)
    //               wx.openSetting({
    //                 success: function (dataAu) {
    //                   if (dataAu.authSetting["scope.userLocation"] == true) {
    //                     wx.showToast({
    //                       title: '授权成功',
    //                       icon: 'success',
    //                       duration: 1000
    //                     })
    //                     //再次授权，调用wx.getLocation的API
    //                   } else {
    //                     wx.showToast({
    //                       title: '授权失败',
    //                       icon: 'none',
    //                       duration: 1000
    //                     })
    //                   }
    //                 }
    //               })
    //             }
    //           }
    //         })
    //       } else if (res.authSetting['scope.userLocation'] == undefined) {
    //         //调用wx.getLocation的API
    //         wx.getLocation({
    //           type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
    //           success: function (res) {
    //             console.log("陈功undefined")
    //             const  latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
    //             const  longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
    //             const  speed = res.speed; // 速度，以米/每秒计
    //             const  accuracy = res.accuracy; // 位置精度
    //             qqmapsdk.reverseGeocoder({
    //               location: { latitude: res.latitude, longitude: res.longitude }, 
    //               success: function (addressRes) {
    //                 console.log(addressRes);
    //                 var self = this;
    //                 self.address = addressRes.result.formatted_addresses.recommend;
    //                 self.address = addressRes.result.address_component.province + addressRes.result.address_component.city + addressRes.result.address_component.district
    //                 //app.globalData.address = address; 
    //                 },
    //               fail: function (addressRes) {
    //                 wx.showModal({
    //                   title: '信息提示',
    //                   content: '请求失败',
    //                   showCancel: false,
    //                   confirmColor: '#f37938'
    //                 });
    //               }
    //             })
    //           },
    //           fail:function(res) {
    //             console.log(res)
    //             console.log(" wx.getLocation失败");
    //           }
    //         });
    //       }else {
    //         console.log(3)
    //         //调用wx.getLocation的API
    //         wx.getLocation({
    //           type: 'wgx84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
    //           success: function (res) {
    //             console.log("陈功true")
    //             const latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
    //             const longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
    //             const speed = res.speed; // 速度，以米/每秒计
    //             const accuracy = res.accuracy; // 位置精度
    //             qqmapsdk.reverseGeocoder({
    //               location: { latitude: res.latitude, longitude: res.longitude },
    //               success: function (addressRes) {
    //                 console.log(addressRes);
    //                 var self = this;
    //                 self.address = addressRes.result.formatted_addresses.recommend;
    //                 self.address = addressRes.result.address_component.province + addressRes.result.address_component.city + addressRes.result.address_component.district
    //                 //app.globalData.address = address; 
    //               },
    //               fail: function (addressRes) {
    //                 wx.showModal({
    //                   title: '信息提示',
    //                   content: '请求失败',
    //                   showCancel: false,
    //                   confirmColor: '#f37938'
    //                 });
    //               }
    //             })
    //           },
    //           fail: function (res) {
    //             console.log(res)
    //             console.log(" wx.getLocation失败");
    //           }
    //         });
    //       }
    //     }
    //   })
    // },
  

   //获取地理位置
  _getUserLocation() {
    var self = this
    wx.getSetting({
      success: (res) => {
        console.log('用户授权情况', res)
        //未授权
        if (res.authSetting['scope.userLocation'] !== undefined &&
          res.authSetting['scope.userLocation'] !== true) {
          wx.showModal({
            title: '请求授权当前位置',
            content: '需要获取您的地理位置，请确认授权',
            success: function (res) {
              console.log(res)
              if (res.cancel) {
                wx.showToast({
                  title: '拒绝授权',
                  icon: 'none',
                  duration: 1000
                })
              } else if (res.confirm) { //确认授权， 通过wx.openSetting发起授权请求
                wx.openSetting({
                  success: function (res) {
                    if (res.authSetting["scope.userLocation"] == true) {
                      wx.showModal({
                        title: '授权成功',
                        icon: 'success',
                        duration: 1000
                      })
                      self._getCityLocation()
                    } else {
                      wx.showModal({
                        title: '授权失败3',
                        icon: 'none',
                        duration: 1000
                      })
                    }
                  }
                })
              }
            }
          })
        } else if (res.authSetting['scope.userLocation'] == undefined) {
          self._getCityLocation()
          console.log('这个为undefined')
        } else {
          
          if(self.address=="") {
            wx.showModal({
              title: '',
              content: '请在系统设置中打开定位服务',
              confirmText: '确定',
            });
          }
          self._getCityLocation()
        
        }
      }
    })
  },

  _getCityLocation() {
    let self = this
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        let latitude = res.latitude
        let longitude = res.longitude
        let speed = res.speed
        console.log(res.latitude);
        qqmapsdk.reverseGeocoder({ 
          location: { latitude: res.latitude, longitude: res.longitude }, 
          success: function (addressRes) { 
            console.log(addressRes);
            self.address = addressRes.result.formatted_addresses.recommend;
            self.address = addressRes.result.address_component.province + addressRes.result.address_component.city + addressRes.result.address_component.district
            //app.globalData.address = address; 
              },
          fail: function (addressRes) {
            console.log(res)
            wx.showModal({
              title: '信息提示1',
              content: '请求失败',
              showCancel: false,
              confirmColor: '#f37938'
            });
          }
         })
      },
      fail:(res) => {
        console.log(res)
        wx.showModal({
          title: '信息提示2',
          content: '请求失败',
          showCancel: false,
          comfirmColor: '#f37938'
        })
        console.log("失败")
        console.log(self.address)
      },
      // complete: (res) => {
      //   console.log(res)
      //   console.log("完成")
      // }
      
    })
  },
   
  },
  
})

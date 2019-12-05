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
    noticeList: [{
      content0: "国庆假期暂停发货温馨提醒：尊敬的用户，",
      content1: "国庆节假期将至，我们将在10.1-10.7节日期间暂"
    },
    {
      content0: "停发货，并停止客服服务，将于10月8日恢复正常",
      content1: "发货及客服服务，在此祝您假期愉快！"
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
    }],
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
          'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
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
    ]

  },
  methods: {
    // 跳转
    lead: function (e) {
      wx.navigateTo({
        url: '../lead/lead'
      })
    },
    estateDetails: function (e) {
      wx.navigateTo({
        url: '../estateDetails/estateDetails'
      })
    },
    home: function (e) {
      wx.switchTab({
        url: '../home/home'
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
 
  //轮播图
  onLoad() {
    this.towerSwiper('swiperList');
    // 初始化towerSwiper 传已有的数组名即可
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  },
  // 选择
  onTabsItemTap: function (event) {
    let index = event.currentTarget.dataset.index;
    this.setData({
      currentTabIndex: index
    })
  },
 
  onShow() {
   this._getUserLocation();
  },
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
                        title: '授权失败',
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
          console.log('授权成功')
          self._getCityLocation()
        }
      }
    })
  },
  _getCityLocation() {
    let self = this
    wx.getLocation({
      type: 'wgx84',
      success: (res) => {
        let latitude = res.latitude
        let longitude = res.longitude
        let speed = res.speed
        wx.request({
          url: '' + res.latitude + ',' + res.longitude + '&output=json',
          //后台接口
          data: {},
          header: { 'Content-type': 'application/json' },
          success: function (ops) {
            console.log(ops)
            self.address = ops.data.result.addressComponent.city +
              ops.data.result.addressComponent.district
          },
          fail: function (resq) {
            wx.showModal({
              title: '信息提示',
              content: '请求失败',
              showCancel: false,
              confirmColor: '#f37938'
            });
          }
        })
      },
      fail: (res) => {
        wx.showModal({
          title: '信息提示',
          content: '请求失败',
          showCancel: false,
          comfirmColor: '#f37938'
        })
      }
    })
  }
  }
 
})

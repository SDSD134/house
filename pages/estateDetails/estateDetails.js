const app = getApp();
Page({
  data: {
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
      url: '../estateDetails/parameter/parameter'
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
      url: '../estateDetails/plan/plan'
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
})
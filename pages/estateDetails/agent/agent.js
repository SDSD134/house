// pages/estateDetails/agent/agent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    customerLength:1,
    money:'13000',
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
    brand: [
      {
        img: 'http://bpic.588ku.com/element_origin_min_pic/16/10/30/528aa13209e86d5d9839890967a6b9c1.jpg',
        title: '总价待定',
        price: '2室1厅',
      },
      {
        img: '../../../image/29.jpg',
        title: '总价待定',
        price: '2室1厅',
      },
      {
        img: '../../../image/29.jpg',
        title: '总价待定',
        price: '2室1厅',
      },
      {
        img: '../../../image/29.jpg',
        title: '总价待定',
        price: '2室1厅',
      }
    ],
    // 展开
    list01: [
      {
        title: '成交总价',
        word: '180万'
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
    selectedFlag: false,
    market: [
      {
        name: '李俊',
        phone: '11111111111'

      }
    ],
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
  onLoad: function () {
    var self = this;
    this.mapCtx = wx.createMapContext('myMap');
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        self.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            id: 1,
            latitude: res.latitude,
            longitude: res.longitude,
            // iconPath: '/image/post.png',
          }
          ],
        });
      }
    })
  },
  index: function (e) {
    wx.switchTab({
      url: '../../index/index'
    })
  },
  map: function (e) {
    wx.navigateTo({
      url: '../../map/map'
    })
  }, 
})
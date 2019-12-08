var common = require('../../wxPop/wxPop.js');
Component({
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
    region: ['全国', '全国', '全国'],
    currentTabIndex: 0,
    list: [
      {
        imgArr: '../../image/27.jpg',
        title: '嘉兴有限科技公司',
        score: '9.7',
        number: '8',
        person: '1111',
        
      },
      {
        imgArr: '../../image/27.jpg',
        title: '嘉兴有限科技公司',
        score: '9.7',
        number: '8',
        person: '1111',
      },
      {
        imgArr: '../../image/27.jpg',
        title: '嘉兴有限科技公司',
        score: '9.7',
        number: '8',
        person: '1111',
      },
      {
        imgArr: '../../image/27.jpg',
        title: '嘉兴有限科技公司',
        score: '9.7',
        number: '8',
        person: '1111',
      }
    ]

  },
  methods: {
    // 获取手机号

    getPhoneNumber: function (e) {
      common.getPhoneNumber(e);
    },
    RegionChange: function (e) {
      this.setData({
        region: e.detail.value
      })
    },
    factoryDetails: function (e) {
      wx.navigateTo({
        url: '../factoryDetails/factoryDetails'
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
  onTabsItemTap: function (event) {
    let index = event.currentTarget.dataset.index;
    this.setData({
      currentTabIndex: index
    })
  }
  },
  
})

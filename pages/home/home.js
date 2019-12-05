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
    select: false,
    currentTabIndex: 0,
    isCollected: false,
    region: ['不限', '不限', '不限'],
    index: null,
    indexOne: null,
    indexTwo: null,
    picker: ['不限','5000以下', '5000-6000', '6000-7000', '7000-8000', '8000-9000', '9000-10000', '10000-12000', '12000-15000', '15000-20000', '20000-25000'],
    pickerOne: ['不限','20万一下', '20-25万', '25-30万', '30-35万', '35-40万', '45-50万', '50-60万', '60-70万',"70-80","80万往上"],
    pickerTwo: ['住宅','别墅','商住','商办','写字楼','商铺','厂房','毛坯','简装','精修楼'],
    pickerThree: ['默认顺序', '价格从高到低', '价格从低到高', '位置从远到近', '发布时间倒序', '按点击量倒序'],
    list: [
      {
        imgArr: '../../image/28.jpg',
        title: '米丽达花园',
        show: '在售',
        city: '嘉兴市',
        money1: '6.5',
        money2: '1.12',
        type: '住宅',
        factory:'hhhhhhhhhhhhh'
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
        imgArr: '../../image/28.jpg',
        title: '米丽达花园',
        show: '在售',
        city: '嘉兴市',
        money1: '6.5',
        money2: '1.12',
        type: '住宅',
        factory: 'hhhhhhhhhhhhh'
      }
    ],
    list2: [
      {
        imgArr: '../../image/28.jpg',
        title: '米丽达花园',
        show: '在售',
        city: '嘉兴市',
        money1: '6.5',
        money2: '1.12',
        type: '住宅',
        factory: 'hhhhhhhhhhhhh'
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
        type: '住宅',
        factory: 'hhhhhhhhhhhhh'
      }
    ],
    list4: [
      {
        imgArr: '../../image/28.jpg',
        title: '米丽达花园',
        show: '在售',
        city: '嘉兴市',
        money1: '6.5',
        money2: '1.12',
        type: '住宅',
        factory: 'hhhhhhhhhhhhh'
      }
    ],
    list5: [
      {
        imgArr: '../../image/28.jpg',
        title: '米丽达花园',
        show: '在售',
        city: '嘉兴市',
        money1: '6.5',
        money2: '1.12',
        type: '住宅',
        factory: 'hhhhhhhhhhhhh'
      }
    ],
    list6: [
      {
        imgArr: '../../image/28.jpg',
        title: '米丽达花园',
        show: '在售',
        city: '嘉兴市',
        money1: '6.5',
        money2: '1.12',
        type: '住宅',
        factory: 'hhhhhhhhhhhhh'
      }
    ],
   
  },
methods: {
  estateDetails: function (e) {
    wx.navigateTo({
      url: '../estateDetails/estateDetails'
    })
  },
  RegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },
  PickerChangeOne(e) {
    console.log(e);
    this.setData({
      indexOne: e.detail.value
    })
  },
  PickerChangeTwo(e) {
    console.log(e);
    this.setData({
      indexTwo: e.detail.value
    })
  },
  PickerChangeThree(e) {
    console.log(e);
    this.setData({
      indexThree: e.detail.value
    })
  },
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      select: false
    })
  },
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
  // 弹框
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
}
})

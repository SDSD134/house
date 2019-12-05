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
      value: '提示'
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

  /**
   * 组件的初始数据
   */
  data: {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    close: function () {
      this.setData({
        hide: true
      });
    },
    Success: function (e) {
      wx.navigateTo({
        url: '/pages/phoneLogin/phoneLogin'
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

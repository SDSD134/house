const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    index: null,
    indexOne: null,
    indexTwo: null,
    indexThree: null,
    picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
    pickerOne: ['1', '2', '3'],
    pickerTwo: ['4', '5', '6'],
    pickerThree: ['7', '8', '9'],
    date: '2018-12-25',
    dateOne:'2019-11-11',
    dateTwo: '2019-11-01',
    region: ['广东省', '广州市', '海珠区'],
    imgList: [],
    imgListMore: [],
    textareaAValue: '',
    textareaBValue: '',
    title:"",   //题目
    address:"", //地址
    avaprice:"",//平均价格
    totalprice:"",//总价格
    year:"",      //产权年限
    area:"",      //户型面积说明
    character:"", //项目特色
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

  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  DateChangeOne(e) {
    this.setData({
      dateOne: e.detail.value
    })
  },
  DateChangeTwo(e) {
    this.setData({
      dateTwo: e.detail.value
    })
  },

 
  ChooseImage() {
    wx.chooseImage({
      count: 1, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '删除',
      content: '确定要删除吗？',
      confirmText: '确定',
      cancelText: '取消',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },

  ChooseImageMore() {
    wx.chooseImage({
      count: 9, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgListMore.length != 0) {
          this.setData({
            imgListMore: this.data.imgListMore.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgListMore: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImageMore(e) {
    wx.previewImage({
      urls: this.data.imgListMore,
      current: e.currentTarget.dataset.url
    });
  },
  DelImgMore(e) {
    wx.showModal({
      ttitle: '删除',
      content: '确定要删除吗？',
      confirmText: '确定',
      cancelText: '取消',
      success: res => {
        if (res.confirm) {
          this.data.imgListMore.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgListMore: this.data.imgListMore
          })
        }
      }
    }) 
  },

  // textareaAInput(e) {
  //   this.setData({
  //     textareaAValue: e.detail.value
  //   })
  // },
  // textareaBInput(e) {
  //   this.setData({
  //     textareaBValue: e.detail.value
  //   })
  // },
  titleInput(e) {
    this.setData({
      title: e.detail.value
    })
  },
  addressInput(e) {
    this.setData({
      address: e.detail.value
    })
  },
  avapriceInput(e) {
    this.setData({
      avaprice: e.detail.value
    })
  },
  totalpriceInput(e) {
    this.setData({
      totalprice: e.detail.value
    })
  },
  yearInput(e) {
    this.setData({
      year: e.detail.value
    })
  },
  areaInput(e) {
    this.setData({
      area: e.detail.value
    })
  },
 characterInput(e) {
    this.setData({
      character: e.detail.value
    })
  },

  bindHideKeyboard: function (e) {
    if (e.detail.value === '123') {
      // 收起键盘
      wx.hideKeyboard()
    }
  },
  RegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
 
})
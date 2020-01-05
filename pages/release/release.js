const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    index: null,
    indexOne: null,
    indexTwo: null,
    indexThree: null,
    picker: ['第一类型', '第二类型', '第三类型'],
    pickerOne: ['1', '2', '3'],
    pickerTwo: ['4', '5', '6'],
    pickerThree: ['已售完', '下架'],
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

    groundArea:"",  //占地面积
    houseArea:"",  //户型面积
    houseCount:"",//总体量
    green:"",//绿化率
    chanshu:"",//产数
    car:"" ,//车位
    company:"", //物业公司
    fee:"",//物业费
    louceng:"",//楼层概况
    isSale:"" ,//项目特色
    isShow:"", //是否展示
    status:"", //项目状态
  },

  btnclick:function() {
    let that = this
    if (that.data.title == "" || that.data.imgList.size < 0 || that.data.address == "" || that.data.avaprice || that.data.totalprice
      == "" || that.data.totalprice == "" || that.data.year || that.data.groundArea == "" || that.data.houseArea == "" || that.data.houseCount == "" || that.data.green == "" || that.data.car == "" || that.data.company == "" || that.data.fee == "" || that.data.louceng == "") {
        wx.showModal({
          title: '错误',
          content: '存在内容为空',
        })
      } else {
        wx.request({
          url: '',
          // data {
          //   ‘
          // }
        })
      }
  },

  loucengInput(e) {
    console.log(1)
    this.setData({
      louceng: e.detail.value
    })
    this.commit;
  },

  companyInput(e) {
    this.setData({
      company: e.detail.value
    })
  },
  feeInput(e) {
    this.setData({
      fee: e.detail.value
    })
  },

  groundAreaInput(e) {
    this.setData({
      groundArea: e.detail.value
    })
  },
  houseAreaInput(e) {
    this.setData({
      houseArea: e.detail.value
    })
  },
  houseCountInput(e) {
    this.setData({
      houseCount: e.detail.value
    })
  },
  greenInput(e) {
    this.setData({
      green: e.detail.value
    })
  },
  chanshuInput(e) {
    this.setData({
      chanshu: e.detail.value
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
    this.setData({
      indexThree: e.detail.value,
    })
    //console.log(this.data.pickerThree[this.data.indexThree]);
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

  titleInput(e) {
    this.setData({
      title: e.detail.value
    })
    console.log(this.data.baseinfoLis)
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
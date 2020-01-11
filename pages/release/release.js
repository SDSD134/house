const app = getApp();
Page({
  data: {
    // 复选框
    listCheckbox: [
      { name: 'A', value: '别墅' },
      { name: 'B', value: '办公楼' },
      { name: 'C', value: '住宅' },
      { name: 'D', value: '商场' },
      { name: 'E', value: '商业别墅' },
      { name: 'F', value: '酒店式公寓' },
    ],
    checkNum: 0,
    max: false,
    maxCheckedNum: 2,
    listsCheckbox: [
      { name: 'a', value: '公寓'},
      { name: 'b', value: '别墅' },
      { name: 'c', value: '联排' },
      { name: 'd', value: '叠拼' },
      { name: 'e', value: '期房' },
      { name: 'f', value: '电梯房' },
      { name: 'a', value: '低密度' },
      { name: 'b', value: '高密度' },
      { name: 'c', value: '小户型' },
      { name: 'd', value: '大户型' },
      { name: 'e', value: '普通住宅' },
      { name: 'f', value: '花园洋房' },
      { name: 'a', value: '品牌地产' },
      { name: 'b', value: '刚需婚房' },
      { name: 'c', value: '南北通透' },
      { name: 'd', value: '改善置换' },
      { name: 'e', value: '内环以内' },
      { name: 'f', value: '中内环间' },
      { name: 'f', value: '外中环间' },
    ],
    checkNums: 0,
    maxs: false,
    maxCheckedNums: 3,
    // 验证为空
    name: "",//新房名称
    address: "",//新房地址
    avaprice: "",//均价
    totalprice:"",//总价
    year: "",//产权年限
    area: "",//占地面积
    homearea: "",//户型面积
    allarea: "",//总体量
    green: "",//绿化
    production: "",//规划产数
    car: "",//车位
    property: "",//物业公司
    storey: "",//物业费
    character: "",//楼层概况
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    index: null,
    indexOne: null,
    indexTwo: null,
    indexThree: null,
    picker: ['第一类型', '第二类型', '第三类型'],
    pickerOne: ['1', '2', '3'],
    pickerTwo: ['4', '5', '6'],
    pickerThree: ['已售完', '下架','在售'],
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
    otherIntro:"",//其他

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
    propertyType:"",
    traffic:"",
    market:"",
    hospital:"",
    bank:"",
    post:"",
    innerInstrument:"",
    otherAround:"",
    school:"",
    buildingProvince:"",
    buildingAddress:""
   
  },

  otherAroundInput(e) {
    this.setData({
      otherAround: e.detail.value
    })
  },
  trafficInput(e) {
    this.setData({
      traffic: e.detail.value
    })
  },
  schoolInput(e) {
    this.setData({
      school: e.detail.value
    })
  },
  marketInput(e) {
    this.setData({
      market: e.detail.value
    })
  },
  hospitalInput(e) {
    this.setData({
      hospital: e.detail.value
    })
  },
 bankInput(e) {
    this.setData({
      bank: e.detail.value
    })
  },
  postInput(e) {
    this.setData({
      post: e.detail.value
    })
  },
 innerInstrumentInput(e) {
    this.setData({
      innerInstrument: e.detail.value
    })
  },



  checkChange(e) {
    let id = e.currentTarget.id;
    this.data.listCheckbox[id].checked = !this.data.listCheckbox[id].checked;
    this.data.checkNum = this.data.listCheckbox[id].checked ? this.data.checkNum + 1 : this.data.checkNum - 1;
    this.checkMax(this.data.checkNum);
  },
  checkMax(num) {
    const maxNum = this.data.maxCheckedNum;
    const listCheckbox = this.data.listCheckbox;
    if (num == maxNum) {
      var status = true;
    } else if (num < maxNum && this.data.max) {
      var status = false;
    }
    if (status != undefined) {
      this.data.max = status;
      for (var i = 0; i < listCheckbox.length; i++) {
        if (!listCheckbox[i].checked) listCheckbox[i].canCheck = status;
      }
      this.setData({
        listCheckbox: listCheckbox
      })
    }
  },

  checksChange(e) {
    let id = e.currentTarget.id;
    this.data.listsCheckbox[id].checked = !this.data.listsCheckbox[id].checked;
    this.data.checkNums = this.data.listsCheckbox[id].checked ? this.data.checkNums + 1 : this.data.checkNums - 1;
    this.checksMax(this.data.checkNums);
  },
  checksMax(num) {
    const maxNums = this.data.maxCheckedNums;
    const listsCheckbox = this.data.listsCheckbox;
    if (num == maxNums) {
      var status = true;
    } else if (num < maxNums && this.data.maxs) {
      var status = false;
    }
    if (status != undefined) {
      this.data.maxs = status;
      for (var i = 0; i < listsCheckbox.length; i++) {
        if (!listsCheckbox[i].checked) listsCheckbox[i].canCheck = status;
      }
      this.setData({
        listsCheckbox: listsCheckbox
      })
    }
  },
  submit: function (e) {
    let that  = this;
    var name = e.detail.value.name;
    var address = e.detail.value.address;
    var avaprice = e.detail.value.avaprice;
    var totalprice = e.detail.value.totalprice;
    var year = e.detail.value.year;
    var area = e.detail.value.area;
    var homearea = e.detail.value.homearea;
    var allarea = e.detail.value.allarea;
    var green = e.detail.value.green;
    var production = e.detail.value.production;
    var car = e.detail.value.car;
    var property = e.detail.value.property;
    var storey = e.detail.value.storey;
    var character = e.detail.value.character;
    var propertyType = e.detail.value.propertyType;
    var houseType = e.detail.value.houseType;

    if (name == "" || address == "" || avaprice == "" || totalprice == "" || year == "" || area == "" || homearea == "" || allarea == "" || green == "" || production == "" || car == "" || property == "" || storey == "" || character == "" || propertyType == "" || houseType == "") {
      wx.showModal({
        title: '提示',
        content: '请将必填信息输入完整！',
        success: function (res) {
          if (res.confirm) {
            console.log('完善')
          }
        }
      })
           return;
    } else {
    }
    var buildingSign = " "
    for (var i = 0; i < that.data.listCheckbox; i++) {
      buildingSign = buildingSign + "/" + listCheckbox[i]
    }
    // console.log(buildingSign);
    wx.request({
      url: 'https://www.dikashi.top/house/building/addBuilding',
      method:'GET',
      data: {
        buildingName: that.data.title,
        // buildingArea:that.
        planningHousehold: that.data.chanshu,
        propertyMoney: that.data.fee,
        floorCondition: that.data.louceng,
        //buildingName: that.data.title,
        commiteTime: that.data.dateTwo,
        propertyRight: that.data.year,
        otherIntro: that.data.otherIntro,
        buildingGreen: that.data.green,
        buildingCar: that.data.car,
        countPrice: that.data.totalprice,
        averagePrice: that.data.avaprice,
        propertyType: that.data.propertyType,
        buildingAddress: that.data.buildingAddress,
        buildingProvince: that.data.buildingProvince,
        buildingSign: buildingSign,
        buildingEmploy: that.data.buildingEmploy,
        houseType: that.data.houseType,
        houseCount: that.data.houseCount,
        houseArea: that.data.houseArea,
        //isShow:that.data.
        isSale: that.data.pickerThree[that.data.indexThree],
        traffic: that.data.traffic,
        market: that.data.market,
        hospital: that.data.hospital,
        bank: that.data.bank,
        post: that.data.post,
        innerInstrument: that.data.innerInstrument,
        otherAround: that.data.otherAround,
        buildingGroundArea:that.data.groundArea,
        startTime: that.data.date,
        endTime: that.data.dateOne,
        buildingCharacter:that.data.character,
        school:that.data.school,
      },
      success(res) {
        console.log(res)
        if (res.data.status != 200) {
          wx.showModal({
            title: '失败 ',
            content: '对不起上传失败',
          })
        } else {
          for (let i = 0; i < that.data.imgList.length; i++) {
            wx.uploadFile({
              url: 'https://www.dikashi.top/house/upload/buildingUploadPicture',
              filePath: that.data.imgList[i],
              name: 'file',
              formData: {
                'relationId': res.data.data,
                'description': 2
              },
              success(res) {
                // const data = res.data
                console.log(res)
                if (res.data.statusCode == 200) {
                  
                }
              },
              fail(res) {
                console.log("失败");
              }
            })
          }

          for (let i = 0; i < that.data.imgList.length; i++) {
            wx.uploadFile({
              url: 'https://www.dikashi.top/house/upload/buildingUploadPicture',
              filePath: that.data.imgListMore[i],
              name: 'file',
              formData: {
                'relationId': res.data.data,
                'description':1
              },
              success(res) {
                // const data = res.data
                console.log(res)
                wx.showToast({
                  title: '上传成功',
                })
                wx.switchTab({
                  url: '../index/index'
                })
                // if (res.data.status == 200) {
                //     wx.navigateTo({
                //       url: '../index/index',
                //     })
                // }
              },
              fail(res) {
                console.log("失败");
              }
            })
          }
          
        }
      },
      fail(res) {
        console.log("失败");
        console.log(res)
      }
    })


//>>>>>>> master
  },

  // btnclick:function() {
  //   let that = this
  //   if (that.data.title == "" || that.data.imgList.size < 0 || that.data.address == "" || that.data.avaprice || that.data.totalprice
  //     == "" || that.data.totalprice == "" || that.data.year || that.data.groundArea == "" || that.data.houseArea == "" || that.data.houseCount == "" || that.data.green == "" || that.data.car == "" || that.data.company == "" || that.data.fee == "" || that.data.louceng == "") {
  //       wx.showModal({
  //         title: '错误',
  //         content: '存在内容为空',
  //       })
  //     } else {
  //       wx.request({
  //         url: '',
  //         // data {
  //         //   ‘
  //         // }
  //       })
  //     }
  // },

  houseTypeInput(e) {
    this.setData({
      houseType: e.detail.value
    })
  },

  carInput(e) {
    this.setData({
      car: e.detail.value
    })
  },
  loucengInput(e) {
    //console.log(1)
    this.setData({
      louceng: e.detail.value
    })
    //this.commit;
  },

  buildingEmployInput(e) {
    this.setData({
      buildingEmploy: e.detail.value
    })
  },

  propertyTypeInput(e) {
    //console.log(1)
    this.setData({
      propertyType: e.detail.value
    })
    //this.commit;
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
      count: 3, //默认9
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
   // console.log(this.data.baseinfoLis)
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
  otherIntroInput(e) {
    this.setData({
      otherIntro: e.detail.value
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
    // this.setData({
    //   
    // })
    this.setData({
      region: e.detail.value,
      building_address: e.detail.value[2],
      buildingProvince: e.detail.value[0] + e.detail.value[1]
    })
    console.log(1)
    console.log(this.data.region)
  }
 
})
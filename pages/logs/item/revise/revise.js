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
      { name: 'a', value: '公寓' },
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
    dateOne: '2019-11-11',
    dateTwo: '2019-11-01',
    region: ['广东省', '广州市', '海珠区'],
    imgList: [],
    imgListMore: [],
    textareaAValue: '',
    textareaBValue: '',
    imgList:[
  '../../../../image/28.jpg'
      ],
       imgListMore: [
      '../../../../image/28.jpg',
         '../../../../image/28.jpg',
         '../../../../image/28.jpg',
    ]
    
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
      title: '亲爱的',
      content: '确定要删除吗？',
      cancelText: '再看看',
      confirmText: '再见',
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
      title: '亲爱的',
      content: '确定要删除吗？',
      cancelText: '再看看',
      confirmText: '再见',
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

  textareaAInput(e) {
    this.setData({
      textareaAValue: e.detail.value
    })
  },
  textareaBInput(e) {
    this.setData({
      textareaBValue: e.detail.value
    })
  }
})
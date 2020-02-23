var common = require('../../wxPop/wxPop.js');
// var c = require('../../utils/wxHaiwai.js');
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
    

    btns: [
      {
        title: '全部'
      },
      {
        title: '诚信联盟'
      },
      {
        title: '诚信联盟'
      },
      {
        title: '诚信联盟'
      },
      {
        title: '诚信联盟'
      }
    ],
    selectAverage:"",
    selectRegion:"",
    selectCountPrice:"",
    selectCharacter:"",
    select: false,
    currentTabIndex: 0,
    isCollected: false,
    region: [
      '不限', '不限', '不限'
    ],
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
    multiArray: [
      ['不限', '上海', '浙江', '江苏', '安徽', '陕西', '江西', '广东', '福建', '河南', '北京', '重庆', '吉林', '天津', '宁夏', '广西', '湖南', '湖北', '河北', '云南', '辽宁', '海南', '四川', '新疆', '山东', '黑龙江', '甘肃', '贵州', '山西', '青海', '内蒙古', '海外'],
      ['不限'],
      ['不限']
    ],
    multiIndex: [0, 0, 0],
    
  },
  

methods: {
  onShow:function(){
    let haiwai = wx.getStorageSync('haiwai');
    this.setData({
      haiwai: haiwai
    })
    console.log('测试'+haiwai)
    
  },
  // 获取手机号
  getPhoneNumber: function (e) {
    common.getPhoneNumber(e);
  },
  estateDetails: function (e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../estateDetails/estateDetails?id=' + e.currentTarget.dataset.id
    })
  },
  RegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  PickerChange(e) {
   let that = this 
    console.log(e);
    this.setData({
      index: e.detail.value
    }),
      wx.getStorage({
        key: 'user',
        success: function (res) {
          wx.request({
            url: 'http://localhost:8080/building/select/averagePrice',
            data: {
              userId: res.userId,
              pageNum: that.data.pageNum,
              pageSize: that.data.pageSize,
              priceType: that.data.index,
            },
          })
        },
      })
  },
  PickerChangeOne(e) {
    let that = this;
    console.log(e);
    this.setData({
      indexOne: e.detail.value
    }),
    wx.getStorage({
      key: 'user',
      success: function(res) {
        wx.request({
          url: 'http://localhost:8080/building/select/averagePrice',
          data: {
            userId: res.userId,
            pageNum: that.data.pageNum,
            pageSize: that.data.pageSize,
            priceType: that.data.index,
          },
        })
      },
    })
   
  },
  PickerChangeTwo(e) {
    let that = this;
   // console.log(e.detail.value);
    var index = e.detail.value
    this.setData({
      indexTwo: index
    })
    wx.getStorage({
      key: 'user',
      success: function (res) {
       // console.log(res)
        wx.request({
          url: 'http://localhost:8080/building/select/character',
          data: {
            userId: res.data.userId,
            //pageNum: that.data.pageNum,
            //pageSize: that.data.pageSize,
            characterType: that.data.indexTwo,
          },
          success(res) {
            // wx.showToast({
            //   title: '取消收藏成功',
            //   icon: 'success'
            // })
            that.setData({
             list:res.data.data
            })
           // console.log(res.data.data)
            
          },
        })
      },
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
  handleCollection(e) {
    // let isCollected = !this.data.isCollected
    let that = this;
    var list = that.data.list
    let collect = !list[e.currentTarget.dataset.index].collect
    list[e.currentTarget.dataset.index].collect = collect
    console.log()
    console.log(list[e.currentTarget.dataset.index].collect)
    
    
    this.setData({
      // 下面本来是这样子的:isCollected=isCollected,可以简写
      list:list
    })


    if (collect) {
      wx.request({
        url: 'https://www.dikashi.top/house/collect/addCollect',
        data: {
          userId: 'f',
          buildingId: list[e.currentTarget.dataset.index].buildingId
        },
        success(res) {
          wx.showToast({
            title: 收藏成功,
            icon: 'success'
          })
        },
        fail(res) {
          wx.showToast({
            title: '操作失败',
            icon: 'success'
          })
        }
      })
    } else{
      wx.request({
        url: 'https://www.dikashi.top/house/collect/deleteCollect',
        data: {
          userId: 'f',
          buildingId: list[e.currentTarget.dataset.index].buildingId
        },
        success(res) {
          wx.showToast({
            title:'取消收藏成功',
            icon: 'success'
          })
        },
        fail(res) {
          wx.showToast({
            title: '操作失败',
            icon: 'success'
          })
        }
      })
    }
    
    //提示用户
    
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
  // 海外
  MultiColumnChange(e) {
    wx.clearStorage('haiwai');
    let haiwai = 1;
    this.setData(haiwai);
    console.log(haiwai);
    let data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['不限'];
            data.multiArray[2] = ['不限'];
            break;
          case 1:
            data.multiArray[1] = ['不限', '上海'];
            data.multiArray[2] = ['不限'];
            break;
          case 2:
            data.multiArray[1] = ['不限', '嘉兴市', '杭州市', '湖州市', '金华市', '宁波市', '绍兴市', '舟山市', '台州市', '衢州市', '温州市', '丽水市'];
            data.multiArray[2] = ['不限'];
            break;
          case 3:
            data.multiArray[1] = ['不限', '昆山市', '南通市', '无锡市', '苏州市', '南京市', '常州市', '泰州市', '扬州市', '淮安市', '徐州市', '镇江市', '盐城市', '宿迁市', '连云港市'];
            data.multiArray[2] = ['不限'];
            break;
          case 4:
            data.multiArray[1] = ['不限', '合肥市', '宿州市', '铜陵市', '巢湖市', '蚌埠市', '阜阳市', '六安市', '黄山市', '安庆市', '池州市', '滁州市', '芜湖市', '马鞍山', '毫州市', '淮北市', '宣城市', '淮南市'];
            data.multiArray[2] = ['不限'];
            break;
          case 5:
            data.multiArray[1] = ['不限', '西安市', '宝鸡市', '安康市', '渭南市', '铜川市', '汉中市', '咸阳市'];
            data.multiArray[2] = ['不限'];
            break;
          case 6:
            data.multiArray[1] = ['不限', '南昌市', '景德镇', '萍乡市', '赣州市', '抚州市', '吉安市', '宜春市', '鹰潭市', '九江市', '上饶市'];
            data.multiArray[2] = ['不限'];
            break;
          case 7:
            data.multiArray[1] = ['不限', '惠州市', '揭阳市', '云浮市', '梧州市', '梅州市', '潮州市', '韶关市', '江门市', '汕尾市', '湛江市', '阳江市', '佛山市', '肇庆市', '汕头市', '茂名市', '东莞市', '河源市', '清远市', '中山市', '深圳市', '珠海市', '广州市'];
            data.multiArray[2] = ['不限'];
            break;
          case 8:
            data.multiArray[1] = ['不限', '泉州市', '三明市', '宁德市', '龙岩市', '南平市', '莆田市', '福州市', '漳州市', '厦门市'];
            data.multiArray[2] = ['不限'];
            break;
          case 9:
            data.multiArray[1] = ['不限', '郑州市', '漯河市', '鹤壁市', '南阳市', '濮阳市', '三门峡', '信阳市', '安阳市', '焦作市', '许昌市', '驻马店', '商丘市', '周口市', '开封市', '洛阳市', '新乡市', '河源市', '平顶山'];
            data.multiArray[2] = ['不限'];
            break;
          case 10:
            data.multiArray[1] = ['不限', '北京'];
            data.multiArray[2] = ['不限'];
            break;
          case 11:
            data.multiArray[1] = ['不限', '重庆'];
            data.multiArray[2] = ['不限'];
            break;
          case 12:
            data.multiArray[1] = ['不限', '白城市', '长春市', '吉林市', '通化市', '四平市'];
            data.multiArray[2] = ['不限'];
            break;
          case 13:
            data.multiArray[1] = ['不限', '天津'];
            data.multiArray[2] = ['不限'];
            break;
          case 14:
            data.multiArray[1] = ['不限', '银川市', '中卫市', '吴忠市', '石嘴山'];
            data.multiArray[2] = ['不限'];
            break;
          case 15:
            data.multiArray[1] = ['不限', '桂林市', '玉林市', '贵港市', '河池市', '贺州市', '梧州峡', '防城港', '钦州市', '百色市', '柳州市', '北海市', '南宁市'];
            data.multiArray[2] = ['不限'];
            break;
          case 16:
            data.multiArray[1] = ['不限', '长沙市', '永州市', '昭阳市', '怀化市', '湘西州', '郴州市', '株洲市', '衡阳市', '岳阳市', '常德市', '湘潭市'];
            data.multiArray[2] = ['不限'];
            break;
          case 17:
            data.multiArray[1] = ['不限', '武汉市', '恩施州', '荆门市', '潜江市', '十堰市', '荆州市', '鄂州市', '襄阳市', '黄石市', '黄冈市', '宜昌市', '随州市', '孝感市', '天门市', '咸宁市'];
            data.multiArray[2] = ['不限'];
            break;
          case 18:
            data.multiArray[1] = ['不限', '廊坊市', '邢台市', '雄安新区', '沧州市', '保定市', '秦皇岛', '唐山市', '承德市', '张家口', '石家庄', '邯郸市', '衡水市'];
            data.multiArray[2] = ['不限'];
            break;
          case 19:
            data.multiArray[1] = ['不限', '昆明市', '德宏州', '玉溪市', '保山市', '大理市', '西双版纳', '曲靖市'];
            data.multiArray[2] = ['不限'];
            break;
          case 20:
            data.multiArray[1] = ['不限', '丹东市', '营口市', '辽阳市', '抚顺市', '铁岭市', '鞍山市', '锦州市', '大连市', '沈阳市', '葫芦岛'];
            data.multiArray[2] = ['不限'];
            break;
          case 21:
            data.multiArray[1] = ['不限', '海口市', '昌江县', '定安市', '文昌市', '东方市', '保亭县', '乐东县', '陵水县', '琼海市', '万宁市', '屯昌县', '五指山市', '儋州市', '三亚市'];
            data.multiArray[2] = ['不限'];
            break;
          case 22:
            data.multiArray[1] = ['不限', '成都市', '乐山市', '雅安市', '凉山州', '眉山市', '内江市', '锦阳市', '攀枝花', '泸州市', '资阳市', '自贡市', '德阳市', '达州市', '南充市', '遂宁市', '广安市'];
            data.multiArray[2] = ['不限'];
            break;
          case 23:
            data.multiArray[1] = ['不限', '乌鲁木齐', '五家渠', '伊犁哈萨克'];
            data.multiArray[2] = ['不限'];
            break;
          case 24:
            data.multiArray[1] = ['不限', '烟台市', '莱芜市', '德州市', '威海市', '青岛市', '临沂市', '淄博市', '枣庄市', '菏泽市', '滨州市', '东营市', '潍坊市', '泰安市', '日照市', '聊城市', '济宁市', '济南市'];
            data.multiArray[2] = ['不限'];
            break;
          case 25:
            data.multiArray[1] = ['不限', '牡丹江市', '齐齐哈尔市', '大庆市', '哈尔滨市'];
            data.multiArray[2] = ['不限'];
            break;
          case 26:
            data.multiArray[1] = ['不限', '西宁市', '武威市', '银川市', '张掖市', '中卫市', '天水市', '兰州市', '酒泉市', '白银市', '定西市'];
            data.multiArray[2] = ['不限'];
            break;
          case 27:
            data.multiArray[1] = ['不限', '遵义市', '盘水市', '黔南州', '黔西南州', '贵阳市', '毕节市'];
            data.multiArray[2] = ['不限'];
            break;
          case 28:
            data.multiArray[1] = ['不限', '太原市', '吕梁市', '晋中市', '临汾市', '忻州市', '阳泉市', '运城市', '大同市'];
            data.multiArray[2] = ['不限'];
            break;
          case 29:
            data.multiArray[1] = ['不限', '西宁市', '海东市'];
            data.multiArray[2] = ['不限'];
            break;
          case 30:
            data.multiArray[1] = ['不限', '包头市', '乌兰察布', '赤峰市', '通辽市', '呼和浩特'];
            data.multiArray[2] = ['不限'];
            break;
          case 31:
            data.multiArray[1] = ['不限', '英国', '土耳其', '老挝', '越南', '缅甸', '日本', '马来西亚', '柬埔寨', '美国', '泰国', '新西兰', '菲律宾'];
            data.multiArray[2] = ['不限'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '青浦区', '临港新区', '静安区', '黄浦区', '徐汇区', '长宁区', '浦东新区', '虹口区', '杨浦区', '普陀区', '闵行区', '宝山区', '嘉定区', '松江区', '奉贤区', '金山区', '崇明县'];
                break;
            }
            break;
          case 2:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '南湖区', '秀洲区', '嘉善县', '海宁市', '桐乡市', '平湖市', '海盐市'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '拱墅区', '江干区', '上城区', '下城区', '淳安县', '西湖区', '滨江区', '萧山区', '余杭区', '临安区', '富阳区'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '吴兴区', '南浔区', '德清县', '长兴县', '吉安县'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '东阳市', '婺城区', '金东区', '义乌市', '浦江县', '武义县', '磐安县', '永康市', '兰溪市'];
                break;
              case 5:
                data.multiArray[2] = ['不限', '杭州湾新区', '镇海区', '高新区', '宁海县', '北仑区', '象山县', '江北区', '奉化市', '海曙区', '慈溪市', '余姚市', '鄞州区'];
                break;
              case 6:
                data.multiArray[2] = ['不限', '越城区', '袍江新区', '柯桥区', '上虞区', '新昌县', '诸暨市', '嵊州市'];
                break;
              case 7:
                data.multiArray[2] = ['不限', '定海区', '普陀区', '岱山县', '嵊泗县'];
                break;
              case 8:
                data.multiArray[2] = ['不限', '三门县', '仙居县', '黄岩区', '椒江区', '天台县', '温岭市', '路桥区', '玉环市', '临海市'];
                break;
              case 9:
                data.multiArray[2] = ['不限', '衢江区', '江山市', '龙游县', '常山县', '开化县', '柯城区'];
                break;
              case 10:
                data.multiArray[2] = ['不限', '瓯海区', '洞头市', '瑞安市', '龙湾区', '鹿城区', '永嘉县', '乐清市', '苍南县', '平阳县'];
                break;
              case 11:
                data.multiArray[2] = ['不限', '青田县', '莲都区', '龙泉市', '遂昌县', '庆元县', '云和县'];
                break;

            }
            break;
          case 3:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '城南', '城北', '城西', '城东', '城中', '花桥', '陆家', '巴城', '张浦', '周市', '千灯', '淀山湖', '周庄', '锦溪'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '崇川区', '开发区', '港闸区', '通州区', '海安市', '如东县', '海门市', '启东市', '其他'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '崇安区', '新吴区', '南长区', '梁溪区', '滨湖区', '惠山区', '锡山区', '江阴市', '宜兴市'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '园区', '虎丘区', '太仓市', '吴中区', '相城区', '新区', '吴江区', '姑苏区', '张家巷市', '常熟市'];
                break;
              case 5:
                data.multiArray[2] = ['不限', '六合区', '秦淮区', '雨花台区', '江宁区', '玄武区', '象山县', '鼓楼区', '浦口区', '栖霞区', '建邺区', '高淳县', '溧水区', '江北新区'];
                break;
              case 6:
                data.multiArray[2] = ['不限', '天宁区', '钟楼区', '新北区', '武进区', '金坛区', '溧阳市'];
                break;
              case 7:
                data.multiArray[2] = ['不限', '海陵区', '高港区', '姜堰区', '兴化市', '泰兴市', '靖江市'];
                break;
              case 8:
                data.multiArray[2] = ['不限', '广陵区', '邗江区', '江都区', '开发区', '宝应县', '仪征市'];
                break;
              case 9:
                data.multiArray[2] = ['不限', '淮安区', '清江浦区', '淮阴区', '洪泽区', '涟水县', '盱眙县', '金湖县'];
                break;
              case 10:
                data.multiArray[2] = ['不限', '鼓楼区', '经开区', '云龙区', '邳州市', '泉山区', '贾汪区', '丰县', '铜山区'];
                break;
              case 11:
                data.multiArray[2] = ['不限', '京口区', '润州区', '丹徒区', '镇江新区', '镇江高新区', '丹阳市'];
                break;
              case 12:
                data.multiArray[2] = ['不限', '东台市', '盐都区', '建湖县', '射阳县', '阜宁县', '滨海县', '响水县', '大丰区', '亭湖区'];
                break;
              case 13:
                data.multiArray[2] = ['不限', '泗洪县', '开发区', '沭阳县', '泗阳县', '宿城区'];
                break;
              case 14:
                data.multiArray[2] = ['不限', '海州区', '连云区', '赣榆区', '灌云县', '东海县', '灌南县'];
                break;

            }
            break;
          case 4:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '瑶海区', '新站区', '经开区', '滨湖新区', '包河区', '高新区', '庐江县', '巢湖市', '政务区', '长丰县', '肥东县', '蜀山区', '庐阳区'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '埇桥区', '灵璧县', '泗县', '砀山县'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '铜官区', '枞阳县'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '居巢区',];
                break;
              case 5:
                data.multiArray[2] = ['不限', '淮上区', '龙子湖区', '固镇县'];
                break;
              case 6:
                data.multiArray[2] = ['不限', '颍州区', '颍上县', '界首市', '阜南县', '颍东区', '经济开发区', '城南新区', '颍泉区'];
                break;
              case 7:
                data.multiArray[2] = ['不限', '舒城', '经开区', '霍邱县', '霍山县', '金寨县', '南山新区', '裕安区', '金安区', '金山区'];
                break;
              case 8:
                data.multiArray[2] = ['不限', '屯溪市', '祁门县', '休宁区', '黟县', '歙县', '黄山区', '徽州区'];
                break;
              case 9:
                data.multiArray[2] = ['不限', '迎江区', '宜秀区'];
                break;
              case 10:
                data.multiArray[2] = ['不限', '青阳县', '东至县'];
                break;
              case 11:
                data.multiArray[2] = ['不限', '全椒', '河新区', '南谯区', '来安县', '定远县', '凤阳县', '天长市', '明光市', '琅琊区'];
                break;
              case 12:
                data.multiArray[2] = ['不限', '新芜区', '三山区', '无为县', '芜湖县', '镜湖区', '戈江区', '鸠江区'];
                break;
              case 13:
                data.multiArray[2] = ['不限', '花山区', '乌江新区', '博望区', '雨山区', '当涂县', '含山县', '和县'];
                break;
              case 14:
                data.multiArray[2] = ['不限', '谯城区'];
                break;
              case 15:
                data.multiArray[2] = ['不限', '相山县', '濉溪县', '杜集区'];
                break;
              case 16:
                data.multiArray[2] = ['不限', '郎溪县', '宣州区', '广德县', '宁国市'];
                break;
              case 17:
                data.multiArray[2] = ['不限', '田家庵区', '山南新区', '潘集区', '谢家集区', '八公山区', '大通区', '寿县', '凤台县'];
                break;

            }
            break;
          case 5:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '莲湖区', '碑林区', '长安区', '未央区', '临潼区', '高陵区', '西咸新区', '灞桥区', '雁塔区', '新城区'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '金台区', '渭滨区', '陈仓区', '高新区', '眉县'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '高新区', '汉滨区'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '韩城市', '高新区', '临渭区', '华州区', '蒲城县'];
                break;
              case 5:
                data.multiArray[2] = ['不限', '耀州区'];
                break;
              case 6:
                data.multiArray[2] = ['不限', '汉台区', '城固县', '南郑区'];
                break;
              case 7:
                data.multiArray[2] = ['不限', '秦都区'];
                break;

            }
            break;
          case 6:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '东湖区', '红谷滩新区', '进贤县', '经开区', '高新开发区', '湾里区', '西湖区', '青山湖区', '南昌县', '九龙新区', '青云谱区', '新建区'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '珠山区', '昌江区'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '安源区'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '南康区', '于都县', '大余县', '上犹县', '章贡区', '赣县', '定南县', '全南县', '兴国县', '安远县', '龙南县'];
                break;
              case 5:
                data.multiArray[2] = ['不限', '临川县', '临川区', '崇仁县'];
                break;
              case 6:
                data.multiArray[2] = ['不限', '永新县', '安福县', '泰和县', '吉州区'];
                break;
              case 7:
                data.multiArray[2] = ['不限', '袁州区', '高安市'];
                break;
              case 8:
                data.multiArray[2] = ['不限', '信江新区', '月湖区'];
                break;
              case 9:
                data.multiArray[2] = ['不限', '浔阳区', '柴桑区', '德安县', '彭泽县', '永修县', '庐山区', '武宁县', '濂溪区'];
                break;
              case 10:
                data.multiArray[2] = ['不限', '信州区', '婺源县', '铅山县', '上饶县'];
                break;

            }
            break;
          case 7:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '惠阳区', '仲恺区', '大亚湾区', '惠东县', '博罗县', '龙门县', '惠城区'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '榕城区', '普宁区', '揭东区'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '西江新区', '郁南县', '新兴县', '云浮区', '云城区'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '岑溪市', '龙圩区'];
                break;
              case 5:
                data.multiArray[2] = ['不限', '梅县', '梅江区', '五华县'];
                break;
              case 6:
                data.multiArray[2] = ['不限', '湘桥区'];
                break;
              case 7:
                data.multiArray[2] = ['不限', '武江区', '乐昌市', '南雄市', '浈江区', '新丰县', '曲江区', '翁源县', '乳源县'];
                break;
              case 8:
                data.multiArray[2] = ['不限', '开平市', '蓬江区', '江南区', '鹤山市', '新会区', '恩平市'];
                break;
              case 9:
                data.multiArray[2] = ['不限', '马宫镇', '城区', '海丰县'];
                break;
              case 10:
                data.multiArray[2] = ['不限', '徐闻县', '麻章区', '赤坎区', '霞山区', '吴川市', '雷州市', '遂溪县', '廉江市'];
                break;
              case 11:
                data.multiArray[2] = ['不限', '阳西县', '海陵区', '江城区', '阳春市', '阳东区'];
                break;
              case 12:
                data.multiArray[2] = ['不限', '顺德区', '南海区', '禅城区', '三水区', '高明区'];
                break;
              case 13:
                data.multiArray[2] = ['不限', '高新区', '高要市', '端州区', '四会市', '鼎湖区', '广宁县', '封开县', '怀集县'];
                break;
              case 14:
                data.multiArray[2] = ['不限', '澄海区', '金平区', '龙海区', '濠江区', '潮阳区', '南澳县'];
                break;
              case 15:
                data.multiArray[2] = ['不限', '茂南区', '电白区', '化州市', '高州市', '茂名市开发区'];
                break;
              case 16:
                data.multiArray[2] = ['不限', '虎门镇', '大朗镇', '大岭山', '横沥镇', '望牛墩镇', '石龙镇', '寮步镇', '东坑镇', '南城区', '松山湖', '麻涌镇', '沙田镇', '企石镇', '清溪镇', '黄江镇', '凤岗镇', '石碣镇', '长安镇', '常平镇', '樟木头镇', '莞城区', '桥头镇', '道滘镇', '石排镇', '洪梅镇', '东城区', '塘厦镇'];
                break;
              case 17:
                data.multiArray[2] = ['不限', '源城区', '连平县', '紫金县', '东源县', '和平县', '江东新区'];
                break;
              case 18:
                data.multiArray[2] = ['不限', '清新区', '阳山县', '连州市', '连南瑶族自治区', '英德市', '佛冈县'];
                break;
              case 19:
                data.multiArray[2] = ['不限', '石岐区', '东升镇', '横栏镇', '南区', '西区', '民众镇', '板芙镇', '黄圃镇', '山乡镇', '沙溪镇', '坦洲镇', '大涌镇', '阜沙镇', '三角镇', '火炬区', '港口镇', '南头镇', '东区', '石岐区', '南朗镇'];
                break;
              case 20:
                data.multiArray[2] = ['不限', '龙岗区', '南山区', '福永', '龙华区', '宝安区', '光明区', '坪山区', '福田区', '罗湖区', '盐田区'];
                break;
              case 21:
                data.multiArray[2] = ['不限', '香洲区', '斗门区', '金湾区', '高栏港区', '保税区', '高新区', '横琴新区'];
                break;
              case 22:
                data.multiArray[2] = ['不限', '海珠区', '越秀区', '白云区', '荔湾区', '从化区', '增城区', '南沙区', '花都区', '番禺区', '黄埔区', '天河区'];
                break;

            }
            break;
          case 8:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '惠安县', '经济技术开发区', '台商区', '安溪县', '永春县', '德化县', '金门县', '南安市', '晋江市', '石狮市', '鲤城区', '丰泽区', '洛江区', '泉港区'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '大田县', '沙县', '宁化县', '明溪县', '永安县', '三元区'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '蕉城区', '福鼎市'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '新罗区', '永定区', '连城县', '武平县'];
                break;
              case 5:
                data.multiArray[2] = ['不限', '武夷山', '邵武市', '延平区'];
                break;
              case 6:
                data.multiArray[2] = ['不限', '仙游县', '荔城区', '城厢区', '秀屿区'];
                break;
              case 7:
                data.multiArray[2] = ['不限', '福清市', '晋安区', '鼓楼区', '仓山区', '马尾区', '台江区', '平潭县', '罗源县', '永泰县', '金山新区', '高新区', '闽侯县', '连江县'];
                break;
              case 8:
                data.multiArray[2] = ['不限', '云霄县', '平和县', '芗城区', '龙文区', '开发区', '长泰县', '漳州港', '龙海市', '漳浦县', '东山县', '角美'];
                break;
              case 9:
                data.multiArray[2] = ['不限', '集美', '角美', '翔安', '同安', '海沧', '湖里区', '思明'];
                break;
              case 10:
                data.multiArray[2] = ['不限', '信州区', '婺源县', '铅山县', '上饶县'];
                break;

            }
            break;
          case 9:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '郑东新区', '高新区', '经开区', '中牟县', '荥阳市', '巩义市', '新密市', '新郑市', '登封市', '航空港区', '中原区', '二七区', '金水区', '惠济区', '管城区', '上街区'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '源汇区'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '淇滨区'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '西峡县', '卧龙区', '邓州市', '镇平县'];
                break;
              case 5:
                data.multiArray[2] = ['不限', '濮阳县', '清丰县'];
                break;
              case 6:
                data.multiArray[2] = ['不限', '陕州区'];
                break;
              case 7:
                data.multiArray[2] = ['不限', '平桥区', '浉河区'];
                break;
              case 8:
                data.multiArray[2] = ['不限', '汤阴县', '龙安区', '林州市', '文峰区'];
                break;
              case 9:
                data.multiArray[2] = ['不限', '山阳区', '马村区', '博爱县', '修武县', '武陟县'];
                break;
              case 10:
                data.multiArray[2] = ['不限', '建安县', '长葛市', '魏都区', '鄢陵县'];
                break;
              case 11:
                data.multiArray[2] = ['不限', '汝南县', '驿城区', '遂平县', '新蔡县', '泌阳县'];
                break;
              case 12:
                data.multiArray[2] = ['不限', '虞城县', '梁园区', '遂平县', '宁陵县', '睢县', '睢阳区'];
                break;
              case 13:
                data.multiArray[2] = ['不限', '川汇区', '商水县', '太康县'];
                break;
              case 14:
                data.multiArray[2] = ['不限', '龙亭区', '金明区', '鼓楼区', '禹王台区', '顺河区', '祥符区', '兰考县', '通许县', '杞县', '尉氏县'];
                break;
              case 15:
                data.multiArray[2] = ['不限', '汝阳县', '瀍河区', '宜阳县', '孟津县', '吉利区', '西工区'];
                break;
              case 16:
                data.multiArray[2] = ['不限', '红旗区', '卫辉市', '平原新区', '原阳县', '卫滨区'];
                break;
              case 17:
                data.multiArray[2] = ['不限', '新华区', '湛河区', '汝州区', '卫东区'];
                break;

            }
            break;
          case 10:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '丰台区', '大兴区', '密云区', '延庆区', '朝阳区', '石景山区', '海淀区', '门头沟区', '房山区', '昌平区', '怀柔区', '平谷区', '东城区', '西城区', '武清区', '顺义区', '通州区'];
                break;

            }
            break;
          case 11:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '万州区', '长寿区', '永川区', '黔江区', '渝北区', '江北区', '巴南区', '九龙坡区', '沙坪坝区', '合川区', '南岸区', '大渡口区', '江津区', '璧山区', '南川区', '武隆区', '乌溪县', '忠县', '丰都县', '梁平区', '渝中区', '北碚区', '綦江区'];
                break;

            }
            break;
          case 12:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '洮北区'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '宽城区', '二道区', '绿园区', '北湖新区'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '昌邑区', '船营区', '丰满区'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '梅河口市'];
                break;
              case 5:
                data.multiArray[2] = ['不限', '铁东区'];
                break;
            }
            break;
          case 13:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '滨海新区', '宁河区', '和平区', '河西区', '河北区', '河东区', '南开区', '红桥区', '东丽区', '津南区', '北辰区', '武清区', '静海区', '蓟州县', '宝坻区', '西青区'];
                break;

            }
            break;
          case 14:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '金凤区', '兴庆区', '贺兰县'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '沙坡头区'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '利通区'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '大武口区'];
                break;
            }
            break;
          case 15:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '临桂区', '荔浦县', '永福县', '平乐县', '香山区', '叠彩区', '秀峰区', '兴安县', '七星区', '灵川县'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '玉州区'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '港北区'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '金城江区'];
                break;
              case 5:
                data.multiArray[2] = ['不限', '八步区', '钟山县'];
                break;
              case 6:
                data.multiArray[2] = ['不限', '蒙山县', '龙圩区'];
                break;
              case 7:
                data.multiArray[2] = ['不限', '港口区', '防城区', '上思县', '东兴市'];
                break;
              case 8:
                data.multiArray[2] = ['不限', '钦南区', '钦北区', '灵山县', '浦北县'];
                break;
              case 9:
                data.multiArray[2] = ['不限', '迎龙区'];
                break;
              case 10:
                data.multiArray[2] = ['不限', '柳城县', '鹿寨县', '柳东新区', '融水县', '鱼峰区', '城中区'];
                break;
              case 11:
                data.multiArray[2] = ['不限', '合浦区', '银海区', '海城区'];
                break;
              case 12:
                data.multiArray[2] = ['不限', '西乡塘区', '武鸣区', '邕宁区', '良庆区', '兴宁区', '江南区', '宾阳县', '青秀区'];
                break;

            }
            break;
          case 16:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '城西区', '开福区', '雨花区', '岳麓区', '天心区', '芙蓉区', '长沙县', '宁乡县', '浏阳市', '望城区'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '东安县', '道县', '江华县', '冷水滩区'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '双清区', '武冈市', '邵东县', '北塔区', '大祥区'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '鹤城区', '溆浦县'];
                break;
              case 5:
                data.multiArray[2] = ['不限', '吉首市'];
                break;
              case 6:
                data.multiArray[2] = ['不限', '北湖区', '临武县', '宜章县', '永兴县', '石峰区', '苏仙区', '桂阳县'];
                break;
              case 7:
                data.multiArray[2] = ['不限', '天元区', '炎陵县', '石峰区', '芦淞区', '荷塘区', '云龙区', '攸县', '醴陵市', '渌口区'];
                break;
              case 8:
                data.multiArray[2] = ['不限', '珠晖区', '祁东县', '石鼓区', '雁峰区', '常宁市', '耒阳市'];
                break;
              case 9:
                data.multiArray[2] = ['不限', '湘阴县', '岳阳县', '岳阳楼区'];
                break;
              case 10:
                data.multiArray[2] = ['不限', '汉寿县', '桃源县', '武陵区', '安乡县', '鼎城区', '临澧县'];
                break;
              case 11:
                data.multiArray[2] = ['不限', '韶山市', '雨湖区', '湘潭市', '岳塘区', '湘乡市'];
                break;

            }
            break;
          case 17:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '嘉鱼县', '洪山区', '硚口区', '黄陂区', '汉口区', '江汉区', '东湖高新', '武昌区', '汉南区', '汉阳区', '蔡甸区', '新洲区', '东西湖区', '江岸区', '江夏区', '青山区'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '恩施市'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '掇刀区'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '新城区'];
                break;
              case 5:
                data.multiArray[2] = ['不限', '茅箭区', '丹江口市'];
                break;
              case 6:
                data.multiArray[2] = ['不限', '沙洋县', '荆州区', '沙市区', '石首市', '公安县', '松滋市'];
                break;
              case 7:
                data.multiArray[2] = ['不限', '华容区', '鄂城区', '梁子湖区'];
                break;
              case 8:
                data.multiArray[2] = ['不限', '樊城区', '宜城市', '襄州区', '襄城区', '高新区'];
                break;
              case 9:
                data.multiArray[2] = ['不限', '黄石港区', '团城山区', '大冶市', '西塞山区'];
                break;
              case 10:
                data.multiArray[2] = ['不限', '麻城市', '黄梅县', '黄州区', '团风县', '浠水县'];
                break;
              case 11:
                data.multiArray[2] = ['不限', '夷陵区', '伍家岗区', '长阳县', '秭归县'];
                break;
              case 12:
                data.multiArray[2] = ['不限', '曾都区', '广水市'];
                break;
              case 13:
                data.multiArray[2] = ['不限', '应城市', '汉川市', '孝南区', '南大区', '孝昌县'];
                break;
              case 14:
                data.multiArray[2] = ['不限', '多宝镇'];
                break;
              case 15:
                data.multiArray[2] = ['不限', '咸安区', '温泉区'];
                break;

            }
            break;
          case 18:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '霸州市', '广阳区', '安次区', '香河县', '三河市', '永清县', '固安县', '文安县'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '桥西区', '桥东区', '开发区'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '桥西区', '桥东区', '开发区'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '渤海新区', '运河区', '青县'];
                break;
              case 5:
                data.multiArray[2] = ['不限', '涿州市', '易县', '涞水县', '雄县', '竞秀区', '清苑区'];
                break;
              case 6:
                data.multiArray[2] = ['不限', '北戴河区', '海港区', '山海关区'];
                break;
              case 7:
                data.multiArray[2] = ['不限', '路南区', '路北区', '古冶区', '开平区', '丰南区', '丰润区', '曹妃甸区', '玉田县', '遵化市'];
                break;
              case 8:
                data.multiArray[2] = ['不限', '滦平县', '宽城县', '兴隆县', '双滦区'];
                break;
              case 9:
                data.multiArray[2] = ['不限', '怀来县', '桥东区', '下花园区', '蔚县', '桥西区'];
                break;
              case 10:
                data.multiArray[2] = ['不限', '桥西区', '平山县', '新华区', '长安区', '藁城区', '辛集市', '鹿泉区'];
                break;
              case 11:
                data.multiArray[2] = ['不限', '武安市', '丛台区', '邯山区'];
                break;
              case 12:
                data.multiArray[2] = ['不限', '饶阳县', '河西区', '桃城区', '枣强县'];
                break;


            }
            break;
          case 19:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '呈贡区', '盘龙区', '五华区', '官渡区', '晋宁县', '富民县', '嵩明县', '宜良县', '玉龙县', '安宁市', '石林彝族自治县', '西山区'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '瑞丽市'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '澄江县'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '隆阳区', '腾冲市', '施甸县', '龙陵县', '昌宁县'];
                break;
              case 5:
                data.multiArray[2] = ['不限', '下关镇', '洱源县'];
                break;
              case 6:
                data.multiArray[2] = ['不限', '景洪市'];
                break;
              case 7:
                data.multiArray[2] = ['不限', '沾益区', '麒麟区'];
                break;

            }
            break;
          case 20:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '振兴区'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '老边区'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '文圣区'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '顺城区'];
                break;
              case 5:
                data.multiArray[2] = ['不限', '银川区'];
                break;
              case 6:
                data.multiArray[2] = ['不限', '铁西区', '铁东区'];
                break;
              case 7:
                data.multiArray[2] = ['不限', '滨海新区'];
                break;
              case 8:
                data.multiArray[2] = ['不限', '金川新区', '开发区', '中山区', '旅顺口区', '沙河口区', '甘井子区'];
                break;
              case 9:
                data.multiArray[2] = ['不限', '于洪区', '和平区', '大东区', '沈抚新区', '苏家屯区', '沈北新区', '浑南区', '皇姑屯区', '铁西区'];
                break;
              case 10:
                data.multiArray[2] = ['不限', '绥中县', '龙港区'];
                break;

            }
            break;
          case 21:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '美兰区', '秀英区', '琼山区', '龙华区', '澄迈县', '临高县'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '昌化镇'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '定安县'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '清澜镇', '龙楼镇', '昌洒镇', '文城镇'];
                break;
              case 5:
                data.multiArray[2] = ['不限', '板桥镇', '八所镇'];
                break;
              case 6:
                data.multiArray[2] = ['不限', '板桥镇', '八所镇'];
                break;
              case 7:
                data.multiArray[2] = ['不限', '九所镇', '抱由镇', '尖峰镇', '利国镇'];
                break;
              case 8:
                data.multiArray[2] = ['不限', '英州镇', '新村镇', '椰林镇'];
                break;
              case 9:
                data.multiArray[2] = ['不限', '博鳌', '嘉积镇'];
                break;
              case 10:
                data.multiArray[2] = ['不限', '礼纪镇', '兴隆镇', '万城镇', '东澳镇'];
                break;
              case 11:
                data.multiArray[2] = ['不限', '屯城镇'];
                break;
              case 12:
                data.multiArray[2] = ['不限', '南圣'];
                break;
              case 13:
                data.multiArray[2] = ['不限', '合庆镇', '洋浦经开区', '滨海新区', '那大镇', '白马井', '城北新区'];
                break;
              case 14:
                data.multiArray[2] = ['不限', '吉阳区', '崖州区', '天涯区', '海堂区'];
                break;

            }
            break;
          case 22:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '东坡区', '简阳市', '金堂县', '大邑县', '锦江区', '彭州市', '温江区', '崇州市', '青羊区', '天府新区', '青白江区', '都江堰区', '新都区', '龙泉驿区', '双流区', '武侯区', '高新区', '新津县', '金牛区', '成华区', '郫都区', '邛崃市'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '峨眉山市'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '雨城区'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '西昌市'];
                break;
              case 5:
                data.multiArray[2] = ['不限', '东坡区'];
                break;
              case 6:
                data.multiArray[2] = ['不限', '资中县', '威远县'];
                break;
              case 7:
                data.multiArray[2] = ['不限', '经开区', '江油市', '三台县', '涪城区'];
                break;
              case 8:
                data.multiArray[2] = ['不限', '东区'];
                break;
              case 9:
                data.multiArray[2] = ['不限', '江阳区', '泸县', '龙马潭区'];
                break;
              case 10:
                data.multiArray[2] = ['不限', '雁江区'];
                break;
              case 11:
                data.multiArray[2] = ['不限', '贡井区'];
                break;
              case 12:
                data.multiArray[2] = ['不限', '广汉区', '绵竹市', '什邡市'];
                break;
              case 13:
                data.multiArray[2] = ['不限', '通州区'];
                break;
              case 14:
                data.multiArray[2] = ['不限', '南部县', '嘉陵区', '西充县', '高坪区', '顺庆区', '阆中市'];
                break;
              case 15:
                data.multiArray[2] = ['不限', '船山区'];
                break;
              case 16:
                data.multiArray[2] = ['不限', '广安区', '武胜县', '前锋区', '华蓥'];
                break;

            }
            break;
          case 23:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '沙依巴克区', '米东区', '天山区', '新市区', '水磨沟区', '乌鲁木齐县', '东山区'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '五家渠'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '伊宁市'];
                break;

            }
            break;
          case 24:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '龙口市', '蓬莱市', '福山区', '海阳市', '莱山区', '莱州市', '牟平区', '招远市', '莱阳市', '芝罘区'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '高新区'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '齐河县', '陵城区', '庆云县', '乐陵市', '武城县', '禹城市', '临邑县'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '荣成市', '环翠区', '文登区'];
                break;
              case 5:
                data.multiArray[2] = ['不限', '市北区', '平度市', '高新区', '市南区', '李沧区', '城阳区', '即墨区', '胶州市', '黄岛区'];
                break;
              case 6:
                data.multiArray[2] = ['不限', '河东区', '兰山区', '罗庄区', '北城新区'];
                break;
              case 7:
                data.multiArray[2] = ['不限', '张店区', '临淄区', '经开区', '高青县', '周村区', '桓台县'];
                break;
              case 8:
                data.multiArray[2] = ['不限', '滕州市', '薛城区', '市中区'];
                break;
              case 9:
                data.multiArray[2] = ['不限', '开发区', '牡丹区', '单县', '成武县'];
                break;
              case 10:
                data.multiArray[2] = ['不限', '滨城区'];
                break;
              case 11:
                data.multiArray[2] = ['不限', '东营区', '广饶县', '利津县'];
                break;
              case 12:
                data.multiArray[2] = ['不限', '安丘市', '诸城市', '潍城区', '寿光市', '坊子区', '奎文区', '寒亭区', '青州市'];
                break;
              case 13:
                data.multiArray[2] = ['不限', '岱岳区', '泰山区', '新泰市', '东平县', '宁阳县'];
                break;
              case 14:
                data.multiArray[2] = ['不限', '东港区', '岚山区', '莒县', '五莲县'];
                break;
              case 15:
                data.multiArray[2] = ['不限', '东昌府区', '高唐县', '临清市'];
                break;
              case 16:
                data.multiArray[2] = ['不限', '太白湖区', '嘉祥县', '任城区', '邹城市', '金乡县', '兖州区', '曲埠市'];
                break;
              case 17:
                data.multiArray[2] = ['不限', '历下区', '天桥区', '槐荫区', '高新东区', '长清区', '市中区', '章丘区', '历城区', '平阴县', '商河县'];
                break;

            }
            break;
          case 25:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '西安市', '江南开发区', '爱民区'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '龙沙区'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '龙凤区', '高新区'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '香坊区', '道里区', '南岗区', '道外区', '阿城区', '松北区', '平房区'];
                break;

            }
            break;
          case 26:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '城北区'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '凉州区'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '贺兰县', '金凤区', '兴庆区'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '滨河新区'];
                break;
              case 5:
                data.multiArray[2] = ['不限', '沙坡头区'];
                break;
              case 6:
                data.multiArray[2] = ['不限', '秦州区'];
                break;
              case 7:
                data.multiArray[2] = ['不限', '七里河区', '红古区', '安宁区', '榆中县', '城关区', '兰州新区'];
                break;
              case 8:
                data.multiArray[2] = ['不限', '肃州区'];
                break;
              case 9:
                data.multiArray[2] = ['不限', '白银区'];
                break;
              case 10:
                data.multiArray[2] = ['不限', '安定新城'];
                break;

            }
            break;
          case 27:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '桐梓县', '绥阳县', '赤水市', '红花岗区', '余庆县', '务川县'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '中山区'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '都匀市'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '兴义市'];
                break;
              case 5:
                data.multiArray[2] = ['不限', '观山湖区', '乌当区', '白云区', '龙里县', '南明区', '花溪区', '清镇市', '云岩区'];
                break;
              case 6:
                data.multiArray[2] = ['不限', '七星关区'];
                break;

            }
            break;
          case 28:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '尖草坪区', '晋源区', '万柏林区', '小店区', '杏花岭区', '迎泽区'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '孝义市'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '榆次区'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '尧都区'];
                break;
              case 5:
                data.multiArray[2] = ['不限', '忻府区'];
                break;
              case 6:
                data.multiArray[2] = ['不限', '郊区'];
                break;
              case 7:
                data.multiArray[2] = ['不限', '盐湖区'];
                break;
              case 8:
                data.multiArray[2] = ['不限', '云洲区', '平城区'];
                break;

            }
            break;
          case 29:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '城中区', '城北区'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '平安区'];
                break;

            }
            break;
          case 30:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '九原区', '昆都仑区', '东河区'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '集宁区', '察哈尔右翼前旗'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '红山区', '松山区'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '科尔沁区'];
                break;
              case 5:
                data.multiArray[2] = ['不限', '新城区', '回民区', '玉泉区'];
                break;

            }
            break;
          case 31:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['不限'];
                break;
              case 1:
                data.multiArray[2] = ['不限', '伯明翰', '斯劳', '利物浦'];
                break;
              case 2:
                data.multiArray[2] = ['不限', '伊斯坦布尔'];
                break;
              case 3:
                data.multiArray[2] = ['不限', '万象市'];
                break;
              case 4:
                data.multiArray[2] = ['不限', '胡志明市'];
                break;
              case 5:
                data.multiArray[2] = ['不限', '仰光市'];
                break;
              case 6:
                data.multiArray[2] = ['不限', '水户市', '东京市'];
                break;
              case 7:
                data.multiArray[2] = ['不限', '柔佛州', '吉隆坡'];
                break;
              case 8:
                data.multiArray[2] = ['不限', '金边', '西港'];
                break;
              case 9:
                data.multiArray[2] = ['不限', '纽约', '旧金山', '弗罗里达', '北港', '奥兰多'];
                break;
              case 10:
                data.multiArray[2] = ['不限', '曼谷', '华欣', '普吉岛', '芭提雅'];
                break;
              case 11:
                data.multiArray[2] = ['不限', '奥克兰'];
                break;
              case 12:
                data.multiArray[2] = ['不限', '马尼拉'];
                break;

            }
            break;


        }
        data.multiIndex[2] = 0;
        break;
    }
    this.setData(data);

  },
  MultiChange(e) {
    wx.clearStorage('haiwai');
    let haiwai = 1;
    // this.setData(haiwai);
    this.setData({
      haiwai: haiwai,
      multiIndex: e.detail.value,

    })
  },
},

  pageLifetimes: {
    show() {
      let that = this
      // 在组件实例刚刚被创建时执行
      //console.log(1)
      wx.request({
        url: 'https://www.dikashi.top/house/building/listBuilding',
        data:{
          userId: 'f'
        },
        success(res) {
          console.log(1)
          console.log(res)
          if (res.data.status == 200) {
            that.setData({
              list: res.data.data
            })
          }
          //console.log(that.list)
        }
      })
    },
    
  },
  
 




})

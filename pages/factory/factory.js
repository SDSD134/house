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
    region: ['全国', '全国'],
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
    ],
    list1: [
      {
        imgArr: '../../image/27.jpg',
        title: '嘉兴有限科技公司',
        score: '9.7',
        number: '8',
        person: '1111',

      }
    ],
    list2: [
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
    ],
    list3: [
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
    ],
    multiArray: [
      ['全国', '上海', '浙江', '江苏', '安徽', '陕西', '江西', '广东', '福建', '河南', '北京', '重庆', '吉林', '天津', '宁夏', '广西', '湖南', '湖北', '河北', '云南', '辽宁', '海南', '四川', '新疆', '山东', '黑龙江', '甘肃', '贵州', '山西', '青海', '内蒙古'],
      ['全国']
    ],
    multiIndex: [0, 0],

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
  },
    // 地区选择
    MultiChange(e) {
      this.setData({
        multiIndex: e.detail.value,
      })
    },

    MultiColumnChange(e) {
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
              break;
            case 1:
              data.multiArray[1] = ['不限', '上海'];
              break;
            case 2:
              data.multiArray[1] = ['不限', '嘉兴市', '杭州市', '湖州市', '金华市', '宁波市', '绍兴市', '舟山市', '台州市', '衢州市', '温州市', '丽水市'];
              break;
            case 3:
              data.multiArray[1] = ['不限', '昆山市', '南通市', '无锡市', '苏州市', '南京市', '常州市', '泰州市', '扬州市', '淮安市', '徐州市', '镇江市', '盐城市', '宿迁市', '连云港市'];
              break;
            case 4:
              data.multiArray[1] = ['不限', '合肥市', '宿州市', '铜陵市', '巢湖市', '蚌埠市', '阜阳市', '六安市', '黄山市', '安庆市', '池州市', '滁州市', '芜湖市', '马鞍山', '毫州市', '淮北市', '宣城市', '淮南市'];
              break;
            case 5:
              data.multiArray[1] = ['不限', '西安市', '宝鸡市', '安康市', '渭南市', '铜川市', '汉中市', '咸阳市'];
              break;
            case 6:
              data.multiArray[1] = ['不限', '南昌市', '景德镇', '萍乡市', '赣州市', '抚州市', '吉安市', '宜春市', '鹰潭市', '九江市', '上饶市'];
              break;
            case 7:
              data.multiArray[1] = ['不限', '惠州市', '揭阳市', '云浮市', '梧州市', '梅州市', '潮州市', '韶关市', '江门市', '汕尾市', '湛江市', '阳江市', '佛山市', '肇庆市', '汕头市', '茂名市', '东莞市', '河源市', '清远市', '中山市', '深圳市', '珠海市', '广州市'];
              break;
            case 8:
              data.multiArray[1] = ['不限', '泉州市', '三明市', '宁德市', '龙岩市', '南平市', '莆田市', '福州市', '漳州市', '厦门市'];
              break;
            case 9:
              data.multiArray[1] = ['不限', '郑州市', '漯河市', '鹤壁市', '南阳市', '濮阳市', '三门峡', '信阳市', '安阳市', '焦作市', '许昌市', '驻马店', '商丘市', '周口市', '开封市', '洛阳市', '新乡市', '河源市', '平顶山'];
              break;
            case 10:
              data.multiArray[1] = ['不限', '北京'];
              break;
            case 11:
              data.multiArray[1] = ['不限', '重庆'];
              break;
            case 12:
              data.multiArray[1] = ['不限', '白城市', '长春市', '吉林市', '通化市', '四平市'];
              break;
            case 13:
              data.multiArray[1] = ['不限', '天津'];
              break;
            case 14:
              data.multiArray[1] = ['不限', '银川市', '中卫市', '吴忠市', '石嘴山'];
              break;
            case 15:
              data.multiArray[1] = ['不限', '桂林市', '玉林市', '贵港市', '河池市', '贺州市', '梧州峡', '防城港', '钦州市', '百色市', '柳州市', '北海市', '南宁市'];
              break;
            case 16:
              data.multiArray[1] = ['不限', '长沙市', '永州市', '昭阳市', '怀化市', '湘西州', '郴州市', '株洲市', '衡阳市', '岳阳市', '常德市', '湘潭市'];
              break;
            case 17:
              data.multiArray[1] = ['不限', '武汉市', '恩施州', '荆门市', '潜江市', '十堰市', '荆州市', '鄂州市', '襄阳市', '黄石市', '黄冈市', '宜昌市', '随州市', '孝感市', '天门市', '咸宁市'];
              break;
            case 18:
              data.multiArray[1] = ['不限', '廊坊市', '邢台市', '雄安新区', '沧州市', '保定市', '秦皇岛', '唐山市', '承德市', '张家口', '石家庄', '邯郸市', '衡水市'];
              break;
            case 19:
              data.multiArray[1] = ['不限', '昆明市', '德宏州', '玉溪市', '保山市', '大理市', '西双版纳', '曲靖市'];
              break;
            case 20:
              data.multiArray[1] = ['不限', '丹东市', '营口市', '辽阳市', '抚顺市', '铁岭市', '鞍山市', '锦州市', '大连市', '沈阳市', '葫芦岛'];
              break;
            case 21:
              data.multiArray[1] = ['不限', '海口市', '昌江县', '定安市', '文昌市', '东方市', '保亭县', '乐东县', '陵水县', '琼海市', '万宁市', '屯昌县', '五指山市', '儋州市', '三亚市'];
              break;
            case 22:
              data.multiArray[1] = ['不限', '成都市', '乐山市', '雅安市', '凉山州', '眉山市', '内江市', '锦阳市', '攀枝花', '泸州市', '资阳市', '自贡市', '德阳市', '达州市', '南充市', '遂宁市', '广安市'];
              break;
            case 23:
              data.multiArray[1] = ['不限', '乌鲁木齐', '五家渠', '伊犁哈萨克'];
              break;
            case 24:
              data.multiArray[1] = ['不限', '烟台市', '莱芜市', '德州市', '威海市', '青岛市', '临沂市', '淄博市', '枣庄市', '菏泽市', '滨州市', '东营市', '潍坊市', '泰安市', '日照市', '聊城市', '济宁市', '济南市'];
              break;
            case 25:
              data.multiArray[1] = ['不限', '牡丹江市', '齐齐哈尔市', '大庆市', '哈尔滨市'];
              break;
            case 26:
              data.multiArray[1] = ['不限', '西宁市', '武威市', '银川市', '张掖市', '中卫市', '天水市', '兰州市', '酒泉市', '白银市', '定西市'];
              break;
            case 27:
              data.multiArray[1] = ['不限', '遵义市', '盘水市', '黔南州', '黔西南州', '贵阳市', '毕节市'];
              break;
            case 28:
              data.multiArray[1] = ['不限', '太原市', '吕梁市', '晋中市', '临汾市', '忻州市', '阳泉市', '运城市', '大同市'];
              break;
            case 29:
              data.multiArray[1] = ['不限', '西宁市', '海东市'];
              break;
            case 30:
              data.multiArray[1] = ['不限', '包头市', '乌兰察布', '赤峰市', '通辽市', '呼和浩特'];
              break;
          }
          data.multiIndex[1] = 0;
          break;

      }
      this.setData(data);
    },
  }
 
})

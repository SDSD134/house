//index.js
var WxSearch = require('../../wxSearchView/wxSearchView.js');

Page({
  data: {},

  // 搜索栏
  onLoad: function () {
    var that = this;
    WxSearch.init(
      that,  // 本页面一个引用
      ['宁郭府', '白鹤郡', "新里城", "大悦府", '西香颂'], // 热点搜索推荐，[]表示不使用
      ['宁郭府', '白鹤郡', '新里城', "大悦府"],// 搜索匹配，[]表示不使用
      that.mySearchFunction, // 提供一个搜索回调函数
      that.myGobackFunction //提供一个返回回调函数
    );
  },

  // 转发函数,固定部分
  wxSearchInput: WxSearch.wxSearchInput,  // 输入变化时的操作
  wxSearchKeyTap: WxSearch.wxSearchKeyTap,  // 点击提示或者关键字、历史记录时的操作
  wxSearchDeleteAll: WxSearch.wxSearchDeleteAll, // 删除所有的历史记录
  wxSearchConfirm: WxSearch.wxSearchConfirm,  // 搜索函数
  wxSearchClear: WxSearch.wxSearchClear,  // 清空函数

  // 搜索回调函数  
  mySearchFunction: function (value) {
    // do your job here
    // 跳转
    wx.redirectTo({
      url: '../index/index?searchValue=' + value
    })
  },

  // 返回回调函数
  myGobackFunction: function () {
    // do your job here
    // 跳转
    wx.redirectTo({
      url: '../index/index?searchValue=返回'
    })
  }

})
var __tipKeys = [];
// 搜索回调函数 
var __searchFunction = null;
// 返回函数 
var __goBackFunction = null;
// 应用变量
var __that = null;

// 初始化函数
function init(that, hotKeys, tipKeys, searchFunction, goBackFunction) {

  __that = that;
  __tipKeys = tipKeys;
  __searchFunction = searchFunction;
  __goBackFunction = goBackFunction;

  var temData = {};
  var barHeight = 43;
  var view = {
    barHeight: barHeight
  }
  temData.hotKeys = hotKeys;

  wx.getSystemInfo({
    success: function (res) {
      var wHeight = res.windowHeight;
      view.seachHeight = wHeight - barHeight;
      temData.view = view;
      __that.setData({
        wxSearchData: temData
      });
    }
  });

  getHisKeys(__that);
}

// 搜索框输入时候操作
function wxSearchInput(e) {
  var inputValue = e.detail.value;
  // 页面数据
  var temData = __that.data.wxSearchData;
  // 寻找提示值 
  var tipKeys = [];
  if (inputValue && inputValue.length > 0) {
    for (var i = 0; i < __tipKeys.length; i++) {
      var mindKey = __tipKeys[i];
      // 包含字符串
      if (mindKey.indexOf(inputValue) != -1) {
        tipKeys.push(mindKey);
      }
    }
  }
  // 更新数据
  temData.value = inputValue;
  temData.tipKeys = tipKeys;
  // 更新视图
  __that.setData({
    wxSearchData: temData
  });
}

// 清空输入
function wxSearchClear() {
  // 页面数据
  var temData = __that.data.wxSearchData;
  // 更新数据
  temData.value = "";
  temData.tipKeys = [];
  // 更新视图
  __that.setData({
    wxSearchData: temData
  });
}

// 点击提示或者关键字、历史记录时的操作
function wxSearchKeyTap(e) {
  search(e.target.dataset.key);
}

// 确任或者回车
function wxSearchConfirm(e) {
  var key = e.target.dataset.key;
  if(key=='back'){
    __goBackFunction();
  }else{
    search(__that.data.wxSearchData.value);
  }
}

function search(inputValue) {
  if (inputValue && inputValue.length > 0) {
    // 添加历史记录
    wxSearchAddHisKey(inputValue);
    // 更新
    var temData = __that.data.wxSearchData;
    temData.value = inputValue;
    __that.setData({
      wxSearchData: temData
    });
    // 回调搜索
    __searchFunction(inputValue);
  }
}

// 读取缓存
function getHisKeys() {
  var value = [];
  try {
    value = wx.getStorageSync('wxSearchHisKeys')
    if (value) {
      // Do something with return value
      var temData = __that.data.wxSearchData;
      temData.his = value;
      __that.setData({
        wxSearchData: temData
      });
    }
  } catch (e) {
    // Do something when catch error
  }
}

// 添加缓存
function wxSearchAddHisKey(inputValue) {
  if (!inputValue || inputValue.length == 0) {
    return;
  }
  var value = wx.getStorageSync('wxSearchHisKeys');
  if (value) {
    if (value.indexOf(inputValue) < 0) {
      value.unshift(inputValue);
    }
    wx.setStorage({
      key: "wxSearchHisKeys",
      data: value,
      success: function () {
        getHisKeys(__that);
      }
    })
  } else {
    value = [];
    value.push(inputValue);
    wx.setStorage({
      key: "wxSearchHisKeys",
      data: value,
      success: function () {
        getHisKeys(__that);
      }
    })
  }
}

// 删除缓存
function wxSearchDeleteAll() {
  wx.removeStorage({
    key: 'wxSearchHisKeys',
    success: function (res) {
      var value = [];
      var temData = __that.data.wxSearchData;
      temData.his = value;
      __that.setData({
        wxSearchData: temData
      });
    }
  })
}

// 导出接口
module.exports = {
  init: init, //初始化函数
  wxSearchInput: wxSearchInput,// 输入变化时的操作
  wxSearchKeyTap: wxSearchKeyTap, // 点击提示或者关键字、历史记录时的操作
  wxSearchDeleteAll: wxSearchDeleteAll, // 删除所有的历史记录
  wxSearchConfirm: wxSearchConfirm, // 搜索函数
  wxSearchClear: wxSearchClear,  // 清空函数
}
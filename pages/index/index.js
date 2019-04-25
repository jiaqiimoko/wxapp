//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    iconList1: [
      { "iconName": "activity", "name": "美食","color":""},
      { "iconName": "brush", "name": "超市便利", "color": ""},
      { "iconName": "computer", "name": "水果", "color": "" },
      { "iconName": "collection", "name": "专送", "color": "" },
      { "iconName": "emoji", "name": "甜点饮品", "color": "" },
      { "iconName": "integral", "name": "优选", "color": "" },
      { "iconName": "homepage", "name": "家常菜", "color": "" },
      { "iconName": "picture", "name": "小吃馆", "color": "" },
      { "iconName": "remind", "name": "减免配送费", "color": "" },
      { "iconName": "group", "name": "品牌连锁", "color": "" }
    ],
    iconList2: [
      { "iconName": "live", "name": "日韩料理", "color": "" },
      { "iconName": "like", "name": "无辣不欢", "color": "" },
      { "iconName": "computer", "name": "浪漫鲜花", "color": "" },
      { "iconName": "collection", "name": "甜蜜蛋糕", "color": "" },
      { "iconName": "emoji", "name": "暖胃粉面", "color": "" },
      { "iconName": "praise", "name": "快餐简食", "color": "" },
      { "iconName": "homepage", "name": "炸鸡零食", "color": "" },
      { "iconName": "picture", "name": "送药上门", "color": "" },
      { "iconName": "remind", "name": "包子粥铺", "color": "" },
      { "iconName": "shop_fill", "name": "能量西餐", "color": "" }
    ],
    indicatorDots: true,
    indicatorActiveColor:'orange',
    duration: 1000,
    imageurl1: "../../img/pic1.jpg",
    daindex1: 0,
    imageurl2: "../../img/pic1.jpg",
    daindex2: 0,
    menuList:[
      {
        "shopName":"快乐柠檬","picUrl":"../../img/pic1.jpg","star":"4.8","saleMonth":"1674","distance":"3.7","time":"30","sendUp":"20","fee":"0.5","perCost":"18",
        "tage":["30减3","40减6","50减10","首单减9"]
      },
      {
        "shopName": "快乐柠檬", "picUrl": "../../img/pic1.jpg", "star": "4.8", "saleMonth": "1674", "distance": "3.7", "time": "30", "sendUp": "20", "fee": "0.5", "perCost": "18",
        "tage": ["30减3", "40减6", "50减10", "首单减9"]
      },
      {
        "shopName": "快乐柠檬", "picUrl": "../../img/pic1.jpg", "star": "4.8", "saleMonth": "1674", "distance": "3.7", "time": "30", "sendUp": "20", "fee": "0.5", "perCost": "18",
        "tage": ["30减3", "40减6", "50减10", "首单减9"]
      },
      {
        "shopName": "快乐柠檬", "picUrl": "../../img/pic1.jpg", "star": "4.8", "saleMonth": "1674", "distance": "3.7", "time": "30", "sendUp": "20", "fee": "0.5", "perCost": "18",
        "tage": ["30减3", "40减6", "50减10", "首单减9"]
      },
      {
        "shopName": "快乐柠檬", "picUrl": "../../img/pic1.jpg", "star": "4.8", "saleMonth": "1674", "distance": "3.7", "time": "30", "sendUp": "20", "fee": "0.5", "perCost": "18",
        "tage": ["30减3", "40减6", "50减10", "首单减9"]
      },
      {
        "shopName": "快乐柠檬", "picUrl": "../../img/pic1.jpg", "star": "4.8", "saleMonth": "1674", "distance": "3.7", "time": "30", "sendUp": "20", "fee": "0.5", "perCost": "18",
        "tage": ["30减3", "40减6", "50减10", "首单减9"]
      },
      {
        "shopName": "快乐柠檬", "picUrl": "../../img/pic1.jpg", "star": "4.8", "saleMonth": "1674", "distance": "3.7", "time": "30", "sendUp": "20", "fee": "0.5", "perCost": "18",
        "tage": ["30减3", "40减6", "50减10", "首单减9"]
      },
    ],
    menuFixed:false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShow: function () {
    var that = this;
    var query = wx.createSelectorQuery()//创建节点查询器 query
    query.select('.sort-btn').boundingClientRect()//这段代码的意思是选择Id= the - id的节点，获取节点位置信息的查询请求
    query.exec(function (res) {
      // console.log(res[0].top); // #affix节点的上边界坐
      that.setData({
        menuTop: res[0].top
      })
    });
  },
  // 2.监听页面滚动距离scrollTop
  onPageScroll: function (e) {
    // console.log(e.scrollTop);
    var that = this;
    // 3.当页面滚动距离scrollTop > menuTop菜单栏距离文档顶部的距离时，菜单栏固定定位
    if (e.scrollTop > that.data.menuTop) {
      that.setData({
        menuFixed: true
      })
    } else {
      that.setData({
        menuFixed: false
      })
    }
  }
})

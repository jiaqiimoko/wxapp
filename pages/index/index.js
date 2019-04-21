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
    duration: 1000
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
  }
})

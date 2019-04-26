//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'tab1',
    tab1: false,
    tab2: true,
    tab3: true,
    menuList: [
      { "name": "热销", "id": "1" }, { "name": "热销", "id": "2" }, { "name": "热销", "id": "3" }, { "name": "热销", "id": "4" }, { "name": "热销", "id": "5" }, { "name": "热销", "id": "6" },
      { "name": "热销", "id": "1" }, { "name": "热销", "id": "2" }, { "name": "热销", "id": "3" }, { "name": "热销", "id": "4" }, { "name": "热销", "id": "5" }, { "name": "热销", "id": "6" }
      ]
  },
  handleChange({ detail }) {
    console.log(detail)
    this.setData({
      current: detail.key
    });
    switch (detail.key){
      case "tab1":
        this.setData({
          tab1: false ,
          tab2: true,
          tab3: true 
        })
        break;
      case "tab2":
        this.setData({
          tab1: true,
          tab2: false,
          tab3: true
        })
        break;
      case "tab3":
        this.setData({
          tab1: true,
          tab2: true,
          tab3: false
        })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.shopname//页面标题为路由参数
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
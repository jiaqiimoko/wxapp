//获取应用实例
const app = getApp()

Page({
  data: {
    scrollTop: 0,
    current: 'tab1',
    tab1: false,
    tab2: true,
    tab3: true,
    menuList: [
      { "name": "热销", "id": "1", "cList":[
        {
          "name":"一只神奇的鸡","price":"28","number":"101","count":"0"
        },
        {
          "name": "番茄酱", "price": "5", "number": "102", "count": "0"
        },
        {
          "name": "汉堡", "price": "15", "number": "103", "count": "0"
        }
      ]}, 
      { "name": "美味主食", "id": "2", "cList":[
        {
          "name": "米饭", "price": "3", "number": "201", "count": "0"
        },
        {
          "name": "鸡腿堡", "price": "15", "number": "202", "count": "0"
        }
      ]}, 
      { "name": "休闲小吃", "id": "3", "cList":[
        {
          "name": "薯条", "price": "8", "number": "301", "count": "0"
        },
        {
          "name": "玉米杯", "price": "13", "number": "303", "count": "0"
        }
      ]}, 
      { "name": "饮料", "id": "4", "cList":[
        {
          "name": "百事可乐", "price": "5", "number": "402", "count": "0"
        },
        {
          "name": "奶茶", "price": "13", "number": "403", "count": "0"
        }
      ]}, 
      { "name": "鸡翅", "id": "5", "cList":[
        {
          "name": "原味鸡翅", "price": "15", "number": "501", "count": "0"
        },
        {
          "name": "香辣鸡翅", "price": "15", "number": "502", "count": "0"
        },
        {
          "name": "上校鸡块", "price": "15", "number": "503", "count": "0"
        }
      ]}, 
      { "name": "舒适早餐", "id": "6", "cList":[
        {
          "name": "山镇鸡肉粥", "price": "12", "number": "601", "count": "0"
        }
      ]},
      { "name": "早餐", "id": "7", "cList":[
        {
          "name": "营养热豆浆", "price": "8", "number": "701", "count": "0"
        },
        {
          "name": "黄金薯饼", "price": "15", "number": "703", "count": "0"
        }
      ]}
    ],
    toView:"3",
    carList:[],
    hideCar:true,
    total:0
  },
  // 左侧菜单点击事件
  clickScroll(event){
    var id = event.currentTarget.dataset.id;
     id = id.replace('go','to')
    console.log(id);
    this.setData({toView:id});
  },
  // 设置标题
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.shopname//页面标题为路由参数
    })
  },
  // 切换选项
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
  // 添加购物车
  addCar(event) {
    var number = event.currentTarget.dataset.number;
    var name = event.currentTarget.dataset.name;
    var price = event.currentTarget.dataset.price;
    var carList = this.data.carList;
    var total = this.data.total;
    var flag = true;
    for (var i = 0; i < carList.length; i++) {
      if (carList[i].number == number) {
        carList[i].count++;
        flag = false;
        break;
      }
    }
    var menuList = this.data.menuList;
    for (var j = 0; j < menuList.length; j++) {
      if(menuList[j].cList){
        for (var k = 0; k < menuList[j].cList.length; k++){
          if (menuList[j].cList[k].number == number) {
            total = total * 1 + menuList[j].cList[k].price * 1;
            menuList[j].cList[k].count++;
            break;
          }
        }
      }
    }
    if (flag) {
      var o = { "name": name, "price": price, "number": number, "count": "1" }
      carList.push(o);
    }
    console.log(total);
    this.setData({ carList, menuList,total})
  },
  subCar(event) {
    var number = event.currentTarget.dataset.number;
    var name = event.currentTarget.dataset.name;
    var price = event.currentTarget.dataset.price;
    var carList = this.data.carList;
    var menuList = this.data.menuList;
    var total = this.data.total;
    for (var i = 0; i < carList.length; i++) {
      if (carList[i].number == number) {
        carList[i].count--;
        break;
      }
    }
    for (var j = 0; j < menuList.length; j++) {
      if (menuList[j].cList) {
        for (var k = 0; k < menuList[j].cList.length; k++) {
          if (menuList[j].cList[k].number == number) {
            total = total * 1 - menuList[j].cList[k].price * 1;
            menuList[j].cList[k].count--;
            break;
          }
        }
      }
    }
    console.log(total);
    this.setData({ carList, menuList,total })
  },
  // 打开购物车
  showCar(){
    var flag = this.data.hideCar;
    flag = !flag;
    this.setData({hideCar:flag});
    var carList = this.data.carList;
    for (var j = 0; j < carList.length; j++) {
      console.log(carList[j])
    }
  }
})
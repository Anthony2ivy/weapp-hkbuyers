//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    current: 'homepage',
    gridItems: [{
        url: 'scan',
        imgUrl: '../../imgs/scan.png',
        title: '扫一扫'
      },
      {
        url: '/pages/add/add',
        imgUrl: '../../imgs/add.png',
        title: '新建商品'
      }, {
        url: 'input',
        imgUrl: '../../imgs/input.png',
        title: '商品入库'
      }, {
        url: 'output',
        imgUrl: '../../imgs/output.png',
        title: '商品出库'
      }, {
        url: 'goods',
        imgUrl: '../../imgs/goods.png',
        title: '商品管理'
      }, {
        url: 'order',
        imgUrl: '../../imgs/order.png',
        title: '入库记录'
      }
    ]
  },

  tapGridItem: function (event) {
    let tapItem = event.currentTarget.dataset.tapItem;
    if (typeof tapItem.callback === 'function') {
      tapItem.callback();
    }
    wx.navigateTo({url:tapItem.url});
  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },

  hideInput: function () {

    this.setData({

      inputVal: "",

      inputShowed: false

    });

  },

  clearInput: function () {

    this.setData({

      inputVal: ""

    });

  },

  inputTyping: function (e) {

    this.setData({

      inputVal: e.detail.value

    });

  },
  handleChange({
    detail
  }) {
    this.setData({
      current: detail.key
    });
  },
  onLoad: function () {

  }
})
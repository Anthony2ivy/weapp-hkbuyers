// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList:[],
    barcode:''
  },
  scanBarcode(e){
    wx.scanCode({scanType:'barCode',success: (res)=>{
      console.log(res.result);
      this.setData({
        barcode:res.result
      })
    }});
  },
  onChange(e) {
    console.log('onChange', e)
    const {
      file
    } = e.detail
    if (file.status === 'uploading') {
      let newFile = {uid:file.uid,progress:0,url:file.url};
      this.data.fileList.push(newFile);
    } else if (file.status === 'done') {
      this.setData({
        fileList:this.data.fileList.map(item => {
          if (item.uid === file.uid){
            item.progress=1;
          }
          return item;
        })
      })
    }
  },
  onBefore(e){
    console.log(e);
  },
  onSuccess(e) {
    console.log('onSuccess', e);
    const {
      file
    } = e.detail
    this.setData({fileList:this.data.fileList.map(item => {
      if(item.uid === file.uid)
      item.remoteUrl=JSON.parse(file.res.data).path;
      return item;
    })});
    console.log(this.data.fileList);
  },
  onFail(e) {
    console.log('onFail', e)

  },
  onComplete(e) {
    console.log('onComplete', e);
  },
  onProgress(e) {
    console.log('onProgress', e)
  },
  onPreview(e) {
    console.log('onPreview', e)
    const {
      file,
      fileList
    } = e.detail
    wx.previewImage({
      current: file.url,
      urls: fileList.map((n) => n.url),
    })
  },
  onRemove(e) {
    const {
      file,
      fileList
    } = e.detail
    this.setData({fileList : this.data.fileList.filter(item => item.uid != file.uid)});
    console.log(this.data.fileList);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
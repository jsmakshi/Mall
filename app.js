//app.js
App({
  onLaunch: function () {
    // 获取设备信息
    wx.getSystemInfo({
      success: (res) => {
        // console.log(res);
        this.globalData.systeminfo = res
        console.log(res)
      },
    })
    // 获得胶囊按钮位置信息
    this.globalData.headerBtnPosi = wx.getMenuButtonBoundingClientRect()
  },
  globalData: {
    userInfo: null,
    systeminfo: {}, // 系统信息
    headerBtnPosi: {} // 胶囊按钮位置信息
  }
})
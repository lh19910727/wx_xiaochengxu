//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [
      {
      "show":true,
      "text":123,
      "focus":false
    },
      {
        "show": true,
        "text": 456,
        "focus": false
      },
       {
        "show": true,
        "text": 789,
        "focus": false
      },
       {
         "show": true,
         "text": 101,
         "focus": false
       }
    ]
  },
  onLoad: function () {
    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(function (log) {
    //     return util.formatTime(new Date(log))
    //   })
    // })
  },
  handler:function(e){
    let index=e.target.id
    this.data.logs[index].show=false
    this.setData({
      logs:this.data.logs
      })
  
  },
  deletehandle:function(index){
    console.log('delete')
    this.data.logs.splice(index,1)
    this.setData({
  logs:this.data.logs
})
  },
  changehandle:function(index){
  console.log('change')
   this.data.logs[index].show=true
   this.setData({
     logs:this.data.logs
   })
  },
  valhandle:function(e){
    let index=e.target.dataset.num
    let value=e.detail.value
    this.data.logs[index].text=value
  },
  inphandle(e){
    console.log(e)
    let index = e.currentTarget.id
    console.log(index)
    if(e.target.dataset.ele=="btn1"){
      this.deletehandle(index)
    }else if(e.target.dataset.ele=="btn2"){
      this.changehandle(index)
     
    } else if (e.target.dataset.ele == "inp"){
      this.data.logs[index].focus=true
      this.setData({
        logs:this.data.logs
      })
     
    
    }
  }
})

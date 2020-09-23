import RemoteObject from './assets/js/RemoteObject'
import ViewStage from './core/ViewStage'
import WebSocket from "./assets/js/WebSocket";
import Toast from "./core/Toast";
/**
 *
 */
class View {

  constructor(config) {
    this.config = config;
  }

  init() {
    let that = this;
    let option = {
      canvas: function (callback) {
        if(that.config.debug) {
          let data = localStorage.getItem("data");
          if(!data) {
            data = JSON.stringify({background:{url:'',pattern:1,color: '#fff'},capacity:[]})
          }
          let canvas = {id:1,name:'卜米物联A楼',width:1024,height:768,data:data}
          callback.call(this, canvas)
        }else {
          let canvasId = sessionStorage.getItem("canvasId")
          if(canvasId) {
            let data = {}
            data.id = canvasId;
            RemoteObject.ajax(that.config.get, "get", data, function (msg) {
              let result = JSON.parse(msg);
              if(result.code==200) {
                callback.call(this, result.result);
              }else {
                console.log(result.message);
              }
            })
          }
        }
      },
      control: function(data,callback) {
        if(that.config.debug) {
          callback.call(this);
        }else {
          RemoteObject.ajax(that.config.control,"post",data,function(msg) {
            let result = JSON.parse(msg);
            if(result.code==200) {
              callback.call(this);
            }else if(result.code==120020) {
              Toast.alert("控制密码错误！")
            }else {
              console.log(result.message);
            }
          })
        }
      },
      deviceList(ids,callback) {
        if(that.config.debug) {
          let devices = [{id:'00653D5730048000',name:'设备A',
            points:[
              {id:'TF',name:'累积用量',value:33.22,unit:'t',time:'00:09:00'},
              {id:'SwSts',name:'开关状态',value:2,time:'00:09:00'}]}]
          callback.call(this, devices);
        }else {
          let data = {}
          data.ids = JSON.stringify(ids);
          RemoteObject.ajax(that.config.deviceList,"get",data,function(msg){
            let result = JSON.parse(msg);
            if(result.code==200) {
              callback.call(this, result.result);
            }else {
              console.log(result.message);
            }
          })
        }
      },
      socket: function(ids,callback) {
        if(that.config.debug) {
          let devices = [
            {id:'00653D5730048000',name:'设备A',
              points:[
                {id:'TF',name:'累积用量',value:344.55,unit:'℃',time:'00:09:00'},
                {id:'SwSts',name:'设备状态',value:1,time:'00:09:00'}]}]
          callback.call(this, devices);
        }else {
          let canvasId = sessionStorage.getItem("canvasId")
          let deviceIdList = Array.from(ids);
          if(deviceIdList.length>0) {
            let params = "canvasId="+canvasId+"&"+option.getParams(deviceIdList,"deviceIdList")
            RemoteObject.ajax(that.config.push,"get",params,function(result){
              console.log(result);
            })
          }
          console.log("...:"+that.config.websocketUrl);
          let url = that.config.websocketUrl;
          let theme = "/user/queue/canvas/"+canvasId;
          let webSocket = new WebSocket();
          webSocket.connect(url,theme,function(result) {
            let dataList = option.analysis(result);
            callback.call(this, dataList);
          })
        }
      },
      getParams(deviceIdList,name) {
        let params = "";
        deviceIdList.forEach(function(id,index) {
          params+=""+name+"="+id;
          if(index<deviceIdList.length-1) {
            params+="&";
          }
        })
        return params;
      },
      analysis(deviceList) {
        let dataList = [];
        deviceList.forEach(function(item) {
          let data = {};
          data.id = item.deviceId;
          let pointList = item.configurDevicePointVoList;
          if(pointList.length>0){
            let points = []
            pointList.forEach(function(value) {
              let point = {}
              point.id = value.point;
              point.value = value.value;
              point.unit = value.unit;
              point.name = value.descr;
              points.push(point);
            })
            data.points = points;
          }
          dataList.push(data)
        })
        return dataList;
      },
      getDevice(id,callback) {
        if(that.config.debug) {
          let device = {id:'00653D5730048000',name:'设备A',
            points:[
              {id:'TF',name:'累积用量',value:33.22,unit:'t',type: 1,},
              {id:'SwSts',name:'开关状态',value:1,type: 2,
                optionValList:[
                  {id:'',value:0,descr:'关'},
                  {id:'',value:1,descr:'开'}
                ]
              }]}
          callback.call(this, device);
        }else {
          let data = {}
          data.deviceId = id;
          RemoteObject.ajax(that.config.getDevice,"get",data,function(msg){
            let result = JSON.parse(msg);
            if(result.code==200) {
              callback.call(this, result.result);
            }else {
              console.log(result.message);
            }
          })
        }
      },
      devicePointHstData(deviceId,point,startTime,endTime,callback) {
        if(that.config.debug) {
          let dataList = [
            {value:10,time:'00:01:00'},{value:2,time:'00:02:00'},{value:5,time:'00:03:00'},{value:2,time:'00:04:00'},
            {value:2,time:'00:05:00'},{value:2,time:'00:06:00'},{value:3,time:'00:07:00'},{value:2,time:'00:08:00'}]
          let device = {id:1,name:'设备A',dataList: dataList}
          callback.call(this, device);
        }else {
          let data = {}
          data.deviceId = deviceId;
          data.point = point;
          data.startTime = startTime;
          data.endTime = endTime;
          RemoteObject.ajax(that.config.devicePointHstData,"get",data,function(msg){
            let result = JSON.parse(msg);
            if(result.code==200) {
              callback.call(this, result.result);
            }else {
              console.log(result.message);
            }
          })
        }
      },
      token(deviceId,callback) {
        if(that.config.debug) {
          let token = {};
          token.name = "摄像头";
          token.serial = "D73596223";
          token.accessToken = "ra.84ayi12s45ouca6ga4ix7te37g4a8uq6-2vd2p6jjry-1m3i7aw-vwj1f92mt";
          callback.call(this, token);
        }else {
          let data = {}
          data.deviceId = deviceId;
          RemoteObject.ajax(that.config.token,"get",data,function(msg){
            let result = JSON.parse(msg);
            if(result.code==200) {
              callback.call(this, result.result);
            }else {
              console.log(result.message);
            }
          })
        }
      },
      start(deviceId,value,callback) {
        if(that.config.debug) {
          let data = {}
          callback.call(this, data);
        }else {
          let data = {}
          data.deviceId = deviceId;
          data.direction = value;
          RemoteObject.ajax(that.config.start,"post",data,function(msg){
            let result = JSON.parse(msg);
            if(result.code==200) {
              callback.call(this, result.result);
            }else {
              console.log(result.message);
            }
          })
        }
      },
      stop(deviceId,value,callback) {
        if(that.config.debug) {
          let data = {}
          callback.call(this, data);
        }else {
          let data = {}
          data.deviceId = deviceId;
          data.direction = value;
          RemoteObject.ajax(that.config.stop,"post",data,function(msg){
            let result = JSON.parse(msg);
            if(result.code==200) {
              callback.call(this, result.result);
            }else {
              console.log(result.message);
            }
          })
        }
      }
    }

    let stage = new ViewStage(option,this.config.imgHost);

    $(window).resize(function() {
      stage.location();//页面改变时调整舞台位置
    })

    $('#root').css({'background-color': '#fff','overflow': 'hidden'});
  }

  template() {
    return `<div id="root"></div>
             <div class="bm-view-panel"></div>
             <div style="display: none" class="bm-toast bm-toast--text bm-toast--top">
               <span class="bm-toast__text"></span>
             </div>
             <div id="temp_value" style="display: none;"></div>`;
  }
}

export default View;

import RemoteObject from '@/assets/js/RemoteObject'
import ViewStage from '@/core/ViewStage'
import WebSocket from "@/assets/js/WebSocket";
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
            RemoteObject.ajax(that.config.get, "get", data, function (result) {
              callback.call(this, result);
            })
          }
        }
      },
      control: function(data,callback) {
        if(that.config.debug) {
          callback.call(this,JSON.stringify({status:{code:100000}}));
        }else {
          RemoteObject.ajax(that.config.control,"post",data,function(msg) {
            callback.call(this, result);
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
          RemoteObject.ajax(that.config.deviceList,"get",data,function(result){
            callback.call(this, result);
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
          console.log(that.config.websocketUrl);
          let url = that.config.websocketUrl;
          let theme = "/user/queue/canvas/"+canvasId;
          new WebSocket().connect(url,theme,function (result) {
            let dataList = option.analysis(result);
            callback.call(this, dataList);
          })
        }
      },
      getParams(deviceIdList,name) {
        let params = "";
        deviceIdList.forEach(function (id,index) {
          params+=""+name+"="+id;
          if(index<deviceIdList.length-1) {
            params+="&";
          }
        })
        return params;
      },
      analysis(deviceList) {
        let dataList = [];
        deviceList.forEach(function (item) {
          let data = {};
          data.id = item.deviceId;
          let pList = item.configurDevicePointVoList;
          if(pList.length>0){
            let points = []
            pList.forEach(function (pv) {
              let point = {}
              point.id = pv.point;
              point.value = pv.value;
              point.unit = pv.unit;
              point.name = pv.descr;
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
          RemoteObject.ajax(that.config.getDevice,"get",data,function(result){
            callback.call(this, result);
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
          RemoteObject.ajax(that.config.devicePointHstData,"get",data,function(result){
            callback.call(this, result);
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
          RemoteObject.ajax(that.config.token,"get",data,function(result){
            callback.call(this, result);
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
          RemoteObject.ajax(that.config.start,"post",data,function(result){
            callback.call(this, result);
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
          RemoteObject.ajax(that.config.stop,"post",data,function(result){
            callback.call(this, result);
          })
        }
      }
    }

    let stage = new ViewStage(option,this.config.imgHost);

    $(window).resize(function() {
      stage.location();//页面改变时调整舞台位置
    })
  }

  template() {
    let html = `<div id="root"></div>
    <div class="bm-view-panel"></div>
    <div class="bm-configur-panel" style="display: none">
      <div class="bm-configur-panel__body">
        <div class="bm-configur-panel__header"><span>&nbsp;</span><div class="bm-configur-panel__close">×</div></div>
        <div class="bm-configur-panel__content">
          <div id="playWind"></div>
        </div>
        <div class="vision-btn">
            <div class="bm-direction">
              <div class="bm-direction--top" data-value="0"><i class="fa fa-up"></i></div>
              <div class="bm-direction--left" data-value="2"><i class="fa fa-left"></i></div>
              <div class="bm-direction--right" data-value="3"><i class="fa fa-right"></i></div>
              <div class="bm-direction--bottom" data-value="1"><i class="fa fa-down"></i></div>
            </div>
        </div>
      </div>
    </div>
    <div id="temp_value" style="display: none;"></div>`;
    return html;
  }
}

export default View;

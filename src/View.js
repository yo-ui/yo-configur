import RemoteObject from '@/assets/js/RemoteObject'
import ViewStage from '@/core/ViewStage'
/**
 *
 */
class View {

  constructor(config) {
    this.config = config;
  }

  init(webSocket) {
    let that = this;
    let option = {
      canvas: function (callback) {
        if(webSocket) {
          webSocket.close();
        }
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
            RemoteObject.ajax(that.config.canvasGet, "get", data, function (msg) {
              let result = JSON.parse(msg);
              if (result.success) {
                callback.call(this, result.message)
              }
            })
          }
        }
      },
      control: function(data,callback) {
        if(that.config.debug) {
          callback.call(this,JSON.stringify({status:{code:100000}}));
        }else {
          RemoteObject.ajax("api/canvas/control","post",data,function(msg) {
            let result = JSON.parse(msg);
            if(result.success) {
              callback.call(this, result.message)
            }
          })
        }
      },
      devicePoints: function(devices,callback) {
        if(that.config.debug) {
          let devices = [
            {id:'00653D5730048000',name:'设备A',
              points:[
                {id:'TF',name:'累积用量',value:344.55,unit:'℃',time:'00:09:00'},
                {id:'SwSts',name:'设备状态',value:1,time:'00:09:00'}]}]
          callback.call(this, devices);
        }else {
          if(that.config.debug) {
            webSocket = new WebSocket("ws://127.0.0.1:8080/configur/websocket");
          } else {
            //socket = new WebSocket("wss://viz.energyiot.cn/configur/websocket");
            webSocket = new WebSocket(that.config.websocketUrl);
          }
          //连接发生错误的回调方法
          webSocket.onerror = function() {
            console.log("WebSocket连接发生错误");
          };
          //连接成功建立的回调方法
          webSocket.onopen = function() {
            console.log("WebSocket连接成功");
            webSocket.send(JSON.stringify(devices));
          }
          //接收到消息的回调方法
          webSocket.onmessage = function(event) {
            callback.call(this,JSON.parse(event.data));
          }
          //连接关闭的回调方法
          webSocket.onclose = function() {
            console.log("WebSocket连接关闭");
          }
        }
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
            if(result.success) {
              callback.call(this, result.message);
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
            if(result.success) {
              callback.call(this, result.message);
            }
          })
        }
      },
      token(deviceId,callback) {
        if(that.config.debug) {
          let token = {};
          token.serial = "D73596223";
          token.accessToken = "ra.1xcgrtv83096z4p45cv8f1jf1h1wyvf2-8abffatz2c-1fzrsp8-ym9mbj7is";
          callback.call(this, token);
        }else {
          let data = {}
          data.deviceId = deviceId;
          RemoteObject.ajax(that.config.token,"get",data,function(msg){
            let result = JSON.parse(msg);
            if(result.success) {
              callback.call(this, result.message);
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
            if(result.success) {
              callback.call(this, result.message);
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
            if(result.success) {
              callback.call(this, result.message);
            }
          })
        }
      }
    }

    let stage = new ViewStage(option);

    $(window).resize(function() {
      stage.location();//页面改变时调整舞台位置
    })
  }

  template() {
    let html = `<div id="root"></div>
    <div class="bm-view-panel"></div>
    <!--toast-->
    <div style="display: none" class="bm-toast bm-toast--text bm-toast--top">
      <span class="bm-toast__text"></span>
    </div>
    <!--password-->
    <div class="bm-password-panel">
      <div class="bm-password-panel__shade">&nbsp;</div>
      <div class="bm-password-panel__content">
        <div class="bm-password-panel__header"><small class="text">控制密码</small><span>×</span></div>
        <div class="bm-password-panel__input">
          <input type="text" maxlength="1"/>
          <input type="text" maxlength="1"/>
          <input type="text" maxlength="1"/>
          <input type="text" maxlength="1"/>
          <input type="text" maxlength="1"/>
          <input type="text" maxlength="1"/>
        </div>
        <div class="bm-password-panel__floor">
          <div class="bm-password-cancel">取消</div>
          <div class="bm-password-affirm">确定</div>
        </div>
      </div>
    </div>

    <div class="bm-configur-panel" style="display: none">
      <div class="bm-configur-panel__body">
        <div class="bm-configur-panel__header"><span>&nbsp;</span><div class="bm-configur-panel__close">×</div></div>
        <div class="bm-configur-panel__content">
          <div id="playWind"></div>
        </div>
        <div class="vision-btn">
            <div class="bm-direction">
              <div class="bm-direction--top" data-value="0"><img src="static/images/common/arrow_up.png"/></div>
              <div class="bm-direction--left" data-value="2"><img src="static/images/common/arrow_left.png"/></div>
              <div class="bm-direction--right" data-value="3"><img src="static/images/common/arrow_right.png"/></div>
              <div class="bm-direction--bottom" data-value="1"><img src="static/images/common/arrow_down.png"/></div>
            </div>
        </div>
      </div>
    </div>
    <div id="temp_value" style="display: none;"></div>`;
    return html;
  }
}

export default View;

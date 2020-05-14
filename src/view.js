import ViewStage from '@/core/ViewStage'
import RemoteObject from '@/assets/js/RemoteObject'

$(document).ready(function() {

	const DEBUG = true;

	let websocket;

	let option = {
        canvas: function (callback) {
        	if(websocket) {
        		websocket.close();
        	}
        	if(DEBUG) {
        		let data = localStorage.getItem("data");
        		if(!data) {
        			data = JSON.stringify({background:{url:'',pattern:1,color: '#fff'},capacity:[]})
        		}
        		let canvas = {id:1,name:'卜米物联A楼',width:1024,height:768,data:data}
        		callback.call(this, canvas)
        	}else {
	        	let data = {}
	        	RemoteObject.ajax("./canvas/get","get",data,function(msg) {
	                let result = JSON.parse(msg);
	                if(result.success) {
	                	callback.call(this, result.message)
	                }
		        })
        	}
        },
        control: function(deviceId,point,value,callback) {
        	if(DEBUG) {
        		callback.call(this,JSON.stringify({success:true,message:JSON.stringify({status:{code:100000}})}));
        	}else {
        		let data = {}
        		data.deviceId = deviceId;
        		data.point = point;
        		data.value = value;
	        	RemoteObject.ajax("./canvas/control","post",data,function(msg) {
	                let result = JSON.parse(msg);
	                if(result.success) {
			        	    callback.call(this, result.message)
	                }
		        })
        	}
        },
        devicePoints: function(devices,callback) {
        	if(DEBUG) {
        		let devices = [
        		{id:'00653D5730048000',name:'设备A',
        		  points:[
        		    {id:'TF',name:'累积用量',value:33444.22,unit:'t'},
        		    {id:'SwSts',name:'设备状态',value:1}]}]
        		callback.call(this, devices);
        	}else {
	        	if(websocket) {
	        		websocket.close();
	        	}
	        	if(DEBUG) {
	        		websocket = new WebSocket("ws://127.0.0.1:8080/configur/websocket");
	        	} else {
	        		websocket = new WebSocket("wss://viz.energyiot.cn/configur/websocket");
	        		//websocket = new WebSocket("ws://127.0.0.1:8080/configur/websocket");
	        	}
		        //连接发生错误的回调方法
		        websocket.onerror = function() {
		            console.log("WebSocket连接发生错误");
		        };
		        //连接成功建立的回调方法
		        websocket.onopen = function() {
		            console.log("WebSocket连接成功");
		            websocket.send(JSON.stringify(devices));
		        }
		        //接收到消息的回调方法
		        websocket.onmessage = function(event) {
		            callback.call(this,JSON.parse(event.data));
		        }
		        //连接关闭的回调方法
		        websocket.onclose = function() {
		            console.log("WebSocket连接关闭");
		        }
	        }
        },
        getDevice(id,callback) {
        	if(DEBUG) {
        		let device = {id:'00653D5730048000',name:'设备A',points:[{id:'WPP',name:'累积用量',value:33.22,unit:'kWh'},{id:'SwSts',name:'设备状态',value:1}]}
        		callback.call(this, device);
        	}else {
        		let data = {}
	        	data.deviceId = id;
	        	RemoteObject.ajax("./common/getDevice","get",data,function(msg){
					    let result = JSON.parse(msg);
	                if(result.success) {
	                  callback.call(this, result.message);
	                }
	            })
        	}
        },
        devicePointHstData(deviceId,point,startTime,endTime,callback) {
        	if(DEBUG) {
        		let dataList = [
        		{value:1,time:'00:01:00'},{value:2,time:'00:02:00'},{value:5,time:'00:03:00'},{value:2,time:'00:04:00'},
        		{value:2,time:'00:05:00'},{value:2,time:'00:06:00'},{value:3,time:'00:07:00'},{value:2,time:'00:08:00'}]
        		let device = {id:1,name:'设备A',dataList: dataList}
        		callback.call(this, device);
        	}else {
        		let data = {}
	        	data.deviceId = deviceId;
	        	data.point = point;
	        	data.startTime = startTime;
	        	data.endTime = endTime;
	        	RemoteObject.ajax("./common/devicePointHstData","get",data,function(msg){
	        	  let result = JSON.parse(msg);
              if(result.success) {
                callback.call(this, result.message);
              }
	        	})
        	}
        },
        token(deviceId,callback) {
        	if(DEBUG) {
        		let token = {};
            token.serial = "D73596223";
            token.accessToken = "ra.1xcgrtv83096z4p45cv8f1jf1h1wyvf2-8abffatz2c-1fzrsp8-ym9mbj7is";
        		callback.call(this, token);
        	}else {
				    let data = {}
        		data.deviceId = deviceId;
        		RemoteObject.ajax("./canvas/token","get",data,function(msg){
					      let result = JSON.parse(msg);
                if(result.success) {
                    callback.call(this, result.message);
                }
	          })
        	}
        },
        start(deviceId,value,callback) {
        	if(DEBUG) {
        		let data = {}
        		callback.call(this, data);
        	}else {
            let data = {}
            data.deviceId = deviceId;
            data.direction = value;
            RemoteObject.ajax("./canvas/start","post",data,function(msg){
                let result = JSON.parse(msg);
                if(result.success) {
                    callback.call(this, result.message);
                }
            })
        	}
        },
        stop(deviceId,value,callback) {
        	if(DEBUG) {
        		let data = {}
        		callback.call(this, data);
        	}else {
				    let data = {}
        		data.deviceId = deviceId;
        		data.direction = value;
        		RemoteObject.ajax("./canvas/stop","post",data,function(msg){
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

})

import Stage from '@/core/Stage'
import RemoteObject from '@/assets/js/RemoteObject'

$(document).ready(function() { 
	
	var debug = true;
	
	var option = {		
        canvas: function (callback) {
        	if(debug) {
        		let data = localStorage.getItem("data");
        		if(!data) {
        			data = JSON.stringify({background:{url:'',pattern:1,color: '#fff'},capacity:[]})
        		}
        		let canvas = {id:1,name:'画布',width:1024,height:768,data:data}
        	    callback.call(this, canvas);
        	}else {
        		let data = {}
	        	RemoteObject.ajax("./canvas/get","get",data,function(msg){   
	                var result = JSON.parse(msg);
	                if(result.success) {
			        	callback.call(this, result.message);
	                }
		        })
        	}       	
        },
        saveCanvas: function(data,callback) {
        	if(debug) {
        		localStorage.setItem("data", data.data);
        		callback.call(this, "ok");
        	}else {
        		RemoteObject.ajax("./canvas/save","post",data,function(msg){
	                var result = JSON.parse(msg);
	                if(result.success) {
			        	callback.call(this, "ok");
	                }
	            })
        	}       	
        },
        organizList: function(callback) {
        	if(debug) {
        		let dataList = [{id:1,name:'A楼',pid:0},{id:2,name:'B楼',pid:1}]
	            callback.call(this, dataList);
        	}else {
        		RemoteObject.ajax("./common/organizList","get","",function(msg){
	                var result = JSON.parse(msg);
	                if(result.success) {
			        	callback.call(this, result.message);
	                }
	            })
        	}
        },
        devicePoints: function (orgId,callback) {
        	if(debug) {
        		let devices = [
        		{id:'00653D5730048000',name:'电表',points:[{id:'WPP',name:'正向有功电能',unit:'kWh'},{id:'err',name:'错误参数'},{id:'SwSts',name:'状态',value:1}]},
	            {id:'0057C62C50048000',name:'水表',points:[{id:'TF',name:'累积流量',unit:'t'},{id:'SwSts',name:'状态',value:1}]}]
	            callback.call(this, devices);
        	}else {
        		var data = {}
        		data.orgId = orgId;
        		RemoteObject.ajax("./common/devicePoints","get",data,function(msg){
	                var result = JSON.parse(msg);
	                if(result.success) {
			        	callback.call(this, result.message);
	                }
	            })
        	}           
        },
        upload(form,file,callback) {
        	var imageForm = new FormData(form);
	        imageForm.append("file", file);
	        $.ajax({
	            url:'file/upload',
	            type:'post',
	            data:imageForm,
	            contentType:false,
	            processData:false,
	            success:function(msg){
	                callback.call(this, msg);
	            },
	            error:function(err){
	                console.log(err)
	            }
	        });
        },
        preview(callback) {
        	if(debug) {
        		window.open('./view')
        	}else {
        		window.open('./preview')
        	}
        },
        devicePointHstData(deviceId,point,startTime,endTime,callback) {      	
        	if(debug) {
        		let dataList = [{value:1,time:'00:01:00'},{value:2,time:'00:02:00'},
				        		{value:5,time:'00:03:00'},{value:2,time:'00:04:00'},
				        		{value:2,time:'00:05:00'},{value:2,time:'00:06:00'},
				        		{value:3,time:'00:07:00'},{value:2,time:'00:08:00'}]
        		let device = {id:1,name:'设备A',dataList:dataList}       		
        		callback.call(this, device);
        	}else {
        		let data = {}
	        	data.deviceId = deviceId;
	        	data.point = point;
	        	data.startTime = startTime;
	        	data.endTime = endTime;
	        	RemoteObject.ajax("./common/devicePointHstData","get",data,function(msg){
	                var result = JSON.parse(msg);
	                if(result.success) {
			        	callback.call(this, result.message);
	                }
	            })
        	}
        }
    }
	
    var stage = new Stage(option);	  
})



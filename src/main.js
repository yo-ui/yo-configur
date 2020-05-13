import Stage from '@/core/Stage'
import RemoteObject from '@/assets/js/RemoteObject'

$(document).ready(function() {

	const DEBUG = true;

	let option = {
        canvas: function (callback) {
        	if(DEBUG) {
        		let data = localStorage.getItem("data");
        		if(!data) {
        			data = JSON.stringify({background:{url:'',pattern:1,color: '#fff'},capacity:[]})
        		}
        		let canvas = {id:1,name:'画布',width:1024,height:768,data:data}
        		callback.call(this, canvas);
        	}else {
        		let data = {}
	        	RemoteObject.ajax("./canvas/get","get",data,function(msg){
				    let result = JSON.parse(msg);
	                if(result.success) {
	              	    callback.call(this, result.message);
	                }
		        })
        	}
        },
        saveCanvas: function(data,callback) {
        	if(DEBUG) {
        		console.log(data.data);
        		localStorage.setItem("data", data.data);
        		callback.call(this, "ok");
        	}else {
        		RemoteObject.ajax("./canvas/save","post",data,function(msg){
        		    let result = JSON.parse(msg);
        		    if(result.success) {
        		        callback.call(this, "ok");
        		    }
        		})
        	}
        },
        organizList: function(callback) {
        	if(DEBUG) {
        		let dataList = [{id:1,name:'A楼',pid:0},{id:2,name:'B楼',pid:1}]
	            callback.call(this, dataList);
        	}else {
        		RemoteObject.ajax("./common/organizList","get","",function(msg){
					let result = JSON.parse(msg);
	                if(result.success) {
			        	callback.call(this, result.message);
	                }
	            })
        	}
        },
        devicePoints: function (orgId,callback) {
        	if(DEBUG) {
        		let devices = [
        		{id:'00653D5730048001',name:'电表',points:[{id:'WPP',name:'正向有功电能',unit:'kWh'},{id:'err',name:'错误参数'},{id:'SwSts',name:'状态',value:1}]},
	            {id:'00653D5730048000',name:'水表',points:[{id:'TF',name:'累积流量',unit:'t',value: 222.333},{id:'SwSts',name:'状态',value:1}]}]
	            callback.call(this, devices);
        	}else {
				let data = {}
        		data.orgId = orgId;
        		RemoteObject.ajax("./common/devicePoints","get",data,function(msg){
					let result = JSON.parse(msg);
	                if(result.success) {
			        	callback.call(this, result.message);
	                }
	            })
        	}
        },
        upload(form,file,callback) {
        	if(DEBUG) {
	        	let url = $(form).find('input').val();
	        	callback.call(this, "/static/images/background/background.jpg");
        	}else {
				let imageForm = new FormData(form);
		        imageForm.append("file", file);
		        $.ajax({
		            url:'file/upload',
		            type:'post',
		            data:imageForm,
		            contentType:false,
		            processData:false,
		            success:function(msg){
						let url = "/upload/background/"+JSON.parse(msg).fileName
		                callback.call(this, url)
		            },
		            error:function(err){
		                console.log(err)
		            }
		        });
        	}
        },
        preview() {
        	if(DEBUG) {
        		window.open('./view')
        	}else {
        		window.open('./preview')
        	}
        },
        devicePointHstData(deviceId,point,startTime,endTime,callback) {
        	if(DEBUG) {
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
					let result = JSON.parse(msg);
	                if(result.success) {
			        	callback.call(this, result.message);
	                }
	            })
        	}
        }
    }

	let stage = new Stage(option);

	$('#property_tabs a').each(function(index) {
		$(this).data("value", index);
		$(this).on('click',function() {
			$(this).parent().addClass('active');
			$(this).parent().siblings().each(function() {
				$(this).removeClass('active')
			})
			let value = $(this).data('value');
			if(value==0) {
				$('#tab_1').show();
				$('#tab_2').hide();
			}else {
				$('#tab_2').show();
				$('#tab_1').hide();
			}
		})
	})

	$('.bm-layout__header__back').on('click',function() {
		window.history.back(-1);
	})

	$('.bm-layout__header__view').on('click',function() {
		option.preview()
	})

	let classNames = [
		'.bm-layout__main__left',
		'.bm-layout__main__body',
		'.bm-layout__header']
	classNames.forEach(function (className) {
		$(className).on('click',function () {
			$('#configur_stage').trigger('click');
		})
	})

	$(window).resize(function() {
		stage.location();//页面改变时调整舞台位置
	})
})



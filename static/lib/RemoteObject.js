var RemoteObject = {
	dataType: 'text',
	ajax:function (url,type,data,back){
		if(typeof back != 'function'){
			alert("back isn't function");
			return;
	    }
	    var that = this;
	    var type = type; 
	    var dataType = that.dataType;
		$.ajax({
	        type:type,
	        url:url,
	        data:data,
	        dataType:dataType,
	        beforeSend:function(xhr) { 
                xhr.setRequestHeader("clientId",'web_property_mgt'); 
                xhr.setRequestHeader("clientTime",1500000000000);
            },
	        success:function(msg){
            	if(msg==""){
            		window.location.href= "./logout";  
                    return;  
            	}
			    back.call(this,msg);
	        },
	        complete:function(XMLHttpRequest,status){
	        	if(status=='timeout'){
	        	 　console.log("连接超时！");
	        	}else if(status=='error'){
	        	  console.log("连接错误！");
	        	}
	        },	        
	    });
    },
    show:function(){
    	let count = Number($('.loading-img').data('count'));
	    $('.loading-img').data('count',count+1);
	    $('.loading-img').show();
    },
    hide:function(){
    	let count = Number($('.loading-img').data('count'));
	    $('.loading-img').data('count',count-1);
	    if((count-1)==0){
	    	$('.loading-img').hide();
	    }
    },
}
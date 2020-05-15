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
            back.call(this,msg);
            },
            complete:function(XMLHttpRequest,status){
              if(status=='timeout'){
               　　console.log("连接超时！");
              }else if(status=='error'){
                console.log("连接错误！");
              }
            },
            error:function(){

            }
        });
   }
}

export default RemoteObject;

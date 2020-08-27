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
        beforeSend:function(xhr) {
          xhr.setRequestHeader("clientId",'web_property_mgt');
          xhr.setRequestHeader("clientTime", new Date().getTime());
        },
        dataType:dataType,
        success:function(msg){
          let result = JSON.parse(msg);
          if(result.code==200) {
            back.call(this,result.result);
          }else {
            console.log(url+":"+result.message);
          }
        },
        complete:function(XMLHttpRequest,status){
          if(status=='timeout'){
            console.log("连接超时！");
          }else if(status=='error'){
            console.log("连接错误！");
          }
        },
        error:function(){}
      });
   }
}

export default RemoteObject;

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
    let token = sessionStorage.getItem("token");
    $.ajax({
        type:type,
        url:url,
        data:data,
        beforeSend:function(xhr) {
          xhr.setRequestHeader("clientId",'web_property_mgt');
          xhr.setRequestHeader("clientTime", new Date().getTime());
          xhr.setRequestHeader("x-access-token", token);
        },
        dataType:dataType,
        success:function(msg){
          back.call(this, msg);
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
   },
   upload:function (url,form,back){
    if(typeof back != 'function'){
      alert("back isn't function");
      return;
    }
    let token = sessionStorage.getItem("token");
    $.ajax({
      url: url,
      type: 'post',
      data: form,
      contentType: false,
      processData: false,
      dataType: 'text',
      beforeSend:function(xhr) {
        xhr.setRequestHeader("clientId",'web_property_mgt');
        xhr.setRequestHeader("clientTime", new Date().getTime());
        xhr.setRequestHeader("x-access-token", token);
      },
      success:function(msg){
        back.call(this, msg);
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

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
        success:function(msg){
          if(msg) {
            back.call(this,msg);
          }else {
            console.log("请先登录！");
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

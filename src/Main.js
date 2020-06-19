import RemoteObject from '@/assets/js/RemoteObject';
import View from './View.js';
import Edit from './Edit.js';

$(document).ready(function() {

  let webSocket;

  $.getJSON('./static/config/data.json',function(config){
    if(webSocket) {
      webSocket.close();
    }
    if(config.debug) {
      let type = 1;
      content(type);
    }else {
      RemoteObject.ajax(config.verifyInfo,"get","",function(msg){
        let result = JSON.parse(msg);
        if(result.success) {
          let message = result.message;
          sessionStorage.setItem("canvasId", message.canvasId);
          content(message.type);
        }
      })
    }

    function content(type) {
      if(type==1) {
        let edit = new Edit(config);
        $('.main-content').html(edit.template());
        edit.init();
      }else {
        let view = new View(config);
        $('.main-content').html(view.template());
        view.init(webSocket);
      }
    }
  })
})



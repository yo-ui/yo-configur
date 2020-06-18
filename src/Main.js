import RemoteObject from '@/assets/js/RemoteObject'
import View from './View.js'
import Edit from './Edit.js'

$(document).ready(function() {

  let websocket;

  $.getJSON('./static/config/data.json',function(config){
    if(websocket) {
      websocket.close();
    }
    if(config.debug) {
      let type = 1;
      page(type);
    }else {
      RemoteObject.ajax(config.verifyInfo,"get","",function(msg){
        let result = JSON.parse(msg);
        if(result.success) {
          let message = result.message;
          sessionStorage.setItem("canvasId", message.canvasId);
          page(message.type);
        }
      })
    }

    function page(type) {
      if(type==1) {
        let edit = new Edit(config);
        $('.main-content').html(edit.template());
        edit.init();
      }else {
        let view = new View(config);
        $('.main-content').html(view.template());
        view.init(websocket);
      }
    }
  })
})



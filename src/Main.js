import RemoteObject from '@/assets/js/RemoteObject'
import View from './View.js'
import Edit from './Edit.js'

$(document).ready(function() {
  $.getJSON('./static/config/data.json',function(config){
    if(config.debug) {
      let edit = new Edit(config);
      $('.main-content').html(edit.template());
      edit.init();
    }else {
      RemoteObject.ajax(config.verifyInfo,"get","",function(msg){
        let result = JSON.parse(msg);
        if(result.success) {
          let message = result.message;
          if(message.type==1) {
            let edit = new Edit(config);
            $('.main-content').html(edit.template());
            edit.init();
          }else {
            let view = new View(config);
            $('.main-content').html(view.template());
            view.init();
          }
          sessionStorage.setItem("canvasId", message.canvasId)
        }
      })
    }
  })
})



import '@/assets/css/index.css'
import config from '@/common/config'
import RemoteObject from '@/assets/js/RemoteObject';
import View from './View';
import Edit from './Edit';

$(document).ready(function() {
    if(config.debug) {
      content(1);
    }else {
      RemoteObject.ajax(config.verifyInfo,"get","",function(result){
        sessionStorage.setItem("canvasId", result.canvasId);
        content(result.type);
      })
    }

    function content(type) {
      if(type==1) {
        let edit = new Edit(config);
        $('.main-content').html(edit.template());
        edit.init();
      }else if(type==2) {
        let view = new View(config);
        $('.main-content').html(view.template());
        view.init();
      }
    }
})



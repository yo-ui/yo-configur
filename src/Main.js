import '@/assets/css/index.css'
import '@/assets/css/colpick.css'
import config from '@/common/config'
import '@/assets/js/colpick';
import RemoteObject from '@/assets/js/RemoteObject';
import View from './View';
import Edit from './Edit';

$(document).ready(function() {
    if(config.debug) {
      content(1);
    }else {
      RemoteObject.ajax(config.verifyInfo,"get","",function(result){
        sessionStorage.setItem("canvasId", result.canvasId);
        let type = result.type;
        RemoteObject.ajax(config.getEndPoint,"get","",function(result){
          config.imgHost = result;
          content(type);
        })
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
        view.init();
      }
    }
})



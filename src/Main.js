import './assets/css/index.less'
import config from './common/config'
import RemoteObject from './assets/js/RemoteObject';
import View from './View';
import Edit from './Edit';

$(document).ready(function() {
    if(config.debug) {
      content(1);
    }else {
      RemoteObject.ajax(config.verifyInfo,"get","",function(msg){
        let result = JSON.parse(msg);
        if(result.code==200) {
          let data = result.result;
          sessionStorage.setItem("canvasId", data.canvasId);
          content(data.type);
        }else {
          console.log(result.message);
        }
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



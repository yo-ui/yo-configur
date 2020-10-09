import './assets/css/index.less'
import conf from './common/api.conf'
import dev from './common/api.dev'
import test from './common/api.test'
import prod from './common/api.prod'
import View from './View';
import Edit from './Edit';

$(document).ready(function() {
    let config = {};
    if(conf.active=="dev") {
      config = dev;
    }else if(conf.active=="test") {
      config = test;
    }else if(conf.active=="prod") {
      config = prod;
    }
    if(config.debug) {
      content(1);
    }else {
      let canvasId = getQueryString("canvasId");
      let type = getQueryString("type");
      let token = getQueryString("x-access-token");
      if(canvasId&&type&&token) {
        sessionStorage.setItem("canvasId", canvasId);
        sessionStorage.setItem("token", token);
        content(type);
      }else{
        console.error("跳转参数错误！");
      }
    }

    function content(type) {
      if(type==1) {
        let edit = new Edit(config);
        $('.main-content').html(edit.template());
        edit.init();
      }else if(type==2) {
        config = config.service;
        console.log(config);
        let view = new View(config);
        $('.main-content').html(view.template());
        view.init();
      }
    }

    function  getQueryString(name) {
      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if(r!=null)return  unescape(r[2]); return null;
    }
})



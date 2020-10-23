import RemoteObject from './assets/js/RemoteObject'
import Stage from './core/Stage'
import View from "./View";

class Edit {

  constructor(config) {
    this.config = config;
  }

  init() {
    let that = this;
    let option = {
      canvas: function (callback) {
        if(that.config.debug) {
          let data = localStorage.getItem("data");
          if(!data) {
            data = JSON.stringify({background:{url:'',pattern:1,color: '#fff'},capacity:[]})
          }
          let canvas = {id:1,name:'画布',width:1024,height:768,data:data}
          callback.call(this, canvas);
        }else {
          let canvasId = sessionStorage.getItem("canvasId")
          if(canvasId) {
            let data = {}
            data.id = canvasId;
            RemoteObject.ajax(that.config.get,"get",data,function(msg){
              let result = JSON.parse(msg);
              if(result.code==200) {
                callback.call(this, result.result);
              }else {
                console.log(result.message);
              }
            })
          }
        }
      },
      save: function(data,callback) {
        if(that.config.debug) {
          localStorage.setItem("data", data.data);
          callback.call(this);
        }else {
          RemoteObject.ajax(that.config.save,"post",data,function(msg){
            let result = JSON.parse(msg);
            if(result.code==200) {
              callback.call(this);
            }else {
              console.log(result.message);
            }
          })
        }
      },
      organizList: function(callback) {
        if(that.config.debug) {
          let dataList = [{id:1,name:'A楼',pid:0},{id:2,name:'B楼',pid:1}]
          callback.call(this, dataList);
        }else {
          RemoteObject.ajax(that.config.organizList,"get","",function(msg){
            let result = JSON.parse(msg);
            if(result.code==200) {
              callback.call(this, result.result);
            }else {
              console.log(result.message);
            }
          })
        }
      },
      devicePoints: function (orgId,callback) {
        if(that.config.debug) {
          let devices = [
            {id:'00653D5730048001',name:'电表',points:[{id:'WPP',name:'正向有功电能',unit:'kWh'},{id:'err',name:'错误参数'},{id:'SwSts',name:'状态',value:1}]},
            {id:'00653D5730048000',name:'水表',points:[{id:'TF',name:'累积流量',unit:'t',value: 222.333},{id:'SwSts',name:'状态',value:1}]}]
          callback.call(this, devices);
        }else {
          let data = {}
          data.orgId = orgId;
          RemoteObject.ajax(that.config.devicePoints,"get",data,function(msg){
            let result = JSON.parse(msg);
            if(result.code==200) {
              callback.call(this, result.result);
            }else {
              console.log(result.message);
            }
          })
        }
      },
      getDevice(id,callback) {
        if(that.config.debug) {
          let device = {id:'00653D5730048000',name:'设备A',
            points:[
              {id:'TF',name:'累积用量',value:33.22,unit:'t',type: 1,},
              {id:'SwSts',name:'开关状态',value:1,type: 2,
                optionValList:[
                  {id:'',value:0,descr:'关'},
                  {id:'',value:1,descr:'开'}
                ]
              }]}
          callback.call(this, device);
        }else {
          let data = {}
          data.deviceId = id;
          RemoteObject.ajax(that.config.getDevice,"get",data,function(msg){
            let result = JSON.parse(msg);
            if(result.code==200) {
              callback.call(this, result.result);
            }else {
              console.log(result.message);
            }
          })
        }
      },
      upload(form,file,callback) {
        if(that.config.debug) {
          let url = $(form).find('input').val();
          callback.call(this, "static/images/background/background.jpg");
        }else {
          let formData = new FormData(form);
          formData.append("files", file);
          RemoteObject.upload(that.config.upload,formData,function(msg){
            let result = JSON.parse(msg);
            if(result.code==200) {
              callback.call(this,result.result[0]);
            }else {
              console.log(result.message);
            }
          })
        }
      },
      devicePointHstData(deviceId,point,startTime,endTime,callback) {
        if(that.config.debug) {
          let dataList = [{value:1,time:'00:01:00'},{value:2,time:'00:02:00'},
            {value:5,time:'00:03:00'},{value:2,time:'00:04:00'},
            {value:2,time:'00:05:00'},{value:2,time:'00:06:00'},
            {value:3,time:'00:07:00'},{value:2,time:'00:08:00'}]
          let device = {id:1,name:'设备A',dataList:dataList}
          callback.call(this, device);
        }else {
          let data = {}
          data.deviceId = deviceId;
          data.point = point;
          data.startTime = startTime;
          data.endTime = endTime;
          RemoteObject.ajax(that.config.devicePointHstData,"get",data,function(msg){
            let result = JSON.parse(msg);
            if(result.code==200) {
              callback.call(this, result.result);
            }else {
              console.log(result.message);
            }
          })
        }
      }
    }

    let stage = new Stage(option, this.config.imgHost);

    $('#property_tabs a').each(function(index) {
      $(this).data("value", index);
      $(this).on('click',function() {
        $(this).parent().addClass('active');
        $(this).parent().siblings().each(function() {
          $(this).removeClass('active')
        })
        let value = $(this).data('value');
        if(value==0) {
          $('#tab_1').show();
          $('#tab_2').hide();
        }else {
          $('#tab_2').show();
          $('#tab_1').hide();
        }
      })
    })

    $('.bm-layout__header__back').on('click',function() {
      window.history.back(-1);
    })

    $('.bm-toolbar .preview').on('click',function() {
      that.preview();
    })

    $('.bm-toolbar .save').on('click',function() {
      stage.save();
    })

    $('.bm-help').on('click',function() {
      stage.help.init();
    })

    let names = [
      'bm-layout__main__left',
      'bm-layout__main__body',
      'bm-layout__header']
    names.forEach(function (name) {
      $('.'+name).on('click',function () {
        $('#configur_stage').trigger('click');
      })
    })

    $(window).resize(function() {
      stage.stageAuto();//舞台调整
      stage.location();//舞台位置
    })
  }

  //预览
  preview() {
    let view = new View(this.config);
    $('.main-content').html(view.template());
    view.init();
  }

  template() {
    return `<div class="bm-layout">
      <div class="bm-layout__header">
        <span class="bm-layout__header__back">
          <i class="fa fa-return"></i>
        </span>
        <span class="bm-layout__header__name"></span>
      </div>
      <div class="bm-toolbar">
        <div class="item back">
          <div><i class="fa fa-back"></i></div>
          <span>撤销</span>
        </div>  
        <div class="halving"></div>
        <div class="item delete">
          <div><i class="fa fa-delete"></i></div>
          <span>删除</span>
        </div>
        <div class="halving"></div>  
        <div class="item copy">
          <div><i class="fa fa-copy"></i></div>
          <span>复制</span>
        </div>  
        <div class="halving"></div>
        <div class="item align-left">
          <div>
            <i class="fa fa-align-left"></i>
          </div>
          <span>左对齐</span>
        </div>
        <div class="item align-up">
          <div>
            <i class="fa fa-align-up"></i>
          </div>
          <span>上对齐</span>
        </div>
        <div class="item align-right">
          <div>
            <i class="fa fa-align-right"></i>
          </div>
          <span>右对齐</span>
        </div>
        <div class="item align-down">
          <div>
            <i class="fa fa-align-down"></i>
          </div>
          <span>下对齐</span>
        </div>
        <div class="halving"></div>     
        <div class="item h-divide">
          <div><i class="fa fa-h-divide"></i></div>
          <span>水平平分</span>
        </div>
        <div class="item v-divide">
          <div><i class="fa fa-v-divide"></i></div>
          <span>垂直平分</span>
        </div>  
        <div class="halving"></div>  
        <div class="item comb">
          <div><i class="fa fa-comb"></i></div>
          <span>组合</span>
        </div>
        <div class="item resolve">
          <div><i class="fa fa-resolve"></i></div>
          <span>分解</span>
        </div>
        <div class="halving"></div>  
        <div class="item lock">
          <div><i class="fa fa-lock"></i></div>
          <span>锁定</span>
        </div>
        <div class="item unlock">
          <div><i class="fa fa-unlock"></i></div>
          <span>解锁</span>
        </div>   
        <div class="halving"></div>  
        <div class="item data">
          <div><i class="fa fa-data"></i></div>
          <span>数据</span>
        </div> 
        <div class="item save pull-right">
          <div><i class="fa fa-save"></i></div>
          <span>保存</span>
        </div>
        <div class="item preview pull-right">
          <div><i class="fa fa-preview"></i></div>    
          <span>预览</span>
        </div>
         <div class="pull-right">
          <div class="bm-zoom">
            <div><i class="fa fa-zoom-in"></i></div>
            <span class="bm-zoom-text">100%</span>
            <div><i class="fa fa-zoom-out"></i></div>
          </div>   
        </div>
     </div>
      <div class="bm-layout__main">
        <div class="bm-global-panel"></div>
        <div class="bm-layout__main__left" id="configur_library">
          <ul class="bm-side"></ul>
          <div class="bm-component-list"></div>
          <div class="bm-help"><i class="fa fa-help"></i></div>
        </div>
        <div class="bm-layout__main__body">
            <div class="bm-stage">
              <div id="root"></div>
            </div>
        </div>
        <div class="bm-layout__main__right">
            <div class="bm-tabs-custom">
                <ul id="property_tabs" class="bm-tabs">
                    <li class="active"><a href="javaScript:">基本样式</a></li>
                    <li><a href="javaScript:">画布元素</a></li>
                </ul>
            </div>
            <div class="bm-tabs-content">
                <div id="tab_1" data-value="1">
                  <div id="configur_property"></div>
                </div>
                <div id="tab_2" data-value="2" style="display: none;">
                  <div id="configur_list">
                    <ul class="bm-list"></ul>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div class="bm-context-menu"><ul></ul></div>
      </div>
      <div class="menu-panel"></div>
      <div style="display: none" class="bm-toast bm-toast--text bm-toast--top">
        <span class="bm-toast__text"></span>
      </div>
      <div id="temp_value" style="display: none;"></div>`;
  }
}

export default Edit;



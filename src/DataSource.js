import Panel from './core/Panel'
import Toast from "./core/Toast";
/**
 *
 */
class DataSource {

  constructor(stage) {
    let that = this;
    this.stage = stage;
  }

  init() {
    let that = this;
    let panel = new Panel(this.stage);
    panel.init("数据",that.template(),800,600)
    panel.floorHide();
    panel.show();
    this.createList();
    $('.bm-data-source').find('.fa-add').on('click',function () {
      that.variable = "";
      that.insert();
    });

    $('.bm-data-source').find('[name=search]').on('input propertyChange',function () {

    });
  }

  insert() {
    let that = this;
    that.type = 1;
    $('.bm-data-source .right').html(that.content());
    $('.bm-data-source--header').text("新增数据点");
    $('.bm-action-list li').each(function () {
      $(this).removeClass('active');
    });
    that.save();
  }

  edit() {
    let that = this;
    that.type = 2;
    $('.bm-data-source .right').html(that.content());
    $('.bm-data-source--header').text("修改数据点");
    that.typeValue(that.variable.type);
    $('.bm-data-source').find('[name=name]').val(that.variable.name);
    $('.bm-data-source').find('[name=key]').val(that.variable.key);
    $('.bm-data-source').find('[name=type]').val(that.variable.type);
    $('.bm-data-source').find('[name=value]').val(that.variable.value);
    that.save();
  }

  save() {
    let that = this;
    $('.bm-data-source [name=type]').on('change',function () {
      let type = $(this).val();
      that.typeValue(type);
      if(that.variable.type==type) {
        $('.bm-data-source').find('[name=value]').val(that.variable.value);
      }
    })

    $('.bm-data-source .save').on('click',function () {
      let name = $('.bm-data-source').find('[name=name]').val();
      let type = $('.bm-data-source').find('[name=type]').val();
      let key = $('.bm-data-source').find('[name=key]').val();
      let value = $('.bm-data-source').find('[name=value]').val();
      if(name=="") {
        Toast.alert("数据点名称不能为空！");
        $('.bm-data-source').find('[name=name]').focus();
        return;
      }
      if(key=="") {
        Toast.alert("数据点key不能为空！");
        $('.bm-data-source').find('[name=key]').focus();
        return;
      }else {
        if(!/^[a-zA-Z_$][a-zA-Z0-9_$]*/.test(key)) {
          Toast.alert("数据点名称格式错误！");
          $('.bm-data-source').find('[name=key]').focus();
          return;
        }else {
          if(that.type==1) {
            if(that.verifyVariable(key)) {
              Toast.alert("数据点key已经存在！");
              $('.bm-data-source').find('[name=key]').focus();
              return;
            }
          }else {
            if(key!=that.variable.key&&that.verifyVariable(key)) {
              Toast.alert("数据点key已经存在！");
              $('.bm-data-source').find('[name=key]').focus();
              return;
            }
          }
        }
      }
      if(type==2||type==3) {
        if(value=="") {
          Toast.alert("数据点值不能为空！");
          $('.bm-data-source').find('[name=value]').focus();
          return;
        }
      }
      let variable = {type,key,value,name}
      if(that.type==1) {
        that.stage.variableList.unshift(variable);
        that.createList();
        Toast.alert("新增成功！")
      }else {
        console.log(variable);
        that.updateVariable(variable);
        Toast.alert("修改成功！")
      }
    });
  }

  valueChange(type) {
    $('.bm-data-source').find('[name=value]').on('input propertyChange',function () {
      let value = $(this).val();
      if(type==2) {
        if(!/^[-+]?[1-9][0-9]*$/.test(value)) {
          $(this).val(value.substr(0,value.length-1));
          $('.bm-data-source').find('[name=value]').focus();
        }
      }
      if(value.length>10) {
        $(this).val(value.substr(0,value.length-1));
      }
    });
  }

  typeValue(type) {
    if(type==1) {
      let select = $(`<select class="bm-select" name="value">
                        <option value="0">0</option>
                        <option value="1">1</option>
                       </select>`);
      $('.bm-data-source').find('.value-content').html(select);
    }else if(type==2) {
      let input = $(`<input type="text" class="form-control" name="value"/>`);
      $('.bm-data-source').find('.value-content').html(input);
    }else if(type==3) {
      let input = $(`<input type="number" class="form-control" name="value" min="0" max="9999"/>`);
      $('.bm-data-source').find('.value-content').html(input);
    }else if(type==4) {
      let input = $(`<input type="text" class="form-control" name="value" maxlength="64" autocomplete="off"/>`);
      $('.bm-data-source').find('.value-content').html(input);
    }
    this.valueChange(type);
  }

  verifyVariable(key) {
    let verify = false;
    this.stage.variableList.forEach(function (variable) {
      if(variable.key==key) {
        verify = true;
      }
    })
    return verify;
  }

  updateVariable(data) {
    this.stage.variableList.forEach(function (variable) {
      if(data.key==variable.key) {
        Object.assign(variable,data);
      }
    })
  }

  getVariable(key) {
    let data = {};
    this.stage.variableList.forEach(function (variable) {
      if(variable.key==key) {
        data = variable;
      }
    })
    return data;
  }

  createList() {
    $('.bm-action-list').html('');
    let that = this;
    let variableList = this.stage.variableList;
    if(variableList.length>0) {
      variableList.forEach(function (variable,index) {
        let li = $(`<li><span class="text">${variable.key}</span><span class="close"><i class="fa fa-delete"></i></span></li>`)
        li.data("key", variable.key);
        li.attr("title", variable.name);
        li.on('click',function () {
          li.addClass("active");
          let key = $(this).data("key")
          that.variable = that.getVariable(key);
          that.edit();
          $(this).siblings().each(function () {
            $(this).removeClass('active')
          });
        })
        li.find('.close').on('click',function () {
          if(confirm("确定要删除吗？")) {
            let key = $(this).parent().data("key");
            that.removeVariable(key);
            that.createList();
            Toast.alert("删除成功！")
          }
        });
        if(index==0) {
          that.variable = variable;
          that.edit();
          li.addClass("active");
        }
        $('.bm-action-list').append(li);
      })
    }else {
      $('.bm-action-list').append(`<li><span class="text" style="text-align: center">无数据</span></li>`);
    }
  }

  removeVariable(key) {
    let dataList = [];
    this.stage.variableList.forEach(function (variable) {
      if(variable.key!=key) {
        dataList.push(variable);
      }
    })
    this.stage.variableList = dataList;
  }

  template() {
    return `<div class="bm-data-source">
               <div class="left">
                 <div class="bm-input-text" style="margin-bottom: 10px">
                   <!--<input type="search" name="search" class="form-control form-control--lg" placeholder="检索数据点名称"/>-->
                   <span class="label">数据表</span>
                   <span class="icon"><i class="fa fa-add">新增</i></span>
                 </div>
                 <ul class="bm-action-list bm-action-list--lg">
                   
                 </ul>
               </div>
               <div class="right">
                 <div class="content"></div>
                 
               </div>
             </div>`;
  }

  content() {
    return `<div>
               <div class="bm-data-source--header">新增数据点</div>
               <div class="bm-data-source--content">        
                 <div class="bm-input-text">
                   <span class="text"><span style="color: red">*</span>key：</span><input type="text" name="key" class="form-control" maxlength="16" autocomplete="off"/>
                 </div>    
                 <div class="bm-input-text">
                   <span class="text"><span style="color: red">*</span>名称：</span><input type="text" name="name" class="form-control" maxlength="32" autocomplete="off"/>
                 </div>                
                 <div class="bm-input-text">
                   <span class="text"><span style="color: red">*</span>类型：</span>
                   <span class="text" style="width: 80px">
                     <select class="bm-select" name="type">
                       <option value="1">离散型</option>
                       <option value="2">整型</option>
                       <option value="3">实型</option>
                       <option value="4">消息型</option>
                     </select>
                   </span>
                 </div>
                 <div class="bm-input-text">
                   <span class="text"><span style="color: red">*</span>值：</span>
                   <span style="flex: 1" class="value-content">
                     <select class="bm-select" name="value">
                      <option value="0">0</option>
                      <option value="1">1</option>
                     </select>
                   </span>
                 </div>
               </div>
               <div class="bm-data-source--floor">
                   <span class="save bm-button bm-button--small bm-button--info">保存</span>
                 </div>
              </div>`
  }

  lengthFormat(text,length) {
    return text.length>length?text.substr(0,length)+"...":text
  }
}

export default DataSource;

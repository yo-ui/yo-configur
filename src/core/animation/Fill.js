import Toast from "../Toast";

/**
 * 填充
 */
class Fill {

  constructor(parent) {
    this.parent = parent;
  }

  init(content) {
    content.find('.animation-content').html('');
    let html = $(`<div><div class="bm-input-panel" style="z-index: 9999">
                     <span class="input-group">
                       <input type="text" class="form-control" name="expr" placeholder="请输入绑定数据点"/>
                       <i class="fa fa-down"></i>
                     </span>
                     <div class="panel-content">
                       <ul class="bm-action-list"></ul>
                     </div>
                   </div>
                   <div class="animation-list"></div>
               </div>`);
    if(this.parent.animation.type==31) {
      this.disperse(html);
    }else if(this.parent.animation.type==32) {
      this.analog(html);
    }else if(this.parent.animation.type==33) {
      this.disperseAlarm(html)
    }
    content.find('.animation-content').html(html);
  }

  disperseAlarm(html) {
    let that = this;
    if(that.parent.animation.category==2) {
      let area = $(`<div class="bm-area">
                      <span>报警状态</span>
                      <div class="bm-area-content"></div>
                     </div>`)
      let states = this.parent.animation.states;
      states.forEach(function (state) {
        let item = $(`<div style="display: inline-block;margin-right: 10px">
                     <span>${state.value}--></span>
                     <span>
                       <form>
                         <div class="bm-upload">
                           <img src="${state.url}">
                           <div><i class="fa fa-add" style="font-size: 20px;margin-top: -5px"></i></div>
                           <input type="file"/>
                         </div>
                       </form>
                     </span>
                     </div>`);
        area.find('.bm-area-content').append(item);
      })
      html.find('.animation-list').html(area);
    } else if(that.parent.animation.category==3) {
      let area = $(`<div class="bm-area">
                      <span>报警状态</span>
                      <div class="bm-area-content"></div>
                     </div>`)
      that.parent.animation.states.forEach(function (state) {
        let span = $(`<span style="margin-right: 10px">${state.value}->${state.text}</span>`);
        area.find('.bm-area-content').append(span);
      })
      html.find('.animation-list').html(area);
    }
  }

  disperse(html) {
    let that = this;
    if(that.parent.animation.category==1) {
      let area = $(`<div class="bm-area">
                      <span>颜色</span>
                      <div class="bm-area-content"></div>
                     </div>`)
      that.parent.animation.states.forEach(function (state) {
        let span = $(`<span style="margin-right: 10px">${state.value}->${state.text}
                      <input type="color" class="form-control" style="width: 80px" value="${state.color}"/></span>`);
        span.find('input').on('change',function () {
          state.color = $(this).val();
        })
        area.find('.bm-area-content').append(span);
      })
      html.find('.animation-list').html(area);
    } else if(that.parent.animation.category==2) {
      let area = $(`<div class="bm-area">
                      <span>状态</span>
                      <div class="bm-area-content"></div>
                     </div>`)
      let states = this.parent.animation.states;
      states.forEach(function (state) {
        let url = state.url;
        if(!state.default) {
          url = that.parent.stage.imgHost + "/" + url
        }
        let item = $(`<div style="display: inline-block;margin-right: 10px">
                     <span>${state.value}-->${state.text}</span>
                     <span>
                       <form>
                         <div class="bm-upload">
                           <img src="${url}">
                           <div class=""><i class="fa fa-add" style="font-size: 20px;margin-top: -5px"></i></div>
                           <input type="file"/>
                         </div>
                       </form>
                     </span>
                     </div>`);
        item.find('form').on('change', function () {
          let form = $(this)[0]
          let file = $(this).find('input').get(0).files[0]
          that.parent.stage.option.upload(form, file, function (url) {
            state.default = false;
            state.url = url;
            let imgUrl = that.parent.stage.imgHost + "/" + url;
            item.find('img').attr("src", imgUrl);
          })
        });
        area.find('.bm-area-content').append(item);
      })
      html.find('.animation-list').html(area);
    } else if(that.parent.animation.category==3) {
      let area = $(`<div class="bm-area">
                      <span>状态</span>
                      <div class="bm-area-content"></div>
                     </div>`)
      that.parent.animation.states.forEach(function (state) {
        let span = $(`<span style="margin-right: 10px">${state.value}->${state.text}</span>`);
        area.find('.bm-area-content').append(span);
      })
      html.find('.animation-list').html(area);
    }
  }

  analog(html) {
    let that = this;
    if(that.parent.animation.category==1) {
      let area = $(`<div class="bm-area">
                      <span>值配置</span>
                      <div class="bm-area-content"></div>
                     </div>`)
      this.parent.animation.states.forEach(function (state, index) {
        let breakpoint = $(`<div class="bm-breakpoint">
                                   <input type="text" class="form-control" name="value" value="${state.value}"/>
                                 <div>
                                  <span>
                                     <input type="color" class="form-control" name="color" style="width: 80px" value="${state.color}"/>
                                  </span>
                               </div>
                             </div>`)
        breakpoint.data("index", index);
        breakpoint.find('[name=value]').on('input propertyChange', function () {
          let value = $(this).val();
          if (/^[0-9]*$/.test(value)) {
            if (value < 0 || value > 9999) {
              Toast.alert("值只能在0-9999之间！")
              $(this).val(value.substr(0, value.length - 1))
              return;
            }
            state.value = value;
          } else {
            $(this).val(value.substr(0, value.length - 1))
          }
        });

        breakpoint.find('[name=color]').on('change', function () {
          state.color = $(this).val();
        });
        area.find('.bm-area-content').append(breakpoint);
      })
      html.find('.animation-list').html(area);
    }else if(that.parent.animation.category==2) {
      let area = $(`<div class="bm-area">
                      <span>值配置</span>
                      <div class="bm-area-content"></div>
                     </div>`)
      this.parent.animation.states.forEach(function (state, index) {
        let url = state.url;
        if(!state.default) {
          url = that.parent.stage.imgHost + "/" + url
        }
        let breakpoint = $(`<div class="bm-breakpoint">
                                 <input type="number" name="value" class="form-control" value="${state.value}"/>
                                 <div>
                                    <span>
                                       <form>
                                         <div class="bm-upload">
                                           <img src="${url}">
                                           <div class="default"><i class="fa fa-add" style="font-size: 20px;margin-top: -5px"></i></div>
                                           <input type="file" name="file"/>
                                         </div>
                                       </form>
                                     </span>
                                  </div>
                             </div>`)
        breakpoint.data("index", index);
        breakpoint.find('[name=value]').on('input propertyChange', function () {
          let value = $(this).val();
          if (/^[0-9]*$/.test(value)) {
            if (value < 0 || value > 9999) {
              Toast.alert("值只能在0-9999之间！")
              $(this).val(value.substr(0, value.length - 1))
              return;
            }
            state.value = value;
          } else {
            $(this).val(value.substr(0, value.length - 1))
          }
        });

        breakpoint.find('[name=value]').on('blur', function () {
          let index = $(this).parent().data("index");
          let value = $(this).val();
          if (value) {
            if (index > 0 && Number(value) <= that.parent.animation.states[index - 1].value) {
              $(this).focus();
              Toast.alert("值必须大于等于前值！")
              $(this).val("")
              return;
            } else {
              state.value = value;
            }
          }
        });
        breakpoint.find('form').on('change', function () {
          let form = $(this)[0]
          let file = $(this).find('[name=file]').get(0).files[0]
          that.parent.stage.option.upload(form, file, function (url) {
            state.default = false;
            state.url = url;
            let imgUrl = that.parent.stage.imgHost + "/" + url;
            breakpoint.find('img').attr("src", imgUrl);
          })
        });
        area.find('.bm-area-content').append(breakpoint);
      })
      html.find('.animation-list').html(area);
    }
  }
}

export default Fill;

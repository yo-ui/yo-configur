/**
 *
 */
class Animation {

  constructor(stage) {
    this.stage = stage;
    this.points = [];
    this.getDevice(stage);
  }

  init() {
    let that = this;
    let content = $(`<div class="animation">
                        <div style="margin: 10px 0px">
                          <select class="a-type bm-select" style="width: 120px"></select>
                          <div style="width: 60px;vertical-align: middle;margin-left: 10px" class="reset bm-button bm-button--small bm-button--info">重置</div>                      
                        </div>
                        <div class="animation-content" style="padding: 5px;border: 1px solid #ddd;min-height: 40px"></div>
                      </div>`)
    this.animations = [...that.stage.property.config.animations];
    this.animations.forEach(function (animation,index) {
      let option = $(`<option>${animation.text}</option>`)
      option.val(animation.type);
      content.find('.a-type').append(option)
      if(index==0) {
        that.createAnimation(content,animation.type);
      }
    })
    content.find('.a-type').on('change',function () {
      that.createAnimation(content,$(this).val());
    })

    content.find('.reset').on('click', function () {
      that.reset();
    });

    that.stage.panel.init("动画链接",content,600);
    that.stage.panel.show();
    that.stage.panel.confirm(function () {
      that.stage.property.config.animations = that.animations;
    })
  }

  createAnimation(content,type) {
    let that = this;
    content.find('.animation-content').html('');
    this.animation = {};
    let animations = that.stage.property.config.animations;
    animations.forEach(function (data) {
      if(data.type==type) {
        that.animation = data;
      }
    })
    if(type==91) {

    }
  }

  updateAnimation(animation) {
    this.animations.forEach(function (data) {
      if(data.type==animation.type) {
        data = animation;
      }
    })
  }

  updateIds(ids,list) {
    let dataList = [...list];
    ids.forEach(function (id) {
      list.forEach(function (_id,index) {
        if(id==_id) {
          dataList.splice(index,1)
        }
      })
    })
    return dataList;
  }

  createList(html,dataList) {
    let that = this;
    dataList.forEach(function (data) {
      let li = $(`<li>${data.name}</li>`)
      if(that.animation.ids) {
        that.animation.ids.forEach(function (id) {
          if(data.id==id) {
            li.addClass('active')
          }
        })
      }
      li.data("id", data.id)
      li.on('click',function () {
        let ids = that.animation.ids;
        let id = $(this).data("id");
        if($(this).hasClass('active')) {
          $(this).removeClass('active')
          ids = that.updateIds([id],ids)
        }else {
          $(this).addClass('active')
          that.animation.ids.push(id);
        }
        that.animation.ids = ids;
        that.updateAnimation(that.animation);
      })
      html.find('.bm-action-list').append(li)
    })
  }

  createPoint(points) {
    let that = this;
    let panel = $('.bm-input-panel');
    panel.find('ul').html('');
    panel.find('.content').show();
    if(points.length>0) {
      points.forEach(function (point,index) {
        let li = $(`<li>${point.name}(${point.id})</li>`);
        li.data("point", point.id)
        li.on('click',function () {
          panel.find('input').val($(this).data('point'));
          panel.find('.content').hide();
          that.animation.expr = $(this).data('point')
        })
        if(index==0) {
          li.addClass('active')
        }
        panel.find('ul').append(li);
      });
      panel.keydown(function (e) {
        if(e.keyCode==13) {
          $('.bm-input-panel li').each(function () {
            if($(this).hasClass('active')) {
              $(this).trigger('click')
            }
          });
        }else if(e.keyCode==38) {
          let element;
          let newIndex = 0;
          $('.bm-input-panel li').each(function (index) {
            if($(this).hasClass('active')) {
              element = $(this)
              newIndex = index;
            }
          });
          if(newIndex>0) {
            element.removeClass('active')
            element.prev().addClass('active')
          }
        }else if(e.keyCode==40) {
          let element;
          let newIndex = 0;
          $('.bm-input-panel li').each(function (index) {
            if($(this).hasClass('active')) {
              element = $(this)
              newIndex = index;
            }
          });
          if(newIndex<$('.bm-input-panel li').length-1) {
            element.removeClass('active')
            element.next().addClass('active')
          }
        }
      })
    }else {
      panel.find('.content').hide();
    }
  }

  createState(html) {
    let that = this;
    that.animation.states.forEach(function (state) {
      let url = state.url;
      if(!state.default) {
        url = that.stage.imgHost+"/"+state.url;
      }
      let li = $(`<li>
                     <span>${state.text}：</span>                
                   </li>`);
      if(!that.animation.isSwitch) {
        let  input = $(`<input class="form-control" type="number" name="value" min="0" max="10" value="${state.value}" style="width: 40px">`)
        input.on('change',function () {
          state.value = $(this).val();
        })
        li.append(input);
      }else {
        let value = $(`<span>${state.value}</span>`)
        li.append(value);
      }
      let upload = $(`<span>
                           <form>
                             <div class="bm-upload">
                               <img src="${url}">
                               <div><i class="fa fa-add" style="font-size: 20px;margin-top: -5px"></i></div>
                               <input type="file"/>
                             </div>
                           </form>
                        </span>`);

      upload.find('form').on('change',function() {
        let form = $(this)[0]
        let file = $(this).find('input').get(0).files[0]
        that.stage.option.upload(form,file,function(url) {
          that.animation.default = false;
          let imgUrl = that.stage.imgHost+"/"+url;
          state.url = url;
          upload.find('img').attr("src", imgUrl);
          that.refresh();
        })
      });
      li.append(upload);
      html.find('.bm-content-list').append(li);
    })
  }
}

export default Animation;

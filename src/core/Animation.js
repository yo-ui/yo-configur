import Keydown from "./Keydown";

/**
 *
 */
class Animation {

   constructor(stage) {
     this.stage = stage;
     this.points = [];
     this.getDevice(stage);
   }

   getDevice(stage) {
     let that = this;
     let deviceId = stage.property.config.bindData.deviceId;
     if(deviceId) {
       stage.option.getDevice(deviceId,function (device) {
         that.points = device.points;
       })
     }
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

     that.stage.panel.init("动画链接",content,500);
     that.stage.panel.show();
     that.stage.panel.confirm(function () {
       that.stage.property.config.animations = that.animations;
     })
  }

  reset() {
     if(this.animation.type==91) {
       this.animation.expr = "";
       $('.animation-content').find('[name=expr]').val('');
     } else if(this.animation.type==92) {
       this.animation.expr = "";
       $('.animation-content').find('[name=expr]').val('');
     }
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
    if(type==16) {
      let html = $(`<div>
                       <span style="line-height: 32px;font-size: 14px;margin-bottom: 1px">变量名：</span>
                       <input type="text" class="form-control" name="expr" placeholder="请输入变量"/>
                       <div class="type-action" style="border: 1px solid #ddd;padding: 5px;margin-top: 10px">
                         <input name="type" type="radio"><span style="vertical-align: top">&nbsp;直接</span>
                         <input name="type" type="radio"><span style="vertical-align: top">&nbsp;取反</span>
                         <input name="type" type="radio"><span style="vertical-align: top">&nbsp;切换</span>
                       </div>
                     </div>`)
      html.find('[name=expr]').val(that.animation.expr);
      content.find('.animation-content').html(html);
      html.find('.type-action').children('input').each(function (index) {
        $(this).data("value", index+1)
        if(that.animation.value==index+1) {
          $(this).attr("checked","checked")
        }
        $(this).on('click',function () {
          let value = $(this).data("value");
          that.animation.value = value;
        });
      })

      html.find('[name=expr]').on('input propertyChange',function () {
        that.animation.expr = $(this).val();
      });
    } else if(type==18||type==19){
      let html = $(`<div style="height: 100px;overflow: auto">
                       <ul class="bm-action-list"></ul>
                     </div>`)
      this.stage.capacity.forEach(function (c) {
        if(c.className!="TextButton") {
          let li = $(`<li>${c.name}</li>`)
          if(that.animation.ids) {
            that.animation.ids.forEach(function (id) {
              if(c.id==id) {
                li.addClass('active')
              }
            })
          }
          li.data("id", c.id)
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
            that.updateAnimation(that.animation,type);
          })
          html.find('.bm-action-list').append(li);
        }
      })
      content.find('.animation-content').html(html);
    }else if(type==31) {
    	let html = $(`<span style="line-height: 32px;font-size: 14px;margin-bottom: 1px">点位</span>
	                   <div class="bm-input-panel" style="z-index: 3">
	                     <input type="text" class="form-control" name="expr"/>
	                     <div class="content">
	                       <ul></ul>
	                     </div>
	                   </div>`)

    	if(that.animation.category==3) {
    		html = $(`<span style="line-height: 32px;font-size: 14px;margin-bottom: 1px">点位</span>
	                   <div class="bm-input-panel" style="z-index: 3">
	                     <input type="text" class="form-control" name="expr"/>
	                     <div class="content">
	                       <ul></ul>
	                     </div>
	                   </div>
	                   <div>
	                     <div style="border: 1px solid #ddd;padding: 5px;margin-top: 10px">
	                       <span style="line-height: 24px;vertical-align: top;">0:关</span>&nbsp;&nbsp;
	                       <span style="line-height: 24px;vertical-align: top;">1:开</span>
	                     </div>
	                   </div>`)
    	}

    	html.find('[name=expr]').val(that.animation.expr);
    	html.find('[name=expr]').on('input propertyChange',function () {
	        that.animation.expr = $(this).val();
	    });
    	content.find('.animation-content').html(html);
    }else if(type==32) {
    	let html = $(`<span style="line-height: 32px;font-size: 14px;margin-bottom: 1px">点位</span>
	                   <div class="bm-input-panel" style="z-index: 3">
	                     <input type="text" class="form-control" name="expr"/>
	                     <div class="content">
	                       <ul></ul>
	                     </div>
	                   </div>`)

    	if(that.animation.category==3) {
    		html = $(`<span style="line-height: 32px;font-size: 14px;margin-bottom: 1px">点位</span>
	                   <div class="bm-input-panel" style="z-index: 3">
	                     <input type="text" class="form-control" name="expr"/>
	                     <div class="content">
	                       <ul></ul>
	                     </div>
	                   </div>
	                   <div>
	                     <div style="border: 1px solid #ddd;padding: 5px;margin-top: 10px">
	                       <span style="line-height: 24px;vertical-align: top;">0:关闭:</span>&nbsp;&nbsp;
	                       <span style="line-height: 24px;vertical-align: top;">1:开启</span>&nbsp;&nbsp;
	                       <span style="line-height: 24px;vertical-align: top;">2:报警</span>
	                     </div>
	                   </div>`)
    	}

    	html.find('[name=expr]').val(that.animation.expr);
    	html.find('[name=expr]').on('input propertyChange',function () {
	        that.animation.expr = $(this).val();
	    });
    	content.find('.animation-content').html(html);

    }else if(type==91) {
      let html = $(`<div>
                       <span style="line-height: 32px;font-size: 14px;margin-bottom: 1px">点位</span>
                       <select class="bm-select" name="expr"></select>
                     </div>`);
      content.find('.animation-content').html(html);
      let deviceId = that.stage.property.config.bindData.deviceId;
      if(deviceId) {
        that.stage.option.getDevice(deviceId,function (device) {
          device.points.forEach(function (point) {
            let option = $(`<option>${point.name}</option>`)
            option.val(point.id);
            html.find('[name=expr]').append(option);
          })
          html.find('[name=expr]').val(that.animation.expr);
          html.find('[name=expr]').on('change',function () {
            that.animation.expr = $(this).val();
            that.updateAnimation(that.animation,type);
          });
        })
      }
    }else if(type==92) {//值显示-字符串
      let html = $(`<span style="line-height: 32px;font-size: 14px;margin-bottom: 1px">表达式</span>
                   <div class="bm-input-panel" style="z-index: 3">
                     <input type="text" class="form-control" name="expr"/>
                     <div class="content">
                       <ul></ul>
                     </div>
                   </div>`)
      content.find('.animation-content').html(html);
      let deviceId = that.stage.property.config.bindData.deviceId;
      if(deviceId) {
        that.stage.option.getDevice(deviceId,function (device) {
          html.find('[name=expr]').val(that.animation.expr);
          html.find('[name=expr]').on('input propertyChange',function () {
            let value = $(this).val();
            that.animation.expr = value;
            let dataList = []
            device.points.forEach(function (point) {
              if(point.name.indexOf(value)!=-1||
                point.id.indexOf(value)!=-1) {
                dataList.push(point);
              }
            })
            if(value) {
              that.createPoint(dataList);
            }else {
              that.createPoint(device.points);
            }
          });

          html.find('.content').on('mouseleave',function (e) {
            $(this).hide();
          });

        })
      }
    }
  }

  updateAnimation(animation,type) {
    this.animations.forEach(function (data) {
      if(data.type==type) {
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
}

export default Animation;

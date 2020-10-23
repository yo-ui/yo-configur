import Panel from "../Panel"
import Toast from "../Toast";
import Trigger from "./Trigger";
import Group from "./Group";
import Fill from "./Fill";
import Visuality from "./Visuality"
import Flicker from "./Flicker";
import FillRatio from "./FillRatio"
import ValueDisplay from "./ValueDisplay"
import Location from "./Location"
import Size from "./Size"
import TextColor from "./TextColor"

/**
 *
 */
class Animation {

   constructor(stage) {
     this.stage = stage;
     this.points = [];
     this.isShow = true;
   }

   init() {
     let that = this;
     let deviceId = that.stage.property.config.bindData.deviceId;
     if(deviceId) {
       this.points = [];
       that.stage.option.getDevice(deviceId,function (device) {
         device.points.forEach(function (point) {
           let data = {}
           data.text = point.text;
           data.name = point.name;
           data.key = point.id;
           that.points.push(data);
         })
         that.action();
       })
     }else {
       that.action();
     }
  }

  action() {
    let that = this;
    let content = $(`<div class="animation">
                        <div style="margin: 10px 0px">
                          <select class="animation-type bm-select bm-select-panel--lg" style="width: 150px"></select>
                          <!--<div style="width: 60px;vertical-align: middle;margin-left: 10px" class="reset bm-button bm-button--small bm-button--info">重置</div>-->                      
                        </div>
                        <div class="animation-content" style="padding: 5px;border: 1px solid #ddd;">                          
                        </div>
                      </div>`)
    this.animations = JSON.parse(JSON.stringify(that.stage.property.config.animations))
    this.animations.forEach(function (animation,index) {
      let option = $(`<option>${animation.text}</option>`)
      option.val(animation.type);
      content.find('.animation-type').append(option)
      if(index==0) {
        that.createAnimation(content,animation.type);
      }
    })
    content.find('.animation-type').on('change',function () {
      content.find('.animation-content').html('');
      that.createAnimation(content,$(this).val());
    })


    content.find('.reset').on('click', function () {
      that.reset();
    });

    let panel = new Panel(this.stage);
    panel.init("动画链接",content,700);
    panel.show();
    panel.confirm(function () {
      that.stage.property.config.animations = that.animations;
      that.stage.property.refresh();
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
    this.animation = {};
    let animations = that.animations;
    animations.forEach(function (data) {
      if(data.type==type) {
        that.animation = data;
      }
    })
    if(type==16) {
      new Trigger(this).init(content);
    } else if(type==20) {
      new Group(this).init(content);
    }else if(type==31||type==32||type==33) {
      new Fill(this).init(content);
    }else if(type==41||type==42) {
      new TextColor(this).init(content)
    }else if(type==51||type==52) {
      new Size(this).init(content)
    }else if(type==61||type==62) {
      new Location(this).init(content)
    }else if(type==71||type==72) {
      new FillRatio(this).init(content);
    }else if(type==81) {
      new Visuality(this).init(content);
    }else if(type==82) {
      new Flicker(this).init(content);
    }else if(type==90||type==91||type==92) {
      new ValueDisplay(this).init(content)
    }

    content.find('[name=expr]').val(this.animation.expr);
    content.find('[name=expr]').on('click',function () {
      let dataList = [...that.points,...that.stage.variableList]
      if(dataList.length>0) {
        that.createPoint(dataList);
        $(this).parent().next().show();
      }
    });

    content.find('[name=expr]').on('input propertyChange',function () {
      that.animation.expr = $(this).val();
      let dataList = [...that.points,...that.stage.variableList]
      if(dataList.length>0) {
        that.createPoint(dataList);
        $(this).parent().next().show();
      }
    });

    content.find('[name=expr]').on('blur',function () {
      if(that.isShow) {
        $(this).parent().next().hide();
      }
    });

    content.find('.panel-content').on('mouseleave',function (e) {
      $(this).hide();
      that.isShow = true;
    });

    content.find('.panel-content').on('mousemove',function (e) {
      that.isShow = false;
    });
  }

  createPoint(dataList) {
    let that = this;
    let panel = $('.bm-input-panel');
    panel.find('ul').html('');
    panel.find('.panel-content').show();
    if(dataList.length>0) {
      dataList.forEach(function (data,index) {
        let li = $(`<li>${data.name}(${data.key})</li>`);
        li.data("key", data.key)
        li.on('click',function (e) {
          panel.find('input').val($(this).data('key'));
          that.animation.expr = $(this).data('key')
          panel.find('.panel-content').hide();
          e.preventDefault();
          e.stopPropagation();
        })
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
      panel.find('.panel-content').hide();
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
}

export default Animation;

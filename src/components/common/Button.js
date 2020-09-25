import Spirit from './../../core/Spirit'
import Toast from './../../core/Toast'

/**
 * 按钮
 */
class Button extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.name = "按钮";
	    this.className = "Button";
	    this.width = width;
	    this.height = 30;
	    this.minWidth = 30;
	    this.moveType = 0;
	    this.linkage = false;
	    this.isMove = true;
      this.isBind = true;
	    this.zIndex = 2;
      this.config = {
        bindData: {orgId: '', deviceId: '', devicePoint: ''},text:'按钮',
        animation: {type: 1,text: '',name: '',ids: []},
        groupId: "",
      }
      this.isGroup = true;
	}

	template(){
		let html = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">		                
                  <div style="
                    line-height: 28px;
                    height: ${this.height}px;
                    width: ${this.width}px;">
                    <span class="button button-raised button-primary button-pill" style="font-size: 13px;user-select: none">${this.config.text}</span>
                  </div>	
                </div>`)
		return html;
	}

  refresh() {
    $('#'+this.id).find('span').text(this.config.text);
  }

	toJson() {
		let json = {
			className: this.className,
			moveType: this.moveType,
			minWidth: this.minWidth,
			isMove: this.isMove,
			zIndex: this.zIndex
		};
		return Object.assign(super.toJson(),json);
	}

  action(value) {
    let that = this;
    let dataList = this.stage.capacity;
    if(dataList.length>0) {
      let ul = $(`<ul class="bm-list" style="height: 100%;overflow: auto;padding-right: 1px"></ul>`)
      dataList.forEach(function(data) {
          if(data.className!="Button") {
            let li =  $(`<li>${data.name}</li>`)
            li.data('id', data.id);
            li.data('name', data.name);
            if(value==that.config.animation.type) {
              let ids = that.config.animation.ids;
              ids.forEach(function(id) {
                if(id==data.id) {
                  li.addClass("active");
                }
              })
            }
            li.on('click',function() {
              if($(this).hasClass("active")) {
                $(this).removeClass("active");
              }else {
                $(this).addClass("active");
              }
            });
            ul.append(li);
          }
      });
      that.stage.panel.init("组件列表",ul,450,240)
      that.stage.panel.show();
    }else {
      Toast.alert("无联动组件！");
    }
    that.stage.panel.confirm(function() {
      let ids = [];
      $('.bm-configur-panel .bm-list > li').each(function () {
        if($(this).hasClass("active")) {
          let id = $(this).data("id");
          ids.push(id);
        }
      });
      that.config.animation.ids = ids;
    })
    that.config.animation.type = value;
  }

  initialize() {
	  let that = this;
	  $('#'+this.id).on('click',function () {
      let type = that.config.animation.type;
      if(type==1) {
        that.show();
      }else if(type==2) {
        that.hide();
      }
    })
  }

  show() {
    let ids = this.config.animation.ids;
    this.stage.capacity.forEach(function(data) {
      ids.forEach(function(id) {
        if(id==data.id) {
          data.show();
        }
      })
    })
  }

  hide() {
    let ids = this.config.animation.ids;
    this.stage.capacity.forEach(function(data) {
      ids.forEach(function(id) {
        if(id==data.id) {
          data.hide();
        }
      })
    })
  }

  animations() {
    $('#configur_property').find('.bm-action-list').html('');
    let id = this.config.animation.id;
    let name = this.config.animation.name;
    let text = this.config.animation.text;
    if(id) {
      let li = $(`<li>${text}：${name}</li>`)
      $('#configur_property').find('.bm-action-list').append(li);
    }
  }

	renderer() {
    let that = this;
    super.renderer();
    let html = ` <div class="bm-tree">文本</div>
                  <div class="bm-style">
                    <div class="text">内容：</div>    
                    <div class="value">
                      <input type="text" class="text form-control" value="${this.config.text}" maxlength="32" title="按钮文本" />
                    </div>                      
                  </div>
                <div class="bm-tree">动画</div>
                <div class="bm-cell no-hover">
                  <div class="bm-cell__title">
                    <select class="bm-select" style="display: inline-block;width: 70%">
                      <option value="1">显示</option>
                      <option value="2">隐藏</option>
                    </select>
                    <span class="bm-active button button-raised button-primary button-pill" style="font-size: 13px">绑定</span>
                    <ul class="bm-action-list"></ul>
                  </div>          						
                </div>`;
    $('#configur_property').append(html);
    let select = $('#configur_property').find('.bm-select');
    select.val(that.config.animation.type);

    let active = $('#configur_property').find('.bm-active');
    active.on('click',function () {
      let value = select.val();
      that.action(value);
    });

    that.animations();
    let input = $('#configur_property').find('.text');
    input.on('input propertyChange',function () {
      let value = $(this).val();
      that.update(value);
    })
    input.on('blur',function () {
      let value = $(this).val();
      if(value=="") {
        let text = "文本";
        $(this).val(text)
        that.update(text);
      }
    })
	}

  update(text) {
    let property = this.stage.property;
    property.config.text = text;
    $('#'+property.id).find('span').text(text);
    let html = $('#'+property.id).find('div').html();
    $('#temp_value').html(html);
    let width = $('#temp_value').width()+2;
    $('.resize-panel').css({width})
    $('#'+property.id).find('div').css({width});
    property.width = width-1;
    this.refresh();
  }
}

export default Button;

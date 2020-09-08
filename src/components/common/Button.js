import Spirit from '@/core/Spirit'
import Toast from '@/core/Toast'

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
        animation: {type: 1,text: '',name: '',id: ''},
        groupId: ""
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

  action(value,text) {
    let that = this;
    $('.bm-configur-panel__header span').text('组件列表');
    $('.bm-configur-panel__body').css({width:450,height:240});
    let dataList = this.stage.capacity;
    if(dataList.length>0) {
      $('.bm-configur-panel').show();
      let ul = $(`<ul class="bm-list" style="height: 100%;overflow: auto;padding-right: 1px"></ul>`)
      dataList.forEach(function (data) {
        if(data.isLink) {
          let li =  $(`<li>${data.title}</li>`)
          li.data('id',data.id);
          li.data('name',data.title);
          if(data.id==that.config.animation.id&&
            value==that.config.animation.type) {
            li.addClass('active');
          }
          li.on('click',function () {
            if($(this).hasClass('active')) {
              that.config.animation.type = 1;
              that.config.animation.id = "";
              that.config.animation.name = "";
              that.config.animation.text = "";
              let select = $('#configur_property').find('.bm-select');
              select.val(1);
            }else {
              $(this).addClass('active');
              $(this).siblings().each(function () {
                $(this).removeClass('active');
              })
            }
          });
          ul.append(li);
        }
      });
      $('.bm-configur-panel__content').html(ul);
    }else {
      Toast.alert("无联动组件！");
    }
    $('.bm-configur-panel__close').on('click',function () {
      $('.bm-configur-panel').hide();
    });

    $('.bm-configur-panel__floor .close').on('click',function () {
      $('.bm-configur-panel').hide();
    });

    $('.bm-configur-panel__floor .confirm').on('click',function () {
      $('.bm-configur-panel .bm-list > li').each(function () {
        if($(this).hasClass('active')) {
          let id = $(this).data('id');
          let name = $(this).data('name');
          that.config.animation.id = id;
          that.config.animation.name = name;
          that.config.animation.text = text;
          that.config.animation.type = value;
          that.animations();
          $('.bm-configur-panel').hide();
        }else {
          Toast.alert("请选择组件！");
        }
      });
    });
  }

  initialize() {
	  let that = this;
	  $('#'+this.id).on('click',function () {
      let type = that.config.animation.type;
      if(type==1) {
        that.show();
        if(that.config.groupId) {
          that.stage.capacity.forEach(function (data) {
            if(that.config.groupId==data.config.groupId&&that.id!=data.id) {
              data.hide();
            }
          })
        }
      }else if(type==2) {
        that.hide();
      }
    })
  }

  show() {
    let id = this.config.animation.id;
    let selected;
    this.stage.capacity.forEach(function (data) {
      if(id==data.id) {
        selected = data;
      }
    })
    if(selected) {
      selected.show();
    }
  }

  hide() {
    let id = this.config.animation.id;
    let selected;
    this.stage.capacity.forEach(function (data) {
      if(id==data.id) {
        selected = data;
      }
    })
    if(selected) {
      selected.hide();
    }
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
    let html = `<div class="bm-cell no-hover">
                  <div class="bm-cell__title">
                    <div>文本</div>
                    <input type="text" class="text form-control" value="${this.config.text}" maxlength="32" title="按钮文本" />
                  </div>              						
                </div>
                <div class="bm-cell no-hover">
                  <div class="bm-cell__title">
                    <div>动作</div>
                    <div>
                      <select class="bm-select" style="display: inline-block;width: 70%">
                        <option value="1">显示</option>
                        <option value="2">隐藏</option>
                      </select>
                      <span class="bm-active button button-raised button-primary button-pill" style="font-size: 13px">绑定</span>
                    </div>
                    <ul class="bm-action-list"></ul>
                  </div>          						
                </div>`;
    $('#configur_property').append(html);
    let select = $('#configur_property').find('.bm-select');
    select.val(that.config.animation.type);

    let active = $('#configur_property').find('.bm-active');
    active.on('click',function () {
      let value = select.val();
      let text = select.find("option:selected").text();
      that.action(value,text);
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

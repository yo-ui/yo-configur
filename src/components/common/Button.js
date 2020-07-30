import Spirit from '@/core/Spirit.js'
import Video from '@/core/Video.js'

/**
 * 按钮
 */
class Button extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.title = "按钮";
	    this.className = "Button";
	    this.width = width;
	    this.height = 30;
	    this.minWidth = 50;
	    this.moveType = 0;
	    this.linkage = false;
	    this.isMove = true;
      this.isBind = true;
	    this.zIndex = 0;
      this.isAnimation = true;
      this.animationList = [
        {name: '触发链接', dataList: [{type: 12,name: '联动'}]}
      ]
      this.config = {
        bindData: {orgId: '', deviceId: '', devicePoint: ''},text:'控制',
        animation: {event:'click',id: ""}
      }
	}

	template(){
		let html = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg">		                
                  <div style="
                    line-height: 28px;
                    height: ${this.height}px;
                    width: ${this.width}px;">
                    <span class="button button-raised button-primary button-pill" style="font-size: 13px">${this.config.text}</span>
                  </div>	
                </div>`)
		return html;
	}

  refresh() {
    $('#'+this.id).find('span').text(this.config.text);
  }

	toJson() {
		let json = {
			title: this.title,
			className: this.className,
			moveType: this.moveType,
			minWidth: this.minWidth,
			isMove: this.isMove,
			zIndex: this.zIndex
		};
		return Object.assign(super.toJson(),json);
	}

  animation() {
    let that = this;
    $('.bm-config-panel__content').html('');
    let animationList = this.animationList;
    that.action(animationList,function (value) {
      if(value==12) {
        let dataList = [];
        if(that.stage.capacity.length>0) {
          that.stage.capacity.forEach(function (data) {
            if(data.isLink) {
              dataList.push(data)
            }
          })
        }
        if(dataList.length>0) {
          $('.bm-config-panel__content .text').text("关联组件列表");
          let ul = $(`<ul class="conf-list"></ul>`)
          dataList.forEach(function (data) {
            console.log(data)
            let li =  $(`<li><input type="checkbox" name="id"/>${data.title}(${data.id})</li>`)
            li.find('input').data("id", data.id);
            li.find('input').on("click", function () {
              $(this).parent().siblings().each(function () {
                $(this).find("input").prop('checked',false);
              });
              if($(this).is(":checked")) {
                that.config.animation.id = $(this).data("id");
              }else {
                that.config.animation.id = "";
              }
            });
            ul.append(li);
          });
          $('.bm-config-panel__content .content').html(ul);
        }else {
          $('.bm-config-panel').hide();
        }
      }
    });
  }

  initialize(device,config) {
    let that = this;
    let animation = this.config.animation;
    $('#'+that.id).on(animation.event,function () {
      that.event(device,config,animation.id);
    });
  }

  event(device,config,id) {
    let that = this;
    that.stage.capacity.forEach(function (data) {
      if(data.id==id) {
        data.initialize(device,config);
      }
    })
  }

	renderer() {
    let that = this;
    super.renderer();
    let html = `<div class="bm-cell no-hover">
                  <div class="bm-cell__title">
                      <div>文本</div>
                    <input type="text" class="text form-control" value="${this.config.text}" maxlength="32" title="按钮文本" />
                  </div>							
                </div>`;
    $('#configur_property').append(html);
    let type = $('#configur_property').find('[name=type]');
    type.on('change',function () {
      that.config.type = $(this).val();
    })
    type.val(that.config.type);
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
    $('#temp_value').html($('#'+property.id).find('div').html());
    let width = $('#temp_value').width()+2;
    $('.resize-panel').css({width})
    $('#'+property.id).find('div').css({width});
    property.width = width-2;
    this.refresh();
  }
}

export default Button;

import Spirit from './../../core/Spirit'
import Toast from './../../core/Toast'

/**
 * 按钮
 */
class TextButton extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.name = "按钮";
	    this.className = "TextButton";
	    this.width = width;
	    this.height = 30;
	    this.minWidth = 30;
	    this.moveType = 0;
	    this.linkage = false;
	    this.isMove = true;
        this.isBind = true;
	    this.zIndex = 2;
	    this.isAnimation = true;
        this.config = {
        bindData: {deviceId: ''},
        font:{text: '文本',size: 11,color: '#fff'},
        background: {color: '#0075E7',radius: 5},
        padding: {left: 5,top: 0,right: 5,bottom: 0},
        animations: [{type: 16,text: '触发按钮->离散',expr: '',value: 1},
                     {type: 18,text: '触发按钮->显示',ids: []},
                     {type: 19,text: '触发按钮->隐藏',ids: []},
                     {type: 20,text: '触发按钮->组合',ids: [],color:''}]
      }
      this.isGroup = true;
	}

	template(){
		let html = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">		                
                  <div style="
                    line-height: ${this.height}px;
                    height: ${this.height}px;
                    width: ${this.width}px;">
                    <span class="bm-button" style="
                    padding-left: ${this.config.padding.left}px;
                    padding-top: ${this.config.padding.top}px;
                    padding-right: ${this.config.padding.right}px;
                    padding-bottom: ${this.config.padding.bottom}px;
                    font-size: ${this.config.font.size}px;
                    color: ${this.config.font.color};
                    border-radius: ${this.config.background.radius}px;
                    background-color: ${this.config.background.color};
                    user-select: none">${this.config.font.text}</span>
                  </div>	
                </div>`)
		return html;
	}

  refresh() {
    $('#'+this.id).find('span').text(this.config.font.text);
    $('#'+this.id).css(
      {'font-size': this.config.font.size+"px"},
      {'color': this.config.font.color},
      {'border-radius': this.config.background.radius+"px"},
      {'background-color': this.config.background.color},
    )
  }

  toJson() {
	  let json = {
		  className: this.className,
		  moveType: this.moveType,
		  minWidth: this.minWidth,
		  isMove: this.isMove,
		  zIndex: this.zIndex
	  };
	  return Object.assign(super.toJson(), json);
  }

  initialize() {
	  let that = this;
	  let animations = that.config.animations;
	  $('#'+this.id).on('click',function () {
	      animations.forEach(function (animation) {
	        if(animation.type==16) {
	          that.motion(animation);
	        } else if(animation.type==18) {
	          that.show(animation.ids);
	        }else if(animation.type==19) {
	          that.hide(animation.ids);
	        }
	      })
	  })
  }

  motion(animation) {
  	let that = this;
  	if(animation.value==1) {
  		let variable = that.stage.getVariable(animation.expr);

  	}else if(animation.value==2) {
  		let variable = that.stage.getVariable(animation.expr);
  		let data = Object.assign({}, variable);
  		data.value = variable.value==0?1:0;

  	}else if(animation.value==3) {
  		let data = that.stage.getVariable(animation.expr);
  		data.value = data.value==0?1:0;

  	}
  }

  show(ids) {
    this.stage.capacity.forEach(function(data) {
      ids.forEach(function(id) {
        if(id==data.id) {
          data.show();
        }
      })
    })
  }

  hide(ids) {
    this.stage.capacity.forEach(function(data) {
      ids.forEach(function(id) {
        if(id==data.id) {
          data.hide();
        }
      })
    })
  }

  renderer() {
    let that = this;
    super.renderer();
    let html = $(`<div class="bm-tree">文本</div>
                  <div class="bm-style">
                    <div class="text">内容：</div>    
                    <div class="value">
                      <input type="text" class="text form-control" value="${this.config.font.text}" maxlength="32" title="按钮文本" />
                    </div>                      
                  </div>`);
    $('#configur_property').append(html);

    let input = html.find('.text');
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
    property.config.font.text = text;
    $('#'+property.id).find('span').text(text);
    let html = $('#'+property.id).find('div').html();
    $('#temp_value').html(html);
    let width = $('#temp_value').width()+2;
    $('.resize-panel').css({width})
    $('#'+property.id).find('div').css({width});
    property.width = width;
    this.refresh();
  }
}

export default TextButton;

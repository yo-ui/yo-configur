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
	    this.height = height;
	    this.minWidth = 50;
	    this.moveType = 0;
	    this.linkage = false;
	    this.isMove = true;
      this.isPanel = true;
      this.isBind = true;
	    this.zIndex = 0;
	    this.config = {bindData: {organizId:'',deviceId:'',devicePoint:''},text:'控制',type:1}
	}

	template(){
		let div = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg">		                
		        <div style="
			        line-height: ${this.height-2}px;
			        height: ${this.height-2}px;
              width: ${this.width}px;">
			        <span class="button button-raised button-primary button-pill" style="font-size: 13px">${this.config.text}</span>
			      </div>	
		        </div>`)
		return div;
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

  viewPanel(device) {
	  let that = this;
	  if(this.config.type==1) {
      that.point = {id:'',value:''}
      if(device.points) {
        device.points.forEach(function(data) {
          if(data.id=="SwSts") {
            that.point.id = data.id;
            that.point.value = data.value;
          }
        });
      }
      that.stage.password.show();
      that.stage.password.confirm(function (text) {
        let data = {}
        data.deviceId = device.id;
        data.point = that.point.id;
        data.value = that.point.value==1?0:1;
        data.ctrlPwd = text;
        that.stage.option.control(data,function(msg) {
          let message = JSON.parse(msg);
          if(message.status.code==100000) {
            that.point.value = that.point.value==1?0:1;
            that.stage.toast("控制成功");
            let data = {}
            data.id = device.id;
            data.points = [{id:that.point.id,value:that.point.value}]
            that.stage.linkage(data);
            that.stage.password.hide();
          }else if(message.status.code==120020) {
            that.stage.toast("密码错误");
          }
        })
      });
    }else if(this.config.type==2) {
      let video = new Video(that.stage,820,500,device.id);
      this.stage.option.token(device.id, function(message) {
        if(message.serial) {
          let name = message.name;
          let accessToken = message.accessToken;
          let serial = message.serial;
          video.create(name,accessToken,serial)
        }
      })
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
                      <div>类型</div>
                      <select class="bm-select" name="type" title="按钮类型">
                        <option value="1">基本</option>
                        <option value="2">摄像头</option>
                      </select>	
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
    $('.resize-panel').css({width:width})
    $('#'+property.id).find('div').css({width:width});
    property.width = width-2;
    this.refresh();
  }
}

export default Button;

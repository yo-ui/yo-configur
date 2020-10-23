import Spirit from './../../core/Spirit'
import SelectPanel from './../../assets/js/SelectPanel'

/**
 * 文本
 */
class Text extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.name = "文本";
	    this.className = "Text";
	    this.height = height;
	    this.width = width;
	    this.minWidth = 20;
      this.moveType = 0;
	    this.zIndex = 4;
      this.isBind = true;
      this.isAnimation = true;
	    this.config = {
        bindData: {deviceId: ''},
        font: {text: '文本', color: '#108cee', size: 24, style: 'normal', weight: 'normal', family: '微软雅黑',spacing: 20},
        animations: [
          {type: 90, text: '值显示->开关', expr: '',on:'开',off:'关'},
          {type: 92, text: '值显示->字符串', expr: ''},
          {type: 41, text: '文本颜色->开关', expr: '', on: '#108cee',off: '#108cee'},
          {type: 61, text: '位置->水平', expr: '', left: 0, right: 100},
          {type: 62, text: '位置->垂直', expr: '', top: 0, bottom: 100},
          {type: 81, text: '可见性', expr: '', value: 1}]
      }
	}

	template(){
		let content = `<div style="
                      line-height: ${this.height}px;
                      height: ${this.height}px;">
                      <span class="value">${this.config.text}</span>                     
                    </div>`
    return super.template().html(content);
	}

	refresh() {
		$('#'+this.id).find('span').text(this.config.font.text);
		$('#'+this.id).find('span').css({
        color: this.config.font.color,
	      'font-size': this.config.font.size+"px",
	      'font-style': this.config.font.style,
	      'font-weight': this.config.font.weight,
	      'font-family': this.config.font.family,
		});
	}

  initialize(ids) {
    let that = this;
    this.stage.variableList.forEach(function (variable) {
      let data = {}
      data.key = variable.key;
      data.value = variable.value;
      that.dynamic(data);
    })
    let deviceId = that.config.bindData.deviceId
    if(deviceId) {
      that.stage.option.getDevice(deviceId,function (device) {
        if(deviceId==device.id) {
          that.reveal(device);
        }
      });
    }
  }

  reveal(device) {
    let that = this;
    if(device) {
      device.points.forEach(function(point) {
        if(that.isAnimation) {
          let data = {}
          data.key = point.id;
          data.value = point.value;
          that.dynamic(data);
        }
        /**that.config.animations.forEach(function (animation) {
          if(animation.type==90) {
            if(animation.expr==point.id) {
              if(point.value==0) {
                $('#'+that.id).find('.value').text(animation.off);
              }else if(point.value==1) {
                $('#'+that.id).find('.value').text(animation.on);
              }
            }
          }else if(animation.type==92) {
            if(animation.expr.indexOf(point.id)!=-1) {
              let data = {};
              data[point.id] = point.value;
              let expr = animation.expr.replace(""+point.id,"data."+point.id);
              try {
                $('#'+that.id).find('.value').text(eval(expr));
              }catch(e) {
                console.error("表达式格式错误"+animation.expr);
              }
            }
          }
        })**/
      })
    }
  }

  valueDisplay(animation,data) {
    let value = data.value;
    let that = this;
	  if(animation.type==90) {
      if(value==0) {
        $('#'+that.id).find('.value').text(animation.off);
      }else if(value==1) {
        $('#'+that.id).find('.value').text(animation.on);
      }
    }else if(animation.type==92) {
      let temp = {};
      temp[data.key] = data.value;
      let expr = animation.expr.replace(""+data.key,"temp."+data.key);
      console.log(expr);
      try {
        $('#'+that.id).find('.value').text(eval(expr));
      }catch(e) {
        console.error("表达式格式错误"+animation.expr);
      }
    }
  }

  textColor(animation,data) {
    if(animation.type==41) {
      if(data.value==0) {
        $('#'+this.id).find('.value').css({color: animation.off})
      }else {
        $('#'+this.id).find('.value').css({color: animation.on})
      }
    }
  }

	toJson() {
		let json = {
			className: this.className,
			moveType: this.moveType,
			minWidth: this.minWidth,
			zIndex: this.zIndex
		};
		return Object.assign(super.toJson(),json);
	}

	renderer() {
		let that = this;
		super.renderer();
		let html = $(`<div class="bm-tree"><i class="fa fa-down"></i>&nbsp;样式</div>
                  <div>
                  <div class="bm-style">
                    <div class="text">颜色：</div>	
                    <div class="value">
                      <input type="color" name="textColor" title="字体颜色" />
                    </div>                      										
                  </div>
                  <div class="bm-style">
                    <div class="text">字体：</div>	
                    <div class="bm-font-family value"></div>						
                  </div>
                  <div class="bm-style">
                    <div class="text">大小：</div>	
                    <div class="value">
                      <select class="bm-select" name="textFS" title="字体大小"></select>	
                    </div>						
                  </div>
                  <div class="bm-style">  
                    <div class="text">内容：</div>	              		
                    <div class="value">
                      <input type="text" name="text" class="form-control" value="${this.config.font.text}" maxlength="32" title="字体文本" />
                    </div>		
                  </div>
                  <div class="bm-style">  
                    <div class="text">样式：</div>	              		
                    <div class="value">
                      <div class="bm-font-style"><span>B</span><span>I</span></div>
                    </div>		
                  </div>                 
                  </div>`);
		$('#configur_property').append(html);

		let dataList = [11,13,14,15,16,18,24,30,60,100]
	    let element = $('#configur_property').find('[name=textFS]');
	    dataList.forEach(function(data) {
	      let option = $('<option></option>')
	      option.val(data)
	      option.text(data)
	      element.append(option)
	    });
	    element.val(this.config.font.size)
	    element.on('change',function() {
	      that.text();
	    });
	    let input = $('#configur_property').find('[name=text]');
      input.on('input propertyChange',function() {
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

	    html.find("[name=textColor]").val(that.config.font.color)
	    html.find("[name=textColor]").on('change',function() {
	    	that.config.font.color = $(this).val();
	    	that.refresh();
	    })

	    let selectPanel = new SelectPanel();
	    let family = $('#configur_property').find('.bm-font-family');
	    family.html(selectPanel.init(this.config.font.family))
	    $('.bm-select-panel li').each(function () {
	      $(this).on('click',function () {
	        that.config.font.family = $(this).data("family");
	        $('#'+that.id).find('span').css({'font-family': that.config.font.family});
	        selectPanel.hide();
	        selectPanel.text($(this).text());
	        $(this).addClass('active')
	        $(this).siblings().each(function () {
	          $(this).removeClass('active')
	        });
	        that.text();
	      });
	    })

	    $('#configur_property .bm-font-style span').each(function (index) {
	      $(this).data("index", index);
	      if(index==0) {
	        if(that.config.font.weight=="bold") {
	          $(this).addClass("active")
	        }
	      }else {
	        if(that.config.font.style=="italic") {
	          $(this).addClass("active")
	        }
	      }
	      $(this).on('click', function () {
	        let index = $(this).data("index");
	        if(index==0) {
	          if($(this).hasClass("active")) {
	            $(this).removeClass("active")
	            $('#'+that.id).find('span').css({'font-weight': "normal"});
	            that.config.font.weight = "normal";
	          }else {
	            $(this).addClass("active")
	            $('#'+that.id).find('span').css({'font-weight': "bold"});
	            that.config.font.weight = "bold";
	          }
	        }else {
	          if($(this).hasClass("active")) {
	            $(this).removeClass("active")
	            $('#'+that.id).find('span').css({'font-style': "normal"});
	            that.config.font.style = "normal";
	          }else {
	            $(this).addClass("active")
	            $('#'+that.id).find('span').css({'font-style': "italic"});
	            that.config.font.style = "italic";
	          }
	        }
	        that.text();
	      })
	    });
	}

	text() {
	    let that = this;
	    let element = $('#configur_property').find('[name=textFS]');
	    let property = that.stage.property;
	    property.config.font.size = element.val();
	    $('#'+property.id).find('span').css({'font-size':property.config.font.size+"px"});
	    $('#temp_value').html($('#'+property.id).find('div').html());
	    let width = $('#temp_value').width()+2;
	    let height = $('#temp_value').height();
	    $('.resize-panel').css({width,height});
	    $('#'+property.id).find('div').css({width,'line-height': height+"px",height});
	    property.height = height;
	    property.width = width;
	}

	update(text) {
	    let property = this.stage.property;
	    property.config.font.text = text;
	    $('#'+property.id).find('span').text(text);
	    $('#temp_value').html($('#'+property.id).find('div').html());
	    let width = $('#temp_value').width()+1;
			$('.resize-panel').css({width})
	    $('#'+property.id).find('div').css({width});
	    property.width = width;
		  this.refresh();
	}
}

export default Text;

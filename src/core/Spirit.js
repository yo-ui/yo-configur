import Toast from './../core/Toast';
import Visuality from "./animation/Visuality";
import Flicker from "./animation/Flicker";
import Location from "./animation/Location";
/**
 * 所有组件的父类
 */
class Spirit {

	constructor(x=0,y=0,width=10,height=10) {
		this.id = "c_"+Math.random().toString().substr(2,10);
    this.name = "";
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.zIndex = 0;
		this.isRotate = true;
		this.rotate = 0;
		this.isMove = true;
		this.bindType = 1;
		this.isLinkPoint = false;
    this.isAnimation = false;
    this.isSelected = true;
    this.isSubline = true;
    this.isDrag = true;
    this.isWater = false;
	}

	toString() {}

	toJson() {
		return {
			id: this.id,
      name: this.name,
			x: this.x,
			y: this.y,
			width: this.width,
			height: this.height,
			isMove: this.isMove,
			rotate: this.rotate,
			isRotate: this.isRotate,
      isLinkPoint: this.isLinkPoint,
      isSelected: this.isSelected,
      isSubline: this.isSubline,
      isDrag: this.isDrag
		}
	}

	refresh() {}

	getEl() {
		return $('#'+this.id);
	}

	arrangement(stage) {
		this.stage = stage;
		stage.element.append(this.template());
    this.stop();
	}

  initialize() {}

  reveal(device) {}

  template() {
	  return $(`<div id="${this.id}" class="configur-spirit" style="
             position:absolute;
             left:${this.x}px;
             top: ${this.y}px;
             z-index: ${this.zIndex};    
             transform: rotate(${this.rotate}deg)"></div>`);
  }

  //数据改变时
  dynamic(data) {
    console.log(data);
    	let that = this;
		  that.config.animations.forEach(function(animation) {
        if(that.legal(animation.expr,data)) {
          if(animation.type==31) {
            that.fillDiscrete(animation,data);
          }else if(animation.type==32) {
            that.fillAnalog(animation,data);
          }else if(animation.type==33) {
            that.fillDiscreteAlarm(animation,data);
          }else if(animation.type==41||animation.type==42) {
            that.textColor(animation,data);
          }else if(animation.type==51||animation.type==52) {
            that.size(animation,data);
          }else if(animation.type==61||animation.type==62) {
            that.location(animation,data);
          }else if(animation.type==71||animation.type==72) {
            that.fillRatio(animation,data);
          }else if(animation.type==81) {
            that.visuality(animation,data);
          }else if(animation.type==82) {
            that.flicker(animation,data);
          }else if(animation.type==90||animation.type==91||animation.type==92) {
            that.valueDisplay(animation,data);
          }
        }
      })
	}

  legal(expr,data) {
	  let result = false;
	  if(expr) {
	    if(expr==data.key) {
	      result = true;
      }else {
        let exprList = expr.split("+");
        exprList.forEach(function (value) {
          if(value.trim()==data.key) {
            result = true;
          }
        })
      }
    }
    return result;
  }

	//文本颜色
	textColor(animation,data) {}
  //值显示
  valueDisplay(animation,data) {}

	size(animation,data) {
	  let value = data.value;
	  let that = this;
	  //宽度
    if(animation.type==51) {
      let site = Number(animation.site);
      let left = that.x;
      let width = that.width;
      value = value<animation.minWidth?animation.minWidth:value;
      value = value>animation.maxWidth?animation.maxWidth:value;
      if(site==0) {
        $('#'+that.id).children().css({width: value})
      }else if(site==1) {
        $('#'+that.id).css({left:left+(width-value)/2})
        $('#'+that.id).children().css({width: value})
      }else if(site==2) {
        $('#'+that.id).css({left:left+(width-value)})
        $('#'+that.id).children().css({width: value})
      }
    }else if(animation.type==52) {
      let site = animation.site;
      let top = that.y;
      let height = that.height;
      value = value<animation.minHeight?animation.minHeight:value;
      value = value>animation.maxHeight?animation.maxHeight:value;
      if(site==0) {
        $('#'+that.id).children().css({height: value})
      }else if(site==1) {
        $('#'+that.id).css({top:top+(height-value)/2})
        $('#'+that.id).children().css({height: value})
      }else if(site==2) {
        $('#'+that.id).css({top:top+(height-value)})
        $('#'+that.id).children().css({height: value})
      }
    }
  }

  location(animation,data) {
    let value = data.value;
	  let that = this;
	  if(animation.type==61) {
      let left = Number(animation.left);
      let right = Number(animation.right);
      let _left = 0;
      if(left>0) {
        _left = value>left?left:value;
        $("#"+that.id).animate({
          left:"-="+_left+"px"
        },1000);
      }
      if(right>0) {
        let _right = value>right?right+_left:value+_left;
        $("#"+that.id).animate({
          left:"+="+_right+"px"
        },1000);
      }
    }else if(animation.type==62) {
      let top = Number(animation.top);
      let bottom = Number(animation.bottom);
      let _top = 0;
      if(top>0) {
        _top = value>top?top:value;
        $("#"+that.id).animate({
          top:"-="+_top+"px"
        },1000);
      }
      if(bottom>0) {
        let _bottom = value>bottom?bottom+_top:value+_top;
        $("#"+that.id).animate({
          top:"+="+_bottom+"px"
        },1000);
      }
    }
  }

	fillRatio(animation,data){
    let value = data.value;
    let ratio = (value-animation.minValue)/(animation.maxValue-animation.minValue)*100;
    let _ratio = ratio>animation.maxRatio?animation.maxRatio:ratio;
    $('#'+this.id).find('div').css({background: `linear-gradient(to ${animation.direction},${animation.color} ${_ratio}%,#fff 0%)`})
  }

  flicker(animation,data) {
    let value = data.value;
	  let that = this;
	  if(value==0) {
      $("#"+that.id).find('.flicker').remove();
    }else if(value==1) {
      let speeds = [2,1,0.5];
      let flicker = $(`<span class="flicker" style="position: absolute;left: -5px;top: -5px;z-index: -1"></span>`);
      flicker.css({
        width:that.width+10,
        height:that.height+10,
        'border-radius': '50%',
        'animation-duration': speeds[animation.speed] +"s",
        'background-color': animation.color})
      $("#"+that.id).append(flicker);
    }
  }

  //填充（离散）
  fillDiscrete(animation,data) {
    let value = data.value;
    let that = this;
    animation.value = value;
    let states = animation.states;
    states.forEach(function (state) {
      if(state.value==value) {
        that.open(value)
      }
    })
  }
  //填充（离散报警）
  fillDiscreteAlarm(animation,data) {
    let value = data.value;
    let that = this;
    animation.value = value;
    let states = animation.states;
    states.forEach(function (state) {
      if(state.value==value) {
        that.alarm(value)
      }
    })
  }

  //填充（模拟）
  fillAnalog(animation,data) {}

  visuality(animation,data) {
    let value = data.value;
    animation.value = value;
    if(value==0) {
      this.hide();
    }else if(value==1) {
      this.show();
    }
  }

  renderer() {
		let that = this;
		$('#configur_property').html('');
		let html = $(`             
					<div class="bm-style">
						<div class="text">名称</div>		
						<div class="value"><input class="bm-title form-control" value="${this.name}"/></div>									
					</div>            
					<div class="bm-cell no-hover">
						<div class="bm-cell__title">
							<div class="bm-kv">
								<span class="bm-kv__text">X：</span>
								<span class="bm-kv__value bm-site-x">${this.x}</span>
							</div>                                						
						</div>						
						<div class="bm-cell__value">                             
							<div class="bm-kv">
								<span class="bm-kv__text">Y：</span>
								<span class="bm-kv__value bm-site-y">${this.y}</span>
							</div>
						</div>	
					</div>
           <div class="bm-cell no-hover bm-size">
						<div class="bm-cell__title">
							<div class="bm-kv">   
								<span class="bm-kv__text">W：</span>
								<span class="bm-kv__value bm-size-w">${this.width}</span>
							</div>						                            
						</div>						
						<div class="bm-cell__value">
							<div class="bm-kv">
								<span class="bm-kv__text">H：</span>
								<span class="bm-kv__value bm-size-h">${this.height}</span>
							</div>                               
						</div></div>`);
		$('#configur_property').append(html);
		if(this.isRotate) {
			let roteta = $(`<div class="bm-style">
                      <div class="text">	旋转角度</div>
                      <div class="value">
                        <div class="bm-range" style="width: 120px;">
                          <input class="rotate-value" type="range" step="1" min="0" max="359" value="${that.rotate}">                         					    
                        </div>
                        <span class="rotate-text">${that.rotate}</span>		
                      </div>                    
                    </div>`)
			roteta.find('.rotate-value').on('input propertyChange',function () {
				roteta.find('.rotate-text').text($(this).val());
				that.stage.property.rotate = $(this).val();
				$('.resize-panel').css({transform: 'rotate('+$(this).val()+'deg)'})
			})
			$('#configur_property').append(roteta);
		}

    $('#configur_property').find('.bm-title').on('input propertyChange',function () {
      that.name = $(this).val();
    })
	}

	viewPanel(device) {
    let that = this;
		if(device) {
			$('.bm-view-panel').html('');
			let vpt = $(`<div class="bm-view-panel__title">${that.lengthFormat(device.name,24)}</div>`);
      let vpc = $(`<div class="bm-view-panel__content"></div>`);
      let ul = $('<ul></ul>');
      device.points.forEach(function(point) {
        let li = $(`<li><span class="text">${point.name}</span></li>`);
        if(point.type==2||point.type==4) {
          let span = $('<span class="value"></span>')
          let select = $('<select class="bm-select" style="padding: 0px;width: 80px;display: inline-block;vertical-align: middle"></select>')
          point.optionValList.forEach(function(data) {
            let option = $('<option></option>');
            option.val(data.value);
            option.text(data.descr);
            select.append(option);
          })
          select.val(1);
          let button = $(`<a class="button button-raised button-primary button-pill" style="line-height: 22px;font-size: 11px;margin-left: 2px">确定</a>`)
          button.on('click', function() {
            that.control(device.id,point.id,select.val());
          });
          span.append(select);
          span.append(button);
          li.append(span)
        }else {
          if(point.value) {
            let span = $(`<span class="value">
                             <span>${that.floatFormat(point.value)}</span>
                             <small>${that.undefinedToString(point.unit)}</small>
                           </span>`)
            li.append(span);
          }
        }
        ul.append(li);
      });
      vpc.append(ul);
			$('.bm-view-panel').append(vpt).append(vpc);
			$('.bm-view-panel').css({width:350});
			$('.bm-view-panel').show();
		}
	}

  control(deviceId,point,value) {
	  let that = this;
      that.stage.password.show();
      that.stage.password.confirm(function(text) {
      let data = {}
      data.deviceId = deviceId;
      data.point = point;
      data.value = value;
      data.ctrlPwd = text;
      that.stage.option.control(data,function() {
        Toast.alert("控制成功！");
        let device = {}
        device.id = deviceId;

        device.points = [{id:point,value:value}]
        that.stage.linkage(device);
        that.stage.password.hide();
      })
    });
  }

  open(value) {
    if(value==0) {
      this.stop();
    }else if(value==1) {
      this.start();
    }
  }

  alarm(value) {
    if(value==0) {
      this.error();
    }else if(value==1) {
      this.stop();
    }
  }

  stop() {
    let el = this.getEl();
    if(el.find('.SVG_alert')){
      el.find('.SVG_alert').hide();
    }
    if(el.find('.SVG_sta')){
      el.find('.SVG_sta').show();
    }
    if(el.find('.SVG_ani')){
      el.find('.SVG_ani').hide();
    }
  }

  start() {
    let el = this.getEl();
    if(el.find('.SVG_alert')){
      el.find('.SVG_alert').hide();
    }
    if(el.find('.SVG_sta')){
      el.find('.SVG_sta').hide();
    }
    if(el.find('.SVG_ani')){
      el.find('.SVG_ani').show();
    }
  }

  error() {
    let el = this.getEl();
    if(el.find('.SVG_alert')){
      el.find('.SVG_alert').show();
    }
    if(el.find('.SVG_sta')){
      el.find('.SVG_sta').show();
    }
    if(el.find('.SVG_ani')){
      el.find('.SVG_ani').hide();
    }
  }

  show() {
    $('#'+this.id).show();
  }

  hide() {
    $('#'+this.id).hide();
  }

	floatFormat(value) {
		if(value) {
			return parseFloat(value)
		}
		return '';
	}

	undefinedToString(value) {
		return value==undefined?'':value;
	}

	lengthFormat(text,length) {
		return text.length>length?text.substr(0,length)+"...":text
	}
}

export default Spirit;

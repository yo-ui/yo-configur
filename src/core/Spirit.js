import Toast from '@/core/Toast';
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
		this.isRotate = true;
		this.rotate = 0;
		this.isMove = true;
		this.bindType = 1;
		this.isLinkPoint = false;
    this.isAnimation = false;
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

	reveal(device,config) {}

	renderer() {
		let that = this;
		$('#configur_property').html('');
		let html = $(`<div class="bm-tree">名称</div>		             
					<div class="bm-cell no-hover">
						<div class="bm-cell__title">
							  <input class="bm-title form-control" value="${this.name}"/>						                           						
						</div>											
					</div>
					<div class="bm-tree">位置</div>		             
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
           <div class="bm-tree">尺寸</div>
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
			let roteta = $(`<div class="bm-tree">旋转角度</div>
                      <div class="bm-cell no-hover">
                      <div class="bm-cell__title">					
                        <div class="bm-range">
                          <input class="rotate-value" type="range" step="1" min="0" max="359" value="${that.rotate}">							    
                        </div>							
                      </div>
                      <div class="bm-cell__value" style="flex: none;width: 40px;text-align: center">
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
          point.optionValList.forEach(function (data) {
            let option = $('<option></option>');
            option.val(data.value);
            option.text(data.descr);
            select.append(option);
          })
          select.val(1);
          let button = $(`<a class="button button-raised button-primary button-pill" 
                           style="line-height: 22px;font-size: 11px;margin-left: 2px">确定</a>`)
          button.on('click', function () {
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
    that.stage.password.confirm(function (text) {
      let data = {}
      data.deviceId = deviceId;
      data.point = point;
      data.value = value;
      data.ctrlPwd = text;
      that.stage.option.control(data,function(msg) {
        let message = JSON.parse(msg);
        if(message.status.code==100000) {
          Toast.alert("控制成功！");
          let item = {}
          item.id = deviceId;
          item.points = [{id:point,value:value}]
          that.stage.linkage(item);
          that.stage.password.hide();
        }else if(message.status.code==120020) {
          Toast.alert("密码错误！");
        }
      })
    });
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

  alarm() {
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

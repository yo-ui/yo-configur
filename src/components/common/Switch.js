import Spirit from './../../core/Spirit'
/**
 * 背景
 */
class Switch extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.name = "开关";
	    this.className = "Switch";
	    this.width = width;
	    this.height = height;
	    this.minWidth = 30;
      this.minHeight = 30;
	    this.moveType = 4;
	    this.linkage = false;
	    this.isMove = true;
	    this.zIndex = 1;
      this.isBind = true;
      this.isAnimation = true;
	    this.config = {
	        bindData: {deviceId: ''},
          animations: [
              {type: 31,
               text: '填充->离散',
               expr: 'SwSts',
               states: [{value: 1,text:'开',url: 'static/images/start.png',default: true},
                         {value: 0,text:'关',url: 'static/images/end.png',default: true}],
               value: 0,
               isSwitch: true,
               category: 2}]
          }
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">		                
                  <div style="
                    height: ${this.height}px;
                    width: ${this.width}px;
                    user-select: none;">
                    <img src="static/images/end.png" style="width:100%;height: 100%"/>
                    <div class="images-shade" style="position:absolute;top:0;width:100%;height: 100%"></div>
                  </div>	
                </div>`)
	}

  refresh() {
	  let that = this;
    that.config.animations.forEach(function (animation) {
      if(animation.type==31) {
        animation.states.forEach(function (state) {
          if(state.value==animation.value) {
            if(state.default) {
              $("#"+that.id).find('img').attr("src", state.url);
            }else {
              $("#"+that.id).find('img').attr("src", that.stage.imgHost+"/"+state.url);
            }
          }
        })
      }
    })
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

	initialize() {
	    let that = this;
        let deviceId = that.config.bindData.deviceId
        if(deviceId) {
	        that.stage.option.getDevice(deviceId,function (device) {
	            if(deviceId==device.id) {
	                that.reveal(device);
	            }
		    });
	    }
        $('#'+that.id).on('click',function() {
            that.config.animations.forEach(function(animation) {
            	if(animation.type==31) {
            		let value = animation.value==0?1:0;
            		that.control(deviceId,animation.expr,value,function() {
            			animation.value = value;
            		})
            	}
            })
	    });
	}

	reveal(device) {
	    let that = this;
	    if(device) {
	      device.points.forEach(function(point) {
	      	if(that.isAnimation) {
	      		let key = point.id;
	      	    let value = point.value;
	            that.dynamic(key,value);
	      	}
	      })
	    }
	}

	//填充（离散）
	fillDiscrete(animation,value) {
    let that = this;
    animation.value = value;
    let states = animation.states;
    states.forEach(function (state) {
      if(state.value==value) {
        if(!state.default) {
          $('#'+that.id).find('img').attr("src", that.stage.imgHost+"/"+state.url)
        }else {
          $('#'+that.id).find('img').attr("src", state.url)
        }
      }
    })
	}
}

export default Switch;

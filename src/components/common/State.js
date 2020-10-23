import Spirit from './../../core/Spirit'
/**
 * 多态
 */
class State extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.name = "多态";
	    this.className = "State";
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
              {type: 32,
               text: '填充->状态',
               expr: '',
               states: [
                 {value: "1",text:'状态1',url: 'static/images/configur/state.png',default: true},
                 {value: "",text:'状态1',url: 'static/images/configur/state.png',default: true},
                 {value: "",text:'状态1',url: 'static/images/configur/state.png',default: true},
                 {value: "",text:'状态1',url: 'static/images/configur/state.png',default: true},
                 {value: "",text:'状态1',url: 'static/images/configur/state.png',default: true},
                 {value: "",text:'状态1',url: 'static/images/configur/state.png',default: true},
                 ],
               value: 1,
               category: 2},
              {type: 51, text: '大小->宽度', expr: '', maxWidth: 100, minWidth: 0,site: 2},
              {type: 52, text: '大小->高度', expr: '', maxHeight: 100, minHeight: 0,site: 2},
              {type: 61, text: '位置->水平', expr: '', left: 0, right: 100},
              {type: 62, text: '位置->垂直', expr: '', top: 0, bottom: 100},
              {type: 81, text: '可见性', expr: '', value: 1}]
          }
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">		                
                  <div style="
                    height: ${this.height}px;
                    width: ${this.width}px;
                    user-select: none;">
                    <img src="static/images/configur/state.png" style="width:100%;height: 100%"/>
                    <div class="images-shade" style="position:absolute;top:0;width:100%;height: 100%"></div>
                  </div>	
                </div>`)
	}

  refresh() {
    let that = this;
    that.config.animations.forEach(function (animation) {
      if(animation.type==32) {
        that.fillAnalog(animation,{value:animation.value})
      }
    })
  }

  initialize() {
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
      })
    }
  }

	//填充（模拟量）
  fillAnalog(animation,data) {
	  let value = data.value;
    let that = this;
    animation.value = value;
    let states = animation.states;
    states.forEach(function (state,index) {
      let last = 0;
      if(state.value) {
        if(index>0) {
          last = Number(states[index-1].value);
        }
        if(value>last&&value<=state.value) {
          if(!state.default) {
            $('#'+that.id).find('img').attr("src", that.stage.imgHost+"/"+state.url)
          }else {
            $('#'+that.id).find('img').attr("src", state.url)
          }
        }
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
}

export default State;

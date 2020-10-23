import Spirit from './../../core/Spirit'
/**
 * 圆形
 */
class Circle extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.name = "圆形";
	    this.className = "Circle";
	    this.width = width;
	    this.height = height;
	    this.minWidth = 1;
      this.minHeight = 1;
	    this.moveType = 4;
	    this.linkage = true;
	    this.isMove = true;
	    this.zIndex = 1;
      this.isAnimation = true;
      this.config = {
        bindData: {deviceId: ''},
        background: {color: '#0075E7'},
        animations: [
          {type: 31,
            text: '填充->开关',
            expr: '',
            states: [
              {text:'关',value: 0,color:'#dddddd'},
              {text:'开',value: 1,color:'#000000'}],
            value: 0,
            category: 1},
          {type: 32,
            text: '填充->模拟量',
            expr: '',
            states: [
              {value: "",text:'状态1',color: '#dddddd'},
              {value: "",text:'状态1',color: '#dddddd'},
              {value: "",text:'状态1',color: '#dddddd'},
              {value: "",text:'状态1',color: '#dddddd'},
              {value: "",text:'状态1',color: '#dddddd'},
              {value: "",text:'状态1',color: '#dddddd'},
            ],
            value: 1,
            category: 1},
          {type: 51, text: '大小->宽度', expr: '', maxWidth: 100, minWidth: 0,site: 2},
          {type: 52, text: '大小->高度', expr: '', maxHeight: 100, minHeight: 0,site: 2},
          {type: 61, text: '位置->水平', expr: '', left: 0, right: 100},
          {type: 62, text: '位置->垂直', expr: '', top: 0, bottom: 100},
          {type: 71, text: '填充百分比->水平', expr: '', minValue: 0, maxValue: 100, minRatio: 0, maxRatio: 100, direction: "right"},
          {type: 72, text: '填充百分比->垂直', expr: '', minValue: 0, maxValue: 100, minRatio: 0, maxRatio: 100, direction: "top"},
          {type: 81, text: '可见性', expr: '', value: 1},
          {type: 82, text: '闪烁', expr: '', color: '#0075E7', speed: 0}]
      }
	}

	template(){
		let content = `<div style="
                      height: ${this.height}px;
                      width: ${this.width}px">
                      <div class="bg" style="width:100%;height:100%;border-radius: 50%;background-color: ${this.config.background.color}"></div>                 
                    </div>`
        return super.template().html(content);
	}

  refresh() {
    $('#'+this.id).find('.bg').css({'background-color':this.config.background.color});
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

  //填充（离散）
  fillDiscrete(animation,data) {
	  let value = data.value;
    let that = this;
    animation.value = value;
    let states = animation.states;
    states.forEach(function (state) {
      if(state.value==value) {
        $('#'+that.id).find('.bg').css({'background-color': state.color});
      }
    })
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
          $('#'+that.id).find('.bg').css({'background-color': state.color});
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

	renderer() {
      let that = this;
	    super.renderer();
	    let html = $(`<div class="bm-tree"><i class="fa fa-down"></i>&nbsp;背景</div>
	                <div class="bm-cell no-hover">
	                  <div class="bm-cell__title">
	                    <div>背景颜色</div>
	                    <input type="color" name="bgColor" title="背景颜色" />
	                  </div>													
	                </div>`);
	    $('#configur_property').append(html);

	    html.find("[name=bgColor]").val(that.config.background.color)
	    html.find("[name=bgColor]").on('change',function() {
	    	that.config.background.color = $(this).val();
	    	that.refresh();
	    })
	}
}

export default Circle;

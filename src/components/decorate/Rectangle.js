import Spirit from './../../core/Spirit'
/**
 * 方形
 */
class Rectangle extends Spirit {

  constructor(x=0, y=0,width,height) {
    super(x, y);
    this.name = "方形";
    this.className = "Rectangle";
    this.width = width;
    this.height = height;
    this.minWidth = 5;
    this.minHeight = 1;
    this.moveType = 4;
    this.linkage = false;
    this.isMove = true;
    this.zIndex = 1;
    this.isAnimation = true;
    this.config = {
      bindData: {deviceId: ''},
      background: {color: '#0075E7'},
      animations: [{type: 31,text: '填充颜色->离散',expr: '',on: '',off:''}]
    }
  }

  template(){
    let html = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">		                
                  <div style="
                    height: ${this.height}px;
                    width: ${this.width}px;
                    background-color: ${this.config.background.color}">                 
                  </div>	
                </div>`)
    return html;
  }

  refresh() {
    $('#'+this.id).find('div').css({'background-color':this.config.background.color});
  }
  
  variableChange(data) {
  	console.log(data);
  	let that = this;
  	let animations = that.config.animations;
  	animations.forEach(function(animation) {
	  	if(animation.type==31) {
	  		that.fillColor(animation,data);
	  	}	
    })
  }
  
  fillColor(animation,variable) {
  	let that = this;
    if(variable) { 
	  	if(variable.value==0) {
	  		$('#'+that.id).find('span').css({'background-color': animation.on})
	  	}else if(variable.value==1) {
	  		$('#'+that.id).find('span').css({'background-color': animation.off})
	  	}
    }
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
    let html = $(`<div class="bm-tree">背景</div>
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
    	console.log(that.config.background.color);
    	that.refresh();
    })
  }
}

export default Rectangle;

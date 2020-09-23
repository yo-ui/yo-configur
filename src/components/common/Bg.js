import Spirit from './../../core/Spirit'
/**
 * 背景
 */
class Bg extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.name = "背景";
	    this.className = "Bg";
	    this.width = width;
	    this.height = height;
	    this.minWidth = 50;
      this.minHeight = 30;
	    this.moveType = 4;
	    this.linkage = false;
	    this.isMove = true;
	    this.zIndex = 1;
      this.config = {
        bindData: {orgId: '', deviceId: '', devicePoint: ''},backgroundColor:'#f5f5f5'
      }
	}

	template(){
		let html = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">		                
                  <div style="
                    height: ${this.height}px;
                    width: ${this.width}px;
                    background-color: ${this.config.backgroundColor}">                 
                  </div>	
                </div>`)
		return html;
	}

  refresh() {
    $('#'+this.id).find('div').css({'background-color':this.config.backgroundColor});
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
    let html = `<div class="bm-tree">背景</div>
                <div class="bm-cell no-hover">
                  <div class="bm-cell__title">
                    <div>背景颜色</div>
                    <input class="bg-color" title="背景颜色" />
                  </div>													
                </div>`;
    $('#configur_property').append(html);
	}
}

export default Bg;

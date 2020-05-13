import Spirit from '@/core/Spirit.js'

/**
 * 连接点
 */
class LinkPoint extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.title = "连接点";
	    this.className = "LinkPoint";
	    this.width = width;
	    this.height = height; 
	    this.minWidth = 6;
	    this.minHeight = 6;
	    this.isMove = true;
	    this.zIndex = 4;
	    this.isRotate = false;
	}

	template(){
		let div = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;border:1px solid transparent;z-index: ${this.zIndex}">
		        <div style="width: 6px;height: 6px;border-radius: 3px;background-color: red;margin-top: 2px;margin-left: 2px">&nbsp;</div>
		        <div class="images-shade" style="position:absolute;top:0;width:${this.width}px;height:${this.height}px;"></div>
		        </div>`)
		return div;
	}
	
	toJson() {
		let json = {
			title: this.title,
			className: this.className, 
			moveType: this.moveType,
			minWidth: this.minWidth,
			isMove: this.isMove,
			zIndex: this.zIndex,
			isRotate: this.isRotate
		};
		return Object.assign(super.toJson(),json);
	}
}

export default LinkPoint;

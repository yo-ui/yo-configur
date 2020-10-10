import Spirit from './../../core/Spirit'
/**
 * 组合
 */
class Combination extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.name = "组合";
	    this.className = "Combination";
	    this.width = width;
	    this.height = height;
	    this.minWidth = 5;
      this.minHeight = 1;
	    this.moveType = 0;
	    this.linkage = false;
	    this.isMove = true;
	    this.zIndex = 0;
      this.config = {ids:[]};
      this.isSelected = true;
      this.isCombination = true;
      this.isDrag = true;
      this.isRotate = false;
	}

	template(){
		let content = `<div class="comb" style="height: ${this.height}px;width: ${this.width}px;"></div>`;
    return super.template().html(content);
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

export default Combination;

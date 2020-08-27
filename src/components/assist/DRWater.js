import Spirit from '@/core/Spirit.js'

/**
 * 水管（右下）
 */
class DRWater extends Spirit {

	constructor(x=10, y=10) {
        super(x, y);
	    this.name = "水管（右下）";
	    this.className = "DRWater";
	    this.width = 10;
	    this.height = 10;
	    this.zIndex = 2;
	    this.isRotate = false
	}

	template(){
		return `<div id="${this.id}" style="position:absolute;left:${this.x}px;top: ${this.y}px;border:1px solid transparent;z-index: ${this.zIndex};">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
		        width = "10" height="20" xml:space="preserve">
				<radialGradient id="XMLID_LR_" cx="296.8083" cy="-271.2963" r="7.9785" gradientTransform="matrix(4.489659e-011 1 -1 4.489659e-011 -271.3311 -296.7776)" gradientUnits="userSpaceOnUse">
					<stop  offset="0.2512" style="stop-color:#777C7F"/>
					<stop  offset="0.62" style="stop-color:#FFFFFF"/>
					<stop  offset="1" style="stop-color:#777C7F"/>
				</radialGradient>
				<path id="XMLID_536_" style="fill:url(#XMLID_LR_)" d="M8,0L1.8,0c0,1.1-0.8,1.8-1.8,1.8L0,8C4.4,8,8,4.4,8,0z"/>
				</svg></div>`;
	}

	transform() {
		$('#'+this.id).css({left:this.x,top:this.y});
		$('#'+this.id).find("svg").css({left:this.x,top:this.y});
		$('#'+this.id).find("rect").css({left:this.x,top:this.y});
	}

	toJson(){
		let json = {
			className: this.className,
			zIndex: this.zIndex,
			isRotate: this.isRotate
		};
		return Object.assign(super.toJson(),json);
	}
}

export default DRWater;

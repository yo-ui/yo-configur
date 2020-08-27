import Spirit from '@/core/Spirit.js'

/**
 * 水管（左上）
 */
class LUWater extends Spirit {

	constructor(x=10, y=10) {
        super(x, y);
	    this.name = "水管（左上）";
	    this.className = "LUWater";
	    this.width = 10;
	    this.height = 10;
	    this.zIndex = 2;
	    this.isRotate = false;
	}

	template(){
		return `<div id="${this.id}" style="position:absolute;left:${this.x}px;top: ${this.y}px;border:1px solid transparent;z-index: ${this.zIndex}">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="20"
					 xml:space="preserve">
				<style type="text/css">
					.luw-st0{fill:url(#LUWater_2_);}
				</style>
				<radialGradient id="LUWater_2_" cx="292.8083" cy="-271.2963" r="7.9785" 
				gradientTransform="matrix(-4.489659e-011 -1 1 -4.489659e-011 281.3311 302.7776)"
				gradientUnits="userSpaceOnUse">
					<stop  offset="0.2512" style="stop-color:#777C7F"/>
					<stop  offset="0.62" style="stop-color:#FFFFFF"/>
					<stop  offset="1" style="stop-color:#777C7F"/>
				</radialGradient>
				<path id="XMLID_536_" class="luw-st0" d="M2,10l6.2,0c0-1.1,0.8-1.8,1.8-1.8V2C5.6,2,2,5.6,2,10z"/>
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

export default LUWater;

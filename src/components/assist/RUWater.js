import Spirit from './../../core/Spirit'

/**
 * 水管（右上）
 */
class RUWater extends Spirit {

	constructor(x=10, y=10) {
        super(x, y);
	    this.name = "水管（右上）";
	    this.className = "RUWater";
	    this.width = 10;
	    this.height = 10;
	    this.zIndex = 1;
      this.isWater = true;
	}

	template(){
		return `<div id="${this.id}" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex}">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width = "10" height="20" xml:space="preserve">
				<radialGradient id="RUWater_RU_" cx="298.8083" cy="-271.2963" r="7.9785" gradientTransform="matrix(1 0 0 1 -298.7776 281.3311)" gradientUnits="userSpaceOnUse">
					<stop  offset="0.2512" style="stop-color:#777C7F"/>
					<stop  offset="0.62" style="stop-color:#FFFFFF"/>
					<stop  offset="1" style="stop-color:#777C7F"/>
				</radialGradient>
				<path id="XMLID_536_" style="fill:url(#RUWater_RU_)" d="M0,2l0,6.2c1.1,0,1.8,0.8,1.8,1.8L8,10C8,5.6,4.4,2,0,2z"/>
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

export default RUWater;

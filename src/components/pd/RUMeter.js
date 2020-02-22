import Spirit from '@/core/Spirit.js'

class LDMeter extends Spirit {

	constructor(x=10, y=10) {
        super(x, y);
	    this.title = "电线（左下）";
	    this.className = "LDMeter";
	    this.width = 10;
	    this.height = 10;
	}

	template(){
		return `<div id="${this.id}" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index:2;border:1px solid transparent">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
		        width = "10" height="20" xml:space="preserve">
				<radialGradient id="XMLID_LD_" cx="294.8083" cy="-271.2963" r="7.9785" gradientTransform="matrix(-1 0 0 -1 304.7776 -271.3311)" gradientUnits="userSpaceOnUse">
					<stop  offset="0.2512" style="stop-color:#777C7F"/>
					<stop  offset="0.62" style="stop-color:#FFFFFF"/>
					<stop  offset="1" style="stop-color:#777C7F"/>
				</radialGradient>
				<path id="XMLID_536_" style="fill:url(#XMLID_LD_)" d="M10,8l0-6.2C8.9,1.8,8.2,1.1,8.2,0L2,0C2,4.4,5.6,8,10,8z"/>
				</svg></div>`;
	}

	toJson(){
		let json = {
			title:this.title,
			className:this.className
		};
		return Object.assign(super.toJson(),json);
	}
}

export default LDMeter;

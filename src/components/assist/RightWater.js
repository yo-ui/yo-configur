import Spirit from './../../core/Spirit'

/**
 * 水管（右）
 */
class RightWater extends Spirit {

	constructor(x=10, y=10) {
        super(x, y);
	    this.name = "水管（右）";
	    this.className = "RightWater";
	    this.width = 10;
	    this.height = 14;
	    this.isSplice = true;
	    this.zIndex = 1;
      this.isWater = true;
	}

	template(){
		return `<div id="${this.id}" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex}">
		        <svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
					 viewBox="0 0 10 10" xml:space="preserve" width = "10" height="10">
				<style type="text/css">
					.rightWater-st0{fill:url(#XMLID_6_);}
					.rightWater-st1{fill:url(#XMLID_7_);}
					.rightWater-st2{fill:#FFFFFF;}
					.rightWater-st3{fill:url(#XMLID_8_);}
					.rightWater-st4{fill:url(#XMLID_9_);}
					.rightWater-st5{fill:url(#XMLID_10_);}
					.rightWater-st6{fill:#777C7F;}
				</style>
				<g>
					<linearGradient id="XMLID_6_" gradientUnits="userSpaceOnUse" x1="-150.9816" y1="989.4756" x2="-150.9816" y2="995.4756" gradientTransform="matrix(-4.489659e-011 -1 -1 4.489659e-011 997.4756 -145.9816)">
					<stop  offset="0" style="stop-color:#777C7F"/>
					<stop  offset="0.5" style="stop-color:#FFFFFF"/>
					<stop  offset="0.9803" style="stop-color:#777C7F"/>
				</linearGradient>
				<rect id="XMLID_4_" x="2" y="0" class="rightWater-st0" width="6" height="10"/>
				
					<linearGradient id="XMLID_7_" gradientUnits="userSpaceOnUse" x1="-142.9816" y1="990.9756" x2="-142.9816" y2="996.9756" gradientTransform="matrix(-1 0 0 1 -141.4816 -988.9756)">
					<stop  offset="0" style="stop-color:#777C7F"/>
					<stop  offset="0.1755" style="stop-color:#ABAEB0"/>
					<stop  offset="0.3951" style="stop-color:#E7E8E9"/>
					<stop  offset="0.5" style="stop-color:#FFFFFF"/>
					<stop  offset="1" style="stop-color:#777C7F"/>
				</linearGradient>
				<rect id="XMLID_551_" x="0" y="2" class="rightWater-st1" width="3" height="6"/>
				<g id="XMLID_1_">
					<rect id="XMLID_558_" x="2" y="2" class="rightWater-st2" width="6" height="6"/>
					
						<radialGradient id="XMLID_8_" cx="-431.5536" cy="395.9081" r="13.4118" gradientTransform="matrix(-0.5898 0 0 0.5898 -254.2069 -223.8701)" gradientUnits="userSpaceOnUse">
						<stop  offset="0.2906" style="stop-color:#777C7F"/>
						<stop  offset="0.62" style="stop-color:#777C7F;stop-opacity:0"/>
					</radialGradient>
					<rect id="XMLID_555_" x="2" y="2" class="rightWater-st3" width="6" height="6"/>
					
						<radialGradient id="XMLID_9_" cx="-431.2906" cy="379.9474" r="13.4117" gradientTransform="matrix(-0.5898 0 0 0.5898 -254.2069 -223.8701)" gradientUnits="userSpaceOnUse">
						<stop  offset="0.3103" style="stop-color:#777C7F"/>
						<stop  offset="0.62" style="stop-color:#777C7F;stop-opacity:0"/>
					</radialGradient>
					<rect id="XMLID_554_" x="2" y="2" class="rightWater-st4" width="6" height="6"/>
					
						<linearGradient id="XMLID_10_" gradientUnits="userSpaceOnUse" x1="-443.0012" y1="392.7758" x2="-437.0012" y2="392.7758" gradientTransform="matrix(-1 0 0 1 -435.0012 -387.7758)">
						<stop  offset="0" style="stop-color:#777C7F"/>
						<stop  offset="0.5" style="stop-color:#777C7F;stop-opacity:0"/>
					</linearGradient>
					<rect id="XMLID_553_" x="2" y="2" class="rightWater-st5" width="6" height="6"/>
				</g>
				<g id="XMLID_3_">
					<path id="XMLID_556_" class="rightWater-st6" d="M2,10c0-1.2-0.8-2-2-2h2V10z"/>
					<path id="XMLID_2_" class="rightWater-st6" d="M2,0c0,1.2-0.8,2-2,2h2V0z"/>
				</g>
			</g>
				</svg>
				</div>`;
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

export default RightWater;

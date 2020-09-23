import Spirit from './../../core/Spirit'

/**
 * 水管（上）
 */
class UpWater extends Spirit {

	constructor(x=10, y=10) {
        super(x, y);
	    this.name = "水管（上）";
	    this.className = "UpWater";
	    this.width = 10;
	    this.height = 16;
	    this.isSplice = true;
	    this.zIndex = 1;
      this.isWater = true;
	}

	template(){
		return `<div id="${this.id}" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex}">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
					 xml:space="preserve" width="10" height="10">
					<style type="text/css">
						.upWater-st0{fill:url(#upWater_6_);}
						.upWater-st1{fill:url(#upWater_7_);}
						.upWater-st2{fill:#FFFFFF;}
						.upWater-st3{fill:url(#upWater_8_);}
						.upWater-st4{fill:url(#upWater_9_);}
						.upWater-st5{fill:url(#upWater_10_);}
						.upWater-st6{fill:#777C7F;}
					</style>
					<g>
                        <linearGradient id="upWater_6_" gradientUnits="userSpaceOnUse" x1="-151.9816" y1="988.4756" x2="-151.9816" y2="994.4756" gradientTransform="matrix(-1 0 0 1 -146.9816 -986.4756)">
							<stop  offset="0" style="stop-color:#777C7F"/>
							<stop  offset="0.5" style="stop-color:#FFFFFF"/>
							<stop  offset="0.9803" style="stop-color:#777C7F"/>
						</linearGradient>
						<rect id="XMLID_4_" x="0" y="2" class="upWater-st0" width="10" height="6"/>						
							<linearGradient id="upWater_7_" gradientUnits="userSpaceOnUse" x1="-143.9816" y1="991.9756" x2="-143.9816" y2="997.9756" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -989.9756 152.4816)">
							<stop  offset="0" style="stop-color:#777C7F"/>
							<stop  offset="0.1755" style="stop-color:#ABAEB0"/>
							<stop  offset="0.3951" style="stop-color:#E7E8E9"/>
							<stop  offset="0.5" style="stop-color:#FFFFFF"/>
							<stop  offset="1" style="stop-color:#777C7F"/>
						</linearGradient>
						<rect id="XMLID_551_" x="2" y="7" class="upWater-st1" width="6" height="3"/>
						<g id="XMLID_1_">
							<rect id="XMLID_558_" x="2" y="2" class="upWater-st2" width="6" height="6"/>							
								<radialGradient id="upWater_8_" cx="-433.2491" cy="397.6036" r="13.4118" gradientTransform="matrix(2.648001e-011 0.5898 0.5898 -2.648001e-011 -224.8701 265.2069)" gradientUnits="userSpaceOnUse">
								<stop  offset="0.2906" style="stop-color:#777C7F"/>
								<stop  offset="0.62" style="stop-color:#777C7F;stop-opacity:0"/>
							</radialGradient>
							<rect id="XMLID_555_" x="2" y="2" class="upWater-st3" width="6" height="6"/>							
								<radialGradient id="upWater_9_" cx="-432.986" cy="381.6428" r="13.4117" gradientTransform="matrix(2.648001e-011 0.5898 0.5898 -2.648001e-011 -224.8701 265.2069)" gradientUnits="userSpaceOnUse">
								<stop  offset="0.3103" style="stop-color:#777C7F"/>
								<stop  offset="0.62" style="stop-color:#777C7F;stop-opacity:0"/>
							</radialGradient>
							<rect id="XMLID_554_" x="2" y="2" class="upWater-st4" width="6" height="6"/>							
								<linearGradient id="upWater_10_" gradientUnits="userSpaceOnUse" x1="-444.0012" y1="393.7758" x2="-438.0012" y2="393.7758" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -388.7758 446.0012)">
								<stop  offset="0" style="stop-color:#777C7F"/>
								<stop  offset="0.5" style="stop-color:#777C7F;stop-opacity:0"/>
							</linearGradient>
							<rect id="XMLID_553_" x="2" y="2" class="upWater-st5" width="6" height="6"/>
						</g>
						<g id="XMLID_3_">
							<path id="XMLID_556_" class="upWater-st6" d="M10,8c-1.2,0-2,0.8-2,2V8H10z"/>
							<path id="XMLID_2_" class="upWater-st6" d="M0,8c1.2,0,2,0.8,2,2V8H0z"/>
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

export default UpWater;

import Spirit from './../../core/Spirit'

/**
 * 水管（下）
 */
class DownWater extends Spirit {

	constructor(x=10, y=10) {
        super(x, y);
	    this.name = "水管（下）";
	    this.className = "DownWater";
	    this.width = 10;
	    this.height = 16;
	    this.isSplice = true;
	    this.isRotate = false;
	    this.zIndex = 2;
	}

	template(){
		return `<div id="${this.id}" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex}">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
					 xml:space="preserve" width="10" height="10">
				<style type="text/css">
						.downWater-st0{fill:url(#downWater_6_);}
						.downWater-st1{fill:url(#downWater_7_);}
						.downWater-st2{fill:#FFFFFF;}
						.downWater-st3{fill:url(#downWater_8_);}
						.downWater-st4{fill:url(#downWater_9_);}
						.downWater-st5{fill:url(#downWater_10_);}
						.downWater-st6{fill:#777C7F;}
					</style>
					<g>
							<linearGradient id="downWater_6_" gradientUnits="userSpaceOnUse" x1="-153.9816" y1="986.4756" x2="-153.9816" y2="992.4756" gradientTransform="matrix(1 0 0 -1 158.9816 994.4756)">
							<stop  offset="0" style="stop-color:#777C7F"/>
							<stop  offset="0.5" style="stop-color:#FFFFFF"/>
							<stop  offset="0.9803" style="stop-color:#777C7F"/>
						</linearGradient>
						<rect id="XMLID_4_" y="2" class="downWater-st0" width="10" height="6"/>
						
							<linearGradient id="downWater_7_" gradientUnits="userSpaceOnUse" x1="-145.9816" y1="993.9756" x2="-145.9816" y2="999.9756" gradientTransform="matrix(-4.489659e-011 -1 -1 4.489659e-011 1001.9756 -144.4816)">
							<stop  offset="0" style="stop-color:#777C7F"/>
							<stop  offset="0.1755" style="stop-color:#ABAEB0"/>
							<stop  offset="0.3951" style="stop-color:#E7E8E9"/>
							<stop  offset="0.5" style="stop-color:#FFFFFF"/>
							<stop  offset="1" style="stop-color:#777C7F"/>
						</linearGradient>
						<rect id="XMLID_551_" x="2" class="downWater-st1" width="6" height="3"/>
						<g id="XMLID_1_">
							<rect id="XMLID_558_" x="2" y="2" class="downWater-st2" width="6" height="6"/>
							
								<radialGradient id="downWater_8_" cx="-436.6401" cy="400.9946" r="13.4118" gradientTransform="matrix(2.648238e-011 -0.5898 -0.5898 -2.648238e-011 236.8701 -257.2069)" gradientUnits="userSpaceOnUse">
								<stop  offset="0.2906" style="stop-color:#777C7F"/>
								<stop  offset="0.62" style="stop-color:#777C7F;stop-opacity:0"/>
							</radialGradient>
							<rect id="XMLID_555_" x="2" y="2" class="downWater-st3" width="6" height="6"/>
							
								<radialGradient id="downWater_9_" cx="-436.377" cy="385.0338" r="13.4117" gradientTransform="matrix(2.648238e-011 -0.5898 -0.5898 -2.648238e-011 236.8701 -257.2069)" gradientUnits="userSpaceOnUse">
								<stop  offset="0.3103" style="stop-color:#777C7F"/>
								<stop  offset="0.62" style="stop-color:#777C7F;stop-opacity:0"/>
							</radialGradient>
							<rect id="XMLID_554_" x="2" y="2" class="downWater-st4" width="6" height="6"/>
							
								<linearGradient id="downWater_10_" gradientUnits="userSpaceOnUse" x1="-446.0012" y1="395.7758" x2="-440.0012" y2="395.7758" gradientTransform="matrix(4.489700e-011 -1 -1 -4.489700e-011 400.7758 -438.0012)">
								<stop  offset="0" style="stop-color:#777C7F"/>
								<stop  offset="0.5" style="stop-color:#777C7F;stop-opacity:0"/>
							</linearGradient>
							<rect id="XMLID_553_" x="2" y="2" class="downWater-st5" width="6" height="6"/>
						</g>
						<g id="XMLID_3_">
							<path id="XMLID_556_" class="downWater-st6" d="M0,2c1.2,0,2-0.8,2-2v2H0z"/>
							<path id="XMLID_2_" class="downWater-st6" d="M10,2C8.8,2,8,1.2,8,0v2H10z"/>
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

export default DownWater;

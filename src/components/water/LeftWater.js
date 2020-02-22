import Spirit from '@/core/Spirit.js'

/**
 * 水管（左）
 */
class LeftWater extends Spirit {

	constructor(x=10, y=10) {
        super(x, y);
	    this.title = "水管（左）";
	    this.className = "LeftWater";
	    this.width = 10;
	    this.height = 20;
	    this.isSplice = true;
	}

	template(){
		return `<div id="${this.id}" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index:2;border:1px solid transparent">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
					 viewBox="0 0 10 10" xml:space="preserve" width = "10" height="10">
				<style type="text/css">
					.leftWater-st0{fill:url(#leftWater_6_);}
					.leftWater-st1{fill:url(#leftWater_7_);}
					.leftWater-st2{fill:#FFFFFF;}
					.leftWater-st3{fill:url(#leftWater_8_);}
					.leftWater-st4{fill:url(#leftWater_9_);}
					.leftWater-st5{fill:url(#leftWater_10_);}
					.leftWater-st6{fill:#777C7F;}
				</style>
				<g>					
				    <linearGradient id="leftWater_6_" gradientUnits="userSpaceOnUse" x1="-152.9816" y1="987.4756" x2="-152.9816" y2="993.4756" gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -985.4756 157.9816)">
						<stop  offset="0" style="stop-color:#777C7F"/>
						<stop  offset="0.5" style="stop-color:#FFFFFF"/>
						<stop  offset="0.9803" style="stop-color:#777C7F"/>
					</linearGradient>
					<rect id="XMLID_4_" x="2" y="0" class="leftWater-st0" width="6" height="10"/>
					
						<linearGradient id="leftWater_7_" gradientUnits="userSpaceOnUse" x1="-144.9816" y1="992.9756" x2="-144.9816" y2="998.9756" gradientTransform="matrix(1 0 0 -1 153.4816 1000.9756)">
						<stop  offset="0" style="stop-color:#777C7F"/>
						<stop  offset="0.1755" style="stop-color:#ABAEB0"/>
						<stop  offset="0.3951" style="stop-color:#E7E8E9"/>
						<stop  offset="0.5" style="stop-color:#FFFFFF"/>
						<stop  offset="1" style="stop-color:#777C7F"/>
					</linearGradient>
					<rect id="XMLID_551_" x="7" y="2" class="leftWater-st1" width="3" height="6"/>
					<g id="XMLID_1_">
						<rect id="XMLID_558_" x="2" y="2" class="leftWater-st2" width="6" height="6"/>
						
							<radialGradient id="leftWater_8_" cx="-434.9446" cy="399.2991" r="13.4118" gradientTransform="matrix(0.5898 0 0 -0.5898 266.2069 235.8701)" gradientUnits="userSpaceOnUse">
							<stop  offset="0.2906" style="stop-color:#777C7F"/>
							<stop  offset="0.62" style="stop-color:#777C7F;stop-opacity:0"/>
						</radialGradient>
						<rect id="XMLID_555_" x="2" y="2" class="leftWater-st3" width="6" height="6"/>
						
							<radialGradient id="leftWater_9_" cx="-434.6815" cy="383.3383" r="13.4117" gradientTransform="matrix(0.5898 0 0 -0.5898 266.2069 235.8701)" gradientUnits="userSpaceOnUse">
							<stop  offset="0.3103" style="stop-color:#777C7F"/>
							<stop  offset="0.62" style="stop-color:#777C7F;stop-opacity:0"/>
						</radialGradient>
						<rect id="XMLID_554_" x="2" y="2" class="leftWater-st4" width="6" height="6"/>
						
							<linearGradient id="leftWater_10_" gradientUnits="userSpaceOnUse" x1="-445.0012" y1="394.7758" x2="-439.0012" y2="394.7758" gradientTransform="matrix(1 0 0 -1 447.0012 399.7758)">
							<stop  offset="0" style="stop-color:#777C7F"/>
							<stop  offset="0.5" style="stop-color:#777C7F;stop-opacity:0"/>
						</linearGradient>
						<rect id="XMLID_553_" x="2" y="2" class="leftWater-st5" width="6" height="6"/>
					</g>
					<g id="XMLID_3_">
						<path id="XMLID_556_" class="leftWater-st6" d="M8,0c0,1.2,0.8,2,2,2H8V0z"/>
						<path id="XMLID_2_" class="leftWater-st6" d="M8,10c0-1.2,0.8-2,2-2H8V10z"/>
					</g>
				</g>
				</svg>
				</div>`;
	}

	toJson(){
		let json = {
			title:this.title,
			className:this.className
		};
		return Object.assign(super.toJson(),json);
	}
}

export default LeftWater;

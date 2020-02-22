import Spirit from '@/core/Spirit.js'

/**
 * 带液晶屏的环境监测传感器
 */
class Hjjccgqa extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.title = "带液晶屏的环境监测传感器";
	    this.className = "Hjjccgqa";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4; 
	    this.minWidth = 50;
	    this.minHeight = 50;
	    this.linkage = true;
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index:3;border:1px solid transparent">
		      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 50 80" style="enable-background:new 0 0 50 80;" xml:space="preserve">
				<style type="text/css">
					.hjjccgqa-st0{fill:url(#hjjccgqa_2_);}
					.hjjccgqa-st1{fill:#AEB4BA;}
					.hjjccgqa-st2{fill:#E2E4E8;}
					.hjjccgqa-st3{fill:#C2C8CE;}
					.hjjccgqa-st4{fill:#848776;}
					.hjjccgqa-st5{fill:#25282B;}
					.hjjccgqa-st6{fill:#939DA3;}
					.hjjccgqa-st7{opacity:0.21;}
					.hjjccgqa-st8{fill:url(#hjjccgqa_3_);}
					.hjjccgqa-st9{fill:url(#hjjccgqa_4_);}
					.hjjccgqa-st10{fill:url(#hjjccgqa_5_);}
					.hjjccgqa-st11{opacity:0.5;}
				</style>
				<linearGradient id="hjjccgqa_2_" gradientUnits="userSpaceOnUse" x1="0" y1="59.7084" x2="50" y2="59.7084">
					<stop  offset="0" style="stop-color:#BCC6C9"/>
					<stop  offset="0.1639" style="stop-color:#D0D8DB"/>
					<stop  offset="0.358" style="stop-color:#E2E7EA"/>
					<stop  offset="0.5" style="stop-color:#E8EDF0"/>
					<stop  offset="0.6116" style="stop-color:#E2E7EA"/>
					<stop  offset="0.7643" style="stop-color:#D0D7DB"/>
					<stop  offset="0.9399" style="stop-color:#B4BDC1"/>
					<stop  offset="1" style="stop-color:#A8B2B7"/>
				</linearGradient>
				<path id="hjjccgqa_1063_" class="hjjccgqa-st0" d="M0,39.5v37.4c0,1.7,11.2,3,25,3c13.8,0,25-1.3,25-3V39.5H0z"/>
				<path id="hjjccgqa_1060_" class="hjjccgqa-st1" d="M1.8,31.4L0,39.5c0,1.7,11.2,3,25,3c13.8,0,25-1.3,25-3l-1.8-8.1c-0.2-0.7-0.8-1.2-1.5-1.2
					H3.3C2.6,30.1,1.9,30.6,1.8,31.4z"/>
				<path id="hjjccgqa_1068_" class="hjjccgqa-st2" d="M25,59.1c-12.6,0-22.9-1.2-22.9-2.7v15.9C2.1,73.8,12.4,75,25,75c12.6,0,22.9-1.2,22.9-2.7
					V56.4C47.9,57.9,37.6,59.1,25,59.1z"/>
				<path id="hjjccgqa_1069_" class="hjjccgqa-st3" d="M25,75c12.6,0,22.9-1.2,22.9-2.7H2.1C2.1,73.8,12.4,75,25,75z"/>
				<g id="hjjccgqa_1061_">
					<rect id="hjjccgqa_1071_" x="12.8" y="60.7" class="hjjccgqa-st4" width="22.7" height="7.9"/>
					<path id="hjjccgqa_1062_" class="hjjccgqa-st5" d="M36.4,69.4H12v-9.6h24.4V69.4z M13.7,67.7h21.1v-6.2H13.7V67.7z"/>
				</g>
				<path id="hjjccgqa_1064_" class="hjjccgqa-st6" d="M3,47.1c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7l1.6-1.7c0.2-0.2,0.5-0.2,0.7,0
					c0.2,0.2,0.2,0.5,0,0.7l-1.6,1.7C3.3,47,3.2,47.1,3,47.1z"/>
				<path id="hjjccgqa_1065_" class="hjjccgqa-st6" d="M3,50.6c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7l5-5c0.2-0.2,0.5-0.2,0.7,0
					s0.2,0.5,0,0.7l-5,5C3.3,50.5,3.2,50.6,3,50.6z"/>
				<path id="hjjccgqa_1066_" class="hjjccgqa-st6" d="M3,54.4c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7l9.1-9.2c0.2-0.2,0.5-0.2,0.7,0
					c0.2,0.2,0.2,0.5,0,0.7l-9.1,9.2C3.3,54.4,3.2,54.4,3,54.4z"/>
				<ellipse id="hjjccgqa_1076_" class="hjjccgqa-st7" cx="37.2" cy="36" rx="4.5" ry="2.1"/>
				<linearGradient id="hjjccgqa_3_" gradientUnits="userSpaceOnUse" x1="33.0413" y1="19.7386" x2="41.2769" y2="19.7386">
					<stop  offset="0" style="stop-color:#ACB1B9"/>
					<stop  offset="0.4813" style="stop-color:#FFFFFF"/>
					<stop  offset="1" style="stop-color:#A9AEB7"/>
				</linearGradient>
				<path id="hjjccgqa_1073_" class="hjjccgqa-st8" d="M33,2v33.6c0,1.1,1.8,2,4.1,2c2.3,0,4.1-0.9,4.1-2V2H33z"/>
				<ellipse id="hjjccgqa_1072_" class="hjjccgqa-st1" cx="37.2" cy="2" rx="4.1" ry="2"/>
				<ellipse id="hjjccgqa_1082_" class="hjjccgqa-st7" cx="13.7" cy="36" rx="4.5" ry="2.1"/>
				<linearGradient id="hjjccgqa_4_" gradientUnits="userSpaceOnUse" x1="9.5361" y1="34.1154" x2="17.7718" y2="34.1154">
					<stop  offset="0" style="stop-color:#83878E"/>
					<stop  offset="0.4813" style="stop-color:#D9DDE2"/>
					<stop  offset="1" style="stop-color:#83878E"/>
				</linearGradient>
				<path id="hjjccgqa_1081_" class="hjjccgqa-st9" d="M9.5,30.7v4.8c0,1.1,1.8,2,4.1,2c2.3,0,4.1-0.9,4.1-2v-4.8H9.5z"/>
				<linearGradient id="hjjccgqa_5_" gradientUnits="userSpaceOnUse" x1="8.4899" y1="29.6304" x2="18.818" y2="29.6304">
					<stop  offset="0" style="stop-color:#ACB1B9"/>
					<stop  offset="0.4813" style="stop-color:#FFFFFF"/>
					<stop  offset="1" style="stop-color:#A9AEB7"/>
				</linearGradient>
				<path id="hjjccgqa_1083_" class="hjjccgqa-st10" d="M8.5,25.4v6c0,1.4,2.3,2.5,5.2,2.5c2.9,0,5.2-1.1,5.2-2.5v-6H8.5z"/>
				<ellipse id="hjjccgqa_1077_" class="hjjccgqa-st1" cx="13.7" cy="25.4" rx="5.2" ry="2.5"/>
				<g id="hjjccgqa_1074_" class="hjjccgqa-st11">
					<path id="hjjccgqa_1075_" d="M36.7,6.9c-0.3,0-0.7-0.1-1-0.1v9c0.3,0.1,0.7,0.1,1,0.1V6.9z"/>
					<path id="hjjccgqa_1078_" d="M34.7,6.5c-0.4-0.1-0.7-0.3-1-0.5v9c0.3,0.2,0.6,0.4,1,0.5V6.5z"/>
					<path id="hjjccgqa_1079_" d="M40.7,6c-0.3,0.2-0.6,0.4-1,0.5v9c0.4-0.1,0.7-0.3,1-0.5V6z"/>
					<path id="hjjccgqa_1080_" d="M38.7,6.8c-0.3,0.1-0.7,0.1-1,0.1v9c0.3,0,0.7-0.1,1-0.1V6.8z"/>
				</g>
				</svg>
			</div>`);
	}

	toJson() {
		let json = {
			title:this.title,
			className:this.className,
			moveType:this.moveType,
			linkage:this.linkage,
			minWidth:this.minWidth,
			minHeight:this.minHeight
		};
		return Object.assign(super.toJson(),json);
	}
	
}

export default Hjjccgqa;

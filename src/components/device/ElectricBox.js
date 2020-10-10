import Spirit from './../../core/Spirit'

/**
 * 电柜
 */
class ElectricityMeter extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.name = "电柜";
	    this.className = "ElectricBox";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4;
	    this.minWidth = 20;
	    this.minHeight = 20;
	    this.linkage = true;
	    this.zIndex = 2;
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 45 45" style="enable-background:new 0 0 45 45;" xml:space="preserve">
				<style type="text/css">
					.eb-st0{fill:#DFE2E8;}
					.eb-st1{fill:#C1C7CC;}
					.eb-st2{fill:#54626C;} 
					.eb-st3{fill:#2E383D;}
					.eb-st4{fill:#FFFFFF;}
					.eb-st5{fill:#459E37;}
					.eb-st6{fill:#CD5A59;}
					.eb-st7{fill:#5D6471;}
					.eb-st8{fill:#838B99;}
					.eb-st9{fill:#B4BCC7;}
					.eb-st10{fill:#ECF2F9;}
				</style>
				<rect id="XMLID_18_" x="1.3" y="17.2" class="eb-st0" width="42.2" height="26.2"/>
				<polygon id="XMLID_19_" class="eb-st1" points="43.5,17.2 1.3,17.2 3.5,11.8 41.3,11.8 "/>
				<rect id="XMLID_20_" x="3.5" y="1.3" class="eb-st0" width="37.8" height="10.5"/>
				<rect id="XMLID_21_" x="3.5" class="eb-st1" width="37.8" height="1.3"/>
				<rect id="XMLID_22_" x="6" y="23.8" class="eb-st2" width="32.8" height="20.7"/>
				<rect id="XMLID_23_" x="6" y="22.8" class="eb-st3" width="32.8" height="0.9"/>
				<rect id="XMLID_28_" x="21.9" y="22.8" class="eb-st3" width="0.9" height="21.7"/>
				<circle id="XMLID_24_" class="eb-st4" cx="14.4" cy="32.8" r="3.5"/>
				<circle id="XMLID_25_" class="eb-st5" cx="14.4" cy="32.8" r="2.8"/>
				<circle id="XMLID_27_" class="eb-st4" cx="30.4" cy="32.8" r="3.5"/>
				<circle id="XMLID_26_" class="eb-st6" cx="30.4" cy="32.8" r="2.8"/>
				<path id="XMLID_35_" class="eb-st7" d="M16.5,15.4h-6.1c-4.1,0-7.1-1.7-8.1-4.6C1.5,8.4,2.4,5.8,4.5,4.2c3-2.2,5.8-1.6,9.1-0.9
					c2.1,0.4,4.4,1,7.3,1c4.7,0,10.2,0.1,10.2,0.1L31.1,8C31.1,8,25.6,7.9,21,7.9c-3.4,0-6-0.6-8.1-1C9.7,6.2,8.3,5.9,6.7,7.1
					C5.8,7.7,5.4,8.8,5.7,9.7c0.4,1.3,2.2,2.1,4.6,2.1h6.1V15.4z"/>
				<path id="XMLID_36_" class="eb-st8" d="M16.5,14.7h-6.1c-3.8,0-6.5-1.5-7.4-4.1c-0.7-2.1,0.1-4.4,2-5.8c2.7-2,5.4-1.4,8.5-0.7
					c2.1,0.5,4.5,1,7.5,1c4.7,0,10.2,0.1,10.2,0.1l0,2.2c-0.1,0-5.5-0.1-10.2-0.1c-3.3,0-5.9-0.6-8-1c-3-0.7-4.8-1.1-6.8,0.4
					C5.1,7.3,4.7,8.7,5,9.9c0.5,1.6,2.5,2.6,5.3,2.6h6.1V14.7z"/>
				<path id="XMLID_37_" class="eb-st9" d="M16.5,14h-6.1c-3.4,0-5.9-1.4-6.7-3.6c-0.6-1.8,0.1-3.8,1.7-5c2.5-1.8,4.9-1.3,8-0.6
					c2.1,0.5,4.5,1,7.7,1c4.7,0,10.1,0.1,10.2,0.1l0,0.7c-0.1,0-5.5-0.1-10.2-0.1c-3.2,0-5.8-0.6-7.8-1C10,4.8,8,4.3,5.8,5.9
					c-1.4,1-1.9,2.7-1.4,4.2c0.6,1.9,2.9,3.1,6,3.1h6.1V14z"/>
				<rect id="XMLID_31_" x="9.2" y="12" class="eb-st10" width="9.2" height="4.3"/>
				<polygon id="XMLID_30_" class="eb-st1" points="18.4,12 9.2,12 9.7,9.8 18.4,9.8 "/>
				<rect id="XMLID_33_" x="21.1" y="4.9" class="eb-st4" width="11.6" height="5.1"/>
				<polygon id="XMLID_32_" class="eb-st1" points="21.1,4.9 32.7,4.9 32.1,2.3 21.1,2.3 "/>
				</svg>
			</div>`);
	}

	toJson() {
		let json = {
			className: this.className,
			moveType: this.moveType,
			linkage: this.linkage,
			minWidth: this.minWidth,
			minHeight: this.minHeight,
			zIndex: this.zIndex
		};
		return Object.assign(super.toJson(),json);
	}
}

export default ElectricityMeter;

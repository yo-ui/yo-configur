import Spirit from '@/core/Spirit.js'

/**
 * 门磁报警器
 */
class Mcbjq extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.title = "门磁报警器";
	    this.className = "Mcbjq";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4;
	    this.minWidth = 20;
	    this.minHeight = 20;
	    this.zIndex = 2;
	    this.linkage = true;
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
		      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 48 44" style="enable-background:new 0 0 48 44;" xml:space="preserve">
				<style type="text/css">
					.mcbjq-st0{fill:#B0B9C1;}
					.mcbjq-st1{fill:url(#mcbjq_2_);}
					.mcbjq-st2{fill:#DFE3E8;}
					.mcbjq-st3{fill:#99A3AA;}
					.mcbjq-st4{fill:url(#mcbjq_3_);}
					.mcbjq-st5{fill:#AFB8BC;}
					.mcbjq-st6{fill:#F2F5F9;}
				</style>
				<path id="XMLID_1505_" class="mcbjq-st0" d="M22.8,0H9.3H9.2h-6C1.5,0,0,1.5,0,3.3v4.9h9.2h0.1H26V3.3C26,1.5,24.6,0,22.8,0z"/>
				<linearGradient id="mcbjq_2_" gradientUnits="userSpaceOnUse" x1="5.593969e-006" y1="22.4756" x2="9.3225" y2="22.4756">
					<stop  offset="0.6471" style="stop-color:#DFE3E8"/>
					<stop  offset="1" style="stop-color:#A8B2B7"/>
				</linearGradient>
				<path id="XMLID_1503_" class="mcbjq-st1" d="M9.3,42.5H3.3C1.5,42.5,0,41,0,39.2V5.7c0-1.8,1.5-3.3,3.3-3.3h6.1V42.5z"/>
				<path id="XMLID_1500_" class="mcbjq-st2" d="M22.8,43.9H10.7c-0.8,0-1.5-0.7-1.5-1.5V6.4c0-0.8,0.7-1.5,1.5-1.5h12.1
					c1.8,0,3.3,1.5,3.3,3.3v32.5C26,42.5,24.6,43.9,22.8,43.9z"/>
				<ellipse id="XMLID_1501_" class="st3" cx="4.4" cy="9.6" rx="1.7" ry="1.5"/>
				<ellipse id="XMLID_1502_" class="st3" cx="4.4" cy="35.9" rx="1.7" ry="1.5"/>
				<path id="XMLID_1515_" class="mcbjq-st0" d="M32.3,0l6.4,0l0.1,0l6,0C46.6,0,48,1.5,48,3.3v4.9h-9.2h-0.1H29V3.3C29,1.5,30.5,0,32.3,0z"/>
				<linearGradient id="mcbjq_3_" gradientUnits="userSpaceOnUse" x1="211.3258" y1="22.4756" x2="220.6483" y2="22.4756" gradientTransform="matrix(-1 0 0 1 259.3461 0)">
					<stop  offset="0.6471" style="stop-color:#DFE3E8"/>
					<stop  offset="1" style="stop-color:#A8B2B7"/>
				</linearGradient>
				<path id="XMLID_1514_" class="mcbjq-st4" d="M38.7,42.5h6.1c1.8,0,3.3-1.5,3.3-3.3V5.7c0-1.8-1.5-3.3-3.3-3.3h-6.1V42.5z"/>
				<path id="XMLID_1512_" class="mcbjq-st2" d="M32.3,43.9h5.1c0.8,0,1.5-0.7,1.5-1.5V6.4c0-0.8-0.7-1.5-1.5-1.5h-5.1c-1.8,0-3.3,1.5-3.3,3.3
					v32.5C29,42.5,30.5,43.9,32.3,43.9z"/>
				<ellipse id="XMLID_1508_" class="mcbjq-st3" cx="43.6" cy="9.6" rx="1.7" ry="1.5"/>
				<ellipse id="XMLID_1507_" class="mcbjq-st3" cx="43.6" cy="35.9" rx="1.7" ry="1.5"/>
				<ellipse id="XMLID_1506_" class="mcbjq-st3" cx="17.4" cy="12.8" rx="4.4" ry="3.9"/>
				<rect id="XMLID_1509_" x="11.8" y="32.3" class="mcbjq-st5" width="11.5" height="1"/>
				<rect id="XMLID_1510_" x="11.8" y="35.3" class="mcbjq-st5" width="11.5" height="1"/>
				<rect id="XMLID_1511_" x="11.8" y="38.3" class="mcbjq-st5" width="11.5" height="1"/>
				<ellipse id="XMLID_1504_" class="mcbjq-st6" cx="17.4" cy="13.3" rx="3.9" ry="3.4"/>
				</svg>
			</div>`);
	}

	toJson() {
		let json = {
			title: this.title,
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

export default Mcbjq;

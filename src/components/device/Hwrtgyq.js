import Spirit from '@/core/Spirit.js'

/**
 * 红外人体感应器
 */
class Hwrtgyq extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.title = "红外人体感应器";
	    this.className = "Hwrtgyq";
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
					 viewBox="0 0 43 41" style="enable-background:new 0 0 43 41;" xml:space="preserve">
				<style type="text/css">
					.hwrtgyq-st0{fill:#B0B9C1;}
					.hwrtgyq-st1{fill:#DFE3E8;}
					.hwrtgyq-st2{fill:#C0C7CE;}
					.hwrtgyq-st3{fill:#EFF1F4;}
					.hwrtgyq-st4{fill:#99A3AA;}
					.hwrtgyq-st5{fill:url(#hwrtgyq_2_);}
				</style>
				<path id="XMLID_1474_" class="hwrtgyq-st0" d="M39.7,0H3.3C1.5,0,0,1.5,0,3.3v1.9h43V3.3C43,1.5,41.5,0,39.7,0z"/>
				<path id="XMLID_1473_" class="hwrtgyq-st1" d="M39.7,40.9H3.3c-1.8,0-3.3-1.5-3.3-3.3V5.2c0-1.8,1.5-3.3,3.3-3.3h36.5c1.8,0,3.3,1.5,3.3,3.3
					v32.5C43,39.5,41.5,40.9,39.7,40.9z"/>
				<path id="XMLID_1436_" class="hwrtgyq-st2" d="M21.5,5C15.7,5,11,8.5,11,12.7v15.4c0,4.2,4.7,7.7,10.5,7.7S32,32.3,32,28.1V12.7
					C32,8.5,27.3,5,21.5,5z"/>
				<path id="XMLID_1441_" class="hwrtgyq-st3" d="M21.5,7C15.7,7,11,10.5,11,14.7v15.4c0,4.2,4.7,7.7,10.5,7.7S32,34.3,32,30.1V14.7
					C32,10.5,27.3,7,21.5,7z"/>
				<ellipse id="XMLID_1438_" class="hwrtgyq-st4" cx="21.5" cy="22.9" rx="7.5" ry="7.1"/>
				<radialGradient id="hwrtgyq_2_" cx="21.5228" cy="25.1348" r="9.837" gradientUnits="userSpaceOnUse">
					<stop  offset="0" style="stop-color:#FFFFFF"/>
					<stop  offset="1" style="stop-color:#A9AEB7"/>
				</radialGradient>
				<ellipse id="XMLID_1442_" class="hwrtgyq-st5" cx="21.5" cy="23.3" rx="6.7" ry="6.3"/>
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
			minHeight:this.minHeight,
			zIndex:this.zIndex
		};
		return Object.assign(super.toJson(),json);
	}

}

export default Hwrtgyq;

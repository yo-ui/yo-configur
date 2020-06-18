import Spirit from '@/core/Spirit.js'

/**
 * 整体式热量表
 */
class Ztsrlb extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.title = "整体式热量表";
	    this.className = "Ztsrlb";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4;
	    this.minWidth = 20;
	    this.minHeight = 20;
	    this.linkage = true;
	    this.zIndex = 3;
      this.isPanel = true;
      this.isBind = true;
      this.isLinkPoint = true;
      this.config = {bindData: {organizId:'',deviceId:'',devicePoint:''}}
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;border:1px solid transparent;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 60 36" style="enable-background:new 0 0 60 36;" xml:space="preserve">
				<style type="text/css">
					.ztsrlb-st0{fill:url(#ztsrlb_2_);}
					.ztsrlb-st1{opacity:0.15;}
					.ztsrlb-st2{fill:url(#ztsrlb_3_);}
					.ztsrlb-st3{fill:url(#ztsrlb_4_);}
					.ztsrlb-st4{fill:#21302F;}
					.ztsrlb-st5{fill:#415B5A;}
					.ztsrlb-st6{fill:#77A09F;}
					.ztsrlb-st7{fill:#848776;}
					.ztsrlb-st8{fill:#25282B;}
					.ztsrlb-st9{fill:#B60000;}
				</style>
				<linearGradient id="ztsrlb_2_" gradientUnits="userSpaceOnUse" x1="29.6592" y1="33.3974" x2="29.6592" y2="20.541">
					<stop  offset="0" style="stop-color:#845100"/>
					<stop  offset="0.1209" style="stop-color:#9C6D24"/>
					<stop  offset="0.3521" style="stop-color:#C69F64"/>
					<stop  offset="0.5209" style="stop-color:#E0BE8C"/>
					<stop  offset="0.6084" style="stop-color:#EACA9B"/>
					<stop  offset="1" style="stop-color:#BF7600"/>
				</linearGradient>
				<rect id="ztsrlb_953_" x="7.4" y="20.5" class="ztsrlb-st0" width="44.5" height="12.9"/>
				<rect id="ztsrlb_956_" x="49.8" y="20.5" class="ztsrlb-st1" width="2.2" height="12.9"/>
				<rect id="ztsrlb_957_" x="7" y="20.5" class="ztsrlb-st1" width="2.2" height="12.9"/>
				<linearGradient id="ztsrlb_3_" gradientUnits="userSpaceOnUse" x1="4.1167" y1="36.0038" x2="4.1167" y2="17.9347">
					<stop  offset="0" style="stop-color:#845100"/>
					<stop  offset="0.1209" style="stop-color:#9C6D24"/>
					<stop  offset="0.3521" style="stop-color:#C69F64"/>
					<stop  offset="0.5209" style="stop-color:#E0BE8C"/>
					<stop  offset="0.6084" style="stop-color:#EACA9B"/>
					<stop  offset="1" style="stop-color:#BF7600"/>
				</linearGradient>
				<rect id="ztsrlb_951_" y="17.9" class="ztsrlb-st2" width="8.2" height="18.1"/>
				<linearGradient id="ztsrlb_4_" gradientUnits="userSpaceOnUse" x1="55.1199" y1="36.0038" x2="55.1199" y2="17.9347">
					<stop  offset="0" style="stop-color:#845100"/>
					<stop  offset="0.1209" style="stop-color:#9C6D24"/>
					<stop  offset="0.3521" style="stop-color:#C69F64"/>
					<stop  offset="0.5209" style="stop-color:#E0BE8C"/>
					<stop  offset="0.6084" style="stop-color:#EACA9B"/>
					<stop  offset="1" style="stop-color:#BF7600"/>
				</linearGradient>
				<rect id="ztsrlb_952_" x="51" y="17.9" class="ztsrlb-st3" width="8.2" height="18.1"/>
				<rect id="ztsrlb_958_" x="18.8" y="24.7" class="ztsrlb-st4" width="3.4" height="3.2"/>
				<rect id="ztsrlb_959_" x="37.2" y="24.7" class="ztsrlb-st4" width="3.4" height="3.2"/>
				<path id="ztsrlb_955_" class="ztsrlb-st5" d="M42.3,26H17c-1.6,0-2.8-1.3-2.8-2.8V7.8C14.1,6.3,15.4,5,17,5h25.3c1.6,0,2.8,1.3,2.8,2.8v15.3
					C45.1,24.7,43.8,26,42.3,26z"/>
				<path id="ztsrlb_954_" class="ztsrlb-st6" d="M42.3,21H17c-1.6,0-2.8-1.3-2.8-2.8V2.8C14.1,1.3,15.4,0,17,0h25.3c1.6,0,2.8,1.3,2.8,2.8v15.3
					C45.1,19.7,43.8,21,42.3,21z"/>
				<g id="ztsrlb_960_">
					<rect id="ztsrlb_964_" x="18.2" y="4" class="ztsrlb-st7" width="22.9" height="8.7"/>
					<path id="ztsrlb_961_" class="ztsrlb-st8" d="M42.1,13.7H17.2V3h24.9V13.7z M19.2,11.7h20.9V5H19.2V11.7z"/>
				</g>
				<ellipse id="ztsrlb_965_" class="ztsrlb-st4" cx="29.3" cy="17.3" rx="2.8" ry="2.3"/>
				<ellipse id="ztsrlb_966_" class="ztsrlb-st9" cx="29.3" cy="17.3" rx="1.9" ry="1.6"/>
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
			zIndex: this.zIndex,
		};
		return Object.assign(super.toJson(),json);
	}

  createLinkPoint() {
    let x = parseInt(this.x+this.width*0.9-3);
    let y = parseInt(this.y+this.height*0.6-2)
    let spirit = this.stage.create("LinkPoint",x,y,10,10);
    spirit.isAuto = true;
    this.stage.capacity.push(spirit);
    let x2 = parseInt(this.x+this.width*0.1-8);
    let y2 = parseInt(this.y+this.height*0.6-2)
    let spirit2 = this.stage.create("LinkPoint",x2,y2,10,10);
    spirit2.isAuto = true;
    this.stage.capacity.push(spirit2);
  }
}

export default Ztsrlb;

import Spirit from './../../core/Spirit'

/**
 * 组合式热量表
 */
class Zhsrlb extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.name = "组合式热量表";
	    this.className = "Zhsrlb";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4;
	    this.minWidth = 20;
	    this.minHeight = 20;
	    this.linkage = false;
	    this.zIndex = 2;
      this.isLinkPoint = true;
      this.isAnimation = true;
      this.config = {
        bindData: {deviceId: ''},
        animations: [
          {type: 51, text: '大小->宽度', expr: '', maxWidth: 100, minWidth: 0,site: 2},
          {type: 52, text: '大小->高度', expr: '', maxHeight: 100, minHeight: 0,site: 2},
          {type: 61, text: '位置->水平', expr: '', left: 0, right: 100},
          {type: 62, text: '位置->垂直', expr: '', top: 0, bottom: 100},
          {
            type: 81,
            text: '可见性',
            expr: '',
            value: 1
          }]
      }
	}

	template() {
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
		  <svg class="canvas" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 82 68" xml:space="preserve" preserveAspectRatio="none">
				<style type="text/css">
					.zhsrlb-st0{fill:url(#zhsrlb_3_);}
					.zhsrlb-st1{fill:url(#zhsrlb_4_);}
					.zhsrlb-st2{fill:url(#zhsrlb_5_);}
					.zhsrlb-st3{fill:url(#zhsrlb_6_);}
					.zhsrlb-st4{fill:#B6BCC1;}
					.zhsrlb-st5{fill:#DFE3E8;}
					.zhsrlb-st6{fill:#77A09F;}
					.zhsrlb-st7{fill:#5C7775;}
					.zhsrlb-st8{fill:#2C3F99;}
					.zhsrlb-st9{fill:#A6D1CE;}
					.zhsrlb-st10{fill:#25282B;}
					.zhsrlb-st11{fill:#848776;}
					.zhsrlb-st12{fill:#61BC31;}
					.zhsrlb-st13{fill:#D20000;}
				</style>
				<g id="XMLID_1_">
					<linearGradient id="zhsrlb_3_" gradientUnits="userSpaceOnUse" x1="10.2998" y1="37.0145" x2="10.2998" y2="51.3401">
						<stop  offset="0" style="stop-color:#0E255A"/>
						<stop  offset="0.508" style="stop-color:#1456BB"/>
						<stop  offset="0.8382" style="stop-color:#103377"/>
						<stop  offset="1" style="stop-color:#0E255A"/>
					</linearGradient>
					<path id="XMLID_992_" class="zhsrlb-st0" d="M13.5,51.9H6.7v-15h6.7c0,0,0.4,4,0.4,8S13.5,51.9,13.5,51.9z"/>
					<linearGradient id="zhsrlb_4_" gradientUnits="userSpaceOnUse" x1="4.1167" y1="35.4814" x2="4.1167" y2="52.722">
						<stop  offset="0" style="stop-color:#845100"/>
						<stop  offset="0.1209" style="stop-color:#9C6D24"/>
						<stop  offset="0.3521" style="stop-color:#C69F64"/>
						<stop  offset="0.5209" style="stop-color:#E0BE8C"/>
						<stop  offset="0.6084" style="stop-color:#EACA9B"/>
						<stop  offset="1" style="stop-color:#BF7600"/>
					</linearGradient>
					<rect id="XMLID_991_" y="35.3" class="zhsrlb-st1" width="8.2" height="18.1"/>					
						<linearGradient id="zhsrlb_5_" gradientUnits="userSpaceOnUse" x1="-896.4429" y1="37.0145" x2="-896.4429" y2="51.3401" gradientTransform="matrix(-1 0 0 1 -825.0268 0)">
						<stop  offset="0" style="stop-color:#0E255A"/>
						<stop  offset="0.508" style="stop-color:#1456BB"/>
						<stop  offset="0.8382" style="stop-color:#103377"/>
						<stop  offset="1" style="stop-color:#0E255A"/>
					</linearGradient>
					<path id="XMLID_989_" class="zhsrlb-st2" d="M68.2,51.9H75v-15h-6.7c0,0-0.4,4-0.4,8S68.2,51.9,68.2,51.9z"/>
					
						<linearGradient id="zhsrlb_6_" gradientUnits="userSpaceOnUse" x1="-902.626" y1="35.4814" x2="-902.626" y2="52.722" gradientTransform="matrix(-1 0 0 1 -825.0268 0)">
						<stop  offset="0" style="stop-color:#845100"/>
						<stop  offset="0.1209" style="stop-color:#9C6D24"/>
						<stop  offset="0.3521" style="stop-color:#C69F64"/>
						<stop  offset="0.5209" style="stop-color:#E0BE8C"/>
						<stop  offset="0.6084" style="stop-color:#EACA9B"/>
						<stop  offset="1" style="stop-color:#BF7600"/>
					</linearGradient>
					<rect id="XMLID_982_" x="73.5" y="35.3" class="zhsrlb-st3" width="8.2" height="18.1"/>
					<path id="XMLID_987_" class="zhsrlb-st4" d="M70,14.9H12L17.2,2c0.4-1.2,1.6-2,2.9-2h41.7c1.3,0,2.4,0.8,2.9,2L70,14.9z"/>
					<path id="XMLID_986_" class="zhsrlb-st5" d="M66.7,67.4H15.3c-1.8,0-3.3-1.5-3.3-3.3V14.9c0-1.8,1.5-3.3,3.3-3.3h51.5
						c1.8,0,3.3,1.5,3.3,3.3v49.2C70,65.9,68.5,67.4,66.7,67.4z"/>
					<path id="XMLID_984_" class="zhsrlb-st6" d="M63.2,62.1H18.7c-1,0-1.8-0.8-1.8-1.8V17.5c0-1,0.8-1.8,1.8-1.8h44.5c1,0,1.8,0.8,1.8,1.8
						v42.8C65,61.3,64.2,62.1,63.2,62.1z"/>
					<path id="XMLID_983_" class="zhsrlb-st7" d="M63.2,59.5H18.7c-1,0-1.8-0.8-1.8-1.8v2.6c0,1,0.8,1.8,1.8,1.8h44.5c1,0,1.8-0.8,1.8-1.8v-2.6
						C65,58.7,64.2,59.5,63.2,59.5z"/>
					<path id="XMLID_988_" class="zhsrlb-st8" d="M17.1,7.6h47.8c1.1,0,2,0.5,2.6,1.3l-1.8-4.5c-0.6-1-1.6-1.6-2.8-1.6H19
						c-1.2,0-2.3,0.7-2.8,1.6l-0.3,0.8c-0.1,0.3-0.2,0.4-0.3,0.7l-0.9,2.1l-0.4,1C14.9,8.3,15.9,7.6,17.1,7.6z"/>
					<path id="XMLID_980_" class="zhsrlb-st9" d="M60.1,49.6H21.8V19.5h38.3V49.6z"/>
					<rect id="XMLID_979_" x="25.7" y="40.4" class="zhsrlb-st10" width="4.5" height="2.5"/>
					<rect id="XMLID_978_" x="33.7" y="40.4" class="zhsrlb-st10" width="4.5" height="2.5"/>
					<rect id="XMLID_977_" x="25.5" y="44.9" class="zhsrlb-st10" width="30.3" height="1"/>
					<g id="XMLID_967_">
						<rect id="XMLID_971_" x="26.8" y="24.8" class="zhsrlb-st11" width="28.3" height="12"/>
						<path id="XMLID_968_" class="zhsrlb-st10" d="M56.1,37.8H25.8v-14h30.3V37.8z M27.8,35.8h26.3v-10H27.8V35.8z"/>
					</g>
					<circle id="XMLID_972_" class="zhsrlb-st10" cx="26.3" cy="54.8" r="2.5"/>
					<circle id="XMLID_973_" class="zhsrlb-st12" cx="26.3" cy="54.8" r="1.9"/>
					<circle id="XMLID_975_" class="zhsrlb-st10" cx="55.3" cy="54.8" r="2.5"/>
					<circle id="XMLID_974_" class="zhsrlb-st13" cx="55.3" cy="54.8" r="1.9"/>
				</g>
				</svg>
			</div>`);
	}

  initialize() {
    let that = this;
    this.stage.variableList.forEach(function (variable) {
      let data = {}
      data.key = variable.key;
      data.value = variable.value;
      that.dynamic(data);
    })
    let deviceId = that.config.bindData.deviceId
    if(deviceId) {
      that.stage.option.getDevice(deviceId,function (device) {
        if(deviceId==device.id) {
          that.reveal(device);
        }
      });
    }
  }

  reveal(device) {
    let that = this;
    if(device) {
      device.points.forEach(function(point) {
        if(that.isAnimation) {
          let data = {}
          data.key = point.id;
          data.value = point.value;
          that.dynamic(data);
        }
      })
    }
  }

	toJson() {
		let json = {
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
    let x = parseInt(this.x+this.width-8);
    let y = parseInt(this.y+this.height*0.6-4)
    let spirit = this.stage.create("LinkPoint",x,y,10,10);
    spirit.isAuto = true;
    this.stage.capacity.push(spirit);
    let x2 = parseInt(this.x-2);
    let y2 = parseInt(this.y+this.height*0.6-4);
    let spirit2 = this.stage.create("LinkPoint",x2,y2,10,10);
    spirit2.isAuto = true;
    this.stage.capacity.push(spirit2);
  }
}

export default Zhsrlb;

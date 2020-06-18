import Spirit from '@/core/Spirit.js'

/**
 * 超时波流量计
 */
class Csbllj extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.title = "超时波流量计";
	    this.className = "Csbllj";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4;
	    this.minWidth = 20;
	    this.minHeight = 20;
	    this.linkage = true;
	    this.isPanel = true;
	    this.isBind = true;
      this.isLinkPoint = true;
	    this.zIndex = 3;
	    this.config = {bindData: {organizId:'',deviceId:'',devicePoint:''}}
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;border:1px solid transparent;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 52 78" style="enable-background:new 0 0 52 78;" xml:space="preserve">
				<style type="text/css">
					.csbllj-st0{fill:url(#csbllj_2_);}
					.csbllj-st1{fill:#064289;}
					.csbllj-st2{fill:url(#csbllj_3_);}
					.csbllj-st3{fill:url(#csbllj_4_);}
					.csbllj-st4{fill:url(#csbllj_5_);}
					.csbllj-st5{fill:url(#csbllj_6_);}
					.csbllj-st6{fill:url(#csbllj_7_);}
					.csbllj-st7{fill:#AEB4BA;}
					.csbllj-st8{fill:url(#csbllj_8_);}
					.csbllj-st9{fill:url(#csbllj_9_);}
					.csbllj-st10{fill:#0E89D6;}
					.csbllj-st11{fill:#DFE3E8;}
					.csbllj-st12{fill:url(#csbllj_10_);}
					.csbllj-st13{fill:url(#csbllj_11_);}
				</style>
				<linearGradient id="csbllj_2_" gradientUnits="userSpaceOnUse" x1="-531.6956" y1="40.1939" x2="-531.6956" y2="78.6682" gradientTransform="matrix(-1 0 0 1 -483.3202 0)">
					<stop  offset="0" style="stop-color:#0D3A70"/>
					<stop  offset="0.5027" style="stop-color:#17A1E5"/>
					<stop  offset="1" style="stop-color:#0D3A70"/>
				</linearGradient>
				<path id="XMLID_1684_" class="csbllj-st0" d="M45.1,39.6h3.7c1.6,0,2.8,8.6,2.8,19.1s-1.3,19.1-2.8,19.1h-3.7V39.6z"/>
				<ellipse id="XMLID_1681_" class="csbllj-st1" cx="45.1" cy="58.8" rx="2.8" ry="19.1"/>
				<linearGradient id="csbllj_3_" gradientUnits="userSpaceOnUse" x1="3.6246" y1="40.1939" x2="3.6246" y2="78.6682">
					<stop  offset="0" style="stop-color:#0D3A70"/>
					<stop  offset="0.5027" style="stop-color:#17A1E5"/>
					<stop  offset="1" style="stop-color:#0D3A70"/>
				</linearGradient>
				<path id="XMLID_1680_" class="csbllj-st2" d="M6.9,39.6H3.2c-1.6,0-2.8,8.6-2.8,19.1s1.3,19.1,2.8,19.1h3.7V39.6z"/>
				<ellipse id="XMLID_1679_" class="csbllj-st1" cx="6.9" cy="58.8" rx="2.8" ry="19.1"/>
				<linearGradient id="csbllj_4_" gradientUnits="userSpaceOnUse" x1="26.0421" y1="47.3153" x2="26.0421" y2="69.029">
					<stop  offset="0" style="stop-color:#0D3A70"/>
					<stop  offset="0.3957" style="stop-color:#17A1E5"/>
					<stop  offset="0.9412" style="stop-color:#0D2257"/>
				</linearGradient>
				<path id="XMLID_1676_" class="csbllj-st3" d="M45.2,47.3H7.3c-0.7,0-1.6,4.9-1.6,11s0.9,11,1.6,11h37.9c0,0,1.2-3.2,1.2-11
					S45.2,47.3,45.2,47.3z"/>
				<linearGradient id="csbllj_5_" gradientUnits="userSpaceOnUse" x1="13.2124" y1="52.4469" x2="38.5343" y2="52.4469">
					<stop  offset="0" style="stop-color:#0D3A70"/>
					<stop  offset="0.4992" style="stop-color:#17A1E5"/>
					<stop  offset="0.587" style="stop-color:#1690D2"/>
					<stop  offset="0.7654" style="stop-color:#1264A1"/>
					<stop  offset="1" style="stop-color:#0D2257"/>
				</linearGradient>
				<path id="XMLID_1673_" class="csbllj-st4" d="M13.2,42.5v6.8c0,4.6,5.7,13.1,12.7,13.1c7,0,12.7-8.5,12.7-13.1v-6.8H13.2z"/>
				<linearGradient id="csbllj_6_" gradientUnits="userSpaceOnUse" x1="25.8734" y1="42.4862" x2="25.8734" y2="62.4077">
					<stop  offset="0.5369" style="stop-color:#0D3A70;stop-opacity:0"/>
					<stop  offset="1" style="stop-color:#0D2257;stop-opacity:0.8"/>
				</linearGradient>
				<path id="XMLID_1672_" class="csbllj-st5" d="M13.2,42.5v6.8c0,4.6,5.7,13.1,12.7,13.1c7,0,12.7-8.5,12.7-13.1v-6.8H13.2z"/>
				<ellipse id="XMLID_1671_" class="csbllj-st1" cx="25.9" cy="42.5" rx="12.7" ry="8.4"/>
				<linearGradient id="csbllj_7_" gradientUnits="userSpaceOnUse" x1="20.0945" y1="40.3899" x2="32.227" y2="40.3899">
					<stop  offset="0" style="stop-color:#ACB1B9"/>
					<stop  offset="0.4813" style="stop-color:#FFFFFF"/>
					<stop  offset="1" style="stop-color:#A9AEB7"/>
				</linearGradient>
				<path id="XMLID_1666_" class="csbllj-st6" d="M20.1,35.4v7.1c0,1.6,2.7,2.9,6.1,2.9c3.4,0,6.1-1.3,6.1-2.9v-7.1H20.1z"/>
				<ellipse id="XMLID_1665_" class="csbllj-st7" cx="26.2" cy="35.4" rx="6.1" ry="2.9"/>
				<linearGradient id="csbllj_8_" gradientUnits="userSpaceOnUse" x1="22.2584" y1="31.9907" x2="30.0631" y2="31.9907">
					<stop  offset="0" style="stop-color:#83878E"/>
					<stop  offset="0.4813" style="stop-color:#D9DDE2"/>
					<stop  offset="1" style="stop-color:#83878E"/>
				</linearGradient>
				<path id="XMLID_1664_" class="csbllj-st8" d="M22.3,26.9v8.6c0,0.9,1.7,1.6,3.9,1.6c2.2,0,3.9-0.7,3.9-1.6v-8.6H22.3z"/>
				<linearGradient id="csbllj_9_" gradientUnits="userSpaceOnUse" x1="12.8512" y1="8.4611" x2="38.7976" y2="8.4611">
					<stop  offset="0" style="stop-color:#0E255A"/>
					<stop  offset="0.5" style="stop-color:#1456BB"/>
					<stop  offset="1" style="stop-color:#0E255A"/>
				</linearGradient>
				<path id="XMLID_1663_" class="csbllj-st9" d="M38.8,11.9C38.8,5.3,33,0,25.8,0s-13,5.3-13,11.9v5h25.9V11.9z"/>
				<ellipse id="XMLID_1662_" class="csbllj-st10" cx="25.8" cy="16.9" rx="13" ry="11.9"/>
				<ellipse id="XMLID_1661_" class="csbllj-st11" cx="25.8" cy="16.9" rx="10.7" ry="9.8"/>
				<linearGradient id="csbllj_10_" gradientUnits="userSpaceOnUse" x1="15.0936" y1="21.3323" x2="36.5552" y2="21.3323">
					<stop  offset="0" style="stop-color:#0E255A"/>
					<stop  offset="0.5" style="stop-color:#1456BB"/>
					<stop  offset="1" style="stop-color:#0E255A"/>
				</linearGradient>
				<path id="XMLID_1638_" class="csbllj-st12" d="M25.8,24.7c-5.6,0-10.1-3.9-10.7-8.8c0,0.3-0.1,0.7-0.1,1c0,5.4,4.8,9.8,10.7,9.8
					c5.9,0,10.7-4.4,10.7-9.8c0-0.3,0-0.7-0.1-1C36,20.9,31.4,24.7,25.8,24.7z"/>
				<linearGradient id="csbllj_11_" gradientUnits="userSpaceOnUse" x1="25.7755" y1="17.6441" x2="25.7755" y2="12.6982">
					<stop  offset="0" style="stop-color:#505156"/>
					<stop  offset="1" style="stop-color:#000000"/>
				</linearGradient>
				<rect id="XMLID_1637_" x="18.7" y="12.3" class="st13" width="14.1" height="5.6"/>
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
      isLinkPoint: this.isLinkPoint
		};
		return Object.assign(super.toJson(),json);
	}

  createLinkPoint() {
    let x = parseInt(this.x+this.width*0.8-6);
    let y = parseInt(this.y+this.height*3/4-5);
    let spirit = this.stage.create("LinkPoint",x,y,10,10);
    spirit.isAuto = true;
    this.stage.capacity.push(spirit);
    let x2 = parseInt(this.x+this.width*0.2-4);
    let y2 = parseInt(this.y+this.height*3/4-5);
    let spirit2 = this.stage.create("LinkPoint",x2,y2,10,10);
    spirit2.isAuto = true;
    this.stage.capacity.push(spirit2);
  }

	viewPanel(device) {
    let that = this;
    let point = {name:'',value:0,unit:''}
    if(device.points) {
      device.points.forEach(function(data) {
        if(data.id=="TF") {
          point.value = parseFloat(data.value);
          point.unit = data.unit;
          point.name = data.name;
        }
      });
    }
    $('.bm-view-panel').html('');
    let vpt = $(`<div class="bm-view-panel__title">${device.name}</div>`);
    let vpc = $(`<div class="bm-view-panel__content" style="height: 50px;overflow: hidden;"></div>`);
    let img = $(`<img src="static/images/device/icon-dt3.png" height="50"/>`);
    let div = $(`<div class="bm-img-text">
                   <p>累积流量</p>
                   <span>${that.floatFormat(point.value)}</span><small>&nbsp;${point.unit}</small>
                  </div>`)
    let div2 = $(`<div style="display: inline-block;vertical-align:top;margin-left: 40px;margin-top:8px">
                   <img src="static/images/start.png" style="vertical-align: middle;"/>
                  </div>`)
    vpc.append(img).append(div).append(div2);
    $('.bm-view-panel').append(vpt).append(vpc);
    $('.bm-view-panel').css({width:200});
    $('.bm-view-panel').show();
	}
}

export default Csbllj;

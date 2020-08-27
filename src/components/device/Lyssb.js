import Spirit from '@/core/Spirit.js'

/**
 * 螺翼式水表
 */
class Lyssb extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.name = "螺翼式水表";
	    this.className = "Lyssb";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4;
	    this.minWidth = 20;
	    this.minHeight = 20;
	    this.linkage = true;
	    this.isPanel = true;
	    this.isBind = true;
	    this.zIndex = 3;
      this.isLinkPoint = true;
	    this.config = {bindData: {orgId:'',deviceId:'',devicePoint:''}}
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
				 viewBox="0 0 72 68" style="enable-background:new 0 0 72 68;" xml:space="preserve">
				<style type="text/css">
					.lyssb-st0{fill:url(#lyssb_2_);}
					.lyssb-st1{fill:#034081;}
					.lyssb-st2{fill:url(#lyssb_3_);}
					.lyssb-st3{fill:url(#lyssb_4_);}
					.lyssb-st4{fill:url(#lyssb_5_);}
					.lyssb-st5{fill:url(#lyssb_6_);}
					.lyssb-st6{fill:url(#lyssb_7_);}
					.lyssb-st7{fill:#F6C060;}
					.lyssb-st8{fill:#FFFFFF;}
					.lyssb-st9{fill:#E04520;}
					.lyssb-st10{fill:#5D5F65;}
					.lyssb-st11{fill:#1D1E1E;}
					.lyssb-st12{fill:#C57C15;}
				</style>
				<linearGradient id="lyssb_2_" gradientUnits="userSpaceOnUse" x1="-530.7202" y1="15.1586" x2="-530.7202" y2="69.1397" gradientTransform="matrix(-1 0 0 1 -463.3202 0)">
					<stop  offset="0" style="stop-color:#08396B"/>
					<stop  offset="0.5027" style="stop-color:#2797D4"/>
					<stop  offset="1" style="stop-color:#08396B"/>
				</linearGradient>
				<path id="XMLID_892_" class="lyssb-st0" d="M62.8,14.4H68c2.2,0,4,12,4,26.8s-1.8,26.8-4,26.8h-5.2V14.4z"/>
				<ellipse id="XMLID_873_" class="lyssb-st1" cx="62.8" cy="41.2" rx="4" ry="26.8"/>
				<linearGradient id="lyssb_3_" gradientUnits="userSpaceOnUse" x1="4.6127" y1="15.1586" x2="4.6127" y2="69.1397">
					<stop  offset="0" style="stop-color:#08396B"/>
					<stop  offset="0.5027" style="stop-color:#2797D4"/>
					<stop  offset="1" style="stop-color:#08396B"/>
				</linearGradient>
				<path id="XMLID_886_" class="lyssb-st2" d="M9.2,14.4H4c-2.2,0-4,12-4,26.8C0,56,1.8,68.1,4,68.1h5.2V14.4z"/>
				<ellipse id="XMLID_880_" class="lyssb-st1" cx="9.2" cy="41.2" rx="4" ry="26.8"/>
				<linearGradient id="lyssb_4_" gradientUnits="userSpaceOnUse" x1="36.0654" y1="25.1502" x2="36.0654" y2="55.6155">
					<stop  offset="0" style="stop-color:#08396B"/>
					<stop  offset="0.3957" style="stop-color:#2797D4"/>
					<stop  offset="0.9412" style="stop-color:#19274F"/>
				</linearGradient>
				<path id="XMLID_876_" class="lyssb-st3" d="M63,25.2H9.8c-0.9,0-2.2,6.9-2.2,15.5s1.3,15.5,2.2,15.5H63c0,0,1.6-4.5,1.6-15.5
					S63,25.2,63,25.2z"/>
				<linearGradient id="lyssb_5_" gradientUnits="userSpaceOnUse" x1="18.0648" y1="33.906" x2="53.5924" y2="33.906">
					<stop  offset="0" style="stop-color:#08396B"/>
					<stop  offset="0.4992" style="stop-color:#2797D4"/>
					<stop  offset="0.568" style="stop-color:#268BC3"/>
					<stop  offset="0.708" style="stop-color:#236999"/>
					<stop  offset="0.9045" style="stop-color:#1C3B63"/>
					<stop  offset="1" style="stop-color:#19274F"/>
				</linearGradient>
				<path id="XMLID_917_" class="lyssb-st4" d="M18.1,17.1v11.5c0,7.8,8,22.1,17.8,22.1c9.8,0,17.8-14.3,17.8-22.1V17.1H18.1z"/>
				<linearGradient id="lyssb_6_" gradientUnits="userSpaceOnUse" x1="35.8286" y1="17.099" x2="35.8286" y2="50.7129">
					<stop  offset="0.5369" style="stop-color:#08396B;stop-opacity:0"/>
					<stop  offset="1" style="stop-color:#19274F;stop-opacity:0.8"/>
				</linearGradient>
				<path id="XMLID_933_" class="lyssb-st5" d="M18.1,17.1v11.5c0,7.8,8,22.1,17.8,22.1c9.8,0,17.8-14.3,17.8-22.1V17.1H18.1z"/>
				<ellipse id="XMLID_916_" class="lyssb-st1" cx="35.8" cy="17.1" rx="17.8" ry="14.1"/>
				<linearGradient id="lyssb_7_" gradientUnits="userSpaceOnUse" x1="19.7222" y1="21.0122" x2="51.9351" y2="21.0122">
					<stop  offset="0" style="stop-color:#815223"/>
					<stop  offset="0.5" style="stop-color:#D98811"/>
					<stop  offset="1" style="stop-color:#815223"/>
				</linearGradient>
				<path id="XMLID_915_" class="lyssb-st6" d="M19.7,12.8v3.7c0,7.1,7.2,12.8,16.1,12.8c8.9,0,16.1-5.7,16.1-12.8v-3.7H19.7z"/>
				<ellipse id="XMLID_914_" class="lyssb-st7" cx="35.8" cy="12.8" rx="16.1" ry="12.8"/>
				<ellipse id="XMLID_913_" class="lyssb-st8" cx="35.8" cy="12.5" rx="13.2" ry="10.3"/>
				<ellipse id="XMLID_912_" class="lyssb-st9" cx="32.1" cy="6.3" rx="1.3" ry="1"/>
				<ellipse id="XMLID_911_" class="lyssb-st9" cx="32.1" cy="18.8" rx="1.3" ry="1"/>
				<ellipse id="XMLID_910_" class="lyssb-st9" cx="27.7" cy="10.4" rx="1.3" ry="1"/>
				<ellipse id="XMLID_909_" class="lyssb-st9" cx="27.7" cy="15.5" rx="1.3" ry="1"/>
				<rect id="XMLID_908_" x="42.6" y="9.2" class="lyssb-st10" width="3.2" height="1.3"/>
				<rect id="XMLID_907_" x="42.6" y="11.9" class="lyssb-st10" width="3.2" height="1.3"/>
				<rect id="XMLID_906_" x="42.6" y="14.5" class="lyssb-st10" width="3.2" height="1.3"/>
				<ellipse id="XMLID_905_" class="lyssb-st11" cx="36" cy="12.5" rx="2.3" ry="1.8"/>
				<path id="XMLID_895_" class="lyssb-st12" d="M35.8,2.9c7.1,0,13,4.5,13.2,10c0-0.1,0-0.2,0-0.4c0-5.7-5.9-10.3-13.2-10.3
					S22.6,6.9,22.6,12.5c0,0.1,0,0.2,0,0.4C22.9,7.4,28.7,2.9,35.8,2.9z"/>
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
			zIndex: this.zIndex,
      isLinkPoint: this.isLinkPoint
		};
		return Object.assign(super.toJson(),json);
	}

  createLinkPoint() {
    let x = parseInt(this.x+this.width-8);
    let y = parseInt(this.y+this.height*0.6-6);
    let spirit = this.stage.create("LinkPoint",x,y,10,10);
    spirit.isAuto = true;
    this.stage.capacity.push(spirit);
    let x2 = parseInt(this.x-3);
    let y2 = parseInt(this.y+this.height*0.6-6);
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

export default Lyssb;

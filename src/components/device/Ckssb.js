<<<<<<< HEAD:src/components/device/Ckssb.js
import Spirit from './../../core/Spirit'

/**
 * 插卡式水表
 */
class Ckssb extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.name = "插卡式水表";
	    this.className = "Ckssb";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4;
	    this.minWidth = 20;
	    this.minHeight = 20;
	    this.linkage = true;
	    this.isLinkPoint = true;
	    this.zIndex = 3;
	    this.config = {bindData: {orgId:'',deviceId:'',devicePoint:''}}
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
=======
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
>>>>>>> origin/dev-new:public/static/img/svg/ckssb.svg
					 viewBox="0 0 88 50" style="enable-background:new 0 0 88 50;" xml:space="preserve">
				<style type="text/css">
					.ckssb-st0{fill:url(#ckssb_2_);}
					.ckssb-st1{fill:url(#ckssb_3_);}
					.ckssb-st2{fill:#A5CDAD;}
					.ckssb-st3{fill:url(#ckssb_4_);}
					.ckssb-st4{fill:url(#ckssb_5_);}
					.ckssb-st5{fill:url(#ckssb_6_);}
					.ckssb-st6{fill:url(#ckssb_7_);}
					.ckssb-st7{fill:#A7AEB6;}
					.ckssb-st8{fill:#DFE2E8;}
					.ckssb-st9{fill:#FFFFFF;}
					.ckssb-st10{fill:#E04520;}
					.ckssb-st11{fill:#5D5F65;}
					.ckssb-st12{fill:#1D1E1E;}
					.ckssb-st13{fill:#838776;}
					.ckssb-st14{fill:#25282B;}
				</style>
				<linearGradient id="ckssb_2_" gradientUnits="userSpaceOnUse" x1="-895.6106" y1="19.6556" x2="-895.6106" y2="33.9811" gradientTransform="matrix(-1 0 0 1 -819.0268 0)">
					<stop  offset="0" style="stop-color:#182952"/>
					<stop  offset="0.508" style="stop-color:#1A54A5"/>
					<stop  offset="0.6204" style="stop-color:#1A498F"/>
					<stop  offset="0.8796" style="stop-color:#193161"/>
					<stop  offset="1" style="stop-color:#182952"/>
				</linearGradient>
				<path id="XMLID_894_" class="ckssb-st0" d="M72.2,34.6h9.1v-15h-9.1c0,0-0.4,4-0.4,8S72.2,34.6,72.2,34.6z"/>
				<linearGradient id="ckssb_3_" gradientUnits="userSpaceOnUse" x1="-902.9611" y1="18.1224" x2="-902.9611" y2="35.363" gradientTransform="matrix(-1 0 0 1 -819.0268 0)">
					<stop  offset="0" style="stop-color:#A7AEB6"/>
					<stop  offset="0.508" style="stop-color:#DFE2E8"/>
					<stop  offset="0.7632" style="stop-color:#C0C5CB"/>
					<stop  offset="1" style="stop-color:#A7AEB6"/>
				</linearGradient>
				<rect id="XMLID_893_" x="79.8" y="18" class="ckssb-st1" width="8.2" height="18.1"/>
				<path id="XMLID_904_" class="ckssb-st2" d="M75,28.8h-3.7c-0.8,0-1.5-0.7-1.5-1.5V12.5c0-0.8,0.7-1.5,1.5-1.5H75c0.8,0,1.5,0.7,1.5,1.5
					v14.8C76.5,28.1,75.9,28.8,75,28.8z"/>
				<linearGradient id="ckssb_4_" gradientUnits="userSpaceOnUse" x1="13.492" y1="36.1269" x2="72.3183" y2="36.1269">
					<stop  offset="0" style="stop-color:#182952"/>
					<stop  offset="0.3155" style="stop-color:#1A54A5"/>
					<stop  offset="0.8717" style="stop-color:#1A54A5"/>
					<stop  offset="1" style="stop-color:#182952"/>
				</linearGradient>
				<path id="XMLID_898_" class="ckssb-st3" d="M13.5,22.8v9.6c0.2,9.4,10,17.1,22,17.1h29.7c3.9,0,7.1-2.5,7.1-5.7v-9.7L13.5,22.8z"/>
				<linearGradient id="ckssb_5_" gradientUnits="userSpaceOnUse" x1="10.2998" y1="19.6556" x2="10.2998" y2="33.9811">
					<stop  offset="0" style="stop-color:#182952"/>
					<stop  offset="0.508" style="stop-color:#1A54A5"/>
					<stop  offset="0.6204" style="stop-color:#1A498F"/>
					<stop  offset="0.8796" style="stop-color:#193161"/>
					<stop  offset="1" style="stop-color:#182952"/>
				</linearGradient>
				<path id="XMLID_897_" class="ckssb-st4" d="M13.5,34.6H6.7v-15h6.7c0,0,0.4,4,0.4,8S13.5,34.6,13.5,34.6z"/>
				<linearGradient id="ckssb_6_" gradientUnits="userSpaceOnUse" x1="4.1167" y1="18.1224" x2="4.1167" y2="35.363">
					<stop  offset="0" style="stop-color:#A7AEB6"/>
					<stop  offset="0.508" style="stop-color:#DFE2E8"/>
					<stop  offset="0.7632" style="stop-color:#C0C5CB"/>
					<stop  offset="1" style="stop-color:#A7AEB6"/>
				</linearGradient>
				<rect id="XMLID_896_" y="18" class="ckssb-st5" width="8.2" height="18.1"/>
				<linearGradient id="ckssb_7_" gradientUnits="userSpaceOnUse" x1="13.492" y1="28.321" x2="72.3183" y2="28.321">
					<stop  offset="0" style="stop-color:#B3B7BB"/>
					<stop  offset="0.3155" style="stop-color:#FFFFFF"/>
					<stop  offset="0.8717" style="stop-color:#FFFFFF"/>
					<stop  offset="1" style="stop-color:#B3B7BB"/>
				</linearGradient>
				<path id="XMLID_891_" class="ckssb-st6" d="M13.5,17.5v5.1c0.2,9.4,10,17.1,22,17.1h29.7c3.9,0,7.1-2.5,7.1-5.7V16.9L13.5,17.5z"/>
				<path id="XMLID_889_" class="ckssb-st7" d="M65.2,34.6H35.5c-12,0-21.9-7.7-22-17.1c-0.1-4.7,2.1-9.1,6.3-12.4C23.9,1.8,29.4,0,35.2,0h30
					c3.9,0,7.1,2.5,7.1,5.7v23.3C72.3,32.1,69.1,34.6,65.2,34.6z"/>
				<path id="XMLID_888_" class="ckssb-st8" d="M56,0.9H35.2c-11.5,0-20.8,7.3-20.6,16.3C14.8,26,24.2,33,35.5,33H56V0.9z"/>
				<path id="XMLID_887_" class="ckssb-st8" d="M65.2,0.9h-8.3V33h8.3c3.3,0,6-2.1,6-4.7V5.5C71.2,3,68.5,0.9,65.2,0.9z"/>
				<ellipse id="XMLID_885_" class="ckssb-st9" cx="35.2" cy="16.9" rx="17.6" ry="13.7"/>
				<ellipse id="XMLID_884_" class="ckssb-st10" cx="30.2" cy="8.6" rx="1.7" ry="1.4"/>
				<ellipse id="XMLID_883_" class="ckssb-st10" cx="30.2" cy="25.3" rx="1.7" ry="1.4"/>
				<ellipse id="XMLID_882_" class="ckssb-st10" cx="24.4" cy="14.1" rx="1.7" ry="1.4"/>
				<ellipse id="XMLID_881_" class="ckssb-st10" cx="24.4" cy="20.8" rx="1.7" ry="1.4"/>
				<rect id="XMLID_879_" x="44.3" y="12.5" class="ckssb-st11" width="4.3" height="1.8"/>
				<rect id="XMLID_878_" x="44.3" y="16" class="ckssb-st11" width="4.3" height="1.8"/>
				<rect id="XMLID_877_" x="44.3" y="19.5" class="ckssb-st11" width="4.3" height="1.8"/>
				<ellipse id="XMLID_875_" class="ckssb-st12" cx="35.5" cy="16.9" rx="3.1" ry="2.4"/>
				<path id="XMLID_874_" class="ckssb-st7" d="M35.2,4.1c9.5,0,17.3,5.9,17.6,13.3c0-0.2,0-0.3,0-0.5c0-7.6-7.9-13.7-17.6-13.7
					S17.6,9.4,17.6,16.9c0,0.2,0,0.3,0,0.5C18,10,25.7,4.1,35.2,4.1z"/>
				<g id="XMLID_899_">
					<rect id="XMLID_903_" x="60.1" y="5.8" class="ckssb-st13" width="7.1" height="21.5"/>
					<path id="XMLID_900_" class="st14" d="M68.3,4.8v23.5h-9.1V4.8H68.3z M66.3,26.3V6.8h-5.1v19.5H66.3z"/>
				</g>
<<<<<<< HEAD:src/components/device/Ckssb.js
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
    let x = this.x+this.width-8;
    let y = this.y+this.height/2-4
    let spirit = this.stage.create("LinkPoint",x,y,10,10);
    spirit.isAuto = true;
    this.stage.capacity.push(spirit);
    let x2 = this.x-3;
    let y2 = this.y+this.height/2-4;
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
    let vpt = $(`<div class="bm-view-panel__title">${that.lengthFormat(device.name,12)}</div>`);
    let vpc = $(`<div class="bm-view-panel__content" style="height: 50px;overflow: hidden;"></div>`);
    let img = $(`<img src="static/images/device/icon-dt3.png" height="50"/>`);
    let div = $(`<div class="bm-img-text">
                 <p>累积流量</p>
                 <span>${that.floatFormat(point.value)}</span><small>&nbsp;${point.unit}</small>
                </div>`)
    vpc.append(img).append(div)
    $('.bm-view-panel').append(vpt).append(vpc);
    $('.bm-view-panel').css({width:200});
    $('.bm-view-panel').show();
	}
}

export default Ckssb;
=======
				</svg>
>>>>>>> origin/dev-new:public/static/img/svg/ckssb.svg

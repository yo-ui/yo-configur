import Spirit from '@/core/Spirit.js'

/**
 * 阀控水表
 */
class Sbfkg extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.title = "阀控水表";
	    this.className = "Sbfkg";
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
	    this.config = {bindData: {organizId:'',deviceId:'',devicePoint:''}}
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;border:1px solid transparent;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 97 56" style="enable-background:new 0 0 97 56;" xml:space="preserve">
				<style type="text/css">
					.sbfkg-st0{fill:url(#sbfkg_2_);}
					.sbfkg-st1{fill:url(#sbfkg_3_);}
					.sbfkg-st2{fill:url(#sbfkg_4_);}
					.sbfkg-st3{fill:url(#sbfkg_5_);}
					.sbfkg-st4{fill:url(#sbfkg_6_);}
					.sbfkg-st5{fill:#DFE3E8;}
					.sbfkg-st6{fill:#A7AFB7;}
					.sbfkg-st7{fill:url(#sbfkg_7_);}
					.sbfkg-st8{fill:url(#sbfkg_8_);}
					.sbfkg-st9{fill:#FFFFFF;}
					.sbfkg-st10{fill:#ED431B;}
					.sbfkg-st11{fill:#5D5F66;}
					.sbfkg-st12{fill:#1E1E1E;}
					.sbfkg-st13{fill:#4C5963;}
				</style>
				<linearGradient id="sbfkg_2_" gradientUnits="userSpaceOnUse" x1="13.5477" y1="42.5147" x2="56.0438" y2="42.5147">
					<stop  offset="0" style="stop-color:#0E255A"/>
					<stop  offset="0.5" style="stop-color:#1456BB"/>
					<stop  offset="1" style="stop-color:#0E255A"/>
				</linearGradient>
				<path id="XMLID_843_" class="sbfkg-st0" d="M13.5,29.8V37c0,7.9,5.4,18.3,21.2,18.3C51.9,55.2,56,44.9,56,37v-7.2H13.5z"/>
				<g id="XMLID_840_">
					
						<linearGradient id="sbfkg_3_" gradientUnits="userSpaceOnUse" x1="-897.4448" y1="23.1029" x2="-897.4448" y2="37.4284" gradientTransform="matrix(-1 0 0 1 -811.0268 0)">
						<stop  offset="0" style="stop-color:#0E255A"/>
						<stop  offset="0.508" style="stop-color:#1456BB"/>
						<stop  offset="0.8382" style="stop-color:#103377"/>
						<stop  offset="1" style="stop-color:#0E255A"/>
					</linearGradient>
					<path id="XMLID_842_" class="sbfkg-st1" d="M83.2,38H90V23h-6.7c0,0-0.4,4-0.4,8S83.2,38,83.2,38z"/>
					
						<linearGradient id="sbfkg_4_" gradientUnits="userSpaceOnUse" x1="-903.6279" y1="21.5697" x2="-903.6279" y2="38.8103" gradientTransform="matrix(-1 0 0 1 -811.0268 0)">
						<stop  offset="0" style="stop-color:#A7AFB7"/>
						<stop  offset="0.508" style="stop-color:#DFE3E8"/>
						<stop  offset="0.7346" style="stop-color:#C3C9D0"/>
						<stop  offset="1" style="stop-color:#A7AFB7"/>
					</linearGradient>
					<rect id="XMLID_841_" x="88.5" y="21.4" class="sbfkg-st2" width="8.2" height="18.1"/>
				</g>
				<linearGradient id="sbfkg_5_" gradientUnits="userSpaceOnUse" x1="12.4535" y1="34.2129" x2="57.9924" y2="34.2129">
					<stop  offset="0" style="stop-color:#A7AFB7"/>
					<stop  offset="0.508" style="stop-color:#DFE3E8"/>
					<stop  offset="0.7346" style="stop-color:#C3C9D0"/>
					<stop  offset="1" style="stop-color:#A7AFB7"/>
				</linearGradient>
				<path id="XMLID_839_" class="sbfkg-st3" d="M12.5,17.2v16.1c0,10,10.2,18,22.8,18c12.6,0,22.8-8.1,22.8-18V17.2H12.5z"/>
				<linearGradient id="sbfkg_6_" gradientUnits="userSpaceOnUse" x1="48.2538" y1="34.2556" x2="84.8931" y2="34.2556">
					<stop  offset="0.665" style="stop-color:#C4CAD1"/>
					<stop  offset="1" style="stop-color:#A7AFB7"/>
				</linearGradient>
				<path id="XMLID_838_" class="sbfkg-st4" d="M84.9,31.2h-2l-0.1-7c-0.3-2.1-1.3-3.6-3.4-3.6H48.3V48h32.3c2.4,0,4.4-2,4.3-4.4h0V31.2z"/>
				<path id="XMLID_837_" class="sbfkg-st5" d="M84.8,30.4l-2-16.2c-0.3-2.1-2.2-3.6-4.3-3.6H49c4,2.8,8.7,4.9,8.9,8.9
					c0.3,5.8-1.2,11.6-9.6,15.9l0,0h32.3C83.2,35.4,85.3,33,84.8,30.4z"/>
				<ellipse id="XMLID_836_" class="sbfkg-st6" cx="35.2" cy="18.6" rx="22.8" ry="18"/>
				<ellipse id="XMLID_835_" class="sbfkg-st5" cx="35.2" cy="17.2" rx="21.7" ry="17.2"/>
				<g id="XMLID_832_">
					<linearGradient id="sbfkg_7_" gradientUnits="userSpaceOnUse" x1="10.2998" y1="23.1029" x2="10.2998" y2="37.4284">
						<stop  offset="0" style="stop-color:#0E255A"/>
						<stop  offset="0.508" style="stop-color:#1456BB"/>
						<stop  offset="0.8382" style="stop-color:#103377"/>
						<stop  offset="1" style="stop-color:#0E255A"/>
					</linearGradient>
					<path id="XMLID_834_" class="sbfkg-st7" d="M13.5,38H6.7V23h6.7c0,0,0.4,4,0.4,8S13.5,38,13.5,38z"/>
					<linearGradient id="sbfkg_8_" gradientUnits="userSpaceOnUse" x1="4.1167" y1="21.5697" x2="4.1167" y2="38.8103">
						<stop  offset="0" style="stop-color:#A7AFB7"/>
						<stop  offset="0.508" style="stop-color:#DFE3E8"/>
						<stop  offset="0.7346" style="stop-color:#C3C9D0"/>
						<stop  offset="1" style="stop-color:#A7AFB7"/>
					</linearGradient>
					<rect id="XMLID_833_" x="0" y="21.4" class="sbfkg-st8" width="8.2" height="18.1"/>
				</g>
				<ellipse id="XMLID_831_" class="sbfkg-st9" cx="35.2" cy="16.7" rx="17.6" ry="13.7"/>
				<ellipse id="XMLID_830_" class="sbfkg-st10" cx="30.2" cy="8.3" rx="1.7" ry="1.4"/>
				<ellipse id="XMLID_829_" class="sbfkg-st10" cx="30.2" cy="25" rx="1.7" ry="1.4"/>
				<ellipse id="XMLID_828_" class="sbfkg-st10" cx="24.4" cy="13.8" rx="1.7" ry="1.4"/>
				<ellipse id="XMLID_827_" class="sbfkg-st10" cx="24.4" cy="20.6" rx="1.7" ry="1.4"/>
				<rect id="XMLID_826_" x="44.3" y="12.3" class="sbfkg-st11" width="4.3" height="1.8"/>
				<rect id="XMLID_825_" x="44.3" y="15.8" class="sbfkg-st11" width="4.3" height="1.8"/>
				<rect id="XMLID_824_" x="44.3" y="19.3" class="sbfkg-st11" width="4.3" height="1.8"/>
				<ellipse id="XMLID_823_" class="sbfkg-st12" cx="35.5" cy="16.7" rx="3.1" ry="2.4"/>
				<path id="XMLID_822_" class="sbfkg-st6" d="M35.2,3.8c9.5,0,17.3,5.9,17.6,13.3c0-0.2,0-0.3,0-0.5c0-7.6-7.9-13.7-17.6-13.7
					S17.6,9.1,17.6,16.7c0,0.2,0,0.3,0,0.5C18,9.7,25.7,3.8,35.2,3.8z"/>
				<rect id="XMLID_845_" x="60.4" y="21.4" transform="matrix(0.5478 0.8366 -0.8366 0.5478 50.1581 -48.4209)" class="sbfkg-st13" width="19" height="1.5"/>
				<rect id="XMLID_821_" x="68.2" y="12.7" transform="matrix(0.8364 0.5481 -0.5481 0.8364 23.4452 -34.1823)" class="sbfkg-st13" width="1.5" height="19"/>
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
	  let x = parseInt(this.x+this.width-8);
	  let y = parseInt(this.y+this.height/2-4);
    let spirit = this.stage.create("LinkPoint",x,y,10,10);
	  spirit.isAuto = true;
    this.stage.capacity.push(spirit);
    let x2 = parseInt(this.x-2);
    let y2 = parseInt(this.y+this.height/2-4);
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

export default Sbfkg;

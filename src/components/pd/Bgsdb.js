import Spirit from '@/core/Spirit.js'

/**
 * 壁挂式电表
 */
class Bgsdb extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.title = "壁挂式电表";
	    this.className = "Bgsdb";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4;
	    this.minWidth = 20;
	    this.minHeight = 20;
		  this.zIndex = 2;
	    this.linkage = true;
	    this.isPanel = true;
	    this.isBind = true;
	    this.config = {bindDevice: {id:'',point:'',unit:''}}
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;border:1px solid transparent;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
	               viewBox="0 0 58 75" style="enable-background:new 0 0 58 75;" xml:space="preserve">
				<style type="text/css">
					.bgsdb-st0{fill:#C1C7CC;}
					.bgsdb-st1{fill:#DFE2E8;}
					.bgsdb-st2{fill:#D5D7DB;}
					.bgsdb-st3{fill:#B8BDC0;}
					.bgsdb-st4{fill:#FFFFFF;}
					.bgsdb-st5{fill:#8F9398;}
					.bgsdb-st6{fill:#A2AAB1;}
					.bgsdb-st7{fill:#838776;}
					.bgsdb-st8{fill:#25282B;}
				</style>
				<path id="XMLID_853_" class="bgsdb-st0" d="M58,12.9H0L4.3,2c0.4-1.2,1.6-2,2.9-2h43.7c1.3,0,2.4,0.8,2.9,2L58,12.9z"/>
				<path id="XMLID_852_" class="bgsdb-st1" d="M54.7,74.8H3.3c-1.8,0-3.3-1.5-3.3-3.3V12.9c0-1.8,1.5-3.3,3.3-3.3h51.5c1.8,0,3.3,1.5,3.3,3.3
					v58.6C58,73.3,56.5,74.8,54.7,74.8z"/>
				<path id="XMLID_854_" class="bgsdb-st2" d="M53,60.1H5v-43h48V60.1z"/>
				<path id="XMLID_863_" class="bgsdb-st3" d="M53,17.1H5V16h48V17.1z"/>
				<path id="XMLID_860_" class="bgsdb-st4" d="M50,57.1H8v-37h42V57.1z"/>
				<rect id="XMLID_868_" x="11.9" y="42.6" class="bgsdb-st5" width="4.5" height="2.5"/>
				<rect id="XMLID_867_" x="19.9" y="42.6" class="bgsdb-st5" width="4.5" height="2.5"/>
				<rect id="XMLID_862_" x="11.7" y="47.2" class="bgsdb-st0" width="34" height="1"/>
				<rect id="XMLID_865_" x="11.7" y="51.2" class="bgsdb-st0" width="34" height="1"/>
				<rect id="XMLID_869_" x="0" y="63.4" class="bgsdb-st6" width="58" height="0.5"/>
				<g id="XMLID_872_">
					<rect id="XMLID_870_" x="28.2" y="68.1" class="bgsdb-st5" width="1.6" height="3.6"/>
					<circle id="XMLID_871_" class="bgsdb-st5" cx="29" cy="67.5" r="1.6"/>
				</g>
				<g id="XMLID_855_">
					<rect id="XMLID_859_" x="13" y="27.1" class="bgsdb-st7" width="32" height="12"/>
					<path id="XMLID_856_" class="bgsdb-st8" d="M46,40.1H12v-14h34V40.1z M14,38.1h30v-10H14V38.1z"/>
				</g>
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

	viewPanel(device) {
		if(device) {
			let that = this;
			$('.bm-view-panel').html('');
			let vpt = $(`<div class="bm-view-panel__title">${device.name}</div>`);
      let vpc = $(`<div class="bm-view-panel__content" style="height: 60px;overflow: hidden;"></div>`);
      let img = $(`<img src="static/images/device/icon-dt1.png"/>`);
      let div = $(`<div class="bm-img-text">
                      <p>正向有功电能</p>
                      <span>${device.points[0].value}</span><small>&nbsp;${device.points[0].unit}</small>
                  </div>`)
      vpc.append(img).append(div);
			$('.bm-view-panel').append(vpt).append(vpc);
			$('.bm-view-panel').css({width:200});
			$('.bm-view-panel').show();
		}
	}
}

export default Bgsdb;

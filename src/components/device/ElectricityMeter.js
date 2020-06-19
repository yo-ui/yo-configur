import Spirit from '@/core/Spirit.js'

/**
 * 单项导轨电表
 */
class ElectricityMeter extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.title = "单项导轨电表";
	    this.className = "ElectricityMeter";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4;
	    this.minWidth = 24;
	    this.minHeight = 24;
		  this.zIndex = 2;
	    this.linkage = true;
	    this.isPanel = true;
	    this.isBind = true;
	    this.config = {bindData: {organizId:'',deviceId:'',devicePoint:''}}
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
	            viewBox="0 0 64 60" style="enable-background:new 0 0 64 60;" xml:space="preserve">
				<style type="text/css">
					.em-st0{fill:#C2C8CE;}
					.em-st1{fill:#DFE3E8;}
					.em-st2{fill:#FFFFFF;}
					.em-st3{fill:#8F9499;}
					.em-st4{fill:#848776;}
					.em-st5{fill:#25282B;}
					.em-st6{fill:#F95D06;}
					.em-st7{fill:#565656;}
					.em-st8{fill:#8BB70F;}
				</style>
				<g id="XMLID_710_">
					<rect id="XMLID_719_" x="2" y="46.7" class="em-st0" width="60" height="4.5"/>
					<rect id="XMLID_718_" x="2" y="51.2" class="em-st1" width="60" height="8.6"/>
					<rect id="XMLID_717_" x="1" y="17.7" class="em-st2" width="62" height="29"/>
					<path id="XMLID_714_" class="em-st1" d="M64,47.7H0v-31h64V47.7z M2,45.7h53v-27H2V45.7z"/>
					<polygon id="XMLID_713_" class="em-st0" points="64,16.7 0,16.7 2,12.4 62,12.4 	"/>
					<rect id="XMLID_712_" x="2" y="3.7" class="em-st1" width="60" height="8.7"/>
					<polygon id="XMLID_711_" class="em-st0" points="59,0.2 5,0.2 2,3.7 62,3.7 	"/>
				</g>
				<circle id="XMLID_709_" class="em-st3" cx="11.5" cy="8.1" r="2"/>
				<circle id="XMLID_708_" class="em-st3" cx="45.2" cy="8.1" r="2"/>
				<g id="XMLID_703_">
					<rect id="XMLID_707_" x="10.5" y="25.1" class="em-st4" width="27" height="12"/>
					<path id="XMLID_704_" class="em-st5" d="M38.5,38.1h-29v-14h29V38.1z M11.5,36.1h25v-10h-25V36.1z"/>
				</g>
				<circle id="XMLID_702_" class="em-st3" cx="11.5" cy="54.1" r="2"/>
				<circle id="XMLID_701_" class="em-st3" cx="45.2" cy="54.1" r="2"/>
				<rect id="XMLID_700_" x="43.1" y="22.1" class="em-st3" width="4.5" height="2.5"/>
				<rect id="XMLID_699_" x="43" y="36.6" class="em-st6" width="6.7" height="3.7"/>
				<rect id="XMLID_698_" x="42.8" y="28.6" class="em-st0" width="7.8" height="1"/>
				<rect id="XMLID_697_" x="42.8" y="30.7" class="em-st0" width="5.4" height="1"/>
				<g id="XMLID_748_">
					<rect id="XMLID_676_" x="58.8" y="25.8" class="em-st7" width="1" height="16"/>
					<circle id="XMLID_694_" class="em-st8" cx="59.2" cy="22.2" r="1.5"/>
				</g>
				</svg></div>`);
	}


	toJson() {
		let json = {
			title: this.title,
			className: this.className,
			moveType: this.moveType,
			minWidth: this.minWidth,
			minHeight: this.minHeight,
			linkage: this.linkage,
			zIndex: this.zIndex
		};
		return Object.assign(super.toJson(),json);
	}

	viewPanel(device) {
		let that = this;
		if(device) {
			$('.bm-view-panel').html('');
			let point = {name:'',value:'',unit:''}
			if(device.points) {
				device.points.forEach(function(data) {
					if(data.id=="WPP") {
						point.value = parseFloat(data.value);
						point.unit = data.unit;
						point.name = data.name;
					}
				});
			}
			if(point.unit) {
				let vpt = $(`<div class="bm-view-panel__title">${that.lengthFormat(device.name,12)}</div>`);
        let vpc = $(`<div class="bm-view-panel__content" style="height: 50px;overflow: hidden;"></div>`);
        let img = $(`<img height="50"/>`);
        img.attr('src',"static/images/device/icon-dt2.png");
        let div = $(`<div class="bm-img-text">
                     <p>${point.name}</p>
                     <span>${parseFloat(point.value)}</span><small>&nbsp;${point.unit}</small>
                    </div>`)
        vpc.append(img).append(div)
				$('.bm-view-panel').append(vpt).append(vpc);
				$('.bm-view-panel').css({width:200});
				$('.bm-view-panel').show();
			}
		}

	}

}

export default ElectricityMeter;

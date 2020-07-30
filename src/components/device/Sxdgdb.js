import Spirit from '@/core/Spirit.js'

/**
 * 三相导轨电表
 */
class Sxdgdb extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.title = "三相导轨电表";
	    this.className = "Sxdgdb";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4;
	    this.minWidth = 20;
	    this.minHeight = 20;
		  this.zIndex = 2;
	    this.linkage = true;
	    this.isPanel = true;
	    this.isBind = true;
	    this.config = {bindData: {orgId:'',deviceId:'',devicePoint:''}}
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 92 60" style="enable-background:new 0 0 92 60;" xml:space="preserve">
				<style type="text/css">
					.sxdgdb-st0{fill:#C1C7CC;}
					.sxdgdb-st1{fill:#DFE2E8;}
					.sxdgdb-st2{fill:#FFFFFF;}
					.sxdgdb-st3{fill:#838776;stroke:#25282B;stroke-width:2;stroke-miterlimit:10;}
					.sxdgdb-st4{fill:#8F9398;}
					.sxdgdb-st5{fill:#EB5D17;}
				</style>
				<g id="XMLID_125_">
					<rect id="XMLID_134_" x="2.8" y="46.5" class="sxdgdb-st0" width="87" height="4.5"/>
					<rect id="XMLID_133_" x="2.8" y="51" class="sxdgdb-st1" width="87" height="8.6"/>
					<rect id="XMLID_132_" x="1.8" y="17.5" class="sxdgdb-st2" width="89" height="29"/>
					<path id="XMLID_129_" class="sxdgdb-st1" d="M91.8,47.5h-91v-31h91V47.5z M2.8,45.5h87v-27h-87V45.5z"/>
					<polygon id="XMLID_128_" class="sxdgdb-st0" points="91.8,16.5 0.8,16.5 2.8,12.1 89.8,12.1 	"/>
					<rect id="XMLID_127_" x="2.8" y="3.4" class="sxdgdb-st1" width="87" height="8.7"/>
					<polygon id="XMLID_126_" class="sxdgdb-st0" points="86.8,0 5.8,0 2.8,3.4 89.8,3.4 	"/>
				</g>
				<rect id="XMLID_124_" x="13.3" y="24.9" class="sxdgdb-st3" width="32" height="12"/>
				<circle id="XMLID_123_" class="sxdgdb-st4" cx="12.3" cy="7.8" r="2"/>
				<circle id="XMLID_122_" class="sxdgdb-st4" cx="35" cy="7.8" r="2"/>
				<circle id="XMLID_121_" class="sxdgdb-st4" cx="12.3" cy="53.9" r="2"/>
				<circle id="XMLID_120_" class="sxdgdb-st4" cx="35" cy="53.9" r="2"/>
				<circle id="XMLID_4_" class="sxdgdb-st4" cx="59.3" cy="7.8" r="2"/>
				<circle id="XMLID_3_" class="sxdgdb-st4" cx="82" cy="7.8" r="2"/>
				<circle id="XMLID_2_" class="sxdgdb-st4" cx="59.3" cy="53.9" r="2"/>
				<circle id="XMLID_5_" class="sxdgdb-st4" cx="82" cy="53.9" r="2"/>
				<rect id="XMLID_6_" x="53.6" y="21.8" class="sxdgdb-st4" width="4.5" height="2.5"/>
				<rect id="XMLID_7_" x="61.6" y="21.8" class="sxdgdb-st4" width="4.5" height="2.5"/>
				<rect id="XMLID_8_" x="69.6" y="21.8" class="sxdgdb-st4" width="4.5" height="2.5"/>
				<rect id="XMLID_9_" x="77.6" y="21.8" class="sxdgdb-st4" width="4.5" height="2.5"/>
				<rect id="XMLID_10_" x="53.5" y="36.3" class="sxdgdb-st5" width="6.7" height="3.7"/>
				<rect id="XMLID_11_" x="63.5" y="36.3" class="sxdgdb-st5" width="6.7" height="3.7"/>
				<rect id="XMLID_12_" x="73.5" y="36.3" class="sxdgdb-st5" width="6.7" height="3.7"/>
				<rect id="XMLID_14_" x="53.3" y="28.4" class="sxdgdb-st0" width="24.8" height="1"/>
				<rect id="XMLID_15_" x="53.3" y="30.5" class="sxdgdb-st0" width="13.4" height="1"/>
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
			    img.attr('src',"static/images/device/icon-dt1.png");
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

export default Sxdgdb;

import Spirit from '@/core/Spirit.js'

/**
 * 灯管
 */
class Dengg extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.title = "灯管";
	    this.className = "Dengg";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4;
	    this.minWidth = 20;
	    this.minHeight = 20;
		  this.zIndex = 2;
	    this.linkage = true;
	    this.isBind = true;
	    this.config = {bindDevice: {id:'',point:'',unit:''}};
	}

	template(){
		let div = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;border:1px solid transparent;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg"></div>`);
		div.append(this.close())
		return div;
	}

	open() {
		return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					viewBox="0 0 163 46" xml:space="preserve">
					<style type="text/css">
						.dengg-st0{fill:url(#dengg_2_);}
						.dengg-st1{fill:#98A1A8;}
						.dengg-st2{fill:#C2C8CE;}
						.dengg-st3{fill:#DFE3E8;}
						.dengg-st4{fill:url(#dengg_3_);}
						.dengg-st5{fill:url(#dengg_4_);}
					</style>
					<radialGradient id="dengg_2_" cx="30.0556" cy="-675.8583" r="61.9705" gradientTransform="matrix(1.161 0 0 0.3685 46.3538 271.8863)" gradientUnits="userSpaceOnUse">
						<stop  offset="0" style="stop-color:#FFFFFF"/>
						<stop  offset="1" style="stop-color:#B6DEFF;stop-opacity:0"/>
					</radialGradient>
					<ellipse id="XMLID_1408_" class="dengg-st0" cx="81.2" cy="22.8" rx="71.9" ry="22.8"/>
					<g id="XMLID_1416_">
						<polygon id="XMLID_1419_" class="dengg-st1" points="6.7,8.7 15.6,1.5 15.6,15.4 7.6,31.1 	"/>
						<polygon id="XMLID_1418_" class="dengg-st2" points="7.6,15.5 3.8,19.4 0,15.5 8.5,1.5 15.6,1.5 	"/>
						<rect id="XMLID_1417_" x="0" y="15.5" class="dengg-st3" width="7.6" height="15.6"/>
					</g>
					<g id="XMLID_1412_">
						<polygon id="XMLID_1415_" class="dengg-st1" points="155.9,8.7 147,1.5 147,15.4 155,31.1 	"/>
						<polygon id="XMLID_1414_" class="dengg-st2" points="155,15.5 158.8,19.4 162.6,15.5 154.1,1.5 147,1.5 	"/>
						<rect id="XMLID_1413_" x="155" y="15.5" class="dengg-st3" width="7.6" height="15.6"/>
					</g>
					<linearGradient id="dengg_3_" gradientUnits="userSpaceOnUse" x1="81.2907" y1="16.4783" x2="81.2907" y2="6.2747">
						<stop  offset="0" style="stop-color:#B6DEFF"/>
						<stop  offset="0.5561" style="stop-color:#FFFFFF"/>
						<stop  offset="1" style="stop-color:#B6DEFF"/>
					</linearGradient>
					<path id="XMLID_1411_" class="dengg-st4" d="M148.3,6.3H14.3c-1.3,0-2.4,2.3-2.4,5.1s1.1,5.1,2.4,5.1h133.9c1.3,0,2.4-2.3,2.4-5.1
						S149.6,6.3,148.3,6.3z"/>
					<linearGradient id="dengg_4_" gradientUnits="userSpaceOnUse" x1="81.3582" y1="24.959" x2="81.3582" y2="13.7458">
						<stop  offset="0" style="stop-color:#B6DEFF"/>
						<stop  offset="0.5561" style="stop-color:#FFFFFF"/>
						<stop  offset="1" style="stop-color:#B6DEFF"/>
					</linearGradient>
					<path id="XMLID_1410_" class="dengg-st5" d="M151.8,13.7H10.9c-1.3,0-2.4,2.5-2.4,5.6S9.6,25,10.9,25h140.9c1.3,0,2.4-2.5,2.4-5.6
						S153.2,13.7,151.8,13.7z"/>
					</svg>`;
	}

	close() {
		return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 163 46" xml:space="preserve">
					<style type="text/css">
						.dengg-close-st0{fill:#98A1A8;}
						.dengg-close-st1{fill:#C2C8CE;}
						.dengg-close-st2{fill:#DFE3E8;}
						.dengg-close-st3{fill:url(#dengg_close_2_);}
						.dengg-close-st4{fill:url(#dengg_close_3_);}
					</style>
					<g id="XMLID_1392_">
						<polygon id="XMLID_1389_" class="dengg-close-st0" points="6.7,8.8 15.6,1.6 15.6,15.5 7.6,31.2 	"/>
						<polygon id="XMLID_1362_" class="dengg-close-st1" points="7.6,15.6 3.8,19.5 0,15.6 8.5,1.6 15.6,1.6 	"/>
						<rect id="XMLID_1361_" x="0" y="15.6" class="dengg-close-st2" width="7.6" height="15.6"/>
					</g>
					<g id="XMLID_1393_">
						<polygon id="XMLID_1397_" class="dengg-close-st0" points="155.9,8.8 147,1.6 147,15.5 155,31.2 	"/>
						<polygon id="XMLID_1396_" class="dengg-close-st1" points="155,15.6 158.8,19.5 162.6,15.6 154.1,1.6 147,1.6 	"/>
						<rect id="XMLID_1394_" x="155" y="15.6" class="dengg-close-st2" width="7.6" height="15.6"/>
					</g>
					<linearGradient id="dengg_close_2_" gradientUnits="userSpaceOnUse" x1="81.2907" y1="16.5817" x2="81.2907" y2="6.3781">
						<stop  offset="0" style="stop-color:#828282"/>
						<stop  offset="0.5561" style="stop-color:#C2C2C2"/>
						<stop  offset="1" style="stop-color:#7A7A7A"/>
					</linearGradient>
					<path id="XMLID_1391_" class="dengg-close-st3" d="M148.3,6.4H14.3c-1.3,0-2.4,2.3-2.4,5.1s1.1,5.1,2.4,5.1h133.9c1.3,0,2.4-2.3,2.4-5.1
						S149.6,6.4,148.3,6.4z"/>
					<linearGradient id="dengg_close_3_" gradientUnits="userSpaceOnUse" x1="81.3582" y1="25.0624" x2="81.3582" y2="13.8492">
						<stop  offset="0" style="stop-color:#828282"/>
						<stop  offset="0.5561" style="stop-color:#C2C2C2"/>
						<stop  offset="1" style="stop-color:#7A7A7A"/>
					</linearGradient>
					<path id="XMLID_1395_" class="dengg-close-st4" d="M151.8,13.8H10.9c-1.3,0-2.4,2.5-2.4,5.6s1.1,5.6,2.4,5.6h140.9c1.3,0,2.4-2.5,2.4-5.6
						S153.2,13.8,151.8,13.8z"/>
					</svg>`;
	}

	reveal(device,config) {
		let that = this;
		if(device) {
			device.points.forEach(function(point) {
				if(point.id=="SwSts") {
				  $('#'+that.id).html(point.value==1?that.open():that.close())
				}
			})
		}
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
}

export default Dengg;

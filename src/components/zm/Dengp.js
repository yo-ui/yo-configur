import Spirit from '@/core/Spirit.js'

/**
 * 灯泡
 */
class Dengp extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.title = "灯泡";
	    this.className = "Dengp";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4; 
	    this.minWidth = 50;
	    this.minHeight = 50;
	    this.linkage = true;
	    this.isBind = true;
	    this.config = {bindPoint: {id:'',unit:''}};
	}

	template(){
		let div = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index:3;border:1px solid transparent"></div>`);
		div.append(this.close());
		return div;
	}
	
	open() {
		return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 53 60" style="enable-background:new 0 0 53 60;" xml:space="preserve">
				<style type="text/css">
					.dengp-st0{fill:url(#dengp_2_);}
					.dengp-st1{fill:url(#dengp_3_);}
					.dengp-st2{fill:url(#dengp_4_);}
					.dengp-st3{fill:#AEB4BA;}
					.dengp-st4{fill:#4B5156;}
				</style>
				<radialGradient id="dengp_2_" cx="26.186" cy="33.7291" r="26.186" gradientUnits="userSpaceOnUse">
					<stop  offset="0" style="stop-color:#FFFFFF"/>
					<stop  offset="1" style="stop-color:#FCFCB1;stop-opacity:0"/>
				</radialGradient>
				<circle id="XMLID_1409_" class="dengp-st0" cx="26.2" cy="33.7" r="26.2"/>
				<radialGradient id="dengp_3_" cx="25.7781" cy="31.0651" r="15.78" gradientUnits="userSpaceOnUse">
					<stop  offset="0" style="stop-color:#FFFFFF"/>
					<stop  offset="0.1762" style="stop-color:#FFFFFB"/>
					<stop  offset="0.3468" style="stop-color:#FEFDEF"/>
					<stop  offset="0.5151" style="stop-color:#FCFBDC"/>
					<stop  offset="0.6821" style="stop-color:#FAF8C1"/>
					<stop  offset="0.8464" style="stop-color:#F7F49E"/>
					<stop  offset="1" style="stop-color:#F4F076"/>
				</radialGradient>
				<path id="XMLID_1407_" class="dengp-st1" d="M32.4,17.3v-3.2H19.1v3.2c0,1.9-0.8,3.7-2.3,4.8c-3.5,2.8-5.7,7.1-5.6,12
					c0.3,7.4,6.4,13.6,13.8,13.9c8.3,0.4,15.2-6.2,15.2-14.5c0-4.6-2.1-8.6-5.4-11.3C33.4,21,32.4,19.3,32.4,17.3z"/>
				<linearGradient id="dengp_4_" gradientUnits="userSpaceOnUse" x1="18.7519" y1="10.7485" x2="32.8042" y2="10.7485">
					<stop  offset="0" style="stop-color:#ACB1B9"/>
					<stop  offset="0.4813" style="stop-color:#FFFFFF"/>
					<stop  offset="1" style="stop-color:#A9AEB7"/>
				</linearGradient>
				<path id="XMLID_1406_" class="dengp-st2" d="M18.8,5v8.2c0,1.9,3.1,3.4,7,3.4c3.9,0,7-1.5,7-3.4V5H18.8z"/>
				<ellipse id="XMLID_1403_" class="dengp-st3" cx="25.8" cy="5" rx="7" ry="3.4"/>
				<path id="XMLID_1402_" class="dengp-st4" d="M29.2,1.9L29.2,1.9L29.2,1.9c0,0-0.1-0.1-0.1-0.1L27.8,1h-4l-0.9,0.6
					c-0.7,0.4-1.2,0.9-1.2,1.4c0,1.1,1.8,2,4.1,2s4.1-0.9,4.1-2C29.9,2.6,29.7,2.2,29.2,1.9z"/>
				<ellipse id="XMLID_1400_" class="dengp-st3" cx="25.8" cy="1" rx="2" ry="1"/>
				</svg>`;
	}
	
	close() {
		return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 53 60" style="enable-background:new 0 0 53 60;" xml:space="preserve">
					<style type="text/css">
						.dengp-close-st0{fill:url(#dengp_close_2_);}
						.dengp-close-st1{fill:url(#dengp_close_3_);}
						.dengp-close-st2{fill:#AEB4BA;}
						.dengp-close-st3{fill:#4B5156;}
					</style>
					<radialGradient id="dengp_close_2_" cx="25.7522" cy="31.0651" r="15.78" gradientUnits="userSpaceOnUse">
						<stop  offset="0" style="stop-color:#C2C2C2"/>
						<stop  offset="1" style="stop-color:#7A7A7A"/>
					</radialGradient>
					<path id="XMLID_1405_" class="dengp-close-st0" d="M32.4,17.3v-3.2H19.1v3.2c0,1.9-0.8,3.7-2.3,4.8c-3.5,2.8-5.7,7.1-5.6,12
						c0.3,7.4,6.4,13.6,13.8,13.9c8.3,0.4,15.2-6.2,15.2-14.5c0-4.6-2.1-8.6-5.4-11.3C33.4,21,32.4,19.3,32.4,17.3z"/>
					<linearGradient id="dengp_close_3_" gradientUnits="userSpaceOnUse" x1="18.7259" y1="10.7485" x2="32.7783" y2="10.7485">
						<stop  offset="0" style="stop-color:#ACB1B9"/>
						<stop  offset="0.4813" style="stop-color:#FFFFFF"/>
						<stop  offset="1" style="stop-color:#A9AEB7"/>
					</linearGradient>
					<path id="XMLID_1399_" class="dengp-close-st1" d="M18.7,5v8.2c0,1.9,3.1,3.4,7,3.4c3.9,0,7-1.5,7-3.4V5H18.7z"/>
					<ellipse id="XMLID_1398_" class="dengp-close-st2" cx="25.8" cy="5" rx="7" ry="3.4"/>
					<path id="XMLID_1404_" class="dengp-close-st3" d="M29.2,1.9L29.2,1.9L29.2,1.9c0,0-0.1-0.1-0.1-0.1L27.8,1h-4l-0.9,0.6
						c-0.7,0.4-1.2,0.9-1.2,1.4c0,1.1,1.8,2,4.1,2s4.1-0.9,4.1-2C29.9,2.6,29.6,2.2,29.2,1.9z"/>
					<ellipse id="XMLID_1401_" class="dengp-close-st2" cx="25.8" cy="1" rx="2" ry="1"/>
				</svg>`;
	}

	arrangement(stage) {
		stage.element.append(this.template());
	}

	toJson() {
		let json = {
			title: this.title,
			className: this.className,
			moveType: this.moveType,
			linkage: this.linkage,
			minWidth: this.minWidth,
			minHeight: this.minHeight
		};
		return Object.assign(super.toJson(),json);
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
}

export default Dengp;

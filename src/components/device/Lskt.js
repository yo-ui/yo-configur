import Spirit from './../../core/Spirit'

/**
 * 立式空调
 */
class Lskt extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.name = "立式空调";
	    this.className = "Lskt";
	    this.width = width;
	    this.height = height;
	    this.minWidth = 20;
	    this.minHeight = 20;
      this.moveType = 4;
	    this.linkage = true;
	    this.zIndex = 2;
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 96 228" style="enable-background:new 0 0 96 228;" xml:space="preserve">
				<style type="text/css">
					.lskt-st0{fill:#D0D4D8;}
					.lskt-st1{fill:url(#lskt_2_);}
					.lskt-st2{fill:#AFB7BC;}
					.lskt-st3{fill:url(#lskt_3_);}
					.lskt-st4{fill:url(#lskt_4_);}
					.lskt-st5{fill:url(#lskt_5_);}
					.lskt-st6{fill:url(#lskt_6_);}
					.lskt-st7{fill:url(#lskt_7_);}
					.lskt-st8{fill:none;stroke:#D0D4D8;stroke-width:0.75;stroke-miterlimit:10;}
				</style>
				<path id="XMLID_1032_" class="lskt-st0" d="M89.2,227.8H6.2c-3.4,0-6.2-2.8-6.2-6.2V18.6L4,6.2C5.3,2.9,7.8,0,11.2,0h72.9
					c3.4,0,6.1,3,7.2,6.2l4,12.4v202.9C95.4,225,92.6,227.8,89.2,227.8z"/>
				<linearGradient id="lskt_2_" gradientUnits="userSpaceOnUse" x1="0.7635" y1="121.2662" x2="94.6119" y2="121.2662">
					<stop  offset="0" style="stop-color:#CDCFD1"/>
					<stop  offset="6.000000e-002" style="stop-color:#FFFFFF"/>
					<stop  offset="0.94" style="stop-color:#FFFFFF"/>
					<stop  offset="1" style="stop-color:#CDCFD1"/>
				</linearGradient>
				<path id="XMLID_1031_" class="lskt-st1" d="M89.1,226.9H6.3c-3.1,0-5.6-2.5-5.6-5.6V21.2c0-3.1,2.5-5.6,5.6-5.6h82.7
					c3.1,0,5.6,2.5,5.6,5.6v200.2C94.6,224.4,92.1,226.9,89.1,226.9z"/>
				<polygon id="XMLID_1023_" class="lskt-st2" points="49.5,5 86.1,5 85.5,3 49.3,3 "/>
				<polygon id="XMLID_1022_" class="lskt-st2" points="49.8,9 87.3,9 86.7,7 49.7,7 "/>
				<polygon id="XMLID_1021_" class="lskt-st2" points="50.2,13 88.5,13 87.9,11 50,11 "/>
				<polygon id="XMLID_1020_" class="lskt-st2" points="45.1,11 7.6,11 7,13 44.9,13 "/>
				<polygon id="XMLID_1016_" class="lskt-st2" points="45.8,3 10,3 9.4,5 45.6,5 "/>
				<polygon id="XMLID_1011_" class="lskt-st2" points="45.4,7 8.8,7 8.2,9 45.3,9 "/>
				<linearGradient id="lskt_3_" gradientUnits="userSpaceOnUse" x1="47.7731" y1="89.2739" x2="47.7731" y2="83.6606">
					<stop  offset="0" style="stop-color:#505156"/>
					<stop  offset="1" style="stop-color:#000000"/>
				</linearGradient>
				<rect id="XMLID_1000_" x="39.3" y="83.2" class="lskt-st3" width="17" height="6.4"/>
				<path id="XMLID_1033_" class="lskt-st2" d="M86.1,56.5H9.2c-1.8,0-3.3-1.5-3.3-3.3V23.7c0-1.8,1.5-3.3,3.3-3.3h76.9
					c1.8,0,3.3,1.5,3.3,3.3v29.5C89.4,55,87.9,56.5,86.1,56.5z"/>
				<g id="XMLID_1015_">
					<linearGradient id="lskt_4_" gradientUnits="userSpaceOnUse" x1="47.6651" y1="38.8327" x2="47.6651" y2="46.3472">
						<stop  offset="0" style="stop-color:#CDCFD1"/>
						<stop  offset="0.1785" style="stop-color:#DFE0E1"/>
						<stop  offset="0.4315" style="stop-color:#F1F1F2"/>
						<stop  offset="0.6984" style="stop-color:#FBFCFC"/>
						<stop  offset="1" style="stop-color:#FFFFFF"/>
					</linearGradient>
					<rect id="XMLID_1024_" x="6.6" y="38.8" class="lskt-st4" width="82.1" height="7.5"/>
					<linearGradient id="lskt_5_" gradientUnits="userSpaceOnUse" x1="47.6651" y1="30.3182" x2="47.6651" y2="37.8327">
						<stop  offset="0" style="stop-color:#CDCFD1"/>
						<stop  offset="0.1785" style="stop-color:#DFE0E1"/>
						<stop  offset="0.4315" style="stop-color:#F1F1F2"/>
						<stop  offset="0.6984" style="stop-color:#FBFCFC"/>
						<stop  offset="1" style="stop-color:#FFFFFF"/>
					</linearGradient>
					<rect id="XMLID_1027_" x="6.6" y="30.3" class="lskt-st5" width="82.1" height="7.5"/>
					<linearGradient id="lskt_6_" gradientUnits="userSpaceOnUse" x1="47.6651" y1="47.3472" x2="47.6651" y2="55.8029">
						<stop  offset="0" style="stop-color:#CDCFD1"/>
						<stop  offset="0.1785" style="stop-color:#DFE0E1"/>
						<stop  offset="0.4315" style="stop-color:#F1F1F2"/>
						<stop  offset="0.6984" style="stop-color:#FBFCFC"/>
						<stop  offset="1" style="stop-color:#FFFFFF"/>
					</linearGradient>
					<path id="XMLID_1019_" class="lskt-st6" d="M6.6,47.3V53c0,1.6,1.3,2.8,2.8,2.8h76.5c1.6,0,2.8-1.3,2.8-2.8v-5.6H6.6z"/>
					<linearGradient id="lskt_7_" gradientUnits="userSpaceOnUse" x1="47.6651" y1="21.1066" x2="47.6651" y2="29.3182">
						<stop  offset="0" style="stop-color:#CDCFD1"/>
						<stop  offset="0.1785" style="stop-color:#DFE0E1"/>
						<stop  offset="0.4315" style="stop-color:#F1F1F2"/>
						<stop  offset="0.6984" style="stop-color:#FBFCFC"/>
						<stop  offset="1" style="stop-color:#FFFFFF"/>
					</linearGradient>
					<path id="XMLID_1018_" class="lskt-st7" d="M88.7,29.3v-5.4c0-1.6-1.3-2.8-2.8-2.8H9.4c-1.6,0-2.8,1.3-2.8,2.8v5.4H88.7z"/>
				</g>
				<path id="XMLID_1017_" class="lskt-st8" d="M95.1,154.6c0,1.7-2.4,3.1-5.4,3.1H5.6c-3,0-5.4-1.4-5.4-3.1"/>
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
			zIndex: this.zIndex
		};
		return Object.assign(super.toJson(),json);
	}

}

export default Lskt;

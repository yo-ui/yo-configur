import Spirit from './../../core/Spirit'

/**
 * 挂式空调
 */
class Gskt extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.name = "挂式空调";
	    this.className = "Gskt";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4;
	    this.minWidth = 20;
	    this.minHeight = 20;
	    this.linkage = false;
	    this.zIndex = 2;
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 163 64" style="enable-background:new 0 0 163 64;" xml:space="preserve" preserveAspectRatio="none">
				<style type="text/css">
					.gskt-st0{fill:#D0D4D8;}
					.gskt-st1{fill:url(#gskt_2_);}
					.gskt-st2{fill:url(#gskt_3_);}
					.gskt-st3{fill:#FFFFFF;}
					.gskt-st4{fill:#AFB6BB;}
					.gskt-st5{fill:url(#gskt_4_);}
				</style>
				<path id="XMLID_976_" class="gskt-st0" d="M155.8,63H6.2C2.8,63,0,60.2,0,56.8V18.6L4,6.2C5.3,2.9,7.8,0,11.2,0h139.6
					c3.4,0,6.1,3,7.2,6.2l4,12.4v38.1C162,60.2,159.2,63,155.8,63z"/>
				<linearGradient id="gskt_2_" gradientUnits="userSpaceOnUse" x1="0.7635" y1="38.8724" x2="161.2365" y2="38.8724">
					<stop  offset="0" style="stop-color:#CDCFD1"/>
					<stop  offset="4.000000e-002" style="stop-color:#FFFFFF"/>
					<stop  offset="0.96" style="stop-color:#FFFFFF"/>
					<stop  offset="1" style="stop-color:#CDCFD1"/>
				</linearGradient>
				<path id="XMLID_993_" class="gskt-st1" d="M155.7,62.1H6.3c-3.1,0-5.6-2.5-5.6-5.6V21.2c0-3.1,2.5-5.6,5.6-5.6h149.4
					c3.1,0,5.6,2.5,5.6,5.6v35.4C161.2,59.6,158.7,62.1,155.7,62.1z"/>
				<linearGradient id="gskt_3_" gradientUnits="userSpaceOnUse" x1="81" y1="49.7628" x2="81" y2="62.1319">
					<stop  offset="0" style="stop-color:#CDCFD1"/>
					<stop  offset="8.518696e-003" style="stop-color:#CED0D2"/>
					<stop  offset="0.2357" style="stop-color:#E4E5E6"/>
					<stop  offset="0.4714" style="stop-color:#F4F4F5"/>
					<stop  offset="0.7196" style="stop-color:#FDFDFD"/>
					<stop  offset="1" style="stop-color:#FFFFFF"/>
				</linearGradient>
				<path id="XMLID_996_" class="gskt-st2" d="M0.8,49.8v6.8c0,3.1,2.5,5.6,5.6,5.6h149.4c3.1,0,5.6-2.5,5.6-5.6v-6.8H0.8z"/>
				<g id="XMLID_997_">
					<rect id="XMLID_990_" x="36.7" y="44.6" class="gskt-st3" width="1.3" height="11.5"/>
					<rect id="XMLID_994_" x="80.4" y="44.6" class="gskt-st3" width="1.3" height="11.5"/>
					<rect id="XMLID_995_" x="124" y="44.6" class="gskt-st3" width="1.3" height="11.5"/>
				</g>
				<rect id="XMLID_998_" x="6.8" y="22" class="gskt-st4" width="14" height="2"/>
				<linearGradient id="gskt_4_" gradientUnits="userSpaceOnUse" x1="81" y1="43.8025" x2="81" y2="38.1893">
					<stop  offset="0" style="stop-color:#515156"/>
					<stop  offset="1" style="stop-color:#040000"/>
				</linearGradient>
				<rect id="XMLID_999_" x="72.5" y="37.7" class="gskt-st5" width="17" height="6.4"/>
				<polygon id="XMLID_1006_" class="gskt-st4" points="107.1,5 152.8,5 152.2,3 107,3 "/>
				<polygon id="XMLID_1009_" class="gskt-st4" points="107.5,9 154,9 153.4,7 107.3,7 "/>
				<polygon id="XMLID_1010_" class="gskt-st4" points="107.8,13 155.2,13 154.6,11 107.6,11 "/>
				<g id="XMLID_1007_">
					<polygon id="XMLID_1012_" class="gskt-st4" points="54.1,11 7.6,11 7,13 53.9,13 	"/>
					<polygon id="XMLID_1013_" class="gskt-st4" points="58.5,13 103.3,13 103.1,11 58.6,11 	"/>
				</g>
				<g id="XMLID_1001_">
					<polygon id="XMLID_1002_" class="gskt-st4" points="59.1,5 102.6,5 102.4,3 59.3,3 	"/>
					<polygon id="XMLID_1004_" class="gskt-st4" points="54.8,3 10,3 9.4,5 54.6,5 	"/>
				</g>
				<g id="XMLID_1003_">
					<polygon id="XMLID_1005_" class="gskt-st4" points="58.8,9 102.9,9 102.8,7 59,7 	"/>
					<polygon id="XMLID_1008_" class="gskt-st4" points="54.4,7 8.8,7 8.2,9 54.3,9 	"/>
				</g>
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

export default Gskt;

import Spirit from '@/core/Spirit.js'

/**
 * I/O控制模块
 */
class Iokzmk extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.title = "I/O控制模块";
	    this.className = "Iokzmk";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4; 
	    this.minWidth = 20;
	    this.minHeight = 20;
	    this.linkage = true;
	    this.zIndex = 2;
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;border:1px solid transparent;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 53 48" style="enable-background:new 0 0 53 48;" xml:space="preserve">
				<style type="text/css">
					.st0{fill:#DFE3E8;}
					.st1{fill:#FFFFFF;}
					.st2{fill:#C2C8CE;}
					.st3{fill:#8F9499;}
					.st4{fill:#3E8C5D;}
					.st5{fill:#65B786;}
					.st6{fill:#073319;}
					.st7{opacity:0.2;}
				</style>
				<g id="XMLID_1301_">
					<rect id="XMLID_1309_" x="2" y="39.5" class="st0" width="49" height="8.1"/>
					<rect id="XMLID_1308_" x="1" y="15.5" class="st1" width="51" height="23"/>
					<path id="XMLID_1305_" class="st0" d="M53,39.5H0v-25h53V39.5z M2,37.5h49v-21H2V37.5z"/>
					<polygon id="XMLID_1304_" class="st2" points="53,14.5 0,14.5 2,10.1 51,10.1 	"/>
					<rect id="XMLID_1303_" x="2" y="1.4" class="st0" width="49" height="8.7"/>
					<polygon id="XMLID_1302_" class="st2" points="50,0 3,0 2,1.4 51,1.4 	"/>
				</g>
				<g id="XMLID_1296_">
					<rect id="XMLID_1291_" x="5.9" y="19.8" class="st3" width="4.5" height="2.5"/>
					<rect id="XMLID_1290_" x="14.9" y="19.8" class="st3" width="4.5" height="2.5"/>
					<rect id="XMLID_1292_" x="23.9" y="19.8" class="st3" width="4.5" height="2.5"/>
					<rect id="XMLID_1294_" x="32.9" y="19.8" class="st3" width="4.5" height="2.5"/>
					<rect id="XMLID_1295_" x="42.9" y="19.8" class="st3" width="4.5" height="2.5"/>
				</g>
				<g id="XMLID_1297_">
					<rect id="XMLID_1312_" x="5.9" y="31.8" class="st3" width="4.5" height="2.5"/>
					<rect id="XMLID_1311_" x="14.9" y="31.8" class="st3" width="4.5" height="2.5"/>
					<rect id="XMLID_1300_" x="23.9" y="31.8" class="st3" width="4.5" height="2.5"/>
					<rect id="XMLID_1299_" x="32.9" y="31.8" class="st3" width="4.5" height="2.5"/>
					<rect id="XMLID_1298_" x="42.9" y="31.8" class="st3" width="4.5" height="2.5"/>
				</g>
				<rect id="XMLID_1289_" x="5.8" y="25.4" class="st2" width="41.7" height="1"/>
				<rect id="XMLID_1288_" x="5.8" y="27.5" class="st2" width="28.7" height="1"/>
				<g id="XMLID_1322_">
					<polygon id="XMLID_1313_" class="st4" points="16,6.9 10.4,7.6 4.9,6.9 4.9,3.6 16,3.6 	"/>
					<rect id="XMLID_1293_" x="4.9" y="6.9" class="st5" width="11.1" height="6.4"/>
					<rect id="XMLID_1314_" x="5.9" y="4.5" class="st6" width="1.2" height="1.3"/>
					<rect id="XMLID_1315_" x="8.5" y="4.5" class="st6" width="1.2" height="1.3"/>
					<rect id="XMLID_1316_" x="11.1" y="4.5" class="st6" width="1.2" height="1.3"/>
					<rect id="XMLID_1317_" x="13.7" y="4.5" class="st6" width="1.2" height="1.3"/>
					<rect id="XMLID_1321_" x="5.9" y="8.4" class="st1" width="1.2" height="1.3"/>
					<rect id="XMLID_1320_" x="8.5" y="8.4" class="st1" width="1.2" height="1.3"/>
					<rect id="XMLID_1319_" x="11.1" y="8.4" class="st1" width="1.2" height="1.3"/>
					<rect id="XMLID_1318_" x="13.7" y="8.4" class="st1" width="1.2" height="1.3"/>
				</g>
				<g id="XMLID_1323_">
					<polygon id="XMLID_1333_" class="st4" points="32,6.9 26.4,7.6 20.9,6.9 20.9,3.6 32,3.6 	"/>
					<rect id="XMLID_1332_" x="20.9" y="6.9" class="st5" width="11.1" height="6.4"/>
					<rect id="XMLID_1331_" x="21.9" y="4.5" class="st6" width="1.2" height="1.3"/>
					<rect id="XMLID_1330_" x="24.5" y="4.5" class="st6" width="1.2" height="1.3"/>
					<rect id="XMLID_1329_" x="27.1" y="4.5" class="st6" width="1.2" height="1.3"/>
					<rect id="XMLID_1328_" x="29.7" y="4.5" class="st6" width="1.2" height="1.3"/>
					<rect id="XMLID_1327_" x="21.9" y="8.4" class="st1" width="1.2" height="1.3"/>
					<rect id="XMLID_1326_" x="24.5" y="8.4" class="st1" width="1.2" height="1.3"/>
					<rect id="XMLID_1325_" x="27.1" y="8.4" class="st1" width="1.2" height="1.3"/>
					<rect id="XMLID_1324_" x="29.7" y="8.4" class="st1" width="1.2" height="1.3"/>
				</g>
				<g id="XMLID_1334_">
					<polygon id="XMLID_1344_" class="st4" points="48,6.9 42.4,7.6 36.9,6.9 36.9,3.6 48,3.6 	"/>
					<rect id="XMLID_1343_" x="36.9" y="6.9" class="st5" width="11.1" height="6.4"/>
					<rect id="XMLID_1342_" x="37.9" y="4.5" class="st6" width="1.2" height="1.3"/>
					<rect id="XMLID_1341_" x="40.5" y="4.5" class="st6" width="1.2" height="1.3"/>
					<rect id="XMLID_1340_" x="43.1" y="4.5" class="st6" width="1.2" height="1.3"/>
					<rect id="XMLID_1339_" x="45.7" y="4.5" class="st6" width="1.2" height="1.3"/>
					<rect id="XMLID_1338_" x="37.9" y="8.4" class="st1" width="1.2" height="1.3"/>
					<rect id="XMLID_1337_" x="40.5" y="8.4" class="st1" width="1.2" height="1.3"/>
					<rect id="XMLID_1336_" x="43.1" y="8.4" class="st1" width="1.2" height="1.3"/>
					<rect id="XMLID_1335_" x="45.7" y="8.4" class="st1" width="1.2" height="1.3"/>
				</g>
				<g id="XMLID_1367_">
					<rect id="XMLID_1376_" x="4.9" y="39.6" class="st5" width="11.1" height="6.4"/>
					<rect id="XMLID_1371_" x="5.9" y="43.3" class="st1" width="1.2" height="1.3"/>
					<rect id="XMLID_1370_" x="8.5" y="43.3" class="st1" width="1.2" height="1.3"/>
					<rect id="XMLID_1369_" x="11.1" y="43.3" class="st1" width="1.2" height="1.3"/>
					<rect id="XMLID_1368_" x="13.7" y="43.3" class="st1" width="1.2" height="1.3"/>
				</g>
				<g id="XMLID_1356_">
					<rect id="XMLID_1365_" x="20.9" y="39.6" class="st5" width="11.1" height="6.4"/>
					<rect id="XMLID_1360_" x="21.9" y="43.3" class="st1" width="1.2" height="1.3"/>
					<rect id="XMLID_1359_" x="24.5" y="43.3" class="st1" width="1.2" height="1.3"/>
					<rect id="XMLID_1358_" x="27.1" y="43.3" class="st1" width="1.2" height="1.3"/>
					<rect id="XMLID_1357_" x="29.7" y="43.3" class="st1" width="1.2" height="1.3"/>
				</g>
				<g id="XMLID_1345_">
					<rect id="XMLID_1354_" x="36.9" y="39.6" class="st5" width="11.1" height="6.4"/>
					<rect id="XMLID_1349_" x="37.9" y="43.3" class="st1" width="1.2" height="1.3"/>
					<rect id="XMLID_1348_" x="40.5" y="43.3" class="st1" width="1.2" height="1.3"/>
					<rect id="XMLID_1347_" x="43.1" y="43.3" class="st1" width="1.2" height="1.3"/>
					<rect id="XMLID_1346_" x="45.7" y="43.3" class="st1" width="1.2" height="1.3"/>
				</g>
				<rect id="XMLID_1310_" x="2" y="39.5" class="st7" width="49" height="2.5"/>
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
	
}

export default Iokzmk;

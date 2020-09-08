import Spirit from '@/core/Spirit.js'

/**
 * 漏水报警器
 */
class Lsbjq extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.name = "漏水报警器";
	    this.className = "Lsbjq";
	    this.width = width;
	    this.height = height;
      this.minWidth = 20;
      this.minHeight = 20;
	    this.moveType = 4;
	    this.zIndex = 2;
	    this.linkage = true;
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
		     <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 34 44" style="enable-background:new 0 0 34 44;" xml:space="preserve">
				<style type="text/css">
					.lsbjq-st0{fill:url(#lsbjq_2_);}
					.lsbjq-st1{fill:#AEB4BA;}
					.lsbjq-st2{opacity:0.5;}
					.lsbjq-st3{fill:#3E8CCC;}
					.lsbjq-st4{fill:#14527C;}
					.lsbjq-st5{fill:#F2F5F9;}
				</style>
				<linearGradient id="lsbjq_2_" gradientUnits="userSpaceOnUse" x1="-6.943264e-007" y1="25.1947" x2="34" y2="25.1947">
					<stop  offset="0" style="stop-color:#BCC6C9"/>
					<stop  offset="0.1639" style="stop-color:#D0D8DB"/>
					<stop  offset="0.358" style="stop-color:#E2E7EA"/>
					<stop  offset="0.5" style="stop-color:#E8EDF0"/>
					<stop  offset="0.6116" style="stop-color:#E2E7EA"/>
					<stop  offset="0.7643" style="stop-color:#D0D7DB"/>
					<stop  offset="0.9399" style="stop-color:#B4BDC1"/>
					<stop  offset="1" style="stop-color:#A8B2B7"/>
				</linearGradient>
				<path id="XMLID_1517_" class="lsbjq-st0" d="M0,6.4v35.6C0,43.1,7.6,44,17,44c9.4,0,17-0.9,17-2.1V6.4H0z"/>
				<path id="XMLID_1516_" class="lsbjq-st1" d="M1.2,0.8L0,6.4c0,1.1,7.6,2.1,17,2.1c9.4,0,17-0.9,17-2.1l-1.2-5.6c-0.1-0.5-0.5-0.8-1-0.8
					H2.2C1.7,0,1.3,0.3,1.2,0.8z"/>
				<g id="XMLID_1530_" class="st2">
					<g id="XMLID_1519_">
						<path id="XMLID_1520_" d="M25.1,39.6v1.2c5.3-0.3,8.9-1,8.9-1.8v-1.2C34,38.5,30.4,39.2,25.1,39.6z"/>
						<path id="XMLID_1522_" d="M8.9,39.6c-5.3-0.3-8.9-1-8.9-1.8v1.2c0,0.8,3.6,1.5,8.9,1.8V39.6z"/>
					</g>
					<g id="XMLID_1518_">
						<path id="XMLID_1523_" d="M25.1,36.6v1.2c5.3-0.3,8.9-1,8.9-1.8v-1.2C34,35.5,30.4,36.2,25.1,36.6z"/>
						<path id="XMLID_1521_" d="M8.9,36.6c-5.3-0.3-8.9-1-8.9-1.8v1.2c0,0.8,3.6,1.5,8.9,1.8V36.6z"/>
					</g>
					<g id="XMLID_1524_">
						<path id="XMLID_1526_" d="M25.1,33.6v1.2c5.3-0.3,8.9-1,8.9-1.8v-1.2C34,32.5,30.4,33.2,25.1,33.6z"/>
						<path id="XMLID_1525_" d="M8.9,33.6c-5.3-0.3-8.9-1-8.9-1.8v1.2c0,0.8,3.6,1.5,8.9,1.8V33.6z"/>
					</g>
					<g id="XMLID_1527_">
						<path id="XMLID_1529_" d="M25.1,30.6v1.2c5.3-0.3,8.9-1,8.9-1.8v-1.2C34,29.5,30.4,30.2,25.1,30.6z"/>
						<path id="XMLID_1528_" d="M8.9,30.6c-5.3-0.3-8.9-1-8.9-1.8v1.2c0,0.8,3.6,1.5,8.9,1.8V30.6z"/>
					</g>
				</g>
				<g id="XMLID_1531_" class="lsbjq-st2">
					<g id="XMLID_1566_">
						<path id="XMLID_1568_" d="M25.1,20.6v1.2c5.3-0.3,8.9-1,8.9-1.8v-1.2C34,19.5,30.4,20.2,25.1,20.6z"/>
						<path id="XMLID_1567_" d="M8.9,20.6c-5.3-0.3-8.9-1-8.9-1.8v1.2c0,0.8,3.6,1.5,8.9,1.8V20.6z"/>
					</g>
					<g id="XMLID_1538_">
						<path id="XMLID_1565_" d="M25.1,17.6v1.2c5.3-0.3,8.9-1,8.9-1.8v-1.2C34,16.5,30.4,17.2,25.1,17.6z"/>
						<path id="XMLID_1539_" d="M8.9,17.6c-5.3-0.3-8.9-1-8.9-1.8v1.2c0,0.8,3.6,1.5,8.9,1.8V17.6z"/>
					</g>
					<g id="XMLID_1535_">
						<path id="XMLID_1537_" d="M25.1,14.6v1.2c5.3-0.3,8.9-1,8.9-1.8v-1.2C34,13.5,30.4,14.2,25.1,14.6z"/>
						<path id="XMLID_1536_" d="M8.9,14.6c-5.3-0.3-8.9-1-8.9-1.8v1.2c0,0.8,3.6,1.5,8.9,1.8V14.6z"/>
					</g>
					<g id="XMLID_1532_">
						<path id="XMLID_1534_" d="M25.1,11.6v1.2c5.3-0.3,8.9-1,8.9-1.8V9.8C34,10.5,30.4,11.2,25.1,11.6z"/>
						<path id="XMLID_1533_" d="M8.9,11.6C3.6,11.2,0,10.5,0,9.8v1.2c0,0.8,3.6,1.5,8.9,1.8V11.6z"/>
					</g>
				</g>
				<path id="XMLID_1571_" class="lsbjq-st3" d="M21.7,41.1h-9.4c-0.8,0-1.5-0.7-1.5-1.5v-26c0-0.8,0.7-1.5,1.5-1.5h9.4c0.8,0,1.5,0.7,1.5,1.5
					v26C23.2,40.5,22.5,41.1,21.7,41.1z"/>
				<ellipse id="XMLID_1570_" class="lsbjq-st4" cx="17" cy="20.2" rx="4.4" ry="3.9"/>
				<ellipse id="XMLID_1569_" class="lsbjq-st5" cx="17" cy="20.7" rx="3.9" ry="3.4"/>
				</svg>
			</div>`);
	}

	toJson() {
		let json = {
			className:this.className,
			moveType:this.moveType,
			linkage:this.linkage,
			minWidth:this.minWidth,
			minHeight:this.minHeight,
			zIndex:this.zIndex
		};
		return Object.assign(super.toJson(),json);
	}
}

export default Lsbjq;

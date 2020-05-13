import Spirit from '@/core/Spirit.js'

/**
 * 板式换热器
 */
class Bshrq extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.title = "板式换热器";
	    this.className = "Bshrq";
	    this.width = width;
	    this.height = height;
		this.zIndex = 2;
	    this.moveType = 4; 
	    this.minWidth = 20;
	    this.minHeight = 20;
	    this.linkage = true;
	    this.isPanel = true;
	    this.isBind = true;
	    this.bindDevice = {};
	    this.config = {bindPoint: {id:'',unit:''}};
	}

	template(){
		let div = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;border:1px solid transparent;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)"></div>`);
		div.append(this.close());
		return div;
	}
	
	open() {
		return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 123 123" style="enable-background:new 0 0 123 123;" xml:space="preserve">
				<style type="text/css">
					.bshrq-st0{fill:url(#bshrq_2_);}
					.bshrq-st1{fill:#064289;}
					.bshrq-st2{fill:url(#bshrq_3_);}
					.bshrq-st3{fill:url(#bshrq_4_);}
					.bshrq-st4{fill:url(#bshrq_5_);}
					.bshrq-st5{fill:url(#bshrq_6_);}
					.bshrq-st6{fill:url(#bshrq_7_);}
					.bshrq-st7{fill:url(#bshrq_8_);}
					.bshrq-st8{fill:url(#bshrq_9_);}
					.bshrq-st9{fill:url(#bshrq_10_);}
					.bshrq-st10{fill:#11283D;}
					.bshrq-st11{fill:url(#bshrq_11_);}
					.bshrq-st12{fill:url(#bshrq_12_);}
					.bshrq-st13{fill:url(#bshrq_13_);}
					.bshrq-st14{fill:url(#bshrq_14_);}
					.bshrq-st15{fill:url(#bshrq_15_);}
					.bshrq-st16{fill:url(#bshrq_16_);}
					.bshrq-st17{fill:url(#bshrq_17_);}
					.bshrq-st18{fill:url(#bshrq_18_);}
					.bshrq-st19{fill:url(#bshrq_19_);}
					.bshrq-st20{fill:url(#bshrq_20_);}
					.bshrq-st21{fill:url(#bshrq_21_);}
					.bshrq-st22{fill:url(#bshrq_22_);}
					.bshrq-st23{fill:url(#bshrq_23_);}
					.bshrq-st24{fill:url(#bshrq_24_);}
					.bshrq-st25{fill:url(#bshrq_25_);}
					.bshrq-st26{fill:url(#bshrq_26_);}
					.bshrq-st27{fill:url(#bshrq_27_);}
					.bshrq-st28{fill:url(#bshrq_28_);}
					.bshrq-st29{fill:url(#bshrq_29_);}
					.bshrq-st30{fill:url(#bshrq_30_);}
					.bshrq-st31{fill:url(#bshrq_31_);}
					.bshrq-st32{fill:url(#bshrq_32_);}
					.bshrq-st33{fill:url(#bshrq_33_);}
					.bshrq-st34{fill:url(#bshrq_34_);}
					.bshrq-st35{fill:url(#bshrq_35_);}
					.bshrq-st36{fill:url(#bshrq_36_);}
					.bshrq-st37{fill:url(#bshrq_37_);}
					.bshrq-st38{fill:url(#bshrq_38_);}
					.bshrq-st39{fill:url(#bshrq_39_);}
					.bshrq-st40{fill:url(#bshrq_40_);}
					.bshrq-st41{fill:url(#bshrq_41_);}
					.bshrq-st42{fill:url(#bshrq_42_);}
					.bshrq-st43{fill:url(#bshrq_43_);}
					.bshrq-st44{fill:url(#bshrq_44_);}
					.bshrq-st45{fill:url(#bshrq_45_);}
					.bshrq-st46{fill:url(#bshrq_46_);}
					.bshrq-st47{fill:url(#bshrq_47_);}
					.bshrq-st48{fill:url(#bshrq_48_);}
					.bshrq-st49{fill:url(#bshrq_49_);}
					.bshrq-st50{fill:url(#bshrq_50_);}
					.bshrq-st51{fill:url(#bshrq_51_);}
					.bshrq-st52{fill:url(#bshrq_52_);}
					.bshrq-st53{fill:url(#bshrq_53_);}
					.bshrq-st54{fill:url(#bshrq_54_);}
					.bshrq-st55{opacity:0.7;}
					
					.show {display:default;}
				  .hide {display:none;}
				  .f1 {display:default;}
				  .f2 {display:none;}
				</style>
				<g id="bshrq_533_">
					<g id="bshrq_506_">
						<linearGradient id="bshrq_2_" gradientUnits="userSpaceOnUse" x1="3.6152" y1="20.1208" x2="3.6152" y2="47.5475">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.5027" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<path id="bshrq_505_" class="bshrq-st0" d="M6.9,19.7H3.2c-1.6,0-2.9,6.1-2.9,13.6S1.6,47,3.2,47h3.8V19.7z"/>
						<ellipse id="bshrq_504_" class="bshrq-st1" cx="6.9" cy="33.4" rx="2.9" ry="13.6"/>
						<linearGradient id="bshrq_3_" gradientUnits="userSpaceOnUse" x1="9.2593" y1="25.1973" x2="9.2593" y2="40.6761">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.3957" style="stop-color:#17A1E5"/>
							<stop  offset="0.9412" style="stop-color:#0D2257"/>
						</linearGradient>
						<path id="bshrq_503_" class="bshrq-st2" d="M12.8,25.2H7.3c-0.7,0-1.6,3.5-1.6,7.9s0.9,7.9,1.6,7.9h5.5V25.2z"/>
					</g>
					<g id="bshrq_507_">
						<linearGradient id="bshrq_4_" gradientUnits="userSpaceOnUse" x1="3.6152" y1="83.1208" x2="3.6152" y2="110.5475">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.5027" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<path id="bshrq_510_" class="bshrq-st3" d="M6.9,82.7H3.2c-1.6,0-2.9,6.1-2.9,13.6S1.6,110,3.2,110h3.8V82.7z"/>
						<ellipse id="bshrq_509_" class="bshrq-st1" cx="6.9" cy="96.4" rx="2.9" ry="13.6"/>
						<linearGradient id="bshrq_5_" gradientUnits="userSpaceOnUse" x1="9.2593" y1="88.1973" x2="9.2593" y2="103.6761">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.3957" style="stop-color:#17A1E5"/>
							<stop  offset="0.9412" style="stop-color:#0D2257"/>
						</linearGradient>
						<path id="bshrq_508_" class="bshrq-st4" d="M12.8,88.2H7.3c-0.7,0-1.6,3.5-1.6,7.9s0.9,7.9,1.6,7.9h5.5V88.2z"/>
					</g>
					<g id="bshrq_515_">
						
							<linearGradient id="bshrq_6_" gradientUnits="userSpaceOnUse" x1="-568.8239" y1="20.1208" x2="-568.8239" y2="47.5475" gradientTransform="matrix(-1 0 0 1 -448.8861 0)">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.5027" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<path id="bshrq_518_" class="bshrq-st5" d="M116.6,19.7h3.8c1.6,0,2.9,6.1,2.9,13.6S122,47,120.4,47h-3.8V19.7z"/>
						<ellipse id="bshrq_517_" class="bshrq-st1" cx="116.6" cy="33.4" rx="2.9" ry="13.6"/>
						
							<linearGradient id="bshrq_7_" gradientUnits="userSpaceOnUse" x1="-563.1798" y1="25.1973" x2="-563.1798" y2="40.6761" gradientTransform="matrix(-1 0 0 1 -448.8861 0)">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.3957" style="stop-color:#17A1E5"/>
							<stop  offset="0.9412" style="stop-color:#0D2257"/>
						</linearGradient>
						<path id="bshrq_516_" class="bshrq-st6" d="M110.7,25.2h5.5c0.7,0,1.6,3.5,1.6,7.9s-0.9,7.9-1.6,7.9h-5.5V25.2z"/>
					</g>
					<g id="bshrq_511_">
						
							<linearGradient id="bshrq_8_" gradientUnits="userSpaceOnUse" x1="-568.8239" y1="83.1208" x2="-568.8239" y2="110.5475" gradientTransform="matrix(-1 0 0 1 -448.8861 0)">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.5027" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<path id="bshrq_514_" class="bshrq-st7" d="M116.6,82.7h3.8c1.6,0,2.9,6.1,2.9,13.6S122,110,120.4,110h-3.8V82.7z"/>
						<ellipse id="bshrq_513_" class="bshrq-st1" cx="116.6" cy="96.4" rx="2.9" ry="13.6"/>
						
							<linearGradient id="bshrq_9_" gradientUnits="userSpaceOnUse" x1="-563.1798" y1="88.1973" x2="-563.1798" y2="103.6761" gradientTransform="matrix(-1 0 0 1 -448.8861 0)">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.3957" style="stop-color:#17A1E5"/>
							<stop  offset="0.9412" style="stop-color:#0D2257"/>
						</linearGradient>
						<path id="bshrq_512_" class="bshrq-st8" d="M110.7,88.2h5.5c0.7,0,1.6,3.5,1.6,7.9s-0.9,7.9-1.6,7.9h-5.5V88.2z"/>
					</g>
					<linearGradient id="bshrq_10_" gradientUnits="userSpaceOnUse" x1="20.1145" y1="-0.1801" x2="20.1145" y2="121.3003">
						<stop  offset="6.403941e-002" style="stop-color:#0077BF"/>
						<stop  offset="0.1232" style="stop-color:#00417F"/>
					</linearGradient>
					<path id="bshrq_468_" class="bshrq-st9" d="M24.7,1.1L24.7,1.1c-0.3,0-0.5,0.1-0.7,0.3L12.4,11c-1,0.9-1.6,2.1-1.6,3.5v106.2
						c0,1.1,0.9,1.7,1.8,1.7v0h4.5L29.4,1.2L24.7,1.1z"/>
					<path id="bshrq_465_" class="bshrq-st10" d="M29.5,108.4l-10.9,13.4c-1,1.3-3.1,0.5-3.1-1.1V14.5c0-1.3,0.6-2.6,1.6-3.5l11.5-9.6
						c0.8-0.7,2.1-0.1,2.1,1V105C30.7,106.3,30.3,107.5,29.5,108.4z"/>
					
						<linearGradient id="bshrq_11_" gradientUnits="userSpaceOnUse" x1="-612.9048" y1="-0.1801" x2="-612.9048" y2="121.3003" gradientTransform="matrix(-1 0 0 1 -510.4663 0)">
						<stop  offset="6.403941e-002" style="stop-color:#0077BF"/>
						<stop  offset="0.1232" style="stop-color:#00417F"/>
					</linearGradient>
					<path id="bshrq_529_" class="bshrq-st11" d="M97.9,1.1L97.9,1.1c0.3,0,0.5,0.1,0.7,0.3l11.5,9.6c1,0.9,1.6,2.1,1.6,3.5v106.2
						c0,1.1-0.9,1.7-1.8,1.7v0h-4.5L93.1,1.2L97.9,1.1z"/>
					<path id="bshrq_528_" class="bshrq-st10" d="M93,108.4l10.9,13.4c1,1.3,3.1,0.5,3.1-1.1V14.5c0-1.3-0.6-2.6-1.6-3.5L94,1.5
						c-0.8-0.7-2.1-0.1-2.1,1V105C91.8,106.3,92.3,107.5,93,108.4z"/>
					<linearGradient id="bshrq_12_" gradientUnits="userSpaceOnUse" x1="61.1769" y1="5.3357" x2="61.1769" y2="115.4725">
						<stop  offset="0.1034" style="stop-color:#7D7D7D"/>
						<stop  offset="0.1379" style="stop-color:#3B3B3B"/>
					</linearGradient>
					<polygon id="bshrq_467_" class="bshrq-st12" points="29,5.3 19.1,15.6 19.1,115.5 103.2,115.5 103.2,14.6 92.1,5.3 	"/>
					<g id="bshrq_470_">
						<linearGradient id="bshrq_13_" gradientUnits="userSpaceOnUse" x1="70.4422" y1="2" x2="70.4422" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_485_" class="bshrq-st13" points="70.1,117.5 72.1,117.5 72.1,15.1 70.8,3.9 68.8,3.9 70.1,15.1 		"/>
						<linearGradient id="bshrq_14_" gradientUnits="userSpaceOnUse" x1="73.7853" y1="2" x2="73.7853" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_484_" class="bshrq-st14" points="74.1,117.5 76.1,117.5 76.1,15.1 73.5,3.9 71.5,3.9 74.1,15.2 		"/>
						<linearGradient id="bshrq_15_" gradientUnits="userSpaceOnUse" x1="63.2423" y1="2" x2="63.2423" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<rect id="bshrq_481_" x="62.2" y="3.9" class="bshrq-st15" width="2" height="113.6"/>
						<linearGradient id="bshrq_16_" gradientUnits="userSpaceOnUse" x1="67.0027" y1="2" x2="67.0027" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_479_" class="bshrq-st16" points="66.2,117.5 68.2,117.5 68.2,15 67.8,3.9 65.8,3.9 66.2,15.1 		"/>
						<linearGradient id="bshrq_17_" gradientUnits="userSpaceOnUse" x1="77.0639" y1="2" x2="77.0639" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_478_" class="bshrq-st17" points="78.1,117.5 80.1,117.5 80.1,14.9 76.1,3.9 74,3.9 78.1,15.2 		"/>
						<linearGradient id="bshrq_18_" gradientUnits="userSpaceOnUse" x1="93.7304" y1="2" x2="93.7304" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_477_" class="bshrq-st18" points="98.1,117.5 100.1,117.5 100.1,14.7 90.1,3.9 87.3,3.9 98.1,15.5 		"/>
						<linearGradient id="bshrq_19_" gradientUnits="userSpaceOnUse" x1="97.3703" y1="2" x2="97.3703" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_476_" class="bshrq-st19" points="102.4,117.5 104.4,117.5 104.4,14.6 93.2,3.9 90.3,3.9 102.4,15.5 		"/>
						<linearGradient id="bshrq_20_" gradientUnits="userSpaceOnUse" x1="90.2678" y1="2" x2="90.2678" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_475_" class="bshrq-st20" points="94.1,117.5 96.1,117.5 96.1,14.7 87,3.9 84.4,3.9 94.1,15.4 		"/>
						<linearGradient id="bshrq_21_" gradientUnits="userSpaceOnUse" x1="86.8584" y1="2" x2="86.8584" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_474_" class="bshrq-st21" points="90.1,117.5 92.1,117.5 92.1,14.7 84.1,3.9 81.6,3.9 90.1,15.4 		"/>
						<linearGradient id="bshrq_22_" gradientUnits="userSpaceOnUse" x1="80.4" y1="2" x2="80.4" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_473_" class="bshrq-st22" points="82.1,117.5 84.1,117.5 84.1,14.8 78.9,3.9 76.7,3.9 82.1,15.3 		"/>
						<linearGradient id="bshrq_23_" gradientUnits="userSpaceOnUse" x1="83.5988" y1="2" x2="83.5988" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_472_" class="bshrq-st23" points="86.1,117.5 88.1,117.5 88.1,14.8 81.4,3.9 79.1,3.9 86.1,15.3 		"/>
						<linearGradient id="bshrq_24_" gradientUnits="userSpaceOnUse" x1="48.6914" y1="2" x2="48.6914" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_487_" class="bshrq-st24" points="46.4,117.5 48.4,117.5 48.4,15.2 51,3.9 48.9,3.9 46.4,15 		"/>
						<linearGradient id="bshrq_25_" gradientUnits="userSpaceOnUse" x1="38.8778" y1="2" x2="38.8778" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_488_" class="bshrq-st25" points="34.3,117.5 36.3,117.5 36.3,15.3 43.4,3.9 41.1,3.9 34.3,14.8 		"/>
						<linearGradient id="bshrq_26_" gradientUnits="userSpaceOnUse" x1="42.0764" y1="2" x2="42.0764" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_489_" class="bshrq-st26" points="38.3,117.5 40.3,117.5 40.3,15.3 45.8,3.9 43.6,3.9 38.3,14.8 		"/>
						<linearGradient id="bshrq_27_" gradientUnits="userSpaceOnUse" x1="35.6183" y1="2" x2="35.6183" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_490_" class="bshrq-st27" points="30.3,117.5 32.3,117.5 32.3,15.4 40.9,3.9 38.4,3.9 30.3,14.7 		"/>
						<linearGradient id="bshrq_28_" gradientUnits="userSpaceOnUse" x1="45.4125" y1="2" x2="45.4125" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_491_" class="bshrq-st28" points="42.3,117.5 44.3,117.5 44.3,15.2 48.5,3.9 46.4,3.9 42.3,14.9 		"/>
						<linearGradient id="bshrq_29_" gradientUnits="userSpaceOnUse" x1="32.2089" y1="2" x2="32.2089" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_492_" class="bshrq-st29" points="26.3,117.5 28.3,117.5 28.3,15.4 38.1,3.9 35.5,3.9 26.3,14.7 		"/>
						<linearGradient id="bshrq_30_" gradientUnits="userSpaceOnUse" x1="25.1061" y1="2" x2="25.1061" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_493_" class="bshrq-st30" points="20.1,117.5 20.1,15.5 32.1,3.9 29.3,3.9 18.1,14.6 18.1,117.5 		"/>
						<linearGradient id="bshrq_31_" gradientUnits="userSpaceOnUse" x1="28.7462" y1="2" x2="28.7462" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_494_" class="bshrq-st31" points="22.3,117.5 24.3,117.5 24.3,15.5 35.1,3.9 32.4,3.9 22.3,14.7 		"/>
						<linearGradient id="bshrq_32_" gradientUnits="userSpaceOnUse" x1="52.0346" y1="2" x2="52.0346" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_497_" class="bshrq-st32" points="50.4,117.5 52.4,117.5 52.4,15.1 53.7,3.9 51.7,3.9 50.4,15 		"/>
						<linearGradient id="bshrq_33_" gradientUnits="userSpaceOnUse" x1="55.4739" y1="2" x2="55.4739" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_500_" class="bshrq-st33" points="56.3,117.5 56.3,15.1 56.7,3.9 54.7,3.9 54.3,15.1 54.3,117.5 		"/>
						<linearGradient id="bshrq_34_" gradientUnits="userSpaceOnUse" x1="59.2236" y1="2" x2="59.2236" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<rect id="bshrq_501_" x="58.2" y="3.9" class="bshrq-st34" width="2" height="113.6"/>
					</g>
				</g>
				
				
				<g class="f1">
					<animate values="show;hide;" dur="0.5s" attributeName="class" repeatCount="indefinite"/>
					<g class="bshrq-st55">
					<linearGradient id="bshrq_35_" gradientUnits="userSpaceOnUse" x1="-21.5091" y1="62.2897" x2="55.1567" y2="69.0926">
						<stop  offset="0.3" style="stop-color:#156CFF;stop-opacity:0"/>
						<stop  offset="0.5" style="stop-color:#156CFF"/>
						<stop  offset="0.7" style="stop-color:#156CFF;stop-opacity:0"/>
					</linearGradient>
					<path id="bshrq_486_" class="bshrq-st35" d="M24.4,18.6c-2.4,0-4.7,0.2-7,0.5v22.8c2.2-0.6,4.6-1,7-1c14.1,0,25.5,11.4,25.5,25.5
						c0,14.1-11.4,25.5-25.5,25.5c-2.4,0-4.8-0.4-7-1v22.8c2.3,0.3,4.6,0.5,7,0.5c26.4,0,47.8-21.4,47.8-47.8S50.8,18.6,24.4,18.6z"/>
					<linearGradient id="bshrq_36_" gradientUnits="userSpaceOnUse" x1="58.8058" y1="66.6331" x2="138.8871" y2="66.0902">
						<stop  offset="0.3" style="stop-color:#FF2A2A;stop-opacity:0"/>
						<stop  offset="0.5" style="stop-color:#FF2A2A"/>
						<stop  offset="0.7" style="stop-color:#FF2A2A;stop-opacity:0"/>
					</linearGradient>
					<path id="bshrq_471_" class="bshrq-st36" d="M97.9,18.6c2.4,0,4.7,0.2,7,0.5v22.8c-2.2-0.6-4.6-1-7-1c-14.1,0-25.5,11.4-25.5,25.5
						c0,14.1,11.4,25.5,25.5,25.5c2.4,0,4.8-0.4,7-1v22.8c-2.3,0.3-4.6,0.5-7,0.5c-26.4,0-47.8-21.4-47.8-47.8S71.5,18.6,97.9,18.6z"/>
					<linearGradient id="bshrq_37_" gradientUnits="userSpaceOnUse" x1="-6.3042" y1="53.8734" x2="65.4968" y2="81.5958">
						<stop  offset="0.3" style="stop-color:#156CFF;stop-opacity:0"/>
						<stop  offset="0.5" style="stop-color:#156CFF"/>
						<stop  offset="0.7" style="stop-color:#156CFF;stop-opacity:0"/>
					</linearGradient>
					<path id="bshrq_482_" class="bshrq-st37" d="M24.4,18.6c-2.4,0-4.7,0.2-7,0.5v22.8c2.2-0.6,4.6-1,7-1c14.1,0,25.5,11.4,25.5,25.5
						c0,14.1-11.4,25.5-25.5,25.5c-2.4,0-4.8-0.4-7-1v22.8c2.3,0.3,4.6,0.5,7,0.5c26.4,0,47.8-21.4,47.8-47.8S50.8,18.6,24.4,18.6z"/>
					<linearGradient id="bshrq_38_" gradientUnits="userSpaceOnUse" x1="57.8879" y1="85.7709" x2="128.8867" y2="48.7242">
						<stop  offset="0.3" style="stop-color:#FF2A2A;stop-opacity:0"/>
						<stop  offset="0.5" style="stop-color:#FF2A2A"/>
						<stop  offset="0.7" style="stop-color:#FF2A2A;stop-opacity:0"/>
					</linearGradient>
					<path id="bshrq_480_" class="bshrq-st38" d="M97.9,18.6c2.4,0,4.7,0.2,7,0.5v22.8c-2.2-0.6-4.6-1-7-1c-14.1,0-25.5,11.4-25.5,25.5
						c0,14.1,11.4,25.5,25.5,25.5c2.4,0,4.8-0.4,7-1v22.8c-2.3,0.3-4.6,0.5-7,0.5c-26.4,0-47.8-21.4-47.8-47.8S71.5,18.6,97.9,18.6z"/>
					<linearGradient id="bshrq_39_" gradientUnits="userSpaceOnUse" x1="20.8446" y1="26.577" x2="49.924" y2="97.8393">
						<stop  offset="0.3" style="stop-color:#156CFF;stop-opacity:0"/>
						<stop  offset="0.5" style="stop-color:#156CFF"/>
						<stop  offset="0.7" style="stop-color:#156CFF;stop-opacity:0"/>
					</linearGradient>
					<path id="bshrq_495_" class="bshrq-st39" d="M24.4,18.6c-2.4,0-4.7,0.2-7,0.5v22.8c2.2-0.6,4.6-1,7-1c14.1,0,25.5,11.4,25.5,25.5
						c0,14.1-11.4,25.5-25.5,25.5c-2.4,0-4.8-0.4-7-1v22.8c2.3,0.3,4.6,0.5,7,0.5c26.4,0,47.8-21.4,47.8-47.8S50.8,18.6,24.4,18.6z"/>
					<linearGradient id="bshrq_40_" gradientUnits="userSpaceOnUse" x1="72.72" y1="100.6962" x2="97.9076" y2="24.6772">
						<stop  offset="0.3" style="stop-color:#FF2A2A;stop-opacity:0"/>
						<stop  offset="0.5" style="stop-color:#FF2A2A"/>
						<stop  offset="0.7" style="stop-color:#FF2A2A;stop-opacity:0"/>
					</linearGradient>
					<path id="bshrq_483_" class="bshrq-st40" d="M97.9,18.6c2.4,0,4.7,0.2,7,0.5v22.8c-2.2-0.6-4.6-1-7-1c-14.1,0-25.5,11.4-25.5,25.5
						c0,14.1,11.4,25.5,25.5,25.5c2.4,0,4.8-0.4,7-1v22.8c-2.3,0.3-4.6,0.5-7,0.5c-26.4,0-47.8-21.4-47.8-47.8S71.5,18.6,97.9,18.6z"/>
					<linearGradient id="bshrq_41_" gradientUnits="userSpaceOnUse" x1="52.1128" y1="36.3489" x2="13.8517" y2="103.1321">
						<stop  offset="0.3" style="stop-color:#156CFF;stop-opacity:0"/>
						<stop  offset="0.5" style="stop-color:#156CFF"/>
						<stop  offset="0.7" style="stop-color:#156CFF;stop-opacity:0"/>
					</linearGradient>
					<path id="bshrq_498_" class="bshrq-st41" d="M24.4,18.6c-2.4,0-4.7,0.2-7,0.5v22.8c2.2-0.6,4.6-1,7-1c14.1,0,25.5,11.4,25.5,25.5
						c0,14.1-11.4,25.5-25.5,25.5c-2.4,0-4.8-0.4-7-1v22.8c2.3,0.3,4.6,0.5,7,0.5c26.4,0,47.8-21.4,47.8-47.8S50.8,18.6,24.4,18.6z"/>
					<linearGradient id="bshrq_42_" gradientUnits="userSpaceOnUse" x1="106.0725" y1="102.624" x2="68.6413" y2="31.8271">
						<stop  offset="0.3" style="stop-color:#FF2A2A;stop-opacity:0"/>
						<stop  offset="0.5" style="stop-color:#FF2A2A"/>
						<stop  offset="0.7" style="stop-color:#FF2A2A;stop-opacity:0"/>
					</linearGradient>
					<path id="bshrq_496_" class="bshrq-st42" d="M97.9,18.6c2.4,0,4.7,0.2,7,0.5v22.8c-2.2-0.6-4.6-1-7-1c-14.1,0-25.5,11.4-25.5,25.5
						c0,14.1,11.4,25.5,25.5,25.5c2.4,0,4.8-0.4,7-1v22.8c-2.3,0.3-4.6,0.5-7,0.5c-26.4,0-47.8-21.4-47.8-47.8S71.5,18.6,97.9,18.6z"/>
					<linearGradient id="bshrq_43_" gradientUnits="userSpaceOnUse" x1="53.3139" y1="50.287" x2="-11.3891" y2="91.9696">
						<stop  offset="0.3" style="stop-color:#156CFF;stop-opacity:0"/>
						<stop  offset="0.5" style="stop-color:#156CFF"/>
						<stop  offset="0.7" style="stop-color:#156CFF;stop-opacity:0"/>
					</linearGradient>
					<path id="bshrq_502_" class="bshrq-st43" d="M24.4,18.6c-2.4,0-4.7,0.2-7,0.5v22.8c2.2-0.6,4.6-1,7-1c14.1,0,25.5,11.4,25.5,25.5
						c0,14.1-11.4,25.5-25.5,25.5c-2.4,0-4.8-0.4-7-1v22.8c2.3,0.3,4.6,0.5,7,0.5c26.4,0,47.8-21.4,47.8-47.8S50.8,18.6,24.4,18.6z"/>
					<linearGradient id="bshrq_44_" gradientUnits="userSpaceOnUse" x1="131.9674" y1="88.8157" x2="63.2237" y2="47.7353">
						<stop  offset="0.3" style="stop-color:#FF2A2A;stop-opacity:0"/>
						<stop  offset="0.5" style="stop-color:#FF2A2A"/>
						<stop  offset="0.7" style="stop-color:#FF2A2A;stop-opacity:0"/>
					</linearGradient>
					<path id="bshrq_499_" class="bshrq-st44" d="M97.9,18.6c2.4,0,4.7,0.2,7,0.5v22.8c-2.2-0.6-4.6-1-7-1c-14.1,0-25.5,11.4-25.5,25.5
						c0,14.1,11.4,25.5,25.5,25.5c2.4,0,4.8-0.4,7-1v22.8c-2.3,0.3-4.6,0.5-7,0.5c-26.4,0-47.8-21.4-47.8-47.8S71.5,18.6,97.9,18.6z"/>
						</g>
				</g>
				
				
				<g class="f2">
					<animate values="hide;show;" dur="0.5s" attributeName="class" repeatCount="indefinite"/>
					<g class="bshrq-st55">
					<linearGradient id="bshrq_45_" gradientUnits="userSpaceOnUse" x1="-15.5632" y1="54.2998" x2="58.2478" y2="76.1137">
						<stop  offset="0.3" style="stop-color:#156CFF;stop-opacity:0"/>
						<stop  offset="0.5" style="stop-color:#156CFF"/>
						<stop  offset="0.7" style="stop-color:#156CFF;stop-opacity:0"/>
					</linearGradient>
					<path id="bshrq_519_" class="bshrq-st45" d="M24.4,18.6c-2.4,0-4.7,0.2-7,0.5v22.8c2.2-0.6,4.6-1,7-1c14.1,0,25.5,11.4,25.5,25.5
						c0,14.1-11.4,25.5-25.5,25.5c-2.4,0-4.8-0.4-7-1v22.8c2.3,0.3,4.6,0.5,7,0.5c26.4,0,47.8-21.4,47.8-47.8S50.8,18.6,24.4,18.6z"/>
					<linearGradient id="bshrq_46_" gradientUnits="userSpaceOnUse" x1="60.8795" y1="76.8896" x2="137.7878" y2="54.5642">
						<stop  offset="0.3" style="stop-color:#FF2A2A;stop-opacity:0"/>
						<stop  offset="0.5" style="stop-color:#FF2A2A"/>
						<stop  offset="0.7" style="stop-color:#FF2A2A;stop-opacity:0"/>
					</linearGradient>
					<path id="bshrq_520_" class="bshrq-st46" d="M97.9,18.6c2.4,0,4.7,0.2,7,0.5v22.8c-2.2-0.6-4.6-1-7-1c-14.1,0-25.5,11.4-25.5,25.5
						c0,14.1,11.4,25.5,25.5,25.5c2.4,0,4.8-0.4,7-1v22.8c-2.3,0.3-4.6,0.5-7,0.5c-26.4,0-47.8-21.4-47.8-47.8S71.5,18.6,97.9,18.6z"/>
					<linearGradient id="bshrq_47_" gradientUnits="userSpaceOnUse" x1="0.2904" y1="47.8453" x2="64.6032" y2="90.1274">
						<stop  offset="0.3" style="stop-color:#156CFF;stop-opacity:0"/>
						<stop  offset="0.5" style="stop-color:#156CFF"/>
						<stop  offset="0.7" style="stop-color:#156CFF;stop-opacity:0"/>
					</linearGradient>
					<path id="bshrq_522_" class="bshrq-st47" d="M24.4,18.6c-2.4,0-4.7,0.2-7,0.5v22.8c2.2-0.6,4.6-1,7-1c14.1,0,25.5,11.4,25.5,25.5
						c0,14.1-11.4,25.5-25.5,25.5c-2.4,0-4.8-0.4-7-1v22.8c2.3,0.3,4.6,0.5,7,0.5c26.4,0,47.8-21.4,47.8-47.8S50.8,18.6,24.4,18.6z"/>
					<linearGradient id="bshrq_48_" gradientUnits="userSpaceOnUse" x1="65.1177" y1="94.1985" x2="119.3303" y2="35.2553">
						<stop  offset="0.3" style="stop-color:#FF2A2A;stop-opacity:0"/>
						<stop  offset="0.5" style="stop-color:#FF2A2A"/>
						<stop  offset="0.7" style="stop-color:#FF2A2A;stop-opacity:0"/>
					</linearGradient>
					<path id="bshrq_521_" class="bshrq-st48" d="M97.9,18.6c2.4,0,4.7,0.2,7,0.5v22.8c-2.2-0.6-4.6-1-7-1c-14.1,0-25.5,11.4-25.5,25.5
						c0,14.1,11.4,25.5,25.5,25.5c2.4,0,4.8-0.4,7-1v22.8c-2.3,0.3-4.6,0.5-7,0.5c-26.4,0-47.8-21.4-47.8-47.8S71.5,18.6,97.9,18.6z"/>
					<linearGradient id="bshrq_49_" gradientUnits="userSpaceOnUse" x1="44.9073" y1="28.0584" x2="44.378" y2="105.0235">
						<stop  offset="0.3" style="stop-color:#156CFF;stop-opacity:0"/>
						<stop  offset="0.5" style="stop-color:#156CFF"/>
						<stop  offset="0.7" style="stop-color:#156CFF;stop-opacity:0"/>
					</linearGradient>
					<path id="bshrq_524_" class="bshrq-st49" d="M24.4,18.6c-2.4,0-4.7,0.2-7,0.5v22.8c2.2-0.6,4.6-1,7-1c14.1,0,25.5,11.4,25.5,25.5
						c0,14.1-11.4,25.5-25.5,25.5c-2.4,0-4.8-0.4-7-1v22.8c2.3,0.3,4.6,0.5,7,0.5c26.4,0,47.8-21.4,47.8-47.8S50.8,18.6,24.4,18.6z"/>
					<linearGradient id="bshrq_50_" gradientUnits="userSpaceOnUse" x1="77.4602" y1="106.5486" x2="77.8834" y2="26.4666">
						<stop  offset="0.3" style="stop-color:#FF2A2A;stop-opacity:0"/>
						<stop  offset="0.5" style="stop-color:#FF2A2A"/>
						<stop  offset="0.7" style="stop-color:#FF2A2A;stop-opacity:0"/>
					</linearGradient>
					<path id="bshrq_523_" class="bshrq-st50" d="M97.9,18.6c2.4,0,4.7,0.2,7,0.5v22.8c-2.2-0.6-4.6-1-7-1c-14.1,0-25.5,11.4-25.5,25.5
						c0,14.1,11.4,25.5,25.5,25.5c2.4,0,4.8-0.4,7-1v22.8c-2.3,0.3-4.6,0.5-7,0.5c-26.4,0-47.8-21.4-47.8-47.8S71.5,18.6,97.9,18.6z"/>
					<linearGradient id="bshrq_51_" gradientUnits="userSpaceOnUse" x1="50.6393" y1="44.764" x2="0.5599" y2="103.2103">
						<stop  offset="0.3" style="stop-color:#156CFF;stop-opacity:0"/>
						<stop  offset="0.5" style="stop-color:#156CFF"/>
						<stop  offset="0.7" style="stop-color:#156CFF;stop-opacity:0"/>
					</linearGradient>
					<path id="bshrq_526_" class="bshrq-st51" d="M24.4,18.6c-2.4,0-4.7,0.2-7,0.5v22.8c2.2-0.6,4.6-1,7-1c14.1,0,25.5,11.4,25.5,25.5
						c0,14.1-11.4,25.5-25.5,25.5c-2.4,0-4.8-0.4-7-1v22.8c2.3,0.3,4.6,0.5,7,0.5c26.4,0,47.8-21.4,47.8-47.8S50.8,18.6,24.4,18.6z"/>
					<linearGradient id="bshrq_52_" gradientUnits="userSpaceOnUse" x1="120.9868" y1="98.2698" x2="66.0304" y2="40.0195">
						<stop  offset="0.3" style="stop-color:#FF2A2A;stop-opacity:0"/>
						<stop  offset="0.5" style="stop-color:#FF2A2A"/>
						<stop  offset="0.7" style="stop-color:#FF2A2A;stop-opacity:0"/>
					</linearGradient>
					<path id="bshrq_525_" class="bshrq-st52" d="M97.9,18.6c2.4,0,4.7,0.2,7,0.5v22.8c-2.2-0.6-4.6-1-7-1c-14.1,0-25.5,11.4-25.5,25.5
						c0,14.1,11.4,25.5,25.5,25.5c2.4,0,4.8-0.4,7-1v22.8c-2.3,0.3-4.6,0.5-7,0.5c-26.4,0-47.8-21.4-47.8-47.8S71.5,18.6,97.9,18.6z"/>
					<linearGradient id="bshrq_53_" gradientUnits="userSpaceOnUse" x1="53.8862" y1="56.8773" x2="-19.0802" y2="81.3684">
						<stop  offset="0.3" style="stop-color:#156CFF;stop-opacity:0"/>
						<stop  offset="0.5" style="stop-color:#156CFF"/>
						<stop  offset="0.7" style="stop-color:#156CFF;stop-opacity:0"/>
					</linearGradient>
					<path id="bshrq_530_" class="bshrq-st53" d="M24.4,18.6c-2.4,0-4.7,0.2-7,0.5v22.8c2.2-0.6,4.6-1,7-1c14.1,0,25.5,11.4,25.5,25.5
						c0,14.1-11.4,25.5-25.5,25.5c-2.4,0-4.8-0.4-7-1v22.8c2.3,0.3,4.6,0.5,7,0.5c26.4,0,47.8-21.4,47.8-47.8S50.8,18.6,24.4,18.6z"/>
					<linearGradient id="bshrq_54_" gradientUnits="userSpaceOnUse" x1="139.0545" y1="81.4936" x2="63.6094" y2="54.6361">
						<stop  offset="0.3" style="stop-color:#FF2A2A;stop-opacity:0"/>
						<stop  offset="0.5" style="stop-color:#FF2A2A"/>
						<stop  offset="0.7" style="stop-color:#FF2A2A;stop-opacity:0"/>
					</linearGradient>
					<path id="bshrq_527_" class="bshrq-st54" d="M97.9,18.6c2.4,0,4.7,0.2,7,0.5v22.8c-2.2-0.6-4.6-1-7-1c-14.1,0-25.5,11.4-25.5,25.5
						c0,14.1,11.4,25.5,25.5,25.5c2.4,0,4.8-0.4,7-1v22.8c-2.3,0.3-4.6,0.5-7,0.5c-26.4,0-47.8-21.4-47.8-47.8S71.5,18.6,97.9,18.6z"/>
						</g>
				</g>
				</svg>`;
	}
	
	close() {
		return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 123 123" style="enable-background:new 0 0 123 123;" xml:space="preserve">
				<style type="text/css">
					.bshrq-st0{fill:url(#bshrq_2_);}
					.bshrq-st1{fill:#064289;}
					.bshrq-st2{fill:url(#bshrq_3_);}
					.bshrq-st3{fill:url(#bshrq_4_);}
					.bshrq-st4{fill:url(#bshrq_5_);}
					.bshrq-st5{fill:url(#bshrq_6_);}
					.bshrq-st6{fill:url(#bshrq_7_);}
					.bshrq-st7{fill:url(#bshrq_8_);}
					.bshrq-st8{fill:url(#bshrq_9_);}
					.bshrq-st9{fill:url(#bshrq_10_);}
					.bshrq-st10{fill:#11283D;}
					.bshrq-st11{fill:url(#bshrq_11_);}
					.bshrq-st12{fill:url(#bshrq_12_);}
					.bshrq-st13{fill:url(#bshrq_13_);}
					.bshrq-st14{fill:url(#bshrq_14_);}
					.bshrq-st15{fill:url(#bshrq_15_);}
					.bshrq-st16{fill:url(#bshrq_16_);}
					.bshrq-st17{fill:url(#bshrq_17_);}
					.bshrq-st18{fill:url(#bshrq_18_);}
					.bshrq-st19{fill:url(#bshrq_19_);}
					.bshrq-st20{fill:url(#bshrq_20_);}
					.bshrq-st21{fill:url(#bshrq_21_);}
					.bshrq-st22{fill:url(#bshrq_22_);}
					.bshrq-st23{fill:url(#bshrq_23_);}
					.bshrq-st24{fill:url(#bshrq_24_);}
					.bshrq-st25{fill:url(#bshrq_25_);}
					.bshrq-st26{fill:url(#bshrq_26_);}
					.bshrq-st27{fill:url(#bshrq_27_);}
					.bshrq-st28{fill:url(#bshrq_28_);}
					.bshrq-st29{fill:url(#bshrq_29_);}
					.bshrq-st30{fill:url(#bshrq_30_);}
					.bshrq-st31{fill:url(#bshrq_31_);}
					.bshrq-st32{fill:url(#bshrq_32_);}
					.bshrq-st33{fill:url(#bshrq_33_);}
					.bshrq-st34{fill:url(#bshrq_34_);}
					.bshrq-st35{fill:url(#bshrq_35_);}
					.bshrq-st36{fill:url(#bshrq_36_);}
					.bshrq-st37{fill:url(#bshrq_37_);}
					.bshrq-st38{fill:url(#bshrq_38_);}
					.bshrq-st39{fill:url(#bshrq_39_);}
					.bshrq-st40{fill:url(#bshrq_40_);}
					.bshrq-st41{fill:url(#bshrq_41_);}
					.bshrq-st42{fill:url(#bshrq_42_);}
					.bshrq-st43{fill:url(#bshrq_43_);}
					.bshrq-st44{fill:url(#bshrq_44_);}
					.bshrq-st45{fill:url(#bshrq_45_);}
					.bshrq-st46{fill:url(#bshrq_46_);}
					.bshrq-st47{fill:url(#bshrq_47_);}
					.bshrq-st48{fill:url(#bshrq_48_);}
					.bshrq-st49{fill:url(#bshrq_49_);}
					.bshrq-st50{fill:url(#bshrq_50_);}
					.bshrq-st51{fill:url(#bshrq_51_);}
					.bshrq-st52{fill:url(#bshrq_52_);}
					.bshrq-st53{fill:url(#bshrq_53_);}
					.bshrq-st54{fill:url(#bshrq_54_);}
					.bshrq-st55{opacity:0.7;}
					
					.show {display:default;}
				  .hide {display:none;}
				  .f1 {display:default;}
				  .f2 {display:none;}
				</style>
				<g id="bshrq_533_">
					<g id="bshrq_506_">
						<linearGradient id="bshrq_2_" gradientUnits="userSpaceOnUse" x1="3.6152" y1="20.1208" x2="3.6152" y2="47.5475">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.5027" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<path id="bshrq_505_" class="bshrq-st0" d="M6.9,19.7H3.2c-1.6,0-2.9,6.1-2.9,13.6S1.6,47,3.2,47h3.8V19.7z"/>
						<ellipse id="bshrq_504_" class="bshrq-st1" cx="6.9" cy="33.4" rx="2.9" ry="13.6"/>
						<linearGradient id="bshrq_3_" gradientUnits="userSpaceOnUse" x1="9.2593" y1="25.1973" x2="9.2593" y2="40.6761">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.3957" style="stop-color:#17A1E5"/>
							<stop  offset="0.9412" style="stop-color:#0D2257"/>
						</linearGradient>
						<path id="bshrq_503_" class="bshrq-st2" d="M12.8,25.2H7.3c-0.7,0-1.6,3.5-1.6,7.9s0.9,7.9,1.6,7.9h5.5V25.2z"/>
					</g>
					<g id="bshrq_507_">
						<linearGradient id="bshrq_4_" gradientUnits="userSpaceOnUse" x1="3.6152" y1="83.1208" x2="3.6152" y2="110.5475">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.5027" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<path id="bshrq_510_" class="bshrq-st3" d="M6.9,82.7H3.2c-1.6,0-2.9,6.1-2.9,13.6S1.6,110,3.2,110h3.8V82.7z"/>
						<ellipse id="bshrq_509_" class="bshrq-st1" cx="6.9" cy="96.4" rx="2.9" ry="13.6"/>
						<linearGradient id="bshrq_5_" gradientUnits="userSpaceOnUse" x1="9.2593" y1="88.1973" x2="9.2593" y2="103.6761">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.3957" style="stop-color:#17A1E5"/>
							<stop  offset="0.9412" style="stop-color:#0D2257"/>
						</linearGradient>
						<path id="bshrq_508_" class="bshrq-st4" d="M12.8,88.2H7.3c-0.7,0-1.6,3.5-1.6,7.9s0.9,7.9,1.6,7.9h5.5V88.2z"/>
					</g>
					<g id="bshrq_515_">
						
							<linearGradient id="bshrq_6_" gradientUnits="userSpaceOnUse" x1="-568.8239" y1="20.1208" x2="-568.8239" y2="47.5475" gradientTransform="matrix(-1 0 0 1 -448.8861 0)">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.5027" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<path id="bshrq_518_" class="bshrq-st5" d="M116.6,19.7h3.8c1.6,0,2.9,6.1,2.9,13.6S122,47,120.4,47h-3.8V19.7z"/>
						<ellipse id="bshrq_517_" class="bshrq-st1" cx="116.6" cy="33.4" rx="2.9" ry="13.6"/>
						
							<linearGradient id="bshrq_7_" gradientUnits="userSpaceOnUse" x1="-563.1798" y1="25.1973" x2="-563.1798" y2="40.6761" gradientTransform="matrix(-1 0 0 1 -448.8861 0)">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.3957" style="stop-color:#17A1E5"/>
							<stop  offset="0.9412" style="stop-color:#0D2257"/>
						</linearGradient>
						<path id="bshrq_516_" class="bshrq-st6" d="M110.7,25.2h5.5c0.7,0,1.6,3.5,1.6,7.9s-0.9,7.9-1.6,7.9h-5.5V25.2z"/>
					</g>
					<g id="bshrq_511_">
						
							<linearGradient id="bshrq_8_" gradientUnits="userSpaceOnUse" x1="-568.8239" y1="83.1208" x2="-568.8239" y2="110.5475" gradientTransform="matrix(-1 0 0 1 -448.8861 0)">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.5027" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<path id="bshrq_514_" class="bshrq-st7" d="M116.6,82.7h3.8c1.6,0,2.9,6.1,2.9,13.6S122,110,120.4,110h-3.8V82.7z"/>
						<ellipse id="bshrq_513_" class="bshrq-st1" cx="116.6" cy="96.4" rx="2.9" ry="13.6"/>
						
							<linearGradient id="bshrq_9_" gradientUnits="userSpaceOnUse" x1="-563.1798" y1="88.1973" x2="-563.1798" y2="103.6761" gradientTransform="matrix(-1 0 0 1 -448.8861 0)">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.3957" style="stop-color:#17A1E5"/>
							<stop  offset="0.9412" style="stop-color:#0D2257"/>
						</linearGradient>
						<path id="bshrq_512_" class="bshrq-st8" d="M110.7,88.2h5.5c0.7,0,1.6,3.5,1.6,7.9s-0.9,7.9-1.6,7.9h-5.5V88.2z"/>
					</g>
					<linearGradient id="bshrq_10_" gradientUnits="userSpaceOnUse" x1="20.1145" y1="-0.1801" x2="20.1145" y2="121.3003">
						<stop  offset="6.403941e-002" style="stop-color:#0077BF"/>
						<stop  offset="0.1232" style="stop-color:#00417F"/>
					</linearGradient>
					<path id="bshrq_468_" class="bshrq-st9" d="M24.7,1.1L24.7,1.1c-0.3,0-0.5,0.1-0.7,0.3L12.4,11c-1,0.9-1.6,2.1-1.6,3.5v106.2
						c0,1.1,0.9,1.7,1.8,1.7v0h4.5L29.4,1.2L24.7,1.1z"/>
					<path id="bshrq_465_" class="bshrq-st10" d="M29.5,108.4l-10.9,13.4c-1,1.3-3.1,0.5-3.1-1.1V14.5c0-1.3,0.6-2.6,1.6-3.5l11.5-9.6
						c0.8-0.7,2.1-0.1,2.1,1V105C30.7,106.3,30.3,107.5,29.5,108.4z"/>
					
						<linearGradient id="bshrq_11_" gradientUnits="userSpaceOnUse" x1="-612.9048" y1="-0.1801" x2="-612.9048" y2="121.3003" gradientTransform="matrix(-1 0 0 1 -510.4663 0)">
						<stop  offset="6.403941e-002" style="stop-color:#0077BF"/>
						<stop  offset="0.1232" style="stop-color:#00417F"/>
					</linearGradient>
					<path id="bshrq_529_" class="bshrq-st11" d="M97.9,1.1L97.9,1.1c0.3,0,0.5,0.1,0.7,0.3l11.5,9.6c1,0.9,1.6,2.1,1.6,3.5v106.2
						c0,1.1-0.9,1.7-1.8,1.7v0h-4.5L93.1,1.2L97.9,1.1z"/>
					<path id="bshrq_528_" class="bshrq-st10" d="M93,108.4l10.9,13.4c1,1.3,3.1,0.5,3.1-1.1V14.5c0-1.3-0.6-2.6-1.6-3.5L94,1.5
						c-0.8-0.7-2.1-0.1-2.1,1V105C91.8,106.3,92.3,107.5,93,108.4z"/>
					<linearGradient id="bshrq_12_" gradientUnits="userSpaceOnUse" x1="61.1769" y1="5.3357" x2="61.1769" y2="115.4725">
						<stop  offset="0.1034" style="stop-color:#7D7D7D"/>
						<stop  offset="0.1379" style="stop-color:#3B3B3B"/>
					</linearGradient>
					<polygon id="bshrq_467_" class="bshrq-st12" points="29,5.3 19.1,15.6 19.1,115.5 103.2,115.5 103.2,14.6 92.1,5.3 	"/>
					<g id="bshrq_470_">
						<linearGradient id="bshrq_13_" gradientUnits="userSpaceOnUse" x1="70.4422" y1="2" x2="70.4422" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_485_" class="bshrq-st13" points="70.1,117.5 72.1,117.5 72.1,15.1 70.8,3.9 68.8,3.9 70.1,15.1 		"/>
						<linearGradient id="bshrq_14_" gradientUnits="userSpaceOnUse" x1="73.7853" y1="2" x2="73.7853" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_484_" class="bshrq-st14" points="74.1,117.5 76.1,117.5 76.1,15.1 73.5,3.9 71.5,3.9 74.1,15.2 		"/>
						<linearGradient id="bshrq_15_" gradientUnits="userSpaceOnUse" x1="63.2423" y1="2" x2="63.2423" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<rect id="bshrq_481_" x="62.2" y="3.9" class="bshrq-st15" width="2" height="113.6"/>
						<linearGradient id="bshrq_16_" gradientUnits="userSpaceOnUse" x1="67.0027" y1="2" x2="67.0027" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_479_" class="bshrq-st16" points="66.2,117.5 68.2,117.5 68.2,15 67.8,3.9 65.8,3.9 66.2,15.1 		"/>
						<linearGradient id="bshrq_17_" gradientUnits="userSpaceOnUse" x1="77.0639" y1="2" x2="77.0639" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_478_" class="bshrq-st17" points="78.1,117.5 80.1,117.5 80.1,14.9 76.1,3.9 74,3.9 78.1,15.2 		"/>
						<linearGradient id="bshrq_18_" gradientUnits="userSpaceOnUse" x1="93.7304" y1="2" x2="93.7304" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_477_" class="bshrq-st18" points="98.1,117.5 100.1,117.5 100.1,14.7 90.1,3.9 87.3,3.9 98.1,15.5 		"/>
						<linearGradient id="bshrq_19_" gradientUnits="userSpaceOnUse" x1="97.3703" y1="2" x2="97.3703" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_476_" class="bshrq-st19" points="102.4,117.5 104.4,117.5 104.4,14.6 93.2,3.9 90.3,3.9 102.4,15.5 		"/>
						<linearGradient id="bshrq_20_" gradientUnits="userSpaceOnUse" x1="90.2678" y1="2" x2="90.2678" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_475_" class="bshrq-st20" points="94.1,117.5 96.1,117.5 96.1,14.7 87,3.9 84.4,3.9 94.1,15.4 		"/>
						<linearGradient id="bshrq_21_" gradientUnits="userSpaceOnUse" x1="86.8584" y1="2" x2="86.8584" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_474_" class="bshrq-st21" points="90.1,117.5 92.1,117.5 92.1,14.7 84.1,3.9 81.6,3.9 90.1,15.4 		"/>
						<linearGradient id="bshrq_22_" gradientUnits="userSpaceOnUse" x1="80.4" y1="2" x2="80.4" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_473_" class="bshrq-st22" points="82.1,117.5 84.1,117.5 84.1,14.8 78.9,3.9 76.7,3.9 82.1,15.3 		"/>
						<linearGradient id="bshrq_23_" gradientUnits="userSpaceOnUse" x1="83.5988" y1="2" x2="83.5988" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_472_" class="bshrq-st23" points="86.1,117.5 88.1,117.5 88.1,14.8 81.4,3.9 79.1,3.9 86.1,15.3 		"/>
						<linearGradient id="bshrq_24_" gradientUnits="userSpaceOnUse" x1="48.6914" y1="2" x2="48.6914" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_487_" class="bshrq-st24" points="46.4,117.5 48.4,117.5 48.4,15.2 51,3.9 48.9,3.9 46.4,15 		"/>
						<linearGradient id="bshrq_25_" gradientUnits="userSpaceOnUse" x1="38.8778" y1="2" x2="38.8778" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_488_" class="bshrq-st25" points="34.3,117.5 36.3,117.5 36.3,15.3 43.4,3.9 41.1,3.9 34.3,14.8 		"/>
						<linearGradient id="bshrq_26_" gradientUnits="userSpaceOnUse" x1="42.0764" y1="2" x2="42.0764" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_489_" class="bshrq-st26" points="38.3,117.5 40.3,117.5 40.3,15.3 45.8,3.9 43.6,3.9 38.3,14.8 		"/>
						<linearGradient id="bshrq_27_" gradientUnits="userSpaceOnUse" x1="35.6183" y1="2" x2="35.6183" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_490_" class="bshrq-st27" points="30.3,117.5 32.3,117.5 32.3,15.4 40.9,3.9 38.4,3.9 30.3,14.7 		"/>
						<linearGradient id="bshrq_28_" gradientUnits="userSpaceOnUse" x1="45.4125" y1="2" x2="45.4125" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_491_" class="bshrq-st28" points="42.3,117.5 44.3,117.5 44.3,15.2 48.5,3.9 46.4,3.9 42.3,14.9 		"/>
						<linearGradient id="bshrq_29_" gradientUnits="userSpaceOnUse" x1="32.2089" y1="2" x2="32.2089" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_492_" class="bshrq-st29" points="26.3,117.5 28.3,117.5 28.3,15.4 38.1,3.9 35.5,3.9 26.3,14.7 		"/>
						<linearGradient id="bshrq_30_" gradientUnits="userSpaceOnUse" x1="25.1061" y1="2" x2="25.1061" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_493_" class="bshrq-st30" points="20.1,117.5 20.1,15.5 32.1,3.9 29.3,3.9 18.1,14.6 18.1,117.5 		"/>
						<linearGradient id="bshrq_31_" gradientUnits="userSpaceOnUse" x1="28.7462" y1="2" x2="28.7462" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_494_" class="bshrq-st31" points="22.3,117.5 24.3,117.5 24.3,15.5 35.1,3.9 32.4,3.9 22.3,14.7 		"/>
						<linearGradient id="bshrq_32_" gradientUnits="userSpaceOnUse" x1="52.0346" y1="2" x2="52.0346" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_497_" class="bshrq-st32" points="50.4,117.5 52.4,117.5 52.4,15.1 53.7,3.9 51.7,3.9 50.4,15 		"/>
						<linearGradient id="bshrq_33_" gradientUnits="userSpaceOnUse" x1="55.4739" y1="2" x2="55.4739" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<polygon id="bshrq_500_" class="bshrq-st33" points="56.3,117.5 56.3,15.1 56.7,3.9 54.7,3.9 54.3,15.1 54.3,117.5 		"/>
						<linearGradient id="bshrq_34_" gradientUnits="userSpaceOnUse" x1="59.2236" y1="2" x2="59.2236" y2="118.1077">
							<stop  offset="0.1034" style="stop-color:#FFFFFF"/>
							<stop  offset="0.1379" style="stop-color:#C4C4C4"/>
						</linearGradient>
						<rect id="bshrq_501_" x="58.2" y="3.9" class="bshrq-st34" width="2" height="113.6"/>
					</g>
				</g>								
				</g>
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

export default Bshrq;

import Spirit from './../../core/Spirit'

/**
 * 卧式水泵
 */
class Wssb extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.name = "卧式水泵";
	    this.className = "Wssb";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4;
	    this.minWidth = 20;
	    this.minHeight = 20;
	    this.linkage = false;
	    this.isPanel = true;
	    this.isBind = true;
	    this.isLinkPoint = true;
		  this.zIndex = 2;
      this.isAnimation = true;
      this.config = {
        bindData: {deviceId: ''},
        animations: [
          {type: 51, text: '大小->宽度', expr: '', maxWidth: 100, minWidth: 0,site: 2},
          {type: 52, text: '大小->高度', expr: '', maxHeight: 100, minHeight: 0,site: 2},
          {type: 61, text: '位置->水平', expr: '', left: 0, right: 100},
          {type: 62, text: '位置->垂直', expr: '', top: 0, bottom: 100},
          {
            type: 81,
            text: '可见性',
            expr: '',
            value: 1
          }]
      }
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
       <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 138 97" xml:space="preserve" preserveAspectRatio="none">
				<style type="text/css">
					.wssb-st0{fill:url(#wssb_2_);}
					.wssb-st1{fill:url(#wssb_3_);}
					.wssb-st2{fill:#0E89D6;}
					.wssb-st3{fill:url(#wssb_4_);}
					.wssb-st4{fill:#064289;}
					.wssb-st5{fill:url(#wssb_5_);}
					.wssb-st6{fill:url(#wssb_6_);}
					.wssb-st7{fill:#0B1749;}
					.wssb-st8{fill:url(#wssb_7_);}
					.wssb-st9{fill:url(#wssb_8_);}
					.wssb-st10{fill:#1B699E;}
					.wssb-st11{fill:url(#wssb_9_);}
					.wssb-st12{opacity:0.2;}
					.wssb-st13{fill:url(#wssb_10_);}
					.wssb-st14{fill:url(#wssb_11_);}
					.wssb-st15{fill:url(#wssb_12_);}
					.wssb-st16{fill:url(#wssb_13_);}
					.wssb-st17{fill:url(#wssb_14_);}
					.wssb-st18{fill:url(#wssb_15_);}
					.wssb-st19{fill:url(#wssb_16_);}
					.wssb-st20{fill:url(#wssb_17_);}
					.wssb-st21{fill:url(#wssb_18_);}
					.wssb-st22{fill:url(#wssb_19_);}
					.wssb-st23{fill:url(#wssb_20_);}
					.wssb-st24{fill:url(#wssb_21_);}
					.wssb-st25{fill:url(#wssb_22_);}
					.wssb-st26{fill:url(#wssb_23_);}
					.wssb-st27{fill:url(#wssb_24_);}
					.wssb-st28{fill:url(#wssb_25_);}
					.wssb-st29{fill:url(#wssb_26_);}
					.wssb-st30{fill:url(#wssb_27_);}
					.wssb-st31{fill:url(#wssb_28_);}
					.wssb-st32{fill:url(#wssb_29_);}
					.wssb-st33{fill:url(#wssb_30_);}
					.wssb-st34{fill:url(#wssb_31_);}
					.wssb-st35{fill:url(#wssb_32_);}
					.wssb-st36{fill:#389AE1;}
					.wssb-st37{fill:#1573BB;}
					.wssb-st38{fill:#2CA3F7;}
					.wssb-st40{fill:#CCD1E2;}
				
					.open-show {display:default;}
				    .open-hide {display:none;}
				    .open-f1 {display:default;}
				    .open-f2 {display:none;}
				    .open-f3 {display:none;}
					.open-f4 {display:none;}
				</style>
				<g id="wssb_101_">
					<linearGradient id="wssb_2_" gradientUnits="userSpaceOnUse" x1="37.6785" y1="83.882" x2="37.6785" y2="64.1733">
						<stop  offset="0" style="stop-color:#064289"/>
						<stop  offset="1" style="stop-color:#0D2233"/>
					</linearGradient>
					<polygon id="wssb_341_" class="wssb-st0" points="19.2,66.8 7.8,84.9 47.2,92.2 67.6,85.8 67.6,60.7 52,62 49.1,77.9 30,77.9 
						34.5,66.4 	"/>
					<linearGradient id="wssb_3_" gradientUnits="userSpaceOnUse" x1="94.2641" y1="80.4275" x2="94.2641" y2="64.5901">
						<stop  offset="0" style="stop-color:#064289"/>
						<stop  offset="1" style="stop-color:#0D2233"/>
					</linearGradient>
					<polygon id="wssb_340_" class="wssb-st1" points="113.9,61.8 64.1,61.8 64.1,81.1 99.7,87.1 124.5,81.1 	"/>
					<polygon id="wssb_336_" class="wssb-st2" points="64.1,84.9 7.8,84.9 7.8,96.6 124.5,96.6 124.5,81.1 64.1,81.1 	"/>
					<linearGradient id="wssb_4_" gradientUnits="userSpaceOnUse" x1="3.9307" y1="24.16" x2="3.9307" y2="63.7951">
						<stop  offset="0" style="stop-color:#0D3A70"/>
						<stop  offset="0.5027" style="stop-color:#17A1E5"/>
						<stop  offset="1" style="stop-color:#0D3A70"/>
					</linearGradient>
					<path id="wssb_94_" class="wssb-st3" d="M7.9,23.6H4.1C1.9,23.6,0,32.4,0,43.3S1.9,63,4.1,63h3.7V23.6z"/>
					<ellipse id="wssb_95_" class="wssb-st4" cx="7.9" cy="43.3" rx="4.1" ry="19.7"/>
					<linearGradient id="wssb_5_" gradientUnits="userSpaceOnUse" x1="10.3395" y1="33.7754" x2="10.3395" y2="51.821">
						<stop  offset="0" style="stop-color:#0D3A70"/>
						<stop  offset="0.3957" style="stop-color:#17A1E5"/>
						<stop  offset="0.9412" style="stop-color:#0D2257"/>
					</linearGradient>
					<path id="wssb_100_" class="wssb-st5" d="M14.5,33.8H8.1c-0.8,0-1.9,4.1-1.9,9.2s1.1,9.2,1.9,9.2h6.4V33.8z"/>
					<linearGradient id="wssb_6_" gradientUnits="userSpaceOnUse" x1="22.6224" y1="16.8183" x2="22.6224" y2="68.8541">
						<stop  offset="0" style="stop-color:#0D3A70"/>
						<stop  offset="0.5027" style="stop-color:#17A1E5"/>
						<stop  offset="1" style="stop-color:#0D3A70"/>
					</linearGradient>
					<path id="wssb_96_" class="wssb-st6" d="M33.8,16.8H16.5c-2.1,0-5,11.9-5,26.5s3,26.5,5,26.5h17.3V16.8z"/>
					<path id="wssb_98_" class="wssb-st7" d="M33.8,69.8c-2.1,0-3.1-11.9-3.1-26.5s1-26.5,3.1-26.5s3.1,11.9,3.1,26.5S35.9,69.8,33.8,69.8z"/>					
						<linearGradient id="wssb_7_" gradientUnits="userSpaceOnUse" x1="100.5005" y1="-9.8223" x2="100.5005" y2="5.1373" gradientTransform="matrix(4.489659e-011 -1 1 4.489659e-011 26.8768 115.1236)">
						<stop  offset="0" style="stop-color:#0D3A70"/>
						<stop  offset="0.3957" style="stop-color:#17A1E5"/>
						<stop  offset="0.9412" style="stop-color:#0D2257"/>
					</linearGradient>
					<path id="wssb_102_" class="wssb-st8" d="M17.1,10.5v6.4c0,0.8,3.4,1.9,7.6,1.9s7.6-1.1,7.6-1.9v-6.4H17.1z"/>
					<linearGradient id="wssb_8_" gradientUnits="userSpaceOnUse" x1="41.3054" y1="31.7895" x2="41.3054" y2="53.739">
						<stop  offset="0" style="stop-color:#0D2257"/>
						<stop  offset="0.4813" style="stop-color:#0D3A70"/>
						<stop  offset="0.9947" style="stop-color:#000000"/>
					</linearGradient>
					<path id="wssb_103_" class="wssb-st9" d="M49.1,31.8H34.5c-0.4,0-0.9,5-0.9,11.2s0.5,11.2,0.9,11.2h14.6V31.8z"/>
					<polygon id="wssb_104_" class="wssb-st10" points="33.8,22.6 33.8,28.9 48.8,28.9 50.4,16.8 	"/>
					<polygon id="wssb_284_" class="wssb-st10" points="33.8,63.3 33.8,56.9 48.8,56.9 50.4,69 	"/>
					<rect id="wssb_285_" x="32" y="39.7" class="wssb-st10" width="20.3" height="5.7"/>
					<linearGradient id="wssb_9_" gradientUnits="userSpaceOnUse" x1="51.2699" y1="12.08" x2="51.2699" y2="72.985">
						<stop  offset="0" style="stop-color:#0D3A70"/>
						<stop  offset="0.1979" style="stop-color:#17A1E5"/>
						<stop  offset="0.4011" style="stop-color:#6AD6EA"/>
						<stop  offset="0.6524" style="stop-color:#17A1E5"/>
						<stop  offset="1" style="stop-color:#0D3A70"/>
					</linearGradient>
					<path id="wssb_99_" class="wssb-st11" d="M55.8,11.4h-6.1c-1.2,0-3,13.9-3,31.2s1.7,31.2,3,31.2h6.1V11.4z"/>
					<path id="wssb_315_" class="wssb-st12" d="M51.3,42.9c0-13.1,1.1-25.3,1.8-31.5h-0.6c-0.7,6.2-1.7,18.4-1.7,31.5
						c0,11.2,0.8,23.1,1.5,30.8h0.6C52.2,66.1,51.3,54.2,51.3,42.9z"/>
					<linearGradient id="wssb_10_" gradientUnits="userSpaceOnUse" x1="58.9782" y1="19.5278" x2="58.9782" y2="63.0314">
						<stop  offset="0" style="stop-color:#0D3A70"/>
						<stop  offset="0.1979" style="stop-color:#17A1E5"/>
						<stop  offset="0.4011" style="stop-color:#6AD6EA"/>
						<stop  offset="0.6524" style="stop-color:#17A1E5"/>
						<stop  offset="1" style="stop-color:#0D3A70"/>
					</linearGradient>
					<rect id="wssb_310_" x="55.8" y="19.1" class="wssb-st13" width="6.4" height="44.5"/>
					<rect id="wssb_311_" x="55.8" y="19.1" class="wssb-st12" width="0.8" height="44.5"/>					
						<radialGradient id="wssb_11_" cx="129.7145" cy="41.0028" r="7.2839" gradientTransform="matrix(1 0 0 3.3076 0 -94.6181)" gradientUnits="userSpaceOnUse">
						<stop  offset="0.2299" style="stop-color:#94FEFE"/>
						<stop  offset="0.5187" style="stop-color:#17A1E5"/>
						<stop  offset="1" style="stop-color:#0D3A70"/>
					</radialGradient>
					<path id="wssb_335_" class="wssb-st14" d="M123.1,65.8c7.7,0,13.9-11,13.9-24.6s-6.2-24.6-13.9-24.6S115.4,65.8,123.1,65.8z"/>
					
						<linearGradient id="wssb_12_" gradientUnits="userSpaceOnUse" x1="-63.9638" y1="17.1001" x2="-63.9638" y2="65.1866" gradientTransform="matrix(-1 0 0 1 55.5088 0)">
						<stop  offset="0" style="stop-color:#0D3A70"/>
						<stop  offset="0.1979" style="stop-color:#17A1E5"/>
						<stop  offset="0.4011" style="stop-color:#6AD6EA"/>
						<stop  offset="0.6524" style="stop-color:#17A1E5"/>
						<stop  offset="1" style="stop-color:#0D3A70"/>
					</linearGradient>
					<path id="wssb_339_" class="wssb-st15" d="M107.1,16.6h16.1c2.6,0,8.8,11,8.8,24.6s-6.2,24.6-8.8,24.6h-16.1V16.6z"/>
					<ellipse id="wssb_338_" class="wssb-st7" cx="107.1" cy="41.2" rx="6" ry="24.6"/>
					
						<linearGradient id="wssb_13_" gradientUnits="userSpaceOnUse" x1="-30.3359" y1="18.4012" x2="-30.3359" y2="63.8908" gradientTransform="matrix(-1 0 0 1 55.5088 0)">
						<stop  offset="0" style="stop-color:#0D3A70"/>
						<stop  offset="9.478467e-003" style="stop-color:#0E4077"/>
						<stop  offset="6.504513e-002" style="stop-color:#105E98"/>
						<stop  offset="0.1246" style="stop-color:#1376B4"/>
						<stop  offset="0.1884" style="stop-color:#1589CA"/>
						<stop  offset="0.2587" style="stop-color:#1697D9"/>
						<stop  offset="0.3403" style="stop-color:#179FE2"/>
						<stop  offset="0.4599" style="stop-color:#17A1E5"/>
						<stop  offset="0.5856" style="stop-color:#179EE2"/>
						<stop  offset="0.6825" style="stop-color:#1696D8"/>
						<stop  offset="0.7698" style="stop-color:#1487C8"/>
						<stop  offset="0.8515" style="stop-color:#1373B1"/>
						<stop  offset="0.9285" style="stop-color:#105993"/>
						<stop  offset="1" style="stop-color:#0D3A70"/>
					</linearGradient>
					<path id="wssb_334_" class="wssb-st16" d="M60.7,17.9h46.9c1,0,3.3,10.4,3.3,23.3s-2.3,23.3-3.3,23.3H60.7V17.9z"/>
					<g id="wssb_333_">
						<linearGradient id="wssb_14_" gradientUnits="userSpaceOnUse" x1="85.7641" y1="16.3723" x2="85.7641" y2="64.6444">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.1979" style="stop-color:#17A1E5"/>
							<stop  offset="0.4011" style="stop-color:#94FEFE"/>
							<stop  offset="0.6524" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<polygon id="wssb_313_" class="wssb-st17" points="65.2,16.3 105.6,16.3 110,20.2 61.5,20.2 		"/>
						<linearGradient id="wssb_15_" gradientUnits="userSpaceOnUse" x1="85.7641" y1="16.3723" x2="85.7641" y2="64.6444">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.1979" style="stop-color:#17A1E5"/>
							<stop  offset="0.4011" style="stop-color:#94FEFE"/>
							<stop  offset="0.6524" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<polygon id="wssb_312_" class="wssb-st18" points="65.2,19 105.6,19 110,21.8 61.5,21.8 		"/>
						<linearGradient id="wssb_16_" gradientUnits="userSpaceOnUse" x1="85.7641" y1="16.3723" x2="85.7641" y2="64.6444">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.1979" style="stop-color:#17A1E5"/>
							<stop  offset="0.4011" style="stop-color:#94FEFE"/>
							<stop  offset="0.6524" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<polygon id="wssb_314_" class="wssb-st19" points="65.2,21.3 105.6,21.3 110,23.7 61.5,23.7 		"/>
						<linearGradient id="wssb_17_" gradientUnits="userSpaceOnUse" x1="85.7641" y1="16.3723" x2="85.7641" y2="64.6444">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.1979" style="stop-color:#17A1E5"/>
							<stop  offset="0.4011" style="stop-color:#94FEFE"/>
							<stop  offset="0.6524" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<polygon id="wssb_316_" class="wssb-st20" points="64,23.8 106.9,23.8 110,25.7 61.5,25.7 		"/>
						<linearGradient id="wssb_18_" gradientUnits="userSpaceOnUse" x1="85.7641" y1="16.3723" x2="85.7641" y2="64.6444">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.1979" style="stop-color:#17A1E5"/>
							<stop  offset="0.4011" style="stop-color:#94FEFE"/>
							<stop  offset="0.6524" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<polygon id="wssb_317_" class="wssb-st21" points="63.3,26.3 107.5,26.3 110,28.2 61.5,28.2 		"/>
						<linearGradient id="wssb_19_" gradientUnits="userSpaceOnUse" x1="85.7641" y1="16.3723" x2="85.7641" y2="64.6444">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.1979" style="stop-color:#17A1E5"/>
							<stop  offset="0.4011" style="stop-color:#94FEFE"/>
							<stop  offset="0.6524" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<polygon id="wssb_318_" class="wssb-st22" points="62.7,29.2 108.2,29.2 110,31.1 61.5,31.1 		"/>
						<g id="wssb_320_">
							<linearGradient id="wssb_20_" gradientUnits="userSpaceOnUse" x1="85.7641" y1="16.3723" x2="85.7641" y2="64.6444">
								<stop  offset="0" style="stop-color:#0D3A70"/>
								<stop  offset="0.1979" style="stop-color:#17A1E5"/>
								<stop  offset="0.4011" style="stop-color:#94FEFE"/>
								<stop  offset="0.6524" style="stop-color:#17A1E5"/>
								<stop  offset="1" style="stop-color:#0D3A70"/>
							</linearGradient>
							<polygon id="wssb_319_" class="wssb-st23" points="62.4,32.3 108.5,32.3 110,33.9 61.5,33.9 			"/>
						</g>
						<linearGradient id="wssb_21_" gradientUnits="userSpaceOnUse" x1="85.7641" y1="16.3723" x2="85.7641" y2="64.6444">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.1979" style="stop-color:#17A1E5"/>
							<stop  offset="0.4011" style="stop-color:#94FEFE"/>
							<stop  offset="0.6524" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<polygon id="wssb_321_" class="wssb-st24" points="62.1,35.2 108.8,35.2 110,36.8 61.5,36.8 		"/>
						<linearGradient id="wssb_22_" gradientUnits="userSpaceOnUse" x1="85.7641" y1="16.3723" x2="85.7641" y2="64.6444">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.1979" style="stop-color:#17A1E5"/>
							<stop  offset="0.4011" style="stop-color:#94FEFE"/>
							<stop  offset="0.6524" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<polygon id="wssb_322_" class="wssb-st25" points="61.7,38.1 109.1,38.1 110,39.6 61.5,39.6 		"/>
						<linearGradient id="wssb_23_" gradientUnits="userSpaceOnUse" x1="85.7641" y1="16.3723" x2="85.7641" y2="64.6444">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.1979" style="stop-color:#17A1E5"/>
							<stop  offset="0.4011" style="stop-color:#94FEFE"/>
							<stop  offset="0.6524" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<polygon id="wssb_332_" class="wssb-st26" points="65.2,64.4 105.6,64.4 110,60.6 61.5,60.6 		"/>
						<linearGradient id="wssb_24_" gradientUnits="userSpaceOnUse" x1="85.7641" y1="16.3723" x2="85.7641" y2="64.6444">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.1979" style="stop-color:#17A1E5"/>
							<stop  offset="0.4011" style="stop-color:#94FEFE"/>
							<stop  offset="0.6524" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<polygon id="wssb_331_" class="wssb-st27" points="65.2,61.8 105.6,61.8 110,59 61.5,59 		"/>
						<linearGradient id="wssb_25_" gradientUnits="userSpaceOnUse" x1="85.7641" y1="16.3723" x2="85.7641" y2="64.6444">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.1979" style="stop-color:#17A1E5"/>
							<stop  offset="0.4011" style="stop-color:#94FEFE"/>
							<stop  offset="0.6524" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<polygon id="wssb_330_" class="wssb-st28" points="65.2,59.5 105.6,59.5 110,57.1 61.5,57.1 		"/>
						<linearGradient id="wssb_26_" gradientUnits="userSpaceOnUse" x1="85.7641" y1="16.3723" x2="85.7641" y2="64.6444">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.1979" style="stop-color:#17A1E5"/>
							<stop  offset="0.4011" style="stop-color:#94FEFE"/>
							<stop  offset="0.6524" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<polygon id="wssb_329_" class="wssb-st29" points="64,57 106.9,57 110,55.1 61.5,55.1 		"/>
						<linearGradient id="wssb_27_" gradientUnits="userSpaceOnUse" x1="85.7641" y1="16.3723" x2="85.7641" y2="64.6444">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.1979" style="stop-color:#17A1E5"/>
							<stop  offset="0.4011" style="stop-color:#94FEFE"/>
							<stop  offset="0.6524" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<polygon id="wssb_328_" class="wssb-st30" points="63.3,54.5 107.5,54.5 110,52.6 61.5,52.6 		"/>
						<linearGradient id="wssb_28_" gradientUnits="userSpaceOnUse" x1="85.7641" y1="16.3723" x2="85.7641" y2="64.6444">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.1979" style="stop-color:#17A1E5"/>
							<stop  offset="0.4011" style="stop-color:#94FEFE"/>
							<stop  offset="0.6524" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<polygon id="wssb_327_" class="wssb-st31" points="62.7,51.6 108.2,51.6 110,49.7 61.5,49.7 		"/>
						<g id="wssb_325_">
							<linearGradient id="wssb_29_" gradientUnits="userSpaceOnUse" x1="85.7641" y1="16.3723" x2="85.7641" y2="64.6444">
								<stop  offset="0" style="stop-color:#0D3A70"/>
								<stop  offset="0.1979" style="stop-color:#17A1E5"/>
								<stop  offset="0.4011" style="stop-color:#94FEFE"/>
								<stop  offset="0.6524" style="stop-color:#17A1E5"/>
								<stop  offset="1" style="stop-color:#0D3A70"/>
							</linearGradient>
							<polygon id="wssb_326_" class="wssb-st32" points="62.4,48.4 108.5,48.4 110,46.8 61.5,46.8 			"/>
						</g>
						<linearGradient id="wssb_30_" gradientUnits="userSpaceOnUse" x1="85.7641" y1="16.3723" x2="85.7641" y2="64.6444">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.1979" style="stop-color:#17A1E5"/>
							<stop  offset="0.4011" style="stop-color:#94FEFE"/>
							<stop  offset="0.6524" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<polygon id="wssb_324_" class="wssb-st33" points="62.1,45.6 108.8,45.6 110,44 61.5,44 		"/>
						<linearGradient id="wssb_31_" gradientUnits="userSpaceOnUse" x1="85.7641" y1="16.3723" x2="85.7641" y2="64.6444">
							<stop  offset="0" style="stop-color:#0D3A70"/>
							<stop  offset="0.1979" style="stop-color:#17A1E5"/>
							<stop  offset="0.4011" style="stop-color:#94FEFE"/>
							<stop  offset="0.6524" style="stop-color:#17A1E5"/>
							<stop  offset="1" style="stop-color:#0D3A70"/>
						</linearGradient>
						<polygon id="wssb_323_" class="wssb-st34" points="61.7,42.7 109.1,42.7 110,41.1 61.5,41.1 		"/>
					</g>
					<linearGradient id="wssb_32_" gradientUnits="userSpaceOnUse" x1="5.5711" y1="8.0633" x2="44.9901" y2="8.0633">
						<stop  offset="0" style="stop-color:#0D3A70"/>
						<stop  offset="0.5027" style="stop-color:#17A1E5"/>
						<stop  offset="1" style="stop-color:#0D3A70"/>
					</linearGradient>
					<path id="wssb_97_" class="wssb-st35" d="M5.6,4.1v3.7c0,2.3,8.8,4.1,19.7,4.1S45,10.1,45,7.9V4.1H5.6z"/>
					<ellipse id="wssb_93_" class="wssb-st4" cx="25.3" cy="4.1" rx="19.7" ry="4.1"/>
					<polygon id="wssb_346_" class="wssb-st7" points="103.6,64 101.2,60 100.2,63 101,72.2 102.8,74.1 	"/>
					<polygon id="wssb_343_" class="wssb-st7" points="24.1,68.8 28.3,63.4 29.2,66.6 27.4,76.4 25.6,79 	"/>
					<polygon id="wssb_337_" class="wssb-st2" points="19.7,63.4 28.3,63.4 25.6,79 15.8,79 	"/>
					<rect id="wssb_342_" x="70.2" y="60" class="wssb-st2" width="7.8" height="14"/>
					<polygon id="wssb_344_" class="wssb-st2" points="110.6,74.1 102.8,74.1 101.2,60 109,60 	"/>
					<path id="wssb_348_" class="wssb-st36" d="M98.9,67H80.2c-2,0-3.7-1.7-3.7-3.7V42.1c0-2,1.7-3.7,3.7-3.7h18.7c2,0,3.7,1.7,3.7,3.7v21.2
						C102.6,65.4,100.9,67,98.9,67z"/>
					<g id="wssb_353_">
						<circle id="wssb_349_" class="wssb-st4" cx="78.2" cy="40" r="1.1"/>
						<circle id="wssb_350_" class="wssb-st4" cx="101.1" cy="40" r="1.1"/>
						<circle id="wssb_352_" class="wssb-st4" cx="78.2" cy="65.2" r="1.1"/>
						<circle id="wssb_351_" class="wssb-st4" cx="101.1" cy="65.2" r="1.1"/>
					</g>
					<polygon id="wssb_347_" class="wssb-st37" points="81.9,40.4 98.6,40.4 102.2,43.6 102.2,60.8 98.4,65.5 81.8,65.5 77.8,62.6 77.8,44.2"/>
					<polygon id="wssb_345_" class="wssb-st38" points="82.2,43.3 98.3,43.3 101.8,46.1 101.8,60.5 99,63.8 82.2,63.8 79.3,61.5 79.3,45.9"/>
					<path id="wssb_410_" class="wssb-st0" d="M17.2,22.5c0,0-2.1,6.7-2.5,20.1c-0.2,9,2,18.8,2,18.8h11.8c0,0-1.2-9.3-1.2-19.5
						s1.6-19.5,1.6-19.5H17.2z"/>
				</g>				
					<g  class="open-f1">
						<animate values="open-show;open-hide;open-hide;open-hide;" dur="0.5s" attributeName="class" repeatCount="indefinite"/>
						<path id="wssb_418_" class="wssb-st40" d="M18,27.7h10.2c0.1-1,0.2-1.9,0.3-2.7h-10C18.4,25.7,18.2,26.6,18,27.7z"/>
						<path id="wssb_420_" class="wssb-st40" d="M27.4,37.7c0-0.9,0.1-1.8,0.1-2.7H17.1c-0.1,0.9-0.1,1.7-0.2,2.7H27.4z"/>
						<path id="wssb_421_" class="wssb-st40" d="M28.1,57.8c-0.1-0.8-0.2-1.7-0.2-2.7H17.6c0.1,1,0.3,1.9,0.4,2.7H28.1z"/>
						<path id="wssb_422_" class="wssb-st40" d="M27.4,47.7c0-0.9-0.1-1.8-0.1-2.7H16.7c0,0.9,0.1,1.8,0.1,2.7H27.4z"/>
					</g>				
					<g  class="open-f2">
						<animate values="open-hide;open-show;open-hide;open-hide;" dur="0.5s" attributeName="class" repeatCount="indefinite"/>
						<path id="wssb_423_" class="wssb-st40" d="M18.4,25.7h10.1c0.2-1.2,0.3-2.2,0.4-2.7H19C18.9,23.5,18.7,24.4,18.4,25.7z"/>
						<path id="wssb_424_" class="wssb-st40" d="M27.3,43.1H16.7c0,0.9,0,1.8,0,2.7h10.6C27.3,44.9,27.3,44,27.3,43.1z"/>
						<path id="wssb_425_" class="wssb-st40" d="M27.5,35.7c0.1-0.9,0.1-1.8,0.2-2.7H17.3c-0.1,0.8-0.2,1.7-0.3,2.7H27.5z"/>
						<path id="wssb_426_" class="wssb-st40" d="M27.9,55.8c-0.1-0.8-0.1-1.7-0.2-2.7H17.3c0.1,0.9,0.2,1.8,0.4,2.7H27.9z"/>
					</g>		
					<g  class="open-f3">
						<animate values="open-hide;open-hide;open-show;open-hide;" dur="0.5s" attributeName="class" repeatCount="indefinite"/>
						<path id="wssb_427_" class="wssb-st40" d="M28.5,61.5c0,0-0.1-0.5-0.2-1.3h-9.9c0.2,0.8,0.3,1.3,0.3,1.3H28.5z"/>
						<path id="wssb_428_" class="wssb-st40" d="M27.3,42.7c0-0.3,0-0.5,0-0.8c0-0.6,0-1.3,0-1.9H16.8c0,0.8-0.1,1.7-0.1,2.6c0,0,0,0.1,0,0.1H27.3z"/>
						<path id="wssb_429_" class="wssb-st40" d="M27.7,32.7c0.1-0.9,0.2-1.8,0.2-2.7H17.7c-0.1,0.8-0.2,1.7-0.3,2.7H27.7z"/>
						<path id="wssb_430_" class="wssb-st40" d="M27.7,52.8c-0.1-0.8-0.1-1.7-0.2-2.7H17c0.1,0.9,0.2,1.8,0.3,2.7H27.7z"/>
					</g>				
					<g  class="open-f4">
						<animate values="open-hide;open-hide;open-hide;open-show;" dur="0.5s" attributeName="class" repeatCount="indefinite"/>
						<path id="wssb_413_" class="wssb-st40" d="M27.3,39.7c0-0.9,0.1-1.8,0.1-2.7H17c-0.1,0.9-0.1,1.7-0.2,2.7H27.3z"/>
						<path id="wssb_416_" class="wssb-st40" d="M28,29.7c0.1-1,0.2-1.9,0.3-2.7H18.1c-0.1,0.8-0.3,1.7-0.4,2.7H28z"/>
						<path id="wssb_431_" class="wssb-st40" d="M28.3,59.8c-0.1-0.7-0.2-1.6-0.3-2.7H17.9c0.2,1.1,0.3,2,0.5,2.7H28.3z"/>
						<path id="wssb_432_" class="wssb-st40" d="M27.5,49.8c0-0.9-0.1-1.8-0.1-2.7H16.8c0,0.9,0.1,1.8,0.2,2.7H27.5z"/>
					</g>				
				</svg>
     </div>`);
	}

  initialize() {
    let that = this;
    this.stage.variableList.forEach(function (variable) {
      let data = {}
      data.key = variable.key;
      data.value = variable.value;
      that.dynamic(data);
    })
    let deviceId = that.config.bindData.deviceId
    if(deviceId) {
      that.stage.option.getDevice(deviceId,function (device) {
        if(deviceId==device.id) {
          that.reveal(device);
        }
      });
    }
  }

  reveal(device) {
    let that = this;
    if(device) {
      device.points.forEach(function(point) {
        if(that.isAnimation) {
          let data = {}
          data.key = point.id;
          data.value = point.value;
          that.dynamic(data);
        }
      })
    }
  }

	toJson() {
		let json = {
			className: this.className,
			moveType: this.moveType,
			linkage: this.linkage,
			minWidth: this.minWidth,
			minHeight: this.minHeight,
			zIndex: this.zIndex,
      isLinkPoint: this.isLinkPoint
		};
		return Object.assign(super.toJson(),json);
	}

  createLinkPoint() {
    let x = parseInt(this.x+this.width*0.1-10);
    let y = parseInt(this.y+this.height*0.4-2)
    let spirit = this.stage.create("LinkPoint",x,y,10,10);
    spirit.isAuto = true;
    this.stage.capacity.push(spirit);
    let x2 = parseInt(this.x+this.width*0.2-6);
    let y2 = parseInt(this.y+this.height*0.15-3)
    let spirit2 = this.stage.create("LinkPoint",x2,y2,10,10);
    spirit2.isAuto = true;
    this.stage.capacity.push(spirit2);
  }

}

export default Wssb;

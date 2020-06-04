import Spirit from '@/core/Spirit.js'

/**
 * 立式水泵
 */
class Lssb extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.title = "立式水泵";
	    this.className = "Lssb";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4;
	    this.minWidth = 20;
	    this.minHeight = 20;
		  this.zIndex = 3;
	    this.linkage = true;
	    this.isPanel = true;
	    this.isBind = true;
	    this.isLinkPoint = true;
	    this.config = {bindDevice: {id:'',point:'',unit:''}};
	}

	template(){
		let div = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;border:1px solid transparent;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)"></div>`);
		div.append(this.close());
		return div;
	}

	open() {
		return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 83 104" style="enable-background:new 0 0 83 104;" xml:space="preserve">
				<style type="text/css">
					.lssb-st0{fill:url(#lssb_2_);}
					.lssb-st1{fill:url(#lssb_3_);}
					.lssb-st2{fill:#8CBFC3;}
					.lssb-st3{fill:url(#lssb_4_);}
					.lssb-st4{fill:url(#lssb_5_);}
					.lssb-st5{fill:url(#lssb_6_);}
					.lssb-st6{fill:url(#lssb_7_);}
					.lssb-st7{fill:url(#lssb_8_);}
					.lssb-st8{fill:url(#lssb_9_);}
					.lssb-st9{fill:#C7E8F9;}
					.lssb-st10{fill:url(#lssb_10_);}
					.lssb-st11{fill:url(#lssb_11_);}
					.lssb-st12{fill:#3C4F53;}
					.lssb-st13{fill:url(#lssb_12_);}
					.lssb-st14{fill:url(#lssb_13_);}
					.lssb-st15{fill:url(#lssb_14_);}
					.lssb-st16{fill:#FFFFFF;}
					
					.show {display:default;}
				    .hide {display:none;}
				    .f1 {display:default;}
				    .f2 {display:none;}
				    .f3 {display:none;}
				</style>
				<g id="lssb_463_">
					<linearGradient id="lssb_2_" gradientUnits="userSpaceOnUse" x1="9.4368" y1="89.7468" x2="72.6484" y2="89.7468">
						<stop  offset="0" style="stop-color:#3F6260"/>
						<stop  offset="0.4848" style="stop-color:#93C3CE"/>
						<stop  offset="1" style="stop-color:#294843"/>
					</linearGradient>
					<path id="lssb_458_" class="lssb-st0" d="M68.5,77.4l-20.3-2.2H33.9l-20.3,2.2c0,0-4.2,3.8-4.2,10.3c0,7.4,4.7,10.8,4.7,10.8
						c3.6,3.4,14.3,5.8,26.9,5.8c12.6,0,23.3-2.5,26.9-5.8l0,0c0,0,4.7-3.4,4.7-10.8C72.6,81.2,68.5,77.4,68.5,77.4z"/>					
						<radialGradient id="lssb_3_" cx="43.1526" cy="41.1421" r="68.3219" gradientTransform="matrix(1 0 0 0.8859 0 4.6937)" gradientUnits="userSpaceOnUse">
						<stop  offset="0.7882" style="stop-color:#8AB7BD;stop-opacity:0"/>
						<stop  offset="0.9085" style="stop-color:#8AB7BD;stop-opacity:0.4"/>
						<stop  offset="1" style="stop-color:#8AB7BD;stop-opacity:0"/>
					</radialGradient>
					<path id="lssb_455_" class="lssb-st1" d="M68.5,77.4l-20.3-2.2H33.9l-20.3,2.2c0,0-4.2,3.8-4.2,10.3c0,7.4,4.7,10.8,4.7,10.8
						c3.6,3.4,14.3,5.8,26.9,5.8c12.6,0,23.3-2.5,26.9-5.8l0,0c0,0,4.7-3.4,4.7-10.8C72.6,81.2,68.5,77.4,68.5,77.4z"/>
					<ellipse id="lssb_453_" class="lssb-st2" cx="41" cy="79.3" rx="28.2" ry="8.3"/>
					<linearGradient id="lssb_4_" gradientUnits="userSpaceOnUse" x1="18.4582" y1="78.4633" x2="63.6241" y2="78.4633">
						<stop  offset="0" style="stop-color:#284947"/>
						<stop  offset="0.5222" style="stop-color:#77A2A9"/>
						<stop  offset="1" style="stop-color:#1D3C39"/>
					</linearGradient>
					<path id="lssb_452_" class="lssb-st3" d="M18.5,72V78c0,4.5,11.6,6.9,22.6,6.9s22.6-2.4,22.6-6.9V72H18.5z"/>
					<linearGradient id="lssb_5_" gradientUnits="userSpaceOnUse" x1="14.9663" y1="72.3358" x2="66.975" y2="72.3358">
						<stop  offset="0" style="stop-color:#3F6260"/>
						<stop  offset="0.4848" style="stop-color:#93C3CE"/>
						<stop  offset="1" style="stop-color:#294843"/>
					</linearGradient>
					<path id="lssb_440_" class="lssb-st4" d="M15,63v10.7c0,5.2,13.4,8,26.1,8s25.9-2.8,25.9-8V63H15z"/>
					<path id="lssb_438_" class="lssb-st2" d="M41,71.1c-12.6,0-26-2.9-26-8.1c0-5.3,13.4-8.1,26-8.1s26,2.9,26,8.1
						C67,68.3,53.6,71.1,41,71.1z"/>
					<linearGradient id="lssb_6_" gradientUnits="userSpaceOnUse" x1="18.4582" y1="46.4365" x2="63.6241" y2="46.4365">
						<stop  offset="0" style="stop-color:#284947"/>
						<stop  offset="0.5222" style="stop-color:#77A2A9"/>
						<stop  offset="1" style="stop-color:#1D3C39"/>
					</linearGradient>
					<path id="lssb_451_" class="lssb-st5" d="M18.5,24.9v36.1c0,4.5,11.6,6.9,22.6,6.9s22.6-2.4,22.6-6.9V24.9H18.5z"/>
					<linearGradient id="lssb_7_" gradientUnits="userSpaceOnUse" x1="15.8141" y1="45.8661" x2="66.2153" y2="45.8661">
						<stop  offset="0" style="stop-color:#3F6260"/>
						<stop  offset="0.4848" style="stop-color:#93C3CE"/>
						<stop  offset="1" style="stop-color:#294843"/>
					</linearGradient>
					<path id="lssb_454_" class="lssb-st6" d="M16.7,25.8V63c0,0,0.3,0.9,1.7,2V26.8c0.6,0.3,1.3,0.6,2.2,0.9v38.5c0.5,0.2,1.1,0.5,1.7,0.7
						V28.3c0.7,0.2,1.4,0.4,2.2,0.6v38.8c0.5,0.1,1.1,0.3,1.7,0.4V29.3c0.7,0.1,1.4,0.3,2.2,0.4v39c0.5,0.1,1.1,0.2,1.7,0.3v-39
						c0.7,0.1,1.4,0.2,2.2,0.2v39c0.6,0.1,1.1,0.1,1.7,0.1v-39c0.7,0,1.4,0.1,2.2,0.1v39c0.6,0,1.1,0,1.7,0.1V30.4c0.7,0,1.4,0,2.2,0
						v39.1c0.3,0,0.5,0,0.8,0c0.3,0,0.6,0,0.9,0V30.4c0.7,0,1.5,0,2.2,0v39c0.6,0,1.2,0,1.7-0.1v-39c0.8,0,1.5-0.1,2.2-0.1v39
						c0.6,0,1.2-0.1,1.7-0.2v-39c0.8-0.1,1.5-0.2,2.2-0.2v39c0.6-0.1,1.2-0.2,1.7-0.3v-39c0.8-0.1,1.5-0.2,2.2-0.4v38.9
						c0.6-0.1,1.2-0.3,1.7-0.4V28.8c0.8-0.2,1.5-0.4,2.2-0.6V67c0.6-0.2,1.2-0.5,1.7-0.7V27.7c0.9-0.3,1.6-0.7,2.2-1v38.3
						c1.4-1.1,1.7-2,1.7-2V25.6c0.6-0.5,0.9-0.8,0.9-0.8v-1.1c0,0-9.1,3.1-25.2,3.1s-25.2-4.5-25.2-4.5v2.7
						C15.8,24.9,16.1,25.3,16.7,25.8z"/>
					<linearGradient id="lssb_8_" gradientUnits="userSpaceOnUse" x1="14.9663" y1="22.9363" x2="67.1161" y2="22.9363">
						<stop  offset="0" style="stop-color:#3F6260"/>
						<stop  offset="0.4848" style="stop-color:#93C3CE"/>
						<stop  offset="1" style="stop-color:#294843"/>
					</linearGradient>
					<path id="lssb_447_" class="lssb-st7" d="M15,14.4v9.2c0,5.2,13.4,8,26.1,8s26.1-2.8,26.1-8v-9.2H15z"/>
					<linearGradient id="lssb_9_" gradientUnits="userSpaceOnUse" x1="14.9663" y1="14.3729" x2="67.1161" y2="14.3729">
						<stop  offset="0" style="stop-color:#598082"/>
						<stop  offset="0.4848" style="stop-color:#93C3CE"/>
						<stop  offset="1" style="stop-color:#496E6E"/>
					</linearGradient>
					<path id="lssb_450_" class="lssb-st8" d="M66.5,12.5L66.5,12.5l-3.6-6.1l-2,2.7c-4.1,2.9-12.2,4.2-19.4,4.2c-7.5,0-15.3-1-20.9-3.9l0,0
						l-1.4-2.9l-3.6,6.1c-0.1,0.2-0.2,0.4-0.3,0.6l0,0l0,0c-0.2,0.4-0.3,0.9-0.3,1.3c0,5.2,13.4,8,26.1,8s26.1-2.8,26.1-8
						C67.1,13.7,66.9,13.1,66.5,12.5z"/>
					<path id="lssb_442_" class="lssb-st9" d="M41,13.9c-10.7,0-22-2.4-22-6.7c0-4.4,11.3-6.7,22-6.7s22,2.4,22,6.7
						C63,11.6,51.7,13.9,41,13.9z"/>
					<linearGradient id="lssb_10_" gradientUnits="userSpaceOnUse" x1="41.0411" y1="2.0038" x2="41.0411" y2="12.3491">
						<stop  offset="0" style="stop-color:#505156"/>
						<stop  offset="1" style="stop-color:#000000"/>
					</linearGradient>
					<path id="lssb_444_" class="lssb-st10" d="M41,2.1c-12.6,0-20.4,3-20.4,5.1s7.8,5.1,20.4,5.1s20.4-3,20.4-5.1S53.7,2.1,41,2.1z"/>
					<linearGradient id="lssb_11_" gradientUnits="userSpaceOnUse" x1="2.4315" y1="76.3981" x2="2.4315" y2="100.6329">
						<stop  offset="0" style="stop-color:#3F6260"/>
						<stop  offset="0.4848" style="stop-color:#93C3CE"/>
						<stop  offset="1" style="stop-color:#294843"/>
					</linearGradient>
					<path id="lssb_459_" class="lssb-st11" d="M5,76H2.6c-1.5,0-2.7,5.4-2.7,12.1c0,6.7,1.2,12.1,2.7,12.1H5V76z"/>
					<ellipse id="lssb_457_" class="lssb-st12" cx="5" cy="88.1" rx="2.7" ry="12.1"/>
					<linearGradient id="lssb_12_" gradientUnits="userSpaceOnUse" x1="8.0471" y1="79.8826" x2="8.0471" y2="95.6243">
						<stop  offset="0" style="stop-color:#3F6260"/>
						<stop  offset="0.4848" style="stop-color:#93C3CE"/>
						<stop  offset="1" style="stop-color:#294843"/>
					</linearGradient>
					<path id="lssb_456_" class="lssb-st13" d="M11.9,79.9H5.9c-0.7,0-1.7,3.6-1.7,8c0,4.4,1,8,1.7,8h5.9c0,0-1.2-3.6-1.2-8.2
						C10.7,83,11.9,79.9,11.9,79.9z"/>					
						<linearGradient id="lssb_13_" gradientUnits="userSpaceOnUse" x1="-793.3923" y1="76.3981" x2="-793.3923" y2="100.6329" gradientTransform="matrix(-1 0 0 1 -713.5645 0)">
						<stop  offset="0" style="stop-color:#3F6260"/>
						<stop  offset="0.4848" style="stop-color:#93C3CE"/>
						<stop  offset="1" style="stop-color:#294843"/>
					</linearGradient>
					<path id="lssb_462_" class="lssb-st14" d="M77.3,76h2.4c1.5,0,2.7,5.4,2.7,12.1c0,6.7-1.2,12.1-2.7,12.1h-2.4V76z"/>
					<ellipse id="lssb_461_" class="lssb-st12" cx="77.3" cy="88.1" rx="2.7" ry="12.1"/>					
						<linearGradient id="lssb_14_" gradientUnits="userSpaceOnUse" x1="-787.7767" y1="79.8826" x2="-787.7767" y2="95.6243" gradientTransform="matrix(-1 0 0 1 -713.5645 0)">
						<stop  offset="0" style="stop-color:#3F6260"/>
						<stop  offset="0.4848" style="stop-color:#93C3CE"/>
						<stop  offset="1" style="stop-color:#294843"/>
					</linearGradient>
					<path id="lssb_460_" class="lssb-st15" d="M70.4,79.9h5.9c0.7,0,1.7,3.6,1.7,8c0,4.4-1,8-1.7,8h-5.9c0,0,1.2-3.6,1.2-8.2
						C71.6,83,70.4,79.9,70.4,79.9z"/>
				</g>				
				<g class="f1">
					<animate values="show;hide;hide;" dur="0.5s" attributeName="class" repeatCount="indefinite"/>
					<path class="lssb-st16" d="M41.4,6.9c-0.7-0.4-1.6-1.4-0.1-2.6c1.1-0.8,3.4-1.4,5-1.7c-1.7-0.1-3.5-0.2-5.3-0.2
					c-0.8,0-1.6,0-2.4,0c-0.7,0.3-2,0.9-2.3,1.9C36,5.8,39,6.8,39.9,7.1c-1.9,0.2-5.9,0.4-10.7,0c-3.3-0.3-5.8-0.8-7.1-1.2
					c-0.5,0.4-0.7,0.8-0.7,1.3c0,0.2,0.1,0.4,0.1,0.6c1.2,0.2,3.8,0.5,7.9,0.5c5.6,0.1,9.9-0.6,11.2-0.8c0.7,0.4,1.6,1.4,0.1,2.6
					c-1.1,0.8-3.4,1.4-5,1.7c1.7,0.1,3.5,0.2,5.3,0.2c0.8,0,1.6,0,2.4,0c0.7-0.3,2-0.9,2.3-1.9c0.3-1.3-2.6-2.4-3.5-2.7
					c1.9-0.2,5.9-0.4,10.7,0c3.3,0.3,5.8,0.8,7.1,1.2c0.5-0.4,0.7-0.8,0.7-1.3c0-0.2-0.1-0.4-0.1-0.6c-1.2-0.2-3.8-0.5-7.9-0.5
					C47,6,42.6,6.7,41.4,6.9z"/>
				</g>			
				<g class="f2">
					<animate values="hide;show;hide;" dur="0.5s" attributeName="class" repeatCount="indefinite"/>
					<path class="lssb-st16" d="M40.8,6.9c-1.5-0.3-4.3-1-5.4-2.2c-0.7-0.8,0.1-1.6,0.8-2.1c-1.7,0.1-3.4,0.3-5,0.5
					c-0.7,0.1-1.3,0.2-2,0.3c0,0.3,0.2,1,2,1.9c2.5,1.2,7.2,1.8,8.6,1.9c-1.3,0.4-4.3,1-9.2,1.3c-3.4,0.2-6.7,0-8.7-0.2
					c0.4,0.4,1.1,0.8,2,1.2c0.4,0.2,0.8,0.3,1.3,0.5c1.4,0,4.3,0,8-0.5c5-0.6,7.3-1.7,7.9-2.1c1.5,0.3,4.3,1,5.4,2.2
					c0.7,0.8-0.1,1.6-0.8,2.1c1.7-0.1,3.4-0.3,5-0.5c0.7-0.1,1.3-0.2,2-0.3c0-0.3-0.2-1-2-1.9c-2.5-1.2-7.2-1.8-8.6-1.9
					c1.3-0.4,4.3-1,9.2-1.3C54.8,5.7,58,5.9,60,6c-0.4-0.4-1.1-0.8-2-1.2c-0.4-0.2-0.8-0.3-1.3-0.5c-1.4,0-4.3,0-8,0.5
					C43.7,5.4,41.4,6.6,40.8,6.9z"/>
				</g>				
				<g class="f3">
						<animate values="hide;hide;show;" dur="0.5s" attributeName="class" repeatCount="indefinite"/>
						<path class="lssb-st16" d="M40.2,7c-1.9-0.1-5.9-0.4-9.3-1.3c-2.3-0.6-3.3-1.4-3.7-1.9c-1.3,0.3-2.4,0.6-3.3,1
					C23.6,5,23.3,5.2,23,5.3c0.7,0.3,2.3,0.9,5.7,1.4c4.7,0.7,9.9,0.7,11.4,0.6c-0.4,0.5-1.5,1.4-5.3,2.2c-2.6,0.6-5.8,0.8-7.9,0.9
					c1.2,0.3,2.6,0.6,4.2,0.8c0.7,0.1,1.4,0.2,2.1,0.3c1.2-0.2,3.7-0.6,5.9-1.4C42.4,9,42,7.8,41.8,7.4c1.9,0.1,5.9,0.4,9.3,1.3
					c2.3,0.6,3.3,1.4,3.7,1.9c1.3-0.3,2.4-0.6,3.3-1c0.4-0.2,0.7-0.3,1.1-0.5c-0.7-0.3-2.3-0.9-5.7-1.4C48.7,6.9,43.4,7,41.9,7
					c0.4-0.5,1.5-1.4,5.3-2.2C49.7,4.2,53,4,55,3.9c-1.2-0.3-2.6-0.6-4.2-0.8c-0.7-0.1-1.4-0.2-2.1-0.3C47.5,3,45,3.4,42.8,4.2
					C39.7,5.4,40,6.6,40.2,7z"/>
				</g>
				</svg>`;
	}

    close() {
    	return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 83 104" style="enable-background:new 0 0 83 104;" xml:space="preserve">
				<style type="text/css">
					.lssb-st0{fill:url(#lssb_2_);}
					.lssb-st1{fill:url(#lssb_3_);}
					.lssb-st2{fill:#8CBFC3;}
					.lssb-st3{fill:url(#lssb_4_);}
					.lssb-st4{fill:url(#lssb_5_);}
					.lssb-st5{fill:url(#lssb_6_);}
					.lssb-st6{fill:url(#lssb_7_);}
					.lssb-st7{fill:url(#lssb_8_);}
					.lssb-st8{fill:url(#lssb_9_);}
					.lssb-st9{fill:#C7E8F9;}
					.lssb-st10{fill:url(#lssb_10_);}
					.lssb-st11{fill:url(#lssb_11_);}
					.lssb-st12{fill:#3C4F53;}
					.lssb-st13{fill:url(#lssb_12_);}
					.lssb-st14{fill:url(#lssb_13_);}
					.lssb-st15{fill:url(#lssb_14_);}
					.lssb-st16{fill:#FFFFFF;}
					
					.show {display:default;}
				    .hide {display:none;}
				    .f1 {display:default;}
				    .f2 {display:none;}
				    .f3 {display:none;}
				</style>
				<g id="lssb_463_">
					<linearGradient id="lssb_2_" gradientUnits="userSpaceOnUse" x1="9.4368" y1="89.7468" x2="72.6484" y2="89.7468">
						<stop  offset="0" style="stop-color:#3F6260"/>
						<stop  offset="0.4848" style="stop-color:#93C3CE"/>
						<stop  offset="1" style="stop-color:#294843"/>
					</linearGradient>
					<path id="lssb_458_" class="lssb-st0" d="M68.5,77.4l-20.3-2.2H33.9l-20.3,2.2c0,0-4.2,3.8-4.2,10.3c0,7.4,4.7,10.8,4.7,10.8
						c3.6,3.4,14.3,5.8,26.9,5.8c12.6,0,23.3-2.5,26.9-5.8l0,0c0,0,4.7-3.4,4.7-10.8C72.6,81.2,68.5,77.4,68.5,77.4z"/>					
						<radialGradient id="lssb_3_" cx="43.1526" cy="41.1421" r="68.3219" gradientTransform="matrix(1 0 0 0.8859 0 4.6937)" gradientUnits="userSpaceOnUse">
						<stop  offset="0.7882" style="stop-color:#8AB7BD;stop-opacity:0"/>
						<stop  offset="0.9085" style="stop-color:#8AB7BD;stop-opacity:0.4"/>
						<stop  offset="1" style="stop-color:#8AB7BD;stop-opacity:0"/>
					</radialGradient>
					<path id="lssb_455_" class="lssb-st1" d="M68.5,77.4l-20.3-2.2H33.9l-20.3,2.2c0,0-4.2,3.8-4.2,10.3c0,7.4,4.7,10.8,4.7,10.8
						c3.6,3.4,14.3,5.8,26.9,5.8c12.6,0,23.3-2.5,26.9-5.8l0,0c0,0,4.7-3.4,4.7-10.8C72.6,81.2,68.5,77.4,68.5,77.4z"/>
					<ellipse id="lssb_453_" class="lssb-st2" cx="41" cy="79.3" rx="28.2" ry="8.3"/>
					<linearGradient id="lssb_4_" gradientUnits="userSpaceOnUse" x1="18.4582" y1="78.4633" x2="63.6241" y2="78.4633">
						<stop  offset="0" style="stop-color:#284947"/>
						<stop  offset="0.5222" style="stop-color:#77A2A9"/>
						<stop  offset="1" style="stop-color:#1D3C39"/>
					</linearGradient>
					<path id="lssb_452_" class="lssb-st3" d="M18.5,72V78c0,4.5,11.6,6.9,22.6,6.9s22.6-2.4,22.6-6.9V72H18.5z"/>
					<linearGradient id="lssb_5_" gradientUnits="userSpaceOnUse" x1="14.9663" y1="72.3358" x2="66.975" y2="72.3358">
						<stop  offset="0" style="stop-color:#3F6260"/>
						<stop  offset="0.4848" style="stop-color:#93C3CE"/>
						<stop  offset="1" style="stop-color:#294843"/>
					</linearGradient>
					<path id="lssb_440_" class="lssb-st4" d="M15,63v10.7c0,5.2,13.4,8,26.1,8s25.9-2.8,25.9-8V63H15z"/>
					<path id="lssb_438_" class="lssb-st2" d="M41,71.1c-12.6,0-26-2.9-26-8.1c0-5.3,13.4-8.1,26-8.1s26,2.9,26,8.1
						C67,68.3,53.6,71.1,41,71.1z"/>
					<linearGradient id="lssb_6_" gradientUnits="userSpaceOnUse" x1="18.4582" y1="46.4365" x2="63.6241" y2="46.4365">
						<stop  offset="0" style="stop-color:#284947"/>
						<stop  offset="0.5222" style="stop-color:#77A2A9"/>
						<stop  offset="1" style="stop-color:#1D3C39"/>
					</linearGradient>
					<path id="lssb_451_" class="lssb-st5" d="M18.5,24.9v36.1c0,4.5,11.6,6.9,22.6,6.9s22.6-2.4,22.6-6.9V24.9H18.5z"/>
					<linearGradient id="lssb_7_" gradientUnits="userSpaceOnUse" x1="15.8141" y1="45.8661" x2="66.2153" y2="45.8661">
						<stop  offset="0" style="stop-color:#3F6260"/>
						<stop  offset="0.4848" style="stop-color:#93C3CE"/>
						<stop  offset="1" style="stop-color:#294843"/>
					</linearGradient>
					<path id="lssb_454_" class="lssb-st6" d="M16.7,25.8V63c0,0,0.3,0.9,1.7,2V26.8c0.6,0.3,1.3,0.6,2.2,0.9v38.5c0.5,0.2,1.1,0.5,1.7,0.7
						V28.3c0.7,0.2,1.4,0.4,2.2,0.6v38.8c0.5,0.1,1.1,0.3,1.7,0.4V29.3c0.7,0.1,1.4,0.3,2.2,0.4v39c0.5,0.1,1.1,0.2,1.7,0.3v-39
						c0.7,0.1,1.4,0.2,2.2,0.2v39c0.6,0.1,1.1,0.1,1.7,0.1v-39c0.7,0,1.4,0.1,2.2,0.1v39c0.6,0,1.1,0,1.7,0.1V30.4c0.7,0,1.4,0,2.2,0
						v39.1c0.3,0,0.5,0,0.8,0c0.3,0,0.6,0,0.9,0V30.4c0.7,0,1.5,0,2.2,0v39c0.6,0,1.2,0,1.7-0.1v-39c0.8,0,1.5-0.1,2.2-0.1v39
						c0.6,0,1.2-0.1,1.7-0.2v-39c0.8-0.1,1.5-0.2,2.2-0.2v39c0.6-0.1,1.2-0.2,1.7-0.3v-39c0.8-0.1,1.5-0.2,2.2-0.4v38.9
						c0.6-0.1,1.2-0.3,1.7-0.4V28.8c0.8-0.2,1.5-0.4,2.2-0.6V67c0.6-0.2,1.2-0.5,1.7-0.7V27.7c0.9-0.3,1.6-0.7,2.2-1v38.3
						c1.4-1.1,1.7-2,1.7-2V25.6c0.6-0.5,0.9-0.8,0.9-0.8v-1.1c0,0-9.1,3.1-25.2,3.1s-25.2-4.5-25.2-4.5v2.7
						C15.8,24.9,16.1,25.3,16.7,25.8z"/>
					<linearGradient id="lssb_8_" gradientUnits="userSpaceOnUse" x1="14.9663" y1="22.9363" x2="67.1161" y2="22.9363">
						<stop  offset="0" style="stop-color:#3F6260"/>
						<stop  offset="0.4848" style="stop-color:#93C3CE"/>
						<stop  offset="1" style="stop-color:#294843"/>
					</linearGradient>
					<path id="lssb_447_" class="lssb-st7" d="M15,14.4v9.2c0,5.2,13.4,8,26.1,8s26.1-2.8,26.1-8v-9.2H15z"/>
					<linearGradient id="lssb_9_" gradientUnits="userSpaceOnUse" x1="14.9663" y1="14.3729" x2="67.1161" y2="14.3729">
						<stop  offset="0" style="stop-color:#598082"/>
						<stop  offset="0.4848" style="stop-color:#93C3CE"/>
						<stop  offset="1" style="stop-color:#496E6E"/>
					</linearGradient>
					<path id="lssb_450_" class="lssb-st8" d="M66.5,12.5L66.5,12.5l-3.6-6.1l-2,2.7c-4.1,2.9-12.2,4.2-19.4,4.2c-7.5,0-15.3-1-20.9-3.9l0,0
						l-1.4-2.9l-3.6,6.1c-0.1,0.2-0.2,0.4-0.3,0.6l0,0l0,0c-0.2,0.4-0.3,0.9-0.3,1.3c0,5.2,13.4,8,26.1,8s26.1-2.8,26.1-8
						C67.1,13.7,66.9,13.1,66.5,12.5z"/>
					<path id="lssb_442_" class="lssb-st9" d="M41,13.9c-10.7,0-22-2.4-22-6.7c0-4.4,11.3-6.7,22-6.7s22,2.4,22,6.7
						C63,11.6,51.7,13.9,41,13.9z"/>
					<linearGradient id="lssb_10_" gradientUnits="userSpaceOnUse" x1="41.0411" y1="2.0038" x2="41.0411" y2="12.3491">
						<stop  offset="0" style="stop-color:#505156"/>
						<stop  offset="1" style="stop-color:#000000"/>
					</linearGradient>
					<path id="lssb_444_" class="lssb-st10" d="M41,2.1c-12.6,0-20.4,3-20.4,5.1s7.8,5.1,20.4,5.1s20.4-3,20.4-5.1S53.7,2.1,41,2.1z"/>
					<linearGradient id="lssb_11_" gradientUnits="userSpaceOnUse" x1="2.4315" y1="76.3981" x2="2.4315" y2="100.6329">
						<stop  offset="0" style="stop-color:#3F6260"/>
						<stop  offset="0.4848" style="stop-color:#93C3CE"/>
						<stop  offset="1" style="stop-color:#294843"/>
					</linearGradient>
					<path id="lssb_459_" class="lssb-st11" d="M5,76H2.6c-1.5,0-2.7,5.4-2.7,12.1c0,6.7,1.2,12.1,2.7,12.1H5V76z"/>
					<ellipse id="lssb_457_" class="lssb-st12" cx="5" cy="88.1" rx="2.7" ry="12.1"/>
					<linearGradient id="lssb_12_" gradientUnits="userSpaceOnUse" x1="8.0471" y1="79.8826" x2="8.0471" y2="95.6243">
						<stop  offset="0" style="stop-color:#3F6260"/>
						<stop  offset="0.4848" style="stop-color:#93C3CE"/>
						<stop  offset="1" style="stop-color:#294843"/>
					</linearGradient>
					<path id="lssb_456_" class="lssb-st13" d="M11.9,79.9H5.9c-0.7,0-1.7,3.6-1.7,8c0,4.4,1,8,1.7,8h5.9c0,0-1.2-3.6-1.2-8.2
						C10.7,83,11.9,79.9,11.9,79.9z"/>					
						<linearGradient id="lssb_13_" gradientUnits="userSpaceOnUse" x1="-793.3923" y1="76.3981" x2="-793.3923" y2="100.6329" gradientTransform="matrix(-1 0 0 1 -713.5645 0)">
						<stop  offset="0" style="stop-color:#3F6260"/>
						<stop  offset="0.4848" style="stop-color:#93C3CE"/>
						<stop  offset="1" style="stop-color:#294843"/>
					</linearGradient>
					<path id="lssb_462_" class="lssb-st14" d="M77.3,76h2.4c1.5,0,2.7,5.4,2.7,12.1c0,6.7-1.2,12.1-2.7,12.1h-2.4V76z"/>
					<ellipse id="lssb_461_" class="lssb-st12" cx="77.3" cy="88.1" rx="2.7" ry="12.1"/>					
						<linearGradient id="lssb_14_" gradientUnits="userSpaceOnUse" x1="-787.7767" y1="79.8826" x2="-787.7767" y2="95.6243" gradientTransform="matrix(-1 0 0 1 -713.5645 0)">
						<stop  offset="0" style="stop-color:#3F6260"/>
						<stop  offset="0.4848" style="stop-color:#93C3CE"/>
						<stop  offset="1" style="stop-color:#294843"/>
					</linearGradient>
					<path id="lssb_460_" class="lssb-st15" d="M70.4,79.9h5.9c0.7,0,1.7,3.6,1.7,8c0,4.4-1,8-1.7,8h-5.9c0,0,1.2-3.6,1.2-8.2
						C71.6,83,70.4,79.9,70.4,79.9z"/>
				</g>
				
				<g class="f1">						
					<path class="lssb-st16" d="M41.4,6.9c-0.7-0.4-1.6-1.4-0.1-2.6c1.1-0.8,3.4-1.4,5-1.7c-1.7-0.1-3.5-0.2-5.3-0.2
					c-0.8,0-1.6,0-2.4,0c-0.7,0.3-2,0.9-2.3,1.9C36,5.8,39,6.8,39.9,7.1c-1.9,0.2-5.9,0.4-10.7,0c-3.3-0.3-5.8-0.8-7.1-1.2
					c-0.5,0.4-0.7,0.8-0.7,1.3c0,0.2,0.1,0.4,0.1,0.6c1.2,0.2,3.8,0.5,7.9,0.5c5.6,0.1,9.9-0.6,11.2-0.8c0.7,0.4,1.6,1.4,0.1,2.6
					c-1.1,0.8-3.4,1.4-5,1.7c1.7,0.1,3.5,0.2,5.3,0.2c0.8,0,1.6,0,2.4,0c0.7-0.3,2-0.9,2.3-1.9c0.3-1.3-2.6-2.4-3.5-2.7
					c1.9-0.2,5.9-0.4,10.7,0c3.3,0.3,5.8,0.8,7.1,1.2c0.5-0.4,0.7-0.8,0.7-1.3c0-0.2-0.1-0.4-0.1-0.6c-1.2-0.2-3.8-0.5-7.9-0.5
					C47,6,42.6,6.7,41.4,6.9z"/>
				</g>
				
				<g class="f2">						
					<path class="lssb-st16" d="M40.8,6.9c-1.5-0.3-4.3-1-5.4-2.2c-0.7-0.8,0.1-1.6,0.8-2.1c-1.7,0.1-3.4,0.3-5,0.5
					c-0.7,0.1-1.3,0.2-2,0.3c0,0.3,0.2,1,2,1.9c2.5,1.2,7.2,1.8,8.6,1.9c-1.3,0.4-4.3,1-9.2,1.3c-3.4,0.2-6.7,0-8.7-0.2
					c0.4,0.4,1.1,0.8,2,1.2c0.4,0.2,0.8,0.3,1.3,0.5c1.4,0,4.3,0,8-0.5c5-0.6,7.3-1.7,7.9-2.1c1.5,0.3,4.3,1,5.4,2.2
					c0.7,0.8-0.1,1.6-0.8,2.1c1.7-0.1,3.4-0.3,5-0.5c0.7-0.1,1.3-0.2,2-0.3c0-0.3-0.2-1-2-1.9c-2.5-1.2-7.2-1.8-8.6-1.9
					c1.3-0.4,4.3-1,9.2-1.3C54.8,5.7,58,5.9,60,6c-0.4-0.4-1.1-0.8-2-1.2c-0.4-0.2-0.8-0.3-1.3-0.5c-1.4,0-4.3,0-8,0.5
					C43.7,5.4,41.4,6.6,40.8,6.9z"/>
				</g>
				
				<g class="f3">
					<path class="lssb-st16" d="M40.2,7c-1.9-0.1-5.9-0.4-9.3-1.3c-2.3-0.6-3.3-1.4-3.7-1.9c-1.3,0.3-2.4,0.6-3.3,1
					C23.6,5,23.3,5.2,23,5.3c0.7,0.3,2.3,0.9,5.7,1.4c4.7,0.7,9.9,0.7,11.4,0.6c-0.4,0.5-1.5,1.4-5.3,2.2c-2.6,0.6-5.8,0.8-7.9,0.9
					c1.2,0.3,2.6,0.6,4.2,0.8c0.7,0.1,1.4,0.2,2.1,0.3c1.2-0.2,3.7-0.6,5.9-1.4C42.4,9,42,7.8,41.8,7.4c1.9,0.1,5.9,0.4,9.3,1.3
					c2.3,0.6,3.3,1.4,3.7,1.9c1.3-0.3,2.4-0.6,3.3-1c0.4-0.2,0.7-0.3,1.1-0.5c-0.7-0.3-2.3-0.9-5.7-1.4C48.7,6.9,43.4,7,41.9,7
					c0.4-0.5,1.5-1.4,5.3-2.2C49.7,4.2,53,4,55,3.9c-1.2-0.3-2.6-0.6-4.2-0.8c-0.7-0.1-1.4-0.2-2.1-0.3C47.5,3,45,3.4,42.8,4.2
					C39.7,5.4,40,6.6,40.2,7z"/>
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

  createLinkPoint() {
    let x = this.x+this.width*0.9-8;
    let y = this.y+this.height*0.8-2
    let spirit = this.stage.create("LinkPoint",x,y,10,10);
    spirit.isAuto = true;
    this.stage.capacity.push(spirit);
    let x2 = this.x+this.width*0.1-3;
    let y2 = this.y+this.height*0.8-2
    let spirit2 = this.stage.create("LinkPoint",x2,y2,10,10);
    spirit2.isAuto = true;
    this.stage.capacity.push(spirit2);
  }

	toJson() {
		let json = {
			title: this.title,
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

}

export default Lssb;

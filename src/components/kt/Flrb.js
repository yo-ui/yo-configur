import Spirit from '@/core/Spirit.js'

/**
 * 风冷热泵
 */
class Flrb extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.title = "风冷热泵";
	    this.className = "Flrb";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4; 
	    this.minWidth = 20;
	    this.minHeight = 20;
		this.zIndex = 2;
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
					 viewBox="0 0 500 450" style="enable-background:new 0 0 500 450;" xml:space="preserve">
				<style type="text/css">
					.flrb-st0{fill:url(#flrb_9_);}
					.flrb-st1{fill:#A8AEB3;}
					.flrb-st2{fill:#D8DFE2;}
					.flrb-st3{fill:#99A0A3;}
					.flrb-st4{fill:url(#flrb_10_);}
					.flrb-st5{fill:url(#flrb_12_);}
					.flrb-st6{fill:url(#flrb_13_);}
					.flrb-st7{fill:url(#flrb_14_);}
					.flrb-st8{fill:url(#flrb_15_);}
					.flrb-st9{fill:url(#flrb_16_);}
					.flrb-st10{fill:url(#flrb_17_);}
					.flrb-st11{fill:#C7CFD1;}
					.flrb-st12{fill:url(#flrb_18_);}
					.flrb-st13{fill:url(#flrb_19_);}
					.flrb-st14{fill:url(#flrb_20_);}
					.flrb-st15{fill:url(#flrb_21_);}
					.flrb-st16{fill:#B6C2C6;}
					.flrb-st17{fill:#F4F6F6;}
					.flrb-st18{fill:url(#flrb_22_);}
					.flrb-st19{fill:#BCC8CB;}
					.flrb-st20{fill:url(#flrb_23_);}
					.flrb-st21{fill:url(#flrb_24_);}
					.flrb-st22{opacity:0.4;fill:#040000;enable-background:new    ;}
					.flrb-st23{fill:url(#flrb_26_);}
					.flrb-st24{fill:#EAEEF0;}
					.flrb-st25{fill:url(#flrb_27_);}
					.flrb-st26{fill:url(#flrb_28_);}
					.flrb-st27{fill:url(#flrb_30_);}
					.flrb-st28{fill:#FFFFFF;}
				
					.show {display:default;}
				    .hide {display:none;}
				    .f1 {display:default;}
				    .f2 {display:none;}
				    .f3 {display:none;}
				</style>
					
						<linearGradient id="flrb_9_" gradientUnits="userSpaceOnUse" x1="250.8" y1="25.9322" x2="250.8" y2="2.5355" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#040000;stop-opacity:0.3"/>
							<stop  offset="1" style="stop-color:#040000;stop-opacity:0"/>
						</linearGradient>
						<polygon id="flrb_93_" class="flrb-st0" points="455.9,375.8 44.3,375.8 7.3,448.5 494.3,448.5 		"/>
						<polygon id="flrb_68_" class="flrb-st1" points="42.5,235.7 14.9,295.9 14.9,280.1 42.5,216 		"/>
						<polygon id="flrb_69_" class="flrb-st2" points="42.5,235.7 14.9,295.9 31,292.9 58.6,232.6 		"/>
						<polygon id="flrb_72_" class="flrb-st1" points="42.5,371.4 14.9,431.7 14.9,415.9 42.5,351.8 		"/>
						<polygon id="flrb_71_" class="flrb-st2" points="42.5,371.4 14.9,431.7 31,428.6 56.3,371.4 		"/>
						<rect id="flrb_73_" x="42.5" y="256" class="flrb-st3" width="16.1" height="115.5"/>
						<polygon id="flrb_80_" class="flrb-st1" points="457.5,235.7 485.1,295.9 485.1,280.1 457.5,216 		"/>
						<polygon id="flrb_79_" class="flrb-st2" points="457.5,235.7 485.1,295.9 469,292.9 441.4,232.6 		"/>
						<polygon id="flrb_78_" class="flrb-st1" points="457.5,371.4 485.1,431.7 485.1,415.9 457.5,351.8 		"/>
						<polygon id="flrb_77_" class="flrb-st2" points="457.5,371.4 485.1,431.7 469,428.6 443.7,371.4 		"/>
						<rect id="flrb_76_" x="441.4" y="256" class="flrb-st3" width="16.1" height="115.5"/>
						
							<linearGradient id="flrb_10_" gradientUnits="userSpaceOnUse" x1="250.95" y1="38.5308" x2="250.95" y2="79.6401" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#556883"/>
							<stop  offset="1" style="stop-color:#121C25"/>
						</linearGradient>
						<polygon id="flrb_92_" class="flrb-st4" points="465.9,411.1 36,411.1 54.4,371.4 449.1,371.4 		"/>
						
							<linearGradient id="flrb_12_" gradientUnits="userSpaceOnUse" x1="252.25" y1="88.5116" x2="252.25" y2="178.5537" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#556883"/>
							<stop  offset="1" style="stop-color:#121C25"/>
						</linearGradient>
						<rect id="flrb_91_" x="72.7" y="273.8" class="flrb-st5" width="359.1" height="86.9"/>
						
							<linearGradient id="flrb_13_" gradientUnits="userSpaceOnUse" x1="270.8" y1="93.9" x2="341.4" y2="93.9" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#2D384E"/>
							<stop  offset="0.4286" style="stop-color:#556883"/>
							<stop  offset="1" style="stop-color:#121C25"/>
						</linearGradient>
						<path id="flrb_89_" class="flrb-st6" d="M306.1,319.5c-30.5,0.1-35.3-11.7-35.3-11.7v83.3c0,3.8,3.9,7.3,10.9,9.7
							c6.5,2.3,15.2,3.6,24.4,3.6c9.2,0,17.9-1.3,24.4-3.6c7-2.5,10.9-5.9,10.9-9.7v-83.3C341.4,307.9,335.2,319.4,306.1,319.5z"/>
						
							<linearGradient id="flrb_14_" gradientUnits="userSpaceOnUse" x1="306.1" y1="128.6201" x2="306.1" y2="156.164" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#556883"/>
							<stop  offset="1" style="stop-color:#121C25"/>
						</linearGradient>
						<path id="flrb_87_" class="flrb-st7" d="M306.1,321.2c-9.2,0-17.9-1.3-24.4-3.6c-7-2.5-10.9-5.9-10.9-9.7c0-3.8,3.9-7.3,10.9-9.7
							c6.5-2.3,15.2-3.6,24.4-3.6c9.2,0,17.9,1.3,24.4,3.6c7,2.5,10.9,5.9,10.9,9.7c0,3.8-3.9,7.3-10.9,9.7
							C323.9,319.9,315.3,321.2,306.1,321.2z"/>
						
							<linearGradient id="flrb_15_" gradientUnits="userSpaceOnUse" x1="63.2" y1="93.9" x2="133.8" y2="93.9" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#2D384E"/>
							<stop  offset="0.4286" style="stop-color:#556883"/>
							<stop  offset="1" style="stop-color:#121C25"/>
						</linearGradient>
						<path id="flrb_97_" class="flrb-st8" d="M98.5,319.5c-30.5,0.1-35.3-11.7-35.3-11.7v83.3c0,3.8,3.9,7.3,10.9,9.7
							c6.5,2.3,15.2,3.6,24.4,3.6s17.9-1.3,24.4-3.6c7-2.5,10.9-5.9,10.9-9.7v-83.3C133.8,307.9,127.7,319.4,98.5,319.5z"/>
						
							<linearGradient id="flrb_16_" gradientUnits="userSpaceOnUse" x1="98.5" y1="128.6201" x2="98.5" y2="156.164" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#556883"/>
							<stop  offset="1" style="stop-color:#121C25"/>
						</linearGradient>
						<path id="flrb_94_" class="flrb-st9" d="M98.5,321.2c-9.2,0-17.9-1.3-24.4-3.6c-7-2.5-10.9-5.9-10.9-9.7c0-3.8,3.9-7.3,10.9-9.7
							c6.5-2.3,15.2-3.6,24.4-3.6s17.9,1.3,24.4,3.6c7,2.5,10.9,5.9,10.9,9.7c0,3.8-3.9,7.3-10.9,9.7
							C116.3,319.9,107.7,321.2,98.5,321.2z"/>
						
							<linearGradient id="flrb_17_" gradientUnits="userSpaceOnUse" x1="392.25" y1="35.8474" x2="392.25" y2="131.3358" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0.129" style="stop-color:#E8EDF0"/>
							<stop  offset="0.7312" style="stop-color:#D8DFE2"/>
						</linearGradient>
						<rect id="flrb_84_" x="335" y="313.7" class="flrb-st10" width="114.5" height="101.2"/>
						<polygon id="flrb_86_" class="flrb-st11" points="436.4,288.8 322,288.8 335,313.7 449.5,313.7 		"/>
						<polygon id="flrb_85_" class="flrb-st1" points="335,414.9 322,390 322,288.8 335,313.7 		"/>
						
							<linearGradient id="flrb_18_" gradientUnits="userSpaceOnUse" x1="122.1" y1="117.5042" x2="122.1" y2="44.9949" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#488D93"/>
							<stop  offset="7.784726e-002" style="stop-color:#58989E"/>
							<stop  offset="0.224" style="stop-color:#71A8AE"/>
							<stop  offset="0.358" style="stop-color:#80B2B9"/>
							<stop  offset="0.4677" style="stop-color:#85B5BC"/>
							<stop  offset="0.5706" style="stop-color:#7CADB4"/>
							<stop  offset="0.7377" style="stop-color:#64999D"/>
							<stop  offset="0.947" style="stop-color:#3D7779"/>
							<stop  offset="1" style="stop-color:#326E6F"/>
						</linearGradient>
						<ellipse id="flrb_81_" class="flrb-st12" cx="122.1" cy="371.4" rx="16.4" ry="39.7"/>
						
							<linearGradient id="flrb_19_" gradientUnits="userSpaceOnUse" x1="287.4" y1="115.8351" x2="287.4" y2="41.5097" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#488D93"/>
							<stop  offset="7.784726e-002" style="stop-color:#58989E"/>
							<stop  offset="0.224" style="stop-color:#71A8AE"/>
							<stop  offset="0.358" style="stop-color:#80B2B9"/>
							<stop  offset="0.4677" style="stop-color:#85B5BC"/>
							<stop  offset="0.5706" style="stop-color:#7CADB4"/>
							<stop  offset="0.7377" style="stop-color:#64999D"/>
							<stop  offset="0.947" style="stop-color:#3D7779"/>
							<stop  offset="1" style="stop-color:#326E6F"/>
						</linearGradient>
						<ellipse id="flrb_82_" class="flrb-st13" cx="287.4" cy="371.4" rx="16.7" ry="39.7"/>
						
							<linearGradient id="flrb_20_" gradientUnits="userSpaceOnUse" x1="205.4" y1="117.6213" x2="205.4" y2="39.3709" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#488D93"/>
							<stop  offset="7.784726e-002" style="stop-color:#58989E"/>
							<stop  offset="0.224" style="stop-color:#71A8AE"/>
							<stop  offset="0.358" style="stop-color:#80B2B9"/>
							<stop  offset="0.4677" style="stop-color:#85B5BC"/>
							<stop  offset="0.5706" style="stop-color:#7CADB4"/>
							<stop  offset="0.7377" style="stop-color:#64999D"/>
							<stop  offset="0.947" style="stop-color:#3D7779"/>
							<stop  offset="1" style="stop-color:#326E6F"/>
						</linearGradient>
						<path id="flrb_83_" class="flrb-st14" d="M122.1,411.1h165.3c0,0,7.5-9.3,7.5-40.6s-7.5-38.7-7.5-38.7H122.1c0,0-6.2,13-6.2,39.7
							C115.9,398.1,122.1,411.1,122.1,411.1z"/>
						
							<linearGradient id="flrb_21_" gradientUnits="userSpaceOnUse" x1="250" y1="204.4068" x2="250" y2="312.7146" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#585F65"/>
							<stop  offset="1" style="stop-color:#2A2F35"/>
						</linearGradient>
						<polygon id="flrb_67_" class="flrb-st15" points="485.1,106.8 14.9,106.8 44.1,258.2 455.9,258.2 		"/>
						<rect id="flrb_70_" x="44.3" y="257.9" class="flrb-st16" width="411.7" height="8.3"/>
						<rect id="flrb_37_" x="14.9" y="410.3" class="flrb-st17" width="470.1" height="21.4"/>
						<rect id="flrb_38_" x="14.9" y="280.1" class="flrb-st17" width="470.1" height="17.4"/>
						<rect id="flrb_40_" x="14.9" y="121.3" class="flrb-st17" width="470.1" height="21.4"/>
						
							<linearGradient id="flrb_22_" gradientUnits="userSpaceOnUse" x1="250" y1="0.8597" x2="250" y2="319.04" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0.129" style="stop-color:#E8EDF0"/>
							<stop  offset="0.7312" style="stop-color:#D8DFE2"/>
						</linearGradient>
						<rect id="flrb_63_" x="241.2" y="125.5" class="flrb-st18" width="17.6" height="324.5"/>
						<rect id="flrb_42_" x="14.9" y="121.3" class="flrb-st19" width="470.1" height="8.4"/>
						
							<linearGradient id="flrb_23_" gradientUnits="userSpaceOnUse" x1="250" y1="342.4576" x2="250" y2="439.3491" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#F1F4F5"/>
							<stop  offset="1" style="stop-color:#A8B2B7"/>
						</linearGradient>
						<polygon id="flrb_36_" class="flrb-st20" points="500,106.8 0,106.8 38.7,34.3 461.3,34.3 		"/>
						
							<linearGradient id="flrb_24_" gradientUnits="userSpaceOnUse" x1="250" y1="-0.8538" x2="250" y2="341.4361" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0.129" style="stop-color:#E8EDF0"/>
							<stop  offset="0.7312" style="stop-color:#D8DFE2"/>
						</linearGradient>
						<polygon id="flrb_65_" class="flrb-st21" points="0,106.8 0,450 19.9,450 19.9,127.4 480.1,127.4 480.1,450 500,450 500,106.8 		"/>
						<path id="flrb_39_" class="flrb-st22" d="M142,91.1c-19.5,0-37.8-2.7-51.7-7.5c-15.5-5.4-24.1-13.3-24.1-22.2s8.5-16.8,24.1-22.2
							c13.9-4.9,32.3-7.5,51.7-7.5s37.8,2.7,51.7,7.5c15.5,5.4,24.1,13.3,24.1,22.2s-8.5,16.8-24.1,22.2C179.9,88.5,161.5,91.1,142,91.1
							z"/>
						<path id="flrb_61_" class="flrb-st22" d="M358,91.1c-19.5,0-37.8-2.7-51.7-7.5c-15.5-5.4-24.1-13.3-24.1-22.2s8.5-16.8,24.1-22.2
							c13.9-4.9,32.3-7.5,51.7-7.5c19.5,0,37.8,2.7,51.7,7.5c15.5,5.4,24.1,13.3,24.1,22.2s-8.5,16.8-24.1,22.2
							C395.8,88.5,377.4,91.1,358,91.1z"/>
						
							<linearGradient id="flrb_26_" gradientUnits="userSpaceOnUse" x1="68.1" y1="391.9" x2="215.9" y2="391.9" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#BCC6C9"/>
							<stop  offset="0.4286" style="stop-color:#E8EDF0"/>
							<stop  offset="1" style="stop-color:#A8B2B7"/>
						</linearGradient>
						<path id="flrb_11_" class="flrb-st23" d="M142,52.3c-63.9,0.2-73.9-24.5-73.9-24.5v32.8c0,8,8.1,15.3,22.8,20.4
							c13.7,4.8,31.8,7.4,51.1,7.4s37.4-2.6,51.1-7.4c14.7-5.1,22.8-12.4,22.8-20.4V27.8C215.9,27.8,203.1,52.1,142,52.3z"/>
						<path id="flrb_3_" class="flrb-st24" d="M142,55.7c-19.3,0-37.4-2.6-51.1-7.4c-14.7-5.1-22.8-12.4-22.8-20.4s8.1-15.3,22.8-20.4
							C104.6,2.6,122.8,0,142,0s37.4,2.6,51.1,7.4c14.7,5.1,22.8,12.4,22.8,20.4s-8.1,15.3-22.8,20.4C179.4,53,161.3,55.7,142,55.7z
							 M142,6.1c-39.9,0-67.8,11.5-67.8,21.7S102,49.5,142,49.5s67.8-11.5,67.8-21.7S182,6.1,142,6.1z"/>
						
							<linearGradient id="flrb_27_" gradientUnits="userSpaceOnUse" x1="72.7" y1="422.15" x2="211.3" y2="422.15" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#424749"/>
							<stop  offset="0.6022" style="stop-color:#808D91"/>
							<stop  offset="1" style="stop-color:#555C5F"/>
						</linearGradient>
						<path id="flrb_29_" class="flrb-st25" d="M142,51.1c-37.6,0-69.3-10.7-69.3-23.3S104.5,4.6,142,4.6s69.3,10.7,69.3,23.3
							S179.6,51.1,142,51.1z"/>
						
							<linearGradient id="flrb_28_" gradientUnits="userSpaceOnUse" x1="284.1" y1="391.9" x2="431.9" y2="391.9" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#BCC6C9"/>
							<stop  offset="0.4286" style="stop-color:#E8EDF0"/>
							<stop  offset="1" style="stop-color:#A8B2B7"/>
						</linearGradient>
						<path id="flrb_34_" class="flrb-st26" d="M358,52.3c-63.9,0.2-73.9-24.5-73.9-24.5v32.8c0,8,8.1,15.3,22.8,20.4
							c13.7,4.8,31.8,7.4,51.1,7.4c19.3,0,37.4-2.6,51.1-7.4c14.7-5.1,22.8-12.4,22.8-20.4V27.8C431.9,27.8,419.1,52.1,358,52.3z"/>
						<path id="flrb_31_" class="flrb-st24" d="M358,55.7c-19.3,0-37.4-2.6-51.1-7.4c-14.7-5.1-22.8-12.4-22.8-20.4s8.1-15.3,22.8-20.4
							C320.6,2.6,338.7,0,358,0s37.4,2.6,51.1,7.4c14.7,5.1,22.8,12.4,22.8,20.4s-8.1,15.3-22.8,20.4C395.4,53,377.2,55.7,358,55.7z
							 M358,6.1c-39.9,0-67.8,11.5-67.8,21.7S318,49.6,358,49.6s67.8-11.5,67.8-21.7S397.9,6.1,358,6.1z"/>
						
							<linearGradient id="flrb_30_" gradientUnits="userSpaceOnUse" x1="288.7" y1="422.15" x2="427.3" y2="422.15" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#424749"/>
							<stop  offset="0.6022" style="stop-color:#808D91"/>
							<stop  offset="1" style="stop-color:#555C5F"/>
						</linearGradient>
						<path id="flrb_25_" class="flrb-st27" d="M358,51.1c-37.6,0-69.3-10.7-69.3-23.3S320.4,4.6,358,4.6s69.3,10.7,69.3,23.3
							S395.5,51.1,358,51.1z"/>
				
				
					<g  class="f1">
						<animate values="show;hide;hide;" dur="0.5s" attributeName="class" repeatCount="indefinite"/>
						<g >
							<path id="flrb_2_" class="flrb-st28" d="M141.2,28.6c-4.7-1.4-13.4-4.5-16.7-9.7c-2.3-3.6,0.2-7.1,2.4-9.2
								c-5.2,0.5-10.4,1.2-15.3,2.2c-2.2,0.4-4.1,0.9-6,1.4c-0.1,1.5,0.5,4.6,6.2,8.5c7.7,5.3,22.3,7.8,26.8,8.4
								c-4,1.6-13.2,4.6-28.4,5.7c-10.6,0.8-20.7-0.1-26.9-0.9c1.4,1.8,3.3,3.5,6.2,5.3c1.3,0.7,2.7,1.5,4.1,2.1
								c4.2,0,13.3-0.2,24.8-2.1c15.5-2.6,22.5-7.7,24.4-9.2c4.7,1.4,13.4,4.5,16.7,9.7c2.3,3.6-0.2,7.1-2.4,9.2
								c5.2-0.5,10.4-1.2,15.3-2.2c2.2-0.4,4.1-0.9,6-1.4c0.1-1.5-0.5-4.6-6.2-8.5c-7.7-5.3-22.3-7.8-26.8-8.4c4-1.6,13.2-4.6,28.4-5.7
								c10.6-0.8,20.7,0.1,26.9,0.9c-1.4-1.8-3.3-3.5-6.2-5.3c-1.3-0.7-2.7-1.5-4.1-2.1c-4.2,0-13.3,0.2-24.8,2.1
								C150.2,22.1,143.2,27.1,141.2,28.6z			">
							</path>
						</g>
						<g>
							<path id="flrb_7_" class="flrb-st28" d="M359.8,28.7c-2-2-5-6.2-0.3-11.3c3.3-3.5,10.6-6.1,15.5-7.6C369.8,9.3,364.3,9,358.6,9
								c-2.5,0-4.9,0.1-7.3,0.2c-2.2,1.2-6.2,4-7,8.4c-1.1,5.9,8,10.5,10.9,11.9c-5.7,0.7-18.1,1.7-33,0.1c-10.3-1.2-17.8-3.6-22-5.4
								c-1.5,1.8-2.3,3.6-2.3,5.7c0,0.9,0.2,1.7,0.5,2.5c3.6,0.8,11.8,2.1,24.6,2.4c17.3,0.4,30.7-2.8,34.5-3.7c2,2,5,6.2,0.3,11.3
								c-3.3,3.5-10.6,6.1-15.5,7.6c5.2,0.5,10.7,0.8,16.4,0.8c2.5,0,4.9-0.1,7.3-0.2c2.2-1.2,6.2-4,7-8.4c1.1-5.9-8-10.5-10.9-11.9
								c5.7-0.7,18.1-1.7,33-0.1c10.3,1.2,17.8,3.6,22,5.4c1.5-1.8,2.3-3.6,2.3-5.7c0-0.9-0.2-1.7-0.5-2.5c-3.6-0.8-11.8-2.1-24.6-2.4
								C377.1,24.5,363.7,27.7,359.8,28.7z			">
							</path>
						</g>
					</g>
					<g  class="f2">
						<animate values="hide;show;hide;" dur="0.5s" attributeName="class" repeatCount="indefinite"/>
						<g>
							<path id="flrb_4_" class="flrb-st28" d="M139.5,28.9c-6.1-0.4-18.2-1.6-28.7-5.6c-7.3-2.8-10.2-6.2-11.4-8.4
								c-3.8,1.3-7.3,2.8-10.1,4.5c-1.3,0.7-2.2,1.5-3.2,2.3c2,1.3,7.1,3.9,17.8,6.3c14.4,3.3,30.6,2.9,35.4,2.7
								c-1.2,2-4.7,6.2-16.3,9.9c-8.1,2.5-18.1,3.5-24.5,3.9c3.8,1.4,8,2.5,13.1,3.5c2.2,0.4,4.5,0.8,6.5,1.1c3.7-0.7,11.2-2.5,18.3-6.1
								c9.6-5,8.3-10.5,7.8-12.1c6.1,0.4,18.2,1.6,28.7,5.6c7.3,2.8,10.2,6.2,11.4,8.4c3.8-1.3,7.3-2.8,10.1-4.5
								c1.3-0.7,2.2-1.5,3.2-2.3c-2-1.3-7.1-3.9-17.8-6.3c-14.4-3.3-30.6-2.9-35.4-2.7c1.2-2,4.7-6.2,16.3-9.9
								c8.1-2.5,18.1-3.5,24.5-3.9c-3.8-1.4-8-2.5-13.1-3.5c-2.2-0.4-4.5-0.8-6.5-1.1c-3.7,0.7-11.2,2.5-18.3,6.1
								C137.8,21.7,139,27.3,139.5,28.9z">
							</path>
						</g>
						<g>
							<path id="flrb_6_" class="flrb-st28" d="M357.9,28.6c-4.7-1.4-13.4-4.5-16.7-9.7c-2.3-3.6,0.2-7.1,2.4-9.2
								c-5.2,0.5-10.4,1.2-15.3,2.2c-2.2,0.4-4.1,0.9-6,1.4c-0.1,1.5,0.5,4.6,6.2,8.5c7.7,5.3,22.3,7.8,26.8,8.4
								c-4,1.6-13.2,4.6-28.4,5.7c-10.6,0.8-20.7-0.1-26.9-0.9c1.4,1.8,3.3,3.5,6.2,5.3c1.3,0.7,2.7,1.5,4.1,2.1
								c4.2,0,13.3-0.2,24.8-2.1c15.5-2.6,22.5-7.7,24.4-9.2c4.7,1.4,13.4,4.5,16.7,9.7c2.3,3.6-0.2,7.1-2.4,9.2
								c5.2-0.5,10.4-1.2,15.3-2.2c2.2-0.4,4.1-0.9,6-1.4c0.1-1.5-0.5-4.6-6.2-8.5c-7.7-5.3-22.3-7.8-26.8-8.4c4-1.6,13.2-4.6,28.4-5.7
								c10.6-0.8,20.7,0.1,26.9,0.9c-1.4-1.8-3.3-3.5-6.2-5.3c-1.3-0.7-2.7-1.5-4.1-2.1c-4.2,0-13.3,0.2-24.8,2.1
								C366.9,22.1,359.9,27.1,357.9,28.6z			">
							</path>
						</g>
					</g>
					<g  class="f3">
						<animate values="hide;hide;show;" dur="0.5s" attributeName="class" repeatCount="indefinite"/>
						<g>
							<path id="flrb_1_" class="flrb-st28" d="M143.1,28.7c-2-2-5-6.2-0.3-11.3c3.3-3.5,10.6-6.1,15.5-7.6C153.1,9.3,147.6,9,141.9,9
								c-2.5,0-4.9,0.1-7.3,0.2c-2.2,1.2-6.2,4-7,8.4c-1.1,5.9,8,10.5,10.9,11.9c-5.7,0.7-18.1,1.7-33,0.1c-10.3-1.2-17.8-3.6-22-5.4
								c-1.5,1.8-2.3,3.6-2.3,5.7c0,0.9,0.2,1.7,0.5,2.5c3.6,0.8,11.8,2.1,24.6,2.4c17.3,0.4,30.7-2.8,34.5-3.7c2,2,5,6.2,0.3,11.3
								c-3.3,3.5-10.6,6.1-15.5,7.6c5.2,0.5,10.7,0.8,16.4,0.8c2.5,0,4.9-0.1,7.3-0.2c2.2-1.2,6.2-4,7-8.4c1.1-5.9-8-10.5-10.9-11.9
								c5.7-0.7,18.1-1.7,33-0.1c10.3,1.2,17.8,3.6,22,5.4c1.5-1.8,2.3-3.6,2.3-5.7c0-0.9-0.2-1.7-0.5-2.5c-3.6-0.8-11.8-2.1-24.6-2.4
								C160.4,24.5,147,27.7,143.1,28.7z			">
							</path>
						</g>
						<g>
							<path id="flrb_5_" class="flrb-st28" d="M356.2,28.9c-6.1-0.4-18.2-1.6-28.7-5.6c-7.3-2.8-10.2-6.2-11.4-8.4
								c-3.8,1.3-7.3,2.8-10.1,4.5c-1.3,0.7-2.2,1.5-3.2,2.3c2,1.3,7.1,3.9,17.8,6.3c14.4,3.3,30.6,2.9,35.4,2.7
								c-1.2,2-4.7,6.2-16.3,9.9c-8.1,2.5-18.1,3.5-24.5,3.9c3.8,1.4,8,2.5,13.1,3.5c2.2,0.4,4.5,0.8,6.5,1.1c3.7-0.7,11.2-2.5,18.3-6.1
								c9.6-5,8.3-10.5,7.8-12.1c6.1,0.4,18.2,1.6,28.7,5.6c7.3,2.8,10.2,6.2,11.4,8.4c3.8-1.3,7.3-2.8,10.1-4.5
								c1.3-0.7,2.2-1.5,3.2-2.3c-2-1.3-7.1-3.9-17.8-6.3c-14.4-3.3-30.6-2.9-35.4-2.7c1.2-2,4.7-6.2,16.3-9.9
								c8.1-2.5,18.1-3.5,24.5-3.9c-3.8-1.4-8-2.5-13.1-3.5c-2.2-0.4-4.5-0.8-6.5-1.1c-3.7,0.7-11.2,2.5-18.3,6.1
								C354.5,21.7,355.8,27.3,356.2,28.9z			">
							</path>
						</g>
					</g>
				
				</svg> `;
	}
	
	close() {
		return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 500 450" style="enable-background:new 0 0 500 450;" xml:space="preserve">
				<style type="text/css">
					.flrb-st0{fill:url(#flrb_9_);}
					.flrb-st1{fill:#A8AEB3;}
					.flrb-st2{fill:#D8DFE2;}
					.flrb-st3{fill:#99A0A3;}
					.flrb-st4{fill:url(#flrb_10_);}
					.flrb-st5{fill:url(#flrb_12_);}
					.flrb-st6{fill:url(#flrb_13_);}
					.flrb-st7{fill:url(#flrb_14_);}
					.flrb-st8{fill:url(#flrb_15_);}
					.flrb-st9{fill:url(#flrb_16_);}
					.flrb-st10{fill:url(#flrb_17_);}
					.flrb-st11{fill:#C7CFD1;}
					.flrb-st12{fill:url(#flrb_18_);}
					.flrb-st13{fill:url(#flrb_19_);}
					.flrb-st14{fill:url(#flrb_20_);}
					.flrb-st15{fill:url(#flrb_21_);}
					.flrb-st16{fill:#B6C2C6;}
					.flrb-st17{fill:#F4F6F6;}
					.flrb-st18{fill:url(#flrb_22_);}
					.flrb-st19{fill:#BCC8CB;}
					.flrb-st20{fill:url(#flrb_23_);}
					.flrb-st21{fill:url(#flrb_24_);}
					.flrb-st22{opacity:0.4;fill:#040000;enable-background:new    ;}
					.flrb-st23{fill:url(#flrb_26_);}
					.flrb-st24{fill:#EAEEF0;}
					.flrb-st25{fill:url(#flrb_27_);}
					.flrb-st26{fill:url(#flrb_28_);}
					.flrb-st27{fill:url(#flrb_30_);}
					.flrb-st28{fill:#FFFFFF;}
				
					.show {display:default;}
				    .hide {display:none;}
				    .f1 {display:default;}
				    .f2 {display:none;}
				    .f3 {display:none;}
				</style>
					
						<linearGradient id="flrb_9_" gradientUnits="userSpaceOnUse" x1="250.8" y1="25.9322" x2="250.8" y2="2.5355" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#040000;stop-opacity:0.3"/>
							<stop  offset="1" style="stop-color:#040000;stop-opacity:0"/>
						</linearGradient>
						<polygon id="flrb_93_" class="flrb-st0" points="455.9,375.8 44.3,375.8 7.3,448.5 494.3,448.5 		"/>
						<polygon id="flrb_68_" class="flrb-st1" points="42.5,235.7 14.9,295.9 14.9,280.1 42.5,216 		"/>
						<polygon id="flrb_69_" class="flrb-st2" points="42.5,235.7 14.9,295.9 31,292.9 58.6,232.6 		"/>
						<polygon id="flrb_72_" class="flrb-st1" points="42.5,371.4 14.9,431.7 14.9,415.9 42.5,351.8 		"/>
						<polygon id="flrb_71_" class="flrb-st2" points="42.5,371.4 14.9,431.7 31,428.6 56.3,371.4 		"/>
						<rect id="flrb_73_" x="42.5" y="256" class="flrb-st3" width="16.1" height="115.5"/>
						<polygon id="flrb_80_" class="flrb-st1" points="457.5,235.7 485.1,295.9 485.1,280.1 457.5,216 		"/>
						<polygon id="flrb_79_" class="flrb-st2" points="457.5,235.7 485.1,295.9 469,292.9 441.4,232.6 		"/>
						<polygon id="flrb_78_" class="flrb-st1" points="457.5,371.4 485.1,431.7 485.1,415.9 457.5,351.8 		"/>
						<polygon id="flrb_77_" class="flrb-st2" points="457.5,371.4 485.1,431.7 469,428.6 443.7,371.4 		"/>
						<rect id="flrb_76_" x="441.4" y="256" class="flrb-st3" width="16.1" height="115.5"/>
						
							<linearGradient id="flrb_10_" gradientUnits="userSpaceOnUse" x1="250.95" y1="38.5308" x2="250.95" y2="79.6401" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#556883"/>
							<stop  offset="1" style="stop-color:#121C25"/>
						</linearGradient>
						<polygon id="flrb_92_" class="flrb-st4" points="465.9,411.1 36,411.1 54.4,371.4 449.1,371.4 		"/>
						
							<linearGradient id="flrb_12_" gradientUnits="userSpaceOnUse" x1="252.25" y1="88.5116" x2="252.25" y2="178.5537" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#556883"/>
							<stop  offset="1" style="stop-color:#121C25"/>
						</linearGradient>
						<rect id="flrb_91_" x="72.7" y="273.8" class="flrb-st5" width="359.1" height="86.9"/>
						
							<linearGradient id="flrb_13_" gradientUnits="userSpaceOnUse" x1="270.8" y1="93.9" x2="341.4" y2="93.9" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#2D384E"/>
							<stop  offset="0.4286" style="stop-color:#556883"/>
							<stop  offset="1" style="stop-color:#121C25"/>
						</linearGradient>
						<path id="flrb_89_" class="flrb-st6" d="M306.1,319.5c-30.5,0.1-35.3-11.7-35.3-11.7v83.3c0,3.8,3.9,7.3,10.9,9.7
							c6.5,2.3,15.2,3.6,24.4,3.6c9.2,0,17.9-1.3,24.4-3.6c7-2.5,10.9-5.9,10.9-9.7v-83.3C341.4,307.9,335.2,319.4,306.1,319.5z"/>
						
							<linearGradient id="flrb_14_" gradientUnits="userSpaceOnUse" x1="306.1" y1="128.6201" x2="306.1" y2="156.164" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#556883"/>
							<stop  offset="1" style="stop-color:#121C25"/>
						</linearGradient>
						<path id="flrb_87_" class="flrb-st7" d="M306.1,321.2c-9.2,0-17.9-1.3-24.4-3.6c-7-2.5-10.9-5.9-10.9-9.7c0-3.8,3.9-7.3,10.9-9.7
							c6.5-2.3,15.2-3.6,24.4-3.6c9.2,0,17.9,1.3,24.4,3.6c7,2.5,10.9,5.9,10.9,9.7c0,3.8-3.9,7.3-10.9,9.7
							C323.9,319.9,315.3,321.2,306.1,321.2z"/>
						
							<linearGradient id="flrb_15_" gradientUnits="userSpaceOnUse" x1="63.2" y1="93.9" x2="133.8" y2="93.9" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#2D384E"/>
							<stop  offset="0.4286" style="stop-color:#556883"/>
							<stop  offset="1" style="stop-color:#121C25"/>
						</linearGradient>
						<path id="flrb_97_" class="flrb-st8" d="M98.5,319.5c-30.5,0.1-35.3-11.7-35.3-11.7v83.3c0,3.8,3.9,7.3,10.9,9.7
							c6.5,2.3,15.2,3.6,24.4,3.6s17.9-1.3,24.4-3.6c7-2.5,10.9-5.9,10.9-9.7v-83.3C133.8,307.9,127.7,319.4,98.5,319.5z"/>
						
							<linearGradient id="flrb_16_" gradientUnits="userSpaceOnUse" x1="98.5" y1="128.6201" x2="98.5" y2="156.164" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#556883"/>
							<stop  offset="1" style="stop-color:#121C25"/>
						</linearGradient>
						<path id="flrb_94_" class="flrb-st9" d="M98.5,321.2c-9.2,0-17.9-1.3-24.4-3.6c-7-2.5-10.9-5.9-10.9-9.7c0-3.8,3.9-7.3,10.9-9.7
							c6.5-2.3,15.2-3.6,24.4-3.6s17.9,1.3,24.4,3.6c7,2.5,10.9,5.9,10.9,9.7c0,3.8-3.9,7.3-10.9,9.7
							C116.3,319.9,107.7,321.2,98.5,321.2z"/>
						
							<linearGradient id="flrb_17_" gradientUnits="userSpaceOnUse" x1="392.25" y1="35.8474" x2="392.25" y2="131.3358" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0.129" style="stop-color:#E8EDF0"/>
							<stop  offset="0.7312" style="stop-color:#D8DFE2"/>
						</linearGradient>
						<rect id="flrb_84_" x="335" y="313.7" class="flrb-st10" width="114.5" height="101.2"/>
						<polygon id="flrb_86_" class="flrb-st11" points="436.4,288.8 322,288.8 335,313.7 449.5,313.7 		"/>
						<polygon id="flrb_85_" class="flrb-st1" points="335,414.9 322,390 322,288.8 335,313.7 		"/>
						
							<linearGradient id="flrb_18_" gradientUnits="userSpaceOnUse" x1="122.1" y1="117.5042" x2="122.1" y2="44.9949" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#488D93"/>
							<stop  offset="7.784726e-002" style="stop-color:#58989E"/>
							<stop  offset="0.224" style="stop-color:#71A8AE"/>
							<stop  offset="0.358" style="stop-color:#80B2B9"/>
							<stop  offset="0.4677" style="stop-color:#85B5BC"/>
							<stop  offset="0.5706" style="stop-color:#7CADB4"/>
							<stop  offset="0.7377" style="stop-color:#64999D"/>
							<stop  offset="0.947" style="stop-color:#3D7779"/>
							<stop  offset="1" style="stop-color:#326E6F"/>
						</linearGradient>
						<ellipse id="flrb_81_" class="flrb-st12" cx="122.1" cy="371.4" rx="16.4" ry="39.7"/>
						
							<linearGradient id="flrb_19_" gradientUnits="userSpaceOnUse" x1="287.4" y1="115.8351" x2="287.4" y2="41.5097" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#488D93"/>
							<stop  offset="7.784726e-002" style="stop-color:#58989E"/>
							<stop  offset="0.224" style="stop-color:#71A8AE"/>
							<stop  offset="0.358" style="stop-color:#80B2B9"/>
							<stop  offset="0.4677" style="stop-color:#85B5BC"/>
							<stop  offset="0.5706" style="stop-color:#7CADB4"/>
							<stop  offset="0.7377" style="stop-color:#64999D"/>
							<stop  offset="0.947" style="stop-color:#3D7779"/>
							<stop  offset="1" style="stop-color:#326E6F"/>
						</linearGradient>
						<ellipse id="flrb_82_" class="flrb-st13" cx="287.4" cy="371.4" rx="16.7" ry="39.7"/>
						
							<linearGradient id="flrb_20_" gradientUnits="userSpaceOnUse" x1="205.4" y1="117.6213" x2="205.4" y2="39.3709" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#488D93"/>
							<stop  offset="7.784726e-002" style="stop-color:#58989E"/>
							<stop  offset="0.224" style="stop-color:#71A8AE"/>
							<stop  offset="0.358" style="stop-color:#80B2B9"/>
							<stop  offset="0.4677" style="stop-color:#85B5BC"/>
							<stop  offset="0.5706" style="stop-color:#7CADB4"/>
							<stop  offset="0.7377" style="stop-color:#64999D"/>
							<stop  offset="0.947" style="stop-color:#3D7779"/>
							<stop  offset="1" style="stop-color:#326E6F"/>
						</linearGradient>
						<path id="flrb_83_" class="flrb-st14" d="M122.1,411.1h165.3c0,0,7.5-9.3,7.5-40.6s-7.5-38.7-7.5-38.7H122.1c0,0-6.2,13-6.2,39.7
							C115.9,398.1,122.1,411.1,122.1,411.1z"/>
						
							<linearGradient id="flrb_21_" gradientUnits="userSpaceOnUse" x1="250" y1="204.4068" x2="250" y2="312.7146" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#585F65"/>
							<stop  offset="1" style="stop-color:#2A2F35"/>
						</linearGradient>
						<polygon id="flrb_67_" class="flrb-st15" points="485.1,106.8 14.9,106.8 44.1,258.2 455.9,258.2 		"/>
						<rect id="flrb_70_" x="44.3" y="257.9" class="flrb-st16" width="411.7" height="8.3"/>
						<rect id="flrb_37_" x="14.9" y="410.3" class="flrb-st17" width="470.1" height="21.4"/>
						<rect id="flrb_38_" x="14.9" y="280.1" class="flrb-st17" width="470.1" height="17.4"/>
						<rect id="flrb_40_" x="14.9" y="121.3" class="flrb-st17" width="470.1" height="21.4"/>
						
							<linearGradient id="flrb_22_" gradientUnits="userSpaceOnUse" x1="250" y1="0.8597" x2="250" y2="319.04" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0.129" style="stop-color:#E8EDF0"/>
							<stop  offset="0.7312" style="stop-color:#D8DFE2"/>
						</linearGradient>
						<rect id="flrb_63_" x="241.2" y="125.5" class="flrb-st18" width="17.6" height="324.5"/>
						<rect id="flrb_42_" x="14.9" y="121.3" class="flrb-st19" width="470.1" height="8.4"/>
						
							<linearGradient id="flrb_23_" gradientUnits="userSpaceOnUse" x1="250" y1="342.4576" x2="250" y2="439.3491" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#F1F4F5"/>
							<stop  offset="1" style="stop-color:#A8B2B7"/>
						</linearGradient>
						<polygon id="flrb_36_" class="flrb-st20" points="500,106.8 0,106.8 38.7,34.3 461.3,34.3 		"/>
						
							<linearGradient id="flrb_24_" gradientUnits="userSpaceOnUse" x1="250" y1="-0.8538" x2="250" y2="341.4361" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0.129" style="stop-color:#E8EDF0"/>
							<stop  offset="0.7312" style="stop-color:#D8DFE2"/>
						</linearGradient>
						<polygon id="flrb_65_" class="flrb-st21" points="0,106.8 0,450 19.9,450 19.9,127.4 480.1,127.4 480.1,450 500,450 500,106.8 		"/>
						<path id="flrb_39_" class="flrb-st22" d="M142,91.1c-19.5,0-37.8-2.7-51.7-7.5c-15.5-5.4-24.1-13.3-24.1-22.2s8.5-16.8,24.1-22.2
							c13.9-4.9,32.3-7.5,51.7-7.5s37.8,2.7,51.7,7.5c15.5,5.4,24.1,13.3,24.1,22.2s-8.5,16.8-24.1,22.2C179.9,88.5,161.5,91.1,142,91.1
							z"/>
						<path id="flrb_61_" class="flrb-st22" d="M358,91.1c-19.5,0-37.8-2.7-51.7-7.5c-15.5-5.4-24.1-13.3-24.1-22.2s8.5-16.8,24.1-22.2
							c13.9-4.9,32.3-7.5,51.7-7.5c19.5,0,37.8,2.7,51.7,7.5c15.5,5.4,24.1,13.3,24.1,22.2s-8.5,16.8-24.1,22.2
							C395.8,88.5,377.4,91.1,358,91.1z"/>
						
							<linearGradient id="flrb_26_" gradientUnits="userSpaceOnUse" x1="68.1" y1="391.9" x2="215.9" y2="391.9" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#BCC6C9"/>
							<stop  offset="0.4286" style="stop-color:#E8EDF0"/>
							<stop  offset="1" style="stop-color:#A8B2B7"/>
						</linearGradient>
						<path id="flrb_11_" class="flrb-st23" d="M142,52.3c-63.9,0.2-73.9-24.5-73.9-24.5v32.8c0,8,8.1,15.3,22.8,20.4
							c13.7,4.8,31.8,7.4,51.1,7.4s37.4-2.6,51.1-7.4c14.7-5.1,22.8-12.4,22.8-20.4V27.8C215.9,27.8,203.1,52.1,142,52.3z"/>
						<path id="flrb_3_" class="flrb-st24" d="M142,55.7c-19.3,0-37.4-2.6-51.1-7.4c-14.7-5.1-22.8-12.4-22.8-20.4s8.1-15.3,22.8-20.4
							C104.6,2.6,122.8,0,142,0s37.4,2.6,51.1,7.4c14.7,5.1,22.8,12.4,22.8,20.4s-8.1,15.3-22.8,20.4C179.4,53,161.3,55.7,142,55.7z
							 M142,6.1c-39.9,0-67.8,11.5-67.8,21.7S102,49.5,142,49.5s67.8-11.5,67.8-21.7S182,6.1,142,6.1z"/>
						
							<linearGradient id="flrb_27_" gradientUnits="userSpaceOnUse" x1="72.7" y1="422.15" x2="211.3" y2="422.15" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#424749"/>
							<stop  offset="0.6022" style="stop-color:#808D91"/>
							<stop  offset="1" style="stop-color:#555C5F"/>
						</linearGradient>
						<path id="flrb_29_" class="flrb-st25" d="M142,51.1c-37.6,0-69.3-10.7-69.3-23.3S104.5,4.6,142,4.6s69.3,10.7,69.3,23.3
							S179.6,51.1,142,51.1z"/>
						
							<linearGradient id="flrb_28_" gradientUnits="userSpaceOnUse" x1="284.1" y1="391.9" x2="431.9" y2="391.9" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#BCC6C9"/>
							<stop  offset="0.4286" style="stop-color:#E8EDF0"/>
							<stop  offset="1" style="stop-color:#A8B2B7"/>
						</linearGradient>
						<path id="flrb_34_" class="flrb-st26" d="M358,52.3c-63.9,0.2-73.9-24.5-73.9-24.5v32.8c0,8,8.1,15.3,22.8,20.4
							c13.7,4.8,31.8,7.4,51.1,7.4c19.3,0,37.4-2.6,51.1-7.4c14.7-5.1,22.8-12.4,22.8-20.4V27.8C431.9,27.8,419.1,52.1,358,52.3z"/>
						<path id="flrb_31_" class="flrb-st24" d="M358,55.7c-19.3,0-37.4-2.6-51.1-7.4c-14.7-5.1-22.8-12.4-22.8-20.4s8.1-15.3,22.8-20.4
							C320.6,2.6,338.7,0,358,0s37.4,2.6,51.1,7.4c14.7,5.1,22.8,12.4,22.8,20.4s-8.1,15.3-22.8,20.4C395.4,53,377.2,55.7,358,55.7z
							 M358,6.1c-39.9,0-67.8,11.5-67.8,21.7S318,49.6,358,49.6s67.8-11.5,67.8-21.7S397.9,6.1,358,6.1z"/>
						
							<linearGradient id="flrb_30_" gradientUnits="userSpaceOnUse" x1="288.7" y1="422.15" x2="427.3" y2="422.15" gradientTransform="matrix(1 0 0 -1 0 450)">
							<stop  offset="0" style="stop-color:#424749"/>
							<stop  offset="0.6022" style="stop-color:#808D91"/>
							<stop  offset="1" style="stop-color:#555C5F"/>
						</linearGradient>
						<path id="flrb_25_" class="flrb-st27" d="M358,51.1c-37.6,0-69.3-10.7-69.3-23.3S320.4,4.6,358,4.6s69.3,10.7,69.3,23.3
							S395.5,51.1,358,51.1z"/>
				
				
					<g  class="f1">
						<g >
							<path id="flrb_2_" class="flrb-st28" d="M141.2,28.6c-4.7-1.4-13.4-4.5-16.7-9.7c-2.3-3.6,0.2-7.1,2.4-9.2
								c-5.2,0.5-10.4,1.2-15.3,2.2c-2.2,0.4-4.1,0.9-6,1.4c-0.1,1.5,0.5,4.6,6.2,8.5c7.7,5.3,22.3,7.8,26.8,8.4
								c-4,1.6-13.2,4.6-28.4,5.7c-10.6,0.8-20.7-0.1-26.9-0.9c1.4,1.8,3.3,3.5,6.2,5.3c1.3,0.7,2.7,1.5,4.1,2.1
								c4.2,0,13.3-0.2,24.8-2.1c15.5-2.6,22.5-7.7,24.4-9.2c4.7,1.4,13.4,4.5,16.7,9.7c2.3,3.6-0.2,7.1-2.4,9.2
								c5.2-0.5,10.4-1.2,15.3-2.2c2.2-0.4,4.1-0.9,6-1.4c0.1-1.5-0.5-4.6-6.2-8.5c-7.7-5.3-22.3-7.8-26.8-8.4c4-1.6,13.2-4.6,28.4-5.7
								c10.6-0.8,20.7,0.1,26.9,0.9c-1.4-1.8-3.3-3.5-6.2-5.3c-1.3-0.7-2.7-1.5-4.1-2.1c-4.2,0-13.3,0.2-24.8,2.1
								C150.2,22.1,143.2,27.1,141.2,28.6z			">
							</path>
						</g>
						<g>
							<path id="flrb_7_" class="flrb-st28" d="M359.8,28.7c-2-2-5-6.2-0.3-11.3c3.3-3.5,10.6-6.1,15.5-7.6C369.8,9.3,364.3,9,358.6,9
								c-2.5,0-4.9,0.1-7.3,0.2c-2.2,1.2-6.2,4-7,8.4c-1.1,5.9,8,10.5,10.9,11.9c-5.7,0.7-18.1,1.7-33,0.1c-10.3-1.2-17.8-3.6-22-5.4
								c-1.5,1.8-2.3,3.6-2.3,5.7c0,0.9,0.2,1.7,0.5,2.5c3.6,0.8,11.8,2.1,24.6,2.4c17.3,0.4,30.7-2.8,34.5-3.7c2,2,5,6.2,0.3,11.3
								c-3.3,3.5-10.6,6.1-15.5,7.6c5.2,0.5,10.7,0.8,16.4,0.8c2.5,0,4.9-0.1,7.3-0.2c2.2-1.2,6.2-4,7-8.4c1.1-5.9-8-10.5-10.9-11.9
								c5.7-0.7,18.1-1.7,33-0.1c10.3,1.2,17.8,3.6,22,5.4c1.5-1.8,2.3-3.6,2.3-5.7c0-0.9-0.2-1.7-0.5-2.5c-3.6-0.8-11.8-2.1-24.6-2.4
								C377.1,24.5,363.7,27.7,359.8,28.7z			">
							</path>
						</g>
					</g>
					<g  class="f2">
						<g>
							<path id="flrb_4_" class="flrb-st28" d="M139.5,28.9c-6.1-0.4-18.2-1.6-28.7-5.6c-7.3-2.8-10.2-6.2-11.4-8.4
								c-3.8,1.3-7.3,2.8-10.1,4.5c-1.3,0.7-2.2,1.5-3.2,2.3c2,1.3,7.1,3.9,17.8,6.3c14.4,3.3,30.6,2.9,35.4,2.7
								c-1.2,2-4.7,6.2-16.3,9.9c-8.1,2.5-18.1,3.5-24.5,3.9c3.8,1.4,8,2.5,13.1,3.5c2.2,0.4,4.5,0.8,6.5,1.1c3.7-0.7,11.2-2.5,18.3-6.1
								c9.6-5,8.3-10.5,7.8-12.1c6.1,0.4,18.2,1.6,28.7,5.6c7.3,2.8,10.2,6.2,11.4,8.4c3.8-1.3,7.3-2.8,10.1-4.5
								c1.3-0.7,2.2-1.5,3.2-2.3c-2-1.3-7.1-3.9-17.8-6.3c-14.4-3.3-30.6-2.9-35.4-2.7c1.2-2,4.7-6.2,16.3-9.9
								c8.1-2.5,18.1-3.5,24.5-3.9c-3.8-1.4-8-2.5-13.1-3.5c-2.2-0.4-4.5-0.8-6.5-1.1c-3.7,0.7-11.2,2.5-18.3,6.1
								C137.8,21.7,139,27.3,139.5,28.9z">
							</path>
						</g>
						<g>
							<path id="flrb_6_" class="flrb-st28" d="M357.9,28.6c-4.7-1.4-13.4-4.5-16.7-9.7c-2.3-3.6,0.2-7.1,2.4-9.2
								c-5.2,0.5-10.4,1.2-15.3,2.2c-2.2,0.4-4.1,0.9-6,1.4c-0.1,1.5,0.5,4.6,6.2,8.5c7.7,5.3,22.3,7.8,26.8,8.4
								c-4,1.6-13.2,4.6-28.4,5.7c-10.6,0.8-20.7-0.1-26.9-0.9c1.4,1.8,3.3,3.5,6.2,5.3c1.3,0.7,2.7,1.5,4.1,2.1
								c4.2,0,13.3-0.2,24.8-2.1c15.5-2.6,22.5-7.7,24.4-9.2c4.7,1.4,13.4,4.5,16.7,9.7c2.3,3.6-0.2,7.1-2.4,9.2
								c5.2-0.5,10.4-1.2,15.3-2.2c2.2-0.4,4.1-0.9,6-1.4c0.1-1.5-0.5-4.6-6.2-8.5c-7.7-5.3-22.3-7.8-26.8-8.4c4-1.6,13.2-4.6,28.4-5.7
								c10.6-0.8,20.7,0.1,26.9,0.9c-1.4-1.8-3.3-3.5-6.2-5.3c-1.3-0.7-2.7-1.5-4.1-2.1c-4.2,0-13.3,0.2-24.8,2.1
								C366.9,22.1,359.9,27.1,357.9,28.6z			">
							</path>
						</g>
					</g>
					<g  class="f3">
						<g>
							<path id="flrb_1_" class="flrb-st28" d="M143.1,28.7c-2-2-5-6.2-0.3-11.3c3.3-3.5,10.6-6.1,15.5-7.6C153.1,9.3,147.6,9,141.9,9
								c-2.5,0-4.9,0.1-7.3,0.2c-2.2,1.2-6.2,4-7,8.4c-1.1,5.9,8,10.5,10.9,11.9c-5.7,0.7-18.1,1.7-33,0.1c-10.3-1.2-17.8-3.6-22-5.4
								c-1.5,1.8-2.3,3.6-2.3,5.7c0,0.9,0.2,1.7,0.5,2.5c3.6,0.8,11.8,2.1,24.6,2.4c17.3,0.4,30.7-2.8,34.5-3.7c2,2,5,6.2,0.3,11.3
								c-3.3,3.5-10.6,6.1-15.5,7.6c5.2,0.5,10.7,0.8,16.4,0.8c2.5,0,4.9-0.1,7.3-0.2c2.2-1.2,6.2-4,7-8.4c1.1-5.9-8-10.5-10.9-11.9
								c5.7-0.7,18.1-1.7,33-0.1c10.3,1.2,17.8,3.6,22,5.4c1.5-1.8,2.3-3.6,2.3-5.7c0-0.9-0.2-1.7-0.5-2.5c-3.6-0.8-11.8-2.1-24.6-2.4
								C160.4,24.5,147,27.7,143.1,28.7z			">
							</path>
						</g>
						<g>
							<path id="flrb_5_" class="flrb-st28" d="M356.2,28.9c-6.1-0.4-18.2-1.6-28.7-5.6c-7.3-2.8-10.2-6.2-11.4-8.4
								c-3.8,1.3-7.3,2.8-10.1,4.5c-1.3,0.7-2.2,1.5-3.2,2.3c2,1.3,7.1,3.9,17.8,6.3c14.4,3.3,30.6,2.9,35.4,2.7
								c-1.2,2-4.7,6.2-16.3,9.9c-8.1,2.5-18.1,3.5-24.5,3.9c3.8,1.4,8,2.5,13.1,3.5c2.2,0.4,4.5,0.8,6.5,1.1c3.7-0.7,11.2-2.5,18.3-6.1
								c9.6-5,8.3-10.5,7.8-12.1c6.1,0.4,18.2,1.6,28.7,5.6c7.3,2.8,10.2,6.2,11.4,8.4c3.8-1.3,7.3-2.8,10.1-4.5
								c1.3-0.7,2.2-1.5,3.2-2.3c-2-1.3-7.1-3.9-17.8-6.3c-14.4-3.3-30.6-2.9-35.4-2.7c1.2-2,4.7-6.2,16.3-9.9
								c8.1-2.5,18.1-3.5,24.5-3.9c-3.8-1.4-8-2.5-13.1-3.5c-2.2-0.4-4.5-0.8-6.5-1.1c-3.7,0.7-11.2,2.5-18.3,6.1
								C354.5,21.7,355.8,27.3,356.2,28.9z			">
							</path>
						</g>
					</g>				
				</svg> `;
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

export default Flrb;

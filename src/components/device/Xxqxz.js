import Spirit from '@/core/Spirit.js'

/**
 * 小型气象站
 */
class Xxqxz extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.title = "小型气象站";
	    this.className = "Xxqxz";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4;
	    this.minWidth = 20;
	    this.minHeight = 20;
	    this.linkage = true;
	    this.zIndex = 2;
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
		      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 135 178" style="enable-background:new 0 0 135 178;" xml:space="preserve">
				<style type="text/css">
					.xxqxz-st0{fill:url(#xxqxz_2_);}
					.xxqxz-st1{fill:#C2C8CE;}
					.xxqxz-st2{fill:#A5AEB5;}
					.xxqxz-st3{fill:#DFE3E8;}
					.xxqxz-st4{fill:url(#xxqxz_3_);}
					.xxqxz-st5{fill:url(#xxqxz_4_);}
					.xxqxz-st6{fill:#AEB4BA;}
					.xxqxz-st7{fill:url(#xxqxz_5_);}
					.xxqxz-st8{fill:url(#xxqxz_6_);}
					.xxqxz-st9{fill:url(#xxqxz_7_);}
					.xxqxz-st10{fill:url(#xxqxz_8_);}
					.xxqxz-st11{fill:#222528;}
					.xxqxz-st12{fill:url(#xxqxz_9_);}
					.xxqxz-st13{fill:#161819;}
					.xxqxz-st14{fill:url(#xxqxz_10_);}
					.xxqxz-st15{fill:url(#xxqxz_11_);}
					.xxqxz-st16{fill:url(#xxqxz_12_);}
					.xxqxz-st17{fill:url(#xxqxz_13_);}
					.xxqxz-st18{fill:url(#xxqxz_14_);}
					.xxqxz-st19{fill:url(#xxqxz_15_);}
					.xxqxz-st20{fill:url(#xxqxz_16_);}
					.xxqxz-st21{fill:url(#xxqxz_17_);}
					.xxqxz-st22{fill:url(#xxqxz_18_);}
					.xxqxz-st23{fill:url(#xxqxz_19_);}
					.xxqxz-st24{opacity:0.21;}
					.xxqxz-st25{fill:url(#xxqxz_20_);}
					.xxqxz-st26{fill:url(#xxqxz_21_);}
					.xxqxz-st27{fill:url(#xxqxz_22_);}
					.xxqxz-st28{fill:#EAEEF0;}
					.xxqxz-st29{fill:url(#xxqxz_23_);}
					.xxqxz-st30{fill:url(#xxqxz_24_);}
					.xxqxz-st31{fill:url(#xxqxz_25_);}
					.xxqxz-st32{opacity:0.2;fill:#FFFFFF;}
				</style>
				<linearGradient id="xxqxz_2_" gradientUnits="userSpaceOnUse" x1="57.323" y1="166.4613" x2="69.8215" y2="166.4613">
					<stop  offset="0" style="stop-color:#272C33"/>
					<stop  offset="0.4813" style="stop-color:#5A6066"/>
					<stop  offset="1" style="stop-color:#272C33"/>
				</linearGradient>
				<path id="xxqxz_1154_" class="xxqxz-st0" d="M57.3,155.3v19.3c0,1.7,2.8,3,6.2,3c3.5,0,6.2-1.3,6.2-3v-19.3H57.3z"/>
				<path id="xxqxz_1184_" d="M53.5,82.8c0-0.1-0.7-2.9-5-5.5c-4.5-2.7-9.6-1.4-9.7-1.4L38,73c0.3-0.1,6.4-1.6,12,1.7
					c5.6,3.4,6.4,7.4,6.4,7.5L53.5,82.8z"/>
				<polygon id="xxqxz_1138_" class="xxqxz-st1" points="44.6,73.6 57.2,65.1 83.1,71.1 68.7,83.6 "/>
				<polygon id="xxqxz_1155_" class="xxqxz-st2" points="83.1,157.9 69.8,166.5 64.3,125 69.8,79.7 83.1,71.1 "/>
				<polygon id="xxqxz_1137_" class="xxqxz-st3" points="69.8,166.5 44.6,160.3 44.6,73.6 69.8,79.7 "/>
				<g id="xxqxz_1118_">
					<linearGradient id="xxqxz_3_" gradientUnits="userSpaceOnUse" x1="47.6995" y1="71.3456" x2="79.445" y2="71.3456">
						<stop  offset="0" style="stop-color:#83878E"/>
						<stop  offset="0.4813" style="stop-color:#D9DDE2"/>
						<stop  offset="1" style="stop-color:#83878E"/>
					</linearGradient>
					<path id="xxqxz_1117_" class="xxqxz-st4" d="M47.7,66.7v1.7c0,4.2,7.1,7.6,15.9,7.6c8.8,0,15.9-3.4,15.9-7.6v-1.7H47.7z"/>
					<linearGradient id="xxqxz_4_" gradientUnits="userSpaceOnUse" x1="47.6995" y1="66.695" x2="79.445" y2="66.695">
						<stop  offset="0" style="stop-color:#ACB1B9"/>
						<stop  offset="0.4813" style="stop-color:#FFFFFF"/>
						<stop  offset="1" style="stop-color:#A9AEB7"/>
					</linearGradient>
					<ellipse id="xxqxz_1116_" class="xxqxz-st5" cx="63.6" cy="66.7" rx="15.9" ry="7.6"/>
					<ellipse id="xxqxz_1115_" class="xxqxz-st6" cx="63.6" cy="63.2" rx="7.7" ry="3.7"/>
				</g>
				<g id="xxqxz_1119_">
					<linearGradient id="xxqxz_5_" gradientUnits="userSpaceOnUse" x1="47.6995" y1="65.1416" x2="79.445" y2="65.1416">
						<stop  offset="0" style="stop-color:#83878E"/>
						<stop  offset="0.4813" style="stop-color:#D9DDE2"/>
						<stop  offset="1" style="stop-color:#83878E"/>
					</linearGradient>
					<path id="xxqxz_1122_" class="xxqxz-st7" d="M47.7,60.5v1.7c0,4.2,7.1,7.6,15.9,7.6c8.8,0,15.9-3.4,15.9-7.6v-1.7H47.7z"/>
					<linearGradient id="xxqxz_6_" gradientUnits="userSpaceOnUse" x1="47.6995" y1="60.4909" x2="79.445" y2="60.4909">
						<stop  offset="0" style="stop-color:#ACB1B9"/>
						<stop  offset="0.4813" style="stop-color:#FFFFFF"/>
						<stop  offset="1" style="stop-color:#A9AEB7"/>
					</linearGradient>
					<ellipse id="xxqxz_1121_" class="xxqxz-st8" cx="63.6" cy="60.5" rx="15.9" ry="7.6"/>
					<ellipse id="xxqxz_1120_" class="xxqxz-st6" cx="63.6" cy="57" rx="7.7" ry="3.7"/>
				</g>
				<g id="xxqxz_1123_">
					<linearGradient id="xxqxz_7_" gradientUnits="userSpaceOnUse" x1="47.6995" y1="58.9375" x2="79.445" y2="58.9375">
						<stop  offset="0" style="stop-color:#83878E"/>
						<stop  offset="0.4813" style="stop-color:#D9DDE2"/>
						<stop  offset="1" style="stop-color:#83878E"/>
					</linearGradient>
					<path id="xxqxz_1126_" class="xxqxz-st9" d="M47.7,54.3V56c0,4.2,7.1,7.6,15.9,7.6c8.8,0,15.9-3.4,15.9-7.6v-1.7H47.7z"/>
					<linearGradient id="xxqxz_8_" gradientUnits="userSpaceOnUse" x1="47.6995" y1="54.2869" x2="79.445" y2="54.2869">
						<stop  offset="0" style="stop-color:#ACB1B9"/>
						<stop  offset="0.4813" style="stop-color:#FFFFFF"/>
						<stop  offset="1" style="stop-color:#A9AEB7"/>
					</linearGradient>
					<ellipse id="xxqxz_1125_" class="xxqxz-st10" cx="63.6" cy="54.3" rx="15.9" ry="7.6"/>
					<ellipse id="xxqxz_1124_" class="xxqxz-st6" cx="63.6" cy="50.8" rx="7.7" ry="3.7"/>
				</g>
				<path id="xxqxz_1130_" class="xxqxz-st11" d="M47.4,35.8l-2.7,5.6H19.8c-1.1,0-2-0.8-2.2-1.9L10.5,2c-0.2-1.1,0.6-2,1.7-2h12.6
					c1.2,0,2.3,0.6,2.9,1.6L46.7,34L47.4,35.8z"/>
				<linearGradient id="xxqxz_9_" gradientUnits="userSpaceOnUse" x1="332.8799" y1="70.502" x2="346.9735" y2="70.502" gradientTransform="matrix(4.489659e-011 -1 1 4.489659e-011 35.7224 375.6266)">
					<stop  offset="0" style="stop-color:#272C33"/>
					<stop  offset="0.4813" style="stop-color:#5A6066"/>
					<stop  offset="1" style="stop-color:#272C33"/>
				</linearGradient>
				<path id="xxqxz_1132_" class="xxqxz-st12" d="M100.4,42.7h8.2c1.9,0,3.4-3.2,3.4-7c0-3.9-1.5-7-3.4-7h-8.2V42.7z"/>
				<ellipse id="xxqxz_1131_" class="xxqxz-st13" cx="100.4" cy="35.7" rx="3.4" ry="7"/>
				<linearGradient id="xxqxz_10_" gradientUnits="userSpaceOnUse" x1="28.9559" y1="43.4202" x2="28.9559" y2="2.0168">
					<stop  offset="0" style="stop-color:#5A6066"/>
					<stop  offset="1" style="stop-color:#272C33"/>
				</linearGradient>
				<path id="xxqxz_1129_" class="xxqxz-st14" d="M47.4,37.8l-2.7,5.6H19.8c-1.1,0-2-0.8-2.2-1.9L10.5,4c-0.2-1.1,0.6-2,1.7-2h12.6
					c1.2,0,2.3,0.6,2.9,1.6L46.7,36L47.4,37.8z"/>
				<linearGradient id="xxqxz_11_" gradientUnits="userSpaceOnUse" x1="94.637" y1="31.6221" x2="94.637" y2="24.6133">
					<stop  offset="0" style="stop-color:#5A6066"/>
					<stop  offset="1" style="stop-color:#272C33"/>
				</linearGradient>
				<path id="xxqxz_1134_" class="xxqxz-st15" d="M89.6,32.8c0,0-3.6-7.4-0.8-10.5c3.7-4,9.3-3.9,11.7-1.3c3,3.2-0.9,5.3-3.8,7.1
					c-2.9,1.8-1.5,4.7-1.5,4.7H89.6z"/>
				<path id="xxqxz_1135_" class="xxqxz-st13" d="M89.8,37.6c0,0-2.2,2.1-3.1,2.6c-0.9,0.5-3,0.6-1.9,1.9c1.1,1.3,5.5,1.3,7.4,0.9
					c1.9-0.4,2.4-4.7,2.4-4.7L91,37.2L89.8,37.6z"/>
				<linearGradient id="xxqxz_12_" gradientUnits="userSpaceOnUse" x1="58.4082" y1="44.4697" x2="68.7363" y2="44.4697">
					<stop  offset="0" style="stop-color:#272C33"/>
					<stop  offset="0.4813" style="stop-color:#5A6066"/>
					<stop  offset="1" style="stop-color:#272C33"/>
				</linearGradient>
				<path id="xxqxz_1128_" class="xxqxz-st16" d="M58.4,36.8v13c0,1.4,2.3,2.5,5.2,2.5c2.9,0,5.2-1.1,5.2-2.5v-13H58.4z"/>
				<linearGradient id="xxqxz_13_" gradientUnits="userSpaceOnUse" x1="65.9423" y1="40.2226" x2="65.9423" y2="31.1773">
					<stop  offset="0" style="stop-color:#272C33"/>
					<stop  offset="0.4813" style="stop-color:#5A6066"/>
					<stop  offset="1" style="stop-color:#272C33"/>
				</linearGradient>
				<path id="xxqxz_1127_" class="xxqxz-st17" d="M100.3,40.2H45c0,0-14.7-0.6-14.7-4.5c0-3.7,14.7-4.5,14.7-4.5h55.2c0,0,1.3,0.9,1.3,4.5
					C101.6,39.8,100.3,40.2,100.3,40.2z"/>
				<linearGradient id="xxqxz_14_" gradientUnits="userSpaceOnUse" x1="272.8353" y1="279.5746" x2="272.8353" y2="272.2315" gradientTransform="matrix(-1 0 -0.2953 -1 448.7408 319.6769)">
					<stop  offset="0" style="stop-color:#5A6066"/>
					<stop  offset="1" style="stop-color:#272C33"/>
				</linearGradient>
				<path id="xxqxz_1133_" class="xxqxz-st18" d="M97.7,38.9c0,0,6.2,7.8,4.5,11c-2.2,4.2-7.9,4.1-11.2,1.4c-4.1-3.3-0.9-5.6,1.3-7.5
					c2.2-1.9-0.2-5-0.2-5H97.7z"/>
				<linearGradient id="xxqxz_15_" gradientUnits="userSpaceOnUse" x1="394.3733" y1="124.7287" x2="402.2293" y2="124.7287" gradientTransform="matrix(-1 0.2685 0 1 454.1385 -78.4171)">
					<stop  offset="0" style="stop-color:#282C2D"/>
					<stop  offset="1" style="stop-color:#555C5F"/>
				</linearGradient>
				<polygon id="xxqxz_1183_" class="xxqxz-st19" points="59.8,148.9 59.8,159.5 51.9,157.6 51.9,147 "/>
				<polygon id="xxqxz_1182_" class="xxqxz-st2" points="52.5,147.1 52.5,157 59.8,158.8 59.8,159.5 51.9,157.6 51.9,147 "/>
				<path id="xxqxz_1191_" d="M59.8,153.5c-1.4-1.2-3.4-2.1-6-2c-1.9,0.1-4.3,1.1-7.1,2.2c-4.2,1.8-9,3.8-12.9,2.8
					c-3.2-0.9-3.1-4.7-3.1-4.9l-3-0.1c-0.1,2.2,0.9,6.8,5.3,8c1,0.3,2,0.4,3,0.4c4,0,8.3-1.8,11.8-3.3c2.4-1,4.6-2,6-2
					c4.3-0.1,5.8,3.8,5.9,4l0,0V153.5z"/>
				<linearGradient id="xxqxz_16_" gradientUnits="userSpaceOnUse" x1="16.1909" y1="83.7078" x2="41.3418" y2="83.7078">
					<stop  offset="0" style="stop-color:#BCC6C9"/>
					<stop  offset="0.4286" style="stop-color:#FFFFFF"/>
					<stop  offset="1" style="stop-color:#A8B2B7"/>
				</linearGradient>
				<path id="xxqxz_1180_" class="xxqxz-st20" d="M16.2,79.7v4.2c0,2.5,6.5,3.8,12.6,3.8s12.5-1.3,12.5-3.8v-4.2H16.2z"/>
				<path id="xxqxz_1177_" class="xxqxz-st1" d="M28.8,83.6c-6.1,0-12.6-1.4-12.6-3.9c0-2.6,6.5-3.9,12.6-3.9s12.6,1.4,12.6,3.9
					C41.3,82.2,34.9,83.6,28.8,83.6z"/>
				<linearGradient id="xxqxz_17_" gradientUnits="userSpaceOnUse" x1="16.1909" y1="61.2972" x2="41.3418" y2="61.2972">
					<stop  offset="0" style="stop-color:#BCC6C9"/>
					<stop  offset="0.4286" style="stop-color:#FFFFFF"/>
					<stop  offset="1" style="stop-color:#A8B2B7"/>
				</linearGradient>
				<path id="xxqxz_1176_" class="xxqxz-st21" d="M16.2,57.2v4.2c0,2.5,6.5,3.8,12.6,3.8s12.5-1.3,12.5-3.8v-4.2H16.2z"/>
				<linearGradient id="xxqxz_18_" gradientUnits="userSpaceOnUse" x1="17.3765" y1="72.2361" x2="40.1562" y2="72.2361">
					<stop  offset="0" style="stop-color:#272C33"/>
					<stop  offset="0.4759" style="stop-color:#5A6066"/>
					<stop  offset="0.4856" style="stop-color:#737A80"/>
					<stop  offset="0.4966" style="stop-color:#888F96"/>
					<stop  offset="0.5088" style="stop-color:#979EA5"/>
					<stop  offset="0.5228" style="stop-color:#9FA7AE"/>
					<stop  offset="0.543" style="stop-color:#A2AAB1"/>
					<stop  offset="0.5513" style="stop-color:#9DA5AC"/>
					<stop  offset="0.5613" style="stop-color:#8F969D"/>
					<stop  offset="0.5722" style="stop-color:#777E85"/>
					<stop  offset="0.5837" style="stop-color:#565C63"/>
					<stop  offset="0.5956" style="stop-color:#2C3138"/>
					<stop  offset="0.5968" style="stop-color:#272C33"/>
					<stop  offset="0.5973" style="stop-color:#30353C"/>
					<stop  offset="0.5996" style="stop-color:#4F545B"/>
					<stop  offset="0.6021" style="stop-color:#697077"/>
					<stop  offset="0.605" style="stop-color:#7F868D"/>
					<stop  offset="0.6083" style="stop-color:#8F979E"/>
					<stop  offset="0.6125" style="stop-color:#9BA2A9"/>
					<stop  offset="0.6183" style="stop-color:#A1A9B0"/>
					<stop  offset="0.6344" style="stop-color:#A3ABB2"/>
					<stop  offset="0.6957" style="stop-color:#A1A9B0"/>
					<stop  offset="0.7178" style="stop-color:#9BA2A9"/>
					<stop  offset="0.7336" style="stop-color:#8F979E"/>
					<stop  offset="0.7463" style="stop-color:#7F868D"/>
					<stop  offset="0.7571" style="stop-color:#6A7177"/>
					<stop  offset="0.7634" style="stop-color:#5A6066"/>
					<stop  offset="1" style="stop-color:#272C33"/>
				</linearGradient>
				<path id="xxqxz_1178_" class="xxqxz-st22" d="M17.4,62V79c0,2.3,5.9,3.5,11.4,3.5s11.4-1.2,11.4-3.5V62H17.4z"/>
				<linearGradient id="xxqxz_19_" gradientUnits="userSpaceOnUse" x1="16.1909" y1="61.2972" x2="41.3418" y2="61.2972">
					<stop  offset="0" style="stop-color:#BCC6C9"/>
					<stop  offset="0.4286" style="stop-color:#FFFFFF"/>
					<stop  offset="1" style="stop-color:#A8B2B7"/>
				</linearGradient>
				<path id="xxqxz_1173_" class="xxqxz-st23" d="M16.2,57.2v4.2c0,2.5,6.5,3.8,12.6,3.8s12.5-1.3,12.5-3.8v-4.2H16.2z"/>
				<path id="xxqxz_1147_" class="xxqxz-st1" d="M28.8,61.2c-6.1,0-12.6-1.4-12.6-3.9c0-2.6,6.5-3.9,12.6-3.9s12.6,1.4,12.6,3.9
					C41.3,59.8,34.9,61.2,28.8,61.2z"/>
				<g id="xxqxz_1181_">
					<ellipse id="xxqxz_1189_" class="xxqxz-st24" cx="28.8" cy="57.2" rx="4.5" ry="1.7"/>
					<linearGradient id="xxqxz_20_" gradientUnits="userSpaceOnUse" x1="24.6485" y1="55.8328" x2="32.8842" y2="55.8328">
						<stop  offset="0" style="stop-color:#ACB1B9"/>
						<stop  offset="0.4813" style="stop-color:#FFFFFF"/>
						<stop  offset="1" style="stop-color:#A9AEB7"/>
					</linearGradient>
					<path id="xxqxz_1188_" class="xxqxz-st25" d="M24.6,53.3v3.5c0,0.9,1.8,1.6,4.1,1.6c2.3,0,4.1-0.7,4.1-1.6v-3.5H24.6z"/>
					<ellipse id="xxqxz_1187_" class="xxqxz-st6" cx="28.8" cy="53.3" rx="4.1" ry="1.6"/>
				</g>
				<g id="xxqxz_1146_">
					<linearGradient id="xxqxz_21_" gradientUnits="userSpaceOnUse" x1="3.5769" y1="132.0273" x2="54.9306" y2="132.0273">
						<stop  offset="0" style="stop-color:#272C33"/>
						<stop  offset="0.4813" style="stop-color:#5A6066"/>
						<stop  offset="1" style="stop-color:#272C33"/>
					</linearGradient>
					<path id="xxqxz_1149_" class="xxqxz-st26" d="M29.3,117.9c-22.2,0.1-25.7-8.1-25.7-8.1v35.2c0,2.6,2.8,5,7.9,6.7
						c4.8,1.6,11.1,2.5,17.8,2.5s13-0.9,17.8-2.5c5.1-1.7,7.9-4.1,7.9-6.7v-35.2C54.9,109.8,50.5,117.8,29.3,117.9z"/>
					<linearGradient id="xxqxz_22_" gradientUnits="userSpaceOnUse" x1="-1.353128e-007" y1="121.9415" x2="58.5075" y2="121.9415">
						<stop  offset="0" style="stop-color:#BCC6C9"/>
						<stop  offset="0.4286" style="stop-color:#E8EDF0"/>
						<stop  offset="1" style="stop-color:#A8B2B7"/>
					</linearGradient>
					<path id="xxqxz_1144_" class="xxqxz-st27" d="M29.3,105C4,105.1,0,95.3,0,95.3v42.2c0,3.2,3.2,6,9,8.1c5.4,1.9,12.6,2.9,20.2,2.9
						s14.8-1,20.2-2.9c5.8-2,9-4.9,9-8.1V95.3C58.5,95.3,53.4,104.9,29.3,105z"/>
					<path id="xxqxz_1141_" class="xxqxz-st28" d="M29.3,106.3c-7.6,0-14.8-1-20.2-2.9c-5.8-2-9-4.9-9-8.1s3.2-6,9-8.1
						c5.4-1.9,12.6-2.9,20.2-2.9s14.8,1,20.2,2.9c5.8,2,9,4.9,9,8.1s-3.2,6-9,8.1C44.1,105.3,36.9,106.3,29.3,106.3z M29.3,86.7
						c-15.8,0-26.8,4.5-26.8,8.6s11,8.6,26.8,8.6s26.8-4.5,26.8-8.6S45.1,86.7,29.3,86.7z"/>
					<linearGradient id="xxqxz_23_" gradientUnits="userSpaceOnUse" x1="1.8189" y1="95.311" x2="56.6886" y2="95.311">
						<stop  offset="0" style="stop-color:#424749"/>
						<stop  offset="0.6022" style="stop-color:#808D91"/>
						<stop  offset="1" style="stop-color:#555C5F"/>
					</linearGradient>
					<path id="xxqxz_1139_" class="xxqxz-st29" d="M29.3,104.5c-14.9,0-27.4-4.2-27.4-9.2s12.6-9.2,27.4-9.2s27.4,4.2,27.4,9.2
						S44.1,104.5,29.3,104.5z"/>
					<path id="xxqxz_1152_" class="xxqxz-st1" d="M58.5,103.6c0,0-0.2,2.1-0.5,2.7c-0.8,1.6-1.9,2.3-1.9,2.3l4.7-0.6l1.9-3.4L58.5,103.6z"/>
					<polygon id="xxqxz_1148_" class="xxqxz-st2" points="62.7,108.6 56.1,112.7 56.1,108.6 62.7,104.5 	"/>
					<path id="xxqxz_1153_" class="xxqxz-st1" d="M58.5,126.6c0,0-0.2,2.1-0.5,2.7c-0.8,1.6-1.9,2.3-1.9,2.3l4.7-0.6l1.9-3.4L58.5,126.6z"/>
					<polygon id="xxqxz_1151_" class="xxqxz-st2" points="62.7,131.6 56.1,135.7 56.1,131.6 62.7,127.5 	"/>
				</g>
				<linearGradient id="xxqxz_24_" gradientUnits="userSpaceOnUse" x1="73.6958" y1="128.9928" x2="80.2243" y2="128.9928">
					<stop  offset="0" style="stop-color:#282C2D"/>
					<stop  offset="1" style="stop-color:#555C5F"/>
				</linearGradient>
				<polygon id="xxqxz_1136_" class="xxqxz-st30" points="73.7,119.3 73.7,142.2 80.2,138.7 80.2,115.8 "/>
				<polygon id="xxqxz_1174_" class="xxqxz-st3" points="79.6,116.1 79.6,138.2 73.7,141.4 73.7,142.2 80.2,138.7 80.2,115.8 "/>
				<path id="xxqxz_1175_" d="M92.2,141.6c-4.7,0.2-5.5-0.9-7.7-3.7c-0.5-0.7-1.2-1.5-1.9-2.3c-3-3.4-6.4-3.8-8.8-3.2v3.1
					c1.3-0.5,3.9-0.9,6.6,2.1c0.7,0.8,1.3,1.5,1.8,2.2c2.2,2.8,3.9,4.9,9.2,4.9c0.3,0,0.7,0,1,0L92.2,141.6z"/>
				<polygon id="xxqxz_1157_" class="xxqxz-st1" points="74.3,101 74.3,110 86.5,107.4 85.1,99.1 "/>
				<polygon id="xxqxz_1159_" class="xxqxz-st3" points="76.5,89.3 73.4,90 94.6,156.1 98,158 91.3,124.5 "/>
				<polygon id="xxqxz_1158_" class="xxqxz-st1" points="110.4,63.7 73.4,90 76.3,90.5 99.7,75.8 113,64.6 "/>
				<polygon id="xxqxz_1156_" class="xxqxz-st2" points="134.7,131.4 98,158 76.3,90.5 113,64.6 "/>
				<linearGradient id="xxqxz_25_" gradientUnits="userSpaceOnUse" x1="110.5143" y1="149.4418" x2="55.6433" y2="109.2177" gradientTransform="matrix(0.9855 0.1699 -0.1699 0.9855 44.5465 -31.8658)">
					<stop  offset="0" style="stop-color:#1B3560"/>
					<stop  offset="1" style="stop-color:#1C578C"/>
				</linearGradient>
				<polygon id="xxqxz_1160_" class="xxqxz-st31" points="132.2,130.3 99.5,153.6 79,91.5 111.8,68.2 "/>
				<path id="xxqxz_1164_" class="xxqxz-st32" d="M125.2,127l4.8-3.4l-0.2-0.5l-4.8,3.4l-2.5-7.5l4.9-3.2l-0.2-0.5l-4.9,3.2l-2.5-7.6l4.8-3.4
					l-0.2-0.5l-4.9,3.4l-2.5-7.5l4.8-3.5l-0.2-0.5l-4.8,3.5l-2.4-7.3l4.9-3.4l-0.2-0.5l-4.9,3.4l-2.5-7.5l4.9-3.3l-0.2-0.5l-4.9,3.3
					l-2.6-7.9l4.9-3.5l-0.2-0.5l-4.9,3.5l-2.1-6.4l-0.4,0.3l2.1,6.4l-4.9,3.5l-2.1-6.4l-0.4,0.3l2.1,6.4l-5,3.6l-2.1-6.5l-0.4,0.3
					l2.1,6.5l-5.2,3.7l-2.1-6.5L90,83.7l2.1,6.5L86.8,94l-2.1-6.5l-0.4,0.3l2.2,6.5L81.2,98l0.2,0.5l5.2-3.7l2.4,7.2l-5.2,3.5l0.2,0.5
					l5.2-3.5l2.6,7.8l-5.2,3.6l0.2,0.5l5.2-3.6l2.7,8l-5.2,3.8l0.2,0.5l5.2-3.8l2.3,7l-5.2,3.7l0.2,0.5l5.2-3.7l2.3,6.9l-5.3,3.5
					l0.2,0.5l5.3-3.5l2.7,8.3l-5.3,3.7l0.2,0.5l5.3-3.7l2.3,6.9l0.4-0.3l-2.3-6.9l5.4-3.8l2.3,6.8l0.4-0.3l-2.3-6.8l5.2-3.7l2.3,6.8
					l0.4-0.3l-2.3-6.8l5-3.5l2.2,6.8l0.4-0.3l-2.2-6.8l5-3.5l2.2,6.7l0.4-0.3L125.2,127z M121.9,118.8l-5,3.3l-2.5-7.4l5-3.5
					L121.9,118.8z M106.3,110.2l-2.5-7.6l5-3.5l2.5,7.5L106.3,110.2z M111.4,107.1l2.5,7.4l-5,3.5l-2.4-7.3L111.4,107.1z M103.6,102.1
					l-2.5-7.6l5-3.4l2.5,7.6L103.6,102.1z M103.2,102.4l-5.2,3.6l-2.6-7.7l5.3-3.6L103.2,102.4z M103.3,102.9l2.5,7.6l-5.2,3.8l-2.6-7.8
					L103.3,102.9z M106,111l2.4,7.3l-5.2,3.7l-2.4-7.2L106,111z M108.6,118.8l2.4,7.3l-5.3,3.5l-2.4-7.1L108.6,118.8z M109,118.5l5-3.5
					l2.5,7.4l-5.1,3.4L109,118.5z M119.3,110.7l-5,3.5l-2.5-7.4l4.9-3.6L119.3,110.7z M116.6,102.7l-4.9,3.6l-2.5-7.5l5-3.4L116.6,102.7
					z M114,94.9l-5,3.4l-2.5-7.6l5-3.4L114,94.9z M108.7,79l2.6,7.9l-5,3.4l-2.6-7.8L108.7,79z M103.4,82.8l2.6,7.7l-5,3.4l-2.5-7.6
					L103.4,82.8z M98,86.6l2.5,7.6l-5.3,3.6l-2.5-7.4L98,86.6z M86.9,94.5l5.4-3.8l2.5,7.4l-5.4,3.7L86.9,94.5z M89.5,102.2l5.4-3.7
					l2.6,7.7l-5.4,3.7L89.5,102.2z M92.2,110.5l5.4-3.7l2.6,7.8l-5.4,3.9L92.2,110.5z M95.1,119l5.4-3.9l2.4,7.2l-5.4,3.8L95.1,119z
					 M97.6,126.5l5.4-3.8l2.4,7.1l-5.5,3.6L97.6,126.5z M102.8,142.2l-2.7-8.3l5.5-3.6l2.7,8.1L102.8,142.2z M108.6,138.1l-2.7-8.1
					l5.3-3.5l2.6,7.9L108.6,138.1z M114.2,134.1l-2.6-7.9l5.1-3.4l2.6,7.7L114.2,134.1z M119.7,130.3l-2.6-7.7l5-3.3l2.5,7.6
					L119.7,130.3z"/>
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

export default Xxqxz;

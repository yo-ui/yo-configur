import Spirit from '@/core/Spirit.js'

/**
 * 变压器
 */
class Byq extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.title = "变压器";
	    this.className = "Byq";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4; 
	    this.minWidth = 50;
	    this.minHeight = 50;
	    this.linkage = true;
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index:3;border:1px solid transparent">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 90 97" style="enable-background:new 0 0 90 97;" xml:space="preserve">
				<style type="text/css">
					.byq-st0{fill:#A3A3AE;}
					.byq-st1{fill:#8E8E98;}
					.byq-st2{fill:#71151A;}
					.byq-st3{fill:#9E2A27;}
					.byq-st4{fill:#B83D3C;}
					.byq-st5{fill:url(#byq_2_);}
					.byq-st6{fill:#992623;}
					.byq-st7{fill:url(#byq_3_);}
					.byq-st8{fill:url(#byq_4_);}
					.byq-st9{fill:url(#byq_5_);}
					.byq-st10{fill:url(#byq_6_);}
					.byq-st11{fill:url(#byq_7_);}
					.byq-st12{fill:url(#byq_8_);}
					.byq-st13{fill:url(#byq_9_);}
					.byq-st14{fill:url(#byq_10_);}
					.byq-st15{fill:url(#byq_11_);}
					.byq-st16{fill:url(#byq_12_);}
					.byq-st17{fill:url(#byq_13_);}
					.byq-st18{fill:url(#byq_14_);}
					.byq-st19{fill:url(#byq_15_);}
					.byq-st20{fill:url(#byq_16_);}
					.byq-st21{fill:url(#byq_17_);}
					.byq-st22{fill:url(#byq_18_);}
					.byq-st23{fill:url(#byq_19_);}
					.byq-st24{fill:url(#byq_20_);}
					.byq-st25{opacity:0.3;fill:#040000;}
					.byq-st26{fill:url(#byq_21_);}
					.byq-st27{fill:url(#byq_22_);}
					.byq-st28{fill:url(#byq_23_);}
					.byq-st29{fill:url(#byq_24_);}
					.byq-st30{fill:url(#byq_25_);}
					.byq-st31{fill:url(#byq_26_);}
					.byq-st32{fill:url(#byq_27_);}
					.byq-st33{fill:url(#byq_28_);}
					.byq-st34{fill:url(#byq_29_);}
					.byq-st35{fill:url(#byq_30_);}
					.byq-st36{fill:url(#byq_31_);}
					.byq-st37{fill:url(#byq_32_);}
					.byq-st38{fill:url(#byq_33_);}
					.byq-st39{fill:url(#byq_34_);}
					.byq-st40{fill:url(#byq_35_);}
					.byq-st41{fill:url(#byq_36_);}
					.byq-st42{fill:url(#byq_37_);}
					.byq-st43{fill:url(#byq_38_);}
					.byq-st44{fill:url(#byq_39_);}
					.byq-st45{fill:url(#byq_40_);}
					.byq-st46{fill:url(#byq_41_);}
					.byq-st47{fill:url(#byq_42_);}
					.byq-st48{fill:url(#byq_43_);}
					.byq-st49{fill:#841B1F;}
					.byq-st50{opacity:0.3;fill:#300303;}
					.byq-st51{fill:url(#byq_44_);}
					.byq-st52{fill:url(#byq_45_);}
					.byq-st53{fill:url(#byq_46_);}
				</style>
				<g id="XMLID_279_">
					<g id="XMLID_278_">
						<rect id="XMLID_277_" x="0.2" y="95.1" class="byq-st0" width="89" height="1.5"/>
						<path id="XMLID_276_" class="byq-st1" d="M83.3,74.3H6.1c-0.9,0-1.6,0.6-1.8,1.5L0.2,95.1h89l-4.1-19.2C85,75,84.2,74.3,83.3,74.3z"/>
					</g>
					<g id="XMLID_271_">
						<polygon id="XMLID_275_" class="byq-st2" points="7.1,78 7.1,82.9 16.7,91.6 72.7,91.6 82.3,82.9 82.3,78 		"/>
						<polygon id="XMLID_274_" class="byq-st3" points="7.1,84.5 16.7,93.1 16.7,91.6 7.1,82.9 		"/>
						<polygon id="XMLID_273_" class="byq-st3" points="82.3,84.5 72.7,93.1 72.7,91.6 82.3,82.9 		"/>
						<rect id="XMLID_272_" x="16.7" y="91.6" class="byq-st4" width="56" height="1.6"/>
					</g>
					<g id="XMLID_266_">
						<polygon id="XMLID_270_" class="byq-st2" points="7.1,74.5 7.1,79.4 16.7,88.1 72.7,88.1 82.3,79.4 82.3,74.5 		"/>
						<polygon id="XMLID_269_" class="byq-st3" points="7.1,81 16.7,89.6 16.7,88.1 7.1,79.4 		"/>
						<polygon id="XMLID_268_" class="byq-st3" points="82.3,81 72.7,89.6 72.7,88.1 82.3,79.4 		"/>
						<rect id="XMLID_267_" x="16.7" y="88.1" class="st4" width="56" height="1.6"/>
					</g>
					<g id="XMLID_261_">
						<polygon id="XMLID_265_" class="byq-st2" points="7.1,71 7.1,75.9 16.7,84.6 72.7,84.6 82.3,75.9 82.3,71 		"/>
						<polygon id="XMLID_264_" class="byq-st3" points="7.1,77.5 16.7,86.1 16.7,84.6 7.1,75.9 		"/>
						<polygon id="XMLID_263_" class="byq-st3" points="82.3,77.5 72.7,86.1 72.7,84.6 82.3,75.9 		"/>
						<rect id="XMLID_262_" x="16.7" y="84.6" class="byq-st4" width="56" height="1.6"/>
					</g>
					<g id="XMLID_252_">
						<polygon id="XMLID_260_" class="byq-st2" points="7.1,67.5 7.1,72.4 16.7,81.1 72.7,81.1 82.3,72.4 82.3,67.5 		"/>
						<polygon id="XMLID_259_" class="byq-st3" points="7.1,74 16.7,82.6 16.7,81.1 7.1,72.4 		"/>
						<polygon id="XMLID_256_" class="byq-st3" points="82.3,74 72.7,82.6 72.7,81.1 82.3,72.4 		"/>
						<rect id="XMLID_253_" x="16.7" y="81.1" class="byq-st4" width="56" height="1.6"/>
					</g>
					<g id="XMLID_235_">
						<polygon id="XMLID_250_" class="byq-st2" points="7.1,64 7.1,68.9 16.7,77.6 72.7,77.6 82.3,68.9 82.3,64 		"/>
						<polygon id="XMLID_244_" class="byq-st3" points="7.1,70.5 16.7,79.1 16.7,77.6 7.1,68.9 		"/>
						<polygon id="XMLID_241_" class="byq-st3" points="82.3,70.5 72.7,79.1 72.7,77.6 82.3,68.9 		"/>
						<rect id="XMLID_238_" x="16.7" y="77.6" class="byq-st4" width="56" height="1.6"/>
					</g>
					<g id="XMLID_220_">
						<polygon id="XMLID_232_" class="byq-st2" points="7.1,60.5 7.1,65.4 16.7,74.1 72.7,74.1 82.3,65.4 82.3,60.5 		"/>
						<polygon id="XMLID_229_" class="byq-st3" points="7.1,67 16.7,75.6 16.7,74.1 7.1,65.4 		"/>
						<polygon id="XMLID_226_" class="byq-st3" points="82.3,67 72.7,75.6 72.7,74.1 82.3,65.4 		"/>
						<rect id="XMLID_223_" x="16.7" y="74.1" class="st4" width="56" height="1.6"/>
					</g>
					<g id="XMLID_215_">
						<polygon id="XMLID_214_" class="byq-st2" points="7.1,57 7.1,61.9 16.7,70.6 72.7,70.6 82.3,61.9 82.3,57 		"/>
						<polygon id="XMLID_205_" class="byq-st3" points="7.1,63.5 16.7,72.1 16.7,70.6 7.1,61.9 		"/>
						<polygon id="XMLID_208_" class="byq-st3" points="82.3,63.5 72.7,72.1 72.7,70.6 82.3,61.9 		"/>
						<rect id="XMLID_211_" x="16.7" y="70.6" class="byq-st4" width="56" height="1.6"/>
					</g>
					<rect id="XMLID_280_" x="30.2" y="82.1" class="byq-st4" width="28.2" height="10.5"/>
					<linearGradient id="byq_2_" gradientUnits="userSpaceOnUse" x1="44.3638" y1="85.0757" x2="44.3638" y2="91.7959">
						<stop  offset="0" style="stop-color:#3D0405"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<path id="XMLID_281_" class="byq-st5" d="M50.8,84.8H37.9c-1.7,0-3.1,1.2-3.1,2.7s1.4,2.7,3.1,2.7h12.8c1.7,0,3.1-1.2,3.1-2.7
						S52.5,84.8,50.8,84.8z"/>
					<polygon id="XMLID_247_" class="byq-st6" points="11.8,64 7.9,60.7 7.9,49.1 13.5,49.5 	"/>
					<polygon id="XMLID_248_" class="byq-st6" points="77.4,64 81.3,60.7 81.3,49.1 75.7,49.5 	"/>
					<linearGradient id="byq_3_" gradientUnits="userSpaceOnUse" x1="7.8171" y1="50.4568" x2="27.5806" y2="50.4568">
						<stop  offset="0" style="stop-color:#942B2B"/>
						<stop  offset="0.5348" style="stop-color:#E48282"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<path id="XMLID_213_" class="byq-st7" d="M7.8,47.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H7.8z"/>
					<linearGradient id="byq_4_" gradientUnits="userSpaceOnUse" x1="17.6989" y1="42.951" x2="17.6989" y2="51.1511">
						<stop  offset="0" style="stop-color:#691216"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<ellipse id="XMLID_212_" class="byq-st8" cx="17.7" cy="47.3" rx="9.9" ry="4.7"/>
					<linearGradient id="byq_5_" gradientUnits="userSpaceOnUse" x1="7.8171" y1="45.4565" x2="27.5806" y2="45.4565">
						<stop  offset="0" style="stop-color:#942B2B"/>
						<stop  offset="0.5348" style="stop-color:#E48282"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<path id="XMLID_210_" class="byq-st9" d="M7.8,42.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H7.8z"/>
					<linearGradient id="byq_6_" gradientUnits="userSpaceOnUse" x1="17.6989" y1="37.9506" x2="17.6989" y2="46.1507">
						<stop  offset="0" style="stop-color:#691216"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<ellipse id="XMLID_209_" class="byq-st10" cx="17.7" cy="42.3" rx="9.9" ry="4.7"/>
					<linearGradient id="byq_7_" gradientUnits="userSpaceOnUse" x1="7.8171" y1="40.4562" x2="27.5806" y2="40.4562">
						<stop  offset="0" style="stop-color:#942B2B"/>
						<stop  offset="0.5348" style="stop-color:#E48282"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<path id="XMLID_207_" class="byq-st11" d="M7.8,37.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H7.8z"/>
					<linearGradient id="byq_8_" gradientUnits="userSpaceOnUse" x1="17.6989" y1="32.9503" x2="17.6989" y2="41.1504">
						<stop  offset="0" style="stop-color:#691216"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<ellipse id="XMLID_206_" class="byq-st12" cx="17.7" cy="37.3" rx="9.9" ry="4.7"/>
					<linearGradient id="byq_9_" gradientUnits="userSpaceOnUse" x1="7.8171" y1="35.4559" x2="27.5806" y2="35.4559">
						<stop  offset="0" style="stop-color:#942B2B"/>
						<stop  offset="0.5348" style="stop-color:#E48282"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<path id="XMLID_204_" class="byq-st13" d="M7.8,32.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H7.8z"/>
					<linearGradient id="byq_10_" gradientUnits="userSpaceOnUse" x1="17.6989" y1="27.95" x2="17.6989" y2="36.1501">
						<stop  offset="0" style="stop-color:#691216"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<ellipse id="XMLID_203_" class="byq-st14" cx="17.7" cy="32.3" rx="9.9" ry="4.7"/>
					<linearGradient id="byq_11_" gradientUnits="userSpaceOnUse" x1="7.8171" y1="30.4556" x2="27.5806" y2="30.4556">
						<stop  offset="0" style="stop-color:#942B2B"/>
						<stop  offset="0.5348" style="stop-color:#E48282"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<path id="XMLID_201_" class="byq-st15" d="M7.8,27.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H7.8z"/>
					<linearGradient id="byq_12_" gradientUnits="userSpaceOnUse" x1="17.6989" y1="22.9497" x2="17.6989" y2="31.1498">
						<stop  offset="0" style="stop-color:#691216"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<ellipse id="XMLID_200_" class="byq-st16" cx="17.7" cy="27.3" rx="9.9" ry="4.7"/>
					<linearGradient id="byq_13_" gradientUnits="userSpaceOnUse" x1="7.8171" y1="25.4553" x2="27.5806" y2="25.4553">
						<stop  offset="0" style="stop-color:#942B2B"/>
						<stop  offset="0.5348" style="stop-color:#E48282"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<path id="XMLID_198_" class="byq-st17" d="M7.8,22.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H7.8z"/>
					<linearGradient id="byq_14_" gradientUnits="userSpaceOnUse" x1="17.6989" y1="17.9494" x2="17.6989" y2="26.1495">
						<stop  offset="0" style="stop-color:#691216"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<ellipse id="XMLID_197_" class="byq-st18" cx="17.7" cy="22.3" rx="9.9" ry="4.7"/>
					<linearGradient id="byq_15_" gradientUnits="userSpaceOnUse" x1="7.8171" y1="20.4549" x2="27.5806" y2="20.4549">
						<stop  offset="0" style="stop-color:#942B2B"/>
						<stop  offset="0.5348" style="stop-color:#E48282"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<path id="XMLID_195_" class="byq-st19" d="M7.8,17.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H7.8z"/>
					<linearGradient id="byq_16_" gradientUnits="userSpaceOnUse" x1="17.6989" y1="12.9491" x2="17.6989" y2="21.1492">
						<stop  offset="0" style="stop-color:#691216"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<ellipse id="XMLID_194_" class="byq-st20" cx="17.7" cy="17.3" rx="9.9" ry="4.7"/>
					<linearGradient id="byq_17_" gradientUnits="userSpaceOnUse" x1="7.8171" y1="15.4546" x2="27.5806" y2="15.4546">
						<stop  offset="0" style="stop-color:#942B2B"/>
						<stop  offset="0.5348" style="stop-color:#E48282"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<path id="XMLID_192_" class="byq-st21" d="M7.8,12.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H7.8z"/>
					<linearGradient id="byq_18_" gradientUnits="userSpaceOnUse" x1="17.6989" y1="7.9487" x2="17.6989" y2="16.1488">
						<stop  offset="0" style="stop-color:#691216"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<ellipse id="XMLID_191_" class="byq-st22" cx="17.7" cy="12.3" rx="9.9" ry="4.7"/>
					<linearGradient id="byq_19_" gradientUnits="userSpaceOnUse" x1="7.8171" y1="10.4543" x2="27.5806" y2="10.4543">
						<stop  offset="0" style="stop-color:#942B2B"/>
						<stop  offset="0.5348" style="stop-color:#E48282"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<path id="XMLID_189_" class="byq-st23" d="M7.8,7.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7V7.3H7.8z"/>
					<linearGradient id="byq_20_" gradientUnits="userSpaceOnUse" x1="17.6989" y1="2.9484" x2="17.6989" y2="11.1485">
						<stop  offset="0" style="stop-color:#691216"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<ellipse id="XMLID_188_" class="byq-st24" cx="17.7" cy="7.3" rx="9.9" ry="4.7"/>
					<path id="XMLID_186_" class="byq-st25" d="M17.7,9.1c-2.6,0-4.5-1.1-4.5-2.7s1.9-2.7,4.5-2.7s4.5,1.1,4.5,2.7S20.3,9.1,17.7,9.1z"/>
					<linearGradient id="byq_21_" gradientUnits="userSpaceOnUse" x1="14.2753" y1="4.7474" x2="21.1224" y2="4.7474">
						<stop  offset="0" style="stop-color:#ABB0B8"/>
						<stop  offset="0.4813" style="stop-color:#FFFFFF"/>
						<stop  offset="1" style="stop-color:#A9ADB6"/>
					</linearGradient>
					<path id="XMLID_184_" class="byq-st26" d="M14.3,1.6v4.6c0,0.9,1.5,1.6,3.4,1.6c1.9,0,3.4-0.7,3.4-1.6V1.6H14.3z"/>
					<linearGradient id="byq_22_" gradientUnits="userSpaceOnUse" x1="17.6989" y1="0.3144" x2="17.6989" y2="2.8772">
						<stop  offset="0" style="stop-color:#959AA2"/>
						<stop  offset="1" style="stop-color:#DADEE5"/>
					</linearGradient>
					<ellipse id="XMLID_183_" class="byq-st27" cx="17.7" cy="1.6" rx="3.4" ry="1.6"/>
					<linearGradient id="byq_23_" gradientUnits="userSpaceOnUse" x1="61.8205" y1="50.4568" x2="81.584" y2="50.4568">
						<stop  offset="0" style="stop-color:#942B2B"/>
						<stop  offset="0.5348" style="stop-color:#E48282"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<path id="XMLID_246_" class="byq-st28" d="M61.8,47.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H61.8z"/>
					<linearGradient id="byq_24_" gradientUnits="userSpaceOnUse" x1="71.7023" y1="42.951" x2="71.7023" y2="51.1511">
						<stop  offset="0" style="stop-color:#691216"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<ellipse id="XMLID_245_" class="byq-st29" cx="71.7" cy="47.3" rx="9.9" ry="4.7"/>
					<linearGradient id="byq_25_" gradientUnits="userSpaceOnUse" x1="61.8205" y1="45.4565" x2="81.584" y2="45.4565">
						<stop  offset="0" style="stop-color:#942B2B"/>
						<stop  offset="0.5348" style="stop-color:#E48282"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<path id="XMLID_243_" class="byq-st30" d="M61.8,42.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H61.8z"/>
					<linearGradient id="byq_26_" gradientUnits="userSpaceOnUse" x1="71.7023" y1="37.9506" x2="71.7023" y2="46.1507">
						<stop  offset="0" style="stop-color:#691216"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<ellipse id="XMLID_242_" class="byq-st31" cx="71.7" cy="42.3" rx="9.9" ry="4.7"/>
					<linearGradient id="byq_27_" gradientUnits="userSpaceOnUse" x1="61.8205" y1="40.4562" x2="81.584" y2="40.4562">
						<stop  offset="0" style="stop-color:#942B2B"/>
						<stop  offset="0.5348" style="stop-color:#E48282"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<path id="XMLID_240_" class="byq-st32" d="M61.8,37.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H61.8z"/>
					<linearGradient id="byq_28_" gradientUnits="userSpaceOnUse" x1="71.7023" y1="32.9503" x2="71.7023" y2="41.1504">
						<stop  offset="0" style="stop-color:#691216"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<ellipse id="XMLID_239_" class="byq-st33" cx="71.7" cy="37.3" rx="9.9" ry="4.7"/>
					<linearGradient id="byq_29_" gradientUnits="userSpaceOnUse" x1="61.8205" y1="35.4559" x2="81.584" y2="35.4559">
						<stop  offset="0" style="stop-color:#942B2B"/>
						<stop  offset="0.5348" style="stop-color:#E48282"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<path id="XMLID_237_" class="byq-st34" d="M61.8,32.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H61.8z"/>
					<linearGradient id="byq_30_" gradientUnits="userSpaceOnUse" x1="71.7023" y1="27.95" x2="71.7023" y2="36.1501">
						<stop  offset="0" style="stop-color:#691216"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<ellipse id="XMLID_236_" class="byq-st35" cx="71.7" cy="32.3" rx="9.9" ry="4.7"/>
					<linearGradient id="byq_31_" gradientUnits="userSpaceOnUse" x1="61.8205" y1="30.4556" x2="81.584" y2="30.4556">
						<stop  offset="0" style="stop-color:#942B2B"/>
						<stop  offset="0.5348" style="stop-color:#E48282"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<path id="XMLID_234_" class="byq-st36" d="M61.8,27.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H61.8z"/>
					<linearGradient id="byq_32_" gradientUnits="userSpaceOnUse" x1="71.7023" y1="22.9497" x2="71.7023" y2="31.1498">
						<stop  offset="0" style="stop-color:#691216"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<ellipse id="XMLID_233_" class="byq-st37" cx="71.7" cy="27.3" rx="9.9" ry="4.7"/>
					<linearGradient id="byq_33_" gradientUnits="userSpaceOnUse" x1="61.8205" y1="25.4553" x2="81.584" y2="25.4553">
						<stop  offset="0" style="stop-color:#942B2B"/>
						<stop  offset="0.5348" style="stop-color:#E48282"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<path id="XMLID_231_" class="byq-st38" d="M61.8,22.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H61.8z"/>
					<linearGradient id="byq_34_" gradientUnits="userSpaceOnUse" x1="71.7023" y1="17.9494" x2="71.7023" y2="26.1495">
						<stop  offset="0" style="stop-color:#691216"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<ellipse id="XMLID_230_" class="byq-st39" cx="71.7" cy="22.3" rx="9.9" ry="4.7"/>
					<linearGradient id="byq_35_" gradientUnits="userSpaceOnUse" x1="61.8205" y1="20.4549" x2="81.584" y2="20.4549">
						<stop  offset="0" style="stop-color:#942B2B"/>
						<stop  offset="0.5348" style="stop-color:#E48282"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<path id="XMLID_228_" class="byq-st40" d="M61.8,17.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H61.8z"/>
					<linearGradient id="byq_36_" gradientUnits="userSpaceOnUse" x1="71.7023" y1="12.9491" x2="71.7023" y2="21.1492">
						<stop  offset="0" style="stop-color:#691216"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<ellipse id="XMLID_227_" class="byq-st41" cx="71.7" cy="17.3" rx="9.9" ry="4.7"/>
					<linearGradient id="byq_37_" gradientUnits="userSpaceOnUse" x1="61.8205" y1="15.4546" x2="81.584" y2="15.4546">
						<stop  offset="0" style="stop-color:#942B2B"/>
						<stop  offset="0.5348" style="stop-color:#E48282"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<path id="XMLID_225_" class="byq-st42" d="M61.8,12.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H61.8z"/>
					<linearGradient id="byq_38_" gradientUnits="userSpaceOnUse" x1="71.7023" y1="7.9487" x2="71.7023" y2="16.1488">
						<stop  offset="0" style="stop-color:#691216"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<ellipse id="XMLID_224_" class="byq-st43" cx="71.7" cy="12.3" rx="9.9" ry="4.7"/>
					<linearGradient id="byq_39_" gradientUnits="userSpaceOnUse" x1="61.8205" y1="10.4543" x2="81.584" y2="10.4543">
						<stop  offset="0" style="stop-color:#942B2B"/>
						<stop  offset="0.5348" style="stop-color:#E48282"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<path id="XMLID_222_" class="byq-st44" d="M61.8,7.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7V7.3H61.8z"/>
					<linearGradient id="byq_40_" gradientUnits="userSpaceOnUse" x1="71.7023" y1="2.9484" x2="71.7023" y2="11.1485">
						<stop  offset="0" style="stop-color:#691216"/>
						<stop  offset="1" style="stop-color:#942B2B"/>
					</linearGradient>
					<ellipse id="XMLID_221_" class="byq-st45" cx="71.7" cy="7.3" rx="9.9" ry="4.7"/>
					<path id="XMLID_218_" class="st25" d="M71.7,9.1c-2.6,0-4.5-1.1-4.5-2.7s1.9-2.7,4.5-2.7s4.5,1.1,4.5,2.7S74.3,9.1,71.7,9.1z"/>
					<linearGradient id="byq_41_" gradientUnits="userSpaceOnUse" x1="68.2787" y1="4.7474" x2="75.1258" y2="4.7474">
						<stop  offset="0" style="stop-color:#ABB0B8"/>
						<stop  offset="0.4813" style="stop-color:#FFFFFF"/>
						<stop  offset="1" style="stop-color:#A9ADB6"/>
					</linearGradient>
					<path id="XMLID_217_" class="byq-st46" d="M68.3,1.6v4.6c0,0.9,1.5,1.6,3.4,1.6c1.9,0,3.4-0.7,3.4-1.6V1.6H68.3z"/>
					<linearGradient id="byq_42_" gradientUnits="userSpaceOnUse" x1="71.7023" y1="0.3144" x2="71.7023" y2="2.8772">
						<stop  offset="0" style="stop-color:#959AA2"/>
						<stop  offset="1" style="stop-color:#DADEE5"/>
					</linearGradient>
					<ellipse id="XMLID_216_" class="byq-st47" cx="71.7" cy="1.6" rx="3.4" ry="1.6"/>
					<linearGradient id="byq_43_" gradientUnits="userSpaceOnUse" x1="44.7819" y1="27.2485" x2="44.7819" y2="66.884">
						<stop  offset="0" style="stop-color:#7B2A2A"/>
						<stop  offset="0.1979" style="stop-color:#E48282"/>
						<stop  offset="0.3102" style="stop-color:#C05251"/>
						<stop  offset="1" style="stop-color:#A83324"/>
					</linearGradient>
					<path id="XMLID_190_" class="byq-st48" d="M77.6,52.7c0,0-0.5,0.2-3.3-2.1c-2.8-2.2-3.7-3.7-6.3-14.6c-2-8.3-6.1-9.1-6.1-9.1H27.7
						c0,0-4.2,0.8-6.1,9.1c-2.6,10.9-3.5,12.3-6.3,14.6c-2.8,2.2-3.3,2.1-3.3,2.1V64h10l1.8,5.1H66l1.8-5.1h9.8V52.7z"/>
					<polygon id="XMLID_202_" class="byq-st49" points="21.8,64 23.6,44 23.6,69.1 	"/>
					<polygon id="XMLID_199_" class="byq-st49" points="67.8,64 66,44 66,69.1 	"/>
					<g id="XMLID_169_">
						<polygon id="XMLID_251_" class="byq-st50" points="34,56.1 32.1,56.1 30.1,26.9 36,26.9 		"/>
						<linearGradient id="byq_44_" gradientUnits="userSpaceOnUse" x1="33.0171" y1="25.3805" x2="33.0171" y2="62.5216">
							<stop  offset="0" style="stop-color:#7B2A2A"/>
							<stop  offset="0.1979" style="stop-color:#E48282"/>
							<stop  offset="0.3102" style="stop-color:#C05251"/>
							<stop  offset="1" style="stop-color:#A83324"/>
						</linearGradient>
						<rect id="XMLID_249_" x="31.9" y="25.9" class="byq-st51" width="2.3" height="31.2"/>
					</g>
					<g id="XMLID_193_">
						<polygon id="XMLID_255_" class="byq-st50" points="46,56.1 44.1,56.1 42.1,26.9 48,26.9 		"/>
						<linearGradient id="byq_45_" gradientUnits="userSpaceOnUse" x1="45.0179" y1="25.3805" x2="45.0179" y2="62.5216">
							<stop  offset="0" style="stop-color:#7B2A2A"/>
							<stop  offset="0.1979" style="stop-color:#E48282"/>
							<stop  offset="0.3102" style="stop-color:#C05251"/>
							<stop  offset="1" style="stop-color:#A83324"/>
						</linearGradient>
						<rect id="XMLID_254_" x="43.9" y="25.9" class="byq-st52" width="2.3" height="31.2"/>
					</g>
					<g id="XMLID_196_">
						<polygon id="XMLID_258_" class="byq-st50" points="58,56.1 56.1,56.1 54.1,26.9 60,26.9 		"/>
						<linearGradient id="byq_46_" gradientUnits="userSpaceOnUse" x1="57.0187" y1="25.3805" x2="57.0187" y2="62.5216">
							<stop  offset="0" style="stop-color:#7B2A2A"/>
							<stop  offset="0.1979" style="stop-color:#E48282"/>
							<stop  offset="0.3102" style="stop-color:#C05251"/>
							<stop  offset="1" style="stop-color:#A83324"/>
						</linearGradient>
						<rect id="XMLID_257_" x="55.9" y="25.9" class="byq-st53" width="2.3" height="31.2"/>
					</g>
				</g>
				</svg>
			</div>`);
	}

	toJson() {
		let json = {
			title:this.title,
			className:this.className,
			moveType:this.moveType,
			linkage:this.linkage,
			minWidth:this.minWidth,
			minHeight:this.minHeight
		};
		return Object.assign(super.toJson(),json);
	}
}

export default Byq;

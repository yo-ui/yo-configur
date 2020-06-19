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
	    this.config = {bindData: {organizId:'',deviceId:'',devicePoint:''}};
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
               viewBox="0 0 281 260" style="enable-background:new 0 0 281 260;" xml:space="preserve">
            <style type="text/css">
              .st0{fill:url(#SVGID_1_);}
              .st1{fill:url(#SVGID_2_);}
              .st2{fill:url(#SVGID_3_);}
              .st3{fill:#204C8B;}
              .st4{fill:#7AACE2;}
              .st5{opacity:0.6;fill:#BBDFFF;}
              .st6{opacity:0.8;fill:#BBDFFF;}
              .st7{fill:url(#SVGID_4_);}
              .st8{fill:url(#SVGID_5_);}
              .st9{fill:url(#SVGID_6_);}
              .st10{fill:url(#SVGID_7_);}
              .st11{fill:url(#SVGID_8_);}
              .st12{fill:url(#SVGID_9_);}
              .st13{fill:url(#SVGID_10_);}
              .st14{fill:url(#SVGID_11_);}
              .st15{fill:url(#SVGID_12_);}
              .st16{fill:url(#SVGID_13_);}
              .st17{fill:url(#SVGID_14_);}
              .st18{fill:url(#SVGID_15_);}
              .st19{fill:url(#SVGID_16_);}
              .st20{fill:url(#SVGID_17_);}
              .st21{fill:url(#SVGID_18_);}
              .st22{fill:url(#SVGID_19_);}
              .st23{fill:url(#SVGID_20_);}
              .st24{fill:url(#SVGID_21_);}
              .st25{fill:url(#SVGID_22_);}
              .st26{fill:url(#SVGID_23_);}
              .st27{fill:url(#SVGID_24_);}
              .st28{fill:url(#SVGID_25_);}
              .st29{fill:url(#SVGID_26_);}
              .st30{fill:url(#SVGID_27_);}
              .st31{fill:url(#SVGID_28_);}
              .st32{fill:url(#SVGID_29_);}
              .st33{fill:url(#SVGID_30_);}
              .st34{fill:url(#SVGID_31_);}
              .st35{fill:url(#SVGID_32_);}
              .st36{fill:url(#SVGID_33_);}
              .st37{fill:url(#SVGID_34_);}
              .st38{fill:url(#SVGID_35_);}
              .st39{fill:url(#SVGID_36_);}
              .st40{fill:url(#SVGID_37_);}
              .st41{fill:url(#SVGID_38_);}
              .st42{fill:url(#SVGID_39_);}
              .st43{fill:url(#SVGID_40_);}
              .st44{fill:url(#SVGID_41_);}
              .st45{fill:url(#SVGID_42_);}
              .st46{fill:url(#SVGID_43_);}
              .st47{fill:url(#SVGID_44_);}
              .st48{fill:url(#SVGID_45_);}
              .st49{fill:url(#SVGID_46_);}
              .st50{fill:url(#SVGID_47_);}
              .st51{fill:url(#SVGID_48_);}
              .st52{fill:url(#SVGID_49_);}
              .st53{fill:url(#SVGID_50_);}
              .st54{fill:url(#SVGID_51_);}
              .st55{fill:url(#SVGID_52_);}
              .st56{fill:url(#SVGID_53_);}
              .st57{fill:url(#SVGID_54_);}
              .st58{fill:url(#SVGID_55_);}
              .st59{fill:url(#SVGID_56_);}
              .st60{fill:url(#SVGID_57_);}
              .st61{fill:url(#SVGID_58_);}
              .st62{fill:url(#SVGID_59_);}
              .st63{fill:url(#SVGID_60_);}
              .st64{fill:url(#SVGID_61_);}
              .st65{fill:url(#SVGID_62_);}
              .st66{fill:url(#SVGID_63_);}
              .st67{fill:url(#SVGID_64_);}
              .st68{fill:url(#SVGID_65_);}
              .st69{opacity:0.7;fill:#353535;}
              .st70{fill:url(#SVGID_66_);}
              .st71{fill:url(#SVGID_67_);}
              .st72{fill:url(#SVGID_68_);}
              .st73{fill:url(#SVGID_69_);}
              .st74{fill:#CECECE;}
              .st75{fill:url(#SVGID_70_);}
              .st76{fill:url(#SVGID_71_);}
              .st77{fill:url(#SVGID_72_);}
              .st78{fill:url(#SVGID_73_);}
              .st79{fill:url(#SVGID_74_);}
              .st80{fill:url(#SVGID_75_);}
              .st81{fill:url(#SVGID_76_);}
              .st82{fill:url(#SVGID_77_);}
              .st83{fill:url(#SVGID_78_);}
              .st84{fill:url(#SVGID_79_);}
              .st85{fill:url(#SVGID_80_);}
              .st86{fill:url(#SVGID_81_);}
              .st87{fill:url(#SVGID_82_);}
              .st88{fill:url(#SVGID_83_);}
              .st89{fill:url(#SVGID_84_);}
              .st90{fill:url(#SVGID_85_);}
              .st91{fill:url(#SVGID_86_);}
              .st92{fill:url(#SVGID_87_);}
              .st93{fill:url(#SVGID_88_);}
              .st94{fill:url(#SVGID_89_);}
              .st95{fill:url(#SVGID_90_);}
              .st96{fill:url(#SVGID_91_);}
              .st97{fill:url(#SVGID_92_);}
            </style>
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="755.3279" y1="86.6934" x2="755.3279" y2="100.1045" gradientTransform="matrix(-1 0 0 1 759.2192 0)">
              <stop  offset="0" style="stop-color:#564D4E"/>
              <stop  offset="0.034" style="stop-color:#6D6768"/>
              <stop  offset="0.0985" style="stop-color:#949494"/>
              <stop  offset="0.1607" style="stop-color:#B3B7B6"/>
              <stop  offset="0.2192" style="stop-color:#C9D0CF"/>
              <stop  offset="0.2724" style="stop-color:#D6DFDE"/>
              <stop  offset="0.3156" style="stop-color:#DBE4E3"/>
              <stop  offset="0.3588" style="stop-color:#D1D9D8"/>
              <stop  offset="0.435" style="stop-color:#B7BCBA"/>
              <stop  offset="0.5351" style="stop-color:#8C8C8A"/>
              <stop  offset="0.6543" style="stop-color:#524A48"/>
              <stop  offset="0.66" style="stop-color:#4F4745"/>
              <stop  offset="0.7581" style="stop-color:#5E5B57"/>
              <stop  offset="0.8547" style="stop-color:#71726C"/>
              <stop  offset="0.8835" style="stop-color:#6C6C67"/>
              <stop  offset="0.9204" style="stop-color:#5C5C57"/>
              <stop  offset="0.9616" style="stop-color:#42423F"/>
              <stop  offset="1" style="stop-color:#242321"/>
            </linearGradient>
            <path class="st0" d="M7.78,100.1V86.69h-5.6c0,0-2.18,2.01-2.18,6.71c0,5.56,2.18,6.71,2.18,6.71H7.78z"/>
            <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="755.3279" y1="183.8239" x2="755.3279" y2="197.2349" gradientTransform="matrix(-1 0 0 1 759.2192 0)">
              <stop  offset="0" style="stop-color:#564D4E"/>
              <stop  offset="0.034" style="stop-color:#6D6768"/>
              <stop  offset="0.0985" style="stop-color:#949494"/>
              <stop  offset="0.1607" style="stop-color:#B3B7B6"/>
              <stop  offset="0.2192" style="stop-color:#C9D0CF"/>
              <stop  offset="0.2724" style="stop-color:#D6DFDE"/>
              <stop  offset="0.3156" style="stop-color:#DBE4E3"/>
              <stop  offset="0.3588" style="stop-color:#D1D9D8"/>
              <stop  offset="0.435" style="stop-color:#B7BCBA"/>
              <stop  offset="0.5351" style="stop-color:#8C8C8A"/>
              <stop  offset="0.6543" style="stop-color:#524A48"/>
              <stop  offset="0.66" style="stop-color:#4F4745"/>
              <stop  offset="0.7581" style="stop-color:#5E5B57"/>
              <stop  offset="0.8547" style="stop-color:#71726C"/>
              <stop  offset="0.8835" style="stop-color:#6C6C67"/>
              <stop  offset="0.9204" style="stop-color:#5C5C57"/>
              <stop  offset="0.9616" style="stop-color:#42423F"/>
              <stop  offset="1" style="stop-color:#242321"/>
            </linearGradient>
            <path class="st1" d="M7.78,197.23v-13.41h-5.6c0,0-2.18,2.01-2.18,6.71c0,5.56,2.18,6.71,2.18,6.71H7.78z"/>
            <g>
              <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="75.5999" y1="148.1615" x2="-19.715" y2="99.1424">
                <stop  offset="0" style="stop-color:#123368"/>
                <stop  offset="1" style="stop-color:#2B68AB"/>
              </linearGradient>
              <polygon class="st2" points="71.97,219.15 9.34,260 9.34,41.23 71.97,0.38 	"/>
            </g>
            <g>
              <rect x="2.98" y="41.23" class="st3" width="6.35" height="218.77"/>
            </g>
            <g>
              <polygon class="st4" points="65.62,0.38 71.97,0.38 9.34,41.23 2.98,41.23 	"/>
            </g>
            <polygon class="st5" points="9.79,260 8.88,260 8.88,41.68 2.98,41.68 2.98,40.78 9.79,40.78 "/>
            <rect x="3.27" y="20.35" transform="matrix(0.8374 -0.5466 0.5466 0.8374 -4.7613 25.6035)" class="st6" width="74.78" height="0.91"/>
            <g>
              <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="44.1839" y1="242.9681" x2="44.1839" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st7" d="M27.91,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L26.55,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C21.26,240.86,25.05,242.91,27.91,241.05z"/>
              <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="45.9994" y1="241.7527" x2="45.9994" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st8" d="M29.72,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L28.37,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C23.08,240.86,26.86,242.91,29.72,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="49.6304" y1="242.9681" x2="49.6304" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st9" d="M33.35,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L32,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C26.71,240.86,30.49,242.91,33.35,241.05z"/>
              <linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="51.446" y1="241.7527" x2="51.446" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st10" d="M35.17,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L33.82,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C28.52,240.86,32.31,242.91,35.17,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" x1="55.077" y1="242.9681" x2="55.077" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st11" d="M38.8,241.05L78,215.48V18.41c0-3.41-3.78-5.46-6.64-3.6L37.45,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C32.16,240.86,35.94,242.91,38.8,241.05z"/>
              <linearGradient id="SVGID_9_" gradientUnits="userSpaceOnUse" x1="56.8925" y1="241.7527" x2="56.8925" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st12" d="M40.61,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L39.26,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C33.97,240.86,37.76,242.91,40.61,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_10_" gradientUnits="userSpaceOnUse" x1="60.5236" y1="242.9681" x2="60.5236" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st13" d="M44.24,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L42.89,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C37.6,240.86,41.39,242.91,44.24,241.05z"/>
              <linearGradient id="SVGID_11_" gradientUnits="userSpaceOnUse" x1="62.3391" y1="241.7527" x2="62.3391" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st14" d="M46.06,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L44.71,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C39.42,240.86,43.2,242.91,46.06,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_12_" gradientUnits="userSpaceOnUse" x1="65.9701" y1="242.9681" x2="65.9701" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st15" d="M49.69,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L48.34,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C43.05,240.86,46.83,242.91,49.69,241.05z"/>
              <linearGradient id="SVGID_13_" gradientUnits="userSpaceOnUse" x1="67.7857" y1="241.7527" x2="67.7857" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st16" d="M51.51,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L50.16,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C44.86,240.86,48.65,242.91,51.51,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_14_" gradientUnits="userSpaceOnUse" x1="71.4167" y1="242.9681" x2="71.4167" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st17" d="M55.14,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L53.79,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C48.5,240.86,52.28,242.91,55.14,241.05z"/>
              <linearGradient id="SVGID_15_" gradientUnits="userSpaceOnUse" x1="73.2322" y1="241.7527" x2="73.2322" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st18" d="M56.95,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L55.6,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C50.31,240.86,54.1,242.91,56.95,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_16_" gradientUnits="userSpaceOnUse" x1="76.8633" y1="242.9681" x2="76.8633" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st19" d="M60.58,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L59.23,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C53.94,240.86,57.73,242.91,60.58,241.05z"/>
              <linearGradient id="SVGID_17_" gradientUnits="userSpaceOnUse" x1="78.6788" y1="241.7527" x2="78.6788" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st20" d="M62.4,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L61.05,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C55.76,240.86,59.54,242.91,62.4,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_18_" gradientUnits="userSpaceOnUse" x1="82.3098" y1="242.9681" x2="82.3098" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st21" d="M66.03,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L64.68,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C59.39,240.86,63.17,242.91,66.03,241.05z"/>
              <linearGradient id="SVGID_19_" gradientUnits="userSpaceOnUse" x1="84.1254" y1="241.7527" x2="84.1254" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st22" d="M67.85,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L66.5,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C61.2,240.86,64.99,242.91,67.85,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_20_" gradientUnits="userSpaceOnUse" x1="87.7564" y1="242.9681" x2="87.7564" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st23" d="M71.48,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L70.13,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C64.84,240.86,68.62,242.91,71.48,241.05z"/>
              <linearGradient id="SVGID_21_" gradientUnits="userSpaceOnUse" x1="89.5719" y1="241.7527" x2="89.5719" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st24" d="M73.29,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L71.94,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C66.65,240.86,70.44,242.91,73.29,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_22_" gradientUnits="userSpaceOnUse" x1="93.203" y1="242.9681" x2="93.203" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st25" d="M76.92,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L75.57,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C70.28,240.86,74.07,242.91,76.92,241.05z"/>
              <linearGradient id="SVGID_23_" gradientUnits="userSpaceOnUse" x1="95.0185" y1="241.7527" x2="95.0185" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st26" d="M78.74,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L77.39,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C72.1,240.86,75.88,242.91,78.74,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_24_" gradientUnits="userSpaceOnUse" x1="98.6495" y1="242.9681" x2="98.6495" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st27" d="M82.37,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L81.02,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C75.73,240.86,79.51,242.91,82.37,241.05z"/>
              <linearGradient id="SVGID_25_" gradientUnits="userSpaceOnUse" x1="100.4651" y1="241.7527" x2="100.4651" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st28" d="M84.19,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L82.84,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C77.54,240.86,81.33,242.91,84.19,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_26_" gradientUnits="userSpaceOnUse" x1="104.0961" y1="242.9681" x2="104.0961" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st29" d="M87.82,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L86.47,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C81.18,240.86,84.96,242.91,87.82,241.05z"/>
              <linearGradient id="SVGID_27_" gradientUnits="userSpaceOnUse" x1="105.9116" y1="241.7527" x2="105.9116" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st30" d="M89.63,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L88.28,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C82.99,240.86,86.78,242.91,89.63,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_28_" gradientUnits="userSpaceOnUse" x1="109.5427" y1="242.9681" x2="109.5427" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st31" d="M93.26,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L91.91,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C86.62,240.86,90.41,242.91,93.26,241.05z"/>
              <linearGradient id="SVGID_29_" gradientUnits="userSpaceOnUse" x1="111.3582" y1="241.7527" x2="111.3582" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st32" d="M95.08,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L93.73,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C88.44,240.86,92.22,242.91,95.08,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_30_" gradientUnits="userSpaceOnUse" x1="114.9892" y1="242.9681" x2="114.9892" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st33" d="M98.71,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L97.36,36.93c-3.3,2.15-5.29,5.83-5.29,9.77v190.75
                C92.07,240.86,95.85,242.91,98.71,241.05z"/>
              <linearGradient id="SVGID_31_" gradientUnits="userSpaceOnUse" x1="116.8048" y1="241.7527" x2="116.8048" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st34" d="M100.53,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L99.17,36.93c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C93.88,240.86,97.67,242.91,100.53,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_32_" gradientUnits="userSpaceOnUse" x1="120.4358" y1="242.9681" x2="120.4358" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st35" d="M104.16,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C97.51,240.86,101.3,242.91,104.16,241.05z"/>
              <linearGradient id="SVGID_33_" gradientUnits="userSpaceOnUse" x1="122.2513" y1="241.7527" x2="122.2513" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st36" d="M105.97,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C99.33,240.86,103.12,242.91,105.97,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_34_" gradientUnits="userSpaceOnUse" x1="125.8824" y1="242.9681" x2="125.8824" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st37" d="M109.6,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C102.96,240.86,106.75,242.91,109.6,241.05z"/>
              <linearGradient id="SVGID_35_" gradientUnits="userSpaceOnUse" x1="127.6979" y1="241.7527" x2="127.6979" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st38" d="M111.42,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C104.78,240.86,108.56,242.91,111.42,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_36_" gradientUnits="userSpaceOnUse" x1="131.3289" y1="242.9681" x2="131.3289" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st39" d="M115.05,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L113.7,36.93c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C108.41,240.86,112.19,242.91,115.05,241.05z"/>
              <linearGradient id="SVGID_37_" gradientUnits="userSpaceOnUse" x1="133.1445" y1="241.7527" x2="133.1445" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st40" d="M116.87,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C110.22,240.86,114.01,242.91,116.87,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_38_" gradientUnits="userSpaceOnUse" x1="136.7755" y1="242.9681" x2="136.7755" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st41" d="M120.5,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C113.85,240.86,117.64,242.91,120.5,241.05z"/>
              <linearGradient id="SVGID_39_" gradientUnits="userSpaceOnUse" x1="138.591" y1="241.7527" x2="138.591" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st42" d="M122.31,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C115.67,240.86,119.45,242.91,122.31,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_40_" gradientUnits="userSpaceOnUse" x1="142.2221" y1="242.9681" x2="142.2221" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st43" d="M125.94,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C119.3,240.86,123.09,242.91,125.94,241.05z"/>
              <linearGradient id="SVGID_41_" gradientUnits="userSpaceOnUse" x1="144.0376" y1="241.7527" x2="144.0376" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st44" d="M127.76,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C121.12,240.86,124.9,242.91,127.76,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_42_" gradientUnits="userSpaceOnUse" x1="147.6686" y1="242.9681" x2="147.6686" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st45" d="M131.39,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C124.75,240.86,128.53,242.91,131.39,241.05z"/>
              <linearGradient id="SVGID_43_" gradientUnits="userSpaceOnUse" x1="149.4842" y1="241.7527" x2="149.4842" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st46" d="M133.21,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C126.56,240.86,130.35,242.91,133.21,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_44_" gradientUnits="userSpaceOnUse" x1="153.1152" y1="242.9681" x2="153.1152" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st47" d="M136.84,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C130.19,240.86,133.98,242.91,136.84,241.05z"/>
              <linearGradient id="SVGID_45_" gradientUnits="userSpaceOnUse" x1="154.9307" y1="241.7527" x2="154.9307" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st48" d="M138.65,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L137.3,36.93c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C132.01,240.86,135.79,242.91,138.65,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_46_" gradientUnits="userSpaceOnUse" x1="158.5618" y1="242.9681" x2="158.5618" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st49" d="M142.28,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C135.64,240.86,139.43,242.91,142.28,241.05z"/>
              <linearGradient id="SVGID_47_" gradientUnits="userSpaceOnUse" x1="160.3773" y1="241.7527" x2="160.3773" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st50" d="M144.1,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C137.46,240.86,141.24,242.91,144.1,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_48_" gradientUnits="userSpaceOnUse" x1="164.0083" y1="242.9681" x2="164.0083" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st51" d="M147.73,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C141.09,240.86,144.87,242.91,147.73,241.05z"/>
              <linearGradient id="SVGID_49_" gradientUnits="userSpaceOnUse" x1="165.8239" y1="241.7527" x2="165.8239" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st52" d="M149.55,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C142.9,240.86,146.69,242.91,149.55,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_50_" gradientUnits="userSpaceOnUse" x1="169.4549" y1="242.9681" x2="169.4549" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st53" d="M153.18,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C146.53,240.86,150.32,242.91,153.18,241.05z"/>
              <linearGradient id="SVGID_51_" gradientUnits="userSpaceOnUse" x1="171.2704" y1="241.7527" x2="171.2704" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st54" d="M154.99,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C148.35,240.86,152.13,242.91,154.99,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_52_" gradientUnits="userSpaceOnUse" x1="174.9015" y1="242.9681" x2="174.9015" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st55" d="M158.62,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C151.98,240.86,155.77,242.91,158.62,241.05z"/>
              <linearGradient id="SVGID_53_" gradientUnits="userSpaceOnUse" x1="176.717" y1="241.7527" x2="176.717" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st56" d="M160.44,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C153.8,240.86,157.58,242.91,160.44,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_54_" gradientUnits="userSpaceOnUse" x1="180.348" y1="242.9681" x2="180.348" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st57" d="M164.07,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C157.43,240.86,161.21,242.91,164.07,241.05z"/>
              <linearGradient id="SVGID_55_" gradientUnits="userSpaceOnUse" x1="182.1636" y1="241.7527" x2="182.1636" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st58" d="M165.88,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C159.24,240.86,163.03,242.91,165.88,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_56_" gradientUnits="userSpaceOnUse" x1="185.7946" y1="242.9681" x2="185.7946" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st59" d="M169.52,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C162.87,240.86,166.66,242.91,169.52,241.05z"/>
              <linearGradient id="SVGID_57_" gradientUnits="userSpaceOnUse" x1="187.6101" y1="241.7527" x2="187.6101" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st60" d="M171.33,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C164.69,240.86,168.47,242.91,171.33,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_58_" gradientUnits="userSpaceOnUse" x1="191.2412" y1="242.9681" x2="191.2412" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st61" d="M174.96,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C168.32,240.86,172.11,242.91,174.96,241.05z"/>
              <linearGradient id="SVGID_59_" gradientUnits="userSpaceOnUse" x1="193.0567" y1="241.7527" x2="193.0567" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st62" d="M176.78,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C170.14,240.86,173.92,242.91,176.78,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_60_" gradientUnits="userSpaceOnUse" x1="196.6877" y1="242.9681" x2="196.6877" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st63" d="M180.41,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C173.77,240.86,177.55,242.91,180.41,241.05z"/>
              <linearGradient id="SVGID_61_" gradientUnits="userSpaceOnUse" x1="198.5033" y1="241.7527" x2="198.5033" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st64" d="M182.22,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C175.58,240.86,179.37,242.91,182.22,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_62_" gradientUnits="userSpaceOnUse" x1="202.1343" y1="242.9681" x2="202.1343" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st65" d="M185.86,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6L184.5,36.93c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C179.21,240.86,183,242.91,185.86,241.05z"/>
              <linearGradient id="SVGID_63_" gradientUnits="userSpaceOnUse" x1="203.9498" y1="241.7527" x2="203.9498" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st66" d="M187.67,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C181.03,240.86,184.81,242.91,187.67,241.05z"/>
            </g>
            <g>
              <linearGradient id="SVGID_64_" gradientUnits="userSpaceOnUse" x1="207.5809" y1="242.9681" x2="207.5809" y2="15.3239">
                <stop  offset="0" style="stop-color:#32322F"/>
                <stop  offset="0.0782" style="stop-color:#B8B6B6"/>
                <stop  offset="0.8296" style="stop-color:#727371"/>
                <stop  offset="0.9106" style="stop-color:#FFFFFF"/>
              </linearGradient>
              <path class="st67" d="M191.3,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C184.66,240.86,188.44,242.91,191.3,241.05z"/>
              <linearGradient id="SVGID_65_" gradientUnits="userSpaceOnUse" x1="209.3964" y1="241.7527" x2="209.3964" y2="14.1085">
                <stop  offset="0" style="stop-color:#58666F"/>
                <stop  offset="1" style="stop-color:#3A454C"/>
              </linearGradient>
              <path class="st68" d="M193.12,241.05l39.2-25.57V18.41c0-3.41-3.78-5.46-6.64-3.6l-33.91,22.11c-3.3,2.15-5.29,5.83-5.29,9.77
                v190.75C186.48,240.86,190.26,242.91,193.12,241.05z"/>
            </g>
            <ellipse class="st69" cx="16.41" cy="93.27" rx="3.42" ry="6.43"/>
            <linearGradient id="SVGID_66_" gradientUnits="userSpaceOnUse" x1="661.6511" y1="88.2583" x2="661.6511" y2="98.3943" gradientTransform="matrix(-1 0 0 1 759.2192 0)">
              <stop  offset="0" style="stop-color:#564D4E"/>
              <stop  offset="0.034" style="stop-color:#6D6768"/>
              <stop  offset="0.0985" style="stop-color:#949494"/>
              <stop  offset="0.1607" style="stop-color:#B3B7B6"/>
              <stop  offset="0.2192" style="stop-color:#C9D0CF"/>
              <stop  offset="0.2724" style="stop-color:#D6DFDE"/>
              <stop  offset="0.3156" style="stop-color:#DBE4E3"/>
              <stop  offset="0.3588" style="stop-color:#D1D9D8"/>
              <stop  offset="0.435" style="stop-color:#B7BCBA"/>
              <stop  offset="0.5351" style="stop-color:#8C8C8A"/>
              <stop  offset="0.6543" style="stop-color:#524A48"/>
              <stop  offset="0.66" style="stop-color:#4F4745"/>
              <stop  offset="0.7581" style="stop-color:#5E5B57"/>
              <stop  offset="0.8547" style="stop-color:#71726C"/>
              <stop  offset="0.8835" style="stop-color:#6C6C67"/>
              <stop  offset="0.9204" style="stop-color:#5C5C57"/>
              <stop  offset="0.9616" style="stop-color:#42423F"/>
              <stop  offset="1" style="stop-color:#242321"/>
            </linearGradient>
            <path class="st70" d="M181.13,98.39V88.26H15.65c0,0-1.65,1.52-1.65,5.07c0,4.2,1.65,5.07,1.65,5.07H181.13z"/>
            <ellipse class="st69" cx="16.41" cy="190.4" rx="3.42" ry="6.43"/>
            <linearGradient id="SVGID_67_" gradientUnits="userSpaceOnUse" x1="661.6511" y1="185.3888" x2="661.6511" y2="195.5248" gradientTransform="matrix(-1 0 0 1 759.2192 0)">
              <stop  offset="0" style="stop-color:#564D4E"/>
              <stop  offset="0.034" style="stop-color:#6D6768"/>
              <stop  offset="0.0985" style="stop-color:#949494"/>
              <stop  offset="0.1607" style="stop-color:#B3B7B6"/>
              <stop  offset="0.2192" style="stop-color:#C9D0CF"/>
              <stop  offset="0.2724" style="stop-color:#D6DFDE"/>
              <stop  offset="0.3156" style="stop-color:#DBE4E3"/>
              <stop  offset="0.3588" style="stop-color:#D1D9D8"/>
              <stop  offset="0.435" style="stop-color:#B7BCBA"/>
              <stop  offset="0.5351" style="stop-color:#8C8C8A"/>
              <stop  offset="0.6543" style="stop-color:#524A48"/>
              <stop  offset="0.66" style="stop-color:#4F4745"/>
              <stop  offset="0.7581" style="stop-color:#5E5B57"/>
              <stop  offset="0.8547" style="stop-color:#71726C"/>
              <stop  offset="0.8835" style="stop-color:#6C6C67"/>
              <stop  offset="0.9204" style="stop-color:#5C5C57"/>
              <stop  offset="0.9616" style="stop-color:#42423F"/>
              <stop  offset="1" style="stop-color:#242321"/>
            </linearGradient>
            <path class="st71" d="M181.13,195.52v-10.14H15.65c0,0-1.65,1.52-1.65,5.07c0,4.2,1.65,5.07,1.65,5.07H181.13z"/>
            <g>
              <linearGradient id="SVGID_68_" gradientUnits="userSpaceOnUse" x1="214.302" y1="260" x2="214.302" y2="0.3803">
                <stop  offset="0" style="stop-color:#79A4BF"/>
                <stop  offset="1" style="stop-color:#2B68AB"/>
              </linearGradient>
              <polygon class="st72" points="245.62,219.15 182.98,260 182.98,41.23 245.62,0.38 	"/>
            </g>
            <g>
              <rect x="176.63" y="41.23" class="st3" width="6.35" height="218.77"/>
            </g>
            <g>
              <polygon class="st4" points="239.27,0.38 245.62,0.38 182.98,41.23 176.63,41.23 	"/>
            </g>
            <polygon class="st5" points="183.44,260 182.53,260 182.53,41.68 176.63,41.68 176.63,40.78 183.44,40.78 "/>
            <rect x="176.91" y="20.35" transform="matrix(0.8374 -0.5466 0.5466 0.8374 23.4707 120.5126)" class="st6" width="74.78" height="0.91"/>
            <ellipse class="st69" cx="189.59" cy="93.33" rx="4.52" ry="8.51"/>
            <linearGradient id="SVGID_69_" gradientUnits="userSpaceOnUse" x1="568.9191" y1="86.6934" x2="568.9191" y2="100.1045" gradientTransform="matrix(-1 0 0 1 759.2192 0)">
              <stop  offset="0" style="stop-color:#564D4E"/>
              <stop  offset="0.034" style="stop-color:#6D6768"/>
              <stop  offset="0.0985" style="stop-color:#949494"/>
              <stop  offset="0.1607" style="stop-color:#B3B7B6"/>
              <stop  offset="0.2192" style="stop-color:#C9D0CF"/>
              <stop  offset="0.2724" style="stop-color:#D6DFDE"/>
              <stop  offset="0.3156" style="stop-color:#DBE4E3"/>
              <stop  offset="0.3588" style="stop-color:#D1D9D8"/>
              <stop  offset="0.435" style="stop-color:#B7BCBA"/>
              <stop  offset="0.5351" style="stop-color:#8C8C8A"/>
              <stop  offset="0.6543" style="stop-color:#524A48"/>
              <stop  offset="0.66" style="stop-color:#4F4745"/>
              <stop  offset="0.7581" style="stop-color:#5E5B57"/>
              <stop  offset="0.8547" style="stop-color:#71726C"/>
              <stop  offset="0.8835" style="stop-color:#6C6C67"/>
              <stop  offset="0.9204" style="stop-color:#5C5C57"/>
              <stop  offset="0.9616" style="stop-color:#42423F"/>
              <stop  offset="1" style="stop-color:#242321"/>
            </linearGradient>
            <path class="st73" d="M194.19,100.1V86.69h-5.6c0,0-2.18,2.01-2.18,6.71c0,5.56,2.18,6.71,2.18,6.71H194.19z"/>
            <ellipse class="st74" cx="194.19" cy="93.4" rx="2.85" ry="6.71"/>
            <ellipse class="st69" cx="189.59" cy="190.46" rx="4.52" ry="8.51"/>
            <linearGradient id="SVGID_70_" gradientUnits="userSpaceOnUse" x1="568.9191" y1="183.8239" x2="568.9191" y2="197.2349" gradientTransform="matrix(-1 0 0 1 759.2192 0)">
              <stop  offset="0" style="stop-color:#564D4E"/>
              <stop  offset="0.034" style="stop-color:#6D6768"/>
              <stop  offset="0.0985" style="stop-color:#949494"/>
              <stop  offset="0.1607" style="stop-color:#B3B7B6"/>
              <stop  offset="0.2192" style="stop-color:#C9D0CF"/>
              <stop  offset="0.2724" style="stop-color:#D6DFDE"/>
              <stop  offset="0.3156" style="stop-color:#DBE4E3"/>
              <stop  offset="0.3588" style="stop-color:#D1D9D8"/>
              <stop  offset="0.435" style="stop-color:#B7BCBA"/>
              <stop  offset="0.5351" style="stop-color:#8C8C8A"/>
              <stop  offset="0.6543" style="stop-color:#524A48"/>
              <stop  offset="0.66" style="stop-color:#4F4745"/>
              <stop  offset="0.7581" style="stop-color:#5E5B57"/>
              <stop  offset="0.8547" style="stop-color:#71726C"/>
              <stop  offset="0.8835" style="stop-color:#6C6C67"/>
              <stop  offset="0.9204" style="stop-color:#5C5C57"/>
              <stop  offset="0.9616" style="stop-color:#42423F"/>
              <stop  offset="1" style="stop-color:#242321"/>
            </linearGradient>
            <path class="st75" d="M194.19,197.23v-13.41h-5.6c0,0-2.18,2.01-2.18,6.71c0,5.56,2.18,6.71,2.18,6.71H194.19z"/>
            <ellipse class="st74" cx="194.19" cy="190.53" rx="2.85" ry="6.71"/>
            <ellipse class="st69" cx="240.42" cy="67.91" rx="4.52" ry="8.51"/>
            <linearGradient id="SVGID_71_" gradientUnits="userSpaceOnUse" x1="518.0845" y1="61.2761" x2="518.0845" y2="74.6872" gradientTransform="matrix(-1 0 0 1 759.2192 0)">
              <stop  offset="0" style="stop-color:#564D4E"/>
              <stop  offset="0.034" style="stop-color:#6D6768"/>
              <stop  offset="0.0985" style="stop-color:#949494"/>
              <stop  offset="0.1607" style="stop-color:#B3B7B6"/>
              <stop  offset="0.2192" style="stop-color:#C9D0CF"/>
              <stop  offset="0.2724" style="stop-color:#D6DFDE"/>
              <stop  offset="0.3156" style="stop-color:#DBE4E3"/>
              <stop  offset="0.3588" style="stop-color:#D1D9D8"/>
              <stop  offset="0.435" style="stop-color:#B7BCBA"/>
              <stop  offset="0.5351" style="stop-color:#8C8C8A"/>
              <stop  offset="0.6543" style="stop-color:#524A48"/>
              <stop  offset="0.66" style="stop-color:#4F4745"/>
              <stop  offset="0.7581" style="stop-color:#5E5B57"/>
              <stop  offset="0.8547" style="stop-color:#71726C"/>
              <stop  offset="0.8835" style="stop-color:#6C6C67"/>
              <stop  offset="0.9204" style="stop-color:#5C5C57"/>
              <stop  offset="0.9616" style="stop-color:#42423F"/>
              <stop  offset="1" style="stop-color:#242321"/>
            </linearGradient>
            <path class="st76" d="M245.03,74.69V61.28h-5.6c0,0-2.18,2.01-2.18,6.71c0,5.56,2.18,6.71,2.18,6.71H245.03z"/>
            <ellipse class="st74" cx="245.03" cy="67.98" rx="2.85" ry="6.71"/>
            <ellipse class="st69" cx="240.42" cy="165.04" rx="4.52" ry="8.51"/>
            <linearGradient id="SVGID_72_" gradientUnits="userSpaceOnUse" x1="518.0845" y1="158.4066" x2="518.0845" y2="171.8176" gradientTransform="matrix(-1 0 0 1 759.2192 0)">
              <stop  offset="0" style="stop-color:#564D4E"/>
              <stop  offset="0.034" style="stop-color:#6D6768"/>
              <stop  offset="0.0985" style="stop-color:#949494"/>
              <stop  offset="0.1607" style="stop-color:#B3B7B6"/>
              <stop  offset="0.2192" style="stop-color:#C9D0CF"/>
              <stop  offset="0.2724" style="stop-color:#D6DFDE"/>
              <stop  offset="0.3156" style="stop-color:#DBE4E3"/>
              <stop  offset="0.3588" style="stop-color:#D1D9D8"/>
              <stop  offset="0.435" style="stop-color:#B7BCBA"/>
              <stop  offset="0.5351" style="stop-color:#8C8C8A"/>
              <stop  offset="0.6543" style="stop-color:#524A48"/>
              <stop  offset="0.66" style="stop-color:#4F4745"/>
              <stop  offset="0.7581" style="stop-color:#5E5B57"/>
              <stop  offset="0.8547" style="stop-color:#71726C"/>
              <stop  offset="0.8835" style="stop-color:#6C6C67"/>
              <stop  offset="0.9204" style="stop-color:#5C5C57"/>
              <stop  offset="0.9616" style="stop-color:#42423F"/>
              <stop  offset="1" style="stop-color:#242321"/>
            </linearGradient>
            <path class="st77" d="M245.03,171.82v-13.41h-5.6c0,0-2.18,2.01-2.18,6.71c0,5.56,2.18,6.71,2.18,6.71H245.03z"/>
            <ellipse class="st74" cx="245.03" cy="165.11" rx="2.85" ry="6.71"/>
            <g>
              <ellipse class="st69" cx="233" cy="33.33" rx="7.69" ry="14.48"/>
              
                <linearGradient id="SVGID_73_" gradientUnits="userSpaceOnUse" x1="508.0271" y1="22.0482" x2="508.0271" y2="44.8616" gradientTransform="matrix(-1 0 0 1 759.2192 0)">
                <stop  offset="0" style="stop-color:#564D4E"/>
                <stop  offset="0.034" style="stop-color:#6D6768"/>
                <stop  offset="0.0985" style="stop-color:#949494"/>
                <stop  offset="0.1607" style="stop-color:#B3B7B6"/>
                <stop  offset="0.2192" style="stop-color:#C9D0CF"/>
                <stop  offset="0.2724" style="stop-color:#D6DFDE"/>
                <stop  offset="0.3156" style="stop-color:#DBE4E3"/>
                <stop  offset="0.3588" style="stop-color:#D1D9D8"/>
                <stop  offset="0.435" style="stop-color:#B7BCBA"/>
                <stop  offset="0.5351" style="stop-color:#8C8C8A"/>
                <stop  offset="0.6543" style="stop-color:#524A48"/>
                <stop  offset="0.66" style="stop-color:#4F4745"/>
                <stop  offset="0.7581" style="stop-color:#5E5B57"/>
                <stop  offset="0.8547" style="stop-color:#71726C"/>
                <stop  offset="0.8835" style="stop-color:#6C6C67"/>
                <stop  offset="0.9204" style="stop-color:#5C5C57"/>
                <stop  offset="0.9616" style="stop-color:#42423F"/>
                <stop  offset="1" style="stop-color:#242321"/>
              </linearGradient>
              <path class="st78" d="M274.8,44.86V22.05h-43.5c0,0-3.71,3.42-3.71,11.41c0,9.45,3.71,11.41,3.71,11.41H274.8z"/>
              
                <linearGradient id="SVGID_74_" gradientUnits="userSpaceOnUse" x1="693.524" y1="169.6229" x2="641.9982" y2="169.6229" gradientTransform="matrix(4.489700e-11 -1 -1 -4.489700e-11 434.2008 701.7421)">
                <stop  offset="0" style="stop-color:#564D4E"/>
                <stop  offset="0.034" style="stop-color:#6D6768"/>
                <stop  offset="0.0985" style="stop-color:#949494"/>
                <stop  offset="0.1607" style="stop-color:#B3B7B6"/>
                <stop  offset="0.2192" style="stop-color:#C9D0CF"/>
                <stop  offset="0.2724" style="stop-color:#D6DFDE"/>
                <stop  offset="0.3156" style="stop-color:#DBE4E3"/>
                <stop  offset="0.3588" style="stop-color:#D1D9D8"/>
                <stop  offset="0.435" style="stop-color:#B7BCBA"/>
                <stop  offset="0.5351" style="stop-color:#8C8C8A"/>
                <stop  offset="0.6543" style="stop-color:#524A48"/>
                <stop  offset="0.66" style="stop-color:#4F4745"/>
                <stop  offset="0.7581" style="stop-color:#5E5B57"/>
                <stop  offset="0.8547" style="stop-color:#71726C"/>
                <stop  offset="0.8835" style="stop-color:#6C6C67"/>
                <stop  offset="0.9204" style="stop-color:#5C5C57"/>
                <stop  offset="0.9616" style="stop-color:#42423F"/>
                <stop  offset="1" style="stop-color:#242321"/>
              </linearGradient>
              <path class="st79" d="M270.9,14.16c2.31,4.68,3.79,11.87,3.79,19.94s-1.48,15.26-3.79,19.94v5.61h-6.32
                c-5.59,0-10.12-11.44-10.12-25.56s4.53-25.56,10.12-25.56h6.32V14.16z"/>
              <linearGradient id="SVGID_75_" gradientUnits="userSpaceOnUse" x1="285.4163" y1="38.6012" x2="266.1358" y2="32.6294">
                <stop  offset="0" style="stop-color:#74716F"/>
                <stop  offset="1" style="stop-color:#ABAEAD"/>
              </linearGradient>
              <ellipse class="st80" cx="270.9" cy="34.11" rx="10.12" ry="25.56"/>
              
                <linearGradient id="SVGID_76_" gradientUnits="userSpaceOnUse" x1="678.002" y1="162.0331" x2="657.8602" y2="162.0331" gradientTransform="matrix(4.489700e-11 -1 -1 -4.489700e-11 434.2008 701.7421)">
                <stop  offset="0" style="stop-color:#262623"/>
                <stop  offset="0.648" style="stop-color:#575753"/>
                <stop  offset="1" style="stop-color:#262623"/>
              </linearGradient>
              <ellipse class="st81" cx="272.17" cy="34.11" rx="4.09" ry="10.34"/>
              <linearGradient id="SVGID_77_" gradientUnits="userSpaceOnUse" x1="266.3343" y1="8.5502" x2="266.3343" y2="59.6615">
                <stop  offset="0" style="stop-color:#AFB2B1"/>
                <stop  offset="2.568830e-04" style="stop-color:#AFB2B1"/>
                <stop  offset="0.0902" style="stop-color:#D2D3D3"/>
                <stop  offset="0.1753" style="stop-color:#EBEBEB"/>
                <stop  offset="0.2527" style="stop-color:#FAFAFA"/>
                <stop  offset="0.3156" style="stop-color:#FFFFFF"/>
                <stop  offset="0.3659" style="stop-color:#F4F4F4"/>
                <stop  offset="0.4545" style="stop-color:#D7D7D6"/>
                <stop  offset="0.5702" style="stop-color:#A9A7A7"/>
                <stop  offset="0.66" style="stop-color:#807E7D"/>
                <stop  offset="0.8547" style="stop-color:#8B8A88"/>
                <stop  offset="0.9067" style="stop-color:#868582"/>
                <stop  offset="0.9734" style="stop-color:#777772"/>
                <stop  offset="1" style="stop-color:#6F6F6A"/>
              </linearGradient>
              <path class="st82" d="M262.75,34.11c0,13.28,4.01,24.19,9.14,25.43c-0.32,0.08-0.65,0.12-0.98,0.12
                c-5.59,0-10.12-11.44-10.12-25.56s4.53-25.56,10.12-25.56c0.33,0,0.66,0.04,0.98,0.12C266.76,9.92,262.75,20.83,262.75,34.11z"/>
            </g>
            <g>
              <ellipse class="st69" cx="233" cy="194.91" rx="7.69" ry="14.48"/>
              
                <linearGradient id="SVGID_78_" gradientUnits="userSpaceOnUse" x1="508.0271" y1="183.6297" x2="508.0271" y2="206.4431" gradientTransform="matrix(-1 0 0 1 759.2192 0)">
                <stop  offset="0" style="stop-color:#564D4E"/>
                <stop  offset="0.034" style="stop-color:#6D6768"/>
                <stop  offset="0.0985" style="stop-color:#949494"/>
                <stop  offset="0.1607" style="stop-color:#B3B7B6"/>
                <stop  offset="0.2192" style="stop-color:#C9D0CF"/>
                <stop  offset="0.2724" style="stop-color:#D6DFDE"/>
                <stop  offset="0.3156" style="stop-color:#DBE4E3"/>
                <stop  offset="0.3588" style="stop-color:#D1D9D8"/>
                <stop  offset="0.435" style="stop-color:#B7BCBA"/>
                <stop  offset="0.5351" style="stop-color:#8C8C8A"/>
                <stop  offset="0.6543" style="stop-color:#524A48"/>
                <stop  offset="0.66" style="stop-color:#4F4745"/>
                <stop  offset="0.7581" style="stop-color:#5E5B57"/>
                <stop  offset="0.8547" style="stop-color:#71726C"/>
                <stop  offset="0.8835" style="stop-color:#6C6C67"/>
                <stop  offset="0.9204" style="stop-color:#5C5C57"/>
                <stop  offset="0.9616" style="stop-color:#42423F"/>
                <stop  offset="1" style="stop-color:#242321"/>
              </linearGradient>
              <path class="st83" d="M274.8,206.44v-22.81h-43.5c0,0-3.71,3.42-3.71,11.41c0,9.45,3.71,11.41,3.71,11.41H274.8z"/>
              
                <linearGradient id="SVGID_79_" gradientUnits="userSpaceOnUse" x1="531.9425" y1="169.6229" x2="480.4167" y2="169.6229" gradientTransform="matrix(4.489700e-11 -1 -1 -4.489700e-11 434.2008 701.7421)">
                <stop  offset="0" style="stop-color:#564D4E"/>
                <stop  offset="0.034" style="stop-color:#6D6768"/>
                <stop  offset="0.0985" style="stop-color:#949494"/>
                <stop  offset="0.1607" style="stop-color:#B3B7B6"/>
                <stop  offset="0.2192" style="stop-color:#C9D0CF"/>
                <stop  offset="0.2724" style="stop-color:#D6DFDE"/>
                <stop  offset="0.3156" style="stop-color:#DBE4E3"/>
                <stop  offset="0.3588" style="stop-color:#D1D9D8"/>
                <stop  offset="0.435" style="stop-color:#B7BCBA"/>
                <stop  offset="0.5351" style="stop-color:#8C8C8A"/>
                <stop  offset="0.6543" style="stop-color:#524A48"/>
                <stop  offset="0.66" style="stop-color:#4F4745"/>
                <stop  offset="0.7581" style="stop-color:#5E5B57"/>
                <stop  offset="0.8547" style="stop-color:#71726C"/>
                <stop  offset="0.8835" style="stop-color:#6C6C67"/>
                <stop  offset="0.9204" style="stop-color:#5C5C57"/>
                <stop  offset="0.9616" style="stop-color:#42423F"/>
                <stop  offset="1" style="stop-color:#242321"/>
              </linearGradient>
              <path class="st84" d="M270.9,175.74c2.31,4.68,3.79,11.87,3.79,19.94c0,8.07-1.48,15.26-3.79,19.94v5.61h-6.32
                c-5.59,0-10.12-11.44-10.12-25.56c0-14.11,4.53-25.56,10.12-25.56h6.32V175.74z"/>
              <linearGradient id="SVGID_80_" gradientUnits="userSpaceOnUse" x1="285.4163" y1="200.1827" x2="266.1358" y2="194.2108">
                <stop  offset="0" style="stop-color:#74716F"/>
                <stop  offset="1" style="stop-color:#ABAEAD"/>
              </linearGradient>
              <ellipse class="st85" cx="270.9" cy="195.69" rx="10.12" ry="25.56"/>
              
                <linearGradient id="SVGID_81_" gradientUnits="userSpaceOnUse" x1="516.4205" y1="162.0331" x2="496.2787" y2="162.0331" gradientTransform="matrix(4.489700e-11 -1 -1 -4.489700e-11 434.2008 701.7421)">
                <stop  offset="0" style="stop-color:#262623"/>
                <stop  offset="0.648" style="stop-color:#575753"/>
                <stop  offset="1" style="stop-color:#262623"/>
              </linearGradient>
              <ellipse class="st86" cx="272.17" cy="195.69" rx="4.09" ry="10.34"/>
              <linearGradient id="SVGID_82_" gradientUnits="userSpaceOnUse" x1="266.3343" y1="170.1317" x2="266.3343" y2="221.243">
                <stop  offset="0" style="stop-color:#AFB2B1"/>
                <stop  offset="2.568830e-04" style="stop-color:#AFB2B1"/>
                <stop  offset="0.0902" style="stop-color:#D2D3D3"/>
                <stop  offset="0.1753" style="stop-color:#EBEBEB"/>
                <stop  offset="0.2527" style="stop-color:#FAFAFA"/>
                <stop  offset="0.3156" style="stop-color:#FFFFFF"/>
                <stop  offset="0.3659" style="stop-color:#F4F4F4"/>
                <stop  offset="0.4545" style="stop-color:#D7D7D6"/>
                <stop  offset="0.5702" style="stop-color:#A9A7A7"/>
                <stop  offset="0.66" style="stop-color:#807E7D"/>
                <stop  offset="0.8547" style="stop-color:#8B8A88"/>
                <stop  offset="0.9067" style="stop-color:#868582"/>
                <stop  offset="0.9734" style="stop-color:#777772"/>
                <stop  offset="1" style="stop-color:#6F6F6A"/>
              </linearGradient>
              <path class="st87" d="M262.75,195.69c0,13.28,4.01,24.19,9.14,25.43c-0.32,0.08-0.65,0.12-0.98,0.12
                c-5.59,0-10.12-11.44-10.12-25.56c0-14.11,4.53-25.56,10.12-25.56c0.33,0,0.66,0.04,0.98,0.12
                C266.76,171.5,262.75,182.41,262.75,195.69z"/>
            </g>
            <g>
              <ellipse class="st69" cx="196.69" cy="57.84" rx="7.69" ry="14.48"/>
              
                <linearGradient id="SVGID_83_" gradientUnits="userSpaceOnUse" x1="544.3376" y1="46.5577" x2="544.3376" y2="69.3712" gradientTransform="matrix(-1 0 0 1 759.2192 0)">
                <stop  offset="0" style="stop-color:#564D4E"/>
                <stop  offset="0.034" style="stop-color:#6D6768"/>
                <stop  offset="0.0985" style="stop-color:#949494"/>
                <stop  offset="0.1607" style="stop-color:#B3B7B6"/>
                <stop  offset="0.2192" style="stop-color:#C9D0CF"/>
                <stop  offset="0.2724" style="stop-color:#D6DFDE"/>
                <stop  offset="0.3156" style="stop-color:#DBE4E3"/>
                <stop  offset="0.3588" style="stop-color:#D1D9D8"/>
                <stop  offset="0.435" style="stop-color:#B7BCBA"/>
                <stop  offset="0.5351" style="stop-color:#8C8C8A"/>
                <stop  offset="0.6543" style="stop-color:#524A48"/>
                <stop  offset="0.66" style="stop-color:#4F4745"/>
                <stop  offset="0.7581" style="stop-color:#5E5B57"/>
                <stop  offset="0.8547" style="stop-color:#71726C"/>
                <stop  offset="0.8835" style="stop-color:#6C6C67"/>
                <stop  offset="0.9204" style="stop-color:#5C5C57"/>
                <stop  offset="0.9616" style="stop-color:#42423F"/>
                <stop  offset="1" style="stop-color:#242321"/>
              </linearGradient>
              <path class="st88" d="M238.49,69.37V46.56h-43.5c0,0-3.71,3.42-3.71,11.41c0,9.45,3.71,11.41,3.71,11.41H238.49z"/>
              
                <linearGradient id="SVGID_84_" gradientUnits="userSpaceOnUse" x1="669.0145" y1="205.9334" x2="617.4886" y2="205.9334" gradientTransform="matrix(4.489700e-11 -1 -1 -4.489700e-11 434.2008 701.7421)">
                <stop  offset="0" style="stop-color:#564D4E"/>
                <stop  offset="0.034" style="stop-color:#6D6768"/>
                <stop  offset="0.0985" style="stop-color:#949494"/>
                <stop  offset="0.1607" style="stop-color:#B3B7B6"/>
                <stop  offset="0.2192" style="stop-color:#C9D0CF"/>
                <stop  offset="0.2724" style="stop-color:#D6DFDE"/>
                <stop  offset="0.3156" style="stop-color:#DBE4E3"/>
                <stop  offset="0.3588" style="stop-color:#D1D9D8"/>
                <stop  offset="0.435" style="stop-color:#B7BCBA"/>
                <stop  offset="0.5351" style="stop-color:#8C8C8A"/>
                <stop  offset="0.6543" style="stop-color:#524A48"/>
                <stop  offset="0.66" style="stop-color:#4F4745"/>
                <stop  offset="0.7581" style="stop-color:#5E5B57"/>
                <stop  offset="0.8547" style="stop-color:#71726C"/>
                <stop  offset="0.8835" style="stop-color:#6C6C67"/>
                <stop  offset="0.9204" style="stop-color:#5C5C57"/>
                <stop  offset="0.9616" style="stop-color:#42423F"/>
                <stop  offset="1" style="stop-color:#242321"/>
              </linearGradient>
              <path class="st89" d="M234.59,38.67c2.31,4.68,3.79,11.87,3.79,19.94s-1.48,15.26-3.79,19.94v5.61h-6.32
                c-5.59,0-10.12-11.44-10.12-25.56s4.53-25.56,10.12-25.56h6.32V38.67z"/>
              <linearGradient id="SVGID_85_" gradientUnits="userSpaceOnUse" x1="249.1058" y1="63.1107" x2="229.8253" y2="57.1389">
                <stop  offset="0" style="stop-color:#74716F"/>
                <stop  offset="1" style="stop-color:#ABAEAD"/>
              </linearGradient>
              <ellipse class="st90" cx="234.59" cy="58.62" rx="10.12" ry="25.56"/>
              
                <linearGradient id="SVGID_86_" gradientUnits="userSpaceOnUse" x1="653.4924" y1="198.3436" x2="633.3506" y2="198.3436" gradientTransform="matrix(4.489700e-11 -1 -1 -4.489700e-11 434.2008 701.7421)">
                <stop  offset="0" style="stop-color:#262623"/>
                <stop  offset="0.648" style="stop-color:#575753"/>
                <stop  offset="1" style="stop-color:#262623"/>
              </linearGradient>
              <ellipse class="st91" cx="235.86" cy="58.62" rx="4.09" ry="10.34"/>
              <linearGradient id="SVGID_87_" gradientUnits="userSpaceOnUse" x1="230.0238" y1="33.0597" x2="230.0238" y2="84.1711">
                <stop  offset="0" style="stop-color:#AFB2B1"/>
                <stop  offset="2.568830e-04" style="stop-color:#AFB2B1"/>
                <stop  offset="0.0902" style="stop-color:#D2D3D3"/>
                <stop  offset="0.1753" style="stop-color:#EBEBEB"/>
                <stop  offset="0.2527" style="stop-color:#FAFAFA"/>
                <stop  offset="0.3156" style="stop-color:#FFFFFF"/>
                <stop  offset="0.3659" style="stop-color:#F4F4F4"/>
                <stop  offset="0.4545" style="stop-color:#D7D7D6"/>
                <stop  offset="0.5702" style="stop-color:#A9A7A7"/>
                <stop  offset="0.66" style="stop-color:#807E7D"/>
                <stop  offset="0.8547" style="stop-color:#8B8A88"/>
                <stop  offset="0.9067" style="stop-color:#868582"/>
                <stop  offset="0.9734" style="stop-color:#777772"/>
                <stop  offset="1" style="stop-color:#6F6F6A"/>
              </linearGradient>
              <path class="st92" d="M226.44,58.62c0,13.28,4.01,24.19,9.14,25.43c-0.32,0.08-0.65,0.12-0.98,0.12
                c-5.59,0-10.12-11.44-10.12-25.56s4.53-25.56,10.12-25.56c0.33,0,0.66,0.04,0.98,0.12C230.45,34.43,226.44,45.34,226.44,58.62z"/>
            </g>
            <g>
              <ellipse class="st69" cx="196.69" cy="219.42" rx="7.69" ry="14.48"/>
              
                <linearGradient id="SVGID_88_" gradientUnits="userSpaceOnUse" x1="544.3376" y1="208.1392" x2="544.3376" y2="230.9527" gradientTransform="matrix(-1 0 0 1 759.2192 0)">
                <stop  offset="0" style="stop-color:#564D4E"/>
                <stop  offset="0.034" style="stop-color:#6D6768"/>
                <stop  offset="0.0985" style="stop-color:#949494"/>
                <stop  offset="0.1607" style="stop-color:#B3B7B6"/>
                <stop  offset="0.2192" style="stop-color:#C9D0CF"/>
                <stop  offset="0.2724" style="stop-color:#D6DFDE"/>
                <stop  offset="0.3156" style="stop-color:#DBE4E3"/>
                <stop  offset="0.3588" style="stop-color:#D1D9D8"/>
                <stop  offset="0.435" style="stop-color:#B7BCBA"/>
                <stop  offset="0.5351" style="stop-color:#8C8C8A"/>
                <stop  offset="0.6543" style="stop-color:#524A48"/>
                <stop  offset="0.66" style="stop-color:#4F4745"/>
                <stop  offset="0.7581" style="stop-color:#5E5B57"/>
                <stop  offset="0.8547" style="stop-color:#71726C"/>
                <stop  offset="0.8835" style="stop-color:#6C6C67"/>
                <stop  offset="0.9204" style="stop-color:#5C5C57"/>
                <stop  offset="0.9616" style="stop-color:#42423F"/>
                <stop  offset="1" style="stop-color:#242321"/>
              </linearGradient>
              <path class="st93" d="M238.49,230.95v-22.81h-43.5c0,0-3.71,3.42-3.71,11.41c0,9.45,3.71,11.41,3.71,11.41H238.49z"/>
              
                <linearGradient id="SVGID_89_" gradientUnits="userSpaceOnUse" x1="507.433" y1="205.9334" x2="455.9071" y2="205.9334" gradientTransform="matrix(4.489700e-11 -1 -1 -4.489700e-11 434.2008 701.7421)">
                <stop  offset="0" style="stop-color:#564D4E"/>
                <stop  offset="0.034" style="stop-color:#6D6768"/>
                <stop  offset="0.0985" style="stop-color:#949494"/>
                <stop  offset="0.1607" style="stop-color:#B3B7B6"/>
                <stop  offset="0.2192" style="stop-color:#C9D0CF"/>
                <stop  offset="0.2724" style="stop-color:#D6DFDE"/>
                <stop  offset="0.3156" style="stop-color:#DBE4E3"/>
                <stop  offset="0.3588" style="stop-color:#D1D9D8"/>
                <stop  offset="0.435" style="stop-color:#B7BCBA"/>
                <stop  offset="0.5351" style="stop-color:#8C8C8A"/>
                <stop  offset="0.6543" style="stop-color:#524A48"/>
                <stop  offset="0.66" style="stop-color:#4F4745"/>
                <stop  offset="0.7581" style="stop-color:#5E5B57"/>
                <stop  offset="0.8547" style="stop-color:#71726C"/>
                <stop  offset="0.8835" style="stop-color:#6C6C67"/>
                <stop  offset="0.9204" style="stop-color:#5C5C57"/>
                <stop  offset="0.9616" style="stop-color:#42423F"/>
                <stop  offset="1" style="stop-color:#242321"/>
              </linearGradient>
              <path class="st94" d="M234.59,200.25c2.31,4.68,3.79,11.87,3.79,19.94c0,8.07-1.48,15.26-3.79,19.94v5.61h-6.32
                c-5.59,0-10.12-11.44-10.12-25.56c0-14.11,4.53-25.56,10.12-25.56h6.32V200.25z"/>
              <linearGradient id="SVGID_90_" gradientUnits="userSpaceOnUse" x1="249.1058" y1="224.6922" x2="229.8253" y2="218.7204">
                <stop  offset="0" style="stop-color:#74716F"/>
                <stop  offset="1" style="stop-color:#ABAEAD"/>
              </linearGradient>
              <ellipse class="st95" cx="234.59" cy="220.2" rx="10.12" ry="25.56"/>
              
                <linearGradient id="SVGID_91_" gradientUnits="userSpaceOnUse" x1="491.9109" y1="198.3436" x2="471.7692" y2="198.3436" gradientTransform="matrix(4.489700e-11 -1 -1 -4.489700e-11 434.2008 701.7421)">
                <stop  offset="0" style="stop-color:#262623"/>
                <stop  offset="0.648" style="stop-color:#575753"/>
                <stop  offset="1" style="stop-color:#262623"/>
              </linearGradient>
              <ellipse class="st96" cx="235.86" cy="220.2" rx="4.09" ry="10.34"/>
              <linearGradient id="SVGID_92_" gradientUnits="userSpaceOnUse" x1="230.0238" y1="194.6412" x2="230.0238" y2="245.7526">
                <stop  offset="0" style="stop-color:#AFB2B1"/>
                <stop  offset="2.568830e-04" style="stop-color:#AFB2B1"/>
                <stop  offset="0.0902" style="stop-color:#D2D3D3"/>
                <stop  offset="0.1753" style="stop-color:#EBEBEB"/>
                <stop  offset="0.2527" style="stop-color:#FAFAFA"/>
                <stop  offset="0.3156" style="stop-color:#FFFFFF"/>
                <stop  offset="0.3659" style="stop-color:#F4F4F4"/>
                <stop  offset="0.4545" style="stop-color:#D7D7D6"/>
                <stop  offset="0.5702" style="stop-color:#A9A7A7"/>
                <stop  offset="0.66" style="stop-color:#807E7D"/>
                <stop  offset="0.8547" style="stop-color:#8B8A88"/>
                <stop  offset="0.9067" style="stop-color:#868582"/>
                <stop  offset="0.9734" style="stop-color:#777772"/>
                <stop  offset="1" style="stop-color:#6F6F6A"/>
              </linearGradient>
              <path class="st97" d="M226.44,220.2c0,13.28,4.01,24.19,9.14,25.43c-0.32,0.08-0.65,0.12-0.98,0.12
                c-5.59,0-10.12-11.44-10.12-25.56c0-14.11,4.53-25.56,10.12-25.56c0.33,0,0.66,0.04,0.98,0.12
                C230.45,196.01,226.44,206.92,226.44,220.2z"/>
            </g>
            </svg>
    </div>`);
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

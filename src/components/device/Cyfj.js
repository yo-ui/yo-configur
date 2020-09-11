import Spirit from './../../core/Spirit'

/**
 * 抽烟风机
 */
class Cyfj extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.name = "抽烟风机";
	    this.className = "Cyfj";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4;
	    this.minWidth = 20;
	    this.minHeight = 20;
	    this.linkage = true;
	    this.isPanel = true;
	    this.isBind = true;
	    this.zIndex = 3;
      this.config = {
        bindData: {orgId:'',deviceId:'',devicePoint:''},
        state: {expr:'SwSts',stop:0,start:1,alarm:2}
      };
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
               viewBox="0 0 346 317" style="enable-background:new 0 0 346 317;" xml:space="preserve">
            <style type="text/css">
              .cyfj-st0{fill:#013E2E;}
              .cyfj-st1{fill:url(#cyfj_1_);}
              .cyfj-st2{fill:url(#cyfj_2_);}
              .cyfj-st3{fill:url(#cyfj_3_);}
              .cyfj-st4{fill:url(#cyfj_4_);}
              .cyfj-st5{fill:url(#cyfj_5_);}
              .cyfj-st6{fill:#C0554F;}
              .cyfj-st7{fill:url(#cyfj_6_);}
              .cyfj-st8{fill:#69121A;}
              .cyfj-st9{fill:url(#cyfj_7_);}
              .cyfj-st10{fill:url(#cyfj_8_);}
              .cyfj-st11{fill:url(#cyfj_9_);}
              .cyfj-st12{fill:url(#cyfj_10_);}
              .cyfj-st13{fill:url(#cyfj_11_);}
              .cyfj-st14{fill:url(#cyfj_12_);}
              .cyfj-st15{fill:url(#cyfj_13_);}
              .cyfj-st16{fill:url(#cyfj_14_);}
              .cyfj-st17{fill:url(#cyfj_15_);}
              .cyfj-st18{fill:url(#cyfj_16_);}
              .cyfj-st19{fill:url(#cyfj_17_);}
              .cyfj-st20{fill:url(#cyfj_18_);}
              .cyfj-st21{fill:url(#cyfj_19_);}
              .cyfj-st22{fill:url(#cyfj_20_);}
              .cyfj-st23{fill:url(#cyfj_21_);}
              .cyfj-st24{fill:url(#cyfj_22_);}
              .cyfj-st25{fill:url(#cyfj_23_);}
              .cyfj-st26{fill:url(#cyfj_24_);}
              .cyfj-st27{fill:url(#cyfj_25_);}
              .cyfj-st28{fill:url(#cyfj_26_);}
              .cyfj-st29{fill:url(#cyfj_27_);}
              .cyfj-st30{fill:url(#cyfj_28_);}
              .cyfj-st31{fill:url(#cyfj_29_);}
              .cyfj-st32{fill:url(#cyfj_30_);}
              .cyfj-st33{opacity:0.3;}
              .cyfj-st34{opacity:0.2;fill:#ADD8CB;}
              .cyfj-st35{fill:url(#cyfj_31_);}
              .cyfj-st36{fill:url(#cyfj_32_);}
              .cyfj-st37{fill:url(#cyfj_33_);}
              .cyfj-st38{fill:url(#cyfj_34_);}
              .cyfj-st39{fill:#387E73;}
              .cyfj-st40{fill:#528781;}
              .cyfj-st41{fill:#719E9B;}
              .cyfj-st42{opacity:0.5;fill:#FF0000;}
          
            </style>
            <g id="SVG_base1">
              <path class="cyfj-st0" d="M9.57,146.68C9.57,67.17,38.48,2.45,80.52,0.07C79.72,0.03,78.92,0,78.12,0C34.98,0,0,65.67,0,146.68
                s34.98,146.68,78.12,146.68c0.8,0,1.6-0.03,2.39-0.07C38.48,290.92,9.57,226.19,9.57,146.68z"/>
              <linearGradient id="cyfj_1_" gradientUnits="userSpaceOnUse" x1="4.7831" y1="146.6827" x2="161.0321" y2="146.6827">
                <stop  offset="0" style="stop-color:#156959"/>
                <stop  offset="1" style="stop-color:#01372A"/>
              </linearGradient>
              <path class="cyfj-st1" d="M82.91,0C39.76,0,4.78,65.67,4.78,146.68s34.98,146.68,78.12,146.68s78.12-65.67,78.12-146.68
                S126.05,0,82.91,0z"/>
              <linearGradient id="cyfj_2_" gradientUnits="userSpaceOnUse" x1="226.4117" y1="280.2645" x2="226.4117" y2="13.101">
                <stop  offset="0" style="stop-color:#2C0A0B"/>
                <stop  offset="0.0153" style="stop-color:#2F0B0C"/>
                <stop  offset="0.2286" style="stop-color:#511216"/>
                <stop  offset="0.4043" style="stop-color:#66171C"/>
                <stop  offset="0.5196" style="stop-color:#6E191E"/>
                <stop  offset="0.6476" style="stop-color:#611519"/>
                <stop  offset="0.8815" style="stop-color:#400B0C"/>
                <stop  offset="1" style="stop-color:#2D0505"/>
              </linearGradient>
              <path class="cyfj-st2" d="M272.04,13.73V13.1H114.8v267.16h157.25v-0.62c36.44,0,65.99-59.53,65.99-132.96S308.49,13.73,272.04,13.73z"
                />
              
                <radialGradient id="cyfj_3_" cx="226.4117" cy="146.6827" r="88.146" gradientTransform="matrix(1 0 0 1.5461 0 -80.1085)" gradientUnits="userSpaceOnUse">
                <stop  offset="0" style="stop-color:#000000"/>
                <stop  offset="1" style="stop-color:#000000;stop-opacity:0"/>
              </radialGradient>
              <path class="cyfj-st3" d="M272.04,13.73V13.1H114.8v267.16h157.25v-0.62c36.44,0,65.99-59.53,65.99-132.96S308.49,13.73,272.04,13.73z"
                />
              <linearGradient id="cyfj_4_" gradientUnits="userSpaceOnUse" x1="235.6607" y1="219.3039" x2="235.6607" y2="71.975">
                <stop  offset="0" style="stop-color:#6D1416"/>
                <stop  offset="0.5" style="stop-color:#B23425"/>
                <stop  offset="1" style="stop-color:#821B1E"/>
              </linearGradient>
              <path class="cyfj-st4" d="M275.73,207.89V83.39l-37.8-10.22c-1.14-0.43-2.3-0.74-3.47-0.94l0,0v0c-0.99-0.17-1.99-0.26-2.99-0.26
                c-19.81,0-35.88,32.98-35.88,73.66s16.06,73.66,35.88,73.66c1.3,0,2.59-0.15,3.86-0.42l0,0l0.01,0c0.6-0.13,1.19-0.29,1.78-0.48
                L275.73,207.89z"/>
              <linearGradient id="cyfj_5_" gradientUnits="userSpaceOnUse" x1="241.8497" y1="145.6394" x2="302.8581" y2="145.6394">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
              <ellipse class="cyfj-st5" cx="272.35" cy="145.64" rx="30.5" ry="62.63"/>
              <path class="cyfj-st6" d="M275.35,207.28c-16.58,0-30.02-27.6-30.02-61.64c0-34.04,13.44-61.64,30.02-61.64c1.16,0,2.3,0.15,3.42,0.41
                c-2.07-0.91-4.22-1.4-6.42-1.4c-16.85,0-30.5,28.04-30.5,62.63s13.66,62.63,30.5,62.63c2.2,0,4.35-0.49,6.42-1.4
                C277.65,207.13,276.51,207.28,275.35,207.28z"/>
            </g>
            
              <g class="SVG_ani" style="display: none">
                <g class="f1">
                  <animate values="show;hide;hide;" dur="0.3s" attributeName="class" repeatCount="indefinite"/>
              <linearGradient id="cyfj_6_" gradientUnits="userSpaceOnUse" x1="309.0371" y1="163.0153" x2="299.0661" y2="196.6675">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st7" d="M302.75,150.98c-1.08,26.21-10.02,47.83-21.96,54.87l5.85,22.55c0,0,7.79-6.49,21.42-28.56
                c13.63-22.07,18.17-42.84,18.17-42.84L302.75,150.98z"/>
                  <path class="cyfj-st8" d="M207.45,228.39l-14.93,5.19c0,0,11.61,10.83,23.36,19.47c22.07,16.23,46.08,16.23,46.08,16.23L207.45,228.39z"
                  />
                  <path class="cyfj-st8" d="M200.96,73.92l-5.19-14.93h-3.25c0,0,0.65,22.07,3.25,40.89s6.49,35.05,6.49,35.05h3.25L200.96,73.92z"/>
                  <polygon class="cyfj-st8" points="217.19,133.63 204.21,133.63 202.26,134.93 228.22,142.72 231.47,142.72 	"/>
                  <linearGradient id="cyfj_7_" gradientUnits="userSpaceOnUse" x1="294.799" y1="227.0391" x2="260.3159" y2="237.0101">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st9" d="M287.82,199.63c-3.98,4.81-8.53,7.83-13.4,8.49c-0.07,0.09-0.11,0.15-0.11,0.15s-3.25,1.3-10.38,2.6
                c-10.53,1.91-14.93,1.3-14.93,1.3l-12.33,57.11c0,0,24.66-1.95,37.64-7.14c12.98-5.19,31.15-20.77,31.15-20.77L287.82,199.63z"/>
                  <path class="cyfj-st8" d="M293.11,99.75l2.61,0.78l17.52-34.4h-3.89l-20.23,27.17C290.53,95.23,291.87,97.38,293.11,99.75z"/>
                  <linearGradient id="cyfj_8_" gradientUnits="userSpaceOnUse" x1="296.4812" y1="90.9651" x2="311.8532" y2="105.0907">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st10" d="M291.04,96.14c6.12,9.75,10.38,24.16,11.51,40.64c2.19-6.27,5.44-17.24,7.44-31.7
                c3.25-23.36,3.25-38.94,3.25-38.94L291.04,96.14z"/>
                  <polygon class="cyfj-st8" points="265.36,80.59 272.35,57.7 272.35,22 268.46,22 262.12,79.71 	"/>
                  <linearGradient id="cyfj_9_" gradientUnits="userSpaceOnUse" x1="265.3492" y1="52.5689" x2="282.6686" y2="52.5689">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st11" d="M280.79,42.12C277.55,25.89,272.35,22,272.35,22l-7,58.59l9.44,2.55l7.3-24.14
                C282.09,58.99,284.04,58.35,280.79,42.12z"/>
                  <path class="cyfj-st8" d="M223.68,51.21h3.89l9.74-16.23L239.25,22h-4.54c0,0-5.19,3.25-8.44,12.98S223.68,51.21,223.68,51.21z"/>
                  <polygon class="cyfj-st8" points="235.36,55.75 226.27,46.66 223.68,51.21 238.6,96.64 241.85,96.64 	"/>
                  <linearGradient id="cyfj_10_" gradientUnits="userSpaceOnUse" x1="229.984" y1="61.8808" x2="243.6941" y2="58.5572">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st12" d="M241.85,96.64l-14.28-46.08c0,0,0.65-11.68,3.89-18.17S239.25,22,239.25,22l7.79,55.82
                c0,0-1.95,2.6-3.25,7.79S241.85,96.64,241.85,96.64z"/>
                  <linearGradient id="cyfj_11_" gradientUnits="userSpaceOnUse" x1="206.7434" y1="132.5519" x2="214.2216" y2="98.0688">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st13" d="M195.77,58.99c0,0,0.65,20.12,3.25,38.29c2.6,18.17,6.49,37.64,6.49,37.64l25.96,7.79
                c0,0-1.97-9.19-3.89-18.82c-2.6-12.98-2.6-20.77-2.6-20.77L195.77,58.99z"/>
                  <linearGradient id="cyfj_12_" gradientUnits="userSpaceOnUse" x1="261.183" y1="238.7136" x2="230.4391" y2="230.4044">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st14" d="M226.27,197.89c0,0,6.49,5.84,16.23,9.09c9.74,3.25,19.47,3.89,19.47,3.89l-0.65,58.41
                c0,0-18.17-1.95-33.1-11.03s-31.15-24.66-31.15-24.66L226.27,197.89z"/>
                  <polygon class="cyfj-st8" points="192.52,233.58 197.07,233.58 210.05,231.64 226.27,201.13 226.27,197.89 223.03,199.18 	"/>
                  <path class="cyfj-st8" d="M175,146.61c0,0,7.14,24.01,17.52,42.19s22.72,35.7,22.72,35.7h3.89l-5.19-20.12l-29.21-53.22l-5.84-4.54H175z
                "/>
                  <linearGradient id="cyfj_13_" gradientUnits="userSpaceOnUse" x1="234.3883" y1="190.4392" x2="201.9825" y2="185.8691">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st15" d="M217.19,151.81l-38.29-5.19c0,0,8.44,22.72,16.87,39.59s23.36,38.29,23.36,38.29l21.42-35.7
                c0,0-8.44-7.79-12.98-15.58C223.03,165.43,217.19,151.81,217.19,151.81z"/>
            </g>
                <g class="f2">
                  <animate values="hide;show;hide;" dur="0.3s" attributeName="class" repeatCount="indefinite"/>
              <linearGradient id="cyfj_14_" gradientUnits="userSpaceOnUse" x1="311.1817" y1="136.0885" x2="306.2894" y2="191.0553">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st16" d="M301.93,130.28c0.6,4.92,0.93,10.06,0.93,15.36c0,19.23-4.22,36.43-10.86,47.92l5.02,6.28
                c0,0,7.14-11.68,15.58-31.15c8.44-19.47,13.63-43.48,13.63-43.48L301.93,130.28z"/>
                  <linearGradient id="cyfj_15_" gradientUnits="userSpaceOnUse" x1="298.8515" y1="206.3068" x2="278.7066" y2="228.4662">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st17" d="M294.86,187.92c-4.87,10.92-11.6,18.28-19.15,19.98l-9.54,2.6l4.24,47.75c0,0,11.03-3.89,25.31-17.52
                c14.28-13.63,20.77-23.36,20.77-23.36L294.86,187.92z"/>
                  <polygon class="cyfj-st8" points="218.48,253.7 209.4,253.7 205.5,253.7 232.11,206.97 235.36,206.97 	"/>
                  <linearGradient id="cyfj_16_" gradientUnits="userSpaceOnUse" x1="264.0983" y1="237.2081" x2="236.4709" y2="239.5104">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st18" d="M235.36,206.97c0,0,12.33,4.54,19.47,4.54c7.14,0,14.93-1.95,14.93-1.95l7.14,58.41c0,0-17.52,4.54-35.05,0
                S209.4,253.7,209.4,253.7L235.36,206.97z"/>
                  <polygon class="cyfj-st8" points="252.23,22 252.88,81.71 256.13,83.01 261.97,39.52 256.13,22 	"/>
                  <path class="cyfj-st8" d="M283.56,87.37l12.8-12.8l5.19-29.86h-3.89l-18.19,40.01C280.88,85.42,282.25,86.3,283.56,87.37z"/>
                  <path class="cyfj-st8" d="M219.13,26.54h3.89v25.31l-6.49,22.72h-3.89c0,0-0.65-13.63,1.3-25.96C215.89,36.28,219.13,26.54,219.13,26.54
                z"/>
                  <polygon class="cyfj-st8" points="224.97,77.82 214.59,71.97 212.64,74.57 232.76,109.62 236.66,109.62 	"/>
                  <path class="cyfj-st8" d="M194.47,101.18l-7.79-16.87l-3.89,1.3c0,0,3.89,29.21,8.44,45.43s11.68,35.7,11.68,35.7h3.89L194.47,101.18z"
                  />
                  <path class="cyfj-st8" d="M193.82,185.55l-12.98-7.14l-3.25,1.3c0,0,12.98,24.66,22.72,37.64c9.74,12.98,27.26,29.86,27.26,29.86h4.54
                L193.82,185.55z"/>
                  <path class="cyfj-st8" d="M215.89,249.81l-10.38,3.89c0,0,4.23,4.16,17.52,9.09c17.52,6.49,25.89,6.57,25.89,6.57L215.89,249.81z"/>
                  <linearGradient id="cyfj_17_" gradientUnits="userSpaceOnUse" x1="287.0845" y1="77.5777" x2="304.0638" y2="79.0166">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st19" d="M301.56,44.72l-18.61,42.18c6.39,4.86,11.77,14,15.32,25.72c1.77-6.97,4.18-18.63,4.58-31.55
                C303.51,60.29,301.56,44.72,301.56,44.72z"/>
                  <linearGradient id="cyfj_18_" gradientUnits="userSpaceOnUse" x1="256.1282" y1="52.5042" x2="269.7578" y2="52.5042">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st20" d="M264.57,80.41l5.19-40.89c0,0,0-8.44-3.89-12.98C261.97,22,256.13,22,256.13,22v61.01c0,0,1.3-1.95,3.25-2.6
                C261.32,79.76,264.57,80.41,264.57,80.41z"/>
                  <linearGradient id="cyfj_19_" gradientUnits="userSpaceOnUse" x1="246.909" y1="211.7097" x2="205.468" y2="204.8029">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st21" d="M216.54,168.68c0,0,6.49,11.03,13.63,18.17c7.14,7.14,16.87,12.98,16.87,12.98l-14.93,47.38
                c0,0-18.17-14.28-29.21-31.15c-11.03-16.87-22.07-37.64-22.07-37.64L216.54,168.68z"/>
                  <linearGradient id="cyfj_20_" gradientUnits="userSpaceOnUse" x1="223.643" y1="154.7085" x2="194.0012" y2="117.5843">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st22" d="M186.68,84.31l33.1,32.45c0,0,1.3,10.38,5.19,22.07s7.14,20.12,7.14,20.12l-25.31,7.79
                c0,0-7.79-16.87-12.98-39.59C188.63,104.43,186.68,84.31,186.68,84.31z"/>
                  <linearGradient id="cyfj_21_" gradientUnits="userSpaceOnUse" x1="217.6713" y1="75.1132" x2="230.6216" y2="67.6308">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st23" d="M223.03,26.54c0,0-3.89,9.09-5.19,23.36s-1.3,24.66-1.3,24.66l20.12,35.05c0,0,0-7.79,0-14.93
                c0-7.14,1.95-11.68,1.95-11.68L223.03,26.54z"/>
            </g>
                <g class="f3">
                  <animate values="hide;hide;show;" dur="0.3s" attributeName="class" repeatCount="indefinite"/>
              <path class="cyfj-st8" d="M299.07,115.39l22.61-22h-3.25l-21.16,16.12C297.92,111.4,298.52,113.36,299.07,115.39z"/>
                  <polygon class="cyfj-st8" points="283.39,29.79 270.08,81.86 275.19,83.25 283.39,70.68 287.28,29.79 	"/>
                  <path class="cyfj-st8" d="M243.15,34.98l-2.6-1.3h-3.25c0,0-0.65-3.89,4.54-8.44c5.19-4.54,9.55-2.96,9.55-2.96L243.15,34.98z"/>
                  <path class="cyfj-st8" d="M250.29,38.87c-0.65,0-8.44-9.09-8.44-9.09l-4.54,4.54l7.79,51.92l3.25,1.3L250.29,38.87z"/>
                  <path class="cyfj-st8" d="M210.7,51.86l-1.95-12.98h-3.89c0,0-1.95,22.72-1.3,36.35c0.65,13.63,1.95,27.91,1.95,27.91h3.25L210.7,51.86z
                "/>
                  <polygon class="cyfj-st8" points="219.78,103.13 208.33,97.82 205.5,103.13 228.87,125.2 232.76,125.84 	"/>
                  <polygon class="cyfj-st8" points="231.47,265.38 223.68,266.68 219.78,266.03 239.9,212.16 243.15,212.16 	"/>
                  <linearGradient id="cyfj_22_" gradientUnits="userSpaceOnUse" x1="300.3485" y1="192.6166" x2="292.7633" y2="219.5573">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st24" d="M300.28,170.84c-4.55,21.21-14.65,36.25-26.53,37.36l10.28,34.47c0,0,8.44-8.44,20.77-23.36
                s18.82-30.5,18.82-30.5L300.28,170.84z"/>
                  <linearGradient id="cyfj_23_" gradientUnits="userSpaceOnUse" x1="296.7953" y1="131.9197" x2="316.4123" y2="135.3199">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st25" d="M298.04,111.84c3.05,9.75,4.82,21.35,4.82,33.8c0,10.69-1.3,20.74-3.6,29.55
                c1.58-3.46,9.34-20.75,13.99-37.01c5.19-18.17,8.44-44.78,8.44-44.78L298.04,111.84z"/>
                  <linearGradient id="cyfj_24_" gradientUnits="userSpaceOnUse" x1="275.2635" y1="60.9034" x2="293.8342" y2="60.3803">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st26" d="M287.56,91.33l4.26-7.68c0,0,2.6-5.84,1.3-25.96s-5.84-27.91-5.84-27.91l-13.03,53.34
                C279.08,83.74,283.6,86.65,287.56,91.33z"/>
                  <linearGradient id="cyfj_25_" gradientUnits="userSpaceOnUse" x1="240.5516" y1="54.9181" x2="256.1282" y2="54.9181">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st27" d="M248.99,87.55l-8.44-53.87c0,0,2.6-9.09,8.44-11.03s5.84,4.54,5.84,4.54l1.3,50.62c0,0-2.6,0-4.54,3.25
                S248.99,87.55,248.99,87.55z"/>
                  <linearGradient id="cyfj_26_" gradientUnits="userSpaceOnUse" x1="278.318" y1="227.3458" x2="254.5161" y2="244.0856">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st28" d="M223.68,266.68l19.47-55.17c0,0,8.44,1.3,14.28,1.3c5.84,0,21.42-5.84,21.42-5.84l12.98,51.27
                c0,0-6.91,7.47-33.1,10.38C235.36,271.23,223.68,266.68,223.68,266.68z"/>
                  <polygon class="cyfj-st8" points="191.87,209.57 187.33,208.27 183.44,208.27 219.13,184.91 221.73,184.91 	"/>
                  <path class="cyfj-st8" d="M204.86,212.81l-11.03-10.38l-10.38,5.84c0,0,10.38,17.52,24.66,29.86c14.28,12.33,33.1,24.01,33.1,24.01h3.89
                L204.86,212.81z"/>
                  <linearGradient id="cyfj_27_" gradientUnits="userSpaceOnUse" x1="237.9513" y1="222.5941" x2="214.9341" y2="227.3022">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st29" d="M221.73,184.91l-34.4,23.36c0,0,12.33,18.17,26.61,31.15c14.28,12.98,31.15,22.72,31.15,22.72l9.09-55.17
                c0,0-7.79-0.65-18.82-8.44C224.33,190.75,221.73,184.91,221.73,184.91z"/>
                  <path class="cyfj-st8" d="M186.68,121.95l-5.84-7.79l-3.89,1.3c0,0,5.19,24.01,11.68,40.24c6.49,16.23,18.17,41.54,18.17,41.54h3.89
                L186.68,121.95z"/>
                  <linearGradient id="cyfj_28_" gradientUnits="userSpaceOnUse" x1="229.0721" y1="166.1247" x2="198.9927" y2="156.7086">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st30" d="M180.84,114.16c0,0,5.84,25.31,12.33,42.19c6.49,16.87,17.52,40.89,17.52,40.89l24.66-22.72
                c0,0-7.79-9.74-11.03-18.82c-3.25-9.09-7.14-22.07-7.14-22.07L180.84,114.16z"/>
                  <linearGradient id="cyfj_29_" gradientUnits="userSpaceOnUse" x1="207.9082" y1="98.8385" x2="219.94" y2="83.4064">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st31" d="M208.75,38.87c0,0-2.6,16.87-1.95,33.1c0.65,16.23,1.95,31.15,1.95,31.15l24.01,22.72
                c0,0-1.95-12.98-2.6-21.42c-0.65-8.44,0.65-15.58,0.65-15.58L208.75,38.87z"/>
            </g>
              </g>
            
            
              <g class="SVG_sta" style="display: none">
                <g>
              <path class="cyfj-st8" d="M299.07,115.39l22.61-22h-3.25l-21.16,16.12C297.92,111.4,298.52,113.36,299.07,115.39z"/>
                  <polygon class="cyfj-st8" points="283.39,29.79 270.08,81.86 275.19,83.25 283.39,70.68 287.28,29.79 	"/>
                  <path class="cyfj-st8" d="M243.15,34.98l-2.6-1.3h-3.25c0,0-0.65-3.89,4.54-8.44c5.19-4.54,9.55-2.96,9.55-2.96L243.15,34.98z"/>
                  <path class="cyfj-st8" d="M250.29,38.87c-0.65,0-8.44-9.09-8.44-9.09l-4.54,4.54l7.79,51.92l3.25,1.3L250.29,38.87z"/>
                  <path class="cyfj-st8" d="M210.7,51.86l-1.95-12.98h-3.89c0,0-1.95,22.72-1.3,36.35c0.65,13.63,1.95,27.91,1.95,27.91h3.25L210.7,51.86z
                "/>
                  <polygon class="cyfj-st8" points="219.78,103.13 208.33,97.82 205.5,103.13 228.87,125.2 232.76,125.84 	"/>
                  <polygon class="cyfj-st8" points="231.47,265.38 223.68,266.68 219.78,266.03 239.9,212.16 243.15,212.16 	"/>
                  <linearGradient id="cyfj_22_" gradientUnits="userSpaceOnUse" x1="300.3485" y1="192.6166" x2="292.7633" y2="219.5573">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st24" d="M300.28,170.84c-4.55,21.21-14.65,36.25-26.53,37.36l10.28,34.47c0,0,8.44-8.44,20.77-23.36
                s18.82-30.5,18.82-30.5L300.28,170.84z"/>
                  <linearGradient id="cyfj_23_" gradientUnits="userSpaceOnUse" x1="296.7953" y1="131.9197" x2="316.4123" y2="135.3199">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st25" d="M298.04,111.84c3.05,9.75,4.82,21.35,4.82,33.8c0,10.69-1.3,20.74-3.6,29.55
                c1.58-3.46,9.34-20.75,13.99-37.01c5.19-18.17,8.44-44.78,8.44-44.78L298.04,111.84z"/>
                  <linearGradient id="cyfj_24_" gradientUnits="userSpaceOnUse" x1="275.2635" y1="60.9034" x2="293.8342" y2="60.3803">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st26" d="M287.56,91.33l4.26-7.68c0,0,2.6-5.84,1.3-25.96s-5.84-27.91-5.84-27.91l-13.03,53.34
                C279.08,83.74,283.6,86.65,287.56,91.33z"/>
                  <linearGradient id="cyfj_25_" gradientUnits="userSpaceOnUse" x1="240.5516" y1="54.9181" x2="256.1282" y2="54.9181">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st27" d="M248.99,87.55l-8.44-53.87c0,0,2.6-9.09,8.44-11.03s5.84,4.54,5.84,4.54l1.3,50.62c0,0-2.6,0-4.54,3.25
                S248.99,87.55,248.99,87.55z"/>
                  <linearGradient id="cyfj_26_" gradientUnits="userSpaceOnUse" x1="278.318" y1="227.3458" x2="254.5161" y2="244.0856">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st28" d="M223.68,266.68l19.47-55.17c0,0,8.44,1.3,14.28,1.3c5.84,0,21.42-5.84,21.42-5.84l12.98,51.27
                c0,0-6.91,7.47-33.1,10.38C235.36,271.23,223.68,266.68,223.68,266.68z"/>
                  <polygon class="cyfj-st8" points="191.87,209.57 187.33,208.27 183.44,208.27 219.13,184.91 221.73,184.91 	"/>
                  <path class="cyfj-st8" d="M204.86,212.81l-11.03-10.38l-10.38,5.84c0,0,10.38,17.52,24.66,29.86c14.28,12.33,33.1,24.01,33.1,24.01h3.89
                L204.86,212.81z"/>
                  <linearGradient id="cyfj_27_" gradientUnits="userSpaceOnUse" x1="237.9513" y1="222.5941" x2="214.9341" y2="227.3022">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st29" d="M221.73,184.91l-34.4,23.36c0,0,12.33,18.17,26.61,31.15c14.28,12.98,31.15,22.72,31.15,22.72l9.09-55.17
                c0,0-7.79-0.65-18.82-8.44C224.33,190.75,221.73,184.91,221.73,184.91z"/>
                  <path class="cyfj-st8" d="M186.68,121.95l-5.84-7.79l-3.89,1.3c0,0,5.19,24.01,11.68,40.24c6.49,16.23,18.17,41.54,18.17,41.54h3.89
                L186.68,121.95z"/>
                  <linearGradient id="cyfj_28_" gradientUnits="userSpaceOnUse" x1="229.0721" y1="166.1247" x2="198.9927" y2="156.7086">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st30" d="M180.84,114.16c0,0,5.84,25.31,12.33,42.19c6.49,16.87,17.52,40.89,17.52,40.89l24.66-22.72
                c0,0-7.79-9.74-11.03-18.82c-3.25-9.09-7.14-22.07-7.14-22.07L180.84,114.16z"/>
                  <linearGradient id="cyfj_29_" gradientUnits="userSpaceOnUse" x1="207.9082" y1="98.8385" x2="219.94" y2="83.4064">
                <stop  offset="0" style="stop-color:#BA4D46"/>
                    <stop  offset="1" style="stop-color:#A62124"/>
              </linearGradient>
                  <path class="cyfj-st31" d="M208.75,38.87c0,0-2.6,16.87-1.95,33.1c0.65,16.23,1.95,31.15,1.95,31.15l24.01,22.72
                c0,0-1.95-12.98-2.6-21.42c-0.65-8.44,0.65-15.58,0.65-15.58L208.75,38.87z"/>
            </g>
            
              </g>
            
            <g id="SVG_base2">
              <linearGradient id="cyfj_30_" gradientUnits="userSpaceOnUse" x1="126.6346" y1="282.2048" x2="126.6346" y2="11.1606">
                <stop  offset="0" style="stop-color:#417666"/>
                <stop  offset="0.2346" style="stop-color:#033C2B"/>
                <stop  offset="0.567" style="stop-color:#366C5F"/>
                <stop  offset="0.7598" style="stop-color:#44837A"/>
                <stop  offset="1" style="stop-color:#96B4B6"/>
              </linearGradient>
              <path class="cyfj-st32" d="M192.69,146.68c0-59.73,18.57-111.31,45.46-135.52H82.07v0.63c-36.97,0-66.94,60.39-66.94,134.89
                s29.97,134.89,66.94,134.89v0.63h156.08C211.26,258,192.69,206.41,192.69,146.68z"/>
              <path class="cyfj-st33" d="M18.31,146.68c0-74.5,29.97-134.89,66.94-134.89v-0.63h-3.19v0.63c-36.97,0-66.94,60.39-66.94,134.89
                c0,74.5,29.97,134.89,66.94,134.89v0.63h3.19v-0.63C48.28,281.57,18.31,221.18,18.31,146.68z"/>
              <path class="cyfj-st34" d="M32.31,146.68c0-74.5,29.97-134.89,66.94-134.89v-0.63H85.07v0.63c-36.97,0-66.94,60.39-66.94,134.89
                c0,74.5,29.97,134.89,66.94,134.89v0.63h14.19v-0.63C62.28,281.57,32.31,221.18,32.31,146.68z"/>
              <path class="cyfj-st34" d="M256.09,282.2L231,267l-35-65v-98l25-65l31.41-27.84h-13.34v0.63c-36.97,0-66.94,60.39-66.94,134.89
                s29.97,134.89,66.94,134.89v0.63H256.09z"/>
              <path class="cyfj-st0" d="M194.53,146.68c0-79.51,28.91-144.23,70.95-146.61C264.69,0.03,263.89,0,263.09,0
                c-43.15,0-78.12,65.67-78.12,146.68s34.98,146.68,78.12,146.68c0.8,0,1.6-0.03,2.39-0.07
                C223.44,290.92,194.53,226.19,194.53,146.68z"/>
              <linearGradient id="cyfj_31_" gradientUnits="userSpaceOnUse" x1="189.751" y1="146.6827" x2="346" y2="146.6827">
                <stop  offset="0" style="stop-color:#BF5851"/>
                <stop  offset="1" style="stop-color:#A72024"/>
              </linearGradient>
              <path class="cyfj-st35" d="M267.88,0c-43.15,0-78.12,65.67-78.12,146.68s34.98,146.68,78.12,146.68S346,227.69,346,146.68
                S311.02,0,267.88,0z M269.47,278.4c-36.1,0-65.37-58.97-65.37-131.72s29.27-131.72,65.37-131.72s65.37,58.97,65.37,131.72
                S305.57,278.4,269.47,278.4z"/>
              <path class="cyfj-st6" d="M269.47,14.97c-0.53,0-1.06,0.06-1.59,0.08c35.36,1.71,63.78,59.97,63.78,131.63s-28.41,129.92-63.78,131.63
                c0.53,0.03,1.06,0.08,1.59,0.08c36.1,0,65.37-58.97,65.37-131.72S305.57,14.97,269.47,14.97z"/>
              <linearGradient id="cyfj_32_" gradientUnits="userSpaceOnUse" x1="78.2338" y1="137.9746" x2="123.4193" y2="137.9746">
                <stop  offset="0" style="stop-color:#156959"/>
                <stop  offset="1" style="stop-color:#01372A"/>
              </linearGradient>
              <path class="cyfj-st36" d="M121.12,146.68c0-12.15,0.8-23.93,2.3-35.13H83.03c-2.65,0-4.79,2.15-4.79,4.79v43.26
                c0,2.65,2.15,4.79,4.79,4.79h38.67C121.32,158.6,121.12,152.69,121.12,146.68z"/>
              <polygon class="cyfj-st0" points="91,249 87,249 70,317 74,317 85,287 	"/>
              <linearGradient id="cyfj_33_" gradientUnits="userSpaceOnUse" x1="78.4043" y1="283.1667" x2="139.2846" y2="281.4518">
                <stop  offset="0" style="stop-color:#156959"/>
                <stop  offset="1" style="stop-color:#01372A"/>
              </linearGradient>
              <path class="cyfj-st37" d="M134.07,282.2v-0.63c-16.63,0-31.85-12.23-43.55-32.46L74,317l63.63-34.8H134.07z"/>
              <polygon class="cyfj-st0" points="173,249 169,249 152,317 156,317 167,287 	"/>
              <linearGradient id="cyfj_34_" gradientUnits="userSpaceOnUse" x1="160.4043" y1="283.1667" x2="221.2846" y2="281.4518">
                <stop  offset="0" style="stop-color:#156959"/>
                <stop  offset="1" style="stop-color:#01372A"/>
              </linearGradient>
              <path class="cyfj-st38" d="M216.07,282.2v-0.63c-16.63,0-31.85-12.23-43.55-32.46L156,317l63.63-34.8H216.07z"/>
              <path class="cyfj-st39" d="M107.6,164.4H66.01c-2,0-3.63-1.62-3.63-3.63v-45.59c0-2,1.62-3.63,3.63-3.63h41.59c2,0,3.63,1.62,3.63,3.63
                v45.59C111.23,162.77,109.6,164.4,107.6,164.4z"/>
              <polygon class="cyfj-st40" points="73.05,114.29 63.49,123.86 63.49,153.68 73.05,163.24 97.59,163.24 107.15,153.68 107.15,123.86 
                97.59,114.29 	"/>
              <polygon class="cyfj-st41" points="97.59,114.29 73.05,114.29 71.54,115.8 95.5,115.8 105.06,125.36 105.06,155.78 107.15,153.68 
                107.15,123.86 	"/>
            </g>
            
            
            
            <g class="SVG_alert" style="display: none">
              <path class="cyfj-st42" d="M267.88,0c-0.8,0-1.6,0.03-2.39,0.07c0,0,0,0,0,0C264.69,0.03,263.89,0,263.09,0
                c-10.6,0-20.71,3.97-29.93,11.16H112.84C103.62,3.97,93.51,0,82.91,0c-0.8,0-1.6,0.03-2.4,0.07c0,0,0,0,0,0
                C79.72,0.03,78.92,0,78.12,0C34.98,0,0,65.67,0,146.68c0,79.63,33.79,144.43,75.92,146.62L70,317h4l63.63-34.8h23.07L152,317h4
                l63.63-34.8h13.54c9.22,7.19,19.33,11.16,29.93,11.16c0.8,0,1.6-0.03,2.39-0.07c0,0-0.01,0-0.01,0c0.8,0.05,1.6,0.08,2.4,0.08
                c43.15,0,78.12-65.67,78.12-146.68C346,65.67,311.02,0,267.88,0z"/>
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
			zIndex: this.zIndex,
      isLinkPoint: this.isLinkPoint
		};
		return Object.assign(super.toJson(),json);
	}

  reveal(device,config) {
    let that = this;
    let state = that.config.state;
    if(device) {
      device.points.forEach(function(point) {
        if(point.id==state.expr) {
          if(point.value==state.alarm) {
            that.alarm();
          }else if(point.value==state.stop) {
            that.stop();
          }else if(point.value==state.start) {
            that.start();
          }
        }
      })
    }
  }
}

export default Cyfj;

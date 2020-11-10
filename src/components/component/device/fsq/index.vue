// 壁挂式电表
<template>
  <div class="bm-device-fsq-com" :style="comStyle">
    <!-- :viewBox="`${info.vBoxx} ${info.vBoxy} ${info.width} ${info.height}`" -->
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 206 104`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
       .fsq-st0{fill:url(#fsq_1_);}
                .fsq-st1{fill:url(#fsq_2_);}
                .fsq-st2{fill:url(#fsq_3_);}
                .fsq-st3{fill:url(#fsq_4_);}
                .fsq-st4{fill:url(#fsq_5_);}
                .fsq-st5{fill:#3F9CFF;}
                .fsq-st6{fill:url(#fsq_6_);}
                .fsq-st7{fill:url(#fsq_7_);}
                .fsq-st8{fill:url(#fsq_8_);}
                .fsq-st9{fill:url(#fsq_9_);}
                .fsq-st10{fill:url(#fsq_10_);}
                .fsq-st11{fill:url(#fsq_11_);}
                .fsq-st12{fill:url(#fsq_12_);}
                .fsq-st13{fill:url(#fsq_13_);}
                .fsq-st14{fill:url(#fsq_14_);}
                .fsq-st15{fill:url(#fsq_15_);}
                .fsq-st16{fill:url(#fsq_16_);}
                .fsq-st17{fill:url(#fsq_17_);}
                .fsq-st18{fill:url(#fsq_18_);}
                .fsq-st19{fill:url(#fsq_19_);}
                .fsq-st20{fill:url(#fsq_20_);}
                .fsq-st21{fill:url(#fsq_21_);}
                .fsq-st22{fill:url(#fsq_22_);}
                .fsq-st23{fill:url(#fsq_23_);}
                .fsq-st24{fill:url(#fsq_24_);}
                .fsq-st25{fill:url(#fsq_25_);}
                .fsq-st26{fill:url(#fsq_26_);}
                .fsq-st27{fill:url(#fsq_27_);}
                .fsq-st28{fill:url(#fsq_28_);}
                .fsq-st29{fill:url(#fsq_29_);}
                .fsq-st30{fill:url(#fsq_30_);}
                .fsq-st31{fill:url(#fsq_31_);}
                .fsq-st32{fill:url(#fsq_32_);}
                .fsq-st33{fill:url(#fsq_33_);}
                .fsq-st34{fill:url(#fsq_34_);}
                .fsq-st35{fill:url(#fsq_35_);}
                .fsq-st36{fill:url(#fsq_36_);}
                .fsq-st37{fill:url(#fsq_37_);}
                .fsq-st38{fill:url(#fsq_38_);}
                .fsq-st39{opacity:0.4;}
                .fsq-st40{fill:#FFFFFF;}
                .fsq-st41{fill:#5F6675;}
                .fsq-st42{fill:#014C90;}
      </style>
      `
        "
      ></defs>
      <linearGradient id="fsq_1_" gradientUnits="userSpaceOnUse" x1="-267.1655" y1="248.5421" x2="-195.2276" y2="248.5421" gradientTransform="matrix(0 1 -1 0 339.8212 290.1788)">
                <stop  offset="0" style="stop-color:#106BDD"/>
                <stop  offset="0.3324" style="stop-color:#A9DBFE"/>
                <stop  offset="0.7374" style="stop-color:#0055C8"/>
                <stop  offset="0.7818" style="stop-color:#0053C4"/>
                <stop  offset="0.8296" style="stop-color:#004DB7"/>
                <stop  offset="0.8792" style="stop-color:#0044A1"/>
                <stop  offset="0.9298" style="stop-color:#003783"/>
                <stop  offset="0.9809" style="stop-color:#00265C"/>
                <stop  offset="1" style="stop-color:#001F4C"/>
              </linearGradient>
              <path class="fsq-st0" d="M182.56,23.01H21.1C12.13,23.01,0,39.12,0,58.98s12.13,35.97,21.1,35.97h161.46V23.01z"/>
              <radialGradient id="fsq_2_" cx="-485.138" cy="110.0239" r="163.9701" gradientTransform="matrix(0 0.6013 -0.5908 0 294.4867 332.3863)" gradientUnits="userSpaceOnUse">
                <stop  offset="0" style="stop-color:#68ACF0"/>
                <stop  offset="0.3324" style="stop-color:#A8DBFE"/>
                <stop  offset="0.7151" style="stop-color:#0053C2"/>
                <stop  offset="1" style="stop-color:#071637"/>
              </radialGradient>
              <path class="fsq-st1" d="M182.56,94.95c-8.97,0-16.24-16.1-16.24-35.97s7.27-35.97,16.24-35.97s23.05,16.1,23.05,35.97
                S191.53,94.95,182.56,94.95z"/>
              <radialGradient id="fsq_3_" cx="-458.0744" cy="324.2717" r="93.5925" gradientTransform="matrix(0 0.6013 -0.2529 0 105.7726 332.3863)" gradientUnits="userSpaceOnUse">
                <stop  offset="0.6272" style="stop-color:#162C53;stop-opacity:0"/>
                <stop  offset="1" style="stop-color:#232E5B;stop-opacity:0.5"/>
              </radialGradient>
              <path class="fsq-st2" d="M21.57,23.01H21.1C12.13,23.01,0,39.12,0,58.98s12.13,35.97,21.1,35.97h0.47V23.01z"/>
              <radialGradient id="fsq_4_" cx="148.0405" cy="95.285" r="19.5111" gradientUnits="userSpaceOnUse">
                <stop  offset="0.595" style="stop-color:#292A22;stop-opacity:0.5"/>
                <stop  offset="1" style="stop-color:#292A22;stop-opacity:0"/>
              </radialGradient>
              <polygon class="fsq-st3" points="143.83,73 120.61,94.95 141.83,95 "/>
              <linearGradient id="fsq_5_" gradientUnits="userSpaceOnUse" x1="142.9054" y1="88.554" x2="153.7762" y2="88.554">
                <stop  offset="0" style="stop-color:#1066DD"/>
                <stop  offset="1" style="stop-color:#0E489C"/>
              </linearGradient>
              <path class="fsq-st4" d="M147.49,73.28c0,0,1.04,4.59,2.82,7.43c1.78,2.84,3.46,5.09,3.46,5.09v9.12l-10.87,8.9l2.21-25.3L147.49,73.28z
                "/>
              <polygon class="fsq-st5" points="147.49,73.28 143.62,73.28 139.04,103.83 142.91,103.83 "/>
              <radialGradient id="fsq_6_" cx="35.0405" cy="95.285" r="19.5111" gradientUnits="userSpaceOnUse">
                <stop  offset="0.595" style="stop-color:#292A22;stop-opacity:0.5"/>
                <stop  offset="1" style="stop-color:#292A22;stop-opacity:0"/>
              </radialGradient>
              <polygon class="fsq-st6" points="30.83,73 7.61,94.95 28.83,95 "/>
              <linearGradient id="fsq_7_" gradientUnits="userSpaceOnUse" x1="29.9054" y1="88.554" x2="40.7762" y2="88.554">
                <stop  offset="0" style="stop-color:#1066DD"/>
                <stop  offset="1" style="stop-color:#0E489C"/>
              </linearGradient>
              <path class="fsq-st7" d="M34.49,73.28c0,0,1.04,4.59,2.82,7.43c1.78,2.84,3.46,5.09,3.46,5.09v9.12l-10.87,8.9l2.21-25.3L34.49,73.28z"
                />
              <polygon class="fsq-st5" points="34.49,73.28 30.62,73.28 26.04,103.83 29.91,103.83 "/>
              <radialGradient id="fsq_8_" cx="-461.3518" cy="162.0662" r="81.9134" gradientTransform="matrix(0 0.6013 -0.4064 0 245.3862 332.3863)" gradientUnits="userSpaceOnUse">
                <stop  offset="0.6272" style="stop-color:#001638;stop-opacity:0"/>
                <stop  offset="1" style="stop-color:#011337;stop-opacity:0.5"/>
              </radialGradient>
              <path class="fsq-st8" d="M182.56,94.95c-8.97,0-16.24-16.1-16.24-35.97s7.27-35.97,16.24-35.97s23.05,16.1,23.05,35.97
                S191.53,94.95,182.56,94.95z"/>
              <linearGradient id="fsq_9_" gradientUnits="userSpaceOnUse" x1="158.3202" y1="17.5357" x2="170.0414" y2="17.5357">
                <stop  offset="0" style="stop-color:#106BDD"/>
                <stop  offset="0.3324" style="stop-color:#A9DBFE"/>
                <stop  offset="0.7374" style="stop-color:#0055C8"/>
                <stop  offset="0.7818" style="stop-color:#0053C4"/>
                <stop  offset="0.8296" style="stop-color:#004DB7"/>
                <stop  offset="0.8792" style="stop-color:#0044A1"/>
                <stop  offset="0.9298" style="stop-color:#003783"/>
                <stop  offset="0.9809" style="stop-color:#00265C"/>
                <stop  offset="1" style="stop-color:#001F4C"/>
              </linearGradient>
              <path class="fsq-st9" d="M170.08,26.47c0,0-2.07,2.16-5.79,2.16s-5.97-2.16-5.97-2.16V6.44h11.76V26.47z"/>
              <radialGradient id="fsq_10_" cx="164.3856" cy="8.0058" r="16.9918" gradientTransform="matrix(1 0 0 0.3105 0 5.5198)" gradientUnits="userSpaceOnUse">
                <stop  offset="0.595" style="stop-color:#292A22;stop-opacity:0.5"/>
                <stop  offset="1" style="stop-color:#292A22;stop-opacity:0"/>
              </radialGradient>
              <rect x="158.32" y="6.28" class="fsq-st10" width="11.76" height="9.71"/>
              <linearGradient id="fsq_11_" gradientUnits="userSpaceOnUse" x1="150.7933" y1="7.0318" x2="177.4801" y2="7.0318">
                <stop  offset="0" style="stop-color:#106BDD"/>
                <stop  offset="0.3324" style="stop-color:#A9DBFE"/>
                <stop  offset="0.7374" style="stop-color:#0055C8"/>
                <stop  offset="0.7818" style="stop-color:#0053C4"/>
                <stop  offset="0.8296" style="stop-color:#004DB7"/>
                <stop  offset="0.8792" style="stop-color:#0044A1"/>
                <stop  offset="0.9298" style="stop-color:#003783"/>
                <stop  offset="0.9809" style="stop-color:#00265C"/>
                <stop  offset="1" style="stop-color:#001F4C"/>
              </linearGradient>
              <path class="fsq-st11" d="M174.53,4.33c-2.43-0.99-6.15-1.62-10.33-1.62s-7.9,0.63-10.33,1.62h-2.91v2.7c0,2.39,5.93,4.33,13.24,4.33
                c7.31,0,13.24-1.94,13.24-4.33v-2.7H174.53z"/>
              <linearGradient id="fsq_12_" gradientUnits="userSpaceOnUse" x1="161.4031" y1="8.168" x2="166.4442" y2="1.2489">
                <stop  offset="0" style="stop-color:#62A7EF"/>
                <stop  offset="1" style="stop-color:#3586E5"/>
              </linearGradient>
              <ellipse class="fsq-st12" cx="164.2" cy="4.33" rx="13.24" ry="4.33"/>
              <linearGradient id="fsq_13_" gradientUnits="userSpaceOnUse" x1="169.5701" y1="3.7863" x2="159.1381" y2="3.7863">
                <stop  offset="0" style="stop-color:#003073"/>
                <stop  offset="0.3771" style="stop-color:#0053C3"/>
                <stop  offset="1" style="stop-color:#022B65"/>
              </linearGradient>
              <ellipse class="fsq-st13" cx="164.2" cy="3.79" rx="5.35" ry="1.75"/>
              <linearGradient id="fsq_14_" gradientUnits="userSpaceOnUse" x1="177.4802" y1="5.6649" x2="151.1257" y2="6.4954">
                <stop  offset="0.014" style="stop-color:#8BC5F8"/>
                <stop  offset="0.5251" style="stop-color:#E3ECFF"/>
                <stop  offset="1" style="stop-color:#96CDFA"/>
              </linearGradient>
              <path class="fsq-st14" d="M164.2,7.81c-6.88,0-12.53-1.71-13.17-3.91c-0.04,0.14-0.06,0.28-0.06,0.42c0,2.39,5.93,4.33,13.24,4.33
                c7.31,0,13.24-1.94,13.24-4.33c0-0.14-0.02-0.28-0.06-0.42C176.73,6.1,171.08,7.81,164.2,7.81z"/>
              <linearGradient id="fsq_15_" gradientUnits="userSpaceOnUse" x1="124.5702" y1="17.5357" x2="136.2914" y2="17.5357">
                <stop  offset="0" style="stop-color:#106BDD"/>
                <stop  offset="0.3324" style="stop-color:#A9DBFE"/>
                <stop  offset="0.7374" style="stop-color:#0055C8"/>
                <stop  offset="0.7818" style="stop-color:#0053C4"/>
                <stop  offset="0.8296" style="stop-color:#004DB7"/>
                <stop  offset="0.8792" style="stop-color:#0044A1"/>
                <stop  offset="0.9298" style="stop-color:#003783"/>
                <stop  offset="0.9809" style="stop-color:#00265C"/>
                <stop  offset="1" style="stop-color:#001F4C"/>
              </linearGradient>
              <path class="fsq-st15" d="M136.33,26.47c0,0-2.07,2.16-5.79,2.16c-3.72,0-5.97-2.16-5.97-2.16V6.44h11.76V26.47z"/>
              <radialGradient id="fsq_16_" cx="130.6356" cy="8.0058" r="16.9918" gradientTransform="matrix(1 0 0 0.3105 0 5.5198)" gradientUnits="userSpaceOnUse">
                <stop  offset="0.595" style="stop-color:#292A22;stop-opacity:0.5"/>
                <stop  offset="1" style="stop-color:#292A22;stop-opacity:0"/>
              </radialGradient>
              <rect x="124.57" y="6.28" class="fsq-st16" width="11.76" height="9.71"/>
              <linearGradient id="fsq_17_" gradientUnits="userSpaceOnUse" x1="117.0433" y1="7.0318" x2="143.7301" y2="7.0318">
                <stop  offset="0" style="stop-color:#106BDD"/>
                <stop  offset="0.3324" style="stop-color:#A9DBFE"/>
                <stop  offset="0.7374" style="stop-color:#0055C8"/>
                <stop  offset="0.7818" style="stop-color:#0053C4"/>
                <stop  offset="0.8296" style="stop-color:#004DB7"/>
                <stop  offset="0.8792" style="stop-color:#0044A1"/>
                <stop  offset="0.9298" style="stop-color:#003783"/>
                <stop  offset="0.9809" style="stop-color:#00265C"/>
                <stop  offset="1" style="stop-color:#001F4C"/>
              </linearGradient>
              <path class="fsq-st17" d="M140.78,4.33c-2.43-0.99-6.15-1.62-10.33-1.62c-4.18,0-7.9,0.63-10.33,1.62h-2.91v2.7
                c0,2.39,5.93,4.33,13.24,4.33c7.31,0,13.24-1.94,13.24-4.33v-2.7H140.78z"/>
              <linearGradient id="fsq_18_" gradientUnits="userSpaceOnUse" x1="127.6531" y1="8.168" x2="132.6942" y2="1.2489">
                <stop  offset="0" style="stop-color:#62A7EF"/>
                <stop  offset="1" style="stop-color:#3586E5"/>
              </linearGradient>
              <ellipse class="fsq-st18" cx="130.45" cy="4.33" rx="13.24" ry="4.33"/>
              <linearGradient id="fsq_19_" gradientUnits="userSpaceOnUse" x1="135.8201" y1="3.7863" x2="125.3881" y2="3.7863">
                <stop  offset="0" style="stop-color:#003073"/>
                <stop  offset="0.3771" style="stop-color:#0053C3"/>
                <stop  offset="1" style="stop-color:#022B65"/>
              </linearGradient>
              <ellipse class="fsq-st19" cx="130.45" cy="3.79" rx="5.35" ry="1.75"/>
              <linearGradient id="fsq_20_" gradientUnits="userSpaceOnUse" x1="143.7302" y1="5.6649" x2="117.3757" y2="6.4954">
                <stop  offset="0.014" style="stop-color:#8BC5F8"/>
                <stop  offset="0.5251" style="stop-color:#E3ECFF"/>
                <stop  offset="1" style="stop-color:#96CDFA"/>
              </linearGradient>
              <path class="fsq-st20" d="M130.45,7.81c-6.88,0-12.53-1.71-13.17-3.91c-0.04,0.14-0.06,0.28-0.06,0.42c0,2.39,5.93,4.33,13.24,4.33
                c7.31,0,13.24-1.94,13.24-4.33c0-0.14-0.02-0.28-0.06-0.42C142.98,6.1,137.33,7.81,130.45,7.81z"/>
              <linearGradient id="fsq_21_" gradientUnits="userSpaceOnUse" x1="90.8202" y1="17.5357" x2="102.5414" y2="17.5357">
                <stop  offset="0" style="stop-color:#106BDD"/>
                <stop  offset="0.3324" style="stop-color:#A9DBFE"/>
                <stop  offset="0.7374" style="stop-color:#0055C8"/>
                <stop  offset="0.7818" style="stop-color:#0053C4"/>
                <stop  offset="0.8296" style="stop-color:#004DB7"/>
                <stop  offset="0.8792" style="stop-color:#0044A1"/>
                <stop  offset="0.9298" style="stop-color:#003783"/>
                <stop  offset="0.9809" style="stop-color:#00265C"/>
                <stop  offset="1" style="stop-color:#001F4C"/>
              </linearGradient>
              <path class="fsq-st21" d="M102.58,26.47c0,0-2.07,2.16-5.79,2.16s-5.97-2.16-5.97-2.16V6.44h11.76V26.47z"/>
              <radialGradient id="fsq_22_" cx="96.8856" cy="8.0058" r="16.9918" gradientTransform="matrix(1 0 0 0.3105 0 5.5198)" gradientUnits="userSpaceOnUse">
                <stop  offset="0.595" style="stop-color:#292A22;stop-opacity:0.5"/>
                <stop  offset="1" style="stop-color:#292A22;stop-opacity:0"/>
              </radialGradient>
              <rect x="90.82" y="6.28" class="fsq-st22" width="11.76" height="9.71"/>
              <linearGradient id="fsq_23_" gradientUnits="userSpaceOnUse" x1="83.2933" y1="7.0318" x2="109.9801" y2="7.0318">
                <stop  offset="0" style="stop-color:#106BDD"/>
                <stop  offset="0.3324" style="stop-color:#A9DBFE"/>
                <stop  offset="0.7374" style="stop-color:#0055C8"/>
                <stop  offset="0.7818" style="stop-color:#0053C4"/>
                <stop  offset="0.8296" style="stop-color:#004DB7"/>
                <stop  offset="0.8792" style="stop-color:#0044A1"/>
                <stop  offset="0.9298" style="stop-color:#003783"/>
                <stop  offset="0.9809" style="stop-color:#00265C"/>
                <stop  offset="1" style="stop-color:#001F4C"/>
              </linearGradient>
              <path class="fsq-st23" d="M107.03,4.33C104.6,3.34,100.88,2.7,96.7,2.7s-7.9,0.63-10.33,1.62h-2.91v2.7c0,2.39,5.93,4.33,13.24,4.33
                s13.24-1.94,13.24-4.33v-2.7H107.03z"/>
              <linearGradient id="fsq_24_" gradientUnits="userSpaceOnUse" x1="93.9031" y1="8.168" x2="98.9442" y2="1.2489">
                <stop  offset="0" style="stop-color:#62A7EF"/>
                <stop  offset="1" style="stop-color:#3586E5"/>
              </linearGradient>
              <ellipse class="fsq-st24" cx="96.7" cy="4.33" rx="13.24" ry="4.33"/>
              <linearGradient id="fsq_25_" gradientUnits="userSpaceOnUse" x1="102.0701" y1="3.7863" x2="91.6381" y2="3.7863">
                <stop  offset="0" style="stop-color:#003073"/>
                <stop  offset="0.3771" style="stop-color:#0053C3"/>
                <stop  offset="1" style="stop-color:#022B65"/>
              </linearGradient>
              <ellipse class="fsq-st25" cx="96.7" cy="3.79" rx="5.35" ry="1.75"/>
              <linearGradient id="fsq_26_" gradientUnits="userSpaceOnUse" x1="109.9802" y1="5.6649" x2="83.6257" y2="6.4954">
                <stop  offset="0.014" style="stop-color:#8BC5F8"/>
                <stop  offset="0.5251" style="stop-color:#E3ECFF"/>
                <stop  offset="1" style="stop-color:#96CDFA"/>
              </linearGradient>
              <path class="fsq-st26" d="M96.7,7.81c-6.88,0-12.53-1.71-13.17-3.91c-0.04,0.14-0.06,0.28-0.06,0.42c0,2.39,5.93,4.33,13.24,4.33
                s13.24-1.94,13.24-4.33c0-0.14-0.02-0.28-0.06-0.42C109.23,6.1,103.58,7.81,96.7,7.81z"/>
              <linearGradient id="fsq_27_" gradientUnits="userSpaceOnUse" x1="57.0702" y1="17.5357" x2="68.7914" y2="17.5357">
                <stop  offset="0" style="stop-color:#106BDD"/>
                <stop  offset="0.3324" style="stop-color:#A9DBFE"/>
                <stop  offset="0.7374" style="stop-color:#0055C8"/>
                <stop  offset="0.7818" style="stop-color:#0053C4"/>
                <stop  offset="0.8296" style="stop-color:#004DB7"/>
                <stop  offset="0.8792" style="stop-color:#0044A1"/>
                <stop  offset="0.9298" style="stop-color:#003783"/>
                <stop  offset="0.9809" style="stop-color:#00265C"/>
                <stop  offset="1" style="stop-color:#001F4C"/>
              </linearGradient>
              <path class="fsq-st27" d="M68.83,26.47c0,0-2.07,2.16-5.79,2.16s-5.97-2.16-5.97-2.16V6.44h11.76V26.47z"/>
              <radialGradient id="fsq_28_" cx="63.1356" cy="8.0058" r="16.9918" gradientTransform="matrix(1 0 0 0.3105 0 5.5198)" gradientUnits="userSpaceOnUse">
                <stop  offset="0.595" style="stop-color:#292A22;stop-opacity:0.5"/>
                <stop  offset="1" style="stop-color:#292A22;stop-opacity:0"/>
              </radialGradient>
              <rect x="57.07" y="6.28" class="fsq-st28" width="11.76" height="9.71"/>
              <linearGradient id="fsq_29_" gradientUnits="userSpaceOnUse" x1="49.5433" y1="7.0318" x2="76.2301" y2="7.0318">
                <stop  offset="0" style="stop-color:#106BDD"/>
                <stop  offset="0.3324" style="stop-color:#A9DBFE"/>
                <stop  offset="0.7374" style="stop-color:#0055C8"/>
                <stop  offset="0.7818" style="stop-color:#0053C4"/>
                <stop  offset="0.8296" style="stop-color:#004DB7"/>
                <stop  offset="0.8792" style="stop-color:#0044A1"/>
                <stop  offset="0.9298" style="stop-color:#003783"/>
                <stop  offset="0.9809" style="stop-color:#00265C"/>
                <stop  offset="1" style="stop-color:#001F4C"/>
              </linearGradient>
              <path class="fsq-st29" d="M73.28,4.33C70.85,3.34,67.13,2.7,62.95,2.7s-7.9,0.63-10.33,1.62h-2.91v2.7c0,2.39,5.93,4.33,13.24,4.33
                s13.24-1.94,13.24-4.33v-2.7H73.28z"/>
              <linearGradient id="fsq_30_" gradientUnits="userSpaceOnUse" x1="60.1531" y1="8.168" x2="65.1942" y2="1.2489">
                <stop  offset="0" style="stop-color:#62A7EF"/>
                <stop  offset="1" style="stop-color:#3586E5"/>
              </linearGradient>
              <ellipse class="fsq-st30" cx="62.95" cy="4.33" rx="13.24" ry="4.33"/>
              <linearGradient id="fsq_31_" gradientUnits="userSpaceOnUse" x1="68.3201" y1="3.7863" x2="57.8881" y2="3.7863">
                <stop  offset="0" style="stop-color:#003073"/>
                <stop  offset="0.3771" style="stop-color:#0053C3"/>
                <stop  offset="1" style="stop-color:#022B65"/>
              </linearGradient>
              <ellipse class="fsq-st31" cx="62.95" cy="3.79" rx="5.35" ry="1.75"/>
              <linearGradient id="fsq_32_" gradientUnits="userSpaceOnUse" x1="76.2302" y1="5.6649" x2="49.8757" y2="6.4954">
                <stop  offset="0.014" style="stop-color:#8BC5F8"/>
                <stop  offset="0.5251" style="stop-color:#E3ECFF"/>
                <stop  offset="1" style="stop-color:#96CDFA"/>
              </linearGradient>
              <path class="fsq-st32" d="M62.95,7.81c-6.88,0-12.53-1.71-13.17-3.91c-0.04,0.14-0.06,0.28-0.06,0.42c0,2.39,5.93,4.33,13.24,4.33
                s13.24-1.94,13.24-4.33c0-0.14-0.02-0.28-0.06-0.42C75.48,6.1,69.83,7.81,62.95,7.81z"/>
              <linearGradient id="fsq_33_" gradientUnits="userSpaceOnUse" x1="23.3202" y1="17.5357" x2="35.0414" y2="17.5357">
                <stop  offset="0" style="stop-color:#106BDD"/>
                <stop  offset="0.3324" style="stop-color:#A9DBFE"/>
                <stop  offset="0.7374" style="stop-color:#0055C8"/>
                <stop  offset="0.7818" style="stop-color:#0053C4"/>
                <stop  offset="0.8296" style="stop-color:#004DB7"/>
                <stop  offset="0.8792" style="stop-color:#0044A1"/>
                <stop  offset="0.9298" style="stop-color:#003783"/>
                <stop  offset="0.9809" style="stop-color:#00265C"/>
                <stop  offset="1" style="stop-color:#001F4C"/>
              </linearGradient>
              <path class="fsq-st33" d="M35.08,26.47c0,0-2.07,2.16-5.79,2.16s-5.97-2.16-5.97-2.16V6.44h11.76V26.47z"/>
              <radialGradient id="fsq_34_" cx="29.3856" cy="8.0058" r="16.9918" gradientTransform="matrix(1 0 0 0.3105 0 5.5198)" gradientUnits="userSpaceOnUse">
                <stop  offset="0.595" style="stop-color:#292A22;stop-opacity:0.5"/>
                <stop  offset="1" style="stop-color:#292A22;stop-opacity:0"/>
              </radialGradient>
              <rect x="23.32" y="6.28" class="fsq-st34" width="11.76" height="9.71"/>
              <linearGradient id="fsq_35_" gradientUnits="userSpaceOnUse" x1="15.7933" y1="7.0318" x2="42.4801" y2="7.0318">
                <stop  offset="0" style="stop-color:#106BDD"/>
                <stop  offset="0.3324" style="stop-color:#A9DBFE"/>
                <stop  offset="0.7374" style="stop-color:#0055C8"/>
                <stop  offset="0.7818" style="stop-color:#0053C4"/>
                <stop  offset="0.8296" style="stop-color:#004DB7"/>
                <stop  offset="0.8792" style="stop-color:#0044A1"/>
                <stop  offset="0.9298" style="stop-color:#003783"/>
                <stop  offset="0.9809" style="stop-color:#00265C"/>
                <stop  offset="1" style="stop-color:#001F4C"/>
              </linearGradient>
              <path class="fsq-st35" d="M39.53,4.33C37.1,3.34,33.38,2.7,29.2,2.7s-7.9,0.63-10.33,1.62h-2.91v2.7c0,2.39,5.93,4.33,13.24,4.33
                s13.24-1.94,13.24-4.33v-2.7H39.53z"/>
              <linearGradient id="fsq_36_" gradientUnits="userSpaceOnUse" x1="26.4031" y1="8.168" x2="31.4442" y2="1.2489">
                <stop  offset="0" style="stop-color:#62A7EF"/>
                <stop  offset="1" style="stop-color:#3586E5"/>
              </linearGradient>
              <ellipse class="fsq-st36" cx="29.2" cy="4.33" rx="13.24" ry="4.33"/>
              <linearGradient id="fsq_37_" gradientUnits="userSpaceOnUse" x1="34.5701" y1="3.7863" x2="24.1381" y2="3.7863">
                <stop  offset="0" style="stop-color:#003073"/>
                <stop  offset="0.3771" style="stop-color:#0053C3"/>
                <stop  offset="1" style="stop-color:#022B65"/>
              </linearGradient>
              <ellipse class="fsq-st37" cx="29.2" cy="3.79" rx="5.35" ry="1.75"/>
              <linearGradient id="fsq_38_" gradientUnits="userSpaceOnUse" x1="42.4802" y1="5.6649" x2="16.1257" y2="6.4954">
                <stop  offset="0.014" style="stop-color:#8BC5F8"/>
                <stop  offset="0.5251" style="stop-color:#E3ECFF"/>
                <stop  offset="1" style="stop-color:#96CDFA"/>
              </linearGradient>
              <path class="fsq-st38" d="M29.2,7.81c-6.88,0-12.53-1.71-13.17-3.91c-0.04,0.14-0.06,0.28-0.06,0.42c0,2.39,5.93,4.33,13.24,4.33
                s13.24-1.94,13.24-4.33c0-0.14-0.02-0.28-0.06-0.42C41.73,6.1,36.08,7.81,29.2,7.81z"/>
              <g class="fsq-st39">
                <path class="fsq-st40" d="M111.19,38.28H73.34c-3.4,0-6.35,2.37-7.04,5.7c-0.95,4.57-1.48,9.65-1.48,15.01c0,7.35,1,14.18,2.7,19.87
                  c0.75,2.49,3.08,4.17,5.68,4.17h37.14c4.59,0,7.98-4.24,7.03-8.73c-0.99-4.65-1.54-9.83-1.54-15.31c0-4.85,0.43-9.47,1.22-13.68
                  C117.71,41.65,114.91,38.28,111.19,38.28z"/>
                <path class="fsq-st41" d="M110.33,83.52H73.19c-2.83,0-5.36-1.86-6.16-4.53c-1.78-5.94-2.72-12.86-2.72-20.01
                  c0-5.27,0.5-10.35,1.49-15.11c0.73-3.53,3.9-6.09,7.53-6.09h37.85c1.92,0,3.73,0.85,4.96,2.33c1.23,1.47,1.73,3.4,1.38,5.29
                  c-0.8,4.31-1.21,8.88-1.21,13.59c0,5.32,0.51,10.44,1.53,15.21c0.49,2.3-0.08,4.67-1.55,6.49
                  C114.83,82.49,112.66,83.52,110.33,83.52z M73.34,38.78c-3.16,0-5.92,2.23-6.55,5.3c-0.98,4.69-1.47,9.71-1.47,14.91
                  c0,7.06,0.93,13.88,2.68,19.73c0.67,2.25,2.81,3.81,5.2,3.81h37.14c2.03,0,3.92-0.9,5.19-2.47c1.28-1.59,1.78-3.65,1.35-5.65
                  c-1.03-4.84-1.55-10.03-1.55-15.42c0-4.77,0.41-9.4,1.23-13.78c0.3-1.59-0.13-3.22-1.16-4.47c-1.04-1.25-2.56-1.96-4.19-1.96H73.34
                  z"/>
              </g>
              <polygon class="fsq-st42" points="105.87,56.24 107.45,43.47 94.67,45.05 100.01,47.22 92.5,54.74 96.17,58.42 103.69,50.9 "/>
              <polygon class="fsq-st42" points="85.99,76.08 73.22,77.66 74.8,64.89 76.98,70.23 84.49,62.71 88.17,66.39 80.65,73.91 "/>
              <polygon class="fsq-st42" points="94.67,76.08 107.45,77.66 105.87,64.89 103.69,70.23 96.17,62.71 92.5,66.39 100.01,73.91 "/>
              <polygon class="fsq-st42" points="74.8,56.24 73.22,43.47 85.99,45.05 80.65,47.22 88.17,54.74 84.49,58.42 76.98,50.9 "/>
    </svg>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;

const pointCode = "SwSts";
export default {
  name: "deviceFsqCom",
  data() {
    return {
      pointValue: "" // expr:'SwSts',stop:0,start:1,alarm:2
    };
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  computed: {
    ...mapGetters({
      showType: "canvas/getShowType" //当前显示类型
    }),

    comStyle() {
      let { info = {} } = this;
      let {
        width = "",
        height = "",
        // color = "",
        borderColor = "",
        borderStyle = "",
        borderWidth = "",
        borderRadius = "",
        opacity = "",
        scale = ""
        // fontFamily = "",
        // fontSize = "",
        // fontWeight = "",
        // fontStyle = ""
        // backgroundColor = "",
        // backgroundImage = "",
        // backgroundRepeat = "",
        // backgroundSize = ""
      } = info || {};
      let styles = {};

      // if (width) {
      styles["width"] = `${width}px`;
      // }
      // if (height) {
      styles["height"] = `${height}px`;
      // }
      // if (backgroundRepeat) {
      //   styles["backgroundRepeat"] = backgroundRepeat;
      // }
      // if (backgroundSize) {
      //   styles["backgroundSize"] = backgroundSize;
      // }
      if (borderColor) {
        styles["borderColor"] = borderColor;
      }
      if (borderStyle) {
        styles["borderStyle"] = borderStyle;
      }
      styles["borderWidth"] = `${borderWidth}px`;
      styles["opacity"] = opacity / 100;
      styles["borderRadius"] = `${borderRadius}px`;
      if (scale) {
        (styles["transform"] = `${scale}`),
          (styles["-webkit-transform"] = `${scale}`),
          (styles["-ms-transform"] = `${scale}`),
          (styles["-o-transform"] = `${scale}`),
          (styles["-moz-transform"] = `${scale}`);
      }
      // if (color) {
      //   styles["color"] = color;
      // }
      // if (fontSize) {
      //   styles["fontSize"] = `${fontSize}px`;
      // }
      // if (fontFamily) {
      //   styles["fontFamily"] = `${fontFamily}`;
      // }
      // if (fontWeight) {
      //   styles["fontWeight"] = fontWeight;
      // }
      // if (fontStyle) {
      //   styles["fontStyle"] = fontStyle;
      // }
      // if (backgroundColor) {
      //   styles["backgroundColor"] = backgroundColor;
      // }
      // if (backgroundImage) {
      //   styles["backgroundImage"] = `url(${this.$loadImgUrl(backgroundImage)})`;
      // }
      return styles || {};
    }
  },
  mounted() {
    // this.$emit("success"); //组件加载完成回调
    this.init();
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),

    init() {
      let { info = {}, showType = "" } = this;
      if (showType != "edit") {
        let { id = "" } = info || {};
        let { $vm } = window;
        // let { deviceId = "" } = bindData || {};
        $vm.$on(`devicePointEvent_${id}`, ({ device }) => {
          bmCommon.log("deviceDbCom", device);
          let { pointList = [] } = device || {};
          let point = pointList.find(item => {
            let { point: id = "" } = item || {};
            return id == pointCode; // SwSts  开关状态
          });
          if (point) {
            let { value = "" } = point || {};
            this.pointValue = value;
          }
          // let { value = "", unit = "",id='' } = point || {};
          // info.content = value;
          // info.unit = unit;
          // info.width = $(this.$refs.bmText).width();
          // this.$emit("success"); //组件加载完成回调
        });
      }
    }
    // blurEvent(e) {
    //   let { target } = e;
    //   let { info = {} } = this;
    //   let name = $(target)
    //     .text()
    //     .trim();
    //   info.name = name;
    // }
  }
};
</script>
<style lang="less" scoped>
// @import (reference) "./../../../../assets/less/common.less";
// .db-st0 {
//   fill: url(#db_1_);
// }
// .db-st1 {
//   fill: #dfe3e8;
// }
// .db-st2 {
//   fill: url(#db_11_);
// }
// .db-st3 {
//   fill: #ffffff;
// }
// .db-st4 {
//   fill: #c2c8ce;
// }
// .db-st5 {
//   fill: #848776;
// }
// .db-st6 {
//   fill: #25282b;
// }
// .db-st7 {
//   fill: #8f9499;
// }
// .db-st8 {
//   fill: #5b280e;
// }
// .db-st9 {
//   fill: #f95d06;
// }
// .db-st10 {
//   fill: url(#db_12_);
// }
// .db-st11 {
//   opacity: 0.4;
//   fill: #ff0000;
// }
</style>
<style lang="less">
@import (less) "../../../../assets/less/components/component/device/common.less";
</style>

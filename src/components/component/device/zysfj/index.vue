// 正压送风机
<template>
  <div class="bm-device-zysfj-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 346 317"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `<style type='text/css'>
              .zysfj-${info.id}-st0{fill:url(#zysfj_1_);}
              .zysfj-${info.id}-st1{fill:url(#zysfj_2_);}
              .zysfj-${info.id}-st2{fill:url(#zysfj_3_);}
              .zysfj-${info.id}-st3{fill:url(#zysfj_4_);}
              .zysfj-${info.id}-st4{fill:url(#zysfj_5_);}
              .zysfj-${info.id}-st5{fill:url(#zysfj_6_);}
              .zysfj-${info.id}-st6{fill:#9DAEB8;}
              .zysfj-${info.id}-st7{fill:url(#zysfj_7_);}
              .zysfj-${info.id}-st8{fill:url(#zysfj_8_);}
              .zysfj-${info.id}-st9{fill:url(#zysfj_9_);}
              .zysfj-${info.id}-st10{fill:#69121A;}
              .zysfj-${info.id}-st11{fill:#3D4D4E;}
              .zysfj-${info.id}-st12{fill:url(#zysfj_10_);}
              .zysfj-${info.id}-st13{fill:url(#zysfj_11_);}
              .zysfj-${info.id}-st14{fill:url(#zysfj_12_);}
              .zysfj-${info.id}-st15{fill:url(#zysfj_13_);}
              .zysfj-${info.id}-st16{fill:url(#zysfj_14_);}
              .zysfj-${info.id}-st17{fill:url(#zysfj_15_);}
              .zysfj-${info.id}-st18{fill:url(#zysfj_16_);}
              .zysfj-${info.id}-st19{fill:#9CACB9;}
              .zysfj-${info.id}-st20{fill:url(#zysfj_17_);}
              .zysfj-${info.id}-st21{fill:url(#zysfj_18_);}
              .zysfj-${info.id}-st22{fill:url(#zysfj_19_);}
              .zysfj-${info.id}-st23{fill:url(#zysfj_20_);}
              .zysfj-${info.id}-st24{fill:url(#zysfj_21_);}
              .zysfj-${info.id}-st25{fill:url(#zysfj_22_);}
              .zysfj-${info.id}-st26{fill:url(#zysfj_23_);}
              .zysfj-${info.id}-st27{fill:url(#zysfj_24_);}
              .zysfj-${info.id}-st28{fill:url(#zysfj_25_);}
              .zysfj-${info.id}-st29{fill:url(#zysfj_26_);}
              .zysfj-${info.id}-st30{fill:url(#zysfj_27_);}
              .zysfj-${info.id}-st31{fill:url(#zysfj_28_);}
              .zysfj-${info.id}-st32{fill:url(#zysfj_29_);}
              .zysfj-${info.id}-st33{fill:url(#zysfj_30_);}
              .zysfj-${info.id}-st34{fill:url(#zysfj_31_);}
              .zysfj-${info.id}-st35{fill:url(#zysfj_32_);}
              .zysfj-${info.id}-st36{fill:url(#zysfj_33_);}
              .zysfj-${info.id}-st37{fill:url(#zysfj_34_);}
              .zysfj-${info.id}-st38{opacity:0.3;}
              .zysfj-${info.id}-st39{opacity:0.2;fill:#49565E;}
              .zysfj-${info.id}-st40{fill:url(#zysfj_35_);}
              .zysfj-${info.id}-st41{fill:url(#zysfj_36_);}
              .zysfj-${info.id}-st42{fill:#CED3D8;}
              .zysfj-${info.id}-st43{fill:#96A0A8;}
              .zysfj-${info.id}-st44{fill:url(#zysfj_37_);}
              .zysfj-${info.id}-st45{fill:url(#zysfj_38_);}
              .zysfj-${info.id}-st46{fill:url(#zysfj_39_);}
              .zysfj-${info.id}-st47{fill:#BFC9D0;}
              .zysfj-${info.id}-st48{fill:#E7EDF1;}
              .zysfj-${info.id}-st49{opacity:0.5;fill:#243436;}
              .zysfj-${info.id}-st50{fill:url(#zysfj_40_);}
              .zysfj-${info.id}-st51{fill:url(#zysfj_41_);}
              .zysfj-${info.id}-st52{fill:url(#zysfj_42_);}
              .zysfj-${info.id}-st53{fill:url(#zysfj_43_);}
              .zysfj-${info.id}-st54{fill:url(#zysfj_44_);}
              .zysfj-${info.id}-st55{fill:url(#zysfj_45_);}
              .zysfj-${info.id}-st56{opacity:0.4;fill:#FF0000;}
      </style>
      `
        "
      ></defs>
      <g id="SVG_base1">
        <linearGradient
          id="zysfj_1_"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="146.6827"
          x2="80.5161"
          y2="146.6827"
        >
          <stop offset="0" style="stop-color:#B7BDC0" />
          <stop offset="1" style="stop-color:#7F8A8D" />
        </linearGradient>
        <path
          :class="`zysfj-${info.id}-st0`"
          d="M9.57,146.68C9.57,67.17,38.48,2.45,80.52,0.07C79.72,0.03,78.92,0,78.12,0C34.98,0,0,65.67,0,146.68
                s34.98,146.68,78.12,146.68c0.8,0,1.6-0.03,2.39-0.07C38.48,290.92,9.57,226.19,9.57,146.68z"
        />
        <linearGradient
          id="zysfj_2_"
          gradientUnits="userSpaceOnUse"
          x1="4.7831"
          y1="146.6827"
          x2="161.0321"
          y2="146.6827"
        >
          <stop offset="0" style="stop-color:#75818B" />
          <stop offset="1" style="stop-color:#41545E" />
        </linearGradient>
        <path
          :class="`zysfj-${info.id}-st1`"
          d="M82.91,0C39.76,0,4.78,65.67,4.78,146.68s34.98,146.68,78.12,146.68s78.12-65.67,78.12-146.68
                S126.05,0,82.91,0z"
        />
        <linearGradient
          id="zysfj_3_"
          gradientUnits="userSpaceOnUse"
          x1="226.4117"
          y1="280.2645"
          x2="226.4117"
          y2="13.101"
        >
          <stop offset="0" style="stop-color:#222B2F" />
          <stop offset="0.0206" style="stop-color:#242E33" />
          <stop offset="0.2317" style="stop-color:#394B55" />
          <stop offset="0.4055" style="stop-color:#465D6A" />
          <stop offset="0.5196" style="stop-color:#4B6472" />
          <stop offset="0.6445" style="stop-color:#435965" />
          <stop offset="0.8727" style="stop-color:#2F3D44" />
          <stop offset="1" style="stop-color:#222B2F" />
        </linearGradient>
        <path
          :class="`zysfj-${info.id}-st2`"
          d="M272.04,13.73V13.1H114.8v267.16h157.25v-0.62c36.44,0,65.99-59.53,65.99-132.96S308.49,13.73,272.04,13.73z"
        />

        <radialGradient
          id="zysfj_4_"
          cx="226.4117"
          cy="146.6827"
          r="88.146"
          gradientTransform="matrix(1 0 0 1.5461 0 -80.1085)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style="stop-color:#000000" />
          <stop offset="1" style="stop-color:#000000;stop-opacity:0" />
        </radialGradient>
        <path
          :class="`zysfj-${info.id}-st3`"
          d="M272.04,13.73V13.1H114.8v267.16h157.25v-0.62c36.44,0,65.99-59.53,65.99-132.96S308.49,13.73,272.04,13.73z"
        />
        <linearGradient
          id="zysfj_5_"
          gradientUnits="userSpaceOnUse"
          x1="234.7639"
          y1="210.9533"
          x2="234.7639"
          y2="80.3171"
        >
          <stop offset="0" style="stop-color:#263336" />
          <stop offset="0.5112" style="stop-color:#879194" />
          <stop offset="1" style="stop-color:#29393B" />
        </linearGradient>
        <path
          :class="`zysfj-${info.id}-st4`"
          d="M270.82,80.32h-40.67v0.03c-17.4,0.41-31.44,29.48-31.44,65.29c0,36.07,14.24,65.31,31.81,65.31
                c0.98,0,1.94-0.1,2.9-0.28h37.4V80.32z"
        />
        <linearGradient
          id="zysfj_6_"
          gradientUnits="userSpaceOnUse"
          x1="239.9306"
          y1="108.0317"
          x2="303.9306"
          y2="185.0317"
        >
          <stop offset="0" style="stop-color:#859095" />
          <stop offset="1" style="stop-color:#4D5559" />
        </linearGradient>
        <ellipse
          :class="`zysfj-${info.id}-st5`"
          cx="271.19"
          cy="145.64"
          rx="31.81"
          ry="65.31"
        />
        <path
          :class="`zysfj-${info.id}-st6`"
          d="M274.32,209.92c-17.29,0-31.31-28.78-31.31-64.28c0-35.5,14.02-64.28,31.31-64.28c1.21,0,2.39,0.15,3.57,0.43
                c-2.16-0.95-4.4-1.46-6.69-1.46c-17.57,0-31.81,29.24-31.81,65.31s14.24,65.31,31.81,65.31c2.3,0,4.53-0.51,6.69-1.46
                C276.71,209.77,275.52,209.92,274.32,209.92z"
        />
        <linearGradient
          id="zysfj_7_"
          gradientUnits="userSpaceOnUse"
          x1="272.5"
          y1="202"
          x2="272.5"
          y2="90"
        >
          <stop offset="0" style="stop-color:#29353A" />
          <stop offset="0.5307" style="stop-color:#7E96A6" />
          <stop offset="1" style="stop-color:#384953" />
        </linearGradient>
        <ellipse
          :class="`zysfj-${info.id}-st7`"
          cx="272.5"
          cy="146"
          rx="23.5"
          ry="56"
        />
        <linearGradient
          id="zysfj_8_"
          gradientUnits="userSpaceOnUse"
          x1="283.0881"
          y1="144.8653"
          x2="252.0881"
          y2="146.8653"
        >
          <stop offset="0" style="stop-color:#859095" />
          <stop offset="1" style="stop-color:#4D5559" />
        </linearGradient>
        <ellipse
          :class="`zysfj-${info.id}-st8`"
          cx="265.5"
          cy="146"
          rx="14.5"
          ry="34.55"
        />
      </g>

      <g id="SVG_ani" v-if="pointValue == 1">
        <g class="f1">
          <animate
            values="show;hide;hide;"
            dur="0.5s"
            attributeName="class"
            repeatCount="indefinite"
          />
          <linearGradient
            id="zysfj_9_"
            gradientUnits="userSpaceOnUse"
            x1="309.0371"
            y1="163.0153"
            x2="299.0661"
            y2="196.6675"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st9`"
            d="M302.75,150.98c-1.08,26.21-10.02,47.83-21.96,54.87l5.85,22.55c0,0,7.79-6.49,21.42-28.56
                c13.63-22.07,18.17-42.84,18.17-42.84L302.75,150.98z"
          />
          <path
            :class="`zysfj-${info.id}-st10`"
            d="M207.45,228.39l-14.93,5.19c0,0,11.61,10.83,23.36,19.47c22.07,16.23,46.08,16.23,46.08,16.23L207.45,228.39z
                "
          />
          <path
            :class="`zysfj-${info.id}-st10`"
            d="M200.96,73.92l-5.19-14.93h-3.25c0,0,0.65,22.07,3.25,40.89s6.49,35.05,6.49,35.05h3.25L200.96,73.92z"
          />
          <polygon
            :class="`zysfj-${info.id}-st11`"
            points="217.19,133.63 204.21,133.63 202.26,134.93 228.22,142.72 231.47,142.72 	"
          />
          <linearGradient
            id="zysfj_10_"
            gradientUnits="userSpaceOnUse"
            x1="294.799"
            y1="227.0391"
            x2="260.3159"
            y2="237.0101"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st12`"
            d="M287.82,199.63c-3.98,4.81-8.53,7.83-13.4,8.49c-0.07,0.09-0.11,0.15-0.11,0.15s-3.25,1.3-10.38,2.6
                c-10.53,1.91-14.93,1.3-14.93,1.3l-12.33,57.11c0,0,24.66-1.95,37.64-7.14c12.98-5.19,31.15-20.77,31.15-20.77L287.82,199.63z"
          />
          <path
            :class="`zysfj-${info.id}-st11`"
            d="M293.11,99.75l2.61,0.78l17.52-34.4h-3.89l-20.23,27.17C290.53,95.23,291.87,97.38,293.11,99.75z"
          />
          <linearGradient
            id="zysfj_11_"
            gradientUnits="userSpaceOnUse"
            x1="296.4812"
            y1="90.9651"
            x2="311.8532"
            y2="105.0907"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st13`"
            d="M291.04,96.14c6.12,9.75,10.38,24.16,11.51,40.64c2.19-6.27,5.44-17.24,7.44-31.7
                c3.25-23.36,3.25-38.94,3.25-38.94L291.04,96.14z"
          />
          <polygon
            :class="`zysfj-${info.id}-st11`"
            points="265.36,80.59 272.35,57.7 272.35,22 268.46,22 262.12,79.71 	"
          />
          <linearGradient
            id="zysfj_12_"
            gradientUnits="userSpaceOnUse"
            x1="265.3492"
            y1="52.5689"
            x2="282.6686"
            y2="52.5689"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st14`"
            d="M280.79,42.12C277.55,25.89,272.35,22,272.35,22l-7,58.59l9.44,2.55l7.3-24.14
                C282.09,58.99,284.04,58.35,280.79,42.12z"
          />
          <path
            :class="`zysfj-${info.id}-st10`"
            d="M223.68,51.21h3.89l9.74-16.23L239.25,22h-4.54c0,0-5.19,3.25-8.44,12.98S223.68,51.21,223.68,51.21z"
          />
          <polygon
            :class="`zysfj-${info.id}-st11`"
            points="235.36,55.75 226.27,46.66 223.68,51.21 238.6,96.64 241.85,96.64 	"
          />
          <linearGradient
            id="zysfj_13_"
            gradientUnits="userSpaceOnUse"
            x1="229.984"
            y1="61.8808"
            x2="243.6941"
            y2="58.5572"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st15`"
            d="M241.85,96.64l-14.28-46.08c0,0,0.65-11.68,3.89-18.17S239.25,22,239.25,22l7.79,55.82
                c0,0-1.95,2.6-3.25,7.79S241.85,96.64,241.85,96.64z"
          />
          <linearGradient
            id="zysfj_14_"
            gradientUnits="userSpaceOnUse"
            x1="206.7434"
            y1="132.5519"
            x2="214.2216"
            y2="98.0688"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st16`"
            d="M195.77,58.99c0,0,0.65,20.12,3.25,38.29c2.6,18.17,6.49,37.64,6.49,37.64l25.96,7.79
                c0,0-1.97-9.19-3.89-18.82c-2.6-12.98-2.6-20.77-2.6-20.77L195.77,58.99z"
          />
          <linearGradient
            id="zysfj_15_"
            gradientUnits="userSpaceOnUse"
            x1="261.183"
            y1="238.7136"
            x2="230.4391"
            y2="230.4044"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st17`"
            d="M226.27,197.89c0,0,6.49,5.84,16.23,9.09c9.74,3.25,19.47,3.89,19.47,3.89l-0.65,58.41
                c0,0-18.17-1.95-33.1-11.03s-31.15-24.66-31.15-24.66L226.27,197.89z"
          />
          <polygon
            :class="`zysfj-${info.id}-st10`"
            points="192.52,233.58 197.07,233.58 210.05,231.64 226.27,201.13 226.27,197.89 223.03,199.18 	"
          />
          <path
            :class="`zysfj-${info.id}-st11`"
            d="M175,146.61c0,0,7.14,24.01,17.52,42.19s22.72,35.7,22.72,35.7h3.89l-5.19-20.12l-29.21-53.22l-5.84-4.54H175
                z"
          />
          <linearGradient
            id="zysfj_16_"
            gradientUnits="userSpaceOnUse"
            x1="234.3883"
            y1="190.4392"
            x2="201.9825"
            y2="185.8691"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st18`"
            d="M217.19,151.81l-38.29-5.19c0,0,8.44,22.72,16.87,39.59s23.36,38.29,23.36,38.29l21.42-35.7
                c0,0-8.44-7.79-12.98-15.58C223.03,165.43,217.19,151.81,217.19,151.81z"
          />
          <ellipse
            :class="`zysfj-${info.id}-st19`"
            cx="266"
            cy="116.76"
            rx="1.05"
            ry="2.76"
          />
          <ellipse
            :class="`zysfj-${info.id}-st19`"
            cx="266"
            cy="175.24"
            rx="1.05"
            ry="2.76"
          />
          <ellipse
            :class="`zysfj-${info.id}-st19`"
            cx="256.37"
            cy="160.62"
            rx="1.05"
            ry="2.76"
          />
          <ellipse
            :class="`zysfj-${info.id}-st19`"
            cx="275.63"
            cy="131.38"
            rx="1.05"
            ry="2.76"
          />
          <ellipse
            :class="`zysfj-${info.id}-st19`"
            cx="275.63"
            cy="160.62"
            rx="1.05"
            ry="2.76"
          />
          <ellipse
            :class="`zysfj-${info.id}-st19`"
            cx="256.37"
            cy="131.38"
            rx="1.05"
            ry="2.76"
          />
        </g>
        <g class="f2">
          <animate
            values="hide;show;hide;"
            dur="0.5s"
            attributeName="class"
            repeatCount="indefinite"
          />
          <linearGradient
            id="zysfj_17_"
            gradientUnits="userSpaceOnUse"
            x1="311.1817"
            y1="136.0885"
            x2="306.2894"
            y2="191.0553"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st20`"
            d="M301.93,130.28c0.6,4.92,0.93,10.06,0.93,15.36c0,19.23-4.22,36.43-10.86,47.92l5.02,6.28
                c0,0,7.14-11.68,15.58-31.15c8.44-19.47,13.63-43.48,13.63-43.48L301.93,130.28z"
          />
          <linearGradient
            id="zysfj_18_"
            gradientUnits="userSpaceOnUse"
            x1="298.8515"
            y1="206.3068"
            x2="278.7066"
            y2="228.4662"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st21`"
            d="M294.86,187.92c-4.87,10.92-11.6,18.28-19.15,19.98l-9.54,2.6l4.24,47.75c0,0,11.03-3.89,25.31-17.52
                c14.28-13.63,20.77-23.36,20.77-23.36L294.86,187.92z"
          />
          <polygon
            :class="`zysfj-${info.id}-st10`"
            points="218.48,253.7 209.4,253.7 205.5,253.7 232.11,206.97 235.36,206.97 	"
          />
          <linearGradient
            id="zysfj_19_"
            gradientUnits="userSpaceOnUse"
            x1="264.0983"
            y1="237.2081"
            x2="236.4709"
            y2="239.5104"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st22`"
            d="M235.36,206.97c0,0,12.33,4.54,19.47,4.54c7.14,0,14.93-1.95,14.93-1.95l7.14,58.41c0,0-17.52,4.54-35.05,0
                S209.4,253.7,209.4,253.7L235.36,206.97z"
          />
          <polygon
            :class="`zysfj-${info.id}-st11`"
            points="252.23,22 252.88,81.71 256.13,83.01 261.97,39.52 256.13,22 	"
          />
          <path
            :class="`zysfj-${info.id}-st11`"
            d="M283.56,87.37l12.8-12.8l5.19-29.86h-3.89l-18.19,40.01C280.88,85.42,282.25,86.3,283.56,87.37z"
          />
          <path
            :class="`zysfj-${info.id}-st10`"
            d="M219.13,26.54h3.89v25.31l-6.49,22.72h-3.89c0,0-0.65-13.63,1.3-25.96
                C215.89,36.28,219.13,26.54,219.13,26.54z"
          />
          <polygon
            :class="`zysfj-${info.id}-st11`"
            points="224.97,77.82 214.59,71.97 212.64,74.57 232.76,109.62 236.66,109.62 	"
          />
          <path
            :class="`zysfj-${info.id}-st11`"
            d="M194.47,101.18l-7.79-16.87l-3.89,1.3c0,0,3.89,29.21,8.44,45.43s11.68,35.7,11.68,35.7h3.89L194.47,101.18z"
          />
          <path
            :class="`zysfj-${info.id}-st11`"
            d="M193.82,185.55l-12.98-7.14l-3.25,1.3c0,0,12.98,24.66,22.72,37.64c9.74,12.98,27.26,29.86,27.26,29.86h4.54
                L193.82,185.55z"
          />
          <path
            :class="`zysfj-${info.id}-st10`"
            d="M215.89,249.81l-10.38,3.89c0,0,4.23,4.16,17.52,9.09c17.52,6.49,25.89,6.57,25.89,6.57L215.89,249.81z"
          />
          <linearGradient
            id="zysfj_20_"
            gradientUnits="userSpaceOnUse"
            x1="287.0845"
            y1="77.5777"
            x2="304.0638"
            y2="79.0166"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st23`"
            d="M301.56,44.72l-18.61,42.18c6.39,4.86,11.77,14,15.32,25.72c1.77-6.97,4.18-18.63,4.58-31.55
                C303.51,60.29,301.56,44.72,301.56,44.72z"
          />
          <linearGradient
            id="zysfj_21_"
            gradientUnits="userSpaceOnUse"
            x1="256.1282"
            y1="52.5042"
            x2="269.7578"
            y2="52.5042"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st24`"
            d="M264.57,80.41l5.19-40.89c0,0,0-8.44-3.89-12.98C261.97,22,256.13,22,256.13,22v61.01c0,0,1.3-1.95,3.25-2.6
                C261.32,79.76,264.57,80.41,264.57,80.41z"
          />
          <linearGradient
            id="zysfj_22_"
            gradientUnits="userSpaceOnUse"
            x1="246.909"
            y1="211.7097"
            x2="205.468"
            y2="204.8029"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st25`"
            d="M216.54,168.68c0,0,6.49,11.03,13.63,18.17c7.14,7.14,16.87,12.98,16.87,12.98l-14.93,47.38
                c0,0-18.17-14.28-29.21-31.15c-11.03-16.87-22.07-37.64-22.07-37.64L216.54,168.68z"
          />
          <linearGradient
            id="zysfj_23_"
            gradientUnits="userSpaceOnUse"
            x1="223.643"
            y1="154.7085"
            x2="194.0012"
            y2="117.5843"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st26`"
            d="M186.68,84.31l33.1,32.45c0,0,1.3,10.38,5.19,22.07s7.14,20.12,7.14,20.12l-25.31,7.79
                c0,0-7.79-16.87-12.98-39.59C188.63,104.43,186.68,84.31,186.68,84.31z"
          />
          <linearGradient
            id="zysfj_24_"
            gradientUnits="userSpaceOnUse"
            x1="217.6713"
            y1="75.1132"
            x2="230.6216"
            y2="67.6308"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st27`"
            d="M223.03,26.54c0,0-3.89,9.09-5.19,23.36s-1.3,24.66-1.3,24.66l20.12,35.05c0,0,0-7.79,0-14.93
                c0-7.14,1.95-11.68,1.95-11.68L223.03,26.54z"
          />
          <ellipse
            :class="`zysfj-${info.id}-st19`"
            cx="262.2"
            cy="118.52"
            rx="1.05"
            ry="2.76"
          />
          <ellipse
            :class="`zysfj-${info.id}-st19`"
            cx="269.8"
            cy="173.48"
            rx="1.05"
            ry="2.76"
          />
          <ellipse
            :class="`zysfj-${info.id}-st19`"
            cx="258.85"
            cy="168.4"
            rx="1.05"
            ry="2.76"
          />
          <ellipse
            :class="`zysfj-${info.id}-st19`"
            cx="273.15"
            cy="123.6"
            rx="1.05"
            ry="2.76"
          />
          <ellipse
            :class="`zysfj-${info.id}-st19`"
            cx="276.95"
            cy="151.08"
            rx="1.05"
            ry="2.76"
          />
          <ellipse
            :class="`zysfj-${info.id}-st19`"
            cx="255.05"
            cy="140.92"
            rx="1.05"
            ry="2.76"
          />
        </g>
        <g class="f3">
          <animate
            values="hide;hide;show;"
            dur="0.5s"
            attributeName="class"
            repeatCount="indefinite"
          />
          <path
            :class="`zysfj-${info.id}-st11`"
            d="M299.07,115.39l22.61-22h-3.25l-21.16,16.12C297.92,111.4,298.52,113.36,299.07,115.39z"
          />
          <polygon
            :class="`zysfj-${info.id}-st11`"
            points="283.39,29.79 270.08,81.86 275.19,83.25 283.39,70.68 287.28,29.79 	"
          />
          <path
            :class="`zysfj-${info.id}-st10`"
            d="M243.15,34.98l-2.6-1.3h-3.25c0,0-0.65-3.89,4.54-8.44c5.19-4.54,9.55-2.96,9.55-2.96L243.15,34.98z"
          />
          <path
            :class="`zysfj-${info.id}-st11`"
            d="M250.29,38.87c-0.65,0-8.44-9.09-8.44-9.09l-4.54,4.54l7.79,51.92l3.25,1.3L250.29,38.87z"
          />
          <path
            :class="`zysfj-${info.id}-st10`"
            d="M210.7,51.86l-1.95-12.98h-3.89c0,0-1.95,22.72-1.3,36.35c0.65,13.63,1.95,27.91,1.95,27.91h3.25L210.7,51.86
                z"
          />
          <polygon
            :class="`zysfj-${info.id}-st11`"
            points="219.78,103.13 208.33,97.82 205.5,103.13 228.87,125.2 232.76,125.84 	"
          />
          <polygon
            :class="`zysfj-${info.id}-st10`"
            points="231.47,265.38 223.68,266.68 219.78,266.03 239.9,212.16 243.15,212.16 	"
          />
          <linearGradient
            id="zysfj_25_"
            gradientUnits="userSpaceOnUse"
            x1="300.3485"
            y1="192.6166"
            x2="292.7633"
            y2="219.5573"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st28`"
            d="M300.28,170.84c-4.55,21.21-14.65,36.25-26.53,37.36l10.28,34.47c0,0,8.44-8.44,20.77-23.36
                s18.82-30.5,18.82-30.5L300.28,170.84z"
          />
          <linearGradient
            id="zysfj_26_"
            gradientUnits="userSpaceOnUse"
            x1="296.7953"
            y1="131.9197"
            x2="316.4123"
            y2="135.3199"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st29`"
            d="M298.04,111.84c3.05,9.75,4.82,21.35,4.82,33.8c0,10.69-1.3,20.74-3.6,29.55
                c1.58-3.46,9.34-20.75,13.99-37.01c5.19-18.17,8.44-44.78,8.44-44.78L298.04,111.84z"
          />
          <linearGradient
            id="zysfj_27_"
            gradientUnits="userSpaceOnUse"
            x1="275.2635"
            y1="60.9034"
            x2="293.8342"
            y2="60.3803"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st30`"
            d="M287.56,91.33l4.26-7.68c0,0,2.6-5.84,1.3-25.96s-5.84-27.91-5.84-27.91l-13.03,53.34
                C279.08,83.74,283.6,86.65,287.56,91.33z"
          />
          <linearGradient
            id="zysfj_28_"
            gradientUnits="userSpaceOnUse"
            x1="240.5516"
            y1="54.9181"
            x2="256.1282"
            y2="54.9181"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st31`"
            d="M248.99,87.55l-8.44-53.87c0,0,2.6-9.09,8.44-11.03s5.84,4.54,5.84,4.54l1.3,50.62c0,0-2.6,0-4.54,3.25
                S248.99,87.55,248.99,87.55z"
          />
          <linearGradient
            id="zysfj_29_"
            gradientUnits="userSpaceOnUse"
            x1="278.318"
            y1="227.3458"
            x2="254.5161"
            y2="244.0856"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st32`"
            d="M223.68,266.68l19.47-55.17c0,0,8.44,1.3,14.28,1.3c5.84,0,21.42-5.84,21.42-5.84l12.98,51.27
                c0,0-6.91,7.47-33.1,10.38C235.36,271.23,223.68,266.68,223.68,266.68z"
          />
          <polygon
            :class="`zysfj-${info.id}-st10`"
            points="191.87,209.57 187.33,208.27 183.44,208.27 219.13,184.91 221.73,184.91 	"
          />
          <path
            :class="`zysfj-${info.id}-st11`"
            d="M204.86,212.81l-11.03-10.38l-10.38,5.84c0,0,10.38,17.52,24.66,29.86c14.28,12.33,33.1,24.01,33.1,24.01
                h3.89L204.86,212.81z"
          />
          <linearGradient
            id="zysfj_30_"
            gradientUnits="userSpaceOnUse"
            x1="237.9513"
            y1="222.5941"
            x2="214.9341"
            y2="227.3022"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st33`"
            d="M221.73,184.91l-34.4,23.36c0,0,12.33,18.17,26.61,31.15c14.28,12.98,31.15,22.72,31.15,22.72l9.09-55.17
                c0,0-7.79-0.65-18.82-8.44C224.33,190.75,221.73,184.91,221.73,184.91z"
          />
          <path
            :class="`zysfj-${info.id}-st11`"
            d="M186.68,121.95l-5.84-7.79l-3.89,1.3c0,0,5.19,24.01,11.68,40.24c6.49,16.23,18.17,41.54,18.17,41.54h3.89
                L186.68,121.95z"
          />
          <linearGradient
            id="zysfj_31_"
            gradientUnits="userSpaceOnUse"
            x1="229.0721"
            y1="166.1247"
            x2="198.9927"
            y2="156.7086"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st34`"
            d="M180.84,114.16c0,0,5.84,25.31,12.33,42.19c6.49,16.87,17.52,40.89,17.52,40.89l24.66-22.72
                c0,0-7.79-9.74-11.03-18.82c-3.25-9.09-7.14-22.07-7.14-22.07L180.84,114.16z"
          />
          <linearGradient
            id="zysfj_32_"
            gradientUnits="userSpaceOnUse"
            x1="207.9082"
            y1="98.8385"
            x2="219.94"
            y2="83.4064"
          >
            <stop offset="0" style="stop-color:#879CA7" />
            <stop offset="1" style="stop-color:#485255" />
          </linearGradient>
          <path
            :class="`zysfj-${info.id}-st35`"
            d="M208.75,38.87c0,0-2.6,16.87-1.95,33.1c0.65,16.23,1.95,31.15,1.95,31.15l24.01,22.72
                c0,0-1.95-12.98-2.6-21.42c-0.65-8.44,0.65-15.58,0.65-15.58L208.75,38.87z"
          />
          <ellipse
            :class="`zysfj-${info.id}-st19`"
            cx="258.85"
            cy="123.6"
            rx="1.05"
            ry="2.76"
          />
          <ellipse
            :class="`zysfj-${info.id}-st19`"
            cx="273.15"
            cy="168.4"
            rx="1.05"
            ry="2.76"
          />
          <ellipse
            :class="`zysfj-${info.id}-st19`"
            cx="262.2"
            cy="173.48"
            rx="1.05"
            ry="2.76"
          />
          <ellipse
            :class="`zysfj-${info.id}-st19`"
            cx="269.8"
            cy="118.52"
            rx="1.05"
            ry="2.76"
          />
          <ellipse
            :class="`zysfj-${info.id}-st19`"
            cx="276.95"
            cy="140.92"
            rx="1.05"
            ry="2.76"
          />
          <ellipse
            :class="`zysfj-${info.id}-st19`"
            cx="255.05"
            cy="151.08"
            rx="1.05"
            ry="2.76"
          />
        </g>
      </g>

      <g class="SVG_sta" v-if="pointValue === 0">
        >
        <path
          :class="`zysfj-${info.id}-st11`"
          d="M299.07,115.39l22.61-22h-3.25l-21.16,16.12C297.92,111.4,298.52,113.36,299.07,115.39z"
        />
        <polygon
          :class="`zysfj-${info.id}-st11`"
          points="283.39,29.79 270.08,81.86 275.19,83.25 283.39,70.68 287.28,29.79 	"
        />
        <path
          :class="`zysfj-${info.id}-st10`"
          d="M243.15,34.98l-2.6-1.3h-3.25c0,0-0.65-3.89,4.54-8.44c5.19-4.54,9.55-2.96,9.55-2.96L243.15,34.98z"
        />
        <path
          :class="`zysfj-${info.id}-st11`"
          d="M250.29,38.87c-0.65,0-8.44-9.09-8.44-9.09l-4.54,4.54l7.79,51.92l3.25,1.3L250.29,38.87z"
        />
        <path
          :class="`zysfj-${info.id}-st10`"
          d="M210.7,51.86l-1.95-12.98h-3.89c0,0-1.95,22.72-1.3,36.35c0.65,13.63,1.95,27.91,1.95,27.91h3.25L210.7,51.86
                z"
        />
        <polygon
          :class="`zysfj-${info.id}-st11`"
          points="219.78,103.13 208.33,97.82 205.5,103.13 228.87,125.2 232.76,125.84 	"
        />
        <polygon
          :class="`zysfj-${info.id}-st10`"
          points="231.47,265.38 223.68,266.68 219.78,266.03 239.9,212.16 243.15,212.16 	"
        />
        <linearGradient
          id="zysfj_25_"
          gradientUnits="userSpaceOnUse"
          x1="300.3485"
          y1="192.6166"
          x2="292.7633"
          y2="219.5573"
        >
          <stop offset="0" style="stop-color:#879CA7" />
          <stop offset="1" style="stop-color:#485255" />
        </linearGradient>
        <path
          :class="`zysfj-${info.id}-st28`"
          d="M300.28,170.84c-4.55,21.21-14.65,36.25-26.53,37.36l10.28,34.47c0,0,8.44-8.44,20.77-23.36
                s18.82-30.5,18.82-30.5L300.28,170.84z"
        />
        <linearGradient
          id="zysfj_26_"
          gradientUnits="userSpaceOnUse"
          x1="296.7953"
          y1="131.9197"
          x2="316.4123"
          y2="135.3199"
        >
          <stop offset="0" style="stop-color:#879CA7" />
          <stop offset="1" style="stop-color:#485255" />
        </linearGradient>
        <path
          :class="`zysfj-${info.id}-st29`"
          d="M298.04,111.84c3.05,9.75,4.82,21.35,4.82,33.8c0,10.69-1.3,20.74-3.6,29.55
                c1.58-3.46,9.34-20.75,13.99-37.01c5.19-18.17,8.44-44.78,8.44-44.78L298.04,111.84z"
        />
        <linearGradient
          id="zysfj_27_"
          gradientUnits="userSpaceOnUse"
          x1="275.2635"
          y1="60.9034"
          x2="293.8342"
          y2="60.3803"
        >
          <stop offset="0" style="stop-color:#879CA7" />
          <stop offset="1" style="stop-color:#485255" />
        </linearGradient>
        <path
          :class="`zysfj-${info.id}-st30`"
          d="M287.56,91.33l4.26-7.68c0,0,2.6-5.84,1.3-25.96s-5.84-27.91-5.84-27.91l-13.03,53.34
                C279.08,83.74,283.6,86.65,287.56,91.33z"
        />
        <linearGradient
          id="zysfj_28_"
          gradientUnits="userSpaceOnUse"
          x1="240.5516"
          y1="54.9181"
          x2="256.1282"
          y2="54.9181"
        >
          <stop offset="0" style="stop-color:#879CA7" />
          <stop offset="1" style="stop-color:#485255" />
        </linearGradient>
        <path
          :class="`zysfj-${info.id}-st31`"
          d="M248.99,87.55l-8.44-53.87c0,0,2.6-9.09,8.44-11.03s5.84,4.54,5.84,4.54l1.3,50.62c0,0-2.6,0-4.54,3.25
                S248.99,87.55,248.99,87.55z"
        />
        <linearGradient
          id="zysfj_29_"
          gradientUnits="userSpaceOnUse"
          x1="278.318"
          y1="227.3458"
          x2="254.5161"
          y2="244.0856"
        >
          <stop offset="0" style="stop-color:#879CA7" />
          <stop offset="1" style="stop-color:#485255" />
        </linearGradient>
        <path
          :class="`zysfj-${info.id}-st32`"
          d="M223.68,266.68l19.47-55.17c0,0,8.44,1.3,14.28,1.3c5.84,0,21.42-5.84,21.42-5.84l12.98,51.27
                c0,0-6.91,7.47-33.1,10.38C235.36,271.23,223.68,266.68,223.68,266.68z"
        />
        <polygon
          :class="`zysfj-${info.id}-st10`"
          points="191.87,209.57 187.33,208.27 183.44,208.27 219.13,184.91 221.73,184.91 	"
        />
        <path
          :class="`zysfj-${info.id}-st11`"
          d="M204.86,212.81l-11.03-10.38l-10.38,5.84c0,0,10.38,17.52,24.66,29.86c14.28,12.33,33.1,24.01,33.1,24.01
                h3.89L204.86,212.81z"
        />
        <linearGradient
          id="zysfj_30_"
          gradientUnits="userSpaceOnUse"
          x1="237.9513"
          y1="222.5941"
          x2="214.9341"
          y2="227.3022"
        >
          <stop offset="0" style="stop-color:#879CA7" />
          <stop offset="1" style="stop-color:#485255" />
        </linearGradient>
        <path
          :class="`zysfj-${info.id}-st33`"
          d="M221.73,184.91l-34.4,23.36c0,0,12.33,18.17,26.61,31.15c14.28,12.98,31.15,22.72,31.15,22.72l9.09-55.17
                c0,0-7.79-0.65-18.82-8.44C224.33,190.75,221.73,184.91,221.73,184.91z"
        />
        <path
          :class="`zysfj-${info.id}-st11`"
          d="M186.68,121.95l-5.84-7.79l-3.89,1.3c0,0,5.19,24.01,11.68,40.24c6.49,16.23,18.17,41.54,18.17,41.54h3.89
                L186.68,121.95z"
        />
        <linearGradient
          id="zysfj_31_"
          gradientUnits="userSpaceOnUse"
          x1="229.0721"
          y1="166.1247"
          x2="198.9927"
          y2="156.7086"
        >
          <stop offset="0" style="stop-color:#879CA7" />
          <stop offset="1" style="stop-color:#485255" />
        </linearGradient>
        <path
          :class="`zysfj-${info.id}-st34`"
          d="M180.84,114.16c0,0,5.84,25.31,12.33,42.19c6.49,16.87,17.52,40.89,17.52,40.89l24.66-22.72
                c0,0-7.79-9.74-11.03-18.82c-3.25-9.09-7.14-22.07-7.14-22.07L180.84,114.16z"
        />
        <linearGradient
          id="zysfj_32_"
          gradientUnits="userSpaceOnUse"
          x1="207.9082"
          y1="98.8385"
          x2="219.94"
          y2="83.4064"
        >
          <stop offset="0" style="stop-color:#879CA7" />
          <stop offset="1" style="stop-color:#485255" />
        </linearGradient>
        <path
          :class="`zysfj-${info.id}-st35`"
          d="M208.75,38.87c0,0-2.6,16.87-1.95,33.1c0.65,16.23,1.95,31.15,1.95,31.15l24.01,22.72
                c0,0-1.95-12.98-2.6-21.42c-0.65-8.44,0.65-15.58,0.65-15.58L208.75,38.87z"
        />
        <ellipse
          :class="`zysfj-${info.id}-st19`"
          cx="258.85"
          cy="123.6"
          rx="1.05"
          ry="2.76"
        />
        <ellipse
          :class="`zysfj-${info.id}-st19`"
          cx="273.15"
          cy="168.4"
          rx="1.05"
          ry="2.76"
        />
        <ellipse
          :class="`zysfj-${info.id}-st19`"
          cx="262.2"
          cy="173.48"
          rx="1.05"
          ry="2.76"
        />
        <ellipse
          :class="`zysfj-${info.id}-st19`"
          cx="269.8"
          cy="118.52"
          rx="1.05"
          ry="2.76"
        />
        <ellipse
          :class="`zysfj-${info.id}-st19`"
          cx="276.95"
          cy="140.92"
          rx="1.05"
          ry="2.76"
        />
        <ellipse
          :class="`zysfj-${info.id}-st19`"
          cx="255.05"
          cy="151.08"
          rx="1.05"
          ry="2.76"
        />
      </g>

      <g id="SVG_base2">
        <linearGradient
          id="zysfj_33_"
          gradientUnits="userSpaceOnUse"
          x1="126.6346"
          y1="282.2048"
          x2="126.6346"
          y2="11.1606"
        >
          <stop offset="0" style="stop-color:#4A5659" />
          <stop offset="0.0323" style="stop-color:#5C6B71" />
          <stop offset="0.0735" style="stop-color:#6E7F87" />
          <stop offset="0.1181" style="stop-color:#7A8E97" />
          <stop offset="0.1682" style="stop-color:#8296A1" />
          <stop offset="0.2346" style="stop-color:#8499A4" />
          <stop offset="0.2991" style="stop-color:#899DA8" />
          <stop offset="0.3751" style="stop-color:#97A9B3" />
          <stop offset="0.4569" style="stop-color:#AFBEC5" />
          <stop offset="0.5423" style="stop-color:#D0DADF" />
          <stop offset="0.6229" style="stop-color:#F6FAFC" />
          <stop offset="0.756" style="stop-color:#D7DEE2" />
          <stop offset="1" style="stop-color:#94A3AA" />
        </linearGradient>
        <path
          :class="`zysfj-${info.id}-st36`"
          d="M192.69,146.68c0-59.73,18.57-111.31,45.46-135.52H82.07v0.63c-36.97,0-66.94,60.39-66.94,134.89
                s29.97,134.89,66.94,134.89v0.63h156.08C211.26,258,192.69,206.41,192.69,146.68z"
        />

        <radialGradient
          id="zysfj_34_"
          cx="259.6346"
          cy="145.6827"
          r="104.9479"
          gradientTransform="matrix(1 0 0 1.6359 0 -92.6374)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style="stop-color:#000000" />
          <stop offset="1" style="stop-color:#000000;stop-opacity:0" />
        </radialGradient>
        <path
          :class="`zysfj-${info.id}-st37`"
          d="M192.69,146.68c0-59.73,18.57-111.31,45.46-135.52h-53.08l-1,0.63c-36.97,0-66.94,60.39-66.94,134.89
                s29.97,134.89,66.94,134.89l4,0.63h50.08C211.26,258,192.69,206.41,192.69,146.68z"
        />
        <path
          :class="`zysfj-${info.id}-st38`"
          d="M18.31,146.68c0-74.5,29.97-134.89,66.94-134.89v-0.63h-3.19v0.63c-36.97,0-66.94,60.39-66.94,134.89
                c0,74.5,29.97,134.89,66.94,134.89v0.63h3.19v-0.63C48.28,281.57,18.31,221.18,18.31,146.68z"
        />
        <path
          :class="`zysfj-${info.id}-st39`"
          d="M32.31,146.68c0-74.5,29.97-134.89,66.94-134.89v-0.63H85.07v0.63c-36.97,0-66.94,60.39-66.94,134.89
                c0,74.5,29.97,134.89,66.94,134.89v0.63h14.19v-0.63C62.28,281.57,32.31,221.18,32.31,146.68z"
        />
        <path
          :class="`zysfj-${info.id}-st39`"
          d="M185.31,146.68c0-74.5,29.97-134.89,66.94-134.89v-0.63h-14.19v0.63c-36.97,0-66.94,60.39-66.94,134.89
                c0,74.5,29.97,134.89,66.94,134.89v0.63h14.19v-0.63C215.28,281.57,185.31,221.18,185.31,146.68z"
        />
        <linearGradient
          id="zysfj_35_"
          gradientUnits="userSpaceOnUse"
          x1="225.2259"
          y1="293.3654"
          x2="225.2259"
          y2="0"
        >
          <stop offset="0" style="stop-color:#4A5659" />
          <stop offset="0.0323" style="stop-color:#5C6B71" />
          <stop offset="0.0735" style="stop-color:#6E7F87" />
          <stop offset="0.1181" style="stop-color:#7A8E97" />
          <stop offset="0.1682" style="stop-color:#8296A1" />
          <stop offset="0.2346" style="stop-color:#8499A4" />
          <stop offset="0.2991" style="stop-color:#899DA8" />
          <stop offset="0.3751" style="stop-color:#97A9B3" />
          <stop offset="0.4569" style="stop-color:#AFBEC5" />
          <stop offset="0.5423" style="stop-color:#D0DADF" />
          <stop offset="0.6229" style="stop-color:#F6FAFC" />
          <stop offset="0.756" style="stop-color:#D7DEE2" />
          <stop offset="1" style="stop-color:#94A3AA" />
        </linearGradient>
        <path
          :class="`zysfj-${info.id}-st40`"
          d="M194.53,146.68c0-79.51,28.91-144.23,70.95-146.61C264.69,0.03,263.89,0,263.09,0
                c-43.15,0-78.12,65.67-78.12,146.68s34.98,146.68,78.12,146.68c0.8,0,1.6-0.03,2.39-0.07
                C223.44,290.92,194.53,226.19,194.53,146.68z"
        />
        <linearGradient
          id="zysfj_36_"
          gradientUnits="userSpaceOnUse"
          x1="189.751"
          y1="146.6827"
          x2="346"
          y2="146.6827"
        >
          <stop offset="0" style="stop-color:#B7BDC0" />
          <stop offset="1" style="stop-color:#7F8A8D" />
        </linearGradient>
        <path
          :class="`zysfj-${info.id}-st41`"
          d="M267.88,0c-43.15,0-78.12,65.67-78.12,146.68s34.98,146.68,78.12,146.68S346,227.69,346,146.68
                S311.02,0,267.88,0z M269.47,278.4c-36.1,0-65.37-58.97-65.37-131.72s29.27-131.72,65.37-131.72s65.37,58.97,65.37,131.72
                S305.57,278.4,269.47,278.4z"
        />
        <path
          :class="`zysfj-${info.id}-st42`"
          d="M269.47,14.97c-0.53,0-1.06,0.06-1.59,0.08c35.36,1.71,63.78,59.97,63.78,131.63s-28.41,129.92-63.78,131.63
                c0.53,0.03,1.06,0.08,1.59,0.08c36.1,0,65.37-58.97,65.37-131.72S305.57,14.97,269.47,14.97z"
        />
        <polygon
          :class="`zysfj-${info.id}-st43`"
          points="91,249 82,249 65,317 74,317 85,287 	"
        />
        <linearGradient
          id="zysfj_37_"
          gradientUnits="userSpaceOnUse"
          x1="78.4043"
          y1="283.1667"
          x2="139.2846"
          y2="281.4518"
        >
          <stop offset="0" style="stop-color:#424A4E" />
          <stop offset="0.514" style="stop-color:#4F575B" />
        </linearGradient>
        <path
          :class="`zysfj-${info.id}-st44`"
          d="M134.07,282.2v-0.63c-16.63,0-31.85-12.23-43.55-32.46L74,317l63.63-34.8H134.07z"
        />
        <polygon
          :class="`zysfj-${info.id}-st43`"
          points="173,249 164,249 147,317 156,317 167,287 	"
        />
        <linearGradient
          id="zysfj_38_"
          gradientUnits="userSpaceOnUse"
          x1="160.4043"
          y1="283.1667"
          x2="221.2846"
          y2="281.4518"
        >
          <stop offset="0" style="stop-color:#424A4E" />
          <stop offset="0.514" style="stop-color:#4F575B" />
        </linearGradient>
        <path
          :class="`zysfj-${info.id}-st45`"
          d="M216.07,282.2v-0.63c-16.63,0-31.85-12.23-43.55-32.46L156,317l63.63-34.8H216.07z"
        />
        <linearGradient
          id="zysfj_39_"
          gradientUnits="userSpaceOnUse"
          x1="75.1105"
          y1="137.9746"
          x2="133"
          y2="137.9746"
        >
          <stop offset="0" style="stop-color:#748793" />
          <stop offset="1" style="stop-color:#617882" />
        </linearGradient>
        <path
          :class="`zysfj-${info.id}-st46`"
          d="M130.06,149.13c0-15.57,1.03-30.66,2.94-45.01H81.25c-3.39,0-6.14,2.75-6.14,6.14v55.43
                c0,3.39,2.75,6.14,6.14,6.14h49.54C130.31,164.4,130.06,156.83,130.06,149.13z"
        />
        <path
          :class="`zysfj-${info.id}-st47`"
          d="M113.75,171.83H58.43c-2,0-3.63-1.62-3.63-3.63v-60.45c0-2,1.62-3.63,3.63-3.63h55.33
                c2,0,3.63,1.62,3.63,3.63v60.45C117.38,170.2,115.76,171.83,113.75,171.83z"
        />
        <polygon
          :class="`zysfj-${info.id}-st19`"
          points="68.47,107.64 56.22,119.89 56.22,158.1 68.47,170.35 99.91,170.35 112.16,158.1 112.16,119.89
                99.91,107.64 	"
        />
        <polygon
          :class="`zysfj-${info.id}-st48`"
          points="99.91,107.64 68.47,107.64 66.54,109.57 97.23,109.57 109.48,121.82 109.48,160.78 112.16,158.1
                112.16,119.89 	"
        />
        <ellipse
          :class="`zysfj-${info.id}-st49`"
          cx="266"
          cy="145.64"
          rx="4.72"
          ry="8.64"
        />
        <linearGradient
          id="zysfj_40_"
          gradientUnits="userSpaceOnUse"
          x1="57"
          y1="109.5"
          x2="62"
          y2="109.5"
        >
          <stop offset="0" style="stop-color:#748793" />
          <stop offset="1" style="stop-color:#617882" />
        </linearGradient>
        <circle :class="`zysfj-${info.id}-st50`" cx="59.5" cy="109.5" r="2.5" />
        <linearGradient
          id="zysfj_41_"
          gradientUnits="userSpaceOnUse"
          x1="57"
          y1="167.5"
          x2="62"
          y2="167.5"
        >
          <stop offset="0" style="stop-color:#748793" />
          <stop offset="1" style="stop-color:#617882" />
        </linearGradient>
        <circle :class="`zysfj-${info.id}-st51`" cx="59.5" cy="167.5" r="2.5" />
        <linearGradient
          id="zysfj_42_"
          gradientUnits="userSpaceOnUse"
          x1="110"
          y1="109.5"
          x2="115"
          y2="109.5"
        >
          <stop offset="0" style="stop-color:#748793" />
          <stop offset="1" style="stop-color:#617882" />
        </linearGradient>
        <circle
          :class="`zysfj-${info.id}-st52`"
          cx="112.5"
          cy="109.5"
          r="2.5"
        />
        <linearGradient
          id="zysfj_43_"
          gradientUnits="userSpaceOnUse"
          x1="110"
          y1="167.5"
          x2="115"
          y2="167.5"
        >
          <stop offset="0" style="stop-color:#748793" />
          <stop offset="1" style="stop-color:#617882" />
        </linearGradient>
        <circle
          :class="`zysfj-${info.id}-st53`"
          cx="112.5"
          cy="167.5"
          r="2.5"
        />
        <linearGradient
          id="zysfj_44_"
          gradientUnits="userSpaceOnUse"
          x1="266.9814"
          y1="153.2704"
          x2="266.9814"
          y2="138"
        >
          <stop offset="0" style="stop-color:#4A5659" />
          <stop offset="0.0323" style="stop-color:#5C6B71" />
          <stop offset="0.0735" style="stop-color:#6E7F87" />
          <stop offset="0.1181" style="stop-color:#7A8E97" />
          <stop offset="0.1682" style="stop-color:#8296A1" />
          <stop offset="0.2346" style="stop-color:#8499A4" />
          <stop offset="0.2991" style="stop-color:#899DA8" />
          <stop offset="0.3751" style="stop-color:#97A9B3" />
          <stop offset="0.4569" style="stop-color:#AFBEC5" />
          <stop offset="0.5423" style="stop-color:#D0DADF" />
          <stop offset="0.6229" style="stop-color:#F6FAFC" />
          <stop offset="0.756" style="stop-color:#D7DEE2" />
          <stop offset="1" style="stop-color:#94A3AA" />
        </linearGradient>
        <path
          :class="`zysfj-${info.id}-st54`"
          d="M271.2,138h-4.75v0c-2.03,0.05-3.68,3.45-3.68,7.63c0,4.22,1.66,7.63,3.72,7.63c0.11,0,0.23-0.01,0.34-0.03
                h4.37V138z"
        />
        <linearGradient
          id="zysfj_45_"
          gradientUnits="userSpaceOnUse"
          x1="267.5853"
          y1="141.2396"
          x2="275.0665"
          y2="150.2404"
        >
          <stop offset="0" style="stop-color:#859095" />
          <stop offset="1" style="stop-color:#4D5559" />
        </linearGradient>
        <ellipse
          :class="`zysfj-${info.id}-st55`"
          cx="271.24"
          cy="145.64"
          rx="3.72"
          ry="7.63"
        />
      </g>
      <g class="SVG_alert" v-if="pointValue == 2">
        <path
          :class="`zysfj-${info.id}-st56`"
          d="M267.88,0c-0.8,0-1.6,0.03-2.39,0.07c0,0,0,0,0,0C264.69,0.03,263.89,0,263.09,0
                c-10.6,0-20.71,3.97-29.93,11.16h-48.09h-72.23C103.62,3.97,93.51,0,82.91,0c-0.8,0-1.6,0.03-2.4,0.07c0,0,0,0,0,0
                C79.72,0.03,78.92,0,78.12,0C34.98,0,0,65.67,0,146.68c0,76.54,31.22,139.37,71.06,146.08L65,317h9l63.63-34.8h18.07L147,317h9
                l63.63-34.8h13.54c9.22,7.19,19.33,11.16,29.93,11.16c0.8,0,1.6-0.03,2.39-0.07c0,0-0.01,0-0.01,0c0.8,0.05,1.6,0.08,2.4,0.08
                c43.15,0,78.12-65.67,78.12-146.68C346,65.67,311.02,0,267.88,0z"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
const pointCode = "SwSts";
export default {
  name: "deviceZysfjCom",
  data() {
    return {
      pointValue: "1" // expr:'SwSts',stop:0,start:1,alarm:2
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

    //渐变颜色样式
    gradientStyle() {
      return (info = {}) => {
        // let { info = {} } = this;
        let { gradientStyle = {} } = info || {};
        let {
          type = "",
          angle = "",
          center = "",
          radialShape = "",
          valueList = []
        } = gradientStyle || {};
        let styles = {};
        let colors = valueList.map(item => `${item.code} ${item.value}%`);
        if (type == "linear") {
          styles.backgroundImage = `linear-gradient(${angle}deg, ${colors.join()})`;
        } else if (type == "radial") {
          styles.backgroundImage = `radial-gradient(${radialShape} at ${center}, ${colors.join()})`;
        }
        return styles;
      };
    },

    comStyle() {
      let { info = {}, gradientStyle } = this;
      let {
        width = "",
        height = "",
        // color = "",
        borderColor = "",
        borderStyle = "",
        borderWidth = "",
        borderRadiusTopLeft = 0,
        borderRadiusTopRight = 0,
        borderRadiusBottomLeft = 0,
        borderRadiusBottomRight = 0,

        marginTop = 0,
        marginBottom = 0,
        marginLeft = 0,
        marginRight = 0,
        borderTop = 0,
        borderBottom = 0,
        borderLeft = 0,
        borderRight = 0,
        paddingTop = 0,
        paddingBottom = 0,
        paddingLeft = 0,
        paddingRight = 0,
        shadow = {},
        shadowable = false,
        backgroundType = "",
        backgroundColor = "",
        backgroundImage = "",
        backgroundRepeat = "",
        backgroundSize = ""
      } = info || {};
      let styles = {
        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
        padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
      };
      if (shadowable) {
        let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
          shadow || {};
        styles[
          "boxShadow"
        ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      }
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;
      if (backgroundRepeat) {
        styles["backgroundRepeat"] = backgroundRepeat;
      }
      if (backgroundSize) {
        styles["backgroundSize"] = backgroundSize;
      }
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;

      if (borderTop) {
        if (borderStyle) {
          styles["borderTopStyle"] = borderStyle;
        }
        styles["borderTopWidth"] = `${borderWidth}px`;
        if (borderColor) {
          styles["borderTopColor"] = borderColor;
        }
      } else {
        styles["borderTop"] = "none";
      }
      if (borderBottom) {
        if (borderStyle) {
          styles["borderBottomStyle"] = borderStyle;
        }
        styles["borderBottomWidth"] = `${borderWidth}px`;
        if (borderColor) {
          styles["borderBottomColor"] = borderColor;
        }
      } else {
        styles["borderBottom"] = "none";
      }
      if (borderLeft) {
        if (borderStyle) {
          styles["borderLeftStyle"] = borderStyle;
        }
        styles["borderLeftWidth"] = `${borderWidth}px`;
        if (borderColor) {
          styles["borderLeftColor"] = borderColor;
        }
      } else {
        styles["borderLeft"] = "none";
      }
      if (borderRight) {
        if (borderStyle) {
          styles["borderRightStyle"] = borderStyle;
        }
        styles["borderRightWidth"] = `${borderWidth}px`;
        if (borderColor) {
          styles["borderRightColor"] = borderColor;
        }
      } else {
        styles["borderRight"] = "none";
      }
      styles[
        "borderRadius"
      ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
      if (backgroundType == "purity") {
        //纯色
        if (backgroundColor) {
          styles["backgroundColor"] = backgroundColor;
        }
        if (backgroundImage) {
          styles["backgroundImage"] = `url(${this.$loadImgUrl(
            backgroundImage
          )})`;
        }
      } else if (backgroundType == "gradient") {
        //渐变
        styles = { ...styles, ...gradientStyle(info) };
      }
      return styles || {};
    }
  },
  mounted() {
    //
    this.init();
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),

    init() {
      let { info = {}, showType = "" } = this;
      if (showType != "edit") {
        let { id = "", bindData = {} } = info || {};
        let { deviceId = "" } = bindData || {};
        if (!deviceId) {
          return;
        }
        $vm.$on(`devicePointEvent_${id}`, ({ device }) => {
          bmCommon.log("deviceShsbCom", device);
          let { pointList = [] } = device || {};
          let point = pointList.find(item => {
            let { point: id = "" } = item || {};
            return id == pointCode; // SwSts  开关状态
          });
          if (point) {
            let { value = "" } = point || {};
            this.pointValue = value;
          }
        });
      }
      this.loadDeviceInfo();
    },
    loadDeviceInfo() {
      let { info = {} } = this;
      let { bindData = {} } = info || {};
      let { deviceId = "", devicePoint = "" } = bindData || {};
      if (!deviceId) {
        return;
      }
      devicePoint = pointCode;
      $vm.$emit("device", {
        deviceId,
        callback: (device = {}) => {
          let { points: pointList = [] } = device || {};
          let point = pointList.find(item => {
            let { id = "" } = item || {};
            return id == devicePoint; //
          });
          if (point) {
            let { value = "" } = point || {};
            this.pointValue = value;
          }
        }
      });
    }
  },
  watch: {
    "info.bindData.devicePoint": {
      handler(newVal, oldVal) {
        this.loadDeviceInfo();
      },
      deep: true
    }
  }
};
</script>
<style lang="less" scoped>
// @import (reference) "./../../../../assets/less/common.less";
</style>

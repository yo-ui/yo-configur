// 排风机
<template>
  <div class="bm-device-pfj-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 165"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `<style type='text/css'>
          .pfj-${info.id}-st0{fill:#4065A8;}
              .pfj-${info.id}-st1{fill:url(#pfj_1_);}
              .pfj-${info.id}-st2{fill:url(#pfj_2_);}
              .pfj-${info.id}-st3{fill:#FF1C1C;}
              .pfj-${info.id}-st4{fill:url(#pfj_3_);}
              .pfj-${info.id}-st5{fill:url(#pfj_4_);}
              .pfj-${info.id}-st6{fill:url(#pfj_5_);}
              .pfj-${info.id}-st7{fill:url(#pfj_6_);}
              .pfj-${info.id}-st8{fill:url(#pfj_7_);}
              .pfj-${info.id}-st9{opacity:0.3;}
              .pfj-${info.id}-st10{fill:#303435;}
              .pfj-${info.id}-st11{fill:#BCC5CC;}
              .pfj-${info.id}-st12{fill:url(#pfj_8_);}
              .pfj-${info.id}-st13{fill:url(#pfj_9_);}
              .pfj-${info.id}-st14{fill:#283460;}
              .pfj-${info.id}-st15{fill:#9BBAE8;}
              .pfj-${info.id}-st16{fill:url(#pfj_10_);}
              .pfj-${info.id}-st17{opacity:0.15;fill:url(#pfj_11_);}
              .pfj-${info.id}-st18{opacity:0.2;fill:url(#pfj_12_);}
              .pfj-${info.id}-st19{fill:url(#pfj_13_);}
              .pfj-${info.id}-st20{fill:url(#pfj_14_);}
              .pfj-${info.id}-st21{fill:url(#pfj_15_);}
              .pfj-${info.id}-st22{opacity:0.8;fill:url(#pfj_16_);}
              .pfj-${info.id}-st23{opacity:0.8;fill:url(#pfj_17_);}
              .pfj-${info.id}-st24{opacity:0.8;fill:url(#pfj_18_);}
              .pfj-${info.id}-st25{opacity:0.8;fill:url(#pfj_19_);}
              .pfj-${info.id}-st26{opacity:0.8;fill:url(#pfj_20_);}
              .pfj-${info.id}-st27{opacity:0.8;fill:url(#pfj_21_);}
              .pfj-${info.id}-st28{opacity:0.8;fill:url(#pfj_22_);}
              .pfj-${info.id}-st29{opacity:0.8;fill:url(#pfj_23_);}
              .pfj-${info.id}-st30{fill:url(#pfj_24_);}
              .pfj-${info.id}-st31{fill:url(#pfj_25_);}
              .pfj-${info.id}-st32{fill:#88B9FE;}
              .pfj-${info.id}-st33{fill:#3C6DD6;}
              .pfj-${info.id}-st34{opacity:0.6;fill:#FF1C1C;}
            
              .show {display:default;}
              .hide {display:none;}
              .f1 {display:default;}
              .f2 {display:none;}
              .f3 {display:none;}
      </style>`
        "
      ></defs>
      <g id="SVG_base1">
        <rect
          x="40.12"
          y="4.69"
          :class="`pfj-${info.id}-st0`"
          width="60.47"
          height="30.31"
        />
        <linearGradient
          id="pfj_1_"
          gradientUnits="userSpaceOnUse"
          x1="96.4096"
          y1="44.946"
          x2="80.8363"
          y2="25.6759"
        >
          <stop offset="0" style="stop-color:#000000" />
          <stop offset="1" style="stop-color:#244592" />
        </linearGradient>
        <polygon
          :class="`pfj-${info.id}-st1`"
          points="78.43,71.68 69.45,45.73 79.43,26.77 104.37,5.82 104.37,49.73 89.41,57.71 	"
        />
        <linearGradient
          id="pfj_2_"
          gradientUnits="userSpaceOnUse"
          x1="195.7994"
          y1="122.9899"
          x2="110.0177"
          y2="33.6137"
        >
          <stop offset="0" style="stop-color:#1A3B80" />
          <stop offset="0.2486" style="stop-color:#3F6DCB" />
          <stop offset="0.5726" style="stop-color:#A2BEE5" />
          <stop offset="0.8073" style="stop-color:#406ECE" />
          <stop offset="0.8503" style="stop-color:#3E6BCA" />
          <stop offset="0.8917" style="stop-color:#3964BF" />
          <stop offset="0.9324" style="stop-color:#2F57AB" />
          <stop offset="0.9724" style="stop-color:#224590" />
          <stop offset="1" style="stop-color:#173679" />
        </linearGradient>
        <path
          :class="`pfj-${info.id}-st2`"
          d="M83.42,52.72c0,0,24.95-38.92,70.85-28.94c34.06,7.4,51.69,39.87,43.91,71.85
                c-8.98,36.92-39.92,58.88-39.92,58.88L83.42,52.72z"
        />
        <circle cx="119.84" cy="92.14" r="44.41" />
      </g>

      <g class="SVG_ani" v-if="pointValue == 1">
        <g class="f1">
          <animate
            values="show;hide;"
            dur="0.2s"
            attributeName="class"
            repeatCount="indefinite"
          />
          <rect
            x="88.4"
            y="109.04"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -46.4436 101.046)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
          <rect
            x="84.54"
            y="102.72"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -43.1878 96.7592)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
          <rect
            x="94.69"
            y="113.57"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -47.851 106.5002)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
          <rect
            x="102.22"
            y="117.53"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -48.5392 112.6479)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
          <rect
            x="111.42"
            y="118.36"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -46.6719 119.098)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
          <rect
            x="119.23"
            y="118.6"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -44.7755 124.4505)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
          <rect
            x="82.71"
            y="94.96"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -38.414 93.4656)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
          <rect
            x="79.34"
            y="88.94"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -35.2247 89.593)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
          <rect
            x="78.99"
            y="81"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -29.9381 87.2621)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
          <rect
            x="77.31"
            y="74.97"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -26.2979 84.5311)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
          <rect
            x="81.33"
            y="63.94"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -17.7648 84.3379)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
          <rect
            x="127.58"
            y="117.53"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -41.8374 129.8235)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
        </g>
        <g class="f2">
          <animate
            values="hide;show;"
            dur="0.2s"
            attributeName="class"
            repeatCount="indefinite"
          />
          <rect
            x="87.41"
            y="105.05"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -44.0039 99.3153)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
          <rect
            x="83.54"
            y="98.73"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -40.7481 95.0284)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
          <rect
            x="93.69"
            y="109.58"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -45.4112 104.7695)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
          <rect
            x="99.23"
            y="114.53"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -47.3027 109.8291)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
          <rect
            x="108.43"
            y="116.36"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -46.1113 116.543)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
          <rect
            x="116.24"
            y="117.61"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -44.8908 122.1592)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
          <rect
            x="81.71"
            y="90.97"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -35.9742 91.7349)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
          <rect
            x="79.34"
            y="84.94"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -32.5212 88.5381)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
          <rect
            x="78.99"
            y="77.01"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -27.2346 86.2072)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
          <rect
            x="77.31"
            y="70.97"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -23.5945 83.4762)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
          <rect
            x="80.34"
            y="60.94"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -16.0009 82.8709)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
          <rect
            x="124.59"
            y="117.53"
            transform="matrix(0.7357 -0.6773 0.6773 0.7357 -42.6286 127.7959)"
            :class="`pfj-${info.id}-st3`"
            width="35.71"
            height="2"
          />
        </g>
        <g class="f1">
          <animate
            values="show;hide;hide;"
            dur="0.4s"
            attributeName="class"
            repeatCount="indefinite"
          />
          <linearGradient
            id="pfj_3_"
            gradientUnits="userSpaceOnUse"
            x1="108.4221"
            y1="105.3612"
            x2="162.4332"
            y2="54.66"
          >
            <stop offset="0" style="stop-color:#BB060D" />
            <stop offset="0.1528" style="stop-color:#B5060D" />
            <stop offset="0.3521" style="stop-color:#A5070C" />
            <stop offset="0.577" style="stop-color:#8A080B" />
            <stop offset="0.819" style="stop-color:#650909" />
            <stop offset="1" style="stop-color:#440A08" />
          </linearGradient>
          <circle
            :class="`pfj-${info.id}-st4`"
            cx="133.31"
            cy="81.99"
            r="24.29"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="133.31"
            cy="66.55"
            r="1.33"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="133.31"
            cy="97.21"
            r="1.33"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="122.47"
            cy="71.04"
            r="1.33"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="144.16"
            cy="92.72"
            r="1.33"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="148.65"
            cy="81.88"
            r="1.33"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="117.98"
            cy="81.88"
            r="1.33"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="144.16"
            cy="71.04"
            r="1.33"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="122.47"
            cy="92.72"
            r="1.33"
          />
        </g>
        <g class="f2">
          <animate
            values="hide;show;hide;"
            dur="0.4s"
            attributeName="class"
            repeatCount="indefinite"
          />
          <linearGradient
            id="pfj_4_"
            gradientUnits="userSpaceOnUse"
            x1="108.4221"
            y1="105.3612"
            x2="162.4332"
            y2="54.66"
          >
            <stop offset="0" style="stop-color:#BB060D" />
            <stop offset="0.1528" style="stop-color:#B5060D" />
            <stop offset="0.3521" style="stop-color:#A5070C" />
            <stop offset="0.577" style="stop-color:#8A080B" />
            <stop offset="0.819" style="stop-color:#650909" />
            <stop offset="1" style="stop-color:#440A08" />
          </linearGradient>
          <circle
            :class="`pfj-${info.id}-st5`"
            cx="133.31"
            cy="81.99"
            r="24.29"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="129.35"
            cy="67.07"
            r="1.33"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="137.28"
            cy="96.69"
            r="1.33"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="120.03"
            cy="74.21"
            r="1.33"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="146.59"
            cy="89.55"
            r="1.33"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="148.13"
            cy="77.91"
            r="1.33"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="118.5"
            cy="85.85"
            r="1.33"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="140.98"
            cy="68.6"
            r="1.33"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="125.65"
            cy="95.16"
            r="1.33"
          />
        </g>
        <g class="f3">
          <animate
            values="hide;hide;show;"
            dur="0.4s"
            attributeName="class"
            repeatCount="indefinite"
          />
          <linearGradient
            id="pfj_5_"
            gradientUnits="userSpaceOnUse"
            x1="108.4221"
            y1="105.3612"
            x2="162.4332"
            y2="54.66"
          >
            <stop offset="0" style="stop-color:#BB060D" />
            <stop offset="0.1528" style="stop-color:#B5060D" />
            <stop offset="0.3521" style="stop-color:#A5070C" />
            <stop offset="0.577" style="stop-color:#8A080B" />
            <stop offset="0.819" style="stop-color:#650909" />
            <stop offset="1" style="stop-color:#440A08" />
          </linearGradient>
          <circle
            :class="`pfj-${info.id}-st6`"
            cx="133.31"
            cy="81.99"
            r="24.29"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="125.65"
            cy="68.6"
            r="1.33"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="140.98"
            cy="95.16"
            r="1.33"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="118.5"
            cy="77.91"
            r="1.33"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="148.13"
            cy="85.85"
            r="1.33"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="146.59"
            cy="74.21"
            r="1.33"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="120.03"
            cy="89.55"
            r="1.33"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="137.28"
            cy="67.07"
            r="1.33"
          />
          <circle
            :class="`pfj-${info.id}-st3`"
            cx="129.35"
            cy="96.69"
            r="1.33"
          />
        </g>
      </g>
      <g class="SVG_sta" v-if="pointValue === 0">
        <rect
          x="87.41"
          y="105.05"
          transform="matrix(0.7357 -0.6773 0.6773 0.7357 -44.0039 99.3153)"
          :class="`pfj-${info.id}-st3`"
          width="35.71"
          height="2"
        />
        <rect
          x="83.54"
          y="98.73"
          transform="matrix(0.7357 -0.6773 0.6773 0.7357 -40.7481 95.0284)"
          :class="`pfj-${info.id}-st3`"
          width="35.71"
          height="2"
        />
        <rect
          x="93.69"
          y="109.58"
          transform="matrix(0.7357 -0.6773 0.6773 0.7357 -45.4112 104.7695)"
          :class="`pfj-${info.id}-st3`"
          width="35.71"
          height="2"
        />
        <rect
          x="99.23"
          y="114.53"
          transform="matrix(0.7357 -0.6773 0.6773 0.7357 -47.3027 109.8291)"
          :class="`pfj-${info.id}-st3`"
          width="35.71"
          height="2"
        />
        <rect
          x="108.43"
          y="116.36"
          transform="matrix(0.7357 -0.6773 0.6773 0.7357 -46.1113 116.543)"
          :class="`pfj-${info.id}-st3`"
          width="35.71"
          height="2"
        />
        <rect
          x="116.24"
          y="117.61"
          transform="matrix(0.7357 -0.6773 0.6773 0.7357 -44.8908 122.1592)"
          :class="`pfj-${info.id}-st3`"
          width="35.71"
          height="2"
        />
        <rect
          x="81.71"
          y="90.97"
          transform="matrix(0.7357 -0.6773 0.6773 0.7357 -35.9742 91.7349)"
          :class="`pfj-${info.id}-st3`"
          width="35.71"
          height="2"
        />
        <rect
          x="79.34"
          y="84.94"
          transform="matrix(0.7357 -0.6773 0.6773 0.7357 -32.5212 88.5381)"
          :class="`pfj-${info.id}-st3`"
          width="35.71"
          height="2"
        />
        <rect
          x="78.99"
          y="77.01"
          transform="matrix(0.7357 -0.6773 0.6773 0.7357 -27.2346 86.2072)"
          :class="`pfj-${info.id}-st3`"
          width="35.71"
          height="2"
        />
        <rect
          x="77.31"
          y="70.97"
          transform="matrix(0.7357 -0.6773 0.6773 0.7357 -23.5945 83.4762)"
          :class="`pfj-${info.id}-st3`"
          width="35.71"
          height="2"
        />
        <rect
          x="80.34"
          y="60.94"
          transform="matrix(0.7357 -0.6773 0.6773 0.7357 -16.0009 82.8709)"
          :class="`pfj-${info.id}-st3`"
          width="35.71"
          height="2"
        />
        <rect
          x="124.59"
          y="117.53"
          transform="matrix(0.7357 -0.6773 0.6773 0.7357 -42.6286 127.7959)"
          :class="`pfj-${info.id}-st3`"
          width="35.71"
          height="2"
        />
        <linearGradient
          id="pfj_5_"
          gradientUnits="userSpaceOnUse"
          x1="108.4221"
          y1="105.3612"
          x2="162.4332"
          y2="54.66"
        >
          <stop offset="0" style="stop-color:#BB060D" />
          <stop offset="0.1528" style="stop-color:#B5060D" />
          <stop offset="0.3521" style="stop-color:#A5070C" />
          <stop offset="0.577" style="stop-color:#8A080B" />
          <stop offset="0.819" style="stop-color:#650909" />
          <stop offset="1" style="stop-color:#440A08" />
        </linearGradient>
        <circle
          :class="`pfj-${info.id}-st6`"
          cx="133.31"
          cy="81.99"
          r="24.29"
        />
        <circle :class="`pfj-${info.id}-st3`" cx="125.65" cy="68.6" r="1.33" />
        <circle :class="`pfj-${info.id}-st3`" cx="140.98" cy="95.16" r="1.33" />
        <circle :class="`pfj-${info.id}-st3`" cx="118.5" cy="77.91" r="1.33" />
        <circle :class="`pfj-${info.id}-st3`" cx="148.13" cy="85.85" r="1.33" />
        <circle :class="`pfj-${info.id}-st3`" cx="146.59" cy="74.21" r="1.33" />
        <circle :class="`pfj-${info.id}-st3`" cx="120.03" cy="89.55" r="1.33" />
        <circle :class="`pfj-${info.id}-st3`" cx="137.28" cy="67.07" r="1.33" />
        <circle :class="`pfj-${info.id}-st3`" cx="129.35" cy="96.69" r="1.33" />
      </g>
      <g id="SVG_base2">
        <linearGradient
          id="pfj_6_"
          gradientUnits="userSpaceOnUse"
          x1="91.5382"
          y1="61.2574"
          x2="143.438"
          y2="117.9407"
        >
          <stop offset="0" style="stop-color:#000000" />
          <stop offset="0.5028" style="stop-color:#000000;stop-opacity:0" />
          <stop offset="1" style="stop-color:#000000" />
        </linearGradient>
        <polygon
          :class="`pfj-${info.id}-st7`"
          points="119.84,47.73 104.37,46.89 86.91,55.71 76.36,76.96 84.82,119.43 128.02,146.32 162.92,114.57 
                162.16,72.89 131.62,49.31 	"
        />
        <linearGradient
          id="pfj_7_"
          gradientUnits="userSpaceOnUse"
          x1="108.9111"
          y1="107.1371"
          x2="141.8429"
          y2="73.2073"
        >
          <stop offset="0" style="stop-color:#BB060D" />
          <stop offset="0.1528" style="stop-color:#B5060D" />
          <stop offset="0.3521" style="stop-color:#A5070C" />
          <stop offset="0.577" style="stop-color:#8A080B" />
          <stop offset="0.819" style="stop-color:#650909" />
          <stop offset="1" style="stop-color:#440A08" />
        </linearGradient>
        <path
          :class="`pfj-${info.id}-st8`"
          d="M133.31,47.75c-18.91,0-34.24,15.33-34.24,34.24s15.33,34.24,34.24,34.24s34.24-15.33,34.24-34.24
                S152.23,47.75,133.31,47.75z M133.31,106.28c-13.41,0-24.29-10.87-24.29-24.29s10.87-24.29,24.29-24.29s24.29,10.87,24.29,24.29
                S146.73,106.28,133.31,106.28z"
        />
        <path
          :class="`pfj-${info.id}-st9`"
          d="M134.31,106.28c-13.94,0-25.28-11.34-25.28-25.28s11.34-25.28,25.28-25.28S159.6,67.05,159.6,81
                S148.25,106.28,134.31,106.28z M134.31,57.71c-12.84,0-23.29,10.45-23.29,23.29s10.45,23.29,23.29,23.29S157.6,93.84,157.6,81
                S147.15,57.71,134.31,57.71z"
        />
        <circle :class="`pfj-${info.id}-st10`" cx="134.31" cy="81" r="4.03" />
        <circle
          :class="`pfj-${info.id}-st11`"
          cx="133.31"
          cy="81.99"
          r="4.03"
        />
        <linearGradient
          id="pfj_8_"
          gradientUnits="userSpaceOnUse"
          x1="116.0604"
          y1="99.7712"
          x2="150.5678"
          y2="64.2181"
        >
          <stop offset="0" style="stop-color:#BB060D" />
          <stop offset="0.1528" style="stop-color:#B5060D" />
          <stop offset="0.3521" style="stop-color:#A5070C" />
          <stop offset="0.577" style="stop-color:#8A080B" />
          <stop offset="0.819" style="stop-color:#650909" />
          <stop offset="1" style="stop-color:#440A08" />
        </linearGradient>
        <path
          :class="`pfj-${info.id}-st12`"
          d="M133.31,106.78c-13.67,0-24.78-11.12-24.78-24.78s11.12-24.78,24.78-24.78c13.67,0,24.78,11.12,24.78,24.78
                S146.98,106.78,133.31,106.78z M133.31,58.21c-13.12,0-23.79,10.67-23.79,23.79s10.67,23.79,23.79,23.79s23.79-10.67,23.79-23.79
                S146.43,58.21,133.31,58.21z"
        />
        <linearGradient
          id="pfj_9_"
          gradientUnits="userSpaceOnUse"
          x1="78.2028"
          y1="75.1458"
          x2="140.8412"
          y2="135.4316"
        >
          <stop offset="0" style="stop-color:#142664" />
          <stop offset="1" style="stop-color:#4987EE" />
        </linearGradient>
        <path
          :class="`pfj-${info.id}-st13`"
          d="M128.32,129.56c-23.7,0-42.91-19.21-42.91-42.91c0-14.99,7.7-28.19,19.35-35.86c0.24-0.2,0.47-0.41,0.71-0.6
                l-5.09,0.54L81.42,62.7L69.45,77.67v23.95l8.98,24.95l19.96,15.97h30.94l24.95-15.97l2.79-7.86c-0.33,0.24-0.68,0.46-1.02,0.69
                C148.57,125.73,138.9,129.56,128.32,129.56z"
        />
        <polygon
          :class="`pfj-${info.id}-st14`"
          points="17.35,59.95 40.12,40.74 40.12,4.69 17.35,23.9 	"
        />
        <g>
          <g>
            <path
              :class="`pfj-${info.id}-st15`"
              d="M147.23,44.87c-36.46-13.34-54.27,5.03-54.27,5.03s0.17-0.04,0.49-0.11c4.26-3.54,21.69-15.45,52.84-4.05
                    c40.92,14.97,44.95,68.36,20.96,99.79c-14.44,18.92-41.31,28.9-68.57,27.33c27.66,1.77,55.01-8.28,69.66-27.48
                    C192.49,113.72,188.44,59.95,147.23,44.87z"
            />
          </g>
        </g>
        <linearGradient
          id="pfj_10_"
          gradientUnits="userSpaceOnUse"
          x1="19.2374"
          y1="14.6307"
          x2="155.9542"
          y2="158.3331"
        >
          <stop offset="0" style="stop-color:#72B4F1" />
          <stop offset="1" style="stop-color:#3467D0" />
        </linearGradient>
        <path
          :class="`pfj-${info.id}-st16`"
          d="M146.29,45.73c-36.2-13.24-53.89,4.99-53.89,4.99s40.92-9.98,67.86,24.95c23.13,29.98-4.99,57.88-26.94,62.87
                c-25.97,5.9-54.89-4.99-58.88-30.94c-3.99-25.95,4.99-41.14,4.99-41.14V26.77H13.56v49.9c0,0,1.15,31.85,13.97,53.89
                c31.93,54.89,110.77,52.89,139.71,14.97C191.23,114.09,187.2,60.7,146.29,45.73z"
        />
        <linearGradient
          id="pfj_11_"
          gradientUnits="userSpaceOnUse"
          x1="74.4629"
          y1="88.9323"
          x2="28.9994"
          y2="86.9399"
        >
          <stop offset="0" style="stop-color:#000000" />
          <stop offset="1" style="stop-color:#244592" />
        </linearGradient>
        <path
          :class="`pfj-${info.id}-st17`"
          d="M50.95,141.44c-1.01,0-2-0.42-2.72-1.22c-3.09-3.44-10.87-12.9-16.4-26.35c-5.88-14.31-8.02-37.9-8.04-38.14
                l0-36.19c0-2.5,2.04-4.54,4.54-4.54h37.33c2.5,0,4.54,2.04,4.54,4.54v42.11l-1.98,23.84l8.15,20.37l-23.43,14.99
                C52.32,141.25,51.63,141.44,50.95,141.44z M28.33,36.5c-1.68,0-3.04,1.36-3.04,3.04v36.13c0.02,0.17,2.13,23.54,7.93,37.64
                c5.44,13.23,13.09,22.53,16.12,25.92c0.71,0.79,1.88,0.95,2.79,0.37l22.38-14.32l-7.82-19.55L68.7,81.6l0-42.05
                c0-1.68-1.36-3.04-3.04-3.04H28.33z"
        />
        <linearGradient
          id="pfj_12_"
          gradientUnits="userSpaceOnUse"
          x1="161.1502"
          y1="149.6755"
          x2="40.5181"
          y2="141.1625"
        >
          <stop offset="0.6089" style="stop-color:#000000" />
          <stop offset="1" style="stop-color:#000000;stop-opacity:0" />
        </linearGradient>
        <path
          :class="`pfj-${info.id}-st18`"
          d="M104.67,163.39c-0.1,0-0.2,0-0.3,0c-20.16-0.07-36-7.36-42.18-11.65c-0.74-0.51-1.19-1.32-1.24-2.21
                c-0.05-0.89,0.3-1.75,0.97-2.34l20.51-18.32l0.48,0.32c0.16,0.11,16.67,10.83,33.59,13.95c16.69,3.07,31.48-11.74,31.63-11.89
                l0.37-0.38l9.57,4.4c0.89,0.58,1.47,1.52,1.57,2.58c0.1,1.05-0.28,2.08-1.04,2.81C152.11,146.88,134.97,163.39,104.67,163.39z
                 M82.56,130.75l-19.65,17.56c-0.32,0.29-0.49,0.7-0.47,1.13c0.03,0.43,0.25,0.82,0.6,1.07c6.04,4.19,21.55,11.31,41.34,11.38
                c0.1,0,0.2,0,0.29,0c29.7,0,46.52-16.21,52.87-22.32c0.43-0.41,0.64-0.99,0.59-1.59c-0.06-0.59-0.37-1.11-0.85-1.44l-8.47-3.89
                c-2.5,2.4-16.44,14.92-32.59,11.94C100.63,141.74,85.44,132.55,82.56,130.75z"
        />
        <radialGradient
          id="pfj_13_"
          cx="117.1477"
          cy="98.2529"
          r="72.7638"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.6089" style="stop-color:#000000" />
          <stop offset="1" style="stop-color:#000000;stop-opacity:0" />
        </radialGradient>
        <path
          :class="`pfj-${info.id}-st19`"
          d="M146.29,45.73c-36.2-13.24-53.89,4.99-53.89,4.99s40.92-9.98,67.86,24.95c23.13,29.98-4.99,57.88-26.94,62.87
                c-25.97,5.9-55.88-5.15-59.88-31.09c-3.99-25.95,5.99-40.98,5.99-40.98V26.77H13.56v49.9c0,0,1.15,31.85,13.97,53.89
                c31.93,54.89,110.77,52.89,139.71,14.97C191.23,114.09,187.2,60.7,146.29,45.73z"
        />
        <path
          :class="`pfj-${info.id}-st15`"
          d="M118.35,137.54c-23.7,0-42.91-19.21-42.91-42.91c0-16.92,9.79-31.54,24.01-38.53
                c1.81-2.16,3.82-4.15,6.02-5.92l-5.09,0.54L81.42,62.7L69.45,77.67v23.95l8.98,24.95l19.96,15.97h30.94l24.95-15.97l2.79-7.86
                c-1.83,1.3-3.77,2.45-5.8,3.45C143.39,131.56,131.57,137.54,118.35,137.54z"
        />
        <linearGradient
          id="pfj_14_"
          gradientUnits="userSpaceOnUse"
          x1="78.7552"
          y1="86.9843"
          x2="171.2356"
          y2="86.9843"
        >
          <stop offset="0" style="stop-color:#1A3B80" />
          <stop offset="0.2486" style="stop-color:#3F6DCB" />
          <stop offset="0.5726" style="stop-color:#A2BEE5" />
          <stop offset="0.8073" style="stop-color:#406ECE" />
          <stop offset="0.8503" style="stop-color:#3E6BCA" />
          <stop offset="0.8917" style="stop-color:#3964BF" />
          <stop offset="0.9324" style="stop-color:#2F57AB" />
          <stop offset="0.9724" style="stop-color:#224590" />
          <stop offset="1" style="stop-color:#173679" />
        </linearGradient>
        <path
          :class="`pfj-${info.id}-st20`"
          d="M117.35,40.74c-15.13,0-28.8,6.25-38.59,16.29c9.71-9.46,22.97-15.3,37.59-15.3
                c29.76,0,53.89,24.13,53.89,53.89c0,14.63-5.84,27.88-15.3,37.59c10.05-9.79,16.29-23.46,16.29-38.59
                C171.24,64.87,147.11,40.74,117.35,40.74z"
        />
        <linearGradient
          id="pfj_15_"
          gradientUnits="userSpaceOnUse"
          x1="80.0112"
          y1="55.4316"
          x2="195.0525"
          y2="182.696"
        >
          <stop offset="0" style="stop-color:#72B4F1" />
          <stop offset="1" style="stop-color:#3467D0" />
        </linearGradient>
        <path
          :class="`pfj-${info.id}-st21`"
          d="M116.35,41.74c-29.76,0-53.89,24.13-53.89,53.89s24.13,53.89,53.89,53.89s53.89-24.13,53.89-53.89
                S146.11,41.74,116.35,41.74z M116.35,138.54c-23.7,0-42.91-19.21-42.91-42.91s19.21-42.91,42.91-42.91s42.91,19.21,42.91,42.91
                S140.05,138.54,116.35,138.54z"
        />
        <linearGradient
          id="pfj_16_"
          gradientUnits="userSpaceOnUse"
          x1="115.0824"
          y1="46.0158"
          x2="117.1818"
          y2="47.6543"
        >
          <stop offset="0" style="stop-color:#000000" />
          <stop offset="1" style="stop-color:#244592" />
        </linearGradient>
        <circle
          :class="`pfj-${info.id}-st22`"
          cx="116.21"
          cy="46.89"
          r="1.46"
        />
        <linearGradient
          id="pfj_17_"
          gradientUnits="userSpaceOnUse"
          x1="115.0824"
          y1="142.8153"
          x2="117.1818"
          y2="144.4538"
        >
          <stop offset="0" style="stop-color:#000000" />
          <stop offset="1" style="stop-color:#244592" />
        </linearGradient>
        <circle
          :class="`pfj-${info.id}-st23`"
          cx="116.21"
          cy="143.69"
          r="1.46"
        />
        <linearGradient
          id="pfj_18_"
          gradientUnits="userSpaceOnUse"
          x1="66.8562"
          y1="95.4818"
          x2="68.9556"
          y2="97.1203"
        >
          <stop offset="0" style="stop-color:#000000" />
          <stop offset="1" style="stop-color:#244592" />
        </linearGradient>
        <circle :class="`pfj-${info.id}-st24`" cx="67.98" cy="96.36" r="1.46" />
        <linearGradient
          id="pfj_19_"
          gradientUnits="userSpaceOnUse"
          x1="164.1222"
          y1="95.4818"
          x2="166.2215"
          y2="97.1203"
        >
          <stop offset="0" style="stop-color:#000000" />
          <stop offset="1" style="stop-color:#244592" />
        </linearGradient>
        <circle
          :class="`pfj-${info.id}-st25`"
          cx="165.25"
          cy="96.36"
          r="1.46"
        />
        <linearGradient
          id="pfj_20_"
          gradientUnits="userSpaceOnUse"
          x1="77.7644"
          y1="63.6331"
          x2="79.8638"
          y2="65.2717"
        >
          <stop offset="0" style="stop-color:#000000" />
          <stop offset="1" style="stop-color:#244592" />
        </linearGradient>
        <circle :class="`pfj-${info.id}-st26`" cx="78.89" cy="64.51" r="1.46" />
        <linearGradient
          id="pfj_21_"
          gradientUnits="userSpaceOnUse"
          x1="151.6115"
          y1="63.6331"
          x2="153.7108"
          y2="65.2717"
        >
          <stop offset="0" style="stop-color:#000000" />
          <stop offset="1" style="stop-color:#244592" />
        </linearGradient>
        <circle
          :class="`pfj-${info.id}-st27`"
          cx="152.74"
          cy="64.51"
          r="1.46"
        />
        <linearGradient
          id="pfj_22_"
          gradientUnits="userSpaceOnUse"
          x1="77.7644"
          y1="125.505"
          x2="79.8638"
          y2="127.1435"
        >
          <stop offset="0" style="stop-color:#000000" />
          <stop offset="1" style="stop-color:#244592" />
        </linearGradient>
        <circle
          :class="`pfj-${info.id}-st28`"
          cx="78.89"
          cy="126.38"
          r="1.46"
        />
        <linearGradient
          id="pfj_23_"
          gradientUnits="userSpaceOnUse"
          x1="151.6115"
          y1="127.5009"
          x2="153.7108"
          y2="129.1394"
        >
          <stop offset="0" style="stop-color:#000000" />
          <stop offset="1" style="stop-color:#244592" />
        </linearGradient>
        <circle
          :class="`pfj-${info.id}-st29`"
          cx="152.74"
          cy="128.38"
          r="1.46"
        />
        <linearGradient
          id="pfj_24_"
          gradientUnits="userSpaceOnUse"
          x1="58.9681"
          y1="24.0122"
          x2="58.9681"
          y2="42.2624"
        >
          <stop offset="0" style="stop-color:#000000" />
          <stop offset="1" style="stop-color:#000000;stop-opacity:0" />
        </linearGradient>
        <polygon
          :class="`pfj-${info.id}-st30`"
          points="13.56,29.6 13.56,52.72 80.35,52.72 104.37,29.6 104.37,10.65 83.03,26.77 15.87,26.77 	"
        />
        <linearGradient
          id="pfj_25_"
          gradientUnits="userSpaceOnUse"
          x1="30.9406"
          y1="-6.2011"
          x2="83.1843"
          y2="32.7039"
        >
          <stop offset="0" style="stop-color:#D5E1EF" />
          <stop offset="1" style="stop-color:#6D99D6" />
        </linearGradient>
        <path
          :class="`pfj-${info.id}-st31`"
          d="M33.91,0L0,28.6h83.03L116.94,0H33.91z M77.81,23.9H17.35L40.12,4.69h60.47L77.81,23.9z"
        />
        <rect
          y="28.6"
          :class="`pfj-${info.id}-st32`"
          width="83.03"
          height="2"
        />
        <polygon
          :class="`pfj-${info.id}-st33`"
          points="116.94,2 83.03,30.59 83.03,28.6 116.94,0 	"
        />
      </g>
      <g class="SVG_alert" v-if="pointValue == 2">
        <path
          :class="`pfj-${info.id}-st34`"
          d="M154.27,23.78c-21.26-4.62-38.02,1.25-49.9,8.88V29.6v-17L116.94,2V0H33.91L0,28.6v2h13.56v22.13v23.95
                c0,0,1.15,31.85,13.97,53.89c16,27.5,43.77,40.72,71.15,42.3c0,0-0.01,0-0.01,0c26.77,1.71,53.25-7.65,68.21-25.66
                c9.85-9.31,25.36-27.17,31.3-51.56C205.96,63.65,188.33,31.18,154.27,23.78z M158.55,154.65c-0.22,0.19-0.44,0.38-0.66,0.57
                C158.11,155.03,158.32,154.84,158.55,154.65z M156.76,156.12c-0.22,0.17-0.43,0.35-0.66,0.52
                C156.32,156.47,156.54,156.29,156.76,156.12z M154.87,157.56c-0.2,0.15-0.4,0.3-0.61,0.45
                C154.47,157.86,154.67,157.71,154.87,157.56z M152.9,158.95c-0.18,0.12-0.35,0.25-0.53,0.37
                C152.55,159.2,152.72,159.07,152.9,158.95z M150.92,160.26c-0.17,0.1-0.33,0.21-0.49,0.32
                C150.59,160.47,150.75,160.36,150.92,160.26z M148.89,161.49c-0.15,0.09-0.31,0.19-0.46,0.28
                C148.58,161.68,148.73,161.58,148.89,161.49z M146.77,162.69c-0.13,0.07-0.26,0.14-0.38,0.21
                C146.51,162.84,146.64,162.76,146.77,162.69z M144.67,163.79c-0.13,0.06-0.25,0.13-0.38,0.2
                C144.42,163.93,144.54,163.86,144.67,163.79z M142.45,164.87c-0.1,0.05-0.19,0.09-0.29,0.14
                C142.25,164.97,142.35,164.92,142.45,164.87z M140.22,165.87c-0.08,0.03-0.16,0.07-0.24,0.11
                C140.06,165.94,140.14,165.9,140.22,165.87z M137.94,166.81c-0.06,0.02-0.12,0.05-0.18,0.07
                C137.82,166.85,137.88,166.83,137.94,166.81z M135.61,167.68c-0.03,0.01-0.07,0.02-0.1,0.04
                C135.54,167.71,135.57,167.7,135.61,167.68z M133.26,168.49c-0.01,0-0.03,0.01-0.04,0.02C133.23,168.5,133.25,168.49,133.26,168.49
                z M161.26,152.2c0.08-0.07,0.15-0.15,0.23-0.23c0,0,0,0,0,0C161.42,152.05,161.34,152.13,161.26,152.2z M159.6,153.74
                c0.25-0.22,0.48-0.45,0.72-0.67C160.09,153.29,159.85,153.52,159.6,153.74z"
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
  name: "devicePfjCom",
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
      if (width) {
        styles["width"] = `${width}px`;
      }
      if (height) {
        styles["height"] = `${height}px`;
      }
      if (backgroundRepeat) {
        styles["backgroundRepeat"] = backgroundRepeat;
      }
      if (backgroundSize) {
        styles["backgroundSize"] = backgroundSize;
      }
      if (borderColor) {
        styles["borderColor"] = borderColor;
      }
      if (borderStyle) {
        styles["borderStyle"] = borderStyle;
      }
      styles["borderWidth"] = `${borderWidth}px`;

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

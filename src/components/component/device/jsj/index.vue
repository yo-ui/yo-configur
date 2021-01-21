// 集水井
<template>
  <div class="bm-device-jsj-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 324 238`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
      .jsj-${info.id}-st0{fill:url(#JSJ_1_);}
              .jsj-${info.id}-st1{fill:#999999;}
              .jsj-${info.id}-st2{fill:#7D7D7D;}
              .jsj-${info.id}-st3{fill:url(#JSJ_2_);}
              .jsj-${info.id}-st4{fill:#C2C2C2;}
              .jsj-${info.id}-st5{fill:#FFFFFF;}
              .jsj-${info.id}-st6{fill:#545454;}
              .jsj-${info.id}-st7{fill:url(#JSJ_3_);}
              .jsj-${info.id}-st8{fill:url(#JSJ_4_);}
              .jsj-${info.id}-st9{fill:url(#JSJ_5_);}
              .jsj-${info.id}-st10{fill:url(#JSJ_6_);}
              .jsj-${info.id}-st11{fill:url(#JSJ_7_);}
              .jsj-${info.id}-st12{fill:url(#JSJ_8_);}
              .jsj-${info.id}-st13{fill:url(#JSJ_9_);}
              .jsj-${info.id}-st14{fill:url(#JSJ_10_);}
              .jsj-${info.id}-st15{fill:url(#JSJ_11_);}
              .jsj-${info.id}-st16{fill:url(#JSJ_12_);}
              .jsj-${info.id}-st17{fill:url(#JSJ_13_);}
              .jsj-${info.id}-st18{fill:url(#JSJ_14_);}
              .jsj-${info.id}-st19{fill:url(#JSJ_15_);}
              .jsj-${info.id}-st20{fill:url(#JSJ_16_);}
              .jsj-${info.id}-st21{fill:url(#JSJ_17_);}
              .jsj-${info.id}-st22{fill:url(#JSJ_18_);}
              .jsj-${info.id}-st23{fill:url(#JSJ_19_);}
              .jsj-${info.id}-st24{fill:url(#JSJ_20_);}
              .jsj-${info.id}-st25{fill:url(#JSJ_21_);}
              .jsj-${info.id}-st26{fill:url(#JSJ_22_);}
              .jsj-${info.id}-st27{fill:url(#JSJ_23_);}
              .jsj-${info.id}-st28{fill:url(#JSJ_24_);}
              .jsj-${info.id}-st29{fill:url(#JSJ_25_);}
              .jsj-${info.id}-st30{fill:url(#JSJ_26_);}
              .jsj-${info.id}-st31{fill:url(#JSJ_27_);}
              .jsj-${info.id}-st32{fill:url(#JSJ_28_);}
              .jsj-${info.id}-st33{fill:url(#JSJ_29_);}
              .jsj-${info.id}-st34{fill:url(#JSJ_30_);}
              .jsj-${info.id}-st35{fill:url(#JSJ_31_);}
              .jsj-${info.id}-st36{fill:url(#JSJ_32_);}
              .jsj-${info.id}-st37{fill:url(#JSJ_33_);}
              .jsj-${info.id}-st38{fill:url(#JSJ_34_);}
              .jsj-${info.id}-st39{fill:url(#JSJ_35_);}
              .jsj-${info.id}-st40{fill:url(#JSJ_36_);}
              .jsj-${info.id}-st41{fill:url(#JSJ_37_);}
              .jsj-${info.id}-st42{fill:url(#JSJ_38_);}
              .jsj-${info.id}-st43{fill:url(#JSJ_39_);}
              .jsj-${info.id}-st44{fill:url(#JSJ_40_);}
              .jsj-${info.id}-st45{fill:url(#JSJ_41_);}
              .jsj-${info.id}-st46{fill:url(#JSJ_42_);}
              .jsj-${info.id}-st47{fill:url(#JSJ_43_);}
              .jsj-${info.id}-st48{fill:url(#JSJ_44_);}
              .jsj-${info.id}-st49{fill:url(#JSJ_45_);}
              .jsj-${info.id}-st50{fill:url(#JSJ_46_);}
              .jsj-${info.id}-st51{fill:#203972;}
              .jsj-${info.id}-st52{fill:#0E1F3D;}
              .jsj-${info.id}-st53{fill:url(#JSJ_47_);}
              .jsj-${info.id}-st54{opacity:0.5;}
              .jsj-${info.id}-st55{fill:url(#JSJ_48_);}
              .jsj-${info.id}-st56{fill:url(#JSJ_49_);}
              .jsj-${info.id}-st57{fill:url(#JSJ_50_);}
              .jsj-${info.id}-st58{fill:url(#JSJ_51_);}
              .jsj-${info.id}-st59{fill:url(#JSJ_52_);}
              .jsj-${info.id}-st60{fill:url(#JSJ_53_);}
              .jsj-${info.id}-st61{fill:url(#JSJ_54_);}
              .jsj-${info.id}-st62{fill:url(#JSJ_55_);}
              .jsj-${info.id}-st63{fill:url(#JSJ_56_);}
              .jsj-${info.id}-st64{fill:url(#JSJ_57_);}
              .jsj-${info.id}-st65{fill:url(#JSJ_58_);}
              .jsj-${info.id}-st66{fill:url(#JSJ_59_);}
              .jsj-${info.id}-st67{fill:url(#JSJ_60_);}
              .jsj-${info.id}-st68{fill:url(#JSJ_61_);}
              .jsj-${info.id}-st69{fill:url(#JSJ_62_);}
              .jsj-${info.id}-st70{fill:url(#JSJ_63_);}
              .jsj-${info.id}-st71{fill:url(#JSJ_64_);}
              .jsj-${info.id}-st72{fill:url(#JSJ_65_);}
              .jsj-${info.id}-st73{fill:url(#JSJ_66_);}
              .jsj-${info.id}-st74{fill:url(#JSJ_67_);}
              .jsj-${info.id}-st75{fill:url(#JSJ_68_);}
              .jsj-${info.id}-st76{fill:url(#JSJ_69_);}
              .jsj-${info.id}-st77{fill:url(#JSJ_70_);}
              .jsj-${info.id}-st78{fill:url(#JSJ_71_);}
              .jsj-${info.id}-st79{fill:url(#JSJ_72_);}
              .jsj-${info.id}-st80{fill:url(#JSJ_73_);}
              .jsj-${info.id}-st81{fill:url(#JSJ_74_);}
              .jsj-${info.id}-st82{fill:url(#JSJ_75_);}
              .jsj-${info.id}-st83{fill:url(#JSJ_76_);}
              .jsj-${info.id}-st84{fill:url(#JSJ_77_);}
              .jsj-${info.id}-st85{fill:url(#JSJ_78_);}
              .jsj-${info.id}-st86{fill:url(#JSJ_79_);}
              .jsj-${info.id}-st87{fill:url(#JSJ_80_);}
              .jsj-${info.id}-st88{fill:url(#JSJ_81_);}
              .jsj-${info.id}-st89{fill:url(#JSJ_82_);}
              .jsj-${info.id}-st90{fill:url(#JSJ_83_);}
              .jsj-${info.id}-st91{fill:url(#JSJ_84_);}
              .jsj-${info.id}-st92{fill:url(#JSJ_85_);}
              .jsj-${info.id}-st93{fill:url(#JSJ_86_);}
              .jsj-${info.id}-st94{fill:url(#JSJ_87_);}
              .jsj-${info.id}-st95{fill:url(#JSJ_88_);}
              .jsj-${info.id}-st96{fill:url(#JSJ_89_);}
              .jsj-${info.id}-st97{fill:url(#JSJ_90_);}
              .jsj-${info.id}-st98{fill:url(#JSJ_91_);}
              .jsj-${info.id}-st99{fill:url(#JSJ_92_);}
              .jsj-${info.id}-st100{fill:url(#JSJ_93_);}
              .jsj-${info.id}-st101{fill:url(#JSJ_94_);}
              .jsj-${info.id}-st102{opacity:0.3;fill:#FF0000;}
      </style>
      `
        "
      ></defs>
      <g id="SVG_base1">
        <linearGradient
          id="JSJ_1_"
          gradientUnits="userSpaceOnUse"
          x1="163.5521"
          y1="226.9202"
          x2="163.5521"
          y2="166.6782"
        >
          <stop offset="0" style="stop-color:#C4C4C4" />
          <stop offset="1" style="stop-color:#CFD1D4" />
        </linearGradient>
        <polygon
          :class="`jsj-${info.id}-st0`"
          points="242.22,226.92 9.02,226.92 84.88,166.68 318.08,166.68 	"
        />
        <polygon
          :class="`jsj-${info.id}-st1`"
          points="9.02,226.92 9.02,64.98 0,64.98 0,237.21 242.22,237.21 242.22,226.92 	"
        />
        <polygon
          :class="`jsj-${info.id}-st2`"
          points="84.88,166.68 9.02,226.92 9.02,64.98 84.88,4.74 	"
        />
        <rect
          x="84.88"
          y="4.74"
          :class="`jsj-${info.id}-st1`"
          width="233.2"
          height="161.94"
        />
        <linearGradient
          id="JSJ_2_"
          gradientUnits="userSpaceOnUse"
          x1="163.5521"
          y1="4.7399"
          x2="163.5521"
          y2="64.9819"
        >
          <stop offset="0" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#CFD1D4" />
        </linearGradient>
        <polygon
          :class="`jsj-${info.id}-st3`"
          points="242.22,64.98 9.02,64.98 84.88,4.74 318.08,4.74 	"
        />
        <polygon
          :class="`jsj-${info.id}-st2`"
          points="318.08,4.74 318.08,166.68 242.22,226.92 241.45,237.36 324.05,171.77 324.05,171.49 324.05,0 	"
        />
        <polygon
          :class="`jsj-${info.id}-st4`"
          points="324.05,0 81.83,0 0,64.98 9.02,64.98 84.88,4.74 318.08,4.74 	"
        />
        <rect
          x="9.02"
          y="64.98"
          :class="`jsj-${info.id}-st5`"
          width="233.2"
          height="6"
        />
        <polygon
          :class="`jsj-${info.id}-st4`"
          points="318.08,10.74 242.22,70.98 242.22,64.98 318.08,4.74 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="24.71,59.92 92.19,59.92 95.97,56.91 28.5,56.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="32.25,53.92 99.72,53.92 103.51,50.91 36.04,50.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="39.79,47.92 107.26,47.92 111.05,44.91 43.57,44.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="47.33,41.92 114.8,41.92 118.58,38.91 51.11,38.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="54.86,35.92 122.33,35.92 126.12,32.91 58.65,32.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="62.4,29.92 129.87,29.92 133.66,26.91 66.19,26.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="69.94,23.92 137.41,23.92 141.2,20.91 73.72,20.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="77.47,17.92 144.95,17.92 148.73,14.91 81.26,14.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="85.01,11.92 152.48,11.92 156.27,8.91 88.8,8.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="98.71,59.92 166.19,59.92 169.97,56.91 102.5,56.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="106.25,53.92 173.72,53.92 177.51,50.91 110.04,50.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="113.79,47.92 181.26,47.92 185.05,44.91 117.57,44.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="121.33,41.92 188.8,41.92 192.58,38.91 125.11,38.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="128.86,35.92 196.33,35.92 200.12,32.91 132.65,32.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="136.4,29.92 203.87,29.92 207.66,26.91 140.19,26.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="143.94,23.92 211.41,23.92 215.2,20.91 147.72,20.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="151.47,17.92 218.95,17.92 222.73,14.91 155.26,14.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="159.01,11.92 226.48,11.92 230.27,8.91 162.8,8.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="172.71,59.92 240.19,59.92 243.97,56.91 176.5,56.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="180.25,53.92 247.72,53.92 251.51,50.91 184.04,50.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="187.79,47.92 255.26,47.92 259.05,44.91 191.57,44.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="195.33,41.92 262.8,41.92 266.58,38.91 199.11,38.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="202.86,35.92 270.33,35.92 274.12,32.91 206.65,32.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="210.4,29.92 277.87,29.92 281.66,26.91 214.19,26.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="217.94,23.92 285.41,23.92 289.2,20.91 221.72,20.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="225.47,17.92 292.95,17.92 296.73,14.91 229.26,14.91 	"
        />
        <polygon
          :class="`jsj-${info.id}-st6`"
          points="233.01,11.92 300.48,11.92 304.27,8.91 236.8,8.91 	"
        />
      </g>
      <g id="SVG_base2">
        <linearGradient
          id="JSJ_3_"
          gradientUnits="userSpaceOnUse"
          x1="173.8289"
          y1="208.6036"
          x2="244.0349"
          y2="208.6036"
        >
          <stop offset="0" style="stop-color:#1B1F22" />
          <stop offset="0.471" style="stop-color:#5A5E6A" />
          <stop offset="0.4737" style="stop-color:#5A5E6A" />
          <stop offset="0.559" style="stop-color:#535863" />
          <stop offset="0.6871" style="stop-color:#41464E" />
          <stop offset="0.8415" style="stop-color:#24292D" />
          <stop offset="0.8603" style="stop-color:#202528" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st7`"
          d="M238.09,200.49c-1.24,4.48-13.82,8-29.16,8s-27.92-3.52-29.16-8h-5.94v3.66c0,6.94,15.72,12.56,35.1,12.56
                s35.1-5.62,35.1-12.56v-3.66H238.09z"
        />
        <linearGradient
          id="JSJ_4_"
          gradientUnits="userSpaceOnUse"
          x1="173.8289"
          y1="207.2106"
          x2="244.0349"
          y2="207.2106"
        >
          <stop offset="0" style="stop-color:#3B3E47" />
          <stop offset="0.3324" style="stop-color:#8B8F98" />
          <stop offset="0.7486" style="stop-color:#5C6B7E" />
          <stop offset="1" style="stop-color:#5C6063" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st8`"
          d="M238.09,200.49c-1.24,4.48-13.82,8-29.16,8s-27.92-3.52-29.16-8h-5.94v3.22c3.82,5.87,18.08,10.22,35.1,10.22
                c17.02,0,31.28-4.36,35.1-10.22v-3.22H238.09z"
        />
        <linearGradient
          id="JSJ_5_"
          gradientUnits="userSpaceOnUse"
          x1="180.5765"
          y1="200.1304"
          x2="236.9108"
          y2="200.1304"
        >
          <stop offset="0" style="stop-color:#000000" />
          <stop offset="0.4737" style="stop-color:#373B3E" />
          <stop offset="0.5924" style="stop-color:#303437" />
          <stop offset="0.7706" style="stop-color:#1E2022" />
          <stop offset="0.9853" style="stop-color:#010101" />
          <stop offset="0.9888" style="stop-color:#000000" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st9`"
          d="M208.93,190.25c-11.65,0-21.97,2.03-28.36,5.16v8.06l9.89,6.54h36.26l10.19-6.15v-8.63
                C230.5,192.21,220.35,190.25,208.93,190.25z M208.93,209.7c-14.09,0-25.52-3.41-25.52-7.61c0-4.2,11.42-7.61,25.52-7.61
                c14.09,0,25.52,3.41,25.52,7.61C234.45,206.29,223.02,209.7,208.93,209.7z"
        />
        <linearGradient
          id="JSJ_6_"
          gradientUnits="userSpaceOnUse"
          x1="208.9319"
          y1="213.053"
          x2="208.9319"
          y2="187.9279"
        >
          <stop offset="0" style="stop-color:#5A5E6A" />
          <stop offset="1" style="stop-color:#323641" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st10`"
          d="M208.93,187.93c-19.39,0-35.1,5.62-35.1,12.56c0,6.94,15.72,12.56,35.1,12.56s35.1-5.62,35.1-12.56
                C244.03,193.55,228.32,187.93,208.93,187.93z M208.93,207.37c-14.09,0-25.52-3.41-25.52-7.61s11.42-7.61,25.52-7.61
                c14.09,0,25.52,3.41,25.52,7.61S223.02,207.37,208.93,207.37z"
        />
        <linearGradient
          id="JSJ_7_"
          gradientUnits="userSpaceOnUse"
          x1="189.6306"
          y1="196.7103"
          x2="196.0989"
          y2="196.7103"
        >
          <stop offset="0" style="stop-color:#000000" />
          <stop offset="0.4737" style="stop-color:#373B3E" />
          <stop offset="0.5924" style="stop-color:#303437" />
          <stop offset="0.7706" style="stop-color:#1E2022" />
          <stop offset="0.9853" style="stop-color:#010101" />
          <stop offset="0.9888" style="stop-color:#000000" />
        </linearGradient>
        <polygon
          :class="`jsj-${info.id}-st11`"
          points="194.73,187.93 189.63,194.79 190.46,205.01 192.14,205.49 196.1,188.99 	"
        />
        <linearGradient
          id="JSJ_8_"
          gradientUnits="userSpaceOnUse"
          x1="192.6854"
          y1="196.6376"
          x2="186.5381"
          y2="194.1245"
        >
          <stop offset="0" style="stop-color:#5A5E6A" />
          <stop offset="1" style="stop-color:#323641" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st12`"
          d="M188.84,186.16l-5.29,12.67c0,0-0.58,1.69,0.87,3.06c2.93,2.77,6.04,3.12,6.04,3.12l4.27-17.08L188.84,186.16
                z"
        />

        <linearGradient
          id="JSJ_9_"
          gradientUnits="userSpaceOnUse"
          x1="219.5916"
          y1="196.7103"
          x2="226.0599"
          y2="196.7103"
          gradientTransform="matrix(-1 0 0 1 447.8528 0)"
        >
          <stop offset="0" style="stop-color:#000000" />
          <stop offset="0.4737" style="stop-color:#373B3E" />
          <stop offset="0.5924" style="stop-color:#303437" />
          <stop offset="0.7706" style="stop-color:#1E2022" />
          <stop offset="0.9853" style="stop-color:#010101" />
          <stop offset="0.9888" style="stop-color:#000000" />
        </linearGradient>
        <polygon
          :class="`jsj-${info.id}-st13`"
          points="223.16,187.93 228.26,194.79 227.43,205.01 225.75,205.49 221.79,188.99 	"
        />

        <linearGradient
          id="JSJ_10_"
          gradientUnits="userSpaceOnUse"
          x1="222.6464"
          y1="196.6376"
          x2="216.4991"
          y2="194.1245"
          gradientTransform="matrix(-1 0 0 1 447.8528 0)"
        >
          <stop offset="0" style="stop-color:#5A5E6A" />
          <stop offset="1" style="stop-color:#323641" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st14`"
          d="M229.05,186.16l5.29,12.67c0,0,0.58,1.69-0.87,3.06c-2.93,2.77-6.04,3.12-6.04,3.12l-4.27-17.08
                L229.05,186.16z"
        />
        <linearGradient
          id="JSJ_11_"
          gradientUnits="userSpaceOnUse"
          x1="202.8749"
          y1="198.3924"
          x2="215.6331"
          y2="198.3924"
        >
          <stop offset="0" style="stop-color:#5A5E6A" />
          <stop offset="1" style="stop-color:#323641" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st15`"
          d="M204.67,189.59l-1.8,17.56c0,0,1.76,0.22,5.87,0.22c2.61-0.01,6.89-0.27,6.89-0.27l-1.96-17.69L204.67,189.59
                z"
        />

        <radialGradient
          id="JSJ_12_"
          cx="208.4938"
          cy="168.0612"
          r="47.3636"
          gradientTransform="matrix(1 0 0 0.5161 0 81.3277)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.4811" style="stop-color:#202528" />
          <stop offset="0.7139" style="stop-color:#5A5E6A" />
          <stop offset="1" style="stop-color:#1B1F22" />
        </radialGradient>
        <ellipse
          :class="`jsj-${info.id}-st16`"
          cx="208.93"
          cy="176.38"
          rx="34.44"
          ry="20.2"
        />
        <linearGradient
          id="JSJ_13_"
          gradientUnits="userSpaceOnUse"
          x1="174.4933"
          y1="176.385"
          x2="243.3705"
          y2="176.385"
        >
          <stop offset="0" style="stop-color:#202528;stop-opacity:0.8" />
          <stop offset="0.5112" style="stop-color:#1D2225;stop-opacity:0" />
          <stop offset="1" style="stop-color:#1B1F22;stop-opacity:0.8" />
        </linearGradient>
        <ellipse
          :class="`jsj-${info.id}-st17`"
          cx="208.93"
          cy="176.38"
          rx="34.44"
          ry="20.2"
        />
        <linearGradient
          id="JSJ_14_"
          gradientUnits="userSpaceOnUse"
          x1="175.6195"
          y1="186.0647"
          x2="175.6195"
          y2="167.3501"
        >
          <stop offset="0" style="stop-color:#1B1F22" />
          <stop offset="0.471" style="stop-color:#5A5E6A" />
          <stop offset="0.4737" style="stop-color:#5A5E6A" />
          <stop offset="0.559" style="stop-color:#535863" />
          <stop offset="0.6871" style="stop-color:#41464E" />
          <stop offset="0.8415" style="stop-color:#24292D" />
          <stop offset="0.8603" style="stop-color:#202528" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st18`"
          d="M175.6,186.06l-6.24-8.87l6.24-9.84h3.22c0,0,3.04,2.8,3.04,9.36c0,7.75-3.04,9.36-3.04,9.36H175.6z"
        />
        <linearGradient
          id="JSJ_15_"
          gradientUnits="userSpaceOnUse"
          x1="151.57"
          y1="162.457"
          x2="170.2847"
          y2="162.457"
        >
          <stop offset="0" style="stop-color:#1B1F22" />
          <stop offset="0.471" style="stop-color:#5A5E6A" />
          <stop offset="0.4737" style="stop-color:#5A5E6A" />
          <stop offset="0.559" style="stop-color:#535863" />
          <stop offset="0.6871" style="stop-color:#41464E" />
          <stop offset="0.8415" style="stop-color:#24292D" />
          <stop offset="0.8603" style="stop-color:#202528" />
        </linearGradient>
        <polygon
          :class="`jsj-${info.id}-st19`"
          points="151.57,162.03 161.04,167.35 170.28,162.03 170.28,157.56 151.57,157.56 	"
        />
        <radialGradient
          id="JSJ_16_"
          cx="176.2913"
          cy="160.9053"
          r="25.1778"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3694" style="stop-color:#202528" />
          <stop offset="0.4118" style="stop-color:#2E3338" />
          <stop offset="0.4997" style="stop-color:#464A53" />
          <stop offset="0.5772" style="stop-color:#555964" />
          <stop offset="0.6357" style="stop-color:#5A5E6A" />
          <stop offset="1" style="stop-color:#1B1F22" />
        </radialGradient>
        <path
          :class="`jsj-${info.id}-st20`"
          d="M170.28,162.03h-18.71c0,13.27,10.76,24.03,24.03,24.03v-18.71C172.67,167.35,170.28,164.97,170.28,162.03z"
        />
        <linearGradient
          id="JSJ_17_"
          gradientUnits="userSpaceOnUse"
          x1="186.3219"
          y1="161.2234"
          x2="231.5419"
          y2="161.2234"
        >
          <stop offset="0" style="stop-color:#3B3E47" />
          <stop offset="0.3324" style="stop-color:#4F5A60" />
          <stop offset="0.7151" style="stop-color:#21242B" />
          <stop offset="1" style="stop-color:#5C6063" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st21`"
          d="M186.32,148.8v16.75c0,4.47,10.12,8.09,22.61,8.09c12.49,0,22.61-3.62,22.61-8.09V148.8H186.32z"
        />
        <linearGradient
          id="JSJ_18_"
          gradientUnits="userSpaceOnUse"
          x1="186.3219"
          y1="153.2509"
          x2="231.5419"
          y2="153.2509"
        >
          <stop offset="0" style="stop-color:#3B3E47" />
          <stop offset="0.3324" style="stop-color:#8B8F98" />
          <stop offset="0.7486" style="stop-color:#5C6B7E" />
          <stop offset="1" style="stop-color:#5C6063" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st22`"
          d="M186.32,151.11c2.46,3.78,11.65,6.59,22.61,6.59c10.96,0,20.15-2.81,22.61-6.59v-2.31h-45.22V151.11z"
        />
        <linearGradient
          id="JSJ_19_"
          gradientUnits="userSpaceOnUse"
          x1="208.9319"
          y1="156.8936"
          x2="208.9319"
          y2="140.7104"
        >
          <stop offset="0" style="stop-color:#5A5E6A" />
          <stop offset="1" style="stop-color:#323641" />
        </linearGradient>
        <ellipse
          :class="`jsj-${info.id}-st23`"
          cx="208.93"
          cy="148.8"
          rx="22.61"
          ry="8.09"
        />
        <linearGradient
          id="JSJ_20_"
          gradientUnits="userSpaceOnUse"
          x1="188.0452"
          y1="130.1187"
          x2="229.8186"
          y2="130.1187"
        >
          <stop offset="0" style="stop-color:#AFB3B2" />
          <stop offset="0.1425" style="stop-color:#777B7A" />
          <stop offset="0.243" style="stop-color:#C6C7C2" />
          <stop offset="0.3994" style="stop-color:#FDFEF9" />
          <stop offset="0.5587" style="stop-color:#9FA3A6" />
          <stop offset="0.648" style="stop-color:#D3D6DB" />
          <stop offset="0.7458" style="stop-color:#959A96" />
          <stop offset="0.8687" style="stop-color:#F0EDE4" />
          <stop offset="1" style="stop-color:#7D7F7E" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st24`"
          d="M188.05,105.32v42.13c0,4.13,9.35,7.47,20.89,7.47c11.54,0,20.89-3.35,20.89-7.47v-42.13H188.05z"
        />

        <radialGradient
          id="JSJ_21_"
          cx="161.8085"
          cy="156.9569"
          r="16.3113"
          gradientTransform="matrix(1 0 0 0.4654 0 83.91)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style="stop-color:#000000" />
          <stop offset="1" style="stop-color:#000000;stop-opacity:0" />
        </radialGradient>
        <path
          :class="`jsj-${info.id}-st25`"
          d="M170.28,162.03v-4.47h-18.71v4.47c0,13.27,10.76,24.03,24.03,24.03v-18.71
                C172.67,167.35,170.28,164.97,170.28,162.03z"
        />
        <linearGradient
          id="JSJ_22_"
          gradientUnits="userSpaceOnUse"
          x1="148.0367"
          y1="155.6912"
          x2="173.818"
          y2="155.6912"
        >
          <stop offset="0" style="stop-color:#1B1F22" />
          <stop offset="0.471" style="stop-color:#5A5E6A" />
          <stop offset="0.4737" style="stop-color:#5A5E6A" />
          <stop offset="0.559" style="stop-color:#535863" />
          <stop offset="0.6871" style="stop-color:#41464E" />
          <stop offset="0.8415" style="stop-color:#24292D" />
          <stop offset="0.8603" style="stop-color:#202528" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st26`"
          d="M148.04,151.9v2.98c0,2.55,5.77,4.61,12.89,4.61s12.89-2.07,12.89-4.61v-2.98H148.04z"
        />
        <linearGradient
          id="JSJ_23_"
          gradientUnits="userSpaceOnUse"
          x1="160.9274"
          y1="156.5083"
          x2="160.9274"
          y2="147.2818"
        >
          <stop offset="0" style="stop-color:#5A5E6A" />
          <stop offset="1" style="stop-color:#323641" />
        </linearGradient>
        <ellipse
          :class="`jsj-${info.id}-st27`"
          cx="160.93"
          cy="151.9"
          rx="12.89"
          ry="4.61"
        />
        <linearGradient
          id="JSJ_24_"
          gradientUnits="userSpaceOnUse"
          x1="153.64"
          y1="113.9458"
          x2="168.2147"
          y2="113.9458"
        >
          <stop offset="0" style="stop-color:#AFB3B2" />
          <stop offset="0.1872" style="stop-color:#777B7A" />
          <stop offset="0.3492" style="stop-color:#C6C7C2" />
          <stop offset="0.5503" style="stop-color:#FDFEF9" />
          <stop offset="0.7374" style="stop-color:#959A96" />
          <stop offset="0.9469" style="stop-color:#AFB3B2" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st28`"
          d="M164.18,78.45c-2.93,0-3.55-3.66-6.64-3.66s-3.89,2.67-3.89,2.67v73.17c0,1.37,3.26,2.48,7.29,2.48
                c4.02,0,7.29-1.11,7.29-2.48V76.2C168.21,76.2,167.1,78.45,164.18,78.45z"
        />
        <linearGradient
          id="JSJ_25_"
          gradientUnits="userSpaceOnUse"
          x1="65.4152"
          y1="208.6036"
          x2="135.6212"
          y2="208.6036"
        >
          <stop offset="0" style="stop-color:#1B1F22" />
          <stop offset="0.471" style="stop-color:#5A5E6A" />
          <stop offset="0.4737" style="stop-color:#5A5E6A" />
          <stop offset="0.559" style="stop-color:#535863" />
          <stop offset="0.6871" style="stop-color:#41464E" />
          <stop offset="0.8415" style="stop-color:#24292D" />
          <stop offset="0.8603" style="stop-color:#202528" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st29`"
          d="M129.68,200.49c-1.24,4.48-13.82,8-29.16,8c-15.35,0-27.92-3.52-29.16-8h-5.94v3.66
                c0,6.94,15.72,12.56,35.1,12.56c19.39,0,35.1-5.62,35.1-12.56v-3.66H129.68z"
        />
        <linearGradient
          id="JSJ_26_"
          gradientUnits="userSpaceOnUse"
          x1="65.4152"
          y1="207.2106"
          x2="135.6212"
          y2="207.2106"
        >
          <stop offset="0" style="stop-color:#3B3E47" />
          <stop offset="0.3324" style="stop-color:#8B8F98" />
          <stop offset="0.7486" style="stop-color:#5C6B7E" />
          <stop offset="1" style="stop-color:#5C6063" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st30`"
          d="M129.68,200.49c-1.24,4.48-13.82,8-29.16,8c-15.35,0-27.92-3.52-29.16-8h-5.94v3.22
                c3.82,5.87,18.08,10.22,35.1,10.22c17.02,0,31.28-4.36,35.1-10.22v-3.22H129.68z"
        />
        <linearGradient
          id="JSJ_27_"
          gradientUnits="userSpaceOnUse"
          x1="72.1628"
          y1="200.1304"
          x2="128.4971"
          y2="200.1304"
        >
          <stop offset="0" style="stop-color:#000000" />
          <stop offset="0.4737" style="stop-color:#373B3E" />
          <stop offset="0.5924" style="stop-color:#303437" />
          <stop offset="0.7706" style="stop-color:#1E2022" />
          <stop offset="0.9853" style="stop-color:#010101" />
          <stop offset="0.9888" style="stop-color:#000000" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st31`"
          d="M100.52,190.25c-11.65,0-21.97,2.03-28.36,5.16v8.06l9.89,6.54h36.26l10.19-6.15v-8.63
                C122.09,192.21,111.94,190.25,100.52,190.25z M100.52,209.7c-14.09,0-25.52-3.41-25.52-7.61c0-4.2,11.42-7.61,25.52-7.61
                c14.09,0,25.52,3.41,25.52,7.61C126.03,206.29,114.61,209.7,100.52,209.7z"
        />
        <linearGradient
          id="JSJ_28_"
          gradientUnits="userSpaceOnUse"
          x1="100.5182"
          y1="213.053"
          x2="100.5182"
          y2="187.9279"
        >
          <stop offset="0" style="stop-color:#5A5E6A" />
          <stop offset="1" style="stop-color:#323641" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st32`"
          d="M100.52,187.93c-19.39,0-35.1,5.62-35.1,12.56c0,6.94,15.72,12.56,35.1,12.56c19.39,0,35.1-5.62,35.1-12.56
                C135.62,193.55,119.91,187.93,100.52,187.93z M100.52,207.37c-14.09,0-25.52-3.41-25.52-7.61s11.42-7.61,25.52-7.61
                c14.09,0,25.52,3.41,25.52,7.61S114.61,207.37,100.52,207.37z"
        />
        <linearGradient
          id="JSJ_29_"
          gradientUnits="userSpaceOnUse"
          x1="81.2169"
          y1="196.7103"
          x2="87.6852"
          y2="196.7103"
        >
          <stop offset="0" style="stop-color:#000000" />
          <stop offset="0.4737" style="stop-color:#373B3E" />
          <stop offset="0.5924" style="stop-color:#303437" />
          <stop offset="0.7706" style="stop-color:#1E2022" />
          <stop offset="0.9853" style="stop-color:#010101" />
          <stop offset="0.9888" style="stop-color:#000000" />
        </linearGradient>
        <polygon
          :class="`jsj-${info.id}-st33`"
          points="86.32,187.93 81.22,194.79 82.05,205.01 83.72,205.49 87.69,188.99 	"
        />
        <linearGradient
          id="JSJ_30_"
          gradientUnits="userSpaceOnUse"
          x1="84.2717"
          y1="196.6376"
          x2="78.1244"
          y2="194.1245"
        >
          <stop offset="0" style="stop-color:#5A5E6A" />
          <stop offset="1" style="stop-color:#323641" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st34`"
          d="M80.43,186.16l-5.29,12.67c0,0-0.58,1.69,0.87,3.06c2.93,2.77,6.04,3.12,6.04,3.12l4.27-17.08L80.43,186.16z"
        />

        <linearGradient
          id="JSJ_31_"
          gradientUnits="userSpaceOnUse"
          x1="328.0052"
          y1="196.7103"
          x2="334.4736"
          y2="196.7103"
          gradientTransform="matrix(-1 0 0 1 447.8528 0)"
        >
          <stop offset="0" style="stop-color:#000000" />
          <stop offset="0.4737" style="stop-color:#373B3E" />
          <stop offset="0.5924" style="stop-color:#303437" />
          <stop offset="0.7706" style="stop-color:#1E2022" />
          <stop offset="0.9853" style="stop-color:#010101" />
          <stop offset="0.9888" style="stop-color:#000000" />
        </linearGradient>
        <polygon
          :class="`jsj-${info.id}-st35`"
          points="114.74,187.93 119.85,194.79 119.02,205.01 117.34,205.49 113.38,188.99 	"
        />

        <linearGradient
          id="JSJ_32_"
          gradientUnits="userSpaceOnUse"
          x1="331.0601"
          y1="196.6376"
          x2="324.9128"
          y2="194.1245"
          gradientTransform="matrix(-1 0 0 1 447.8528 0)"
        >
          <stop offset="0" style="stop-color:#5A5E6A" />
          <stop offset="1" style="stop-color:#323641" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st36`"
          d="M120.64,186.16l5.29,12.67c0,0,0.58,1.69-0.87,3.06c-2.93,2.77-6.04,3.12-6.04,3.12l-4.27-17.08
                L120.64,186.16z"
        />
        <linearGradient
          id="JSJ_33_"
          gradientUnits="userSpaceOnUse"
          x1="94.4612"
          y1="198.3924"
          x2="107.2194"
          y2="198.3924"
        >
          <stop offset="0" style="stop-color:#5A5E6A" />
          <stop offset="1" style="stop-color:#323641" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st37`"
          d="M96.26,189.59l-1.8,17.56c0,0,1.76,0.22,5.87,0.22c2.61-0.01,6.89-0.27,6.89-0.27l-1.96-17.69L96.26,189.59z"
        />

        <radialGradient
          id="JSJ_34_"
          cx="100.0801"
          cy="168.0612"
          r="47.3636"
          gradientTransform="matrix(1 0 0 0.5161 0 81.3277)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.4811" style="stop-color:#202528" />
          <stop offset="0.7139" style="stop-color:#5A5E6A" />
          <stop offset="1" style="stop-color:#1B1F22" />
        </radialGradient>
        <ellipse
          :class="`jsj-${info.id}-st38`"
          cx="100.52"
          cy="176.38"
          rx="34.44"
          ry="20.2"
        />
        <linearGradient
          id="JSJ_35_"
          gradientUnits="userSpaceOnUse"
          x1="66.0796"
          y1="176.385"
          x2="134.9568"
          y2="176.385"
        >
          <stop offset="0" style="stop-color:#202528;stop-opacity:0.8" />
          <stop offset="0.5112" style="stop-color:#1D2225;stop-opacity:0" />
          <stop offset="1" style="stop-color:#1B1F22;stop-opacity:0.8" />
        </linearGradient>
        <ellipse
          :class="`jsj-${info.id}-st39`"
          cx="100.52"
          cy="176.38"
          rx="34.44"
          ry="20.2"
        />
        <linearGradient
          id="JSJ_36_"
          gradientUnits="userSpaceOnUse"
          x1="67.2058"
          y1="186.0647"
          x2="67.2058"
          y2="167.3501"
        >
          <stop offset="0" style="stop-color:#1B1F22" />
          <stop offset="0.471" style="stop-color:#5A5E6A" />
          <stop offset="0.4737" style="stop-color:#5A5E6A" />
          <stop offset="0.559" style="stop-color:#535863" />
          <stop offset="0.6871" style="stop-color:#41464E" />
          <stop offset="0.8415" style="stop-color:#24292D" />
          <stop offset="0.8603" style="stop-color:#202528" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st40`"
          d="M67.19,186.06l-6.24-8.87l6.24-9.84h3.22c0,0,3.04,2.8,3.04,9.36c0,7.75-3.04,9.36-3.04,9.36H67.19z"
        />
        <linearGradient
          id="JSJ_37_"
          gradientUnits="userSpaceOnUse"
          x1="43.1563"
          y1="162.457"
          x2="61.871"
          y2="162.457"
        >
          <stop offset="0" style="stop-color:#1B1F22" />
          <stop offset="0.471" style="stop-color:#5A5E6A" />
          <stop offset="0.4737" style="stop-color:#5A5E6A" />
          <stop offset="0.559" style="stop-color:#535863" />
          <stop offset="0.6871" style="stop-color:#41464E" />
          <stop offset="0.8415" style="stop-color:#24292D" />
          <stop offset="0.8603" style="stop-color:#202528" />
        </linearGradient>
        <polygon
          :class="`jsj-${info.id}-st41`"
          points="43.16,162.03 52.63,167.35 61.87,162.03 61.87,157.56 43.16,157.56 	"
        />
        <radialGradient
          id="JSJ_38_"
          cx="67.8776"
          cy="160.9053"
          r="25.1778"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3694" style="stop-color:#202528" />
          <stop offset="0.4118" style="stop-color:#2E3338" />
          <stop offset="0.4997" style="stop-color:#464A53" />
          <stop offset="0.5772" style="stop-color:#555964" />
          <stop offset="0.6357" style="stop-color:#5A5E6A" />
          <stop offset="1" style="stop-color:#1B1F22" />
        </radialGradient>
        <path
          :class="`jsj-${info.id}-st42`"
          d="M61.87,162.03H43.16c0,13.27,10.76,24.03,24.03,24.03v-18.71C64.25,167.35,61.87,164.97,61.87,162.03z"
        />
        <linearGradient
          id="JSJ_39_"
          gradientUnits="userSpaceOnUse"
          x1="77.9082"
          y1="161.2234"
          x2="123.1282"
          y2="161.2234"
        >
          <stop offset="0" style="stop-color:#3B3E47" />
          <stop offset="0.3324" style="stop-color:#4F5A60" />
          <stop offset="0.7151" style="stop-color:#21242B" />
          <stop offset="1" style="stop-color:#5C6063" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st43`"
          d="M77.91,148.8v16.75c0,4.47,10.12,8.09,22.61,8.09c12.49,0,22.61-3.62,22.61-8.09V148.8H77.91z"
        />
        <linearGradient
          id="JSJ_40_"
          gradientUnits="userSpaceOnUse"
          x1="77.9082"
          y1="153.2509"
          x2="123.1282"
          y2="153.2509"
        >
          <stop offset="0" style="stop-color:#3B3E47" />
          <stop offset="0.3324" style="stop-color:#8B8F98" />
          <stop offset="0.7486" style="stop-color:#5C6B7E" />
          <stop offset="1" style="stop-color:#5C6063" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st44`"
          d="M77.91,151.11c2.46,3.78,11.65,6.59,22.61,6.59c10.96,0,20.15-2.81,22.61-6.59v-2.31H77.91V151.11z"
        />
        <linearGradient
          id="JSJ_41_"
          gradientUnits="userSpaceOnUse"
          x1="100.5182"
          y1="156.8936"
          x2="100.5182"
          y2="140.7104"
        >
          <stop offset="0" style="stop-color:#5A5E6A" />
          <stop offset="1" style="stop-color:#323641" />
        </linearGradient>
        <ellipse
          :class="`jsj-${info.id}-st45`"
          cx="100.52"
          cy="148.8"
          rx="22.61"
          ry="8.09"
        />
        <linearGradient
          id="JSJ_42_"
          gradientUnits="userSpaceOnUse"
          x1="79.6315"
          y1="130.1187"
          x2="121.4049"
          y2="130.1187"
        >
          <stop offset="0" style="stop-color:#AFB3B2" />
          <stop offset="0.1425" style="stop-color:#777B7A" />
          <stop offset="0.243" style="stop-color:#C6C7C2" />
          <stop offset="0.3994" style="stop-color:#FDFEF9" />
          <stop offset="0.5587" style="stop-color:#9FA3A6" />
          <stop offset="0.648" style="stop-color:#D3D6DB" />
          <stop offset="0.7458" style="stop-color:#959A96" />
          <stop offset="0.8687" style="stop-color:#F0EDE4" />
          <stop offset="1" style="stop-color:#7D7F7E" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st46`"
          d="M79.63,105.32v42.13c0,4.13,9.35,7.47,20.89,7.47c11.54,0,20.89-3.35,20.89-7.47v-42.13H79.63z"
        />

        <radialGradient
          id="JSJ_43_"
          cx="53.3948"
          cy="156.9569"
          r="16.3113"
          gradientTransform="matrix(1 0 0 0.4654 0 83.91)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style="stop-color:#000000" />
          <stop offset="1" style="stop-color:#000000;stop-opacity:0" />
        </radialGradient>
        <path
          :class="`jsj-${info.id}-st47`"
          d="M61.87,162.03v-4.47H43.16v4.47c0,13.27,10.76,24.03,24.03,24.03v-18.71
                C64.25,167.35,61.87,164.97,61.87,162.03z"
        />
        <linearGradient
          id="JSJ_44_"
          gradientUnits="userSpaceOnUse"
          x1="39.6231"
          y1="155.6912"
          x2="65.4043"
          y2="155.6912"
        >
          <stop offset="0" style="stop-color:#1B1F22" />
          <stop offset="0.471" style="stop-color:#5A5E6A" />
          <stop offset="0.4737" style="stop-color:#5A5E6A" />
          <stop offset="0.559" style="stop-color:#535863" />
          <stop offset="0.6871" style="stop-color:#41464E" />
          <stop offset="0.8415" style="stop-color:#24292D" />
          <stop offset="0.8603" style="stop-color:#202528" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st48`"
          d="M39.62,151.9v2.98c0,2.55,5.77,4.61,12.89,4.61c7.12,0,12.89-2.07,12.89-4.61v-2.98H39.62z"
        />
        <linearGradient
          id="JSJ_45_"
          gradientUnits="userSpaceOnUse"
          x1="52.5137"
          y1="156.5083"
          x2="52.5137"
          y2="147.2818"
        >
          <stop offset="0" style="stop-color:#5A5E6A" />
          <stop offset="1" style="stop-color:#323641" />
        </linearGradient>
        <ellipse
          :class="`jsj-${info.id}-st49`"
          cx="52.51"
          cy="151.9"
          rx="12.89"
          ry="4.61"
        />
        <linearGradient
          id="JSJ_46_"
          gradientUnits="userSpaceOnUse"
          x1="45.2263"
          y1="113.9458"
          x2="59.801"
          y2="113.9458"
        >
          <stop offset="0" style="stop-color:#AFB3B2" />
          <stop offset="0.1872" style="stop-color:#777B7A" />
          <stop offset="0.3492" style="stop-color:#C6C7C2" />
          <stop offset="0.5503" style="stop-color:#FDFEF9" />
          <stop offset="0.7374" style="stop-color:#959A96" />
          <stop offset="0.9469" style="stop-color:#AFB3B2" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st50`"
          d="M55.76,78.45c-2.93,0-3.55-3.66-6.64-3.66s-3.89,2.67-3.89,2.67v73.17c0,1.37,3.26,2.48,7.29,2.48
                s7.29-1.11,7.29-2.48V76.2C59.8,76.2,58.69,78.45,55.76,78.45z"
        />
      </g>

      <g class="SVG_ani" v-if="pointValue == 1">
        <g class="f1">
          <animate
            values="show;hide;hide;"
            dur="0.3s"
            attributeName="class"
            repeatCount="indefinite"
          />
          <g>
            <path
              :class="`jsj-${info.id}-st51`"
              d="M208.71,116.69c-9.43,0-17.27-2.31-18.91-5.36v35.19c0,3.56,8.47,6.44,18.91,6.44
                  c10.45,0,18.91-2.88,18.91-6.44v-35.19C225.98,114.38,218.14,116.69,208.71,116.69z"
            />
            <ellipse
              :class="`jsj-${info.id}-st52`"
              cx="208.71"
              cy="146.52"
              rx="18.91"
              ry="6.44"
            />
            <g>
              <path
                :class="`jsj-${info.id}-st5`"
                d="M227.62,111.33c-0.26,0.48-0.67,0.94-1.22,1.38v36.09c0.79-0.71,1.22-1.47,1.22-2.28V111.33z"
              />
            </g>
            <path
              :class="`jsj-${info.id}-st5`"
              d="M189.8,111.33v35.19c0,0.8,0.43,1.56,1.21,2.27V112.7C190.47,112.27,190.06,111.81,189.8,111.33z"
            />

            <linearGradient
              id="JSJ_47_"
              gradientUnits="userSpaceOnUse"
              x1="55.6477"
              y1="169.3483"
              x2="55.6477"
              y2="137.0729"
              gradientTransform="matrix(0 -1 1 0 55.5014 187.5014)"
            >
              <stop offset="0" style="stop-color:#A6B5BD" />
              <stop offset="0.1313" style="stop-color:#73858E" />
              <stop offset="0.5251" style="stop-color:#CFDCE2" />
              <stop offset="0.852" style="stop-color:#73858E" />
              <stop offset="1" style="stop-color:#8D9EA6" />
            </linearGradient>
            <path
              :class="`jsj-${info.id}-st53`"
              d="M208.71,150c8.91,0,16.14-2.43,16.14-5.43V113.7c-3.43,1.8-9.37,2.99-16.14,2.99
                  c-6.76,0-12.71-1.19-16.14-2.99v30.87C192.57,147.57,199.8,150,208.71,150z"
            />
            <g :class="`jsj-${info.id}-st54`">
              <path
                :class="`jsj-${info.id}-st5`"
                d="M196.32,148.05v-32.9c-0.84-0.24-1.63-0.51-2.34-0.8v32.44C194.58,147.24,195.37,147.67,196.32,148.05z"
              />
              <path
                :class="`jsj-${info.id}-st5`"
                d="M207.39,116.67c-0.79-0.02-1.58-0.05-2.34-0.1v33.29c0.76,0.06,1.54,0.1,2.34,0.12V116.67z"
              />
              <path
                :class="`jsj-${info.id}-st5`"
                d="M204.21,116.51l0.02,0c-0.01,0-0.03,0-0.04,0L204.21,116.51z"
              />
              <path
                :class="`jsj-${info.id}-st5`"
                d="M216.88,116.07v33.18c0.83-0.16,1.61-0.35,2.34-0.56v-33.07C218.48,115.79,217.7,115.94,216.88,116.07z"
              />
              <path
                :class="`jsj-${info.id}-st5`"
                d="M222.69,114.64v32.65c0.79-0.46,1.38-0.96,1.75-1.49v-31.89C223.9,114.17,223.32,114.41,222.69,114.64z"
              />
            </g>
            <g>
              <path
                :class="`jsj-${info.id}-st52`"
                d="M195.72,147.79v-32.83c-0.4-0.13-0.78-0.26-1.15-0.39v32.61C194.91,147.4,195.3,147.6,195.72,147.79z"
              />
              <path
                :class="`jsj-${info.id}-st52`"
                d="M204.21,116.51l0.02,0c-0.01,0-0.03,0-0.04,0L204.21,116.51z"
              />
              <path
                :class="`jsj-${info.id}-st52`"
                d="M217.48,115.97v33.16c0.4-0.09,0.78-0.18,1.15-0.28v-33.1C218.25,115.83,217.87,115.9,217.48,115.97z"
              />
              <path
                :class="`jsj-${info.id}-st52`"
                d="M223.13,114.47v32.54c0.33-0.22,0.62-0.45,0.86-0.69v-32.21C223.71,114.24,223.43,114.36,223.13,114.47z"
              />
              <path
                :class="`jsj-${info.id}-st52`"
                d="M206.79,116.66c-0.39-0.01-0.77-0.03-1.15-0.05v33.3c0.38,0.02,0.76,0.04,1.15,0.06V116.66z"
              />
            </g>
          </g>
          <g>
            <path
              :class="`jsj-${info.id}-st51`"
              d="M100.3,116.69c-9.43,0-17.27-2.31-18.91-5.36v35.19c0,3.56,8.47,6.44,18.91,6.44s18.91-2.88,18.91-6.44
                  v-35.19C117.57,114.38,109.73,116.69,100.3,116.69z"
            />
            <ellipse
              :class="`jsj-${info.id}-st52`"
              cx="100.3"
              cy="146.52"
              rx="18.91"
              ry="6.44"
            />
            <g>
              <path
                :class="`jsj-${info.id}-st5`"
                d="M119.21,111.33c-0.26,0.48-0.67,0.94-1.22,1.38v36.09c0.79-0.71,1.22-1.47,1.22-2.28V111.33z"
              />
            </g>
            <path
              :class="`jsj-${info.id}-st5`"
              d="M81.39,111.33v35.19c0,0.8,0.43,1.56,1.21,2.27V112.7C82.05,112.27,81.64,111.81,81.39,111.33z"
            />

            <linearGradient
              id="JSJ_48_"
              gradientUnits="userSpaceOnUse"
              x1="55.6477"
              y1="60.9347"
              x2="55.6477"
              y2="28.6592"
              gradientTransform="matrix(0 -1 1 0 55.5014 187.5014)"
            >
              <stop offset="0" style="stop-color:#A6B5BD" />
              <stop offset="0.1313" style="stop-color:#73858E" />
              <stop offset="0.5251" style="stop-color:#CFDCE2" />
              <stop offset="0.852" style="stop-color:#73858E" />
              <stop offset="1" style="stop-color:#8D9EA6" />
            </linearGradient>
            <path
              :class="`jsj-${info.id}-st55`"
              d="M100.3,150c8.91,0,16.14-2.43,16.14-5.43V113.7c-3.43,1.8-9.37,2.99-16.14,2.99
                  c-6.76,0-12.71-1.19-16.14-2.99v30.87C84.16,147.57,91.39,150,100.3,150z"
            />
            <g :class="`jsj-${info.id}-st54`">
              <path
                :class="`jsj-${info.id}-st5`"
                d="M87.9,148.05v-32.9c-0.84-0.24-1.63-0.51-2.34-0.8v32.44C86.17,147.24,86.96,147.67,87.9,148.05z"
              />
              <path
                :class="`jsj-${info.id}-st5`"
                d="M98.97,116.67c-0.79-0.02-1.58-0.05-2.34-0.1v33.29c0.76,0.06,1.54,0.1,2.34,0.12V116.67z"
              />
              <path
                :class="`jsj-${info.id}-st5`"
                d="M95.8,116.51l0.02,0c-0.01,0-0.03,0-0.04,0L95.8,116.51z"
              />
              <path
                :class="`jsj-${info.id}-st5`"
                d="M108.47,116.07v33.18c0.83-0.16,1.61-0.35,2.34-0.56v-33.07C110.06,115.79,109.28,115.94,108.47,116.07z"
              />
              <path
                :class="`jsj-${info.id}-st5`"
                d="M114.27,114.64v32.65c0.79-0.46,1.38-0.96,1.75-1.49v-31.89C115.49,114.17,114.91,114.41,114.27,114.64z"
              />
            </g>
            <g>
              <path
                :class="`jsj-${info.id}-st52`"
                d="M87.31,147.79v-32.83c-0.4-0.13-0.78-0.26-1.15-0.39v32.61C86.5,147.4,86.89,147.6,87.31,147.79z"
              />
              <path
                :class="`jsj-${info.id}-st52`"
                d="M95.8,116.51l0.02,0c-0.01,0-0.03,0-0.04,0L95.8,116.51z"
              />
              <path
                :class="`jsj-${info.id}-st52`"
                d="M109.06,115.97v33.16c0.4-0.09,0.78-0.18,1.15-0.28v-33.1C109.84,115.83,109.46,115.9,109.06,115.97z"
              />
              <path
                :class="`jsj-${info.id}-st52`"
                d="M114.72,114.47v32.54c0.33-0.22,0.62-0.45,0.86-0.69v-32.21C115.3,114.24,115.01,114.36,114.72,114.47z"
              />
              <path
                :class="`jsj-${info.id}-st52`"
                d="M98.38,116.66c-0.39-0.01-0.77-0.03-1.15-0.05v33.3c0.38,0.02,0.76,0.04,1.15,0.06V116.66z"
              />
            </g>
          </g>
        </g>
        <g class="f2">
          <animate
            values="hide;show;hide;"
            dur="0.3s"
            attributeName="class"
            repeatCount="indefinite"
          />
          <g>
            <path
              :class="`jsj-${info.id}-st51`"
              d="M208.71,116.69c-9.43,0-17.27-2.31-18.91-5.36v35.19c0,3.56,8.47,6.44,18.91,6.44
                  c10.44,0,18.91-2.88,18.91-6.44v-35.19C225.98,114.38,218.14,116.69,208.71,116.69z"
            />
            <ellipse
              :class="`jsj-${info.id}-st52`"
              cx="208.71"
              cy="146.52"
              rx="18.91"
              ry="6.44"
            />
            <g>
              <path
                :class="`jsj-${info.id}-st5`"
                d="M227.62,111.33c-0.26,0.48-0.67,0.94-1.22,1.38v36.09c0.79-0.71,1.22-1.47,1.22-2.28V111.33z"
              />
            </g>
            <path
              :class="`jsj-${info.id}-st5`"
              d="M189.8,111.33v35.19c0,0.8,0.43,1.56,1.21,2.27V112.7C190.47,112.27,190.06,111.81,189.8,111.33z"
            />

            <linearGradient
              id="JSJ_49_"
              gradientUnits="userSpaceOnUse"
              x1="55.6475"
              y1="169.3484"
              x2="55.6475"
              y2="137.0732"
              gradientTransform="matrix(0 -1 1 0 55.5014 187.5014)"
            >
              <stop offset="0" style="stop-color:#A6B5BD" />
              <stop offset="0.1313" style="stop-color:#73858E" />
              <stop offset="0.5251" style="stop-color:#CFDCE2" />
              <stop offset="0.852" style="stop-color:#73858E" />
              <stop offset="1" style="stop-color:#8D9EA6" />
            </linearGradient>
            <path
              :class="`jsj-${info.id}-st56`"
              d="M208.71,150c8.91,0,16.14-2.43,16.14-5.43V113.7c-3.43,1.8-9.37,2.99-16.14,2.99
                  c-6.76,0-12.71-1.19-16.14-2.99v30.87C192.57,147.57,199.8,150,208.71,150z"
            />
            <g :class="`jsj-${info.id}-st54`">
              <path
                :class="`jsj-${info.id}-st5`"
                d="M204.21,116.51l0.02,0c-0.01,0-0.03,0-0.04,0L204.21,116.51z"
              />
              <path
                :class="`jsj-${info.id}-st5`"
                d="M200.1,149.17V116c-0.82-0.14-1.6-0.3-2.34-0.47v33.04C198.48,148.79,199.27,148.99,200.1,149.17z"
              />
              <path
                :class="`jsj-${info.id}-st5`"
                d="M219.99,115.45v33.01c0.77-0.25,1.46-0.53,2.07-0.83v-32.77C221.42,115.06,220.73,115.26,219.99,115.45z"
              />
              <path
                :class="`jsj-${info.id}-st5`"
                d="M212.12,116.59c-0.77,0.05-1.55,0.08-2.34,0.09v33.31c0.8-0.02,1.58-0.05,2.34-0.11V116.59z"
              />
            </g>
            <g>
              <path
                :class="`jsj-${info.id}-st52`"
                d="M204.21,116.51l0.02,0c-0.01,0-0.03,0-0.04,0L204.21,116.51z"
              />
              <path
                :class="`jsj-${info.id}-st52`"
                d="M220.52,115.31v32.96c0.36-0.13,0.7-0.26,1.02-0.41v-32.85C221.21,115.12,220.87,115.21,220.52,115.31z"
              />
              <path
                :class="`jsj-${info.id}-st52`"
                d="M199.51,149.03v-33.14c-0.39-0.07-0.78-0.15-1.15-0.23v33.08C198.73,148.84,199.11,148.94,199.51,149.03z"
              />
              <path
                :class="`jsj-${info.id}-st52`"
                d="M211.53,149.92v-33.3c-0.38,0.02-0.76,0.03-1.15,0.05v33.31C210.77,149.96,211.15,149.94,211.53,149.92z"
              />
            </g>
          </g>
          <g>
            <path
              :class="`jsj-${info.id}-st51`"
              d="M100.3,116.69c-9.43,0-17.27-2.31-18.91-5.36v35.19c0,3.56,8.47,6.44,18.91,6.44s18.91-2.88,18.91-6.44
                  v-35.19C117.57,114.38,109.73,116.69,100.3,116.69z"
            />
            <ellipse
              :class="`jsj-${info.id}-st52`"
              cx="100.3"
              cy="146.52"
              rx="18.91"
              ry="6.44"
            />
            <g>
              <path
                :class="`jsj-${info.id}-st5`"
                d="M119.21,111.33c-0.26,0.48-0.67,0.94-1.22,1.38v36.09c0.79-0.71,1.22-1.47,1.22-2.28V111.33z"
              />
            </g>
            <path
              :class="`jsj-${info.id}-st5`"
              d="M81.39,111.33v35.19c0,0.8,0.43,1.56,1.21,2.27V112.7C82.05,112.27,81.64,111.81,81.39,111.33z"
            />

            <linearGradient
              id="JSJ_50_"
              gradientUnits="userSpaceOnUse"
              x1="55.6475"
              y1="60.9347"
              x2="55.6475"
              y2="28.6595"
              gradientTransform="matrix(0 -1 1 0 55.5014 187.5014)"
            >
              <stop offset="0" style="stop-color:#A6B5BD" />
              <stop offset="0.1313" style="stop-color:#73858E" />
              <stop offset="0.5251" style="stop-color:#CFDCE2" />
              <stop offset="0.852" style="stop-color:#73858E" />
              <stop offset="1" style="stop-color:#8D9EA6" />
            </linearGradient>
            <path
              :class="`jsj-${info.id}-st57`"
              d="M100.3,150c8.91,0,16.14-2.43,16.14-5.43V113.7c-3.43,1.8-9.37,2.99-16.14,2.99
                  c-6.76,0-12.71-1.19-16.14-2.99v30.87C84.16,147.57,91.39,150,100.3,150z"
            />
            <g :class="`jsj-${info.id}-st54`">
              <path
                :class="`jsj-${info.id}-st5`"
                d="M95.8,116.51l0.02,0c-0.01,0-0.03,0-0.04,0L95.8,116.51z"
              />
              <path
                :class="`jsj-${info.id}-st5`"
                d="M91.69,149.17V116c-0.82-0.14-1.6-0.3-2.34-0.47v33.04C90.07,148.79,90.85,148.99,91.69,149.17z"
              />
              <path
                :class="`jsj-${info.id}-st5`"
                d="M111.58,115.45v33.01c0.77-0.25,1.46-0.53,2.07-0.83v-32.77C113,115.06,112.31,115.26,111.58,115.45z"
              />
              <path
                :class="`jsj-${info.id}-st5`"
                d="M103.71,116.59c-0.77,0.05-1.55,0.08-2.34,0.09v33.31c0.8-0.02,1.58-0.05,2.34-0.11V116.59z"
              />
            </g>
            <g>
              <path
                :class="`jsj-${info.id}-st52`"
                d="M95.8,116.51l0.02,0c-0.01,0-0.03,0-0.04,0L95.8,116.51z"
              />
              <path
                :class="`jsj-${info.id}-st52`"
                d="M112.11,115.31v32.96c0.36-0.13,0.7-0.26,1.02-0.41v-32.85C112.8,115.12,112.46,115.21,112.11,115.31z"
              />
              <path
                :class="`jsj-${info.id}-st52`"
                d="M91.1,149.03v-33.14c-0.39-0.07-0.78-0.15-1.15-0.23v33.08C90.31,148.84,90.7,148.94,91.1,149.03z"
              />
              <path
                :class="`jsj-${info.id}-st52`"
                d="M103.11,149.92v-33.3c-0.38,0.02-0.76,0.03-1.15,0.05v33.31C102.35,149.96,102.73,149.94,103.11,149.92z"
              />
            </g>
          </g>
        </g>
        <g class="f3">
          <animate
            values="hide;hide;show;"
            dur="0.3s"
            attributeName="class"
            repeatCount="indefinite"
          />
          <g>
            <path
              :class="`jsj-${info.id}-st51`"
              d="M208.71,116.69c-9.43,0-17.27-2.31-18.91-5.36v35.19c0,3.56,8.47,6.44,18.91,6.44
                  c10.44,0,18.91-2.88,18.91-6.44v-35.19C225.98,114.38,218.14,116.69,208.71,116.69z"
            />
            <ellipse
              :class="`jsj-${info.id}-st52`"
              cx="208.71"
              cy="146.52"
              rx="18.91"
              ry="6.44"
            />
            <g>
              <path
                :class="`jsj-${info.id}-st5`"
                d="M227.62,111.33c-0.26,0.48-0.67,0.94-1.22,1.38v36.09c0.79-0.71,1.22-1.47,1.22-2.28V111.33z"
              />
            </g>
            <path
              :class="`jsj-${info.id}-st5`"
              d="M189.8,111.33v35.19c0,0.8,0.43,1.56,1.21,2.27V112.7C190.47,112.27,190.06,111.81,189.8,111.33z"
            />

            <linearGradient
              id="JSJ_51_"
              gradientUnits="userSpaceOnUse"
              x1="55.6475"
              y1="169.3484"
              x2="55.6475"
              y2="137.0732"
              gradientTransform="matrix(0 -1 1 0 55.5014 187.5014)"
            >
              <stop offset="0" style="stop-color:#A6B5BD" />
              <stop offset="0.1313" style="stop-color:#73858E" />
              <stop offset="0.5251" style="stop-color:#CFDCE2" />
              <stop offset="0.852" style="stop-color:#73858E" />
              <stop offset="1" style="stop-color:#8D9EA6" />
            </linearGradient>
            <path
              :class="`jsj-${info.id}-st58`"
              d="M208.71,150c8.91,0,16.14-2.43,16.14-5.43V113.7c-3.43,1.8-9.37,2.99-16.14,2.99
                  c-6.76,0-12.71-1.19-16.14-2.99v30.87C192.57,147.57,199.8,150,208.71,150z"
            />
            <g :class="`jsj-${info.id}-st54`">
              <path
                :class="`jsj-${info.id}-st5`"
                d="M203.89,116.48c-0.8-0.07-1.58-0.16-2.34-0.26v33.22c0.75,0.13,1.53,0.23,2.34,0.32V116.48z"
              />
              <path
                :class="`jsj-${info.id}-st5`"
                d="M194.42,114.52c-0.58-0.22-1.13-0.46-1.62-0.7v31.66c0.29,0.57,0.84,1.12,1.62,1.61V114.52z"
              />
              <path
                :class="`jsj-${info.id}-st5`"
                d="M204.21,116.51l0.02,0c-0.01,0-0.03,0-0.04,0L204.21,116.51z"
              />
              <path
                :class="`jsj-${info.id}-st5`"
                d="M222.41,114.73v32.71c0.63-0.34,1.15-0.7,1.54-1.09v-32.22C223.48,114.34,222.96,114.54,222.41,114.73z"
              />
              <path
                :class="`jsj-${info.id}-st5`"
                d="M215.91,116.22c-0.76,0.1-1.54,0.19-2.34,0.26v33.27c0.81-0.09,1.59-0.19,2.34-0.32V116.22z"
              />
            </g>
            <g>
              <path
                :class="`jsj-${info.id}-st52`"
                d="M204.21,116.51l0.02,0c-0.01,0-0.03,0-0.04,0L204.21,116.51z"
              />
              <path
                :class="`jsj-${info.id}-st52`"
                d="M194.01,114.36c-0.28-0.11-0.54-0.23-0.8-0.34v32.07c0.21,0.25,0.48,0.49,0.8,0.73V114.36z"
              />
              <path
                :class="`jsj-${info.id}-st52`"
                d="M203.3,116.42c-0.39-0.04-0.77-0.08-1.15-0.13v33.24c0.38,0.06,0.76,0.11,1.15,0.16V116.42z"
              />
              <path
                :class="`jsj-${info.id}-st52`"
                d="M222.81,114.59v32.62c0.28-0.17,0.53-0.34,0.76-0.52v-32.4C223.32,114.4,223.07,114.5,222.81,114.59z"
              />
              <path
                :class="`jsj-${info.id}-st52`"
                d="M215.32,116.29c-0.38,0.05-0.76,0.09-1.15,0.13v33.26c0.39-0.05,0.77-0.1,1.15-0.16V116.29z"
              />
            </g>
          </g>
          <g>
            <path
              :class="`jsj-${info.id}-st51`"
              d="M100.3,116.69c-9.43,0-17.27-2.31-18.91-5.36v35.19c0,3.56,8.47,6.44,18.91,6.44s18.91-2.88,18.91-6.44
                  v-35.19C117.57,114.38,109.73,116.69,100.3,116.69z"
            />
            <ellipse
              :class="`jsj-${info.id}-st52`"
              cx="100.3"
              cy="146.52"
              rx="18.91"
              ry="6.44"
            />
            <g>
              <path
                :class="`jsj-${info.id}-st5`"
                d="M119.21,111.33c-0.26,0.48-0.67,0.94-1.22,1.38v36.09c0.79-0.71,1.22-1.47,1.22-2.28V111.33z"
              />
            </g>
            <path
              :class="`jsj-${info.id}-st5`"
              d="M81.39,111.33v35.19c0,0.8,0.43,1.56,1.21,2.27V112.7C82.05,112.27,81.64,111.81,81.39,111.33z"
            />

            <linearGradient
              id="JSJ_52_"
              gradientUnits="userSpaceOnUse"
              x1="55.6475"
              y1="60.9347"
              x2="55.6475"
              y2="28.6595"
              gradientTransform="matrix(0 -1 1 0 55.5014 187.5014)"
            >
              <stop offset="0" style="stop-color:#A6B5BD" />
              <stop offset="0.1313" style="stop-color:#73858E" />
              <stop offset="0.5251" style="stop-color:#CFDCE2" />
              <stop offset="0.852" style="stop-color:#73858E" />
              <stop offset="1" style="stop-color:#8D9EA6" />
            </linearGradient>
            <path
              :class="`jsj-${info.id}-st59`"
              d="M100.3,150c8.91,0,16.14-2.43,16.14-5.43V113.7c-3.43,1.8-9.37,2.99-16.14,2.99
                  c-6.76,0-12.71-1.19-16.14-2.99v30.87C84.16,147.57,91.39,150,100.3,150z"
            />
            <g :class="`jsj-${info.id}-st54`">
              <path
                :class="`jsj-${info.id}-st5`"
                d="M95.48,116.48c-0.8-0.07-1.58-0.16-2.34-0.26v33.22c0.75,0.13,1.53,0.23,2.34,0.32V116.48z"
              />
              <path
                :class="`jsj-${info.id}-st5`"
                d="M86.01,114.52c-0.58-0.22-1.13-0.46-1.62-0.7v31.66c0.29,0.57,0.84,1.12,1.62,1.61V114.52z"
              />
              <path
                :class="`jsj-${info.id}-st5`"
                d="M95.8,116.51l0.02,0c-0.01,0-0.03,0-0.04,0L95.8,116.51z"
              />
              <path
                :class="`jsj-${info.id}-st5`"
                d="M114,114.73v32.71c0.63-0.34,1.15-0.7,1.54-1.09v-32.22C115.07,114.34,114.55,114.54,114,114.73z"
              />
              <path
                :class="`jsj-${info.id}-st5`"
                d="M107.5,116.22c-0.76,0.1-1.54,0.19-2.34,0.26v33.27c0.81-0.09,1.59-0.19,2.34-0.32V116.22z"
              />
            </g>
            <g>
              <path
                :class="`jsj-${info.id}-st52`"
                d="M95.8,116.51l0.02,0c-0.01,0-0.03,0-0.04,0L95.8,116.51z"
              />
              <path
                :class="`jsj-${info.id}-st52`"
                d="M85.6,114.36c-0.28-0.11-0.54-0.23-0.8-0.34v32.07c0.21,0.25,0.48,0.49,0.8,0.73V114.36z"
              />
              <path
                :class="`jsj-${info.id}-st52`"
                d="M94.88,116.42c-0.39-0.04-0.77-0.08-1.15-0.13v33.24c0.38,0.06,0.76,0.11,1.15,0.16V116.42z"
              />
              <path
                :class="`jsj-${info.id}-st52`"
                d="M114.39,114.59v32.62c0.28-0.17,0.53-0.34,0.76-0.52v-32.4C114.91,114.4,114.65,114.5,114.39,114.59z"
              />
              <path
                :class="`jsj-${info.id}-st52`"
                d="M106.9,116.29c-0.38,0.05-0.76,0.09-1.15,0.13v33.26c0.39-0.05,0.77-0.1,1.15-0.16V116.29z"
              />
            </g>
          </g>
        </g>
      </g>

      <g id="SVG_base3">
        <linearGradient
          id="JSJ_53_"
          gradientUnits="userSpaceOnUse"
          x1="186.3219"
          y1="103.1758"
          x2="231.5419"
          y2="103.1758"
        >
          <stop offset="0" style="stop-color:#3B3E47" />
          <stop offset="0.3324" style="stop-color:#4F5A60" />
          <stop offset="0.7151" style="stop-color:#21242B" />
          <stop offset="1" style="stop-color:#5C6063" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st60`"
          d="M186.32,93.16v11.93c0,4.47,10.12,8.09,22.61,8.09c12.49,0,22.61-3.62,22.61-8.09V93.16H186.32z"
        />
        <linearGradient
          id="JSJ_54_"
          gradientUnits="userSpaceOnUse"
          x1="186.3219"
          y1="97.6128"
          x2="231.5419"
          y2="97.6128"
        >
          <stop offset="0" style="stop-color:#3B3E47" />
          <stop offset="0.3324" style="stop-color:#8B8F98" />
          <stop offset="0.7486" style="stop-color:#5C6B7E" />
          <stop offset="1" style="stop-color:#5C6063" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st61`"
          d="M186.32,95.48c2.46,3.78,11.65,6.59,22.61,6.59c10.96,0,20.15-2.81,22.61-6.59v-2.31h-45.22V95.48z"
        />
        <linearGradient
          id="JSJ_55_"
          gradientUnits="userSpaceOnUse"
          x1="208.9319"
          y1="101.2555"
          x2="208.9319"
          y2="85.0724"
        >
          <stop offset="0" style="stop-color:#5A5E6A" />
          <stop offset="1" style="stop-color:#323641" />
        </linearGradient>
        <ellipse
          :class="`jsj-${info.id}-st62`"
          cx="208.93"
          cy="93.16"
          rx="22.61"
          ry="8.09"
        />
        <linearGradient
          id="JSJ_56_"
          gradientUnits="userSpaceOnUse"
          x1="190.2393"
          y1="89.0051"
          x2="227.6245"
          y2="89.0051"
        >
          <stop offset="0" style="stop-color:#3B3E47" />
          <stop offset="0.3324" style="stop-color:#4F5A60" />
          <stop offset="0.7151" style="stop-color:#21242B" />
          <stop offset="1" style="stop-color:#5C6063" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st63`"
          d="M224.29,79.9h-30.71l-3.34,12.34c0,3.24,8.37,5.87,18.69,5.87c10.32,0,18.69-2.63,18.69-5.87L224.29,79.9z"
        />
        <linearGradient
          id="JSJ_57_"
          gradientUnits="userSpaceOnUse"
          x1="193.3521"
          y1="82.5302"
          x2="224.5117"
          y2="82.5302"
        >
          <stop offset="0" style="stop-color:#3B3E47" />
          <stop offset="0.3324" style="stop-color:#8B8F98" />
          <stop offset="0.7151" style="stop-color:#21242B" />
          <stop offset="1" style="stop-color:#5C6063" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st64`"
          d="M224.29,79.9h-30.71l-0.23,0.83c0.72,2.48,7.42,4.42,15.58,4.42c8.16,0,14.86-1.94,15.58-4.42L224.29,79.9z"
        />
        <linearGradient
          id="JSJ_58_"
          gradientUnits="userSpaceOnUse"
          x1="208.9319"
          y1="84.3696"
          x2="208.9319"
          y2="75.4362"
        >
          <stop offset="0" style="stop-color:#5A5E6A" />
          <stop offset="1" style="stop-color:#323641" />
        </linearGradient>
        <ellipse
          :class="`jsj-${info.id}-st65`"
          cx="208.93"
          cy="79.9"
          rx="15.35"
          ry="4.47"
        />
        <g>
          <linearGradient
            id="JSJ_59_"
            gradientUnits="userSpaceOnUse"
            x1="181.872"
            y1="158.4535"
            x2="187.1053"
            y2="158.4535"
          >
            <stop offset="0" style="stop-color:#3B3E47" />
            <stop offset="0.3324" style="stop-color:#4F5A60" />
            <stop offset="0.8324" style="stop-color:#21242B" />
          </linearGradient>
          <path
            :class="`jsj-${info.id}-st66`"
            d="M181.87,149.74v16.49c0,0.52,1.17,0.94,2.62,0.94s2.62-0.42,2.62-0.94v-16.49H181.87z"
          />
          <linearGradient
            id="JSJ_60_"
            gradientUnits="userSpaceOnUse"
            x1="184.4887"
            y1="150.6749"
            x2="184.4887"
            y2="148.802"
          >
            <stop offset="0" style="stop-color:#5A5E6A" />
            <stop offset="1" style="stop-color:#323641" />
          </linearGradient>
          <ellipse
            :class="`jsj-${info.id}-st67`"
            cx="184.49"
            cy="149.74"
            rx="2.62"
            ry="0.94"
          />
          <linearGradient
            id="JSJ_61_"
            gradientUnits="userSpaceOnUse"
            x1="182.7667"
            y1="127.7082"
            x2="186.2106"
            y2="127.7082"
          >
            <stop offset="0" style="stop-color:#8C8F94" />
            <stop offset="0.5279" style="stop-color:#FFFFFF" />
            <stop offset="1" style="stop-color:#6B6C64" />
          </linearGradient>
          <path
            :class="`jsj-${info.id}-st68`"
            d="M182.77,105.32v44.17c0,0.34,0.77,0.62,1.72,0.62c0.95,0,1.72-0.28,1.72-0.62v-44.17H182.77z"
          />
          <linearGradient
            id="JSJ_62_"
            gradientUnits="userSpaceOnUse"
            x1="181.872"
            y1="99.8946"
            x2="187.1053"
            y2="99.8946"
          >
            <stop offset="0" style="stop-color:#3B3E47" />
            <stop offset="0.3324" style="stop-color:#4F5A60" />
            <stop offset="0.8324" style="stop-color:#21242B" />
          </linearGradient>
          <path
            :class="`jsj-${info.id}-st69`"
            d="M181.87,93.54v11.78c0,0.52,1.17,0.94,2.62,0.94s2.62-0.42,2.62-0.94V93.54H181.87z"
          />
          <linearGradient
            id="JSJ_63_"
            gradientUnits="userSpaceOnUse"
            x1="184.4887"
            y1="94.4717"
            x2="184.4887"
            y2="92.5988"
          >
            <stop offset="0" style="stop-color:#5A5E6A" />
            <stop offset="1" style="stop-color:#323641" />
          </linearGradient>
          <ellipse
            :class="`jsj-${info.id}-st70`"
            cx="184.49"
            cy="93.54"
            rx="2.62"
            ry="0.94"
          />
        </g>
        <g>
          <linearGradient
            id="JSJ_64_"
            gradientUnits="userSpaceOnUse"
            x1="230.9387"
            y1="158.4535"
            x2="236.172"
            y2="158.4535"
          >
            <stop offset="0" style="stop-color:#3B3E47" />
            <stop offset="0.3324" style="stop-color:#4F5A60" />
            <stop offset="0.8324" style="stop-color:#21242B" />
          </linearGradient>
          <path
            :class="`jsj-${info.id}-st71`"
            d="M230.94,149.74v16.49c0,0.52,1.17,0.94,2.62,0.94s2.62-0.42,2.62-0.94v-16.49H230.94z"
          />
          <linearGradient
            id="JSJ_65_"
            gradientUnits="userSpaceOnUse"
            x1="233.5553"
            y1="150.6749"
            x2="233.5553"
            y2="148.802"
          >
            <stop offset="0" style="stop-color:#5A5E6A" />
            <stop offset="1" style="stop-color:#323641" />
          </linearGradient>
          <ellipse
            :class="`jsj-${info.id}-st72`"
            cx="233.56"
            cy="149.74"
            rx="2.62"
            ry="0.94"
          />
          <linearGradient
            id="JSJ_66_"
            gradientUnits="userSpaceOnUse"
            x1="231.8333"
            y1="127.7082"
            x2="235.2773"
            y2="127.7082"
          >
            <stop offset="0" style="stop-color:#8C8F94" />
            <stop offset="0.5279" style="stop-color:#FFFFFF" />
            <stop offset="1" style="stop-color:#6B6C64" />
          </linearGradient>
          <path
            :class="`jsj-${info.id}-st73`"
            d="M231.83,105.32v44.17c0,0.34,0.77,0.62,1.72,0.62c0.95,0,1.72-0.28,1.72-0.62v-44.17H231.83z"
          />
          <linearGradient
            id="JSJ_67_"
            gradientUnits="userSpaceOnUse"
            x1="230.9387"
            y1="99.8946"
            x2="236.172"
            y2="99.8946"
          >
            <stop offset="0" style="stop-color:#3B3E47" />
            <stop offset="0.3324" style="stop-color:#4F5A60" />
            <stop offset="0.8324" style="stop-color:#21242B" />
          </linearGradient>
          <path
            :class="`jsj-${info.id}-st74`"
            d="M230.94,93.54v11.78c0,0.52,1.17,0.94,2.62,0.94s2.62-0.42,2.62-0.94V93.54H230.94z"
          />
          <linearGradient
            id="JSJ_68_"
            gradientUnits="userSpaceOnUse"
            x1="233.5553"
            y1="94.4717"
            x2="233.5553"
            y2="92.5988"
          >
            <stop offset="0" style="stop-color:#5A5E6A" />
            <stop offset="1" style="stop-color:#323641" />
          </linearGradient>
          <ellipse
            :class="`jsj-${info.id}-st75`"
            cx="233.56"
            cy="93.54"
            rx="2.62"
            ry="0.94"
          />
        </g>
        <g>
          <linearGradient
            id="JSJ_69_"
            gradientUnits="userSpaceOnUse"
            x1="206.4053"
            y1="167.2154"
            x2="211.6386"
            y2="167.2154"
          >
            <stop offset="0" style="stop-color:#3B3E47" />
            <stop offset="0.3324" style="stop-color:#4F5A60" />
            <stop offset="0.8324" style="stop-color:#21242B" />
          </linearGradient>
          <path
            :class="`jsj-${info.id}-st76`"
            d="M206.41,158.5v16.49c0,0.52,1.17,0.94,2.62,0.94s2.62-0.42,2.62-0.94V158.5H206.41z"
          />
          <linearGradient
            id="JSJ_70_"
            gradientUnits="userSpaceOnUse"
            x1="209.022"
            y1="159.4368"
            x2="209.022"
            y2="157.5639"
          >
            <stop offset="0" style="stop-color:#5A5E6A" />
            <stop offset="1" style="stop-color:#323641" />
          </linearGradient>
          <ellipse
            :class="`jsj-${info.id}-st77`"
            cx="209.02"
            cy="158.5"
            rx="2.62"
            ry="0.94"
          />
          <linearGradient
            id="JSJ_71_"
            gradientUnits="userSpaceOnUse"
            x1="207.3"
            y1="136.4701"
            x2="210.744"
            y2="136.4701"
          >
            <stop offset="0" style="stop-color:#8C8F94" />
            <stop offset="0.5279" style="stop-color:#FFFFFF" />
            <stop offset="1" style="stop-color:#6B6C64" />
          </linearGradient>
          <path
            :class="`jsj-${info.id}-st78`"
            d="M207.3,114.08v44.17c0,0.34,0.77,0.62,1.72,0.62c0.95,0,1.72-0.28,1.72-0.62v-44.17H207.3z"
          />
          <linearGradient
            id="JSJ_72_"
            gradientUnits="userSpaceOnUse"
            x1="206.4053"
            y1="108.6565"
            x2="211.6386"
            y2="108.6565"
          >
            <stop offset="0" style="stop-color:#3B3E47" />
            <stop offset="0.3324" style="stop-color:#4F5A60" />
            <stop offset="0.8324" style="stop-color:#21242B" />
          </linearGradient>
          <path
            :class="`jsj-${info.id}-st79`"
            d="M206.41,102.3v11.78c0,0.52,1.17,0.94,2.62,0.94s2.62-0.42,2.62-0.94V102.3H206.41z"
          />
          <linearGradient
            id="JSJ_73_"
            gradientUnits="userSpaceOnUse"
            x1="209.022"
            y1="103.2336"
            x2="209.022"
            y2="101.3607"
          >
            <stop offset="0" style="stop-color:#5A5E6A" />
            <stop offset="1" style="stop-color:#323641" />
          </linearGradient>
          <ellipse
            :class="`jsj-${info.id}-st80`"
            cx="209.02"
            cy="102.3"
            rx="2.62"
            ry="0.94"
          />
        </g>
        <linearGradient
          id="JSJ_74_"
          gradientUnits="userSpaceOnUse"
          x1="77.9082"
          y1="103.1758"
          x2="123.1282"
          y2="103.1758"
        >
          <stop offset="0" style="stop-color:#3B3E47" />
          <stop offset="0.3324" style="stop-color:#4F5A60" />
          <stop offset="0.7151" style="stop-color:#21242B" />
          <stop offset="1" style="stop-color:#5C6063" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st81`"
          d="M77.91,93.16v11.93c0,4.47,10.12,8.09,22.61,8.09c12.49,0,22.61-3.62,22.61-8.09V93.16H77.91z"
        />
        <linearGradient
          id="JSJ_75_"
          gradientUnits="userSpaceOnUse"
          x1="77.9082"
          y1="97.6128"
          x2="123.1282"
          y2="97.6128"
        >
          <stop offset="0" style="stop-color:#3B3E47" />
          <stop offset="0.3324" style="stop-color:#8B8F98" />
          <stop offset="0.7486" style="stop-color:#5C6B7E" />
          <stop offset="1" style="stop-color:#5C6063" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st82`"
          d="M77.91,95.48c2.46,3.78,11.65,6.59,22.61,6.59c10.96,0,20.15-2.81,22.61-6.59v-2.31H77.91V95.48z"
        />
        <linearGradient
          id="JSJ_76_"
          gradientUnits="userSpaceOnUse"
          x1="100.5182"
          y1="101.2555"
          x2="100.5182"
          y2="85.0724"
        >
          <stop offset="0" style="stop-color:#5A5E6A" />
          <stop offset="1" style="stop-color:#323641" />
        </linearGradient>
        <ellipse
          :class="`jsj-${info.id}-st83`"
          cx="100.52"
          cy="93.16"
          rx="22.61"
          ry="8.09"
        />
        <linearGradient
          id="JSJ_77_"
          gradientUnits="userSpaceOnUse"
          x1="81.8256"
          y1="89.0051"
          x2="119.2108"
          y2="89.0051"
        >
          <stop offset="0" style="stop-color:#3B3E47" />
          <stop offset="0.3324" style="stop-color:#4F5A60" />
          <stop offset="0.7151" style="stop-color:#21242B" />
          <stop offset="1" style="stop-color:#5C6063" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st84`"
          d="M115.87,79.9H85.16l-3.34,12.34c0,3.24,8.37,5.87,18.69,5.87s18.69-2.63,18.69-5.87L115.87,79.9z"
        />
        <linearGradient
          id="JSJ_78_"
          gradientUnits="userSpaceOnUse"
          x1="84.9384"
          y1="82.5302"
          x2="116.098"
          y2="82.5302"
        >
          <stop offset="0" style="stop-color:#3B3E47" />
          <stop offset="0.3324" style="stop-color:#8B8F98" />
          <stop offset="0.7151" style="stop-color:#21242B" />
          <stop offset="1" style="stop-color:#5C6063" />
        </linearGradient>
        <path
          :class="`jsj-${info.id}-st85`"
          d="M115.87,79.9H85.16l-0.23,0.83c0.72,2.48,7.42,4.42,15.58,4.42c8.16,0,14.86-1.94,15.58-4.42L115.87,79.9z"
        />
        <linearGradient
          id="JSJ_79_"
          gradientUnits="userSpaceOnUse"
          x1="100.5182"
          y1="84.3696"
          x2="100.5182"
          y2="75.4362"
        >
          <stop offset="0" style="stop-color:#5A5E6A" />
          <stop offset="1" style="stop-color:#323641" />
        </linearGradient>
        <ellipse
          :class="`jsj-${info.id}-st86`"
          cx="100.52"
          cy="79.9"
          rx="15.35"
          ry="4.47"
        />
        <g>
          <linearGradient
            id="JSJ_80_"
            gradientUnits="userSpaceOnUse"
            x1="73.4583"
            y1="158.4535"
            x2="78.6916"
            y2="158.4535"
          >
            <stop offset="0" style="stop-color:#3B3E47" />
            <stop offset="0.3324" style="stop-color:#4F5A60" />
            <stop offset="0.8324" style="stop-color:#21242B" />
          </linearGradient>
          <path
            :class="`jsj-${info.id}-st87`"
            d="M73.46,149.74v16.49c0,0.52,1.17,0.94,2.62,0.94c1.45,0,2.62-0.42,2.62-0.94v-16.49H73.46z"
          />
          <linearGradient
            id="JSJ_81_"
            gradientUnits="userSpaceOnUse"
            x1="76.075"
            y1="150.6749"
            x2="76.075"
            y2="148.802"
          >
            <stop offset="0" style="stop-color:#5A5E6A" />
            <stop offset="1" style="stop-color:#323641" />
          </linearGradient>
          <ellipse
            :class="`jsj-${info.id}-st88`"
            cx="76.07"
            cy="149.74"
            rx="2.62"
            ry="0.94"
          />
          <linearGradient
            id="JSJ_82_"
            gradientUnits="userSpaceOnUse"
            x1="74.353"
            y1="127.7082"
            x2="77.7969"
            y2="127.7082"
          >
            <stop offset="0" style="stop-color:#8C8F94" />
            <stop offset="0.5279" style="stop-color:#FFFFFF" />
            <stop offset="1" style="stop-color:#6B6C64" />
          </linearGradient>
          <path
            :class="`jsj-${info.id}-st89`"
            d="M74.35,105.32v44.17c0,0.34,0.77,0.62,1.72,0.62c0.95,0,1.72-0.28,1.72-0.62v-44.17H74.35z"
          />
          <linearGradient
            id="JSJ_83_"
            gradientUnits="userSpaceOnUse"
            x1="73.4583"
            y1="99.8946"
            x2="78.6916"
            y2="99.8946"
          >
            <stop offset="0" style="stop-color:#3B3E47" />
            <stop offset="0.3324" style="stop-color:#4F5A60" />
            <stop offset="0.8324" style="stop-color:#21242B" />
          </linearGradient>
          <path
            :class="`jsj-${info.id}-st90`"
            d="M73.46,93.54v11.78c0,0.52,1.17,0.94,2.62,0.94c1.45,0,2.62-0.42,2.62-0.94V93.54H73.46z"
          />
          <linearGradient
            id="JSJ_84_"
            gradientUnits="userSpaceOnUse"
            x1="76.075"
            y1="94.4717"
            x2="76.075"
            y2="92.5988"
          >
            <stop offset="0" style="stop-color:#5A5E6A" />
            <stop offset="1" style="stop-color:#323641" />
          </linearGradient>
          <ellipse
            :class="`jsj-${info.id}-st91`"
            cx="76.07"
            cy="93.54"
            rx="2.62"
            ry="0.94"
          />
        </g>
        <g>
          <linearGradient
            id="JSJ_85_"
            gradientUnits="userSpaceOnUse"
            x1="122.525"
            y1="158.4535"
            x2="127.7582"
            y2="158.4535"
          >
            <stop offset="0" style="stop-color:#3B3E47" />
            <stop offset="0.3324" style="stop-color:#4F5A60" />
            <stop offset="0.8324" style="stop-color:#21242B" />
          </linearGradient>
          <path
            :class="`jsj-${info.id}-st92`"
            d="M122.52,149.74v16.49c0,0.52,1.17,0.94,2.62,0.94c1.45,0,2.62-0.42,2.62-0.94v-16.49H122.52z"
          />
          <linearGradient
            id="JSJ_86_"
            gradientUnits="userSpaceOnUse"
            x1="125.1416"
            y1="150.6749"
            x2="125.1416"
            y2="148.802"
          >
            <stop offset="0" style="stop-color:#5A5E6A" />
            <stop offset="1" style="stop-color:#323641" />
          </linearGradient>
          <ellipse
            :class="`jsj-${info.id}-st93`"
            cx="125.14"
            cy="149.74"
            rx="2.62"
            ry="0.94"
          />
          <linearGradient
            id="JSJ_87_"
            gradientUnits="userSpaceOnUse"
            x1="123.4196"
            y1="127.7082"
            x2="126.8636"
            y2="127.7082"
          >
            <stop offset="0" style="stop-color:#8C8F94" />
            <stop offset="0.5279" style="stop-color:#FFFFFF" />
            <stop offset="1" style="stop-color:#6B6C64" />
          </linearGradient>
          <path
            :class="`jsj-${info.id}-st94`"
            d="M123.42,105.32v44.17c0,0.34,0.77,0.62,1.72,0.62c0.95,0,1.72-0.28,1.72-0.62v-44.17H123.42z"
          />
          <linearGradient
            id="JSJ_88_"
            gradientUnits="userSpaceOnUse"
            x1="122.525"
            y1="99.8946"
            x2="127.7582"
            y2="99.8946"
          >
            <stop offset="0" style="stop-color:#3B3E47" />
            <stop offset="0.3324" style="stop-color:#4F5A60" />
            <stop offset="0.8324" style="stop-color:#21242B" />
          </linearGradient>
          <path
            :class="`jsj-${info.id}-st95`"
            d="M122.52,93.54v11.78c0,0.52,1.17,0.94,2.62,0.94c1.45,0,2.62-0.42,2.62-0.94V93.54H122.52z"
          />
          <linearGradient
            id="JSJ_89_"
            gradientUnits="userSpaceOnUse"
            x1="125.1416"
            y1="94.4717"
            x2="125.1416"
            y2="92.5988"
          >
            <stop offset="0" style="stop-color:#5A5E6A" />
            <stop offset="1" style="stop-color:#323641" />
          </linearGradient>
          <ellipse
            :class="`jsj-${info.id}-st96`"
            cx="125.14"
            cy="93.54"
            rx="2.62"
            ry="0.94"
          />
        </g>
        <g>
          <linearGradient
            id="JSJ_90_"
            gradientUnits="userSpaceOnUse"
            x1="97.9917"
            y1="167.2154"
            x2="103.2249"
            y2="167.2154"
          >
            <stop offset="0" style="stop-color:#3B3E47" />
            <stop offset="0.3324" style="stop-color:#4F5A60" />
            <stop offset="0.8324" style="stop-color:#21242B" />
          </linearGradient>
          <path
            :class="`jsj-${info.id}-st97`"
            d="M97.99,158.5v16.49c0,0.52,1.17,0.94,2.62,0.94s2.62-0.42,2.62-0.94V158.5H97.99z"
          />
          <linearGradient
            id="JSJ_91_"
            gradientUnits="userSpaceOnUse"
            x1="100.6083"
            y1="159.4368"
            x2="100.6083"
            y2="157.5639"
          >
            <stop offset="0" style="stop-color:#5A5E6A" />
            <stop offset="1" style="stop-color:#323641" />
          </linearGradient>
          <ellipse
            :class="`jsj-${info.id}-st98`"
            cx="100.61"
            cy="158.5"
            rx="2.62"
            ry="0.94"
          />
          <linearGradient
            id="JSJ_92_"
            gradientUnits="userSpaceOnUse"
            x1="98.8863"
            y1="136.4701"
            x2="102.3303"
            y2="136.4701"
          >
            <stop offset="0" style="stop-color:#8C8F94" />
            <stop offset="0.5279" style="stop-color:#FFFFFF" />
            <stop offset="1" style="stop-color:#6B6C64" />
          </linearGradient>
          <path
            :class="`jsj-${info.id}-st99`"
            d="M98.89,114.08v44.17c0,0.34,0.77,0.62,1.72,0.62s1.72-0.28,1.72-0.62v-44.17H98.89z"
          />
          <linearGradient
            id="JSJ_93_"
            gradientUnits="userSpaceOnUse"
            x1="97.9917"
            y1="108.6565"
            x2="103.2249"
            y2="108.6565"
          >
            <stop offset="0" style="stop-color:#3B3E47" />
            <stop offset="0.3324" style="stop-color:#4F5A60" />
            <stop offset="0.8324" style="stop-color:#21242B" />
          </linearGradient>
          <path
            :class="`jsj-${info.id}-st100`"
            d="M97.99,102.3v11.78c0,0.52,1.17,0.94,2.62,0.94s2.62-0.42,2.62-0.94V102.3H97.99z"
          />
          <linearGradient
            id="JSJ_94_"
            gradientUnits="userSpaceOnUse"
            x1="100.6083"
            y1="103.2336"
            x2="100.6083"
            y2="101.3607"
          >
            <stop offset="0" style="stop-color:#5A5E6A" />
            <stop offset="1" style="stop-color:#323641" />
          </linearGradient>
          <ellipse
            :class="`jsj-${info.id}-st101`"
            cx="100.61"
            cy="102.3"
            rx="2.62"
            ry="0.94"
          />
        </g>
      </g>
      <g class="SVG_alert" v-if="pointValue == 2">
        <path
          :class="`jsj-${info.id}-st102`"
          d="M81.83,0L0,64.98v172.23h241.46l-0.01,0.15l0.19-0.15h0.58v-0.46l81.83-64.98v-0.28V0H81.83z"
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
  name: "deviceJsjCom",
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
// @import (less) "../../../../assets/less/components/component/device/common.less";
</style>

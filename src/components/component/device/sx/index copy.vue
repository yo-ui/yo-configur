// 水箱
<template>
  <div class="bm-device-sx-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 300 275`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
      .sx-${info.id}-st0{fill:#332324;}
              .sx-${info.id}-st1{fill:url(#sx_1_);}
              .sx-${info.id}-st2{fill:#BC5862;}
              .sx-${info.id}-st3{fill:#662B30;}
              .sx-${info.id}-st4{fill:#72373B;}
              .sx-${info.id}-st5{fill:url(#sx_2_);}
              .sx-${info.id}-st6{fill:url(#sx_3_);}
              .sx-${info.id}-st7{fill:url(#sx_4_);}
              .sx-${info.id}-st8{fill:url(#sx_5_);}
              .sx-${info.id}-st9{fill:url(#sx_6_);}
              .sx-${info.id}-st10{fill:url(#sx_7_);}
              .sx-${info.id}-st11{fill:url(#sx_8_);}
              .sx-${info.id}-st12{fill:url(#sx_9_);}
              .sx-${info.id}-st13{fill:url(#sx_10_);}
              .sx-${info.id}-st14{fill:url(#sx_11_);}
              .sx-${info.id}-st15{fill:url(#sx_12_);}
              .sx-${info.id}-st16{fill:url(#sx_13_);}
              .sx-${info.id}-st17{fill:url(#sx_14_);}
              .sx-${info.id}-st18{fill:url(#sx_15_);}
              .sx-${info.id}-st19{fill:url(#sx_16_);}
              .sx-${info.id}-st20{fill:url(#sx_17_);}
              .sx-${info.id}-st21{fill:url(#sx_18_);}
              .sx-${info.id}-st22{fill:url(#sx_19_);}
              .sx-${info.id}-st23{fill:url(#sx_20_);}
              .sx-${info.id}-st24{fill:url(#sx_21_);}
              .sx-${info.id}-st25{fill:url(#sx_22_);}
              .sx-${info.id}-st26{fill:url(#sx_23_);}
              .sx-${info.id}-st27{fill:url(#sx_24_);}
              .sx-${info.id}-st28{fill:url(#sx_25_);}
              .sx-${info.id}-st29{fill:url(#sx_26_);}
              .sx-${info.id}-st30{fill:url(#sx_27_);}
              .sx-${info.id}-st31{fill:url(#sx_28_);}
              .sx-${info.id}-st32{fill:url(#sx_29_);}
              .sx-${info.id}-st33{fill:url(#sx_30_);}
              .sx-${info.id}-st34{fill:url(#sx_31_);}
              .sx-${info.id}-st35{fill:url(#sx_32_);}
              .sx-${info.id}-st36{fill:url(#sx_33_);}
              .sx-${info.id}-st37{fill:url(#sx_34_);}
              .sx-${info.id}-st38{fill:url(#sx_35_);}
              .sx-${info.id}-st39{fill:url(#sx_36_);}
              .sx-${info.id}-st40{fill:url(#sx_37_);}
              .sx-${info.id}-st41{fill:url(#sx_38_);}
              .sx-${info.id}-st42{fill:url(#sx_39_);}
              .sx-${info.id}-st43{fill:url(#sx_40_);}
              .sx-${info.id}-st44{fill:url(#sx_41_);}
              .sx-${info.id}-st45{fill:url(#sx_42_);}
              .sx-${info.id}-st46{fill:url(#sx_43_);}
              .sx-${info.id}-st47{fill:url(#sx_44_);}
              .sx-${info.id}-st48{fill:url(#sx_45_);}
              .sx-${info.id}-st49{fill:url(#sx_46_);}
              .sx-${info.id}-st50{fill:url(#sx_47_);}
              .sx-${info.id}-st51{fill:url(#sx_48_);}
              .sx-${info.id}-st52{fill:url(#sx_49_);}
              .sx-${info.id}-st53{fill:url(#sx_50_);}
              .sx-${info.id}-st54{fill:url(#sx_51_);}
              .sx-${info.id}-st55{fill:url(#sx_52_);}
              .sx-${info.id}-st56{fill:url(#sx_53_);}
              .sx-${info.id}-st57{fill:url(#sx_54_);}
              .sx-${info.id}-st58{fill:url(#sx_55_);}
              .sx-${info.id}-st59{fill:url(#sx_56_);}
              .sx-${info.id}-st60{fill:url(#sx_57_);}
              .sx-${info.id}-st61{fill:url(#sx_58_);}
              .sx-${info.id}-st62{fill:url(#sx_59_);}
              .sx-${info.id}-st63{fill:url(#sx_60_);}
              .sx-${info.id}-st64{fill:url(#sx_61_);}
              .sx-${info.id}-st65{fill:url(#sx_62_);}
              .sx-${info.id}-st66{fill:url(#sx_63_);}
              .sx-${info.id}-st67{fill:url(#sx_64_);}
              .sx-${info.id}-st68{fill:url(#sx_65_);}
              .sx-${info.id}-st69{fill:url(#sx_66_);}
              .sx-${info.id}-st70{fill:url(#sx_67_);}
              .sx-${info.id}-st71{fill:url(#sx_68_);}
              .sx-${info.id}-st72{fill:url(#sx_69_);}
              .sx-${info.id}-st73{fill:url(#sx_70_);}
              .sx-${info.id}-st74{fill:url(#sx_71_);}
              .sx-${info.id}-st75{fill:url(#sx_72_);}
              .sx-${info.id}-st76{fill:url(#sx_73_);}
              .sx-${info.id}-st77{fill:url(#sx_74_);}
              .sx-${info.id}-st78{fill:url(#sx_75_);}
              .sx-${info.id}-st79{fill:url(#sx_76_);}
              .sx-${info.id}-st80{fill:#FAFAFA;}
              .sx-${info.id}-st81{fill:#999999;}
              .sx-${info.id}-st82{fill:#EBEBEB;}
              .sx-${info.id}-st83{fill:url(#sx_77_);}
              .sx-${info.id}-st84{fill:url(#sx_78_);}
              .sx-${info.id}-st85{fill:url(#sx_79_);}
              .sx-${info.id}-st86{fill:url(#sx_80_);}
              .sx-${info.id}-st87{fill:url(#sx_81_);}
              .sx-${info.id}-st88{fill:url(#sx_82_);}
              .sx-${info.id}-st89{fill:url(#sx_83_);}
              .sx-${info.id}-st90{fill:url(#sx_84_);}
              .sx-${info.id}-st91{fill:url(#sx_85_);}
              .sx-${info.id}-st92{fill:url(#sx_86_);}
              .sx-${info.id}-st93{fill:url(#sx_87_);}
              .sx-${info.id}-st94{fill:url(#sx_88_);}
              .sx-${info.id}-st95{fill:url(#sx_89_);}
              .sx-${info.id}-st96{fill:url(#sx_90_);}
              .sx-${info.id}-st97{fill:url(#sx_91_);}
              .sx-${info.id}-st98{fill:url(#sx_92_);}
              .sx-${info.id}-st99{fill:url(#sx_93_);}
              .sx-${info.id}-st100{fill:url(#sx_94_);}
              .sx-${info.id}-st101{fill:url(#sx_95_);}
              .sx-${info.id}-st102{fill:url(#sx_96_);}
              .sx-${info.id}-st103{fill:url(#sx_97_);}
              .sx-${info.id}-st104{fill:url(#sx_98_);}
              .sx-${info.id}-st105{fill:url(#sx_99_);}
              .sx-${info.id}-st106{fill:url(#sx_100_);}
              .sx-${info.id}-st107{fill:url(#sx_101_);}
              .sx-${info.id}-st108{fill:url(#sx_102_);}
              .sx-${info.id}-st109{fill:url(#sx_103_);}
              .sx-${info.id}-st110{fill:url(#sx_104_);}
              .sx-${info.id}-st111{fill:url(#sx_105_);}
              .sx-${info.id}-st112{fill:url(#sx_106_);}
              .sx-${info.id}-st113{fill:url(#sx_107_);}
              .sx-${info.id}-st114{fill:url(#sx_108_);}
              .sx-${info.id}-st115{fill:url(#sx_109_);}
              .sx-${info.id}-st116{fill:url(#sx_110_);}
              .sx-${info.id}-st117{fill:url(#sx_111_);}
              .sx-${info.id}-st118{fill:url(#sx_112_);}
      </style>
      `
        "
      ></defs>
      <g>
        <rect
          x="283.96"
          y="166.2"
          :class="`sx-${info.id}-st0`"
          width="13.69"
          height="39.51"
        />
        <linearGradient
          id="sx_1_"
          gradientUnits="userSpaceOnUse"
          x1="288.8365"
          y1="193.2616"
          x2="281.8151"
          y2="184.006"
        >
          <stop offset="0" style="stop-color:#72373B" />
          <stop offset="1" style="stop-color:#321613" />
        </linearGradient>
        <polygon
          :class="`sx-${info.id}-st1`"
          points="293.64,194.17 291.41,195.73 277.66,183.96 279.89,182.39 	"
        />
        <rect
          x="2.7"
          y="236.76"
          :class="`sx-${info.id}-st2`"
          width="13.28"
          height="38.27"
        />
        <polygon
          :class="`sx-${info.id}-st3`"
          points="18.32,273.46 15.98,275.03 15.98,236.76 18.32,236.76 	"
        />
        <rect
          x="214.24"
          y="236.76"
          :class="`sx-${info.id}-st2`"
          width="13.28"
          height="38.27"
        />
        <polygon
          :class="`sx-${info.id}-st4`"
          points="236.11,267.22 227.52,275.03 227.52,235.97 236.11,228.16 	"
        />
        <polygon
          :class="`sx-${info.id}-st4`"
          points="299.38,206.61 290.78,214.42 290.78,175.37 299.38,168.34 	"
        />
        <rect
          x="289.12"
          y="169.78"
          :class="`sx-${info.id}-st2`"
          width="1.67"
          height="44.65"
        />
        <linearGradient
          id="sx_2_"
          gradientUnits="userSpaceOnUse"
          x1="235.1886"
          y1="229.6088"
          x2="248.5119"
          y2="229.6088"
        >
          <stop offset="0" style="stop-color:#72373B" />
          <stop offset="1" style="stop-color:#321613" />
        </linearGradient>
        <polygon
          :class="`sx-${info.id}-st5`"
          points="248.51,216.5 235.19,250.61 235.19,242.71 248.51,208.61 	"
        />
        <linearGradient
          id="sx_3_"
          gradientUnits="userSpaceOnUse"
          x1="33.4128"
          y1="246.9535"
          x2="36.0029"
          y2="232.3548"
        >
          <stop offset="0" style="stop-color:#BC5862" />
          <stop offset="1" style="stop-color:#482A2A" />
        </linearGradient>
        <polygon
          :class="`sx-${info.id}-st6`"
          points="51.18,236.37 17.15,255.89 17.15,249.06 51.18,229.54 	"
        />

        <linearGradient
          id="sx_4_"
          gradientUnits="userSpaceOnUse"
          x1="238.9118"
          y1="246.9535"
          x2="241.5019"
          y2="232.3548"
          gradientTransform="matrix(-1 0 0 1 439.7458 0)"
        >
          <stop offset="0" style="stop-color:#BC5862" />
          <stop offset="1" style="stop-color:#482A2A" />
        </linearGradient>
        <polygon
          :class="`sx-${info.id}-st7`"
          points="183.07,236.37 217.1,255.89 217.1,249.06 183.07,229.54 	"
        />
        <linearGradient
          id="sx_5_"
          gradientUnits="userSpaceOnUse"
          x1="115.1078"
          y1="236.7555"
          x2="115.1078"
          y2="222.542"
        >
          <stop offset="0" style="stop-color:#BC5862" />
          <stop offset="1" style="stop-color:#482A2A" />
        </linearGradient>
        <rect
          x="2.7"
          y="222.54"
          :class="`sx-${info.id}-st8`"
          width="224.82"
          height="14.21"
        />
        <linearGradient
          id="sx_6_"
          gradientUnits="userSpaceOnUse"
          x1="267.0378"
          y1="199.1747"
          x2="260.5632"
          y2="192.4478"
        >
          <stop offset="0" style="stop-color:#72373B" />
          <stop offset="1" style="stop-color:#321613" />
        </linearGradient>
        <polygon
          :class="`sx-${info.id}-st9`"
          points="299.38,168.34 227.52,236.76 227.52,222.54 299.38,154.13 	"
        />
        <g>
          <g>
            <linearGradient
              id="sx_7_"
              gradientUnits="userSpaceOnUse"
              x1="76.6068"
              y1="146.3945"
              x2="-17.7673"
              y2="54.228"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <rect
              x="0"
              y="70.69"
              :class="`sx-${info.id}-st10`"
              width="76.16"
              height="76.16"
            />
          </g>
          <g>
            <linearGradient
              id="sx_8_"
              gradientUnits="userSpaceOnUse"
              x1="38.0808"
              y1="145.7466"
              x2="38.0808"
              y2="71.7927"
            >
              <stop offset="0" style="stop-color:#B4B4B4" />
              <stop offset="1" style="stop-color:#C5C5C5" />
            </linearGradient>
            <rect
              x="1.1"
              y="71.79"
              :class="`sx-${info.id}-st11`"
              width="73.95"
              height="73.95"
            />
          </g>
          <linearGradient
            id="sx_9_"
            gradientUnits="userSpaceOnUse"
            x1="6.9205"
            y1="74.4934"
            x2="69.241"
            y2="143.0459"
          >
            <stop offset="0" style="stop-color:#666666" />
            <stop offset="1" style="stop-color:#FFFFFF" />
          </linearGradient>
          <path
            :class="`sx-${info.id}-st12`"
            d="M66.09,75.1c3.12,0,5.66,2.53,5.66,5.66v56.02c0,3.12-2.53,5.66-5.66,5.66H10.07
                  c-3.12,0-5.66-2.53-5.66-5.66V80.76c0-3.12,2.53-5.66,5.66-5.66H66.09 M66.09,74H10.07c-3.73,0-6.76,3.03-6.76,6.76v56.02
                  c0,3.73,3.03,6.76,6.76,6.76h56.02c3.73,0,6.76-3.03,6.76-6.76V80.76C72.85,77.03,69.82,74,66.09,74L66.09,74z"
          />
          <g>
            <linearGradient
              id="sx_10_"
              gradientUnits="userSpaceOnUse"
              x1="74.5021"
              y1="136.1288"
              x2="11.6561"
              y2="88.9199"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <path
              :class="`sx-${info.id}-st13`"
              d="M66.09,76.21c2.51,0,4.55,2.04,4.55,4.55v56.02c0,2.51-2.04,4.55-4.55,4.55H10.07
                    c-2.51,0-4.55-2.04-4.55-4.55V80.76c0-2.51,2.04-4.55,4.55-4.55H66.09 M66.09,75.1H10.07c-3.12,0-5.66,2.53-5.66,5.66v56.02
                    c0,3.12,2.53,5.66,5.66,5.66h56.02c3.12,0,5.66-2.53,5.66-5.66V80.76C71.75,77.64,69.21,75.1,66.09,75.1L66.09,75.1z"
            />
          </g>
          <g>
            <g>
              <linearGradient
                id="sx_11_"
                gradientUnits="userSpaceOnUse"
                x1="24.1129"
                y1="79.8847"
                x2="51.7313"
                y2="136.9984"
              >
                <stop offset="0" style="stop-color:#666666" />
                <stop offset="1" style="stop-color:#FFFFFF" />
              </linearGradient>
              <circle
                :class="`sx-${info.id}-st14`"
                cx="38.08"
                cy="108.77"
                r="31.18"
              />
            </g>
            <g>
              <linearGradient
                id="sx_12_"
                gradientUnits="userSpaceOnUse"
                x1="38.0808"
                y1="138.2961"
                x2="38.0808"
                y2="79.2433"
              >
                <stop offset="0" style="stop-color:#7E7E7C" />
                <stop offset="0.0837" style="stop-color:#838381" />
                <stop offset="0.1835" style="stop-color:#919190" />
                <stop offset="0.2914" style="stop-color:#A9A9A8" />
                <stop offset="0.4051" style="stop-color:#CACAC9" />
                <stop offset="0.5223" style="stop-color:#F4F4F4" />
                <stop offset="0.55" style="stop-color:#FFFFFF" />
              </linearGradient>
              <circle
                :class="`sx-${info.id}-st15`"
                cx="38.08"
                cy="108.77"
                r="29.53"
              />
            </g>
            <g>
              <radialGradient
                id="sx_13_"
                cx="33.6656"
                cy="106.0102"
                r="29.5264"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.5754"
                  style="stop-color:#525451;stop-opacity:0"
                />
                <stop offset="1" style="stop-color:#525451;stop-opacity:0.6" />
              </radialGradient>
              <circle
                :class="`sx-${info.id}-st16`"
                cx="38.08"
                cy="108.77"
                r="29.53"
              />
            </g>
          </g>
        </g>
        <g>
          <g>
            <linearGradient
              id="sx_14_"
              gradientUnits="userSpaceOnUse"
              x1="152.7683"
              y1="146.3945"
              x2="58.3942"
              y2="54.228"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <rect
              x="76.16"
              y="70.69"
              :class="`sx-${info.id}-st17`"
              width="76.16"
              height="76.16"
            />
          </g>
          <g>
            <linearGradient
              id="sx_15_"
              gradientUnits="userSpaceOnUse"
              x1="114.2423"
              y1="145.7466"
              x2="114.2423"
              y2="71.7927"
            >
              <stop offset="0" style="stop-color:#B4B4B4" />
              <stop offset="1" style="stop-color:#C5C5C5" />
            </linearGradient>
            <rect
              x="77.27"
              y="71.79"
              :class="`sx-${info.id}-st18`"
              width="73.95"
              height="73.95"
            />
          </g>
          <linearGradient
            id="sx_16_"
            gradientUnits="userSpaceOnUse"
            x1="83.082"
            y1="74.4934"
            x2="145.4025"
            y2="143.0459"
          >
            <stop offset="0" style="stop-color:#666666" />
            <stop offset="1" style="stop-color:#FFFFFF" />
          </linearGradient>
          <path
            :class="`sx-${info.id}-st19`"
            d="M142.25,75.1c3.12,0,5.66,2.53,5.66,5.66v56.02c0,3.12-2.53,5.66-5.66,5.66H86.23
                  c-3.12,0-5.66-2.53-5.66-5.66V80.76c0-3.12,2.53-5.66,5.66-5.66H142.25 M142.25,74H86.23c-3.73,0-6.76,3.03-6.76,6.76v56.02
                  c0,3.73,3.03,6.76,6.76,6.76h56.02c3.73,0,6.76-3.03,6.76-6.76V80.76C149.01,77.03,145.98,74,142.25,74L142.25,74z"
          />
          <g>
            <linearGradient
              id="sx_17_"
              gradientUnits="userSpaceOnUse"
              x1="150.6636"
              y1="136.1288"
              x2="87.8176"
              y2="88.9199"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <path
              :class="`sx-${info.id}-st20`"
              d="M142.25,76.21c2.51,0,4.55,2.04,4.55,4.55v56.02c0,2.51-2.04,4.55-4.55,4.55H86.23
                    c-2.51,0-4.55-2.04-4.55-4.55V80.76c0-2.51,2.04-4.55,4.55-4.55H142.25 M142.25,75.1H86.23c-3.12,0-5.66,2.53-5.66,5.66v56.02
                    c0,3.12,2.53,5.66,5.66,5.66h56.02c3.12,0,5.66-2.53,5.66-5.66V80.76C147.91,77.64,145.38,75.1,142.25,75.1L142.25,75.1z"
            />
          </g>
          <g>
            <g>
              <linearGradient
                id="sx_18_"
                gradientUnits="userSpaceOnUse"
                x1="100.2744"
                y1="79.8847"
                x2="127.8928"
                y2="136.9984"
              >
                <stop offset="0" style="stop-color:#666666" />
                <stop offset="1" style="stop-color:#FFFFFF" />
              </linearGradient>
              <circle
                :class="`sx-${info.id}-st21`"
                cx="114.24"
                cy="108.77"
                r="31.18"
              />
            </g>
            <g>
              <linearGradient
                id="sx_19_"
                gradientUnits="userSpaceOnUse"
                x1="114.2423"
                y1="138.2961"
                x2="114.2423"
                y2="79.2433"
              >
                <stop offset="0" style="stop-color:#7E7E7C" />
                <stop offset="0.0837" style="stop-color:#838381" />
                <stop offset="0.1835" style="stop-color:#919190" />
                <stop offset="0.2914" style="stop-color:#A9A9A8" />
                <stop offset="0.4051" style="stop-color:#CACAC9" />
                <stop offset="0.5223" style="stop-color:#F4F4F4" />
                <stop offset="0.55" style="stop-color:#FFFFFF" />
              </linearGradient>
              <circle
                :class="`sx-${info.id}-st22`"
                cx="114.24"
                cy="108.77"
                r="29.53"
              />
            </g>
            <g>
              <radialGradient
                id="sx_20_"
                cx="109.8271"
                cy="106.0102"
                r="29.5264"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.5754"
                  style="stop-color:#525451;stop-opacity:0"
                />
                <stop offset="1" style="stop-color:#525451;stop-opacity:0.6" />
              </radialGradient>
              <circle
                :class="`sx-${info.id}-st23`"
                cx="114.24"
                cy="108.77"
                r="29.53"
              />
            </g>
          </g>
        </g>
        <g>
          <g>
            <linearGradient
              id="sx_21_"
              gradientUnits="userSpaceOnUse"
              x1="228.9298"
              y1="146.3945"
              x2="134.5558"
              y2="54.228"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <rect
              x="152.32"
              y="70.69"
              :class="`sx-${info.id}-st24`"
              width="76.16"
              height="76.16"
            />
          </g>
          <g>
            <linearGradient
              id="sx_22_"
              gradientUnits="userSpaceOnUse"
              x1="190.4038"
              y1="145.7466"
              x2="190.4038"
              y2="71.7927"
            >
              <stop offset="0" style="stop-color:#B4B4B4" />
              <stop offset="1" style="stop-color:#C5C5C5" />
            </linearGradient>
            <rect
              x="153.43"
              y="71.79"
              :class="`sx-${info.id}-st25`"
              width="73.95"
              height="73.95"
            />
          </g>
          <linearGradient
            id="sx_23_"
            gradientUnits="userSpaceOnUse"
            x1="159.2435"
            y1="74.4934"
            x2="221.564"
            y2="143.0459"
          >
            <stop offset="0" style="stop-color:#666666" />
            <stop offset="1" style="stop-color:#FFFFFF" />
          </linearGradient>
          <path
            :class="`sx-${info.id}-st26`"
            d="M218.41,75.1c3.12,0,5.66,2.53,5.66,5.66v56.02c0,3.12-2.53,5.66-5.66,5.66H162.4
                  c-3.12,0-5.66-2.53-5.66-5.66V80.76c0-3.12,2.53-5.66,5.66-5.66H218.41 M218.41,74H162.4c-3.73,0-6.76,3.03-6.76,6.76v56.02
                  c0,3.73,3.03,6.76,6.76,6.76h56.02c3.73,0,6.76-3.03,6.76-6.76V80.76C225.17,77.03,222.14,74,218.41,74L218.41,74z"
          />
          <g>
            <linearGradient
              id="sx_24_"
              gradientUnits="userSpaceOnUse"
              x1="226.8251"
              y1="136.1288"
              x2="163.9792"
              y2="88.9199"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <path
              :class="`sx-${info.id}-st27`"
              d="M218.41,76.21c2.51,0,4.55,2.04,4.55,4.55v56.02c0,2.51-2.04,4.55-4.55,4.55H162.4
                    c-2.51,0-4.55-2.04-4.55-4.55V80.76c0-2.51,2.04-4.55,4.55-4.55H218.41 M218.41,75.1H162.4c-3.12,0-5.66,2.53-5.66,5.66v56.02
                    c0,3.12,2.53,5.66,5.66,5.66h56.02c3.12,0,5.66-2.53,5.66-5.66V80.76C224.07,77.64,221.54,75.1,218.41,75.1L218.41,75.1z"
            />
          </g>
          <g>
            <g>
              <linearGradient
                id="sx_25_"
                gradientUnits="userSpaceOnUse"
                x1="176.436"
                y1="79.8847"
                x2="204.0543"
                y2="136.9984"
              >
                <stop offset="0" style="stop-color:#666666" />
                <stop offset="1" style="stop-color:#FFFFFF" />
              </linearGradient>
              <circle
                :class="`sx-${info.id}-st28`"
                cx="190.4"
                cy="108.77"
                r="31.18"
              />
            </g>
            <g>
              <linearGradient
                id="sx_26_"
                gradientUnits="userSpaceOnUse"
                x1="190.4038"
                y1="138.2961"
                x2="190.4038"
                y2="79.2433"
              >
                <stop offset="0" style="stop-color:#7E7E7C" />
                <stop offset="0.0837" style="stop-color:#838381" />
                <stop offset="0.1835" style="stop-color:#919190" />
                <stop offset="0.2914" style="stop-color:#A9A9A8" />
                <stop offset="0.4051" style="stop-color:#CACAC9" />
                <stop offset="0.5223" style="stop-color:#F4F4F4" />
                <stop offset="0.55" style="stop-color:#FFFFFF" />
              </linearGradient>
              <circle
                :class="`sx-${info.id}-st29`"
                cx="190.4"
                cy="108.77"
                r="29.53"
              />
            </g>
            <g>
              <radialGradient
                id="sx_27_"
                cx="185.9886"
                cy="106.0102"
                r="29.5264"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.5754"
                  style="stop-color:#525451;stop-opacity:0"
                />
                <stop offset="1" style="stop-color:#525451;stop-opacity:0.6" />
              </radialGradient>
              <circle
                :class="`sx-${info.id}-st30`"
                cx="190.4"
                cy="108.77"
                r="29.53"
              />
            </g>
          </g>
        </g>
        <g>
          <g>
            <linearGradient
              id="sx_28_"
              gradientUnits="userSpaceOnUse"
              x1="76.6068"
              y1="222.556"
              x2="-17.7673"
              y2="130.3895"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <rect
              x="0"
              y="146.85"
              :class="`sx-${info.id}-st31`"
              width="76.16"
              height="76.16"
            />
          </g>
          <g>
            <linearGradient
              id="sx_29_"
              gradientUnits="userSpaceOnUse"
              x1="38.0808"
              y1="221.9082"
              x2="38.0808"
              y2="147.9542"
            >
              <stop offset="0" style="stop-color:#B4B4B4" />
              <stop offset="1" style="stop-color:#C5C5C5" />
            </linearGradient>
            <rect
              x="1.1"
              y="147.95"
              :class="`sx-${info.id}-st32`"
              width="73.95"
              height="73.95"
            />
          </g>
          <linearGradient
            id="sx_30_"
            gradientUnits="userSpaceOnUse"
            x1="6.9205"
            y1="150.6549"
            x2="69.241"
            y2="219.2075"
          >
            <stop offset="0" style="stop-color:#666666" />
            <stop offset="1" style="stop-color:#FFFFFF" />
          </linearGradient>
          <path
            :class="`sx-${info.id}-st33`"
            d="M66.09,151.27c3.12,0,5.66,2.53,5.66,5.66v56.02c0,3.12-2.53,5.66-5.66,5.66H10.07
                  c-3.12,0-5.66-2.53-5.66-5.66v-56.02c0-3.12,2.53-5.66,5.66-5.66H66.09 M66.09,150.16H10.07c-3.73,0-6.76,3.03-6.76,6.76v56.02
                  c0,3.73,3.03,6.76,6.76,6.76h56.02c3.73,0,6.76-3.03,6.76-6.76v-56.02C72.85,153.19,69.82,150.16,66.09,150.16L66.09,150.16z"
          />
          <g>
            <linearGradient
              id="sx_31_"
              gradientUnits="userSpaceOnUse"
              x1="74.5021"
              y1="212.2903"
              x2="11.6561"
              y2="165.0814"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <path
              :class="`sx-${info.id}-st34`"
              d="M66.09,152.37c2.51,0,4.55,2.04,4.55,4.55v56.02c0,2.51-2.04,4.55-4.55,4.55H10.07
                    c-2.51,0-4.55-2.04-4.55-4.55v-56.02c0-2.51,2.04-4.55,4.55-4.55H66.09 M66.09,151.27H10.07c-3.12,0-5.66,2.53-5.66,5.66v56.02
                    c0,3.12,2.53,5.66,5.66,5.66h56.02c3.12,0,5.66-2.53,5.66-5.66v-56.02C71.75,153.8,69.21,151.27,66.09,151.27L66.09,151.27z"
            />
          </g>
          <g>
            <g>
              <linearGradient
                id="sx_32_"
                gradientUnits="userSpaceOnUse"
                x1="24.1129"
                y1="156.0462"
                x2="51.7313"
                y2="213.1599"
              >
                <stop offset="0" style="stop-color:#666666" />
                <stop offset="1" style="stop-color:#FFFFFF" />
              </linearGradient>
              <circle
                :class="`sx-${info.id}-st35`"
                cx="38.08"
                cy="184.93"
                r="31.18"
              />
            </g>
            <g>
              <linearGradient
                id="sx_33_"
                gradientUnits="userSpaceOnUse"
                x1="38.0808"
                y1="214.4576"
                x2="38.0808"
                y2="155.4048"
              >
                <stop offset="0" style="stop-color:#7E7E7C" />
                <stop offset="0.0837" style="stop-color:#838381" />
                <stop offset="0.1835" style="stop-color:#919190" />
                <stop offset="0.2914" style="stop-color:#A9A9A8" />
                <stop offset="0.4051" style="stop-color:#CACAC9" />
                <stop offset="0.5223" style="stop-color:#F4F4F4" />
                <stop offset="0.55" style="stop-color:#FFFFFF" />
              </linearGradient>
              <circle
                :class="`sx-${info.id}-st36`"
                cx="38.08"
                cy="184.93"
                r="29.53"
              />
            </g>
            <g>
              <radialGradient
                id="sx_34_"
                cx="33.6656"
                cy="182.1717"
                r="29.5264"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.5754"
                  style="stop-color:#525451;stop-opacity:0"
                />
                <stop offset="1" style="stop-color:#525451;stop-opacity:0.6" />
              </radialGradient>
              <circle
                :class="`sx-${info.id}-st37`"
                cx="38.08"
                cy="184.93"
                r="29.53"
              />
            </g>
          </g>
        </g>
        <g>
          <g>
            <linearGradient
              id="sx_35_"
              gradientUnits="userSpaceOnUse"
              x1="152.7683"
              y1="222.556"
              x2="58.3942"
              y2="130.3895"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <rect
              x="76.16"
              y="146.85"
              :class="`sx-${info.id}-st38`"
              width="76.16"
              height="76.16"
            />
          </g>
          <g>
            <linearGradient
              id="sx_36_"
              gradientUnits="userSpaceOnUse"
              x1="114.2423"
              y1="221.9082"
              x2="114.2423"
              y2="147.9542"
            >
              <stop offset="0" style="stop-color:#B4B4B4" />
              <stop offset="1" style="stop-color:#C5C5C5" />
            </linearGradient>
            <rect
              x="77.27"
              y="147.95"
              :class="`sx-${info.id}-st39`"
              width="73.95"
              height="73.95"
            />
          </g>
          <linearGradient
            id="sx_37_"
            gradientUnits="userSpaceOnUse"
            x1="83.082"
            y1="150.6549"
            x2="145.4025"
            y2="219.2075"
          >
            <stop offset="0" style="stop-color:#666666" />
            <stop offset="1" style="stop-color:#FFFFFF" />
          </linearGradient>
          <path
            :class="`sx-${info.id}-st40`"
            d="M142.25,151.27c3.12,0,5.66,2.53,5.66,5.66v56.02c0,3.12-2.53,5.66-5.66,5.66H86.23
                  c-3.12,0-5.66-2.53-5.66-5.66v-56.02c0-3.12,2.53-5.66,5.66-5.66H142.25 M142.25,150.16H86.23c-3.73,0-6.76,3.03-6.76,6.76v56.02
                  c0,3.73,3.03,6.76,6.76,6.76h56.02c3.73,0,6.76-3.03,6.76-6.76v-56.02C149.01,153.19,145.98,150.16,142.25,150.16L142.25,150.16z"
          />
          <g>
            <linearGradient
              id="sx_38_"
              gradientUnits="userSpaceOnUse"
              x1="150.6636"
              y1="212.2903"
              x2="87.8176"
              y2="165.0814"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <path
              :class="`sx-${info.id}-st41`"
              d="M142.25,152.37c2.51,0,4.55,2.04,4.55,4.55v56.02c0,2.51-2.04,4.55-4.55,4.55H86.23
                    c-2.51,0-4.55-2.04-4.55-4.55v-56.02c0-2.51,2.04-4.55,4.55-4.55H142.25 M142.25,151.27H86.23c-3.12,0-5.66,2.53-5.66,5.66v56.02
                    c0,3.12,2.53,5.66,5.66,5.66h56.02c3.12,0,5.66-2.53,5.66-5.66v-56.02C147.91,153.8,145.38,151.27,142.25,151.27L142.25,151.27z"
            />
          </g>
          <g>
            <g>
              <linearGradient
                id="sx_39_"
                gradientUnits="userSpaceOnUse"
                x1="100.2744"
                y1="156.0462"
                x2="127.8928"
                y2="213.1599"
              >
                <stop offset="0" style="stop-color:#666666" />
                <stop offset="1" style="stop-color:#FFFFFF" />
              </linearGradient>
              <circle
                :class="`sx-${info.id}-st42`"
                cx="114.24"
                cy="184.93"
                r="31.18"
              />
            </g>
            <g>
              <linearGradient
                id="sx_40_"
                gradientUnits="userSpaceOnUse"
                x1="114.2423"
                y1="214.4576"
                x2="114.2423"
                y2="155.4048"
              >
                <stop offset="0" style="stop-color:#7E7E7C" />
                <stop offset="0.0837" style="stop-color:#838381" />
                <stop offset="0.1835" style="stop-color:#919190" />
                <stop offset="0.2914" style="stop-color:#A9A9A8" />
                <stop offset="0.4051" style="stop-color:#CACAC9" />
                <stop offset="0.5223" style="stop-color:#F4F4F4" />
                <stop offset="0.55" style="stop-color:#FFFFFF" />
              </linearGradient>
              <circle
                :class="`sx-${info.id}-st43`"
                cx="114.24"
                cy="184.93"
                r="29.53"
              />
            </g>
            <g>
              <radialGradient
                id="sx_41_"
                cx="109.8271"
                cy="182.1717"
                r="29.5264"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.5754"
                  style="stop-color:#525451;stop-opacity:0"
                />
                <stop offset="1" style="stop-color:#525451;stop-opacity:0.6" />
              </radialGradient>
              <circle
                :class="`sx-${info.id}-st44`"
                cx="114.24"
                cy="184.93"
                r="29.53"
              />
            </g>
          </g>
        </g>
        <g>
          <g>
            <linearGradient
              id="sx_42_"
              gradientUnits="userSpaceOnUse"
              x1="228.9298"
              y1="222.556"
              x2="134.5558"
              y2="130.3895"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <rect
              x="152.32"
              y="146.85"
              :class="`sx-${info.id}-st45`"
              width="76.16"
              height="76.16"
            />
          </g>
          <g>
            <linearGradient
              id="sx_43_"
              gradientUnits="userSpaceOnUse"
              x1="190.4038"
              y1="221.9082"
              x2="190.4038"
              y2="147.9542"
            >
              <stop offset="0" style="stop-color:#B4B4B4" />
              <stop offset="1" style="stop-color:#C5C5C5" />
            </linearGradient>
            <rect
              x="153.43"
              y="147.95"
              :class="`sx-${info.id}-st46`"
              width="73.95"
              height="73.95"
            />
          </g>
          <linearGradient
            id="sx_44_"
            gradientUnits="userSpaceOnUse"
            x1="159.2435"
            y1="150.6549"
            x2="221.564"
            y2="219.2075"
          >
            <stop offset="0" style="stop-color:#666666" />
            <stop offset="1" style="stop-color:#FFFFFF" />
          </linearGradient>
          <path
            :class="`sx-${info.id}-st47`"
            d="M218.41,151.27c3.12,0,5.66,2.53,5.66,5.66v56.02c0,3.12-2.53,5.66-5.66,5.66H162.4
                  c-3.12,0-5.66-2.53-5.66-5.66v-56.02c0-3.12,2.53-5.66,5.66-5.66H218.41 M218.41,150.16H162.4c-3.73,0-6.76,3.03-6.76,6.76v56.02
                  c0,3.73,3.03,6.76,6.76,6.76h56.02c3.73,0,6.76-3.03,6.76-6.76v-56.02C225.17,153.19,222.14,150.16,218.41,150.16L218.41,150.16z"
          />
          <g>
            <linearGradient
              id="sx_45_"
              gradientUnits="userSpaceOnUse"
              x1="226.8251"
              y1="212.2903"
              x2="163.9792"
              y2="165.0814"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <path
              :class="`sx-${info.id}-st48`"
              d="M218.41,152.37c2.51,0,4.55,2.04,4.55,4.55v56.02c0,2.51-2.04,4.55-4.55,4.55H162.4
                    c-2.51,0-4.55-2.04-4.55-4.55v-56.02c0-2.51,2.04-4.55,4.55-4.55H218.41 M218.41,151.27H162.4c-3.12,0-5.66,2.53-5.66,5.66v56.02
                    c0,3.12,2.53,5.66,5.66,5.66h56.02c3.12,0,5.66-2.53,5.66-5.66v-56.02C224.07,153.8,221.54,151.27,218.41,151.27L218.41,151.27z"
            />
          </g>
          <g>
            <g>
              <linearGradient
                id="sx_46_"
                gradientUnits="userSpaceOnUse"
                x1="176.436"
                y1="156.0462"
                x2="204.0543"
                y2="213.1599"
              >
                <stop offset="0" style="stop-color:#666666" />
                <stop offset="1" style="stop-color:#FFFFFF" />
              </linearGradient>
              <circle
                :class="`sx-${info.id}-st49`"
                cx="190.4"
                cy="184.93"
                r="31.18"
              />
            </g>
            <g>
              <linearGradient
                id="sx_47_"
                gradientUnits="userSpaceOnUse"
                x1="190.4038"
                y1="214.4576"
                x2="190.4038"
                y2="155.4048"
              >
                <stop offset="0" style="stop-color:#7E7E7C" />
                <stop offset="0.0837" style="stop-color:#838381" />
                <stop offset="0.1835" style="stop-color:#919190" />
                <stop offset="0.2914" style="stop-color:#A9A9A8" />
                <stop offset="0.4051" style="stop-color:#CACAC9" />
                <stop offset="0.5223" style="stop-color:#F4F4F4" />
                <stop offset="0.55" style="stop-color:#FFFFFF" />
              </linearGradient>
              <circle
                :class="`sx-${info.id}-st50`"
                cx="190.4"
                cy="184.93"
                r="29.53"
              />
            </g>
            <g>
              <radialGradient
                id="sx_48_"
                cx="185.9886"
                cy="182.1717"
                r="29.5264"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.5754"
                  style="stop-color:#525451;stop-opacity:0"
                />
                <stop offset="1" style="stop-color:#525451;stop-opacity:0.6" />
              </radialGradient>
              <circle
                :class="`sx-${info.id}-st51`"
                cx="190.4"
                cy="184.93"
                r="29.53"
              />
            </g>
          </g>
        </g>
        <g>
          <g>
            <linearGradient
              id="sx_49_"
              gradientUnits="userSpaceOnUse"
              x1="307.7687"
              y1="-71.7815"
              x2="244.7451"
              y2="-133.3309"
              gradientTransform="matrix(1 -0.6912 0 1 0 348.9428)"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <polygon
              :class="`sx-${info.id}-st52`"
              points="299.89,77.93 264.19,112.39 264.19,36.23 299.89,1.77 			"
            />
          </g>
          <g>
            <linearGradient
              id="sx_50_"
              gradientUnits="userSpaceOnUse"
              x1="259.6146"
              y1="29.8162"
              x2="304.7146"
              y2="84.6437"
            >
              <stop offset="0" style="stop-color:#A8A8A8" />
              <stop offset="1" style="stop-color:#848484" />
            </linearGradient>
            <polygon
              :class="`sx-${info.id}-st53`"
              points="299.38,77.33 264.71,110.79 264.71,36.83 299.38,3.37 			"
            />
          </g>

          <linearGradient
            id="sx_51_"
            gradientUnits="userSpaceOnUse"
            x1="260.4373"
            y1="-120.6714"
            x2="303.6443"
            y2="-73.1437"
            gradientTransform="matrix(1 -0.6912 0 1 0 348.9428)"
          >
            <stop offset="0" style="stop-color:#666666" />
            <stop offset="1" style="stop-color:#FFFFFF" />
          </linearGradient>
          <path
            :class="`sx-${info.id}-st54`"
            d="M295.17,10.74c1.46-1.41,2.65-0.03,2.65,3.1v56.02c0,3.12-1.19,6.8-2.65,8.22l-26.26,25.35
                  c-1.46,1.41-2.65,0.03-2.65-3.1V44.3c0-3.12,1.19-6.8,2.65-8.22L295.17,10.74 M295.17,9.64l-26.26,25.35
                  c-1.75,1.69-3.17,6.09-3.17,9.82v56.02c0,3.73,1.42,5.39,3.17,3.7l26.26-25.35c1.75-1.69,3.17-6.09,3.17-9.82V13.34
                  C298.34,9.61,296.92,7.95,295.17,9.64L295.17,9.64z"
          />
          <g>
            <linearGradient
              id="sx_52_"
              gradientUnits="userSpaceOnUse"
              x1="305.5404"
              y1="-79.2551"
              x2="264.9912"
              y2="-109.715"
              gradientTransform="matrix(1 -0.6912 0 1 0 348.9428)"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <path
              :class="`sx-${info.id}-st55`"
              d="M295.17,11.84c1.18-1.14,2.13-0.02,2.13,2.49v56.02c0,2.51-0.96,5.48-2.13,6.61l-26.26,25.35
                    c-1.18,1.14-2.13,0.02-2.13-2.49V43.8c0-2.51,0.96-5.48,2.13-6.61L295.17,11.84 M295.17,10.74l-26.26,25.35
                    c-1.46,1.41-2.65,5.09-2.65,8.22v56.02c0,3.12,1.19,4.51,2.65,3.1l26.26-25.35c1.46-1.41,2.65-5.09,2.65-8.22V13.84
                    C297.82,10.71,296.64,9.33,295.17,10.74L295.17,10.74z"
            />
          </g>
          <g>
            <linearGradient
              id="sx_53_"
              gradientUnits="userSpaceOnUse"
              x1="269.8271"
              y1="54.4852"
              x2="293.7616"
              y2="59.9702"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <path
              :class="`sx-${info.id}-st56`"
              d="M298.84,44.19c0.46,16.78-6.19,36.36-14.85,43.73s-16.06-0.25-16.52-17.03
                    c-0.46-16.78,6.19-36.36,14.85-43.73S298.38,27.41,298.84,44.19z"
            />
          </g>
          <g>
            <linearGradient
              id="sx_54_"
              gradientUnits="userSpaceOnUse"
              x1="318.4941"
              y1="-34.4212"
              x2="318.4941"
              y2="-93.9654"
              gradientTransform="matrix(1.1475 -0.6608 0.0355 1.0073 -78.9681 332.6599)"
            >
              <stop offset="0" style="stop-color:#242424" />
              <stop offset="0.0781" style="stop-color:#292929" />
              <stop offset="0.1711" style="stop-color:#373737" />
              <stop offset="0.2718" style="stop-color:#4F4F4F" />
              <stop offset="0.3779" style="stop-color:#717171" />
              <stop offset="0.4871" style="stop-color:#9B9B9B" />
              <stop offset="0.55" style="stop-color:#B8B8B8" />
            </linearGradient>
            <path
              :class="`sx-${info.id}-st57`"
              d="M299.96,44.56c0.58,16.43-6,35.55-14.7,42.71c-8.7,7.16-16.22-0.35-16.8-16.78s6-35.55,14.7-42.71
                    C291.87,20.62,299.39,28.14,299.96,44.56z"
            />
          </g>
        </g>
        <g>
          <radialGradient
            id="sx_55_"
            cx="305.5009"
            cy="-81.8086"
            r="39.1377"
            gradientTransform="matrix(1.1475 -0.6608 0.0355 1.0073 -78.9681 332.6599)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.5754" style="stop-color:#525451;stop-opacity:0" />
            <stop offset="1" style="stop-color:#525451;stop-opacity:0.6" />
          </radialGradient>
          <path
            :class="`sx-${info.id}-st58`"
            d="M299.62,44.4c0.58,16.53-6.04,35.77-14.79,42.97c-8.75,7.21-16.32-0.35-16.9-16.88s6.04-35.77,14.79-42.97
                  S299.04,27.88,299.62,44.4z"
          />
        </g>
        <g>
          <g>
            <g>
              <linearGradient
                id="sx_56_"
                gradientUnits="userSpaceOnUse"
                x1="307.7687"
                y1="4.3801"
                x2="244.7451"
                y2="-57.1694"
                gradientTransform="matrix(1 -0.6912 0 1 0 348.9428)"
              >
                <stop offset="0" style="stop-color:#666666" />
                <stop offset="1" style="stop-color:#FFFFFF" />
              </linearGradient>
              <polygon
                :class="`sx-${info.id}-st59`"
                points="299.89,154.09 264.19,188.55 264.19,112.39 299.89,77.93 				"
              />
            </g>
            <g>
              <linearGradient
                id="sx_57_"
                gradientUnits="userSpaceOnUse"
                x1="259.6146"
                y1="105.9777"
                x2="304.7146"
                y2="160.8052"
              >
                <stop offset="0" style="stop-color:#A8A8A8" />
                <stop offset="1" style="stop-color:#848484" />
              </linearGradient>
              <polygon
                :class="`sx-${info.id}-st60`"
                points="299.38,153.49 264.71,186.95 264.71,112.99 299.38,79.53 				"
              />
            </g>

            <linearGradient
              id="sx_58_"
              gradientUnits="userSpaceOnUse"
              x1="260.4373"
              y1="-44.5099"
              x2="303.6443"
              y2="3.0178"
              gradientTransform="matrix(1 -0.6912 0 1 0 348.9428)"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <path
              :class="`sx-${info.id}-st61`"
              d="M295.17,86.9c1.46-1.41,2.65-0.03,2.65,3.1v56.02c0,3.12-1.19,6.8-2.65,8.22l-26.26,25.35
                    c-1.46,1.41-2.65,0.03-2.65-3.1v-56.02c0-3.12,1.19-6.8,2.65-8.22L295.17,86.9 M295.17,85.8l-26.26,25.35
                    c-1.75,1.69-3.17,6.09-3.17,9.82v56.02c0,3.73,1.42,5.39,3.17,3.7l26.26-25.35c1.75-1.69,3.17-6.09,3.17-9.82V89.5
                    C298.34,85.77,296.92,84.11,295.17,85.8L295.17,85.8z"
            />
            <g>
              <linearGradient
                id="sx_59_"
                gradientUnits="userSpaceOnUse"
                x1="305.5404"
                y1="-3.0935"
                x2="264.9912"
                y2="-33.5534"
                gradientTransform="matrix(1 -0.6912 0 1 0 348.9428)"
              >
                <stop offset="0" style="stop-color:#666666" />
                <stop offset="1" style="stop-color:#FFFFFF" />
              </linearGradient>
              <path
                :class="`sx-${info.id}-st62`"
                d="M295.17,88.01c1.18-1.14,2.13-0.02,2.13,2.49v56.02c0,2.51-0.96,5.48-2.13,6.61l-26.26,25.35
                      c-1.18,1.14-2.13,0.02-2.13-2.49v-56.02c0-2.51,0.96-5.48,2.13-6.61L295.17,88.01 M295.17,86.9l-26.26,25.35
                      c-1.46,1.41-2.65,5.09-2.65,8.22v56.02c0,3.12,1.19,4.51,2.65,3.1l26.26-25.35c1.46-1.41,2.65-5.09,2.65-8.22V90
                      C297.82,86.88,296.64,85.49,295.17,86.9L295.17,86.9z"
              />
            </g>
            <g>
              <linearGradient
                id="sx_60_"
                gradientUnits="userSpaceOnUse"
                x1="269.8271"
                y1="130.6467"
                x2="293.7616"
                y2="136.1317"
              >
                <stop offset="0" style="stop-color:#666666" />
                <stop offset="1" style="stop-color:#FFFFFF" />
              </linearGradient>
              <path
                :class="`sx-${info.id}-st63`"
                d="M298.84,120.35c0.46,16.78-6.19,36.36-14.85,43.73s-16.06-0.25-16.52-17.03
                      c-0.46-16.78,6.19-36.36,14.85-43.73S298.38,103.57,298.84,120.35z"
              />
            </g>
            <g>
              <linearGradient
                id="sx_61_"
                gradientUnits="userSpaceOnUse"
                x1="316.204"
                y1="39.6851"
                x2="316.204"
                y2="-19.8591"
                gradientTransform="matrix(1.1475 -0.6608 0.0355 1.0073 -78.9681 332.6599)"
              >
                <stop offset="0" style="stop-color:#242424" />
                <stop offset="0.0781" style="stop-color:#292929" />
                <stop offset="0.1711" style="stop-color:#373737" />
                <stop offset="0.2718" style="stop-color:#4F4F4F" />
                <stop offset="0.3779" style="stop-color:#717171" />
                <stop offset="0.4871" style="stop-color:#9B9B9B" />
                <stop offset="0.55" style="stop-color:#B8B8B8" />
              </linearGradient>
              <path
                :class="`sx-${info.id}-st64`"
                d="M299.96,120.72c0.58,16.43-6,35.55-14.7,42.71c-8.7,7.16-16.22-0.35-16.8-16.78s6-35.55,14.7-42.71
                      C291.87,96.79,299.39,104.3,299.96,120.72z"
              />
            </g>
          </g>
          <g>
            <radialGradient
              id="sx_62_"
              cx="303.6609"
              cy="-7.2746"
              r="38.8984"
              gradientTransform="matrix(1.1475 -0.6608 0.0355 1.0073 -78.9681 332.6599)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.5754" style="stop-color:#525451;stop-opacity:0" />
              <stop offset="1" style="stop-color:#525451;stop-opacity:0.6" />
            </radialGradient>
            <path
              :class="`sx-${info.id}-st65`"
              d="M299.96,120.72c0.58,16.43-6,35.55-14.7,42.71c-8.7,7.16-16.22-0.35-16.8-16.78s6-35.55,14.7-42.71
                    C291.87,96.79,299.39,104.3,299.96,120.72z"
            />
          </g>
        </g>
        <g>
          <g>
            <linearGradient
              id="sx_63_"
              gradientUnits="userSpaceOnUse"
              x1="272.0646"
              y1="-62.0012"
              x2="209.0409"
              y2="-123.5506"
              gradientTransform="matrix(1 -0.6912 0 1 0 348.9428)"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <polygon
              :class="`sx-${info.id}-st66`"
              points="264.19,112.39 228.48,146.85 228.48,70.69 264.19,36.23 			"
            />
          </g>
          <g>
            <linearGradient
              id="sx_64_"
              gradientUnits="userSpaceOnUse"
              x1="223.9104"
              y1="64.2763"
              x2="269.0104"
              y2="119.1038"
            >
              <stop offset="0" style="stop-color:#A8A8A8" />
              <stop offset="1" style="stop-color:#848484" />
            </linearGradient>
            <polygon
              :class="`sx-${info.id}-st67`"
              points="263.67,111.79 229,145.25 229,71.29 263.67,37.83 			"
            />
          </g>

          <linearGradient
            id="sx_65_"
            gradientUnits="userSpaceOnUse"
            x1="224.7331"
            y1="-110.8912"
            x2="267.9402"
            y2="-63.3635"
            gradientTransform="matrix(1 -0.6912 0 1 0 348.9428)"
          >
            <stop offset="0" style="stop-color:#666666" />
            <stop offset="1" style="stop-color:#FFFFFF" />
          </linearGradient>
          <path
            :class="`sx-${info.id}-st68`"
            d="M259.47,45.2c1.46-1.41,2.65-0.03,2.65,3.1v56.02c0,3.12-1.19,6.8-2.65,8.22l-26.26,25.35
                  c-1.46,1.41-2.65,0.03-2.65-3.1V78.76c0-3.12,1.19-6.8,2.65-8.22L259.47,45.2 M259.47,44.1l-26.26,25.35
                  c-1.75,1.69-3.17,6.09-3.17,9.82v56.02c0,3.73,1.42,5.39,3.17,3.7l26.26-25.35c1.75-1.69,3.17-6.09,3.17-9.82V47.8
                  C262.64,44.07,261.21,42.41,259.47,44.1L259.47,44.1z"
          />
          <g>
            <linearGradient
              id="sx_66_"
              gradientUnits="userSpaceOnUse"
              x1="269.8362"
              y1="-69.4748"
              x2="229.2871"
              y2="-99.9347"
              gradientTransform="matrix(1 -0.6912 0 1 0 348.9428)"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <path
              :class="`sx-${info.id}-st69`"
              d="M259.47,46.3c1.18-1.14,2.13-0.02,2.13,2.49v56.02c0,2.51-0.96,5.48-2.13,6.61l-26.26,25.35
                    c-1.18,1.14-2.13,0.02-2.13-2.49V78.26c0-2.51,0.96-5.48,2.13-6.61L259.47,46.3 M259.47,45.2l-26.26,25.35
                    c-1.46,1.41-2.65,5.09-2.65,8.22v56.02c0,3.12,1.19,4.51,2.65,3.1l26.26-25.35c1.46-1.41,2.65-5.09,2.65-8.22V48.3
                    C262.12,45.17,260.93,43.79,259.47,45.2L259.47,45.2z"
            />
          </g>
          <g>
            <linearGradient
              id="sx_67_"
              gradientUnits="userSpaceOnUse"
              x1="234.1229"
              y1="88.9453"
              x2="258.0574"
              y2="94.4303"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <path
              :class="`sx-${info.id}-st70`"
              d="M263.14,78.65c0.46,16.78-6.19,36.36-14.85,43.73s-16.06-0.25-16.52-17.03s6.19-36.36,14.85-43.73
                    C255.28,54.25,262.67,61.87,263.14,78.65z"
            />
          </g>
          <g>
            <linearGradient
              id="sx_68_"
              gradientUnits="userSpaceOnUse"
              x1="286.9605"
              y1="-20.8982"
              x2="286.9605"
              y2="-80.4424"
              gradientTransform="matrix(1.1475 -0.6608 0.0355 1.0073 -78.9681 332.6599)"
            >
              <stop offset="0" style="stop-color:#242424" />
              <stop offset="0.0781" style="stop-color:#292929" />
              <stop offset="0.1711" style="stop-color:#373737" />
              <stop offset="0.2718" style="stop-color:#4F4F4F" />
              <stop offset="0.3779" style="stop-color:#717171" />
              <stop offset="0.4871" style="stop-color:#9B9B9B" />
              <stop offset="0.55" style="stop-color:#B8B8B8" />
            </linearGradient>
            <path
              :class="`sx-${info.id}-st71`"
              d="M264.26,79.02c0.58,16.43-6,35.55-14.7,42.71s-16.22-0.35-16.8-16.78s6-35.55,14.7-42.71
                    S263.68,62.6,264.26,79.02z"
            />
          </g>
        </g>
        <g>
          <radialGradient
            id="sx_69_"
            cx="274.2065"
            cy="-67.8533"
            r="39.1377"
            gradientTransform="matrix(1.1475 -0.6608 0.0355 1.0073 -78.9681 332.6599)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.5754" style="stop-color:#525451;stop-opacity:0" />
            <stop offset="1" style="stop-color:#525451;stop-opacity:0.6" />
          </radialGradient>
          <path
            :class="`sx-${info.id}-st72`"
            d="M264.21,79.14c0.58,16.53-6.04,35.77-14.79,42.97c-8.75,7.21-16.32-0.35-16.9-16.88s6.04-35.77,14.79-42.97
                  C256.06,55.06,263.63,62.61,264.21,79.14z"
          />
        </g>
        <g>
          <g>
            <g>
              <linearGradient
                id="sx_70_"
                gradientUnits="userSpaceOnUse"
                x1="272.0646"
                y1="14.1603"
                x2="209.0409"
                y2="-47.3891"
                gradientTransform="matrix(1 -0.6912 0 1 0 348.9428)"
              >
                <stop offset="0" style="stop-color:#666666" />
                <stop offset="1" style="stop-color:#FFFFFF" />
              </linearGradient>
              <polygon
                :class="`sx-${info.id}-st73`"
                points="264.19,188.55 228.48,223.01 228.48,146.85 264.19,112.39 				"
              />
            </g>
            <g>
              <linearGradient
                id="sx_71_"
                gradientUnits="userSpaceOnUse"
                x1="223.9104"
                y1="140.4379"
                x2="269.0104"
                y2="195.2653"
              >
                <stop offset="0" style="stop-color:#A8A8A8" />
                <stop offset="1" style="stop-color:#848484" />
              </linearGradient>
              <polygon
                :class="`sx-${info.id}-st74`"
                points="263.67,187.95 229,221.41 229,147.45 263.67,113.99 				"
              />
            </g>

            <linearGradient
              id="sx_72_"
              gradientUnits="userSpaceOnUse"
              x1="224.7331"
              y1="-34.7297"
              x2="267.9402"
              y2="12.7981"
              gradientTransform="matrix(1 -0.6912 0 1 0 348.9428)"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <path
              :class="`sx-${info.id}-st75`"
              d="M259.47,121.36c1.46-1.41,2.65-0.03,2.65,3.1v56.02c0,3.12-1.19,6.8-2.65,8.22l-26.26,25.35
                    c-1.46,1.41-2.65,0.03-2.65-3.1v-56.02c0-3.12,1.19-6.8,2.65-8.22L259.47,121.36 M259.47,120.26l-26.26,25.35
                    c-1.75,1.69-3.17,6.09-3.17,9.82v56.02c0,3.73,1.42,5.39,3.17,3.7l26.26-25.35c1.75-1.69,3.17-6.09,3.17-9.82v-56.02
                    C262.64,120.23,261.21,118.57,259.47,120.26L259.47,120.26z"
            />
            <g>
              <linearGradient
                id="sx_73_"
                gradientUnits="userSpaceOnUse"
                x1="269.8362"
                y1="6.6867"
                x2="229.2871"
                y2="-23.7732"
                gradientTransform="matrix(1 -0.6912 0 1 0 348.9428)"
              >
                <stop offset="0" style="stop-color:#666666" />
                <stop offset="1" style="stop-color:#FFFFFF" />
              </linearGradient>
              <path
                :class="`sx-${info.id}-st76`"
                d="M259.47,122.47c1.18-1.14,2.13-0.02,2.13,2.49v56.02c0,2.51-0.96,5.48-2.13,6.61l-26.26,25.35
                      c-1.18,1.14-2.13,0.02-2.13-2.49v-56.02c0-2.51,0.96-5.48,2.13-6.61L259.47,122.47 M259.47,121.36l-26.26,25.35
                      c-1.46,1.41-2.65,5.09-2.65,8.22v56.02c0,3.12,1.19,4.51,2.65,3.1l26.26-25.35c1.46-1.41,2.65-5.09,2.65-8.22v-56.02
                      C262.12,121.34,260.93,119.95,259.47,121.36L259.47,121.36z"
              />
            </g>
            <g>
              <linearGradient
                id="sx_74_"
                gradientUnits="userSpaceOnUse"
                x1="234.1229"
                y1="165.1068"
                x2="258.0574"
                y2="170.5918"
              >
                <stop offset="0" style="stop-color:#666666" />
                <stop offset="1" style="stop-color:#FFFFFF" />
              </linearGradient>
              <path
                :class="`sx-${info.id}-st77`"
                d="M263.14,154.81c0.46,16.78-6.19,36.36-14.85,43.73s-16.06-0.25-16.52-17.03s6.19-36.36,14.85-43.73
                      C255.28,130.41,262.67,138.03,263.14,154.81z"
              />
            </g>
            <g>
              <linearGradient
                id="sx_75_"
                gradientUnits="userSpaceOnUse"
                x1="284.6703"
                y1="53.2081"
                x2="284.6703"
                y2="-6.3361"
                gradientTransform="matrix(1.1475 -0.6608 0.0355 1.0073 -78.9681 332.6599)"
              >
                <stop offset="0" style="stop-color:#242424" />
                <stop offset="0.0781" style="stop-color:#292929" />
                <stop offset="0.1711" style="stop-color:#373737" />
                <stop offset="0.2718" style="stop-color:#4F4F4F" />
                <stop offset="0.3779" style="stop-color:#717171" />
                <stop offset="0.4871" style="stop-color:#9B9B9B" />
                <stop offset="0.55" style="stop-color:#B8B8B8" />
              </linearGradient>
              <path
                :class="`sx-${info.id}-st78`"
                d="M264.26,155.18c0.58,16.43-6,35.55-14.7,42.71c-8.7,7.16-16.22-0.35-16.8-16.78s6-35.55,14.7-42.71
                      C256.16,131.25,263.68,138.76,264.26,155.18z"
              />
            </g>
          </g>
          <g>
            <radialGradient
              id="sx_76_"
              cx="272.1273"
              cy="6.2485"
              r="38.8984"
              gradientTransform="matrix(1.1475 -0.6608 0.0355 1.0073 -78.9681 332.6599)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.5754" style="stop-color:#525451;stop-opacity:0" />
              <stop offset="1" style="stop-color:#525451;stop-opacity:0.6" />
            </radialGradient>
            <path
              :class="`sx-${info.id}-st79`"
              d="M264.26,155.18c0.58,16.43-6,35.55-14.7,42.71c-8.7,7.16-16.22-0.35-16.8-16.78s6-35.55,14.7-42.71
                    C256.16,131.25,263.68,138.76,264.26,155.18z"
            />
          </g>
        </g>
        <g>
          <polygon
            :class="`sx-${info.id}-st80`"
            points="35.7,36.23 36.04,35.57 111.48,35.34 111.87,36.23 		"
          />
          <polygon
            :class="`sx-${info.id}-st81`"
            points="111.48,35.34 111.87,36.23 147.57,1.77 147.19,0.88 		"
          />
          <polygon
            :class="`sx-${info.id}-st82`"
            points="147.19,0.88 71.74,1.11 36.04,35.57 111.48,35.34 		"
          />
          <linearGradient
            id="sx_77_"
            gradientUnits="userSpaceOnUse"
            x1="18.0756"
            y1="7.3082"
            x2="126.1498"
            y2="23.2563"
          >
            <stop offset="0" style="stop-color:#666666" />
            <stop offset="1" style="stop-color:#FFFFFF" />
          </linearGradient>
          <path
            :class="`sx-${info.id}-st83`"
            d="M135.68,2.51c2.32,0,3.46,2.82,1.79,4.43l-25.36,24.48c-1.56,1.5-3.64,2.35-5.8,2.35l-57.88,0.17
                  c0,0-0.01,0-0.01,0c-2.32,0-3.46-2.82-1.79-4.43L71.99,5.03c1.56-1.5,3.64-2.35,5.8-2.35L135.68,2.51
                  C135.68,2.51,135.68,2.51,135.68,2.51 M135.68,1.62L135.68,1.62l-0.01,0L77.79,1.79c-2.4,0.01-4.68,0.93-6.41,2.6L46.02,28.87
                  c-1.04,1-1.35,2.45-0.81,3.79c0.54,1.34,1.77,2.17,3.21,2.17l57.89-0.17c2.4-0.01,4.68-0.93,6.41-2.6l25.36-24.48
                  c1.04-1,1.35-2.45,0.81-3.79C138.36,2.45,137.13,1.62,135.68,1.62L135.68,1.62z"
          />
          <g>
            <linearGradient
              id="sx_78_"
              gradientUnits="userSpaceOnUse"
              x1="174.2301"
              y1="-1.1306"
              x2="70.1082"
              y2="23.394"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <path
              :class="`sx-${info.id}-st84`"
              d="M135.68,2.51v0.88c0.84,0,1.36,0.55,1.57,1.06c0.27,0.66,0.12,1.36-0.39,1.85L111.5,30.78
                    c-1.4,1.35-3.24,2.1-5.19,2.1l-57.89,0.17c-0.84,0-1.36-0.55-1.57-1.06c-0.27-0.66-0.12-1.36,0.39-1.85L72.61,5.67
                    c1.4-1.35,3.24-2.1,5.19-2.1l57.88-0.17L135.68,2.51 M135.68,2.51C135.68,2.51,135.68,2.51,135.68,2.51L77.79,2.68
                    c-2.16,0.01-4.24,0.85-5.8,2.35L46.63,29.51c-1.67,1.61-0.53,4.43,1.79,4.43c0,0,0.01,0,0.01,0l57.88-0.17
                    c2.16-0.01,4.24-0.85,5.8-2.35l25.36-24.48C139.15,5.33,138,2.51,135.68,2.51L135.68,2.51z"
            />
          </g>

          <radialGradient
            id="sx_79_"
            cx="77.7169"
            cy="6.3012"
            r="55.069"
            gradientTransform="matrix(1 0 0 0.5198 0 3.026)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.486" style="stop-color:#FFFFFF" />
            <stop offset="0.4879" style="stop-color:#FEFEFE" />
            <stop offset="0.5634" style="stop-color:#E3E3E3" />
            <stop offset="0.6448" style="stop-color:#CECECE" />
            <stop offset="0.7354" style="stop-color:#BFBFBF" />
            <stop offset="0.8414" style="stop-color:#B6B6B6" />
            <stop offset="1" style="stop-color:#B3B3B3" />
          </radialGradient>
          <path
            :class="`sx-${info.id}-st85`"
            d="M125.82,15.54c-2.92,8.58-18.88,13.35-36.56,13.35S58.88,24.12,61.8,15.54S81.43,0,99.11,0
                  S128.75,6.96,125.82,15.54z"
          />
          <g>
            <radialGradient
              id="sx_80_"
              cx="91.9538"
              cy="25.2838"
              r="55.069"
              gradientTransform="matrix(1 0 0 0.5198 0 12.1417)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.5754" style="stop-color:#525451;stop-opacity:0" />
              <stop offset="1" style="stop-color:#525451;stop-opacity:0.6" />
            </radialGradient>
            <path
              :class="`sx-${info.id}-st86`"
              d="M125.82,15.54c-2.92,8.58-18.88,13.35-36.56,13.35S58.88,24.12,61.8,15.54S81.43,0,99.11,0
                    S128.75,6.96,125.82,15.54z"
            />
          </g>
        </g>
        <g>
          <polygon
            :class="`sx-${info.id}-st80`"
            points="111.87,36.23 112.2,35.57 187.65,35.34 188.03,36.23 		"
          />
          <polygon
            :class="`sx-${info.id}-st81`"
            points="187.65,35.34 188.03,36.23 223.73,1.77 223.35,0.88 		"
          />
          <polygon
            :class="`sx-${info.id}-st82`"
            points="223.35,0.88 147.9,1.11 112.2,35.57 187.65,35.34 		"
          />
          <linearGradient
            id="sx_81_"
            gradientUnits="userSpaceOnUse"
            x1="94.2371"
            y1="7.3082"
            x2="202.3113"
            y2="23.2563"
          >
            <stop offset="0" style="stop-color:#666666" />
            <stop offset="1" style="stop-color:#FFFFFF" />
          </linearGradient>
          <path
            :class="`sx-${info.id}-st87`"
            d="M211.85,2.51c2.32,0,3.46,2.82,1.79,4.43l-25.36,24.48c-1.56,1.5-3.64,2.35-5.8,2.35l-57.88,0.17
                  c0,0-0.01,0-0.01,0c-2.32,0-3.46-2.82-1.79-4.43l25.36-24.48c1.56-1.5,3.64-2.35,5.8-2.35L211.85,2.51
                  C211.84,2.51,211.84,2.51,211.85,2.51 M211.85,1.62L211.85,1.62l-0.01,0l-57.88,0.17c-2.4,0.01-4.68,0.93-6.41,2.6l-25.36,24.48
                  c-1.04,1-1.35,2.45-0.81,3.79c0.54,1.34,1.77,2.17,3.21,2.17l57.89-0.17c2.4-0.01,4.68-0.93,6.41-2.6l25.36-24.48
                  c1.04-1,1.35-2.45,0.81-3.79C214.52,2.45,213.29,1.62,211.85,1.62L211.85,1.62z"
          />
          <g>
            <linearGradient
              id="sx_82_"
              gradientUnits="userSpaceOnUse"
              x1="250.3917"
              y1="-1.1306"
              x2="146.2697"
              y2="23.394"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <path
              :class="`sx-${info.id}-st88`"
              d="M211.85,2.51v0.88c0.84,0,1.36,0.55,1.57,1.06c0.27,0.66,0.12,1.36-0.39,1.85l-25.36,24.48
                    c-1.4,1.35-3.24,2.1-5.19,2.1l-57.89,0.17c-0.84,0-1.36-0.55-1.57-1.06c-0.27-0.66-0.12-1.36,0.39-1.85l25.36-24.48
                    c1.4-1.35,3.24-2.1,5.19-2.1l57.88-0.17L211.85,2.51 M211.85,2.51C211.84,2.51,211.84,2.51,211.85,2.51l-57.89,0.17
                    c-2.16,0.01-4.24,0.85-5.8,2.35l-25.36,24.48c-1.67,1.61-0.53,4.43,1.79,4.43c0,0,0.01,0,0.01,0l57.88-0.17
                    c2.16-0.01,4.24-0.85,5.8-2.35l25.36-24.48C215.31,5.33,214.16,2.51,211.85,2.51L211.85,2.51z"
            />
          </g>

          <radialGradient
            id="sx_83_"
            cx="153.8784"
            cy="6.3012"
            r="55.069"
            gradientTransform="matrix(1 0 0 0.5198 0 3.026)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.486" style="stop-color:#FFFFFF" />
            <stop offset="0.4879" style="stop-color:#FEFEFE" />
            <stop offset="0.5634" style="stop-color:#E3E3E3" />
            <stop offset="0.6448" style="stop-color:#CECECE" />
            <stop offset="0.7354" style="stop-color:#BFBFBF" />
            <stop offset="0.8414" style="stop-color:#B6B6B6" />
            <stop offset="1" style="stop-color:#B3B3B3" />
          </radialGradient>
          <path
            :class="`sx-${info.id}-st89`"
            d="M201.98,15.54c-2.92,8.58-18.88,13.35-36.56,13.35s-30.39-4.77-27.46-13.35C140.89,6.96,157.59,0,175.27,0
                  S204.91,6.96,201.98,15.54z"
          />
          <g>
            <radialGradient
              id="sx_84_"
              cx="168.1153"
              cy="25.2838"
              r="55.069"
              gradientTransform="matrix(1 0 0 0.5198 0 12.1417)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.5754" style="stop-color:#525451;stop-opacity:0" />
              <stop offset="1" style="stop-color:#525451;stop-opacity:0.6" />
            </radialGradient>
            <path
              :class="`sx-${info.id}-st90`"
              d="M201.98,15.54c-2.92,8.58-18.88,13.35-36.56,13.35s-30.39-4.77-27.46-13.35C140.89,6.96,157.59,0,175.27,0
                    S204.91,6.96,201.98,15.54z"
            />
          </g>
        </g>
        <g>
          <polygon
            :class="`sx-${info.id}-st80`"
            points="188.03,36.23 188.36,35.57 263.81,35.34 264.19,36.23 		"
          />
          <polygon
            :class="`sx-${info.id}-st81`"
            points="263.81,35.34 264.19,36.23 299.89,1.77 299.51,0.88 		"
          />
          <polygon
            :class="`sx-${info.id}-st82`"
            points="299.51,0.88 224.06,1.11 188.36,35.57 263.81,35.34 		"
          />
          <linearGradient
            id="sx_85_"
            gradientUnits="userSpaceOnUse"
            x1="170.3986"
            y1="7.3082"
            x2="278.4728"
            y2="23.2563"
          >
            <stop offset="0" style="stop-color:#666666" />
            <stop offset="1" style="stop-color:#FFFFFF" />
          </linearGradient>
          <path
            :class="`sx-${info.id}-st91`"
            d="M288.01,2.51c2.32,0,3.46,2.82,1.79,4.43l-25.36,24.48c-1.56,1.5-3.64,2.35-5.8,2.35l-57.88,0.17
                  c0,0-0.01,0-0.01,0c-2.32,0-3.46-2.82-1.79-4.43l25.36-24.48c1.56-1.5,3.64-2.35,5.8-2.35L288.01,2.51
                  C288,2.51,288.01,2.51,288.01,2.51 M288.01,1.62L288.01,1.62l-0.01,0l-57.88,0.17c-2.4,0.01-4.68,0.93-6.41,2.6l-25.36,24.48
                  c-1.04,1-1.35,2.45-0.81,3.79c0.54,1.34,1.77,2.17,3.21,2.17l57.89-0.17c2.4-0.01,4.68-0.93,6.41-2.6l25.36-24.48
                  c1.04-1,1.35-2.45,0.81-3.79C290.68,2.45,289.45,1.62,288.01,1.62L288.01,1.62z"
          />
          <g>
            <linearGradient
              id="sx_86_"
              gradientUnits="userSpaceOnUse"
              x1="326.5532"
              y1="-1.1306"
              x2="222.4312"
              y2="23.394"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <path
              :class="`sx-${info.id}-st92`"
              d="M288.01,2.51v0.88c0.84,0,1.36,0.55,1.57,1.06c0.27,0.66,0.12,1.36-0.39,1.85l-25.36,24.48
                    c-1.4,1.35-3.24,2.1-5.19,2.1l-57.89,0.17c-0.84,0-1.36-0.55-1.57-1.06c-0.27-0.66-0.12-1.36,0.39-1.85l25.36-24.48
                    c1.4-1.35,3.24-2.1,5.19-2.1L288,3.39L288.01,2.51 M288.01,2.51C288.01,2.51,288,2.51,288.01,2.51l-57.89,0.17
                    c-2.16,0.01-4.24,0.85-5.8,2.35l-25.36,24.48c-1.67,1.61-0.53,4.43,1.79,4.43c0,0,0.01,0,0.01,0l57.88-0.17
                    c2.16-0.01,4.24-0.85,5.8-2.35L289.8,6.94C291.47,5.33,290.33,2.51,288.01,2.51L288.01,2.51z"
            />
          </g>

          <radialGradient
            id="sx_87_"
            cx="230.04"
            cy="6.3012"
            r="55.069"
            gradientTransform="matrix(1 0 0 0.5198 0 3.026)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.486" style="stop-color:#FFFFFF" />
            <stop offset="0.4879" style="stop-color:#FEFEFE" />
            <stop offset="0.5634" style="stop-color:#E3E3E3" />
            <stop offset="0.6448" style="stop-color:#CECECE" />
            <stop offset="0.7354" style="stop-color:#BFBFBF" />
            <stop offset="0.8414" style="stop-color:#B6B6B6" />
            <stop offset="1" style="stop-color:#B3B3B3" />
          </radialGradient>
          <path
            :class="`sx-${info.id}-st93`"
            d="M278.15,15.54c-2.92,8.58-18.88,13.35-36.56,13.35c-17.68,0-30.39-4.77-27.46-13.35S233.75,0,251.43,0
                  S281.07,6.96,278.15,15.54z"
          />
          <g>
            <radialGradient
              id="sx_88_"
              cx="244.2769"
              cy="25.2838"
              r="55.069"
              gradientTransform="matrix(1 0 0 0.5198 0 12.1417)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.5754" style="stop-color:#525451;stop-opacity:0" />
              <stop offset="1" style="stop-color:#525451;stop-opacity:0.6" />
            </radialGradient>
            <path
              :class="`sx-${info.id}-st94`"
              d="M278.15,15.54c-2.92,8.58-18.88,13.35-36.56,13.35c-17.68,0-30.39-4.77-27.46-13.35S233.75,0,251.43,0
                    S281.07,6.96,278.15,15.54z"
            />
          </g>
        </g>
        <g>
          <polygon
            :class="`sx-${info.id}-st80`"
            points="0,70.69 0.33,70.03 75.78,69.8 76.16,70.69 		"
          />
          <polygon
            :class="`sx-${info.id}-st81`"
            points="75.78,69.8 76.16,70.69 111.87,36.23 111.48,35.34 		"
          />
          <polygon
            :class="`sx-${info.id}-st82`"
            points="111.48,35.34 36.04,35.57 0.33,70.03 75.78,69.8 		"
          />
          <linearGradient
            id="sx_89_"
            gradientUnits="userSpaceOnUse"
            x1="-17.6286"
            y1="41.7683"
            x2="90.4456"
            y2="57.7165"
          >
            <stop offset="0" style="stop-color:#666666" />
            <stop offset="1" style="stop-color:#FFFFFF" />
          </linearGradient>
          <path
            :class="`sx-${info.id}-st95`"
            d="M99.98,36.97c2.32,0,3.46,2.82,1.79,4.43L76.41,65.88c-1.56,1.5-3.64,2.35-5.8,2.35L12.73,68.4
                  c0,0-0.01,0-0.01,0c-2.32,0-3.46-2.82-1.79-4.43l25.36-24.48c1.56-1.5,3.64-2.35,5.8-2.35L99.98,36.97
                  C99.98,36.97,99.98,36.97,99.98,36.97 M99.98,36.08L99.98,36.08l-0.01,0l-57.88,0.17c-2.4,0.01-4.68,0.93-6.41,2.6L10.31,63.33
                  c-1.04,1-1.35,2.45-0.81,3.79c0.54,1.34,1.77,2.17,3.21,2.17l57.89-0.17c2.4-0.01,4.68-0.93,6.41-2.6l25.36-24.48
                  c1.04-1,1.35-2.45,0.81-3.79C102.65,36.91,101.42,36.08,99.98,36.08L99.98,36.08z"
          />
          <g>
            <linearGradient
              id="sx_90_"
              gradientUnits="userSpaceOnUse"
              x1="138.526"
              y1="33.3295"
              x2="34.404"
              y2="57.8541"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <path
              :class="`sx-${info.id}-st96`"
              d="M99.98,36.97v0.88c0.84,0,1.36,0.55,1.57,1.06c0.27,0.66,0.12,1.36-0.39,1.85L75.8,65.24
                    c-1.4,1.35-3.24,2.1-5.19,2.1l-57.89,0.17c-0.84,0-1.36-0.55-1.57-1.06c-0.27-0.66-0.12-1.36,0.39-1.85L36.9,40.13
                    c1.4-1.35,3.24-2.1,5.19-2.1l57.88-0.17L99.98,36.97 M99.98,36.97C99.98,36.97,99.98,36.97,99.98,36.97l-57.89,0.17
                    c-2.16,0.01-4.24,0.85-5.8,2.35L10.93,63.97c-1.67,1.61-0.53,4.43,1.79,4.43c0,0,0.01,0,0.01,0l57.88-0.17
                    c2.16-0.01,4.24-0.85,5.8-2.35l25.36-24.48C103.44,39.79,102.3,36.97,99.98,36.97L99.98,36.97z"
            />
          </g>

          <radialGradient
            id="sx_91_"
            cx="42.0128"
            cy="40.7614"
            r="55.069"
            gradientTransform="matrix(1 0 0 0.5198 0 19.5744)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.486" style="stop-color:#FFFFFF" />
            <stop offset="0.4879" style="stop-color:#FEFEFE" />
            <stop offset="0.5634" style="stop-color:#E3E3E3" />
            <stop offset="0.6448" style="stop-color:#CECECE" />
            <stop offset="0.7354" style="stop-color:#BFBFBF" />
            <stop offset="0.8414" style="stop-color:#B6B6B6" />
            <stop offset="1" style="stop-color:#B3B3B3" />
          </radialGradient>
          <path
            :class="`sx-${info.id}-st97`"
            d="M90.12,50c-2.92,8.58-18.88,13.35-36.56,13.35S23.17,58.58,26.1,50S45.72,34.46,63.4,34.46
                  S93.04,41.42,90.12,50z"
          />
          <g>
            <radialGradient
              id="sx_92_"
              cx="56.2497"
              cy="59.7439"
              r="55.069"
              gradientTransform="matrix(1 0 0 0.5198 0 28.6902)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.5754" style="stop-color:#525451;stop-opacity:0" />
              <stop offset="1" style="stop-color:#525451;stop-opacity:0.6" />
            </radialGradient>
            <path
              :class="`sx-${info.id}-st98`"
              d="M90.12,50c-2.92,8.58-18.88,13.35-36.56,13.35S23.17,58.58,26.1,50S45.72,34.46,63.4,34.46
                    S93.04,41.42,90.12,50z"
            />
          </g>
        </g>
        <g>
          <polygon
            :class="`sx-${info.id}-st80`"
            points="76.16,70.69 76.49,70.03 151.94,69.8 152.32,70.69 		"
          />
          <polygon
            :class="`sx-${info.id}-st81`"
            points="151.94,69.8 152.32,70.69 188.03,36.23 187.65,35.34 		"
          />
          <polygon
            :class="`sx-${info.id}-st82`"
            points="187.65,35.34 112.2,35.57 76.49,70.03 151.94,69.8 		"
          />
          <linearGradient
            id="sx_93_"
            gradientUnits="userSpaceOnUse"
            x1="58.5329"
            y1="41.7683"
            x2="166.6072"
            y2="57.7165"
          >
            <stop offset="0" style="stop-color:#666666" />
            <stop offset="1" style="stop-color:#FFFFFF" />
          </linearGradient>
          <path
            :class="`sx-${info.id}-st99`"
            d="M176.14,36.97c2.32,0,3.46,2.82,1.79,4.43l-25.36,24.48c-1.56,1.5-3.64,2.35-5.8,2.35L88.89,68.4
                  c0,0-0.01,0-0.01,0c-2.32,0-3.46-2.82-1.79-4.43l25.36-24.48c1.56-1.5,3.64-2.35,5.8-2.35L176.14,36.97
                  C176.14,36.97,176.14,36.97,176.14,36.97 M176.14,36.08L176.14,36.08l-0.01,0l-57.88,0.17c-2.4,0.01-4.68,0.93-6.41,2.6
                  L86.48,63.33c-1.04,1-1.35,2.45-0.81,3.79c0.54,1.34,1.77,2.17,3.21,2.17l57.89-0.17c2.4-0.01,4.68-0.93,6.41-2.6l25.36-24.48
                  c1.04-1,1.35-2.45,0.81-3.79C178.81,36.91,177.58,36.08,176.14,36.08L176.14,36.08z"
          />
          <g>
            <linearGradient
              id="sx_94_"
              gradientUnits="userSpaceOnUse"
              x1="214.6875"
              y1="33.3295"
              x2="110.5655"
              y2="57.8541"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <path
              :class="`sx-${info.id}-st100`"
              d="M176.14,36.97v0.88c0.84,0,1.36,0.55,1.57,1.06c0.27,0.66,0.12,1.36-0.39,1.85l-25.36,24.48
                    c-1.4,1.35-3.24,2.1-5.19,2.1l-57.89,0.17c-0.84,0-1.36-0.55-1.57-1.06c-0.27-0.66-0.12-1.36,0.39-1.85l25.36-24.48
                    c1.4-1.35,3.24-2.1,5.19-2.1l57.88-0.17L176.14,36.97 M176.14,36.97C176.14,36.97,176.14,36.97,176.14,36.97l-57.89,0.17
                    c-2.16,0.01-4.24,0.85-5.8,2.35L87.09,63.97c-1.67,1.61-0.53,4.43,1.79,4.43c0,0,0.01,0,0.01,0l57.88-0.17
                    c2.16-0.01,4.24-0.85,5.8-2.35l25.36-24.48C179.6,39.79,178.46,36.97,176.14,36.97L176.14,36.97z"
            />
          </g>

          <radialGradient
            id="sx_95_"
            cx="118.1743"
            cy="40.7614"
            r="55.069"
            gradientTransform="matrix(1 0 0 0.5198 0 19.5744)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.486" style="stop-color:#FFFFFF" />
            <stop offset="0.4879" style="stop-color:#FEFEFE" />
            <stop offset="0.5634" style="stop-color:#E3E3E3" />
            <stop offset="0.6448" style="stop-color:#CECECE" />
            <stop offset="0.7354" style="stop-color:#BFBFBF" />
            <stop offset="0.8414" style="stop-color:#B6B6B6" />
            <stop offset="1" style="stop-color:#B3B3B3" />
          </radialGradient>
          <path
            :class="`sx-${info.id}-st101`"
            d="M166.28,50c-2.92,8.58-18.88,13.35-36.56,13.35S99.33,58.58,102.26,50s19.63-15.54,37.31-15.54
                  S169.21,41.42,166.28,50z"
          />
          <g>
            <radialGradient
              id="sx_96_"
              cx="132.4112"
              cy="59.7439"
              r="55.069"
              gradientTransform="matrix(1 0 0 0.5198 0 28.6902)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.5754" style="stop-color:#525451;stop-opacity:0" />
              <stop offset="1" style="stop-color:#525451;stop-opacity:0.6" />
            </radialGradient>
            <path
              :class="`sx-${info.id}-st102`"
              d="M166.28,50c-2.92,8.58-18.88,13.35-36.56,13.35S99.33,58.58,102.26,50s19.63-15.54,37.31-15.54
                    S169.21,41.42,166.28,50z"
            />
          </g>
        </g>
        <g>
          <polygon
            :class="`sx-${info.id}-st80`"
            points="152.32,70.69 152.65,70.03 228.1,69.8 228.48,70.69 		"
          />
          <polygon
            :class="`sx-${info.id}-st81`"
            points="228.1,69.8 228.48,70.69 264.19,36.23 263.81,35.34 		"
          />
          <polygon
            :class="`sx-${info.id}-st82`"
            points="263.81,35.34 188.36,35.57 152.65,70.03 228.1,69.8 		"
          />
          <linearGradient
            id="sx_97_"
            gradientUnits="userSpaceOnUse"
            x1="134.6944"
            y1="41.7683"
            x2="242.7687"
            y2="57.7165"
          >
            <stop offset="0" style="stop-color:#666666" />
            <stop offset="1" style="stop-color:#FFFFFF" />
          </linearGradient>
          <path
            :class="`sx-${info.id}-st103`"
            d="M252.3,36.97c2.32,0,3.46,2.82,1.79,4.43l-25.36,24.48c-1.56,1.5-3.64,2.35-5.8,2.35l-57.88,0.17
                  c0,0-0.01,0-0.01,0c-2.32,0-3.46-2.82-1.79-4.43l25.36-24.48c1.56-1.5,3.64-2.35,5.8-2.35L252.3,36.97
                  C252.3,36.97,252.3,36.97,252.3,36.97 M252.3,36.08L252.3,36.08l-0.01,0l-57.88,0.17c-2.4,0.01-4.68,0.93-6.41,2.6l-25.36,24.48
                  c-1.04,1-1.35,2.45-0.81,3.79c0.54,1.34,1.77,2.17,3.21,2.17l57.89-0.17c2.4-0.01,4.68-0.93,6.41-2.6l25.36-24.48
                  c1.04-1,1.35-2.45,0.81-3.79C254.97,36.91,253.74,36.08,252.3,36.08L252.3,36.08z"
          />
          <g>
            <linearGradient
              id="sx_98_"
              gradientUnits="userSpaceOnUse"
              x1="290.849"
              y1="33.3295"
              x2="186.727"
              y2="57.8541"
            >
              <stop offset="0" style="stop-color:#666666" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <path
              :class="`sx-${info.id}-st104`"
              d="M252.3,36.97v0.88c0.84,0,1.36,0.55,1.57,1.06c0.27,0.66,0.12,1.36-0.39,1.85l-25.36,24.48
                    c-1.4,1.35-3.24,2.1-5.19,2.1l-57.89,0.17c-0.84,0-1.36-0.55-1.57-1.06c-0.27-0.66-0.12-1.36,0.39-1.85l25.36-24.48
                    c1.4-1.35,3.24-2.1,5.19-2.1l57.88-0.17L252.3,36.97 M252.3,36.97C252.3,36.97,252.3,36.97,252.3,36.97l-57.89,0.17
                    c-2.16,0.01-4.24,0.85-5.8,2.35l-25.36,24.48c-1.67,1.61-0.53,4.43,1.79,4.43c0,0,0.01,0,0.01,0l57.88-0.17
                    c2.16-0.01,4.24-0.85,5.8-2.35l25.36-24.48C255.76,39.79,254.62,36.97,252.3,36.97L252.3,36.97z"
            />
          </g>

          <radialGradient
            id="sx_99_"
            cx="194.3358"
            cy="40.7614"
            r="55.069"
            gradientTransform="matrix(1 0 0 0.5198 0 19.5744)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.486" style="stop-color:#FFFFFF" />
            <stop offset="0.4879" style="stop-color:#FEFEFE" />
            <stop offset="0.5634" style="stop-color:#E3E3E3" />
            <stop offset="0.6448" style="stop-color:#CECECE" />
            <stop offset="0.7354" style="stop-color:#BFBFBF" />
            <stop offset="0.8414" style="stop-color:#B6B6B6" />
            <stop offset="1" style="stop-color:#B3B3B3" />
          </radialGradient>
          <path
            :class="`sx-${info.id}-st105`"
            d="M242.44,50c-2.92,8.58-18.88,13.35-36.56,13.35S175.5,58.58,178.42,50c2.92-8.58,19.63-15.54,37.31-15.54
                  S245.37,41.42,242.44,50z"
          />
          <g>
            <radialGradient
              id="sx_100_"
              cx="208.5727"
              cy="59.7439"
              r="55.069"
              gradientTransform="matrix(1 0 0 0.5198 0 28.6902)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.5754" style="stop-color:#525451;stop-opacity:0" />
              <stop offset="1" style="stop-color:#525451;stop-opacity:0.6" />
            </radialGradient>
            <path
              :class="`sx-${info.id}-st106`"
              d="M242.44,50c-2.92,8.58-18.88,13.35-36.56,13.35S175.5,58.58,178.42,50c2.92-8.58,19.63-15.54,37.31-15.54
                    S245.37,41.42,242.44,50z"
            />
          </g>
        </g>
        <g>
          <linearGradient
            id="sx_101_"
            gradientUnits="userSpaceOnUse"
            x1="54.906"
            y1="24.1899"
            x2="69.7246"
            y2="24.1899"
          >
            <stop offset="0" style="stop-color:#919191" />
            <stop offset="0.3324" style="stop-color:#FFFFFF" />
            <stop offset="0.7374" style="stop-color:#616161" />
            <stop offset="0.8086" style="stop-color:#656565" />
            <stop offset="0.8853" style="stop-color:#727272" />
            <stop offset="0.9645" style="stop-color:#888888" />
            <stop offset="1" style="stop-color:#949494" />
          </linearGradient>
          <path
            :class="`sx-${info.id}-st107`"
            d="M69.78,31.58c0,0-2.62,2.74-7.32,2.74c-4.7,0-7.55-2.74-7.55-2.74V14.07h14.87V31.58z"
          />

          <radialGradient
            id="sx_102_"
            cx="62.5743"
            cy="16.0469"
            r="21.4819"
            gradientTransform="matrix(1 0 0 0.3105 0 11.064)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.595" style="stop-color:#292A22;stop-opacity:0.5" />
            <stop offset="1" style="stop-color:#292A22;stop-opacity:0" />
          </radialGradient>
          <rect
            x="54.91"
            y="13.87"
            :class="`sx-${info.id}-st108`"
            width="14.87"
            height="12.28"
          />
          <linearGradient
            id="sx_103_"
            gradientUnits="userSpaceOnUse"
            x1="45.3902"
            y1="14.8155"
            x2="79.1289"
            y2="14.8155"
          >
            <stop offset="0" style="stop-color:#919191" />
            <stop offset="0.3324" style="stop-color:#FFFFFF" />
            <stop offset="0.7374" style="stop-color:#616161" />
            <stop offset="0.8086" style="stop-color:#656565" />
            <stop offset="0.8853" style="stop-color:#727272" />
            <stop offset="0.9645" style="stop-color:#888888" />
            <stop offset="1" style="stop-color:#949494" />
          </linearGradient>
          <path
            :class="`sx-${info.id}-st109`"
            d="M75.4,11.4c-3.07-1.25-7.78-2.05-13.06-2.05s-9.99,0.8-13.06,2.05h-3.68v3.42c0,3.02,7.49,5.47,16.73,5.47
                  s16.73-2.45,16.73-5.47V11.4H75.4z"
          />
          <linearGradient
            id="sx_104_"
            gradientUnits="userSpaceOnUse"
            x1="58.8037"
            y1="16.252"
            x2="65.1768"
            y2="7.5045"
          >
            <stop offset="0" style="stop-color:#BEBEBE" />
            <stop offset="1" style="stop-color:#A2A2A2" />
          </linearGradient>
          <ellipse
            :class="`sx-${info.id}-st110`"
            cx="62.34"
            cy="11.4"
            rx="16.73"
            ry="5.47"
          />
          <linearGradient
            id="sx_105_"
            gradientUnits="userSpaceOnUse"
            x1="69.1287"
            y1="10.7125"
            x2="55.9401"
            y2="10.7125"
          >
            <stop offset="0" style="stop-color:#363636" />
            <stop offset="0.3771" style="stop-color:#808080" />
            <stop offset="1" style="stop-color:#292929" />
          </linearGradient>
          <ellipse
            :class="`sx-${info.id}-st111`"
            cx="62.34"
            cy="10.71"
            rx="6.77"
            ry="2.21"
          />
          <linearGradient
            id="sx_106_"
            gradientUnits="userSpaceOnUse"
            x1="79.1291"
            y1="13.0875"
            x2="45.8104"
            y2="14.1374"
          >
            <stop offset="0.014" style="stop-color:#C2C2C2" />
            <stop offset="0.5251" style="stop-color:#FFFFFF" />
            <stop offset="1" style="stop-color:#ABABAB" />
          </linearGradient>
          <path
            :class="`sx-${info.id}-st112`"
            d="M62.34,15.8c-8.69,0-15.84-2.17-16.65-4.94c-0.05,0.17-0.08,0.35-0.08,0.53c0,3.02,7.49,5.47,16.73,5.47
                  s16.73-2.45,16.73-5.47c0-0.18-0.03-0.36-0.08-0.53C78.18,13.64,71.03,15.8,62.34,15.8z"
          />
        </g>
        <g>
          <linearGradient
            id="sx_107_"
            gradientUnits="userSpaceOnUse"
            x1="258.9527"
            y1="424.3335"
            x2="273.7712"
            y2="424.3335"
            gradientTransform="matrix(6.123234e-17 1 -1 6.123234e-17 701.171 -100.7268)"
          >
            <stop offset="0" style="stop-color:#919191" />
            <stop offset="0.3324" style="stop-color:#FFFFFF" />
            <stop offset="0.7374" style="stop-color:#616161" />
            <stop offset="0.8086" style="stop-color:#656565" />
            <stop offset="0.8853" style="stop-color:#727272" />
            <stop offset="0.9645" style="stop-color:#888888" />
            <stop offset="1" style="stop-color:#949494" />
          </linearGradient>
          <path
            :class="`sx-${info.id}-st113`"
            d="M269.45,173.1c0,0-2.74-2.62-2.74-7.32c0-4.7,2.74-7.55,2.74-7.55h17.51v14.87H269.45z"
          />

          <radialGradient
            id="sx_108_"
            cx="266.6209"
            cy="416.1904"
            r="21.4819"
            gradientTransform="matrix(6.123234e-17 1 -0.3105 1.901384e-17 414.2158 -100.7268)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.595" style="stop-color:#292A22;stop-opacity:0.5" />
            <stop offset="1" style="stop-color:#292A22;stop-opacity:0" />
          </radialGradient>
          <polygon
            :class="`sx-${info.id}-st114`"
            points="287.16,173.1 287.16,158.23 274.88,158.23 274.88,173.1 		"
          />

          <linearGradient
            id="sx_109_"
            gradientUnits="userSpaceOnUse"
            x1="249.4369"
            y1="414.9591"
            x2="283.1756"
            y2="414.9591"
            gradientTransform="matrix(6.123234e-17 1 -1 6.123234e-17 701.171 -100.7268)"
          >
            <stop offset="0" style="stop-color:#919191" />
            <stop offset="0.3324" style="stop-color:#FFFFFF" />
            <stop offset="0.7374" style="stop-color:#616161" />
            <stop offset="0.8086" style="stop-color:#656565" />
            <stop offset="0.8853" style="stop-color:#727272" />
            <stop offset="0.9645" style="stop-color:#888888" />
            <stop offset="1" style="stop-color:#949494" />
          </linearGradient>
          <path
            :class="`sx-${info.id}-st115`"
            d="M289.63,178.72c1.25-3.07,2.05-7.78,2.05-13.06s-0.8-9.99-2.05-13.06v-3.68h-3.42
                  c-3.02,0-5.47,7.49-5.47,16.73s2.45,16.73,5.47,16.73h3.42V178.72z"
          />

          <linearGradient
            id="sx_110_"
            gradientUnits="userSpaceOnUse"
            x1="262.8503"
            y1="416.3955"
            x2="269.2234"
            y2="407.6481"
            gradientTransform="matrix(6.123234e-17 1 -1 6.123234e-17 701.171 -100.7268)"
          >
            <stop offset="0" style="stop-color:#BEBEBE" />
            <stop offset="1" style="stop-color:#A2A2A2" />
          </linearGradient>
          <ellipse
            :class="`sx-${info.id}-st116`"
            cx="289.63"
            cy="165.66"
            rx="5.47"
            ry="16.73"
          />

          <linearGradient
            id="sx_111_"
            gradientUnits="userSpaceOnUse"
            x1="273.1754"
            y1="410.856"
            x2="259.9867"
            y2="410.856"
            gradientTransform="matrix(6.123234e-17 1 -1 6.123234e-17 701.171 -100.7268)"
          >
            <stop offset="0" style="stop-color:#363636" />
            <stop offset="0.3771" style="stop-color:#808080" />
            <stop offset="1" style="stop-color:#292929" />
          </linearGradient>
          <ellipse
            :class="`sx-${info.id}-st117`"
            cx="290.31"
            cy="165.66"
            rx="2.21"
            ry="6.77"
          />

          <linearGradient
            id="sx_112_"
            gradientUnits="userSpaceOnUse"
            x1="283.1758"
            y1="413.231"
            x2="249.857"
            y2="414.281"
            gradientTransform="matrix(6.123234e-17 1 -1 6.123234e-17 701.171 -100.7268)"
          >
            <stop offset="0.014" style="stop-color:#C2C2C2" />
            <stop offset="0.5251" style="stop-color:#FFFFFF" />
            <stop offset="1" style="stop-color:#ABABAB" />
          </linearGradient>
          <path
            :class="`sx-${info.id}-st118`"
            d="M285.22,165.66c0-8.69,2.17-15.84,4.94-16.65c-0.17-0.05-0.35-0.08-0.53-0.08c-3.02,0-5.47,7.49-5.47,16.73
                  s2.45,16.73,5.47,16.73c0.18,0,0.36-0.03,0.53-0.08C287.39,181.5,285.22,174.35,285.22,165.66z"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "deviceSxCom",
  data() {
    return {};
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
          "box-shadow"
        ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      }
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;
      if (backgroundRepeat) {
        styles["background-repeat"] = backgroundRepeat;
      }
      if (backgroundSize) {
        styles["background-size"] = backgroundSize;
      }
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;

      if (borderTop) {
        if (borderStyle) {
          styles["border-top-style"] = borderStyle;
        }
        styles["border-top-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-top-color"] = borderColor;
        }
      } else {
        styles["border-top"] = "none";
      }
      if (borderBottom) {
        if (borderStyle) {
          styles["border-bottom-style"] = borderStyle;
        }
        styles["border-bottom-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-bottom-color"] = borderColor;
        }
      } else {
        styles["border-bottom"] = "none";
      }
      if (borderLeft) {
        if (borderStyle) {
          styles["border-left-style"] = borderStyle;
        }
        styles["border-left-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-left-color"] = borderColor;
        }
      } else {
        styles["border-left"] = "none";
      }
      if (borderRight) {
        if (borderStyle) {
          styles["border-right-style"] = borderStyle;
        }
        styles["border-right-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-right-color"] = borderColor;
        }
      } else {
        styles["border-right"] = "none";
      }
      styles[
        "border-radius"
      ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
      if (backgroundType == "purity") {
        //纯色
        if (backgroundColor) {
          styles["backgroundColor"] = backgroundColor;
        }
        if (backgroundImage) {
          styles["background-image"] = `url(${this.$loadImgUrl(
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

    init() {}
  }
};
</script>
<style lang="less" scoped>
// @import (reference) "./../../../../assets/less/common.less";
</style>

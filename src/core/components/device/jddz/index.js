import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";

class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {}

  //组件样式

  template() {
    let { info = {} } = this;
    return super.wrap(
      { info },
      `
    <div class="bm-device-jddz-com component"
    style="${this.composeStyles(this.comStyle())}">
${this.renderSvg()}
  </div>
    `
    );
  }

  renderSvg() {
    let { info = {} } = this;
    let { id = "", width = 0, height = 0 } = info || {};
    return `<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 70 60"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
    .jddz-${id}-st0{fill:#ABACAF;}
        .jddz-${id}-st1{fill:url(#jddz_2_);}
        .jddz-${id}-st2{fill:#DCDBDB;}
        .jddz-${id}-st3{fill:url(#jddz_3_);}
        .jddz-${id}-st4{fill:url(#jddz_4_);}
        .jddz-${id}-st5{fill:url(#jddz_5_);}
        .jddz-${id}-st6{fill:url(#jddz_6_);}
        .jddz-${id}-st7{fill:url(#jddz_7_);}
        .jddz-${id}-st8{fill:url(#jddz_8_);}
        .jddz-${id}-st9{fill:url(#jddz_9_);}
        .jddz-${id}-st10{fill:url(#jddz_10_);}
        .jddz-${id}-st11{fill:url(#jddz_11_);}
        .jddz-${id}-st12{fill:url(#jddz_12_);}
        .jddz-${id}-st13{opacity:0.3;fill:#040000;}
        .jddz-${id}-st14{fill:url(#jddz_13_);}
        .jddz-${id}-st15{fill:url(#jddz_14_);}
        .jddz-${id}-st16{fill:url(#jddz_15_);}
        .jddz-${id}-st17{fill:url(#jddz_16_);}
        .jddz-${id}-st18{fill:url(#jddz_17_);}
        .jddz-${id}-st19{fill:url(#jddz_18_);}
        .jddz-${id}-st20{fill:url(#jddz_19_);}
        .jddz-${id}-st21{fill:url(#jddz_20_);}
        .jddz-${id}-st22{fill:url(#jddz_21_);}
        .jddz-${id}-st23{fill:url(#jddz_22_);}
        .jddz-${id}-st24{fill:url(#jddz_23_);}
        .jddz-${id}-st25{fill:url(#jddz_24_);}
        .jddz-${id}-st26{fill:url(#jddz_25_);}
        .jddz-${id}-st27{fill:url(#jddz_26_);}
        .jddz-${id}-st28{fill:url(#jddz_27_);}
        .jddz-${id}-st29{fill:url(#jddz_28_);}
        .jddz-${id}-st30{fill:url(#jddz_30_);}
        .jddz-${id}-st31{fill:url(#jddz_31_);}
        .jddz-${id}-st32{fill:url(#jddz_32_);}
        .jddz-${id}-st33{fill:url(#jddz_33_);}
        .jddz-${id}-st34{fill:url(#jddz_35_);}
        .jddz-${id}-st35{fill:url(#jddz_36_);}
        .jddz-${id}-st36{fill:url(#jddz_37_);}
        .jddz-${id}-st37{fill:url(#jddz_92_);}
        .jddz-${id}-st38{fill:url(#jddz_93_);}
        .jddz-${id}-st39{fill:url(#jddz_94_);}
        .jddz-${id}-st40{fill:#E6E7E8;}
        .jddz-${id}-st41{fill:#3E3F44;}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    return `
  <g id="jddz_147_">
    <rect
      id="jddz_146_"
      x="9.4"
      y="43.1"
      class="jddz-${id}-st0"
      width="50.7"
      height="4.8"
    />
    <linearGradient
      id="jddz_2_"
      gradientUnits="userSpaceOnUse"
      x1="9.2353"
      y1="55.8063"
      x2="9.2353"
      y2="33.3412"
    >
      <stop offset="0" style="stop-color:#FFFFFF" />
      <stop offset="0.9412" style="stop-color:#959AA2" />
    </linearGradient>
    <polygon
      id="jddz_70_"
      class="jddz-${id}-st1"
      points="11.7,57.6 2.6,57.6 7.8,32.4 15.9,32.4 	"
    />
    <rect
      id="jddz_41_"
      x="2.6"
      y="57.6"
      class="jddz-${id}-st2"
      width="9.1"
      height="2"
    />

    <linearGradient
      id="jddz_3_"
      gradientUnits="userSpaceOnUse"
      x1="-1247.0084"
      y1="55.8063"
      x2="-1247.0084"
      y2="33.3412"
      gradientTransform="matrix(-1 0 0 1 -1185.3948 0)"
    >
      <stop offset="0" style="stop-color:#FFFFFF" />
      <stop offset="0.9412" style="stop-color:#959AA2" />
    </linearGradient>
    <polygon
      id="jddz_145_"
      class="jddz-${id}-st3"
      points="59.2,57.6 68.2,57.6 63,32.4 55,32.4 	"
    />
    <rect
      id="jddz_144_"
      x="59.2"
      y="57.6"
      class="jddz-${id}-st2"
      width="9.1"
      height="2"
    />
    <linearGradient
      id="jddz_4_"
      gradientUnits="userSpaceOnUse"
      x1="35.1669"
      y1="37.1609"
      x2="35.1669"
      y2="40.8707"
    >
      <stop offset="7.486631e-002" style="stop-color:#959AA2" />
      <stop offset="0.4813" style="stop-color:#FFFFFF" />
      <stop offset="0.9412" style="stop-color:#959AA2" />
    </linearGradient>
    <rect
      id="jddz_84_"
      x="3.8"
      y="37"
      class="jddz-${id}-st4"
      width="62.8"
      height="4.3"
    />
    <g id="jddz_49_">
      <linearGradient
        id="jddz_5_"
        gradientUnits="userSpaceOnUse"
        x1="0.5"
        y1="26.458"
        x2="20.3952"
        y2="26.458"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="jddz_48_"
        class="jddz-${id}-st5"
        d="M0.5,23.3v1.6c0,2.6,4.5,4.8,9.9,4.8c5.5,0,9.9-2.1,9.9-4.8v-1.6H0.5z"
      />
      <linearGradient
        id="jddz_6_"
        gradientUnits="userSpaceOnUse"
        x1="10.4476"
        y1="18.9021"
        x2="10.4476"
        y2="27.1568"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="jddz_42_"
        class="jddz-${id}-st6"
        cx="10.4"
        cy="23.3"
        rx="9.9"
        ry="4.8"
      />
      <linearGradient
        id="jddz_7_"
        gradientUnits="userSpaceOnUse"
        x1="0.5"
        y1="21.2201"
        x2="20.3952"
        y2="21.2201"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="jddz_39_"
        class="jddz-${id}-st7"
        d="M0.5,18.1v1.6c0,2.6,4.5,4.8,9.9,4.8c5.5,0,9.9-2.1,9.9-4.8v-1.6H0.5z"
      />
      <linearGradient
        id="jddz_8_"
        gradientUnits="userSpaceOnUse"
        x1="10.4476"
        y1="13.6642"
        x2="10.4476"
        y2="21.919"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="jddz_38_"
        class="jddz-${id}-st8"
        cx="10.4"
        cy="18.1"
        rx="9.9"
        ry="4.8"
      />
      <linearGradient
        id="jddz_9_"
        gradientUnits="userSpaceOnUse"
        x1="0.5"
        y1="15.9823"
        x2="20.3952"
        y2="15.9823"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="jddz_34_"
        class="jddz-${id}-st9"
        d="M0.5,12.8v1.6c0,2.6,4.5,4.8,9.9,4.8c5.5,0,9.9-2.1,9.9-4.8v-1.6H0.5z"
      />
      <linearGradient
        id="jddz_10_"
        gradientUnits="userSpaceOnUse"
        x1="10.4476"
        y1="8.4264"
        x2="10.4476"
        y2="16.6811"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="jddz_29_"
        class="jddz-${id}-st10"
        cx="10.4"
        cy="12.8"
        rx="9.9"
        ry="4.8"
      />
      <linearGradient
        id="jddz_11_"
        gradientUnits="userSpaceOnUse"
        x1="0.5"
        y1="10.7444"
        x2="20.3952"
        y2="10.7444"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="jddz_44_"
        class="jddz-${id}-st11"
        d="M0.5,7.6v1.6c0,2.6,4.5,4.8,9.9,4.8c5.5,0,9.9-2.1,9.9-4.8V7.6H0.5z"
      />
      <linearGradient
        id="jddz_12_"
        gradientUnits="userSpaceOnUse"
        x1="10.4476"
        y1="3.1885"
        x2="10.4476"
        y2="11.4433"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="jddz_43_"
        class="jddz-${id}-st12"
        cx="10.4"
        cy="7.6"
        rx="9.9"
        ry="4.8"
      />
      <g id="jddz_45_">
        <path
          id="jddz_50_"
          class="jddz-${id}-st13"
          d="M10.4,9.4C7.8,9.4,6,8.3,6,6.7S7.8,4,10.4,4s4.5,1.1,4.5,2.7S13.1,9.4,10.4,9.4z"
        />
        <linearGradient
          id="jddz_13_"
          gradientUnits="userSpaceOnUse"
          x1="7.0012"
          y1="4.9995"
          x2="13.894"
          y2="4.9995"
        >
          <stop offset="0" style="stop-color:#ABB0B8" />
          <stop offset="0.4813" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#A9ADB6" />
        </linearGradient>
        <path
          id="jddz_47_"
          class="jddz-${id}-st14"
          d="M7,1.9v4.6c0,0.9,1.5,1.6,3.4,1.6c1.9,0,3.4-0.7,3.4-1.6V1.9H7z"
        />
        <linearGradient
          id="jddz_14_"
          gradientUnits="userSpaceOnUse"
          x1="10.4476"
          y1="0.537"
          x2="10.4476"
          y2="3.1168"
        >
          <stop offset="0" style="stop-color:#959AA2" />
          <stop offset="1" style="stop-color:#DADEE5" />
        </linearGradient>
        <ellipse
          id="jddz_46_"
          class="jddz-${id}-st15"
          cx="10.4"
          cy="1.9"
          rx="3.4"
          ry="1.6"
        />
      </g>
      <linearGradient
        id="jddz_15_"
        gradientUnits="userSpaceOnUse"
        x1="10.4628"
        y1="8.0125"
        x2="10.4628"
        y2="41.3685"
      >
        <stop offset="0" style="stop-color:#959AA2" />
        <stop offset="1" style="stop-color:#DADEE5" />
      </linearGradient>
      <rect
        id="jddz_40_"
        x="9.2"
        y="6.6"
        class="jddz-${id}-st16"
        width="2.4"
        height="38.4"
      />
    </g>
    <g id="jddz_52_">
      <linearGradient
        id="jddz_16_"
        gradientUnits="userSpaceOnUse"
        x1="24.5941"
        y1="26.458"
        x2="44.4893"
        y2="26.458"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="jddz_67_"
        class="jddz-${id}-st17"
        d="M24.6,23.3v1.6c0,2.6,4.5,4.8,9.9,4.8c5.5,0,9.9-2.1,9.9-4.8v-1.6H24.6z"
      />
      <linearGradient
        id="jddz_17_"
        gradientUnits="userSpaceOnUse"
        x1="34.5417"
        y1="18.9021"
        x2="34.5417"
        y2="27.1568"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="jddz_66_"
        class="jddz-${id}-st18"
        cx="34.5"
        cy="23.3"
        rx="9.9"
        ry="4.8"
      />
      <linearGradient
        id="jddz_18_"
        gradientUnits="userSpaceOnUse"
        x1="24.5941"
        y1="21.2201"
        x2="44.4893"
        y2="21.2201"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="jddz_65_"
        class="jddz-${id}-st19"
        d="M24.6,18.1v1.6c0,2.6,4.5,4.8,9.9,4.8c5.5,0,9.9-2.1,9.9-4.8v-1.6H24.6z"
      />
      <linearGradient
        id="jddz_19_"
        gradientUnits="userSpaceOnUse"
        x1="34.5417"
        y1="13.6642"
        x2="34.5417"
        y2="21.919"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="jddz_64_"
        class="jddz-${id}-st20"
        cx="34.5"
        cy="18.1"
        rx="9.9"
        ry="4.8"
      />
      <linearGradient
        id="jddz_20_"
        gradientUnits="userSpaceOnUse"
        x1="24.5941"
        y1="15.9823"
        x2="44.4893"
        y2="15.9823"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="jddz_63_"
        class="jddz-${id}-st21"
        d="M24.6,12.8v1.6c0,2.6,4.5,4.8,9.9,4.8c5.5,0,9.9-2.1,9.9-4.8v-1.6H24.6z"
      />
      <linearGradient
        id="jddz_21_"
        gradientUnits="userSpaceOnUse"
        x1="34.5417"
        y1="8.4264"
        x2="34.5417"
        y2="16.6811"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="jddz_62_"
        class="jddz-${id}-st22"
        cx="34.5"
        cy="12.8"
        rx="9.9"
        ry="4.8"
      />
      <linearGradient
        id="jddz_22_"
        gradientUnits="userSpaceOnUse"
        x1="24.5941"
        y1="10.7444"
        x2="44.4893"
        y2="10.7444"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="jddz_61_"
        class="jddz-${id}-st23"
        d="M24.6,7.6v1.6c0,2.6,4.5,4.8,9.9,4.8c5.5,0,9.9-2.1,9.9-4.8V7.6H24.6z"
      />
      <linearGradient
        id="jddz_23_"
        gradientUnits="userSpaceOnUse"
        x1="34.5417"
        y1="3.1885"
        x2="34.5417"
        y2="11.4433"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="jddz_60_"
        class="jddz-${id}-st24"
        cx="34.5"
        cy="7.6"
        rx="9.9"
        ry="4.8"
      />
      <g id="jddz_55_">
        <path
          id="jddz_58_"
          class="jddz-${id}-st13"
          d="M34.5,9.4c-2.6,0-4.5-1.1-4.5-2.7S31.9,4,34.5,4C37.1,4,39,5.1,39,6.7S37.1,9.4,34.5,9.4z"
        />
        <linearGradient
          id="jddz_24_"
          gradientUnits="userSpaceOnUse"
          x1="31.0953"
          y1="4.9995"
          x2="37.988"
          y2="4.9995"
        >
          <stop offset="0" style="stop-color:#ABB0B8" />
          <stop offset="0.4813" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#A9ADB6" />
        </linearGradient>
        <path
          id="jddz_57_"
          class="jddz-${id}-st25"
          d="M31.1,1.9v4.6c0,0.9,1.5,1.6,3.4,1.6c1.9,0,3.4-0.7,3.4-1.6V1.9H31.1z"
        />
        <linearGradient
          id="jddz_25_"
          gradientUnits="userSpaceOnUse"
          x1="34.5417"
          y1="0.537"
          x2="34.5417"
          y2="3.1168"
        >
          <stop offset="0" style="stop-color:#959AA2" />
          <stop offset="1" style="stop-color:#DADEE5" />
        </linearGradient>
        <ellipse
          id="jddz_56_"
          class="jddz-${id}-st26"
          cx="34.5"
          cy="1.9"
          rx="3.4"
          ry="1.6"
        />
      </g>
      <linearGradient
        id="jddz_26_"
        gradientUnits="userSpaceOnUse"
        x1="34.5181"
        y1="35.7227"
        x2="34.5181"
        y2="42.7185"
      >
        <stop offset="7.486631e-002" style="stop-color:#959AA2" />
        <stop offset="0.4813" style="stop-color:#FFFFFF" />
        <stop offset="0.9412" style="stop-color:#959AA2" />
      </linearGradient>
      <rect
        id="jddz_54_"
        x="31.7"
        y="35.4"
        class="jddz-${id}-st27"
        width="5.6"
        height="8.1"
      />
      <linearGradient
        id="jddz_27_"
        gradientUnits="userSpaceOnUse"
        x1="34.5568"
        y1="8.0125"
        x2="34.5568"
        y2="41.3685"
      >
        <stop offset="0" style="stop-color:#959AA2" />
        <stop offset="1" style="stop-color:#DADEE5" />
      </linearGradient>
      <rect
        id="jddz_53_"
        x="33.3"
        y="6.6"
        class="jddz-${id}-st28"
        width="2.4"
        height="38.4"
      />
    </g>
    <g id="jddz_68_">
      <linearGradient
        id="jddz_28_"
        gradientUnits="userSpaceOnUse"
        x1="49.7357"
        y1="26.458"
        x2="69.6309"
        y2="26.458"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="jddz_83_"
        class="jddz-${id}-st29"
        d="M49.7,23.3v1.6c0,2.6,4.5,4.8,9.9,4.8c5.5,0,9.9-2.1,9.9-4.8v-1.6H49.7z"
      />
      <linearGradient
        id="jddz_30_"
        gradientUnits="userSpaceOnUse"
        x1="59.6833"
        y1="18.9021"
        x2="59.6833"
        y2="27.1568"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="jddz_82_"
        class="jddz-${id}-st30"
        cx="59.7"
        cy="23.3"
        rx="9.9"
        ry="4.8"
      />
      <linearGradient
        id="jddz_31_"
        gradientUnits="userSpaceOnUse"
        x1="49.7357"
        y1="21.2201"
        x2="69.6309"
        y2="21.2201"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="jddz_81_"
        class="jddz-${id}-st31"
        d="M49.7,18.1v1.6c0,2.6,4.5,4.8,9.9,4.8c5.5,0,9.9-2.1,9.9-4.8v-1.6H49.7z"
      />
      <linearGradient
        id="jddz_32_"
        gradientUnits="userSpaceOnUse"
        x1="59.6833"
        y1="13.6642"
        x2="59.6833"
        y2="21.919"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="jddz_80_"
        class="jddz-${id}-st32"
        cx="59.7"
        cy="18.1"
        rx="9.9"
        ry="4.8"
      />
      <linearGradient
        id="jddz_33_"
        gradientUnits="userSpaceOnUse"
        x1="49.7357"
        y1="15.9823"
        x2="69.6309"
        y2="15.9823"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="jddz_79_"
        class="jddz-${id}-st33"
        d="M49.7,12.8v1.6c0,2.6,4.5,4.8,9.9,4.8c5.5,0,9.9-2.1,9.9-4.8v-1.6H49.7z"
      />
      <linearGradient
        id="jddz_35_"
        gradientUnits="userSpaceOnUse"
        x1="59.6833"
        y1="8.4264"
        x2="59.6833"
        y2="16.6811"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="jddz_78_"
        class="jddz-${id}-st34"
        cx="59.7"
        cy="12.8"
        rx="9.9"
        ry="4.8"
      />
      <linearGradient
        id="jddz_36_"
        gradientUnits="userSpaceOnUse"
        x1="49.7357"
        y1="10.7444"
        x2="69.6309"
        y2="10.7444"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="jddz_77_"
        class="jddz-${id}-st35"
        d="M49.7,7.6v1.6c0,2.6,4.5,4.8,9.9,4.8c5.5,0,9.9-2.1,9.9-4.8V7.6H49.7z"
      />
      <linearGradient
        id="jddz_37_"
        gradientUnits="userSpaceOnUse"
        x1="59.6833"
        y1="3.1885"
        x2="59.6833"
        y2="11.4433"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="jddz_76_"
        class="jddz-${id}-st36"
        cx="59.7"
        cy="7.6"
        rx="9.9"
        ry="4.8"
      />
      <g id="jddz_71_">
        <path
          id="jddz_74_"
          class="jddz-${id}-st13"
          d="M59.7,9.4c-2.6,0-4.5-1.1-4.5-2.7S57.1,4,59.7,4c2.6,0,4.5,1.1,4.5,2.7S62.3,9.4,59.7,9.4z"
        />
        <linearGradient
          id="jddz_92_"
          gradientUnits="userSpaceOnUse"
          x1="56.2369"
          y1="4.9995"
          x2="63.1297"
          y2="4.9995"
        >
          <stop offset="0" style="stop-color:#ABB0B8" />
          <stop offset="0.4813" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#A9ADB6" />
        </linearGradient>
        <path
          id="jddz_73_"
          class="jddz-${id}-st37"
          d="M56.2,1.9v4.6c0,0.9,1.5,1.6,3.4,1.6c1.9,0,3.4-0.7,3.4-1.6V1.9H56.2z"
        />
        <linearGradient
          id="jddz_93_"
          gradientUnits="userSpaceOnUse"
          x1="59.6833"
          y1="0.537"
          x2="59.6833"
          y2="3.1168"
        >
          <stop offset="0" style="stop-color:#959AA2" />
          <stop offset="1" style="stop-color:#DADEE5" />
        </linearGradient>
        <ellipse
          id="jddz_72_"
          class="jddz-${id}-st38"
          cx="59.7"
          cy="1.9"
          rx="3.4"
          ry="1.6"
        />
      </g>
      <linearGradient
        id="jddz_94_"
        gradientUnits="userSpaceOnUse"
        x1="59.6985"
        y1="8.0125"
        x2="59.6985"
        y2="41.3685"
      >
        <stop offset="0" style="stop-color:#959AA2" />
        <stop offset="1" style="stop-color:#DADEE5" />
      </linearGradient>
      <rect
        id="jddz_69_"
        x="58.5"
        y="6.6"
        class="jddz-${id}-st39"
        width="2.4"
        height="38.4"
      />
    </g>
    <g id="jddz_135_">
      <path
        id="jddz_85_"
        class="jddz-${id}-st40"
        d="M9.3,57l-3.9-0.6L9.2,32c0,0,0.5-0.6,2-0.3c1.4,0.2,2,1,2,1L9.3,57z"
      />
      <path
        id="jddz_90_"
        class="jddz-${id}-st41"
        d="M10.6,35.5c-2.3-0.4-4.3,0.4-4.5,1.7C6,38.1,6.7,39,8,39.5L8.2,38c-0.4-0.2-0.5-0.5-0.5-0.6
          c0-0.3,1.1-0.7,2.7-0.5c1.6,0.2,2.5,1,2.4,1.3c0,0.1-0.3,0.3-0.7,0.4l-0.2,1.5c1.4-0.2,2.3-0.8,2.5-1.7
          C14.6,37.1,13,35.9,10.6,35.5z"
      />
      <path
        id="jddz_86_"
        class="jddz-${id}-st41"
        d="M10.1,38.6c-2.3-0.4-4.3,0.4-4.5,1.7c-0.1,0.9,0.6,1.8,1.8,2.4l0.2-1.5
          c-0.4-0.2-0.5-0.5-0.5-0.6c0-0.3,1.1-0.7,2.7-0.5c1.6,0.2,2.5,1,2.4,1.3c0,0.1-0.3,0.3-0.7,0.4l-0.2,1.5c1.4-0.2,2.3-0.8,2.5-1.7
          C14.1,40.2,12.5,39,10.1,38.6z"
      />
      <path
        id="jddz_87_"
        class="jddz-${id}-st41"
        d="M9.7,41.7c-2.3-0.4-4.3,0.4-4.5,1.7C5,44.3,5.8,45.2,7,45.8l0.2-1.5
          c-0.4-0.2-0.5-0.5-0.5-0.6c0-0.3,1.1-0.7,2.7-0.5c1.6,0.2,2.5,1,2.4,1.3c0,0.1-0.3,0.3-0.7,0.4l-0.2,1.5c1.4-0.2,2.3-0.8,2.5-1.7
          C13.6,43.3,12,42.1,9.7,41.7z"
      />
      <path
        id="jddz_91_"
        class="jddz-${id}-st41"
        d="M9.2,44.8c-2.3-0.4-4.3,0.4-4.5,1.7c-0.1,0.9,0.6,1.8,1.8,2.4l0.2-1.5
          c-0.4-0.2-0.5-0.5-0.5-0.6c0-0.3,1.1-0.7,2.7-0.5c1.6,0.2,2.5,1,2.4,1.3c0,0.1-0.3,0.3-0.7,0.4l-0.2,1.5c1.4-0.2,2.3-0.8,2.5-1.7
          C13.1,46.5,11.5,45.2,9.2,44.8z"
      />
      <path
        id="jddz_89_"
        class="jddz-${id}-st41"
        d="M8.7,47.9c-2.3-0.4-4.3,0.4-4.5,1.7C4.1,50.5,4.8,51.4,6,52l0.2-1.5
          c-0.4-0.2-0.5-0.5-0.5-0.6c0-0.3,1.1-0.7,2.7-0.5c1.6,0.2,2.5,1,2.4,1.3c0,0.1-0.3,0.3-0.7,0.4L10,52.6c1.4-0.2,2.3-0.8,2.5-1.7
          C12.6,49.6,11,48.3,8.7,47.9z"
      />
      <path
        id="jddz_88_"
        class="jddz-${id}-st41"
        d="M8.2,51c-2.3-0.4-4.3,0.4-4.5,1.7c-0.1,0.9,0.6,1.8,1.8,2.4l0.2-1.5
          c-0.4-0.2-0.5-0.5-0.5-0.6c0-0.3,1.1-0.7,2.7-0.5c1.6,0.2,2.5,1,2.4,1.3c0,0.1-0.3,0.3-0.7,0.4l-0.2,1.5c1.4-0.2,2.3-0.8,2.5-1.7
          C12.2,52.7,10.6,51.4,8.2,51z"
      />
    </g>
    <g id="jddz_136_">
      <path
        id="jddz_143_"
        class="jddz-${id}-st40"
        d="M61.6,57l3.9-0.6L61.7,32c0,0-0.5-0.6-2-0.3c-1.4,0.2-2,1-2,1L61.6,57z"
      />
      <path
        id="jddz_142_"
        class="jddz-${id}-st41"
        d="M60.2,35.5c2.3-0.4,4.3,0.4,4.5,1.7c0.1,0.9-0.6,1.8-1.8,2.4L62.6,38
          c0.4-0.2,0.5-0.5,0.5-0.6c0-0.3-1.1-0.7-2.7-0.5c-1.6,0.2-2.5,1-2.4,1.3c0,0.1,0.3,0.3,0.7,0.4l0.2,1.5c-1.4-0.2-2.3-0.8-2.5-1.7
          C56.3,37.1,57.9,35.9,60.2,35.5z"
      />
      <path
        id="jddz_141_"
        class="jddz-${id}-st41"
        d="M60.7,38.6c2.3-0.4,4.3,0.4,4.5,1.7c0.1,0.9-0.6,1.8-1.8,2.4l-0.2-1.5
          c0.4-0.2,0.5-0.5,0.5-0.6c0-0.3-1.1-0.7-2.7-0.5c-1.6,0.2-2.5,1-2.4,1.3c0,0.1,0.3,0.3,0.7,0.4l0.2,1.5c-1.4-0.2-2.3-0.8-2.5-1.7
          C56.8,40.2,58.4,39,60.7,38.6z"
      />
      <path
        id="jddz_140_"
        class="jddz-${id}-st41"
        d="M61.2,41.7c2.3-0.4,4.3,0.4,4.5,1.7c0.1,0.9-0.6,1.8-1.8,2.4l-0.2-1.5
          c0.4-0.2,0.5-0.5,0.5-0.6c0-0.3-1.1-0.7-2.7-0.5c-1.6,0.2-2.5,1-2.4,1.3c0,0.1,0.3,0.3,0.7,0.4l0.2,1.5c-1.4-0.2-2.3-0.8-2.5-1.7
          C57.2,43.3,58.8,42.1,61.2,41.7z"
      />
      <path
        id="jddz_139_"
        class="jddz-${id}-st41"
        d="M61.7,44.8c2.3-0.4,4.3,0.4,4.5,1.7c0.1,0.9-0.6,1.8-1.8,2.4l-0.2-1.5
          c0.4-0.2,0.5-0.5,0.5-0.6c0-0.3-1.1-0.7-2.7-0.5c-1.6,0.2-2.5,1-2.4,1.3c0,0.1,0.3,0.3,0.7,0.4l0.2,1.5c-1.4-0.2-2.3-0.8-2.5-1.7
          C57.7,46.5,59.3,45.2,61.7,44.8z"
      />
      <path
        id="jddz_138_"
        class="jddz-${id}-st41"
        d="M62.2,47.9c2.3-0.4,4.3,0.4,4.5,1.7c0.1,0.9-0.6,1.8-1.8,2.4l-0.2-1.5
          c0.4-0.2,0.5-0.5,0.5-0.6c0-0.3-1.1-0.7-2.7-0.5c-1.6,0.2-2.5,1-2.4,1.3c0,0.1,0.3,0.3,0.7,0.4l0.2,1.5c-1.4-0.2-2.3-0.8-2.5-1.7
          C58.2,49.6,59.8,48.3,62.2,47.9z"
      />
      <path
        id="jddz_137_"
        class="jddz-${id}-st41"
        d="M62.6,51c2.3-0.4,4.3,0.4,4.5,1.7c0.1,0.9-0.6,1.8-1.8,2.4L65,53.6c0.4-0.2,0.5-0.5,0.5-0.6
          c0-0.3-1.1-0.7-2.7-0.5c-1.6,0.2-2.5,1-2.4,1.3c0,0.1,0.3,0.3,0.7,0.4l0.2,1.5C60,55.5,59,54.9,58.9,54
          C58.7,52.7,60.3,51.4,62.6,51z"
      />
    </g>
  </g>`;
  }

  // //加载数据
  // loadData() {
  //   this.loadDeviceInfo();
  // }

  // //刷新内容
  // refreshContent(data) {
  //   let { info = {} } = this;
  //   let { point } = data || {};
  //   if (point) {
  //     let { value = "" } = point || {};
  //     info.content = value;
  //     this.refresh();
  //   }
  // }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let { id = "", width = 0, height = 0 } = info || {};
    let $container = $(`#${id}>.component`);
    let $svg = $container.find("svg");
    $svg.attr({ width, height });
  }

  event() {}
}

export default Text;

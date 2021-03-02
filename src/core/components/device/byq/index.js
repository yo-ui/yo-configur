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
    <div class="bm-device-byq-com component"
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
    viewBox="0 0 90 97"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs>
      <style type='text/css'>
      .byq-${id}-st0{fill:#A3A3AE;}
        .byq-${id}-st1{fill:#8E8E98;}
        .byq-${id}-st2{fill:#71151A;}
        .byq-${id}-st3{fill:#9E2A27;}
        .byq-${id}-st4{fill:#B83D3C;}
        .byq-${id}-st5{fill:url(#byq_${id}_2_);}
        .byq-${id}-st6{fill:#992623;}
        .byq-${id}-st7{fill:url(#byq_${id}_3_);}
        .byq-${id}-st8{fill:url(#byq_${id}_4_);}
        .byq-${id}-st9{fill:url(#byq_${id}_5_);}
        .byq-${id}-st10{fill:url(#byq_${id}_6_);}
        .byq-${id}-st11{fill:url(#byq_${id}_7_);}
        .byq-${id}-st12{fill:url(#byq_${id}_8_);}
        .byq-${id}-st13{fill:url(#byq_${id}_9_);}
        .byq-${id}-st14{fill:url(#byq_${id}_10_);}
        .byq-${id}-st15{fill:url(#byq_${id}_11_);}
        .byq-${id}-st16{fill:url(#byq_${id}_12_);}
        .byq-${id}-st17{fill:url(#byq_${id}_13_);}
        .byq-${id}-st18{fill:url(#byq_${id}_14_);}
        .byq-${id}-st19{fill:url(#byq_${id}_15_);}
        .byq-${id}-st20{fill:url(#byq_${id}_16_);}
        .byq-${id}-st21{fill:url(#byq_${id}_17_);}
        .byq-${id}-st22{fill:url(#byq_${id}_18_);}
        .byq-${id}-st23{fill:url(#byq_${id}_19_);}
        .byq-${id}-st24{fill:url(#byq_${id}_20_);}
        .byq-${id}-st25{opacity:0.3;fill:#040000;}
        .byq-${id}-st26{fill:url(#byq_${id}_21_);}
        .byq-${id}-st27{fill:url(#byq_${id}_22_);}
        .byq-${id}-st28{fill:url(#byq_${id}_23_);}
        .byq-${id}-st29{fill:url(#byq_${id}_24_);}
        .byq-${id}-st30{fill:url(#byq_${id}_25_);}
        .byq-${id}-st31{fill:url(#byq_${id}_26_);}
        .byq-${id}-st32{fill:url(#byq_${id}_27_);}
        .byq-${id}-st33{fill:url(#byq_${id}_28_);}
        .byq-${id}-st34{fill:url(#byq_${id}_29_);}
        .byq-${id}-st35{fill:url(#byq_${id}_30_);}
        .byq-${id}-st36{fill:url(#byq_${id}_31_);}
        .byq-${id}-st37{fill:url(#byq_${id}_32_);}
        .byq-${id}-st38{fill:url(#byq_${id}_33_);}
        .byq-${id}-st39{fill:url(#byq_${id}_34_);}
        .byq-${id}-st40{fill:url(#byq_${id}_35_);}
        .byq-${id}-st41{fill:url(#byq_${id}_36_);}
        .byq-${id}-st42{fill:url(#byq_${id}_37_);}
        .byq-${id}-st43{fill:url(#byq_${id}_38_);}
        .byq-${id}-st44{fill:url(#byq_${id}_39_);}
        .byq-${id}-st45{fill:url(#byq_${id}_40_);}
        .byq-${id}-st46{fill:url(#byq_${id}_41_);}
        .byq-${id}-st47{fill:url(#byq_${id}_42_);}
        .byq-${id}-st48{fill:url(#byq_${id}_43_);}
        .byq-${id}-st49{fill:#841B1F;}
        .byq-${id}-st50{opacity:0.3;fill:#300303;}
        .byq-${id}-st51{fill:url(#byq_${id}_44_);}
        .byq-${id}-st52{fill:url(#byq_${id}_45_);}
        .byq-${id}-st53{fill:url(#byq_${id}_46_);}
    </style>
    </defs>
    ${this.renderSvgContent()}
  </svg>`;
  }

  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    return `
    <g id="byq_${id}_279_">
      <g id="byq_${id}_278_">
        <rect
          id="byq_${id}_277_"
          x="0.2"
          y="95.1"
          class="byq-${id}-st0"
          width="89"
          height="1.5"
        />
        <path
          id="byq_${id}_276_"
          class="byq-${id}-st1"
          d="M83.3,74.3H6.1c-0.9,0-1.6,0.6-1.8,1.5L0.2,95.1h89l-4.1-19.2C85,75,84.2,74.3,83.3,74.3z"
        />
      </g>
      <g id="byq_${id}_271_">
        <polygon
          id="byq_${id}_275_"
          class="byq-${id}-st2"
          points="7.1,78 7.1,82.9 16.7,91.6 72.7,91.6 82.3,82.9 82.3,78 		"
        />
        <polygon
          id="byq_${id}_274_"
          class="byq-${id}-st3"
          points="7.1,84.5 16.7,93.1 16.7,91.6 7.1,82.9 		"
        />
        <polygon
          id="byq_${id}_273_"
          class="byq-${id}-st3"
          points="82.3,84.5 72.7,93.1 72.7,91.6 82.3,82.9 		"
        />
        <rect
          id="byq_${id}_272_"
          x="16.7"
          y="91.6"
          class="byq-${id}-st4"
          width="56"
          height="1.6"
        />
      </g>
      <g id="byq_${id}_266_">
        <polygon
          id="byq_${id}_270_"
          class="byq-${id}-st2"
          points="7.1,74.5 7.1,79.4 16.7,88.1 72.7,88.1 82.3,79.4 82.3,74.5 		"
        />
        <polygon
          id="byq_${id}_269_"
          class="byq-${id}-st3"
          points="7.1,81 16.7,89.6 16.7,88.1 7.1,79.4 		"
        />
        <polygon
          id="byq_${id}_268_"
          class="byq-${id}-st3"
          points="82.3,81 72.7,89.6 72.7,88.1 82.3,79.4 		"
        />
        <rect
          id="byq_${id}_267_"
          x="16.7"
          y="88.1"
          class="byq-${id}-st4"
          width="56"
          height="1.6"
        />
      </g>
      <g id="byq_${id}_261_">
        <polygon
          id="byq_${id}_265_"
          class="byq-${id}-st2"
          points="7.1,71 7.1,75.9 16.7,84.6 72.7,84.6 82.3,75.9 82.3,71 		"
        />
        <polygon
          id="byq_${id}_264_"
          class="byq-${id}-st3"
          points="7.1,77.5 16.7,86.1 16.7,84.6 7.1,75.9 		"
        />
        <polygon
          id="byq_${id}_263_"
          class="byq-${id}-st3"
          points="82.3,77.5 72.7,86.1 72.7,84.6 82.3,75.9 		"
        />
        <rect
          id="byq_${id}_262_"
          x="16.7"
          y="84.6"
          class="byq-${id}-st4"
          width="56"
          height="1.6"
        />
      </g>
      <g id="byq_${id}_252_">
        <polygon
          id="byq_${id}_260_"
          class="byq-${id}-st2"
          points="7.1,67.5 7.1,72.4 16.7,81.1 72.7,81.1 82.3,72.4 82.3,67.5 		"
        />
        <polygon
          id="byq_${id}_259_"
          class="byq-${id}-st3"
          points="7.1,74 16.7,82.6 16.7,81.1 7.1,72.4 		"
        />
        <polygon
          id="byq_${id}_256_"
          class="byq-${id}-st3"
          points="82.3,74 72.7,82.6 72.7,81.1 82.3,72.4 		"
        />
        <rect
          id="byq_${id}_253_"
          x="16.7"
          y="81.1"
          class="byq-${id}-st4"
          width="56"
          height="1.6"
        />
      </g>
      <g id="byq_${id}_235_">
        <polygon
          id="byq_${id}_250_"
          class="byq-${id}-st2"
          points="7.1,64 7.1,68.9 16.7,77.6 72.7,77.6 82.3,68.9 82.3,64 		"
        />
        <polygon
          id="byq_${id}_244_"
          class="byq-${id}-st3"
          points="7.1,70.5 16.7,79.1 16.7,77.6 7.1,68.9 		"
        />
        <polygon
          id="byq_${id}_241_"
          class="byq-${id}-st3"
          points="82.3,70.5 72.7,79.1 72.7,77.6 82.3,68.9 		"
        />
        <rect
          id="byq_${id}_238_"
          x="16.7"
          y="77.6"
          class="byq-${id}-st4"
          width="56"
          height="1.6"
        />
      </g>
      <g id="byq_${id}_220_">
        <polygon
          id="byq_${id}_232_"
          class="byq-${id}-st2"
          points="7.1,60.5 7.1,65.4 16.7,74.1 72.7,74.1 82.3,65.4 82.3,60.5 		"
        />
        <polygon
          id="byq_${id}_229_"
          class="byq-${id}-st3"
          points="7.1,67 16.7,75.6 16.7,74.1 7.1,65.4 		"
        />
        <polygon
          id="byq_${id}_226_"
          class="byq-${id}-st3"
          points="82.3,67 72.7,75.6 72.7,74.1 82.3,65.4 		"
        />
        <rect
          id="byq_${id}_223_"
          x="16.7"
          y="74.1"
          class="byq-${id}-st4"
          width="56"
          height="1.6"
        />
      </g>
      <g id="byq_${id}_215_">
        <polygon
          id="byq_${id}_214_"
          class="byq-${id}-st2"
          points="7.1,57 7.1,61.9 16.7,70.6 72.7,70.6 82.3,61.9 82.3,57 		"
        />
        <polygon
          id="byq_${id}_205_"
          class="byq-${id}-st3"
          points="7.1,63.5 16.7,72.1 16.7,70.6 7.1,61.9 		"
        />
        <polygon
          id="byq_${id}_208_"
          class="byq-${id}-st3"
          points="82.3,63.5 72.7,72.1 72.7,70.6 82.3,61.9 		"
        />
        <rect
          id="byq_${id}_211_"
          x="16.7"
          y="70.6"
          class="byq-${id}-st4"
          width="56"
          height="1.6"
        />
      </g>
      <rect
        id="byq_${id}_280_"
        x="30.2"
        y="82.1"
        class="byq-${id}-st4"
        width="28.2"
        height="10.5"
      />
      <linearGradient
        id="byq_${id}_2_"
        gradientUnits="userSpaceOnUse"
        x1="44.3638"
        y1="85.0757"
        x2="44.3638"
        y2="91.7959"
      >
        <stop offset="0" style="stop-color:#3D0405" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="byq_${id}_281_"
        class="byq-${id}-st5"
        d="M50.8,84.8H37.9c-1.7,0-3.1,1.2-3.1,2.7s1.4,2.7,3.1,2.7h12.8c1.7,0,3.1-1.2,3.1-2.7
          S52.5,84.8,50.8,84.8z"
      />
      <polygon
        id="byq_${id}_247_"
        class="byq-${id}-st6"
        points="11.8,64 7.9,60.7 7.9,49.1 13.5,49.5 	"
      />
      <polygon
        id="byq_${id}_248_"
        class="byq-${id}-st6"
        points="77.4,64 81.3,60.7 81.3,49.1 75.7,49.5 	"
      />
      <linearGradient
        id="byq_${id}_3_"
        gradientUnits="userSpaceOnUse"
        x1="7.8171"
        y1="50.4568"
        x2="27.5806"
        y2="50.4568"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="byq_${id}_213_"
        class="byq-${id}-st7"
        d="M7.8,47.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H7.8z"
      />
      <linearGradient
        id="byq_${id}_4_"
        gradientUnits="userSpaceOnUse"
        x1="17.6989"
        y1="42.951"
        x2="17.6989"
        y2="51.1511"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="byq_${id}_212_"
        class="byq-${id}-st8"
        cx="17.7"
        cy="47.3"
        rx="9.9"
        ry="4.7"
      />
      <linearGradient
        id="byq_${id}_5_"
        gradientUnits="userSpaceOnUse"
        x1="7.8171"
        y1="45.4565"
        x2="27.5806"
        y2="45.4565"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="byq_${id}_210_"
        class="byq-${id}-st9"
        d="M7.8,42.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H7.8z"
      />
      <linearGradient
        id="byq_${id}_6_"
        gradientUnits="userSpaceOnUse"
        x1="17.6989"
        y1="37.9506"
        x2="17.6989"
        y2="46.1507"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="byq_${id}_209_"
        class="byq-${id}-st10"
        cx="17.7"
        cy="42.3"
        rx="9.9"
        ry="4.7"
      />
      <linearGradient
        id="byq_${id}_7_"
        gradientUnits="userSpaceOnUse"
        x1="7.8171"
        y1="40.4562"
        x2="27.5806"
        y2="40.4562"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="byq_${id}_207_"
        class="byq-${id}-st11"
        d="M7.8,37.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H7.8z"
      />
      <linearGradient
        id="byq_${id}_8_"
        gradientUnits="userSpaceOnUse"
        x1="17.6989"
        y1="32.9503"
        x2="17.6989"
        y2="41.1504"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="byq_${id}_206_"
        class="byq-${id}-st12"
        cx="17.7"
        cy="37.3"
        rx="9.9"
        ry="4.7"
      />
      <linearGradient
        id="byq_${id}_9_"
        gradientUnits="userSpaceOnUse"
        x1="7.8171"
        y1="35.4559"
        x2="27.5806"
        y2="35.4559"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="byq_${id}_204_"
        class="byq-${id}-st13"
        d="M7.8,32.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H7.8z"
      />
      <linearGradient
        id="byq_${id}_10_"
        gradientUnits="userSpaceOnUse"
        x1="17.6989"
        y1="27.95"
        x2="17.6989"
        y2="36.1501"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="byq_${id}_203_"
        class="byq-${id}-st14"
        cx="17.7"
        cy="32.3"
        rx="9.9"
        ry="4.7"
      />
      <linearGradient
        id="byq_${id}_11_"
        gradientUnits="userSpaceOnUse"
        x1="7.8171"
        y1="30.4556"
        x2="27.5806"
        y2="30.4556"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="byq_${id}_201_"
        class="byq-${id}-st15"
        d="M7.8,27.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H7.8z"
      />
      <linearGradient
        id="byq_${id}_12_"
        gradientUnits="userSpaceOnUse"
        x1="17.6989"
        y1="22.9497"
        x2="17.6989"
        y2="31.1498"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="byq_${id}_200_"
        class="byq-${id}-st16"
        cx="17.7"
        cy="27.3"
        rx="9.9"
        ry="4.7"
      />
      <linearGradient
        id="byq_${id}_13_"
        gradientUnits="userSpaceOnUse"
        x1="7.8171"
        y1="25.4553"
        x2="27.5806"
        y2="25.4553"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="byq_${id}_198_"
        class="byq-${id}-st17"
        d="M7.8,22.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H7.8z"
      />
      <linearGradient
        id="byq_${id}_14_"
        gradientUnits="userSpaceOnUse"
        x1="17.6989"
        y1="17.9494"
        x2="17.6989"
        y2="26.1495"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="byq_${id}_197_"
        class="byq-${id}-st18"
        cx="17.7"
        cy="22.3"
        rx="9.9"
        ry="4.7"
      />
      <linearGradient
        id="byq_${id}_15_"
        gradientUnits="userSpaceOnUse"
        x1="7.8171"
        y1="20.4549"
        x2="27.5806"
        y2="20.4549"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="byq_${id}_195_"
        class="byq-${id}-st19"
        d="M7.8,17.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H7.8z"
      />
      <linearGradient
        id="byq_${id}_16_"
        gradientUnits="userSpaceOnUse"
        x1="17.6989"
        y1="12.9491"
        x2="17.6989"
        y2="21.1492"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="byq_${id}_194_"
        class="byq-${id}-st20"
        cx="17.7"
        cy="17.3"
        rx="9.9"
        ry="4.7"
      />
      <linearGradient
        id="byq_${id}_17_"
        gradientUnits="userSpaceOnUse"
        x1="7.8171"
        y1="15.4546"
        x2="27.5806"
        y2="15.4546"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="byq_${id}_192_"
        class="byq-${id}-st21"
        d="M7.8,12.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H7.8z"
      />
      <linearGradient
        id="byq_${id}_18_"
        gradientUnits="userSpaceOnUse"
        x1="17.6989"
        y1="7.9487"
        x2="17.6989"
        y2="16.1488"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="byq_${id}_191_"
        class="byq-${id}-st22"
        cx="17.7"
        cy="12.3"
        rx="9.9"
        ry="4.7"
      />
      <linearGradient
        id="byq_${id}_19_"
        gradientUnits="userSpaceOnUse"
        x1="7.8171"
        y1="10.4543"
        x2="27.5806"
        y2="10.4543"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="byq_${id}_189_"
        class="byq-${id}-st23"
        d="M7.8,7.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7V7.3H7.8z"
      />
      <linearGradient
        id="byq_${id}_20_"
        gradientUnits="userSpaceOnUse"
        x1="17.6989"
        y1="2.9484"
        x2="17.6989"
        y2="11.1485"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="byq_${id}_188_"
        class="byq-${id}-st24"
        cx="17.7"
        cy="7.3"
        rx="9.9"
        ry="4.7"
      />
      <path
        id="byq_${id}_186_"
        class="byq-${id}-st25"
        d="M17.7,9.1c-2.6,0-4.5-1.1-4.5-2.7s1.9-2.7,4.5-2.7s4.5,1.1,4.5,2.7S20.3,9.1,17.7,9.1z"
      />
      <linearGradient
        id="byq_${id}_21_"
        gradientUnits="userSpaceOnUse"
        x1="14.2753"
        y1="4.7474"
        x2="21.1224"
        y2="4.7474"
      >
        <stop offset="0" style="stop-color:#ABB0B8" />
        <stop offset="0.4813" style="stop-color:#FFFFFF" />
        <stop offset="1" style="stop-color:#A9ADB6" />
      </linearGradient>
      <path
        id="byq_${id}_184_"
        class="byq-${id}-st26"
        d="M14.3,1.6v4.6c0,0.9,1.5,1.6,3.4,1.6c1.9,0,3.4-0.7,3.4-1.6V1.6H14.3z"
      />
      <linearGradient
        id="byq_${id}_22_"
        gradientUnits="userSpaceOnUse"
        x1="17.6989"
        y1="0.3144"
        x2="17.6989"
        y2="2.8772"
      >
        <stop offset="0" style="stop-color:#959AA2" />
        <stop offset="1" style="stop-color:#DADEE5" />
      </linearGradient>
      <ellipse
        id="byq_${id}_183_"
        class="byq-${id}-st27"
        cx="17.7"
        cy="1.6"
        rx="3.4"
        ry="1.6"
      />
      <linearGradient
        id="byq_${id}_23_"
        gradientUnits="userSpaceOnUse"
        x1="61.8205"
        y1="50.4568"
        x2="81.584"
        y2="50.4568"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="byq_${id}_246_"
        class="byq-${id}-st28"
        d="M61.8,47.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H61.8z"
      />
      <linearGradient
        id="byq_${id}_24_"
        gradientUnits="userSpaceOnUse"
        x1="71.7023"
        y1="42.951"
        x2="71.7023"
        y2="51.1511"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="byq_${id}_245_"
        class="byq-${id}-st29"
        cx="71.7"
        cy="47.3"
        rx="9.9"
        ry="4.7"
      />
      <linearGradient
        id="byq_${id}_25_"
        gradientUnits="userSpaceOnUse"
        x1="61.8205"
        y1="45.4565"
        x2="81.584"
        y2="45.4565"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="byq_${id}_243_"
        class="byq-${id}-st30"
        d="M61.8,42.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H61.8z"
      />
      <linearGradient
        id="byq_${id}_26_"
        gradientUnits="userSpaceOnUse"
        x1="71.7023"
        y1="37.9506"
        x2="71.7023"
        y2="46.1507"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="byq_${id}_242_"
        class="byq-${id}-st31"
        cx="71.7"
        cy="42.3"
        rx="9.9"
        ry="4.7"
      />
      <linearGradient
        id="byq_${id}_27_"
        gradientUnits="userSpaceOnUse"
        x1="61.8205"
        y1="40.4562"
        x2="81.584"
        y2="40.4562"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="byq_${id}_240_"
        class="byq-${id}-st32"
        d="M61.8,37.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H61.8z"
      />
      <linearGradient
        id="byq_${id}_28_"
        gradientUnits="userSpaceOnUse"
        x1="71.7023"
        y1="32.9503"
        x2="71.7023"
        y2="41.1504"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="byq_${id}_239_"
        class="byq-${id}-st33"
        cx="71.7"
        cy="37.3"
        rx="9.9"
        ry="4.7"
      />
      <linearGradient
        id="byq_${id}_29_"
        gradientUnits="userSpaceOnUse"
        x1="61.8205"
        y1="35.4559"
        x2="81.584"
        y2="35.4559"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="byq_${id}_237_"
        class="byq-${id}-st34"
        d="M61.8,32.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H61.8z"
      />
      <linearGradient
        id="byq_${id}_30_"
        gradientUnits="userSpaceOnUse"
        x1="71.7023"
        y1="27.95"
        x2="71.7023"
        y2="36.1501"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="byq_${id}_236_"
        class="byq-${id}-st35"
        cx="71.7"
        cy="32.3"
        rx="9.9"
        ry="4.7"
      />
      <linearGradient
        id="byq_${id}_31_"
        gradientUnits="userSpaceOnUse"
        x1="61.8205"
        y1="30.4556"
        x2="81.584"
        y2="30.4556"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="byq_${id}_234_"
        class="byq-${id}-st36"
        d="M61.8,27.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H61.8z"
      />
      <linearGradient
        id="byq_${id}_32_"
        gradientUnits="userSpaceOnUse"
        x1="71.7023"
        y1="22.9497"
        x2="71.7023"
        y2="31.1498"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="byq_${id}_233_"
        class="byq-${id}-st37"
        cx="71.7"
        cy="27.3"
        rx="9.9"
        ry="4.7"
      />
      <linearGradient
        id="byq_${id}_33_"
        gradientUnits="userSpaceOnUse"
        x1="61.8205"
        y1="25.4553"
        x2="81.584"
        y2="25.4553"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="byq_${id}_231_"
        class="byq-${id}-st38"
        d="M61.8,22.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H61.8z"
      />
      <linearGradient
        id="byq_${id}_34_"
        gradientUnits="userSpaceOnUse"
        x1="71.7023"
        y1="17.9494"
        x2="71.7023"
        y2="26.1495"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="byq_${id}_230_"
        class="byq-${id}-st39"
        cx="71.7"
        cy="22.3"
        rx="9.9"
        ry="4.7"
      />
      <linearGradient
        id="byq_${id}_35_"
        gradientUnits="userSpaceOnUse"
        x1="61.8205"
        y1="20.4549"
        x2="81.584"
        y2="20.4549"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="byq_${id}_228_"
        class="byq-${id}-st40"
        d="M61.8,17.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H61.8z"
      />
      <linearGradient
        id="byq_${id}_36_"
        gradientUnits="userSpaceOnUse"
        x1="71.7023"
        y1="12.9491"
        x2="71.7023"
        y2="21.1492"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="byq_${id}_227_"
        class="byq-${id}-st41"
        cx="71.7"
        cy="17.3"
        rx="9.9"
        ry="4.7"
      />
      <linearGradient
        id="byq_${id}_37_"
        gradientUnits="userSpaceOnUse"
        x1="61.8205"
        y1="15.4546"
        x2="81.584"
        y2="15.4546"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="byq_${id}_225_"
        class="byq-${id}-st42"
        d="M61.8,12.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7v-1.5H61.8z"
      />
      <linearGradient
        id="byq_${id}_38_"
        gradientUnits="userSpaceOnUse"
        x1="71.7023"
        y1="7.9487"
        x2="71.7023"
        y2="16.1488"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="byq_${id}_224_"
        class="byq-${id}-st43"
        cx="71.7"
        cy="12.3"
        rx="9.9"
        ry="4.7"
      />
      <linearGradient
        id="byq_${id}_39_"
        gradientUnits="userSpaceOnUse"
        x1="61.8205"
        y1="10.4543"
        x2="81.584"
        y2="10.4543"
      >
        <stop offset="0" style="stop-color:#942B2B" />
        <stop offset="0.5348" style="stop-color:#E48282" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <path
        id="byq_${id}_222_"
        class="byq-${id}-st44"
        d="M61.8,7.3v1.5c0,2.6,4.4,4.7,9.9,4.7c5.5,0,9.9-2.1,9.9-4.7V7.3H61.8z"
      />
      <linearGradient
        id="byq_${id}_40_"
        gradientUnits="userSpaceOnUse"
        x1="71.7023"
        y1="2.9484"
        x2="71.7023"
        y2="11.1485"
      >
        <stop offset="0" style="stop-color:#691216" />
        <stop offset="1" style="stop-color:#942B2B" />
      </linearGradient>
      <ellipse
        id="byq_${id}_221_"
        class="byq-${id}-st45"
        cx="71.7"
        cy="7.3"
        rx="9.9"
        ry="4.7"
      />
      <path
        id="byq_${id}_218_"
        class="byq-${id}-st25"
        d="M71.7,9.1c-2.6,0-4.5-1.1-4.5-2.7s1.9-2.7,4.5-2.7s4.5,1.1,4.5,2.7S74.3,9.1,71.7,9.1z"
      />
      <linearGradient
        id="byq_${id}_41_"
        gradientUnits="userSpaceOnUse"
        x1="68.2787"
        y1="4.7474"
        x2="75.1258"
        y2="4.7474"
      >
        <stop offset="0" style="stop-color:#ABB0B8" />
        <stop offset="0.4813" style="stop-color:#FFFFFF" />
        <stop offset="1" style="stop-color:#A9ADB6" />
      </linearGradient>
      <path
        id="byq_${id}_217_"
        class="byq-${id}-st46"
        d="M68.3,1.6v4.6c0,0.9,1.5,1.6,3.4,1.6c1.9,0,3.4-0.7,3.4-1.6V1.6H68.3z"
      />
      <linearGradient
        id="byq_${id}_42_"
        gradientUnits="userSpaceOnUse"
        x1="71.7023"
        y1="0.3144"
        x2="71.7023"
        y2="2.8772"
      >
        <stop offset="0" style="stop-color:#959AA2" />
        <stop offset="1" style="stop-color:#DADEE5" />
      </linearGradient>
      <ellipse
        id="byq_${id}_216_"
        class="byq-${id}-st47"
        cx="71.7"
        cy="1.6"
        rx="3.4"
        ry="1.6"
      />
      <linearGradient
        id="byq_${id}_43_"
        gradientUnits="userSpaceOnUse"
        x1="44.7819"
        y1="27.2485"
        x2="44.7819"
        y2="66.884"
      >
        <stop offset="0" style="stop-color:#7B2A2A" />
        <stop offset="0.1979" style="stop-color:#E48282" />
        <stop offset="0.3102" style="stop-color:#C05251" />
        <stop offset="1" style="stop-color:#A83324" />
      </linearGradient>
      <path
        id="byq_${id}_190_"
        class="byq-${id}-st48"
        d="M77.6,52.7c0,0-0.5,0.2-3.3-2.1c-2.8-2.2-3.7-3.7-6.3-14.6c-2-8.3-6.1-9.1-6.1-9.1H27.7
          c0,0-4.2,0.8-6.1,9.1c-2.6,10.9-3.5,12.3-6.3,14.6c-2.8,2.2-3.3,2.1-3.3,2.1V64h10l1.8,5.1H66l1.8-5.1h9.8V52.7z"
      />
      <polygon
        id="byq_${id}_202_"
        class="byq-${id}-st49"
        points="21.8,64 23.6,44 23.6,69.1 	"
      />
      <polygon
        id="byq_${id}_199_"
        class="byq-${id}-st49"
        points="67.8,64 66,44 66,69.1 	"
      />
      <g id="byq_${id}_169_">
        <polygon
          id="byq_${id}_251_"
          class="byq-${id}-st50"
          points="34,56.1 32.1,56.1 30.1,26.9 36,26.9 		"
        />
        <linearGradient
          id="byq_${id}_44_"
          gradientUnits="userSpaceOnUse"
          x1="33.0171"
          y1="25.3805"
          x2="33.0171"
          y2="62.5216"
        >
          <stop offset="0" style="stop-color:#7B2A2A" />
          <stop offset="0.1979" style="stop-color:#E48282" />
          <stop offset="0.3102" style="stop-color:#C05251" />
          <stop offset="1" style="stop-color:#A83324" />
        </linearGradient>
        <rect
          id="byq_${id}_249_"
          x="31.9"
          y="25.9"
          class="byq-${id}-st51"
          width="2.3"
          height="31.2"
        />
      </g>
      <g id="byq_${id}_193_">
        <polygon
          id="byq_${id}_255_"
          class="byq-${id}-st50"
          points="46,56.1 44.1,56.1 42.1,26.9 48,26.9 		"
        />
        <linearGradient
          id="byq_${id}_45_"
          gradientUnits="userSpaceOnUse"
          x1="45.0179"
          y1="25.3805"
          x2="45.0179"
          y2="62.5216"
        >
          <stop offset="0" style="stop-color:#7B2A2A" />
          <stop offset="0.1979" style="stop-color:#E48282" />
          <stop offset="0.3102" style="stop-color:#C05251" />
          <stop offset="1" style="stop-color:#A83324" />
        </linearGradient>
        <rect
          id="byq_${id}_254_"
          x="43.9"
          y="25.9"
          class="byq-${id}-st52"
          width="2.3"
          height="31.2"
        />
      </g>
      <g id="byq_${id}_196_">
        <polygon
          id="byq_${id}_258_"
          class="byq-${id}-st50"
          points="58,56.1 56.1,56.1 54.1,26.9 60,26.9 		"
        />
        <linearGradient
          id="byq_${id}_46_"
          gradientUnits="userSpaceOnUse"
          x1="57.0187"
          y1="25.3805"
          x2="57.0187"
          y2="62.5216"
        >
          <stop offset="0" style="stop-color:#7B2A2A" />
          <stop offset="0.1979" style="stop-color:#E48282" />
          <stop offset="0.3102" style="stop-color:#C05251" />
          <stop offset="1" style="stop-color:#A83324" />
        </linearGradient>
        <rect
          id="byq_${id}_257_"
          x="55.9"
          y="25.9"
          class="byq-${id}-st53"
          width="2.3"
          height="31.2"
        />
      </g>
    </g>`;
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    bmCommon.log(`${info.type}刷新 `);
    let { id = "", width = 0, height = 0 } = info || {};
    let $container = $(`#${id}>.component`);
    let $svg = $container.find("svg");
    $svg.attr({ width, height });
    // $container.html(content);
  }

  event() {}
}

export default Text;

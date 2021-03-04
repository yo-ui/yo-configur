import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 冷却塔
class Text extends Component {
  pointValue = 1;
  constructor(props) {
    super(props);
  }
  init() {
    this.refresh();
  }

  //组件样式

  template() {
    let { info = {} } = this;
    return super.wrap(
      { info },
      `
    <div class="bm-device-lqt-com component"
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
    viewBox="0 0 275 315"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>

    .lqt-${id}-st0{fill:url(#lqt_1_);}
    .lqt-${id}-st1{fill:url(#lqt_2_);}
    .lqt-${id}-st2{fill:#3D3D3D;}
    .lqt-${id}-st3{fill:#BCBCBC;}
    .lqt-${id}-st4{fill:#7C7C7C;}
    .lqt-${id}-st5{fill:url(#lqt_3_);}
    .lqt-${id}-st6{fill:url(#lqt_4_);}
    .lqt-${id}-st7{fill:url(#lqt_5_);}
    .lqt-${id}-st8{fill:url(#lqt_6_);}
    .lqt-${id}-st9{fill:url(#lqt_7_);}
    .lqt-${id}-st10{opacity:0.4;fill:#FFFFFF;}
    .lqt-${id}-st11{fill:url(#lqt_8_);}
    .lqt-${id}-st12{fill:url(#lqt_9_);}
    .lqt-${id}-st13{opacity:0.2;}
    .lqt-${id}-st14{opacity:0.3;}
    .lqt-${id}-st15{fill:#D8D9D4;}
    .lqt-${id}-st16{fill:#4C4C4C;}
    .lqt-${id}-st17{opacity:0.8;}
    .lqt-${id}-st18{fill:#333333;}
    .lqt-${id}-st19{fill:url(#lqt_10_);}
    .lqt-${id}-st20{fill:url(#lqt_11_);}
    .lqt-${id}-st21{fill:url(#lqt_12_);}
    .lqt-${id}-st22{fill:url(#lqt_13_);}
    .lqt-${id}-st23{fill:url(#lqt_14_);}
    .lqt-${id}-st24{fill:url(#lqt_15_);}
    .lqt-${id}-st25{fill:url(#lqt_16_);}
    .lqt-${id}-st26{fill:url(#lqt_17_);}
    .lqt-${id}-st27{fill:url(#lqt_18_);}
    .lqt-${id}-st28{fill:url(#lqt_19_);}
    .lqt-${id}-st29{fill:url(#lqt_20_);}
    .lqt-${id}-st30{fill:url(#lqt_21_);}
    .lqt-${id}-st31{fill:url(#lqt_22_);}
    .lqt-${id}-st32{fill:url(#lqt_23_);}
    .lqt-${id}-st33{fill:url(#lqt_24_);}
    .lqt-${id}-st34{fill:url(#lqt_25_);}
    .lqt-${id}-st35{fill:url(#lqt_26_);}
    .lqt-${id}-st36{fill:url(#lqt_27_);}
    .lqt-${id}-st37{fill:url(#lqt_28_);}
    .lqt-${id}-st38{fill:url(#lqt_29_);}
    .lqt-${id}-st39{fill:url(#lqt_30_);}
    .lqt-${id}-st40{fill:url(#lqt_31_);}
    .lqt-${id}-st41{fill:url(#lqt_32_);}
    .lqt-${id}-st42{fill:url(#lqt_33_);}
    .lqt-${id}-st43{fill:url(#lqt_34_);}
    .lqt-${id}-st44{fill:url(#lqt_35_);}
    .lqt-${id}-st45{fill:url(#lqt_36_);}
    .lqt-${id}-st46{fill:url(#lqt_37_);}
    .lqt-${id}-st47{fill:url(#lqt_38_);}
    .lqt-${id}-st48{fill:url(#lqt_39_);}
    .lqt-${id}-st49{fill:url(#lqt_40_);}
    .lqt-${id}-st50{fill:url(#lqt_41_);}
    .lqt-${id}-st51{fill:url(#lqt_42_);}
    .lqt-${id}-st52{fill:url(#lqt_43_);}
    .lqt-${id}-st53{fill:url(#lqt_44_);}
    .lqt-${id}-st54{fill:url(#lqt_45_);}
    .lqt-${id}-st55{fill:url(#lqt_46_);}
    .lqt-${id}-st56{fill:url(#lqt_47_);}
    .lqt-${id}-st57{fill:url(#lqt_48_);}
    .lqt-${id}-st58{fill:url(#lqt_49_);}
    .lqt-${id}-st59{fill:url(#lqt_50_);}
    .lqt-${id}-st60{fill:url(#lqt_51_);}
    .lqt-${id}-st61{fill:url(#lqt_52_);}
    .lqt-${id}-st62{fill:url(#lqt_53_);}
    .lqt-${id}-st63{fill:url(#lqt_54_);}
    .lqt-${id}-st64{fill:url(#lqt_55_);}
    .lqt-${id}-st65{fill:url(#lqt_56_);}
    .lqt-${id}-st66{fill:url(#lqt_57_);}
    .lqt-${id}-st67{fill:#D6D6D6;}
    .lqt-${id}-st68{fill:#93958A;}
    .lqt-${id}-st69{fill:#3F3F3F;}
    .lqt-${id}-st70{fill:url(#lqt_58_);}
    .lqt-${id}-st71{fill:url(#lqt_59_);}
    .lqt-${id}-st72{fill:url(#lqt_60_);}
    .lqt-${id}-st73{fill:url(#lqt_61_);}
    .lqt-${id}-st74{fill:url(#lqt_62_);}
    .lqt-${id}-st75{fill:url(#lqt_63_);}
    .lqt-${id}-st76{fill:url(#lqt_64_);}
    .lqt-${id}-st77{fill:url(#lqt_65_);}
    .lqt-${id}-st78{fill:#E5E5E5;}
    .lqt-${id}-st79{fill:url(#lqt_66_);}
    .lqt-${id}-st80{fill:url(#lqt_67_);}
    .lqt-${id}-st81{opacity:0.4;fill:#FF0000;}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {}, pointValue } = this;
    let { id = "" } = info || {};
    let text = `
    <g id="SVG_base">
      <linearGradient
        id="lqt_1_"
        gradientUnits="userSpaceOnUse"
        x1="371.3442"
        y1="339.546"
        x2="371.3442"
        y2="336.546"
        gradientTransform="matrix(-0.7071 -0.7071 -0.7071 0.7071 667.1996 294.0953)"
      >
        <stop offset="0" style="stop-color:#838383" />
        <stop offset="0.5" style="stop-color:#FEFEFE" />
        <stop offset="1" style="stop-color:#9C9D98" />
      </linearGradient>
      <path
        class="lqt-${id}-st0"
        d="M148.58,255.66l31.9,31.9c0.59,0.59,1.54,0.59,2.12,0c0.59-0.59,0.59-1.54,0-2.12l-31.9-31.9
                c-0.59-0.59-1.54-0.59-2.12,0C147.99,254.13,147.99,255.08,148.58,255.66z"
      />
      <linearGradient
        id="lqt_2_"
        gradientUnits="userSpaceOnUse"
        x1="212.7644"
        y1="261.87"
        x2="215.2279"
        y2="262.5127"
      >
        <stop offset="0" style="stop-color:#838383" />
        <stop offset="0.5" style="stop-color:#FEFEFE" />
        <stop offset="1" style="stop-color:#9C9D98" />
      </linearGradient>
      <path
        class="lqt-${id}-st1"
        d="M220.07,241.73l-10.63,41.95c-0.2,0.77-0.75,1.15-1.25,0.84c-0.49-0.3-0.74-1.18-0.54-1.95l10.63-41.95
                c0.2-0.77,0.75-1.15,1.25-0.84C220.02,240.09,220.26,240.96,220.07,241.73z"
      />
      <rect
        x="254.8"
        y="196.41"
        class="lqt-${id}-st2"
        width="17.52"
        height="50.59"
      />
      <rect
        x="0.05"
        y="266"
        class="lqt-${id}-st3"
        width="17"
        height="49"
      />
      <polygon
        class="lqt-${id}-st4"
        points="20.05,313 17.05,315 17.05,266 20.05,266 	"
      />
      <rect
        x="181.05"
        y="266"
        class="lqt-${id}-st3"
        width="17"
        height="49"
      />
      <polygon
        class="lqt-${id}-st4"
        points="209.05,305 198.05,315 198.05,265 209.05,256 	"
      />
      <polygon
        class="lqt-${id}-st4"
        points="274.55,248.15 263.55,258.15 263.55,208.15 274.55,199.15 	"
      />
      <rect
        x="261.42"
        y="200.98"
        class="lqt-${id}-st3"
        width="2.13"
        height="57.17"
      />

      <linearGradient
        id="lqt_3_"
        gradientUnits="userSpaceOnUse"
        x1="190.3349"
        y1="158.5367"
        x2="190.3349"
        y2="155.5367"
        gradientTransform="matrix(0.7071 -0.7071 0.7071 0.7071 -209.9668 294.0953)"
      >
        <stop offset="0" style="stop-color:#838383" />
        <stop offset="0.5" style="stop-color:#FEFEFE" />
        <stop offset="1" style="stop-color:#9C9D98" />
      </linearGradient>
      <path
        class="lqt-${id}-st5"
        d="M52.67,255.66l-31.9,31.9c-0.59,0.59-1.54,0.59-2.12,0c-0.59-0.59-0.59-1.54,0-2.12l31.9-31.9
                c0.59-0.59,1.54-0.59,2.12,0C53.26,254.13,53.26,255.08,52.67,255.66z"
      />
      <linearGradient
        id="lqt_4_"
        gradientUnits="userSpaceOnUse"
        x1="249.6074"
        y1="219.8885"
        x2="252.2852"
        y2="217.8534"
      >
        <stop offset="0" style="stop-color:#838383" />
        <stop offset="0.5" style="stop-color:#FEFEFE" />
        <stop offset="1" style="stop-color:#9C9D98" />
      </linearGradient>
      <path
        class="lqt-${id}-st6"
        d="M238.6,204.03l23.03,31.9c0.42,0.59,1.11,0.59,1.53,0c0.42-0.59,0.42-1.54,0-2.12l-23.03-31.9
                c-0.42-0.59-1.11-0.59-1.53,0C238.18,202.49,238.18,203.44,238.6,204.03z"
      />
      <linearGradient
        id="lqt_5_"
        gradientUnits="userSpaceOnUse"
        x1="98.8545"
        y1="266"
        x2="98.8545"
        y2="106.0102"
      >
        <stop offset="0" style="stop-color:#BCBCBC" />
        <stop offset="1" style="stop-color:#E2E2E2" />
      </linearGradient>
      <rect
        x="0.08"
        y="106.01"
        class="lqt-${id}-st7"
        width="197.54"
        height="159.99"
      />
      <linearGradient
        id="lqt_6_"
        gradientUnits="userSpaceOnUse"
        x1="236.0875"
        y1="266"
        x2="236.0875"
        y2="43.1996"
      >
        <stop offset="0" style="stop-color:#767772" />
        <stop offset="1" style="stop-color:#B8B9B4" />
      </linearGradient>
      <polygon
        class="lqt-${id}-st8"
        points="274.55,43.2 197.63,106.01 197.63,266 274.55,199.15 	"
      />
      <linearGradient
        id="lqt_7_"
        gradientUnits="userSpaceOnUse"
        x1="134.1281"
        y1="105.416"
        x2="139.6827"
        y2="51.7217"
      >
        <stop offset="0" style="stop-color:#DCDDD8" />
        <stop offset="1" style="stop-color:#747474" />
      </linearGradient>
      <polygon
        class="lqt-${id}-st9"
        points="274.55,43.2 77,43.2 0.08,106.01 197.63,106.01 	"
      />
      <polygon
        class="lqt-${id}-st10"
        points="197.63,264.96 195.55,264.96 195.55,106.01 1.05,106.01 3.05,103.94 197.63,103.94 	"
      />
      <polygon
        class="lqt-${id}-st10"
        points="197.23,105.79 195.95,104.16 273.55,41.35 274.83,42.98 	"
      />
      <linearGradient
        id="lqt_8_"
        gradientUnits="userSpaceOnUse"
        x1="136.8626"
        y1="59.3051"
        x2="136.8626"
        y2="31.9926"
      >
        <stop offset="0" style="stop-color:#3A3A3A" />
        <stop offset="0.3703" style="stop-color:#595959" />
        <stop offset="0.7668" style="stop-color:#747474" />
        <stop offset="1" style="stop-color:#7E7E7E" />
      </linearGradient>
      <polygon
        class="lqt-${id}-st11"
        points="55.66,57.96 62.39,45.15 111.59,30.33 176.29,30.33 218.07,51.89 218.07,68.74 158.09,86.26
                104.18,86.26 	"
      />
      <linearGradient
        id="lqt_9_"
        gradientUnits="userSpaceOnUse"
        x1="55.6551"
        y1="33.6961"
        x2="218.0701"
        y2="33.6961"
      >
        <stop offset="0" style="stop-color:#383838" />
        <stop offset="0.0883" style="stop-color:#5A5A58" />
        <stop offset="0.2175" style="stop-color:#858682" />
        <stop offset="0.3181" style="stop-color:#A0A19C" />
        <stop offset="0.3771" style="stop-color:#AAABA6" />
        <stop offset="0.6238" style="stop-color:#A6A7A2" />
        <stop offset="0.6676" style="stop-color:#A4A5A0" />
        <stop offset="0.7284" style="stop-color:#989994" />
        <stop offset="0.8382" style="stop-color:#787974" />
        <stop offset="0.9836" style="stop-color:#454641" />
        <stop offset="1" style="stop-color:#3F403B" />
      </linearGradient>
      <path
        class="lqt-${id}-st12"
        d="M218.06,30.33c-0.28-6.46-8.45-13.07-22.54-18.18c-15.62-5.66-36.45-8.78-58.66-8.78s-43.04,3.12-58.66,8.78
                c-14.09,5.11-22.26,11.71-22.54,18.18h-0.01v33.7h0.01c0.28-6.46,8.45-13.07,22.54-18.18c15.62-5.66,36.45-8.78,58.66-8.78
                s43.04,3.12,58.66,8.78c14.09,5.11,22.26,11.71,22.54,18.18h0.01v-33.7H218.06z"
      />
      <path
        class="lqt-${id}-st13"
        d="M218.06,30.33c-0.28-6.46-8.45-13.07-22.54-18.18c-15.62-5.66-36.45-8.78-58.66-8.78
                c-22.21,0-43.04,3.12-58.66,8.78c-14.09,5.11-22.26,11.71-22.54,18.18h-0.01v6h0.01c0.28-6.46,8.45-13.07,22.54-18.18
                c15.62-5.66,36.45-8.78,58.66-8.78c22.21,0,43.04,3.12,58.66,8.78c14.09,5.11,22.26,11.71,22.54,18.18h0.01v-6H218.06z"
      />
      <path
        class="lqt-${id}-st14"
        d="M136.86,58.13c-22.23,0-43.08-3.12-58.71-8.79c-14.4-5.22-22.66-12.03-22.66-18.67s8.26-13.45,22.66-18.67
                c15.63-5.67,36.49-8.79,58.71-8.79s43.08,3.12,58.71,8.79c14.4,5.22,22.66,12.03,22.66,18.67s-8.26,13.45-22.66,18.67
                C179.94,55,159.09,58.13,136.86,58.13z M136.86,3.54c-22.19,0-43,3.11-58.6,8.77C64,17.48,55.82,24.17,55.82,30.66
                S64,43.85,78.26,49.02c15.6,5.65,36.41,8.77,58.6,8.77s43-3.11,58.6-8.77c14.26-5.17,22.44-11.86,22.44-18.36
                s-8.18-13.19-22.44-18.36C179.86,6.65,159.05,3.54,136.86,3.54z"
      />
      <path
        class="lqt-${id}-st13"
        d="M136.86,79.19c-46.82,0-84.91-13.91-84.91-31h0.67c0,16.72,37.79,30.33,84.24,30.33
                c46.45,0,84.24-13.6,84.24-30.33h0.67C221.78,65.28,183.68,79.19,136.86,79.19z"
      />
      <path
        class="lqt-${id}-st15"
        d="M136.86,77.84c-46.82,0-84.91-13.91-84.91-31h0.67c0,16.72,37.79,30.33,84.24,30.33
                c46.45,0,84.24-13.6,84.24-30.33h0.67C221.78,63.93,183.68,77.84,136.86,77.84z"
      />
      <g>
        <rect
          x="5.11"
          y="225.09"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="5.11"
          y="231.83"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="5.11"
          y="238.57"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="5.11"
          y="245.31"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="5.11"
          y="252.05"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="5.11"
          y="258.79"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="43.63"
          y="225.09"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="43.63"
          y="231.83"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="43.63"
          y="238.57"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="43.63"
          y="245.31"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="43.63"
          y="252.05"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="43.63"
          y="258.79"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="82.14"
          y="225.09"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="82.14"
          y="231.83"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="82.14"
          y="238.57"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="82.14"
          y="245.31"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="82.14"
          y="252.05"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="82.14"
          y="258.79"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="120.65"
          y="225.09"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="120.65"
          y="231.83"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="120.65"
          y="238.57"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="120.65"
          y="245.31"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="120.65"
          y="252.05"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="120.65"
          y="258.79"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="159.17"
          y="225.09"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="159.17"
          y="231.83"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="159.17"
          y="238.57"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="159.17"
          y="245.31"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="159.17"
          y="252.05"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
        <rect
          x="159.17"
          y="258.79"
          class="lqt-${id}-st16"
          width="33.29"
          height="3.37"
        />
      </g>
      <g class="lqt-${id}-st17">
        <polygon
          class="lqt-${id}-st18"
          points="214.11,212.58 201.9,223.14 201.9,219.77 214.11,209.21 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="214.11,219.32 201.9,229.88 201.9,226.51 214.11,215.95 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="214.11,226.06 201.9,236.62 201.9,233.25 214.11,222.69 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="214.11,232.8 201.9,243.36 201.9,239.99 214.11,229.43 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="214.11,239.54 201.9,250.1 201.9,246.73 214.11,236.17 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="214.11,246.27 201.9,256.84 201.9,253.47 214.11,242.91 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="228.24,200.36 216.03,210.92 216.03,207.55 228.24,196.99 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="228.24,207.09 216.03,217.66 216.03,214.29 228.24,203.73 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="228.24,213.83 216.03,224.4 216.03,221.03 228.24,210.46 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="228.24,220.57 216.03,231.14 216.03,227.77 228.24,217.2 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="228.24,227.31 216.03,237.88 216.03,234.51 228.24,223.94 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="228.24,234.05 216.03,244.62 216.03,241.25 228.24,230.68 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="242.37,188.13 230.16,198.7 230.16,195.33 242.37,184.76 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="242.37,194.87 230.16,205.44 230.16,202.07 242.37,191.5 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="242.37,201.61 230.16,212.18 230.16,208.81 242.37,198.24 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="242.37,208.35 230.16,218.92 230.16,215.55 242.37,204.98 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="242.37,215.09 230.16,225.66 230.16,222.29 242.37,211.72 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="242.37,221.83 230.16,232.39 230.16,229.02 242.37,218.46 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="256.5,175.91 244.29,186.48 244.29,183.11 256.5,172.54 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="256.5,182.65 244.29,193.21 244.29,189.84 256.5,179.28 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="256.5,189.39 244.29,199.95 244.29,196.58 256.5,186.02 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="256.5,196.13 244.29,206.69 244.29,203.32 256.5,192.76 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="256.5,202.87 244.29,213.43 244.29,210.06 256.5,199.5 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="256.5,209.61 244.29,220.17 244.29,216.8 256.5,206.24 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="270.64,163.69 258.42,174.25 258.42,170.88 270.64,160.32 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="270.64,170.43 258.42,180.99 258.42,177.62 270.64,167.06 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="270.64,177.16 258.42,187.73 258.42,184.36 270.64,173.8 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="270.64,183.9 258.42,194.47 258.42,191.1 270.64,180.53 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="270.64,190.64 258.42,201.21 258.42,197.84 270.64,187.27 		"
        />
        <polygon
          class="lqt-${id}-st18"
          points="270.64,197.38 258.42,207.95 258.42,204.58 270.64,194.01 		"
        />
      </g>
      <g class="lqt-${id}-st14">
        <g>
          <linearGradient
            id="lqt_10_"
            gradientUnits="userSpaceOnUse"
            x1="205.5796"
            y1="-79.5505"
            x2="206.8915"
            y2="-174.6597"
            gradientTransform="matrix(1 -0.8465 0 1 0 460.0706)"
          >
            <stop offset="0" style="stop-color:#BCBCBC" />
            <stop offset="1" style="stop-color:#E2E2E2" />
          </linearGradient>
          <path
            class="lqt-${id}-st19"
            d="M206.25,107.91c-1.52,1.29-2.76,5.65-2.76,9.75v83.47c0,4.09,1.24,6.37,2.76,5.08
                    c1.52-1.29,2.76-5.65,2.76-9.75v-83.47C209.01,108.89,207.78,106.62,206.25,107.91z"
          />

          <linearGradient
            id="lqt_11_"
            gradientUnits="userSpaceOnUse"
            x1="201.6554"
            y1="-128.8184"
            x2="210.7137"
            y2="-128.0345"
            gradientTransform="matrix(1 -0.8465 0 1 0 460.0706)"
          >
            <stop offset="0" style="stop-color:#CBCCC7" />
            <stop offset="9.030700e-04" style="stop-color:#CBCCC7" />
            <stop offset="0.2469" style="stop-color:#DADBD6" />
            <stop offset="0.5399" style="stop-color:#E2E3DE" />
            <stop offset="1" style="stop-color:#E5E6E1" />
          </linearGradient>
          <path
            class="lqt-${id}-st20"
            d="M206.25,206.88c-1.66,1.4-3.01-1.08-3.01-5.54v-83.47c0-4.46,1.35-9.23,3.01-10.63
                    c1.66-1.4,3.01,1.08,3.01,5.54v83.47C209.26,200.7,207.91,205.47,206.25,206.88z M206.25,108.58c-1.38,1.17-2.51,5.15-2.51,8.86
                    v83.47c0,3.72,1.13,5.79,2.51,4.62c1.38-1.17,2.51-5.15,2.51-8.86V113.2C208.76,109.48,207.64,107.41,206.25,108.58z"
          />
        </g>
        <g>
          <linearGradient
            id="lqt_12_"
            gradientUnits="userSpaceOnUse"
            x1="215.6961"
            y1="-79.5505"
            x2="217.0079"
            y2="-174.6597"
            gradientTransform="matrix(1 -0.8465 0 1 0 460.0706)"
          >
            <stop offset="0" style="stop-color:#BCBCBC" />
            <stop offset="1" style="stop-color:#E2E2E2" />
          </linearGradient>
          <path
            class="lqt-${id}-st21"
            d="M216.37,99.35c-1.52,1.29-2.76,5.65-2.76,9.75v83.47c0,4.09,1.24,6.37,2.76,5.08
                    c1.52-1.29,2.76-5.65,2.76-9.75v-83.47C219.13,100.33,217.89,98.06,216.37,99.35z"
          />

          <linearGradient
            id="lqt_13_"
            gradientUnits="userSpaceOnUse"
            x1="211.7718"
            y1="-128.8184"
            x2="220.8301"
            y2="-128.0345"
            gradientTransform="matrix(1 -0.8465 0 1 0 460.0706)"
          >
            <stop offset="0" style="stop-color:#CBCCC7" />
            <stop offset="9.030700e-04" style="stop-color:#CBCCC7" />
            <stop offset="0.2469" style="stop-color:#DADBD6" />
            <stop offset="0.5399" style="stop-color:#E2E3DE" />
            <stop offset="1" style="stop-color:#E5E6E1" />
          </linearGradient>
          <path
            class="lqt-${id}-st22"
            d="M216.37,198.32c-1.66,1.4-3.01-1.08-3.01-5.54v-83.47c0-4.46,1.35-9.23,3.01-10.63
                    c1.66-1.4,3.01,1.08,3.01,5.54v83.47C219.38,192.14,218.03,196.91,216.37,198.32z M216.37,100.02c-1.38,1.17-2.51,5.15-2.51,8.86
                    v83.47c0,3.72,1.13,5.79,2.51,4.62c1.38-1.17,2.51-5.15,2.51-8.86v-83.47C218.88,100.92,217.75,98.85,216.37,100.02z"
          />
        </g>
        <g>
          <linearGradient
            id="lqt_14_"
            gradientUnits="userSpaceOnUse"
            x1="225.8125"
            y1="-79.5505"
            x2="227.1243"
            y2="-174.6597"
            gradientTransform="matrix(1 -0.8465 0 1 0 460.0706)"
          >
            <stop offset="0" style="stop-color:#BCBCBC" />
            <stop offset="1" style="stop-color:#E2E2E2" />
          </linearGradient>
          <path
            class="lqt-${id}-st23"
            d="M226.49,90.78c-1.52,1.29-2.76,5.65-2.76,9.75V184c0,4.09,1.24,6.37,2.76,5.08
                    c1.52-1.29,2.76-5.65,2.76-9.75V95.86C229.25,91.77,228.01,89.49,226.49,90.78z"
          />

          <linearGradient
            id="lqt_15_"
            gradientUnits="userSpaceOnUse"
            x1="221.8882"
            y1="-128.8184"
            x2="230.9466"
            y2="-128.0345"
            gradientTransform="matrix(1 -0.8465 0 1 0 460.0706)"
          >
            <stop offset="0" style="stop-color:#CBCCC7" />
            <stop offset="9.030700e-04" style="stop-color:#CBCCC7" />
            <stop offset="0.2469" style="stop-color:#DADBD6" />
            <stop offset="0.5399" style="stop-color:#E2E3DE" />
            <stop offset="1" style="stop-color:#E5E6E1" />
          </linearGradient>
          <path
            class="lqt-${id}-st24"
            d="M226.49,189.75c-1.66,1.4-3.01-1.08-3.01-5.54v-83.47c0-4.46,1.35-9.23,3.01-10.63
                    c1.66-1.4,3.01,1.08,3.01,5.54v83.47C229.5,183.58,228.15,188.35,226.49,189.75z M226.49,91.46c-1.38,1.17-2.51,5.15-2.51,8.86
                    v83.47c0,3.72,1.13,5.79,2.51,4.62c1.38-1.17,2.51-5.15,2.51-8.86V96.07C228.99,92.36,227.87,90.29,226.49,91.46z"
          />
        </g>
        <g>
          <linearGradient
            id="lqt_16_"
            gradientUnits="userSpaceOnUse"
            x1="235.9289"
            y1="-79.5505"
            x2="237.2408"
            y2="-174.6597"
            gradientTransform="matrix(1 -0.8465 0 1 0 460.0706)"
          >
            <stop offset="0" style="stop-color:#BCBCBC" />
            <stop offset="1" style="stop-color:#E2E2E2" />
          </linearGradient>
          <path
            class="lqt-${id}-st25"
            d="M236.6,82.22c-1.52,1.29-2.76,5.65-2.76,9.75v83.47c0,4.09,1.24,6.37,2.76,5.08
                    c1.52-1.29,2.76-5.65,2.76-9.75V87.3C239.36,83.2,238.13,80.93,236.6,82.22z"
          />

          <linearGradient
            id="lqt_17_"
            gradientUnits="userSpaceOnUse"
            x1="232.0046"
            y1="-128.8184"
            x2="241.063"
            y2="-128.0345"
            gradientTransform="matrix(1 -0.8465 0 1 0 460.0706)"
          >
            <stop offset="0" style="stop-color:#CBCCC7" />
            <stop offset="9.030700e-04" style="stop-color:#CBCCC7" />
            <stop offset="0.2469" style="stop-color:#DADBD6" />
            <stop offset="0.5399" style="stop-color:#E2E3DE" />
            <stop offset="1" style="stop-color:#E5E6E1" />
          </linearGradient>
          <path
            class="lqt-${id}-st26"
            d="M236.6,181.19c-1.66,1.4-3.01-1.08-3.01-5.54V92.18c0-4.46,1.35-9.23,3.01-10.63
                    c1.66-1.4,3.01,1.08,3.01,5.54v83.47C239.61,175.01,238.26,179.78,236.6,181.19z M236.6,82.89c-1.38,1.17-2.51,5.15-2.51,8.86
                    v83.47c0,3.72,1.13,5.79,2.51,4.62c1.38-1.17,2.51-5.15,2.51-8.86V87.51C239.11,83.79,237.99,81.72,236.6,82.89z"
          />
        </g>
        <g>
          <linearGradient
            id="lqt_18_"
            gradientUnits="userSpaceOnUse"
            x1="246.0453"
            y1="-79.5505"
            x2="247.3572"
            y2="-174.6597"
            gradientTransform="matrix(1 -0.8465 0 1 0 460.0706)"
          >
            <stop offset="0" style="stop-color:#BCBCBC" />
            <stop offset="1" style="stop-color:#E2E2E2" />
          </linearGradient>
          <path
            class="lqt-${id}-st27"
            d="M246.72,73.65c-1.52,1.29-2.76,5.65-2.76,9.75v83.47c0,4.09,1.24,6.37,2.76,5.08
                    c1.52-1.29,2.76-5.65,2.76-9.75V78.73C249.48,74.64,248.24,72.37,246.72,73.65z"
          />

          <linearGradient
            id="lqt_19_"
            gradientUnits="userSpaceOnUse"
            x1="242.1211"
            y1="-128.8184"
            x2="251.1794"
            y2="-128.0345"
            gradientTransform="matrix(1 -0.8465 0 1 0 460.0706)"
          >
            <stop offset="0" style="stop-color:#CBCCC7" />
            <stop offset="9.030700e-04" style="stop-color:#CBCCC7" />
            <stop offset="0.2469" style="stop-color:#DADBD6" />
            <stop offset="0.5399" style="stop-color:#E2E3DE" />
            <stop offset="1" style="stop-color:#E5E6E1" />
          </linearGradient>
          <path
            class="lqt-${id}-st28"
            d="M246.72,172.63c-1.66,1.4-3.01-1.08-3.01-5.54V83.62c0-4.46,1.35-9.23,3.01-10.63s3.01,1.08,3.01,5.54
                    v83.47C249.73,166.45,248.38,171.22,246.72,172.63z M246.72,74.33c-1.38,1.17-2.51,5.15-2.51,8.86v83.47
                    c0,3.72,1.13,5.79,2.51,4.62c1.38-1.17,2.51-5.15,2.51-8.86V78.94C249.23,75.23,248.1,73.16,246.72,74.33z"
          />
        </g>
        <g>
          <linearGradient
            id="lqt_20_"
            gradientUnits="userSpaceOnUse"
            x1="256.1617"
            y1="-79.5505"
            x2="257.4736"
            y2="-174.6597"
            gradientTransform="matrix(1 -0.8465 0 1 0 460.0706)"
          >
            <stop offset="0" style="stop-color:#BCBCBC" />
            <stop offset="1" style="stop-color:#E2E2E2" />
          </linearGradient>
          <path
            class="lqt-${id}-st29"
            d="M256.84,65.09c-1.52,1.29-2.76,5.65-2.76,9.75v83.47c0,4.09,1.24,6.37,2.76,5.08
                    c1.52-1.29,2.76-5.65,2.76-9.75V70.17C259.59,66.07,258.36,63.8,256.84,65.09z"
          />

          <linearGradient
            id="lqt_21_"
            gradientUnits="userSpaceOnUse"
            x1="252.2375"
            y1="-128.8184"
            x2="261.2958"
            y2="-128.0345"
            gradientTransform="matrix(1 -0.8465 0 1 0 460.0706)"
          >
            <stop offset="0" style="stop-color:#CBCCC7" />
            <stop offset="9.030700e-04" style="stop-color:#CBCCC7" />
            <stop offset="0.2469" style="stop-color:#DADBD6" />
            <stop offset="0.5399" style="stop-color:#E2E3DE" />
            <stop offset="1" style="stop-color:#E5E6E1" />
          </linearGradient>
          <path
            class="lqt-${id}-st30"
            d="M256.84,164.06c-1.66,1.4-3.01-1.08-3.01-5.54V75.05c0-4.46,1.35-9.23,3.01-10.63s3.01,1.08,3.01,5.54
                    v83.47C259.85,157.89,258.5,162.66,256.84,164.06z M256.84,65.77c-1.38,1.17-2.51,5.15-2.51,8.86v83.47
                    c0,3.72,1.13,5.79,2.51,4.62c1.38-1.17,2.51-5.15,2.51-8.86V70.38C259.34,66.67,258.22,64.59,256.84,65.77z"
          />
        </g>
        <g>
          <linearGradient
            id="lqt_22_"
            gradientUnits="userSpaceOnUse"
            x1="266.2782"
            y1="-79.5505"
            x2="267.59"
            y2="-174.6597"
            gradientTransform="matrix(1 -0.8465 0 1 0 460.0706)"
          >
            <stop offset="0" style="stop-color:#BCBCBC" />
            <stop offset="1" style="stop-color:#E2E2E2" />
          </linearGradient>
          <path
            class="lqt-${id}-st31"
            d="M266.95,56.53c-1.52,1.29-2.76,5.65-2.76,9.75v83.47c0,4.09,1.24,6.37,2.76,5.08s2.76-5.65,2.76-9.75V61.61
                    C269.71,57.51,268.48,55.24,266.95,56.53z"
          />

          <linearGradient
            id="lqt_23_"
            gradientUnits="userSpaceOnUse"
            x1="262.3539"
            y1="-128.8184"
            x2="271.4123"
            y2="-128.0345"
            gradientTransform="matrix(1 -0.8465 0 1 0 460.0706)"
          >
            <stop offset="0" style="stop-color:#CBCCC7" />
            <stop offset="9.030700e-04" style="stop-color:#CBCCC7" />
            <stop offset="0.2469" style="stop-color:#DADBD6" />
            <stop offset="0.5399" style="stop-color:#E2E3DE" />
            <stop offset="1" style="stop-color:#E5E6E1" />
          </linearGradient>
          <path
            class="lqt-${id}-st32"
            d="M266.95,155.5c-1.66,1.4-3.01-1.08-3.01-5.54V66.49c0-4.46,1.35-9.23,3.01-10.63s3.01,1.08,3.01,5.54v83.47
                    C269.96,149.32,268.61,154.09,266.95,155.5z M266.95,57.2c-1.38,1.17-2.51,5.15-2.51,8.86v83.47c0,3.72,1.13,5.79,2.51,4.62
                    s2.51-5.15,2.51-8.86V61.82C269.46,58.1,268.34,56.03,266.95,57.2z"
          />
        </g>
      </g>
      <g>
        <linearGradient
          id="lqt_24_"
          gradientUnits="userSpaceOnUse"
          x1="15.875"
          y1="217.2953"
          x2="17.2229"
          y2="119.5767"
        >
          <stop offset="0" style="stop-color:#BCBCBC" />
          <stop offset="1" style="stop-color:#E2E2E2" />
        </linearGradient>
        <path
          class="lqt-${id}-st33"
          d="M16.57,116.59c-4.09,0-7.41,3.32-7.41,7.41v86.17c0,4.09,3.32,7.41,7.41,7.41s7.41-3.32,7.41-7.41V124
                  C23.98,119.91,20.66,116.59,16.57,116.59z"
        />
        <linearGradient
          id="lqt_25_"
          gradientUnits="userSpaceOnUse"
          x1="8.4402"
          y1="166.3811"
          x2="24.4506"
          y2="167.7667"
        >
          <stop offset="0" style="stop-color:#CBCCC7" />
          <stop offset="9.030700e-04" style="stop-color:#CBCCC7" />
          <stop offset="0.2469" style="stop-color:#DADBD6" />
          <stop offset="0.5399" style="stop-color:#E2E3DE" />
          <stop offset="1" style="stop-color:#E5E6E1" />
        </linearGradient>
        <path
          class="lqt-${id}-st34"
          d="M16.57,218.25c-4.46,0-8.09-3.63-8.09-8.09V124c0-4.46,3.63-8.09,8.09-8.09s8.09,3.63,8.09,8.09v86.17
                  C24.65,214.63,21.03,218.25,16.57,218.25z M16.57,117.26c-3.72,0-6.74,3.02-6.74,6.74v86.17c0,3.72,3.02,6.74,6.74,6.74
                  s6.74-3.02,6.74-6.74V124C23.31,120.29,20.28,117.26,16.57,117.26z"
        />
      </g>
      <g>
        <linearGradient
          id="lqt_26_"
          gradientUnits="userSpaceOnUse"
          x1="43.0565"
          y1="217.2953"
          x2="44.4044"
          y2="119.5767"
        >
          <stop offset="0" style="stop-color:#BCBCBC" />
          <stop offset="1" style="stop-color:#E2E2E2" />
        </linearGradient>
        <path
          class="lqt-${id}-st35"
          d="M43.75,116.59c-4.09,0-7.41,3.32-7.41,7.41v86.17c0,4.09,3.32,7.41,7.41,7.41s7.41-3.32,7.41-7.41V124
                  C51.16,119.91,47.84,116.59,43.75,116.59z"
        />
        <linearGradient
          id="lqt_27_"
          gradientUnits="userSpaceOnUse"
          x1="35.6217"
          y1="166.3811"
          x2="51.6321"
          y2="167.7667"
        >
          <stop offset="0" style="stop-color:#CBCCC7" />
          <stop offset="9.030700e-04" style="stop-color:#CBCCC7" />
          <stop offset="0.2469" style="stop-color:#DADBD6" />
          <stop offset="0.5399" style="stop-color:#E2E3DE" />
          <stop offset="1" style="stop-color:#E5E6E1" />
        </linearGradient>
        <path
          class="lqt-${id}-st36"
          d="M43.75,218.25c-4.46,0-8.09-3.63-8.09-8.09V124c0-4.46,3.63-8.09,8.09-8.09s8.09,3.63,8.09,8.09v86.17
                  C51.84,214.63,48.21,218.25,43.75,218.25z M43.75,117.26c-3.72,0-6.74,3.02-6.74,6.74v86.17c0,3.72,3.02,6.74,6.74,6.74
                  s6.74-3.02,6.74-6.74V124C50.49,120.29,47.47,117.26,43.75,117.26z"
        />
      </g>
      <g>
        <linearGradient
          id="lqt_28_"
          gradientUnits="userSpaceOnUse"
          x1="70.238"
          y1="217.2953"
          x2="71.5859"
          y2="119.5767"
        >
          <stop offset="0" style="stop-color:#BCBCBC" />
          <stop offset="1" style="stop-color:#E2E2E2" />
        </linearGradient>
        <path
          class="lqt-${id}-st37"
          d="M70.93,116.59c-4.09,0-7.41,3.32-7.41,7.41v86.17c0,4.09,3.32,7.41,7.41,7.41s7.41-3.32,7.41-7.41V124
                  C78.34,119.91,75.02,116.59,70.93,116.59z"
        />
        <linearGradient
          id="lqt_29_"
          gradientUnits="userSpaceOnUse"
          x1="62.8032"
          y1="166.3811"
          x2="78.8136"
          y2="167.7667"
        >
          <stop offset="0" style="stop-color:#CBCCC7" />
          <stop offset="9.030700e-04" style="stop-color:#CBCCC7" />
          <stop offset="0.2469" style="stop-color:#DADBD6" />
          <stop offset="0.5399" style="stop-color:#E2E3DE" />
          <stop offset="1" style="stop-color:#E5E6E1" />
        </linearGradient>
        <path
          class="lqt-${id}-st38"
          d="M70.93,218.25c-4.46,0-8.09-3.63-8.09-8.09V124c0-4.46,3.63-8.09,8.09-8.09s8.09,3.63,8.09,8.09v86.17
                  C79.02,214.63,75.39,218.25,70.93,218.25z M70.93,117.26c-3.72,0-6.74,3.02-6.74,6.74v86.17c0,3.72,3.02,6.74,6.74,6.74
                  s6.74-3.02,6.74-6.74V124C77.67,120.29,74.65,117.26,70.93,117.26z"
        />
      </g>
      <g>
        <linearGradient
          id="lqt_30_"
          gradientUnits="userSpaceOnUse"
          x1="97.4195"
          y1="217.2953"
          x2="98.7674"
          y2="119.5767"
        >
          <stop offset="0" style="stop-color:#BCBCBC" />
          <stop offset="1" style="stop-color:#E2E2E2" />
        </linearGradient>
        <path
          class="lqt-${id}-st39"
          d="M98.11,116.59c-4.09,0-7.41,3.32-7.41,7.41v86.17c0,4.09,3.32,7.41,7.41,7.41c4.09,0,7.41-3.32,7.41-7.41
                  V124C105.53,119.91,102.21,116.59,98.11,116.59z"
        />
        <linearGradient
          id="lqt_31_"
          gradientUnits="userSpaceOnUse"
          x1="89.9847"
          y1="166.3811"
          x2="105.9951"
          y2="167.7667"
        >
          <stop offset="0" style="stop-color:#CBCCC7" />
          <stop offset="9.030700e-04" style="stop-color:#CBCCC7" />
          <stop offset="0.2469" style="stop-color:#DADBD6" />
          <stop offset="0.5399" style="stop-color:#E2E3DE" />
          <stop offset="1" style="stop-color:#E5E6E1" />
        </linearGradient>
        <path
          class="lqt-${id}-st40"
          d="M98.11,218.25c-4.46,0-8.09-3.63-8.09-8.09V124c0-4.46,3.63-8.09,8.09-8.09c4.46,0,8.09,3.63,8.09,8.09
                  v86.17C106.2,214.63,102.57,218.25,98.11,218.25z M98.11,117.26c-3.72,0-6.74,3.02-6.74,6.74v86.17c0,3.72,3.02,6.74,6.74,6.74
                  c3.72,0,6.74-3.02,6.74-6.74V124C104.85,120.29,101.83,117.26,98.11,117.26z"
        />
      </g>
      <g>
        <linearGradient
          id="lqt_32_"
          gradientUnits="userSpaceOnUse"
          x1="124.601"
          y1="217.2953"
          x2="125.9489"
          y2="119.5767"
        >
          <stop offset="0" style="stop-color:#BCBCBC" />
          <stop offset="1" style="stop-color:#E2E2E2" />
        </linearGradient>
        <path
          class="lqt-${id}-st41"
          d="M125.29,116.59c-4.09,0-7.41,3.32-7.41,7.41v86.17c0,4.09,3.32,7.41,7.41,7.41c4.09,0,7.41-3.32,7.41-7.41
                  V124C132.71,119.91,129.39,116.59,125.29,116.59z"
        />
        <linearGradient
          id="lqt_33_"
          gradientUnits="userSpaceOnUse"
          x1="117.1662"
          y1="166.3811"
          x2="133.1766"
          y2="167.7667"
        >
          <stop offset="0" style="stop-color:#CBCCC7" />
          <stop offset="9.030700e-04" style="stop-color:#CBCCC7" />
          <stop offset="0.2469" style="stop-color:#DADBD6" />
          <stop offset="0.5399" style="stop-color:#E2E3DE" />
          <stop offset="1" style="stop-color:#E5E6E1" />
        </linearGradient>
        <path
          class="lqt-${id}-st42"
          d="M125.29,218.25c-4.46,0-8.09-3.63-8.09-8.09V124c0-4.46,3.63-8.09,8.09-8.09s8.09,3.63,8.09,8.09v86.17
                  C133.38,214.63,129.75,218.25,125.29,218.25z M125.29,117.26c-3.72,0-6.74,3.02-6.74,6.74v86.17c0,3.72,3.02,6.74,6.74,6.74
                  s6.74-3.02,6.74-6.74V124C132.03,120.29,129.01,117.26,125.29,117.26z"
        />
      </g>
      <g>
        <linearGradient
          id="lqt_34_"
          gradientUnits="userSpaceOnUse"
          x1="151.7825"
          y1="217.2953"
          x2="153.1304"
          y2="119.5767"
        >
          <stop offset="0" style="stop-color:#BCBCBC" />
          <stop offset="1" style="stop-color:#E2E2E2" />
        </linearGradient>
        <path
          class="lqt-${id}-st43"
          d="M152.48,116.59c-4.09,0-7.41,3.32-7.41,7.41v86.17c0,4.09,3.32,7.41,7.41,7.41c4.09,0,7.41-3.32,7.41-7.41
                  V124C159.89,119.91,156.57,116.59,152.48,116.59z"
        />
        <linearGradient
          id="lqt_35_"
          gradientUnits="userSpaceOnUse"
          x1="144.3477"
          y1="166.3811"
          x2="160.3581"
          y2="167.7667"
        >
          <stop offset="0" style="stop-color:#CBCCC7" />
          <stop offset="9.030700e-04" style="stop-color:#CBCCC7" />
          <stop offset="0.2469" style="stop-color:#DADBD6" />
          <stop offset="0.5399" style="stop-color:#E2E3DE" />
          <stop offset="1" style="stop-color:#E5E6E1" />
        </linearGradient>
        <path
          class="lqt-${id}-st44"
          d="M152.48,218.25c-4.46,0-8.09-3.63-8.09-8.09V124c0-4.46,3.63-8.09,8.09-8.09s8.09,3.63,8.09,8.09v86.17
                  C160.56,214.63,156.93,218.25,152.48,218.25z M152.48,117.26c-3.72,0-6.74,3.02-6.74,6.74v86.17c0,3.72,3.02,6.74,6.74,6.74
                  s6.74-3.02,6.74-6.74V124C159.21,120.29,156.19,117.26,152.48,117.26z"
        />
      </g>
      <g>
        <linearGradient
          id="lqt_36_"
          gradientUnits="userSpaceOnUse"
          x1="178.9641"
          y1="217.2953"
          x2="180.3119"
          y2="119.5767"
        >
          <stop offset="0" style="stop-color:#BCBCBC" />
          <stop offset="1" style="stop-color:#E2E2E2" />
        </linearGradient>
        <path
          class="lqt-${id}-st45"
          d="M179.66,116.59c-4.09,0-7.41,3.32-7.41,7.41v86.17c0,4.09,3.32,7.41,7.41,7.41c4.09,0,7.41-3.32,7.41-7.41
                  V124C187.07,119.91,183.75,116.59,179.66,116.59z"
        />
        <linearGradient
          id="lqt_37_"
          gradientUnits="userSpaceOnUse"
          x1="171.5292"
          y1="166.3811"
          x2="187.5396"
          y2="167.7667"
        >
          <stop offset="0" style="stop-color:#CBCCC7" />
          <stop offset="9.030700e-04" style="stop-color:#CBCCC7" />
          <stop offset="0.2469" style="stop-color:#DADBD6" />
          <stop offset="0.5399" style="stop-color:#E2E3DE" />
          <stop offset="1" style="stop-color:#E5E6E1" />
        </linearGradient>
        <path
          class="lqt-${id}-st46"
          d="M179.66,218.25c-4.46,0-8.09-3.63-8.09-8.09V124c0-4.46,3.63-8.09,8.09-8.09s8.09,3.63,8.09,8.09v86.17
                  C187.74,214.63,184.12,218.25,179.66,218.25z M179.66,117.26c-3.72,0-6.74,3.02-6.74,6.74v86.17c0,3.72,3.02,6.74,6.74,6.74
                  s6.74-3.02,6.74-6.74V124C186.4,120.29,183.37,117.26,179.66,117.26z"
        />
      </g>
      <linearGradient
        id="lqt_38_"
        gradientUnits="userSpaceOnUse"
        x1="222.1137"
        y1="150.2845"
        x2="254.4619"
        y2="150.2845"
      >
        <stop offset="0.1229" style="stop-color:#000000;stop-opacity:0" />
        <stop offset="0.3296" style="stop-color:#000000;stop-opacity:0.2" />
      </linearGradient>
      <polygon
        class="lqt-${id}-st47"
        points="222.11,82.22 222.11,245.31 254.46,217 254.46,55.26 	"
      />
      <linearGradient
        id="lqt_39_"
        gradientUnits="userSpaceOnUse"
        x1="251.7662"
        y1="69.4139"
        x2="251.7662"
        y2="66.7182"
      >
        <stop offset="0" style="stop-color:#999999" />
        <stop offset="0.0154" style="stop-color:#9C9C9C" />
        <stop offset="0.155" style="stop-color:#B7B7B5" />
        <stop offset="0.3078" style="stop-color:#CBCCC9" />
        <stop offset="0.4786" style="stop-color:#DADBD6" />
        <stop offset="0.6816" style="stop-color:#E2E3DF" />
        <stop offset="1" style="stop-color:#E5E6E1" />
      </linearGradient>
      <rect
        x="249.07"
        y="66.72"
        class="lqt-${id}-st48"
        width="5.39"
        height="2.7"
      />
      <linearGradient
        id="lqt_40_"
        gradientUnits="userSpaceOnUse"
        x1="234.9182"
        y1="83.5663"
        x2="234.9182"
        y2="80.8706"
      >
        <stop offset="0" style="stop-color:#999999" />
        <stop offset="0.0154" style="stop-color:#9C9C9C" />
        <stop offset="0.155" style="stop-color:#B7B7B5" />
        <stop offset="0.3078" style="stop-color:#CBCCC9" />
        <stop offset="0.4786" style="stop-color:#DADBD6" />
        <stop offset="0.6816" style="stop-color:#E2E3DF" />
        <stop offset="1" style="stop-color:#E5E6E1" />
      </linearGradient>
      <rect
        x="232.22"
        y="80.87"
        class="lqt-${id}-st49"
        width="5.39"
        height="2.7"
      />
      <linearGradient
        id="lqt_41_"
        gradientUnits="userSpaceOnUse"
        x1="251.7662"
        y1="106.4796"
        x2="251.7662"
        y2="103.7839"
      >
        <stop offset="0" style="stop-color:#999999" />
        <stop offset="0.0154" style="stop-color:#9C9C9C" />
        <stop offset="0.155" style="stop-color:#B7B7B5" />
        <stop offset="0.3078" style="stop-color:#CBCCC9" />
        <stop offset="0.4786" style="stop-color:#DADBD6" />
        <stop offset="0.6816" style="stop-color:#E2E3DF" />
        <stop offset="1" style="stop-color:#E5E6E1" />
      </linearGradient>
      <rect
        x="249.07"
        y="103.78"
        class="lqt-${id}-st50"
        width="5.39"
        height="2.7"
      />
      <linearGradient
        id="lqt_42_"
        gradientUnits="userSpaceOnUse"
        x1="234.9182"
        y1="120.6319"
        x2="234.9182"
        y2="117.9363"
      >
        <stop offset="0" style="stop-color:#999999" />
        <stop offset="0.0154" style="stop-color:#9C9C9C" />
        <stop offset="0.155" style="stop-color:#B7B7B5" />
        <stop offset="0.3078" style="stop-color:#CBCCC9" />
        <stop offset="0.4786" style="stop-color:#DADBD6" />
        <stop offset="0.6816" style="stop-color:#E2E3DF" />
        <stop offset="1" style="stop-color:#E5E6E1" />
      </linearGradient>
      <rect
        x="232.22"
        y="117.94"
        class="lqt-${id}-st51"
        width="5.39"
        height="2.7"
      />
      <linearGradient
        id="lqt_43_"
        gradientUnits="userSpaceOnUse"
        x1="251.7662"
        y1="142.8714"
        x2="251.7662"
        y2="140.1757"
      >
        <stop offset="0" style="stop-color:#999999" />
        <stop offset="0.0154" style="stop-color:#9C9C9C" />
        <stop offset="0.155" style="stop-color:#B7B7B5" />
        <stop offset="0.3078" style="stop-color:#CBCCC9" />
        <stop offset="0.4786" style="stop-color:#DADBD6" />
        <stop offset="0.6816" style="stop-color:#E2E3DF" />
        <stop offset="1" style="stop-color:#E5E6E1" />
      </linearGradient>
      <rect
        x="249.07"
        y="140.18"
        class="lqt-${id}-st52"
        width="5.39"
        height="2.7"
      />
      <linearGradient
        id="lqt_44_"
        gradientUnits="userSpaceOnUse"
        x1="234.9182"
        y1="157.0237"
        x2="234.9182"
        y2="154.328"
      >
        <stop offset="0" style="stop-color:#999999" />
        <stop offset="0.0154" style="stop-color:#9C9C9C" />
        <stop offset="0.155" style="stop-color:#B7B7B5" />
        <stop offset="0.3078" style="stop-color:#CBCCC9" />
        <stop offset="0.4786" style="stop-color:#DADBD6" />
        <stop offset="0.6816" style="stop-color:#E2E3DF" />
        <stop offset="1" style="stop-color:#E5E6E1" />
      </linearGradient>
      <rect
        x="232.22"
        y="154.33"
        class="lqt-${id}-st53"
        width="5.39"
        height="2.7"
      />
      <linearGradient
        id="lqt_45_"
        gradientUnits="userSpaceOnUse"
        x1="251.7662"
        y1="177.9153"
        x2="251.7662"
        y2="175.2196"
      >
        <stop offset="0" style="stop-color:#999999" />
        <stop offset="0.0154" style="stop-color:#9C9C9C" />
        <stop offset="0.155" style="stop-color:#B7B7B5" />
        <stop offset="0.3078" style="stop-color:#CBCCC9" />
        <stop offset="0.4786" style="stop-color:#DADBD6" />
        <stop offset="0.6816" style="stop-color:#E2E3DF" />
        <stop offset="1" style="stop-color:#E5E6E1" />
      </linearGradient>
      <rect
        x="249.07"
        y="175.22"
        class="lqt-${id}-st54"
        width="5.39"
        height="2.7"
      />
      <linearGradient
        id="lqt_46_"
        gradientUnits="userSpaceOnUse"
        x1="234.9182"
        y1="192.0676"
        x2="234.9182"
        y2="189.3719"
      >
        <stop offset="0" style="stop-color:#999999" />
        <stop offset="0.0154" style="stop-color:#9C9C9C" />
        <stop offset="0.155" style="stop-color:#B7B7B5" />
        <stop offset="0.3078" style="stop-color:#CBCCC9" />
        <stop offset="0.4786" style="stop-color:#DADBD6" />
        <stop offset="0.6816" style="stop-color:#E2E3DF" />
        <stop offset="1" style="stop-color:#E5E6E1" />
      </linearGradient>
      <rect
        x="232.22"
        y="189.37"
        class="lqt-${id}-st55"
        width="5.39"
        height="2.7"
      />
      <linearGradient
        id="lqt_47_"
        gradientUnits="userSpaceOnUse"
        x1="253.1172"
        y1="134.437"
        x2="255.2441"
        y2="134.437"
      >
        <stop offset="0" style="stop-color:#999999" />
        <stop offset="0.0154" style="stop-color:#9C9C9C" />
        <stop offset="0.155" style="stop-color:#B7B7B5" />
        <stop offset="0.3078" style="stop-color:#CBCCC9" />
        <stop offset="0.4786" style="stop-color:#DADBD6" />
        <stop offset="0.6816" style="stop-color:#E2E3DF" />
        <stop offset="1" style="stop-color:#E5E6E1" />
      </linearGradient>
      <path
        class="lqt-${id}-st56"
        d="M254.12,228.12c-0.74,0-1.35-0.6-1.35-1.35V56.89l0.01-0.06c0-0.05,0.43-5.82-3.29-9.71
                c-2.51-2.62-6.38-3.85-11.49-3.66c-0.77,0.04-1.37-0.55-1.4-1.3c-0.03-0.74,0.55-1.37,1.3-1.4c5.94-0.22,10.5,1.29,13.57,4.51
                c4.37,4.59,4.06,10.96,4.01,11.72v169.78C255.47,227.52,254.87,228.12,254.12,228.12z"
      />
      <linearGradient
        id="lqt_48_"
        gradientUnits="userSpaceOnUse"
        x1="246.9373"
        y1="223.455"
        x2="245.4293"
        y2="221.6762"
      >
        <stop offset="0" style="stop-color:#999999" />
        <stop offset="0.0154" style="stop-color:#9C9C9C" />
        <stop offset="0.155" style="stop-color:#B7B7B5" />
        <stop offset="0.3078" style="stop-color:#CBCCC9" />
        <stop offset="0.4786" style="stop-color:#DADBD6" />
        <stop offset="0.6816" style="stop-color:#E2E3DF" />
        <stop offset="1" style="stop-color:#E5E6E1" />
      </linearGradient>
      <path
        class="lqt-${id}-st57"
        d="M238.29,230.48c-0.38,0-0.75-0.16-1.02-0.46c-0.49-0.56-0.43-1.41,0.13-1.9l15.5-13.48
                c0.56-0.49,1.41-0.43,1.9,0.13c0.49,0.56,0.43,1.41-0.13,1.9l-15.5,13.48C238.92,230.37,238.6,230.48,238.29,230.48z"
      />
      <linearGradient
        id="lqt_49_"
        gradientUnits="userSpaceOnUse"
        x1="246.9373"
        y1="205.0906"
        x2="245.4293"
        y2="203.3119"
      >
        <stop offset="0" style="stop-color:#999999" />
        <stop offset="0.0154" style="stop-color:#9C9C9C" />
        <stop offset="0.155" style="stop-color:#B7B7B5" />
        <stop offset="0.3078" style="stop-color:#CBCCC9" />
        <stop offset="0.4786" style="stop-color:#DADBD6" />
        <stop offset="0.6816" style="stop-color:#E2E3DF" />
        <stop offset="1" style="stop-color:#E5E6E1" />
      </linearGradient>
      <path
        class="lqt-${id}-st58"
        d="M238.29,212.12c-0.38,0-0.75-0.16-1.02-0.46c-0.49-0.56-0.43-1.41,0.13-1.9l15.5-13.48
                c0.56-0.49,1.41-0.43,1.9,0.13c0.49,0.56,0.43,1.41-0.13,1.9l-15.5,13.48C238.92,212.01,238.6,212.12,238.29,212.12z"
      />
      <linearGradient
        id="lqt_50_"
        gradientUnits="userSpaceOnUse"
        x1="246.9373"
        y1="186.7262"
        x2="245.4293"
        y2="184.9475"
      >
        <stop offset="0" style="stop-color:#999999" />
        <stop offset="0.0154" style="stop-color:#9C9C9C" />
        <stop offset="0.155" style="stop-color:#B7B7B5" />
        <stop offset="0.3078" style="stop-color:#CBCCC9" />
        <stop offset="0.4786" style="stop-color:#DADBD6" />
        <stop offset="0.6816" style="stop-color:#E2E3DF" />
        <stop offset="1" style="stop-color:#E5E6E1" />
      </linearGradient>
      <path
        class="lqt-${id}-st59"
        d="M238.29,193.75c-0.38,0-0.75-0.16-1.02-0.46c-0.49-0.56-0.43-1.41,0.13-1.9l15.5-13.48
                c0.56-0.49,1.41-0.43,1.9,0.13c0.49,0.56,0.43,1.41-0.13,1.9l-15.5,13.48C238.92,193.64,238.6,193.75,238.29,193.75z"
      />
      <linearGradient
        id="lqt_51_"
        gradientUnits="userSpaceOnUse"
        x1="246.9373"
        y1="168.3619"
        x2="245.4293"
        y2="166.5831"
      >
        <stop offset="0" style="stop-color:#999999" />
        <stop offset="0.0154" style="stop-color:#9C9C9C" />
        <stop offset="0.155" style="stop-color:#B7B7B5" />
        <stop offset="0.3078" style="stop-color:#CBCCC9" />
        <stop offset="0.4786" style="stop-color:#DADBD6" />
        <stop offset="0.6816" style="stop-color:#E2E3DF" />
        <stop offset="1" style="stop-color:#E5E6E1" />
      </linearGradient>
      <path
        class="lqt-${id}-st60"
        d="M238.29,175.39c-0.38,0-0.75-0.16-1.02-0.46c-0.49-0.56-0.43-1.41,0.13-1.9l15.5-13.48
                c0.56-0.49,1.41-0.43,1.9,0.13c0.49,0.56,0.43,1.41-0.13,1.9l-15.5,13.48C238.92,175.28,238.6,175.39,238.29,175.39z"
      />
      <linearGradient
        id="lqt_52_"
        gradientUnits="userSpaceOnUse"
        x1="246.9373"
        y1="149.9975"
        x2="245.4293"
        y2="148.2188"
      >
        <stop offset="0" style="stop-color:#999999" />
        <stop offset="0.0154" style="stop-color:#9C9C9C" />
        <stop offset="0.155" style="stop-color:#B7B7B5" />
        <stop offset="0.3078" style="stop-color:#CBCCC9" />
        <stop offset="0.4786" style="stop-color:#DADBD6" />
        <stop offset="0.6816" style="stop-color:#E2E3DF" />
        <stop offset="1" style="stop-color:#E5E6E1" />
      </linearGradient>
      <path
        class="lqt-${id}-st61"
        d="M238.29,157.02c-0.38,0-0.75-0.16-1.02-0.46c-0.49-0.56-0.43-1.41,0.13-1.9l15.5-13.48
                c0.56-0.49,1.41-0.43,1.9,0.13c0.49,0.56,0.43,1.41-0.13,1.9l-15.5,13.48C238.92,156.92,238.6,157.02,238.29,157.02z"
      />
      <linearGradient
        id="lqt_53_"
        gradientUnits="userSpaceOnUse"
        x1="246.9373"
        y1="131.6331"
        x2="245.4293"
        y2="129.8544"
      >
        <stop offset="0" style="stop-color:#999999" />
        <stop offset="0.0154" style="stop-color:#9C9C9C" />
        <stop offset="0.155" style="stop-color:#B7B7B5" />
        <stop offset="0.3078" style="stop-color:#CBCCC9" />
        <stop offset="0.4786" style="stop-color:#DADBD6" />
        <stop offset="0.6816" style="stop-color:#E2E3DF" />
        <stop offset="1" style="stop-color:#E5E6E1" />
      </linearGradient>
      <path
        class="lqt-${id}-st62"
        d="M238.29,138.66c-0.38,0-0.75-0.16-1.02-0.46c-0.49-0.56-0.43-1.41,0.13-1.9l15.5-13.48
                c0.56-0.49,1.41-0.43,1.9,0.13c0.49,0.56,0.43,1.41-0.13,1.9l-15.5,13.48C238.92,138.55,238.6,138.66,238.29,138.66z"
      />
      <linearGradient
        id="lqt_54_"
        gradientUnits="userSpaceOnUse"
        x1="246.9373"
        y1="113.2688"
        x2="245.4293"
        y2="111.4901"
      >
        <stop offset="0" style="stop-color:#999999" />
        <stop offset="0.0154" style="stop-color:#9C9C9C" />
        <stop offset="0.155" style="stop-color:#B7B7B5" />
        <stop offset="0.3078" style="stop-color:#CBCCC9" />
        <stop offset="0.4786" style="stop-color:#DADBD6" />
        <stop offset="0.6816" style="stop-color:#E2E3DF" />
        <stop offset="1" style="stop-color:#E5E6E1" />
      </linearGradient>
      <path
        class="lqt-${id}-st63"
        d="M238.29,120.29c-0.38,0-0.75-0.16-1.02-0.46c-0.49-0.56-0.43-1.41,0.13-1.9l15.5-13.48
                c0.56-0.49,1.41-0.43,1.9,0.13c0.49,0.56,0.43,1.41-0.13,1.9l-15.5,13.48C238.92,120.19,238.6,120.29,238.29,120.29z"
      />
      <linearGradient
        id="lqt_55_"
        gradientUnits="userSpaceOnUse"
        x1="246.9373"
        y1="94.9044"
        x2="245.4293"
        y2="93.1257"
      >
        <stop offset="0" style="stop-color:#999999" />
        <stop offset="0.0154" style="stop-color:#9C9C9C" />
        <stop offset="0.155" style="stop-color:#B7B7B5" />
        <stop offset="0.3078" style="stop-color:#CBCCC9" />
        <stop offset="0.4786" style="stop-color:#DADBD6" />
        <stop offset="0.6816" style="stop-color:#E2E3DF" />
        <stop offset="1" style="stop-color:#E5E6E1" />
      </linearGradient>
      <path
        class="lqt-${id}-st64"
        d="M238.29,101.93c-0.38,0-0.75-0.16-1.02-0.46c-0.49-0.56-0.43-1.41,0.13-1.9l15.5-13.48
                c0.56-0.49,1.41-0.43,1.9,0.13c0.49,0.56,0.43,1.41-0.13,1.9l-15.5,13.48C238.92,101.82,238.6,101.93,238.29,101.93z"
      />
      <linearGradient
        id="lqt_56_"
        gradientUnits="userSpaceOnUse"
        x1="246.9373"
        y1="76.5401"
        x2="245.4293"
        y2="74.7614"
      >
        <stop offset="0" style="stop-color:#999999" />
        <stop offset="0.0154" style="stop-color:#9C9C9C" />
        <stop offset="0.155" style="stop-color:#B7B7B5" />
        <stop offset="0.3078" style="stop-color:#CBCCC9" />
        <stop offset="0.4786" style="stop-color:#DADBD6" />
        <stop offset="0.6816" style="stop-color:#E2E3DF" />
        <stop offset="1" style="stop-color:#E5E6E1" />
      </linearGradient>
      <path
        class="lqt-${id}-st65"
        d="M238.29,83.57c-0.38,0-0.75-0.16-1.02-0.46c-0.49-0.56-0.43-1.41,0.13-1.9l15.5-13.48
                c0.56-0.49,1.41-0.43,1.9,0.13c0.49,0.56,0.43,1.41-0.13,1.9l-15.5,13.48C238.92,83.46,238.6,83.57,238.29,83.57z"
      />
      <linearGradient
        id="lqt_57_"
        gradientUnits="userSpaceOnUse"
        x1="236.3427"
        y1="147.9155"
        x2="238.9701"
        y2="147.9155"
      >
        <stop offset="0" style="stop-color:#999999" />
        <stop offset="0.0154" style="stop-color:#9C9C9C" />
        <stop offset="0.155" style="stop-color:#B7B7B5" />
        <stop offset="0.3078" style="stop-color:#CBCCC9" />
        <stop offset="0.4786" style="stop-color:#DADBD6" />
        <stop offset="0.6816" style="stop-color:#E2E3DF" />
        <stop offset="1" style="stop-color:#E5E6E1" />
      </linearGradient>
      <path
        class="lqt-${id}-st66"
        d="M237.95,241.6c-0.74,0-1.35-0.6-1.35-1.35V70.37l0.01-0.06c0-0.05,0.43-5.82-3.29-9.71
                c-2.51-2.62-6.38-3.85-11.49-3.66c-0.77,0.04-1.37-0.55-1.4-1.3c-0.03-0.74,0.55-1.37,1.3-1.4c5.94-0.22,10.5,1.29,13.57,4.51
                c4.37,4.59,4.06,10.96,4.01,11.72v169.78C239.3,241,238.7,241.6,237.95,241.6z"
      />
      <polygon
        class="lqt-${id}-st13"
        points="1.8,107.75 1.01,105.89 60.37,80.54 60.37,44.14 62.39,44.14 62.39,81.88 	"
      />
      <polygon
        class="lqt-${id}-st13"
        points="198.06,105.41 187.07,90.98 187.07,56.95 189.09,56.95 189.09,90.3 199.67,104.18 	"
      />
      <polygon
        class="lqt-${id}-st67"
        points="0.45,107.07 2.66,104.21 59.02,79.87 59.02,43.47 61.05,43.47 61.05,81.2 	"
      />
      <polygon
        class="lqt-${id}-st67"
        points="196.71,104.73 185.72,90.31 185.72,56.27 187.74,56.27 187.74,89.63 198.32,103.51 	"
      />

      <rect
        x="220.15"
        y="46.16"
        transform="matrix(0.9891 -0.1471 0.1471 0.9891 -4.2704 36.61)"
        class="lqt-${id}-st68"
        width="50.42"
        height="2.02"
      />
    </g>

    <g class="SVG_ani" >
      <g class="f1">
        <animate
          values="show;hide;hide;hide;"
          dur="0.5s"
          attributeName="class"
          repeatCount="indefinite"
        />
        <path
          class="lqt-${id}-st69"
          d="M207.92,49.12l-64.45-10.18c0-0.01,0-0.02,0-0.02c0-0.6-0.95-1.13-2.41-1.47l15.76-21.52
                c-6.21-0.48-12.73-0.74-19.44-0.74c-2.09,0-4.15,0.03-6.2,0.08l3.23,22.04c-1.65,0.28-2.81,0.79-3.06,1.38L62.15,45.3
                c2.35,2.56,6.06,4.95,10.91,7.08l61.21-11.87c0.91,0.16,1.97,0.26,3.11,0.26c0.84,0,1.63-0.05,2.36-0.14l53.43,14.9
                C199.17,53.66,204.18,51.5,207.92,49.12z"
        />
        <linearGradient
          id="lqt_58_"
          gradientUnits="userSpaceOnUse"
          x1="135.0349"
          y1="54.525"
          x2="135.0349"
          y2="14.1854"
        >
          <stop offset="0" style="stop-color:#838383" />
          <stop offset="1" style="stop-color:#E6E6E6" />
        </linearGradient>
        <path
          class="lqt-${id}-st70"
          d="M207.92,48.12l-64.45-10.18c0-0.01,0-0.02,0-0.02c0-0.6-0.95-1.13-2.41-1.47l15.76-21.52
                c-6.21-0.48-12.73-0.74-19.44-0.74c-2.09,0-4.15,0.03-6.2,0.08l3.23,22.04c-1.65,0.28-2.81,0.79-3.06,1.38L62.15,44.3
                c2.35,2.56,6.06,4.95,10.91,7.08l61.21-11.87c0.91,0.16,1.97,0.26,3.11,0.26c0.84,0,1.63-0.05,2.36-0.14l53.43,14.9
                C199.17,52.66,204.18,50.5,207.92,48.12z"
        />
      </g>
      <g class="f2">
        <animate
          values="hide;show;hide;hide;"
          dur="0.5s"
          attributeName="class"
          repeatCount="indefinite"
        />
        <path
          class="lqt-${id}-st69"
          d="M215.25,37.04l-72.56,0.98c-0.01-0.01-0.02-0.01-0.04-0.02c-0.99-0.52-2.68-0.84-4.5-0.91l-21.76-21.03
                c-6.18,0.53-12.24,1.29-18.05,2.31c-1.81,0.32-3.54,0.66-5.24,1.01l39.06,18.6c-0.96,0.49-1.14,1.11-0.38,1.66L82.73,55.87
                c6.25,1.86,13.39,3.36,21.1,4.48l33.48-19.58c1.06,0,2.14-0.07,3.12-0.25c0.72-0.13,1.33-0.29,1.8-0.48l70.78,4.79
                C215.15,42.3,215.93,39.67,215.25,37.04z"
        />
        <linearGradient
          id="lqt_59_"
          gradientUnits="userSpaceOnUse"
          x1="149.108"
          y1="59.3493"
          x2="149.108"
          y2="15.0539"
        >
          <stop offset="0" style="stop-color:#838383" />
          <stop offset="1" style="stop-color:#E6E6E6" />
        </linearGradient>
        <path
          class="lqt-${id}-st71"
          d="M215.25,36.04l-72.56,0.98c-0.01-0.01-0.02-0.01-0.04-0.02c-0.99-0.52-2.68-0.84-4.5-0.91l-21.76-21.03
                c-6.18,0.53-12.24,1.29-18.05,2.31c-1.81,0.32-3.54,0.66-5.24,1.01l39.06,18.6c-0.96,0.49-1.14,1.11-0.38,1.66L82.73,54.87
                c6.25,1.86,13.39,3.36,21.1,4.48l33.48-19.58c1.06,0,2.14-0.07,3.12-0.25c0.72-0.13,1.33-0.29,1.8-0.48l70.78,4.79
                C215.15,41.3,215.93,38.67,215.25,36.04z"
        />
      </g>
      <g class="f3">
        <animate
          values="hide;hide;show;hide;"
          dur="0.5s"
          attributeName="class"
          repeatCount="indefinite"
        />
        <path
          class="lqt-${id}-st69"
          d="M201.72,25.46l-61.23,11.87c-0.02,0-0.04-0.01-0.07-0.01c-1.71-0.3-3.7-0.32-5.39-0.1L81.57,22.31
                c-4.49,1.39-8.48,2.98-11.83,4.74c-1.04,0.55-1.98,1.11-2.87,1.67L131.3,38.9c-0.02,0.57,0.83,1.13,2.4,1.5l-15.75,21.52
                c8.47,0.66,17.13,0.88,25.63,0.67l-3.23-22.05c0.93-0.16,1.73-0.39,2.3-0.69c0.42-0.22,0.67-0.46,0.77-0.69l69.18-6.61
                C210.29,30.03,206.64,27.63,201.72,25.46z"
        />
        <linearGradient
          id="lqt_60_"
          gradientUnits="userSpaceOnUse"
          x1="139.7336"
          y1="61.6529"
          x2="139.7336"
          y2="15.9942"
        >
          <stop offset="0" style="stop-color:#838383" />
          <stop offset="1" style="stop-color:#E6E6E6" />
        </linearGradient>
        <path
          class="lqt-${id}-st72"
          d="M201.72,24.46l-61.23,11.87c-0.02,0-0.04-0.01-0.07-0.01c-1.71-0.3-3.7-0.32-5.39-0.1L81.57,21.31
                c-4.49,1.39-8.48,2.98-11.83,4.74c-1.04,0.55-1.98,1.11-2.87,1.67L131.3,37.9c-0.02,0.57,0.83,1.13,2.4,1.5l-15.75,21.52
                c8.47,0.66,17.13,0.88,25.63,0.67l-3.23-22.05c0.93-0.16,1.73-0.39,2.3-0.69c0.42-0.22,0.67-0.46,0.77-0.69l69.18-6.61
                C210.29,29.03,206.64,26.63,201.72,24.46z"
        />
      </g>
      <g class="f4">
        <animate
          values="hide;hide;hide;show;"
          dur="0.5s"
          attributeName="class"
          repeatCount="indefinite"
        />
        <path
          class="lqt-${id}-st69"
          d="M170.94,17.48l-33.48,19.59c-0.03,0-0.05,0-0.08,0c-1.98,0-3.73,0.29-4.84,0.73l-70.82-4.79
                c-1.59,1.89-2.44,3.87-2.44,5.91c0,0.63,0.11,1.26,0.27,1.88l72.53-0.98c0.92,0.5,2.59,0.86,4.54,0.93l21.76,21.03
                c8.43-0.71,16.28-1.84,23.3-3.31l-39.07-18.6c0.54-0.28,0.86-0.6,0.86-0.94c0-0.25-0.17-0.5-0.47-0.72l49.03-16.24
                C185.89,20.14,178.78,18.62,170.94,17.48z"
        />
        <linearGradient
          id="lqt_61_"
          gradientUnits="userSpaceOnUse"
          x1="125.6504"
          y1="60.7795"
          x2="125.6504"
          y2="16.4849"
        >
          <stop offset="0" style="stop-color:#838383" />
          <stop offset="1" style="stop-color:#E6E6E6" />
        </linearGradient>
        <path
          class="lqt-${id}-st73"
          d="M170.94,16.48l-33.48,19.59c-0.03,0-0.05,0-0.08,0c-1.98,0-3.73,0.29-4.84,0.73l-70.82-4.79
                c-1.59,1.89-2.44,3.87-2.44,5.91c0,0.63,0.11,1.26,0.27,1.88l72.53-0.98c0.92,0.5,2.59,0.86,4.54,0.93l21.76,21.03
                c8.43-0.71,16.28-1.84,23.3-3.31l-39.07-18.6c0.54-0.28,0.86-0.6,0.86-0.94c0-0.25-0.17-0.5-0.47-0.72l49.03-16.24
                C185.89,19.14,178.78,17.62,170.94,16.48z"
        />
      </g>
    </g>

    <g class="SVG_sta">
      <path
        class="lqt-${id}-st69"
        d="M170.94,17.48l-33.48,19.59c-0.03,0-0.05,0-0.08,0c-1.98,0-3.73,0.29-4.84,0.73l-70.82-4.79
                c-1.59,1.89-2.44,3.87-2.44,5.91c0,0.63,0.11,1.26,0.27,1.88l72.53-0.98c0.92,0.5,2.59,0.86,4.54,0.93l21.76,21.03
                c8.43-0.71,16.28-1.84,23.3-3.31l-39.07-18.6c0.54-0.28,0.86-0.6,0.86-0.94c0-0.25-0.17-0.5-0.47-0.72l49.03-16.24
                C185.89,20.14,178.78,18.62,170.94,17.48z"
      />
      <linearGradient
        id="lqt_61_"
        gradientUnits="userSpaceOnUse"
        x1="125.6504"
        y1="60.7795"
        x2="125.6504"
        y2="16.4849"
      >
        <stop offset="0" style="stop-color:#838383" />
        <stop offset="1" style="stop-color:#E6E6E6" />
      </linearGradient>
      <path
        class="lqt-${id}-st73"
        d="M170.94,16.48l-33.48,19.59c-0.03,0-0.05,0-0.08,0c-1.98,0-3.73,0.29-4.84,0.73l-70.82-4.79
                c-1.59,1.89-2.44,3.87-2.44,5.91c0,0.63,0.11,1.26,0.27,1.88l72.53-0.98c0.92,0.5,2.59,0.86,4.54,0.93l21.76,21.03
                c8.43-0.71,16.28-1.84,23.3-3.31l-39.07-18.6c0.54-0.28,0.86-0.6,0.86-0.94c0-0.25-0.17-0.5-0.47-0.72l49.03-16.24
                C185.89,19.14,178.78,17.62,170.94,16.48z"
      />
    </g>

    <g id="SVG_base2">
      <linearGradient
        id="lqt_62_"
        gradientUnits="userSpaceOnUse"
        x1="52.2854"
        y1="62.6747"
        x2="221.4397"
        y2="62.6747"
      >
        <stop offset="0" style="stop-color:#838383" />
        <stop offset="0.5" style="stop-color:#FEFEFE" />
        <stop offset="1" style="stop-color:#9C9D98" />
      </linearGradient>
      <path
        class="lqt-${id}-st74"
        d="M219.42,34.71L207.96,46.5l-31,9.43l-39.76,4.72l-50.54-6.74L59.27,41.55l-5.63-10.88l0.04-0.34h-1.38v33.7
                h0.01c0,0.11-0.01,0.22-0.01,0.34c0,16.93,37.87,30.66,84.58,30.66s84.58-13.73,84.58-30.66c0-0.11-0.01-0.22-0.01-0.34h0.01v-33.7
                h-1.38L219.42,34.71z"
      />
      <g>
        <g>
          <path
            class="lqt-${id}-st15"
            d="M136.86,3.37c22.21,0,43.04,3.12,58.66,8.78c14.33,5.2,22.55,11.94,22.55,18.51s-8.22,13.32-22.55,18.51
                    c-15.62,5.66-36.45,8.78-58.66,8.78s-43.04-3.12-58.66-8.78c-14.33-5.2-22.55-11.94-22.55-18.51s8.22-13.32,22.55-18.51
                    C93.82,6.49,114.65,3.37,136.86,3.37 M136.86,0C90.15,0,52.29,13.73,52.29,30.66s37.87,30.66,84.58,30.66
                    s84.58-13.73,84.58-30.66S183.57,0,136.86,0L136.86,0z"
          />
        </g>
      </g>
      <linearGradient
        id="lqt_63_"
        gradientUnits="userSpaceOnUse"
        x1="149.2089"
        y1="20.3645"
        x2="150.6999"
        y2="22.1867"
      >
        <stop offset="0" style="stop-color:#838383" />
        <stop offset="0.5" style="stop-color:#FEFEFE" />
        <stop offset="1" style="stop-color:#9C9D98" />
      </linearGradient>
      <path
        class="lqt-${id}-st75"
        d="M166.67,7.69c-0.34-0.41-0.79-0.6-1.01-0.42l-32.96,26.94l2.59,0.38l31.59-25.83
                C167.1,8.59,167.01,8.11,166.67,7.69z"
      />
      <linearGradient
        id="lqt_64_"
        gradientUnits="userSpaceOnUse"
        x1="97.3861"
        y1="33.6636"
        x2="97.3861"
        y2="31.6636"
      >
        <stop offset="0" style="stop-color:#838383" />
        <stop offset="0.5" style="stop-color:#FEFEFE" />
        <stop offset="1" style="stop-color:#9C9D98" />
      </linearGradient>
      <path
        class="lqt-${id}-st76"
        d="M136.82,33.66H57.96c-0.55,0-1-0.45-1-1s0.45-1,1-1h78.86c0.55,0,1,0.45,1,1S137.37,33.66,136.82,33.66z"
      />
      <linearGradient
        id="lqt_65_"
        gradientUnits="userSpaceOnUse"
        x1="126.1758"
        y1="35.1834"
        x2="145.5358"
        y2="35.1834"
      >
        <stop offset="0" style="stop-color:#838383" />
        <stop offset="0.5" style="stop-color:#FEFEFE" />
        <stop offset="1" style="stop-color:#9C9D98" />
      </linearGradient>
      <path
        class="lqt-${id}-st77"
        d="M128.38,27.04v13c0,1.81,3.58,3.29,8.01,3.29s8.01-1.47,8.01-3.29v-13H128.38z"
      />
      <ellipse
        class="lqt-${id}-st78"
        cx="136.38"
        cy="27.04"
        rx="8.01"
        ry="3.29"
      />
      <linearGradient
        id="lqt_66_"
        gradientUnits="userSpaceOnUse"
        x1="118.9718"
        y1="44.7488"
        x2="120.4837"
        y2="46.5967"
      >
        <stop offset="0" style="stop-color:#838383" />
        <stop offset="0.5" style="stop-color:#FEFEFE" />
        <stop offset="1" style="stop-color:#9C9D98" />
      </linearGradient>
      <path
        class="lqt-${id}-st79"
        d="M133.05,34.89c-0.34-0.41-0.79-0.6-1.01-0.42l-26.16,21.34l2.59,0.38l24.78-20.22
                C133.47,35.79,133.38,35.31,133.05,34.89z"
      />
      <linearGradient
        id="lqt_67_"
        gradientUnits="userSpaceOnUse"
        x1="179.7204"
        y1="33.6636"
        x2="179.7204"
        y2="31.6636"
      >
        <stop offset="0" style="stop-color:#838383" />
        <stop offset="0.5" style="stop-color:#FEFEFE" />
        <stop offset="1" style="stop-color:#9C9D98" />
      </linearGradient>
      <path
        class="lqt-${id}-st80"
        d="M216.37,33.66h-73.3c-0.55,0-1-0.45-1-1s0.45-1,1-1h73.3c0.55,0,1,0.45,1,1S216.92,33.66,216.37,33.66z"
      />
    </g>
    <g class="SVG_alert" >
      <path
        class="lqt-${id}-st81"
        d="M274.83,42.98l-1.28-1.63l-2.29,1.85h-1l-0.11-0.73l-4.92,0.73H248.9c-2.86-1.78-6.54-2.59-11-2.43
                c-0.74,0.03-1.32,0.65-1.3,1.4c0.02,0.42,0.22,0.79,0.54,1.03h-15.7V30.33h-0.02C220.92,13.55,183.26,0,136.86,0
                c-46.4,0-84.05,13.55-84.55,30.33h-0.02v16.51h-0.34c0,0.45,0.04,0.9,0.09,1.35h-0.09c0,0.9,0.13,1.79,0.34,2.68v12.52L2.62,103.94
                L0,106.01l0.08,0.19V266H0.05v49h17l3-2v-25.07c0.27-0.06,0.52-0.17,0.73-0.37L42.33,266h116.58l21.56,21.56
                c0.17,0.17,0.36,0.27,0.57,0.34V315h17l11-10v-20.6c0.17-0.16,0.31-0.41,0.39-0.72l9.08-35.84l3.59-3.12v0.59l14.49-12.68v7.62
                c0,0.74,0.6,1.35,1.35,1.35s1.35-0.6,1.35-1.35v-9.98l11.19-9.79l2.29,3.17v3.12c0,0.74,0.6,1.35,1.35,1.35
                c0.25,0,0.48-0.09,0.68-0.21v19.08h6.61v11.15h2.13l11-10v-49V43.2L274.83,42.98z M20.05,284.04V266h18.04L20.05,284.04z
                 M163.16,266h17.89v17.89L163.16,266z M197.63,266l0.42-0.36V266H197.63z M209.05,277.07v-20.99l6.82-5.93L209.05,277.07z
                 M252.36,218.84l0.41-0.36v0.94L252.36,218.84z"
      />
    </g>
    `;
    return text;
  }

  //加载数据
  loadData() {
    this.loadDeviceInfo();
  }

  //刷新内容
  refreshContent(data) {
    let { point = {} } = data || {};
    // let { pointCode = "" } = this;
    // let { device = {} } = data || {};
    // let { pointList = [] } = device || {};
    // let point = pointList.find(item => {
    //   let { point: id = "" } = item || {};
    //   return id == pointCode; // SwSts  开关状态
    // });
    if (point) {
      let { value = "" } = point || {};
      this.pointValue = value;
      this.refresh();
    }
  }

  refresh() {
    super.refresh();
    let { info = {}, pointValue } = this;
    bmCommon.log(`${info.type}刷新 `);
    let { id = "", height = 0, width = 0 } = info || {};
    let $container = $(`#${id}>.component`);
    let $svg = $container.find("svg");
    $svg.attr({ width, height });
    if (pointValue == 0) {
      $svg.find(".SVG_ani").hide();
      $svg.find(".SVG_sta").show();
      $svg.find(".SVG_alert").hide();
    } else if (pointValue == 1) {
      $svg.find(".SVG_ani").show();
      $svg.find(".SVG_sta").hide();
      $svg.find(".SVG_alert").hide();
    } else if (pointValue == 2) {
      $svg.find(".SVG_ani").hide();
      $svg.find(".SVG_sta").hide();
      $svg.find(".SVG_alert").show();
    }
  }

  event() {}
}

export default Text;

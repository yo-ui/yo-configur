import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 风冷热器 风冷热泵机组
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
    <div class="bm-device-flrq-com component"
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
    viewBox="0 0 400 320"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
    .flrb-${id}-st0{fill:#191919;}
    .flrb-${id}-st1{fill:url(#flrb_1_);}
    .flrb-${id}-st2{fill:url(#flrb_2_);}
    .flrb-${id}-st3{fill:url(#flrb_3_);}
    .flrb-${id}-st4{fill:url(#flrb_4_);}
    .flrb-${id}-st5{fill:url(#flrb_5_);}
    .flrb-${id}-st6{fill:url(#flrb_6_);}
    .flrb-${id}-st7{fill:url(#flrb_7_);}
    .flrb-${id}-st8{fill:url(#flrb_8_);}
    .flrb-${id}-st9{fill:url(#flrb_9_);}
    .flrb-${id}-st10{fill:#BC4B59;}
    .flrb-${id}-st11{fill:url(#flrb_10_);}
    .flrb-${id}-st12{fill:url(#flrb_11_);}
    .flrb-${id}-st13{fill:url(#flrb_12_);}
    .flrb-${id}-st14{opacity:0.4;fill:#FFFFFF;}
    .flrb-${id}-st15{opacity:0.3;}
    .flrb-${id}-st16{fill:url(#flrb_13_);}
    .flrb-${id}-st17{fill:url(#flrb_14_);}
    .flrb-${id}-st18{fill:#FFFFFF;}
    .flrb-${id}-st19{fill:#585F60;}
    .flrb-${id}-st20{fill:#FCFCFC;}
    .flrb-${id}-st21{fill:url(#flrb_15_);}
    .flrb-${id}-st22{fill:url(#flrb_16_);}
    .flrb-${id}-st23{fill:url(#flrb_17_);}
    .flrb-${id}-st24{fill:url(#flrb_18_);}
    .flrb-${id}-st25{fill:url(#flrb_19_);}
    .flrb-${id}-st26{fill:url(#flrb_20_);}
    .flrb-${id}-st27{fill:url(#flrb_21_);}
    .flrb-${id}-st28{fill:#707070;}
    .flrb-${id}-st29{fill:url(#flrb_22_);}
    .flrb-${id}-st30{fill:url(#flrb_23_);}
    .flrb-${id}-st31{fill:url(#flrb_24_);}
    .flrb-${id}-st32{fill:#181D1E;}
    .flrb-${id}-st33{fill:url(#flrb_25_);}
    .flrb-${id}-st34{fill:url(#flrb_26_);}
    .flrb-${id}-st35{fill:url(#flrb_27_);}
    .flrb-${id}-st36{fill:url(#flrb_28_);}
    .flrb-${id}-st37{fill:url(#flrb_29_);}
    .flrb-${id}-st38{fill:url(#flrb_30_);}
    .flrb-${id}-st39{fill:url(#flrb_31_);}
    .flrb-${id}-st40{fill:url(#flrb_32_);}
    .flrb-${id}-st41{fill:url(#flrb_33_);}
    .flrb-${id}-st42{fill:url(#flrb_34_);}
    .flrb-${id}-st43{fill:url(#flrb_35_);}
    .flrb-${id}-st44{fill:url(#flrb_36_);}
    .flrb-${id}-st45{fill:url(#flrb_37_);}
    .flrb-${id}-st46{fill:url(#flrb_38_);}
    .flrb-${id}-st47{fill:url(#flrb_39_);}
    .flrb-${id}-st48{fill:url(#flrb_40_);}
    .flrb-${id}-st49{fill:url(#flrb_41_);}
    .flrb-${id}-st50{fill:url(#flrb_42_);}
    .flrb-${id}-st51{fill:url(#flrb_43_);}
    .flrb-${id}-st52{fill:url(#flrb_44_);}
    .flrb-${id}-st53{fill:url(#flrb_45_);}
    .flrb-${id}-st54{fill:#808484;}
    .flrb-${id}-st55{fill:url(#flrb_46_);}
    .flrb-${id}-st56{fill:url(#flrb_47_);}
    .flrb-${id}-st57{fill:url(#flrb_48_);}
    .flrb-${id}-st58{fill:none;stroke:#798689;stroke-width:2;stroke-miterlimit:10;}
    .flrb-${id}-st59{fill:url(#flrb_49_);}
    .flrb-${id}-st60{fill:url(#flrb_50_);}
    .flrb-${id}-st61{fill:url(#flrb_51_);}
    .flrb-${id}-st62{fill:#3D3F3F;}
    .flrb-${id}-st63{fill:url(#flrb_52_);}
    .flrb-${id}-st64{fill:url(#flrq_40_);}
    .flrb-${id}-st65{fill:#D6D6D6;}
    .flrb-${id}-st66{fill:url(#flrq_43_);}
    .flrb-${id}-st67{fill:url(#flrq_44_);}
    .flrb-${id}-st68{fill:url(#flrq_45_);}
    .flrb-${id}-st69{fill:url(#flrq_46_);}
    .flrb-${id}-st70{fill:url(#flrq_55_);}
    .flrb-${id}-st71{fill:url(#flrq_56_);}
    .flrb-${id}-st72{fill:url(#flrq_59_);}
    .flrb-${id}-st73{fill:url(#flrq_60_);}
    .flrb-${id}-st74{fill:url(#flrq_63_);}
    .flrb-${id}-st75{fill:url(#flrq_64_);}
    .flrb-${id}-st76{fill:url(#flrq_70_);}
    .flrb-${id}-st77{fill:url(#flrq_71_);}
    .flrb-${id}-st78{fill:url(#flrq_73_);}
    .flrb-${id}-st79{fill:url(#flrq_74_);}
    .flrb-${id}-st80{fill:url(#flrq_82_);}
    .flrb-${id}-st81{fill:url(#flrq_83_);}
    .flrb-${id}-st82{fill:url(#flrq_115_);}
    .flrb-${id}-st83{fill:url(#flrq_116_);}
    .flrb-${id}-st84{fill:url(#flrq_117_);}
    .flrb-${id}-st85{fill:url(#flrq_118_);}
    .flrb-${id}-st86{fill:url(#flrq_119_);}
    .flrb-${id}-st87{fill:url(#flrq_120_);}
    .flrb-${id}-st88{fill:url(#flrq_121_);}
    .flrb-${id}-st89{fill:url(#flrq_122_);}
    .flrb-${id}-st90{fill:url(#flrq_123_);}
    .flrb-${id}-st91{fill:url(#flrq_124_);}
    .flrb-${id}-st92{fill:url(#flrq_125_);}
    .flrb-${id}-st93{fill:url(#flrq_126_);}
    .flrb-${id}-st94{fill:url(#flrq_133_);}
    .flrb-${id}-st95{fill:url(#flrq_134_);}
    .flrb-${id}-st96{fill:url(#flrq_135_);}
    .flrb-${id}-st97{fill:url(#flrq_136_);}
    .flrb-${id}-st98{fill:url(#flrq_137_);}
    .flrb-${id}-st99{fill:url(#flrq_138_);}
    .flrb-${id}-st100{fill:url(#flrq_139_);}
    .flrb-${id}-st101{fill:url(#flrq_140_);}
    .flrb-${id}-st102{fill:url(#flrq_141_);}
    .flrb-${id}-st103{fill:url(#flrq_142_);}
    .flrb-${id}-st104{fill:url(#flrq_143_);}
    .flrb-${id}-st105{fill:url(#flrq_144_);}
    .flrb-${id}-st106{fill:url(#flrq_151_);}
    .flrb-${id}-st107{fill:url(#flrq_152_);}
    .flrb-${id}-st108{fill:#F2F2F2;}
    .flrb-${id}-st109{fill:url(#flrq_153_);}
    .flrb-${id}-st110{fill:url(#flrq_154_);}
    .flrb-${id}-st111{fill:url(#flrq_155_);}
    .flrb-${id}-st112{fill:url(#flrq_156_);}
    .flrb-${id}-st113{fill:url(#flrq_157_);}
    .flrb-${id}-st114{opacity:0.4;fill:#FF0303;}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let text = `
    <g id="SVG_base1">
    <polygon
      class="flrb-${id}-st0"
      points="170.76,252.69 99.69,310.93 80.94,310.93 152.01,252.69 	"
    />
    <polygon
      class="flrb-${id}-st0"
      points="348.44,252.69 277.37,310.93 258.61,310.93 329.68,252.69 	"
    />
    <polygon
      class="flrb-${id}-st0"
      points="255.65,252.69 184.58,310.93 165.83,310.93 236.9,252.69 	"
    />
    <linearGradient
      id="flrb_1_"
      gradientUnits="userSpaceOnUse"
      x1="43.4311"
      y1="214.1943"
      x2="43.4311"
      y2="140.164"
    >
      <stop offset="0" style="stop-color:#6A6C6C" />
      <stop offset="1" style="stop-color:#979F9F" />
    </linearGradient>
    <polygon
      class="flrb-${id}-st1"
      points="78.97,155.96 7.9,214.19 7.9,198.4 78.97,140.16 	"
    />
    <linearGradient
      id="flrb_2_"
      gradientUnits="userSpaceOnUse"
      x1="239.1614"
      y1="106.8132"
      x2="295.2682"
      y2="196.2808"
    >
      <stop offset="0" style="stop-color:#1A2123" />
      <stop offset="1" style="stop-color:#2D393D" />
    </linearGradient>
    <rect
      x="139.18"
      y="140.16"
      class="flrb-${id}-st2"
      width="251.7"
      height="15.79"
    />
    <linearGradient
      id="flrb_3_"
      gradientUnits="userSpaceOnUse"
      x1="202.5533"
      y1="192.7772"
      x2="270.6232"
      y2="301.3211"
    >
      <stop offset="0" style="stop-color:#1A2123" />
      <stop offset="1" style="stop-color:#2D393D" />
    </linearGradient>
    <rect
      x="76.99"
      y="235.91"
      class="flrb-${id}-st3"
      width="313.89"
      height="13.82"
    />
    <linearGradient
      id="flrb_4_"
      gradientUnits="userSpaceOnUse"
      x1="43.9246"
      y1="307.9659"
      x2="43.9246"
      y2="147.0735"
    >
      <stop offset="0" style="stop-color:#6A6C6C" />
      <stop offset="1" style="stop-color:#979F9F" />
    </linearGradient>
    <polygon
      class="flrb-${id}-st4"
      points="68.58,156.94 68.58,243.32 10.86,294.15 10.86,307.97 76.99,249.73 76.99,235.91 76.99,147.07 	"
    />

    <linearGradient
      id="flrb_5_"
      gradientUnits="userSpaceOnUse"
      x1="699.5985"
      y1="-42.5564"
      x2="647.5574"
      y2="-42.5564"
      gradientTransform="matrix(-1 0 0 1 801.219 265.5738)"
    >
      <stop offset="0" style="stop-color:#000000" />
      <stop offset="0.3324" style="stop-color:#707070" />
      <stop offset="0.7151" style="stop-color:#000000" />
      <stop offset="1" style="stop-color:#3D3D3D" />
    </linearGradient>
    <path
      class="flrb-${id}-st5"
      d="M153.66,204v27.73c0,5.69-11.65,10.3-26.02,10.3s-26.02-4.61-26.02-10.3V204H153.66z"
    />

    <radialGradient
      id="flrb_6_"
      cx="126.012"
      cy="200.582"
      r="38.8791"
      gradientTransform="matrix(1 0 0 0.4689 0 106.5362)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" style="stop-color:#000000" />
      <stop offset="1" style="stop-color:#000000;stop-opacity:0" />
    </radialGradient>
    <rect
      x="101.62"
      y="204"
      class="flrb-${id}-st6"
      width="52.01"
      height="23.86"
    />

    <linearGradient
      id="flrb_7_"
      gradientUnits="userSpaceOnUse"
      x1="708.772"
      y1="-67.8167"
      x2="638.7234"
      y2="-67.8167"
      gradientTransform="matrix(-1 0 0 1 801.219 265.5738)"
    >
      <stop offset="0" style="stop-color:#000000" />
      <stop offset="0.3324" style="stop-color:#707070" />
      <stop offset="0.7151" style="stop-color:#000000" />
      <stop offset="1" style="stop-color:#3D3D3D" />
    </linearGradient>
    <path
      class="flrb-${id}-st7"
      d="M100.53,190.35c6.37-3.14,16.14-5.16,27.11-5.16s20.74,2.02,27.11,5.16h7.63v6.21
        c0,7.6-15.55,13.76-34.74,13.76s-34.74-6.16-34.74-13.76v-6.21H100.53z"
    />

    <linearGradient
      id="flrb_8_"
      gradientUnits="userSpaceOnUse"
      x1="529.1532"
      y1="34.2755"
      x2="502.9417"
      y2="26.1568"
      gradientTransform="matrix(0 -1 1 0 99.4769 699.7747)"
    >
      <stop offset="0" style="stop-color:#000000" />
      <stop offset="1" style="stop-color:#000000" />
    </linearGradient>
    <ellipse
      class="flrb-${id}-st8"
      cx="127.64"
      cy="190.35"
      rx="34.74"
      ry="13.76"
    />
    <linearGradient
      id="flrb_9_"
      gradientUnits="userSpaceOnUse"
      x1="92.8984"
      y1="196.5631"
      x2="162.3836"
      y2="196.5631"
    >
      <stop offset="0" style="stop-color:#6A6C6C" />
      <stop offset="1" style="stop-color:#979F9F" />
    </linearGradient>
    <path
      class="flrb-${id}-st9"
      d="M127.64,201.44c18.05,0,32.88-5.45,34.58-12.42c0.11,0.44,0.17,0.89,0.17,1.34c0,7.6-15.55,13.76-34.74,13.76
        s-34.74-6.16-34.74-13.76c0-0.45,0.06-0.9,0.17-1.34C94.76,195.99,109.59,201.44,127.64,201.44z"
    />
    <path
      class="flrb-${id}-st10"
      d="M127.64,182.88c9.32,0,16.98,2.82,17.83,6.42c0.05-0.22,0.09-0.44,0.09-0.67c0-3.92-8.02-7.09-17.91-7.09
        c-9.89,0-17.91,3.18-17.91,7.09c0,0.23,0.03,0.45,0.09,0.67C110.67,185.7,118.32,182.88,127.64,182.88z"
    />
    <linearGradient
      id="flrb_10_"
      gradientUnits="userSpaceOnUse"
      x1="55.9932"
      y1="307.6337"
      x2="55.9932"
      y2="235.323"
    >
      <stop offset="0" style="stop-color:#979D9B" />
      <stop offset="1" style="stop-color:#A7B4B7" />
    </linearGradient>
    <rect
      x="20.77"
      y="235.32"
      class="flrb-${id}-st11"
      width="70.45"
      height="72.31"
    />
    <linearGradient
      id="flrb_11_"
      gradientUnits="userSpaceOnUse"
      x1="102.128"
      y1="307.6337"
      x2="102.128"
      y2="217.9429"
    >
      <stop offset="0" style="stop-color:#6A7378" />
      <stop offset="1" style="stop-color:#97A9B5" />
    </linearGradient>
    <polygon
      class="flrb-${id}-st12"
      points="113.04,217.94 91.22,235.32 91.22,307.63 113.04,290.25 	"
    />
    <linearGradient
      id="flrb_12_"
      gradientUnits="userSpaceOnUse"
      x1="65.9639"
      y1="235.729"
      x2="67.6037"
      y2="219.8773"
    >
      <stop offset="0" style="stop-color:#BAD7E7" />
      <stop offset="1" style="stop-color:#A0BAC9" />
    </linearGradient>
    <polygon
      class="flrb-${id}-st13"
      points="113.04,217.94 42.59,217.94 20.77,235.32 91.22,235.32 	"
    />
    <polygon
      class="flrb-${id}-st14"
      points="91.22,307.4 90.74,307.4 90.74,235.32 20.53,235.32 20.53,234.85 91.22,234.85 	"
    />
    <polygon
      class="flrb-${id}-st14"
      points="91.13,235.27 90.83,234.9 112.66,217.52 112.95,217.89 	"
    />
    <polygon
      class="flrb-${id}-st15"
      points="95.8,303.95 95.32,304.43 96.27,231.83 25.11,231.83 25.59,231.36 95.8,231.36 	"
    />
    <linearGradient
      id="flrb_13_"
      gradientUnits="userSpaceOnUse"
      x1="58.8492"
      y1="233.8554"
      x2="58.8492"
      y2="232.5034"
    >
      <stop offset="0" style="stop-color:#979D9B" />
      <stop offset="1" style="stop-color:#A7B4B7" />
    </linearGradient>
    <rect
      x="55.72"
      y="232.5"
      class="flrb-${id}-st16"
      width="6.25"
      height="1.35"
    />
    <linearGradient
      id="flrb_14_"
      gradientUnits="userSpaceOnUse"
      x1="65.4078"
      y1="233.8554"
      x2="65.4078"
      y2="227.0367"
    >
      <stop offset="0" style="stop-color:#6A7378" />
      <stop offset="1" style="stop-color:#97A9B5" />
    </linearGradient>
    <polygon
      class="flrb-${id}-st17"
      points="68.84,227.04 61.98,232.5 61.98,233.86 68.84,228.39 	"
    />
    <polygon
      class="flrb-${id}-st18"
      points="68.84,227.04 62.59,227.04 55.72,232.5 61.98,232.5 	"
    />
    <circle
      class="flrb-${id}-st19"
      cx="37.96"
      cy="248.32"
      r="4.02"
    />
    <circle
      class="flrb-${id}-st20"
      cx="37.49"
      cy="248.82"
      r="4.02"
    />
    <circle
      class="flrb-${id}-st19"
      cx="54.74"
      cy="248.32"
      r="4.02"
    />
    <circle
      class="flrb-${id}-st20"
      cx="54.27"
      cy="248.82"
      r="4.02"
    />
    <circle
      class="flrb-${id}-st19"
      cx="72.51"
      cy="248.32"
      r="4.02"
    />
    <circle
      class="flrb-${id}-st20"
      cx="72.04"
      cy="248.82"
      r="4.02"
    />
    <g>
      <linearGradient
        id="flrb_15_"
        gradientUnits="userSpaceOnUse"
        x1="-102.0166"
        y1="79.1563"
        x2="-30.0787"
        y2="79.1563"
        gradientTransform="matrix(6.123234e-17 1 -1 6.123234e-17 339.8212 290.1788)"
      >
        <stop offset="0" style="stop-color:#000000" />
        <stop offset="0.3324" style="stop-color:#707070" />
        <stop offset="0.7151" style="stop-color:#000000" />
        <stop offset="1" style="stop-color:#3D3D3D" />
      </linearGradient>
      <path
        class="flrb-${id}-st21"
        d="M351.94,188.16H190.49c-8.97,0-21.1,16.1-21.1,35.97s12.13,35.97,21.1,35.97h161.46V188.16z"
      />

      <radialGradient
        id="flrb_16_"
        cx="-210.483"
        cy="-66.3924"
        r="163.9701"
        gradientTransform="matrix(5.879215e-17 0.6013 -0.5908 2.265399e-17 359.6521 332.3863)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style="stop-color:#080808" />
        <stop offset="0.3324" style="stop-color:#525252" />
        <stop offset="0.7151" style="stop-color:#000000" />
        <stop offset="1" style="stop-color:#333333" />
      </radialGradient>
      <path
        class="flrb-${id}-st22"
        d="M351.94,260.1c-8.97,0-16.24-16.1-16.24-35.97s7.27-35.97,16.24-35.97c8.97,0,23.05,16.1,23.05,35.97
          S360.91,260.1,351.94,260.1z"
      />

      <radialGradient
        id="flrb_17_"
        cx="-183.4194"
        cy="147.8554"
        r="93.5925"
        gradientTransform="matrix(5.879215e-17 0.6013 -0.2529 9.696221e-18 230.5507 332.3863)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.6272" style="stop-color:#000000;stop-opacity:0" />
        <stop offset="1" style="stop-color:#000000;stop-opacity:0.7" />
      </radialGradient>
      <path
        class="flrb-${id}-st23"
        d="M190.96,188.16h-0.47c-8.97,0-21.1,16.1-21.1,35.97s12.13,35.97,21.1,35.97h0.47V188.16z"
      />
    </g>
    <g>
      <linearGradient
        id="flrb_18_"
        gradientUnits="userSpaceOnUse"
        x1="-62.1655"
        y1="143.3721"
        x2="9.7724"
        y2="143.3721"
        gradientTransform="matrix(6.123234e-17 1 -1 6.123234e-17 339.8212 290.1788)"
      >
        <stop offset="0" style="stop-color:#000000" />
        <stop offset="0.3324" style="stop-color:#707070" />
        <stop offset="0.7151" style="stop-color:#000000" />
        <stop offset="1" style="stop-color:#3D3D3D" />
      </linearGradient>
      <path
        class="flrb-${id}-st24"
        d="M287.73,228.01H126.27c-8.97,0-21.1,16.1-21.1,35.97c0,19.87,12.13,35.97,21.1,35.97h161.46V228.01z"
      />

      <radialGradient
        id="flrb_19_"
        cx="-144.2076"
        cy="0.4887"
        r="163.9701"
        gradientTransform="matrix(5.879215e-17 0.6013 -0.5908 2.265399e-17 334.9473 332.3863)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style="stop-color:#080808" />
        <stop offset="0.3324" style="stop-color:#525252" />
        <stop offset="0.7151" style="stop-color:#000000" />
        <stop offset="1" style="stop-color:#333333" />
      </radialGradient>
      <path
        class="flrb-${id}-st25"
        d="M287.73,299.95c-8.97,0-16.24-16.1-16.24-35.97c0-19.87,7.27-35.97,16.24-35.97s23.05,16.1,23.05,35.97
          C310.78,283.85,296.7,299.95,287.73,299.95z"
      />

      <radialGradient
        id="flrb_20_"
        cx="-117.144"
        cy="214.7365"
        r="93.5925"
        gradientTransform="matrix(5.879215e-17 0.6013 -0.2529 9.696221e-18 183.2461 332.3863)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.6272" style="stop-color:#000000;stop-opacity:0" />
        <stop offset="1" style="stop-color:#000000;stop-opacity:0.7" />
      </radialGradient>
      <path
        class="flrb-${id}-st26"
        d="M126.74,228.01h-0.47c-8.97,0-21.1,16.1-21.1,35.97c0,19.87,12.13,35.97,21.1,35.97h0.47V228.01z"
      />
    </g>
    <linearGradient
      id="flrb_21_"
      gradientUnits="userSpaceOnUse"
      x1="139.0896"
      y1="293.554"
      x2="149.9605"
      y2="293.554"
    >
      <stop offset="0" style="stop-color:#000000" />
      <stop offset="1" style="stop-color:#363636" />
    </linearGradient>
    <path
      class="flrb-${id}-st27"
      d="M143.67,278.28c0,0,1.04,4.59,2.82,7.43c1.78,2.84,3.46,5.09,3.46,5.09v9.12l-10.87,8.9l2.21-25.3
        L143.67,278.28z"
    />
    <polygon
      class="flrb-${id}-st28"
      points="143.67,278.28 139.81,278.28 135.23,308.83 139.09,308.83 	"
    />
    <linearGradient
      id="flrb_22_"
      gradientUnits="userSpaceOnUse"
      x1="248.0754"
      y1="293.554"
      x2="258.9462"
      y2="293.554"
    >
      <stop offset="0" style="stop-color:#000000" />
      <stop offset="1" style="stop-color:#363636" />
    </linearGradient>
    <path
      class="flrb-${id}-st29"
      d="M252.66,278.28c0,0,1.04,4.59,2.82,7.43c1.78,2.84,3.46,5.09,3.46,5.09v9.12l-10.87,8.9l2.21-25.3
        L252.66,278.28z"
    />
    <polygon
      class="flrb-${id}-st28"
      points="252.66,278.28 248.79,278.28 244.21,308.83 248.08,308.83 	"
    />
    <linearGradient
      id="flrb_23_"
      gradientUnits="userSpaceOnUse"
      x1="123.8773"
      y1="220.1167"
      x2="123.8773"
      y2="161.8795"
    >
      <stop offset="0" style="stop-color:#6A6C6C" />
      <stop offset="1" style="stop-color:#979F9F" />
    </linearGradient>
    <polygon
      class="flrb-${id}-st30"
      points="168.79,161.88 97.72,220.12 78.97,220.12 150.03,161.88 	"
    />
    <linearGradient
      id="flrb_24_"
      gradientUnits="userSpaceOnUse"
      x1="230.4809"
      y1="220.1167"
      x2="230.4809"
      y2="161.8795"
    >
      <stop offset="0" style="stop-color:#6A6C6C" />
      <stop offset="1" style="stop-color:#979F9F" />
    </linearGradient>
    <polygon
      class="flrb-${id}-st31"
      points="275.39,161.88 204.32,220.12 185.57,220.12 256.64,161.88 	"
    />
    <polygon
      class="flrb-${id}-st32"
      points="328.69,189.02 24.68,189.02 32.57,182.61 336.59,182.61 	"
    />
    <linearGradient
      id="flrb_25_"
      gradientUnits="userSpaceOnUse"
      x1="23.7942"
      y1="190.5289"
      x2="330.0066"
      y2="190.5289"
    >
      <stop offset="0" style="stop-color:#6A6C6C" />
      <stop offset="1" style="stop-color:#979F9F" />
    </linearGradient>
    <rect
      x="23.79"
      y="189.02"
      class="flrb-${id}-st33"
      width="306.21"
      height="3.01"
    />
    <linearGradient
      id="flrb_26_"
      gradientUnits="userSpaceOnUse"
      x1="346.8978"
      y1="82.2221"
      x2="383.4194"
      y2="140.4593"
    >
      <stop offset="0" style="stop-color:#1A2123" />
      <stop offset="1" style="stop-color:#2D393D" />
    </linearGradient>
    <polygon
      class="flrb-${id}-st34"
      points="315.86,98.71 390.88,35.53 359.29,163.85 336.59,182.61 	"
    />
    <linearGradient
      id="flrb_27_"
      gradientUnits="userSpaceOnUse"
      x1="174.2179"
      y1="110.7358"
      x2="174.2179"
      y2="170.7863"
    >
      <stop offset="0" style="stop-color:#2D393D" />
      <stop offset="1" style="stop-color:#4A5659" />
    </linearGradient>
    <polygon
      class="flrb-${id}-st35"
      points="336.59,182.61 32.57,182.61 11.84,98.71 315.86,98.71 	"
    />
    <g>
      <linearGradient
        id="flrb_28_"
        gradientUnits="userSpaceOnUse"
        x1="179.8268"
        y1="163.0081"
        x2="179.8268"
        y2="163.7146"
      >
        <stop offset="0" style="stop-color:#2D393D" />
        <stop offset="1" style="stop-color:#000000" />
      </linearGradient>
      <polygon
        class="flrb-${id}-st36"
        points="27.7,162.87 27.94,163.85 331.96,163.85 331.71,162.87 		"
      />
      <linearGradient
        id="flrb_29_"
        gradientUnits="userSpaceOnUse"
        x1="177.8759"
        y1="155.1116"
        x2="177.8759"
        y2="155.818"
      >
        <stop offset="0" style="stop-color:#2D393D" />
        <stop offset="1" style="stop-color:#000000" />
      </linearGradient>
      <polygon
        class="flrb-${id}-st37"
        points="25.75,154.97 25.99,155.96 330.01,155.96 329.76,154.97 		"
      />
      <linearGradient
        id="flrb_30_"
        gradientUnits="userSpaceOnUse"
        x1="176.9004"
        y1="151.1633"
        x2="176.9004"
        y2="151.8698"
      >
        <stop offset="0" style="stop-color:#2D393D" />
        <stop offset="1" style="stop-color:#000000" />
      </linearGradient>
      <polygon
        class="flrb-${id}-st38"
        points="24.77,151.02 25.01,152.01 329.03,152.01 328.79,151.02 		"
      />
      <linearGradient
        id="flrb_31_"
        gradientUnits="userSpaceOnUse"
        x1="182.7532"
        y1="174.853"
        x2="182.7532"
        y2="175.5594"
      >
        <stop offset="0" style="stop-color:#2D393D" />
        <stop offset="1" style="stop-color:#000000" />
      </linearGradient>
      <polygon
        class="flrb-${id}-st39"
        points="30.62,174.71 30.87,175.7 334.88,175.7 334.64,174.71 		"
      />
      <linearGradient
        id="flrb_32_"
        gradientUnits="userSpaceOnUse"
        x1="175.925"
        y1="147.215"
        x2="175.925"
        y2="147.9215"
      >
        <stop offset="0" style="stop-color:#2D393D" />
        <stop offset="1" style="stop-color:#000000" />
      </linearGradient>
      <polygon
        class="flrb-${id}-st40"
        points="23.79,147.07 24.04,148.06 328.06,148.06 327.81,147.07 		"
      />
      <linearGradient
        id="flrb_33_"
        gradientUnits="userSpaceOnUse"
        x1="183.7286"
        y1="178.8012"
        x2="183.7286"
        y2="179.5077"
      >
        <stop offset="0" style="stop-color:#2D393D" />
        <stop offset="1" style="stop-color:#000000" />
      </linearGradient>
      <polygon
        class="flrb-${id}-st41"
        points="335.62,178.66 31.6,178.66 31.84,179.65 335.86,179.65 		"
      />
      <linearGradient
        id="flrb_34_"
        gradientUnits="userSpaceOnUse"
        x1="180.8022"
        y1="166.9564"
        x2="180.8022"
        y2="167.6629"
      >
        <stop offset="0" style="stop-color:#2D393D" />
        <stop offset="1" style="stop-color:#000000" />
      </linearGradient>
      <polygon
        class="flrb-${id}-st42"
        points="28.67,166.81 28.92,167.8 332.93,167.8 332.69,166.81 		"
      />
      <linearGradient
        id="flrb_35_"
        gradientUnits="userSpaceOnUse"
        x1="181.7777"
        y1="170.9047"
        x2="181.7777"
        y2="171.6112"
      >
        <stop offset="0" style="stop-color:#2D393D" />
        <stop offset="1" style="stop-color:#000000" />
      </linearGradient>
      <polygon
        class="flrb-${id}-st43"
        points="29.65,170.76 29.89,171.75 333.91,171.75 333.66,170.76 		"
      />
      <linearGradient
        id="flrb_36_"
        gradientUnits="userSpaceOnUse"
        x1="178.8513"
        y1="159.0598"
        x2="178.8513"
        y2="159.7663"
      >
        <stop offset="0" style="stop-color:#2D393D" />
        <stop offset="1" style="stop-color:#000000" />
      </linearGradient>
      <polygon
        class="flrb-${id}-st44"
        points="26.72,158.92 26.96,159.91 330.98,159.91 330.74,158.92 		"
      />
      <linearGradient
        id="flrb_37_"
        gradientUnits="userSpaceOnUse"
        x1="169.0968"
        y1="119.577"
        x2="169.0968"
        y2="120.2835"
      >
        <stop offset="0" style="stop-color:#2D393D" />
        <stop offset="1" style="stop-color:#000000" />
      </linearGradient>
      <polygon
        class="flrb-${id}-st45"
        points="16.97,119.44 17.21,120.42 321.23,120.42 320.98,119.44 		"
      />
      <linearGradient
        id="flrb_38_"
        gradientUnits="userSpaceOnUse"
        x1="168.1213"
        y1="115.6287"
        x2="168.1213"
        y2="116.3352"
      >
        <stop offset="0" style="stop-color:#2D393D" />
        <stop offset="1" style="stop-color:#000000" />
      </linearGradient>
      <polygon
        class="flrb-${id}-st46"
        points="15.99,115.49 16.23,116.47 320.25,116.47 320.01,115.49 		"
      />
      <linearGradient
        id="flrb_39_"
        gradientUnits="userSpaceOnUse"
        x1="167.1458"
        y1="111.6805"
        x2="167.1458"
        y2="112.3869"
      >
        <stop offset="0" style="stop-color:#2D393D" />
        <stop offset="1" style="stop-color:#000000" />
      </linearGradient>
      <polygon
        class="flrb-${id}-st47"
        points="15.02,111.54 15.26,112.53 319.28,112.53 319.03,111.54 		"
      />
      <linearGradient
        id="flrb_40_"
        gradientUnits="userSpaceOnUse"
        x1="174.9495"
        y1="143.2667"
        x2="174.9495"
        y2="143.9732"
      >
        <stop offset="0" style="stop-color:#2D393D" />
        <stop offset="1" style="stop-color:#000000" />
      </linearGradient>
      <polygon
        class="flrb-${id}-st48"
        points="22.82,143.13 23.06,144.11 327.08,144.11 326.84,143.13 		"
      />
      <linearGradient
        id="flrb_41_"
        gradientUnits="userSpaceOnUse"
        x1="170.0722"
        y1="123.5253"
        x2="170.0722"
        y2="124.2318"
      >
        <stop offset="0" style="stop-color:#2D393D" />
        <stop offset="1" style="stop-color:#000000" />
      </linearGradient>
      <polygon
        class="flrb-${id}-st49"
        points="17.94,123.38 18.19,124.37 322.2,124.37 321.96,123.38 		"
      />
      <linearGradient
        id="flrb_42_"
        gradientUnits="userSpaceOnUse"
        x1="173.974"
        y1="139.3184"
        x2="173.974"
        y2="140.0249"
      >
        <stop offset="0" style="stop-color:#2D393D" />
        <stop offset="1" style="stop-color:#000000" />
      </linearGradient>
      <polygon
        class="flrb-${id}-st50"
        points="21.84,139.18 22.09,140.16 326.1,140.16 325.86,139.18 		"
      />
      <linearGradient
        id="flrb_43_"
        gradientUnits="userSpaceOnUse"
        x1="172.9986"
        y1="135.3701"
        x2="172.9986"
        y2="136.0766"
      >
        <stop offset="0" style="stop-color:#2D393D" />
        <stop offset="1" style="stop-color:#000000" />
      </linearGradient>
      <polygon
        class="flrb-${id}-st51"
        points="20.87,135.23 21.11,136.22 325.13,136.22 324.89,135.23 		"
      />
      <linearGradient
        id="flrb_44_"
        gradientUnits="userSpaceOnUse"
        x1="172.0231"
        y1="131.4219"
        x2="172.0231"
        y2="132.1283"
      >
        <stop offset="0" style="stop-color:#2D393D" />
        <stop offset="1" style="stop-color:#000000" />
      </linearGradient>
      <polygon
        class="flrb-${id}-st52"
        points="19.89,131.28 20.14,132.27 324.15,132.27 323.91,131.28 		"
      />
      <linearGradient
        id="flrb_45_"
        gradientUnits="userSpaceOnUse"
        x1="171.0477"
        y1="127.4736"
        x2="171.0477"
        y2="128.1801"
      >
        <stop offset="0" style="stop-color:#2D393D" />
        <stop offset="1" style="stop-color:#000000" />
      </linearGradient>
      <polygon
        class="flrb-${id}-st53"
        points="18.92,127.33 19.16,128.32 323.18,128.32 322.93,127.33 		"
      />
    </g>
    <rect
      x="81.23"
      y="102.66"
      class="flrb-${id}-st54"
      width="4.43"
      height="107.12"
    />
    <linearGradient
      id="flrb_46_"
      gradientUnits="userSpaceOnUse"
      x1="86.6529"
      y1="102.6553"
      x2="86.6529"
      y2="209.7731"
    >
      <stop offset="0" style="stop-color:#1A2123" />
      <stop offset="1" style="stop-color:#2D393D" />
    </linearGradient>
    <rect
      x="85.67"
      y="102.66"
      class="flrb-${id}-st55"
      width="1.97"
      height="107.12"
    />
    <rect
      x="152.3"
      y="102.66"
      class="flrb-${id}-st54"
      width="4.43"
      height="107.12"
    />
    <linearGradient
      id="flrb_47_"
      gradientUnits="userSpaceOnUse"
      x1="157.722"
      y1="102.6553"
      x2="157.722"
      y2="209.7731"
    >
      <stop offset="0" style="stop-color:#1A2123" />
      <stop offset="1" style="stop-color:#2D393D" />
    </linearGradient>
    <rect
      x="156.73"
      y="102.66"
      class="flrb-${id}-st56"
      width="1.97"
      height="107.12"
    />
    <rect
      x="223.37"
      y="102.66"
      class="flrb-${id}-st54"
      width="4.43"
      height="107.12"
    />
    <linearGradient
      id="flrb_48_"
      gradientUnits="userSpaceOnUse"
      x1="228.791"
      y1="102.6553"
      x2="228.791"
      y2="209.7731"
    >
      <stop offset="0" style="stop-color:#1A2123" />
      <stop offset="1" style="stop-color:#2D393D" />
    </linearGradient>
    <rect
      x="227.8"
      y="102.66"
      class="flrb-${id}-st57"
      width="1.97"
      height="107.12"
    />
    <line
      class="flrb-${id}-st58"
      x1="318.26"
      y1="98.71"
      x2="388.91"
      y2="139.18"
    />
    <line
      class="flrb-${id}-st58"
      x1="315.86"
      y1="205.6"
      x2="390.88"
      y2="41.46"
    />
    <linearGradient
      id="flrb_49_"
      gradientUnits="userSpaceOnUse"
      x1="196.3406"
      y1="95.3425"
      x2="203.1952"
      y2="29.0819"
    >
      <stop offset="0" style="stop-color:#D3D9E0" />
      <stop offset="1" style="stop-color:#80868E" />
    </linearGradient>
    <polygon
      class="flrb-${id}-st59"
      points="400,21.71 84.59,21.71 0.55,92.93 309.05,92.93 	"
    />
    <polygon
      class="flrb-${id}-st14"
      points="309.05,319.36 307.95,319.36 307.95,92.93 0,92.93 0,91.84 309.05,91.84 	"
    />

    <rect
      x="296.22"
      y="56.22"
      transform="matrix(0.7869 -0.617 0.617 0.7869 40.3914 230.5165)"
      class="flrb-${id}-st14"
      width="115.52"
      height="1.1"
    />
    <linearGradient
      id="flrb_50_"
      gradientUnits="userSpaceOnUse"
      x1="154.7989"
      y1="319.9041"
      x2="154.7989"
      y2="92.9335"
    >
      <stop offset="0" style="stop-color:#D3D9E0" />
      <stop offset="1" style="stop-color:#AEBBC4" />
    </linearGradient>
    <path
      class="flrb-${id}-st60"
      d="M0.55,92.93V319.9h308.5V92.93H0.55z M294.15,306.98H13.82v-84.89h280.33V306.98z M294.15,206.3H13.82v-98.71
        h280.33V206.3z"
    />
    <linearGradient
      id="flrb_51_"
      gradientUnits="userSpaceOnUse"
      x1="354.525"
      y1="319.9041"
      x2="354.525"
      y2="21.7076"
    >
      <stop offset="0" style="stop-color:#6A6C6C" />
      <stop offset="1" style="stop-color:#979F9F" />
    </linearGradient>
    <path
      class="flrb-${id}-st61"
      d="M309.05,92.93V319.9L400,248.68V21.71L309.05,92.93z M390.88,240.85l-71.07,58.24v-84.89l71.07-58.24V240.85z
         M390.88,140.16l-71.07,58.24V99.69l71.07-58.24V140.16z"
    />
    <polygon
      class="flrb-${id}-st62"
      points="388.91,157.57 388.91,239.86 319.81,296.48 319.81,299.08 390.88,240.85 390.88,155.96 	"
    />
    <polygon
      class="flrb-${id}-st62"
      points="388.91,43.07 388.91,139.18 319.81,195.8 319.81,198.4 390.88,140.16 390.88,41.46 	"
    />
    <linearGradient
      id="flrb_52_"
      gradientUnits="userSpaceOnUse"
      x1="13.819"
      y1="156.9442"
      x2="294.1469"
      y2="156.9442"
    >
      <stop offset="0" style="stop-color:#6A6C6C" />
      <stop offset="1" style="stop-color:#3D3F3F" />
    </linearGradient>
    <polygon
      class="flrb-${id}-st63"
      points="15.79,204.32 15.79,107.59 13.82,107.59 13.82,206.3 294.15,206.3 294.15,204.32 	"
    />
    <polygon
      class="flrb-${id}-st19"
      points="15.79,305 15.79,222.09 13.82,222.09 13.82,306.98 294.15,306.98 294.15,305 	"
    />
    <linearGradient
      id="flrq_40_"
      gradientUnits="userSpaceOnUse"
      x1="79.3585"
      y1="33.4556"
      x2="167.3592"
      y2="33.4556"
    >
      <stop offset="0" style="stop-color:#909091" />
      <stop offset="0.3968" style="stop-color:#C7CCCC" />
      <stop offset="0.6005" style="stop-color:#AAAEAF" />
      <stop offset="0.9947" style="stop-color:#686B6D" />
    </linearGradient>
    <path
      id="flrq_100_"
      class="flrb-${id}-st64"
      d="M79.36,17.44v14.58c0,9.78,19.33,17.44,44,17.44c24.67,0,44-7.66,44-17.44V17.44H79.36z"
    />
    <path
      id="flrq_98_"
      class="flrb-${id}-st65"
      d="M123.36,34.89c-24.67,0-44-7.66-44-17.44S98.69,0,123.36,0c24.67,0,44,7.66,44,17.44
        S148.03,34.89,123.36,34.89z"
    />
    <linearGradient
      id="flrq_43_"
      gradientUnits="userSpaceOnUse"
      x1="77.7964"
      y1="39.8915"
      x2="168.9213"
      y2="39.8915"
    >
      <stop offset="0" style="stop-color:#909091" />
      <stop offset="0.4444" style="stop-color:#BABFBF" />
      <stop offset="0.6581" style="stop-color:#9DA1A2" />
      <stop offset="0.9947" style="stop-color:#686B6D" />
    </linearGradient>
    <path
      id="flrq_96_"
      class="flrb-${id}-st66"
      d="M77.8,28.9v2.98c0,10.84,19.59,19.01,45.56,19.01s45.56-8.17,45.56-19.01V28.9
        c0,0-1.64,18.12-45.3,18.12C80.39,47.02,77.8,28.9,77.8,28.9z"
    />
    <path
      id="flrq_95_"
      class="flrb-${id}-st65"
      d="M167.36,23.76v5.14c0,9.78-19.33,17.44-44,17.44c-24.67,0-44-7.66-44-17.44v-5.14
        c-1.01,1.62-1.56,3.34-1.56,5.14c0,10.84,19.59,19.01,45.56,19.01s45.56-8.17,45.56-19.01C168.92,27.11,168.37,25.39,167.36,23.76z
        "
    />
    <linearGradient
      id="flrq_44_"
      gradientUnits="userSpaceOnUse"
      x1="81.9621"
      y1="17.4439"
      x2="164.7556"
      y2="17.4439"
    >
      <stop offset="0" style="stop-color:#414246" />
      <stop offset="0.6085" style="stop-color:#868686" />
      <stop offset="0.6976" style="stop-color:#7D7D7E" />
      <stop offset="0.8437" style="stop-color:#646567" />
      <stop offset="1" style="stop-color:#434448" />
    </linearGradient>
    <ellipse
      id="flrq_77_"
      class="flrb-${id}-st67"
      cx="123.36"
      cy="17.44"
      rx="41.4"
      ry="14.84"
    />
    <linearGradient
      id="flrq_45_"
      gradientUnits="userSpaceOnUse"
      x1="180.7609"
      y1="33.4556"
      x2="268.7615"
      y2="33.4556"
    >
      <stop offset="0" style="stop-color:#909091" />
      <stop offset="0.3968" style="stop-color:#C7CCCC" />
      <stop offset="0.6005" style="stop-color:#AAAEAF" />
      <stop offset="0.9947" style="stop-color:#686B6D" />
    </linearGradient>
    <path
      id="flrq_17_"
      class="flrb-${id}-st68"
      d="M180.76,17.44v14.58c0,9.78,19.33,17.44,44,17.44c24.67,0,44-7.66,44-17.44V17.44H180.76z"
    />
    <path
      id="flrq_15_"
      class="flrb-${id}-st65"
      d="M224.76,34.89c-24.67,0-44-7.66-44-17.44S200.09,0,224.76,0c24.67,0,44,7.66,44,17.44
        S249.43,34.89,224.76,34.89z"
    />
    <linearGradient
      id="flrq_46_"
      gradientUnits="userSpaceOnUse"
      x1="179.1987"
      y1="39.8915"
      x2="270.3237"
      y2="39.8915"
    >
      <stop offset="0" style="stop-color:#909091" />
      <stop offset="0.4444" style="stop-color:#BABFBF" />
      <stop offset="0.6581" style="stop-color:#9DA1A2" />
      <stop offset="0.9947" style="stop-color:#686B6D" />
    </linearGradient>
    <path
      id="flrq_13_"
      class="flrb-${id}-st69"
      d="M179.2,28.9v2.98c0,10.84,19.59,19.01,45.56,19.01s45.56-8.17,45.56-19.01V28.9
        c0,0-1.64,18.12-45.3,18.12C181.8,47.02,179.2,28.9,179.2,28.9z"
    />
    <path
      id="flrq_12_"
      class="flrb-${id}-st65"
      d="M268.76,23.76v5.14c0,9.78-19.33,17.44-44,17.44c-24.67,0-44-7.66-44-17.44v-5.14
        c-1.01,1.62-1.56,3.34-1.56,5.14c0,10.84,19.59,19.01,45.56,19.01s45.56-8.17,45.56-19.01C270.32,27.11,269.78,25.39,268.76,23.76z
        "
    />
    <linearGradient
      id="flrq_55_"
      gradientUnits="userSpaceOnUse"
      x1="183.3645"
      y1="17.4439"
      x2="266.158"
      y2="17.4439"
    >
      <stop offset="0" style="stop-color:#414246" />
      <stop offset="0.6085" style="stop-color:#868686" />
      <stop offset="0.6976" style="stop-color:#7D7D7E" />
      <stop offset="0.8437" style="stop-color:#646567" />
      <stop offset="1" style="stop-color:#434448" />
    </linearGradient>
    <ellipse
      id="flrq_11_"
      class="flrb-${id}-st70"
      cx="224.76"
      cy="17.44"
      rx="41.4"
      ry="14.84"
    />
    <linearGradient
      id="flrq_56_"
      gradientUnits="userSpaceOnUse"
      x1="282.1632"
      y1="33.4556"
      x2="370.1639"
      y2="33.4556"
    >
      <stop offset="0" style="stop-color:#909091" />
      <stop offset="0.3968" style="stop-color:#C7CCCC" />
      <stop offset="0.6005" style="stop-color:#AAAEAF" />
      <stop offset="0.9947" style="stop-color:#686B6D" />
    </linearGradient>
    <path
      id="flrq_35_"
      class="flrb-${id}-st71"
      d="M282.16,17.44v14.58c0,9.78,19.33,17.44,44,17.44c24.67,0,44-7.66,44-17.44V17.44H282.16z"
    />
    <path
      id="flrq_33_"
      class="flrb-${id}-st65"
      d="M326.16,34.89c-24.67,0-44-7.66-44-17.44S301.49,0,326.16,0c24.67,0,44,7.66,44,17.44
        S350.84,34.89,326.16,34.89z"
    />
    <linearGradient
      id="flrq_59_"
      gradientUnits="userSpaceOnUse"
      x1="280.6011"
      y1="39.8915"
      x2="371.726"
      y2="39.8915"
    >
      <stop offset="0" style="stop-color:#909091" />
      <stop offset="0.4444" style="stop-color:#BABFBF" />
      <stop offset="0.6581" style="stop-color:#9DA1A2" />
      <stop offset="0.9947" style="stop-color:#686B6D" />
    </linearGradient>
    <path
      id="flrq_31_"
      class="flrb-${id}-st72"
      d="M280.6,28.9v2.98c0,10.84,19.59,19.01,45.56,19.01c25.97,0,45.56-8.17,45.56-19.01V28.9
        c0,0-1.64,18.12-45.3,18.12C283.2,47.02,280.6,28.9,280.6,28.9z"
    />
    <path
      id="flrq_30_"
      class="flrb-${id}-st65"
      d="M370.16,23.76v5.14c0,9.78-19.33,17.44-44,17.44c-24.67,0-44-7.66-44-17.44v-5.14
        c-1.01,1.62-1.56,3.34-1.56,5.14c0,10.84,19.59,19.01,45.56,19.01c25.97,0,45.56-8.17,45.56-19.01
        C371.73,27.11,371.18,25.39,370.16,23.76z"
    />
    <linearGradient
      id="flrq_60_"
      gradientUnits="userSpaceOnUse"
      x1="284.7668"
      y1="17.4439"
      x2="367.5603"
      y2="17.4439"
    >
      <stop offset="0" style="stop-color:#414246" />
      <stop offset="0.6085" style="stop-color:#868686" />
      <stop offset="0.6976" style="stop-color:#7D7D7E" />
      <stop offset="0.8437" style="stop-color:#646567" />
      <stop offset="1" style="stop-color:#434448" />
    </linearGradient>
    <ellipse
      id="flrq_29_"
      class="flrb-${id}-st73"
      cx="326.16"
      cy="17.44"
      rx="41.4"
      ry="14.84"
    />
    <linearGradient
      id="flrq_63_"
      gradientUnits="userSpaceOnUse"
      x1="33.4676"
      y1="69.1686"
      x2="121.4682"
      y2="69.1686"
    >
      <stop offset="0" style="stop-color:#909091" />
      <stop offset="0.3968" style="stop-color:#C7CCCC" />
      <stop offset="0.6005" style="stop-color:#AAAEAF" />
      <stop offset="0.9947" style="stop-color:#686B6D" />
    </linearGradient>
    <path
      id="flrq_107_"
      class="flrb-${id}-st74"
      d="M33.47,53.16v14.58c0,9.78,19.33,17.44,44,17.44c24.67,0,44-7.66,44-17.44V53.16H33.47z"
    />
    <path
      id="flrq_105_"
      class="flrb-${id}-st65"
      d="M77.47,70.6c-24.67,0-44-7.66-44-17.44s19.33-17.44,44-17.44c24.67,0,44,7.66,44,17.44
        S102.14,70.6,77.47,70.6z"
    />
    <linearGradient
      id="flrq_64_"
      gradientUnits="userSpaceOnUse"
      x1="31.9054"
      y1="75.6045"
      x2="123.0304"
      y2="75.6045"
    >
      <stop offset="0" style="stop-color:#909091" />
      <stop offset="0.4444" style="stop-color:#BABFBF" />
      <stop offset="0.6581" style="stop-color:#9DA1A2" />
      <stop offset="0.9947" style="stop-color:#686B6D" />
    </linearGradient>
    <path
      id="flrq_103_"
      class="flrb-${id}-st75"
      d="M31.91,64.61v2.98c0,10.84,19.59,19.01,45.56,19.01s45.56-8.17,45.56-19.01v-2.98
        c0,0-1.64,18.12-45.3,18.12C34.5,82.73,31.91,64.61,31.91,64.61z"
    />
    <path
      id="flrq_102_"
      class="flrb-${id}-st65"
      d="M121.47,59.48v5.14c0,9.78-19.33,17.44-44,17.44c-24.67,0-44-7.66-44-17.44v-5.14
        c-1.01,1.62-1.56,3.34-1.56,5.14c0,10.84,19.59,19.01,45.56,19.01s45.56-8.17,45.56-19.01C123.03,62.82,122.48,61.1,121.47,59.48z"
    />
    <linearGradient
      id="flrq_70_"
      gradientUnits="userSpaceOnUse"
      x1="36.0712"
      y1="53.1569"
      x2="118.8647"
      y2="53.1569"
    >
      <stop offset="0" style="stop-color:#414246" />
      <stop offset="0.6085" style="stop-color:#868686" />
      <stop offset="0.6976" style="stop-color:#7D7D7E" />
      <stop offset="0.8437" style="stop-color:#646567" />
      <stop offset="1" style="stop-color:#434448" />
    </linearGradient>
    <ellipse
      id="flrq_94_"
      class="flrb-${id}-st76"
      cx="77.47"
      cy="53.16"
      rx="41.4"
      ry="14.84"
    />
    <linearGradient
      id="flrq_71_"
      gradientUnits="userSpaceOnUse"
      x1="134.8699"
      y1="69.1686"
      x2="222.8706"
      y2="69.1686"
    >
      <stop offset="0" style="stop-color:#909091" />
      <stop offset="0.3968" style="stop-color:#C7CCCC" />
      <stop offset="0.6005" style="stop-color:#AAAEAF" />
      <stop offset="0.9947" style="stop-color:#686B6D" />
    </linearGradient>
    <path
      id="flrq_80_"
      class="flrb-${id}-st77"
      d="M134.87,53.16v14.58c0,9.78,19.33,17.44,44,17.44c24.67,0,44-7.66,44-17.44V53.16H134.87z"
    />
    <path
      id="flrq_78_"
      class="flrb-${id}-st65"
      d="M178.87,70.6c-24.67,0-44-7.66-44-17.44s19.33-17.44,44-17.44c24.67,0,44,7.66,44,17.44
        S203.54,70.6,178.87,70.6z"
    />
    <linearGradient
      id="flrq_73_"
      gradientUnits="userSpaceOnUse"
      x1="133.3078"
      y1="75.6045"
      x2="224.4327"
      y2="75.6045"
    >
      <stop offset="0" style="stop-color:#909091" />
      <stop offset="0.4444" style="stop-color:#BABFBF" />
      <stop offset="0.6581" style="stop-color:#9DA1A2" />
      <stop offset="0.9947" style="stop-color:#686B6D" />
    </linearGradient>
    <path
      id="flrq_69_"
      class="flrb-${id}-st78"
      d="M133.31,64.61v2.98c0,10.84,19.59,19.01,45.56,19.01s45.56-8.17,45.56-19.01v-2.98
        c0,0-1.64,18.12-45.3,18.12C135.91,82.73,133.31,64.61,133.31,64.61z"
    />
    <path
      id="flrq_68_"
      class="flrb-${id}-st65"
      d="M222.87,59.48v5.14c0,9.78-19.33,17.44-44,17.44c-24.67,0-44-7.66-44-17.44v-5.14
        c-1.01,1.62-1.56,3.34-1.56,5.14c0,10.84,19.59,19.01,45.56,19.01s45.56-8.17,45.56-19.01C224.43,62.82,223.88,61.1,222.87,59.48z"
    />
    <linearGradient
      id="flrq_74_"
      gradientUnits="userSpaceOnUse"
      x1="137.4735"
      y1="53.1569"
      x2="220.267"
      y2="53.1569"
    >
      <stop offset="0" style="stop-color:#414246" />
      <stop offset="0.6085" style="stop-color:#868686" />
      <stop offset="0.6976" style="stop-color:#7D7D7E" />
      <stop offset="0.8437" style="stop-color:#646567" />
      <stop offset="1" style="stop-color:#434448" />
    </linearGradient>
    <ellipse
      id="flrq_67_"
      class="flrb-${id}-st79"
      cx="178.87"
      cy="53.16"
      rx="41.4"
      ry="14.84"
    />
    <linearGradient
      id="flrq_82_"
      gradientUnits="userSpaceOnUse"
      x1="236.2723"
      y1="69.1686"
      x2="324.2729"
      y2="69.1686"
    >
      <stop offset="0" style="stop-color:#909091" />
      <stop offset="0.3968" style="stop-color:#C7CCCC" />
      <stop offset="0.6005" style="stop-color:#AAAEAF" />
      <stop offset="0.9947" style="stop-color:#686B6D" />
    </linearGradient>
    <path
      id="flrq_53_"
      class="flrb-${id}-st80"
      d="M236.27,53.16v14.58c0,9.78,19.33,17.44,44,17.44c24.67,0,44-7.66,44-17.44V53.16H236.27z"
    />
    <path
      id="flrq_51_"
      class="flrb-${id}-st65"
      d="M280.27,70.6c-24.67,0-44-7.66-44-17.44s19.33-17.44,44-17.44c24.67,0,44,7.66,44,17.44
        S304.95,70.6,280.27,70.6z"
    />
    <linearGradient
      id="flrq_83_"
      gradientUnits="userSpaceOnUse"
      x1="234.7102"
      y1="75.6045"
      x2="325.8351"
      y2="75.6045"
    >
      <stop offset="0" style="stop-color:#909091" />
      <stop offset="0.4444" style="stop-color:#BABFBF" />
      <stop offset="0.6581" style="stop-color:#9DA1A2" />
      <stop offset="0.9947" style="stop-color:#686B6D" />
    </linearGradient>
    <path
      id="flrq_49_"
      class="flrb-${id}-st81"
      d="M234.71,64.61v2.98c0,10.84,19.59,19.01,45.56,19.01c25.97,0,45.56-8.17,45.56-19.01v-2.98
        c0,0-1.64,18.12-45.3,18.12C237.31,82.73,234.71,64.61,234.71,64.61z"
    />
    <path
      id="flrq_48_"
      class="flrb-${id}-st65"
      d="M324.27,59.48v5.14c0,9.78-19.33,17.44-44,17.44c-24.67,0-44-7.66-44-17.44v-5.14
        c-1.01,1.62-1.56,3.34-1.56,5.14c0,10.84,19.59,19.01,45.56,19.01c25.97,0,45.56-8.17,45.56-19.01
        C325.84,62.82,325.29,61.1,324.27,59.48z"
    />
    <linearGradient
      id="flrq_115_"
      gradientUnits="userSpaceOnUse"
      x1="238.8759"
      y1="53.1569"
      x2="321.6694"
      y2="53.1569"
    >
      <stop offset="0" style="stop-color:#414246" />
      <stop offset="0.6085" style="stop-color:#868686" />
      <stop offset="0.6976" style="stop-color:#7D7D7E" />
      <stop offset="0.8437" style="stop-color:#646567" />
      <stop offset="1" style="stop-color:#434448" />
    </linearGradient>
    <ellipse
      id="flrq_47_"
      class="flrb-${id}-st82"
      cx="280.27"
      cy="53.16"
      rx="41.4"
      ry="14.84"
    />
  </g>

  <g class="SVG_ani">
    <g class="f1">
      <animate
        values="show;hide;hide;hide;"
        dur="0.5s"
        attributeName="class"
        repeatCount="indefinite"
      />
      <linearGradient
        id="flrq_116_"
        gradientUnits="userSpaceOnUse"
        x1="83.7917"
        y1="17.6888"
        x2="159.3309"
        y2="17.6888"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_131_"
        class="flrb-${id}-st83"
        d="M152.57,26.82l6.76-3.17l-31.78-5.95l30.58-6.74l-6.76-3.17l-26.4,8.47l-9.35-12.01
        l-10.94,1.21l15.46,11.18l-36.36-0.68l0,3.92l35.95-1.56l-13.12,11.59l10.94,1.21l6.76-12.15L152.57,26.82z"
      />
      <linearGradient
        id="flrq_117_"
        gradientUnits="userSpaceOnUse"
        x1="185.1941"
        y1="17.6888"
        x2="260.7333"
        y2="17.6888"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_129_"
        class="flrb-${id}-st84"
        d="M253.97,26.82l6.76-3.17l-31.78-5.95l30.58-6.74l-6.76-3.17l-26.4,8.47l-9.35-12.01
        l-10.94,1.21l15.46,11.18l-36.36-0.68l0,3.92l35.95-1.56l-13.12,11.59l10.94,1.21l6.76-12.15L253.97,26.82z"
      />
      <linearGradient
        id="flrq_118_"
        gradientUnits="userSpaceOnUse"
        x1="286.5964"
        y1="17.6888"
        x2="362.1357"
        y2="17.6888"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_127_"
        class="flrb-${id}-st85"
        d="M355.38,26.82l6.76-3.17l-31.78-5.95l30.58-6.74l-6.76-3.17l-26.4,8.47l-9.35-12.01
        L307.5,5.46l15.46,11.18l-36.36-0.68v3.92l35.95-1.56l-13.12,11.59l10.94,1.21l6.76-12.15L355.38,26.82z"
      />
      <linearGradient
        id="flrq_119_"
        gradientUnits="userSpaceOnUse"
        x1="37.9008"
        y1="53.4018"
        x2="113.44"
        y2="53.4018"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_149_"
        class="flrb-${id}-st86"
        d="M106.68,62.53l6.76-3.17l-31.78-5.95l30.58-6.74l-6.76-3.17l-26.4,8.47l-9.35-12.01
        L58.8,41.17l15.46,11.18L37.9,51.68l0,3.92l35.95-1.56L60.73,65.63l10.94,1.21l6.76-12.15L106.68,62.53z"
      />
      <linearGradient
        id="flrq_120_"
        gradientUnits="userSpaceOnUse"
        x1="139.3031"
        y1="53.4018"
        x2="214.8424"
        y2="53.4018"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_147_"
        class="flrb-${id}-st87"
        d="M208.08,62.53l6.76-3.17l-31.78-5.95l30.58-6.74l-6.76-3.17l-26.4,8.47l-9.35-12.01
        l-10.94,1.21l15.46,11.18l-36.36-0.68l0,3.92l35.95-1.56l-13.12,11.59l10.94,1.21l6.76-12.15L208.08,62.53z"
      />
      <linearGradient
        id="flrq_121_"
        gradientUnits="userSpaceOnUse"
        x1="240.7055"
        y1="53.4018"
        x2="316.2447"
        y2="53.4018"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_145_"
        class="flrb-${id}-st88"
        d="M309.48,62.53l6.76-3.17l-31.78-5.95l30.58-6.74l-6.76-3.17l-26.4,8.47l-9.35-12.01
        l-10.94,1.21l15.46,11.18l-36.36-0.68l0,3.92l35.95-1.56l-13.12,11.59l10.94,1.21l6.76-12.15L309.48,62.53z"
      />
    </g>
    <g class="f2">
      <animate
        values="hide;show;hide;hide;"
        dur="0.5s"
        attributeName="class"
        repeatCount="indefinite"
      />
      <linearGradient
        id="flrq_122_"
        gradientUnits="userSpaceOnUse"
        x1="84.0992"
        y1="18.0815"
        x2="162.8986"
        y2="18.0815"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_65_"
        class="flrb-${id}-st89"
        d="M159.34,23.18l3.55-3.73l-35.61-2.31l22.98-9.64l-9.31-2.31l-17.43,10.84L103.76,5.6
        l-9.31,2.31l24.83,9.01L84.1,20.1l3.55,3.73l32.78-5.28l-1.98,12.41l11.5,0l-4.58-12.27L159.34,23.18z"
      />
      <linearGradient
        id="flrq_123_"
        gradientUnits="userSpaceOnUse"
        x1="185.5016"
        y1="18.0815"
        x2="264.301"
        y2="18.0815"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_7_"
        class="flrb-${id}-st90"
        d="M260.75,23.18l3.55-3.73l-35.61-2.31l22.98-9.64l-9.31-2.31l-17.43,10.84L205.17,5.6
        l-9.31,2.31l24.83,9.01l-35.2,3.19l3.55,3.73l32.78-5.28l-1.98,12.41l11.5,0l-4.58-12.27L260.75,23.18z"
      />
      <linearGradient
        id="flrq_124_"
        gradientUnits="userSpaceOnUse"
        x1="286.904"
        y1="18.0815"
        x2="365.7033"
        y2="18.0815"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_21_"
        class="flrb-${id}-st91"
        d="M362.15,23.18l3.55-3.73l-35.61-2.31l22.98-9.64l-9.31-2.31l-17.43,10.84L306.57,5.6
        l-9.31,2.31l24.83,9.01l-35.2,3.19l3.55,3.73l32.78-5.28l-1.98,12.41l11.5,0l-4.58-12.27L362.15,23.18z"
      />
      <linearGradient
        id="flrq_125_"
        gradientUnits="userSpaceOnUse"
        x1="38.2083"
        y1="53.7945"
        x2="117.0077"
        y2="53.7945"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_88_"
        class="flrb-${id}-st92"
        d="M113.45,58.89l3.55-3.73L81.4,52.85l22.98-9.64l-9.31-2.31L77.64,51.75L57.87,41.32
        l-9.31,2.31l24.83,9.01l-35.2,3.19l3.55,3.73l32.78-5.28l-1.98,12.41h11.5l-4.58-12.27L113.45,58.89z"
      />
      <linearGradient
        id="flrq_126_"
        gradientUnits="userSpaceOnUse"
        x1="139.6107"
        y1="53.7945"
        x2="218.41"
        y2="53.7945"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_61_"
        class="flrb-${id}-st93"
        d="M214.86,58.89l3.55-3.73l-35.61-2.31l22.98-9.64l-9.31-2.31l-17.43,10.84l-19.77-10.43
        l-9.31,2.31l24.83,9.01l-35.2,3.19l3.55,3.73l32.78-5.28l-1.98,12.41h11.5l-4.58-12.27L214.86,58.89z"
      />
      <linearGradient
        id="flrq_133_"
        gradientUnits="userSpaceOnUse"
        x1="241.013"
        y1="53.7945"
        x2="319.8124"
        y2="53.7945"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_41_"
        class="flrb-${id}-st94"
        d="M316.26,58.89l3.55-3.73l-35.61-2.31l22.98-9.64l-9.31-2.31l-17.43,10.84l-19.77-10.43
        l-9.31,2.31l24.83,9.01l-35.2,3.19l3.55,3.73l32.78-5.28l-1.98,12.41h11.5l-4.58-12.27L316.26,58.89z"
      />
    </g>
    <g class="f3">
      <animate
        values="hide;hide;show;hide;"
        dur="0.5s"
        attributeName="class"
        repeatCount="indefinite"
      />
      <linearGradient
        id="flrq_134_"
        gradientUnits="userSpaceOnUse"
        x1="87.1534"
        y1="17.3816"
        x2="162.6926"
        y2="17.3816"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_92_"
        class="flrb-${id}-st95"
        d="M162.69,19.1v-3.92l-35.95,1.56l13.12-11.59l-10.94-1.21l-6.76,12.15L93.91,8.25l-6.76,3.17
        l31.78,5.95l-30.58,6.74l6.76,3.17l26.4-8.47l9.35,12.01l10.94-1.21l-15.46-11.18L162.69,19.1z"
      />
      <linearGradient
        id="flrq_135_"
        gradientUnits="userSpaceOnUse"
        x1="188.5558"
        y1="17.3816"
        x2="264.095"
        y2="17.3816"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_90_"
        class="flrb-${id}-st96"
        d="M264.1,19.1v-3.92l-35.95,1.56l13.12-11.59l-10.94-1.21l-6.76,12.15l-28.25-7.84l-6.76,3.17
        l31.78,5.95l-30.58,6.74l6.76,3.17l26.4-8.47l9.35,12.01l10.94-1.21l-15.46-11.18L264.1,19.1z"
      />
      <linearGradient
        id="flrq_136_"
        gradientUnits="userSpaceOnUse"
        x1="289.9581"
        y1="17.3816"
        x2="365.4973"
        y2="17.3816"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_86_"
        class="flrb-${id}-st97"
        d="M365.5,19.1v-3.92l-35.95,1.56l13.12-11.59l-10.94-1.21l-6.76,12.15l-28.25-7.84l-6.76,3.17
        l31.78,5.95l-30.58,6.74l6.76,3.17l26.4-8.47l9.35,12.01l10.94-1.21l-15.46-11.18L365.5,19.1z"
      />
      <linearGradient
        id="flrq_137_"
        gradientUnits="userSpaceOnUse"
        x1="41.2625"
        y1="53.0946"
        x2="116.8017"
        y2="53.0946"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_113_"
        class="flrb-${id}-st98"
        d="M116.8,54.82v-3.92l-35.95,1.56l13.12-11.59l-10.94-1.21L76.27,51.8l-28.25-7.84l-6.76,3.17
        l31.78,5.95l-30.58,6.74L49.22,63l26.4-8.47l9.35,12.01l10.94-1.21L80.44,54.14L116.8,54.82z"
      />
      <linearGradient
        id="flrq_138_"
        gradientUnits="userSpaceOnUse"
        x1="142.6648"
        y1="53.0946"
        x2="218.2041"
        y2="53.0946"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_111_"
        class="flrb-${id}-st99"
        d="M218.2,54.82v-3.92l-35.95,1.56l13.12-11.59l-10.94-1.21l-6.76,12.15l-28.25-7.84l-6.76,3.17
        l31.78,5.95l-30.58,6.74l6.76,3.17l26.4-8.47l9.35,12.01l10.94-1.21l-15.46-11.18L218.2,54.82z"
      />
      <linearGradient
        id="flrq_139_"
        gradientUnits="userSpaceOnUse"
        x1="244.0672"
        y1="53.0946"
        x2="319.6064"
        y2="53.0946"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_109_"
        class="flrb-${id}-st100"
        d="M319.61,54.82v-3.92l-35.95,1.56l13.12-11.59l-10.94-1.21l-6.76,12.15l-28.25-7.84
        l-6.76,3.17l31.78,5.95l-30.58,6.74l6.76,3.17l26.4-8.47l9.35,12.01l10.94-1.21l-15.46-11.18L319.61,54.82z"
      />
    </g>
    <g class="f4">
      <animate
        values="hide;hide;hide;show;"
        dur="0.5s"
        attributeName="class"
        repeatCount="indefinite"
      />
      <linearGradient
        id="flrq_140_"
        gradientUnits="userSpaceOnUse"
        x1="83.719"
        y1="16.8772"
        x2="162.5184"
        y2="16.8772"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_75_"
        class="flrb-${id}-st101"
        d="M162.52,14.85l-3.55-3.73l-32.78,5.28l1.98-12.41h-11.5l4.58,12.27l-33.97-4.48l-3.55,3.73
        l35.61,2.31l-22.98,9.64l9.31,2.31l17.43-10.84l19.77,10.43l9.31-2.31l-24.83-9.01L162.52,14.85z"
      />
      <linearGradient
        id="flrq_141_"
        gradientUnits="userSpaceOnUse"
        x1="185.1214"
        y1="16.8772"
        x2="263.9208"
        y2="16.8772"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_3_"
        class="flrb-${id}-st102"
        d="M263.92,14.85l-3.55-3.73l-32.78,5.28l1.98-12.41h-11.5l4.58,12.27l-33.97-4.48l-3.55,3.73
        l35.61,2.31l-22.98,9.64l9.31,2.31l17.43-10.84l19.77,10.43l9.31-2.31l-24.83-9.01L263.92,14.85z"
      />
      <linearGradient
        id="flrq_142_"
        gradientUnits="userSpaceOnUse"
        x1="286.5237"
        y1="16.8772"
        x2="365.3231"
        y2="16.8772"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_5_"
        class="flrb-${id}-st103"
        d="M365.32,14.85l-3.55-3.73l-32.78,5.28l1.98-12.41h-11.5l4.58,12.27l-33.97-4.48l-3.55,3.73
        l35.61,2.31l-22.98,9.64l9.31,2.31l17.43-10.84l19.77,10.43l9.31-2.31l-24.83-9.01L365.32,14.85z"
      />
      <linearGradient
        id="flrq_143_"
        gradientUnits="userSpaceOnUse"
        x1="37.8281"
        y1="52.5902"
        x2="116.6275"
        y2="52.5902"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_84_"
        class="flrb-${id}-st104"
        d="M116.63,50.57l-3.55-3.73l-32.78,5.28l1.98-12.41h-11.5l4.58,12.27l-33.97-4.48l-3.55,3.73
        l35.61,2.31l-22.98,9.64l9.31,2.31l17.43-10.84l19.77,10.43l9.31-2.31l-24.83-9.01L116.63,50.57z"
      />
      <linearGradient
        id="flrq_144_"
        gradientUnits="userSpaceOnUse"
        x1="139.2304"
        y1="52.5902"
        x2="218.0298"
        y2="52.5902"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_57_"
        class="flrb-${id}-st105"
        d="M218.03,50.57l-3.55-3.73l-32.78,5.28l1.98-12.41h-11.5l4.58,12.27l-33.97-4.48l-3.55,3.73
        l35.61,2.31l-22.98,9.64l9.31,2.31l17.43-10.84l19.77,10.43l9.31-2.31l-24.83-9.01L218.03,50.57z"
      />
      <linearGradient
        id="flrq_151_"
        gradientUnits="userSpaceOnUse"
        x1="240.6328"
        y1="52.5902"
        x2="319.4322"
        y2="52.5902"
      >
        <stop offset="0" style="stop-color:#EAEAEA" />
        <stop offset="0.9947" style="stop-color:#B9BDC1" />
      </linearGradient>
      <path
        id="flrq_37_"
        class="flrb-${id}-st106"
        d="M319.43,50.57l-3.55-3.73l-32.78,5.28l1.98-12.41h-11.5l4.58,12.27l-33.97-4.48l-3.55,3.73
        l35.61,2.31l-22.98,9.64l9.31,2.31L280,54.63l19.77,10.43l9.31-2.31l-24.83-9.01L319.43,50.57z"
      />
    </g>
  </g>

  <g class="SVG_sta">
    <linearGradient
      id="flrq_140_"
      gradientUnits="userSpaceOnUse"
      x1="83.719"
      y1="16.8772"
      x2="162.5184"
      y2="16.8772"
    >
      <stop offset="0" style="stop-color:#EAEAEA" />
      <stop offset="0.9947" style="stop-color:#B9BDC1" />
    </linearGradient>
    <path
      id="flrq_75_"
      class="flrb-${id}-st101"
      d="M162.52,14.85l-3.55-3.73l-32.78,5.28l1.98-12.41h-11.5l4.58,12.27l-33.97-4.48l-3.55,3.73
        l35.61,2.31l-22.98,9.64l9.31,2.31l17.43-10.84l19.77,10.43l9.31-2.31l-24.83-9.01L162.52,14.85z"
    />
    <linearGradient
      id="flrq_141_"
      gradientUnits="userSpaceOnUse"
      x1="185.1214"
      y1="16.8772"
      x2="263.9208"
      y2="16.8772"
    >
      <stop offset="0" style="stop-color:#EAEAEA" />
      <stop offset="0.9947" style="stop-color:#B9BDC1" />
    </linearGradient>
    <path
      id="flrq_3_"
      class="flrb-${id}-st102"
      d="M263.92,14.85l-3.55-3.73l-32.78,5.28l1.98-12.41h-11.5l4.58,12.27l-33.97-4.48l-3.55,3.73
        l35.61,2.31l-22.98,9.64l9.31,2.31l17.43-10.84l19.77,10.43l9.31-2.31l-24.83-9.01L263.92,14.85z"
    />
    <linearGradient
      id="flrq_142_"
      gradientUnits="userSpaceOnUse"
      x1="286.5237"
      y1="16.8772"
      x2="365.3231"
      y2="16.8772"
    >
      <stop offset="0" style="stop-color:#EAEAEA" />
      <stop offset="0.9947" style="stop-color:#B9BDC1" />
    </linearGradient>
    <path
      id="flrq_5_"
      class="flrb-${id}-st103"
      d="M365.32,14.85l-3.55-3.73l-32.78,5.28l1.98-12.41h-11.5l4.58,12.27l-33.97-4.48l-3.55,3.73
        l35.61,2.31l-22.98,9.64l9.31,2.31l17.43-10.84l19.77,10.43l9.31-2.31l-24.83-9.01L365.32,14.85z"
    />
    <linearGradient
      id="flrq_143_"
      gradientUnits="userSpaceOnUse"
      x1="37.8281"
      y1="52.5902"
      x2="116.6275"
      y2="52.5902"
    >
      <stop offset="0" style="stop-color:#EAEAEA" />
      <stop offset="0.9947" style="stop-color:#B9BDC1" />
    </linearGradient>
    <path
      id="flrq_84_"
      class="flrb-${id}-st104"
      d="M116.63,50.57l-3.55-3.73l-32.78,5.28l1.98-12.41h-11.5l4.58,12.27l-33.97-4.48l-3.55,3.73
        l35.61,2.31l-22.98,9.64l9.31,2.31l17.43-10.84l19.77,10.43l9.31-2.31l-24.83-9.01L116.63,50.57z"
    />
    <linearGradient
      id="flrq_144_"
      gradientUnits="userSpaceOnUse"
      x1="139.2304"
      y1="52.5902"
      x2="218.0298"
      y2="52.5902"
    >
      <stop offset="0" style="stop-color:#EAEAEA" />
      <stop offset="0.9947" style="stop-color:#B9BDC1" />
    </linearGradient>
    <path
      id="flrq_57_"
      class="flrb-${id}-st105"
      d="M218.03,50.57l-3.55-3.73l-32.78,5.28l1.98-12.41h-11.5l4.58,12.27l-33.97-4.48l-3.55,3.73
        l35.61,2.31l-22.98,9.64l9.31,2.31l17.43-10.84l19.77,10.43l9.31-2.31l-24.83-9.01L218.03,50.57z"
    />
    <linearGradient
      id="flrq_151_"
      gradientUnits="userSpaceOnUse"
      x1="240.6328"
      y1="52.5902"
      x2="319.4322"
      y2="52.5902"
    >
      <stop offset="0" style="stop-color:#EAEAEA" />
      <stop offset="0.9947" style="stop-color:#B9BDC1" />
    </linearGradient>
    <path
      id="flrq_37_"
      class="flrb-${id}-st106"
      d="M319.43,50.57l-3.55-3.73l-32.78,5.28l1.98-12.41h-11.5l4.58,12.27l-33.97-4.48l-3.55,3.73
        l35.61,2.31l-22.98,9.64l9.31,2.31L280,54.63l19.77,10.43l9.31-2.31l-24.83-9.01L319.43,50.57z"
    />
  </g>

  <g id="SVG_base2">
    <linearGradient
      id="flrq_152_"
      gradientUnits="userSpaceOnUse"
      x1="115.4583"
      y1="16.9678"
      x2="131.3577"
      y2="16.9678"
    >
      <stop offset="0" style="stop-color:#909091" />
      <stop offset="0.3968" style="stop-color:#C7CCCC" />
      <stop offset="0.6005" style="stop-color:#AAAEAF" />
      <stop offset="0.9947" style="stop-color:#686B6D" />
    </linearGradient>
    <path
      id="flrq_28_"
      class="flrb-${id}-st107"
      d="M115.46,13.79v3.65c0,1.5,3.56,2.71,7.95,2.71c4.39,0,7.95-1.21,7.95-2.71v-3.65H115.46z"
    />
    <ellipse
      id="flrq_27_"
      class="flrb-${id}-st108"
      cx="123.41"
      cy="13.79"
      rx="7.95"
      ry="2.71"
    />
    <linearGradient
      id="flrq_153_"
      gradientUnits="userSpaceOnUse"
      x1="216.8606"
      y1="16.9678"
      x2="232.7601"
      y2="16.9678"
    >
      <stop offset="0" style="stop-color:#909091" />
      <stop offset="0.3968" style="stop-color:#C7CCCC" />
      <stop offset="0.6005" style="stop-color:#AAAEAF" />
      <stop offset="0.9947" style="stop-color:#686B6D" />
    </linearGradient>
    <path
      id="flrq_26_"
      class="flrb-${id}-st109"
      d="M216.86,13.79v3.65c0,1.5,3.56,2.71,7.95,2.71c4.39,0,7.95-1.21,7.95-2.71v-3.65H216.86z"
    />
    <ellipse
      id="flrq_25_"
      class="flrb-${id}-st108"
      cx="224.81"
      cy="13.79"
      rx="7.95"
      ry="2.71"
    />
    <linearGradient
      id="flrq_154_"
      gradientUnits="userSpaceOnUse"
      x1="318.263"
      y1="16.9678"
      x2="334.1625"
      y2="16.9678"
    >
      <stop offset="0" style="stop-color:#909091" />
      <stop offset="0.3968" style="stop-color:#C7CCCC" />
      <stop offset="0.6005" style="stop-color:#AAAEAF" />
      <stop offset="0.9947" style="stop-color:#686B6D" />
    </linearGradient>
    <path
      id="flrq_24_"
      class="flrb-${id}-st110"
      d="M318.26,13.79v3.65c0,1.5,3.56,2.71,7.95,2.71c4.39,0,7.95-1.21,7.95-2.71v-3.65H318.26z"
    />
    <ellipse
      id="flrq_23_"
      class="flrb-${id}-st108"
      cx="326.21"
      cy="13.79"
      rx="7.95"
      ry="2.71"
    />
    <linearGradient
      id="flrq_155_"
      gradientUnits="userSpaceOnUse"
      x1="69.5673"
      y1="52.6808"
      x2="85.4668"
      y2="52.6808"
    >
      <stop offset="0" style="stop-color:#909091" />
      <stop offset="0.3968" style="stop-color:#C7CCCC" />
      <stop offset="0.6005" style="stop-color:#AAAEAF" />
      <stop offset="0.9947" style="stop-color:#686B6D" />
    </linearGradient>
    <path
      id="flrq_20_"
      class="flrb-${id}-st111"
      d="M69.57,49.5v3.65c0,1.5,3.56,2.71,7.95,2.71c4.39,0,7.95-1.21,7.95-2.71V49.5H69.57z"
    />
    <ellipse
      id="flrq_19_"
      class="flrb-${id}-st108"
      cx="77.52"
      cy="49.5"
      rx="7.95"
      ry="2.71"
    />
    <linearGradient
      id="flrq_156_"
      gradientUnits="userSpaceOnUse"
      x1="170.9697"
      y1="52.6808"
      x2="186.8692"
      y2="52.6808"
    >
      <stop offset="0" style="stop-color:#909091" />
      <stop offset="0.3968" style="stop-color:#C7CCCC" />
      <stop offset="0.6005" style="stop-color:#AAAEAF" />
      <stop offset="0.9947" style="stop-color:#686B6D" />
    </linearGradient>
    <path
      id="flrq_10_"
      class="flrb-${id}-st112"
      d="M170.97,49.5v3.65c0,1.5,3.56,2.71,7.95,2.71c4.39,0,7.95-1.21,7.95-2.71V49.5H170.97z"
    />
    <ellipse
      id="flrq_9_"
      class="flrb-${id}-st108"
      cx="178.92"
      cy="49.5"
      rx="7.95"
      ry="2.71"
    />
    <linearGradient
      id="flrq_157_"
      gradientUnits="userSpaceOnUse"
      x1="272.372"
      y1="52.6808"
      x2="288.2715"
      y2="52.6808"
    >
      <stop offset="0" style="stop-color:#909091" />
      <stop offset="0.3968" style="stop-color:#C7CCCC" />
      <stop offset="0.6005" style="stop-color:#AAAEAF" />
      <stop offset="0.9947" style="stop-color:#686B6D" />
    </linearGradient>
    <path
      id="flrq_2_"
      class="flrb-${id}-st113"
      d="M272.37,49.5v3.65c0,1.5,3.56,2.71,7.95,2.71c4.39,0,7.95-1.21,7.95-2.71V49.5H272.37z"
    />
    <ellipse
      id="flrq_1_"
      class="flrb-${id}-st108"
      cx="280.32"
      cy="49.5"
      rx="7.95"
      ry="2.71"
    />
  </g>

  <g class="SVG_alert">
    <path
      class="flrb-${id}-st114"
      d="M399.64,21.71l0.15-0.12l-0.68-0.86l-1.25,0.98h-27.7v-4.26c0-9.78-19.33-17.44-44-17.44
        c-24.67,0-44,7.66-44,17.44v4.26h-13.4v-4.26c0-9.78-19.33-17.44-44-17.44c-24.67,0-44,7.66-44,17.44v4.26h-13.4v-4.26
        c0-9.78-19.33-17.44-44-17.44c-24.67,0-44,7.66-44,17.44v6.32c-0.71,1.14-1.18,2.34-1.41,3.57l-10.4,8.81
        c-19.74,1.74-34.09,8.59-34.09,17.01v6.32c-1.01,1.62-1.56,3.34-1.56,5.14v1.74L1.84,91.84H0v1.1h0.55V319.9h308.5L400,248.68
        V21.71H399.64z M387.7,140.16h-22.58l23.78-96.61v95.62L387.7,140.16z M319.81,296.48v-20.33l19.58-16.05h12.55
        c4.45,0,10.15-3.96,14.77-10.37h10.15L319.81,296.48z M15.79,222.09h21.59l-11.64,9.27h-0.16l-0.47,0.47h0.04l-3.79,3.02h-0.83
        v0.47h0.24v50.1l-4.98,4.38V222.09z M158.71,202.72c2.35-1.85,3.67-3.94,3.67-6.16v-4.53h19.76c-3.21,2.84-6.26,7.09-8.58,12.29
        h-14.86V202.72z M92.9,192.03v4.53c0,2.77,2.08,5.35,5.64,7.51l-0.3,0.25h-10.6v-12.29H92.9z M153.66,222.09h15.77
        c-0.03,0.68-0.05,1.36-0.05,2.04c0,1.31,0.06,2.61,0.16,3.88h-15.88V222.09z M81.23,192.03v12.29h-4.24v-12.29H81.23z
         M15.79,114.69l1.17,4.75l0,0l0.06,0.25l0.91,3.7l0,0l0.24,0.99l0,0l0.87,3.52l0.11,0.43l0,0l1.71,6.91l0,0l0.05,0.19l0.93,3.76
        l0,0l0.24,0.99l0,0l0.87,3.53l0.1,0.41l0,0l1.71,6.91l0,0l0.03,0.12l0.94,3.82l0,0l0.24,0.99l0,0l0.88,3.55l0.1,0.4l0,0l1.71,6.91
        l0,0l0.02,0.06l0.96,3.89l0,0l0.24,0.99l0,0l0.88,3.56l0.1,0.39l0,0l0.8,3.23l-15.87,13V114.69z M34.94,192.03h33.64v12.29H19.94
        L34.94,192.03z M117.87,296.03c2.81,2.5,5.74,3.92,8.4,3.92h0.47h9.82L135.8,305h-28.88L117.87,296.03z M149.93,299.95h29.29
        l-6.17,5.05h-29.3L149.93,299.95z M197.98,299.95h47.57l-0.76,5.05h-52.98L197.98,299.95z M319.81,260.1h0.83l-0.83,0.68V260.1z
         M15.79,303.62l4.98-4.38V305h-4.98V303.62z M252.74,305l6.17-5.05h13.09l-6.17,5.05H252.74z M359.42,163.34l1.82-7.38h7.19
        L359.42,163.34z M284.59,305l7.45-6.1c0.69-0.31,1.4-0.69,2.1-1.13V305H284.59z M388.91,157.57v78.33h-15.57
        c1.04-3.69,1.66-7.65,1.66-11.78c0-19.87-14.08-35.97-23.05-35.97h-0.37l39.3-32.21L388.91,157.57z M389.05,42.95L389.05,42.95
        l1.83-1.5L389.05,42.95z"
    />
  </g>`;

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

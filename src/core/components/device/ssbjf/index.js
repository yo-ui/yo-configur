// import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 湿式报警阀
class Text extends Component {
  pointValue = 0;
  constructor(props) {
    super(props);
  }
  init() {
    super.initEvent();

    this.refresh();
  }

  //组件样式

  template() {
    let { info = {} } = this;
    return super.wrap(
      { info },
      `
    <div class="bm-device-ssbjf-com component"
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
    viewBox="0 0 240 210"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
    .ssbjf-${id}-st0{fill:url(#ssbjf_1_);}
    .ssbjf-${id}-st1{fill:url(#ssbjf_2_);}
    .ssbjf-${id}-st2{fill:#FFB6BB;}
    .ssbjf-${id}-st3{fill:url(#ssbjf_3_);}
    .ssbjf-${id}-st4{fill:url(#ssbjf_4_);}
    .ssbjf-${id}-st5{fill:url(#ssbjf_5_);}
    .ssbjf-${id}-st6{fill:url(#ssbjf_6_);}
    .ssbjf-${id}-st7{fill:url(#ssbjf_7_);}
    .ssbjf-${id}-st8{fill:url(#ssbjf_8_);}
    .ssbjf-${id}-st9{fill:url(#ssbjf_9_);}
    .ssbjf-${id}-st10{fill:#5C5C5C;}
    .ssbjf-${id}-st11{fill:url(#ssbjf_10_);}
    .ssbjf-${id}-st12{fill:#B71C27;}
    .ssbjf-${id}-st13{fill:url(#ssbjf_11_);}
    .ssbjf-${id}-st14{fill:url(#ssbjf_12_);}
    .ssbjf-${id}-st15{fill:url(#ssbjf_13_);}
    .ssbjf-${id}-st16{fill:url(#ssbjf_14_);}
    .ssbjf-${id}-st17{fill:url(#ssbjf_15_);}
    .ssbjf-${id}-st18{fill:url(#ssbjf_16_);}
    .ssbjf-${id}-st19{fill:url(#ssbjf_17_);}
    .ssbjf-${id}-st20{fill:url(#ssbjf_18_);}
    .ssbjf-${id}-st21{fill:url(#ssbjf_19_);}
    .ssbjf-${id}-st22{fill:#2F3338;}
    .ssbjf-${id}-st23{fill:#FFFFFF;}
    .ssbjf-${id}-st24{fill:url(#ssbjf_20_);}
    .ssbjf-${id}-st25{fill:url(#ssbjf_21_);}
    .ssbjf-${id}-st26{fill:url(#ssbjf_22_);}
    .ssbjf-${id}-st27{fill:url(#ssbjf_23_);}
    .ssbjf-${id}-st28{fill:url(#ssbjf_24_);}
    .ssbjf-${id}-st29{fill:url(#ssbjf_25_);}
    .ssbjf-${id}-st30{fill:url(#ssbjf_26_);}
    .ssbjf-${id}-st31{fill:url(#ssbjf_27_);}
    .ssbjf-${id}-st32{fill:url(#ssbjf_28_);}
    .ssbjf-${id}-st33{fill:url(#ssbjf_29_);}
    .ssbjf-${id}-st34{fill:url(#ssbjf_30_);}
    .ssbjf-${id}-st35{fill:url(#ssbjf_31_);}
    .ssbjf-${id}-st36{fill:url(#ssbjf_32_);}
    .ssbjf-${id}-st37{fill:url(#ssbjf_33_);}
    .ssbjf-${id}-st38{fill:url(#ssbjf_34_);}
    .ssbjf-${id}-st39{fill:url(#ssbjf_35_);}
    .ssbjf-${id}-st40{fill:url(#ssbjf_36_);}

    .show {display:default;}
    .hide {display:none;}
    .f1 {display:default;}
    .f2 {display:none;}
    .f3 {display:none;}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let text = `

    <g id="SVG_base">
    <linearGradient
      id="ssbjf_1_"
      gradientUnits="userSpaceOnUse"
      x1="581.3483"
      y1="-71.6701"
      x2="668.2365"
      y2="-71.6701"
      gradientTransform="matrix(-1 0 0 1 801.219 265.5738)"
    >
      <stop offset="0" style="stop-color:#FF6A6A" />
      <stop offset="0.0587" style="stop-color:#FF7070" />
      <stop offset="0.1337" style="stop-color:#FF7F7F" />
      <stop offset="0.2176" style="stop-color:#FF9A9A" />
      <stop offset="0.3074" style="stop-color:#FFBEBE" />
      <stop offset="0.3603" style="stop-color:#FFD7D7" />
      <stop offset="0.3662" style="stop-color:#FDD3D2" />
      <stop offset="0.447" style="stop-color:#E59A98" />
      <stop offset="0.525" style="stop-color:#D26A67" />
      <stop offset="0.5983" style="stop-color:#C24541" />
      <stop offset="0.6658" style="stop-color:#B72B26" />
      <stop offset="0.7255" style="stop-color:#B01B16" />
      <stop offset="0.7709" style="stop-color:#AE1510" />
      <stop offset="1" style="stop-color:#FF7F7F" />
    </linearGradient>
    <path
      class="ssbjf-${id}-st0"
      d="M142.52,184.64c7.96-3.93,20.19-6.45,33.9-6.45c13.72,0,25.94,2.52,33.9,6.45h9.54v7.77
            c0,9.5-19.45,17.2-43.44,17.2s-43.44-7.7-43.44-17.2v-7.77H142.52z"
    />
    <linearGradient
      id="ssbjf_2_"
      gradientUnits="userSpaceOnUse"
      x1="539.8029"
      y1="84.5917"
      x2="507.0266"
      y2="74.4397"
      gradientTransform="matrix(0 -1 1 0 99.4769 699.7747)"
    >
      <stop offset="0" style="stop-color:#C94747" />
      <stop offset="1" style="stop-color:#AF2727" />
    </linearGradient>
    <ellipse
      class="ssbjf-${id}-st1"
      cx="176.43"
      cy="184.64"
      rx="43.44"
      ry="17.2"
    />
    <path
      class="ssbjf-${id}-st2"
      d="M176.43,198.51c22.57,0,41.11-6.82,43.24-15.53c0.13,0.55,0.21,1.11,0.21,1.67c0,9.5-19.45,17.2-43.44,17.2
            s-43.44-7.7-43.44-17.2c0-0.56,0.07-1.12,0.21-1.67C135.31,191.69,153.86,198.51,176.43,198.51z"
    />
    <linearGradient
      id="ssbjf_3_"
      gradientUnits="userSpaceOnUse"
      x1="98.8852"
      y1="145.3088"
      x2="114.4765"
      y2="145.3088"
    >
      <stop offset="0" style="stop-color:#AFB3B2" />
      <stop offset="0.2486" style="stop-color:#777B7A" />
      <stop offset="0.6732" style="stop-color:#FDFEF9" />
      <stop offset="1" style="stop-color:#7D7F7E" />
    </linearGradient>
    <polygon
      class="ssbjf-${id}-st3"
      points="98.89,150.9 106.78,155.33 114.48,150.9 114.48,135.28 98.89,135.28 	"
    />
    <linearGradient
      id="ssbjf_4_"
      gradientUnits="userSpaceOnUse"
      x1="131.2883"
      y1="170.9244"
      x2="131.2883"
      y2="155.3331"
    >
      <stop offset="0" style="stop-color:#AFB3B2" />
      <stop offset="0.2486" style="stop-color:#777B7A" />
      <stop offset="0.6732" style="stop-color:#FDFEF9" />
      <stop offset="1" style="stop-color:#7D7F7E" />
    </linearGradient>
    <path
      class="ssbjf-${id}-st4"
      d="M118.91,170.92l-5.2-7.39l5.2-8.2h27.42c0,0,2.54,2.34,2.54,7.8c0,6.46-2.54,7.8-2.54,7.8H118.91z"
    />
    <radialGradient
      id="ssbjf_5_"
      cx="118.9588"
      cy="151.0795"
      r="20.5048"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="5.586592e-03" style="stop-color:#7D7F7E" />
      <stop offset="0.243" style="stop-color:#858786" />
      <stop offset="0.4888" style="stop-color:#FDFEF9" />
      <stop offset="0.7737" style="stop-color:#777B7A" />
      <stop offset="1" style="stop-color:#AFB3B2" />
    </radialGradient>
    <path
      class="ssbjf-${id}-st5"
      d="M114.48,150.9H98.89c0,11.06,8.96,20.02,20.02,20.02v-15.59C116.46,155.33,114.48,153.35,114.48,150.9z"
    />
    <g>
      <linearGradient
        id="ssbjf_6_"
        gradientUnits="userSpaceOnUse"
        x1="469.9202"
        y1="117.7649"
        x2="477.6936"
        y2="117.7649"
        gradientTransform="matrix(-1 0 0 1 703.0345 0)"
      >
        <stop offset="0" style="stop-color:#AFB3B2" />
        <stop offset="0.2486" style="stop-color:#777B7A" />
        <stop offset="0.6732" style="stop-color:#FDFEF9" />
        <stop offset="1" style="stop-color:#7D7F7E" />
      </linearGradient>
      <polygon
        class="ssbjf-${id}-st6"
        points="233.11,120.55 229.18,122.76 225.34,120.55 225.34,112.77 233.11,112.77 		"
      />
      <linearGradient
        id="ssbjf_7_"
        gradientUnits="userSpaceOnUse"
        x1="487.5332"
        y1="130.5362"
        x2="487.5332"
        y2="122.7628"
        gradientTransform="matrix(-1 0 0 1 703.0345 0)"
      >
        <stop offset="0" style="stop-color:#AFB3B2" />
        <stop offset="0.2486" style="stop-color:#777B7A" />
        <stop offset="0.6732" style="stop-color:#FDFEF9" />
        <stop offset="1" style="stop-color:#7D7F7E" />
      </linearGradient>
      <path
        class="ssbjf-${id}-st7"
        d="M223.13,130.54l2.59-3.68l-2.59-4.09h-16.59c0,0-1.26,1.16-1.26,3.89c0,3.22,1.26,3.89,1.26,3.89H223.13z"
      />
      <radialGradient
        id="ssbjf_8_"
        cx="479.9284"
        cy="120.6421"
        r="10.2231"
        gradientTransform="matrix(-1 0 0 1 703.0345 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="5.586592e-03" style="stop-color:#7D7F7E" />
        <stop offset="0.243" style="stop-color:#858786" />
        <stop offset="0.4888" style="stop-color:#FDFEF9" />
        <stop offset="0.7737" style="stop-color:#777B7A" />
        <stop offset="1" style="stop-color:#AFB3B2" />
      </radialGradient>
      <path
        class="ssbjf-${id}-st8"
        d="M225.34,120.55h7.77c0,5.51-4.47,9.98-9.98,9.98v-7.77C224.35,122.76,225.34,121.77,225.34,120.55z"
      />
      <linearGradient
        id="ssbjf_9_"
        gradientUnits="userSpaceOnUse"
        x1="218.2786"
        y1="104.1357"
        x2="240"
        y2="104.1357"
      >
        <stop offset="0" style="stop-color:#000000" />
        <stop offset="0.4721" style="stop-color:#4A4A4A" />
        <stop offset="1" style="stop-color:#000000" />
      </linearGradient>
      <circle
        class="ssbjf-${id}-st9"
        cx="229.14"
        cy="104.14"
        r="10.86"
      />
      <circle
        class="ssbjf-${id}-st10"
        cx="229.14"
        cy="107"
        r="10.86"
      />
      <linearGradient
        id="ssbjf_10_"
        gradientUnits="userSpaceOnUse"
        x1="229.1393"
        y1="115.8345"
        x2="229.1393"
        y2="98.162"
      >
        <stop offset="0" style="stop-color:#FFFFFF" />
        <stop offset="1" style="stop-color:#B3B3B3" />
      </linearGradient>
      <circle
        class="ssbjf-${id}-st11"
        cx="229.14"
        cy="107"
        r="8.84"
      />
      <polygon
        class="ssbjf-${id}-st12"
        points="230.42,109.78 227.86,109.78 228.85,100.1 229.43,100.1 		"
      />
    </g>
    <g>
      <linearGradient
        id="ssbjf_11_"
        gradientUnits="userSpaceOnUse"
        x1="469.9202"
        y1="159.5605"
        x2="477.6936"
        y2="159.5605"
        gradientTransform="matrix(-1 0 0 1 703.0345 0)"
      >
        <stop offset="0" style="stop-color:#AFB3B2" />
        <stop offset="0.2486" style="stop-color:#777B7A" />
        <stop offset="0.6732" style="stop-color:#FDFEF9" />
        <stop offset="1" style="stop-color:#7D7F7E" />
      </linearGradient>
      <polygon
        class="ssbjf-${id}-st13"
        points="233.11,162.35 229.18,164.56 225.34,162.35 225.34,154.56 233.11,154.56 		"
      />
      <linearGradient
        id="ssbjf_12_"
        gradientUnits="userSpaceOnUse"
        x1="487.5332"
        y1="172.3318"
        x2="487.5332"
        y2="164.5583"
        gradientTransform="matrix(-1 0 0 1 703.0345 0)"
      >
        <stop offset="0" style="stop-color:#AFB3B2" />
        <stop offset="0.2486" style="stop-color:#777B7A" />
        <stop offset="0.6732" style="stop-color:#FDFEF9" />
        <stop offset="1" style="stop-color:#7D7F7E" />
      </linearGradient>
      <path
        class="ssbjf-${id}-st14"
        d="M223.13,172.33l2.59-3.68l-2.59-4.09h-16.59c0,0-1.26,1.16-1.26,3.89c0,3.22,1.26,3.89,1.26,3.89H223.13z"
      />
      <radialGradient
        id="ssbjf_13_"
        cx="479.9284"
        cy="162.4376"
        r="10.2231"
        gradientTransform="matrix(-1 0 0 1 703.0345 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="5.586592e-03" style="stop-color:#7D7F7E" />
        <stop offset="0.243" style="stop-color:#858786" />
        <stop offset="0.4888" style="stop-color:#FDFEF9" />
        <stop offset="0.7737" style="stop-color:#777B7A" />
        <stop offset="1" style="stop-color:#AFB3B2" />
      </radialGradient>
      <path
        class="ssbjf-${id}-st15"
        d="M225.34,162.35h7.77c0,5.51-4.47,9.98-9.98,9.98v-7.77C224.35,164.56,225.34,163.57,225.34,162.35z"
      />
      <linearGradient
        id="ssbjf_14_"
        gradientUnits="userSpaceOnUse"
        x1="218.2786"
        y1="145.9313"
        x2="240"
        y2="145.9313"
      >
        <stop offset="0" style="stop-color:#000000" />
        <stop offset="0.4721" style="stop-color:#4A4A4A" />
        <stop offset="1" style="stop-color:#000000" />
      </linearGradient>
      <circle
        class="ssbjf-${id}-st16"
        cx="229.14"
        cy="145.93"
        r="10.86"
      />
      <circle
        class="ssbjf-${id}-st10"
        cx="229.14"
        cy="148.79"
        r="10.86"
      />
      <linearGradient
        id="ssbjf_15_"
        gradientUnits="userSpaceOnUse"
        x1="229.1393"
        y1="157.63"
        x2="229.1393"
        y2="139.9576"
      >
        <stop offset="0" style="stop-color:#FFFFFF" />
        <stop offset="1" style="stop-color:#B3B3B3" />
      </linearGradient>
      <circle
        class="ssbjf-${id}-st17"
        cx="229.14"
        cy="148.79"
        r="8.84"
      />
      <polygon
        class="ssbjf-${id}-st12"
        points="230.42,151.58 227.86,151.58 228.85,141.9 229.43,141.9 		"
      />
    </g>
    <linearGradient
      id="ssbjf_16_"
      gradientUnits="userSpaceOnUse"
      x1="138.2699"
      y1="157.9738"
      x2="214.8951"
      y2="157.9738"
    >
      <stop offset="0" style="stop-color:#AE0000" />
      <stop offset="0.0978" style="stop-color:#FF9F9F" />
      <stop offset="0.8966" style="stop-color:#FF9F9F" />
      <stop offset="1" style="stop-color:#AE0000" />
    </linearGradient>
    <path
      class="ssbjf-${id}-st18"
      d="M138.27,126.08v42.7v3.07v11.03c0,3.85,3.12,6.98,6.98,6.98h62.67c3.85,0,6.98-3.12,6.98-6.98v-11.03v-3.07
            v-42.7H138.27z"
    />
    <linearGradient
      id="ssbjf_17_"
      gradientUnits="userSpaceOnUse"
      x1="138.2699"
      y1="127.0756"
      x2="214.8951"
      y2="127.0756"
    >
      <stop offset="0" style="stop-color:#C94747" />
      <stop offset="1" style="stop-color:#AF2727" />
    </linearGradient>
    <path
      class="ssbjf-${id}-st19"
      d="M207.88,113.05h-62.6c-3.87,0-7.01,3.14-7.01,7.01v14.04c0,3.87,3.14,7.01,7.01,7.01h62.6
            c3.87,0,7.01-3.14,7.01-7.01v-14.04C214.9,116.19,211.76,113.05,207.88,113.05z"
    />
    <linearGradient
      id="ssbjf_18_"
      gradientUnits="userSpaceOnUse"
      x1="143.889"
      y1="113.0407"
      x2="208.9642"
      y2="113.0407"
    >
      <stop offset="0" style="stop-color:#FF6A6A" />
      <stop offset="0.0587" style="stop-color:#FF7070" />
      <stop offset="0.1337" style="stop-color:#FF7F7F" />
      <stop offset="0.2176" style="stop-color:#FF9A9A" />
      <stop offset="0.3074" style="stop-color:#FFBEBE" />
      <stop offset="0.3603" style="stop-color:#FFD7D7" />
      <stop offset="0.3662" style="stop-color:#FDD3D2" />
      <stop offset="0.447" style="stop-color:#E59A98" />
      <stop offset="0.525" style="stop-color:#D26A67" />
      <stop offset="0.5983" style="stop-color:#C24541" />
      <stop offset="0.6658" style="stop-color:#B72B26" />
      <stop offset="0.7255" style="stop-color:#B01B16" />
      <stop offset="0.7709" style="stop-color:#AE1510" />
      <stop offset="1" style="stop-color:#FF7F7F" />
    </linearGradient>
    <path
      class="ssbjf-${id}-st20"
      d="M208.96,89.26v34.68c0,7.12-14.57,12.88-32.54,12.88s-32.54-5.77-32.54-12.88V89.26H208.96z"
    />

    <radialGradient
      id="ssbjf_19_"
      cx="174.3896"
      cy="84.9862"
      r="48.6167"
      gradientTransform="matrix(1 0 0 0.4689 0 45.1392)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" style="stop-color:#000000" />
      <stop offset="1" style="stop-color:#000000;stop-opacity:0" />
    </radialGradient>
    <rect
      x="143.89"
      y="89.26"
      class="ssbjf-${id}-st21"
      width="65.04"
      height="29.84"
    />
    <g>
      <path
        class="ssbjf-${id}-st22"
        d="M192.09,173.5h-28.87c-1.14,0-2.07-0.93-2.07-2.07v-16.42c0-1.14,0.93-2.07,2.07-2.07h28.87
              c1.14,0,2.07,0.93,2.07,2.07v16.42C194.16,172.58,193.23,173.5,192.09,173.5z"
      />
      <path
        class="ssbjf-${id}-st23"
        d="M192.1,174h-28.89c-1.41,0-2.55-1.15-2.55-2.55v-16.44c0-1.41,1.15-2.55,2.55-2.55h28.89
              c1.41,0,2.55,1.15,2.55,2.55v16.44C194.66,172.85,193.51,174,192.1,174z M163.21,153.45c-0.86,0-1.56,0.7-1.56,1.56v16.44
              c0,0.86,0.7,1.56,1.56,1.56h28.89c0.86,0,1.56-0.7,1.56-1.56v-16.44c0-0.86-0.7-1.56-1.56-1.56H163.21z"
      />
    </g>

    <linearGradient
      id="ssbjf_20_"
      gradientUnits="userSpaceOnUse"
      x1="668.801"
      y1="-184.12"
      x2="581.2082"
      y2="-184.12"
      gradientTransform="matrix(-1 0 0 1 801.219 265.5738)"
    >
      <stop offset="0" style="stop-color:#FF6A6A" />
      <stop offset="0.0587" style="stop-color:#FF7070" />
      <stop offset="0.1337" style="stop-color:#FF7F7F" />
      <stop offset="0.2176" style="stop-color:#FF9A9A" />
      <stop offset="0.3074" style="stop-color:#FFBEBE" />
      <stop offset="0.3603" style="stop-color:#FFD7D7" />
      <stop offset="0.3662" style="stop-color:#FDD3D2" />
      <stop offset="0.447" style="stop-color:#E59A98" />
      <stop offset="0.525" style="stop-color:#D26A67" />
      <stop offset="0.5983" style="stop-color:#C24541" />
      <stop offset="0.6658" style="stop-color:#B72B26" />
      <stop offset="0.7255" style="stop-color:#B01B16" />
      <stop offset="0.7709" style="stop-color:#AE1510" />
      <stop offset="1" style="stop-color:#FF7F7F" />
    </linearGradient>
    <path
      class="ssbjf-${id}-st24"
      d="M142.52,72.19c7.96-3.93,20.19-6.45,33.9-6.45c13.72,0,25.94,2.52,33.9,6.45h9.54v7.77
            c0,9.5-19.45,17.2-43.44,17.2s-43.44-7.7-43.44-17.2v-7.77H142.52z"
    />
    <linearGradient
      id="ssbjf_21_"
      gradientUnits="userSpaceOnUse"
      x1="132.9825"
      y1="72.1945"
      x2="219.8707"
      y2="72.1945"
    >
      <stop offset="0" style="stop-color:#D8757D" />
      <stop offset="1" style="stop-color:#C44D56" />
    </linearGradient>
    <ellipse
      class="ssbjf-${id}-st25"
      cx="176.43"
      cy="72.19"
      rx="43.44"
      ry="17.2"
    />

    <linearGradient
      id="ssbjf_22_"
      gradientUnits="userSpaceOnUse"
      x1="647.2585"
      y1="-195.5298"
      x2="603.6043"
      y2="-195.5298"
      gradientTransform="matrix(-1 0 0 1 801.219 265.5738)"
    >
      <stop offset="0" style="stop-color:#2D0503" />
      <stop offset="0.648" style="stop-color:#8F0201" />
      <stop offset="1" style="stop-color:#2D0503" />
    </linearGradient>
    <ellipse
      class="ssbjf-${id}-st26"
      cx="176.43"
      cy="70.04"
      rx="22.4"
      ry="8.87"
    />
    <path
      class="ssbjf-${id}-st2"
      d="M176.43,86.06c22.57,0,41.11-6.82,43.24-15.53c0.13,0.55,0.21,1.11,0.21,1.67c0,9.5-19.45,17.2-43.44,17.2
            s-43.44-7.7-43.44-17.2c0-0.56,0.07-1.12,0.21-1.67C135.31,79.24,153.86,86.06,176.43,86.06z"
    />
    <path
      class="ssbjf-${id}-st2"
      d="M176.43,62.85c11.66,0,21.23,3.53,22.29,8.03c0.07-0.28,0.11-0.55,0.11-0.84c0-4.9-10.03-8.87-22.4-8.87
            c-12.37,0-22.4,3.97-22.4,8.87c0,0.28,0.04,0.56,0.11,0.84C155.2,66.38,164.77,62.85,176.43,62.85z"
    />
    <g>
      <linearGradient
        id="ssbjf_23_"
        gradientUnits="userSpaceOnUse"
        x1="84.4488"
        y1="116.478"
        x2="128.5738"
        y2="116.478"
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
        class="ssbjf-${id}-st27"
        d="M84.45,87.86v49.13c0,3.45,9.88,8.11,22.06,8.11s22.06-4.66,22.06-8.11V87.86H84.45z"
      />

      <radialGradient
        id="ssbjf_24_"
        cx="99.8304"
        cy="84.8825"
        r="43.3724"
        gradientTransform="matrix(1 0 0 0.3585 0 54.4559)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style="stop-color:#F0EDE4" />
        <stop offset="0.1222" style="stop-color:#EBE9E0" />
        <stop offset="0.2577" style="stop-color:#DEDCD4" />
        <stop offset="0.3996" style="stop-color:#C8C7C1" />
        <stop offset="0.546" style="stop-color:#A9AAA6" />
        <stop offset="0.6944" style="stop-color:#818583" />
        <stop offset="0.7291" style="stop-color:#777B7A" />
        <stop offset="1" style="stop-color:#AFB3B2" />
      </radialGradient>
      <path
        class="ssbjf-${id}-st28"
        d="M128.57,87.86c0,3.45-9.88,6.24-22.06,6.24s-22.06-2.79-22.06-6.24c0-3.45,9.88-8.85,22.06-8.85
              S128.57,84.42,128.57,87.86z"
      />

      <radialGradient
        id="ssbjf_25_"
        cx="105.2636"
        cy="135.961"
        r="34.5188"
        gradientTransform="matrix(1 0 0 0.2634 0 100.1557)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.6272" style="stop-color:#000000;stop-opacity:0" />
        <stop offset="1" style="stop-color:#000000;stop-opacity:0.7" />
      </radialGradient>
      <path
        class="ssbjf-${id}-st29"
        d="M84.45,136.81v0.18c0,3.45,9.88,8.11,22.06,8.11s22.06-4.66,22.06-8.11v-0.18H84.45z"
      />
    </g>

    <linearGradient
      id="ssbjf_26_"
      gradientUnits="userSpaceOnUse"
      x1="591.2165"
      y1="80.0259"
      x2="601.83"
      y2="80.0259"
      gradientTransform="matrix(-1 0 0 1 703.0345 0)"
    >
      <stop offset="0" style="stop-color:#AFB3B2" />
      <stop offset="0.2486" style="stop-color:#777B7A" />
      <stop offset="0.6732" style="stop-color:#FDFEF9" />
      <stop offset="1" style="stop-color:#7D7F7E" />
    </linearGradient>
    <path
      class="ssbjf-${id}-st30"
      d="M111.82,83.34c0,0-0.13,3.02-5.37,3.02s-5.24-3.02-5.24-3.02V73.7h10.61V83.34z"
    />

    <linearGradient
      id="ssbjf_27_"
      gradientUnits="userSpaceOnUse"
      x1="575.2966"
      y1="57.4246"
      x2="585.9102"
      y2="57.4246"
      gradientTransform="matrix(-1 0 0 1 703.0345 0)"
    >
      <stop offset="0" style="stop-color:#AFB3B2" />
      <stop offset="0.2486" style="stop-color:#777B7A" />
      <stop offset="0.6732" style="stop-color:#FDFEF9" />
      <stop offset="1" style="stop-color:#7D7F7E" />
    </linearGradient>
    <polygon
      class="ssbjf-${id}-st31"
      points="127.74,61.23 122.37,64.25 117.12,61.23 117.12,50.6 127.74,50.6 	"
    />

    <linearGradient
      id="ssbjf_28_"
      gradientUnits="userSpaceOnUse"
      x1="599.3448"
      y1="74.862"
      x2="599.3448"
      y2="64.2485"
      gradientTransform="matrix(-1 0 0 1 703.0345 0)"
    >
      <stop offset="0" style="stop-color:#AFB3B2" />
      <stop offset="0.2486" style="stop-color:#777B7A" />
      <stop offset="0.6732" style="stop-color:#FDFEF9" />
      <stop offset="1" style="stop-color:#7D7F7E" />
    </linearGradient>
    <path
      class="ssbjf-${id}-st32"
      d="M114.11,74.86l3.54-5.03l-3.54-5.58H91.46c0,0-1.73,1.59-1.73,5.31c0,4.4,1.73,5.31,1.73,5.31H114.11z"
    />

    <radialGradient
      id="ssbjf_29_"
      cx="588.9614"
      cy="61.3529"
      r="13.9583"
      gradientTransform="matrix(-1 0 0 1 703.0345 0)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="5.586592e-03" style="stop-color:#7D7F7E" />
      <stop offset="0.243" style="stop-color:#858786" />
      <stop offset="0.4888" style="stop-color:#FDFEF9" />
      <stop offset="0.7737" style="stop-color:#777B7A" />
      <stop offset="1" style="stop-color:#AFB3B2" />
    </radialGradient>
    <path
      class="ssbjf-${id}-st33"
      d="M117.12,61.23h10.61c0,7.53-6.1,13.63-13.63,13.63V64.25C115.77,64.25,117.12,62.9,117.12,61.23z"
    />

    <linearGradient
      id="ssbjf_30_"
      gradientUnits="userSpaceOnUse"
      x1="687.907"
      y1="-219.4231"
      x2="669.7566"
      y2="-219.4231"
      gradientTransform="matrix(-1 0 0 1 801.219 265.5738)"
    >
      <stop offset="0" style="stop-color:#FF6A6A" />
      <stop offset="0.0587" style="stop-color:#FF7070" />
      <stop offset="0.1337" style="stop-color:#FF7F7F" />
      <stop offset="0.2176" style="stop-color:#FF9A9A" />
      <stop offset="0.3074" style="stop-color:#FFBEBE" />
      <stop offset="0.3603" style="stop-color:#FFD7D7" />
      <stop offset="0.3662" style="stop-color:#FDD3D2" />
      <stop offset="0.447" style="stop-color:#E59A98" />
      <stop offset="0.525" style="stop-color:#D26A67" />
      <stop offset="0.5983" style="stop-color:#C24541" />
      <stop offset="0.6658" style="stop-color:#B72B26" />
      <stop offset="0.7255" style="stop-color:#B01B16" />
      <stop offset="0.7709" style="stop-color:#AE1510" />
      <stop offset="1" style="stop-color:#FF7F7F" />
    </linearGradient>
    <path
      class="ssbjf-${id}-st34"
      d="M115.41,37.12c1.65-0.81,4.18-1.34,7.03-1.34c2.84,0,5.38,0.52,7.02,1.34h1.98v15.84c0,1.97-4.03,3.56-9,3.56
            c-4.97,0-9-1.6-9-3.56V37.12H115.41z"
    />

    <linearGradient
      id="ssbjf_31_"
      gradientUnits="userSpaceOnUse"
      x1="667.7691"
      y1="24.5378"
      x2="660.9774"
      y2="22.4342"
      gradientTransform="matrix(0 -1 1 0 99.4769 699.7747)"
    >
      <stop offset="0" style="stop-color:#D8757D" />
      <stop offset="1" style="stop-color:#C44D56" />
    </linearGradient>
    <ellipse
      class="ssbjf-${id}-st35"
      cx="122.43"
      cy="37.12"
      rx="9"
      ry="3.56"
    />
    <path
      class="ssbjf-${id}-st2"
      d="M122.43,39.99c4.68,0,8.52-1.41,8.96-3.22c0.03,0.11,0.04,0.23,0.04,0.35c0,1.97-4.03,3.56-9,3.56
            c-4.97,0-9-1.6-9-3.56c0-0.12,0.02-0.23,0.04-0.35C113.91,38.58,117.75,39.99,122.43,39.99z"
    />
    <linearGradient
      id="ssbjf_32_"
      gradientUnits="userSpaceOnUse"
      x1="52.4337"
      y1="44.6878"
      x2="83.4571"
      y2="90.0995"
    >
      <stop offset="0" style="stop-color:#D56369" />
      <stop offset="1" style="stop-color:#BC0201" />
    </linearGradient>
    <circle
      class="ssbjf-${id}-st36"
      cx="69.13"
      cy="69.13"
      r="29.83"
    />
    <radialGradient
      id="ssbjf_33_"
      cx="69.1349"
      cy="69.1349"
      r="24.2414"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.8101" style="stop-color:#FB8085" />
      <stop offset="1" style="stop-color:#FB8085;stop-opacity:0" />
    </radialGradient>
    <circle
      class="ssbjf-${id}-st37"
      cx="69.13"
      cy="69.13"
      r="24.24"
    />
    <g>
      <circle
        class="ssbjf-${id}-st22"
        cx="69.13"
        cy="69.13"
        r="10.89"
      />
      <path
        class="ssbjf-${id}-st23"
        d="M69.13,80.52c-6.28,0-11.39-5.11-11.39-11.39c0-6.28,5.11-11.39,11.39-11.39c6.28,0,11.39,5.11,11.39,11.39
              C80.52,75.41,75.41,80.52,69.13,80.52z M69.13,58.74c-5.73,0-10.39,4.66-10.39,10.39c0,5.73,4.66,10.39,10.39,10.39
              c5.73,0,10.39-4.66,10.39-10.39C79.53,63.4,74.87,58.74,69.13,58.74z"
      />
    </g>
  </g>
  <g class="SVG_alert" >
  <animate
  values="show;hide;hide;"
  dur="0.5s"
  attributeName="class"
  repeatCount="indefinite"
/>
<radialGradient
  id="ssbjf_34_"
  cx="69.1349"
  cy="69.1349"
  r="39.7613"
  gradientUnits="userSpaceOnUse"
>
  <stop offset="0.6704" style="stop-color:#FF0000;stop-opacity:0" />
  <stop offset="1" style="stop-color:#FF0001;stop-opacity:0.8" />
</radialGradient>
<circle
  class="ssbjf-${id}-st38"
  cx="69.13"
  cy="69.13"
  r="39.76"
/>
</g>
<g class="f2">
<animate
  values="hide;show;hide;"
  dur="0.5s"
  attributeName="class"
  repeatCount="indefinite"
/>
<radialGradient
  id="ssbjf_35_"
  cx="69.1349"
  cy="69.1349"
  r="53.2962"
  gradientUnits="userSpaceOnUse"
>
  <stop offset="0.6704" style="stop-color:#FF0000;stop-opacity:0" />
  <stop offset="1" style="stop-color:#FF0001;stop-opacity:0.5" />
</radialGradient>
<circle
  class="ssbjf-${id}-st39"
  cx="69.13"
  cy="69.13"
  r="53.3"
/>
</g>
<g class="f3">
<animate
  values="hide;hide;show;"
  dur="0.5s"
  attributeName="class"
  repeatCount="indefinite"
/>
<radialGradient
  id="ssbjf_36_"
  cx="69.1349"
  cy="69.1349"
  r="69.1349"
  gradientUnits="userSpaceOnUse"
>
  <stop offset="0.6704" style="stop-color:#FF0000;stop-opacity:0" />
  <stop offset="1" style="stop-color:#FF0001;stop-opacity:0.3" />
</radialGradient>
<circle
  class="ssbjf-${id}-st40"
  cx="69.13"
  cy="69.13"
  r="69.13"
/>
</g>
  </g>`;
    return text;
  }

  //加载数据
  loadData() {
    this.loadDeviceInfo();
  }

  //刷新内容
  refreshContent(data) {
    let { point } = data || {};
    if (point) {
      let { value = "" } = point || {};
      this.pointValue = value;
      this.refresh();
    }
  }

  refresh() {
    super.refresh();
    let { info = {}, pointValue } = this;
    let { id = "", height = 0, width = 0 } = info || {};
    let $container = $(`#${id}>.component`);
    let $svg = $container.find("svg");
    $svg.attr({ width, height });
    if (pointValue == 2) {
      // $svg.find(".SVG_ani").hide();
      // $svg.find(".SVG_sta").hide();
      $svg.find(".SVG_alert").show();
    } else {
      $svg.find(".SVG_alert").hide();
    }
  }

  event() {}
}

export default Text;

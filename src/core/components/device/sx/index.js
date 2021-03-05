import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 水箱
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
    <div class="bm-device-sx-com component"
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
    viewBox="0 0 188 150"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
    .sx-${id}-st0{fill:url(#sx_XMLID_${id}_20_);}
    .sx-${id}-st1{fill:url(#sx_XMLID_${id}_21_);}
    .sx-${id}-st2{}
    .sx-${id}-st3{display:inline;opacity:0.8;fill:#489BD3;enable-background:new    ;}
    .sx-${id}-st4{display:inline;opacity:0.8;fill:url(#sx_XMLID_${id}_22_);enable-background:new    ;}
    .sx-${id}-st5{display:inline;opacity:0.8;fill:url(#sx_XMLID_${id}_23_);enable-background:new    ;}
    .sx-${id}-st6{display:inline;opacity:0.8;fill:url(#sx_XMLID_${id}_24_);enable-background:new    ;}
    .sx-${id}-st7{display:inline;opacity:0.8;fill:url(#sx_XMLID_${id}_25_);enable-background:new    ;}
    .sx-${id}-st8{display:inline;opacity:0.8;fill:url(#sx_XMLID_${id}_26_);enable-background:new    ;}
    .sx-${id}-st9{display:inline;opacity:0.8;fill:url(#sx_XMLID_${id}_27_);enable-background:new    ;}
    .sx-${id}-st10{display:inline;opacity:0.8;fill:url(#sx_XMLID_${id}_28_);enable-background:new    ;}
    .sx-${id}-st11{display:inline;opacity:0.8;fill:url(#sx_XMLID_${id}_29_);enable-background:new    ;}
    .sx-${id}-st12{display:inline;opacity:0.8;fill:url(#sx_XMLID_${id}_30_);enable-background:new    ;}
    .sx-${id}-st13{display:inline;opacity:0.8;fill:url(#sx_XMLID_${id}_31_);enable-background:new    ;}
    .sx-${id}-st14{fill:#DFE3E8;}
    .sx-${id}-st15{fill:#C9CFD6;}
    .sx-${id}-st16{fill:url(#sx_XMLID_${id}_32_);}
    .sx-${id}-st17{fill:url(#sx_XMLID_${id}_33_);}
    .sx-${id}-st18{opacity:0.6;}
    .sx-${id}-st19{opacity:0.5;fill:url(#sx_XMLID_${id}_34_);enable-background:new    ;}
    .sx-${id}-st20{fill:url(#sx_XMLID_${id}_35_);}
    .sx-${id}-st21{opacity:0.8;fill:url(#sx_XMLID_${id}_36_);enable-background:new    ;}
    .sx-${id}-st22{fill:url(#sx_XMLID_${id}_37_);}
    .sx-${id}-st23{fill:url(#sx_XMLID_${id}_38_);}
    .sx-${id}-st24{opacity:0.5;fill:url(#sx_XMLID_${id}_39_);enable-background:new    ;}
    .sx-${id}-st25{fill:url(#sx_XMLID_${id}_40_);}
    .sx-${id}-st26{opacity:0.8;fill:url(#sx_XMLID_${id}_41_);enable-background:new    ;}
    .sx-${id}-st27{fill:url(#sx_XMLID_${id}_42_);}
    .sx-${id}-st28{fill:url(#sx_XMLID_${id}_43_);}
    .sx-${id}-st29{opacity:0.5;fill:url(#sx_XMLID_${id}_44_);enable-background:new    ;}
    .sx-${id}-st30{fill:url(#sx_XMLID_${id}_45_);}
    .sx-${id}-st31{opacity:0.8;fill:url(#sx_XMLID_${id}_46_);enable-background:new    ;}
    .sx-${id}-st32{fill:url(#sx_XMLID_${id}_47_);}
    .sx-${id}-st33{fill:url(#sx_XMLID_${id}_48_);}
    .sx-${id}-st34{opacity:0.5;fill:url(#sx_XMLID_${id}_49_);enable-background:new    ;}
    .sx-${id}-st35{fill:url(#sx_XMLID_${id}_50_);}
    .sx-${id}-st36{opacity:0.8;fill:url(#sx_XMLID_${id}_51_);enable-background:new    ;}
    .sx-${id}-st37{fill:url(#sx_XMLID_${id}_52_);}
    .sx-${id}-st38{fill:url(#sx_XMLID_${id}_53_);}
    .sx-${id}-st39{opacity:0.5;fill:url(#sx_XMLID_${id}_54_);enable-background:new    ;}
    .sx-${id}-st40{fill:url(#sx_XMLID_${id}_55_);}
    .sx-${id}-st41{opacity:0.8;fill:url(#sx_XMLID_${id}_56_);enable-background:new    ;}
    .sx-${id}-st42{fill:url(#sx_XMLID_${id}_57_);}
    .sx-${id}-st43{fill:url(#sx_XMLID_${id}_58_);}
    .sx-${id}-st44{opacity:0.5;fill:url(#sx_XMLID_${id}_59_);enable-background:new    ;}
    .sx-${id}-st45{fill:url(#sx_XMLID_${id}_60_);}
    .sx-${id}-st46{opacity:0.8;fill:url(#sx_XMLID_${id}_61_);enable-background:new    ;}
    .sx-${id}-st47{fill:url(#sx_XMLID_${id}_62_);}
    .sx-${id}-st48{fill:url(#sx_XMLID_${id}_63_);}
    .sx-${id}-st49{opacity:0.5;fill:url(#sx_XMLID_${id}_64_);enable-background:new    ;}
    .sx-${id}-st50{fill:url(#sx_XMLID_${id}_65_);}
    .sx-${id}-st51{opacity:0.8;fill:url(#sx_XMLID_${id}_66_);enable-background:new    ;}
    .sx-${id}-st52{fill:url(#sx_XMLID_${id}_67_);}
    .sx-${id}-st53{fill:url(#sx_XMLID_${id}_68_);}
    .sx-${id}-st54{fill:url(#sx_XMLID_${id}_69_);}
    .sx-${id}-st55{fill:url(#sx_XMLID_${id}_70_);}
    .sx-${id}-st56{opacity:0.5;fill:url(#sx_XMLID_${id}_71_);enable-background:new    ;}
    .sx-${id}-st57{fill:url(#sx_XMLID_${id}_72_);}
    .sx-${id}-st58{opacity:0.8;fill:url(#sx_XMLID_${id}_73_);enable-background:new    ;}
    .sx-${id}-st59{opacity:0.5;fill:url(#sx_XMLID_${id}_74_);enable-background:new    ;}
    .sx-${id}-st60{fill:url(#sx_XMLID_${id}_75_);}
    .sx-${id}-st61{opacity:0.8;fill:url(#sx_XMLID_${id}_76_);enable-background:new    ;}
    .sx-${id}-st62{fill:url(#sx_XMLID_${id}_77_);}
    .sx-${id}-st63{fill:url(#sx_XMLID_${id}_78_);}
    .sx-${id}-st64{fill:url(#sx_XMLID_${id}_79_);}
    .sx-${id}-st65{fill:url(#sx_XMLID_${id}_80_);}
    .sx-${id}-st66{opacity:0.4;}
    .sx-${id}-st67{fill:#777C82;}
    .sx-${id}-st68{fill:url(#sx_XMLID_${id}_81_);}
    .sx-${id}-st69{fill:url(#sx_XMLID_${id}_82_);}
    .sx-${id}-st70{fill:url(#sx_XMLID_${id}_83_);}
    .sx-${id}-st71{fill:url(#sx_XMLID_${id}_84_);}
    .sx-${id}-st72{fill:url(#sx_XMLID_${id}_85_);}
    .sx-${id}-st73{fill:url(#sx_XMLID_${id}_86_);}
    .sx-${id}-st74{fill:url(#sx_XMLID_${id}_87_);}
    .sx-${id}-st75{fill:url(#sx_XMLID_${id}_88_);}
    .sx-${id}-st76{fill:url(#sx_XMLID_${id}_89_);}
    .sx-${id}-st77{fill:url(#sx_XMLID_${id}_90_);}
    .sx-${id}-st78{fill:url(#sx_XMLID_${id}_91_);}
    .sx-${id}-st79{fill:url(#sx_XMLID_${id}_92_);}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {}, pointValue } = this;
    let { id = "" } = info || {};
    let text = `<g id="CC2">
    <linearGradient
      id="sx_XMLID_${id}_20_"
      gradientUnits="userSpaceOnUse"
      x1="93.6"
      y1="26.5"
      x2="93.6"
      y2="131.9"
      gradientTransform="matrix(1 0 0 -1 0 152)"
    >
      <stop offset="0" style="stop-color:#585F65" />
      <stop offset="1" style="stop-color:#2A2F35" />
    </linearGradient>
    <polygon
      id="sx_XMLID_${id}_1887_"
      class="sx-${id}-st0"
      points="162,20.1 25.2,20.1 25.2,119.5 101.5,125.5 162,119.5 	"
    />

    <linearGradient
      id="sx_XMLID_${id}_21_"
      gradientUnits="userSpaceOnUse"
      x1="93.6"
      y1="2.9716"
      x2="93.6"
      y2="32.5362"
      gradientTransform="matrix(1 0 0 -1 0 152)"
    >
      <stop offset="0" style="stop-color:#585F65" />
      <stop offset="1" style="stop-color:#2A2F35" />
    </linearGradient>
    <rect
      id="sx_XMLID_${id}_1886_"
      x="25.2"
      y="119.5"
      class="sx-${id}-st1"
      width="136.8"
      height="29.6"
    />
  </g>`;
    if (info.content >= (info.maxContent / 11) * 10) {
      text += `
  <g
    id="_x31_0"
    class="sx-${id}-st2"
  >
    <rect
      id="sx_XMLID_${id}_1888_"
      x="40.4"
      y="10.9"
      class="sx-${id}-st3"
      width="127.6"
      height="27.5"
    />

    <linearGradient
      id="sx_XMLID_${id}_22_"
      gradientUnits="userSpaceOnUse"
      x1="104.2"
      y1="3.2"
      x2="104.2"
      y2="113.5"
      gradientTransform="matrix(1 0 0 -1 0 152)"
    >
      <stop offset="0" style="stop-color:#347DC6" />
      <stop offset="1" style="stop-color:#024791" />
    </linearGradient>
    <rect
      id="sx_XMLID_${id}_1889_"
      x="40.4"
      y="38.5"
      class="sx-${id}-st4"
      width="127.6"
      height="110.3"
    />
  </g>`;
    } else if (info.content >= (info.maxContent / 11) * 9) {
      text += `<g
    id="_x39_"
    class="sx-${id}-st2"
  >
    <rect
      id="sx_XMLID_${id}_2_"
      x="40.4"
      y="21.9"
      class="sx-${id}-st3"
      width="127.6"
      height="27.5"
    />

    <linearGradient
      id="sx_XMLID_${id}_23_"
      gradientUnits="userSpaceOnUse"
      x1="104.2"
      y1="3.2"
      x2="104.2"
      y2="102.5"
      gradientTransform="matrix(1 0 0 -1 0 152)"
    >
      <stop offset="0" style="stop-color:#347DC6" />
      <stop offset="1" style="stop-color:#024791" />
    </linearGradient>
    <rect
      id="sx_XMLID_${id}_1_"
      x="40.4"
      y="49.5"
      class="sx-${id}-st5"
      width="127.6"
      height="99.3"
    />
  </g>`;
    } else if (info.content >= (info.maxContent / 11) * 8) {
      text += `<g
    id="_x38_"
    class="sx-${id}-st2"
  >
    <rect
      id="sx_XMLID_${id}_4_"
      x="40.4"
      y="32.9"
      class="sx-${id}-st3"
      width="127.6"
      height="27.5"
    />

    <linearGradient
      id="sx_XMLID_${id}_24_"
      gradientUnits="userSpaceOnUse"
      x1="104.2"
      y1="3.2"
      x2="104.2"
      y2="91.5"
      gradientTransform="matrix(1 0 0 -1 0 152)"
    >
      <stop offset="0" style="stop-color:#347DC6" />
      <stop offset="1" style="stop-color:#024791" />
    </linearGradient>
    <rect
      id="sx_XMLID_${id}_3_"
      x="40.4"
      y="60.5"
      class="sx-${id}-st6"
      width="127.6"
      height="88.3"
    />
  </g>`;
    } else if (info.content >= (info.maxContent / 11) * 7) {
      text += `
  <g
    id="_x37_"
    class="sx-${id}-st2"
  >
    <rect
      id="sx_XMLID_${id}_6_"
      x="40.4"
      y="43.9"
      class="sx-${id}-st3"
      width="127.6"
      height="27.5"
    />

    <linearGradient
      id="sx_XMLID_${id}_25_"
      gradientUnits="userSpaceOnUse"
      x1="104.2"
      y1="3.2"
      x2="104.2"
      y2="80.5"
      gradientTransform="matrix(1 0 0 -1 0 152)"
    >
      <stop offset="0" style="stop-color:#347DC6" />
      <stop offset="1" style="stop-color:#024791" />
    </linearGradient>
    <rect
      id="sx_XMLID_${id}_5_"
      x="40.4"
      y="71.5"
      class="sx-${id}-st7"
      width="127.6"
      height="77.3"
    />
  </g>`;
    } else if (info.content >= (info.maxContent / 11) * 6) {
      text += `
  <g
    id="_x36_"
    class="sx-${id}-st2"
  >
    <rect
      id="sx_XMLID_${id}_8_"
      x="40.4"
      y="54.9"
      class="sx-${id}-st3"
      width="127.6"
      height="27.5"
    />

    <linearGradient
      id="sx_XMLID_${id}_26_"
      gradientUnits="userSpaceOnUse"
      x1="104.2"
      y1="3.2"
      x2="104.2"
      y2="69.5"
      gradientTransform="matrix(1 0 0 -1 0 152)"
    >
      <stop offset="0" style="stop-color:#347DC6" />
      <stop offset="1" style="stop-color:#024791" />
    </linearGradient>
    <rect
      id="sx_XMLID_${id}_7_"
      x="40.4"
      y="82.5"
      class="sx-${id}-st8"
      width="127.6"
      height="66.3"
    />
  </g>`;
    } else if (info.content >= (info.maxContent / 11) * 5) {
      text += `
  <g
    id="_x35_"
    class="sx-${id}-st2"
  >
    <rect
      id="sx_XMLID_${id}_10_"
      x="40.4"
      y="65.9"
      class="sx-${id}-st3"
      width="127.6"
      height="27.5"
    />

    <linearGradient
      id="sx_XMLID_${id}_27_"
      gradientUnits="userSpaceOnUse"
      x1="104.2"
      y1="3.2"
      x2="104.2"
      y2="58.5"
      gradientTransform="matrix(1 0 0 -1 0 152)"
    >
      <stop offset="0" style="stop-color:#347DC6" />
      <stop offset="1" style="stop-color:#024791" />
    </linearGradient>
    <rect
      id="sx_XMLID_${id}_9_"
      x="40.4"
      y="93.5"
      class="sx-${id}-st9"
      width="127.6"
      height="55.3"
    />
  </g>`;
    } else if (info.content >= (info.maxContent / 11) * 4) {
      text += `
  <g
    id="_x34_"
    class="sx-${id}-st2"
  >
    <rect
      id="sx_XMLID_${id}_12_"
      x="40.4"
      y="76.9"
      class="sx-${id}-st3"
      width="127.6"
      height="27.5"
    />

    <linearGradient
      id="sx_XMLID_${id}_28_"
      gradientUnits="userSpaceOnUse"
      x1="104.2"
      y1="3.2"
      x2="104.2"
      y2="47.5"
      gradientTransform="matrix(1 0 0 -1 0 152)"
    >
      <stop offset="0" style="stop-color:#347DC6" />
      <stop offset="1" style="stop-color:#024791" />
    </linearGradient>
    <rect
      id="sx_XMLID_${id}_11_"
      x="40.4"
      y="104.5"
      class="sx-${id}-st10"
      width="127.6"
      height="44.3"
    />
  </g>`;
    } else if (info.content >= (info.maxContent / 11) * 3) {
      text += `
  <g
    id="_x33_"
    class="sx-${id}-st2"
  >
    <rect
      id="sx_XMLID_${id}_14_"
      x="40.4"
      y="87.9"
      class="sx-${id}-st3"
      width="127.6"
      height="27.5"
    />

    <linearGradient
      id="sx_XMLID_${id}_29_"
      gradientUnits="userSpaceOnUse"
      x1="104.2"
      y1="3.2"
      x2="104.2"
      y2="36.5"
      gradientTransform="matrix(1 0 0 -1 0 152)"
    >
      <stop offset="0" style="stop-color:#347DC6" />
      <stop offset="1" style="stop-color:#024791" />
    </linearGradient>
    <rect
      id="sx_XMLID_${id}_13_"
      x="40.4"
      y="115.5"
      class="sx-${id}-st11"
      width="127.6"
      height="33.3"
    />
  </g>`;
    } else if (info.content >= (info.maxContent / 11) * 2) {
      text += `
  <g
    id="_x32_"
    class="sx-${id}-st2"
  >
    <rect
      id="sx_XMLID_${id}_16_"
      x="40.4"
      y="98.9"
      class="sx-${id}-st3"
      width="127.6"
      height="27.5"
    />

    <linearGradient
      id="sx_XMLID_${id}_30_"
      gradientUnits="userSpaceOnUse"
      x1="104.2"
      y1="3.2"
      x2="104.2"
      y2="25.5"
      gradientTransform="matrix(1 0 0 -1 0 152)"
    >
      <stop offset="0" style="stop-color:#347DC6" />
      <stop offset="1" style="stop-color:#024791" />
    </linearGradient>
    <rect
      id="sx_XMLID_${id}_15_"
      x="40.4"
      y="126.5"
      class="sx-${id}-st12"
      width="127.6"
      height="22.3"
    />
  </g>`;
    } else if (info.content >= (info.maxContent / 11) * 1) {
      text += `
  <g
    id="_x31_"
    class="sx-${id}-st2"
  >
    <rect
      id="sx_XMLID_${id}_18_"
      x="40.4"
      y="109.9"
      class="sx-${id}-st3"
      width="127.6"
      height="27.5"
    />

    <linearGradient
      id="sx_XMLID_${id}_31_"
      gradientUnits="userSpaceOnUse"
      x1="104.2"
      y1="3.2"
      x2="104.2"
      y2="14.5"
      gradientTransform="matrix(1 0 0 -1 0 152)"
    >
      <stop offset="0" style="stop-color:#347DC6" />
      <stop offset="1" style="stop-color:#024791" />
    </linearGradient>
    <rect
      id="sx_XMLID_${id}_17_"
      x="40.4"
      y="137.5"
      class="sx-${id}-st13"
      width="127.6"
      height="11.3"
    />
  </g>`;
    } else if (info.content >= 0) {
      text += `
  <g id="_x30_" ></g>`;
    }
    text += ` <g id="CC1">
    <g id="sx_XMLID_${id}_2057_">
      <rect
        id="sx_XMLID_${id}_2069_"
        y="27"
        class="sx-${id}-st14"
        width="47"
        height="47"
      />
      <polygon
        id="sx_XMLID_${id}_2068_"
        class="sx-${id}-st15"
        points="46.5,27 46.5,73.5 0,73.5 0,74 47,74 47,27 		"
      />

      <linearGradient
        id="sx_XMLID_${id}_32_"
        gradientUnits="userSpaceOnUse"
        x1="23.5"
        y1="123"
        x2="23.5"
        y2="80"
        gradientTransform="matrix(1 0 0 -1 0 152)"
      >
        <stop offset="0" style="stop-color:#9DA7B2" />
        <stop offset="1" style="stop-color:#FFFFFF" />
      </linearGradient>
      <path
        id="sx_XMLID_${id}_2065_"
        class="sx-${id}-st16"
        d="M42.5,72h-38C3.1,72,2,70.9,2,69.5v-38C2,30.1,3.1,29,4.5,29h38c1.4,0,2.5,1.1,2.5,2.5v38
  C45,70.9,43.9,72,42.5,72z M4.5,30.1c-0.8,0-1.4,0.6-1.4,1.4v38c0,0.8,0.6,1.4,1.4,1.4h38c0.8,0,1.4-0.6,1.4-1.4v-38
  c0-0.8-0.6-1.4-1.4-1.4H4.5z"
      />

      <linearGradient
        id="sx_XMLID_${id}_33_"
        gradientUnits="userSpaceOnUse"
        x1="23.5"
        y1="80.5"
        x2="23.5"
        y2="122.454"
        gradientTransform="matrix(1 0 0 -1 0 152)"
      >
        <stop offset="0" style="stop-color:#9DA7B2" />
        <stop offset="1" style="stop-color:#FFFFFF" />
      </linearGradient>
      <path
        id="sx_XMLID_${id}_2062_"
        class="sx-${id}-st17"
        d="M42.5,29.5h-38c-1.1,0-2,0.9-2,2v38c0,1.1,0.9,2,2,2h38c1.1,0,2-0.9,2-2v-38
  C44.5,30.4,43.6,29.5,42.5,29.5z M43.9,69.5c0,0.8-0.6,1.4-1.4,1.4h-38c-0.8,0-1.4-0.6-1.4-1.4v-38c0-0.8,0.6-1.4,1.4-1.4h38
  c0.8,0,1.4,0.6,1.4,1.4V69.5z"
      />
      <g id="sx_XMLID_${id}_2058_" class="sx-${id}-st18">
        <linearGradient
          id="sx_XMLID_${id}_34_"
          gradientUnits="userSpaceOnUse"
          x1="3.7"
          y1="101.5"
          x2="43.364"
          y2="101.5"
          gradientTransform="matrix(1 0 0 -1 0 152)"
        >
          <stop offset="0" style="stop-color:#7F8595" />
          <stop offset="1" style="stop-color:#D7D9E6" />
        </linearGradient>
        <circle
          id="sx_XMLID_${id}_2061_"
          class="sx-${id}-st19"
          cx="23.5"
          cy="50.5"
          r="19.8"
        />

        <radialGradient
          id="sx_XMLID_${id}_35_"
          cx="36.4823"
          cy="112.8441"
          r="15.2021"
          gradientTransform="matrix(1 0 0 -1 0 152)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0" />
        </radialGradient>
        <circle
          id="sx_XMLID_${id}_2060_"
          class="sx-${id}-st20"
          cx="23.5"
          cy="50.5"
          r="19.8"
        />

        <linearGradient
          id="sx_XMLID_${id}_36_"
          gradientUnits="userSpaceOnUse"
          x1="23.5"
          y1="81.6525"
          x2="23.5"
          y2="121.3166"
          gradientTransform="matrix(1 0 0 -1 0 152)"
        >
          <stop offset="0" style="stop-color:#696B74" />
          <stop offset="0.5538" style="stop-color:#696B74;stop-opacity:0" />
        </linearGradient>
        <circle
          id="sx_XMLID_${id}_2059_"
          class="sx-${id}-st21"
          cx="23.5"
          cy="50.5"
          r="19.8"
        />
      </g>
    </g>
    <g id="sx_XMLID_${id}_2044_">
      <rect
        id="sx_XMLID_${id}_2056_"
        y="27"
        class="sx-${id}-st14"
        width="47"
        height="47"
      />
      <polygon
        id="sx_XMLID_${id}_2055_"
        class="sx-${id}-st15"
        points="46.5,27 46.5,73.5 0,73.5 0,74 47,74 47,27 		"
      />

      <linearGradient
        id="sx_XMLID_${id}_37_"
        gradientUnits="userSpaceOnUse"
        x1="23.5"
        y1="123"
        x2="23.5"
        y2="80"
        gradientTransform="matrix(1 0 0 -1 0 152)"
      >
        <stop offset="0" style="stop-color:#9DA7B2" />
        <stop offset="1" style="stop-color:#FFFFFF" />
      </linearGradient>
      <path
        id="sx_XMLID_${id}_2052_"
        class="sx-${id}-st22"
        d="M42.5,72h-38C3.1,72,2,70.9,2,69.5v-38C2,30.1,3.1,29,4.5,29h38c1.4,0,2.5,1.1,2.5,2.5v38
  C45,70.9,43.9,72,42.5,72z M4.5,30.1c-0.8,0-1.4,0.6-1.4,1.4v38c0,0.8,0.6,1.4,1.4,1.4h38c0.8,0,1.4-0.6,1.4-1.4v-38
  c0-0.8-0.6-1.4-1.4-1.4H4.5z"
      />

      <linearGradient
        id="sx_XMLID_${id}_38_"
        gradientUnits="userSpaceOnUse"
        x1="23.5"
        y1="80.5"
        x2="23.5"
        y2="122.454"
        gradientTransform="matrix(1 0 0 -1 0 152)"
      >
        <stop offset="0" style="stop-color:#9DA7B2" />
        <stop offset="1" style="stop-color:#FFFFFF" />
      </linearGradient>
      <path
        id="sx_XMLID_${id}_2049_"
        class="sx-${id}-st23"
        d="M42.5,29.5h-38c-1.1,0-2,0.9-2,2v38c0,1.1,0.9,2,2,2h38c1.1,0,2-0.9,2-2v-38
  C44.5,30.4,43.6,29.5,42.5,29.5z M43.9,69.5c0,0.8-0.6,1.4-1.4,1.4h-38c-0.8,0-1.4-0.6-1.4-1.4v-38c0-0.8,0.6-1.4,1.4-1.4h38
  c0.8,0,1.4,0.6,1.4,1.4V69.5z"
      />
      <g id="sx_XMLID_${id}_2045_" class="sx-${id}-st18">
        <linearGradient
          id="sx_XMLID_${id}_39_"
          gradientUnits="userSpaceOnUse"
          x1="3.7"
          y1="101.5"
          x2="43.364"
          y2="101.5"
          gradientTransform="matrix(1 0 0 -1 0 152)"
        >
          <stop offset="0" style="stop-color:#7F8595" />
          <stop offset="1" style="stop-color:#D7D9E6" />
        </linearGradient>
        <circle
          id="sx_XMLID_${id}_2048_"
          class="sx-${id}-st24"
          cx="23.5"
          cy="50.5"
          r="19.8"
        />

        <radialGradient
          id="sx_XMLID_${id}_40_"
          cx="36.4823"
          cy="112.8441"
          r="15.2021"
          gradientTransform="matrix(1 0 0 -1 0 152)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0" />
        </radialGradient>
        <circle
          id="sx_XMLID_${id}_2047_"
          class="sx-${id}-st25"
          cx="23.5"
          cy="50.5"
          r="19.8"
        />

        <linearGradient
          id="sx_XMLID_${id}_41_"
          gradientUnits="userSpaceOnUse"
          x1="23.5"
          y1="81.6525"
          x2="23.5"
          y2="121.3166"
          gradientTransform="matrix(1 0 0 -1 0 152)"
        >
          <stop offset="0" style="stop-color:#696B74" />
          <stop offset="0.5538" style="stop-color:#696B74;stop-opacity:0" />
        </linearGradient>
        <circle
          id="sx_XMLID_${id}_2046_"
          class="sx-${id}-st26"
          cx="23.5"
          cy="50.5"
          r="19.8"
        />
      </g>
    </g>
    <g id="sx_XMLID_${id}_2005_">
      <rect
        id="sx_XMLID_${id}_2017_"
        x="140.5"
        y="27"
        class="sx-${id}-st14"
        width="47"
        height="47"
      />
      <polygon
        id="sx_XMLID_${id}_2016_"
        class="sx-${id}-st15"
        points="186.9,27 186.9,73.5 140.5,73.5 140.5,74 187.5,74 187.5,27 		"
      />

      <linearGradient
        id="sx_XMLID_${id}_42_"
        gradientUnits="userSpaceOnUse"
        x1="164"
        y1="123"
        x2="164"
        y2="80"
        gradientTransform="matrix(1 0 0 -1 0 152)"
      >
        <stop offset="0" style="stop-color:#9DA7B2" />
        <stop offset="1" style="stop-color:#FFFFFF" />
      </linearGradient>
      <path
        id="sx_XMLID_${id}_2013_"
        class="sx-${id}-st27"
        d="M183,72h-38c-1.4,0-2.5-1.1-2.5-2.5v-38c0-1.4,1.1-2.5,2.5-2.5h38c1.4,0,2.5,1.1,2.5,2.5
  v38C185.5,70.9,184.4,72,183,72z M144.9,30.1c-0.8,0-1.4,0.6-1.4,1.4v38c0,0.8,0.6,1.4,1.4,1.4h38c0.8,0,1.4-0.6,1.4-1.4v-38
  c0-0.8-0.6-1.4-1.4-1.4H144.9z"
      />

      <linearGradient
        id="sx_XMLID_${id}_43_"
        gradientUnits="userSpaceOnUse"
        x1="164"
        y1="80.5"
        x2="164"
        y2="122.4541"
        gradientTransform="matrix(1 0 0 -1 0 152)"
      >
        <stop offset="0" style="stop-color:#9DA7B2" />
        <stop offset="1" style="stop-color:#FFFFFF" />
      </linearGradient>
      <path
        id="sx_XMLID_${id}_2010_"
        class="sx-${id}-st28"
        d="M183,29.5h-38c-1.1,0-2,0.9-2,2v38c0,1.1,0.9,2,2,2h38c1.1,0,2-0.9,2-2v-38
  C184.9,30.4,184.1,29.5,183,29.5z M184.4,69.5c0,0.8-0.6,1.4-1.4,1.4h-38c-0.8,0-1.4-0.6-1.4-1.4v-38c0-0.8,0.6-1.4,1.4-1.4h38
  c0.8,0,1.4,0.6,1.4,1.4V69.5z"
      />
      <g id="sx_XMLID_${id}_2006_" class="sx-${id}-st18">
        <linearGradient
          id="sx_XMLID_${id}_44_"
          gradientUnits="userSpaceOnUse"
          x1="144.127"
          y1="101.5"
          x2="183.7911"
          y2="101.5"
          gradientTransform="matrix(1 0 0 -1 0 152)"
        >
          <stop offset="0" style="stop-color:#7F8595" />
          <stop offset="1" style="stop-color:#D7D9E6" />
        </linearGradient>
        <circle
          id="sx_XMLID_${id}_2009_"
          class="sx-${id}-st29"
          cx="164"
          cy="50.5"
          r="19.8"
        />

        <radialGradient
          id="sx_XMLID_${id}_45_"
          cx="176.9413"
          cy="112.8441"
          r="15.2021"
          gradientTransform="matrix(1 0 0 -1 0 152)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0" />
        </radialGradient>
        <circle
          id="sx_XMLID_${id}_2008_"
          class="sx-${id}-st30"
          cx="164"
          cy="50.5"
          r="19.8"
        />

        <linearGradient
          id="sx_XMLID_${id}_46_"
          gradientUnits="userSpaceOnUse"
          x1="164"
          y1="81.6526"
          x2="164"
          y2="121.3166"
          gradientTransform="matrix(1 0 0 -1 0 152)"
        >
          <stop offset="0" style="stop-color:#696B74" />
          <stop offset="0.5538" style="stop-color:#696B74;stop-opacity:0" />
        </linearGradient>
        <circle
          id="sx_XMLID_${id}_2007_"
          class="sx-${id}-st31"
          cx="164"
          cy="50.5"
          r="19.8"
        />
      </g>
    </g>
    <g id="sx_XMLID_${id}_1992_">
      <rect
        id="sx_XMLID_${id}_2004_"
        y="74"
        class="sx-${id}-st14"
        width="47"
        height="47"
      />
      <polygon
        id="sx_XMLID_${id}_2003_"
        class="sx-${id}-st15"
        points="46.5,74 46.5,120.5 0,120.5 0,121 47,121 47,74 		"
      />

      <linearGradient
        id="sx_XMLID_${id}_47_"
        gradientUnits="userSpaceOnUse"
        x1="23.5"
        y1="76"
        x2="23.5"
        y2="33"
        gradientTransform="matrix(1 0 0 -1 0 152)"
      >
        <stop offset="0" style="stop-color:#9DA7B2" />
        <stop offset="1" style="stop-color:#FFFFFF" />
      </linearGradient>
      <path
        id="sx_XMLID_${id}_2000_"
        class="sx-${id}-st32"
        d="M42.5,119h-38c-1.4,0-2.5-1.1-2.5-2.5v-38C2,77.1,3.1,76,4.5,76h38c1.4,0,2.5,1.1,2.5,2.5
  v38C45,117.9,43.9,119,42.5,119z M4.5,77.1c-0.8,0-1.4,0.6-1.4,1.4v38c0,0.8,0.6,1.4,1.4,1.4h38c0.8,0,1.4-0.6,1.4-1.4v-38
  c0-0.8-0.6-1.4-1.4-1.4H4.5z"
      />

      <linearGradient
        id="sx_XMLID_${id}_48_"
        gradientUnits="userSpaceOnUse"
        x1="23.5"
        y1="33.5"
        x2="23.5"
        y2="75.454"
        gradientTransform="matrix(1 0 0 -1 0 152)"
      >
        <stop offset="0" style="stop-color:#9DA7B2" />
        <stop offset="1" style="stop-color:#FFFFFF" />
      </linearGradient>
      <path
        id="sx_XMLID_${id}_1997_"
        class="sx-${id}-st33"
        d="M42.5,76.5h-38c-1.1,0-2,0.9-2,2v38c0,1.1,0.9,2,2,2h38c1.1,0,2-0.9,2-2v-38
  C44.5,77.4,43.6,76.5,42.5,76.5z M43.9,116.5c0,0.8-0.6,1.4-1.4,1.4h-38c-0.8,0-1.4-0.6-1.4-1.4v-38c0-0.8,0.6-1.4,1.4-1.4h38
  c0.8,0,1.4,0.6,1.4,1.4V116.5z"
      />
      <g id="sx_XMLID_${id}_1993_" class="sx-${id}-st18">
        <linearGradient
          id="sx_XMLID_${id}_49_"
          gradientUnits="userSpaceOnUse"
          x1="3.7"
          y1="54.5"
          x2="43.364"
          y2="54.5"
          gradientTransform="matrix(1 0 0 -1 0 152)"
        >
          <stop offset="0" style="stop-color:#7F8595" />
          <stop offset="1" style="stop-color:#D7D9E6" />
        </linearGradient>
        <circle
          id="sx_XMLID_${id}_1996_"
          class="sx-${id}-st34"
          cx="23.5"
          cy="97.5"
          r="19.8"
        />

        <radialGradient
          id="sx_XMLID_${id}_50_"
          cx="36.4823"
          cy="65.8441"
          r="15.2021"
          gradientTransform="matrix(1 0 0 -1 0 152)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0" />
        </radialGradient>
        <circle
          id="sx_XMLID_${id}_1995_"
          class="sx-${id}-st35"
          cx="23.5"
          cy="97.5"
          r="19.8"
        />

        <linearGradient
          id="sx_XMLID_${id}_51_"
          gradientUnits="userSpaceOnUse"
          x1="23.5"
          y1="34.6526"
          x2="23.5"
          y2="74.3166"
          gradientTransform="matrix(1 0 0 -1 0 152)"
        >
          <stop offset="0" style="stop-color:#696B74" />
          <stop offset="0.5538" style="stop-color:#696B74;stop-opacity:0" />
        </linearGradient>
        <circle
          id="sx_XMLID_${id}_1994_"
          class="sx-${id}-st36"
          cx="23.5"
          cy="97.5"
          r="19.8"
        />
      </g>
    </g>
    <g id="sx_XMLID_${id}_1979_">
      <rect
        id="sx_XMLID_${id}_1991_"
        y="74"
        class="sx-${id}-st14"
        width="47"
        height="47"
      />
      <polygon
        id="sx_XMLID_${id}_1990_"
        class="sx-${id}-st15"
        points="46.5,74 46.5,120.5 0,120.5 0,121 47,121 47,74 		"
      />

      <linearGradient
        id="sx_XMLID_${id}_52_"
        gradientUnits="userSpaceOnUse"
        x1="23.5"
        y1="76"
        x2="23.5"
        y2="33"
        gradientTransform="matrix(1 0 0 -1 0 152)"
      >
        <stop offset="0" style="stop-color:#9DA7B2" />
        <stop offset="1" style="stop-color:#FFFFFF" />
      </linearGradient>
      <path
        id="sx_XMLID_${id}_1987_"
        class="sx-${id}-st37"
        d="M42.5,119h-38c-1.4,0-2.5-1.1-2.5-2.5v-38C2,77.1,3.1,76,4.5,76h38c1.4,0,2.5,1.1,2.5,2.5
  v38C45,117.9,43.9,119,42.5,119z M4.5,77.1c-0.8,0-1.4,0.6-1.4,1.4v38c0,0.8,0.6,1.4,1.4,1.4h38c0.8,0,1.4-0.6,1.4-1.4v-38
  c0-0.8-0.6-1.4-1.4-1.4H4.5z"
      />

      <linearGradient
        id="sx_XMLID_${id}_53_"
        gradientUnits="userSpaceOnUse"
        x1="23.5"
        y1="33.5"
        x2="23.5"
        y2="75.454"
        gradientTransform="matrix(1 0 0 -1 0 152)"
      >
        <stop offset="0" style="stop-color:#9DA7B2" />
        <stop offset="1" style="stop-color:#FFFFFF" />
      </linearGradient>
      <path
        id="sx_XMLID_${id}_1984_"
        class="sx-${id}-st38"
        d="M42.5,76.5h-38c-1.1,0-2,0.9-2,2v38c0,1.1,0.9,2,2,2h38c1.1,0,2-0.9,2-2v-38
  C44.5,77.4,43.6,76.5,42.5,76.5z M43.9,116.5c0,0.8-0.6,1.4-1.4,1.4h-38c-0.8,0-1.4-0.6-1.4-1.4v-38c0-0.8,0.6-1.4,1.4-1.4h38
  c0.8,0,1.4,0.6,1.4,1.4V116.5z"
      />
      <g id="sx_XMLID_${id}_1980_" class="sx-${id}-st18">
        <linearGradient
          id="sx_XMLID_${id}_54_"
          gradientUnits="userSpaceOnUse"
          x1="3.7"
          y1="54.5"
          x2="43.364"
          y2="54.5"
          gradientTransform="matrix(1 0 0 -1 0 152)"
        >
          <stop offset="0" style="stop-color:#7F8595" />
          <stop offset="1" style="stop-color:#D7D9E6" />
        </linearGradient>
        <circle
          id="sx_XMLID_${id}_1983_"
          class="sx-${id}-st39"
          cx="23.5"
          cy="97.5"
          r="19.8"
        />

        <radialGradient
          id="sx_XMLID_${id}_55_"
          cx="36.4823"
          cy="65.8441"
          r="15.2021"
          gradientTransform="matrix(1 0 0 -1 0 152)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0" />
        </radialGradient>
        <circle
          id="sx_XMLID_${id}_1982_"
          class="sx-${id}-st40"
          cx="23.5"
          cy="97.5"
          r="19.8"
        />

        <linearGradient
          id="sx_XMLID_${id}_56_"
          gradientUnits="userSpaceOnUse"
          x1="23.5"
          y1="34.6526"
          x2="23.5"
          y2="74.3166"
          gradientTransform="matrix(1 0 0 -1 0 152)"
        >
          <stop offset="0" style="stop-color:#696B74" />
          <stop offset="0.5538" style="stop-color:#696B74;stop-opacity:0" />
        </linearGradient>
        <circle
          id="sx_XMLID_${id}_1981_"
          class="sx-${id}-st41"
          cx="23.5"
          cy="97.5"
          r="19.8"
        />
      </g>
    </g>
    <g id="sx_XMLID_${id}_1940_">
      <rect
        id="sx_XMLID_${id}_1952_"
        x="140.5"
        y="74"
        class="sx-${id}-st14"
        width="47"
        height="47"
      />
      <polygon
        id="sx_XMLID_${id}_1951_"
        class="sx-${id}-st15"
        points="186.9,74 186.9,120.5 140.5,120.5 140.5,121 187.5,121 187.5,74 		"
      />

      <linearGradient
        id="sx_XMLID_${id}_57_"
        gradientUnits="userSpaceOnUse"
        x1="164"
        y1="76"
        x2="164"
        y2="33"
        gradientTransform="matrix(1 0 0 -1 0 152)"
      >
        <stop offset="0" style="stop-color:#9DA7B2" />
        <stop offset="1" style="stop-color:#FFFFFF" />
      </linearGradient>
      <path
        id="sx_XMLID_${id}_1948_"
        class="sx-${id}-st42"
        d="M183,119h-38c-1.4,0-2.5-1.1-2.5-2.5v-38c0-1.4,1.1-2.5,2.5-2.5h38c1.4,0,2.5,1.1,2.5,2.5
  v38C185.5,117.9,184.4,119,183,119z M144.9,77.1c-0.8,0-1.4,0.6-1.4,1.4v38c0,0.8,0.6,1.4,1.4,1.4h38c0.8,0,1.4-0.6,1.4-1.4v-38
  c0-0.8-0.6-1.4-1.4-1.4H144.9z"
      />

      <linearGradient
        id="sx_XMLID_${id}_58_"
        gradientUnits="userSpaceOnUse"
        x1="164"
        y1="33.5"
        x2="164"
        y2="75.4541"
        gradientTransform="matrix(1 0 0 -1 0 152)"
      >
        <stop offset="0" style="stop-color:#9DA7B2" />
        <stop offset="1" style="stop-color:#FFFFFF" />
      </linearGradient>
      <path
        id="sx_XMLID_${id}_1945_"
        class="sx-${id}-st43"
        d="M183,76.5h-38c-1.1,0-2,0.9-2,2v38c0,1.1,0.9,2,2,2h38c1.1,0,2-0.9,2-2v-38
  C184.9,77.4,184.1,76.5,183,76.5z M184.4,116.5c0,0.8-0.6,1.4-1.4,1.4h-38c-0.8,0-1.4-0.6-1.4-1.4v-38c0-0.8,0.6-1.4,1.4-1.4h38
  c0.8,0,1.4,0.6,1.4,1.4V116.5z"
      />
      <g id="sx_XMLID_${id}_1941_" class="sx-${id}-st18">
        <linearGradient
          id="sx_XMLID_${id}_59_"
          gradientUnits="userSpaceOnUse"
          x1="144.127"
          y1="54.5"
          x2="183.7911"
          y2="54.5"
          gradientTransform="matrix(1 0 0 -1 0 152)"
        >
          <stop offset="0" style="stop-color:#7F8595" />
          <stop offset="1" style="stop-color:#D7D9E6" />
        </linearGradient>
        <circle
          id="sx_XMLID_${id}_1944_"
          class="sx-${id}-st44"
          cx="164"
          cy="97.5"
          r="19.8"
        />

        <radialGradient
          id="sx_XMLID_${id}_60_"
          cx="176.9413"
          cy="65.8441"
          r="15.2021"
          gradientTransform="matrix(1 0 0 -1 0 152)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0" />
        </radialGradient>
        <circle
          id="sx_XMLID_${id}_1943_"
          class="sx-${id}-st45"
          cx="164"
          cy="97.5"
          r="19.8"
        />

        <linearGradient
          id="sx_XMLID_${id}_61_"
          gradientUnits="userSpaceOnUse"
          x1="164"
          y1="34.6526"
          x2="164"
          y2="74.3167"
          gradientTransform="matrix(1 0 0 -1 0 152)"
        >
          <stop offset="0" style="stop-color:#696B74" />
          <stop offset="0.5538" style="stop-color:#696B74;stop-opacity:0" />
        </linearGradient>
        <circle
          id="sx_XMLID_${id}_1942_"
          class="sx-${id}-st46"
          cx="164"
          cy="97.5"
          r="19.8"
        />
      </g>
    </g>
    <g id="sx_XMLID_${id}_1926_">
      <rect
        id="sx_XMLID_${id}_1938_"
        y="121"
        class="sx-${id}-st14"
        width="47"
        height="28.8"
      />
      <polygon
        id="sx_XMLID_${id}_1937_"
        class="sx-${id}-st15"
        points="46.5,121 46.5,149.3 0,149.3 0,149.9 47,149.9 47,121 		"
      />

      <linearGradient
        id="sx_XMLID_${id}_62_"
        gradientUnits="userSpaceOnUse"
        x1="23.5"
        y1="29"
        x2="23.5"
        y2="4.1"
        gradientTransform="matrix(1 0 0 -1 0 152)"
      >
        <stop offset="0" style="stop-color:#9DA7B2" />
        <stop offset="1" style="stop-color:#FFFFFF" />
      </linearGradient>
      <path
        id="sx_XMLID_${id}_1934_"
        class="sx-${id}-st47"
        d="M42.5,147.9h-38c-1.4,0-2.5-1.1-2.5-2.5v-19.9c0-1.4,1.1-2.5,2.5-2.5h38
  c1.4,0,2.5,1.1,2.5,2.5v19.9C45,146.8,43.9,147.9,42.5,147.9z M4.5,124.1c-0.8,0-1.4,0.6-1.4,1.4v19.9c0,0.8,0.6,1.4,1.4,1.4h38
  c0.8,0,1.4-0.6,1.4-1.4v-19.9c0-0.8-0.6-1.4-1.4-1.4L4.5,124.1z"
      />

      <linearGradient
        id="sx_XMLID_${id}_63_"
        gradientUnits="userSpaceOnUse"
        x1="23.5"
        y1="4.6627"
        x2="23.5"
        y2="28.4617"
        gradientTransform="matrix(1 0 0 -1 0 152)"
      >
        <stop offset="0" style="stop-color:#9DA7B2" />
        <stop offset="1" style="stop-color:#FFFFFF" />
      </linearGradient>
      <path
        id="sx_XMLID_${id}_1931_"
        class="sx-${id}-st48"
        d="M42.5,123.5h-38c-1.1,0-2,0.9-2,2v19.9c0,1.1,0.9,2,2,2h38c1.1,0,2-0.9,2-2v-19.9
  C44.5,124.4,43.6,123.5,42.5,123.5z M43.9,145.4c0,0.8-0.6,1.4-1.4,1.4h-38c-0.8,0-1.4-0.6-1.4-1.4v-19.9c0-0.8,0.6-1.4,1.4-1.4
  h38c0.8,0,1.4,0.6,1.4,1.4V145.4z"
      />
      <g id="sx_XMLID_${id}_1927_" class="sx-${id}-st18">
        <linearGradient
          id="sx_XMLID_${id}_64_"
          gradientUnits="userSpaceOnUse"
          x1="3.7"
          y1="14.7139"
          x2="43.3641"
          y2="14.7139"
          gradientTransform="matrix(1 0 0 -1 0 152)"
        >
          <stop offset="0" style="stop-color:#7F8595" />
          <stop offset="1" style="stop-color:#D7D9E6" />
        </linearGradient>
        <path
          id="sx_XMLID_${id}_1930_"
          class="sx-${id}-st49"
          d="M43.3,144.5c0,11-8.9,1.7-19.8,1.7s-19.8,9.3-19.8-1.7s8.9-19.8,19.8-19.8
    S43.3,133.6,43.3,144.5z"
        />

        <radialGradient
          id="sx_XMLID_${id}_65_"
          cx="36.4823"
          cy="21.9388"
          r="9.9729"
          gradientTransform="matrix(1 0 0 -1 0 152)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0" />
        </radialGradient>
        <path
          id="sx_XMLID_${id}_1929_"
          class="sx-${id}-st50"
          d="M43.3,144.5c0,11-8.9,1.7-19.8,1.7s-19.8,9.3-19.8-1.7s8.9-19.8,19.8-19.8
    S43.3,133.6,43.3,144.5z"
        />

        <linearGradient
          id="sx_XMLID_${id}_66_"
          gradientUnits="userSpaceOnUse"
          x1="23.5"
          y1="2.1278"
          x2="23.5"
          y2="27.3"
          gradientTransform="matrix(1 0 0 -1 0 152)"
        >
          <stop offset="0" style="stop-color:#696B74" />
          <stop offset="0.5538" style="stop-color:#696B74;stop-opacity:0" />
        </linearGradient>
        <path
          id="sx_XMLID_${id}_1928_"
          class="sx-${id}-st51"
          d="M43.3,144.5c0,11-8.9,1.7-19.8,1.7s-19.8,9.3-19.8-1.7s8.9-19.8,19.8-19.8
    S43.3,133.6,43.3,144.5z"
        />
      </g>
    </g>
    <rect
      id="sx_XMLID_${id}_1925_"
      y="121"
      class="sx-${id}-st14"
      width="47"
      height="28.8"
    />
    <polygon
      id="sx_XMLID_${id}_1924_"
      class="sx-${id}-st15"
      points="46.5,121 46.5,149.3 0,149.3 0,149.9 47,149.9 47,121 	"
    />

    <linearGradient
      id="sx_XMLID_${id}_67_"
      gradientUnits="userSpaceOnUse"
      x1="23.5"
      y1="29"
      x2="23.5"
      y2="4.1"
      gradientTransform="matrix(1 0 0 -1 0 152)"
    >
      <stop offset="0" style="stop-color:#9DA7B2" />
      <stop offset="1" style="stop-color:#FFFFFF" />
    </linearGradient>
    <path
      id="sx_XMLID_${id}_1921_"
      class="sx-${id}-st52"
      d="M42.5,147.9h-38c-1.4,0-2.5-1.1-2.5-2.5v-19.9c0-1.4,1.1-2.5,2.5-2.5h38
c1.4,0,2.5,1.1,2.5,2.5v19.9C45,146.8,43.9,147.9,42.5,147.9z M4.5,124.1c-0.8,0-1.4,0.6-1.4,1.4v19.9c0,0.8,0.6,1.4,1.4,1.4h38
c0.8,0,1.4-0.6,1.4-1.4v-19.9c0-0.8-0.6-1.4-1.4-1.4L4.5,124.1z"
    />

    <linearGradient
      id="sx_XMLID_${id}_68_"
      gradientUnits="userSpaceOnUse"
      x1="23.5"
      y1="4.6627"
      x2="23.5"
      y2="28.4617"
      gradientTransform="matrix(1 0 0 -1 0 152)"
    >
      <stop offset="0" style="stop-color:#9DA7B2" />
      <stop offset="1" style="stop-color:#FFFFFF" />
    </linearGradient>
    <path
      id="sx_XMLID_${id}_1918_"
      class="sx-${id}-st53"
      d="M42.5,123.5h-38c-1.1,0-2,0.9-2,2v19.9c0,1.1,0.9,2,2,2h38c1.1,0,2-0.9,2-2v-19.9
C44.5,124.4,43.6,123.5,42.5,123.5z M43.9,145.4c0,0.8-0.6,1.4-1.4,1.4h-38c-0.8,0-1.4-0.6-1.4-1.4v-19.9c0-0.8,0.6-1.4,1.4-1.4h38
c0.8,0,1.4,0.6,1.4,1.4V145.4z"
    />
    <polygon
      id="sx_XMLID_${id}_1908_"
      class="sx-${id}-st15"
      points="140.5,121 140.5,149.3 94,149.3 94,149.9 141,149.9 141,121 	"
    />
    <rect
      id="sx_XMLID_${id}_1901_"
      x="140.5"
      y="121"
      class="sx-${id}-st14"
      width="47"
      height="28.8"
    />
    <polygon
      id="sx_XMLID_${id}_1900_"
      class="sx-${id}-st15"
      points="186.9,121 186.9,149.3 140.5,149.3 140.5,149.9 187.5,149.9 187.5,121 	"
    />

    <linearGradient
      id="sx_XMLID_${id}_69_"
      gradientUnits="userSpaceOnUse"
      x1="164"
      y1="29"
      x2="164"
      y2="4.1"
      gradientTransform="matrix(1 0 0 -1 0 152)"
    >
      <stop offset="0" style="stop-color:#9DA7B2" />
      <stop offset="1" style="stop-color:#FFFFFF" />
    </linearGradient>
    <path
      id="sx_XMLID_${id}_1897_"
      class="sx-${id}-st54"
      d="M183,147.9h-38c-1.4,0-2.5-1.1-2.5-2.5v-19.9c0-1.4,1.1-2.5,2.5-2.5h38
c1.4,0,2.5,1.1,2.5,2.5v19.9C185.5,146.8,184.4,147.9,183,147.9z M144.9,124.1c-0.8,0-1.4,0.6-1.4,1.4v19.9c0,0.8,0.6,1.4,1.4,1.4
h38c0.8,0,1.4-0.6,1.4-1.4v-19.9c0-0.8-0.6-1.4-1.4-1.4L144.9,124.1z"
    />

    <linearGradient
      id="sx_XMLID_${id}_70_"
      gradientUnits="userSpaceOnUse"
      x1="164"
      y1="4.6628"
      x2="164"
      y2="28.4617"
      gradientTransform="matrix(1 0 0 -1 0 152)"
    >
      <stop offset="0" style="stop-color:#9DA7B2" />
      <stop offset="1" style="stop-color:#FFFFFF" />
    </linearGradient>
    <path
      id="sx_XMLID_${id}_1894_"
      class="sx-${id}-st55"
      d="M183,123.5h-38c-1.1,0-2,0.9-2,2v19.9c0,1.1,0.9,2,2,2h38c1.1,0,2-0.9,2-2v-19.9
C184.9,124.4,184.1,123.5,183,123.5z M184.4,145.4c0,0.8-0.6,1.4-1.4,1.4h-38c-0.8,0-1.4-0.6-1.4-1.4v-19.9c0-0.8,0.6-1.4,1.4-1.4
h38c0.8,0,1.4,0.6,1.4,1.4V145.4z"
    />
    <g id="sx_XMLID_${id}_1890_" class="sx-${id}-st18">
      <linearGradient
        id="sx_XMLID_${id}_71_"
        gradientUnits="userSpaceOnUse"
        x1="3.7"
        y1="17"
        x2="43.3641"
        y2="17"
        gradientTransform="matrix(1 0 0 -1 0 152)"
      >
        <stop offset="0" style="stop-color:#7F8595" />
        <stop offset="1" style="stop-color:#D7D9E6" />
      </linearGradient>
      <ellipse
        id="sx_XMLID_${id}_1893_"
        class="sx-${id}-st56"
        cx="23.5"
        cy="135"
        rx="19.8"
        ry="10.3"
      />

      <radialGradient
        id="sx_XMLID_${id}_72_"
        cx="36.4823"
        cy="223.4738"
        r="15.2021"
        gradientTransform="matrix(1 0 0 -0.5205 0 245.3975)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style="stop-color:#FFFFFF" />
        <stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0" />
      </radialGradient>
      <ellipse
        id="sx_XMLID_${id}_1892_"
        class="sx-${id}-st57"
        cx="23.5"
        cy="135"
        rx="19.8"
        ry="10.3"
      />

      <linearGradient
        id="sx_XMLID_${id}_73_"
        gradientUnits="userSpaceOnUse"
        x1="23.5"
        y1="6.6734"
        x2="23.5"
        y2="27.3167"
        gradientTransform="matrix(1 0 0 -1 0 152)"
      >
        <stop offset="0" style="stop-color:#696B74" />
        <stop offset="0.5538" style="stop-color:#696B74;stop-opacity:0" />
      </linearGradient>
      <ellipse
        id="sx_XMLID_${id}_1891_"
        class="sx-${id}-st58"
        cx="23.5"
        cy="135"
        rx="19.8"
        ry="10.3"
      />
    </g>
    <g id="sx_XMLID_${id}_1878_" class="sx-${id}-st18">
      <linearGradient
        id="sx_XMLID_${id}_74_"
        gradientUnits="userSpaceOnUse"
        x1="144.127"
        y1="17"
        x2="183.7911"
        y2="17"
        gradientTransform="matrix(1 0 0 -1 0 152)"
      >
        <stop offset="0" style="stop-color:#7F8595" />
        <stop offset="1" style="stop-color:#D7D9E6" />
      </linearGradient>
      <ellipse
        id="sx_XMLID_${id}_1881_"
        class="sx-${id}-st59"
        cx="164"
        cy="135"
        rx="19.8"
        ry="10.3"
      />

      <radialGradient
        id="sx_XMLID_${id}_75_"
        cx="176.9413"
        cy="223.4739"
        r="15.2021"
        gradientTransform="matrix(1 0 0 -0.5205 0 245.3975)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style="stop-color:#FFFFFF" />
        <stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0" />
      </radialGradient>
      <ellipse
        id="sx_XMLID_${id}_1880_"
        class="sx-${id}-st60"
        cx="164"
        cy="135"
        rx="19.8"
        ry="10.3"
      />

      <linearGradient
        id="sx_XMLID_${id}_76_"
        gradientUnits="userSpaceOnUse"
        x1="164"
        y1="6.6734"
        x2="164"
        y2="27.3167"
        gradientTransform="matrix(1 0 0 -1 0 152)"
      >
        <stop offset="0" style="stop-color:#696B74" />
        <stop offset="0.5538" style="stop-color:#696B74;stop-opacity:0" />
      </linearGradient>
      <ellipse
        id="sx_XMLID_${id}_1879_"
        class="sx-${id}-st61"
        cx="164"
        cy="135"
        rx="19.8"
        ry="10.3"
      />
    </g>

    <linearGradient
      id="sx_XMLID_${id}_77_"
      gradientUnits="userSpaceOnUse"
      x1="70.5"
      y1="124.9015"
      x2="70.5"
      y2="149.92"
      gradientTransform="matrix(1 0 0 -1 0 152)"
    >
      <stop offset="0" style="stop-color:#9DA7B2" />
      <stop offset="1" style="stop-color:#DFE3E8" />
    </linearGradient>
    <polygon
      id="sx_XMLID_${id}_1877_"
      class="sx-${id}-st62"
      points="50.4,13.1 47,27 94,27 94,13.1 	"
    />

    <linearGradient
      id="sx_XMLID_${id}_78_"
      gradientUnits="userSpaceOnUse"
      x1="72.2"
      y1="124.9015"
      x2="72.2"
      y2="149.92"
      gradientTransform="matrix(1 0 0 -1 0 152)"
    >
      <stop offset="0" style="stop-color:#9DA7B2" />
      <stop offset="1" style="stop-color:#DFE3E8" />
    </linearGradient>
    <polygon
      id="sx_XMLID_${id}_1876_"
      class="sx-${id}-st63"
      points="50.4,13.1 94,13.1 94,2.2 53.1,2.2 	"
    />

    <linearGradient
      id="sx_XMLID_${id}_79_"
      gradientUnits="userSpaceOnUse"
      x1="25.2"
      y1="124.9015"
      x2="25.2"
      y2="149.92"
      gradientTransform="matrix(1 0 0 -1 0 152)"
    >
      <stop offset="0" style="stop-color:#9DA7B2" />
      <stop offset="1" style="stop-color:#DFE3E8" />
    </linearGradient>
    <polygon
      id="sx_XMLID_${id}_1875_"
      class="sx-${id}-st64"
      points="6.2,13.1 0,27 47,27 50.4,13.1 	"
    />

    <linearGradient
      id="sx_XMLID_${id}_80_"
      gradientUnits="userSpaceOnUse"
      x1="29.65"
      y1="124.9015"
      x2="29.65"
      y2="149.92"
      gradientTransform="matrix(1 0 0 -1 0 152)"
    >
      <stop offset="0" style="stop-color:#9DA7B2" />
      <stop offset="1" style="stop-color:#DFE3E8" />
    </linearGradient>
    <polygon
      id="sx_XMLID_${id}_1874_"
      class="sx-${id}-st65"
      points="6.2,13.1 50.4,13.1 53.1,2.2 11.1,2.2 	"
    />
    <g id="sx_XMLID_${id}_1869_" class="sx-${id}-st66">
      <polygon
        id="sx_XMLID_${id}_1873_"
        class="sx-${id}-st67"
        points="52.4,2.2 49.8,12.6 6.4,12.6 6.2,13.1 50.4,13.1 53.1,2.2 		"
      />
      <polygon
        id="sx_XMLID_${id}_1872_"
        class="sx-${id}-st67"
        points="93.4,2.2 93.4,12.6 50.5,12.6 50.4,13.1 94,13.1 94,2.2 		"
      />
      <polygon
        id="sx_XMLID_${id}_1871_"
        class="sx-${id}-st67"
        points="93.4,13.1 93.4,26.5 47.1,26.5 47,27 94,27 94,13.1 		"
      />
      <polygon
        id="sx_XMLID_${id}_1870_"
        class="sx-${id}-st67"
        points="49.7,13.1 46.4,26.5 0.2,26.5 0,27 47,27 50.4,13.1 		"
      />
    </g>

    <radialGradient
      id="sx_XMLID_${id}_81_"
      cx="24.1554"
      cy="-257.077"
      r="32.5986"
      gradientTransform="matrix(1 0 0 -0.3516 0 -88.5824)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" style="stop-color:#FFFFFF" />
      <stop offset="0.3602" style="stop-color:#D2D6D6" />
      <stop offset="1" style="stop-color:#98A0AC" />
    </radialGradient>
    <ellipse
      id="sx_XMLID_${id}_1868_"
      class="sx-${id}-st68"
      cx="30.7"
      cy="6.3"
      rx="18.9"
      ry="6.3"
    />

    <radialGradient
      id="sx_XMLID_${id}_82_"
      cx="19.7649"
      cy="-261.9889"
      r="34.313"
      gradientTransform="matrix(1 0 0 -0.3644 0 -82.6545)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" style="stop-color:#FFFFFF" />
      <stop offset="0.3602" style="stop-color:#C6CCD3" />
      <stop offset="1" style="stop-color:#868993" />
    </radialGradient>
    <ellipse
      id="sx_XMLID_${id}_1867_"
      class="sx-${id}-st69"
      cx="26.6"
      cy="17.7"
      rx="19.9"
      ry="6.9"
    />

    <radialGradient
      id="sx_XMLID_${id}_83_"
      cx="66.4868"
      cy="-257.077"
      r="32.5986"
      gradientTransform="matrix(1 0 0 -0.3516 0 -88.5824)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" style="stop-color:#FFFFFF" />
      <stop offset="0.3602" style="stop-color:#D2D6D6" />
      <stop offset="1" style="stop-color:#98A0AC" />
    </radialGradient>
    <ellipse
      id="sx_XMLID_${id}_1866_"
      class="sx-${id}-st70"
      cx="73"
      cy="6.3"
      rx="18.9"
      ry="6.3"
    />

    <radialGradient
      id="sx_XMLID_${id}_84_"
      cx="65.1527"
      cy="-261.9889"
      r="34.313"
      gradientTransform="matrix(1 0 0 -0.3644 0 -82.6545)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" style="stop-color:#FFFFFF" />
      <stop offset="0.3602" style="stop-color:#C6CCD3" />
      <stop offset="1" style="stop-color:#868993" />
    </radialGradient>
    <ellipse
      id="sx_XMLID_${id}_1865_"
      class="sx-${id}-st71"
      cx="72"
      cy="17.7"
      rx="19.9"
      ry="6.9"
    />

    <linearGradient
      id="sx_XMLID_${id}_85_"
      gradientUnits="userSpaceOnUse"
      x1="-1735.3787"
      y1="124.9015"
      x2="-1735.3787"
      y2="149.92"
      gradientTransform="matrix(-1 0 0 -1 -1617.8787 152)"
    >
      <stop offset="0" style="stop-color:#9DA7B2" />
      <stop offset="1" style="stop-color:#DFE3E8" />
    </linearGradient>
    <polygon
      id="sx_XMLID_${id}_1864_"
      class="sx-${id}-st72"
      points="137.6,13.1 141,27 94,27 94,13.1 	"
    />

    <linearGradient
      id="sx_XMLID_${id}_86_"
      gradientUnits="userSpaceOnUse"
      x1="-1733.6787"
      y1="124.9015"
      x2="-1733.6787"
      y2="149.92"
      gradientTransform="matrix(-1 0 0 -1 -1617.8787 152)"
    >
      <stop offset="0" style="stop-color:#9DA7B2" />
      <stop offset="1" style="stop-color:#DFE3E8" />
    </linearGradient>
    <polygon
      id="sx_XMLID_${id}_1863_"
      class="sx-${id}-st73"
      points="137.6,13.1 94,13.1 94,2.2 134.9,2.2 	"
    />

    <linearGradient
      id="sx_XMLID_${id}_87_"
      gradientUnits="userSpaceOnUse"
      x1="-1780.6787"
      y1="124.9015"
      x2="-1780.6787"
      y2="149.92"
      gradientTransform="matrix(-1 0 0 -1 -1617.8787 152)"
    >
      <stop offset="0" style="stop-color:#9DA7B2" />
      <stop offset="1" style="stop-color:#DFE3E8" />
    </linearGradient>
    <polygon
      id="sx_XMLID_${id}_1862_"
      class="sx-${id}-st74"
      points="181.8,13.1 188,27 141,27 137.6,13.1 	"
    />

    <linearGradient
      id="sx_XMLID_${id}_88_"
      gradientUnits="userSpaceOnUse"
      x1="-1776.2288"
      y1="124.9015"
      x2="-1776.2288"
      y2="149.92"
      gradientTransform="matrix(-1 0 0 -1 -1617.8787 152)"
    >
      <stop offset="0" style="stop-color:#9DA7B2" />
      <stop offset="1" style="stop-color:#DFE3E8" />
    </linearGradient>
    <polygon
      id="sx_XMLID_${id}_1861_"
      class="sx-${id}-st75"
      points="181.8,13.1 137.6,13.1 134.9,2.2 176.9,2.2 	"
    />
    <g id="sx_XMLID_${id}_1856_" class="sx-${id}-st66">
      <polygon
        id="sx_XMLID_${id}_1860_"
        class="sx-${id}-st67"
        points="135.6,2.2 138.2,12.6 181.6,12.6 181.8,13.1 137.6,13.1 134.9,2.2 		"
      />
      <polygon
        id="sx_XMLID_${id}_1859_"
        class="sx-${id}-st67"
        points="94,12.6 137.5,12.6 137.6,13.1 94,13.1 		"
      />
      <polygon
        id="sx_XMLID_${id}_1858_"
        class="sx-${id}-st67"
        points="94,26.5 140.9,26.5 141,27 94,27 		"
      />
      <polygon
        id="sx_XMLID_${id}_1857_"
        class="sx-${id}-st67"
        points="138.3,13.1 141.6,26.5 187.8,26.5 188,27 141,27 137.6,13.1 		"
      />
    </g>

    <radialGradient
      id="sx_XMLID_${id}_89_"
      cx="-67.9588"
      cy="-257.077"
      r="32.5986"
      gradientTransform="matrix(1 0 0 -0.3516 218.8042 -88.5824)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" style="stop-color:#FFFFFF" />
      <stop offset="0.3602" style="stop-color:#D2D6D6" />
      <stop offset="1" style="stop-color:#98A0AC" />
    </radialGradient>
    <ellipse
      id="sx_XMLID_${id}_1855_"
      class="sx-${id}-st76"
      cx="157.3"
      cy="6.3"
      rx="18.9"
      ry="6.3"
    />

    <radialGradient
      id="sx_XMLID_${id}_90_"
      cx="-72.2801"
      cy="-261.9889"
      r="34.313"
      gradientTransform="matrix(1 0 0 -0.3644 226.8324 -82.6545)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" style="stop-color:#FFFFFF" />
      <stop offset="0.3602" style="stop-color:#C6CCD3" />
      <stop offset="1" style="stop-color:#868993" />
    </radialGradient>
    <ellipse
      id="sx_XMLID_${id}_1854_"
      class="sx-${id}-st77"
      cx="161.4"
      cy="17.7"
      rx="19.9"
      ry="6.9"
    />

    <radialGradient
      id="sx_XMLID_${id}_91_"
      cx="-26.3508"
      cy="-257.077"
      r="32.5986"
      gradientTransform="matrix(1 0 0 -0.3516 134.8648 -88.5824)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" style="stop-color:#FFFFFF" />
      <stop offset="0.3602" style="stop-color:#D2D6D6" />
      <stop offset="1" style="stop-color:#98A0AC" />
    </radialGradient>
    <ellipse
      id="sx_XMLID_${id}_1853_"
      class="sx-${id}-st78"
      cx="115"
      cy="6.3"
      rx="18.9"
      ry="6.3"
    />

    <radialGradient
      id="sx_XMLID_${id}_92_"
      cx="-27.668"
      cy="-261.9889"
      r="34.313"
      gradientTransform="matrix(1 0 0 -0.3644 136.8324 -82.6545)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" style="stop-color:#FFFFFF" />
      <stop offset="0.3602" style="stop-color:#C6CCD3" />
      <stop offset="1" style="stop-color:#868993" />
    </radialGradient>
    <ellipse
      id="sx_XMLID_${id}_1852_"
      class="sx-${id}-st79"
      cx="116"
      cy="17.7"
      rx="19.9"
      ry="6.9"
    />
  </g>`;
    if (pointValue == 2) {
      text += `
  <g class="SVG_alert" >
    <path
      class="db-${id}-st11"
      d="M69.73,0h-57.5L0,14.08v41h2v7.86v2.48c0,1.9,1.54,3.44,3.44,3.44h47.62c1.08,0,2.04-0.51,2.67-1.29
              l0.01,0.01l10.94-13.77c0.21-0.2,0.39-0.44,0.55-0.69l0.04-0.05l-0.01-0.01c0.3-0.51,0.48-1.1,0.48-1.73v-7.84l2-2.51V0z"
    />
  </g>`;
    }
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
    let { info = {} } = this;
    let { id = "" } = info || {};
    let $container = $(`#${id}>.component`);
    $container.html(this.renderSvg());
  }

  event() {}
}

export default Text;

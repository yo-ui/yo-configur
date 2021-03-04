import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 电力电容器
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
    <div class="bm-device-dldrq-com component"
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
    viewBox="0 0 71 64"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
    .dldrq-${info.id}-st0{fill:#A3A3AE;}
      .dldrq-${info.id}-st1{fill:#8E8E98;}
      .dldrq-${info.id}-st2{fill:url(#dldrq_2_);}
      .dldrq-${info.id}-st3{fill:#ABACAF;}
      .dldrq-${info.id}-st4{fill:url(#dldrq_3_);}
      .dldrq-${info.id}-st5{fill:#4F4E51;}
      .dldrq-${info.id}-st6{fill:#E0E0E0;}
      .dldrq-${info.id}-st7{fill:#353535;}
      .dldrq-${info.id}-st8{fill:#040000;}
      .dldrq-${info.id}-st9{fill:url(#dldrq_4_);}
      .dldrq-${info.id}-st10{fill:url(#dldrq_5_);}
      .dldrq-${info.id}-st11{fill:url(#dldrq_6_);}
      .dldrq-${info.id}-st12{fill:url(#dldrq_7_);}
      .dldrq-${info.id}-st13{fill:url(#dldrq_8_);}
      .dldrq-${info.id}-st14{fill:url(#dldrq_9_);}
    </style></defs>
    ${this.renderSvgContent()}

  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    return ` <g id="dldrq_166_">
  <rect
    id="dldrq_150_"
    y="62.3"
    class="dldrq-${id}-st0"
    width="71"
    height="1.5"
  />
  <path
    id="dldrq_153_"
    class="dldrq-${id}-st1"
    d="M67.1,48.6H3.9c-0.9,0-1.6,0.6-1.8,1.5L0,62.3h71l-2.1-12.2C68.8,49.2,68,48.6,67.1,48.6z"
  />
  <linearGradient
    id="dldrq_2_"
    gradientUnits="userSpaceOnUse"
    x1="7.0608"
    y1="35.0771"
    x2="65.1372"
    y2="35.0771"
  >
    <stop offset="0" style="stop-color:#504F52" />
    <stop offset="8.021390e-002" style="stop-color:#B9B7C3" />
    <stop offset="0.1818" style="stop-color:#757381" />
    <stop offset="0.8182" style="stop-color:#757381" />
    <stop offset="0.9091" style="stop-color:#B9B7C3" />
    <stop offset="1" style="stop-color:#504F52" />
  </linearGradient>
  <path
    id="dldrq_151_"
    class="dldrq-${id}-st2"
    d="M6.7,9.4v45.5c0,3.2,4.2,5.9,9.4,5.9h39.6c5.2,0,9.4-2.6,9.4-5.9V9.4H6.7z"
  />
  <path
    id="dldrq_152_"
    class="dldrq-${id}-st3"
    d="M55.7,3.5H16.1c-5.2,0-9.4,2.6-9.4,5.9s4.2,5.9,9.4,5.9h39.6c5.2,0,9.4-2.6,9.4-5.9
      S60.9,3.5,55.7,3.5z"
  />
  <linearGradient
    id="dldrq_3_"
    gradientUnits="userSpaceOnUse"
    x1="7.9819"
    y1="9.3823"
    x2="63.8025"
    y2="9.3823"
  >
    <stop offset="0" style="stop-color:#504F52" />
    <stop offset="8.021390e-002" style="stop-color:#B9B7C3" />
    <stop offset="0.1818" style="stop-color:#757381" />
    <stop offset="0.8182" style="stop-color:#757381" />
    <stop offset="0.9091" style="stop-color:#B9B7C3" />
    <stop offset="1" style="stop-color:#504F52" />
  </linearGradient>
  <path
    id="dldrq_148_"
    class="dldrq-${id}-st4"
    d="M56.2,4.6H15.6C11.4,4.6,8,6.8,8,9.4s3.4,4.8,7.6,4.8h40.6c4.2,0,7.6-2.1,7.6-4.8
      S60.4,4.6,56.2,4.6z"
  />
  <path
    id="dldrq_154_"
    class="dldrq-${id}-st5"
    d="M56.2,8.9H15.6c-3,0-5.5,1.1-6.8,2.6c1.3,1.5,3.8,2.6,6.8,2.6h40.6c3,0,5.5-1.1,6.8-2.6
      C61.7,10,59.2,8.9,56.2,8.9z"
  />
  <rect
    id="dldrq_149_"
    x="23.5"
    y="26.2"
    class="dldrq-${id}-st6"
    width="25.9"
    height="15.3"
  />
  <rect
    id="dldrq_156_"
    x="25"
    y="6.4"
    class="dldrq-${id}-st7"
    width="22.8"
    height="7.7"
  />
  <polygon
    id="dldrq_155_"
    class="dldrq-${id}-st8"
    points="46.3,2.5 26.4,2.5 25,6.4 47.7,6.4 	"
  />
  <g id="dldrq_157_">
    <linearGradient
      id="dldrq_4_"
      gradientUnits="userSpaceOnUse"
      x1="27.4142"
      y1="3.1236"
      x2="31.6202"
      y2="3.1236"
    >
      <stop offset="0" style="stop-color:#ABB0B8" />
      <stop offset="0.4813" style="stop-color:#FFFFFF" />
      <stop offset="1" style="stop-color:#A9ADB6" />
    </linearGradient>
    <path
      id="dldrq_159_"
      class="dldrq-${id}-st9"
      d="M27.4,1.2V4c0,0.6,0.9,1,2.1,1c1.2,0,2.1-0.5,2.1-1V1.2H27.4z"
    />
    <linearGradient
      id="dldrq_5_"
      gradientUnits="userSpaceOnUse"
      x1="29.5172"
      y1="0.4006"
      x2="29.5172"
      y2="1.9748"
    >
      <stop offset="0" style="stop-color:#959AA2" />
      <stop offset="1" style="stop-color:#DADEE5" />
    </linearGradient>
    <ellipse
      id="dldrq_158_"
      class="dldrq-${id}-st10"
      cx="29.5"
      cy="1.2"
      rx="2.1"
      ry="1"
    />
  </g>
  <g id="dldrq_160_">
    <linearGradient
      id="dldrq_6_"
      gradientUnits="userSpaceOnUse"
      x1="34.4754"
      y1="3.1236"
      x2="38.6814"
      y2="3.1236"
    >
      <stop offset="0" style="stop-color:#ABB0B8" />
      <stop offset="0.4813" style="stop-color:#FFFFFF" />
      <stop offset="1" style="stop-color:#A9ADB6" />
    </linearGradient>
    <path
      id="dldrq_162_"
      class="dldrq-${id}-st11"
      d="M34.5,1.2V4c0,0.6,0.9,1,2.1,1c1.2,0,2.1-0.5,2.1-1V1.2H34.5z"
    />
    <linearGradient
      id="dldrq_7_"
      gradientUnits="userSpaceOnUse"
      x1="36.5784"
      y1="0.4006"
      x2="36.5784"
      y2="1.9748"
    >
      <stop offset="0" style="stop-color:#959AA2" />
      <stop offset="1" style="stop-color:#DADEE5" />
    </linearGradient>
    <ellipse
      id="dldrq_161_"
      class="dldrq-${id}-st12"
      cx="36.6"
      cy="1.2"
      rx="2.1"
      ry="1"
    />
  </g>
  <g id="dldrq_163_">
    <linearGradient
      id="dldrq_8_"
      gradientUnits="userSpaceOnUse"
      x1="41.1444"
      y1="3.1236"
      x2="45.3503"
      y2="3.1236"
    >
      <stop offset="0" style="stop-color:#ABB0B8" />
      <stop offset="0.4813" style="stop-color:#FFFFFF" />
      <stop offset="1" style="stop-color:#A9ADB6" />
    </linearGradient>
    <path
      id="dldrq_165_"
      class="dldrq-${id}-st13"
      d="M41.1,1.2V4c0,0.6,0.9,1,2.1,1c1.2,0,2.1-0.5,2.1-1V1.2H41.1z"
    />
    <linearGradient
      id="dldrq_9_"
      gradientUnits="userSpaceOnUse"
      x1="43.2473"
      y1="0.4006"
      x2="43.2473"
      y2="1.9748"
    >
      <stop offset="0" style="stop-color:#959AA2" />
      <stop offset="1" style="stop-color:#DADEE5" />
    </linearGradient>
    <ellipse
      id="dldrq_164_"
      class="dldrq-${id}-st14"
      cx="43.2"
      cy="1.2"
      rx="2.1"
      ry="1"
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
  }

  event() {}
}

export default Text;

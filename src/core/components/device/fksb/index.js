import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 阀控水表
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
    <div class="bm-device-fksb-com component"
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
    viewBox="0 0 97 56"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
    .fksb-${id}-st0{fill:url(#fksb_${id}_2_);}
      .fksb-${id}-st1{fill:url(#fksb_${id}_3_);}
      .fksb-${id}-st2{fill:url(#fksb_${id}_4_);}
      .fksb-${id}-st3{fill:url(#fksb_${id}_5_);}
      .fksb-${id}-st4{fill:url(#fksb_${id}_6_);}
      .fksb-${id}-st5{fill:#DFE3E8;}
      .fksb-${id}-st6{fill:#A7AFB7;}
      .fksb-${id}-st7{fill:url(#fksb_${id}_7_);}
      .fksb-${id}-st8{fill:url(#fksb_${id}_8_);}
      .fksb-${id}-st9{fill:#FFFFFF;}
      .fksb-${id}-st10{fill:#ED431B;}
      .fksb-${id}-st11{fill:#5D5F66;}
      .fksb-${id}-st12{fill:#1E1E1E;}
      .fksb-${id}-st13{fill:#4C5963;}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let text = `
    <linearGradient
    id="fksb_${id}_2_"
    gradientUnits="userSpaceOnUse"
    x1="13.5477"
    y1="42.5147"
    x2="56.0438"
    y2="42.5147"
  >
    <stop offset="0" style="stop-color:#0E255A" />
    <stop offset="0.5" style="stop-color:#1456BB" />
    <stop offset="1" style="stop-color:#0E255A" />
  </linearGradient>
  <path
    id="fksb_${id}_843_"
    class="fksb-${id}-st0"
    d="M13.5,29.8V37c0,7.9,5.4,18.3,21.2,18.3C51.9,55.2,56,44.9,56,37v-7.2H13.5z"
  />
  <g id="fksb_${id}_840_">
    <linearGradient
      id="fksb_${id}_3_"
      gradientUnits="userSpaceOnUse"
      x1="-897.4448"
      y1="23.1029"
      x2="-897.4448"
      y2="37.4284"
      gradientTransform="matrix(-1 0 0 1 -811.0268 0)"
    >
      <stop offset="0" style="stop-color:#0E255A" />
      <stop offset="0.508" style="stop-color:#1456BB" />
      <stop offset="0.8382" style="stop-color:#103377" />
      <stop offset="1" style="stop-color:#0E255A" />
    </linearGradient>
    <path
      id="fksb_${id}_842_"
      class="fksb-${id}-st1"
      d="M83.2,38H90V23h-6.7c0,0-0.4,4-0.4,8S83.2,38,83.2,38z"
    />

    <linearGradient
      id="fksb_${id}_4_"
      gradientUnits="userSpaceOnUse"
      x1="-903.6279"
      y1="21.5697"
      x2="-903.6279"
      y2="38.8103"
      gradientTransform="matrix(-1 0 0 1 -811.0268 0)"
    >
      <stop offset="0" style="stop-color:#A7AFB7" />
      <stop offset="0.508" style="stop-color:#DFE3E8" />
      <stop offset="0.7346" style="stop-color:#C3C9D0" />
      <stop offset="1" style="stop-color:#A7AFB7" />
    </linearGradient>
    <rect
      id="fksb_${id}_841_"
      x="88.5"
      y="21.4"
      class="fksb-${id}-st2"
      width="8.2"
      height="18.1"
    />
  </g>
  <linearGradient
    id="fksb_${id}_5_"
    gradientUnits="userSpaceOnUse"
    x1="12.4535"
    y1="34.2129"
    x2="57.9924"
    y2="34.2129"
  >
    <stop offset="0" style="stop-color:#A7AFB7" />
    <stop offset="0.508" style="stop-color:#DFE3E8" />
    <stop offset="0.7346" style="stop-color:#C3C9D0" />
    <stop offset="1" style="stop-color:#A7AFB7" />
  </linearGradient>
  <path
    id="fksb_${id}_839_"
    class="fksb-${id}-st3"
    d="M12.5,17.2v16.1c0,10,10.2,18,22.8,18c12.6,0,22.8-8.1,22.8-18V17.2H12.5z"
  />
  <linearGradient
    id="fksb_${id}_6_"
    gradientUnits="userSpaceOnUse"
    x1="48.2538"
    y1="34.2556"
    x2="84.8931"
    y2="34.2556"
  >
    <stop offset="0.665" style="stop-color:#C4CAD1" />
    <stop offset="1" style="stop-color:#A7AFB7" />
  </linearGradient>
  <path
    id="fksb_${id}_838_"
    class="fksb-${id}-st4"
    d="M84.9,31.2h-2l-0.1-7c-0.3-2.1-1.3-3.6-3.4-3.6H48.3V48h32.3c2.4,0,4.4-2,4.3-4.4h0V31.2z"
  />
  <path
    id="fksb_${id}_837_"
    class="fksb-${id}-st5"
    d="M84.8,30.4l-2-16.2c-0.3-2.1-2.2-3.6-4.3-3.6H49c4,2.8,8.7,4.9,8.9,8.9
      c0.3,5.8-1.2,11.6-9.6,15.9l0,0h32.3C83.2,35.4,85.3,33,84.8,30.4z"
  />
  <ellipse
    id="fksb_${id}_836_"
    class="fksb-${id}-st6"
    cx="35.2"
    cy="18.6"
    rx="22.8"
    ry="18"
  />
  <ellipse
    id="fksb_${id}_835_"
    class="fksb-${id}-st5"
    cx="35.2"
    cy="17.2"
    rx="21.7"
    ry="17.2"
  />
  <g id="fksb_${id}_832_">
    <linearGradient
      id="fksb_${id}_7_"
      gradientUnits="userSpaceOnUse"
      x1="10.2998"
      y1="23.1029"
      x2="10.2998"
      y2="37.4284"
    >
      <stop offset="0" style="stop-color:#0E255A" />
      <stop offset="0.508" style="stop-color:#1456BB" />
      <stop offset="0.8382" style="stop-color:#103377" />
      <stop offset="1" style="stop-color:#0E255A" />
    </linearGradient>
    <path
      id="fksb_${id}_834_"
      class="fksb-${id}-st7"
      d="M13.5,38H6.7V23h6.7c0,0,0.4,4,0.4,8S13.5,38,13.5,38z"
    />
    <linearGradient
      id="fksb_${id}_8_"
      gradientUnits="userSpaceOnUse"
      x1="4.1167"
      y1="21.5697"
      x2="4.1167"
      y2="38.8103"
    >
      <stop offset="0" style="stop-color:#A7AFB7" />
      <stop offset="0.508" style="stop-color:#DFE3E8" />
      <stop offset="0.7346" style="stop-color:#C3C9D0" />
      <stop offset="1" style="stop-color:#A7AFB7" />
    </linearGradient>
    <rect
      id="fksb_${id}_833_"
      x="0"
      y="21.4"
      class="fksb-${id}-st8"
      width="8.2"
      height="18.1"
    />
  </g>
  <ellipse
    id="fksb_${id}_831_"
    class="fksb-${id}-st9"
    cx="35.2"
    cy="16.7"
    rx="17.6"
    ry="13.7"
  />
  <ellipse
    id="fksb_${id}_830_"
    class="fksb-${id}-st10"
    cx="30.2"
    cy="8.3"
    rx="1.7"
    ry="1.4"
  />
  <ellipse
    id="fksb_${id}_829_"
    class="fksb-${id}-st10"
    cx="30.2"
    cy="25"
    rx="1.7"
    ry="1.4"
  />
  <ellipse
    id="fksb_${id}_828_"
    class="fksb-${id}-st10"
    cx="24.4"
    cy="13.8"
    rx="1.7"
    ry="1.4"
  />
  <ellipse
    id="fksb_${id}_827_"
    class="fksb-${id}-st10"
    cx="24.4"
    cy="20.6"
    rx="1.7"
    ry="1.4"
  />
  <rect
    id="fksb_${id}_826_"
    x="44.3"
    y="12.3"
    class="fksb-${id}-st11"
    width="4.3"
    height="1.8"
  />
  <rect
    id="fksb_${id}_825_"
    x="44.3"
    y="15.8"
    class="fksb-${id}-st11"
    width="4.3"
    height="1.8"
  />
  <rect
    id="fksb_${id}_824_"
    x="44.3"
    y="19.3"
    class="fksb-${id}-st11"
    width="4.3"
    height="1.8"
  />
  <ellipse
    id="fksb_${id}_823_"
    class="fksb-${id}-st12"
    cx="35.5"
    cy="16.7"
    rx="3.1"
    ry="2.4"
  />
  <path
    id="fksb_${id}_822_"
    class="fksb-${id}-st6"
    d="M35.2,3.8c9.5,0,17.3,5.9,17.6,13.3c0-0.2,0-0.3,0-0.5c0-7.6-7.9-13.7-17.6-13.7
      S17.6,9.1,17.6,16.7c0,0.2,0,0.3,0,0.5C18,9.7,25.7,3.8,35.2,3.8z"
  />
  <rect
    id="fksb_${id}_845_"
    x="60.4"
    y="21.4"
    transform="matrix(0.5478 0.8366 -0.8366 0.5478 50.1581 -48.4209)"
    class="fksb-${id}-st13"
    width="19"
    height="1.5"
  />
  <rect
    id="fksb_${id}_821_"
    x="68.2"
    y="12.7"
    transform="matrix(0.8364 0.5481 -0.5481 0.8364 23.4452 -34.1823)"
    class="fksb-${id}-st13"
    width="1.5"
    height="19"
  />`;

    return text;
  }

  // //加载数据
  // loadData() {
  //   this.loadDeviceInfo();
  // }

  // //刷新内容
  // refreshContent(data) {
  //   let { point } = data || {};
  //   if (point) {
  //     let { value = "" } = point || {};
  //     this.pointValue = value;
  //     this.refresh();
  //   }
  // }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let { id = "", height = 0, width = 0 } = info || {};
    let $container = $(`#${id}>.component`);
    let $svg = $container.find("svg");
    // $container.html(this.renderSvg());
    $svg.attr({ width, height });
  }

  event() {}
}

export default Text;

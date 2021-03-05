// import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 立式空调
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
    <div class="bm-device-lskt-com component"
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
    viewBox="0 0 96 228"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
    .lskt-${id}-st0{fill:#D0D4D8;}
    .lskt-${id}-st1{fill:url(#lskt_2_);}
    .lskt-${id}-st2{fill:#AFB7BC;}
    .lskt-${id}-st3{fill:url(#lskt_3_);}
    .lskt-${id}-st4{fill:url(#lskt_4_);}
    .lskt-${id}-st5{fill:url(#lskt_5_);}
    .lskt-${id}-st6{fill:url(#lskt_6_);}
    .lskt-${id}-st7{fill:url(#lskt_7_);}
    .lskt-${id}-st8{fill:none;stroke:#D0D4D8;stroke-width:0.75;stroke-miterlimit:10;}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let text = `

    <path
    id="lskt_1032_"
    class="lskt-${id}-st0"
    d="M89.2,227.8H6.2c-3.4,0-6.2-2.8-6.2-6.2V18.6L4,6.2C5.3,2.9,7.8,0,11.2,0h72.9
      c3.4,0,6.1,3,7.2,6.2l4,12.4v202.9C95.4,225,92.6,227.8,89.2,227.8z"
  />
  <linearGradient
    id="lskt_2_"
    gradientUnits="userSpaceOnUse"
    x1="0.7635"
    y1="121.2662"
    x2="94.6119"
    y2="121.2662"
  >
    <stop offset="0" style="stop-color:#CDCFD1" />
    <stop offset="6.000000e-002" style="stop-color:#FFFFFF" />
    <stop offset="0.94" style="stop-color:#FFFFFF" />
    <stop offset="1" style="stop-color:#CDCFD1" />
  </linearGradient>
  <path
    id="lskt_1031_"
    class="lskt-${id}-st1"
    d="M89.1,226.9H6.3c-3.1,0-5.6-2.5-5.6-5.6V21.2c0-3.1,2.5-5.6,5.6-5.6h82.7
      c3.1,0,5.6,2.5,5.6,5.6v200.2C94.6,224.4,92.1,226.9,89.1,226.9z"
  />
  <polygon
    id="lskt_1023_"
    class="lskt-${id}-st2"
    points="49.5,5 86.1,5 85.5,3 49.3,3 "
  />
  <polygon
    id="lskt_1022_"
    class="lskt-${id}-st2"
    points="49.8,9 87.3,9 86.7,7 49.7,7 "
  />
  <polygon
    id="lskt_1021_"
    class="lskt-${id}-st2"
    points="50.2,13 88.5,13 87.9,11 50,11 "
  />
  <polygon
    id="lskt_1020_"
    class="lskt-${id}-st2"
    points="45.1,11 7.6,11 7,13 44.9,13 "
  />
  <polygon
    id="lskt_1016_"
    class="lskt-${id}-st2"
    points="45.8,3 10,3 9.4,5 45.6,5 "
  />
  <polygon
    id="lskt_1011_"
    class="lskt-${id}-st2"
    points="45.4,7 8.8,7 8.2,9 45.3,9 "
  />
  <linearGradient
    id="lskt_3_"
    gradientUnits="userSpaceOnUse"
    x1="47.7731"
    y1="89.2739"
    x2="47.7731"
    y2="83.6606"
  >
    <stop offset="0" style="stop-color:#505156" />
    <stop offset="1" style="stop-color:#000000" />
  </linearGradient>
  <rect
    id="lskt_1000_"
    x="39.3"
    y="83.2"
    class="lskt-${id}-st3"
    width="17"
    height="6.4"
  />
  <path
    id="lskt_1033_"
    class="lskt-${id}-st2"
    d="M86.1,56.5H9.2c-1.8,0-3.3-1.5-3.3-3.3V23.7c0-1.8,1.5-3.3,3.3-3.3h76.9
      c1.8,0,3.3,1.5,3.3,3.3v29.5C89.4,55,87.9,56.5,86.1,56.5z"
  />
  <g id="lskt_1015_">
    <linearGradient
      id="lskt_4_"
      gradientUnits="userSpaceOnUse"
      x1="47.6651"
      y1="38.8327"
      x2="47.6651"
      y2="46.3472"
    >
      <stop offset="0" style="stop-color:#CDCFD1" />
      <stop offset="0.1785" style="stop-color:#DFE0E1" />
      <stop offset="0.4315" style="stop-color:#F1F1F2" />
      <stop offset="0.6984" style="stop-color:#FBFCFC" />
      <stop offset="1" style="stop-color:#FFFFFF" />
    </linearGradient>
    <rect
      id="lskt_1024_"
      x="6.6"
      y="38.8"
      class="lskt-${id}-st4"
      width="82.1"
      height="7.5"
    />
    <linearGradient
      id="lskt_5_"
      gradientUnits="userSpaceOnUse"
      x1="47.6651"
      y1="30.3182"
      x2="47.6651"
      y2="37.8327"
    >
      <stop offset="0" style="stop-color:#CDCFD1" />
      <stop offset="0.1785" style="stop-color:#DFE0E1" />
      <stop offset="0.4315" style="stop-color:#F1F1F2" />
      <stop offset="0.6984" style="stop-color:#FBFCFC" />
      <stop offset="1" style="stop-color:#FFFFFF" />
    </linearGradient>
    <rect
      id="lskt_1027_"
      x="6.6"
      y="30.3"
      class="lskt-${id}-st5"
      width="82.1"
      height="7.5"
    />
    <linearGradient
      id="lskt_6_"
      gradientUnits="userSpaceOnUse"
      x1="47.6651"
      y1="47.3472"
      x2="47.6651"
      y2="55.8029"
    >
      <stop offset="0" style="stop-color:#CDCFD1" />
      <stop offset="0.1785" style="stop-color:#DFE0E1" />
      <stop offset="0.4315" style="stop-color:#F1F1F2" />
      <stop offset="0.6984" style="stop-color:#FBFCFC" />
      <stop offset="1" style="stop-color:#FFFFFF" />
    </linearGradient>
    <path
      id="lskt_1019_"
      class="lskt-${id}-st6"
      d="M6.6,47.3V53c0,1.6,1.3,2.8,2.8,2.8h76.5c1.6,0,2.8-1.3,2.8-2.8v-5.6H6.6z"
    />
    <linearGradient
      id="lskt_7_"
      gradientUnits="userSpaceOnUse"
      x1="47.6651"
      y1="21.1066"
      x2="47.6651"
      y2="29.3182"
    >
      <stop offset="0" style="stop-color:#CDCFD1" />
      <stop offset="0.1785" style="stop-color:#DFE0E1" />
      <stop offset="0.4315" style="stop-color:#F1F1F2" />
      <stop offset="0.6984" style="stop-color:#FBFCFC" />
      <stop offset="1" style="stop-color:#FFFFFF" />
    </linearGradient>
    <path
      id="lskt_1018_"
      class="lskt-${id}-st7"
      d="M88.7,29.3v-5.4c0-1.6-1.3-2.8-2.8-2.8H9.4c-1.6,0-2.8,1.3-2.8,2.8v5.4H88.7z"
    />
  </g>
  <path
    id="lskt_1017_"
    class="lskt-${id}-st8"
    d="M95.1,154.6c0,1.7-2.4,3.1-5.4,3.1H5.6c-3,0-5.4-1.4-5.4-3.1"
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
    let { id = "", width = 0, height = 0 } = info || {};
    let $container = $(`#${id}>.component`);
    let $svg = $container.find("svg");
    $svg.attr({ width, height });
  }

  event() {}
}

export default Text;

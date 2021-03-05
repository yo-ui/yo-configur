// import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 拉绳式测距
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
    <div class="bm-device-lsscj-com component"
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
    viewBox="0 0 51 49"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
    .lsscj-${id}-st0{fill:url(#lsscj_2_);}
    .lsscj-${id}-st1{fill:url(#lsscj_3_);}
    .lsscj-${id}-st2{fill:#DFE2E8;}
    .lsscj-${id}-st3{fill:#294866;}
    .lsscj-${id}-st4{fill:#446C88;}
    .lsscj-${id}-st5{fill:url(#lsscj_4_);}
    .lsscj-${id}-st6{fill:#040000;}
    .lsscj-${id}-st7{fill:url(#lsscj_5_);}
    .lsscj-${id}-st8{fill:url(#lsscj_6_);}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let text = `
    <linearGradient
    id="lsscj_2_"
    gradientUnits="userSpaceOnUse"
    x1="-461.5986"
    y1="-166.4115"
    x2="-457.4947"
    y2="-166.4115"
    gradientTransform="matrix(4.489659e-011 1 -1 4.489659e-011 -162.6154 498.5756)"
  >
    <stop offset="0" style="stop-color:#815223" />
    <stop offset="3.826400e-002" style="stop-color:#895825" />
    <stop offset="0.3088" style="stop-color:#C28A3D" />
    <stop offset="0.5061" style="stop-color:#E8AF55" />
    <stop offset="0.6084" style="stop-color:#F7BE60" />
    <stop offset="1" style="stop-color:#B9751C" />
  </linearGradient>
  <path
    id="lsscj_1041_"
    class="lsscj-${id}-st0"
    d="M7.6,37H0.9C0.3,37,0,38,0,39s0.3,2,0.9,2h6.7V37z"
  />
  <linearGradient
    id="lsscj_3_"
    gradientUnits="userSpaceOnUse"
    x1="-462.5633"
    y1="-172.933"
    x2="-456.53"
    y2="-172.933"
    gradientTransform="matrix(4.489659e-011 1 -1 4.489659e-011 -162.6154 498.5756)"
  >
    <stop offset="0" style="stop-color:#294B5E" />
    <stop offset="0.4848" style="stop-color:#5286A3" />
    <stop offset="1" style="stop-color:#294B5E" />
  </linearGradient>
  <path
    id="lsscj_1040_"
    class="lsscj-${id}-st1"
    d="M14.2,36H7.8c-0.9,0-1.3,1.6-1.3,3c0,1.5,0.5,3,1.3,3h6.5V36z"
  />
  <polygon
    id="lsscj_1026_"
    class="lsscj-${id}-st2"
    points="50.9,44.3 30.3,46.3 11.7,44.3 11.7,35.3 31.8,33.3 50.9,35.3 "
  />
  <polygon
    id="lsscj_1014_"
    class="lsscj-${id}-st3"
    points="50.9,30.6 11.7,30.6 15.7,18.1 46.9,18.1 "
  />
  <rect
    id="lsscj_1025_"
    x="11.7"
    y="30.6"
    class="lsscj-${id}-st4"
    width="39.2"
    height="4.7"
  />
  <rect
    id="lsscj_1028_"
    x="11.7"
    y="44.3"
    class="lsscj-${id}-st4"
    width="39.2"
    height="4.7"
  />
  <linearGradient
    id="lsscj_4_"
    gradientUnits="userSpaceOnUse"
    x1="20.8083"
    y1="19.2948"
    x2="41.7145"
    y2="19.2948"
  >
    <stop offset="0" style="stop-color:#919C9F" />
    <stop offset="0.4286" style="stop-color:#E8ECEF" />
    <stop offset="1" style="stop-color:#919C9F" />
  </linearGradient>
  <path
    id="lsscj_1035_"
    class="lsscj-${id}-st5"
    d="M20.8,10.7v14c0,2.1,5.4,3.2,10.5,3.2s10.4-1.1,10.4-3.2v-14H20.8z"
  />
  <ellipse
    id="lsscj_1029_"
    class="lsscj-${id}-st6"
    cx="17.1"
    cy="27.4"
    rx="2.3"
    ry="1.2"
  />
  <ellipse
    id="lsscj_1030_"
    class="lsscj-${id}-st6"
    cx="45.1"
    cy="27.4"
    rx="2.3"
    ry="1.2"
  />
  <ellipse
    id="lsscj_1034_"
    class="lsscj-${id}-st6"
    cx="43.8"
    cy="20.2"
    rx="1.8"
    ry="0.9"
  />
  <ellipse
    id="lsscj_1036_"
    class="lsscj-${id}-st6"
    cx="18.7"
    cy="20.2"
    rx="1.8"
    ry="0.9"
  />
  <linearGradient
    id="lsscj_5_"
    gradientUnits="userSpaceOnUse"
    x1="18.6859"
    y1="14.2948"
    x2="43.8369"
    y2="14.2948"
  >
    <stop offset="0" style="stop-color:#294B5E" />
    <stop offset="0.4848" style="stop-color:#5286A3" />
    <stop offset="1" style="stop-color:#294B5E" />
  </linearGradient>
  <path
    id="lsscj_1039_"
    class="lsscj-${id}-st7"
    d="M18.7,3.9v16.9c0,2.5,6.5,3.8,12.6,3.8s12.5-1.3,12.5-3.8V3.9L18.7,3.9z"
  />
  <path
    id="lsscj_1037_"
    class="lsscj-${id}-st3"
    d="M31.3,7.9c-6.1,0-12.6-1.4-12.6-3.9c0-2.6,6.5-3.9,12.6-3.9s12.6,1.4,12.6,3.9
      C43.8,6.5,37.4,7.9,31.3,7.9z"
  />
  <linearGradient
    id="lsscj_6_"
    gradientUnits="userSpaceOnUse"
    x1="18.6859"
    y1="14.7294"
    x2="43.8369"
    y2="14.7294"
  >
    <stop offset="0" style="stop-color:#919C9F" />
    <stop offset="0.4286" style="stop-color:#E8ECEF" />
    <stop offset="1" style="stop-color:#919C9F" />
  </linearGradient>
  <path
    id="lsscj_1043_"
    class="lsscj-${id}-st8"
    d="M31.3,12.7c-6.1,0-12.6-1.3-12.6-3.8v8c0,2.5,6.5,3.8,12.6,3.8c6.1,0,12.5-1.3,12.5-3.8v-8
      C43.8,11.3,37.4,12.7,31.3,12.7z"
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
    let $svg = $container.find(`svg`);
    $svg.attr({ width, height });
  }

  event() {}
}

export default Text;

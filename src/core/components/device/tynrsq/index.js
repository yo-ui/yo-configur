import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 太阳能热水器
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
    <div class="bm-device-db-com component"
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
    viewBox="0 0 135 128"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
    .tynrsq-${id}-st0{fill:#D9D9D9;}
    .tynrsq-${id}-st1{fill:#BDBDBD;}
    .tynrsq-${id}-st2{fill:url(#tynrsq_${id}_SVGID_1_);}
    .tynrsq-${id}-st3{fill:url(#tynrsq_${id}_SVGID_2_);}
    .tynrsq-${id}-st4{fill:url(#tynrsq_${id}_SVGID_3_);}
    .tynrsq-${id}-st5{fill:url(#tynrsq_${id}_SVGID_4_);}
    .tynrsq-${id}-st6{fill:url(#tynrsq_${id}_SVGID_5_);}
    .tynrsq-${id}-st7{fill:url(#tynrsq_${id}_SVGID_6_);}
    .tynrsq-${id}-st8{fill:url(#tynrsq_${id}_SVGID_7_);}
    .tynrsq-${id}-st9{fill:url(#tynrsq_${id}_SVGID_8_);}
    .tynrsq-${id}-st10{fill:url(#tynrsq_${id}_SVGID_9_);}
    .tynrsq-${id}-st11{fill:url(#tynrsq_${id}_SVGID_10_);}
    .tynrsq-${id}-st12{fill:url(#tynrsq_${id}_SVGID_11_);}
    .tynrsq-${id}-st13{fill:url(#tynrsq_${id}_SVGID_12_);}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let text = `
    <rect
    y="5.4"
    class="tynrsq-${id}-st0"
    width="134.7"
    height="12.4"
  />
  <rect class="tynrsq-${id}-st1" width="134.7" height="5.4" />
  <linearGradient
    id="tynrsq_${id}_SVGID_1_"
    gradientUnits="userSpaceOnUse"
    x1="3.2629"
    y1="61.5322"
    x2="10.8775"
    y2="61.5322"
  >
    <stop offset="0" style="stop-color:#0E255A" />
    <stop offset="0.4091" style="stop-color:#1456BB" />
    <stop offset="0.6337" style="stop-color:#94CEFF" />
    <stop offset="1" style="stop-color:#0E255A" />
  </linearGradient>
  <path
    class="tynrsq-${id}-st2"
    d="M7.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C10.9,10.4,9.2,8.5,7.1,8.5z"
  />
  <linearGradient
    id="tynrsq_${id}_SVGID_2_"
    gradientUnits="userSpaceOnUse"
    x1="14.2629"
    y1="61.5322"
    x2="21.8775"
    y2="61.5322"
  >
    <stop offset="0" style="stop-color:#0E255A" />
    <stop offset="0.4091" style="stop-color:#1456BB" />
    <stop offset="0.6337" style="stop-color:#94CEFF" />
    <stop offset="1" style="stop-color:#0E255A" />
  </linearGradient>
  <path
    class="tynrsq-${id}-st3"
    d="M18.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C21.9,10.4,20.2,8.5,18.1,8.5z"
  />
  <linearGradient
    id="tynrsq_${id}_SVGID_3_"
    gradientUnits="userSpaceOnUse"
    x1="25.2629"
    y1="61.5322"
    x2="32.8775"
    y2="61.5322"
  >
    <stop offset="0" style="stop-color:#0E255A" />
    <stop offset="0.4091" style="stop-color:#1456BB" />
    <stop offset="0.6337" style="stop-color:#94CEFF" />
    <stop offset="1" style="stop-color:#0E255A" />
  </linearGradient>
  <path
    class="tynrsq-${id}-st4"
    d="M29.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C32.9,10.4,31.2,8.5,29.1,8.5z"
  />
  <linearGradient
    id="tynrsq_${id}_SVGID_4_"
    gradientUnits="userSpaceOnUse"
    x1="36.2629"
    y1="61.5322"
    x2="43.8775"
    y2="61.5322"
  >
    <stop offset="0" style="stop-color:#0E255A" />
    <stop offset="0.4091" style="stop-color:#1456BB" />
    <stop offset="0.6337" style="stop-color:#94CEFF" />
    <stop offset="1" style="stop-color:#0E255A" />
  </linearGradient>
  <path
    class="tynrsq-${id}-st5"
    d="M40.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C43.9,10.4,42.2,8.5,40.1,8.5z"
  />
  <linearGradient
    id="tynrsq_${id}_SVGID_5_"
    gradientUnits="userSpaceOnUse"
    x1="47.2629"
    y1="61.5322"
    x2="54.8775"
    y2="61.5322"
  >
    <stop offset="0" style="stop-color:#0E255A" />
    <stop offset="0.4091" style="stop-color:#1456BB" />
    <stop offset="0.6337" style="stop-color:#94CEFF" />
    <stop offset="1" style="stop-color:#0E255A" />
  </linearGradient>
  <path
    class="tynrsq-${id}-st6"
    d="M51.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C54.9,10.4,53.2,8.5,51.1,8.5z"
  />
  <linearGradient
    id="tynrsq_${id}_SVGID_6_"
    gradientUnits="userSpaceOnUse"
    x1="58.2629"
    y1="61.5322"
    x2="65.8775"
    y2="61.5322"
  >
    <stop offset="0" style="stop-color:#0E255A" />
    <stop offset="0.4091" style="stop-color:#1456BB" />
    <stop offset="0.6337" style="stop-color:#94CEFF" />
    <stop offset="1" style="stop-color:#0E255A" />
  </linearGradient>
  <path
    class="tynrsq-${id}-st7"
    d="M62.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C65.9,10.4,64.2,8.5,62.1,8.5z"
  />
  <linearGradient
    id="tynrsq_${id}_SVGID_7_"
    gradientUnits="userSpaceOnUse"
    x1="69.2629"
    y1="61.5322"
    x2="76.8775"
    y2="61.5322"
  >
    <stop offset="0" style="stop-color:#0E255A" />
    <stop offset="0.4091" style="stop-color:#1456BB" />
    <stop offset="0.6337" style="stop-color:#94CEFF" />
    <stop offset="1" style="stop-color:#0E255A" />
  </linearGradient>
  <path
    class="tynrsq-${id}-st8"
    d="M73.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C76.9,10.4,75.2,8.5,73.1,8.5z"
  />
  <linearGradient
    id="tynrsq_${id}_SVGID_8_"
    gradientUnits="userSpaceOnUse"
    x1="80.2629"
    y1="61.5322"
    x2="87.8775"
    y2="61.5322"
  >
    <stop offset="0" style="stop-color:#0E255A" />
    <stop offset="0.4091" style="stop-color:#1456BB" />
    <stop offset="0.6337" style="stop-color:#94CEFF" />
    <stop offset="1" style="stop-color:#0E255A" />
  </linearGradient>
  <path
    class="tynrsq-${id}-st9"
    d="M84.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C87.9,10.4,86.2,8.5,84.1,8.5z"
  />
  <linearGradient
    id="tynrsq_${id}_SVGID_9_"
    gradientUnits="userSpaceOnUse"
    x1="90.2629"
    y1="61.5322"
    x2="97.8775"
    y2="61.5322"
  >
    <stop offset="0" style="stop-color:#0E255A" />
    <stop offset="0.4091" style="stop-color:#1456BB" />
    <stop offset="0.6337" style="stop-color:#94CEFF" />
    <stop offset="1" style="stop-color:#0E255A" />
  </linearGradient>
  <path
    class="tynrsq-${id}-st10"
    d="M94.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C97.9,10.4,96.2,8.5,94.1,8.5z"
  />
  <linearGradient
    id="tynrsq_${id}_SVGID_10_"
    gradientUnits="userSpaceOnUse"
    x1="101.2629"
    y1="61.5322"
    x2="108.8775"
    y2="61.5322"
  >
    <stop offset="0" style="stop-color:#0E255A" />
    <stop offset="0.4091" style="stop-color:#1456BB" />
    <stop offset="0.6337" style="stop-color:#94CEFF" />
    <stop offset="1" style="stop-color:#0E255A" />
  </linearGradient>
  <path
    class="tynrsq-${id}-st11"
    d="M105.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C108.9,10.4,107.2,8.5,105.1,8.5z"
  />
  <linearGradient
    id="tynrsq_${id}_SVGID_11_"
    gradientUnits="userSpaceOnUse"
    x1="112.2629"
    y1="61.5322"
    x2="119.8775"
    y2="61.5322"
  >
    <stop offset="0" style="stop-color:#0E255A" />
    <stop offset="0.4091" style="stop-color:#1456BB" />
    <stop offset="0.6337" style="stop-color:#94CEFF" />
    <stop offset="1" style="stop-color:#0E255A" />
  </linearGradient>
  <path
    class="tynrsq-${id}-st12"
    d="M116.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C119.9,10.4,118.2,8.5,116.1,8.5z"
  />
  <linearGradient
    id="tynrsq_${id}_SVGID_12_"
    gradientUnits="userSpaceOnUse"
    x1="123.2629"
    y1="61.5322"
    x2="130.8775"
    y2="61.5322"
  >
    <stop offset="0" style="stop-color:#0E255A" />
    <stop offset="0.4091" style="stop-color:#1456BB" />
    <stop offset="0.6337" style="stop-color:#94CEFF" />
    <stop offset="1" style="stop-color:#0E255A" />
  </linearGradient>
  <path
    class="tynrsq-${id}-st13"
    d="M127.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C130.9,10.4,129.2,8.5,127.1,8.5z"
  />
  <rect
    y="115.4"
    class="tynrsq-${id}-st0"
    width="134.7"
    height="12.4"
  />
  <rect
    y="110"
    class="tynrsq-${id}-st1"
    width="134.7"
    height="5.4"
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
    bmCommon.log(`${info.type}刷新 `);
    let { id = "", width = 0, height = 0 } = info || {};
    let $container = $(`#${id}>.component`);
    let $svg = $container.find("svg");
    $svg.attr({ width, height });
  }

  event() {}
}

export default Text;

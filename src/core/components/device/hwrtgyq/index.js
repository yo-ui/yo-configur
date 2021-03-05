import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 红外人体感应器
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
    <div class="bm-device-hwrtgyq-com component"
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
    viewBox="0 0 43 41"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
    .hwrtgyq-${id}-st0{fill:#B0B9C1;}
    .hwrtgyq-${id}-st1{fill:#DFE3E8;}
    .hwrtgyq-${id}-st2{fill:#C0C7CE;}
    .hwrtgyq-${id}-st3{fill:#EFF1F4;}
    .hwrtgyq-${id}-st4{fill:#99A3AA;}
    .hwrtgyq-${id}-st5{fill:url(#hwrtgyq_2_);}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let text = `

    <path
    id="hwrtgyq_1474_"
    class="hwrtgyq-${id}-st0"
    d="M39.7,0H3.3C1.5,0,0,1.5,0,3.3v1.9h43V3.3C43,1.5,41.5,0,39.7,0z"
  />
  <path
    id="hwrtgyq_1473_"
    class="hwrtgyq-${id}-st1"
    d="M39.7,40.9H3.3c-1.8,0-3.3-1.5-3.3-3.3V5.2c0-1.8,1.5-3.3,3.3-3.3h36.5c1.8,0,3.3,1.5,3.3,3.3
      v32.5C43,39.5,41.5,40.9,39.7,40.9z"
  />
  <path
    id="hwrtgyq_1436_"
    class="hwrtgyq-${id}-st2"
    d="M21.5,5C15.7,5,11,8.5,11,12.7v15.4c0,4.2,4.7,7.7,10.5,7.7S32,32.3,32,28.1V12.7
      C32,8.5,27.3,5,21.5,5z"
  />
  <path
    id="hwrtgyq_1441_"
    class="hwrtgyq-${id}-st3"
    d="M21.5,7C15.7,7,11,10.5,11,14.7v15.4c0,4.2,4.7,7.7,10.5,7.7S32,34.3,32,30.1V14.7
      C32,10.5,27.3,7,21.5,7z"
  />
  <ellipse
    id="hwrtgyq_1438_"
    class="hwrtgyq-${id}-st4"
    cx="21.5"
    cy="22.9"
    rx="7.5"
    ry="7.1"
  />
  <radialGradient
    id="hwrtgyq_2_"
    cx="21.5228"
    cy="25.1348"
    r="9.837"
    gradientUnits="userSpaceOnUse"
  >
    <stop offset="0" style="stop-color:#FFFFFF" />
    <stop offset="1" style="stop-color:#A9AEB7" />
  </radialGradient>
  <ellipse
    id="hwrtgyq_1442_"
    class="hwrtgyq-${id}-st5"
    cx="21.5"
    cy="23.3"
    rx="6.7"
    ry="6.3"
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
    let $svg = $container.find(`svg`);
    $svg.attr({ width, height });
  }

  event() {}
}

export default Text;

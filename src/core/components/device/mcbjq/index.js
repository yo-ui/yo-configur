// import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 门磁报警器
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
    <div class="bm-device-mcbjq-com component"
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
    viewBox="0 0 48 44"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
    .mcbjq-${id}-st0{fill:#B0B9C1;}
        .mcbjq-${id}-st1{fill:url(#mcbjq_${id}_2_);}
        .mcbjq-${id}-st2{fill:#DFE3E8;}
        .mcbjq-${id}-st3{fill:#99A3AA;}
        .mcbjq-${id}-st4{fill:url(#mcbjq_${id}_3_);}
        .mcbjq-${id}-st5{fill:#AFB8BC;}
        .mcbjq-${id}-st6{fill:#F2F5F9;}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let text = ` <path
    id="mcbjq_${id}_1505_"
    class="mcbjq-${id}-st0"
    d="M22.8,0H9.3H9.2h-6C1.5,0,0,1.5,0,3.3v4.9h9.2h0.1H26V3.3C26,1.5,24.6,0,22.8,0z"
  />
  <linearGradient
    id="mcbjq_${id}_2_"
    gradientUnits="userSpaceOnUse"
    x1="5.593969e-006"
    y1="22.4756"
    x2="9.3225"
    y2="22.4756"
  >
    <stop offset="0.6471" style="stop-color:#DFE3E8" />
    <stop offset="1" style="stop-color:#A8B2B7" />
  </linearGradient>
  <path
    id="mcbjq_${id}_1503_"
    class="mcbjq-${id}-st1"
    d="M9.3,42.5H3.3C1.5,42.5,0,41,0,39.2V5.7c0-1.8,1.5-3.3,3.3-3.3h6.1V42.5z"
  />
  <path
    id="mcbjq_${id}_1500_"
    class="mcbjq-${id}-st2"
    d="M22.8,43.9H10.7c-0.8,0-1.5-0.7-1.5-1.5V6.4c0-0.8,0.7-1.5,1.5-1.5h12.1
      c1.8,0,3.3,1.5,3.3,3.3v32.5C26,42.5,24.6,43.9,22.8,43.9z"
  />
  <ellipse
    id="mcbjq_${id}_1501_"
    class="mcbjq-${id}-st3"
    cx="4.4"
    cy="9.6"
    rx="1.7"
    ry="1.5"
  />
  <ellipse
    id="mcbjq_${id}_1502_"
    class="mcbjq-${id}-st3"
    cx="4.4"
    cy="35.9"
    rx="1.7"
    ry="1.5"
  />
  <path
    id="mcbjq_${id}_1515_"
    class="mcbjq-${id}-st0"
    d="M32.3,0l6.4,0l0.1,0l6,0C46.6,0,48,1.5,48,3.3v4.9h-9.2h-0.1H29V3.3C29,1.5,30.5,0,32.3,0z"
  />
  <linearGradient
    id="mcbjq_${id}_3_"
    gradientUnits="userSpaceOnUse"
    x1="211.3258"
    y1="22.4756"
    x2="220.6483"
    y2="22.4756"
    gradientTransform="matrix(-1 0 0 1 259.3461 0)"
  >
    <stop offset="0.6471" style="stop-color:#DFE3E8" />
    <stop offset="1" style="stop-color:#A8B2B7" />
  </linearGradient>
  <path
    id="mcbjq_${id}_1514_"
    class="mcbjq-${id}-st4"
    d="M38.7,42.5h6.1c1.8,0,3.3-1.5,3.3-3.3V5.7c0-1.8-1.5-3.3-3.3-3.3h-6.1V42.5z"
  />
  <path
    id="mcbjq_${id}_1512_"
    class="mcbjq-${id}-st2"
    d="M32.3,43.9h5.1c0.8,0,1.5-0.7,1.5-1.5V6.4c0-0.8-0.7-1.5-1.5-1.5h-5.1c-1.8,0-3.3,1.5-3.3,3.3
      v32.5C29,42.5,30.5,43.9,32.3,43.9z"
  />
  <ellipse
    id="mcbjq_${id}_1508_"
    class="mcbjq-${id}-st3"
    cx="43.6"
    cy="9.6"
    rx="1.7"
    ry="1.5"
  />
  <ellipse
    id="mcbjq_${id}_1507_"
    class="mcbjq-${id}-st3"
    cx="43.6"
    cy="35.9"
    rx="1.7"
    ry="1.5"
  />
  <ellipse
    id="mcbjq_${id}_1506_"
    class="mcbjq-${id}-st3"
    cx="17.4"
    cy="12.8"
    rx="4.4"
    ry="3.9"
  />
  <rect
    id="mcbjq_${id}_1509_"
    x="11.8"
    y="32.3"
    class="mcbjq-${id}-st5"
    width="11.5"
    height="1"
  />
  <rect
    id="mcbjq_${id}_1510_"
    x="11.8"
    y="35.3"
    class="mcbjq-${id}-st5"
    width="11.5"
    height="1"
  />
  <rect
    id="mcbjq_${id}_1511_"
    x="11.8"
    y="38.3"
    class="mcbjq-${id}-st5"
    width="11.5"
    height="1"
  />
  <ellipse
    id="mcbjq_${id}_1504_"
    class="mcbjq-${id}-st6"
    cx="17.4"
    cy="13.3"
    rx="3.9"
    ry="3.4"
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

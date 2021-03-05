// import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 光伏逆变器
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
    <div class="bm-device-gfnbq-com component"
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
    viewBox="0 0 140 154"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
    .gfnbq-${id}-st0{fill:#DFE2E8;}
    .gfnbq-${id}-st1{fill:#C1C7CC;}
    .gfnbq-${id}-st2{opacity:0.2;fill:#231815;}
    .gfnbq-${id}-st3{fill:#FFFFFF;}
    .gfnbq-${id}-st4{fill:#838776;}
    .gfnbq-${id}-st5{fill:#25282B;}
    .gfnbq-${id}-st6{fill:#1B5C30;}
    .gfnbq-${id}-st7{fill:#48A554;}
    .gfnbq-${id}-st8{fill:#831A1F;}
    .gfnbq-${id}-st9{fill:#D04A48;}
    .gfnbq-${id}-st10{fill:#9F4A23;}
    .gfnbq-${id}-st11{fill:#EF8124;}
    .gfnbq-${id}-st12{opacity:0.8;}
    .gfnbq-${id}-st13{fill:#F4D321;}
    .gfnbq-${id}-st14{fill:#231815;}
    .gfnbq-${id}-st15{fill:#040000;}
    .gfnbq-${id}-st16{opacity:0.5;}
    .gfnbq-${id}-st17{fill:#454444;}
    .gfnbq-${id}-st18{fill:#666767;}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let text = `
    <rect
    id="gfnbq_534_"
    x="0.5"
    y="17.2"
    class="gfnbq-${id}-st0"
    width="138.9"
    height="136.2"
  />
  <polygon
    id="gfnbq_535_"
    class="gfnbq-${id}-st1"
    points="139.5,17.2 0.5,17.2 14.5,0.6 125.5,0.6 "
  />
  <rect
    id="gfnbq_536_"
    x="69.5"
    y="0.6"
    class="gfnbq-${id}-st2"
    width="1"
    height="152.7"
  />
  <rect
    id="gfnbq_537_"
    x="6.6"
    y="27.3"
    class="gfnbq-${id}-st3"
    width="57.7"
    height="47.6"
  />
  <g id="gfnbq_620_">
    <rect
      id="gfnbq_624_"
      x="12.9"
      y="40.7"
      class="gfnbq-${id}-st4"
      width="45"
      height="20.9"
    />
    <path
      id="gfnbq_621_"
      class="gfnbq-${id}-st5"
      d="M58.9,62.6h-47V39.7h47V62.6z M13.9,60.6h43V41.7h-43V60.6z"
    />
  </g>
  <circle
    id="gfnbq_619_"
    class="gfnbq-${id}-st6"
    cx="15.9"
    cy="32.9"
    r="2"
  />
  <ellipse
    id="gfnbq_618_"
    class="gfnbq-${id}-st7"
    cx="15.9"
    cy="33.4"
    rx="2"
    ry="1.8"
  />
  <circle
    id="gfnbq_617_"
    class="gfnbq-${id}-st6"
    cx="34.5"
    cy="32.9"
    r="2"
  />
  <ellipse
    id="gfnbq_616_"
    class="gfnbq-${id}-st7"
    cx="34.5"
    cy="33.4"
    rx="2"
    ry="1.8"
  />
  <circle
    id="gfnbq_615_"
    class="gfnbq-${id}-st8"
    cx="53.9"
    cy="32.9"
    r="2"
  />
  <ellipse
    id="gfnbq_614_"
    class="gfnbq-${id}-st9"
    cx="53.9"
    cy="33.4"
    rx="2"
    ry="1.8"
  />
  <circle
    id="gfnbq_613_"
    class="gfnbq-${id}-st10"
    cx="25.2"
    cy="68.9"
    r="2"
  />
  <ellipse
    id="gfnbq_612_"
    class="gfnbq-${id}-st11"
    cx="25.2"
    cy="69.4"
    rx="2"
    ry="1.8"
  />
  <circle
    id="gfnbq_611_"
    class="gfnbq-${id}-st6"
    cx="43.8"
    cy="68.9"
    r="2"
  />
  <ellipse
    id="gfnbq_610_"
    class="gfnbq-${id}-st7"
    cx="43.8"
    cy="69.4"
    rx="2"
    ry="1.8"
  />
  <g id="gfnbq_553_" class="gfnbq-${id}-st12">
    <g id="gfnbq_562_">
      <path
        id="gfnbq_554_"
        class="gfnbq-${id}-st13"
        d="M99.3,92.4l5-8.6c0.6-1,2.1-1,2.7,0l5,8.6c0.6,1-0.2,2.3-1.4,2.3h-9.9
          C99.4,94.7,98.7,93.4,99.3,92.4z"
      />
      <path
        id="gfnbq_559_"
        class="gfnbq-${id}-st14"
        d="M110.5,95.5h-9.9c-0.8,0-1.6-0.4-2-1.2s-0.4-1.6,0-2.3l5-8.6c0.4-0.7,1.2-1.2,2-1.2
          s1.6,0.4,2,1.2l5,8.6c0.4,0.7,0.4,1.6,0,2.3S111.4,95.5,110.5,95.5z M99.9,92.8c-0.2,0.4-0.1,0.7,0,0.8s0.3,0.4,0.7,0.4h9.9
          c0.4,0,0.6-0.3,0.7-0.4s0.2-0.4,0-0.8l-5-8.6c-0.2-0.4-0.6-0.4-0.7-0.4s-0.5,0-0.7,0.4L99.9,92.8z"
      />
    </g>
    <g id="gfnbq_563_">
      <path
        id="gfnbq_564_"
        class="gfnbq-${id}-st15"
        d="M105,89.9l-0.2-2.6c0-0.5,0-0.9,0-1.1c0-0.3,0.1-0.5,0.2-0.7c0.2-0.2,0.4-0.2,0.6-0.2
          c0.3,0,0.5,0.1,0.6,0.3s0.2,0.5,0.2,0.9c0,0.2,0,0.5,0,0.7l-0.2,2.6c0,0.3-0.1,0.6-0.2,0.7c-0.1,0.2-0.2,0.3-0.4,0.3
          c-0.2,0-0.3-0.1-0.4-0.2C105.1,90.4,105,90.2,105,89.9z M105.6,93.4c-0.2,0-0.4-0.1-0.6-0.2c-0.2-0.1-0.2-0.3-0.2-0.6
          c0-0.2,0.1-0.4,0.2-0.6c0.2-0.2,0.3-0.2,0.6-0.2s0.4,0.1,0.6,0.2c0.2,0.2,0.2,0.3,0.2,0.6c0,0.3-0.1,0.4-0.2,0.6
          C106,93.3,105.8,93.4,105.6,93.4z"
      />
    </g>
  </g>
  <g id="gfnbq_575_" class="gfnbq-${id}-st16">
    <polygon
      id="gfnbq_567_"
      class="gfnbq-${id}-st15"
      points="58.6,101.5 10.3,101.5 12.3,100.5 56.6,100.5 	"
    />
    <polygon
      id="gfnbq_568_"
      class="gfnbq-${id}-st15"
      points="58.6,105.1 10.3,105.1 12.3,104.1 56.6,104.1 	"
    />
    <polygon
      id="gfnbq_570_"
      class="gfnbq-${id}-st15"
      points="58.6,108.6 10.3,108.6 12.3,107.6 56.6,107.6 	"
    />
    <polygon
      id="gfnbq_569_"
      class="gfnbq-${id}-st15"
      points="58.6,112.2 10.3,112.2 12.3,111.2 56.6,111.2 	"
    />
    <polygon
      id="gfnbq_574_"
      class="gfnbq-${id}-st15"
      points="58.6,115.7 10.3,115.7 12.3,114.7 56.6,114.7 	"
    />
    <polygon
      id="gfnbq_573_"
      class="gfnbq-${id}-st15"
      points="58.6,119.3 10.3,119.3 12.3,118.3 56.6,118.3 	"
    />
    <polygon
      id="gfnbq_572_"
      class="gfnbq-${id}-st15"
      points="58.6,122.8 10.3,122.8 12.3,121.8 56.6,121.8 	"
    />
    <polygon
      id="gfnbq_571_"
      class="gfnbq-${id}-st15"
      points="58.6,126.4 10.3,126.4 12.3,125.4 56.6,125.4 	"
    />
    <polygon
      id="gfnbq_582_"
      class="gfnbq-${id}-st15"
      points="58.6,129.9 10.3,129.9 12.3,128.9 56.6,128.9 	"
    />
    <polygon
      id="gfnbq_581_"
      class="gfnbq-${id}-st15"
      points="58.6,133.5 10.3,133.5 12.3,132.5 56.6,132.5 	"
    />
    <polygon
      id="gfnbq_580_"
      class="gfnbq-${id}-st15"
      points="58.6,137 10.3,137 12.3,136 56.6,136 	"
    />
    <polygon
      id="gfnbq_579_"
      class="gfnbq-${id}-st15"
      points="58.6,140.6 10.3,140.6 12.3,139.6 56.6,139.6 	"
    />
    <polygon
      id="gfnbq_578_"
      class="gfnbq-${id}-st15"
      points="58.6,144.1 10.3,144.1 12.3,143.1 56.6,143.1 	"
    />
  </g>
  <g id="gfnbq_576_" class="gfnbq-${id}-st16">
    <polygon
      id="gfnbq_594_"
      class="gfnbq-${id}-st15"
      points="128.5,101.5 80.2,101.5 82.2,100.5 126.5,100.5 	"
    />
    <polygon
      id="gfnbq_593_"
      class="gfnbq-${id}-st15"
      points="128.5,105.1 80.2,105.1 82.2,104.1 126.5,104.1 	"
    />
    <polygon
      id="gfnbq_592_"
      class="gfnbq-${id}-st15"
      points="128.5,108.6 80.2,108.6 82.2,107.6 126.5,107.6 	"
    />
    <polygon
      id="gfnbq_591_"
      class="gfnbq-${id}-st15"
      points="128.5,112.2 80.2,112.2 82.2,111.2 126.5,111.2 	"
    />
    <polygon
      id="gfnbq_590_"
      class="gfnbq-${id}-st15"
      points="128.5,115.7 80.2,115.7 82.2,114.7 126.5,114.7 	"
    />
    <polygon
      id="gfnbq_589_"
      class="gfnbq-${id}-st15"
      points="128.5,119.3 80.2,119.3 82.2,118.3 126.5,118.3 	"
    />
    <polygon
      id="gfnbq_588_"
      class="gfnbq-${id}-st15"
      points="128.5,122.8 80.2,122.8 82.2,121.8 126.5,121.8 	"
    />
    <polygon
      id="gfnbq_587_"
      class="gfnbq-${id}-st15"
      points="128.5,126.4 80.2,126.4 82.2,125.4 126.5,125.4 	"
    />
    <polygon
      id="gfnbq_586_"
      class="gfnbq-${id}-st15"
      points="128.5,129.9 80.2,129.9 82.2,128.9 126.5,128.9 	"
    />
    <polygon
      id="gfnbq_585_"
      class="gfnbq-${id}-st15"
      points="128.5,133.5 80.2,133.5 82.2,132.5 126.5,132.5 	"
    />
    <polygon
      id="gfnbq_584_"
      class="gfnbq-${id}-st15"
      points="128.5,137 80.2,137 82.2,136 126.5,136 	"
    />
    <polygon
      id="gfnbq_583_"
      class="gfnbq-${id}-st15"
      points="128.5,140.6 80.2,140.6 82.2,139.6 126.5,139.6 	"
    />
    <polygon
      id="gfnbq_577_"
      class="gfnbq-${id}-st15"
      points="128.5,144.1 80.2,144.1 82.2,143.1 126.5,143.1 	"
    />
  </g>
  <g id="gfnbq_595_" class="gfnbq-${id}-st16">
    <polygon
      id="gfnbq_608_"
      class="gfnbq-${id}-st15"
      points="128.5,27.5 80.2,27.5 82.2,26.5 126.5,26.5 	"
    />
    <polygon
      id="gfnbq_607_"
      class="gfnbq-${id}-st15"
      points="128.5,31.1 80.2,31.1 82.2,30.1 126.5,30.1 	"
    />
    <polygon
      id="gfnbq_606_"
      class="gfnbq-${id}-st15"
      points="128.5,34.6 80.2,34.6 82.2,33.6 126.5,33.6 	"
    />
    <polygon
      id="gfnbq_605_"
      class="gfnbq-${id}-st15"
      points="128.5,38.2 80.2,38.2 82.2,37.2 126.5,37.2 	"
    />
    <polygon
      id="gfnbq_604_"
      class="gfnbq-${id}-st15"
      points="128.5,41.7 80.2,41.7 82.2,40.7 126.5,40.7 	"
    />
    <polygon
      id="gfnbq_603_"
      class="gfnbq-${id}-st15"
      points="128.5,45.3 80.2,45.3 82.2,44.3 126.5,44.3 	"
    />
    <polygon
      id="gfnbq_602_"
      class="gfnbq-${id}-st15"
      points="128.5,48.8 80.2,48.8 82.2,47.8 126.5,47.8 	"
    />
    <polygon
      id="gfnbq_601_"
      class="gfnbq-${id}-st15"
      points="128.5,52.4 80.2,52.4 82.2,51.4 126.5,51.4 	"
    />
    <polygon
      id="gfnbq_600_"
      class="gfnbq-${id}-st15"
      points="128.5,55.9 80.2,55.9 82.2,54.9 126.5,54.9 	"
    />
    <polygon
      id="gfnbq_599_"
      class="gfnbq-${id}-st15"
      points="128.5,59.5 80.2,59.5 82.2,58.5 126.5,58.5 	"
    />
    <polygon
      id="gfnbq_598_"
      class="gfnbq-${id}-st15"
      points="128.5,63 80.2,63 82.2,62 126.5,62 	"
    />
    <polygon
      id="gfnbq_597_"
      class="gfnbq-${id}-st15"
      points="128.5,66.6 80.2,66.6 82.2,65.6 126.5,65.6 	"
    />
    <polygon
      id="gfnbq_596_"
      class="gfnbq-${id}-st15"
      points="128.5,70.1 80.2,70.1 82.2,69.1 126.5,69.1 	"
    />
  </g>
  <g id="gfnbq_543_">
    <path
      id="gfnbq_546_"
      class="gfnbq-${id}-st17"
      d="M57.4,80.3c-1.5,0-2.6,1.2-2.6,2.6v10.4c0,1.5,1.2,2.6,2.6,2.6c1.5,0,2.6-1.2,2.6-2.6V82.9
        C60.1,81.4,58.9,80.3,57.4,80.3z"
    />
    <path
      id="gfnbq_114_"
      class="gfnbq-${id}-st18"
      d="M57.4,81.7c-0.8,0-1.4,0.6-1.4,1.4V93c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4v-9.9
        C58.8,82.3,58.2,81.7,57.4,81.7z"
    />
  </g>
  <g id="gfnbq_544_">
    <path
      id="gfnbq_547_"
      class="gfnbq-${id}-st17"
      d="M82.3,80.3c-1.5,0-2.6,1.2-2.6,2.6v10.4c0,1.5,1.2,2.6,2.6,2.6c1.5,0,2.6-1.2,2.6-2.6V82.9
        C84.9,81.4,83.7,80.3,82.3,80.3z"
    />
    <path
      id="gfnbq_545_"
      class="gfnbq-${id}-st18"
      d="M82.3,81.7c-0.8,0-1.4,0.6-1.4,1.4V93c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4v-9.9
        C83.7,82.3,83,81.7,82.3,81.7z"
    />
  </g>`;
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

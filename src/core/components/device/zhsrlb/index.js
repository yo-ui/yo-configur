import bmCommon from "@/common/common";
import Component from "@/core/Component";
import "../../../../assets/less/components/component/basic/display.less";
// 组合式热量表
class Display extends Component {
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
    <div class="bm-device-zhsrlb-com component"
    style="${this.composeStyles(this.comStyle())}">
    ${this.renderSvg()}
  </div>
    `
    );
  }

  renderSvgContent() {
    let { info = {} } = this;
    let { id = "", width = 0, height = 0 } = info || {};
    return `<g id="zhsrlb_1_">
    <linearGradient
      id="zhsrlb_3_"
      gradientUnits="userSpaceOnUse"
      x1="10.2998"
      y1="37.0145"
      x2="10.2998"
      y2="51.3401"
    >
      <stop offset="0" style="stop-color:#0E255A" />
      <stop offset="0.508" style="stop-color:#1456BB" />
      <stop offset="0.8382" style="stop-color:#103377" />
      <stop offset="1" style="stop-color:#0E255A" />
    </linearGradient>
    <path
      id="zhsrlb_992_"
      class="zhsrlb-${id}-st0"
      d="M13.5,51.9H6.7v-15h6.7c0,0,0.4,4,0.4,8S13.5,51.9,13.5,51.9z"
    />
    <linearGradient
      id="zhsrlb_4_"
      gradientUnits="userSpaceOnUse"
      x1="4.1167"
      y1="35.4814"
      x2="4.1167"
      y2="52.722"
    >
      <stop offset="0" style="stop-color:#845100" />
      <stop offset="0.1209" style="stop-color:#9C6D24" />
      <stop offset="0.3521" style="stop-color:#C69F64" />
      <stop offset="0.5209" style="stop-color:#E0BE8C" />
      <stop offset="0.6084" style="stop-color:#EACA9B" />
      <stop offset="1" style="stop-color:#BF7600" />
    </linearGradient>
    <rect
      id="zhsrlb_991_"
      y="35.3"
      class="zhsrlb-${id}-st1"
      width="8.2"
      height="18.1"
    />
    <linearGradient
      id="zhsrlb_5_"
      gradientUnits="userSpaceOnUse"
      x1="-896.4429"
      y1="37.0145"
      x2="-896.4429"
      y2="51.3401"
      gradientTransform="matrix(-1 0 0 1 -825.0268 0)"
    >
      <stop offset="0" style="stop-color:#0E255A" />
      <stop offset="0.508" style="stop-color:#1456BB" />
      <stop offset="0.8382" style="stop-color:#103377" />
      <stop offset="1" style="stop-color:#0E255A" />
    </linearGradient>
    <path
      id="zhsrlb_989_"
      class="zhsrlb-${id}-st2"
      d="M68.2,51.9H75v-15h-6.7c0,0-0.4,4-0.4,8S68.2,51.9,68.2,51.9z"
    />

    <linearGradient
      id="zhsrlb_6_"
      gradientUnits="userSpaceOnUse"
      x1="-902.626"
      y1="35.4814"
      x2="-902.626"
      y2="52.722"
      gradientTransform="matrix(-1 0 0 1 -825.0268 0)"
    >
      <stop offset="0" style="stop-color:#845100" />
      <stop offset="0.1209" style="stop-color:#9C6D24" />
      <stop offset="0.3521" style="stop-color:#C69F64" />
      <stop offset="0.5209" style="stop-color:#E0BE8C" />
      <stop offset="0.6084" style="stop-color:#EACA9B" />
      <stop offset="1" style="stop-color:#BF7600" />
    </linearGradient>
    <rect
      id="zhsrlb_982_"
      x="73.5"
      y="35.3"
      class="zhsrlb-${id}-st3"
      width="8.2"
      height="18.1"
    />
    <path
      id="zhsrlb_987_"
      class="zhsrlb-${id}-st4"
      d="M70,14.9H12L17.2,2c0.4-1.2,1.6-2,2.9-2h41.7c1.3,0,2.4,0.8,2.9,2L70,14.9z"
    />
    <path
      id="zhsrlb_986_"
      class="zhsrlb-${id}-st5"
      d="M66.7,67.4H15.3c-1.8,0-3.3-1.5-3.3-3.3V14.9c0-1.8,1.5-3.3,3.3-3.3h51.5
        c1.8,0,3.3,1.5,3.3,3.3v49.2C70,65.9,68.5,67.4,66.7,67.4z"
    />
    <path
      id="zhsrlb_984_"
      class="zhsrlb-${id}-st6"
      d="M63.2,62.1H18.7c-1,0-1.8-0.8-1.8-1.8V17.5c0-1,0.8-1.8,1.8-1.8h44.5c1,0,1.8,0.8,1.8,1.8
        v42.8C65,61.3,64.2,62.1,63.2,62.1z"
    />
    <path
      id="zhsrlb_983_"
      class="zhsrlb-${id}-st7"
      d="M63.2,59.5H18.7c-1,0-1.8-0.8-1.8-1.8v2.6c0,1,0.8,1.8,1.8,1.8h44.5c1,0,1.8-0.8,1.8-1.8v-2.6
        C65,58.7,64.2,59.5,63.2,59.5z"
    />
    <path
      id="zhsrlb_988_"
      class="zhsrlb-${id}-st8"
      d="M17.1,7.6h47.8c1.1,0,2,0.5,2.6,1.3l-1.8-4.5c-0.6-1-1.6-1.6-2.8-1.6H19
        c-1.2,0-2.3,0.7-2.8,1.6l-0.3,0.8c-0.1,0.3-0.2,0.4-0.3,0.7l-0.9,2.1l-0.4,1C14.9,8.3,15.9,7.6,17.1,7.6z"
    />
    <path
      id="zhsrlb_980_"
      class="zhsrlb-${id}-st9"
      d="M60.1,49.6H21.8V19.5h38.3V49.6z"
    />
    <rect
      id="zhsrlb_979_"
      x="25.7"
      y="40.4"
      class="zhsrlb-${id}-st10"
      width="4.5"
      height="2.5"
    />
    <rect
      id="zhsrlb_978_"
      x="33.7"
      y="40.4"
      class="zhsrlb-${id}-st10"
      width="4.5"
      height="2.5"
    />
    <rect
      id="zhsrlb_977_"
      x="25.5"
      y="44.9"
      class="zhsrlb-${id}-st10"
      width="30.3"
      height="1"
    />
    <g id="zhsrlb_967_">
      <rect
        id="zhsrlb_971_"
        x="26.8"
        y="24.8"
        class="zhsrlb-${id}-st11"
        width="28.3"
        height="12"
      />
      <path
        id="zhsrlb_968_"
        class="zhsrlb-${id}-st10"
        d="M56.1,37.8H25.8v-14h30.3V37.8z M27.8,35.8h26.3v-10H27.8V35.8z"
      />
    </g>
    <circle
      id="zhsrlb_972_"
      class="zhsrlb-${id}-st10"
      cx="26.3"
      cy="54.8"
      r="2.5"
    />
    <circle
      id="zhsrlb_973_"
      class="zhsrlb-${id}-st12"
      cx="26.3"
      cy="54.8"
      r="1.9"
    />
    <circle
      id="zhsrlb_975_"
      class="zhsrlb-${id}-st10"
      cx="55.3"
      cy="54.8"
      r="2.5"
    />
    <circle
      id="zhsrlb_974_"
      class="zhsrlb-${id}-st13"
      cx="55.3"
      cy="54.8"
      r="1.9"
    />
  </g>`;
  }
  renderSvg() {
    let { info = {} } = this;
    let { id = "", width = 0, height = 0 } = info || {};
    return `
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 82 68"
      width="${width}"
      height="${height}"
      xml:space="preserve"
      preserveAspectRatio="none"
    >
    <defs><style type='text/css'>
    .zhsrlb-${id}-st0{fill:url(#zhsrlb_3_);}
    .zhsrlb-${id}-st1{fill:url(#zhsrlb_4_);}
    .zhsrlb-${id}-st2{fill:url(#zhsrlb_5_);}
    .zhsrlb-${id}-st3{fill:url(#zhsrlb_6_);}
    .zhsrlb-${id}-st4{fill:#B6BCC1;}
    .zhsrlb-${id}-st5{fill:#DFE3E8;}
    .zhsrlb-${id}-st6{fill:#77A09F;}
    .zhsrlb-${id}-st7{fill:#5C7775;}
    .zhsrlb-${id}-st8{fill:#2C3F99;}
    .zhsrlb-${id}-st9{fill:#A6D1CE;}
    .zhsrlb-${id}-st10{fill:#25282B;}
    .zhsrlb-${id}-st11{fill:#848776;}
    .zhsrlb-${id}-st12{fill:#61BC31;}
    .zhsrlb-${id}-st13{fill:#D20000;}
    </style>
  </defs>
  ${this.renderSvgContent()}
    </svg>
    `;
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

  // //加载数据
  // loadData() {
  //   this.loadDeviceInfo();
  // }

  // //刷新内容
  // refreshContent(data) {
  //   let { info = {} } = this;
  //   let { point } = data || {};
  //   if (point) {
  //     let { value = "", unit = "" } = point || {};
  //     info.content = value;
  //     info.unit = unit;
  //     this.refresh();
  //   }
  // }

  event() {}
}

export default Display;

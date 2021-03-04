import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/display.less";
// 整体式热量表
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
    <div class="bm-device-ztsrlb-com component"
    style="${this.composeStyles(this.comStyle())}">
    ${this.renderSvg()}
  </div>
    `
    );
  }

  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    return `
    <linearGradient
        id="ztsrlb_2_"
        gradientUnits="userSpaceOnUse"
        x1="29.6592"
        y1="33.3974"
        x2="29.6592"
        y2="20.541"
      >
        <stop offset="0" style="stop-color:#845100" />
        <stop offset="0.1209" style="stop-color:#9C6D24" />
        <stop offset="0.3521" style="stop-color:#C69F64" />
        <stop offset="0.5209" style="stop-color:#E0BE8C" />
        <stop offset="0.6084" style="stop-color:#EACA9B" />
        <stop offset="1" style="stop-color:#BF7600" />
      </linearGradient>
      <rect
        id="ztsrlb_953_"
        x="7.4"
        y="20.5"
        class="ztsrlb-${id}-st0"
        width="44.5"
        height="12.9"
      />
      <rect
        id="ztsrlb_956_"
        x="49.8"
        y="20.5"
        class="ztsrlb-${id}-st1"
        width="2.2"
        height="12.9"
      />
      <rect
        id="ztsrlb_957_"
        x="7"
        y="20.5"
        class="ztsrlb-${id}-st1"
        width="2.2"
        height="12.9"
      />
      <linearGradient
        id="ztsrlb_3_"
        gradientUnits="userSpaceOnUse"
        x1="4.1167"
        y1="36.0038"
        x2="4.1167"
        y2="17.9347"
      >
        <stop offset="0" style="stop-color:#845100" />
        <stop offset="0.1209" style="stop-color:#9C6D24" />
        <stop offset="0.3521" style="stop-color:#C69F64" />
        <stop offset="0.5209" style="stop-color:#E0BE8C" />
        <stop offset="0.6084" style="stop-color:#EACA9B" />
        <stop offset="1" style="stop-color:#BF7600" />
      </linearGradient>
      <rect
        id="ztsrlb_951_"
        y="17.9"
        class="ztsrlb-${id}-st2"
        width="8.2"
        height="18.1"
      />
      <linearGradient
        id="ztsrlb_4_"
        gradientUnits="userSpaceOnUse"
        x1="55.1199"
        y1="36.0038"
        x2="55.1199"
        y2="17.9347"
      >
        <stop offset="0" style="stop-color:#845100" />
        <stop offset="0.1209" style="stop-color:#9C6D24" />
        <stop offset="0.3521" style="stop-color:#C69F64" />
        <stop offset="0.5209" style="stop-color:#E0BE8C" />
        <stop offset="0.6084" style="stop-color:#EACA9B" />
        <stop offset="1" style="stop-color:#BF7600" />
      </linearGradient>
      <rect
        id="ztsrlb_952_"
        x="51"
        y="17.9"
        class="ztsrlb-${id}-st3"
        width="8.2"
        height="18.1"
      />
      <rect
        id="ztsrlb_958_"
        x="18.8"
        y="24.7"
        class="ztsrlb-${id}-st4"
        width="3.4"
        height="3.2"
      />
      <rect
        id="ztsrlb_959_"
        x="37.2"
        y="24.7"
        class="ztsrlb-${id}-st4"
        width="3.4"
        height="3.2"
      />
      <path
        id="ztsrlb_955_"
        class="ztsrlb-${id}-st5"
        d="M42.3,26H17c-1.6,0-2.8-1.3-2.8-2.8V7.8C14.1,6.3,15.4,5,17,5h25.3c1.6,0,2.8,1.3,2.8,2.8v15.3
					C45.1,24.7,43.8,26,42.3,26z"
      />
      <path
        id="ztsrlb_954_"
        class="ztsrlb-${id}-st6"
        d="M42.3,21H17c-1.6,0-2.8-1.3-2.8-2.8V2.8C14.1,1.3,15.4,0,17,0h25.3c1.6,0,2.8,1.3,2.8,2.8v15.3
					C45.1,19.7,43.8,21,42.3,21z"
      />
      <g id="ztsrlb_960_">
        <rect
          id="ztsrlb_964_"
          x="18.2"
          y="4"
          class="ztsrlb-${id}-st7"
          width="22.9"
          height="8.7"
        />
        <path
          id="ztsrlb_961_"
          class="ztsrlb-${id}-st8"
          d="M42.1,13.7H17.2V3h24.9V13.7z M19.2,11.7h20.9V5H19.2V11.7z"
        />
      </g>
      <ellipse
        id="ztsrlb_965_"
        class="ztsrlb-${id}-st4"
        cx="29.3"
        cy="17.3"
        rx="2.8"
        ry="2.3"
      />
      <ellipse
        id="ztsrlb_966_"
        class="ztsrlb-${id}-st9"
        cx="29.3"
        cy="17.3"
        rx="1.9"
        ry="1.6"
      />`;
  }
  renderSvg() {
    let { info = {} } = this;
    let { id = "", width = 0, height = 0 } = info || {};
    return `
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 60 36"
      width="${width}"
      height="${height}"
      xml:space="preserve"
      preserveAspectRatio="none"
    >
    <defs><style type='text/css'>
    .ztsrlb-${id}-st0{fill:url(#ztsrlb_2_);}
     .ztsrlb-${id}-st1{opacity:0.15;}
     .ztsrlb-${id}-st2{fill:url(#ztsrlb_3_);}
     .ztsrlb-${id}-st3{fill:url(#ztsrlb_4_);}
     .ztsrlb-${id}-st4{fill:#21302F;}
     .ztsrlb-${id}-st5{fill:#415B5A;}
     .ztsrlb-${id}-st6{fill:#77A09F;}
     .ztsrlb-${id}-st7{fill:#848776;}
     .ztsrlb-${id}-st8{fill:#25282B;}
     .ztsrlb-${id}-st9{fill:#B60000;}
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

import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 插卡式水表
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
      <div
      class="bm-device-ckssb-com component"
      style="${this.composeStyles(this.comStyle())}"
    >
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
    viewBox="0 0 88 50"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
    .ckssb-${id}-st0{fill:url(#ckssb_${id}_2_);}
        .ckssb-${id}-st1{fill:url(#ckssb_${id}_3_);}
        .ckssb-${id}-st2{fill:#A5CDAD;}
        .ckssb-${id}-st3{fill:url(#ckssb_${id}_4_);}
        .ckssb-${id}-st4{fill:url(#ckssb_${id}_5_);}
        .ckssb-${id}-st5{fill:url(#ckssb_${id}_6_);}
        .ckssb-${id}-st6{fill:url(#ckssb_${id}_7_);}
        .ckssb-${id}-st7{fill:#A7AEB6;}
        .ckssb-${id}-st8{fill:#DFE2E8;}
        .ckssb-${id}-st9{fill:#FFFFFF;}
        .ckssb-${id}-st10{fill:#E04520;}
        .ckssb-${id}-st11{fill:#5D5F65;}
        .ckssb-${id}-st12{fill:#1D1E1E;}
        .ckssb-${id}-st13{fill:#838776;}
        .ckssb-${id}-st14{fill:#25282B;}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let text = `
    <linearGradient
      id="ckssb_${id}_2_"
      gradientUnits="userSpaceOnUse"
      x1="-895.6106"
      y1="19.6556"
      x2="-895.6106"
      y2="33.9811"
      gradientTransform="matrix(-1 0 0 1 -819.0268 0)"
    >
      <stop offset="0" style="stop-color:#182952" />
      <stop offset="0.508" style="stop-color:#1A54A5" />
      <stop offset="0.6204" style="stop-color:#1A498F" />
      <stop offset="0.8796" style="stop-color:#193161" />
      <stop offset="1" style="stop-color:#182952" />
    </linearGradient>
    <path
      id="ckssb_${id}_894_"
      class="ckssb-${id}-st0"
      d="M72.2,34.6h9.1v-15h-9.1c0,0-0.4,4-0.4,8S72.2,34.6,72.2,34.6z"
    />
    <linearGradient
      id="ckssb_${id}_3_"
      gradientUnits="userSpaceOnUse"
      x1="-902.9611"
      y1="18.1224"
      x2="-902.9611"
      y2="35.363"
      gradientTransform="matrix(-1 0 0 1 -819.0268 0)"
    >
      <stop offset="0" style="stop-color:#A7AEB6" />
      <stop offset="0.508" style="stop-color:#DFE2E8" />
      <stop offset="0.7632" style="stop-color:#C0C5CB" />
      <stop offset="1" style="stop-color:#A7AEB6" />
    </linearGradient>
    <rect
      id="ckssb_${id}_893_"
      x="79.8"
      y="18"
      class="ckssb-${id}-st1"
      width="8.2"
      height="18.1"
    />
    <path
      id="ckssb_${id}_904_"
      class="ckssb-${id}-st2"
      d="M75,28.8h-3.7c-0.8,0-1.5-0.7-1.5-1.5V12.5c0-0.8,0.7-1.5,1.5-1.5H75c0.8,0,1.5,0.7,1.5,1.5
        v14.8C76.5,28.1,75.9,28.8,75,28.8z"
    />
    <linearGradient
      id="ckssb_${id}_4_"
      gradientUnits="userSpaceOnUse"
      x1="13.492"
      y1="36.1269"
      x2="72.3183"
      y2="36.1269"
    >
      <stop offset="0" style="stop-color:#182952" />
      <stop offset="0.3155" style="stop-color:#1A54A5" />
      <stop offset="0.8717" style="stop-color:#1A54A5" />
      <stop offset="1" style="stop-color:#182952" />
    </linearGradient>
    <path
      id="ckssb_${id}_898_"
      class="ckssb-${id}-st3"
      d="M13.5,22.8v9.6c0.2,9.4,10,17.1,22,17.1h29.7c3.9,0,7.1-2.5,7.1-5.7v-9.7L13.5,22.8z"
    />
    <linearGradient
      id="ckssb_${id}_5_"
      gradientUnits="userSpaceOnUse"
      x1="10.2998"
      y1="19.6556"
      x2="10.2998"
      y2="33.9811"
    >
      <stop offset="0" style="stop-color:#182952" />
      <stop offset="0.508" style="stop-color:#1A54A5" />
      <stop offset="0.6204" style="stop-color:#1A498F" />
      <stop offset="0.8796" style="stop-color:#193161" />
      <stop offset="1" style="stop-color:#182952" />
    </linearGradient>
    <path
      id="ckssb_${id}_897_"
      class="ckssb-${id}-st4"
      d="M13.5,34.6H6.7v-15h6.7c0,0,0.4,4,0.4,8S13.5,34.6,13.5,34.6z"
    />
    <linearGradient
      id="ckssb_${id}_6_"
      gradientUnits="userSpaceOnUse"
      x1="4.1167"
      y1="18.1224"
      x2="4.1167"
      y2="35.363"
    >
      <stop offset="0" style="stop-color:#A7AEB6" />
      <stop offset="0.508" style="stop-color:#DFE2E8" />
      <stop offset="0.7632" style="stop-color:#C0C5CB" />
      <stop offset="1" style="stop-color:#A7AEB6" />
    </linearGradient>
    <rect
      id="ckssb_${id}_896_"
      y="18"
      class="ckssb-${id}-st5"
      width="8.2"
      height="18.1"
    />
    <linearGradient
      id="ckssb_${id}_7_"
      gradientUnits="userSpaceOnUse"
      x1="13.492"
      y1="28.321"
      x2="72.3183"
      y2="28.321"
    >
      <stop offset="0" style="stop-color:#B3B7BB" />
      <stop offset="0.3155" style="stop-color:#FFFFFF" />
      <stop offset="0.8717" style="stop-color:#FFFFFF" />
      <stop offset="1" style="stop-color:#B3B7BB" />
    </linearGradient>
    <path
      id="ckssb_${id}_891_"
      class="ckssb-${id}-st6"
      d="M13.5,17.5v5.1c0.2,9.4,10,17.1,22,17.1h29.7c3.9,0,7.1-2.5,7.1-5.7V16.9L13.5,17.5z"
    />
    <path
      id="ckssb_${id}_889_"
      class="ckssb-${id}-st7"
      d="M65.2,34.6H35.5c-12,0-21.9-7.7-22-17.1c-0.1-4.7,2.1-9.1,6.3-12.4C23.9,1.8,29.4,0,35.2,0h30
        c3.9,0,7.1,2.5,7.1,5.7v23.3C72.3,32.1,69.1,34.6,65.2,34.6z"
    />
    <path
      id="ckssb_${id}_888_"
      class="ckssb-${id}-st8"
      d="M56,0.9H35.2c-11.5,0-20.8,7.3-20.6,16.3C14.8,26,24.2,33,35.5,33H56V0.9z"
    />
    <path
      id="ckssb_${id}_887_"
      class="ckssb-${id}-st8"
      d="M65.2,0.9h-8.3V33h8.3c3.3,0,6-2.1,6-4.7V5.5C71.2,3,68.5,0.9,65.2,0.9z"
    />
    <ellipse
      id="ckssb_${id}_885_"
      class="ckssb-${id}-st9"
      cx="35.2"
      cy="16.9"
      rx="17.6"
      ry="13.7"
    />
    <ellipse
      id="ckssb_${id}_884_"
      class="ckssb-${id}-st10"
      cx="30.2"
      cy="8.6"
      rx="1.7"
      ry="1.4"
    />
    <ellipse
      id="ckssb_${id}_883_"
      class="ckssb-${id}-st10"
      cx="30.2"
      cy="25.3"
      rx="1.7"
      ry="1.4"
    />
    <ellipse
      id="ckssb_${id}_882_"
      class="ckssb-${id}-st10"
      cx="24.4"
      cy="14.1"
      rx="1.7"
      ry="1.4"
    />
    <ellipse
      id="ckssb_${id}_881_"
      class="ckssb-${id}-st10"
      cx="24.4"
      cy="20.8"
      rx="1.7"
      ry="1.4"
    />
    <rect
      id="ckssb_${id}_879_"
      x="44.3"
      y="12.5"
      class="ckssb-${id}-st11"
      width="4.3"
      height="1.8"
    />
    <rect
      id="ckssb_${id}_878_"
      x="44.3"
      y="16"
      class="ckssb-${id}-st11"
      width="4.3"
      height="1.8"
    />
    <rect
      id="ckssb_${id}_877_"
      x="44.3"
      y="19.5"
      class="ckssb-${id}-st11"
      width="4.3"
      height="1.8"
    />
    <ellipse
      id="ckssb_${id}_875_"
      class="ckssb-${id}-st12"
      cx="35.5"
      cy="16.9"
      rx="3.1"
      ry="2.4"
    />
    <path
      id="ckssb_${id}_874_"
      class="ckssb-${id}-st7"
      d="M35.2,4.1c9.5,0,17.3,5.9,17.6,13.3c0-0.2,0-0.3,0-0.5c0-7.6-7.9-13.7-17.6-13.7
        S17.6,9.4,17.6,16.9c0,0.2,0,0.3,0,0.5C18,10,25.7,4.1,35.2,4.1z"
    />
    <g id="ckssb_${id}_899_">
      <rect
        id="ckssb_${id}_903_"
        x="60.1"
        y="5.8"
        class="ckssb-${id}-st13"
        width="7.1"
        height="21.5"
      />
      <path
        id="ckssb_${id}_900_"
        class="ckssb-${id}-st14"
        d="M68.3,4.8v23.5h-9.1V4.8H68.3z M66.3,26.3V6.8h-5.1v19.5H66.3z"
      />
    </g>
  `;

    return text;
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let { id = "", content = "" } = info || {};
    let $container = $(`#${id}>.component`);
    $container.html(content);
  }

  event() {}
}

export default Text;

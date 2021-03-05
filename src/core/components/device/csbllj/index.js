import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 超时波流量计
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
      class="bm-device-csbllj-com component"
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
    viewBox="0 0 52 78"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
    .csbllj-${id}-st0{fill:url(#csbllj_${id}_2_);}
        .csbllj-${id}-st1{fill:#064289;}
        .csbllj-${id}-st2{fill:url(#csbllj_${id}_3_);}
        .csbllj-${id}-st3{fill:url(#csbllj_${id}_4_);}
        .csbllj-${id}-st4{fill:url(#csbllj_${id}_5_);}
        .csbllj-${id}-st5{fill:url(#csbllj_${id}_6_);}
        .csbllj-${id}-st6{fill:url(#csbllj_${id}_7_);}
        .csbllj-${id}-st7{fill:#AEB4BA;}
        .csbllj-${id}-st8{fill:url(#csbllj_${id}_8_);}
        .csbllj-${id}-st9{fill:url(#csbllj_${id}_9_);}
        .csbllj-${id}-st10{fill:#0E89D6;}
        .csbllj-${id}-st11{fill:#DFE3E8;}
        .csbllj-${id}-st12{fill:url(#csbllj_${id}_10_);}
        .csbllj-${id}-st13{fill:url(#csbllj_${id}_11_);}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let text = `

    <linearGradient
    id="csbllj_${id}_2_"
    gradientUnits="userSpaceOnUse"
    x1="-531.6956"
    y1="40.1939"
    x2="-531.6956"
    y2="78.6682"
    gradientTransform="matrix(-1 0 0 1 -483.3202 0)"
  >
    <stop offset="0" style="stop-color:#0D3A70" />
    <stop offset="0.5027" style="stop-color:#17A1E5" />
    <stop offset="1" style="stop-color:#0D3A70" />
  </linearGradient>
  <path
    id="csbllj_${id}_1684_"
    class="csbllj-${id}-st0"
    d="M45.1,39.6h3.7c1.6,0,2.8,8.6,2.8,19.1s-1.3,19.1-2.8,19.1h-3.7V39.6z"
  />
  <ellipse
    id="csbllj_${id}_1681_"
    class="csbllj-${id}-st1"
    cx="45.1"
    cy="58.8"
    rx="2.8"
    ry="19.1"
  />
  <linearGradient
    id="csbllj_${id}_3_"
    gradientUnits="userSpaceOnUse"
    x1="3.6246"
    y1="40.1939"
    x2="3.6246"
    y2="78.6682"
  >
    <stop offset="0" style="stop-color:#0D3A70" />
    <stop offset="0.5027" style="stop-color:#17A1E5" />
    <stop offset="1" style="stop-color:#0D3A70" />
  </linearGradient>
  <path
    id="csbllj_${id}_1680_"
    class="csbllj-${id}-st2"
    d="M6.9,39.6H3.2c-1.6,0-2.8,8.6-2.8,19.1s1.3,19.1,2.8,19.1h3.7V39.6z"
  />
  <ellipse
    id="csbllj_${id}_1679_"
    class="csbllj-${id}-st1"
    cx="6.9"
    cy="58.8"
    rx="2.8"
    ry="19.1"
  />
  <linearGradient
    id="csbllj_${id}_4_"
    gradientUnits="userSpaceOnUse"
    x1="26.0421"
    y1="47.3153"
    x2="26.0421"
    y2="69.029"
  >
    <stop offset="0" style="stop-color:#0D3A70" />
    <stop offset="0.3957" style="stop-color:#17A1E5" />
    <stop offset="0.9412" style="stop-color:#0D2257" />
  </linearGradient>
  <path
    id="csbllj_${id}_1676_"
    class="csbllj-${id}-st3"
    d="M45.2,47.3H7.3c-0.7,0-1.6,4.9-1.6,11s0.9,11,1.6,11h37.9c0,0,1.2-3.2,1.2-11
      S45.2,47.3,45.2,47.3z"
  />
  <linearGradient
    id="csbllj_${id}_5_"
    gradientUnits="userSpaceOnUse"
    x1="13.2124"
    y1="52.4469"
    x2="38.5343"
    y2="52.4469"
  >
    <stop offset="0" style="stop-color:#0D3A70" />
    <stop offset="0.4992" style="stop-color:#17A1E5" />
    <stop offset="0.587" style="stop-color:#1690D2" />
    <stop offset="0.7654" style="stop-color:#1264A1" />
    <stop offset="1" style="stop-color:#0D2257" />
  </linearGradient>
  <path
    id="csbllj_${id}_1673_"
    class="csbllj-${id}-st4"
    d="M13.2,42.5v6.8c0,4.6,5.7,13.1,12.7,13.1c7,0,12.7-8.5,12.7-13.1v-6.8H13.2z"
  />
  <linearGradient
    id="csbllj_${id}_6_"
    gradientUnits="userSpaceOnUse"
    x1="25.8734"
    y1="42.4862"
    x2="25.8734"
    y2="62.4077"
  >
    <stop offset="0.5369" style="stop-color:#0D3A70;stop-opacity:0" />
    <stop offset="1" style="stop-color:#0D2257;stop-opacity:0.8" />
  </linearGradient>
  <path
    id="csbllj_${id}_1672_"
    class="csbllj-${id}-st5"
    d="M13.2,42.5v6.8c0,4.6,5.7,13.1,12.7,13.1c7,0,12.7-8.5,12.7-13.1v-6.8H13.2z"
  />
  <ellipse
    id="csbllj_${id}_1671_"
    class="csbllj-${id}-st1"
    cx="25.9"
    cy="42.5"
    rx="12.7"
    ry="8.4"
  />
  <linearGradient
    id="csbllj_${id}_7_"
    gradientUnits="userSpaceOnUse"
    x1="20.0945"
    y1="40.3899"
    x2="32.227"
    y2="40.3899"
  >
    <stop offset="0" style="stop-color:#ACB1B9" />
    <stop offset="0.4813" style="stop-color:#FFFFFF" />
    <stop offset="1" style="stop-color:#A9AEB7" />
  </linearGradient>
  <path
    id="csbllj_${id}_1666_"
    class="csbllj-${id}-st6"
    d="M20.1,35.4v7.1c0,1.6,2.7,2.9,6.1,2.9c3.4,0,6.1-1.3,6.1-2.9v-7.1H20.1z"
  />
  <ellipse
    id="csbllj_${id}_1665_"
    class="csbllj-${id}-st7"
    cx="26.2"
    cy="35.4"
    rx="6.1"
    ry="2.9"
  />
  <linearGradient
    id="csbllj_${id}_8_"
    gradientUnits="userSpaceOnUse"
    x1="22.2584"
    y1="31.9907"
    x2="30.0631"
    y2="31.9907"
  >
    <stop offset="0" style="stop-color:#83878E" />
    <stop offset="0.4813" style="stop-color:#D9DDE2" />
    <stop offset="1" style="stop-color:#83878E" />
  </linearGradient>
  <path
    id="csbllj_${id}_1664_"
    class="csbllj-${id}-st8"
    d="M22.3,26.9v8.6c0,0.9,1.7,1.6,3.9,1.6c2.2,0,3.9-0.7,3.9-1.6v-8.6H22.3z"
  />
  <linearGradient
    id="csbllj_${id}_9_"
    gradientUnits="userSpaceOnUse"
    x1="12.8512"
    y1="8.4611"
    x2="38.7976"
    y2="8.4611"
  >
    <stop offset="0" style="stop-color:#0E255A" />
    <stop offset="0.5" style="stop-color:#1456BB" />
    <stop offset="1" style="stop-color:#0E255A" />
  </linearGradient>
  <path
    id="csbllj_${id}_1663_"
    class="csbllj-${id}-st9"
    d="M38.8,11.9C38.8,5.3,33,0,25.8,0s-13,5.3-13,11.9v5h25.9V11.9z"
  />
  <ellipse
    id="csbllj_${id}_1662_"
    class="csbllj-${id}-st10"
    cx="25.8"
    cy="16.9"
    rx="13"
    ry="11.9"
  />
  <ellipse
    id="csbllj_${id}_1661_"
    class="csbllj-${id}-st11"
    cx="25.8"
    cy="16.9"
    rx="10.7"
    ry="9.8"
  />
  <linearGradient
    id="csbllj_${id}_10_"
    gradientUnits="userSpaceOnUse"
    x1="15.0936"
    y1="21.3323"
    x2="36.5552"
    y2="21.3323"
  >
    <stop offset="0" style="stop-color:#0E255A" />
    <stop offset="0.5" style="stop-color:#1456BB" />
    <stop offset="1" style="stop-color:#0E255A" />
  </linearGradient>
  <path
    id="csbllj_${id}_1638_"
    class="csbllj-${id}-st12"
    d="M25.8,24.7c-5.6,0-10.1-3.9-10.7-8.8c0,0.3-0.1,0.7-0.1,1c0,5.4,4.8,9.8,10.7,9.8
      c5.9,0,10.7-4.4,10.7-9.8c0-0.3,0-0.7-0.1-1C36,20.9,31.4,24.7,25.8,24.7z"
  />
  <linearGradient
    id="csbllj_${id}_11_"
    gradientUnits="userSpaceOnUse"
    x1="25.7755"
    y1="17.6441"
    x2="25.7755"
    y2="12.6982"
  >
    <stop offset="0" style="stop-color:#505156" />
    <stop offset="1" style="stop-color:#000000" />
  </linearGradient>
  <rect
    id="csbllj_${id}_1637_"
    x="18.7"
    y="12.3"
    class="csbllj-${id}-st13"
    width="14.1"
    height="5.6"
  />`;

    return text;
  }

  // renderSvg(){
  //   return ``
  // }
  // renderSvgContent(){
  // return ``
  // }

  // //加载数据
  // loadData() {
  //   this.loadDeviceInfo();
  // }

  // //刷新内容
  // refreshContent(data) {
  //   let { info = {} } = this;
  //   let { point } = data || {};
  //   if (point) {
  //     let { value = "" } = point || {};
  //     info.content = value;
  //     this.refresh();
  //   }
  // }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    bmCommon.log(`${info.type}刷新 `);
    let { id = "", height = 0, width = 0 } = info || {};
    let $container = $(`#${id}>.component`);
    let $svg = $container.find("svg");
    // $container.html(this.renderSvg());
    $svg.attr({ width, height });
  }

  event() {}
}

export default Text;

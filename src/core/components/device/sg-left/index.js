import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 电表
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
    viewBox="0 0 70 69"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
    .db-${id}-st0 {
        fill: url(#db_${id}_1_);
      }
      .db-${id}-st1 {
        fill: #dfe3e8;
      }
      .db-${id}-st2 {
        fill: url(#db_${id}_11_);
      }
      .db-${id}-st3 {
        fill: #ffffff;
      }
      .db-${id}-st4 {
        fill: #c2c8ce;
      }
      .db-${id}-st5 {
        fill: #848776;
      }
      .db-${id}-st6 {
        fill: #25282b;
      }
      .db-${id}-st7 {
        fill: #8f9499;
      }
      .db-${id}-st8 {
        fill: #5b280e;
      }
      .db-${id}-st9 {
        fill: #f95d06;
      }
      .db-${id}-st10 {
        fill: url(#db_${id}_12_);
      }
      .db-${id}-st11 {
        opacity: 0.4;
        fill: #ff0000;
      }
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {}, pointValue } = this;
    let { id = "" } = info || {};
    let text = `
  <g>
    <linearGradient
      id="db_${id}_1_"
      gradientUnits="userSpaceOnUse"
      x1="60.525"
      y1="62.945"
      x2="54.1179"
      y2="57.8484"
    >
      <stop offset="0" style="stop-color:#C2C8CE" />
      <stop offset="1" style="stop-color:#848689" />
    </linearGradient>
    <path
      class="db-${id}-st0"
      d="M67.73,41h-54.5v10.34c0,1.9,1.54,3.44,3.44,3.44h33.57l5.49,12.81l10.94-13.77c0.21-0.2,0.39-0.44,0.55-0.69
              l0.04-0.05l-0.01-0.01c0.3-0.51,0.48-1.1,0.48-1.73V41z"
    />
    <path
      id="db_${id}_657_"
      class="db-${id}-st1"
      d="M56.5,55.08H2v10.34c0,1.9,1.54,3.44,3.44,3.44h47.62c1.9,0,3.44-1.54,3.44-3.44V55.08z"
    />
    <linearGradient
      id="db_${id}_11_"
      gradientUnits="userSpaceOnUse"
      x1="29.2499"
      y1="58.6952"
      x2="29.2499"
      y2="49.8142"
    >
      <stop offset="0" style="stop-color:#000000;stop-opacity:0" />
      <stop offset="1" style="stop-color:#000000" />
    </linearGradient>
    <rect
      id="db_${id}_658_"
      x="2"
      y="54.06"
      class="db-${id}-st2"
      width="54.5"
      height="8.88"
    />
    <rect
      id="db_${id}_656_"
      x="1"
      y="15.08"
      class="db-${id}-st3"
      width="56.5"
      height="39"
    />
    <path
      id="db_${id}_653_"
      class="db-${id}-st1"
      d="M58.5,55.08H0v-41h58.5V55.08z M2,53.08h54.5v-37H2V53.08z"
    />
    <polygon
      id="db_${id}_652_"
      class="db-${id}-st4"
      points="58.5,14.08 0,14.08 12.23,0 69.73,0 	"
    />
    <g id="db_${id}_647_">
      <rect
        id="db_${id}_651_"
        x="9.5"
        y="21.5"
        class="db-${id}-st5"
        width="40"
        height="12"
      />
      <path
        id="db_${id}_648_"
        class="db-${id}-st6"
        d="M50.5,34.5h-42v-14h42V34.5z M10.5,32.5h38v-10h-38V32.5z"
      />
    </g>
    <circle
      id="db_${id}_646_"
      class="db-${id}-st7"
      cx="11.97"
      cy="63.16"
      r="2.03"
    />
    <circle
      id="db_${id}_645_"
      class="db-${id}-st7"
      cx="29.22"
      cy="63.16"
      r="2.03"
    />
    <circle
      id="db_${id}_659_"
      class="db-${id}-st7"
      cx="46.22"
      cy="63.16"
      r="2.03"
    />
    <rect
      id="db_${id}_644_"
      x="9.74"
      y="36.5"
      class="db-${id}-st6"
      width="4.48"
      height="2.5"
    />
    <rect
      id="db_${id}_643_"
      x="19.74"
      y="36.5"
      class="db-${id}-st6"
      width="4.48"
      height="2.5"
    />
    <rect
      id="db_${id}_635_"
      x="29.74"
      y="36.5"
      class="db-${id}-st6"
      width="4.48"
      height="2.5"
    />
    <rect
      id="db_${id}_634_"
      x="39.74"
      y="36.5"
      class="db-${id}-st6"
      width="4.48"
      height="2.5"
    />
    <rect
      id="db_${id}_6_"
      x="8.74"
      y="37.5"
      class="db-${id}-st7"
      width="4.48"
      height="2.5"
    />
    <rect
      id="db_${id}_5_"
      x="18.74"
      y="37.5"
      class="db-${id}-st7"
      width="4.48"
      height="2.5"
    />
    <rect
      id="db_${id}_4_"
      x="28.74"
      y="37.5"
      class="db-${id}-st7"
      width="4.48"
      height="2.5"
    />
    <rect
      id="db_${id}_2_"
      x="38.74"
      y="37.5"
      class="db-${id}-st7"
      width="4.48"
      height="2.5"
    />
    <rect
      id="db_${id}_632_"
      x="9.61"
      y="44.98"
      class="db-${id}-st8"
      width="6.72"
      height="3.69"
    />
    <rect
      id="db_${id}_552_"
      x="19.61"
      y="44.98"
      class="db-${id}-st8"
      width="6.72"
      height="3.69"
    />
    <rect
      id="db_${id}_551_"
      x="29.61"
      y="44.98"
      class="db-${id}-st8"
      width="6.72"
      height="3.69"
    />
    <rect
      id="db_${id}_9_"
      x="8.61"
      y="45.98"
      class="db-${id}-st9"
      width="6.72"
      height="3.69"
    />
    <rect
      id="db_${id}_8_"
      x="18.61"
      y="45.98"
      class="db-${id}-st9"
      width="6.72"
      height="3.69"
    />
    <rect
      id="db_${id}_7_"
      x="28.61"
      y="45.98"
      class="db-${id}-st9"
      width="6.72"
      height="3.69"
    />
    <rect
      id="db_${id}_550_"
      x="8.48"
      y="42.05"
      class="db-${id}-st4"
      width="36.74"
      height="1"
    />
    <linearGradient
      id="db_${id}_12_"
      gradientUnits="userSpaceOnUse"
      x1="64.1155"
      y1="55.0819"
      x2="64.1155"
      y2="0"
    >
      <stop offset="0" style="stop-color:#C2C8CE" />
      <stop offset="1" style="stop-color:#848689" />
    </linearGradient>
    <path
      id="db_${id}_1_"
      class="db-${id}-st10"
      d="M69.73,41L58.5,55.08v-41L69.73,0V41z"
    />
  </g>`;
    if (pointValue == 2) {
      text += `
  <g class="SVG_alert" >
    <path
      class="db-${id}-st11"
      d="M69.73,0h-57.5L0,14.08v41h2v7.86v2.48c0,1.9,1.54,3.44,3.44,3.44h47.62c1.08,0,2.04-0.51,2.67-1.29
              l0.01,0.01l10.94-13.77c0.21-0.2,0.39-0.44,0.55-0.69l0.04-0.05l-0.01-0.01c0.3-0.51,0.48-1.1,0.48-1.73v-7.84l2-2.51V0z"
    />
  </g>`;
    }
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
    let { id = "" } = info || {};
    let $container = $(`#${id}>.component`);
    $container.html(this.renderSvg());
  }

  event() {}
}

export default Text;

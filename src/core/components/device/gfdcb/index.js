// import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 光伏电池板
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
    <div class="bm-device-gfdcb-com component"
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
    viewBox="0 0 182 136"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
    .gfdcb-${id}-st0{fill-rule:evenodd;clip-rule:evenodd;fill:#AFB6BC;}
    .gfdcb-${id}-st1{fill-rule:evenodd;clip-rule:evenodd;fill:#5C656D;}
    .gfdcb-${id}-st2{fill-rule:evenodd;clip-rule:evenodd;fill:url(#gfdcb_${id}_2_);}
    .gfdcb-${id}-st3{fill-rule:evenodd;clip-rule:evenodd;fill:#C2C8CE;}
    .gfdcb-${id}-st4{fill-rule:evenodd;clip-rule:evenodd;fill:#DFE3E8;}
    .gfdcb-${id}-st5{fill-rule:evenodd;clip-rule:evenodd;fill:url(#gfdcb_${id}_3_);}
    .gfdcb-${id}-st6{fill:#DFE3E8;}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let text = `

    <rect
    id="gfdcb_${id}_1282_"
    x="8.7"
    y="130.5"
    class="gfdcb-${id}-st0"
    width="162"
    height="4.8"
  />
  <polygon
    id="gfdcb_${id}_1283_"
    class="gfdcb-${id}-st1"
    points="17.7,131 32.7,108.8 32.7,104.3 17.7,125.5 "
  />
  <polygon
    id="gfdcb_${id}_1284_"
    class="gfdcb-${id}-st1"
    points="161.7,130 148.7,108.8 148.7,104.3 161.7,125.5 "
  />
  <linearGradient
    id="gfdcb_${id}_2_"
    gradientUnits="userSpaceOnUse"
    x1="89.7212"
    y1="113.1659"
    x2="89.7212"
    y2="129.3588"
  >
    <stop offset="0.4171" style="stop-color:#66696D" />
    <stop offset="0.9894" style="stop-color:#91959B" />
  </linearGradient>
  <path
    id="gfdcb_${id}_1287_"
    class="gfdcb-${id}-st2"
    d="M150.7,100.3h-121l-21,30.2h162L150.7,100.3z M32.7,104.3h116l13,21.2h-144L32.7,104.3z"
  />
  <g id="gfdcb_${id}_1260_">
    <path
      id="gfdcb_${id}_1185_"
      class="gfdcb-${id}-st3"
      d="M178.3,116H3.4c-1.9,0-3.4-1.5-3.4-3.4v-3.8h181.7v3.8C181.7,114.5,180.2,116,178.3,116z"
    />
    <path
      id="gfdcb_${id}_1257_"
      class="gfdcb-${id}-st4"
      d="M28.8,0h123.9c1.1,0,2.3,0.9,2.6,2.1l26,105c0.6,2.3-0.3,4.2-1.9,4.2H2.1
        c-1.6,0-2.5-1.9-1.9-4.2l26-105C26.5,0.9,27.6,0,28.8,0z"
    />
    <g id="gfdcb_${id}_1186_">
      <g id="gfdcb_${id}_165_">
        <linearGradient
          id="gfdcb_${id}_3_"
          gradientUnits="userSpaceOnUse"
          x1="36.3998"
          y1="-3.7911"
          x2="132.4001"
          y2="122.5613"
        >
          <stop offset="0.1979" style="stop-color:#3B62AF" />
          <stop offset="0.5027" style="stop-color:#B6DCF3" />
          <stop offset="0.7968" style="stop-color:#345DAC" />
          <stop offset="0.9894" style="stop-color:#345DAC" />
        </linearGradient>
        <path
          id="gfdcb_${id}_166_"
          class="gfdcb-${id}-st5"
          d="M30.4,17.6h18.4c1.6,0,3.1-1.4,3.4-3.1l1.2-8.2c0.2-1.6-0.8-2.9-2.4-2.9H33.5
            c-1.5,0-3.1,1.3-3.4,2.9l-1.9,8.2C27.8,16.2,28.8,17.6,30.4,17.6z M56.2,17.6h18.4c1.6,0,3-1.4,3.1-3.1L78,6.3
            c0.1-1.6-1.1-2.9-2.7-2.9H57.9c-1.5,0-3,1.3-3.2,2.9l-1.1,8.2C53.4,16.2,54.5,17.6,56.2,17.6z M81.9,17.6h18.4
            c1.6,0,2.9-1.4,2.8-3.1l-0.4-8.2c-0.1-1.6-1.4-2.9-2.9-2.9H82.4c-1.5,0-2.8,1.3-2.9,2.9l-0.3,8.2C79,16.2,80.3,17.6,81.9,17.6z
             M107.6,17.6H126c1.6,0,2.7-1.4,2.5-3.1l-1.1-8.2c-0.2-1.6-1.6-2.9-3.2-2.9h-17.4c-1.5,0-2.7,1.3-2.6,2.9l0.4,8.2
            C104.6,16.2,106,17.6,107.6,17.6z M130,14.5c0.2,1.7,1.8,3.1,3.4,3.1h18.4c1.6,0,2.6-1.4,2.2-3.1l-1.9-8.2
            c-0.4-1.6-1.9-2.9-3.5-2.9h-17.4c-1.5,0-2.6,1.3-2.4,2.9L130,14.5z M26.6,35.2h19.5c1.7,0,3.4-1.6,3.6-3.5l1.3-9.2
            c0.3-1.8-0.9-3.2-2.5-3.2H30.1c-1.6,0-3.3,1.4-3.7,3.2l-2.1,9.2C23.8,33.6,24.9,35.2,26.6,35.2z M77.3,22.4
            c0.1-1.8-1.2-3.2-2.8-3.2H56c-1.6,0-3.2,1.4-3.4,3.2l-1.3,9.2c-0.3,1.9,0.9,3.5,2.7,3.5h19.5c1.7,0,3.2-1.6,3.3-3.5L77.3,22.4z
             M81.3,35.2h19.5c1.7,0,3.1-1.6,3-3.5l-0.4-9.2c-0.1-1.8-1.5-3.2-3.1-3.2H81.8c-1.6,0-3,1.4-3.1,3.2l-0.4,9.2
            C78.3,33.6,79.6,35.2,81.3,35.2z M108.7,35.2h19.5c1.7,0,2.9-1.6,2.6-3.5l-1.3-9.2c-0.2-1.8-1.8-3.2-3.4-3.2h-18.5
            c-1.6,0-2.9,1.4-2.8,3.2l0.5,9.2C105.5,33.6,107,35.2,108.7,35.2z M133.6,19.2c-1.6,0-2.8,1.4-2.5,3.2l1.3,9.2
            c0.3,1.9,1.9,3.5,3.6,3.5h19.5c1.7,0,2.8-1.6,2.3-3.5l-2.1-9.2c-0.4-1.8-2.1-3.2-3.7-3.2H133.6z M22.2,55.1h20.9
            c1.8,0,3.6-1.8,3.9-4l1.5-10.5c0.3-2-0.9-3.6-2.6-3.6H26.2c-1.7,0-3.5,1.6-4,3.6l-2.4,10.5C19.3,53.3,20.4,55.1,22.2,55.1z
             M73.4,37H53.7c-1.7,0-3.4,1.6-3.6,3.6l-1.4,10.5c-0.3,2.2,1,4,2.8,4h20.9c1.8,0,3.4-1.8,3.5-4l0.5-10.5
            C76.5,38.6,75.2,37,73.4,37z M80.7,55.1h20.9c1.8,0,3.3-1.8,3.2-4l-0.5-10.5c-0.1-2-1.6-3.6-3.3-3.6H81.3c-1.7,0-3.2,1.6-3.3,3.6
            l-0.4,10.5C77.4,53.3,78.9,55.1,80.7,55.1z M109.9,55.1h20.9c1.8,0,3.1-1.8,2.8-4l-1.5-10.5c-0.3-2-1.9-3.6-3.7-3.6h-19.7
            c-1.7,0-3.1,1.6-3,3.6l0.5,10.5C106.5,53.3,108.1,55.1,109.9,55.1z M136.4,37c-1.7,0-2.9,1.6-2.6,3.6l1.5,10.5
            c0.3,2.2,2.1,4,3.9,4H160c1.8,0,2.9-1.8,2.4-4L160,40.6c-0.5-2-2.3-3.6-4-3.6H136.4z M17.3,77.9h22.4c2,0,3.9-2.1,4.2-4.6l1.7-12
            c0.3-2.3-0.9-4.2-2.8-4.2h-21c-1.9,0-3.8,1.8-4.3,4.2l-2.8,12C14.1,75.9,15.3,77.9,17.3,77.9z M72.2,57.2h-21
            c-1.9,0-3.6,1.8-3.9,4.2l-1.6,12c-0.3,2.5,1,4.6,3,4.6H71c2,0,3.7-2.1,3.8-4.6l0.6-12C75.5,59,74.1,57.2,72.2,57.2z M80,77.9
            h22.4c2,0,3.5-2.1,3.4-4.6l-0.5-12c-0.1-2.3-1.7-4.2-3.6-4.2h-21c-1.9,0-3.4,1.8-3.5,4.2l-0.5,12C76.5,75.9,78,77.9,80,77.9z
             M111.3,77.9h22.4c2,0,3.3-2.1,2.9-4.6l-1.7-12c-0.3-2.3-2.1-4.2-3.9-4.2h-21c-1.9,0-3.3,1.8-3.2,4.2l0.6,12
            C107.6,75.9,109.3,77.9,111.3,77.9z M139.5,57.2c-1.9,0-3.1,1.8-2.8,4.2l1.7,12c0.4,2.5,2.3,4.6,4.2,4.6h22.4
            c2,0,3.1-2.1,2.5-4.6l-2.8-12c-0.5-2.3-2.5-4.2-4.3-4.2H139.5z M39.3,80.3H16.7c-2,0-4.1,2.1-4.7,4.8L8.8,99
            c-0.7,2.9,0.5,5.3,2.6,5.3h24.2c2.1,0,4.2-2.4,4.6-5.3l2-13.9C42.6,82.4,41.3,80.3,39.3,80.3z M70.9,80.3H48.3
            c-2,0-3.9,2.1-4.3,4.8L42.2,99c-0.4,2.9,1,5.3,3.1,5.3h24.2c2.1,0,4-2.4,4.1-5.3l0.7-13.9C74.4,82.4,72.9,80.3,70.9,80.3z
             M102.4,80.3H79.9c-2,0-3.7,2.1-3.8,4.8L75.5,99c-0.1,2.9,1.5,5.3,3.6,5.3h24.2c2.1,0,3.8-2.4,3.6-5.3l-0.6-13.9
            C106.2,82.4,104.4,80.3,102.4,80.3z M138.3,85.1c-0.4-2.7-2.3-4.8-4.3-4.8h-22.6c-2,0-3.5,2.1-3.4,4.8l0.7,13.9
            c0.1,2.9,2,5.3,4.1,5.3h24.2c2.1,0,3.5-2.4,3.1-5.3L138.3,85.1z M173.6,99l-3.2-13.9c-0.6-2.7-2.7-4.8-4.7-4.8H143
            c-2,0-3.3,2.1-2.9,4.8l2,13.9c0.4,2.9,2.5,5.3,4.6,5.3h24.2C173.1,104.4,174.2,101.9,173.6,99z"
        />
      </g>
    </g>
    <g id="gfdcb_${id}_1259_">
      <rect
        id="gfdcb_${id}_1262_"
        x="29"
        y="5.7"
        class="gfdcb-${id}-st6"
        width="125.5"
        height="0.3"
      />
      <rect
        id="gfdcb_${id}_1263_"
        x="29"
        y="8.7"
        class="gfdcb-${id}-st6"
        width="125.5"
        height="0.3"
      />
      <rect
        id="gfdcb_${id}_1264_"
        x="27.2"
        y="11.7"
        class="gfdcb-${id}-st6"
        width="127.3"
        height="0.3"
      />
      <rect
        id="gfdcb_${id}_1267_"
        x="26.2"
        y="14.7"
        class="gfdcb-${id}-st6"
        width="129.5"
        height="0.3"
      />
      <rect
        id="gfdcb_${id}_1266_"
        x="25.2"
        y="21.8"
        class="gfdcb-${id}-st6"
        width="132.9"
        height="0.3"
      />
      <rect
        id="gfdcb_${id}_1265_"
        x="24.4"
        y="25.1"
        class="gfdcb-${id}-st6"
        width="133.4"
        height="0.3"
      />
      <rect
        id="gfdcb_${id}_1268_"
        x="23.8"
        y="28.4"
        class="gfdcb-${id}-st6"
        width="135.2"
        height="0.3"
      />
      <rect
        id="gfdcb_${id}_1271_"
        x="21.9"
        y="31.7"
        class="gfdcb-${id}-st6"
        width="137.9"
        height="0.3"
      />
      <rect
        id="gfdcb_${id}_1270_"
        x="19.4"
        y="40.2"
        class="gfdcb-${id}-st6"
        width="142.6"
        height="0.3"
      />
      <rect
        id="gfdcb_${id}_1269_"
        x="18.5"
        y="43.8"
        class="gfdcb-${id}-st6"
        width="143.2"
        height="0.3"
      />
      <rect
        id="gfdcb_${id}_1272_"
        x="17.9"
        y="47.5"
        class="gfdcb-${id}-st6"
        width="145.1"
        height="0.3"
      />
      <rect
        id="gfdcb_${id}_1275_"
        x="16.2"
        y="51.1"
        class="gfdcb-${id}-st6"
        width="148"
        height="0.3"
      />
      <rect
        id="gfdcb_${id}_1274_"
        x="15.5"
        y="60.7"
        class="gfdcb-${id}-st6"
        width="151.8"
        height="0.3"
      />
      <rect
        id="gfdcb_${id}_1273_"
        x="14.4"
        y="64.9"
        class="gfdcb-${id}-st6"
        width="152.3"
        height="0.3"
      />
      <rect
        id="gfdcb_${id}_1276_"
        x="13.7"
        y="69.1"
        class="gfdcb-${id}-st6"
        width="154.4"
        height="0.3"
      />
      <rect
        id="gfdcb_${id}_1279_"
        x="11.8"
        y="73.3"
        class="gfdcb-${id}-st6"
        width="157.4"
        height="0.3"
      />
      <rect
        id="gfdcb_${id}_1278_"
        x="11"
        y="84.3"
        class="gfdcb-${id}-st6"
        width="161.5"
        height="0.3"
      />
      <rect
        id="gfdcb_${id}_1277_"
        x="10.3"
        y="89.2"
        class="gfdcb-${id}-st6"
        width="162.1"
        height="0.3"
      />
      <rect
        id="gfdcb_${id}_1280_"
        x="9.6"
        y="94.2"
        class="gfdcb-${id}-st6"
        width="164.3"
        height="0.3"
      />
      <rect
        id="gfdcb_${id}_1281_"
        x="7.5"
        y="99.1"
        class="gfdcb-${id}-st6"
        width="167.6"
        height="0.3"
      />
    </g>
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

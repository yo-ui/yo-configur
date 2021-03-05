import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// IO控制模块
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
    <div class="bm-device-iokzmk-com component"
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
    viewBox="0 0 53 48"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
    .iokzmk-${id}-st0{fill:#DFE3E8;}
    .iokzmk-${id}-st1{fill:#FFFFFF;}
    .iokzmk-${id}-st2{fill:#C2C8CE;}
    .iokzmk-${id}-st3{fill:#8F9499;}
    .iokzmk-${id}-st4{fill:#3E8C5D;}
    .iokzmk-${id}-st5{fill:#65B786;}
    .iokzmk-${id}-st6{fill:#073319;}
    .iokzmk-${id}-st7{opacity:0.2;}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let text = `
    <g id="iokzmk_1301_">
    <rect
      id="iokzmk_1309_"
      x="2"
      y="39.5"
      class="iokzmk-${id}-st0"
      width="49"
      height="8.1"
    />
    <rect
      id="iokzmk_1308_"
      x="1"
      y="15.5"
      class="iokzmk-${id}-st1"
      width="51"
      height="23"
    />
    <path
      id="iokzmk_1305_"
      class="iokzmk-${id}-st0"
      d="M53,39.5H0v-25h53V39.5z M2,37.5h49v-21H2V37.5z"
    />
    <polygon
      id="iokzmk_1304_"
      class="iokzmk-${id}-st2"
      points="53,14.5 0,14.5 2,10.1 51,10.1 	"
    />
    <rect
      id="iokzmk_1303_"
      x="2"
      y="1.4"
      class="iokzmk-${id}-st0"
      width="49"
      height="8.7"
    />
    <polygon
      id="iokzmk_1302_"
      class="iokzmk-${id}-st2"
      points="50,0 3,0 2,1.4 51,1.4 	"
    />
  </g>
  <g id="iokzmk_1296_">
    <rect
      id="iokzmk_1291_"
      x="5.9"
      y="19.8"
      class="iokzmk-${id}-st3"
      width="4.5"
      height="2.5"
    />
    <rect
      id="iokzmk_1290_"
      x="14.9"
      y="19.8"
      class="iokzmk-${id}-st3"
      width="4.5"
      height="2.5"
    />
    <rect
      id="iokzmk_1292_"
      x="23.9"
      y="19.8"
      class="iokzmk-${id}-st3"
      width="4.5"
      height="2.5"
    />
    <rect
      id="iokzmk_1294_"
      x="32.9"
      y="19.8"
      class="iokzmk-${id}-st3"
      width="4.5"
      height="2.5"
    />
    <rect
      id="iokzmk_1295_"
      x="42.9"
      y="19.8"
      class="iokzmk-${id}-st3"
      width="4.5"
      height="2.5"
    />
  </g>
  <g id="iokzmk_1297_">
    <rect
      id="iokzmk_1312_"
      x="5.9"
      y="31.8"
      class="iokzmk-${id}-st3"
      width="4.5"
      height="2.5"
    />
    <rect
      id="iokzmk_1311_"
      x="14.9"
      y="31.8"
      class="iokzmk-${id}-st3"
      width="4.5"
      height="2.5"
    />
    <rect
      id="iokzmk_1300_"
      x="23.9"
      y="31.8"
      class="iokzmk-${id}-st3"
      width="4.5"
      height="2.5"
    />
    <rect
      id="iokzmk_1299_"
      x="32.9"
      y="31.8"
      class="iokzmk-${id}-st3"
      width="4.5"
      height="2.5"
    />
    <rect
      id="iokzmk_1298_"
      x="42.9"
      y="31.8"
      class="iokzmk-${id}-st3"
      width="4.5"
      height="2.5"
    />
  </g>
  <rect
    id="iokzmk_1289_"
    x="5.8"
    y="25.4"
    class="iokzmk-${id}-st2"
    width="41.7"
    height="1"
  />
  <rect
    id="iokzmk_1288_"
    x="5.8"
    y="27.5"
    class="iokzmk-${id}-st2"
    width="28.7"
    height="1"
  />
  <g id="iokzmk_1322_">
    <polygon
      id="iokzmk_1313_"
      class="iokzmk-${id}-st4"
      points="16,6.9 10.4,7.6 4.9,6.9 4.9,3.6 16,3.6 	"
    />
    <rect
      id="iokzmk_1293_"
      x="4.9"
      y="6.9"
      class="iokzmk-${id}-st5"
      width="11.1"
      height="6.4"
    />
    <rect
      id="iokzmk_1314_"
      x="5.9"
      y="4.5"
      class="iokzmk-${id}-st6"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1315_"
      x="8.5"
      y="4.5"
      class="iokzmk-${id}-st6"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1316_"
      x="11.1"
      y="4.5"
      class="iokzmk-${id}-st6"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1317_"
      x="13.7"
      y="4.5"
      class="iokzmk-${id}-st6"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1321_"
      x="5.9"
      y="8.4"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1320_"
      x="8.5"
      y="8.4"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1319_"
      x="11.1"
      y="8.4"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1318_"
      x="13.7"
      y="8.4"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
  </g>
  <g id="iokzmk_1323_">
    <polygon
      id="iokzmk_1333_"
      class="iokzmk-${id}-st4"
      points="32,6.9 26.4,7.6 20.9,6.9 20.9,3.6 32,3.6 	"
    />
    <rect
      id="iokzmk_1332_"
      x="20.9"
      y="6.9"
      class="iokzmk-${id}-st5"
      width="11.1"
      height="6.4"
    />
    <rect
      id="iokzmk_1331_"
      x="21.9"
      y="4.5"
      class="iokzmk-${id}-st6"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1330_"
      x="24.5"
      y="4.5"
      class="iokzmk-${id}-st6"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1329_"
      x="27.1"
      y="4.5"
      class="iokzmk-${id}-st6"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1328_"
      x="29.7"
      y="4.5"
      class="iokzmk-${id}-st6"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1327_"
      x="21.9"
      y="8.4"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1326_"
      x="24.5"
      y="8.4"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1325_"
      x="27.1"
      y="8.4"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1324_"
      x="29.7"
      y="8.4"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
  </g>
  <g id="iokzmk_1334_">
    <polygon
      id="iokzmk_1344_"
      class="iokzmk-${id}-st4"
      points="48,6.9 42.4,7.6 36.9,6.9 36.9,3.6 48,3.6 	"
    />
    <rect
      id="iokzmk_1343_"
      x="36.9"
      y="6.9"
      class="iokzmk-${id}-st5"
      width="11.1"
      height="6.4"
    />
    <rect
      id="iokzmk_1342_"
      x="37.9"
      y="4.5"
      class="iokzmk-${id}-st6"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1341_"
      x="40.5"
      y="4.5"
      class="iokzmk-${id}-st6"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1340_"
      x="43.1"
      y="4.5"
      class="iokzmk-${id}-st6"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1339_"
      x="45.7"
      y="4.5"
      class="iokzmk-${id}-st6"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1338_"
      x="37.9"
      y="8.4"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1337_"
      x="40.5"
      y="8.4"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1336_"
      x="43.1"
      y="8.4"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1335_"
      x="45.7"
      y="8.4"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
  </g>
  <g id="iokzmk_1367_">
    <rect
      id="iokzmk_1376_"
      x="4.9"
      y="39.6"
      class="iokzmk-${id}-st5"
      width="11.1"
      height="6.4"
    />
    <rect
      id="iokzmk_1371_"
      x="5.9"
      y="43.3"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1370_"
      x="8.5"
      y="43.3"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1369_"
      x="11.1"
      y="43.3"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1368_"
      x="13.7"
      y="43.3"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
  </g>
  <g id="iokzmk_1356_">
    <rect
      id="iokzmk_1365_"
      x="20.9"
      y="39.6"
      class="iokzmk-${id}-st5"
      width="11.1"
      height="6.4"
    />
    <rect
      id="iokzmk_1360_"
      x="21.9"
      y="43.3"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1359_"
      x="24.5"
      y="43.3"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1358_"
      x="27.1"
      y="43.3"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1357_"
      x="29.7"
      y="43.3"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
  </g>
  <g id="iokzmk_1345_">
    <rect
      id="iokzmk_1354_"
      x="36.9"
      y="39.6"
      class="iokzmk-${id}-st5"
      width="11.1"
      height="6.4"
    />
    <rect
      id="iokzmk_1349_"
      x="37.9"
      y="43.3"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1348_"
      x="40.5"
      y="43.3"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1347_"
      x="43.1"
      y="43.3"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
    <rect
      id="iokzmk_1346_"
      x="45.7"
      y="43.3"
      class="iokzmk-${id}-st1"
      width="1.2"
      height="1.3"
    />
  </g>
  <rect
    id="iokzmk_1310_"
    x="2"
    y="39.5"
    class="iokzmk-${id}-st7"
    width="49"
    height="2.5"
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
    let { id = "", height = 0, width = 0 } = info || {};
    let $container = $(`#${id}>.component`);
    let $svg = $container.find("svg");
    // $container.html(this.renderSvg());
    $svg.attr({ width, height });
  }

  event() {}
}

export default Text;

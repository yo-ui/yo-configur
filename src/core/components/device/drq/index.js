import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";

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
    <div class="bm-device-drq-com component"
    style="${this.composeStyles(this.comStyle())}">

    ${this.renderSvg()}
  </div>
    `
    );
  }

  renderSvg() {
    let { info = {} } = this;
    let { id = "", width = 0, height = 0, color = "" } = info || {};
    return ` <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 28 27"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
.drq-${id}-st0{fill:${color};}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    return `<path
    class="drq-${id}-st0"
    d="M28,24H0L14,0.3L28,24z M3.5,22h21L14,4.2L3.5,22z"
  />
  <rect x="11" y="19" class="drq-${id}-st0" width="2" height="8" />
  <rect x="15" y="19" class="drq-${id}-st0" width="2" height="8" />
  <rect
    x="8.4"
    y="5.8"
    transform="matrix(0.5586 -0.8294 0.8294 0.5586 -3.9624 12.1329)"
    class="drq-${id}-st0"
    width="2"
    height="8"
  />
  <rect
    x="6.2"
    y="9.1"
    transform="matrix(0.5587 -0.8294 0.8294 0.5587 -7.7002 11.7432)"
    class="drq-${id}-st0"
    width="2"
    height="8"
  />
  <rect
    x="15.2"
    y="8.8"
    transform="matrix(0.8295 -0.5585 0.5585 0.8295 -2.1965 12.3843)"
    class="drq-${id}-st0"
    width="8"
    height="2"
  />
  <rect
    x="17.4"
    y="12.1"
    transform="matrix(0.8295 -0.5585 0.5585 0.8295 -3.6685 14.198)"
    class="drq-${id}-st0"
    width="8"
    height="2"
  />`;
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
  //     let { value = "" } = point || {};
  //     info.content = value;
  //     this.refresh();
  //   }
  // }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    bmCommon.log(`${info.type}刷新 `);
    let { id = "" } = info || {};
    let $container = $(`#${id}>.component`);
    $container.html(this.renderSvg());
  }

  event() {}
}

export default Text;

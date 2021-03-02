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
    <div class="bm-device-dlhgq2-com component"
    style="${this.composeStyles(this.comStyle())}">

    ${this.renderSvg()}
  </div>
    `
    );
  }

  renderSvg() {
    let { info = {} } = this;
    let { id = "", width = 0, height = 0, color = "" } = info || {};
    return `<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 13 9"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
.dlhgq2-${id}-st0{fill:${color};}
    </style></defs>

    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    return `<path
    class="dlhgq2-${id}-st0"
    d="M4.5,9C2,9,0,7,0,4.5S2,0,4.5,0S9,2,9,4.5S7,9,4.5,9z M4.5,2C3.1,2,2,3.1,2,4.5C2,5.9,3.1,7,4.5,7
C5.9,7,7,5.9,7,4.5C7,3.1,5.9,2,4.5,2z"
  />
  <rect
    x="10"
    y="1"
    class="dlhgq2-${id}-st0"
    width="1"
    height="7"
  />
  <rect
    x="12"
    y="1"
    class="dlhgq2-${id}-st0"
    width="1"
    height="7"
  />
  rect x="8" y="4" :class="dlhgq2-${id}-st0" width="5" height="1" />`;
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

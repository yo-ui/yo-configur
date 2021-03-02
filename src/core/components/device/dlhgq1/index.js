import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 电流互感器1
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
    <div class="bm-device-dlhgq1-com component"
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
    viewBox="0 0 13 17"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs>
      <style type='text/css'>
.dlhgq1-${id}-st0{fill:${color};}
    </style></defs>
${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    return ` <path
    class="dlhgq1-${id}-st0"
    d="M4.5,13C2,13,0,11,0,8.5S2,4,4.5,4S9,6,9,8.5S7,13,4.5,13z M4.5,6C3.1,6,2,7.1,2,8.5C2,9.9,3.1,11,4.5,11
C5.9,11,7,9.9,7,8.5C7,7.1,5.9,6,4.5,6z"
  />
  <rect
    x="4"
    y="0"
    class="dlhgq1-${id}-st0"
    width="1"
    height="17"
  />
  <rect
    x="10"
    y="5"
    class="dlhgq1-${id}-st0"
    width="1"
    height="7"
  />
  <rect
    x="12"
    y="5"
    class="dlhgq1-${id}-st0"
    width="1"
    height="7"
  />
  <rect x="8" y="8" class="dlhgq1-${id}-st0" width="5" height="1" />`;
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

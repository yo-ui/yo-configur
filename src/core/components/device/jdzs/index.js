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
    let { id = "", width = 0, height = 0 } = info || {};
    return super.wrap(
      { info },
      `
    <div class="bm-device-jdzs-com component"
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
    viewBox="0 0 16 31"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs>
      <style type='text/css'>
.jdzs-${id}-st0{fill:${color};}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    return `
  <path
    class="jdzs-${id}-st0"
    d="M16,31H0V0h16V31z M2,29h12V2H2V29z"
  />
  <path
    class="jdzs-${id}-st0"
    d="M7.7,24.8L2.7,7h10.1L7.7,24.8z M5.3,9l2.4,8.4L10.1,9H5.3z"
  />
  rect x="7" y="1" :class="jdzs-${id}-st0" width="2" height="6" />`;
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

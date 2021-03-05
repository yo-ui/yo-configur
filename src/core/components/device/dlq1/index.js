import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 断路器1
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
      `<div class="bm-device-dlq1-com  component"
      style="${this.composeStyles(this.comStyle())}">

      ${this.renderSvg()}
  </div>
    `
    );
  }

  contentColor() {
    let { info = {} } = this;
    let { contentList = [], content = "" } = info || {};
    let obj = contentList.find(item => item.value == content);
    let { color = "" } = obj || {};
    return color;
  }

  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    return `<rect class="dlq1-${id}-st0" width="8" height="17" />`;
  }
  renderSvg() {
    let { info = {} } = this;
    let { id = "", width = 0, height = 0 } = info || {};
    return ` <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 17"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
.dlq1-${id}-st0{fill:${this.contentColor()};}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }

  //加载数据
  loadData() {
    this.loadDeviceInfo();
  }

  //刷新内容
  refreshContent(data) {
    let { info = {} } = this;
    let { point } = data || {};
    if (point) {
      let { value = "" } = point || {};
      info.content = value;
      this.refresh();
    }
  }

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

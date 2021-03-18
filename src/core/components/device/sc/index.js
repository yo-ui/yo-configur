// import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";

class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {
    super.initEvent();
  }

  //组件样式

  template() {
    let { info = {} } = this;
    return super.wrap(
      { info },
      `
    <div class="bm-device-sc-com  component"
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

  renderSvg() {
    let { info = {} } = this;
    let { id = "", width = 0, height = 0 } = info || {};
    return ` <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs>
      <style type='text/css'>
.sc-${id}-st0{fill:${this.contentColor()};}
    </style></defs>

    ${this.renderSvgContent()}
  </svg>
    `;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    return `<polygon
    class="sc-${id}-st0"
    points="14.2,9.7 8,3.2 1.7,9.7 0.3,8.3 8,0.3 15.6,8.3 "
  />
  <polygon
    class="sc-${id}-st0"
    points="14.2,15.7 8,9.2 1.7,15.7 0.3,14.3 8,6.3 15.6,14.3 "
  />
    `;
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

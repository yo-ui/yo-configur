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
      `<div class="bm-device-dlhgq3-com component"
    style="${this.composeStyles(this.comStyle())}">    ${this.renderSvg()}

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
    viewBox="0 0 9 17"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs>
      <style type='text/css'>
.dlhgq3-${id}-st0{fill:${color};}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    return ` <path
  class="dlhgq3-${id}-st0"
  d="M4.5,13C2,13,0,11,0,8.5S2,4,4.5,4S9,6,9,8.5S7,13,4.5,13z M4.5,6C3.1,6,2,7.1,2,8.5C2,9.9,3.1,11,4.5,11
C5.9,11,7,9.9,7,8.5C7,7.1,5.9,6,4.5,6z"
/>
<rect
  x="-4"
  y="8"
  transform="matrix(2.766466e-03 -1 1 2.766466e-03 -4.0075 12.9784)"
  class="dlhgq3-${id}-st0"
  width="17"
  height="1"
/>`;
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

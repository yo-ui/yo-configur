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
    <div class="bm-device-dkq-com component"
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
    viewBox="0 0 25 25"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs>
      <style type='text/css'>
.dkq-${id}-st0{fill:${color};}
    </style></defs>
    ${this.renderSvgContent()}

  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    return ` <path
  class="dkq-${id}-st0"
  d="M12.5,25v-2C18.3,23,23,18.3,23,12.5C23,7,18.8,2.6,13.5,2v11.4H0v-1C0,5.6,5.6,0,12.5,0S25,5.6,25,12.5
S19.4,25,12.5,25z M2,11.5h9.4V2C6.5,2.5,2.5,6.5,2,11.5z"
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

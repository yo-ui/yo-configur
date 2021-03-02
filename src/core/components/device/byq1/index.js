import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 变压器1
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
    <div class="bm-device-byq1-com  component"
    style="${this.composeStyles(this.comStyle())}">
    ${this.renderSvg()}
  </div>
    `
    );
  }

  renderSvg() {
    let { info = {} } = this;
    let { id = "", width = 0, height = 0, color = "" } = info || {};
    return `
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 44"
      width="${width}"
      height="${height}"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs>
        <style type='text/css'>
	.byq1-${id}-st0{fill:${color};}
      </style></defs>
      ${this.renderSvgContent()}
    </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    return `
    <path
      class="byq1-${id}-st0"
      d="M12.5,25C5.6,25,0,19.4,0,12.5S5.6,0,12.5,0S25,5.6,25,12.5S19.4,25,12.5,25z M12.5,2C6.7,2,2,6.7,2,12.5
C2,18.3,6.7,23,12.5,23C18.3,23,23,18.3,23,12.5C23,6.7,18.3,2,12.5,2z"
    />
    <path
      class="byq1-${id}-st0"
      d="M21.2,18H3.8l8.7-14.7L21.2,18z M7.3,16h10.4l-5.2-8.8L7.3,16z"
    />
    <polygon
      class="byq1-${id}-st0"
      points="12.5,34.4 4.8,26.4 6.3,25.1 12.5,31.6 18.8,25.1 20.2,26.4 "
    />
    <rect
      x="11.5"
      y="33"
      class="byq1-${id}-st0"
      width="2"
      height="8"
    />
    <path
      class="byq1-${id}-st0"
      d="M12.5,44C5.6,44,0,38.4,0,31.5S5.6,19,12.5,19S25,24.6,25,31.5S19.4,44,12.5,44z M12.5,21C6.7,21,2,25.7,2,31.5
C2,37.3,6.7,42,12.5,42C18.3,42,23,37.3,23,31.5C23,25.7,18.3,21,12.5,21z"
    />
    <polygon
      class="byq1-${id}-st0"
      points="12.5,34.4 4.8,26.4 6.3,25.1 12.5,31.6 18.8,25.1 20.2,26.4 "
    />
    <rect
      x="11.5"
      y="33"
      class="byq1-${id}-st0"
      width="2"
      height="8"
    />`;
  }

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

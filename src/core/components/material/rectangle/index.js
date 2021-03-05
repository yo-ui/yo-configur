// import bmCommon from "@/common/common";
import Component from "@/core/Component";
import "../../../../assets/less/components/component/material/rectangle.less";
// 矩形
class Display extends Component {
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
    <div class="bm-material-rectangle-com component"
    style="${this.composeStyles(this.comStyle())}">
    ${this.renderSvg()}
  </div>
    `
    );
  }

  renderSvg() {
    let { info = {} } = this;
    let { width = 0, height = 0 } = info || {};
    return `
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 ${width} ${height}"
      width="${width}"
      height="${height}"
      xml:space="preserve"
      preserveAspectRatio="none"
    >
    <rect
    width="${width}"
    height="${height}"
    style="fill:transparent"
  />
    </svg>
    `;
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let { id = "", width = 0, height = 0 } = info || {};
    let $container = $(`#${id}>.component`);
    let $svg = $container.find(`svg`);
    let $rect = $svg.find(`rect`);
    $svg.attr({ width, height, viewBox: `0 0 ${width} ${height}` });
    $rect.attr({ width, height });
  }

  event() {}
}

export default Display;

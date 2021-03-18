// import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 断路器2
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
      `<div class="bm-device-dlq2-com component"
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
    viewBox="0 0 25 40"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
.dlq2-${id}-st1{display:inline;fill:${color};}
.dlq2-${id}-st2{fill:${color};}
    </style></defs>
    ${this.renderSvgContent()}

  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "", content = "" } = info || {};
    let text = "";
    if (content == 1) {
      text = `<g id="图层_1" class="dlq2-${id}-st0">
    <rect
      x="5.7"
      y="21.6"
      transform="matrix(0.5524 -0.8335 0.8335 0.5524 -10.9379 24.7727)"
      class="dlq2-${id}-st1"
      width="23.9"
      height="2"
    />
    <rect x="10.5" class="dlq2-${id}-st1" width="2" height="7" />
    <rect
      x="10.5"
      y="30.8"
      class="dlq2-${id}-st1"
      width="2"
      height="9.2"
    />
    <rect
      x="10.7"
      y="3.9"
      transform="matrix(0.7071 -0.7071 0.7071 0.7071 -3.0551 10.7303)"
      class="dlq2-${id}-st1"
      width="1.5"
      height="10.2"
    />
    <rect
      x="6.3"
      y="8.3"
      transform="matrix(0.7071 -0.7071 0.7071 0.7071 -3.0551 10.7303)"
      class="dlq2-${id}-st1"
      width="10.2"
      height="1.5"
    />
  </g>`;
    }
    if (content == 0) {
      text = `<g id="图层_1_x5F_复制" >
      <rect x="10.5" class="dlq2-${id}-st2" width="2" height="7" />
      <rect
        x="10.5"
        y="11"
        class="dlq2-${id}-st2"
        width="2"
        height="29"
      />
      <rect
        x="10.7"
        y="3.9"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -3.0551 10.7303)"
        class="dlq2-${id}-st2"
        width="1.5"
        height="10.2"
      />
      <rect
        x="6.3"
        y="8.3"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -3.0551 10.7303)"
        class="dlq2-${id}-st2"
        width="10.2"
        height="1.5"
      />
    </g>`;
    }
    return text;
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

import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 开关1
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
      `<div class="bm-device-kg1-com component"
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
  viewBox="0 0 25 40"
  width="${width}"
  height="${height}"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xml:space="preserve"
>
  <defs>
    <style type='text/css'>
.kg1-${id}-st1{display:inline;fill:${color};}
.kg1-${id}-st2{fill:${color};}
  </style>
  </defs>
  ${this.renderSvgContent()}
</svg>
    `;
  }

  renderSvgContent() {
    let { info = {} } = this;
    let { id = "", content = "" } = info || {};
    let text = ``;
    if (content == 1) {
      text = `<g id="图层_1" class="kg1-${id}-st0">
      <path
        class="kg1-${id}-st1"
        d="M11.5,11.5c-1.8,0-3.3-1.5-3.3-3.3S9.7,5,11.5,5s3.3,1.5,3.3,3.3S13.3,11.5,11.5,11.5z M11.5,6.5
  c-1,0-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8S12.5,6.5,11.5,6.5z"
      />
      <path
        class="kg1-${id}-st1"
        d="M11.5,34.5c-1.8,0-3.3-1.5-3.3-3.3S9.7,28,11.5,28s3.3,1.5,3.3,3.3S13.3,34.5,11.5,34.5z M11.5,29.5
  c-1,0-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8S12.5,29.5,11.5,29.5z"
      />
      <rect
        x="8.5"
        y="20.1"
        transform="matrix(0.5524 -0.8335 0.8335 0.5524 -9.24 24.935)"
        class="kg1-${id}-st1"
        width="20.3"
        height="2"
      />
      <rect x="10.5" class="kg1-${id}-st1" width="2" height="5.8" />
      <rect
        x="10.5"
        y="33.8"
        class="kg1-${id}-st1"
        width="2"
        height="6.2"
      />
    </g>`;
    } else if (content == 0) {
      text = ` <g id="图层_1_x5F_复制">
      >
      <path
        class="kg1-${id}-st2"
        d="M11.5,11.5c-1.8,0-3.3-1.5-3.3-3.3S9.7,5,11.5,5s3.3,1.5,3.3,3.3S13.3,11.5,11.5,11.5z M11.5,6.5
  c-1,0-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8S12.5,6.5,11.5,6.5z"
      />
      <path
        class="kg1-${id}-st2"
        d="M11.5,34.5c-1.8,0-3.3-1.5-3.3-3.3S9.7,28,11.5,28s3.3,1.5,3.3,3.3S13.3,34.5,11.5,34.5z M11.5,29.5
  c-1,0-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8S12.5,29.5,11.5,29.5z"
      />
      <rect x="10.5" class="kg1-${id}-st2" width="2" height="5.8" />
      <rect
        x="10.5"
        y="11"
        class="kg1-${id}-st2"
        width="2"
        height="18"
      />
      <rect
        x="10.5"
        y="33.8"
        class="kg1-${id}-st2"
        width="2"
        height="6.2"
      />
    </g>`;
    }

    return text;
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let { id = "" } = info || {};
    let $container = $(`#${id}>.component`);
    // let $svg=$container.find('svg')
    // $svg.attr({width,height});
    $container.html(this.renderSvg());
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
      info.content = value == 1 ? true : false;
      this.refresh();
    }
  }

  event() {}
}

export default Text;

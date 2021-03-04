import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 储液储气罐
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
      <div
      class="bm-device-cycqg-com component"
      style="${this.composeStyles(this.comStyle())}"
    >
    ${this.renderSvg()}
    </div>
      `
    );
  }

  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    return `<g>
      <radialGradient
        id="cycqg_${id}_SVGID_1_"
        cx="36.3914"
        cy="-141.5661"
        r="36.3914"
        gradientTransform="matrix(1 0 0 0.6746 0 120.0574)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style="stop-color:#92C1CC" />
        <stop offset="1" style="stop-color:#2C4B47" />
      </radialGradient>
      <ellipse
        class="cycqg-${id}-st0"
        cx="36.4"
        cy="24.6"
        rx="36.4"
        ry="24.6"
      />
    </g>
    <g>
      <radialGradient
        id="cycqg_${id}_SVGID_2_"
        cx="36.3914"
        cy="-5.3488"
        r="36.3914"
        gradientTransform="matrix(1 0 0 0.6746 0 120.0574)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style="stop-color:#92C1CC" />
        <stop offset="1" style="stop-color:#2C4B47" />
      </radialGradient>
      <ellipse
        class="cycqg-${id}-st1"
        cx="36.4"
        cy="116.4"
        rx="36.4"
        ry="24.6"
      />
    </g>
    <linearGradient
      id="cycqg_${id}_SVGID_3_"
      gradientUnits="userSpaceOnUse"
      x1="0"
      y1="70.5"
      x2="72.7827"
      y2="70.5"
    >
      <stop offset="0" style="stop-color:#2C4B47" />
      <stop offset="0.5" style="stop-color:#92C1CC" />
      <stop offset="1" style="stop-color:#2C4B47" />
    </linearGradient>
    <rect
      y="24.6"
      class="cycqg-${id}-st2"
      width="72.8"
      height="91.9"
    />`;
  }
  renderSvg() {
    let { info = {} } = this;
    let { id = "", width = 0, height = 0 } = info || {};
    return `
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 73 141"
        width="${width}"
        height="${height}"
        xml:space="preserve"
        preserveAspectRatio="none"
      >
      <defs>
      <style type='text/css'>
      .cycqg-${id}-st0{fill:url(#cycqg_${id}_SVGID_1_);}
      .cycqg-${id}-st1{fill:url(#cycqg_${id}_SVGID_2_);}
      .cycqg-${id}-st2{fill:url(#cycqg_${id}_SVGID_3_);}
      </style>
    </defs>
    ${this.renderSvgContent()}
      </svg>
      `;
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    bmCommon.log(`${info.type}刷新 `);
    let { id = "", width = 0, height = 0 } = info || {};
    let $container = $(`#${id}>.component`);
    let $svg = $container.find("svg");
    $svg.attr({ width, height });
  }

  event() {}
}

export default Text;

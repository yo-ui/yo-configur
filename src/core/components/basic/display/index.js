// import bmCommon from "@/common/common";
import Component from "@/core/Component";
import "../../../../assets/less/components/component/basic/display.less";

class Display extends Component {
  constructor(props) {
    super(props);
  }
  init() {
    super.initEvent();
  }

  //组件样式
  textStyle() {
    let { info = {} } = this;
    let {
      color = "",
      textShadow = {},
      textShadowable = false,
      textAlign = "",
      fontFamily = "",
      fontSize = "",
      fontWeight = "",
      fontStyle = "",
      textDecoration = "",

      marginTop = 0,
      marginBottom = 0,
      marginLeft = 0,
      marginRight = 0,
      paddingTop = 0,
      paddingBottom = 0,
      paddingLeft = 0,
      paddingRight = 0
    } = info || {};
    let styles = {
      margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
      padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
    };
    if (color) {
      styles["color"] = color;
    }
    if (fontSize) {
      styles["font-size"] = `${fontSize}px`;
    }
    if (fontFamily) {
      styles["font-family"] = `${fontFamily}`;
    }
    if (fontWeight) {
      styles["font-weight"] = fontWeight;
    }
    if (fontStyle) {
      styles["font-style"] = fontStyle;
    }
    if (textAlign) {
      styles["text-align"] = textAlign;
      if (textAlign == "justify") {
        styles["text-align-last"] = textAlign;
      }
    }
    if (textDecoration) {
      styles["text-decoration"] = textDecoration;
    }
    if (textShadowable) {
      let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
      styles["text-shadow"] = `${x}px ${y}px ${blur}px ${color}`;
    }
    return styles || {};
  }
  unitStyle() {
    let { info = {} } = this;
    let { unitColor = "", unitFontFamily = "", unitFontSize = "" } = info || {};
    let styles = {};
    if (unitColor) {
      styles["color"] = unitColor;
    }
    if (unitFontSize) {
      styles["font-size"] = `${unitFontSize}px`;
    }
    if (unitFontFamily) {
      styles["font-family"] = `${unitFontFamily}`;
    }
    return styles || {};
  }

  template() {
    let { info = {} } = this;
    return super.wrap(
      { info },
      `
    <div class="bm-basic-display-com component"
    style="${this.composeStyles(this.comStyle())}">
    ${this.renderSvg()}
  </div>
    `
    );
  }

  renderSvg() {
    let { info = {} } = this;
    let {
      id = "",
      width = 0,
      height = 0,
      content = "",
      decimal = 1,
      unit = ""
    } = info || {};
    return (
      `
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 89 43"
      width="${width}"
      height="${height}"
      style="enable-background:new 0 0 89 43;"
      xml:space="preserve"
      preserveAspectRatio="none"
    >
      <defs><style type='text/css'>
        .display-${id}-st0 {
          fill: #ffffff;
        }
        .display-${id}-st1 {
          fill: #dfe3e8;
        }
        .display-${id}-st2 {
          fill: #c2c8ce;
        }
        .display-${id}-st3 {
          fill: url(#display_4_);
        }
        .display-${id}-st4 {
          fill: #9da1a5;
        }
        .display-${id}-st5 {
          fill: #848776;
        }
        .display-${id}-st6 {
          fill: #25282b;
        }
      </style></defs>
      <g>
        <rect
          id="display_656_"
          x="1"
          y="4.1"
          class="` +
      `display-${id}-st0` +
      `"
          width="79.5"
          height="38"
        />
        <path
          id="display_653_"
          class="` +
      `display-${id}-st1` +
      `"
          d="M81.5,43.1H0v-40h81.5V43.1z M2,41.1h77.5v-36H2V41.1z"
        />
        <polygon
          id="display_652_"
          class="` +
      `display-${id}-st2` +
      `"
          points="81.5,3.1 0,3.1 8.2,0 88.7,0 	"
        />
        <linearGradient
          id="display_4_"
          gradientUnits="userSpaceOnUse"
          x1="85.1155"
          y1="43.0819"
          x2="85.1155"
          y2="0"
        >
          <stop offset="0" style="stop-color:#C2C8CE" />
          <stop offset="1" style="stop-color:#848689" />
        </linearGradient>
        <path
          id="display_1_"
          class="` +
      `display-${id}-st3` +
      `"
          d="M88.7,40l-7.2,3.1v-40L88.7,0V40z"
        />
      </g>
      <g>
        <path
          id="display_10_"
          class="` +
      `display-${id}-st4` +
      `"
          d="M76.5,37.1H5v-5h71.5V37.1z"
        />
      </g>
      <g>
        <g id="display_647_">
          <rect
            id="display_651_"
            x="6.5"
            y="8.5"
            class="` +
      `display-${id}-st5` +
      `"
            width="69"
            height="19"
          />
          <path
            id="display_648_"
            class="` +
      `display-${id}-st6` +
      `"
            d="M76.5,28.5h-71v-21h71V28.5z M7.5,26.5h67v-17h-67V26.5z"
          />
        </g>
      </g>
    </svg>

    <span class="text"  style="${this.composeStyles(this.textStyle())}"
      >${$vm.$toBig(content, decimal)}<small  style="${this.composeStyles(
        this.unitStyle()
      )}">${unit || "℃"}</small></span
    >
    `
    );
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let {
      id = "",
      width = 0,
      height = 0,
      content = "",
      decimal = 1,
      unit = ""
    } = info || {};
    let $container = $(`#${id}>.component`);
    let $svg = $container.find(`svg`);
    let $text = $container.find(`.text`);
    $svg.attr({ width, height });
    $text
      .css(this.textStyle())
      .html(
        `${$vm.$toBig(content, decimal)}<small  style="${this.composeStyles(
          this.unitStyle()
        )}">${unit || "℃"}</small>`
      );
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
      let { value = "", unit = "" } = point || {};
      info.content = value;
      info.unit = unit;
      this.refresh();
    }
  }

  event() {}
}

export default Display;

import bmCommon from "@/common/common";
import Component from "@/core/Component";
import "../../../../assets/less/components/component/basic/display.less";
// 水管（水平）
class Display extends Component {
  constructor(props) {
    super(props);
  }
  init() {}

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
    <div class="bm-device-sg-h-com component"
    style="${this.composeStyles(this.comStyle())}">
    ${this.renderSvg()}
  </div>
    `
    );
  }

  renderSvg() {
    let { info = {} } = this;
    let { id = "", width = 0, height = 0 } = info || {};
    return `
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 ${width} 10"
      width="${width}"
      height="${height}"
      xml:space="preserve"
      preserveAspectRatio="none"
    >
    <defs>
    <linearGradient
      id="sg_h_U_${id}"
      gradientUnits="userSpaceOnUse"
      x1="-149.4816"
      y1="-983.9756"
      x2="-149.4816"
      y2="-989.9756"
      gradientTransform="matrix(-1 0 0 -1 -144.4816 -981.9756)"
    >
      <stop offset="0" style="stop-color:#777C7F" />
      <stop offset="0.5" style="stop-color:#FFFFFF" />
      <stop offset="1" style="stop-color:#777C7F" />
    </linearGradient>
  </defs>
  <rect
    id="sg_h_551_"
    x="0"
    y="0"
    style="fill:url(#sg_h_U_${id})"
    width="${width}"
    height="10"
  />
    </svg>
    `;
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    bmCommon.log(`${info.type}刷新 `);
    let { id = "", width = 0, height = 0 } = info || {};
    let $container = $(`#${id}>.component`);
    $container.find(`svg`).attr({ width, height, viewBox: `0 0 ${width} 10` });
    $container.find("rect").attr({ width });
  }

  // //加载数据
  // loadData() {
  //   this.loadDeviceInfo();
  // }

  // //刷新内容
  // refreshContent(data) {
  //   let { info = {} } = this;
  //   let { point } = data || {};
  //   if (point) {
  //     let { value = "", unit = "" } = point || {};
  //     info.content = value;
  //     info.unit = unit;
  //     this.refresh();
  //   }
  // }

  event() {}
}

export default Display;

import bmCommon from "@/common/common";
import Component from "@/core/Component";

class DynamicText extends Component {
  constructor(props) {
    super(props);
  }
  init() {}

  // //组件样式
  // comStyle() {
  //   let { info = {}, gradientStyle = {} } = this;
  //   let {
  //     width = "",
  //     height = "",
  //     color = "",
  //     borderColor = "",
  //     borderStyle = "",
  //     borderWidth = "",
  //     borderRadiusTopLeft = 0,
  //     borderRadiusTopRight = 0,
  //     borderRadiusBottomLeft = 0,
  //     borderRadiusBottomRight = 0,
  //     marginTop = 0,
  //     marginBottom = 0,
  //     marginLeft = 0,
  //     marginRight = 0,
  //     borderTop = 0,
  //     borderBottom = 0,
  //     borderLeft = 0,
  //     borderRight = 0,
  //     paddingTop = 0,
  //     paddingBottom = 0,
  //     paddingLeft = 0,
  //     paddingRight = 0,
  //     shadow = {},
  //     shadowable = false,
  //     textShadow = {},
  //     textShadowable = false,
  //     textAlign = "",
  //     fontFamily = "",
  //     fontWeight = "",
  //     fontStyle = "",
  //     textDecoration = "",
  //     backgroundType = "",
  //     fontSize = "",
  //     backgroundColor = "",
  //     backgroundImage = "",
  //     backgroundRepeat = "",
  //     backgroundSize = ""
  //   } = info || {};
  //   let styles = {
  //     ...super.comStyle(),
  //     margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
  //     padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
  //   };

  //   if (textAlign) {
  //     styles["text-align"] = textAlign;
  //     if (textAlign == "justify") {
  //       styles["text-align-last"] = textAlign;
  //     }
  //   }
  //   if (shadowable) {
  //     let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
  //       shadow || {};
  //     styles[
  //       "box-shadow"
  //     ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
  //   }
  //   if (textShadowable) {
  //     let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
  //     styles["text-shadow"] = `${x}px ${y}px ${blur}px ${color}`;
  //   }
  //   if (backgroundRepeat) {
  //     styles["background-repeat"] = backgroundRepeat;
  //   }
  //   if (backgroundSize) {
  //     styles["background-size"] = backgroundSize;
  //   }
  //   styles["width"] = `${width}px`;
  //   styles["height"] = `${height}px`;
  //   if (borderTop) {
  //     if (borderStyle) {
  //       styles["border-top-style"] = borderStyle;
  //     }
  //     styles["border-top-width"] = `${borderWidth}px`;
  //     if (borderColor) {
  //       styles["border-top-color"] = borderColor;
  //     }
  //   } else {
  //     styles["border-top"] = "none";
  //   }
  //   if (borderBottom) {
  //     if (borderStyle) {
  //       styles["border-bottom-style"] = borderStyle;
  //     }
  //     styles["border-bottom-width"] = `${borderWidth}px`;
  //     if (borderColor) {
  //       styles["border-bottom-color"] = borderColor;
  //     }
  //   } else {
  //     styles["border-bottom"] = "none";
  //   }
  //   if (borderLeft) {
  //     if (borderStyle) {
  //       styles["border-left-style"] = borderStyle;
  //     }
  //     styles["border-left-width"] = `${borderWidth}px`;
  //     if (borderColor) {
  //       styles["border-left-color"] = borderColor;
  //     }
  //   } else {
  //     styles["border-left"] = "none";
  //   }
  //   if (borderRight) {
  //     if (borderStyle) {
  //       styles["border-right-style"] = borderStyle;
  //     }
  //     styles["border-right-width"] = `${borderWidth}px`;
  //     if (borderColor) {
  //       styles["border-right-color"] = borderColor;
  //     }
  //   } else {
  //     styles["border-right"] = "none";
  //   }
  //   styles[
  //     "border-radius"
  //   ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
  //   styles["width"] = `${width}px`;
  //   styles["height"] = `${height}px`;
  //   if (color) {
  //     styles["color"] = color;
  //   }
  //   if (fontSize) {
  //     styles["font-size"] = `${fontSize}px`;
  //   }
  //   if (fontFamily) {
  //     styles["font-family"] = `${fontFamily}`;
  //   }
  //   if (fontWeight) {
  //     styles["font-weight"] = fontWeight;
  //   }
  //   if (fontStyle) {
  //     styles["font-style"] = fontStyle;
  //   }
  //   if (textDecoration) {
  //     styles["text-decoration"] = textDecoration;
  //   }
  //   if (backgroundType == "purity") {
  //     //纯色
  //     if (backgroundColor) {
  //       styles["background-Color"] = backgroundColor;
  //     }
  //     if (backgroundImage) {
  //       styles["background-Image"] = `url(${$vm.$loadImgUrl(backgroundImage)})`;
  //     }
  //   } else if (backgroundType == "gradient") {
  //     //渐变
  //     styles = { ...styles, ...gradientStyle(info) };
  //   }
  //   return styles || {};
  // }

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
    styles["font-family"] = `${unitFontFamily}`;
    return styles || {};
  }

  template() {
    let { info = {}, point = {} } = this;
    let { status = [], value = 0, unit = "" } = point || {};
    let { length = 0 } = status || [];
    let { content = "", decimal = 0, bindData = {}, unit: infoUnit = "" } =
      info || {};
    let { devicePoint = "" } = bindData || {};
    let text = $vm.$toBig(content || "", decimal);
    let unitText = infoUnit;
    if (devicePoint) {
      if (length > 0) {
        let obj = status.find(item => item.value == value) || {};
        let { name = "" } = obj || {};
        text = name;
        unitText = unit;
      } else {
        text = $vm.$toBig(value || "", decimal);
      }
    }
    return super.wrap(
      { info },
      `
      <div class="bm-basic-dynamic-text-com component"
      style="${this.composeStyles(this.comStyle())}">
      <span>
        ${text}
        <small style="${this.composeStyles(this.unitStyle())}">${unitText ||
        ""}</small>
      </span>
    </div>
    `
    );
  }

  //加载数据
  loadData() {
    bmCommon.log("loadData===");
    this.loadDeviceInfo();
  }

  // 刷新内容
  refreshContent(data) {
    let { point } = data || {};
    if (point) {
      this.point = point;
      this.refresh();
    }
  }
  refresh() {
    super.refresh();
    let { info = {}, point = {} } = this;
    let { status = [], value = 0, unit = "" } = point || {};
    let { length = 0 } = status || [];
    let {
      id = "",
      content = "",
      decimal = 0,
      bindData = {},
      unit: infoUnit = ""
    } = info || {};
    let { devicePoint = "" } = bindData || {};
    let text = $vm.$toBig(content || "", decimal);
    let unitText = infoUnit;
    if (devicePoint) {
      if (length > 0) {
        let obj = status.find(item => item.value == value) || {};
        let { name = "" } = obj || {};
        text = name;
        unitText = unit;
      } else {
        text = $vm.$toBig(value || "", decimal);
      }
    }
    $(`#${id} .component>span`).html(`
    ${text}
        <small style="${this.composeStyles(this.unitStyle())}">${unitText ||
      ""}</small>`);
  }

  event() {}
}

export default DynamicText;

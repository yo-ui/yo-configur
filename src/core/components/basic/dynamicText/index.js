import bmCommon from "@/common/common";
import Component from "@/core/Component";
import { css } from "jquery";

class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {}

  //组件样式
  comStyle() {
    let { info = {}, gradientStyle = {} } = this;
    let {
      width = "",
      height = "",
      color = "",
      borderColor = "",
      borderStyle = "",
      borderWidth = "",
      borderRadiusTopLeft = 0,
      borderRadiusTopRight = 0,
      borderRadiusBottomLeft = 0,
      borderRadiusBottomRight = 0,
      marginTop = 0,
      marginBottom = 0,
      marginLeft = 0,
      marginRight = 0,
      borderTop = 0,
      borderBottom = 0,
      borderLeft = 0,
      borderRight = 0,
      paddingTop = 0,
      paddingBottom = 0,
      paddingLeft = 0,
      paddingRight = 0,
      shadow = {},
      shadowable = false,
      textShadow = {},
      textShadowable = false,
      textAlign = "",
      fontFamily = "",
      fontWeight = "",
      fontStyle = "",
      textDecoration = "",
      backgroundType = "",
      fontSize = "",
      backgroundColor = "",
      backgroundImage = "",
      backgroundRepeat = "",
      backgroundSize = ""
    } = info || {};
    let styles = {
      ...super.comStyle(),
      margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
      padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
    };

    if (textAlign) {
      styles["text-align"] = textAlign;
      if (textAlign == "justify") {
        styles["text-align-last"] = textAlign;
      }
    }
    if (shadowable) {
      let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
        shadow || {};
      styles[
        "box-shadow"
      ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
    }
    if (textShadowable) {
      let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
      styles["text-shadow"] = `${x}px ${y}px ${blur}px ${color}`;
    }
    if (backgroundRepeat) {
      styles["background-repeat"] = backgroundRepeat;
    }
    if (backgroundSize) {
      styles["background-size"] = backgroundSize;
    }
    styles["width"] = `${width}px`;
    styles["height"] = `${height}px`;
    if (borderTop) {
      if (borderStyle) {
        styles["border-top-style"] = borderStyle;
      }
      styles["border-top-width"] = `${borderWidth}px`;
      if (borderColor) {
        styles["border-top-color"] = borderColor;
      }
    } else {
      styles["border-top"] = "none";
    }
    if (borderBottom) {
      if (borderStyle) {
        styles["border-bottom-style"] = borderStyle;
      }
      styles["border-bottom-width"] = `${borderWidth}px`;
      if (borderColor) {
        styles["border-bottom-color"] = borderColor;
      }
    } else {
      styles["border-bottom"] = "none";
    }
    if (borderLeft) {
      if (borderStyle) {
        styles["border-left-style"] = borderStyle;
      }
      styles["border-left-width"] = `${borderWidth}px`;
      if (borderColor) {
        styles["border-left-color"] = borderColor;
      }
    } else {
      styles["border-left"] = "none";
    }
    if (borderRight) {
      if (borderStyle) {
        styles["border-right-style"] = borderStyle;
      }
      styles["border-right-width"] = `${borderWidth}px`;
      if (borderColor) {
        styles["border-right-color"] = borderColor;
      }
    } else {
      styles["border-right"] = "none";
    }
    styles[
      "border-radius"
    ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
    styles["width"] = `${width}px`;
    styles["height"] = `${height}px`;
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
    if (textDecoration) {
      styles["text-decoration"] = textDecoration;
    }
    if (backgroundType == "purity") {
      //纯色
      if (backgroundColor) {
        styles["background-Color"] = backgroundColor;
      }
      if (backgroundImage) {
        styles["background-Image"] = `url(${$vm.$loadImgUrl(backgroundImage)})`;
      }
    } else if (backgroundType == "gradient") {
      //渐变
      styles = { ...styles, ...gradientStyle(info) };
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
    let { content = "", decimal = 0 } = info || {};
    let showType = "edit";
    // bmCommon.log(container);
    // contenteditable="showType == 'edit' && info.editable"
    return super.wrap(
      { info, showType },
      `
      <div class="component"
      style="${this.composeStyles(this.comStyle())}">
      <span>
        ${$vm.$toBig(content || "", decimal)}
        <small style="${this.composeStyles(this.unitStyle())}">${info.unit ||
        ""}</small>
      </span>
    </div>
    `
    );
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let { id = "", content = "", decimal = "", unit = "" } = info || {};
    $(`#${id}>span`).text($vm.$toBig(content || "", decimal));
    $(`#${id}>small`)
      .css(this.unitStyle())
      .text(unit);
  }

  event() {}
}

export default Text;

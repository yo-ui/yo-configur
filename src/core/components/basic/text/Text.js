import bmCommon from "@/common/common";
import Component from "@/core/Component";

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
      backgroundType = "",
      // scale = "",
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
      fontSize = "",
      fontWeight = "",
      fontStyle = "",
      textDecoration = "",
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
    styles["width"] = `${width}px`;
    styles["height"] = `${height}px`;
    if (backgroundRepeat) {
      styles["background-repeat"] = backgroundRepeat;
    }
    if (backgroundSize) {
      styles["background-size"] = backgroundSize;
    }
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
        styles["border-Bottom-Style"] = borderStyle;
      }
      styles["border-Bottom-Width"] = `${borderWidth}px`;
      if (borderColor) {
        styles["border-Bottom-Color"] = borderColor;
      }
    } else {
      styles["border-Bottom"] = "none";
    }
    if (borderLeft) {
      if (borderStyle) {
        styles["border-Left-Style"] = borderStyle;
      }
      styles["border-Left-Width"] = `${borderWidth}px`;
      if (borderColor) {
        styles["border-Left-Color"] = borderColor;
      }
    } else {
      styles["border-Left"] = "none";
    }
    if (borderRight) {
      if (borderStyle) {
        styles["border-Right-Style"] = borderStyle;
      }
      styles["border-Right-Width"] = `${borderWidth}px`;
      if (borderColor) {
        styles["border-Right-Color"] = borderColor;
      }
    } else {
      styles["border-Right"] = "none";
    }
    if (borderTop) {
      if (borderStyle) {
        styles["border-Top-Style"] = borderStyle;
      }
      styles["border-Top-Width"] = `${borderWidth}px`;
      if (borderColor) {
        styles["border-Top-Color"] = borderColor;
      }
    } else {
      styles["border-Top"] = "none";
    }
    if (borderBottom) {
      if (borderStyle) {
        styles["border-Bottom-Style"] = borderStyle;
      }
      styles["border-Bottom-Width"] = `${borderWidth}px`;
      if (borderColor) {
        styles["border-Bottom-Color"] = borderColor;
      }
    } else {
      styles["border-Bottom"] = "none";
    }
    if (borderLeft) {
      if (borderStyle) {
        styles["border-Left-Style"] = borderStyle;
      }
      styles["border-Left-Width"] = `${borderWidth}px`;
      if (borderColor) {
        styles["border-Left-Color"] = borderColor;
      }
    } else {
      styles["border-Left"] = "none";
    }
    if (borderRight) {
      if (borderStyle) {
        styles["border-Right-Style"] = borderStyle;
      }
      styles["border-Right-Width"] = `${borderWidth}px`;
      if (borderColor) {
        styles["border-Right-Color"] = borderColor;
      }
    } else {
      styles["border-Right"] = "none";
    }
    styles[
      "border-Radius"
    ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
    if (color) {
      styles["color"] = color;
    }
    if (fontSize) {
      styles["font-Size"] = `${fontSize}px`;
    }
    if (fontFamily) {
      styles["font-Family"] = `${fontFamily}`;
    }
    if (fontWeight) {
      styles["font-Weight"] = fontWeight;
    }
    if (fontStyle) {
      styles["font-Style"] = fontStyle;
    }
    if (textDecoration) {
      styles["text-Decoration"] = textDecoration;
    }
    if (backgroundType == "purity") {
      //纯色
      if (backgroundColor) {
        styles["background-Color"] = backgroundColor;
      }
      if (backgroundImage) {
        styles["background-Image"] = `url(${this.$loadImgUrl(
          backgroundImage
        )})`;
      }
    } else if (backgroundType == "gradient") {
      //渐变
      styles = { ...styles, ...gradientStyle(info) };
    }
    return styles || {};
  }

  template() {
    let { info = {} } = this;
    let { content = "" } = info || {};
    let showType = "edit";
    // bmCommon.log(container);
    // contenteditable="showType == 'edit' && info.editable"
    return super.wrap(
      { info, showType },
      `
      <div
      class="bm-basic-text-com"
      @blur.stop="blurEvent"
      style="${this.comStyle()}"
    >
      ${content}
    </div>
    `
    );
  }

  event() {}
}

export default Text;

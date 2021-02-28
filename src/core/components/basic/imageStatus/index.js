import bmCommon from "@/common/common";
import Component from "@/core/Component";

class ImageStatus extends Component {
  constructor(props) {
    super(props);
  }
  init() {
    super.initEvent();
  }

  //组件样式
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
  //     backgroundType = "",
  //     // scale = "",
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
  //     fontSize = "",
  //     fontWeight = "",
  //     fontStyle = "",
  //     textDecoration = "",
  //     backgroundColor = "",
  //     backgroundStatus = "",
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
  //   styles["width"] = `${width}px`;
  //   styles["height"] = `${height}px`;
  //   if (backgroundRepeat) {
  //     styles["background-repeat"] = backgroundRepeat;
  //   }
  //   if (backgroundSize) {
  //     styles["background-size"] = backgroundSize;
  //   }
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
  //     styles["border-Left"] = "none";
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
  //   if (borderTop) {
  //     if (borderStyle) {
  //       styles["border-top-style"] = borderStyle;
  //     }
  //     styles["border-top-width"] = `${borderWidth}px`;
  //     if (borderColor) {
  //       styles["border-top-color"] = borderColor;
  //     }
  //   } else {
  //     styles["border-Top"] = "none";
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
  //       styles["background-color"] = backgroundColor;
  //     }
  //     if (backgroundStatus) {
  //       styles["background-image"] = `url(${$vm.$loadImgUrl(backgroundStatus)})`;
  //     }
  //   } else if (backgroundType == "gradient") {
  //     //渐变
  //     styles = { ...styles, ...gradientStyle(info) };
  //   }
  //   return styles || {};
  // }
  imageStyle() {
    let { info = {} } = this;
    let {
      width = "",
      height = "",
      contentList = [],
      // background = "",
      // borderStyle = "",
      // borderWidth = "",
      borderRadiusTopLeft = 0,
      borderRadiusTopRight = 0,
      borderRadiusBottomLeft = 0,
      borderRadiusBottomRight = 0,
      // scale = "",
      content = "",
      contentRepeat = "",
      // backgroundType = "",
      // backgroundImage = "",
      // backgroundRepeat = "",
      contentSize = ""
    } = info || {};
    let styles = {};
    let obj = contentList.find(item => item.value == content);
    if (obj) {
      let { url = "", color = "" } = obj || {};
      //   -webkit-mask-image: url(/static/img/common/riLine-logout-box-line.svg);
      // mask-image: url(/static/img/common/riLine-logout-box-line.svg);
      // styles["-webkit-mask-image"] = `url(${this.$loadImgUrl(url)})`;
      styles["background-image"] = `url(${$vm.$loadImgUrl(url)})`;
      styles["background-color"] = color;
      if (contentRepeat) {
        styles["background-repeat"] = contentRepeat;
      }
      if (contentSize) {
        styles["background-size"] = contentSize;
      }
    }
    styles["width"] = `${width}px`;
    styles["height"] = `${height}px`;
    styles[
      "border-radius"
    ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
    return styles || {};
  }

  template() {
    let { info = {} } = this;
    // bmCommon.log(container);
    // contenteditable="showType == 'edit' && info.editable"
    this.init();
    return super.wrap(
      { info },
      `
    <div class="bm-basic-image-status-com component" style="${this.composeStyles(
      this.comStyle()
    )}">
    <div class="image" style="${this.composeStyles(this.imageStyle())}"></div>
  </div>
    `
    );
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    bmCommon.log(`${info.type}刷新 `);
    let { id = "" } = info || {};
    $(`#${id} .image`).css(this.imageStyle());
  }

  //加载数据
  loadData() {
    this.loadDeviceInfo();
  }

  //刷新内容
  refreshContent(data) {
    let { point } = data || {};
    let { info = {} } = this;
    let { contentList = [] } = info || {};
    let { value = "" } = point || {};
    let item = contentList.find(item => item.value == value);
    if (item) {
      info.content = item.value;
      this.refresh();
    }
  }

  event() {}
}

export default ImageStatus;

import bmCommon from "@/common/common";
import Component from "@/core/Component";

class Panel extends Component {
  constructor(props) {
    super(props);
  }
  init() {}

  //组件样式
  comStyle() {
    let { info = {} } = this;
    let {
      width = "",
      height = "",
      // color = "",
      // borderColor = "",
      // borderStyle = "",
      // borderWidth = "",
      // borderRadiusTopLeft = 0,
      // borderRadiusTopRight = 0,
      // borderRadiusBottomLeft = 0,
      // borderRadiusBottomRight = 0,
      // backgroundType = "",
      // // scale = "",
      // marginTop = 0,
      // marginBottom = 0,
      // marginLeft = 0,
      // marginRight = 0,
      // borderTop = 0,
      // borderBottom = 0,
      // borderLeft = 0,
      // borderRight = 0,
      // paddingTop = 0,
      // paddingBottom = 0,
      // paddingLeft = 0,
      // paddingRight = 0,
      // shadow = {},
      // shadowable = false,
      // textShadow = {},
      // textShadowable = false,
      // textAlign = "",
      // fontFamily = "",
      // fontSize = "",
      // fontWeight = "",
      // fontStyle = "",
      // textDecoration = "",
      // backgroundColor = "",
      // backgroundImage = "",
      // backgroundRepeat = "",
      // backgroundSize = "",
      children = []
    } = info || {};

    let group1 = bmCommon.clone(children || []);
    let group2 = bmCommon.clone(children || []);
    group1.sort((a, b) => a.left - b.left);
    let max_left = Math.max(...group1.map(item => item.left + item.width));
    group2.sort((a, b) => a.top - b.top);
    let max_top = Math.max(...group2.map(item => item.top + item.height));
    let { left: minLeft = 0 } = group1[0] || {};
    let { width: maxWidth = 0, left: maxLeft = 0 } = group1[length - 1] || {};
    // let minLeft = minLeft;
    maxLeft = maxLeft + maxWidth - minLeft;
    max_left = max_left - minLeft;
    if (maxLeft < max_left) {
      maxLeft = max_left;
    }
    let { top: minTop = 0 } = group2[0] || {};
    let { height: maxHeight = 0, top: maxTop = 0 } = group2[length - 1] || {};
    // let minTop = minTop;
    maxTop = maxTop + maxHeight - minTop;
    max_top = max_top - minTop;
    if (maxTop < max_top) {
      maxTop = max_top;
    }
    width = maxLeft;
    height = maxTop;
    let styles = {
      ...super.comStyle()
      // margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
      // padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
    };
    styles["width"] = `${width}px`;
    styles["height"] = `${height}px`;

    // if (textAlign) {
    //   styles["text-align"] = textAlign;
    //   if (textAlign == "justify") {
    //     styles["text-align-last"] = textAlign;
    //   }
    // }
    // if (shadowable) {
    //   let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
    //     shadow || {};
    //   styles[
    //     "box-shadow"
    //   ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
    // }
    // if (textShadowable) {
    //   let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
    //   styles["text-shadow"] = `${x}px ${y}px ${blur}px ${color}`;
    // }
    // // left = minLeft;
    // // top = minTop;
    // styles["width"] = `${width}px`;
    // styles["height"] = `${height}px`;
    // if (borderTop) {
    //   if (borderStyle) {
    //     styles["border-top-style"] = borderStyle;
    //   }
    //   styles["border-top-width"] = `${borderWidth}px`;
    //   if (borderColor) {
    //     styles["border-top-color"] = borderColor;
    //   }
    // } else {
    //   styles["border-top"] = "none";
    // }
    // if (borderBottom) {
    //   if (borderStyle) {
    //     styles["border-bottom-style"] = borderStyle;
    //   }
    //   styles["border-bottom-width"] = `${borderWidth}px`;
    //   if (borderColor) {
    //     styles["border-bottom-color"] = borderColor;
    //   }
    // } else {
    //   styles["border-bottom"] = "none";
    // }
    // if (borderLeft) {
    //   if (borderStyle) {
    //     styles["border-left-style"] = borderStyle;
    //   }
    //   styles["border-left-width"] = `${borderWidth}px`;
    //   if (borderColor) {
    //     styles["border-left-color"] = borderColor;
    //   }
    // } else {
    //   styles["border-left"] = "none";
    // }
    // if (borderRight) {
    //   if (borderStyle) {
    //     styles["border-right-style"] = borderStyle;
    //   }
    //   styles["border-right-width"] = `${borderWidth}px`;
    //   if (borderColor) {
    //     styles["border-right-color"] = borderColor;
    //   }
    // } else {
    //   styles["border-right"] = "none";
    // }
    // styles[
    //   "border-radius"
    // ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;

    // if (color) {
    //   styles["color"] = color;
    // }
    // if (fontSize) {
    //   styles["font-size"] = `${fontSize}px`;
    // }
    // if (fontFamily) {
    //   styles["font-family"] = `${fontFamily}`;
    // }
    // if (fontWeight) {
    //   styles["font-weight"] = fontWeight;
    // }
    // if (fontStyle) {
    //   styles["font-style"] = fontStyle;
    // }
    // if (textDecoration) {
    //   styles["text-decoration"] = textDecoration;
    // }
    // if (backgroundType == "purity") {
    //   //纯色
    //   if (backgroundColor) {
    //     styles["background-color"] = backgroundColor;
    //   }
    //   if (backgroundImage) {
    //     styles["background-image"] = `url(${this.$loadImgUrl(
    //       backgroundImage
    //     )})`;
    //     if (backgroundRepeat) {
    //       styles["background-repeat"] = backgroundRepeat;
    //     }
    //     if (backgroundSize) {
    //       styles["background-size"] = backgroundSize;
    //     }
    //   }
    // } else if (backgroundType == "gradient") {
    //   //渐变
    //   styles = { ...styles, ...gradientStyle(info) };
    // }
    return styles || {};
  }

  template() {
    let { info = {} } = this;
    let showType = "edit";
    // bmCommon.log(container);
    // contenteditable="showType == 'edit' && info.editable"
    return super.wrap(
      { info, showType },
      `
      <div class="bm-basic-panel-com component"
      style="${this.composeStyles(this.comStyle())}">
  </div>
    `
    );
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let { id = "" } = info || {};
    $(`#${id}>.component`).css(this.comStyle());
  }

  event() {}
}

export default Panel;

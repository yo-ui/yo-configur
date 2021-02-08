import bmCommon from "@/common/common";
import { widgets as widgetComs } from "@/widgets/index";

class Component {
  container;
  info;
  constructor(id) {
    // this.init();
  }
  init() {}

  // template() {}

  event() {}

  boxClasses() {}

  //包裹
  template(content) {
    // let _div = $(document.createElement("div"));
    // _div.addClass("bm-component-com edit");
    // _div.attr({ id: `${item.id}`, type: "text" });

    // let { info = {}, activeCom = {}, draging = false } = this;
    let { info = {} } = this;
    // let {
    //   left = "",
    //   top = "",
    //   // width = "",
    //   // height = "",
    //   animation = {},
    //   order: zIndex = "",
    //   // showCoverStatus = true,
    //   // matrix = "",
    //   rotate = "",
    //   transformOrigin = "",
    //   type = "",
    //   children = []
    // } = info || {};
    // let { direction = "", duration = "", iterationCount = 1 } = animation || {};
    // let { type: _type = "" } = activeCom || {};
    // if (type == "panel" && _type != "canvas" && _type != "panel") {
    //   let group1 = bmCommon.clone(children || []);
    //   let group2 = bmCommon.clone(children || []);
    //   group1.sort((a, b) => a.left - b.left);
    //   // let max_left = Math.max(...group1.map(item => item.left + item.width));
    //   group2.sort((a, b) => a.top - b.top);
    //   // let max_top = Math.max(...group2.map(item => item.top + item.height));
    //   let { left: minLeft = 0 } = group1[0] || {};
    //   // let { width: maxWidth = 0, left: maxLeft = 0 } = group1[length - 1] || {};
    //   // let minLeft = minLeft;
    //   // maxLeft = maxLeft + maxWidth - minLeft;
    //   // max_left = max_left - minLeft;
    //   // if (maxLeft < max_left) {
    //   //   maxLeft = max_left;
    //   // }
    //   let { top: minTop = 0 } = group2[0] || {};
    //   // let { height: maxHeight = 0, top: maxTop = 0 } = group2[length - 1] || {};
    //   // let minTop = minTop;
    //   // maxTop = maxTop + maxHeight - minTop;
    //   // max_top = max_top - minTop;
    //   // if (maxTop < max_top) {
    //   //   maxTop = max_top;
    //   // }
    //   // width = maxLeft;
    //   // height = maxTop;
    //   left += minLeft;
    //   top += minTop;
    //   info.left = left;
    //   info.top = top;
    //   children.forEach(item => {
    //     item.left -= minLeft;
    //     item.top -= minTop;
    //   });
    // }
    // let transform = `rotate(${rotate}deg)`;
    // let styles = {
    //   left: left + "px",
    //   top: top + "px",
    //   zIndex,
    //   // transform: `matrix(${a},${b},${c},${d},${e},${f})`,
    //   transform: `${transform}`,
    //   transformOrigin: transformOrigin
    //   // transformOrigin: "0 0"
    // };
    // if (!iterationCount) {
    //   iterationCount = "infinite";
    // }
    // // styles["pointer-events"] = !showCoverStatus ? "auto" : "none";
    // styles["pointer-events"] = !draging ? "auto" : "none";
    // // bmCommon.log("draging",draging)
    // // bmCommon.log("pointer-events=",showCoverStatus)
    // styles["animation-iteration-count"] = iterationCount;
    // styles["animation-duration"] = duration;
    // styles["animation-direction"] = direction;
    return `<div id="${
      info.id
    }" style="${this.boxStyle()}" class="${this.boxClasses()}">
    <div class="cover"></div><i title="旋转" class="operate-btn el-icon-refresh-right"></i>
    <i title="旋转轴" class="operate-btn el-icon-axis"></i><i title="左上角" class="operate-btn el-icon-top-left" style="transform: scale(2.49675);"></i>
    <i title="上" class="operate-btn el-icon-top" style="transform: scale(2.49675) translate(-20.026%, 0px);"></i>
    <i title="右上角" class="operate-btn el-icon-top-right" style="transform: scale(2.49675);"></i>
    <i title="左" class="operate-btn el-icon-back" style="transform: scale(2.49675) translate(0px, -20.026%);"></i>
    <i title="右" class="operate-btn el-icon-right" style="transform: scale(2.49675) translate(0px, -20.026%);"></i>
    <i title="左下角" class="operate-btn el-icon-bottom-left" style="transform: scale(2.49675);"></i>
    <i title="下" class="operate-btn el-icon-bottom" style="transform: scale(2.49675) translate(-20.026%, 0px);"></i>
    <i title="右下角" class="operate-btn el-icon-bottom-right" style="transform: scale(2.49675);"></i>
    ${content}
    </div>`;
    // _div.css({
    //   left: `${item.left}px`,
    //   top: `${item.top}px`,
    //   width: `${item.width}px`,
    //   height: `${item.height}px`,
    //   position: "absolute"
    // });
    // _div.html(`
    // <div class="cover"></div><i title="旋转" class="operate-btn el-icon-refresh-right"></i>
    // <i title="旋转轴" class="operate-btn el-icon-axis"></i><i title="左上角" class="operate-btn el-icon-top-left" style="transform: scale(2.49675);"></i>
    // <i title="上" class="operate-btn el-icon-top" style="transform: scale(2.49675) translate(-20.026%, 0px);"></i>
    // <i title="右上角" class="operate-btn el-icon-top-right" style="transform: scale(2.49675);"></i>
    // <i title="左" class="operate-btn el-icon-back" style="transform: scale(2.49675) translate(0px, -20.026%);"></i>
    // <i title="右" class="operate-btn el-icon-right" style="transform: scale(2.49675) translate(0px, -20.026%);"></i>
    // <i title="左下角" class="operate-btn el-icon-bottom-left" style="transform: scale(2.49675);"></i>
    // <i title="下" class="operate-btn el-icon-bottom" style="transform: scale(2.49675) translate(-20.026%, 0px);"></i>
    // <i title="右下角" class="operate-btn el-icon-bottom-right" style="transform: scale(2.49675);"></i>
    // <div class="bm-basic-wkq-com" type="edit" style="width:200px;height:30px;">
    // ${item.comName || item.name}
    // </div>`);
  }

  //渐变颜色样式
  gradientStyle() {
    let { info = {} } = this;
    let { gradientStyle = {} } = info || {};
    let {
      type = "",
      angle = "",
      center = "",
      radialShape = "",
      valueList = []
    } = gradientStyle || {};
    let styles = {};
    let colors = valueList.map(item => `${item.code} ${item.value}%`);
    if (type == "linear") {
      styles.backgroundImage = `linear-gradient(${angle}deg, ${colors.join()})`;
    } else if (type == "radial") {
      styles.backgroundImage = `radial-gradient(${radialShape} at ${center}, ${colors.join()})`;
    }
    return styles;
  }
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
      margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
      padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
    };
    if (textAlign) {
      styles["textAlign"] = textAlign;
      if (textAlign == "justify") {
        styles["text-align-last"] = textAlign;
      }
    }
    if (shadowable) {
      let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
        shadow || {};
      styles[
        "boxShadow"
      ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
    }
    if (textShadowable) {
      let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
      styles["textShadow"] = `${x}px ${y}px ${blur}px ${color}`;
    }
    styles["width"] = `${width}px`;
    styles["height"] = `${height}px`;
    if (backgroundRepeat) {
      styles["backgroundRepeat"] = backgroundRepeat;
    }
    if (backgroundSize) {
      styles["backgroundSize"] = backgroundSize;
    }
    if (borderTop) {
      if (borderStyle) {
        styles["borderTopStyle"] = borderStyle;
      }
      styles["borderTopWidth"] = `${borderWidth}px`;
      if (borderColor) {
        styles["borderTopColor"] = borderColor;
      }
    } else {
      styles["borderTop"] = "none";
    }
    if (borderBottom) {
      if (borderStyle) {
        styles["borderBottomStyle"] = borderStyle;
      }
      styles["borderBottomWidth"] = `${borderWidth}px`;
      if (borderColor) {
        styles["borderBottomColor"] = borderColor;
      }
    } else {
      styles["borderBottom"] = "none";
    }
    if (borderLeft) {
      if (borderStyle) {
        styles["borderLeftStyle"] = borderStyle;
      }
      styles["borderLeftWidth"] = `${borderWidth}px`;
      if (borderColor) {
        styles["borderLeftColor"] = borderColor;
      }
    } else {
      styles["borderLeft"] = "none";
    }
    if (borderRight) {
      if (borderStyle) {
        styles["borderRightStyle"] = borderStyle;
      }
      styles["borderRightWidth"] = `${borderWidth}px`;
      if (borderColor) {
        styles["borderRightColor"] = borderColor;
      }
    } else {
      styles["borderRight"] = "none";
    }
    if (borderTop) {
      if (borderStyle) {
        styles["borderTopStyle"] = borderStyle;
      }
      styles["borderTopWidth"] = `${borderWidth}px`;
      if (borderColor) {
        styles["borderTopColor"] = borderColor;
      }
    } else {
      styles["borderTop"] = "none";
    }
    if (borderBottom) {
      if (borderStyle) {
        styles["borderBottomStyle"] = borderStyle;
      }
      styles["borderBottomWidth"] = `${borderWidth}px`;
      if (borderColor) {
        styles["borderBottomColor"] = borderColor;
      }
    } else {
      styles["borderBottom"] = "none";
    }
    if (borderLeft) {
      if (borderStyle) {
        styles["borderLeftStyle"] = borderStyle;
      }
      styles["borderLeftWidth"] = `${borderWidth}px`;
      if (borderColor) {
        styles["borderLeftColor"] = borderColor;
      }
    } else {
      styles["borderLeft"] = "none";
    }
    if (borderRight) {
      if (borderStyle) {
        styles["borderRightStyle"] = borderStyle;
      }
      styles["borderRightWidth"] = `${borderWidth}px`;
      if (borderColor) {
        styles["borderRightColor"] = borderColor;
      }
    } else {
      styles["borderRight"] = "none";
    }
    styles[
      "borderRadius"
    ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
    if (color) {
      styles["color"] = color;
    }
    if (fontSize) {
      styles["fontSize"] = `${fontSize}px`;
    }
    if (fontFamily) {
      styles["fontFamily"] = `${fontFamily}`;
    }
    if (fontWeight) {
      styles["fontWeight"] = fontWeight;
    }
    if (fontStyle) {
      styles["fontStyle"] = fontStyle;
    }
    if (textDecoration) {
      styles["textDecoration"] = textDecoration;
    }
    if (backgroundType == "purity") {
      //纯色
      if (backgroundColor) {
        styles["backgroundColor"] = backgroundColor;
      }
      if (backgroundImage) {
        styles["backgroundImage"] = `url(${this.$loadImgUrl(backgroundImage)})`;
      }
    } else if (backgroundType == "gradient") {
      //渐变
      styles = { ...styles, ...gradientStyle };
    }
    return styles || {};
  }
}

export default Component;

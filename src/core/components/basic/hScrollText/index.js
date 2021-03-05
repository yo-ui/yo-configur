import bmCommon from "@/common/common";
import Component from "@/core/Component";

import "../../../../assets/less/components/component/basic/hScroll.less";

class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {}

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
  //     if (backgroundImage) {
  //       styles["background-image"] = `url(${$vm.$loadImgUrl(backgroundImage)})`;
  //     }
  //   } else if (backgroundType == "gradient") {
  //     //渐变
  //     styles = { ...styles, ...gradientStyle(info) };
  //   }
  //   return styles || {};
  // }
  textStyle() {
    let { info = {}, transition = "", transform = "" } = this;
    let {
      width = ""
      // height = "",
      // color = "",
      // shadow = {},
      // shadowable = false,
      // textShadow = {},
      // textAlign = "",
      // textShadowable = false,
      // fontFamily = "",
      // fontWeight = "",
      // fontStyle = "",
      // textDecoration = "",
      // fontSize = ""
    } = info || {};
    let styles = {};
    // if (textAlign) {
    //   styles["text-align"] = textAlign;
    //   if (textAlign == "justify") {
    //     styles["text-align-last"] = textAlign;
    //   }
    // }
    // if (textShadowable) {
    //   let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
    //   styles["text-shadow"] = `${x}px ${y}px ${blur}px ${color}`;
    // }
    if (width) {
      styles["width"] = `${width}px`;
    }
    // if (height) {
    //   styles["height"] = `${height}px`;
    //   styles["line-height"] = `${height}px`;
    // }
    // if (color) {
    //   styles["color"] = color;
    // }
    if (transition) {
      styles["transition"] = `${transition}`;
    }
    if (transform) {
      styles["transform"] = `${transform}`;
    }
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
    return styles || {};
  }

  innerTextStyle() {
    let { info = {} } = this;
    let {
      lineHeight = "",
      color = "",
      textShadow = {},
      textAlign = "",
      textShadowable = false,
      fontFamily = "",
      fontWeight = "",
      fontStyle = "",
      textDecoration = "",
      fontSize = ""
    } = info || {};
    let styles = {};
    if (textAlign) {
      styles["text-align"] = textAlign;
      if (textAlign == "justify") {
        styles["text-align-last"] = textAlign;
      }
    }
    if (textShadowable) {
      let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
      styles["text-shadow"] = `${x}px ${y}px ${blur}px ${color}`;
    }
    if (lineHeight) {
      styles["height"] = `${lineHeight}px`;
      styles["line-height"] = `${lineHeight}px`;
    }
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
    return styles || {};
  }

  template() {
    let { info = {} } = this;
    let { contentList = [] } = info || {};
    let innerText = this.renderInnerText(contentList);
    return super.wrap(
      { info },
      `
    <div class="bm-h-scroll-text-com component"
    style="${this.composeStyles(this.comStyle())}">
    <div class="text-box" style="${this.composeStyles(this.textStyle())}">
      ${innerText}
    </div>
  </div>
    `
    );
  }

  renderInnerText(contentList) {
    let textList = [];
    contentList.forEach(item => {
      textList.push(`<div
      class="inner-text"
      style="${this.composeStyles(this.innerTextStyle())}"
    >
      ${item.text}
    </div>`);
    });
    return textList.join("");
  }

  destroy() {
    clearTimeout(this.timeoutId);
    clearTimeout(this.startTimeoutId);
    clearTimeout(this.scrollTimeoutId);
    clearTimeout(this.endTimeoutId);
    let { info = {} } = this;
    bmCommon.log("销毁组件成功", info.type);
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let { id = "", contentList } = info || {};
    let $container = $(`#${id}>.component`);
    let $text = $container.find(".text-box");
    this.refreshAnimate();
    $text.css(this.textStyle());
    $text.html(this.renderInnerText(contentList));
  }
  scrollAction() {
    let { info = {} } = this;
    let { stayTime = 0 } = info || {};
    let index = 0;
    this.startTimeoutId = setTimeout(() => {
      clearTimeout(this.startTimeoutId);
      this.scrollHeight = 0;
      this.scrollLineAction(index);
    }, stayTime);
  }
  //每行的滚动
  scrollLineAction(index) {
    let { info = {}, scrollHeight = 0, textHeight = 0 } = this;
    let {
      height = 0,
      lineHeight = 0,
      scrollTime = 0,
      lineTime = 0,
      stayTime = 0
    } = info || {};
    let _height = textHeight - height + lineHeight;
    let length = Math.round(_height / lineHeight);
    scrollHeight += lineHeight;
    this.scrollHeight = scrollHeight;
    if (index >= length - 1) {
      index = 0;
      this.endTimeoutId = setTimeout(() => {
        clearTimeout(this.endTimeoutId);
        this.transform = "";
        this.transition = "";
        this.scrollHeight = 0;
        this.scrollAction();
      }, stayTime);
      return;
    }
    // bmCommon.log(
    //   "scrollHeight=",
    //   scrollHeight,
    //   ",height=",
    //   lineHeight,
    //   "index=",
    //   index,
    //   "length=",
    //   length
    // );
    this.timeoutId = setTimeout(() => {
      clearTimeout(this.timeoutId);
      this.transform = `translateY(-${scrollHeight}px)`;
      this.transition = `transform ${scrollTime}ms linear 0s`;
      this.refreshAnimate();
      this.scrollTimeoutId = setTimeout(() => {
        clearTimeout(this.scrollTimeoutId);
        this.endTimeoutId = setTimeout(() => {
          clearTimeout(this.endTimeoutId);
          this.transform = "";
          this.transition = "";
          this.refreshAnimate();
          this.scrollLineAction(++index);
        }, lineTime);
      }, scrollTime);
    }, lineTime);
  }

  refreshAnimate() {
    let { info = {}, transform = "", transition = "" } = this;
    let styles = {};
    styles["transition"] = `${transition}`;
    styles["transform"] = `${transform}`;
    let { id = "" } = info || {};
    let $container = $(`#${id}>.component`);
    let $text = $container.find(".text-box");
    $text.css(styles);
  }

  event() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let $container = $(`#${id}>.component`);
    let $text = $container.find(".text-box");
    this.destroy();
    let height = $text.height();
    this.textHeight = height;
    this.scrollAction();
  }
}

export default Text;

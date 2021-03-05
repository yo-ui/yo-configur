import bmCommon from "@/common/common";
import Component from "@/core/Component";
import "../../../../assets/less/components/component/basic/select.less";

class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {}

  //组件样式

  optionStyle(item, index) {
    let { info = {} } = this;
    let {
      // width: _width = 0,
      option = {},
      select = {},
      content = "",
      optionActive = {},
      optionHover = {},
      contentList = []
    } = info || {};
    let {
      // width = "",
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
      paddingTop = 0,
      paddingBottom = 0,
      paddingLeft = 0,
      paddingRight = 0,
      textShadow = {},
      textShadowable = false,
      textAlign = "",
      textIndent = "",
      fontFamily = "",
      backgroundType = "",
      fontSize = "",
      fontWeight = "",
      fontStyle = "",
      textDecoration = "",
      backgroundColor = "",
      backgroundImage = "",
      backgroundRepeat = "",
      backgroundSize = ""
    } = option || {};
    let { length = 0 } = contentList || [];
    let { value = "" } = item || {};
    let styles = {
      margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
      padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
    };
    // if (width) {
    //   styles["width"] = `${width}px`;
    // }
    if (height) {
      styles["height"] = `${height}px`;
      styles["line-height"] = `${height}px`;
    }
    if (textAlign) {
      styles["text-align"] = textAlign;
      if (textAlign == "justify") {
        styles["text-align-last"] = textAlign;
      }
    }
    if (backgroundRepeat) {
      styles["background-repeat"] = backgroundRepeat;
    }
    if (backgroundSize) {
      styles["background-size"] = backgroundSize;
    }
    if (borderColor) {
      styles["border-color"] = borderColor;
    }
    if (borderStyle) {
      styles["border-style"] = borderStyle;
    }
    styles["border-width"] = `${borderWidth}px`;
    styles["text-indent"] = `${textIndent}px`;
    // if (length > 1) {
    //   if (index == length - 1) {
    //     styles[
    //       "border-width"
    //     ] = `${borderWidth}px ${borderWidth}px ${borderWidth}px ${borderWidth}px`;
    //   } else {
    //     if (_width < 2 * width) {
    let { borderStyle: _borderStyle = "" } = select || {};
    //竖向
    if (marginBottom <= 0) {
      styles[
        "border-width"
      ] = `${borderWidth}px ${borderWidth}px 0 ${borderWidth}px`;
      if (_borderStyle != "none") {
        if (index == 0) {
          styles["border-width"] = `0 0 0 0`;
        } else if (index == length - 1) {
          styles["border-width"] = `${borderWidth}px 0 0 0`;
        } else {
          styles["border-width"] = `${borderWidth}px 0 0 0`;
        }
      } else {
        if (index == 0) {
          styles[
            "border-width"
          ] = `${borderWidth}px ${borderWidth}px 0 ${borderWidth}px`;
        } else if (index == length - 1) {
          styles[
            "border-width"
          ] = `${borderWidth}px ${borderWidth}px ${borderWidth}px ${borderWidth}px`;
        }
      }
      // if(index==length-1&&_borderStyle=='none'){

      // }
    }
    //     } else {
    //       //横向
    //       if (marginRight > 0) {
    //         styles[
    //           "border-width"
    //         ] = `${borderWidth}px 0 ${borderWidth}px ${borderWidth}px`;
    //       }
    //     }
    //   }
    // }
    styles[
      "border-radius"
    ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
    // if (shadowable) {
    //   let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
    //     shadow || {};
    //   styles[
    //     "box-shadow"
    //   ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
    // }
    if (textShadowable) {
      let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
      styles["text-shadow"] = `${x}px ${y}px ${blur}px ${color}`;
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
    if (backgroundType == "purity") {
      //纯色
      if (backgroundColor) {
        styles["background-color"] = backgroundColor;
      }
      if (backgroundImage) {
        styles["background-image"] = `url(${$vm.$loadImgUrl(backgroundImage)})`;
      }
    } else if (backgroundType == "gradient") {
      //渐变
      styles = { ...styles, ...gradientStyle(option) };
    }
    if (optionHover) {
      let {
        backgroundType = "",
        backgroundColor = "",
        color = ""
        // textShadowable = false,
        // textShadow = {}
      } = optionHover || {};

      // if (textShadowable) {
      //   let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
      //   styles[
      //     "--option-hover-text-shadow"
      //   ] = `${x}px ${y}px ${blur}px ${color}`;
      // }
      if (color) {
        styles["--option-hover-color"] = color;
      }
      if (backgroundType == "purity") {
        //纯色
        if (backgroundColor) {
          styles["--option-hover-background"] = backgroundColor;
        }
        // if (backgroundImage) {
        //   styles["background-image"] = `url(${$vm.$loadImgUrl(
        //     backgroundImage
        //   )})`;
        // }
      } else if (backgroundType == "gradient") {
        //渐变
        let { backgroundImage = "" } = gradientStyle(optionHover);
        if (backgroundImage) {
          styles["--option-hover-background"] = backgroundImage;
        }
      }
    }
    if (content == value) {
      //按钮选中的样式
      let {
        color = "",
        backgroundColor = "",
        backgroundImage = "",
        backgroundRepeat = "",
        backgroundSize = "",
        textShadowable = false,
        textShadow = {},
        fontFamily = "",
        fontSize = "",
        fontWeight = "",
        fontStyle = "",
        textDecoration = "",
        backgroundType = "", //纯色和渐变色 purity  纯色  gradients 渐变色
        borderColor = ""
      } = optionActive || {};

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
      if (borderColor) {
        styles["border-color"] = borderColor;
      }
      if (backgroundType == "purity") {
        //纯色
        if (backgroundColor) {
          styles["background-color"] = backgroundColor;
        }
        if (backgroundImage) {
          styles["background-image"] = `url(${$vm.$loadImgUrl(
            backgroundImage
          )})`;
        }
      } else if (backgroundType == "gradient") {
        //渐变
        styles = { ...styles, ...this.gradientStyle(optionActive) };
      }
    }
    return styles || {};
  }
  inputStyle() {
    let { info = {} } = this;
    let {
      width = "",
      height = "",
      color = "",
      borderColor = "",
      borderHoverColor = "",
      borderTop = 0,
      borderBottom = 0,
      borderLeft = 0,
      borderRight = 0,
      borderStyle = "",
      borderWidth = "",
      borderRadiusTopLeft = 0,
      borderRadiusTopRight = 0,
      borderRadiusBottomLeft = 0,
      borderRadiusBottomRight = 0,
      // scale = "",
      marginTop = 0,
      marginBottom = 0,
      marginLeft = 0,
      marginRight = 0,
      paddingTop = 0,
      paddingBottom = 0,
      textIndent = 0,
      paddingLeft = 0,
      paddingRight = 0,
      shadow = {},
      shadowable = false,
      textShadow = {},
      textShadowable = false,
      textAlign = "",
      fontFamily = "",
      backgroundType = "",
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
    styles["width"] = `${width}px`;
    styles["height"] = `${height}px`;
    if (textAlign) {
      styles["text-align"] = textAlign;
      if (textAlign == "justify") {
        styles["text-align-last"] = textAlign;
      }
    }
    if (backgroundRepeat) {
      styles["background-repeat"] = backgroundRepeat;
    }
    if (backgroundSize) {
      styles["background-size"] = backgroundSize;
    }
    if (borderColor) {
      styles["border-color"] = borderColor;
    }
    if (borderHoverColor) {
      styles["--border-hover-color"] = borderHoverColor;
    }
    if (borderStyle) {
      styles["border-style"] = borderStyle;
    }
    styles["border-width"] = `${borderWidth}px`;
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
    styles["text-indent"] = `${textIndent}px`;
    if (fontStyle) {
      styles["font-style"] = fontStyle;
    }
    if (textDecoration) {
      styles["text-decoration"] = textDecoration;
    }
    if (backgroundType == "purity") {
      //纯色
      if (backgroundColor) {
        styles["background-color"] = backgroundColor;
      }
      if (backgroundImage) {
        styles["background-image"] = `url(${$vm.$loadImgUrl(backgroundImage)})`;
      }
    } else if (backgroundType == "gradient") {
      //渐变
      styles = { ...styles, ...this.gradientStyle(info) };
    }
    return styles || {};
  }
  selectStyle() {
    let { info = {} } = this;
    let { select = {} } = info || {};
    let {
      // width = "",
      maxHeight = "",
      // color = "",
      borderColor = "",
      borderStyle = "",
      borderWidth = "",
      borderRadiusTopLeft = 0,
      borderRadiusTopRight = 0,
      borderRadiusBottomLeft = 0,
      borderRadiusBottomRight = 0,
      // // scale = "",
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
      arrowColor = ""
    } = select || {};
    let styles = {
      transformOrigin: "top",
      margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
      padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
    };
    // if (zoom && boxZoom) {
    //   styles["transform"] = `scale(${zoom * boxZoom})`;
    // }
    if (maxHeight) {
      styles["max-height"] = `${maxHeight}px`;
    }
    styles["--background-color"] = arrowColor;
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
    if (shadowable) {
      let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
        shadow || {};
      styles[
        "box-shadow"
      ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
    }
    return styles || {};
  }
  arrowStyle() {
    let { info = {} } = this;
    let { arrow = {} } = info || {};
    let {
      color = "",
      fontSize = "",
      marginRight = 0,
      fontWeight = "",
      borderRadiusTopLeft = 0,
      borderRadiusTopRight = 0,
      borderRadiusBottomLeft = 0,
      borderRadiusBottomRight = 0
    } = arrow || {};
    let styles = {
      marginRight: `${marginRight}px `
      // padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
    };
    if (fontSize) {
      styles["font-size"] = `${fontSize}px`;
    }
    if (color) {
      styles["color"] = `${color}`;
    }
    if (fontWeight) {
      styles["font-weight"] = "bold";
    }
    styles[
      "border-radius"
    ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
    return styles || {};
  }
  contentMap() {
    let { info = {} } = this;
    let { contentList = [] } = info || {};
    let map = {};
    contentList.forEach(item => {
      let { value = "" } = item || {};
      map[value] = item || {};
    });
    return map || {};
  }

  template() {
    let { info = {} } = this;
    let { select = {}, arrow = {}, content = "" } = info || {};
    // style="${this.composeStyles(this.comStyle())}"
    let { status = false } = arrow || {};
    let { showable = false } = select || {};
    let arrowText = "";
    if (status) {
      arrowText = `<i
      class="
        ${!showable ? "el-icon-arrow-down" : "el-icon-arrow-up"}
      "
      style="${this.composeStyles(this.arrowStyle())}"
    ></i>`;
    }
    return super.wrap(
      { info },
      `
      <div
      class="bm-basic-select-com component"
      >
      <div
      class="select-text"
      style="${this.composeStyles(this.inputStyle())}"
  >
    <span>${(this.contentMap()[content] || {}).text}</span>
    ${arrowText}
  </div>
  <ul class="float-box"
  style="${this.composeStyles(this.selectStyle())}">
    ${this.getOptionsList()}
  </ul>
    </div>
    `
    );
  }

  getOptionsList() {
    let htmlArr = [];
    let { info = {} } = this;
    let { contentList = [] } = info || {};
    let { length: len = 0 } = contentList || [];
    let i = 0;
    for (; i < len; i++) {
      let item = contentList[i];
      htmlArr.push(`<li
        style="${this.composeStyles(this.optionStyle(item, i))}"
        data-index="${i}"
      >
        ${item.text}
      </li>`);
    }
    return htmlArr.join("");
  }

  // clickEvent() {
  //   let { showType = "", info = {} } = this;
  //   if (showType == "edit") {
  //     info.select.showable = !info.select.showable;
  //   }
  // }
  // optionClickEvent(item, index) {
  //   let { info = {} } = this;
  //   let { value = "" } = item || {};
  //   info.content = value;
  //   info.select.showable = false;
  //   // bmCommon.log(info.content, value);
  // }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let { id = "", content = "", select = {}, arrow = {} } = info || {};
    let $container = $(`#${id}>.component`);
    let $float_box = $container.find(".float-box");
    let $select_text = $container.find(".select-text");
    let { status = false } = arrow || {};
    let { showable = false } = select || {};
    let $arrow = $select_text.find("i");
    $select_text.css(this.inputStyle());
    $float_box.html(this.getOptionsList()).css(this.selectStyle());
    if (status) {
      $arrow.show().css(this.arrowStyle());
    } else {
      $arrow.hide();
    }
    if (showable) {
      $float_box.show();
      $arrow.removeClass("el-icon-arrow-down").addClass("el-icon-arrow-up");
    } else {
      $float_box.hide();
      $arrow.removeClass("el-icon-arrow-up").addClass("el-icon-arrow-down");
    }
    // $container.html(content);
  }

  event() {
    let { info = {} } = this;
    let { id = "", contentList = [], select = {}, arrow = {} } = info || {};
    let $container = $(`#${id}>.component`);
    let $float_box = $container.find(".float-box");
    let $select_text = $container.find(".select-text");
    let $arrow = $select_text.find("i");
    let that = this;
    $select_text.on("click", function(e) {
      // let $this = $(this);
      let { showable = false } = select || {};
      e.stopPropagation();
      $float_box.toggle();
      arrow.showable = !showable;
      if (!showable) {
        $arrow.removeClass("el-icon-arrow-down").addClass("el-icon-arrow-up");
      } else {
        $arrow.removeClass("el-icon-arrow-up").addClass("el-icon-arrow-down");
      }
    });
    $float_box.on("click", "li", function(e) {
      e.stopPropagation();
      let $this = $(this);
      let index = $this.data("index");
      let item = contentList[index];
      let { text = "", value = "" } = item || {};
      info.content = value;
      $select_text.find("span").html(text);
      $float_box.html(that.getOptionsList());
      $float_box.hide();
      // that.optionClickEvent(item,index)
    });
  }
}

export default Text;

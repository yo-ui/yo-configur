import bmCommon from "@/common/common";
import Component from "@/core/Component";
import "../../../../assets/less/components/component/basic/button.tab.less";

class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {}

  //组件样式
  btnStyle(item, index) {
    let { info = {} } = this;
    let {
      width: _width = 0,
      button = {},
      content = "",
      buttonActive = {},
      contentList = []
    } = info || {};
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
      paddingTop = 0,
      paddingBottom = 0,
      paddingLeft = 0,
      paddingRight = 0,
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
    } = button || {};
    let { length = 0 } = contentList || [];
    // bmCommon.log(length,index);
    let { value = "" } = item || {};
    let styles = {
      margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
      padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
    };
    if (width) {
      styles["width"] = `${width}px`;
    }
    if (height) {
      styles["height"] = `${height}px`;
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
    if (length > 1) {
      if (index == length - 1) {
        styles[
          "border-width"
        ] = `${borderWidth}px ${borderWidth}px ${borderWidth}px ${borderWidth}px`;
      } else {
        if (_width < 2 * width) {
          //竖向
          if (!(marginBottom > 0 || marginTop > 0)) {
            styles[
              "border-width"
            ] = `${borderWidth}px ${borderWidth}px 0 ${borderWidth}px`;
          }
        } else {
          //横向
          if (!(marginRight > 0 || marginLeft > 0)) {
            styles[
              "border-width"
            ] = `${borderWidth}px 0 ${borderWidth}px ${borderWidth}px`;
          }
        }
      }
    }
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
    // if (scale) {
    //   (styles["transform"] = `${scale}`),
    //     (styles["-webkit-transform"] = `${scale}`),
    //     (styles["-ms-transform"] = `${scale}`),
    //     (styles["-o-transform"] = `${scale}`),
    //     (styles["-moz-transform"] = `${scale}`);
    // }
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
      styles = { ...styles, ...this.gradientStyle(button) };
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
      } = buttonActive || {};

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
        styles = { ...styles, ...gradientStyle(buttonActive) };
      }
    }
    return styles || {};
  }

  template() {
    let { info = {} } = this;
    return super.wrap(
      { info },
      `
      <div
      class="bm-basic-button-tab-com component"
      style="${this.composeStyles(this.comStyle())}"
    >
    ${this.getButtonList()}
  </div>
    `
    );
  }

  getButtonList() {
    let htmlArr = [];
    let { info = {} } = this;
    let { contentList = [] } = info || {};
    let { length: len = 0 } = contentList || [];
    let i = 0;
    for (; i < len; i++) {
      let item = contentList[i];
      htmlArr.push(`<button
      style="${this.composeStyles(this.btnStyle(item, i))}" data-index="${i}"
    >
      ${item.text}
    </button>`);
    }
    return htmlArr.join("");
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let { id = "", content = "" } = info || {};
    let $container = $(`#${id}>.component`);
    $container.html(this.getButtonList());
  }
  clickEvent(item) {
    let { info = {}, getUserInfo } = this;
    let { value = "" } = item || {};
    let userInfo = getUserInfo();
    let { bindData = "" } = info || {};
    info.content = value;
    let { comId = "" } = bindData || {};
    if (comId) {
      // let com = document.getElementById(`box_${comId}`);
      // let vm = com.__vue__;
      // let { info: _info = {} } = vm || {};
      let obj = window.bm_widgetMap[comId];
      let { info = {} } = obj || {};
      let { token = "" } = userInfo || {};
      info.content = $vm.$linkUrl(value, { "x-access-token": token });
      obj?.refresh();
    }
  }

  event() {
    let { info = {} } = this;
    let { id = "", contentList = [], select = {}, arrow = {} } = info || {};
    let $container = $(`#${id}>.component`);
    // let $float_box = $container.find(".float-box")
    // let $select_text = $container.find(".select-text")
    // let $arrow=$select_text.find("i")
    let that = this;
    // $select_text.on("click", function(e) {
    //   // let $this = $(this);
    //   let {showable=false}=select||{}
    //   e.stopPropagation()
    //   $float_box.toggle()
    //   arrow.showable=!showable
    //   if(!showable){
    //    $arrow.removeClass("el-icon-arrow-down").addClass("el-icon-arrow-up")
    //   }else{
    //    $arrow.removeClass("el-icon-arrow-up").addClass("el-icon-arrow-down")
    //   }
    // });
    $container.on("click", "button", function(e) {
      e.stopPropagation();
      let $this = $(this);
      let index = $this.data("index");
      let item = contentList[index];
      let { text = "", value = "" } = item || {};
      info.content = value;
      // $select_text.find("span").html(text)
      $container.html(that.getButtonList());
      // $float_box.hide()
      that.clickEvent(item, index);
    });
  }
}

export default Text;

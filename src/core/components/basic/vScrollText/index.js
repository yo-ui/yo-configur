import bmCommon from "@/common/common";
import Component from "@/core/Component";

import "../../../../assets/less/components/component/basic/vScroll.less";
class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {}

  //组件样式
  textStyle() {
    let { info = {}, transition = "", transform = "" } = this;
    let {
      // width = "",
      height = "",
      color = "",
      // shadow = {},
      // shadowable = false,
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
    // if (width) {
    //   styles["width"] = `${width}px`;
    // }
    if (height) {
      styles["height"] = `${height}px`;
      styles["line-height"] = `${height}px`;
    }
    if (color) {
      styles["color"] = color;
    }
    if (transition) {
      styles["transition"] = `${transition}`;
    }
    if (transform) {
      styles["transform"] = `${transform}`;
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
    let { content = "" } = info || {};
    // bmCommon.log(container);
    // contenteditable="showType == 'edit' && info.editable"
    return super.wrap(
      { info },
      `
    <div class="bm-v-scroll-text-com component"
    style="${this.composeStyles(this.comStyle())}">
    <div style="${this.composeStyles(this.textStyle())}" class="inner-text">
      ${content}
    </div>
  </div>
    `
    );
  }

  scrollAction() {
    let { info = {}, textWidth = 0 } = this;
    let { stayTime = 0, scrollTime = 0, width = 0 } = info || {};

    this.timeoutId = setTimeout(() => {
      clearTimeout(this.timeoutId);
      this.transform = `translateX(-${textWidth - width}px)`;
      this.transition = `transform ${scrollTime}ms linear 0s`;
      this.refreshAnimate();
      bmCommon.log(`scrollAction刷新 `, info.id);
      this.scrollTimeoutId = setTimeout(() => {
        clearTimeout(this.scrollTimeoutId);
        this.endTimeoutId = setTimeout(() => {
          clearTimeout(this.endTimeoutId);
          this.transform = "";
          this.transition = "";
          this.refreshAnimate();
          this.scrollAction();
        }, stayTime);
      }, scrollTime);
    }, stayTime);
  }

  destroy() {
    clearTimeout(this.timeoutId);
    clearTimeout(this.scrollTimeoutId);
    clearTimeout(this.endTimeoutId);
    let { info = {} } = this;
    bmCommon.log("销毁组件成功", info.type);
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let { id = "", content = "" } = info || {};
    let $container = $(`#${id}>.component`);
    let $text = $container.find(".inner-text");
    this.refreshAnimate();
    $text.html(content);
  }

  refreshAnimate() {
    let { info = {}, transform = "", transition = "" } = this;
    let styles = {};
    styles["transition"] = `${transition}`;
    styles["transform"] = `${transform}`;
    let { id = "" } = info || {};
    let $container = $(`#${id}>.component`);
    let $text = $container.find(".inner-text");
    $text.css(styles);
  }

  event() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let $container = $(`#${id}>.component`);
    let $text = $container.find(".inner-text");
    this.destroy();
    let width = $text.width();
    this.textWidth = width;
    this.scrollAction();
  }
}

export default Text;

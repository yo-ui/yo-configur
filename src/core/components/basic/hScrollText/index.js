import bmCommon from "@/common/common";
import Component from "@/core/Component";

import "../../../../assets/less/components/component/basic/hScroll.less";

class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {}

  //组件样式
  textStyle() {
    let { info = {}, transition = "", transform = "" } = this;
    let { width = "" } = info || {};
    let styles = {};
    if (width) {
      styles["width"] = `${width}px`;
    }
    if (transition) {
      styles["transition"] = `${transition}`;
    }
    if (transform) {
      styles["transform"] = `${transform}`;
    }
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

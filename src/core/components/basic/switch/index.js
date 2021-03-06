// import bmCommon from "@/common/common";
import Component from "@/core/Component";
import "../../../../assets/less/components/component/basic/switch.less";

class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {}

  //组件样式

  openSliderStyle() {
    let { info = {} } = this;
    let {
      height = "",
      openSliderColor,
      sliderBorderColor = "",
      sliderBorderStyle = "",
      sliderBorderWidth = ""
    } = info || {};
    let styles = {};
    if (height) {
      let border = height * 0.2;
      styles["height"] = `${height - border - sliderBorderWidth}px`;
      styles["width"] = `${height - border - sliderBorderWidth}px`;
      styles["border-radius"] = `${height / 2}px`;
    }
    if (openSliderColor) {
      styles["background-color"] = openSliderColor;
    }
    if (sliderBorderColor) {
      styles["border-color"] = sliderBorderColor;
    }
    if (sliderBorderStyle) {
      styles["border-style"] = sliderBorderStyle;
    }
    styles["border-width"] = `${sliderBorderWidth}px`;
    return styles;
  }
  closeSliderStyle() {
    let { info = {} } = this;
    let {
      height = "",
      closeSliderColor = "",
      sliderBorderColor = "",
      sliderBorderStyle = "",
      sliderBorderWidth = ""
    } = info || {};
    let styles = {};
    if (height) {
      let border = height * 0.2;
      styles["height"] = `${height - border - sliderBorderWidth}px`;
      styles["width"] = `${height - border - sliderBorderWidth}px`;
      styles["border-radius"] = `${height / 2}px`;
    }
    if (closeSliderColor) {
      styles["background-color"] = closeSliderColor;
    }
    if (sliderBorderColor) {
      styles["border-color"] = sliderBorderColor;
    }
    if (sliderBorderStyle) {
      styles["border-style"] = sliderBorderStyle;
    }
    styles["border-width"] = `${sliderBorderWidth}px`;
    return styles;
  }
  closeTextStyle() {
    let { info = {} } = this;
    let { closeColor = "" } = info || {};
    let styles = {};
    if (closeColor) {
      styles["color"] = closeColor;
    }
    return styles;
  }
  openTextStyle() {
    let { info = {} } = this;
    let { openColor = "" } = info || {};
    let styles = {};
    if (openColor) {
      styles["color"] = openColor;
    }
    return styles;
  }

  comStyle() {
    let { info = {} } = this;
    let { content = false, activeColor = "", inactiveColor = "" } = info || {};
    let styles = {
      ...super.comStyle()
    };
    styles["background-color"] = content ? activeColor : inactiveColor;
    return styles || {};
  }

  template() {
    let { info = {} } = this;

    return super.wrap(
      { info },
      `
      <div
      class="bm-basic-switch-com component"
      style="${this.composeStyles(this.comStyle())}"
    >

    ${this.renderContentText()}

  </div>
    `
    );
  }

  renderContentText() {
    let { info = {} } = this;
    let { content = "", openText = "", closeText = "" } = info || {};
    if (content === "") {
      content = false;
      info.content = false;
    }
    let contentText = "";
    if (content) {
      contentText = `
       <span
      class="btn-text btn-open-text"
      style="${this.composeStyles(this.openTextStyle())}"
      >${openText}</span
    ><span
      class="btn-slider btn-open-slider"
      style="${this.composeStyles(this.openSliderStyle())}"
    ></span>

      `;
    } else {
      contentText = `<span class="btn-text btn-close-text"
      style="${this.composeStyles(this.closeTextStyle())}">${closeText}</span>
    <span
      class="btn-slider btn-close-slider"
      style="${this.composeStyles(this.closeSliderStyle())}"
    ></span>`;
    }
    return contentText;
  }

  controlEvent() {
    let { info = {}, pointCode = "" } = this;
    let { content = false, bindData = {} } = info || {};
    let { deviceId = "" } = bindData || {};
    if (!deviceId) {
      info.content = !content;
      return;
    }
    let point = pointCode;
    let value = !content ? 1 : 0;
    $vm.$emit("control", {
      deviceId,
      point,
      value,
      callback: flag => {
        if (flag) {
          info.content = !content;
        } else {
          info.content = content; //如果取消则重置结果
        }
        this.refresh();
      }
    });
  }

  //加载数据
  loadData() {
    this.loadDeviceInfo();
  }

  //刷新内容
  refreshContent(data) {
    let { info = {} } = this;
    let { point } = data || {};
    if (point) {
      let { value = "" } = point || {};
      info.content = value == 1 ? true : false;
      this.refresh();
    }
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let { id = "" } = info || {};
    let $container = $(`#${id}>.component`);
    $container.html(this.renderContentText());
  }

  event() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let that = this;
    let $container = $(`#${id}>.component`);
    $container.on("click", function(e) {
      e.stopPropagation();
      that.controlEvent();
    });
  }
}

export default Text;

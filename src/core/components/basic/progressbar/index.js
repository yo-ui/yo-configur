import bmCommon from "@/common/common";
import Component from "@/core/Component";
import "../../../../assets/less/components/component/basic/progressbar.less";

class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {}

  //组件样式
  foregroundStyle() {
    let { info = {} } = this;
    let {
      lineWidth = "",
      progressForegroundColor = "",
      sliderBackgroundColor = "#fff",
      gradientValue = 0,
      start = "",
      end = "",
      content = ""
    } = info || {};
    let styles = {};
    if (lineWidth) {
      // let border = height * 0.2;
      styles["height"] = `${lineWidth}px`;
      // styles["width"] = `${height - border - sliderBorderWidth}px`;
      styles["border-radius"] = `${lineWidth / 2}px`;
    }
    styles["width"] = `${$vm.$toBig(
      ((content - start) / (end - start)) * 100,
      0
    )}%`;
    if (progressForegroundColor) {
      styles["background-color"] = progressForegroundColor;
      let colors = [
        `${progressForegroundColor} 0%`,
        `${sliderBackgroundColor} ${(100 - gradientValue) * 10}%`
      ];
      styles.backgroundImage = `linear-gradient(90deg, ${colors.join()})`;
    }
    // if (sliderBorderColor) {
    //   styles["borderColor"] = sliderBorderColor;
    // }
    // if (sliderBorderStyle) {
    //   styles["borderStyle"] = sliderBorderStyle;
    // }
    // styles["borderWidth"] = `${sliderBorderWidth}px`;
    return styles;
  }
  backgroundStyle() {
    let { info = {} } = this;
    let {
      lineWidth = "",
      progressBackgroundColor = ""
      // sliderBorderColor = "",
      // sliderBorderStyle = "",
      // sliderBorderWidth = ""
    } = info || {};
    let styles = {};
    if (lineWidth) {
      styles["height"] = `${lineWidth}px`;
      // styles["width"] = `${height - border - sliderBorderWidth}px`;
      styles["border-radius"] = `${lineWidth / 2}px`;
    }
    if (progressBackgroundColor) {
      styles["background-color"] = progressBackgroundColor;
    }
    // if (sliderBorderColor) {
    //   styles["borderColor"] = sliderBorderColor;
    // }
    // if (sliderBorderStyle) {
    //   styles["borderStyle"] = sliderBorderStyle;
    // }
    // styles["borderWidth"] = `${sliderBorderWidth}px`;
    return styles;
  }
  tagStyle() {
    let { info = {} } = this;
    let { progressForegroundColor = "", lineWidth = "" } = info || {};
    let styles = {};
    if (progressForegroundColor) {
      styles["color"] = progressForegroundColor;
      styles["font-size"] = `${lineWidth}px`;
    }
    let margin = lineWidth * 0.2;
    styles["right"] = `${margin}px`;
    return styles;
  }
  //滑块样式
  sliderStyle() {
    let { info = {} } = this;
    let { sliderBackgroundColor = "", lineWidth = "" } = info || {};
    let styles = {};
    if (sliderBackgroundColor) {
      styles["background-color"] = sliderBackgroundColor;
    }
    if (lineWidth) {
      let margin = lineWidth * 0.2;
      styles["width"] = `${lineWidth - margin}px`;
      styles["height"] = `${lineWidth - margin}px`;
      styles["right"] = `${margin}px`;
      styles[
        "box-shadow"
      ] = `0px 0px ${lineWidth}px 5px ${sliderBackgroundColor}`;
    }
    return styles;
  }
  textStyle() {
    let { info = {} } = this;
    let { openColor = "", lineWidth = "" } = info || {};
    let styles = {};
    if (openColor) {
      styles["color"] = openColor;
    }
    let margin = lineWidth * 0.2;
    styles["right"] = `${margin}px`;
    return styles;
  }

  template() {
    let { info = {} } = this;
    let { content = "", showTag = false, showPercent = false } = info || {};
    let text = showTag
      ? `<span class="text" style="${this.composeStyles(this.textStyle())}"
    >${$vm.$toBig(content, 0)} ${showPercent ? "%" : ""}
  </span>`
      : "";
    let tag = showTag
      ? `<i
  class="tag el-icon-caret-top"
  style="${this.composeStyles(this.tagStyle())}"
></i>`
      : "";
    return super.wrap(
      { info },
      `
    <div class="bm-basic-progressbar-com component"
    style="${this.composeStyles(this.comStyle())}">
    <div class="background" style="${this.composeStyles(
      this.backgroundStyle()
    )}">
      <div class="foreground" style="${this.composeStyles(
        this.foregroundStyle()
      )}">
        ${text}
        <span class="slider" style="${this.composeStyles(
          this.sliderStyle()
        )}"></span>
${tag}
      </div>
    </div>
  </div>
    `
    );
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    bmCommon.log(`${info.type}刷新 `);
    let { id = "", content = "", showTag = false, showPercent = false } =
      info || {};
    let $container = $(`#${id}>.component`);
    $container.find(".background").css(this.backgroundStyle());
    $container.find(".foreground").css(this.foregroundStyle());
    $container.find(".slider").css(this.sliderStyle());
    if (showTag) {
      $container
        .find(".text")
        .show()
        .css(this.textStyle())
        .html(`${$vm.$toBig(content, 0)} ${showPercent ? "%" : ""}`);
      $container
        .find(".tag")
        .show()
        .css(this.tagStyle());
    } else {
      $container.find(".text").hide();
      $container.find(".tag").hide();
    }
  }

  event() {}
}

export default Text;

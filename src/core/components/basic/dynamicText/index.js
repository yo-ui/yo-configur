import bmCommon from "@/common/common";
import Component from "@/core/Component";

class DynamicText extends Component {
  constructor(props) {
    super(props);
  }
  init() {}

  // //组件样式
  unitStyle() {
    let { info = {} } = this;
    let { unitColor = "", unitFontFamily = "", unitFontSize = "" } = info || {};
    let styles = {};
    if (unitColor) {
      styles["color"] = unitColor;
    }
    if (unitFontSize) {
      styles["font-size"] = `${unitFontSize}px`;
    }
    styles["font-family"] = `${unitFontFamily}`;
    return styles || {};
  }
  pValueStyle() {
    let { info = {} } = this;
    let {
      color = "",
      fontFamily = "",
      fontSize = "",
      // valueMarginTop = 0,
      // valueMarginBottom = 0,
      valueMarginLeft = 0,
      valueMarginRight = 0
    } = info || {};
    let styles = {};
    if (color) {
      styles["color"] = color;
    }
    if (fontSize) {
      styles["font-size"] = `${fontSize}px`;
    }
    styles["font-family"] = `${fontFamily}`;
    // styles["margin-top"] = `${valueMarginTop}px`;
    // styles["margin-bottom"] = `${valueMarginBottom}px`;
    styles["margin-left"] = `${valueMarginLeft}px`;
    styles["margin-right"] = `${valueMarginRight}px`;
    return styles || {};
  }
  pNameStyle() {
    let { info = {} } = this;
    let { pNameColor = "", pNameFontFamily = "", pNameFontSize = "" } =
      info || {};
    let styles = {};
    if (pNameColor) {
      styles["color"] = pNameColor;
    }
    if (pNameFontSize) {
      styles["font-size"] = `${pNameFontSize}px`;
    }
    styles["font-family"] = `${pNameFontFamily}`;
    return styles || {};
  }

  template() {
    let { info = {}, point = {} } = this;
    let { status = [], value = 0, unit = "", name: pointName = "" } =
      point || {};
    let { length = 0 } = status || [];
    let {
      content = "",
      decimal = 0,
      bindData = {},
      unit: infoUnit = "",
      showPointName = false,
      pNameSymbol = ""
    } = info || {};
    let { devicePoint = "" } = bindData || {};
    let text = $vm.$toBig(content || "", decimal);
    let unitText = infoUnit;
    if (devicePoint) {
      if (length > 0) {
        let obj = status.find(item => item.value == value) || {};
        let { name = "" } = obj || {};
        text = name;
        unitText = unit;
      } else {
        text = $vm.$toBig(value || "", decimal);
        unitText = unit;
      }
    }
    return super.wrap(
      { info },
      `
      <div class="bm-basic-dynamic-text-com component"
      style="${this.composeStyles(this.comStyle())}">
        <span style="${this.composeStyles(this.pNameStyle())}">
    ${showPointName ? (pointName || "") + (pNameSymbol || "") : ""}</span>
    <span style="${this.composeStyles(this.pValueStyle())}">
    ${text}</span>
        <small style="${this.composeStyles(this.unitStyle())}">${unitText ||
        ""}</small>
    </div>
    `
    );
  }

  //加载数据
  loadData() {
    bmCommon.log("loadData===");
    this.loadDeviceInfo();
  }

  // 刷新内容
  refreshContent(data) {
    let { point } = data || {};
    if (point) {
      this.point = point;
      this.refresh();
    }
  }
  refresh() {
    super.refresh();
    let { info = {}, point = {} } = this;
    let { status = [], value = 0, unit = "", name: pointName = "" } =
      point || {};
    let { length = 0 } = status || [];
    let {
      id = "",
      content = "",
      decimal = 0,
      bindData = {},
      unit: infoUnit = "",
      showPointName = false,
      pNameSymbol = ""
    } = info || {};
    let { devicePoint = "" } = bindData || {};
    let text = $vm.$toBig(content || "", decimal);
    let unitText = infoUnit;
    if (devicePoint) {
      if (length > 0) {
        let obj = status.find(item => item.value == value) || {};
        let { name = "" } = obj || {};
        text = name;
        unitText = unit;
      } else {
        text = $vm.$toBig(value || "", decimal);
        unitText = unit;
      }
    }
    let $container = $(`#${id}>.component`);
    $container.html(`
    <span style="${this.composeStyles(this.pNameStyle())}">
    ${showPointName ? (pointName || "") + (pNameSymbol || "") : ""}</span>
    <span style="${this.composeStyles(this.pValueStyle())}">
    ${text}</span>
        <small style="${this.composeStyles(this.unitStyle())}">${unitText ||
      ""}</small>`);
  }

  event() {}
}

export default DynamicText;

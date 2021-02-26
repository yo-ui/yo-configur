import bmCommon from "@/common/common";
import Component from "@/core/Component";
import "../../../../assets/less/components/component/basic/block.less";

class Block extends Component {
  constructor(props) {
    super(props);
  }
  init() {}

  //组件样式
  textStyle() {
    let { info = {} } = this;
    let { color = "" } = info || {};
    let styles = {};
    if (color) {
      styles["color"] = color;
    }
    return styles || {};
  }

  template() {
    let { info = {} } = this;
    let { pointName = "", unit = "", content = "" } = info || {};
    // bmCommon.log(container);
    // contenteditable="showType == 'edit' && info.editable"
    return super.wrap(
      { info },
      `
    <div class="bm-basic-block-com component" style="${this.composeStyles(
      this.comStyle()
    )}">
    <img src="/static/img/device/device-defult.png" />
    <div class="text-box" style="${this.composeStyles(this.textStyle())}">
      <p class="name">${pointName || "正向有功电量"}</p>
      <p class="val">
        ${content}<small>${unit || "kWh"}</small>
      </p>
    </div>
  </div>
    `
    );
  }

  //加载数据
  loadData() {
    this.loadDeviceInfo();
  }

  // 刷新内容
  refreshContent(data) {
    let { point } = data || {};
    let { info = {} } = this;
    if (point) {
      let { value = "", unit = "", descr = "" } = point || {};
      info.content = value;
      info.pointName = descr;
      info.unit = unit;
      this.refresh();
    }
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let { id = "", pointName = "", unit = "", content = "" } = info || {};
    $(`#${id} .component .text-box`).css(this.textStyle());
    $(`#${id} .component .name`).html(pointName || "正向有功电量");
    $(`#${id} .component .val`).html(
      `${content}<small>${unit || "kWh"}</small>`
    );
  }

  event() {}
}

export default Block;

import bmCommon from "@/common/common";
import Component from "@/core/Component";
import "../../../../assets/less/components/component/device/common.less";

class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {}

  //组件样式

  template() {
    let { info = {} } = this;
    let { width = 0, height = 0, content = "" } = info || {};
    return super.wrap(
      { info },
      `
      <div
      class="bm-device-common-com component"
      style="${this.composeStyles(this.comStyle())}"
    >
    <img src="${content}" width="${width}" height="${height}" />
    </div>
    `
    );
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    bmCommon.log(`${info.type}刷新 `);
    let { id = "", width = 0, height = 0, content: src = "" } = info || {};
    let $container = $(`#${id}>.component`);
    $container.find("img").attr({ width, height, src });
  }

  event() {}
}

export default Text;

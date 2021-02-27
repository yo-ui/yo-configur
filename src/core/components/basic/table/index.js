import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";

class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {}

  //组件样式

  template() {
    let { info = {} } = this;
    let { content = "" } = info || {};
    return super.wrap(
      { info },
      `
      <div
      class="bm-basic-text-com component"
      style="${this.composeStyles(this.comStyle())}"
    >
      ${content}
    </div>
    `
    );
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    bmCommon.log(`${info.type}刷新 `);
    let { id = "", content = "" } = info || {};
    let $container = $(`#${id}>.component`);
    $container.html(content);
  }

  event() {}
}

export default Text;

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
    return super.wrap(
      { info },
      `
      <img
      class="bm-assist-common-com component"
      style="${this.composeStyles(this.comStyle())}"
    />
    `
    );
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    // let { id = "", content = "" } = info || {};
    // let $container = $(`#${id}>.component`);
    // $container.html(content);
  }

  event() {}
}

export default Text;

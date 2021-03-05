import bmCommon from "@/common/common";
import Component from "@/core/Component";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "../../../../assets/less/components/component/basic/rich.text.less";

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
    class="bm-basic-rich-text-com quill-editor component"
    style="${this.composeStyles(this.comStyle())}"
  >
    <div class="ql-container ql-snow">
      <div class="ql-editor">
        ${content}
      </div>
    </div>
  </div>
    `
    );
  }

  refresh() {
    let item = arguments[0];
    super.refresh(item);
    let { info = {} } = this;
    if (!item) {
      let { id = "", content = "" } = info || {};
      let $container = $(`#${id}>.component`);
      $container.find(".ql-editor").html(content);
    }
  }

  event() {}
}

export default Text;

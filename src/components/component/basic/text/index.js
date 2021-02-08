import bmCommon from "@/common/common";
import Component from "@/components/component";

class Text extends Component {
  container;
  constructor(id, options) {
    super(id);
    this.container = typeof id === "object" ? id : $(`${id}`);
    this.info = options;
    this.init();
  }
  init() {
    this.template();
    this.event();
  }

  template() {
    let { info = {}, container } = this;
    let { content = "" } = info || {};
    // bmCommon.log(container);
    // contenteditable="showType == 'edit' && info.editable"
    return container.html(`
      <div
      class="bm-basic-text-com"
      @blur.stop="blurEvent"
      style="${this.comStyle()}"
    >
      ${content}
    </div>
    `);
  }

  event() {}
}

export default Text;

// import bmCommon from "@/common/common";
import Component from "@/core/Component";
import "../../../../assets/less/components/component/basic/button.less";

class Button extends Component {
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
    <button
    class="bm-basic-btn-com component"
    style="${this.composeStyles(this.comStyle())}"
    contenteditable="${info.editable}"
  >
    ${info.content}
  </button>
    `
    );
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let { id = "", content = "" } = info || {};
    $(`#${id}>.component`).html(content);
  }

  // //加载数据
  // loadData() {
  //   this.loadDeviceInfo();
  // }

  //刷新内容
  // refreshContent(data) {
  //   let { point } = data || {};
  //   let { info = {} } = this;
  //   let { contentList = [] } = info || {};
  //   if (point) {
  //     const { value = "" } = point || {};
  //     info.pointValue = value;
  //   }
  // }

  event() {
    let that = this;
    let { info = {} } = this;
    let { id = "" } = info || {};
    let $container = $(`#${id}`);
    $container.on("click", ".bm-basic-btn-com", function(e) {
      e.stopPropagation();
      that.controlEvent(() => {});
    });
  }
}

export default Button;

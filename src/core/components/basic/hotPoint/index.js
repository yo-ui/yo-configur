import bmCommon from "@/common/common";
import Component from "@/core/Component";
import "../../../../assets/less/components/component/basic/hot.point.less";

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
      <div
      class="bm-basic-hot-point-com component"
      style="${this.composeStyles(this.comStyle())}"
    ></div>
    `
    );
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    bmCommon.log(`${info.type}刷新 `);
    // let { id = "", content = "" } = info || {};
    // let $container = $(`#${id}>.component`);
    // $container.html(content);
  }

  clickEvent() {
    let { info = {}, getUserInfo } = this;
    let userInfo = getUserInfo();
    let { content = "" } = info || {};
    if (content) {
      let { token = "" } = userInfo || {};
      window.location.href = $vm.$linkUrl(content, {
        "x-access-token": token
      });
    }
  }

  event() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let $container = $(`#${id}>.component`);
    let that = this;
    $container.on("click", function(e) {
      e.stopPropagation();
      that.clickEvent();
    });
  }
}

export default Text;

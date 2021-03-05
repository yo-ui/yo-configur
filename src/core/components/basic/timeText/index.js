import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";

class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {
    this.getTime();
  }

  getTime() {
    clearTimeout(this._setTimeoutId);
    let { info = {} } = this;
    this._setTimeoutId = setTimeout(() => {
      let { id = "", format = "" } = info || {};
      let date = $vm.$moment();
      let $container = $(`#${id}>.component`);
      $container.html(date.format(format || "YYYY-MM-DD HH:mm:ss"));
      this.getTime();
    }, 1000);
  }

  //组件样式

  template() {
    let { info = {} } = this;
    let { format = "" } = info || {};
    let date = $vm.$moment();
    return super.wrap(
      { info },
      `
  <div class="bm-time-text-com component"
  style="${this.composeStyles(this.comStyle())}">
  ${date.format(format || "YYYY-MM-DD HH:mm:ss")}
</div>
    `
    );
  }

  destroy() {
    clearTimeout(this._setTimeoutId);
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
  }

  event() {}
}

export default Text;

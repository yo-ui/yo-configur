import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";

class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {}

  //组件样式

  iframeStyle() {
    let { info = {} } = this;
    let { width = "", height = "" } = info || {};
    let styles = {};
    styles["width"] = `${width}px`;
    styles["height"] = `${height}px`;
    return styles || {};
  }

  template() {
    let { info = {} } = this;
    let { content = "" } = info || {};
    return super.wrap(
      { info },
      `
    <div class="bm-ifram-com component"
    style="${this.composeStyles(this.comStyle())}">
    <iframe
      src="${content}"
      frameborder="0"
      style="${this.composeStyles(this.iframeStyle())}"
    ></iframe>
  </div>
    `
    );
  }

  refresh() {
    let item = arguments[0];
    super.refresh(item);
    let { info = {} } = this;
    bmCommon.log(`${info.type}刷新 `);
    let { id = "", content = "" } = info || {};
    let $container = $(`#${id}>.component`);
    let $iframe = $container.find("iframe");
    $iframe.css(this.iframeStyle());
    if (!item) {
      let oldParams = {
        content
      };
      for (let i in oldParams) {
        let oldVal = this.params[i];
        let val = info[i];
        if (oldVal != val) {
          if (i === "content") {
            $iframe.attr("src", content);
          }
        }
        this.params[i] = val;
      }
    }
  }

  event() {
    // let { info = {} } = this;
    // let { id = "", content = "" } = info || {};
    // let $container = $(`#${id}>.component`);
    // let that=this
    // $container.find('iframe').load(function(e){
    //   that.loadEvent()
    // })
  }
}

export default Text;

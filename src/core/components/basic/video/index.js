import bmCommon from "@/common/common";
import Component from "@/core/Component";
import "../../../../assets/less/components/component/basic/video.less";

class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {}

  //组件样式

  template() {
    let { info = {} } = this;
    let {
      controls = false,
      src = "",
      loop = false,
      preload = false,
      autoplay = false,
      poster = "",
      muted = false
    } = info || {};
    return super.wrap(
      { info },
      `
    <video
    class="bm-basic-video-com component"
    style="${this.composeStyles(this.comStyle())}"
    controls="${controls}"
    autoplay="${autoplay}"
    loop="${loop}"
    muted="${muted}"
    preload="${preload}"
    poster="${poster}"
  >
    <source src="${src}" />
  </video>
    `
    );
  }

  refresh() {
    let item = arguments[0];
    super.refresh(item);
    let { info = {} } = this;
    let {
      id = "",
      controls = false,
      src = "",
      loop = false,
      preload = false,
      autoplay = false,
      poster = "",
      muted = false
    } = info || {};
    let $container = $(`#${id}>.component`);
    let oldParams = {
      controls,
      loop,
      preload,
      autoplay,
      poster,
      muted,
      src
    };
    let params = {};
    for (let i in oldParams) {
      let oldVal = $container.attr(i);
      if (oldVal != oldParams[i]) {
        params[i] = oldParams[i];
      }
    }
    $container.attr(params);
    // $container.find("source").attr({ src });
  }

  event() {}
}

export default Text;

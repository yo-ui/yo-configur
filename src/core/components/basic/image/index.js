// import bmCommon from "@/common/common";
import Component from "@/core/Component";

class Image extends Component {
  constructor(props) {
    super(props);
  }
  init() {}

  //组件样式
  imageStyle() {
    let { info = {} } = this;
    let {
      width = "",
      height = "",
      borderRadiusTopLeft = 0,
      borderRadiusTopRight = 0,
      borderRadiusBottomLeft = 0,
      borderRadiusBottomRight = 0,
      content = "",
      contentRepeat = "",
      contentSize = ""
    } = info || {};
    let styles = {};
    if (content) {
      styles["background-image"] = `url(${$vm.$loadImgUrl(content)})`;
      if (contentRepeat) {
        styles["background-repeat"] = contentRepeat;
      }
      if (contentSize) {
        styles["background-size"] = contentSize;
      }
    }
    styles["width"] = `${width}px`;
    styles["height"] = `${height}px`;
    styles[
      "border-radius"
    ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
    return styles || {};
  }

  template() {
    let { info = {} } = this;
    // bmCommon.log(container);
    // contenteditable="showType == 'edit' && info.editable"
    return super.wrap(
      { info },
      `
      <div
      class="bm-basic-image-com component"
      style="${this.composeStyles(this.comStyle())}"
    >
    <div class="image" style="${this.composeStyles(this.imageStyle())}"></div>
    </div>
    `
    );
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let { id = "" } = info || {};
    $(`#${id} .image`).css(this.imageStyle());
  }

  event() {}
}

export default Image;

// import bmCommon from "@/common/common";
import Component from "@/core/Component";

class ImageStatus extends Component {
  constructor(props) {
    super(props);
  }
  init() {
    super.initEvent();
  }

  //组件样式
  imageStyle() {
    let { info = {} } = this;
    let {
      width = "",
      height = "",
      contentList = [],
      borderRadiusTopLeft = 0,
      borderRadiusTopRight = 0,
      borderRadiusBottomLeft = 0,
      borderRadiusBottomRight = 0,
      content = "",
      contentRepeat = "",
      contentSize = ""
    } = info || {};
    let styles = {};
    let obj = contentList.find(item => item.value == content);
    if (obj) {
      let { url = "", color = "" } = obj || {};
      //   -webkit-mask-image: url(/static/img/common/riLine-logout-box-line.svg);
      // mask-image: url(/static/img/common/riLine-logout-box-line.svg);
      // styles["-webkit-mask-image"] = `url(${this.$loadImgUrl(url)})`;
      styles["background-image"] = `url(${$vm.$loadImgUrl(url)})`;
      styles["background-color"] = color;
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
    this.init();
    return super.wrap(
      { info },
      `
    <div class="bm-basic-image-status-com component" style="${this.composeStyles(
      this.comStyle()
    )}">
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

  //加载数据
  loadData() {
    this.loadDeviceInfo();
  }

  //刷新内容
  refreshContent(data) {
    let { point } = data || {};
    let { info = {} } = this;
    let { contentList = [] } = info || {};
    let { value = "" } = point || {};
    let item = contentList.find(item => item.value == value);
    if (item) {
      info.content = item.value;
      this.refresh();
    }
  }

  event() {}
}

export default ImageStatus;

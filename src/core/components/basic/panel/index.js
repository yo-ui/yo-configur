import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import Canvas from "@/core/Canvas";

class Panel extends Component {
  constructor(props) {
    super(props);
  }
  init() {}

  //组件样式
  comStyle() {
    let { info = {} } = this;
    let {
      width = "",
      height = "",
      children = []
      // left: pLeft = 0,
      // top: pTop = 0
    } = info || {};
    let pLeft = 0,
      pTop = 0;
    // let childrenMap = {};
    let minLeft = 0,
      minTop = 0,
      maxLeft = 0,
      maxTop = 0,
      maxHeight = 0,
      maxWidth = 0;
    // 最大宽+left   高+top
    let maxRight = 0,
      maxBottom = 0;
    children.forEach((item, index) => {
      let { id = "" } = item || {};
      let obj = window.bm_widgetMap[id];
      let { info = {} } = obj || {};
      let {
        _left: left = 0,
        _top: top = 0,
        _width: width = 0,
        _height: height = 0,
        _right: right = 0,
        _bottom: bottom = 0
      } = info || {};
      item._left = left;
      item._top = top;
      item._width = width;
      item._height = height;
      if (index === 0) {
        minLeft = left;
        maxLeft = left;
        maxWidth = width;
        maxHeight = height;
        minTop = top;
        maxTop = top;
      }
      if (minLeft > left) {
        minLeft = left;
      }
      if (maxLeft < left) {
        maxLeft = left;
        maxWidth = width;
      }
      if (maxRight < right) {
        maxRight = right - pLeft;
      }
      if (minTop > top) {
        minTop = top;
      }
      if (maxTop < top) {
        maxTop = top;
        maxHeight = height;
      }
      if (maxBottom < bottom) {
        maxBottom = bottom - pTop;
      }
    });
    maxLeft = maxLeft + maxWidth - minLeft;
    maxRight = maxRight - minLeft;

    maxTop = maxTop + maxHeight - minTop;
    maxBottom = maxBottom - minTop;
    // bmCommon.log(
    //   "panel comStyle比较前",
    //   minLeft,
    //   minTop,
    //   "maxLeft=",
    //   maxLeft,
    //   "maxTop=",
    //   maxTop,
    //   children.map(item => {
    //     let {
    //       id = "",
    //       type = "",
    //       _left = 0,
    //       _top = 0,
    //       _width = 0,
    //       _height = 0,
    //       _right = 0,
    //       _bottom = 0
    //     } = item || {};
    //     return { id, type, _left, _top, _width, _height, _right, _bottom };
    //   })
    // );
    if (maxLeft < maxRight) {
      maxLeft = maxRight;
    }
    if (maxTop < maxBottom) {
      maxTop = maxBottom;
    }
    width = maxLeft || 10;
    height = maxTop || 10;
    let styles = {
      ...super.comStyle()
    };
    styles["width"] = `${width}px`;
    styles["height"] = `${height}px`;
    // bmCommon.log(
    //   "panel comStyle比较后",
    //   minLeft,
    //   minTop,
    //   "maxLeft=",
    //   maxLeft,
    //   "maxTop=",
    //   maxTop
    // );
    // info.left = minLeft;
    // info.top = minTop;
    return styles || {};
  }

  template() {
    let { info = {} } = this;
    let showType = "edit";
    // bmCommon.log(container);
    // contenteditable="showType == 'edit' && info.editable"
    return super.wrap(
      { info, showType },
      `
      <div class="bm-basic-panel-com component"
      style="${this.composeStyles(this.comStyle())}">
  </div>
    `
    );
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let { id = "" } = info || {};
    $(`#${id}>.component`).css(this.comStyle());
  }

  event() {}
}

export default Panel;

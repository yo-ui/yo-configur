import bmCommon from "@/common/common";
const state = {};
class Event {
  constructor() {}

  static init() {
    $(".canvas-box").on("mousedown", ".operate-btn", function(e) {
      e.stopPropagation();
      bmCommon.log(e, this);
      let $this = $(this);
      let $parent = $this.parent();
      let id = $parent.attr("id");
      state.id = id;
      //旋转
      if ($this.hasClass("el-icon-refresh-right")) {
        Event.rotateClickEvent(e);
        //旋转轴
      } else if ($this.hasClass("el-icon-axis")) {
        // 左上角
      } else if ($this.hasClass("el-icon-top-left")) {
        Event.leftTopClickEvent(e);
        // 上
      } else if ($this.hasClass("el-icon-top")) {
        Event.topClickEvent(e);
        // 右上角
      } else if ($this.hasClass("el-icon-top-right")) {
        Event.rightTopClickEvent(e);
        // 左
      } else if ($this.hasClass("el-icon-back")) {
        Event.leftClickEvent(e);
        // 右
      } else if ($this.hasClass("el-icon-right")) {
        Event.rightClickEvent(e);
        // 左下角
      } else if ($this.hasClass("el-icon-bottom-left")) {
        Event.leftBottomClickEvent(e);
        // 下
      } else if ($this.hasClass("el-icon-bottom")) {
        Event.bottomClickEvent(e);
        // 右下角
      } else if ($this.hasClass("el-icon-bottom-right")) {
        Event.rightBottomClickEvent(e);
      }
    });
  }

  static mousedownEvent(e, direction) {
    e.stopPropagation();
    e.preventDefault();
    let { id = "" } = state;
    let { info = {} } = window.bm_widgetMap[id];
    let pos = bmCommon.getMousePosition(e);
    let { x = "", y = "" } = pos || {};
    let {
      width: originWidth = "",
      height: originHeight = "",
      left,
      top,
      rotate: originRotate = ""
    } = info || {};

    state.direction = direction;
    // this.setActiveCom(info);
    $vm.$store.commit("canvas/setActiveCom", info);
    Event.initMove({
      startX: x,
      startY: y,
      originX: left,
      originY: top,
      originRotate,
      originWidth,
      originHeight
    });
    $(document).on("mousemove", this.mousemoveEvent);
    $(document).on("mouseup", this.mouseupEvent);
  }
  static initMove(item) {
    let {
      startX,
      startY,
      originX,
      originY,
      originWidth,
      originHeight,
      originRotate
    } = item || {};
    state.startX = startX;
    state.startY = startY;
    state.originX = originX;
    state.originY = originY;
    state.originWidth = originWidth;
    state.originRotate = originRotate;
    state.originHeight = originHeight;
    state.moving = true;
  }
  static mousemoveEvent(e) {
    e.stopPropagation();
    e.preventDefault();
    let pos = bmCommon.getMousePosition(e);
    let { x = "", y = "" } = pos || {};
    let { direction = "" } = state;
    // let bmComBox = this.$refs.bmComBox;
    Event.resize({
      x,
      y,
      e,
      // bmComBox,
      direction
    });
  }

  // 调整元件尺寸
  static resize(item) {
    let { x, y, direction = "", e = window.event } = item || {};
    let {
      startX,
      startY,
      originWidth,
      originHeight,
      originRotate,
      id = ""
    } = state;
    let obj = window.bm_widgetMap[id];
    let { info: activeCom = {} } = obj || {};
    let { zoom } = $vm.$store.state.canvas;
    let _com = $(`#${id}`);
    let bmComBox = _com[0];
    state.moving = false;
    var dx = x - startX;
    var dy = y - startY;
    let value, width, height, rotate;
    let { equalScaleable = false } = activeCom || {};

    if (direction === "right") {
      value = originWidth + Math.floor((dx * 1) / zoom);
      if (value > 10) {
        activeCom.width = value;
        if (equalScaleable) {
          activeCom.height = (originHeight * value) / originWidth;
          obj.refresh({ height: activeCom.height, width: activeCom.width });
        } else {
          obj.refresh({
            width: activeCom.width
          });
        }
      }
    } else if (direction === "top") {
      height = originHeight - Math.floor((dy * 1) / zoom);
      if (height > 10) {
        activeCom.top -= height - activeCom.height;
        activeCom.height = height > 10 ? height : 10;
        if (equalScaleable) {
          activeCom.width = (originWidth * value) / originHeight;
          obj.refresh({
            height: activeCom.height,
            width: activeCom.width,
            top: activeCom.top
          });
        } else {
          obj.refresh({
            height: activeCom.height,
            top: activeCom.top
          });
        }
      }
    } else if (direction === "bottom") {
      value = originHeight + Math.floor((dy * 1) / zoom);
      if (value > 10) {
        activeCom.height = value > 10 ? value : 10;
        if (equalScaleable) {
          activeCom.width = (originWidth * value) / originHeight;
          obj.refresh({ height: activeCom.height, width: activeCom.width });
        } else {
          obj.refresh({ height: activeCom.height });
        }
      }
    } else if (direction === "left") {
      width = originWidth - Math.floor((dx * 1) / zoom);
      if (width > 10) {
        activeCom.left -= width - activeCom.width;
        activeCom.width = width > 10 ? width : 10;
        if (equalScaleable) {
          activeCom.height = (originHeight * width) / originWidth;
          obj.refresh({
            height: activeCom.height,
            left: activeCom.left,
            width: activeCom.width
          });
        } else {
          obj.refresh({
            left: activeCom.left,
            width: activeCom.width
          });
        }
      }
    } else if (direction === "topleft") {
      width = originWidth - Math.floor((dx * 1) / zoom);
      height = originHeight - Math.floor((dy * 1) / zoom);
      if (equalScaleable) {
        if (dx > dy) {
          height = (originHeight * width) / originWidth;
        } else {
          width = (originWidth * height) / originHeight;
        }
      }
      if (width > 10 && height > 10) {
        activeCom.left -= (width - activeCom.width) / 2;
        activeCom.top -= (height - activeCom.height) / 2;
        activeCom.height = height > 10 ? height : 10;
        activeCom.width = width > 10 ? width : 10;
        obj.refresh({
          top: activeCom.top,
          left: activeCom.left,
          height: activeCom.height,
          width: activeCom.width
        });
      }
    } else if (direction === "topright") {
      width = originWidth + Math.floor((dx * 1) / zoom);
      height = originHeight - Math.floor((dy * 1) / zoom);
      if (equalScaleable) {
        if (dx > dy) {
          height = (originHeight * width) / originWidth;
        } else {
          width = (originWidth * height) / originHeight;
        }
      }
      if (width > 10 && height > 10) {
        activeCom.left -= (width - activeCom.width) / 2;
        activeCom.top -= (height - activeCom.height) / 2;
        activeCom.height = height > 10 ? height : 10;
        activeCom.width = width > 10 ? width : 10;
        obj.refresh({
          height: activeCom.height,
          top: activeCom.top,
          left: activeCom.left,
          width: activeCom.width
        });
      }
    } else if (direction === "bottomleft") {
      height = originHeight + Math.floor((dy * 1) / zoom);
      width = originWidth - Math.floor((dx * 1) / zoom);
      if (equalScaleable) {
        if (dx > dy) {
          height = (originHeight * width) / originWidth;
        } else {
          width = (originWidth * height) / originHeight;
        }
      }
      if (width > 10 && height > 10) {
        activeCom.left -= Math.floor((width - activeCom.width) / 2);
        activeCom.top -= Math.floor((height - activeCom.height) / 2);
        activeCom.height = height > 10 ? height : 10;
        activeCom.width = width > 10 ? width : 10;
        obj.refresh({
          height: activeCom.height,
          top: activeCom.top,
          left: activeCom.left,
          width: activeCom.width
        });
      }
    } else if (direction === "bottomright") {
      height = originHeight + Math.floor((dy * 1) / zoom);
      width = originWidth + Math.floor((dx * 1) / zoom);
      if (equalScaleable) {
        if (dx > dy) {
          height = (originHeight * width) / originWidth;
        } else {
          width = (originWidth * height) / originHeight;
        }
      }
      if (width > 10 && height > 10) {
        activeCom.left -= Math.floor((width - activeCom.width) / 2);
        activeCom.top -= Math.floor((height - activeCom.height) / 2);
        activeCom.height = height > 10 ? height : 10;
        activeCom.width = width > 10 ? width : 10;
        obj.refresh({
          height: activeCom.height,
          top: activeCom.top,
          left: activeCom.left,
          width: activeCom.width
        });
      }
    } else if (direction === "rotate") {
      let rect = bmComBox?.getBoundingClientRect() || {};
      let { left = 0, top = 0, width = 0, height = 0 } = rect || {};
      let center = { x: left + width / 2, y: top + height / 2 };
      let pos = bmCommon.getMousePosition(e);
      let y0 = startY - center.y,
        x0 = startX - center.x,
        y = pos.y - center.y,
        x = pos.x - center.x;
      let deg = Math.atan2(y, x) - Math.atan2(y0, x0);
      let angle = (180 * deg) / Math.PI;
      rotate = (angle + originRotate) % 360;
      state.startX = pos.x;
      state.startY = pos.y;
      state.originRotate = rotate;
      activeCom.rotate = rotate;
      obj.refresh({ transform: `rotate(${rotate})` });
    }
    window.bm_widgetMap[id] = obj;
  }
  static coverEvent() {
    let { info = {} } = this;
    bmCommon.error("dbclick");
    info.showCoverStatus = false;
  }
  static mouseupEvent(e) {
    $(document).off("mousemove", this.mousemoveEvent);
    $(document).off("mouseup", this.mouseupEvent);
    // this.loadComPoints();
    Event.stopMove();
    this.rotating = false;
    this.resizing = false;
  }
  static rotateClickEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    this.rotating = true;
    Event.mousedownEvent(e, "rotate");
  }
  static leftTopClickEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    this.resizing = true;
    Event.mousedownEvent(e, "topleft");
  }
  static topClickEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    this.resizing = true;
    Event.mousedownEvent(e, "top");
  }
  static rightTopClickEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    this.resizing = true;
    Event.mousedownEvent(e, "topright");
  }
  static leftClickEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    this.resizing = true;
    Event.mousedownEvent(e, "left");
  }
  static rightClickEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    this.resizing = true;
    Event.mousedownEvent(e, "right");
  }
  static leftBottomClickEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    this.resizing = true;
    Event.mousedownEvent(e, "bottomleft");
  }
  static bottomClickEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    this.resizing = true;
    Event.mousedownEvent(e, "bottom");
  }
  static rightBottomClickEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    this.resizing = true;
    Event.mousedownEvent(e, "bottomright");
  }

  // 元件移动结束
  static stopMove() {
    state.moving = false;
  }
}

export default Event;

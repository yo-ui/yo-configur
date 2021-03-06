import bmCommon from "@/common/common";
import Canvas from "@/core/Canvas";
const state = {};
class StageEvent {
  constructor() {}

  static init() {
    // //注册画布移动事件
    $(document).on("mousedown", StageEvent.mousedownEvent);
  }

  static mousedownEvent(e) {
    e.stopPropagation();
    e.preventDefault();
    // let { canvas = {} } = this;
    let canvas = Canvas.getCanvas();
    let pos = bmCommon.getMousePosition(e);
    let { x = "", y = "" } = pos || {};
    let { left, top, locked = false, width, height } = canvas || {};
    bmCommon.log("view=>mousedownEvent");
    if (locked) {
      return;
    }
    state.startX = x;
    state.startY = y;
    state.originX = left;
    state.originY = top;
    state.originWidth = width;
    state.originHeight = height;
    state.moving = true;

    $(document).on("mousemove", StageEvent.mousemoveEvent);
    $(document).on("mouseup", StageEvent.mouseupEvent);
  }
  static mousemoveEvent(e) {
    e.stopPropagation();
    e.preventDefault();
    let pos = bmCommon.getMousePosition(e);
    let { x = "", y = "" } = pos || {};
    let { startX, startY, originX, originY } = state;
    let zoom = Canvas.getZoom();
    let canvas = Canvas.getCanvas();
    // var target = state.activeCom;
    var dx = x - startX;
    var dy = y - startY;
    // var left = state.originX + Math.floor((dx * 100) / state.zoom);
    // var top = state.originY + Math.floor((dy * 100) / state.zoom);
    var left = originX + Math.floor(dx / zoom);
    var top = originY + Math.floor(dy / zoom);
    // bmCommon.log(left, top);
    if (left > 0) {
      left = 0;
    }
    if (top > 0) {
      top = 0;
    }
    canvas.left = left;
    canvas.top = top;
  }
  static mouseupEvent(e) {
    $(document).off("mousemove", StageEvent.mousemoveEvent);
    $(document).off("mouseup", StageEvent.mouseupEvent);
  }
}

export default StageEvent;

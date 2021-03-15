import bmCommon from "@/common/common";
import Canvas from "@/core/Canvas";
import { Constants } from "@/common/env";
const state = {};
class StageEvent {
  constructor() {}

  static init() {
    // //注册画布移动事件
    $(document).on("mousedown", StageEvent.mousedownEvent);
  }

  static mousedownEvent(e) {
    let canvas = Canvas.getCanvas();
    let bm_show_type = window.bm_show_type;
    if (bm_show_type === Constants.SHOWTYPEMAP.EDIT) {
      let { action = "" } = canvas || {};
      bmCommon.log("stage evemt move==", action);
      if (action != "move") {
        //画布不能移动则返回
        return;
      }
    }
    e.stopPropagation();
    e.preventDefault();
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
    // state.startX = x;
    // state.startY = y;
    var dx = x - startX;
    var dy = y - startY;
    dx = dx / zoom;
    dy = dy / zoom;
    var left = originX + dx;
    var top = originY + dy;
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

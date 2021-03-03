import bmCommon from "@/common/common";
import Canvas from "./Canvas";
import "../assets/less/components/home/select.less";
const box = {
  moving: false, //是否显示
  left: 0,
  top: 0,
  width: 0,
  height: 0
};
class SelectBox {
  constructor() {}
  static init() {
    SelectBox.event();
  }

  destroy() {
    $(".content-box").off("mousedown", SelectBox.mousedownEvent);
    $(document).off("mousemove", SelectBox.mousemoveEvent);
    $(document).off("mouseup", SelectBox.mouseupEvent);
  }

  static refresh() {
    let $container = $("#bm_select_com");
    let { width = 0, left = 0, top = 0, height = 0 } = box;
    $container.css({ width, height, left, top });
  }

  static event() {
    $(".content-box").on("mousedown", SelectBox.mousedownEvent);
  }

  static mousedownEvent(e) {
    let canvas = Canvas.getCanvas();
    let { target } = e;
    let { action = "" } = canvas || {};
    let $parent = $(target).parents(".bm-component-com");
    let type = $(target).attr("type");
    if (!type) {
      type = $parent.attr("type");
    }
    box.left = 0;
    box.top = 0;
    box.width = 0;
    box.height = 0;
    $("#bm_select_com").hide();
    if (action != "select") {
      return;
    }
    if (type) {
      return;
    }
    // window.bm_active_com_ids = [];
    Canvas.setActiveComs([]);
    e.stopPropagation();
    let pos = bmCommon.getMousePosition(e);
    let { x = "", y = "" } = pos || {};
    box.left = x;
    box.top = y;
    box.originX = x;
    box.originY = y;
    box.width = 0;
    box.height = 0;
    box.moving = true;
    $(document).on("mousemove", SelectBox.mousemoveEvent);
    $(document).on("mouseup", SelectBox.mouseupEvent);
  }
  static mousemoveEvent(e) {
    e.stopPropagation();
    e.preventDefault();
    // let { box = {} } = this;
    let { moving, originX = 0, originY = 0 } = box || {};
    if (!moving) {
      $("#bm_select_com").hide();
      return;
    }
    let pos = bmCommon.getMousePosition(e);
    let { x = 0, y = 0 } = pos || {};
    SelectBox.canvasSelect({ x, y, originX, originY });
  }
  static mouseupEvent() {
    box.moving = false;
    $("#bm_select_com").hide();
    let bm_active_com_ids = window.bm_active_com_ids || [];
    let [bm_active_com_id = ""] = bm_active_com_ids || [];
    bmCommon.log("select 鼠标松开", bm_active_com_ids, bm_active_com_id);
    SelectBox.mouseupSetTimeoutId = setTimeout(() => {
      clearTimeout(SelectBox.mouseupSetTimeoutId);
      Canvas.setActiveCom(bm_active_com_id);
      if (bm_active_com_ids.length < 1) {
        Canvas.unactive();
      }
    }, 1);

    Canvas.setActiveComs(bm_active_com_ids);
    $(document).off("mousemove", SelectBox.mousemoveEvent);
    $(document).off("mouseup", SelectBox.mouseupEvent);
  }
  static canvasSelect(item = {}) {
    let { x = 0, y = 0, originX: startX = 0, originY: startY = 0 } = item || {};
    let dx = x - startX;
    let dy = y - startY;
    if (dx < 0) {
      box.left = x;
      box.width = Math.abs(dx);
    } else {
      box.width = Math.abs(dx);
    }
    if (dy < 0) {
      box.top = y;
      box.height = Math.abs(dy);
    } else {
      box.height = Math.abs(dy);
    }
    SelectBox.refresh();
    $("#bm_select_com").show();
    SelectBox.selectComs(box);
  }
  //计算组件是否被框选
  static selectComs(box = {}) {
    let bm_active_com_ids = window.bm_active_com_ids;
    let bm_widgetMap = window.bm_widgetMap || {};
    let {
      left: boxX = 0,
      top: boxY = 0,
      width: boxWidth = 0,
      height: boxHeight = 0
    } = box || {};
    let boxX1 = boxX + boxWidth;
    let boxY1 = boxY + boxHeight;
    let points = [];
    points.push([boxX, boxY]);
    points.push([boxX1, boxY]);
    points.push([boxX, boxY1]);
    points.push([boxX1, boxY1]);
    Canvas.unactive();
    if (boxWidth > 1) {
      for (let i in bm_widgetMap) {
        let obj = bm_widgetMap[i];
        let { info = {} } = obj || {};
        let { id = "", locked = false } = info || {};
        bmCommon.log("-----select.vue", info);
        let com = document.getElementById(id);
        let rect = com?.getBoundingClientRect() || {};
        let { left: x = 0, top: y = 0, width = 0, height = 0 } = rect || {};
        let x1 = x + width;
        let y1 = y + height;
        //四点全在范围内
        // if (
        //   !locked &&
        //   bmCommon.isInPolygon([x, y], points) &&
        //   bmCommon.isInPolygon([x1, y], points) &&
        //   bmCommon.isInPolygon([x, y1], points) &&
        //   bmCommon.isInPolygon([x1, y1], points)
        // ) {
        // 只要有一点在范围内
        if (
          !locked &&
          (bmCommon.isInPolygon([x, y], points) ||
            bmCommon.isInPolygon([x1, y], points) ||
            bmCommon.isInPolygon([x, y1], points) ||
            bmCommon.isInPolygon([x1, y1], points))
        ) {
          if (bm_active_com_ids.indexOf(id) < 0) {
            bm_active_com_ids.push(id);
          }
          Canvas.active(id);
        }
      }
      // window.bm_active_com_ids = bm_active_com_ids;
    }

    bmCommon.log(
      "-----鼠标移动select.vue",
      window.bm_active_com_i,
      window.bm_active_com_ids
    );
  }
}

export default SelectBox;

import ComponentLibrary from "@/core/ComponentLibrary";
import CanvasEvent from "@/core/CanvasEvent";
import bmCommon from "@/common/common";
import Event from "@/core/Event";
class Core {
  constructor() {}

  static init(widgets = []) {
    let canvas_content = document.getElementById("canvas_content");
    let fregment = document.createDocumentFragment("div");
    let i = 0,
      len = widgets.length;
    let widgetMap = window.bm_widgetMap;
    for (; i < len; i++) {
      let item = widgets[i];
      let { id = "" } = item || {};
      let obj = ComponentLibrary.getInstance(item);
      let dom = obj.template();
      if (dom) {
        let _div = $(obj.template());
        fregment.appendChild(_div[0]);
      }
      // bmCommon.log("-----", obj);
      widgetMap[id] = obj;
    }
    canvas_content.appendChild(fregment);
    //初始化事件
    Event.init();

    //初始化
    CanvasEvent.init();
  }
}

export default Core;

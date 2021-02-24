// import ComponentLibrary from "@/core/ComponentLibrary";
import CanvasEvent from "@/core/CanvasEvent";
import Canvas from "@/core/Canvas";
// import WidgetList from "@/core/info/widget-list.js";
// import bmCommon from "@/common/common";
// import { Constants } from "@/common/env";
import Event from "@/core/Event";
class Core {
  constructor() {}

  static init(widgetList = [], callback) {
    // let widgets = Core.loadWidgetList(widgetList);
    let widgets = Canvas.init(widgetList);
    callback && callback(widgets);
    //初始化事件
    Event.init();
    //初始化
    CanvasEvent.init();
  }
}

export default Core;

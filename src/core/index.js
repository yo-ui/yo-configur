// import ComponentLibrary from "@/core/ComponentLibrary";
import CanvasEvent from "@/core/CanvasEvent";
import StageEvent from "@/core/StageEvent";
import Canvas from "@/core/Canvas";
// import WidgetList from "@/core/info/widget-list.js";
// import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
import Event from "@/core/Event";
import SelectBox from "@/core/SelectBox";
import ContextMenu from "./ContextMenu";
class Core {
  constructor() {}
  static init(widgetList = [], callback) {
    // let widgets = Core.loadWidgetList(widgetList);
    Canvas.clear();
    let widgets = Canvas.init(widgetList);
    callback && callback(widgets);
    if (!Core.initEventStatus) {
      //初始化
      CanvasEvent.init();
      let bm_show_type = window.bm_show_type;
      if (bm_show_type === Constants.SHOWTYPEMAP.EDIT) {
        //初始化事件
        Event.init();
        //右键菜单
        ContextMenu.init();
        //选择框
        SelectBox.init();
      }
      // else {
      // }
      StageEvent.init();
      Core.initEventStatus = true;
    }
  }
}

export default Core;

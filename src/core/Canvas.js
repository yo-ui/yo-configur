import bmCommon from "@/common/common";
import ComponentLibrary from "@/core/ComponentLibrary";
import { Constants } from "@/common/env";
import WidgetList from "@/core/info/widget-list";
import Count from "@/core/info/count.js";
import CanvasEvent from "@/core/CanvasEvent";

class Canvas {
  // container;
  constructor() {
    // this.container = $(`${id}`);
    // this.settings = { ...this.settings, ...options };
    // this.init();
  }
  static getCanvas() {
    // bmCommon.log(
    //   $vm.$store.getters["canvas/getCanvas"],
    //   $vm.$store.state.canvas.canvas
    // );
    return $vm.$store.getters["canvas/getCanvas"] || {};
  }
  //获取放大
  static getZoom() {
    return $vm.$store.getters["canvas/getZoom"] || 1;
  }
  //设置放大
  static setZoom(val) {
    $vm.$store.commit("canvas/setZoom", val);
  }
  //删除
  static remove(id) {
    // 加载组件绑定数据
    let obj = window.bm_widgetMap[id];
    if (obj) {
      if (obj.destory) {
        obj?.destory();
      }
    }
    $(`#${id}`).remove();
    WidgetList.remove(id);
    delete window.bm_widgetMap[id];
  }

  static show(id) {
    $(`#${id}`).show();
  }
  static hide(id) {
    $(`#${id}`).hide();
  }
  //显示所有组件
  static showAll() {
    let $container = $("#canvas_content");
    $container.show();
  }
  // 隐藏所有组件
  static hideAll() {
    let $container = $("#canvas_content");
    $container.hide();
  }
  static toggle() {
    let $container = $("#canvas_content");
    $container.toggle();
  }
  // 初始化
  static init(widgetList) {
    let widgets = Canvas.render(widgetList);
    //渲染功能画布元素列表
    WidgetList.init({ widgets });
    // Canvas.render(Canvas.template(item));
    Canvas.event();
    //设置选择组件
    Canvas.setWidgetListTimeoutId = setTimeout(() => {
      Canvas.setWidgetList(widgets);
      clearTimeout(Canvas.setWidgetListTimeoutId);
    }, 10);
    return widgets;
  }

  static append(item) {
    let $container = $("#canvas_content");
    let dom = Canvas.singleTemplate(item);
    $container.append(dom);
    WidgetList.append(item);
    let { id = "" } = item || {};
    CanvasEvent.selectComAction(id);
  }

  static singleTemplate(item) {
    let fregment = document.createDocumentFragment("div");
    let { children = [], id = "" } = item || {};
    let obj = ComponentLibrary.getInstance(item);
    window.bm_widgetMap[id] = obj;
    let dom = obj.template();
    if (dom) {
      let _div = $(obj.template());
      let { length = 0 } = children || [];
      if (length > 0) {
        children.forEach(item => {
          let obj = ComponentLibrary.getInstance(item);
          let dom = obj.template();
          if (dom) {
            fregment.appendChild($(dom)[0]);
          }
        });
        _div.find(".bm-basic-panel-com").append(fregment);
      }
      return _div[0];
    }
    return dom;
  }

  static render(widgetList) {
    // let canvas_content = document.getElementById("canvas_content");
    let fregment = document.createDocumentFragment("div");
    // let widgets = [];
    let infoWidgets = [];
    let i = 0,
      len = widgetList.length;
    for (; i < len; i++) {
      let item = widgetList[i];
      let {
        alias = "",
        type = "",
        bindData = {},
        id: parentId = "",
        comName = "",
        name = "",
        children = []
      } = item || {};
      if (!alias) {
        alias = type;
      }
      let _item = Constants.COMPONENTLIBRARYMAP[alias] || {};
      let { data = {} } = _item || {};
      let {
        infoType = "",
        dataType = "",
        bindData: _bindData = {},
        styleCode = "",
        dataCode = ""
      } = data || {};
      for (let i in data) {
        if (!item[i]) {
          item[i] = data[i];
        }
      }
      item.bindData = { ..._bindData, ...bindData };

      item.infoType = infoType;
      item.dataType = dataType;
      item.styleCode = styleCode;
      item.show = true;
      item.dataCode = dataCode;
      item.alias = alias;

      let old = window.bm_widgetMap[parentId];
      if (old) {
        parentId = bmCommon.uuid();
        item.id = parentId;
      }
      let infoChildern = [];
      let { length = 0 } = children || [];
      if (length > 0) {
        children.forEach(item => {
          item.parentId = parentId;
          item.id = bmCommon.uuid();
          let {
            alias = "",
            type = "",
            bindData = {},
            id = "",
            comName = "",
            name = ""
          } = item || {};
          if (!alias) {
            alias = type;
          }
          let _item = Constants.COMPONENTLIBRARYMAP[alias] || {};
          let { data = {} } = _item || {};
          let {
            infoType = "",
            dataType = "",
            bindData: _bindData = {},
            styleCode = "",
            dataCode = ""
          } = data || {};
          for (let i in data) {
            if (!item[i]) {
              item[i] = data[i];
            }
          }
          item.bindData = { ..._bindData, ...bindData };
          item.infoType = infoType;
          item.dataType = dataType;
          item.styleCode = styleCode;
          item.show = true;
          item.dataCode = dataCode;
          item.alias = alias;
          infoChildern.push({
            id,
            comName,
            type,
            children: [],
            name,
            dataType,
            bindData: item.bindData
          });
        });
      }
      if (type && type != "canvas") {
        // widgets.push(item);
        infoWidgets.push({
          id: parentId,
          comName,
          type,
          children: infoChildern,
          name,
          dataType,
          bindData: item.bindData
        });

        // let obj = ComponentLibrary.getInstance(item);
        // let dom = obj.template();
        // if (dom) {
        //   let _div = $(obj.template());
        //   children &&
        //     children.forEach(item => {
        //       let obj = ComponentLibrary.getInstance(item);
        //       let dom = obj.template();
        //       if (dom) {
        //         _div.find(".bm-basic-panel-com").html(obj.template());
        //       }
        //     });
        //   fregment.appendChild(_div[0]);
        // }
        fregment.appendChild(Canvas.singleTemplate(item));
      }

      let $container = $("#canvas_content");
      $container.append(fregment);
    }
    return infoWidgets;
  }
  // 取消选中
  static unactive() {
    let _oldCom = $("#canvas_content .bm-component-com.active");
    _oldCom.removeClass("active");
  }
  // 激活选中
  static active(id) {
    let _com = $(`#${id}`);
    _com.addClass("active");
  }
  // 优化显示
  static optimize() {
    //当组件数量大于200的时候 才进行显隐处理
    if (Count.count > Constants.widgetMaxCount) {
      $(".bm-component-com:not(.active)").addClass("hide");
    }
  }

  //不优化显示
  static unoptimize() {
    //当组件数量大于200的时候 才进行显隐处理
    if (Count.count > Constants.widgetMaxCount) {
      $(".bm-component-com:not(.active)").removeClass("hide");
    }
  }

  static border() {
    //当组件数量大于200的时候 才进行显隐处理
    if (Count.count > Constants.widgetMaxCount) {
      $(".bm-component-com:not(.active)")
        .removeClass("hide")
        .addClass("border");
    }
  }
  static unborder() {
    //当组件数量大于200的时候 才进行显隐处理
    if (Count.count > Constants.widgetMaxCount) {
      $(".bm-component-com:not(.active)")
        .removeClass("border")
        .addClass("hide");
    }
  }
  //设置活动组件
  static setActiveCom(id) {
    let item = {};
    if (id) {
      let obj = window.bm_widgetMap[id];
      let { info = {} } = obj || {};
      item = info;
    } else {
      item = Canvas.getCanvas();
    }
    $vm.$store.commit("canvas/setActiveCom", item);
  }

  //设置组件列表
  static setWidgetList(list) {
    $vm.$store.commit("canvas/setWidgetList", list);
  }

  //获取组件列表
  static getWidgetList() {
    return $vm.$store.getters["canvas/getWidgetList"] || [];
  }

  // static refresh(item) {
  //   let $container = $("#canvas_content");
  //   let { count = 0 } = item;
  //   count = Canvas.count + count;
  //   let $count = $container.find(".count");
  //   if (count > 200) {
  //     $count.addClass("red");
  //   } else {
  //     $count.removeClass("red");
  //   }
  //   $count.html(count);
  //   Canvas.count = count;
  // }

  static event() {}
}

export default Canvas;

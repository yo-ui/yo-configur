import bmCommon from "@/common/common";
import ComponentLibrary from "@/core/ComponentLibrary";
import { Constants } from "@/common/env";
import WidgetList from "@/core/info/widget-list.js";
import Count from "@/core/info/count.js";

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
    $(`#${id}`).remove();
  }
  // 初始化
  static init(widgetList) {
    let widgets = Canvas.render(widgetList);
    //渲染功能画布元素列表
    WidgetList.init({ widgets });
    // Canvas.render(Canvas.template(item));
    Canvas.event();
    return widgets;
  }

  static append(item) {
    let $container = $("#canvas_content");
    // let { children = [] } = item || {};
    // let fregment = document.createDocumentFragment("div");
    // let obj = ComponentLibrary.getInstance(item);
    // let dom = obj.template();
    // if (dom) {
    //   let _div = $(obj.template());
    //   children &&
    //     children.forEach(item => {
    //       let obj = ComponentLibrary.getInstance(item);
    //       let dom = obj.template();
    //       if (dom) {
    //         fregment.appendChild(_div[0]);
    //       }
    //     });
    //   _div.find(".bm-basic-panel-com").html(fregment.innerHTML);
    // }
    let dom = Canvas.singleTemplate(item);
    WidgetList.append(item);
    $container.append(dom);
  }

  static singleTemplate(item) {
    let { children = [] } = item || {};
    let fregment = document.createDocumentFragment("div");
    let obj = ComponentLibrary.getInstance(item);
    let { id = "" } = item || {};
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
    let widgets = [];
    let infoWidgets = [];
    let i = 0,
      len = widgetList.length;
    for (; i < len; i++) {
      let item = widgetList[i];
      let {
        alias = "",
        type = "",
        bindData = {},
        id = "",
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
      let infoChildern = [];
      let { length = 0 } = children || [];
      if (length > 0) {
        children.forEach(item => {
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
        widgets.push(item);
        infoWidgets.push({
          id,
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

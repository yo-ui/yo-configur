/**
  信息窗口  组件列表控件
  */

import Count from "@/core/info/count.js";
import bmCommon from "@/common/common";
import Canvas from "../Canvas";

class WidgetList {
  // container;
  constructor() {
    // this.container = $(`${id}`);
    // this.settings = { ...this.settings, ...options };
    // this.init();
  }
  static init(item) {
    let { widgets = [] } = item || {};
    WidgetList.render(WidgetList.template({ widgets }));
    let { length: count = 0 } = widgets || [];
    window.requestAnimationFrame(() => {
      Count.init({ count });
    });
    WidgetList.event();
  }

  static append(item) {
    let container = $("#info_com_list_box");
    window.requestAnimationFrame(() => {
      Count.refresh({ count: 1 });
    });
    container.append(WidgetList.singleTemplate(item));
  }
  //附加多个
  static appendMulti(item) {
    // item={widgets}
    let { widgets = [] } = item || {};
    let { length: count = 0 } = widgets || [];
    window.requestAnimationFrame(() => {
      Count.refresh({ count });
    });
    // let htmlArr = [];
    // let i = 0,
    //   len = widgets.length;
    // for (; i < len; i++) {
    //   htmlArr.push(WidgetList.singleTemplate(widgets[i]));
    // }
    let container = $("#info_com_list_box");
    container.append(WidgetList.template({ widgets }));
  }
  // 取消选中
  static unactive() {
    let _infoOldCom = $(`#info_com_list_box .title.active`);
    _infoOldCom.removeClass("active");
  }
  // 激活
  static active(id) {
    let _infoCom = $(`#info_com_${id}>.title`);
    _infoCom.addClass("active");
    _infoCom.length > 0 && _infoCom[0].scrollIntoView();
  }
  //删除
  static remove(id) {
    $(`#info_com_${id}`).remove();
  }

  static titleTemplate(item) {
    let htmlArr = [];
    let {
      children = [],
      id = "",
      bindData = {},
      comName = "",
      name = "",
      show = true,
      type = "",
      dataType = ""
    } = item || {};
    let { length = 0 } = children || [];
    let { orgId = "" } = bindData || {};
    let activeComId = window.bm_active_com_id;
    htmlArr.push(`<div class="title ${
      activeComId === id ? "active" : ""
    }" data-id="${id}">
        ${comName || name}
        <span class="red">${show ? "已显示" : "已隐藏"}</span>`);
    if (type === "panel") {
      htmlArr.push(`<span class="count">
          子组件数: ${length}
        </span>`);
    }
    htmlArr.push(`<span class="right">
            <i class="el-icon-delete" title="删除" @click.stop="deleteEvent(item)"></i>
            <i class="el-icon-view" title="显示/隐藏" @click.stop="showEvent(item)"></i>`);
    if (length > 0) {
      htmlArr.push(` <i
              class="el-icon-plus"
              @click.stop="showChildEvent(item)"
            ></i>`);
    } else {
      if (dataType) {
        htmlArr.push(`
            <i
              class="el-icon-link" title="数据绑定"
              @click.stop="addEvent(item)"
              class="${orgId ? "active" : ""}"
            ></i>`);
      }
    }
    htmlArr.push(`</span></div>`);
    return htmlArr.join("");
  }

  static singleTemplate(item) {
    let htmlArr = [];
    let { children = [], id = "" } = item || {};
    let { length = 0 } = children || [];
    htmlArr.push(`
      <li
      id="info_com_${id}"
    >
    ${WidgetList.titleTemplate(item)}`);
    if (length > 0) {
      htmlArr.push(`<ul>`);
      let j = 0,
        jLen = length;
      for (; j < jLen; j++) {
        let _item = children[j];
        htmlArr.push(`<li>${WidgetList.titleTemplate(_item)}`);
      }
      htmlArr.push(`</ul>`);
    }
    htmlArr.push(`</li>`);
    return htmlArr.join("");
  }
  // 获取模板
  static template(item) {
    // let { canvas = {} } = $vm.$store.state;
    // let { activeCom = {} } = canvas || {};
    // let { id: activeComId = "" } = activeCom || {};
    let { widgets = [] } = item || {};
    // bmCommon.log(container);
    let htmlArr = [];
    let i = 0,
      len = widgets.length;
    for (; i < len; i++) {
      htmlArr.push(WidgetList.singleTemplate(widgets[i]));
    }
    return htmlArr.join("");
  }

  //渲染html
  static render(html) {
    let container = $("#info_com_list_box");
    container.html(html);
  }

  static event() {
    let $container = $("#info_com_list_box");
    //增加选中事件
    $container.on("click", ".title", function(e) {
      e.stopPropagation();
      let $this = $(this);
      let id = $this.data("id");
      WidgetList.unactive();
      $this.addClass("active");
      Canvas.active(id);
    });
    //增加删除事件
    $container.on("click", ".el-icon-delete", function(e) {
      e.stopPropagation();
      let $this = $(this);
      let id = $this.data("id");
      WidgetList.remove();
      Canvas.remove(id);
      delete window.bm_widgetMap[id];
    });
    //增加显示隐藏事件
    $container.on("click", ".el-icon-view", function(e) {
      e.stopPropagation();
      let $this = $(this);
      let id = $this.data("id");
      let obj = window.bm_widgetMap[id];
      let { info = {} } = obj || {};
      let { show = true } = info || {};
      if (show) {
        WidgetList.hide(id);
        Canvas.hide(id);
      } else {
        Canvas.show(id);
        WidgetList.show(id);
      }
      $this.find(".red").html(!show ? "已显示" : "已隐藏");
      info.show = !show;
      // window.bm_widgetMap[id].info.show = flag;
    });
    //增加数据绑定事件
    $container.on("click", ".el-icon-link", function(e) {
      e.stopPropagation();
      let $this = $(this);
      let id = $this.data("id");
      let obj = window.bm_widgetMap[id];
      let { info = {} } = obj || {};
      $vm.$emit("bind-device", info);
    });
  }
}

export default WidgetList;

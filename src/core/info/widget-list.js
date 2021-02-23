/**
  信息窗口  组件列表控件
  */

import Count from "@/core/info/count.js";
import bmCommon from "@/common/common";

class WidgetList {
  container;
  constructor(id, options) {
    this.container = $(`${id}`);
    this.settings = { ...this.settings, ...options };
    this.init();
  }
  init() {
    this.template();
    this.event();
  }

  static append(item) {
    let container = $("#info_com_list_box");
    window.requestAnimationFrame(() => {
      Count.render(item);
    });
    container.append(WidgetList.renderSingle(item));
  }

  static remove(id) {}

  static renderSingle(item) {
    let activeComId = window.bm_active_com_id;
    let htmlArr = [];
    let { children = [] } = item || {};
    htmlArr.push(`
      <li
      id="info_com_${item.id}"
      class="item ${activeComId === item.id ? "active" : ""}"
    >
        ${item.comName || item.name}
        <span class="red">${item.show ? "已显示" : "已隐藏"}</span>`);
    if (item.type === "panel") {
      htmlArr.push(`<span class="count">
          子组件数: ${children.length}
        </span>`);
    }

    htmlArr.push(`<span class="right">
            <i class="el-icon-delete" title="删除" @click.stop="deleteEvent(item)"></i>
            <i class="el-icon-view" title="显示/隐藏" @click.stop="showEvent(item)"></i>`);
    if (children && children.length > 0) {
      htmlArr.push(` <i
              class="el-icon-plus"
              @click.stop="showChildEvent(item)"
            ></i>`);
    } else {
      if (item.dataType) {
        htmlArr.push(`
            <i
              class="el-icon-link" title="数据绑定"
              @click.stop="addEvent(item)"
              class="${item.bindData && item.bindData.orgId ? "active" : ""}"
            ></i>`);
      }
    }
    htmlArr.push(`</span>`);
    if (children && children.length > 0) {
      htmlArr.push(`<ul>`);
      for (let j = 0, jLen = children.length; i < jLen; j++) {
        let _item = item;
        htmlArr.push(`<li
          class="item ${activeComId == _item.id ? "active" : ""}"
        >

            ${_item.comName || _item.name}}
            <span class="right">
                <i class="el-icon-delete"  title="删除" @click.stop="deleteEvent(_item)"></i>`);

        if (_item.dataType) {
          htmlArr.push(`
                <i
                  v-if="_item.dataType"
                  class="el-icon-link" title="数据绑定"
                  @click.stop="addEvent(_item)"
                  class="${
                    _item.bindData && _item.bindData.orgId ? "active" : ""
                  }"
                ></i>`);
        }
        htmlArr.push(`</span></li>`);
      }
      htmlArr.push(`</ul>`);
    }
    htmlArr.push(`</li>`);
    return htmlArr.join("");
  }

  template() {
    let { container, settings = {} } = this;
    // let { canvas = {} } = $vm.$store.state;
    // let { activeCom = {} } = canvas || {};
    // let { id: activeComId = "" } = activeCom || {};
    let { widgets = [], count = 0 } = settings || {};
    // bmCommon.log(container);
    window.requestAnimationFrame(() => {
      Count.render({ count });
    });
    let htmlArr = [];
    let i = 0,
      len = widgets.length;
    for (; i < len; i++) {
      WidgetList.renderSingle(widgets[i]);
    }
    container.html(htmlArr.join(""));
  }

  event() {}
}

export default WidgetList;

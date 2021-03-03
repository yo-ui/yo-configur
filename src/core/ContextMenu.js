import bmCommon from "@/common/common";
// import Canvas from "../Canvas";
// import Event from "@/core/Event";
import "../assets/less/components/home/control.less";
import CanvasEvent from "./CanvasEvent";

class ContextMenu {
  // container;
  constructor() {
    // this.container = $(`${id}`);
    // this.settings = { ...this.settings, ...options };
    // this.init();
  }
  static init() {
    ContextMenu.render();
    ContextMenu.event();
  }

  static template() {
    return `
    <li class="add-diy"
      >
        ${$vm.$lang("添加到自定义")}
      </li>
      <li class="compose"
      >
        ${$vm.$lang("组合")} <small>Ctrl+G</small>
      </li>
      <li class="uncompose"
      >
        ${$vm.$lang("打散")} <small>Ctrl+Shift+G</small>
      </li>
      <li class="cut"
      >
        ${$vm.$lang("剪切")} <small>Ctrl+X</small>
      </li>
      <li class="copy"
      >
        ${$vm.$lang("复制")}<small>Ctrl+C</small>
      </li>
      <li  class="paste">
        ${$vm.$lang("粘贴")}<small>Ctrl+V</small>
      </li>
      <li class="move-up"
        class="line"
      >
        ${$vm.$lang("上移一层")}<small>Ctrl+[</small>
      </li>
      <li class="move-down"
      >
        ${$vm.$lang("下移一层")}<small>Ctrl+]</small>
      </li>
      <li class="move-top"
      >
        ${$vm.$lang("置于顶层")}<small>Ctrl+Shift+[</small>
      </li>
      <li class="move-bottom"
      >
        ${$vm.$lang("置于底层")}<small>Ctrl+Shift+]</small>
      </li>
      <li
        class="line lock"
      >
        ${$vm.$lang("锁定")}<small>Ctrl+Shift+L</small>
      </li>
      <li class="unlock"
      >
        ${$vm.$lang("解锁")}<small>Ctrl+Shift+L</small>
      </li>
      <li class="del">
        ${$vm.$lang("删除")}<small>Delete</small>
      </li>
    `;
  }

  static render() {
    let showType = window.bm_show_type;
    if (showType === "edit") {
      let $container = $("#context_menu");
      $container.html(ContextMenu.template());
    }
  }

  static refresh() {
    let showType = window.bm_show_type;
    if (showType === "edit") {
      let $container = $("#context_menu");
      let id = window.bm_active_com_id;
      let activeIds = window.bm_active_com_ids || [];
      let obj = window.bm_widgetMap[id];
      let { info = {} } = obj || {};
      let { locked = false, type = "" } = info || {};
      let copyCom = CanvasEvent.copyCom;
      let { length = 0 } = activeIds || [];
      // let showContextMenuType = ContextMenu.showContextMenuType;
      if (copyCom) {
        $container.find(".paste").show();
      } else {
        $container.find(".paste").hide();
      }
      if (id) {
        $container.find(".add-diy").show();
        $container.find(".del").show();
      } else {
        $container.find(".add-diy").hide();
        $container.find(".del").hide();
      }
      if (id && !!locked) {
        $container.find(".unlock").show();
      } else {
        $container.find(".unlock").hide();
      }
      if ((id || length > 1) && !locked) {
        $container.find(".add-diy").show();
        $container.find(".cut").show();
        $container.find(".copy").show();
        $container.find(".move-up").show();
        $container.find(".move-down").show();
        $container.find(".move-top").show();
        $container.find(".move-bottom").show();
        $container.find(".lock").show();
      } else {
        $container.find(".add-diy").hide();
        $container.find(".cut").hide();
        $container.find(".copy").hide();
        $container.find(".move-up").hide();
        $container.find(".move-down").hide();
        $container.find(".move-top").hide();
        $container.find(".move-bottom").hide();
        $container.find(".lock").hide();
      }
      if (length > 1) {
        $container.find(".compose").show();
      } else {
        $container.find(".compose").hide();
      }
      if (id && type === "panel") {
        $container.find(".uncompose").show();
      } else {
        $container.find(".uncompose").hide();
      }
    }
  }

  static viewBoxContextmenuEvent(e) {
    e.stopPropagation();
    e.preventDefault();
    let { ctrlKey = false, metaKey = false } = e;
    ctrlKey = ctrlKey || metaKey; //(ctrl(cmd))
    if (ctrlKey) {
      return;
    }
    let $container = $("#context_menu");
    ContextMenu.closeContenxtMenuEvent();
    // let $parent = $(target).parents(".bm-component-com");
    // let type = $(target).attr("data-type");
    let id = window.bm_active_com_id;
    let bm_active_com_ids = window.bm_active_com_ids;
    let { length = 0 } = bm_active_com_ids || [];
    // if (!type) {
    //   type = $parent.attr("data-type");
    //   id = $parent.attr("data-id");
    // }
    // let obj = window.bm_widgetMap[id];
    // let { info = {} } = obj || {};
    bmCommon.log("context_menu,bm_active_com_ids=", length);
    if (length < 2) {
      if (id) {
        // ContextMenu.showContextMenuType = 1;
        CanvasEvent.selectComAction(id); //选中组件
      } else {
        // ContextMenu.showContextMenuType = 2;
        // 取消选中组件
        CanvasEvent.selectComAction();
      }
    }
    ContextMenu.refresh();
    // this.$nextTick(() => {
    let pos = bmCommon.getMousePosition(e);
    let { x = "", y = "" } = pos || {};
    let width = $container.width();
    let height = $container.height();
    let { innerHeight = 0 } = window;
    y = y > innerHeight - height + 5 ? innerHeight - height : y;
    x = x > innerWidth - width + 5 ? innerWidth - width : x;
    $container
      .css({
        left: x - 5 + "px",
        top: y - 5 + "px"
      })
      .show();
    // });
  }

  static closeContenxtMenuEvent() {
    // bmCommon.log("closeContenxtMenuEvent");
    let $container = $("#context_menu");
    $container.show();
    // this.showContextMenuStatus = true;
    ContextMenu._showContextMenuTimeoutId = window.setTimeout(() => {
      clearTimeout(ContextMenu._showContextMenuTimeoutId);
      // this.showContextMenuStatus = false;
      $container.hide();
    }, 1000);
  }
  static showContenxtMenuEvent() {
    // bmCommon.log("showContenxtMenuEvent");
    clearTimeout(ContextMenu._showContextMenuTimeoutId);
  }
  static hideContextMenuEvent() {
    let $container = $("#context_menu");
    clearTimeout(ContextMenu._showContextMenuTimeoutId);
    // bmCommon.log("hideContextMenuEvent");
    // this.showContextMenuStatus = false;
    $container.hide();
  }

  static event() {
    let $container = $("#context_menu");
    let $viewBox = $(".view-box");

    // 注册右键菜单事件
    $viewBox.on("contextmenu", ContextMenu.viewBoxContextmenuEvent);
    //增加选中事件
    $container.on("mouseenter", ContextMenu.showContenxtMenuEvent);
    $container.on("mouseleave", ContextMenu.hideContextMenuEvent);
    $container.on("click", "li", function(e) {
      e.stopPropagation();
      let $this = $(this);
      if ($this.hasClass("del")) {
        CanvasEvent.deleteEvent();
      } else if ($this.hasClass("add-diy")) {
        CanvasEvent.addDiyEvent();
      } else if ($this.hasClass("copy")) {
        CanvasEvent.copyEvent();
      } else if ($this.hasClass("paste")) {
        CanvasEvent.pasteEvent(e);
      } else if ($this.hasClass("cut")) {
        CanvasEvent.cutEvent();
      } else if ($this.hasClass("move-up")) {
        CanvasEvent.moveUpEvent();
      } else if ($this.hasClass("move-down")) {
        CanvasEvent.moveDownEvent();
      } else if ($this.hasClass("move-top")) {
        CanvasEvent.moveTopEvent();
      } else if ($this.hasClass("move-bottom")) {
        CanvasEvent.moveBottomEvent();
      } else if ($this.hasClass("compose")) {
        CanvasEvent.composeEvent();
      } else if ($this.hasClass("uncompose")) {
        CanvasEvent.unComposeEvent();
      } else if ($this.hasClass("lock")) {
        CanvasEvent.lockEvent(true);
      } else if ($this.hasClass("unlock")) {
        CanvasEvent.lockEvent(false);
      }
      $container.hide();
    });
  }
}

export default ContextMenu;

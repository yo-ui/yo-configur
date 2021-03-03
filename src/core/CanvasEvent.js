import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
import Count from "@/core/info/count.js";
import Canvas from "@/core/Canvas";
import WidgetList from "@/core/info/widget-list";
// import Control from "./Control";
const state = {};
class CanvasEvent {
  constructor() {}

  static init() {
    let _viewBox = $(".view-box");
    // 注册鼠标事件
    _viewBox.on("mousedown", CanvasEvent.viewBoxMousedownEvent);
    // // 注册颜色框事件
    // $(document).on("mousedown", ".el-color-picker__panel", e => {
    //   e.stopPropagation();
    // });
    //滚动事件
    _viewBox.on("mousewheel DOMMouseScroll", CanvasEvent.mouseScrollEvent);
    // // 注册右键菜单事件
    // _viewBox.on("contextmenu", CanvasEvent.viewBoxContextmenuEvent);
    //注册按键键盘事件
    $(document).on("keydown", CanvasEvent.keydownEvent);
    $(document).on("keyup", CanvasEvent.keyupEvent);
    $(window).on("resize", CanvasEvent.resizeCanvasSize);
    if (process.env.NODE_ENV === "production") {
      $(window).on("contextmenu", e => {
        e.preventDefault();
      });
    }

    CanvasEvent.selectComAction();
  }

  static mouseScrollEvent(e) {
    e.preventDefault();
    // e.stopPropagation();
    let wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
    let delta = Math.max(-1, Math.min(1, wheel));
    // let scrollTop=$(".content-box").scrollTop()
    // bmCommon.log();
    if (state.scrolling) {
      return;
    }
    state.scrolling = true;
    CanvasEvent.scrollSetTimeoutId = setTimeout(() => {
      if (delta < 0) {
        //向下滚动
        bmCommon.log("向下滚动", Date.now());
        CanvasEvent.zoomEvent(-10);
      } else {
        //向上滚动
        bmCommon.log("向上滚动", Date.now());
        CanvasEvent.zoomEvent(10);
      }
      state.scrolling = false;
      clearTimeout(CanvasEvent.scrollSetTimeoutId);
    }, 30);
  }

  // static viewBoxContextmenuEvent(e) {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   let { target, ctrlKey = false } = e;
  //   if (ctrlKey) {
  //     return;
  //   }
  //   CanvasEvent.closeContenxtMenuEvent();
  //   let $parent = $(target).parents(".bm-component-com");
  //   let type = $(target).attr("data-type");
  //   let id = $(target).attr("data-id");
  //   if (!type) {
  //     type = $parent.attr("data-type");
  //     id = $parent.attr("data-id");
  //   }
  //   if (type) {
  //     CanvasEvent.showContextMenuType = 1;
  //     CanvasEvent.selectComAction(id); //选中组件
  //   } else {
  //     CanvasEvent.showContextMenuType = 2;
  //     // 取消选中组件
  //     CanvasEvent.selectComAction(id);
  //   }
  //   // this.$nextTick(() => {
  //   let pos = bmCommon.getMousePosition(e);
  //   let { x = "", y = "" } = pos || {};
  //   let contextMenuBox = this.$refs.contextMenuBox;
  //   let { offsetHeight = 0, offsetWidth = 0 } = contextMenuBox || {};
  //   let { innerHeight = 0 } = window;
  //   y = y > innerHeight - offsetHeight + 5 ? innerHeight - offsetHeight : y;
  //   x = x > innerWidth - offsetWidth + 5 ? innerWidth - offsetWidth : x;
  //   this.contextMenuStyle = {
  //     left: x - 5 + "px",
  //     top: y - 5 + "px"
  //   };
  //   // });
  // }

  static initMoveEvent(e, id) {
    e.stopPropagation();
    let obj = window.bm_widgetMap[id];
    let { info: activeCom = {} } = obj || {};
    // var activeCom = this.$vpd.state.activeElement
    let pos = bmCommon.getMousePosition(e);
    let { x = "", y = "" } = pos || {};
    bmCommon.log("initMoveEvent==", x, y);
    // 设置移动状态初始值
    let { left, top, width, height, editable = false } = activeCom || {};
    if (!editable) {
      e.preventDefault();
    }
    state.startX = x;
    state.startY = y;
    state.originX = left;
    state.originY = top;
    state.id = id;
    state.originWidth = width;
    state.originHeight = height;
    state.moving = false;
    // 绑定鼠标移动事件
    $(document).on("mousemove", CanvasEvent.mousemoveEvent);
    // 取消鼠标移动事件
    $(document).on("mouseup", CanvasEvent.mouseupEvent);
  }

  // static loadRefreshScreen() {

  // }

  static mousemoveEvent(e) {
    e.stopPropagation();
    // e.preventDefault();
    let {
      startX,
      startY,
      // activeComs = [],
      // activeCom = {},
      id = "",
      // zoom = 1,
      moving = false
      // originX,
      // originY
    } = state;
    let zoom = Canvas.getZoom();
    if (moving) {
      return;
    }
    let bm_active_com_ids = window.bm_active_com_ids;
    state.moving = true;
    Canvas.border();
    CanvasEvent.comMovingSetTimeoutId = setTimeout(() => {
      clearTimeout(CanvasEvent.comMovingSetTimeoutId);
      let pos = bmCommon.getMousePosition(e);
      let { x = "", y = "" } = pos || {};
      bmCommon.log("mousemoveEvent组件移动", x, y, zoom);
      var dx = x - startX;
      var dy = y - startY;
      if (!(Math.abs(dx) > 1 || Math.abs(dy) > 1)) {
        state.moving = false;
        return;
      }
      let obj = window.bm_widgetMap[id];
      let { info: activeCom = {} } = obj || {};
      let { length = 0 } = bm_active_com_ids || [];
      if (length > 1) {
        bm_active_com_ids.forEach(id => {
          let obj = window.bm_widgetMap[id];
          let { info = {} } = obj || {};
          let { left = 0, top = 0 } = info || {};
          info.left = left + dx / zoom;
          info.top = top + dy / zoom;
          obj?.refresh({
            left: info.left,
            top: info.top
          });
        });
      } else {
        let { left = 0, top = 0 } = activeCom || {};
        left = left + dx / zoom;
        top = top + dy / zoom;
        activeCom.left = left;
        activeCom.top = top;
        obj?.refresh({
          left: activeCom.left,
          top: activeCom.top
        });
        // obj.setInfo(activeCom);
        // window.bm_widgetMap[id] = obj;
      }
      state.startX = x;
      state.startY = y;
      bmCommon.log("comMovingSetTimeoutId 定时器正在处理");
      state.moving = false;
    }, 30);
  }

  static mouseupEvent() {
    let { originX = 0, originY = 0, id = "" } = state || {};
    let obj = window.bm_widgetMap[id];
    let { info: activeCom = {} } = obj || {};
    let { left = 0, top = 0 } = activeCom || {};
    let bm_active_com_ids = window.bm_active_com_ids;
    let { length = 0 } = bm_active_com_ids || [];

    Canvas.unborder();
    bmCommon.log("mouseupEvent组件移动", top, left);
    // document.removeEventListener('mousemove', this.mousemoveEvent, true)
    $(document).off("mousemove", CanvasEvent.mousemoveEvent);
    $(document).off("mouseup", CanvasEvent.mouseupEvent);
    state.moving = false;
    if (Math.abs(originX - left) > 5 || Math.abs(originY - top) > 5) {
      CanvasEvent.createHistoryAction();
    }
    if (length > 1) {
      [id = ""] = bm_active_com_ids || [];
    }
    // window.bm_widgetMap[id] = obj;
    // if (obj) {
    //   obj.info = { ...activeCom };
    // }
    clearInterval(CanvasEvent.setIntervalId);
    window.requestAnimationFrame(() => {
      // $vm.$emit("info-data-active", { id, watched: false });
      Canvas.setActiveCom(id);
    });
  }

  static viewBoxMousedownEvent(e) {
    // e.stopPropagation();
    // e.preventDefault();
    let _viewBox = $(".view-box");
    let {
      target,
      shiftKey = false,
      ctrlKey = false,
      metaKey = false
      // button = 0
    } = e;
    ctrlKey = ctrlKey || metaKey; //(ctrl(cmd))
    let $parent = $(target).parents(".bm-component-com");
    let type = $(target).attr("type");
    let id = $(target).attr("id");
    // let width = $(target).outerWidth();
    // let height = $(target).outerHeight();
    document.activeElement?.blur();
    target?.focus();
    _viewBox?.focus();
    let bm_active_com_id = window.bm_active_com_id;
    let bm_active_com_ids = window.bm_active_com_ids;
    bmCommon.log("viewBoxMousedownEvent=", e);
    if (!type) {
      type = $parent.attr("type");
      id = $parent.attr("id");
      // width = $parent.outerWidth();
      // height = $parent.outerHeight();
    }
    if (type) {
      e.stopPropagation();
      // CanvasEvent.showContextMenuType = 1;
      // 绑定移动事件：只有从属于 page 的，除背景图以外的元件才能移动
      // let [item = {}] = activeComs || [];
      let obj = window.bm_widgetMap[id] || {};
      let { info: _activeCom = {} } = obj;
      // let { id: _id = "" } = _activeCom || {};
      // _activeCom.showCoverStatus = true;
      //如果 shift ctrl 被按住则进行 多选和取消选择
      if (shiftKey || ctrlKey) {
        // let { locked = false } = activeCom || {};
        CanvasEvent.selectComsAction(id); //选中组件
      } else {
        let { length = 0 } = bm_active_com_ids || [];
        let { locked = false } = _activeCom || {};
        if (bm_active_com_ids.indexOf(id) < 0) {
          if (id != bm_active_com_id) {
            // 如果是已经选中了则不做处理
            CanvasEvent.selectComAction(id); //选中组件
          }
        }
        // if (length < 2 && !(bm_active_com_ids.indexOf(id) > -1)) {
        // }
        //选择多个则必定可以移动
        if (length > 1) {
          locked = false;
        }
        if (!locked) {
          CanvasEvent.initMoveEvent(e, id);
        }
      }
    } else {
      // 取消选中组件
      CanvasEvent.selectComAction(id);
      CanvasEvent.selectComsAction(id);
    }
    // CanvasEvent.showContextMenuStatus = false;
  }

  static keyupEvent(e) {
    let {
      keyCode = ""
      // shiftKey = false,
      // ctrlKey = false,
      // metaKey = false
      // altKey = false
    } = e;
    // ctrlKey = ctrlKey || metaKey; //(ctrl(cmd))
    if (keyCode == 32) {
      // 空格
      $vm.$emit("canvas-action", "select");
    }
  }

  static keydownEvent(e) {
    let {
      keyCode = "",
      shiftKey = false,
      ctrlKey = false,
      metaKey = false
      // altKey = false
    } = e;
    ctrlKey = ctrlKey || metaKey; //(ctrl(cmd))
    // e.stopPropagation();
    bmCommon.log("index keydow", e);
    // let { activeComs = [], widgetList = [] } = this;
    let copyCom = CanvasEvent.copyCom;
    let bm_active_com_id = window.bm_active_com_id;
    let bm_active_com_ids = window.bm_active_com_ids;
    let { length = 0 } = bm_active_com_ids || [];
    let bm_widgetMap = window.bm_widgetMap;
    let obj = bm_widgetMap[bm_active_com_id];
    let { info: activeCom = {} } = obj || {};
    let { type = "", locked = false } = activeCom || {};
    if (keyCode == 83) {
      // ctrl+S  保存
      if (ctrlKey) {
        e.preventDefault();
        $vm.$emit("save");
      }
      return;
    } else if (keyCode == 90) {
      // 撤销 Ctrl+Z
      if (ctrlKey) {
        e.preventDefault();
        $vm.$emit("cancel");
      }
      return;
    } else if (keyCode == 89) {
      // 还原 Ctrl+Y
      if (ctrlKey) {
        e.preventDefault();
        $vm.$emit("resume");
      }
      return;
    } else if (keyCode == 65) {
      // ctrl+a 全选
      if (ctrlKey) {
        e.preventDefault();
        // let [com = {}] = widgetList || [];
        // let { length = 0 } = widgetList || [];
        bm_active_com_ids = [];
        bm_active_com_id = "";
        for (let i in bm_widgetMap) {
          let obj = bm_widgetMap[i];
          let { info = {} } = obj || {};
          let { id = "" } = info || {};
          bm_active_com_ids.push(id);
          if (!bm_active_com_id) {
            bm_active_com_id = id;
          }
        }
        // if (length > 0) {
        // this.setActiveCom(com);
        CanvasEvent.selectComAction(bm_active_com_id);
        Canvas.actives(bm_active_com_ids);
        // window.bm_active_com_ids = bm_active_com_ids;
        Canvas.setActiveComs(bm_active_com_ids);
        // this.$nextTick(() => {
        //   this.setActiveComs(widgetList);
        // });
        // }
      }
      return;
    } else if (keyCode == 189) {
      // ctrl+- 缩小
      if (ctrlKey) {
        e.preventDefault();
        CanvasEvent.zoomEvent(-10);
      }
      return;
    } else if (keyCode == 187) {
      // ctrl++放大
      if (ctrlKey) {
        e.preventDefault();
        CanvasEvent.zoomEvent(10);
      }
      return;
    }
    // if (length < 2 && copyCom == null) {
    //   if (type == "canvas" || !bm_active_com_id) {
    //     //如果选中的是画布或未选中组件则直接返回
    //     return;
    //   }
    // }
    if (keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40) {
      if (!(type != "canvas" && (bm_active_com_id || length > 1))) {
        return;
      }
      //默认移动距离
      let dis = 1;
      //按住Shift键移动距离
      let shiftDis = 10;
      // if (shiftKey || ctrlKey) {
      //   this.shiftCtrlKeyDownStatus = true;
      //   e.preventDefault();
      // }
      if (keyCode === 37) {
        e.preventDefault();
        // 左
        // dis = 1;
        if (shiftKey) {
          dis = shiftDis;
        }
        if (length > 1) {
          bm_active_com_ids.forEach(id => {
            let obj = bm_widgetMap[id];
            let { info = {} } = obj || {};
            info.left -= dis;
            obj?.refresh();
          });
        } else {
          activeCom.left -= dis;
          obj?.refresh();
        }
        // bmCommon.log("左", activeCom);
      } else if (keyCode === 38) {
        e.preventDefault();
        // 上
        // let dis = 1;
        if (shiftKey) {
          dis = shiftDis;
        }
        if (length > 1) {
          bm_active_com_ids.forEach(id => {
            let obj = bm_widgetMap[id];
            let { info = {} } = obj || {};
            info.top -= dis;
          });
        } else {
          activeCom.top -= dis;
        }
        obj?.refresh();
        // bmCommon.log("上", activeCom);
      } else if (keyCode === 39) {
        e.preventDefault();
        // 右
        // let dis = 1;
        if (shiftKey) {
          dis = shiftDis;
        }

        if (length > 1) {
          bm_active_com_ids.forEach(id => {
            let obj = bm_widgetMap[id];
            let { info = {} } = obj || {};
            info.left += dis;
          });
        } else {
          activeCom.left += dis;
        }
        obj?.refresh();
        // bmCommon.log("右", activeCom);
      } else if (keyCode === 40) {
        e.preventDefault();
        // 下
        // let dis = 1;
        if (shiftKey) {
          dis = shiftDis;
        }
        if (length > 1) {
          bm_active_com_ids.forEach(id => {
            let obj = bm_widgetMap[id];
            let { info = {} } = obj || {};
            info.top += dis;
            obj?.refresh();
          });
        } else {
          activeCom.top += dis;
          obj?.refresh();
        }
        // bmCommon.log("下", activeCom);
      }
      return;
    } else if (keyCode == 67) {
      // C
      if (ctrlKey) {
        CanvasEvent.copyEvent();
      }
    } else if (keyCode == 86) {
      // V
      if (ctrlKey) {
        CanvasEvent.pasteEvent();
      }
    } else if (keyCode == 88) {
      // X
      if (ctrlKey) {
        CanvasEvent.cutEvent();
      }
    } else if (keyCode == 71) {
      // G
      e.preventDefault();
      if (ctrlKey && shiftKey) {
        CanvasEvent.unComposeEvent();
      } else if (ctrlKey) {
        CanvasEvent.composeEvent();
      }
    } else if (keyCode == 219) {
      // ctrl+[
      // ctrl+shift+[
      if (ctrlKey && shiftKey) {
        CanvasEvent.moveTopEvent();
      } else {
        if (ctrlKey) {
          CanvasEvent.moveUpEvent();
        }
      }
    } else if (keyCode == 221) {
      // ctrl+]
      // ctrl+shift+]
      if (ctrlKey && shiftKey) {
        CanvasEvent.moveBottomEvent();
      } else {
        if (ctrlKey) {
          CanvasEvent.moveDownEvent();
        }
      }
    } else if (keyCode == 76) {
      // ctrl+shift+L
      if (ctrlKey && shiftKey) {
        CanvasEvent.lockEvent(!locked);
      }
    } else if (keyCode == 32) {
      // 空格 space
      e.preventDefault();
      e.stopPropagation();
      bmCommon.log("canvas-action", "move");
      $vm.$emit("canvas-action", "move");
    } else if (keyCode == 46) {
      // Delete
      CanvasEvent.deleteEvent();
    }
  }

  static destory() {
    let _viewBox = $(".view-box");
    // 注册鼠标事件
    _viewBox.off("mousedown", CanvasEvent.viewBoxMousedownEvent);
    // 注册右键菜单事件
    _viewBox.off("contextmenu", CanvasEvent.viewBoxContextmenuEvent);
    //注册按键键盘事件
    $(document).off("keydown", CanvasEvent.keydownEvent);
    $(document).off("keyup", CanvasEvent.keyupEvent);

    $(window).off("resize", CanvasEvent.resizeCanvasSize);
  }

  static resizeCanvasSize() {
    // this.$nextTick(() => {
    let $window = $(window);
    let { leftMenuStatus = false, rightMenuStatus = false } = this;
    let $leftBox = $(".bm-widget-list-com");
    let $rightBox = $(".bm-info-com");
    let leftWidth = $leftBox.width();
    if (!leftMenuStatus) {
      leftWidth = 0;
    } else {
      leftWidth += 30;
    }
    let rightWidth = $rightBox.width();
    if (!rightMenuStatus) {
      rightWidth = 0;
    } else {
      rightWidth += 30;
    }
    // let w_height = $window.height();
    let w_width = $window.width();
    if (w_width < 1280) {
      w_width = 1280;
    }
    w_width = w_width - rightWidth - leftWidth;
    let canvas = Canvas.getCanvas();
    let { width = 0 } = canvas || {};
    // let h_ratio = w_height / height;
    let w_ratio = w_width / width;
    let scale = w_ratio;
    // let left = (w_width - width) / 2;
    // let top = ((w_height - height) * scale) / 2;
    // if (h_ratio > w_ratio) {
    //   scale = h_ratio;
    //   // left = ((w_width - width) * scale) / 2;
    //   // top = (w_height - height) / 2;
    // }
    // canvas.left = left;
    // canvas.top = top;
    Canvas.setZoom(scale);
    // });
  }

  // static setZoom() {}

  static zoomEvent(val = 0) {
    $vm.$emit("zoom", val);
  }
  // resizeEvent(){
  //   let {canvas={}}=this
  //   let $window=$(window)
  //   let height=$window.height()
  //   let width=$window.width()
  // },
  //打散事件
  static unComposeEvent() {
    // $vm.$emit("un-compose");
    $vm.$emit("group-command", "ungroup");
    // this.showContextMenuStatus = false;
  }
  //组合事件
  static composeEvent() {
    $vm.$emit("group-command", "group");
    // this.showContextMenuStatus = false;
  }
  static addDiyEvent() {
    $vm.$emit("diy-command");
    // CanvasEvent.showContextMenuStatus = false;
  }
  //剪切
  static cutEvent() {
    CanvasEvent._cutTimeoutId = window.requestAnimationFrame(() => {
      clearTimeout(CanvasEvent._cutTimeoutId);
      let bm_active_com_ids = window.bm_active_com_ids;
      let { length = 0 } = bm_active_com_ids || [];
      let id = window.bm_active_com_id;
      // let bm_widgetMap = window.bm_widgetMap || {};
      let obj = window.bm_widgetMap[id];
      let { info = {} } = obj || {};
      // let widgetList = Canvas.getWidgetList();
      let copyCom = null;
      if (length > 1) {
        copyCom = [];
        bm_active_com_ids.forEach(id => {
          let obj = window.bm_widgetMap[id];
          let { info = {} } = obj || {};
          // let index = widgetList.findIndex(_item => id == _item.id);
          // widgetList.splice(index, 1);
          copyCom.push({ ...info });
          Canvas.remove(id);
          // Canvas.remove(id);
        });
      } else {
        let { id = "" } = info || {};
        copyCom = { ...info };
        Canvas.remove(id);
      }
      CanvasEvent.copyCom = copyCom;
      CanvasEvent.selectComAction();
      // CanvasEvent.showContextMenuStatus = false;
    }, 0);
  }
  // 复制
  static copyEvent() {
    CanvasEvent._copyTimeoutId = window.requestAnimationFrame(() => {
      clearTimeout(this._copyTimeoutId);
      let bm_active_com_ids = window.bm_active_com_ids;
      let { length = 0 } = bm_active_com_ids || [];
      let id = window.bm_active_com_id;
      if (!id) {
        return;
      }
      let obj = window.bm_widgetMap[id];
      let { info = {} } = obj || {};
      let copyCom = null;
      if (length > 1) {
        copyCom = [];
        bm_active_com_ids.forEach(id => {
          let obj = window.bm_widgetMap[id];
          let { info = {} } = obj || {};
          copyCom.push({ ...info });
        });
      } else {
        copyCom = { ...info };
      }
      CanvasEvent.copyCom = copyCom;
    }, 1);
  }
  // 粘贴
  static pasteEvent(e) {
    CanvasEvent.selectComAction();
    CanvasEvent._pasteTimeoutId = window.requestAnimationFrame(() => {
      clearTimeout(CanvasEvent._pasteTimeoutId);
      let copyCom = CanvasEvent.copyCom;
      if (!copyCom) {
        return;
      }
      let bm_widgetMap = window.bm_widgetMap || {};
      let widgetList = Canvas.getWidgetList();
      let canvas = Canvas.getCanvas();
      let zoom = Canvas.getZoom();
      let { length = 0 } = copyCom || {};
      let pos = {};
      if (e) {
        pos = bmCommon.getMousePosition(e);
      }
      let { x = "", y = "" } = pos || {};
      let offset = $(".view-box").offset();
      let { left: _left = 0, top: _top = 0 } = canvas || {};
      let pasteLeft = 0,
        pasteTop = 0;
      let callback = (item, index) => {
        let orders = widgetList.map(item => {
          let { id = "" } = item;
          let obj = bm_widgetMap[id];
          let { info = {} } = obj || {};
          return info.order;
        });
        let order = Math.max(...orders);
        let { width = 0, height = 0, left = 0, top = 0 } = item || {};
        if (e) {
          let { left: __left = 0, top: __top = 0 } = offset || {};
          let temp_left = x / zoom - width / 2 - _left / zoom - __left / zoom;
          let temp_top = y / zoom - height / 2 - _top / zoom - __top / zoom;
          if (index == 0) {
            pasteLeft = temp_left - left;
            pasteTop = temp_top - top;
            left = temp_left;
            top = temp_top;
          } else {
            left = left + pasteLeft;
            top = top + pasteTop;
          }
        } else {
          left += 10;
          top += 10;
        }
        order += 1;
        let id = bmCommon.uuid();
        let _item = {
          ...item,
          id,
          order,
          left,
          top
        };
        let { children = [] } = _item || {};
        children &&
          children.forEach(item => {
            item.id = bmCommon.uuid();
            item.parentId = id;
          });
        Canvas.append(_item);
        return _item;
      };
      if (length > 1) {
        copyCom.sort((a, b) => {
          return a.order - b.order;
        });
        let arr = [];
        copyCom.forEach((item, index) => {
          // //设置粘贴初始位置
          // item.pasteLeft = item.left - minLeft;
          // item.pasteTop = item.top - minTop;
          arr.push(callback(item, index));
        });
        CanvasEvent.copyCom = arr || [];
        // this.setActiveComs(_activeComs);
        // this.$nextTick(() => {
        //   let [obj = {}] = _activeComs || [];
        //   this.selectComAction((obj || {}).id); //选中组件
        //   // this.setActiveCom(_activeCom);
        // });
      } else {
        // let { type = "" } = copyCom || {};
        // if (type == "canvas" || !type) {
        //   return;
        // }
        CanvasEvent.copyCom = callback(copyCom || {}, 0);
        // this.$nextTick(() => {
        //   // this.setActiveCom(_activeCom);
        //   this.selectComAction((_activeCom || {}).id); //选中组件
        // });
      }
      CanvasEvent.createHistoryAction();
      // CanvasEvent.showContextMenuStatus = false;
    }, 0);
  }
  // 删除
  static deleteEvent() {
    $vm.$emit("delete-command");
  }
  // 锁定/解锁
  static lockEvent(locked) {
    this._lockTimeoutId = window.requestAnimationFrame(() => {
      clearTimeout(this._lockTimeoutId);
      let bm_active_com_id = window.bm_active_com_id;
      let obj = window.bm_widgetMap[bm_active_com_id];
      obj?.lock(locked);
      CanvasEvent.createHistoryAction();
    }, 0);
  }
  //创建历史记录
  static createHistoryAction() {
    let bm_widgetMap = window.bm_widgetMap;
    let canvas = Canvas.getCanvas();
    let widgetList = [];
    for (let i in bm_widgetMap) {
      let obj = bm_widgetMap[i];
      let { info = {} } = obj;
      widgetList.push(info);
    }
    // historyList = [Object.freeze([...widgetList]), ...historyList];
    // historyList.unshift(bmCommon.clone(widgetList));
    Canvas.setHistoryList(widgetList);
    Canvas.setHistoryIndex(0);
    Canvas.setPreviewData({
      widgetList: [...widgetList],
      canvas: { ...canvas }
    });
  }
  // 创建快照
  static createRecord(item) {
    let { img = "" } = item || {};
    let bm_widgetMap = window.bm_widgetMap;
    let widgetList = [];
    for (let i in bm_widgetMap) {
      let obj = bm_widgetMap[i];
      let { info = {} } = obj;
      widgetList.push(info);
    }
    let date = moment();
    let time = date.valueOf();
    let id = bmCommon.uuid();
    let record = {
      id,
      name: date.format("MM/DD/YYYY HH:mm:ss A"),
      time,
      img,
      type: "auto", //自动记录
      widgetList: [...widgetList]
    };
    let recordList = Canvas.getRecordList();
    recordList.unshift(record);
    Canvas.setRecordList(record);
  }

  // 上移一层
  static moveUpEvent() {
    //排序
    $vm.$emit("order-command", "up");
  }
  // 下移一层
  static moveDownEvent() {
    //排序
    $vm.$emit("order-command", "down");
  }
  // 置底
  static moveBottomEvent() {
    //排序
    $vm.$emit("order-command", "bottom");
  }
  // 置顶
  static moveTopEvent() {
    //排序
    $vm.$emit("order-command", "top");
  }

  static selectComsAction(id) {
    // let {
    //   // widgetList = [],
    //   // canvas = {},
    //   // activeComs = [],
    //   activeCom = {}
    // } = state;
    let bm_active_com_ids = window.bm_active_com_ids;
    // let fIndex = bm_active_com_ids.findIndex(item => item == id);
    // if (fIndex > -1) {
    //   bm_active_com_ids.splice(fIndex, 1);
    // }
    if (!id) {
      // window.bm_active_com_ids = [];
      Canvas.setActiveComs([]);
      Canvas.unactive();
      return;
    }
    // let { id: _id = "" } = activeCom || {};
    // let index=activeComs.findIndex(item=>item.id==_id)
    // if (_id && index<0) {
    //   activeComs.push(activeCom);
    // }
    let index = bm_active_com_ids.findIndex(item => item == id);
    // bmCommon.log(index, "-------");
    //如果在已选中组件内找到则移除
    if (index > -1) {
      bm_active_com_ids.splice(index, 1);
      Canvas.unactive(id);
    } else {
      //未找到则添加
      // let activeCom = widgetList.find(item => item.id == id);
      // if (activeCom) {
      //   activeComs.push(activeCom);
      // }
      bm_active_com_ids.push(id);
      Canvas.active(id);
    }
    let { length = 0 } = bm_active_com_ids || [];
    if (length > 0) {
      [id = ""] = bm_active_com_ids || [];
    } else {
      // activeCom = canvas;
      id = "";
      Canvas.setActiveCom();
    }
    // context.commit("setActiveCom", activeCom);
    // Canvas.setActiveCom(id);
  }

  static selectComAction(id, flag = true) {
    // let {
    //   // widgetList = [],
    //   // canvas = {},
    //   activeCom = {},
    //   activeComs = []
    // } = state;
    // activeCom.showCoverStatus = true;
    bmCommon.log("selectComAction", id);
    // let _oldCom = $("#canvas_content .bm-component-com.active");
    // _oldCom.removeClass("active");

    // let _infoOldCom = $(`#info_com_list_box li.active`);
    // _infoOldCom.removeClass("active");
    Canvas.unactive();
    WidgetList.unactive();
    bmCommon.log("当前组件数量为", Count.count);
    if (!id) {
      // activeCom = Constants.COMPONENTCANVAS;

      this.setTimeoutId = setTimeout(() => {
        clearTimeout(this.setTimeoutId);
        // $vm.$emit("info-data-active");
        // $vm.$store.commit("canvas/setActiveCom", Canvas.getCanvas());
        Canvas.setActiveCom();
        // Control.refresh();
        Canvas.unoptimize();
      }, 10);
    } else {
      // let obj = window.bm_widgetMap[id];
      // let { info: activeCom = {} } = obj || {};

      // let _com = $(`#${id}`);
      // _com.addClass("active");
      // let _infoCom = $(`#info_com_${id}`);
      // _infoCom.addClass("active");
      // _infoCom.length > 0 && _infoCom[0].scrollIntoView();
      Canvas.active(id);
      // Control.refresh(id);
      WidgetList.active(id, flag);

      // window.requestAnimationFrame(() => {
      this.setTimeoutId = setTimeout(() => {
        clearTimeout(this.setTimeoutId);

        // let obj = window.bm_widgetMap[id];
        // let { info = {} } = obj || {};
        // $vm.$emit("info-data-active", { id });
        // $vm.$store.commit("canvas/setActiveCom", info);
        Canvas.setActiveCom(id);
        Canvas.optimize();
      }, 10);
    }
    window.bm_active_com_id = id;
    // window.bm_active_com_ids = [id];
    Canvas.setActiveComs([id]);
  }

  // 获取视频token
  canvasTokenFunc(params, callback) {
    let { deviceId = "" } = params;
    let accessToken = "",
      serial = "";
    $vm.$store
      .dispatch("canvasToken", { deviceId })
      .then(({ data }) => {
        let { code = "", result } = data;
        if (code == Constants.CODES.SUCCESS) {
          let { accessToken: _accessToken = "", serial: _serial = "" } =
            result || {};
          accessToken = _accessToken;
          serial = _serial;
        }
        callback && callback({ accessToken, serial });
      })
      .catch(err => {
        callback && callback({ accessToken, serial });
        bmCommon.error("获取视频token失败=>canvasToken", err);
      });
  }
  // 开始摄像头移动
  canvasStartFunc(params, callback) {
    let { deviceId = "", direction = "" } = params;
    if (CanvasEvent._canvasStartStatus) {
      return;
    }
    CanvasEvent._canvasStartStatus = true;
    $vm.$store
      .dispatch("canvasStart", { direction, deviceId })
      .then(({ data }) => {
        CanvasEvent._canvasStartStatus = false;
        callback && callback();
      })
      .catch(err => {
        CanvasEvent._canvasStartStatus = false;
        callback && callback();
        bmCommon.error("开始摄像头移动失败=>canvasStart", err);
      });
  }
  // 停止摄像头移动
  canvasStopFunc(params, callback) {
    let { deviceId = "", direction = "" } = params;
    if (CanvasEvent._canvasStopStatus) {
      return;
    }
    CanvasEvent._canvasStopStatus = true;
    $vm.$store
      .dispatch("canvasStop", { direction, deviceId })
      .then(({ data }) => {
        CanvasEvent._canvasStopStatus = false;
        callback && callback();
      })
      .catch(err => {
        CanvasEvent._canvasStopStatus = false;
        callback && callback();
        bmCommon.error("停止摄像头移动失败=>canvasStop", err);
      });
  }
}

export default CanvasEvent;

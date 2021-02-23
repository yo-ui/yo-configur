import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
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
    // 注册右键菜单事件
    _viewBox.on("contextmenu", CanvasEvent.viewBoxContextmenuEvent);
    //注册按键键盘事件
    $(document).on("keydown", CanvasEvent.keydownEvent);
    $(document).on("keyup", CanvasEvent.keyupEvent);
    $(window).on("resize", CanvasEvent.resizeCanvasSize);
    if (process.env.NODE_ENV === "production") {
      $(window).on("contextmenu", e => {
        e.preventDefault();
      });
    }
  }

  static mouseScrollEvent(e) {
    e.preventDefault();
    // e.stopPropagation();
    let wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
    let delta = Math.max(-1, Math.min(1, wheel));
    // let scrollTop=$(".content-box").scrollTop()
    // bmCommon.log();
    if (delta < 0) {
      //向下滚动
      bmCommon.log("向下滚动");
      CanvasEvent.zoomEvent(-2);
    } else {
      //向上滚动
      bmCommon.log("向上滚动");
      CanvasEvent.zoomEvent(2);
    }
    // return false;
  }

  static viewBoxContextmenuEvent(e) {
    e.stopPropagation();
    e.preventDefault();
    let { target, ctrlKey = false } = e;
    if (ctrlKey) {
      return;
    }
    CanvasEvent.closeContenxtMenuEvent();
    let $parent = $(target).parents(".bm-component-com");
    let type = $(target).attr("data-type");
    let id = $(target).attr("data-id");
    if (!type) {
      type = $parent.attr("data-type");
      id = $parent.attr("data-id");
    }
    if (type) {
      CanvasEvent.showContextMenuType = 1;
      CanvasEvent.selectComAction(id); //选中组件
    } else {
      CanvasEvent.showContextMenuType = 2;
      // 取消选中组件
      CanvasEvent.selectComAction(id);
    }
    // this.$nextTick(() => {
    let pos = bmCommon.getMousePosition(e);
    let { x = "", y = "" } = pos || {};
    let contextMenuBox = this.$refs.contextMenuBox;
    let { offsetHeight = 0, offsetWidth = 0 } = contextMenuBox || {};
    let { innerHeight = 0 } = window;
    y = y > innerHeight - offsetHeight + 5 ? innerHeight - offsetHeight : y;
    x = x > innerWidth - offsetWidth + 5 ? innerWidth - offsetWidth : x;
    this.contextMenuStyle = {
      left: x - 5 + "px",
      top: y - 5 + "px"
    };
    // });
  }

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
    state.moving = true;

    // 绑定鼠标移动事件
    // document.addEventListener('mousemove', this.mousemoveEvent, true)
    $(document).on("mousemove", CanvasEvent.mousemoveEvent);
    $(document).on("mouseup", CanvasEvent.mouseupEvent);

    CanvasEvent.loadRefreshScreen();
    // 取消鼠标移动事件
    // document.addEventListener('mouseup', this.mouseupEvent, true)
  }

  static loadRefreshScreen() {
    window.requestAnimationFrame(() => {
      CanvasEvent.loadRefreshScreen();
    });
  }

  static mousemoveEvent(e) {
    e.stopPropagation();
    // e.preventDefault();
    // this.$vpd.commit('move', {
    //   x: e.pageX,
    //   y: e.pageY
    // })

    let {
      startX,
      startY,
      activeComs = [],
      // activeCom = {},
      id = "",
      zoom = 1,
      moving = false
      // originX,
      // originY
    } = state;
    if (!moving) {
      return;
    }
    state.moving = true;
    let pos = bmCommon.getMousePosition(e);
    let { x = "", y = "" } = pos || {};
    bmCommon.log("mousemoveEvent组件移动", x, y);
    // var target = state.activeCom;
    var dx = x - startX;
    var dy = y - startY;
    // bmCommon.error(dx, dy);
    if (!(Math.abs(dx) > 1 || Math.abs(dy) > 1)) {
      return;
    }
    // let _com = $(`#${id}`);

    let obj = window.bm_widgetMap[id];
    let { info: activeCom = {} } = obj || {};
    // var left = state.originX + Math.floor((dx * 100) / state.zoom);
    // var top = state.originY + Math.floor((dy * 100) / state.zoom);
    let { length = 0 } = activeComs || [];
    // bmCommon.log("移动处理");
    if (length > 1) {
      activeComs.forEach(item => {
        let { left = 0, top = 0 } = item || {};
        // item.left = left > 0 ? left : 0;
        // item.top = top > 0 ? top : 0;
        item.left = left + Math.floor(dx / zoom);
        item.top = top + Math.floor(dy / zoom);
        // $(`#box_${id}`).css({ left, top });
      });
    } else {
      let { left = 0, top = 0 } = activeCom || {};
      // let left = parseFloat(_com.css("left"));
      // let top = parseFloat(_com.css("top"));
      // // left = originX + Math.floor((dx * 1) / zoom);
      // // var top = originY + Math.floor((dy * 1) / zoom);
      // // bmCommon.log(left , Math.floor(dx  / zoom),dx,dy)
      // activeCom.left = left + Math.floor(dx / zoom);
      // activeCom.top = top + Math.floor(dy / zoom);
      left = left + Math.floor(dx / zoom);
      top = top + Math.floor(dy / zoom);
      // _com.css({ left, top });
      activeCom.left = left;
      activeCom.top = top;
      obj.refresh({
        left: activeCom.left,
        top: activeCom.top
      });
      obj.setInfo(activeCom);
      window.bm_widgetMap[id] = obj;
    }
    state.startX = x;
    state.startY = y;
    // bmCommon.log(left, top, activeCom);
  }

  static mouseupEvent() {
    let { originX = 0, originY = 0, id = "" } = state || {};
    let obj = window.bm_widgetMap[id];
    let { info: activeCom = {} } = obj || {};
    let { left = 0, top = 0 } = activeCom || {};

    bmCommon.log("mouseupEvent组件移动", top, left);
    // document.removeEventListener('mousemove', this.mousemoveEvent, true)
    $(document).off("mousemove", CanvasEvent.mousemoveEvent);
    $(document).off("mouseup", CanvasEvent.mouseupEvent);
    state.moving = false;
    if (Math.abs(originX - left) > 5 || Math.abs(originY - top) > 5) {
      CanvasEvent.createHistoryAction();
    }
    window.bm_widgetMap[id] = obj;
    obj.info = { ...activeCom };
    window.requestAnimationFrame(() => {
      $vm.$emit("info-data-active", { id, watched: false });
    });
  }

  static viewBoxMousedownEvent(e) {
    // e.stopPropagation();
    // e.preventDefault();
    let _viewBox = $(".view-box");
    let { target, shiftKey = false, ctrlKey = false, metaKey = false } = e;
    ctrlKey = ctrlKey || metaKey; //(ctrl(cmd))
    let $parent = $(target).parents(".bm-component-com");
    let type = $(target).attr("type");
    let id = $(target).attr("id");
    let width = $(target).outerWidth();
    let height = $(target).outerHeight();
    document.activeElement?.blur();
    target?.focus();
    _viewBox.focus();
    // bmCommon.log(document.activeElement);
    if (!type) {
      type = $parent.attr("type");
      id = $parent.attr("id");
      width = $parent.outerWidth();
      height = $parent.outerHeight();
    }
    if (type) {
      CanvasEvent.showContextMenuType = 1;
      // 绑定移动事件：只有从属于 page 的，除背景图以外的元件才能移动
      // let [item = {}] = activeComs || [];
      let obj = window.bm_widgetMap[id] || {};
      let { info: _activeCom = {} } = obj;
      // let { id: _id = "" } = _activeCom || {};
      _activeCom.showCoverStatus = true;
      //如果 shift ctrl 被按住则进行 多选和取消选择
      if (shiftKey || ctrlKey) {
        // let { locked = false } = activeCom || {};
        CanvasEvent.selectComsAction(id); //选中组件
      } else {
        // if (id != _id) {
        // 如果是已经选中了则不做处理
        CanvasEvent.selectComAction(id); //选中组件
        // }
      }
      let {
        activeComs = [],
        // shiftCtrlKeyDownStatus = false,
        activeCom = {}
      } = this;
      let { length = 0 } = activeComs || [];
      let { locked = false, rotateable = false } = _activeCom || {};
      if (!rotateable) {
        let padding = 0;
        activeCom.originWidth = width - padding; //减去 padding
        activeCom.originHeight = height - padding; //减去 padding
      }
      //选择多个则必定可以移动
      if (length > 1) {
        locked = false;
      }
      if (!locked) {
        CanvasEvent.initMoveEvent(e, id);
      }
    } else {
      CanvasEvent.showContextMenuType = 2;
      let { activeCom = {}, activeComs = [] } = this;
      activeCom.showCoverStatus = true;
      activeComs.forEach(item => {
        item.showCoverStatus = true;
      });
      // 取消选中组件
      CanvasEvent.selectComAction(id);
      CanvasEvent.selectComsAction(id);
      // this.initMoveEvent(e); // 参见 mixins
    }
    CanvasEvent.showContextMenuStatus = false;
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
    let {
      activeCom = {},
      copyCom = null,
      activeComs = [],
      widgetList = []
    } = this;
    let { length = 0 } = activeComs || [];
    let { type = "", id = "", locked = false } = activeCom || {};
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
    } else if (keyCode == 89) {
      // 还原 Ctrl+Y
      if (ctrlKey) {
        e.preventDefault();
        $vm.$emit("resume");
      }
    } else if (keyCode == 65) {
      // ctrl+a 全选
      if (ctrlKey) {
        e.preventDefault();
        let [com = {}] = widgetList || [];
        let { length = 0 } = widgetList || [];
        if (length > 0) {
          this.setActiveCom(com);
          this.$nextTick(() => {
            this.setActiveComs(widgetList);
          });
        }
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
    if (length < 2 && copyCom == null) {
      if (type == "canvas" || !id) {
        //如果选中的是画布或未选中组件则直接返回
        return;
      }
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
      if (type == "canvas" || !id) {
        e.preventDefault();
        //如果选中的是画布或未选中组件则直接返回
        return;
      }
      // 左
      // dis = 1;
      e.preventDefault();
      if (shiftKey) {
        dis = shiftDis;
      }
      if (length > 1) {
        activeComs.forEach(item => {
          item.left -= dis;
        });
      } else {
        activeCom.left -= dis;
      }
      // bmCommon.log("左", activeCom);
    } else if (keyCode === 38) {
      if (type == "canvas" || !id) {
        e.preventDefault();
        //如果选中的是画布或未选中组件则直接返回
        return;
      }
      // 上
      // let dis = 1;
      e.preventDefault();
      if (shiftKey) {
        dis = shiftDis;
      }
      if (length > 1) {
        activeComs.forEach(item => {
          item.top -= dis;
        });
      } else {
        activeCom.top -= dis;
      }
      // bmCommon.log("上", activeCom);
    } else if (keyCode === 39) {
      if (type == "canvas" || !id) {
        e.preventDefault();
        //如果选中的是画布或未选中组件则直接返回
        return;
      }
      // 右
      // let dis = 1;
      e.preventDefault();
      if (shiftKey) {
        dis = shiftDis;
      }

      if (length > 1) {
        activeComs.forEach(item => {
          item.left += dis;
        });
      } else {
        activeCom.left += dis;
      }
      // bmCommon.log("右", activeCom);
    } else if (keyCode === 40) {
      if (type == "canvas" || !id) {
        e.preventDefault();
        //如果选中的是画布或未选中组件则直接返回
        return;
      }
      // 下
      // let dis = 1;
      e.preventDefault();
      if (shiftKey) {
        dis = shiftDis;
      }
      if (length > 1) {
        activeComs.forEach(item => {
          item.top += dis;
        });
      } else {
        activeCom.top += dis;
      }
      // bmCommon.log("下", activeCom);
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
    let { canvas = {} } = this;
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
    CanvasEvent.setZoom(scale);
    // });
  }

  static setZoom() {}

  static zoomEvent(val = 0) {
    let { getZoom: zoom = 0, canvas = {} } = this;
    if (val) {
      bmCommon.log("当前放大before", zoom);
      zoom = zoom * 100 + val;
      bmCommon.log("当前放大", zoom, zoom / 100);
      if (zoom > 10 && zoom < 1000) {
        bmCommon.log("当前放大设置");
        CanvasEvent.setZoom(zoom / 100);
      }
    } else {
      CanvasEvent.setZoom(1);
      canvas.left = 0;
      canvas.top = 0;
    }
  }
  // resizeEvent(){
  //   let {canvas={}}=this
  //   let $window=$(window)
  //   let height=$window.height()
  //   let width=$window.width()
  // },
  static closeContenxtMenuEvent() {
    // bmCommon.log("closeContenxtMenuEvent");
    this.showContextMenuStatus = true;
    this._showContextMenuTimeoutId = window.requestAnimationFrame(() => {
      clearTimeout(this._showContextMenuTimeoutId);
      this.showContextMenuStatus = false;
    }, 1000);
  }
  static showContenxtMenuEvent() {
    // bmCommon.log("showContenxtMenuEvent");
    clearTimeout(this._showContextMenuTimeoutId);
  }
  static hideContextMenuEvent() {
    clearTimeout(this._showContextMenuTimeoutId);
    // bmCommon.log("hideContextMenuEvent");
    this.showContextMenuStatus = false;
  }
  //打散事件
  static unComposeEvent() {
    // $vm.$emit("un-compose");
    $vm.$emit("group-command", "ungroup");
    this.showContextMenuStatus = false;
  }
  //组合事件
  static composeEvent() {
    $vm.$emit("group-command", "group");
    this.showContextMenuStatus = false;
  }
  static addDiyEvent() {
    $vm.$emit("diy-command");
    CanvasEvent.showContextMenuStatus = false;
  }
  //剪切
  static cutEvent() {
    this._navTimeoutId = window.requestAnimationFrame(() => {
      let { activeCom = {}, widgetList = [], activeComs = [] } = this;
      let { length = 0 } = activeComs || [];
      let copyCom = null;
      if (length > 1) {
        copyCom = bmCommon.clone(activeComs || []);
        activeComs.forEach(item => {
          let { id = "" } = item || {};
          let index = widgetList.findIndex(_item => id == _item.id);
          widgetList.splice(index, 1);
        });
      } else {
        let { id = "" } = activeCom;
        copyCom = bmCommon.clone(activeCom || {});
        let index = widgetList.findIndex(item => id == item.id);
        widgetList.splice(index, 1);
      }
      CanvasEvent.copyCom = copyCom;
      CanvasEvent.selectComAction();
      CanvasEvent.showContextMenuStatus = false;
    }, 0);
  }
  // 复制
  static copyEvent() {
    this._navTimeoutId = window.requestAnimationFrame(() => {
      // clearTimeout(this._navTimeoutId);
      let { activeCom = {}, activeComs = [], selectBox = {} } = this;
      // this.copyCom = bmCommon.clone(activeCom || {});
      selectBox.moving = true;
      let { length = 0 } = activeComs || [];
      let copyCom = null;
      if (length > 1) {
        copyCom = bmCommon.clone(activeComs || []);
        copyCom.forEach(item => {
          item.left = item.left + 10;
          item.top = item.top + 10;
        });
      } else {
        let { type = "" } = activeCom || {};
        if (type == "canvas") {
          return;
        }
        copyCom = bmCommon.clone(activeCom || {});
        copyCom.left = copyCom.left + 10;
        copyCom.top = copyCom.top + 10;
      }
      this.copyCom = copyCom;
      this.showContextMenuStatus = false;
    }, 0);
  }
  // 粘贴
  static pasteEvent(e) {
    this.selectComAction();
    this._navTimeoutId = window.requestAnimationFrame(() => {
      clearTimeout(this._navTimeoutId);
      let {
        copyCom,
        widgetList = [],
        getZoom: zoom = 1,
        canvas = {},
        selectBox = {}
      } = this;
      if (!copyCom) {
        return;
      }
      selectBox.moving = true;
      let { length = 0 } = copyCom || {};
      // let _activeComs = [];
      // let _activeCom = {};
      // let obj = widgetList[widgetList.length - 1] || {};
      let pos = {};
      if (e) {
        // pos = bmCommon.getMousePosition(e, { x: 310, y: 90 });
        pos = bmCommon.getMousePosition(e);
      }
      let { x = "", y = "" } = pos || {};
      let offset = $(".view-box").offset();
      let { left: _left = 0, top: _top = 0 } = canvas || {};
      let pasteLeft = 0,
        pasteTop = 0;
      let callback = (item, index) => {
        let orders = widgetList.map(item => item.order);
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
        widgetList.push(_item);
        if (length > 1) {
          // _activeComs.push(_item);
          CanvasEvent.selectComsAction(id);
        } else {
          // _activeCom = _item;
          CanvasEvent.selectComAction(id);
        }
      };
      if (length > 1) {
        copyCom.sort((a, b) => {
          return a.order - b.order;
        });
        // let minLeft = Math.min.call(
        //   Math,
        //   ...copyCom.map(item => item.left || 0)
        // );
        // let minTop = Math.min.call(
        //   Math,
        //   ...copyCom.map(item => item.left || 0)
        // );
        // let [first = {}] = copyCom || [];
        // let { left = 0, top = 0 } = first || {};
        copyCom.forEach((item, index) => {
          // //设置粘贴初始位置
          // item.pasteLeft = item.left - minLeft;
          // item.pasteTop = item.top - minTop;
          callback(item, index);
        });
        // this.setActiveComs(_activeComs);
        // this.$nextTick(() => {
        //   let [obj = {}] = _activeComs || [];
        //   this.selectComAction((obj || {}).id); //选中组件
        //   // this.setActiveCom(_activeCom);
        // });
      } else {
        let { type = "" } = copyCom || {};
        if (type == "canvas" || !type) {
          return;
        }
        callback(copyCom || {}, 0);
        // this.$nextTick(() => {
        //   // this.setActiveCom(_activeCom);
        //   this.selectComAction((_activeCom || {}).id); //选中组件
        // });
      }
      CanvasEvent.createHistoryAction();
      CanvasEvent.showContextMenuStatus = false;
    }, 0);
  }
  // 删除
  static deleteEvent() {
    $vm.$emit("delete-command");
    CanvasEvent.showContextMenuStatus = false;
  }
  // 锁定/解锁
  static lockEvent(locked) {
    this._navTimeoutId = window.requestAnimationFrame(() => {
      clearTimeout(this._navTimeoutId);
      let { activeCom = {} } = this;
      activeCom.locked = locked;
      CanvasEvent.showContextMenuStatus = false;
      CanvasEvent.createHistoryAction();
    }, 0);
  }

  static createHistoryAction() {}

  // 上移一层
  static moveUpEvent() {
    //排序
    $vm.$emit("order-command", "up");
    CanvasEvent.showContextMenuStatus = false;
  }
  // 下移一层
  static moveDownEvent() {
    //排序
    $vm.$emit("order-command", "down");
    CanvasEvent.showContextMenuStatus = false;
  }
  // 置底
  static moveBottomEvent() {
    //排序
    $vm.$emit("order-command", "bottom");
    CanvasEvent.showContextMenuStatus = false;
  }
  // 置顶
  static moveTopEvent() {
    //排序
    $vm.$emit("order-command", "top");
    CanvasEvent.showContextMenuStatus = false;
  }

  static selectComsAction() {}

  static selectComAction(id) {
    // let {
    //   // widgetList = [],
    //   // canvas = {},
    //   activeCom = {},
    //   activeComs = []
    // } = state;
    // activeCom.showCoverStatus = true;
    bmCommon.log("selectComAction", id);
    let _oldCom = $("#canvas_content .bm-component-com.active");

    let _infoOldCom = $(`#info_com_list_box li.active`);
    _infoOldCom.removeClass("active");
    _oldCom.removeClass("active");
    if (!id) {
      // activeCom = Constants.COMPONENTCANVAS;

      this.setTimeoutId = setTimeout(() => {
        clearTimeout(this.setTimeoutId);
        $vm.$emit("info-data-active");
      }, 10);
    } else {
      // let obj = window.bm_widgetMap[id];
      // let { info: activeCom = {} } = obj || {};

      let _com = $(`#${id}`);
      _com.addClass("active");
      let _infoCom = $(`#info_com_${id}`);
      _infoCom.addClass("active");
      _infoCom.length > 0 && _infoCom[0].scrollIntoView();

      // window.requestAnimationFrame(() => {
      this.setTimeoutId = setTimeout(() => {
        clearTimeout(this.setTimeoutId);
        $vm.$emit("info-data-active", { id });
      }, 10);
    }
    window.bm_active_com_id = id;
  }
}

export default CanvasEvent;

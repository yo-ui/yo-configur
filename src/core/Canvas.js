import bmCommon from "@/common/common";
import ComponentLibrary from "@/core/ComponentLibrary";
import { Constants } from "@/common/env";
import WidgetList from "@/core/info/widget-list";
import Count from "@/core/info/count.js";
import CanvasEvent from "@/core/CanvasEvent";

class Canvas {
  static recordList = [];
  static recordMap = {};
  static deviceCacheMap = {};
  static previewData = [];
  static historyList = [];
  // container;
  constructor() {}
  static getCanvas() {
    return $vm.$store.getters["canvas/getCanvas"] || {};
  }
  //重设canvas
  static setCanvas(canvas) {
    $vm.$store.commit("canvas/setCanvas", canvas);
  }
  static getUserInfo() {
    return $vm.$store.getters["getUserInfo"] || {};
  }

  static getDeviceCacheMap(key) {
    return Canvas.deviceCacheMap[key] || {};
  }
  static setDeviceCacheMap({ key = "", value = {} } = {}) {
    let { deviceCacheMap = {} } = Canvas;
    deviceCacheMap[key] = value || {};
  }
  static setAllDeviceCacheMap(item = {}) {
    Canvas.deviceCacheMap = item || {};
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
    let { info = {} } = obj || {};
    let { parentId = "", children = [] } = info || {};
    if (!parentId) {
      children = bmCommon.clone(children);
      setTimeout(() => {
        (children || []).forEach(item => {
          let { id = "" } = item || {};
          bmCommon.log("删除组件", id);
          delete window.bm_widgetMap[id];
        });
      }, 10);
    }
    if (obj) {
      if (obj.destory) {
        obj?.destory();
      }
      if (obj.remove) {
        obj?.remove();
      }
    }

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

  // 附加处理
  static append(item, flag = true) {
    let $container = $("#canvas_content");
    let dom = Canvas.singleTemplate(item);
    $container.append(dom);
    WidgetList.append(item);
    if (flag) {
      let { id = "" } = item || {};
      CanvasEvent.selectComAction(id);
    }
  }

  // 单个模板
  static singleTemplate(item) {
    let fregment = document.createDocumentFragment("div");
    let { children = [], id = "" } = item || {};
    let obj = ComponentLibrary.getInstance(item);
    // bmCommon.log("添加组件前", JSON.stringify(item));
    window.bm_widgetMap[id] = obj;
    // bmCommon.log("append 组件", id, obj, window.bm_widgetMap[id]);
    let dom = obj.template();
    if (dom) {
      let _div = $(obj.template());
      let { length = 0 } = children || [];
      if (length > 0) {
        children.forEach(item => {
          let { id = "" } = item || {};
          let obj = ComponentLibrary.getInstance(item);
          window.bm_widgetMap[id] = obj;
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
    let fregment = document.createDocumentFragment("div");
    let infoWidgets = [];
    let i = 0,
      len = widgetList.length;
    for (; i < len; i++) {
      let item = widgetList[i];
      item.id = bmCommon.uuid();
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
      // for (let i in data) {
      //   if (!item[i]) {
      //     item[i] = data[i];
      //   }
      // }
      item = { ...data, ...item };
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
          item.id = parentId + bmCommon.uuid();
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
          item = { ...data, ...item };
          // for (let i in data) {
          //   // if (!item[i]) {
          //     item[i] = data[i];
          //   // }
          // }
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
  static unactive(id) {
    // let bm_active_com_ids = window.bm_active_com_ids;
    // let { length = 0 } = bm_active_com_ids || [];
    if (id) {
      let _oldCom = $(`#${id}`);
      _oldCom.removeClass("active");
      _oldCom.find(".cover").show();
    } else {
      let _oldCom = $("#canvas_content .bm-component-com.active");
      _oldCom.removeClass("active");
      // if (length < 2) {
      _oldCom.each((_, item) => {
        let order = $(item).data("order");
        if (order !== undefined) {
          $(item).css({ "z-index": order });
        }
      });
      // }
      _oldCom.find(".cover").show();
    }
    WidgetList.unactive();
    window.bm_active_com_id = "";

    // let oldId = window.bm_active_com_id;
    // let $container = $(`#${oldId}>.component`);
    // $container.removeClass("active");
  }
  // 激活选中
  static active(id, flag = true) {
    let _com = $(`#${id}`);
    let bm_active_com_ids = window.bm_active_com_ids;
    let { length = 0 } = bm_active_com_ids || [];
    _com.removeClass("hide").addClass("active");
    let oldId = window.bm_active_com_id;
    if (oldId != id) {
      _com.find(".cover").show();
      if (oldId) {
        let _oldCom = $(`#${oldId}`);
        let order = _oldCom.data("order");
        if (order !== undefined) {
          _oldCom.css({ "z-index": order });
        }
      }
    }
    let order = _com.css("z-index");
    _com.data("order", order);
    if (length < 2) {
      _com.css({ "z-index": 999999 });
    }
    WidgetList.active(id, flag);
  }
  // 激活选中
  static actives(ids) {
    ids.forEach(id => {
      Canvas.active(id);
    });
  }
  // 优化显示
  static optimize() {
    //当组件数量大于200的时候 才进行显隐处理
    if (Count.count > Constants.widgetMaxCount) {
      $(".bm-component-com:not(.active)").addClass("hide");
    }
  }

  static setHistoryIndex(item) {
    $vm.$store.commit("canvas/setHistoryIndex", item);
  }
  //获取历史记录索引
  static getHistoryIndex() {
    return $vm.$store.getters["canvas/getHistoryIndex"];
  }

  static getHistoryList() {
    return Canvas.historyList || [];
  }

  static setPreviewData(item) {
    if (item) {
      bmCommon.setItem(
        Constants.LOCALSTORAGEKEY.USERKEY.PREVIEWDATA,
        JSON.stringify(item)
      );
    } else {
      bmCommon.removeItem(Constants.LOCALSTORAGEKEY.USERKEY.PREVIEWDATA);
    }
    Canvas.previewData = Object.freeze(item);
  }
  static getPreviewData() {
    let { previewData = [] } = Canvas;
    if (!previewData || previewData.length < 1) {
      previewData = bmCommon.getItem(
        Constants.LOCALSTORAGEKEY.USERKEY.PREVIEWDATA
      );
      previewData = JSON.parse(previewData);
    }
    if (!previewData || previewData.length < 1) {
      previewData = [];
    }
    return previewData || [];
  }
  static setHistoryList(item) {
    let { historyList = [] } = Canvas;
    let histroyIndex = Canvas.getHistoryIndex();
    historyList = historyList.slice(histroyIndex, 20);
    historyList.unshift(item);
    Canvas.historyList = historyList || [];
    Canvas.setHistoryIndex(0);
    $vm.$store.commit(
      "canvas/setHistoryList",
      historyList.map((_, index) => index)
    );
  }

  static clearHistoryList() {
    Canvas.historyList = [];
    $vm.$store.commit("canvas/setHistoryList", []);
  }
  //获取记录数
  static getRecord(id) {
    let { recordMap = {} } = Canvas;
    return recordMap[id] || {};
  }
  static getRecordList(flag) {
    let { recordList = [], recordMap = {} } = Canvas;
    if (!recordList || recordList.length < 1) {
      recordList = bmCommon.getItem(
        Constants.LOCALSTORAGEKEY.USERKEY.RECORDLIST
      );
      recordList = JSON.parse(recordList);
    }
    recordList = JSON.parse(JSON.stringify(recordList));
    if (!recordList) {
      recordList = [];
    }
    recordList.forEach(item => {
      let { id = "" } = item || {};
      recordMap[id] = item;
    });
    if (flag) {
      return recordList.map(item => {
        let { id = "", name = "", img = "", time = "", type = "" } = item;
        return {
          id,
          name,
          time,
          img,
          type
        };
      });
    }
    return recordList || [];
  }

  static clear() {
    window.bm_active_com_id = "";
    window.bm_active_com_ids = [];
    $("#canvas_content").html("");
    $("#info_com_list_box").html("");
    WidgetList.setCount(0);
    let bm_widgetMap = window.bm_widgetMap;
    for (let i in bm_widgetMap) {
      let obj = bm_widgetMap[i];
      if (obj.destory) {
        obj.destory();
      }
    }
    window.bm_widgetMap = {};
  }

  static setRecordList(recordList) {
    //先保存在本地  最多保存20条记录  若已满20条先删除自动保存的记录
    // let recordList = Canvas.getRecordList();
    if (recordList) {
      // recordList.push(item);
      let { length = 0 } = recordList || [];
      if (length > 20) {
        let index = length - 1;
        let obj = recordList[index] || {};
        let { type = "" } = obj || {};
        while (type != "auto") {
          index--;
          if (index < 0) {
            break;
          }
          obj = recordList[index] || {};
          type = obj.type;
          bmCommon.log("不存在自动保存记录则继续查找");
        }
        if (type == "auto") {
          recordList.splice(index, 1);
        }
      }
      bmCommon.setItem(
        Constants.LOCALSTORAGEKEY.USERKEY.RECORDLIST,
        JSON.stringify(recordList)
      );
    } else {
      bmCommon.removeItem(Constants.LOCALSTORAGEKEY.USERKEY.RECORDLIST);
    }
    Canvas.recordList = Object.freeze(recordList);
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
  //设置选中组件
  static setActiveComs(ids) {
    window.bm_active_com_ids = ids;
    $vm.$store.commit("canvas/setActiveComs", ids);
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
  static getWidgetIndexList() {
    return $vm.$store.getters["canvas/getWidgetList"] || [];
  }
  static getWidgetList() {
    // return $vm.$store.getters["canvas/getWidgetList"] || [];
    let widgetList = [];
    let bm_widgetMap = window.bm_widgetMap;
    for (let i in bm_widgetMap) {
      let obj = bm_widgetMap[i];
      let { info = {} } = obj || {};
      let { parentId = "" } = info || {};
      if (!parentId) {
        widgetList.push(info);
      }
    }
    return widgetList;
  }

  static getOrders() {
    let orders = [];
    let bm_widgetMap = window.bm_widgetMap;
    for (let i in bm_widgetMap) {
      let obj = bm_widgetMap[i];
      let { info = {} } = obj || {};
      let { order = 1, parentId = "" } = info || {};
      if (!parentId) {
        orders.push(order);
      }
    }
    return orders;
  }

  //历史记录比对 widgetList 需要和上一次比对的组件列表
  static historyCompareOperate(historyData) {
    // currentList.forEach()
    let widgetListMap = {};
    // widgetList.forEach(item => {
    //   let { id = "" } = item || {};
    //   widgetListMap[id] = item;
    // });
    let { canvas = {}, widgetList = [] } = historyData || {};
    // let { isNew = false } = canvas || {};
    let currentCanvas = Canvas.getCanvas();
    // let { isNew: currentIsNew = false } = currentCanvas || {};
    let bm_widgetMap = window.bm_widgetMap;
    let currentList = Canvas.getWidgetList();
    // let { length = 0 } = currentList || []; //当前组件数
    // let { length: len = 0 } = widgetList || []; //历史组件数
    if (JSON.stringify(currentCanvas) !== JSON.stringify(canvas)) {
      Canvas.setCanvas(canvas);
    }
    // // count 为0 说明组件全部为新的
    // if (isNew === currentIsNew) {
    // let count = 0;
    // if (len > length) {
    widgetList.forEach(item => {
      let { id = "" } = item || {};
      let obj = bm_widgetMap[id];
      let { info } = obj || {};
      widgetListMap[id] = item;
      //存在
      if (info) {
        let index = currentList.findIndex(item => item.id == id);
        //存在则删除  后面比较则不再比较
        if (index > -1) {
          currentList.splice(index, 1);
        }
        // count++;
        if (JSON.stringify(info) !== JSON.stringify(item)) {
          //相等则不处理
          bmCommon.log("不相等,历史id=", item.id, "--当前id=", info.id);
          Canvas.refresh(item);
        }
        return false;
      } else {
        Canvas.append(item);
      }
      // // 与当前比 不存在则删除
      // Canvas.remove(id);
    });
    currentList.forEach(item => {
      let { id = "" } = item || {};
      let info = widgetListMap[id];
      //存在
      if (info) {
        if (JSON.stringify(info) !== JSON.stringify(item)) {
          //相等则不处理
          bmCommon.log("不相等,历史id=", item.id, "--当前id=", info.id);
          Canvas.refresh(info);
        }
        return false;
      } else {
        Canvas.remove(id);
      }
    });
    // window.bm_widgetMap = widgetListMap;
    // } else {
    //   widgetList.forEach(item => {
    //     let { id = "" } = item || {};
    //     widgetListMap[id] = item;
    //   });
    //   currentList.forEach(item => {
    //     let { id = "" } = item || {};
    //     let info = widgetListMap[id];
    //     //存在
    //     if (info) {
    //       // count++;
    //       if (JSON.stringify(info) !== JSON.stringify(item)) {
    //         //相等则不处理
    //         bmCommon.log("不相等,历史id=", info.id, "--当前id=", item.id);
    //         Canvas.refresh(info);
    //         // Canvas.append(info);
    //       }
    //       return false;
    //     } else {
    //       // 与当前比 不存在则删除
    //       Canvas.remove(id);
    //     }
    //   });
    // }
    // }
    // else {
    //   Canvas.clear()
    //   widgetList.forEach(item => {
    //     Canvas.append(item);
    //   });
    // }
    // for (let i in bm_widgetMap) {
    //   let obj = bm_widgetMap[i];
    //   let { info = {} } = obj || {};
    //   let { order = 1, parentId = "" ,id=""} = info || {};
    //   if(widgetListMap[id]){
    //     continue
    //   }
    //   if (!parentId) {
    //   }
    // }
  }

  static refresh(item) {
    let { id = "" } = item || {};
    let bm_widgetMap = window.bm_widgetMap;
    let obj = bm_widgetMap[id];
    obj?.setInfo(item);
    obj?.refresh();
  }

  static event() {}
}

if (process.env.NODE_ENV !== "production") {
  window.Canvas = Canvas;
}

export default Canvas;

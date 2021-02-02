/* eslint-disable no-undef */
// import { URL } from "@/common/env";
import bmCommon from "@/common/common";
// import { post, get } from "@/store/axios";
import { Constants } from "@/common/env";
const gradientStyle = {
  type: "linear", //渐变类型  linear 线性  radial 径向
  angle: 0,
  center: "50% 50%",
  values: [0, 100],
  radialShape: "circle",
  valueIndex: 0,
  valueOptions: [
    //   {
    //   // disabled: true
    // }, {
    //   // disabled: true
    // }
  ],
  valueList: [
    { code: "#108cee", value: 0 },
    { code: "#545fc8", value: 100 }
  ]
};
export default {
  namespaced: true, //必须加它不然报错
  strict: process.env.NODE_ENV !== "production",
  state: {
    // deviceCategTree: null,
    // financePricingStrategiesCacheMap: null,
    // 画布缩放值
    zoom: 1,
    boxZoom: 1,
    historyIndex: 0, //撤销恢复记录游标
    historyList: [], //撤销恢复记录
    recordList: [], //记录点
    canvasData: null, //画布数据
    showType: "edit", //当前显示类型  edit  编辑   preview 预览  view 查看
    selectBox: {
      moving: false, //是否显示
      left: 0,
      top: 0,
      width: 0,
      height: 0
    },
    leftMenuStatus: true, //左侧菜单展开状态
    rightMenuStatus: true, //右侧菜单展开状态
    //连接点信息
    linkPoint: null,
    canvas: {
      type: "canvas", //画布
      name: "组态",
      left: 0,
      top: 0,
      action: "select", //操作方式
      width: 0, //画布宽
      height: 0, //画布高
      poster: "", //封面图
      pageColor: "", //页面背景颜色
      uploadPoster: "", //上传封面图
      backgroundType: "purity", //纯色和渐变色 purity  纯色  gradients 渐变色
      gradientStyle,
      backgroundColor: "#fff", //画布背景颜色
      backgroundImage: "", //画布背景图片
      backgroundSize: "",
      backgroundRepeat: "no-repeat", //背景图片是否平铺
      isGrid: true, //是否显示网格
      scaleable: false, //是否显示缩放
      locked: false, //是否可拖动 是否锁定
      alignLineable: true, //是否显示对齐线
      page: {
        gradientStyle,
        backgroundType: "purity", //纯色和渐变色 purity  纯色  gradients 渐变色
        backgroundImage: "", //画布背景图片
        backgroundSize: "",
        backgroundRepeat: "no-repeat" //背景图片是否平铺
      },
      gridStyle: {
        type: "1",
        width: 20,
        height: 20
      }
    },
    // 选中组件对象
    activeCom: {},
    //多选组件对象
    activeComs: [],
    // 选中组件对象id
    // activeComId: "",
    // 组件列表
    widgetList: [],
    previewData: [],
    originX: 0, // 选中元件的横向初始值
    originY: 0, // 选中元件的纵向初始值
    startX: 0, // 鼠标摁下时的横坐标
    startY: 0, // 鼠标摁下时的纵坐标
    moving: false, // 是否正在移动元件（参考线仅在移动元件时显示）
    draging: false // 创建组件正在拖动
    // financeEnterpriserProvincesCacheMap: null
  },
  getters: {
    getCanvas(state) {
      return state.canvas;
    },
    getShowType(state) {
      return state.showType;
    },
    getLeftMenuStatus(state) {
      return state.leftMenuStatus;
    },
    getRightMenuStatus(state) {
      return state.rightMenuStatus;
    },
    getLinkPoint(state) {
      return state.linkPoint;
    },
    getSelectBox(state) {
      return state.selectBox;
    },
    getMoving(state) {
      return state.moving;
    },
    getDraging(state) {
      return state.draging;
    },
    getHistoryList(state) {
      return state.historyList;
    },
    getHistoryIndex(state) {
      return state.historyIndex;
    },
    getRecordList(state) {
      let recordList = state.recordList;
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
      return recordList;
    },
    getCanvasData(state) {
      let canvasData = state.canvasData;
      if (!canvasData) {
        canvasData = bmCommon.getItem(
          Constants.LOCALSTORAGEKEY.USERKEY.CANVASDATA
        );
        canvasData = JSON.parse(canvasData);
      }
      canvasData = JSON.parse(JSON.stringify(canvasData));
      if (!canvasData) {
        canvasData = [];
      }
      return canvasId => {
        if (!canvasId) {
          return canvasData || {};
        }
      };
    },
    //获取画布缩放值
    getZoom(state) {
      return state.zoom;
    },
    //获取画布缩放值
    getBoxZoom(state) {
      return state.boxZoom;
    },
    //获取选中组件对象
    getActiveCom(state) {
      return state.activeCom || {};
    },
    //获取多选组件对象
    getActiveComs(state) {
      return state.activeComs || [];
    },
    //获取选中对象id
    getPreviewData(state) {
      let previewData = state.previewData;
      if (!previewData || previewData.length < 1) {
        previewData = bmCommon.getItem(
          Constants.LOCALSTORAGEKEY.USERKEY.PREVIEWDATA
        );
        previewData = JSON.parse(previewData);
      }
      if (!previewData || previewData.length < 1) {
        previewData = [];
      }
      return previewData;
    },
    //获取选中对象id
    getWidgetList(state) {
      return state.widgetList || [];
    }
  },
  mutations: {
    setCanvas(state, item) {
      state.canvas = item;
    },
    setMoving(state, item) {
      state.moving = item;
    },
    setShowType(state, item) {
      state.showType = item;
    },
    setLinkPoint(state, item) {
      state.linkPoint = item;
    },
    setLeftMenuStatus(state, item) {
      state.leftMenuStatus = item;
    },
    setRightMenuStatus(state, item) {
      state.rightMenuStatus = item;
    },
    setSelectBox(state, item) {
      state.selectBox = item;
    },
    //设置画布缩放值
    setZoom(state, item) {
      state.zoom = item;
    },
    //设置画布缩放值
    setBoxZoom(state, item) {
      state.boxZoom = item;
    },
    //设置组件初始拖动状态
    setDraging(state, item) {
      state.draging = item;
    },
    //设置选中对象
    setActiveCom(state, item) {
      state.activeCom = item;
    },
    //设置选中对象
    setActiveComs(state, item) {
      state.activeComs = item;
    },
    //设置选中对象
    setPreviewData(state, item) {
      if (item) {
        bmCommon.setItem(
          Constants.LOCALSTORAGEKEY.USERKEY.PREVIEWDATA,
          JSON.stringify(item)
        );
      } else {
        bmCommon.removeItem(Constants.LOCALSTORAGEKEY.USERKEY.PREVIEWDATA);
      }
      state.previewData = item;
    },
    setWidgetList(state, item) {
      state.widgetList = item;
    },
    setHistoryList(state, item) {
      //先保存在内存  最多保存20条记录
      state.historyList = item.slice(0, 20);
    },
    setHistoryIndex(state, item) {
      state.historyIndex = item;
    },
    setRecordList(state, item) {
      //先保存在本地  最多保存20条记录  若已满20条先删除自动保存的记录
      if (item) {
        if (item.length > 20) {
          let index = item.length - 1;
          let obj = item[index] || {};
          let { type = "" } = obj || {};
          while (type != "auto") {
            index--;
            if (index < 0) {
              break;
            }
            obj = item[index] || {};
            type = obj.type;
            bmCommon.log("不存在自动保存记录则继续查找");
          }
          if (type == "auto") {
            item.splice(index, 1);
          }
        }
        bmCommon.setItem(
          Constants.LOCALSTORAGEKEY.USERKEY.RECORDLIST,
          JSON.stringify(item)
        );
      } else {
        bmCommon.removeItem(Constants.LOCALSTORAGEKEY.USERKEY.RECORDLIST);
      }
      state.recordList = item;
    },
    setCanvasData(state, item) {
      if (item) {
        bmCommon.setItem(
          Constants.LOCALSTORAGEKEY.USERKEY.CANVASDATA,
          JSON.stringify(item)
        );
      } else {
        bmCommon.removeItem(Constants.LOCALSTORAGEKEY.USERKEY.CANVASDATA);
      }
      state.canvasData = item;
    },
    // 设置 mousemove 操作的初始值
    initMove(state, item = {}) {
      let {
        startX,
        startY,
        originX,
        originY,
        originWidth,
        originHeight,
        originRotate
      } = item || {};
      state.startX = startX;
      state.startY = startY;
      state.originX = originX;
      state.originY = originY;
      state.originWidth = originWidth;
      state.originRotate = originRotate;
      state.originHeight = originHeight;
      state.moving = true;
    },

    // 元件移动结束
    stopMove(state) {
      state.moving = false;
    },

    // 移动元件
    moving(state, item) {
      let { x, y } = item || {};
      let {
        startX,
        startY,
        activeComs = [],
        activeCom = {},
        zoom
        // originX,
        // originY
      } = state;
      // var target = state.activeCom;
      var dx = x - startX;
      var dy = y - startY;
      // bmCommon.error(dx, dy);
      if (!(Math.abs(dx) > 1 || Math.abs(dy) > 1)) {
        return;
      }
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
        // left = originX + Math.floor((dx * 1) / zoom);
        // var top = originY + Math.floor((dy * 1) / zoom);
        // bmCommon.log(left , Math.floor(dx  / zoom),dx,dy)
        activeCom.left = left + Math.floor(dx / zoom);
        activeCom.top = top + Math.floor(dy / zoom);
        // $(`#box_${id}`).css({ left, top });
      }
      state.startX = x;
      state.startY = y;
      // bmCommon.log(left, top, activeCom);
    },
    // 移动画布
    canvasMoving(state, item) {
      let { x, y } = item || {};
      let { startX, startY, canvas, zoom, originX, originY } = state;
      // var target = state.activeCom;
      var dx = x - startX;
      var dy = y - startY;
      // var left = state.originX + Math.floor((dx * 100) / state.zoom);
      // var top = state.originY + Math.floor((dy * 100) / state.zoom);
      var left = originX + Math.floor(dx / zoom);
      var top = originY + Math.floor(dy / zoom);
      // bmCommon.log(left, top);
      if (left > 0) {
        left = 0;
      }
      if (top > 0) {
        top = 0;
      }
      canvas.left = left;
      canvas.top = top;
      // bmCommon.log(left, top, activeCom);
    }
  },
  actions: {
    async selectCom(context, id) {
      let { state = {} } = context;
      let {
        // widgetList = [],
        canvas = {},
        activeCom = {},
        activeComs = []
      } = state;
      // activeCom.showCoverStatus = true;
      if (!id) {
        activeCom = canvas;
        context.commit("setActiveCom", activeCom);
        context.commit("setActiveComs", []);
      } else {
        let index = activeComs.findIndex(item => item.id == id);
        if (index < 0) {
          //如果未找到当前组件 在已选组件中 说明选择新组件  清除多选组件
          activeComs = [activeCom];
          // context.commit("setActiveComs", activeComs);
        }
        let comId = `box_${id}`;
        let com = document.getElementById(comId);
        if (com) {
          let _vue = com.__vue__;
          activeCom = _vue.info;
        }
        // try {
        //   widgetList.forEach(item => {
        //     let { children = [], id: _id = "" } = item || {};
        //     if (_id == id) {
        //       activeCom = item;
        //       throw new Error("找到对应的组件");
        //     } else {
        //       if (children && children.length > 0) {
        //         let _activeCom = children.find(_item => {
        //           return _item.id == id;
        //         });
        //         if (_activeCom) {
        //           activeCom = _activeCom;
        //           throw new Error("找到对应的组件");
        //         }
        //       }
        //     }
        //   });
        // } catch (error) {
        //   bmCommon.warn(error);
        // }
        let { length = 0 } = activeComs || [];
        let { type = "" } = activeCom || {};
        if ((length < 2 && activeCom) || type == "panel") {
          activeCom.showCoverStatus = true;
          context.commit("setActiveCom", activeCom);
          context.commit("setActiveComs", [activeCom]);
        }
      }
    },
    async selectComs(context, id) {
      let { state = {} } = context;
      let {
        widgetList = [],
        canvas = {},
        activeComs = [],
        activeCom = {}
      } = state;
      let fIndex = activeComs.findIndex(item => item.locked);
      if (fIndex > -1) {
        activeComs.splice(fIndex, 1);
      }
      if (!id) {
        let { length = 0 } = activeComs || [];
        activeComs.splice(0, length);
        return;
      }
      // let { id: _id = "" } = activeCom || {};
      // let index=activeComs.findIndex(item=>item.id==_id)
      // if (_id && index<0) {
      //   activeComs.push(activeCom);
      // }
      let index = activeComs.findIndex(item => item.id == id);
      // bmCommon.log(index, "-------");
      //如果在已选中组件内找到则移除
      if (index > -1) {
        activeComs.splice(index, 1);
      } else {
        //未找到则添加
        let activeCom = widgetList.find(item => item.id == id);
        if (activeCom) {
          activeComs.push(activeCom);
        }
      }
      let { length = 0 } = activeComs || [];
      if (length > 0) {
        [activeCom = {}] = activeComs || [];
      } else {
        activeCom = canvas;
      }
      context.commit("setActiveCom", activeCom);
      // context.commit("setActiveComs", activeComs);
      // context.commit("setActiveCom", activeCom);
    },
    async createRecord(context, item) {
      let { img = "" } = item || {};
      let { getters = {} } = context;
      let { getRecordList: recordList = [], getWidgetList: widgetList = [] } =
        getters || {};
      let date = moment();
      let time = date.valueOf();
      let id = bmCommon.uuid();
      recordList.unshift({
        id,
        name: date.format("MM/DD/YYYY HH:mm:ss A"),
        time,
        img,
        type: "auto", //自动记录
        widgetList: bmCommon.clone(widgetList)
      });
      context.commit("setRecordList", recordList);
    },
    async createHistory(context) {
      let { getters = {} } = context;
      let {
        getWidgetList: widgetList = [],
        getHistoryList: historyList = [],
        getCanvas: canvas = {}
      } = getters || {};
      historyList.unshift(bmCommon.clone(widgetList));
      context.commit("setHistoryList", historyList);
      context.commit("setHistoryIndex", 0);
      context.commit("setPreviewData", {
        widgetList,
        canvas
      });
    }
  }
};

/* eslint-disable no-undef */
// import { URL } from "@/common/env";
import bmCommon from "@/common/common";
// import { post, get } from "@/store/axios";
import { Constants } from "@/common/env";
// const gradientStyle = {
//   type: "linear", //渐变类型  linear 线性  radial 径向
//   angle: 0,
//   center: "50% 50%",
//   values: [0, 100],
//   radialShape: "circle",
//   valueIndex: 0,
//   valueOptions: [
//     //   {
//     //   // disabled: true
//     // }, {
//     //   // disabled: true
//     // }
//   ],
//   valueList: [
//     { code: "#108cee", value: 0 },
//     { code: "#545fc8", value: 100 }
//   ]
// };
export default {
  namespaced: true, //必须加它不然报错
  strict: process.env.NODE_ENV !== "production",
  state: {
    // 画布缩放值
    zoom: 1,
    boxZoom: 1,
    historyIndex: 0, //撤销恢复记录游标
    historyList: [], //撤销恢复记录
    // recordList: [], //记录点
    // canvasData: null, //画布数据
    // showType: "edit", //当前显示类型  edit  编辑   preview 预览  view 查看
    // selectBox: {
    //   moving: false, //是否显示
    //   left: 0,
    //   top: 0,
    //   width: 0,
    //   height: 0
    // },
    leftMenuStatus: true, //左侧菜单展开状态
    rightMenuStatus: true, //右侧菜单展开状态
    //连接点信息
    // linkPoint: null,
    canvas: Constants.COMPONENTCANVAS,
    // 选中组件对象
    activeCom: {},
    //多选组件对象
    activeComs: [],
    // 组件列表
    widgetList: []
  },
  getters: {
    getCanvas(state) {
      return state.canvas;
    },
    getLeftMenuStatus(state) {
      return state.leftMenuStatus;
    },
    getRightMenuStatus(state) {
      return state.rightMenuStatus;
    },
    getSelectBox(state) {
      return state.selectBox;
    },
    getHistoryList(state) {
      return state.historyList;
    },
    getHistoryIndex(state) {
      return state.historyIndex;
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
    getWidgetList(state) {
      return state.widgetList || [];
    }
  },
  mutations: {
    setCanvas(state, item) {
      state.canvas = item;
    },
    setLeftMenuStatus(state, item) {
      state.leftMenuStatus = item;
    },
    setRightMenuStatus(state, item) {
      state.rightMenuStatus = item;
    },
    //设置画布缩放值
    setZoom(state, item) {
      state.zoom = item;
    },
    //设置画布缩放值
    setBoxZoom(state, item) {
      state.boxZoom = item;
    },
    //设置选中对象
    setActiveCom(state, item) {
      let { activeCom = {} } = state || {};
      bmCommon.log("setActiveCom,===", (item || {}).type);
      if (item) {
        let { comName = "", name = "" } = item || {};
        item.comName = comName || name;
        if (JSON.stringify(activeCom) !== JSON.stringify(item)) {
          state.activeCom = item;
        }
      } else {
        state.activeCom = item;
      }
    },
    //设置选中对象
    setActiveComs(state, item) {
      state.activeComs = item;
    },
    setWidgetList(state, item) {
      state.widgetList = Object.freeze(item);
    },
    setHistoryList(state, item) {
      //先保存在内存  最多保存20条记录
      state.historyList = Object.freeze(item.slice(0, 20));
    },
    setHistoryIndex(state, item) {
      state.historyIndex = item;
    }
  },
  actions: {}
};

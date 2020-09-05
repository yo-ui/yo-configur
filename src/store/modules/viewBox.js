// import { URL } from "@/common/env";
import bmCommon from "@/common/common";
// import { post, get } from "@/store/axios";
// import { Constants } from "@/common/env";
export default {
  namespaced: true, //必须加它不然报错
  strict: process.env.NODE_ENV !== "production",
  state: {
    // deviceCategTree: null,
    // financePricingStrategiesCacheMap: null,
    // 画布缩放值
    zoom: 1,
    viewBox: {
      type: "canvas" //画布
    },
    // 选中组件对象
    activeCom: {},
    // 选中组件对象id
    // activeComId: "",
    // 组件列表
    widgetList: "",
    originX: 0, // 选中元件的横向初始值
    originY: 0, // 选中元件的纵向初始值
    startX: 0, // 鼠标摁下时的横坐标
    startY: 0, // 鼠标摁下时的纵坐标
    moving: false // 是否正在移动元件（参考线仅在移动元件时显示）
    // financeEnterpriserProvincesCacheMap: null
  },
  getters: {
    // //获取缓存数据对象
    // getDeviceTypeCategoryList(state) {
    //   let deviceTypeCategoryList = state.deviceTypeCategoryList || [];
    //   return deviceTypeCategoryList || [];
    // },
    getViewBox(state) {
      return state.viewBox;
    },
    //获取画布缩放值
    getZoom(state) {
      return state.zoom;
    },
    // //获取选中对象id
    // getActiveComId(state) {
    //   return state.activeComId;
    // },
    //获取选中对象id
    getActiveCom(state) {
      return state.activeCom;
    },
    //获取选中对象id
    getWidgetList(state) {
      return state.widgetList;
    }
    // //获取缓存数据对象
    // getDeviceCategTree(state) {
    //   return state.deviceCategTree || [];
    // }
    // //获取缓存数据对象
    // getDevicePointOptionalsCacheMap(state) {
    //   let devicePointOptionalsCacheMap = state.devicePointOptionalsCacheMap || {};
    //   return key => {
    //     return devicePointOptionalsCacheMap[key];
    //   };
    // }
    // //获取缓存数据对象
    // getProjectListCacheMap(state) {
    //   let projectListCacheMap = state.projectListCacheMap || {};
    //   return key => {
    //     return projectListCacheMap[key];
    //   };
    // }
    // //获取缓存数据对象
    // getFinanceEnterpriserProvincesCacheMap(state) {
    //   let financeEnterpriserProvincesCacheMap =
    //     state.financeEnterpriserProvincesCacheMap || {};
    //   if (!financeEnterpriserProvincesCacheMap) {
    //     financeEnterpriserProvincesCacheMap = bmCommon.getItem(
    //       Constants.LOCALSTORAGEKEY.FINANCIALENTERPRISERPROVINCECITIES
    //     );
    //     financeEnterpriserProvincesCacheMap = JSON.parse(
    //       financeEnterpriserProvincesCacheMap
    //     );
    //   }
    //   financeEnterpriserProvincesCacheMap = JSON.parse(
    //     JSON.stringify(financeEnterpriserProvincesCacheMap)
    //   );
    //   if (!financeEnterpriserProvincesCacheMap) {
    //     financeEnterpriserProvincesCacheMap = {};
    //   }
    //   return key => {
    //     return financeEnterpriserProvincesCacheMap[key];
    //   };
    // }
  },
  mutations: {
    // //设置缓存对象
    // setDeviceTypeCategoryList(state, item = []) {
    //   state.deviceTypeCategoryList = item || [];
    // },
    setViewBox(state, item) {
      state.viewBox = item;
    },
    // //选择取消组件选中
    // selectCom(state,id){
    //   let {widgetList=[]}=state
    //   let activeCom=widgetList.find(item=>item.id==id)
    // },
    //设置画布缩放值
    setZoom(state, item) {
      state.zoom = item;
    },
    // //设置选中对象id
    // setActiveComId(state, item) {
    //   state.activeComId = item;
    // },
    //设置选中对象
    setActiveCom(state, item) {
      state.activeCom = item;
    },
    //设置选中对象
    setWidgetList(state, item) {
      state.widgetList = item;
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
    stopmove(state) {
      state.moving = false;
    },

    // 移动元件
    moving(state, item) {
      let { x, y } = item || {};
      let { startX, startY, activeCom, zoom, originX, originY } = state;
      // var target = state.activeCom;
      var dx = x - startX;
      var dy = y - startY;
      // var left = state.originX + Math.floor((dx * 100) / state.zoom);
      // var top = state.originY + Math.floor((dy * 100) / state.zoom);
      var left = originX + Math.floor((dx * 1) / zoom);
      var top = originY + Math.floor((dy * 1) / zoom);
      activeCom.left = left > 0 ? left : 0;
      activeCom.top = top > 0 ? top : 0;
      bmCommon.log(left, top, activeCom);
    },

    // 调整元件尺寸
    resize(state, item) {
      let { x, y, type = "" } = item || {};
      let {
        startX,
        startY,
        // originX,
        // originY,
        zoom,
        activeCom,
        originWidth,
        originHeight,
        originRotate
      } = state;
      var dx = x - startX;
      var dy = y - startY;
      let value, width, height, rotate;

      if (type === "right") {
        value = originWidth + Math.floor((dx * 1) / zoom);
        if (value > 10) {
          activeCom.width = value;
        }
        return;
      }

      if (type === "top") {
        // top = originY + Math.floor((dy * 1) / zoom);
        height = originHeight - Math.floor((dy * 1) / zoom);
        if (height > 10) {
          activeCom.top -= Math.floor((height - activeCom.height) / 2);
          activeCom.height = height > 10 ? height : 10;
        }
      }

      if (type === "bottom") {
        value = originHeight + Math.floor((dy * 1) / zoom);
        if (value > 10) {
          activeCom.height = value > 10 ? value : 10;
        }
        return;
      }

      if (type === "left") {
        // left = originX + Math.floor((dx * 1) / zoom);
        width = originWidth - Math.floor((dx * 1) / zoom);
        if (width > 10) {
          activeCom.left -= Math.floor((width - activeCom.width) / 2);
          activeCom.width = width > 10 ? width : 10;
        }
        return;
      }

      if (type === "topleft") {
        // left = originX + Math.floor((dx * 1) / zoom);
        width = originWidth - Math.floor((dx * 1) / zoom);
        // top = originY + Math.floor((dy * 1) / zoom);
        height = originHeight - Math.floor((dy * 1) / zoom);
        // activeCom.top = top > 0 ? top : 0;
        // activeCom.left = left > 0 ? left : 0;
        if (width > 10 && height > 10) {
          activeCom.left -= Math.floor((width - activeCom.width) / 2);
          activeCom.top -= Math.floor((height - activeCom.height) / 2);
          activeCom.height = height > 10 ? height : 10;
          activeCom.width = width > 10 ? width : 10;
        }
        return;
      }
      if (type === "topright") {
        // left = originX + Math.floor((dx * 1) / zoom);
        width = originWidth + Math.floor((dx * 1) / zoom);
        // top = originX + Math.floor((dy * 1) / zoom);
        height = originHeight - Math.floor((dy * 1) / zoom);
        // activeCom.top = top > 0 ? top : 0;
        // activeCom.left = left > 0 ? left : 0;
        if (width > 10 && height > 10) {
          activeCom.left -= Math.floor((width - activeCom.width) / 2);
          activeCom.top -= Math.floor((height - activeCom.height) / 2);
          activeCom.height = height > 10 ? height : 10;
          activeCom.width = width > 10 ? width : 10;
        }
        return;
      }

      if (type === "bottomleft") {
        height = originHeight + Math.floor((dy * 1) / zoom);
        width = originWidth - Math.floor((dx * 1) / zoom);
        // top = originY + Math.floor((dy * 1) / zoom);
        // left = originX + Math.floor((dx * 1) / zoom);
        // activeCom.top = top > 0 ? top : 0;
        // activeCom.left = left > 0 ? left : 0;
        if (width > 10 && height > 10) {
          activeCom.left -= Math.floor((width - activeCom.width) / 2);
          activeCom.top -= Math.floor((height - activeCom.height) / 2);
          activeCom.height = height > 10 ? height : 10;
          activeCom.width = width > 10 ? width : 10;
        }
        return;
      }
      if (type === "bottomright") {
        // top = originY + Math.floor((dy * 1) / zoom);
        height = originHeight + Math.floor((dy * 1) / zoom);
        // left = originX + Math.floor((dx * 1) / zoom);
        width = originWidth + Math.floor((dx * 1) / zoom);
        // activeCom.top = top > 0 ? top : 0;
        // activeCom.left = left > 0 ? left : 0;
        if (width > 10 && height > 10) {
          activeCom.left -= Math.floor((width - activeCom.width) / 2);
          activeCom.top -= Math.floor((height - activeCom.height) / 2);
          activeCom.height = height > 10 ? height : 10;
          activeCom.width = width > 10 ? width : 10;
        }
        return;
      }
      if (type === "rotate") {
        // top = originY + Math.floor((dy * 1) / zoom);
        // height = originHeight + Math.floor((dy * 1) / zoom);
        // left = originX + Math.floor((dx * 1) / zoom);
        rotate = originRotate + Math.floor((dx * 1) / zoom);
        // activeCom.top = top > 0 ? top : 0;
        // activeCom.left = left > 0 ? left : 0;
        // activeCom.left -= Math.floor((width - activeCom.width) / 2);
        // activeCom.top -= Math.floor((height - activeCom.height) / 2);
        bmCommon.log(rotate,'----rotate')
        activeCom.rotate = rotate;
        return;
      }
    }
  },
  actions: {
    selectCom(context, id) {
      let { state = {} } = context;
      let { widgetList = [], viewBox = {} } = state;
      let activeCom = widgetList.find(item => item.id == id);
      if (!activeCom) {
        activeCom = viewBox;
      }
      context.commit("setActiveCom", activeCom);
      // context.commit('viewBox/setActiveCom',activeCom)
    }
  }
};

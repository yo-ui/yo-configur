// import { URL } from "@/common/env";
// import bmCommon from "@/common/common";
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
      width: "", //画布宽
      height: "", //画布高
      backgroundType: "purity", //纯色和渐变色 purity  纯色  gradients 渐变色
      gradientStyle: {
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
      },
      backgroundColor: "#fff", //画布背景颜色
      backgroundImage: "", //画布背景图片
      backgroundSize: "",
      backgroundRepeat: "no-repeat", //背景图片是否平铺
      isGrid: true, //是否显示网格
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
    originX: 0, // 选中元件的横向初始值
    originY: 0, // 选中元件的纵向初始值
    startX: 0, // 鼠标摁下时的横坐标
    startY: 0, // 鼠标摁下时的纵坐标
    moving: false // 是否正在移动元件（参考线仅在移动元件时显示）
    // financeEnterpriserProvincesCacheMap: null
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
    getLinkPoint(state) {
      return state.linkPoint;
    },
    getSelectBox(state) {
      return state.selectBox;
    },
    getMoving(state) {
      return state.moving;
    },
    //获取画布缩放值
    getZoom(state) {
      return state.zoom;
    },
    //获取选中组件对象
    getActiveCom(state) {
      return state.activeCom;
    },
    //获取多选组件对象
    getActiveComs(state) {
      return state.activeComs;
    },
    //获取选中对象id
    getWidgetList(state) {
      return state.widgetList;
    }
  },
  mutations: {
    setCanvas(state, item) {
      state.canvas = item;
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
    //设置选中对象
    setActiveCom(state, item) {
      state.activeCom = item;
    },
    //设置选中对象
    setActiveComs(state, item) {
      state.activeComs = item;
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
      // var left = state.originX + Math.floor((dx * 100) / state.zoom);
      // var top = state.originY + Math.floor((dy * 100) / state.zoom);

      let { length = 0 } = activeComs || [];
      if (length > 1) {
        activeComs.forEach(item => {
          let { left = 0, top = 0 } = item || {};
          // item.left = left > 0 ? left : 0;
          // item.top = top > 0 ? top : 0;
          item.left = left + Math.floor((dx * 1) / zoom);
          item.top = top + Math.floor((dy * 1) / zoom);
        });
      } else {
        let { left = 0, top = 0 } = activeCom || {};
        // left = originX + Math.floor((dx * 1) / zoom);
        // var top = originY + Math.floor((dy * 1) / zoom);
        activeCom.left = left + Math.floor((dx * 1) / zoom);
        activeCom.top = top + Math.floor((dy * 1) / zoom);
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
      var left = originX + Math.floor((dx * 1) / zoom);
      var top = originY + Math.floor((dy * 1) / zoom);
      // bmCommon.log(left, top);
      canvas.left = left;
      canvas.top = top;
      // bmCommon.log(left, top, activeCom);
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
      let { equalScaleable = false } = activeCom || {};

      if (type === "right") {
        value = originWidth + Math.floor((dx * 1) / zoom);
        if (value > 10) {
          activeCom.width = value;
          if (equalScaleable) {
            activeCom.height = (originHeight * value) / originWidth;
          }
        }
        return;
      }

      if (type === "top") {
        height = originHeight - Math.floor((dy * 1) / zoom);
        if (height > 10) {
          activeCom.top -= height - activeCom.height;
          activeCom.height = height > 10 ? height : 10;
          if (equalScaleable) {
            activeCom.width = (originWidth * height) / originHeight;
          }
        }
      }

      if (type === "bottom") {
        value = originHeight + Math.floor((dy * 1) / zoom);
        if (value > 10) {
          activeCom.height = value > 10 ? value : 10;
          if (equalScaleable) {
            activeCom.width = (originWidth * value) / originHeight;
          }
        }
        return;
      }

      if (type === "left") {
        width = originWidth - Math.floor((dx * 1) / zoom);
        if (width > 10) {
          activeCom.left -= width - activeCom.width;
          activeCom.width = width > 10 ? width : 10;
          if (equalScaleable) {
            activeCom.height = (originHeight * width) / originWidth;
          }
        }
        return;
      }

      if (type === "topleft") {
        width = originWidth - Math.floor((dx * 1) / zoom);
        height = originHeight - Math.floor((dy * 1) / zoom);
        if (equalScaleable) {
          if (dx > dy) {
            height = (originHeight * width) / originWidth;
          } else {
            width = (originWidth * height) / originHeight;
          }
        }
        if (width > 10 && height > 10) {
          activeCom.left -= (width - activeCom.width) / 2;
          activeCom.top -= (height - activeCom.height) / 2;
          activeCom.height = height > 10 ? height : 10;
          activeCom.width = width > 10 ? width : 10;
        }
        return;
      }
      if (type === "topright") {
        width = originWidth + Math.floor((dx * 1) / zoom);
        height = originHeight - Math.floor((dy * 1) / zoom);
        if (equalScaleable) {
          if (dx > dy) {
            height = (originHeight * width) / originWidth;
          } else {
            width = (originWidth * height) / originHeight;
          }
        }
        if (width > 10 && height > 10) {
          activeCom.left -= (width - activeCom.width) / 2;
          activeCom.top -= (height - activeCom.height) / 2;
          activeCom.height = height > 10 ? height : 10;
          activeCom.width = width > 10 ? width : 10;
        }
        return;
      }

      if (type === "bottomleft") {
        height = originHeight + Math.floor((dy * 1) / zoom);
        width = originWidth - Math.floor((dx * 1) / zoom);
        if (equalScaleable) {
          if (dx > dy) {
            height = (originHeight * width) / originWidth;
          } else {
            width = (originWidth * height) / originHeight;
          }
        }
        if (width > 10 && height > 10) {
          activeCom.left -= Math.floor((width - activeCom.width) / 2);
          activeCom.top -= Math.floor((height - activeCom.height) / 2);
          activeCom.height = height > 10 ? height : 10;
          activeCom.width = width > 10 ? width : 10;
        }
        return;
      }
      if (type === "bottomright") {
        height = originHeight + Math.floor((dy * 1) / zoom);
        width = originWidth + Math.floor((dx * 1) / zoom);
        if (equalScaleable) {
          if (dx > dy) {
            height = (originHeight * width) / originWidth;
          } else {
            width = (originWidth * height) / originHeight;
          }
        }
        if (width > 10 && height > 10) {
          activeCom.left -= Math.floor((width - activeCom.width) / 2);
          activeCom.top -= Math.floor((height - activeCom.height) / 2);
          activeCom.height = height > 10 ? height : 10;
          activeCom.width = width > 10 ? width : 10;
        }
        return;
      }
      if (type === "rotate") {
        rotate = (originRotate + Math.floor((dx * 1) / zoom)) % 360;
        activeCom.rotate = rotate;
        return;
      }
    }
  },
  actions: {
    selectCom(context, id) {
      let { state = {} } = context;
      let {
        widgetList = [],
        canvas = {},
        activeCom = {},
        activeComs = []
      } = state;
      if (!id) {
        activeCom = canvas;
        context.commit("setActiveCom", activeCom);
      } else {
        let index = activeComs.findIndex(item => item.id == id);
        if (index < 0) {
          //如果未找到当前组件 在已选组件中 说明选择新组件  清除多选组件
          context.commit("setActiveComs", []);
        }
        activeCom = widgetList.find(item => item.id == id);
        let { length = 0 } = activeComs || [];
        if (length < 2) {
          context.commit("setActiveCom", activeCom);
        }
      }
    },
    selectComs(context, id) {
      let { state = {} } = context;
      let {
        widgetList = [],
        canvas = {},
        activeComs = [],
        activeCom = {}
      } = state;
      if (!id) {
        let { length = 0 } = activeComs || [];
        activeComs.splice(0, length);
        return;
      }
      let { id: _id = "" } = activeCom || {};
      if (_id && _id != id) {
        activeComs.push(activeCom);
      }
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
      activeCom = canvas;
      if (length == 1) {
        [activeCom = {}] = activeComs || [];
      }
      context.commit("setActiveCom", activeCom);
      // context.commit("setActiveCom", activeCom);
      // context.commit("setActiveComs", activeComs);
    }
  }
};

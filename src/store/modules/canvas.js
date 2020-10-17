/* eslint-disable no-undef */
// import { URL } from "@/common/env";
import bmCommon from "@/common/common";
// import { post, get } from "@/store/axios";
import { Constants } from "@/common/env";
export default {
  namespaced: true, //必须加它不然报错
  strict: process.env.NODE_ENV !== "production",
  state: {
    // deviceCategTree: null,
    // financePricingStrategiesCacheMap: null,
    // 画布缩放值
    zoom: 1,
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
    previewData: [],
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
      // var left = state.originX + Math.floor((dx * 100) / state.zoom);
      // var top = state.originY + Math.floor((dy * 100) / state.zoom);

      let { length = 0 } = activeComs || [];
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
      canvas.left = left;
      canvas.top = top;
      // bmCommon.log(left, top, activeCom);
    },

    // 调整元件尺寸
    resize(state, item) {
      let { x, y, direction = "", e = window.event, bmComBox = {} } =
        item || {};
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

      if (direction === "right") {
        value = originWidth + Math.floor((dx * 1) / zoom);
        if (value > 10) {
          activeCom.width = value;
          if (equalScaleable) {
            activeCom.height = (originHeight * value) / originWidth;
          }
        }
        return;
      }

      if (direction === "top") {
        height = originHeight - Math.floor((dy * 1) / zoom);
        if (height > 10) {
          activeCom.top -= height - activeCom.height;
          activeCom.height = height > 10 ? height : 10;
          if (equalScaleable) {
            activeCom.width = (originWidth * height) / originHeight;
          }
        }
      }

      if (direction === "bottom") {
        value = originHeight + Math.floor((dy * 1) / zoom);
        if (value > 10) {
          activeCom.height = value > 10 ? value : 10;
          if (equalScaleable) {
            activeCom.width = (originWidth * value) / originHeight;
          }
        }
        return;
      }

      if (direction === "left") {
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

      if (direction === "topleft") {
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
      if (direction === "topright") {
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

      if (direction === "bottomleft") {
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
      if (direction === "bottomright") {
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
      if (direction === "rotate") {
        // rotate = (originRotate + Math.floor((dx * 1) / zoom)) % 360;
        // var offsetX = containerOffset['left'];
        // var offsetY = containerOffset['top'];
        // var mouseX = ev.pageX - offsetX;//计算出鼠标相对于画布顶点的位置,无pageX时用clientY + body.scrollTop - body.clientTop代替,可视区域y+body滚动条所走的距离-body的border-top,不用offsetX等属性的原因在于，鼠标会移出画布
        // var mouseY = ev.pageY - offsetY;
        // let { left = 0, top = 0, width = 0, height = 0 } = activeCom || {};
        // let cx = left + width / 2;
        // let cy = top + height / 2;
        // let pos = bmCommon.getMousePosition(e);
        // var mouseX = pos.x; //计算出鼠标相对于画布顶点的位置,无pageX时用clientY + body.scrollTop - body.clientTop代替,可视区域y+body滚动条所走的距离-body的border-top,不用offsetX等属性的原因在于，鼠标会移出画布
        // var mouseY = pos.y;
        // var ox = mouseX - cx; //cx,cy为圆心
        // var oy = mouseY - cy;
        // var to = Math.abs(ox / oy);
        // let angle = (Math.atan(to) / (2 * Math.PI)) * 360; //鼠标相对于旋转中心的角度
        // if (ox < 0 && oy < 0) {
        //   //相对在左上角，第四象限，js中坐标系是从左上角开始的，这里的象限是正常坐标系
        //   angle = -angle;
        // } else if (ox < 0 && oy > 0) {
        //   //左下角,3象限
        //   angle = -(180 - angle);
        // } else if (ox > 0 && oy < 0) {
        //   //右上角，1象限
        //   // angle = angle;
        // } else if (ox > 0 && oy > 0) {
        //   //右下角，2象限
        //   angle = 180 - angle;
        // }
        // rotate=angle-originRotate
        // state.originRotate = rotate;
        // let { left = 0, top = 0, width = 0, height = 0 } = activeCom || {};
        // let {left = 0, top = 0, width = 0, height = 0}=bmCom.$el.getBoundingClientRect()
        // // let cx = left + width / 2;
        // // let cx=bmCom.
        // let cx = left + width / 2;
        // let cy = top + height / 2;
        // let pos = bmCommon.getMousePosition(e);
        // var mouseX = pos.x; //计算出鼠标相对于画布顶点的位置,无pageX时用clientY + body.scrollTop - body.clientTop代替,可视区域y+body滚动条所走的距离-body的border-top,不用offsetX等属性的原因在于，鼠标会移出画布
        // var mouseY = pos.y;
        // var ox = Math.abs(mouseX - cx); //cx,cy为圆心
        // var oy = Math.abs(mouseY - cy);
        // // 避免水平和垂直位置的就相当于和坐标轴相交的时候设置除数为0或者不知道为360度还是180度
        // oy === 0 && (oy = 0.01);
        // ox === 0 && (ox = 0.01);
        // rotate = (Math.atan(ox / oy) / (2 * Math.PI)) * 360;

        // // 第一象限
        // if (pos.x > cx && pos.y < cy) {
        //   // console.log("第一象限");
        //   // setRotate(roateBox, degEnd);
        // }
        // // 第二象限
        // if (pos.x > cx && pos.y > cy) {
        //   // console.log("第二象限");
        //   // setRotate(roateBox, (180 - degEnd));
        //   rotate = 180 - rotate;
        // }
        // // 第三象限
        // if (pos.x < cx && pos.y > cy) {
        //   // console.log("第三象限");
        //   // setRotate(roateBox, (degEnd + 180));
        //   rotate = 180 + rotate;
        // }
        // // 第四象限
        // if (pos.x < cx && pos.y < cy) {
        //   // console.log("第四象限");
        //   // setRotate(roateBox, (360 - degEnd));
        //   rotate = 360 - rotate;
        // }
        // state.originRotate = rotate;
        // let { left = 0, top = 0, width = 0, height = 0 } = activeCom || {};
        // let pos = bmCommon.getMousePosition(e);
        // let end = {
        //   x: pos.x - left-(left + width / 2 ),
        //   y: top + height / 2  - (pos.y-top)
        // };
        // let angle = 0;
        // let start = { x: 0, y: 0 };
        // let diff_x = end.x - start.x,
        //   diff_y = end.y - start.y;
        // let value = (360 * Math.atan(diff_y / diff_x)) / (2 * Math.PI);
        // if (diff_x > 0 && diff_y >= 0) {
        //   angle = 90 - value;
        // } else if (diff_x >= 0 && diff_y < 0) {
        //   angle = 90 - value;
        // } else if (diff_x < 0 && diff_y <= 0) {
        //   angle = 270 - value;
        // } else if (diff_x < 0 && diff_y > 0) {
        //   angle = 270 - value;
        // }
        // let rotate = parseInt(angle + 0.5);
        // let { $el = {} } = bmComBox || {};

        let rect = bmComBox?.getBoundingClientRect() || {};
        let { left = 0, top = 0, width = 0, height = 0 } = rect || {};
        let center = { x: left + width / 2, y: top + height / 2 };
        let pos = bmCommon.getMousePosition(e);
        let y0 = startY - center.y,
          x0 = startX - center.x,
          y = pos.y - center.y,
          x = pos.x - center.x;
        let deg = Math.atan2(y, x) - Math.atan2(y0, x0);
        let angle = (180 * deg) / Math.PI;
        rotate = (angle + originRotate) % 360;
        state.startX = pos.x;
        state.startY = pos.y;
        state.originRotate = rotate;
        // bmCommon.log(center, deg, angle);
        // bmComBox.style.transform = `rotate(${rotate}deg)`;
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
        activeCom.showCoverStatus = true;
        activeCom = widgetList.find(item => item.id == id);
        let { length = 0 } = activeComs || [];
        if (length < 2) {
          activeCom.showCoverStatus = true;
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
    },
    createRecord(context, item) {
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
        widgetList
      });
      context.commit("setRecordList", recordList);
    },
    createHistory(context) {
      let { getters = {} } = context;
      let { getWidgetList: widgetList = [], getHistoryList: historyList = [] } =
        getters || {};
      historyList.unshift(bmCommon.clone(widgetList));
      context.commit("setHistoryList", historyList);
      context.commit("setHistoryIndex", 0);
    }
  }
};

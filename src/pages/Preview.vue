<template>
  <div class="bm-preview-page" :style="pageStyle">
    <div class="flex-content">
      <div class="content-box">
        <div class="zoom-box" v-if="canvas.scaleable">
          <el-button-group>
            <el-button @click="zoomEvent(-20)">
              <i class="el-icon-zoom-out"></i>
            </el-button>
            <el-button @click="zoomEvent(0)">
              <i class="el-icon-search"></i>
              {{ parseInt(boxZoom * 100) }}%
            </el-button>
            <el-button @click="zoomEvent(20)">
              <i class="el-icon-zoom-in"></i> </el-button
          ></el-button-group>
        </div>
        <div
          class="view-box"
          ref="viewBox"
          :style="viewBoxStyle"
          v-loading="dataLoadingStatus"
        >
          <div
            class="canvas-box"
            ref="canvasBox"
            :style="canvasStyle"
            :class="canvas.action"
          >
            <div class="bg" :style="bgStyle"></div>
            <div id="canvas_content" class="canvas-content"></div>
            <!-- <template v-for="(item, index) in widgetList">
              <bm-com
                class="preview"
                :data-type="item.type"
                :data-id="item.id"
                :info="item"
                :key="item.id + index"
              >
                <template v-if="item.children && item.children.length > 0">
                  <template v-for="(_item, _index) in item.children">
                    <bm-com
                      class="preview"
                      :data-type="_item.type"
                      :data-id="_item.id"
                      :info="_item"
                      :key="_item.id + _index"
                    >
                    </bm-com>
                  </template>
                </template>
              </bm-com>
            </template> -->
          </div>
        </div>
      </div>
    </div>
    <bm-control ref="bmControl"></bm-control>
    <bm-device-info ref="bmDeviceInfo"></bm-device-info>
    <bm-camera-previewer ref="bmCameraPreviewer"></bm-camera-previewer>
  </div>
</template>
<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
import Core from "@/core/index";
import CanvasEvent from "@/core/CanvasEvent";
import Canvas from "@/core/Canvas";
// import bmCom from "@/components/component";
// import { infos } from "@/widgets/index";
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "bm-preview-page",
  data() {
    return {
      dataLoadingStatus: true,
      condition: {
        canvasId: ""
      },
      widgetList: []
      // canvas: {}
      // boxZoom: 100
      // deviceInfo: {},
      // showContextMenuStatus: false,
      // showContextMenuType: 1, //1 组件右键菜单   2是画布右键菜单
      // copyCom: "",
      // contextMenuStyle: {}
    };
  },
  props: ["canvasId", "type"],
  // mixins: [mixins],
  components: {
    // bmCom,
    // ...infos,
    bmControl: () =>
      import(/* webpackChunkName: "iot-control-com" */ "@/components/control"),
    bmCameraPreviewer: () =>
      import(
        /* webpackChunkName: "iot-camera-previewer-com" */ "@/components/camera-previewer"
      ),
    bmDeviceInfo: () =>
      import(
        /* webpackChunkName: "bm-device-info" */ "@/components/data/device-info.vue"
      )
  },
  computed: {
    ...mapGetters({
      // getWidgetList: "canvas/getWidgetList", //组件列表
      // getPreviewData: "canvas/getPreviewData", //组件列表
      getZoom: "canvas/getZoom", //放大缩小
      // deviceCacheMap: "device/getDeviceCacheMap", //设备缓存
      boxZoom: "canvas/getBoxZoom", //放大缩小
      canvas: "canvas/getCanvas" //画布属性
    }),
    // widgetList() {
    //   let { getWidgetList = {} } = this;
    //   return Object.freeze(getWidgetList);
    // },
    // previewData() {
    //   let { getPreviewData = {} } = this;
    //   return Object.freeze(getPreviewData);
    // },
    zoom: {
      get() {
        return parseInt(this.getZoom * 100);
      },
      set(val) {
        this.setZoom(val / 100);
      }
    },
    gridStyle() {
      let { canvas = {} } = this;
      let { isGrid = false, gridStyle = {} } = canvas || {};
      let styles = {};
      if (isGrid) {
        let { width, height } = gridStyle || {};
        styles[
          "background"
        ] = `linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / ${width}px ${height}px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / ${width}px ${height}px`;
      }
      return styles || {};
    },
    bgStyle() {
      let { canvas = {} } = this;
      let { backgroundSize = "", backgroundImage = "", backgroundRepeat = "" } =
        canvas || {};
      let styles = {};
      if (backgroundImage) {
        styles["background-image"] = `url(${this.$loadImgUrl(
          backgroundImage
        )})`;
        styles["background-position"] = "0 0";
      }
      if (backgroundSize) {
        styles["background-size"] = backgroundSize;
      }
      if (backgroundRepeat) {
        styles["background-repeat"] = backgroundRepeat;
      }
      return styles || {};
    },
    //渐变颜色样式
    gradientStyle() {
      let { canvas = {} } = this;
      let { gradientStyle = {} } = canvas || {};
      let {
        type = "",
        angle = "",
        center = "",
        radialShape = "",
        valueList = []
      } = gradientStyle || {};
      let styles = {};
      let colors = valueList.map(item => `${item.code} ${item.value}%`);
      if (type == "linear") {
        styles.backgroundImage = `linear-gradient(${angle}deg, ${colors.join()})`;
      } else if (type == "radial") {
        styles.backgroundImage = `radial-gradient(${radialShape} at ${center}, ${colors.join()})`;
      }
      return styles;
    },
    pageStyle() {
      let { canvas = {}, gradientStyle } = this;
      let { pageColor = "", page = {} } = canvas || {};
      let {
        backgroundSize = "",
        backgroundImage = "",
        backgroundRepeat = "",
        backgroundType = ""
      } = page || {};
      let styles = {};
      if (pageColor) {
        styles["background-image"] = "none";
        styles["background-color"] = pageColor;
      }
      styles["background-size"] = "auto";
      styles["background-position"] = "inherit";
      if (backgroundType == "purity") {
        //纯色
        if (pageColor) {
          styles["background-color"] = pageColor;
        }
        if (backgroundImage) {
          styles["background-image"] = `url(${this.$loadImgUrl(
            backgroundImage
          )})`;

          if (backgroundRepeat) {
            styles["background-repeat"] = backgroundRepeat;
          }
          if (backgroundSize) {
            styles["background-size"] = backgroundSize;
          }
        }
      } else if (backgroundType == "gradient") {
        //渐变
        styles = { ...styles, ...gradientStyle(page) };
      }
      return styles;
    },
    viewBoxStyle() {
      let { boxZoom = 1 } = this;
      let styles = {
        transform: `scale(${boxZoom})`,
        transformOrigin: `0 0`
      };
      return styles || {};
    },
    canvasStyle() {
      let { canvas = {}, gradientStyle = {}, zoom = 100 } = this;
      let {
        left = 0,
        top = 0,
        height = "",
        width = "",
        backgroundType = "",
        backgroundColor = "#fff"
        // backgroundImage = ""
      } = canvas;
      zoom = zoom / 100;
      let styles = {
        left: `${left}px`,
        top: `${top}px`,
        // backgroundColor: `${backgroundColor}`,
        transform: `scale(${zoom})`,
        // webkitTransform: `scale(${zoom})`,
        // transformOrigin: `left top`
        transformOrigin: `0 0`
      };
      if (width) {
        styles["width"] = `${width}px`;
      }
      if (backgroundType == "purity") {
        //纯色
        styles["background-color"] = backgroundColor;
      } else if (backgroundType == "gradient") {
        //渐变
        styles = { ...styles, ...gradientStyle };
      }
      if (height) {
        styles["height"] = `${height}px`;
      }
      // if (backgroundImage) {
      //   styles["background-image"] = `url(${backgroundImage})`;
      // }
      return styles || {};
    }
  },
  methods: {
    ...mapMutations({
      setZoom: "canvas/setZoom",
      setBoxZoom: "canvas/setBoxZoom",
      // setWidgetList: "canvas/setWidgetList", //设置组件列表
      setCanvas: "canvas/setCanvas"
      // setPlatform: "setPlatform",
      // setShowType: "canvas/setShowType",
      // stopMove: "canvas/stopMove",
      // canvasMoving: "canvas/canvasMoving",
      // setDeviceCacheMap: "device/setDeviceCacheMap", //设备缓存
      // setAllDeviceCacheMap: "device/setAllDeviceCacheMap", //设备缓存
      // initMove: "canvas/initMove"
    }),
    ...mapActions({
      initConfigWebsocketAction: "initConfigWebsocket",
      canvasGetAction: "canvasGet",
      commonGetDeviceAction: "commonGetDevice",
      commonDevicePointHstDataAction: "commonDevicePointHstData",
      commonDeviceListAction: "commonDeviceList",
      pushAction: "push"
    }),
    init() {
      this.initEvent();
      let { condition, $route } = this;
      let { query = {} } = $route;
      let { canvasId = "", type = "" } = query || {};
      if (!canvasId) {
        canvasId = this.canvasId;
      }
      let platform = type == 2 ? "service" : "manage";
      // this.setPlatform(platform); //type： 2 为应用平台过来  1为管理平台过来
      condition.canvasId = canvasId;
      window.bm_platform = platform;
      window.bm_show_type = Constants.SHOWTYPEMAP.PREVIEW;
      // this.setShowType(Constants.SHOWTYPEMAP.PREVIEW);
      // let previewData = JSON.parse(
      //   bmCommon.getItem(Constants.LOCALSTORAGEKEY.USERKEY.PREVIEWDATA)
      // );
      let previewData = Canvas.getPreviewData();
      let { widgetList = [], canvas = {} } = previewData || {};
      canvas.left = 0;
      canvas.top = 0;
      this.setCanvas(canvas || {});
      this.loadWebsocketData(widgetList, () => {
        Core.init(widgetList, widgets => {
          // $vm.$emit("info-data-init", {
          //   count: widgets.length,
          //   widgets
          // });
          CanvasEvent.resizeCanvasSize();
        });
      });
      // let widgets = [];
      // let infoWidgets = [];
      // // widgetList = Object.freeze(widgetList);
      // widgetList.forEach(item => {
      //   let {
      //     alias = "",
      //     type = "",
      //     bindData = {},
      //     children = [],
      //     id = "",
      //     comName = "",
      //     name = ""
      //   } = item || {};
      //   if (!alias) {
      //     alias = type;
      //   }
      //   let _item = Constants.COMPONENTLIBRARYMAP[alias] || {};
      //   let { data = {} } = _item || {};
      //   let {
      //     infoType = "",
      //     dataType = "",
      //     bindData: _bindData = {},
      //     styleCode = "",
      //     dataCode = ""
      //   } = data || {};
      //   for (let i in data) {
      //     if (!item[i]) {
      //       item[i] = data[i];
      //     }
      //   }
      //   item.bindData = { ..._bindData, ...bindData };
      //   item.infoType = infoType;
      //   item.dataType = dataType;
      //   item.styleCode = styleCode;
      //   item.dataCode = dataCode;
      //   item.alias = alias;
      //   let infoChildern = [];
      //   let { length = 0 } = children || [];
      //   if (length > 0) {
      //     children.forEach(item => {
      //       let { alias = "", type = "", bindData = {} } = item || {};
      //       if (!alias) {
      //         alias = type;
      //       }
      //       let _item = Constants.COMPONENTLIBRARYMAP[alias] || {};
      //       let { data = {} } = _item || {};
      //       let {
      //         infoType = "",
      //         dataType = "",
      //         bindData: _bindData = {},
      //         styleCode = "",
      //         dataCode = ""
      //       } = data || {};
      //       for (let i in data) {
      //         if (!item[i]) {
      //           item[i] = data[i];
      //         }
      //       }
      //       item.bindData = { ..._bindData, ...bindData };
      //       item.infoType = infoType;
      //       item.dataType = dataType;
      //       item.styleCode = styleCode;
      //       item.show = true;
      //       item.dataCode = dataCode;
      //       item.alias = alias;
      //       infoChildern.push({
      //         id,
      //         comName,
      //         type,
      //         children: [],
      //         name,
      //         dataType,
      //         bindData: item.bindData
      //       });
      //     });
      //   }
      //   if (type && type != "canvas") {
      //     widgets.push(item);
      //     infoWidgets.push({
      //       id,
      //       comName,
      //       type,
      //       children: infoChildern,
      //       name,
      //       dataType,
      //       bindData: item.bindData
      //     });
      //   }
      // });
      // // this.setWidgetList(widgets || []);
      // this.widgetList = Object.freeze(widgets);
      // canvas.left = 0;
      // canvas.top = 0;
      // this.setCanvas(canvas || {});
      // // this.canvas = Object.freeze(canvas);
      // // this.canvas = canvas;
      // this.resizeCanvasSize();
      // this.loadWebsocketData(widgetList);
      // this.$nextTick(() => {
      //   widgets.forEach(item => {
      //     let { animation = {}, id = "" } = item || {};
      //     $vm.$emit(`comAnimationEvent_${id}`, animation);
      //   });
      // });
    },
    loadEvent(item) {
      const { id = "" } = item || {};
      const key = `popover_${id}`;
      this.$nextTick(() => {
        this.$refs[key][0]?.updatePopper();
      });
    },
    initEvent() {
      // $(window).on("resize", this.resizeCanvasSize);
      // //滚动事件
      // $(".view-box").on("mousewheel DOMMouseScroll", this.mouseScrollEvent);
      // //注册画布移动事件
      // $(".view-box").on("mousedown", this.mousedownEvent);
      //注册显示控制处理事件
      $vm.$on("zoom", item => {
        this.zoomEvent(item);
      });
      //注册显示控制处理事件
      $vm.$on("control", item => {
        this.$refs.bmControl.show(item);
      });
      //注册显示设备控制弹窗事件
      $vm.$on("show-device-info", item => {
        this.$refs.bmDeviceInfo.show(item);
      });
      //注册设备点位参数事件
      $vm.$on("deviceList", item => {
        let { ids = [], callback = () => {} } = item || {};
        this.commonDeviceListFunc(ids, callback);
      });
      //注册获取设备信息事件
      $vm.$on("device", item => {
        let { deviceId = "", callback = () => {} } = item || {};
        this.commonGetDeviceFunc({ deviceId }, callback);
      });
      //注册获取设备点位历史数据事件
      $vm.$on("device-point-hst-data", item => {
        let {
          deviceId = "",
          point = "",
          startTime = "",
          endTime = "",
          callback = () => {}
        } = item || {};
        this.commonDevicePointHstDataFunc(
          { deviceId, point, startTime, endTime },
          callback
        );
      });
      //注册摄像头预览事件
      $vm.$on("camera-preview", item => {
        this.$refs.bmCameraPreviewer.show(item);
      });
    },
    mouseScrollEvent(e) {
      // e.preventDefault();
      // e.stopPropagation();
      let wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
      let delta = Math.max(-1, Math.min(1, wheel));
      // let scrollTop=$(".content-box").scrollTop()
      // bmCommon.log();
      if (delta < 0) {
        //向下滚动
        bmCommon.log("向下滚动");
        this.zoomEvent(-1);
      } else {
        //向上滚动
        bmCommon.log("向上滚动");
        this.zoomEvent(1);
      }
      // return false;
    },
    zoomEvent(val = 0) {
      let { boxZoom = 1 } = this;
      if (val) {
        boxZoom = boxZoom * 100 + val;
        if (boxZoom > 10 && boxZoom < 200) {
          // this.boxZoom = boxZoom;
          this.setBoxZoom(boxZoom / 100);
        }
      } else {
        // this.boxZoom = 100;
        this.setBoxZoom(1);
      }
    },
    // canvasZoomEvent(val = 0) {
    //   let { zoom = 0 } = this;
    //   if (val) {
    //     zoom = zoom + val;
    //     if (zoom > 10 && zoom < 500) {
    //       this.setZoom(zoom / 100);
    //     }
    //   } else {
    //     this.setZoom(1);
    //   }
    // },
    loadWebsocketData(widgetList = [], callback) {
      let set = new Set();
      let deviceIdList = [];
      widgetList.forEach(item => {
        let { bindData = {}, children = [], type = "" } = item || {};
        let { deviceId = "" } = bindData || {};
        if (type === "panel") {
          children.forEach(_item => {
            let { bindData = {} } = _item || {};
            let { deviceId = "" } = bindData || {};
            if (deviceId) {
              set.add(deviceId);
            }
          });
        } else {
          if (deviceId) {
            set.add(deviceId);
          }
        }
      });
      deviceIdList = Array.from(set);
      this.commonDeviceListFunc(deviceIdList, (list = []) => {
        bmCommon.log("设备列表加载完成");
        callback && callback();
      });
      this.pushFunc(deviceIdList, result => {
        bmCommon.log("postFunc", result);
      });
      this.initConfigWebsocketFunc((deviceList = []) => {
        bmCommon.log("Preview initConfigWebsocketFunc", deviceList);
        widgetList.forEach(item => {
          let { bindData = {}, id = "" } = item || {};
          let { deviceId = "", devicePoint = "" } = bindData || {};
          //先找到绑定设备的组件
          let device = deviceList.find(_item => {
            let { deviceId: _deviceId = "" } = _item || {};
            return _deviceId == deviceId; //如果有绑定id 而且能找到对应的推送消息
          });
          if (device) {
            bmCommon.log(`找到设备${deviceId}的数据`);
            let { configurDevicePointVoList: pointList = [] } = device || {};
            let pointObj = null;
            if (devicePoint) {
              pointObj = pointList.find(item => {
                let { point = "" } = item || {};
                return point == devicePoint;
              });
              if (pointObj) {
                bmCommon.log(
                  `找到组件${id}设备${deviceId}点位${devicePoint}的数据`
                );
                // let { value = "", unit = "", descr = "" } = pointObj || {};
                // widget.value = value; //值
                // widget.unit = unit; //单位
                // widget.descr = descr; //描述
              }
            }
            let { $vm } = window;
            $vm.$emit(`devicePointEvent_${id}`, {
              device: {
                deviceId,
                points: pointList
              },
              point: pointObj
            });
          }
        });
      });
    },
    showInfoEvent(info = {}) {
      let { id = "" } = info || {};
      let key = `bmInfoCom_${id}`;
      this.$refs[key][0]?.show(info);
    },
    // resizeCanvasSize() {
    //   let $window = $(window);
    //   // let w_height = $window.height();
    //   let w_width = $window.width();
    //   if (w_width < 800) {
    //     w_width = 800;
    //   }
    //   let { canvas = {} } = this;
    //   let { width = 0 } = canvas || {};
    //   // let h_ratio = w_height / height;
    //   let w_ratio = w_width / width;
    //   let scale = w_ratio;
    //   // let left = (w_width - width) / 2;
    //   // let top = ((w_height - height) * scale) / 2;
    //   // if (h_ratio < w_ratio) {
    //   //   scale = h_ratio;
    //   //   // left = ((w_width - width) * scale) / 2;
    //   //   // top = (w_height - height) / 2;
    //   // }
    //   // canvas.left = left;
    //   // canvas.top = top;
    //   this.setZoom(scale);
    // },

    // mousedownEvent(e) {
    //   e.stopPropagation();
    //   e.preventDefault();
    //   let { canvas = {} } = this;
    //   let pos = bmCommon.getMousePosition(e);
    //   let { x = "", y = "" } = pos || {};
    //   let { left, top, locked = false } = canvas || {};
    //   bmCommon.log("preview=>mousedownEvent", locked);
    //   if (locked) {
    //     return;
    //   }
    //   this.initMove({
    //     startX: x,
    //     startY: y,
    //     originX: left,
    //     originY: top
    //   });

    //   $(".view-box").on("mousemove", this.mousemoveEvent);
    //   $(".view-box").on("mouseup", this.mouseupEvent);
    // },
    // mousemoveEvent(e) {
    //   e.stopPropagation();
    //   e.preventDefault();
    //   let pos = bmCommon.getMousePosition(e);
    //   let { x = "", y = "" } = pos || {};
    //   this.canvasMoving({ x, y });
    // },
    // mouseupEvent(e) {
    //   $(".view-box").off("mousemove", this.mousemoveEvent);
    //   $(".view-box").off("mouseup", this.mouseupEvent);
    //   this.stopMove();
    // },
    // 初始化websocket
    initConfigWebsocketFunc(callback) {
      let value = {};
      let { condition } = this;
      let { canvasId = "" } = condition;
      let subject = `/user/queue/canvas/${canvasId}`;
      this.initConfigWebsocketAction({
        subject,
        callback,
        reConnection: () => {
          this.initConfigWebsocketFunc(callback);
        }
      }).catch(err => {
        callback && callback(value || {});
        bmCommon.error("获取数据失败=>initConfigWebsocket", err);
      });
    },
    // 获取画布信息
    // canvasGetFunc(callback) {
    //   let value = {};
    //   let { condition } = this;
    //   let { canvasId: id = "" } = condition;
    //   if (!id) {
    //     bmCommon.warn("请输入画布id");
    //     callback && callback(value || {});
    //     return;
    //   }
    //   this.canvasGetAction({ id })
    //     .then(({ data }) => {
    //       let { code = "", result = {}, message = "" } = data || {};
    //       if (code == Constants.CODES.SUCCESS) {
    //         value = result || {};
    //       } else {
    //         bmCommon.error(message);
    //       }
    //       callback && callback(value || {});
    //     })
    //     .catch(err => {
    //       callback && callback(value || {});
    //       bmCommon.error("获取数据失败=>canvasGet", err);
    //     });
    // },
    // 获取设备信息
    commonGetDeviceFunc({ deviceId = "", flag = true }, callback) {
      let value = {};
      if (!deviceId) {
        callback && callback(value || {});
        return;
      }
      if (flag) {
        let device = Canvas.getDeviceCacheMap(deviceId);
        let { deviceId: id = "" } = device || {};
        bmCommon.log("commonGetDeviceFunc==获取到缓存开始", device, deviceId);
        if (id) {
          bmCommon.log("commonGetDeviceFunc==获取到缓存", id);
          callback(device);
          return;
        }
      }
      this.commonGetDeviceAction({ deviceId })
        .then(({ data }) => {
          let { code = "", result = {}, message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            value = result || {};
          } else {
            bmCommon.error(message);
          }
          Canvas.setDeviceCacheMap({ key: deviceId, value });
          callback && callback(value || {});
        })
        .catch(err => {
          Canvas.setDeviceCacheMap({ key: deviceId, value });
          callback && callback(value || {});
          bmCommon.error("获取数据失败=>commonGetDevice", err);
        });
    },
    // 获取设备点位信息
    commonDevicePointHstDataFunc(params, callback) {
      let value = {};
      // let { condition, deviceInfo = {} } = this;
      let { deviceId = "", point = "" } = params || {};
      if (!deviceId) {
        callback && callback(value || {});
        return;
      }
      if (!point) {
        callback && callback(value || {});
        return;
      }
      // let { point = "" } = condition;
      // let startTime = this.$moment().format("YYYY-MM-DD 00:00:00");
      // let endTime = this.$moment().format("YYYY-MM-DD HH:mm:ss");
      // this.dataLoadingStatus = true;
      this.commonDevicePointHstDataAction(
        params
        // deviceId,
        // point,
        // startTime,
        // endTime
      )
        .then(({ data }) => {
          let { code = "", result = {}, message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            value = result || {};
          } else {
            bmCommon.error(message);
          }
          // this.dataLoadingStatus = false;
          callback && callback(value || {});
        })
        .catch(err => {
          // this.dataLoadingStatus = false;
          callback && callback(value || {});
          bmCommon.error("获取数据失败=>commonDevicePointHstData", err);
        });
    },
    // 开始推送设备信息
    pushFunc(deviceIdList = [], callback) {
      let value = {};
      let { condition } = this;
      let { canvasId = "" } = condition;
      if (!(deviceIdList && deviceIdList.length > 0)) {
        callback && callback(value || {});
        bmCommon.error(`deviceIdList为空,'{${deviceIdList}}'`);
        return;
      }
      this.pushAction({ canvasId, deviceIdList })
        .then(({ data }) => {
          let { code = "", result = {}, message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            value = result || {};
          } else {
            bmCommon.error(message);
          }
          callback && callback(value || {});
        })
        .catch(err => {
          callback && callback(value || {});
          bmCommon.error("获取数据失败=>push", err);
        });
    },
    // 设备点位参数
    commonDeviceListFunc(ids = [], callback) {
      let value = [];
      if (!(ids.length > 0)) {
        callback();
        this.dataLoadingStatus = false;
        Canvas.setAllDeviceCacheMap({});
        return;
      }
      // this.commonDeviceListAction({ ids: JSON.stringify(ids) })
      this.dataLoadingStatus = true;
      this.commonDeviceListAction({ ids: ids.join() })
        .then(({ data }) => {
          let { code = "", result = [], message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            value = result || [];
          } else {
            bmCommon.error(message);
          }
          callback && callback(value || []);
          let map = {};

          value.forEach(item => {
            let { deviceId: id = "", configurDevicePointVoList = [] } =
              item || {};
            let points = [];
            configurDevicePointVoList.forEach(_item => {
              let {
                point: id = "",
                acqTime: time = "",
                descr: name = "",
                name: deviceName = "",
                unit = "",
                value = ""
              } = _item || {};
              points.push({ name, time, deviceName, id, unit, value });
            });
            delete item.configurDevicePointVoList;
            item.points = points || [];
            map[id] = item || {};
          });
          Canvas.setAllDeviceCacheMap(map);
          this.dataLoadingStatus = false;
        })
        .catch(err => {
          callback && callback(value || []);
          Canvas.setAllDeviceCacheMap({});
          this.dataLoadingStatus = false;
          bmCommon.error("获取数据失败=>commonDeviceList", err);
        });
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    // $(window).off("resize", this.resizeCanvasSize);
    // //滚动事件
    // $(".view-box").off("mousewheel DOMMouseScroll", this.mouseScrollEvent);
    // //移动事件
    // $(".view-box").off("mousedown", this.mousedownEvent);
  }
};
</script>
<style lang="less">
@import (less) "../assets/less/pages/preview.less";
</style>

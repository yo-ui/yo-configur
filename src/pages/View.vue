<template>
  <div class="bm-view-page" :style="pageStyle">
    <div class="flex-content">
      <div class="content-box">
        <div class="zoom-box">
          <el-button-group v-if="canvas.scaleable">
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
            <template v-for="(item, index) in widgetList">
              <bm-com
                class="view"
                :data-type="item.type"
                :data-id="item.id"
                :info="item"
                :key="item.id + index"
              >
                <template v-if="item.children && item.children.length > 0">
                  <template v-for="(_item, _index) in item.children">
                    <bm-com
                      class="view"
                      :data-type="_item.type"
                      :data-id="_item.id"
                      :info="_item"
                      :key="_item.id + _index"
                    >
                    </bm-com>
                  </template>
                </template>
              </bm-com>
            </template>
          </div>
        </div>
      </div>
    </div>
    <bm-control ref="bmControl"></bm-control>
    <bm-camera-previewer ref="bmCameraPreviewer"></bm-camera-previewer>
  </div>
</template>
<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
import bmCom from "@/components/component";
import { infos } from "@/widgets/index";
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "bm-view-page",
  data() {
    return {
      dataLoadingStatus: false,
      condition: {
        canvasId: ""
      }
      // boxZoom: 100
      // deviceInfo: {},
      // showContextMenuStatus: false,
      // showContextMenuType: 1, //1 组件右键菜单   2是画布右键菜单
      // copyCom: "",
      // contextMenuStyle: {}
    };
  },
  props: ["canvasId", "type"],
  components: {
    bmCom,
    ...infos,
    bmControl: () =>
      import(/* webpackChunkName: "iot-control-com" */ "@/components/control"),
    bmCameraPreviewer: () =>
      import(
        /* webpackChunkName: "iot-camera-previewer-com" */ "@/components/camera-previewer"
      )
    // bmDeviceInfo: () =>
    //   import(
    //     /* webpackChunkName: "bm-device-info" */ "@/components/data/device-info.vue"
    //   )
  },
  computed: {
    ...mapGetters({
      widgetList: "canvas/getWidgetList", //组件列表
      viewData: "canvas/getPreviewData", //组件列表
      getZoom: "canvas/getZoom", //放大缩小
      boxZoom: "canvas/getBoxZoom", //放大缩小
      // leftMenuStatus: "canvas/getLeftMenuStatus", //获取左侧菜单栏状态
      // rightMenuStatus: "canvas/getRightMenuStatus", //获取右侧菜单栏状态
      canvas: "canvas/getCanvas", //画布属性
      deviceCacheMap: "device/getDeviceCacheMap" //设备缓存
      // selectBox: "canvas/getSelectBox", //选取框
      // activeComs: "canvas/getActiveComs", //选中对象
      // activeCom: "canvas/getActiveCom" //选中对象
    }),
    zoom: {
      get() {
        return parseInt(this.getZoom * 100);
      },
      set(val) {
        this.setZoom(val / 100);
      }
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
      let { zoom = 0, canvas = {}, gradientStyle = {} } = this;
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
        // left: `${left}`,
        top: `${top}px`,
        // top: `${top}`,
        // backgroundColor: `${backgroundColor}`,
        transform: `scale(${zoom})`,
        webkitTransform: `scale(${zoom})`,
        // transformOrigin: `left top`
        transformOrigin: `0 0`
        // webkitTransform: `scale(${zoom}) translate(-50%,-50%)`
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
      setBoxZoom: "canvas/setBoxZoom", //放大缩小
      setShowType: "canvas/setShowType",
      setPlatform: "setPlatform",
      setWidgetList: "canvas/setWidgetList", //设置组件列表
      setCanvas: "canvas/setCanvas",
      stopMove: "canvas/stopMove",
      canvasMoving: "canvas/canvasMoving",
      setDeviceCacheMap: "device/setDeviceCacheMap", //设备缓存
      setAllDeviceCacheMap: "device/setAllDeviceCacheMap", //设备缓存
      initMove: "canvas/initMove"
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
      let { condition, canvas = {}, $route } = this;
      let { query = {} } = $route;
      let { canvasId = "", type = "" } = query || {};
      if (!canvasId) {
        canvasId = this.canvasId;
      }
      if (!type) {
        type = this.type;
      }
      let platform = type == 2 ? "service" : "manage";
      this.setPlatform(platform); //type： 2 为应用平台过来  1为管理平台过来
      condition.canvasId = canvasId;
      this.setShowType(Constants.SHOWTYPEMAP.VIEW);
      this.canvasGetFunc((detail = {}) => {
        let {
          name = "",
          width = "",
          height = "",
          id: canvasId = "",
          data = {}
        } = detail || {};
        data = typeof data === "string" ? JSON.parse(data) : data;
        let { canvasData = {} } = data || {};
        let { widgetList = [], canvas: _canvas } = canvasData || {};
        if (_canvas) {
          canvas = { ...canvas, ...(_canvas || {}) };
        }
        canvas.name = name;
        canvas.width = width;
        canvas.height = height;
        canvas.canvasId = canvasId;
        canvas.canvasType = type; //1为编辑   2为预览
        canvas.left = 0;
        canvas.top = 0;
        this.setCanvas(canvas);
        let widgets = [];
        widgetList.forEach(item => {
          let { alias = "", type = "", bindData = {} } = item || {};
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
          for (let i in data) {
            if (!item[i]) {
              item[i] = data[i];
            }
          }
          item.bindData = { ..._bindData, ...bindData };
          item.infoType = infoType;
          item.dataType = dataType;
          item.dataCode = dataCode;
          item.styleCode = styleCode;
          item.alias = alias;
          if (type && type != "canvas") {
            widgets.push(item);
          }
        });
        this.setWidgetList(widgets || []);
        this.resizeCanvasSize();
        this.loadWebsocketData(widgetList);
      });
      // });
    },
    initEvent() {
      $(window).on("resize", this.resizeCanvasSize);
      //滚动事件
      $(document).on("mousewheel DOMMouseScroll", this.mouseScrollEvent);
      //注册画布移动事件
      $(document).on("mousedown", this.mousedownEvent);
      //注册显示控制处理事件
      $vm.$on("control", item => {
        this.$refs.bmControl.show(item);
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
    loadEvent(item) {
      const { id = "" } = item || {};
      const key = `popover_${id}`;
      this.$nextTick(() => {
        this.$refs[key][0]?.updatePopper();
      });
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
        this.zoomEvent(-3);
      } else {
        //向上滚动
        bmCommon.log("向上滚动");
        this.zoomEvent(3);
      }
      // return false;
    },
    mousedownEvent(e) {
      e.stopPropagation();
      e.preventDefault();
      let { canvas = {} } = this;
      let pos = bmCommon.getMousePosition(e);
      let { x = "", y = "" } = pos || {};
      let { left, top, locked = false } = canvas || {};
      bmCommon.log("view=>mousedownEvent");
      if (locked) {
        return;
      }
      this.initMove({
        startX: x,
        startY: y,
        originX: left,
        originY: top
      });

      $(document).on("mousemove", this.mousemoveEvent);
      $(document).on("mouseup", this.mouseupEvent);
    },
    mousemoveEvent(e) {
      e.stopPropagation();
      e.preventDefault();
      let pos = bmCommon.getMousePosition(e);
      let { x = "", y = "" } = pos || {};
      this.canvasMoving({ x, y });
    },
    mouseupEvent(e) {
      $(document).off("mousemove", this.mousemoveEvent);
      $(document).off("mouseup", this.mouseupEvent);
      this.stopMove();
    },
    loadWebsocketData(widgetList = []) {
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
        // let map = {};
        // list.forEach(item => {
        //   let { id = "" } = item || {};
        //   map[id] = item || {};
        // });
        // this.setAllDeviceCacheMap(map);
      });
      this.pushFunc(deviceIdList, result => {
        bmCommon.log("postFunc", result);
      });
      this.initConfigWebsocketFunc((deviceList = []) => {
        bmCommon.log("View initConfigWebsocketFunc", deviceList);
        widgetList.forEach(item => {
          let { bindData = {}, id = "" } = item || {};
          let { deviceId = "", devicePoint = "" } = bindData || {};
          //先找到绑定设备的组件
          let device = deviceList.find(_item => {
            let { deviceId: _deviceId = "" } = _item || {};
            return _deviceId && _deviceId == deviceId; //如果有绑定id 而且能找到对应的推送消息
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
                pointList
              },
              point: pointObj
            });
          }
          // $vm.$emit(`comAnimationEvent_${id}`, animation);
        });
      });
    },
    resizeCanvasSize() {
      let $window = $(window);
      // let w_height = $window.height();
      let w_width = $window.width();
      if (w_width < 800) {
        w_width = 800;
      }
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
      this.setZoom(scale);
    },
    showInfoEvent(info = {}) {
      let { id = "" } = info || {};
      let key = `bmInfoCom_${id}`;
      this.$refs[key][0]?.show(info);
    },
    // 设备点位参数
    commonDeviceListFunc(ids = [], callback) {
      let value = [];
      if (!(ids.length > 0)) {
        callback();
        this.dataLoadingStatus = false;
        return;
      }
      // this.commonDeviceListAction({ ids: JSON.stringify(ids) })
      this.dataLoadingStatus = true;
      this.commonDeviceListAction({ ids: ids.join() })
        .then(({ data }) => {
          let { code = "", result = [], message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            value = result || [];
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
            this.setAllDeviceCacheMap(map);
          } else {
            bmCommon.error(message);
          }
          callback && callback(value || []);
          this.dataLoadingStatus = false;
        })
        .catch(err => {
          callback && callback(value || []);
          this.dataLoadingStatus = false;
          bmCommon.error("获取数据失败=>commonDeviceList", err);
        });
    },
    // // 获取登录信息
    // commonVerifyInfoFunc(callback) {
    //   let value = {};
    //   this.commonVerifyInfoAction()
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
    //       bmCommon.error("获取数据失败=>commonVerifyInfo", err);
    //     });
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
    canvasGetFunc(callback) {
      let value = {};
      let { condition } = this;
      let { canvasId: id = "" } = condition;
      if (!id) {
        bmCommon.warn("请输入画布id");
        callback && callback(value || {});
        return;
      }
      this.canvasGetAction({ id })
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
          bmCommon.error("获取数据失败=>canvasGet", err);
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
    // 获取设备信息
    commonGetDeviceFunc({ deviceId = "" }, callback) {
      let value = {};
      if (!deviceId) {
        callback && callback(value || {});
        return;
      }
      let { deviceCacheMap = {} } = this;
      let { deviceId: id = "" } = deviceCacheMap(deviceId) || {};
      if (id) {
        callback(deviceCacheMap(deviceId));
        return;
      }
      this.commonGetDeviceAction({ deviceId })
        .then(({ data }) => {
          let { code = "", result = {}, message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            value = result || {};
          } else {
            bmCommon.error(message);
          }
          this.setDeviceCacheMap({ key: deviceId, value });
          if (!id) {
            callback && callback(value || {});
          }
        })
        .catch(err => {
          this.setDeviceCacheMap({ key: deviceId, value });
          if (!id) {
            callback && callback(value || {});
          }
          bmCommon.error("获取数据失败=>commonGetDevice", err);
        });
    },
    // 获取设备点位信息
    commonDevicePointHstDataFunc(params, callback) {
      let value = {};
      let { deviceId = "", point = "" } = params || {};
      if (!deviceId) {
        callback && callback(value || {});
        return;
      }
      if (!point) {
        callback && callback(value || {});
        return;
      }
      this.commonDevicePointHstDataAction(params)
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
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    $(window).off("resize", this.resizeCanvasSize);
    //滚动事件
    $(document).off("mousewheel DOMMouseScroll", this.mouseScrollEvent);
    //移动事件
    $(document).off("mousedown", this.mousedownEvent);
  }
};
</script>
<style lang="less">
@import (less) "../assets/less/pages/view.less";
</style>

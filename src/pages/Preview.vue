<template>
  <div class="bm-preview-page">
    <div class="flex-content">
      <div class="content-box">
        <div class="view-box" ref="viewBox">
          <div
            class="canvas-box"
            ref="canvasBox"
            :style="canvasStyle"
            :class="canvas.action"
          >
            <div class="bg" :style="bgStyle"></div>
            <template v-for="(item, index) in widgetList">
              <el-popover
                v-if="
                  item.bindData &&
                    item.bindData.deviceId &&
                    !item.bindData.devicePoint
                "
                popper-class="device-info-popover"
                placement="right"
                :key="index"
                @show="showDeviceInfoEvent(item.bindData)"
                :title="deviceInfo.name"
                width="400"
                trigger="hover"
              >
                <bm-device-info :pointList="deviceInfo.points"></bm-device-info>
                <bm-com
                  slot="reference"
                  class="preview"
                  :class="{
                    locked: item.locked
                  }"
                  :data-type="item.type"
                  :data-id="item.id"
                  :info="item"
                  :key="index"
                ></bm-com>
              </el-popover>
              <bm-com
                v-else
                class="preview"
                :data-type="item.type"
                :data-id="item.id"
                :info="item"
                :key="index"
              ></bm-com>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
import bmCom from "@/components/component";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "bm-preview-page",
  data() {
    return {
      condition: {
        canvasId: ""
      },
      deviceInfo: {},
      showContextMenuStatus: false,
      showContextMenuType: 1, //1 组件右键菜单   2是画布右键菜单
      copyCom: "",
      contextMenuStyle: {}
    };
  },
  // mixins: [mixins],
  components: {
    bmCom,
    bmDeviceInfo: () =>
      import(
        /* webpackChunkName: "bm-device-info" */ "@/components/data/device-info.vue"
      )
  },
  computed: {
    ...mapGetters({
      widgetList: "canvas/getWidgetList", //组件列表
      previewData: "canvas/getPreviewData", //组件列表
      getZoom: "canvas/getZoom", //放大缩小
      canvas: "canvas/getCanvas" //画布属性
    }),
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
      let { backgroundSize = "", backgroundImage = "" } = canvas || {};
      let styles = {};
      if (backgroundImage) {
        styles["backgroundImage"] = `url(${backgroundImage})`;
      }
      if (backgroundSize) {
        styles["backgroundSize"] = backgroundSize;
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
        top: `${top}px`,
        // backgroundColor: `${backgroundColor}`,
        transform: `scale(${zoom})`,
        webkitTransform: `scale(${zoom})`,
        transformOrigin: `left top`
      };
      if (width) {
        styles["width"] = `${width}px`;
      }
      if (backgroundType == "purity") {
        //纯色
        styles["backgroundColor"] = backgroundColor;
      } else if (backgroundType == "gradient") {
        //渐变
        styles = { ...styles, ...gradientStyle };
      }
      if (height) {
        styles["height"] = `${height}px`;
      }
      // if (backgroundImage) {
      //   styles["backgroundImage"] = `url(${backgroundImage})`;
      // }
      return styles || {};
    }
  },
  methods: {
    ...mapMutations({
      setZoom: "canvas/setZoom",
      setWidgetList: "canvas/setWidgetList", //设置组件列表
      setCanvas: "canvas/setCanvas",
      setShowType: "canvas/setShowType"
    }),
    ...mapActions({
      initConfigWebsocketAction: "initConfigWebsocket",
      canvasGetAction: "canvasGet",
      commonGetDeviceAction: "commonGetDevice",
      pushAction: "push"
    }),
    init() {
      let { condition, $route } = this;
      let { query = {} } = $route;
      let { canvasId = "" } = query || {};
      condition.canvasId = canvasId;
      this.initEvent();
      this.setShowType(Constants.SHOWTYPEMAP.PREVIEW);
      let { previewData = {} } = this;
      let { widgetList = [], canvas = {} } = previewData || {};
      this.setWidgetList(widgetList || []);
      this.setCanvas(canvas || {});
      this.resetCanvasSize();
      this.loadWebsocketData(widgetList);
    },
    initEvent() {
      $(window).on("resize", this.resetCanvasSize);
    },
    loadWebsocketData(widgetList = []) {
      let deviceIdList = [];
      widgetList.forEach(item => {
        let { bindData = {} } = item || {};
        let { deviceId = "" } = bindData || {};
        if (deviceId) {
          deviceIdList.push(deviceId);
        }
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
        });
      });
    },
    showDeviceInfoEvent(bindData = {}) {
      let { deviceId = "" } = bindData || {};
      this.commonGetDeviceFunc(deviceId, device => {
        bmCommon.log(device);
        this.deviceInfo = device || {};
      });
    },
    resetCanvasSize() {
      // let $window = $(window);
      // let w_height = $window.height();
      // let w_width = $window.width();
      // let { canvas = {} } = this;
      // let { width = 0, height = 0 } = canvas || {};
      // let h_ratio = w_height / height;
      // let w_ratio = w_width / width;
      // let scale = w_ratio;
      // // let left = (w_width - width) / 2;
      // // let top = ((w_height - height) * scale) / 2;
      // if (h_ratio > w_ratio) {
      //   scale = h_ratio;
      //   // left = ((w_width - width) * scale) / 2;
      //   // top = (w_height - height) / 2;
      // }
      // // canvas.left = left;
      // // canvas.top = top;
      // this.setZoom(scale);
    },
    // 初始化websocket
    initConfigWebsocketFunc(callback) {
      let value = {};
      let { condition } = this;
      let { canvasId = "" } = condition;
      let subject = `/user/queue/canvas/${canvasId}`;
      this.initConfigWebsocketAction({ subject, callback }).catch(err => {
        callback && callback(value || {});
        bmCommon.error("获取数据失败=>initConfigWebsocket", err);
      });
    },
    // 获取画布信息
    canvasGetFunc(callback) {
      let value = {};
      let { condition } = this;
      let { canvasId: id = "" } = condition;
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
    // 获取设备信息
    commonGetDeviceFunc(deviceId, callback) {
      let value = {};
      if (!deviceId) {
        this.dataLoadingStatus = false;
        return;
      }
      this.dataLoadingStatus = true;
      this.commonGetDeviceAction({ deviceId })
        .then(({ data }) => {
          let { code = "", result = {}, message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            value = result || {};
          } else {
            bmCommon.error(message);
          }
          this.dataLoadingStatus = false;
          callback && callback(value || {});
        })
        .catch(err => {
          this.dataLoadingStatus = false;
          callback && callback(value || {});
          bmCommon.error("获取数据失败=>commonGetDevice", err);
        });
    },
    // 开始推送设备信息
    pushFunc(deviceIdList = [], callback) {
      let value = {};
      let { condition } = this;
      let { canvasId = "" } = condition;
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
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    $(window).off("resize", this.resetCanvasSize);
  }
};
</script>
<style lang="less">
@import (less) "../assets/less/pages/preview.less";
</style>

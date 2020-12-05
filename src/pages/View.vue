<template>
  <div class="bm-view-page">
    <div class="flex-content">
      <div class="content-box">
        <div class="zoom-box">
          <!--<el-button-group>
            <el-button type="primary" size="default" @click="">
              <i class="el-icon-zoom-in"></i>
            </el-button>
            <el-button type="primary" size="default" @click="zoomE">
              <i class="el-icon-zoom-in"></i>
            </el-button>
          </el-button-group> -->

          <el-button-group>
            <el-button @click="zoomEvent(-20)">
              <i class="el-icon-zoom-out"></i>
            </el-button>
            <el-button @click="zoomEvent(0)">
              <i class="el-icon-search"></i>
              {{ parseInt(boxZoom) }}%
            </el-button>
            <el-button @click="zoomEvent(20)">
              <i class="el-icon-zoom-in"></i> </el-button
          ></el-button-group>
        </div>
        <div class="view-box" ref="viewBox" :style="canvasBoxStyle">
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
                    !item.bindData.devicePoint &&
                    item.infoType
                "
                popper-class="device-info-popover"
                placement="right"
                :key="index"
                @show="showInfoEvent(item)"
                :ref="`popover_${item.id}`"
                width="400"
                trigger="hover"
              >
                <component
                  @load="loadEvent"
                  :ref="`bmInfoCom_${item.id}`"
                  :is="`${item.infoType}InfoCom`"
                />
                <bm-com
                  slot="reference"
                  class="view"
                  :data-type="item.type"
                  :data-id="item.id"
                  :info="item"
                >
                  <template v-if="item.children && item.children.length > 0">
                    <template v-for="(_item, _index) in item.children">
                      <el-popover
                        v-if="
                          _item.bindData &&
                            _item.bindData.deviceId &&
                            !_item.bindData.devicePoint &&
                            _item.infoType
                        "
                        popper-class="device-info-popover"
                        placement="right"
                        :key="_index"
                        @show="showInfoEvent(_item)"
                        width="400"
                        :ref="`popover_${_item.id}`"
                        trigger="hover"
                      >
                        <!-- v-for="(_item, _index) in item.children" -->
                        <component
                          :ref="`bmInfoCom_${_item.id}`"
                          @load="loadEvent"
                          :is="`${_item.infoType}InfoCom`"
                        />
                        <bm-com
                          slot="reference"
                          class="view"
                          :data-type="_item.type"
                          :data-id="_item.id"
                          :info="_item"
                          :key="_index"
                        >
                        </bm-com>
                      </el-popover>
                    </template>
                  </template>
                </bm-com>
              </el-popover>
              <bm-com
                v-else
                class="view"
                :data-type="item.type"
                :data-id="item.id"
                :info="item"
                :key="index"
              >
                <template v-if="item.children && item.children.length > 0">
                  <bm-com
                    class="view"
                    v-for="(_item, _index) in item.children"
                    :data-type="_item.type"
                    :data-id="_item.id"
                    :info="_item"
                    :key="_index"
                  >
                  </bm-com>
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
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "bm-view-page",
  data() {
    return {
      condition: {
        canvasId: ""
      },
      boxZoom: 100
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
      // leftMenuStatus: "canvas/getLeftMenuStatus", //获取左侧菜单栏状态
      // rightMenuStatus: "canvas/getRightMenuStatus", //获取右侧菜单栏状态
      canvas: "canvas/getCanvas" //画布属性
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
        styles["backgroundImage"] = `url(${this.$loadImgUrl(backgroundImage)})`;
      }
      if (backgroundSize) {
        styles["backgroundSize"] = backgroundSize;
      }
      if (backgroundRepeat) {
        styles["backgroundRepeat"] = backgroundRepeat;
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
    canvasBoxStyle() {
      let { boxZoom = 100 } = this;
      boxZoom = boxZoom / 100;
      let styles = {
        // left: `${left}px`,
        // top: `${top}px`,
        // backgroundColor: `${backgroundColor}`,
        transform: `scale(${boxZoom})`,
        // webkitTransform: `scale(${zoom})`,
        transformOrigin: `center top`
      };
      // if (backgroundImage) {
      //   styles["backgroundImage"] = `url(${backgroundImage})`;
      // }
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
        transformOrigin: `left top`
        // webkitTransform: `scale(${zoom}) translate(-50%,-50%)`
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
      setShowType: "canvas/setShowType",
      setPlatform: "setPlatform",
      setWidgetList: "canvas/setWidgetList", //设置组件列表
      setCanvas: "canvas/setCanvas"
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
          // let { infoType = "", dataType = "" } = data || {};
          // item.showCoverStatus = true;
          // item.infoType = infoType;
          // item.dataType = dataType;
          // item.alias = alias;
          let {
            // infoType = "",
            // dataType = "",
            bindData: _bindData = {}
            // dataCode = ""
          } = data || {};
          for (let i in data) {
            if (!item[i]) {
              item[i] = data[i];
            }
          }
          item.bindData = { ..._bindData, ...bindData };
          // item.infoType = infoType;
          // item.dataType = dataType;
          // item.dataCode = dataCode;
          if (type && type != "canvas") {
            widgets.push(item);
          }
        });
        this.setWidgetList(widgets || []);
        this.resetCanvasSize();
        this.loadWebsocketData(widgetList);
      });
      // });
    },
    initEvent() {
      $(window).on("resize", this.resetCanvasSize);
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
        this.commonGetDeviceFunc(deviceId, callback);
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
      let { boxZoom = 0 } = this;
      if (val) {
        boxZoom = boxZoom + val;
        if (boxZoom > 10 && boxZoom < 200) {
          this.boxZoom = boxZoom;
        }
      } else {
        this.boxZoom = 100;
      }
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
        });
      });
    },
    resetCanvasSize() {
      let $window = $(window);
      let w_height = $window.height();
      let w_width = $window.width();
      if (w_width < 1280) {
        w_width = 1280;
      }
      let { canvas = {} } = this;
      let { width = 0, height = 0 } = canvas || {};
      let h_ratio = w_height / height;
      let w_ratio = w_width / width;
      let scale = w_ratio;
      // let left = (w_width - width) / 2;
      // let top = ((w_height - height) * scale) / 2;
      if (h_ratio > w_ratio) {
        scale = h_ratio;
        // left = ((w_width - width) * scale) / 2;
        // top = (w_height - height) / 2;
      }
      // canvas.left = left;
      // canvas.top = top;
      this.setZoom(scale);
    },
    showInfoEvent(info = {}) {
      let { id = "" } = info || {};
      let key = `bmInfoCom_${id}`;
      this.$refs[key][0]?.show(info);
      // let { deviceId = "" } = bindData || {};
      // this.commonGetDeviceFunc(deviceId, device => {
      //   bmCommon.log(device);
      //   this.deviceInfo = device || {};
      // });
    },
    // 设备点位参数
    commonDeviceListFunc(ids = [], callback) {
      let value = [];
      this.commonDeviceListAction({ ids: JSON.stringify(ids) })
        .then(({ data }) => {
          let { code = "", result = [], message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            value = result || [];
          } else {
            bmCommon.error(message);
          }
          callback && callback(value || []);
        })
        .catch(err => {
          callback && callback(value || []);
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
    commonGetDeviceFunc(deviceId, callback) {
      let value = {};
      if (!deviceId) {
        callback && callback(value || {});
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
          callback && callback(value || {});
        })
        .catch(err => {
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
@import (less) "../assets/less/pages/view.less";
</style>

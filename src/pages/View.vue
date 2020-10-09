<template>
  <div class="bm-view-page">
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
            <bm-com
              class="view"
              v-for="(item, index) in widgetList"
              :data-type="item.type"
              :data-id="item.id"
              type="view"
              :info="item"
              :key="index"
            ></bm-com>
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
  name: "bm-view-page",
  data() {
    return {
      condition: {
        canvasId: ""
      },
      showContextMenuStatus: false,
      showContextMenuType: 1, //1 组件右键菜单   2是画布右键菜单
      copyCom: "",
      contextMenuStyle: {}
    };
  },
  components: {
    bmCom
  },
  computed: {
    ...mapGetters({
      widgetList: "canvas/getWidgetList", //组件列表
      viewData: "canvas/getPreviewData", //组件列表
      getZoom: "canvas/getZoom", //放大缩小
      leftMenuStatus: "canvas/getLeftMenuStatus", //获取左侧菜单栏状态
      rightMenuStatus: "canvas/getRightMenuStatus", //获取右侧菜单栏状态
      canvas: "canvas/getCanvas", //画布属性
      selectBox: "canvas/getSelectBox", //选取框
      activeComs: "canvas/getActiveComs", //选中对象
      activeCom: "canvas/getActiveCom" //选中对象
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
        // left: `${left}`,
        top: `${top}px`,
        // top: `${top}`,
        // backgroundColor: `${backgroundColor}`,
        transform: `scale(${zoom})`,
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
      setWidgetList: "canvas/setWidgetList", //设置组件列表
      setCanvas: "canvas/setCanvas"
    }),
    ...mapActions({
      initConfigWebsocketAction: "initConfigWebsocket",
      canvasGetAction: "canvasGet",
      pushAction: "push"
    }),
    init() {
      this.initEvent();
      let { condition, canvas = {}, $route } = this;
      let { query = {} } = $route;
      let { canvasId = "", type = 1 } = query || {};
      condition.canvasId = canvasId;
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
          canvas = _canvas || {};
        }
        canvas.name = name;
        canvas.width = width;
        canvas.height = height;
        canvas.canvasId = canvasId;
        canvas.canvasType = type; //1为编辑   2为预览
        this.setCanvas(canvas);
        this.setWidgetList(widgetList);
        this.resetCanvasSize();
        this.loadWebsocketData(widgetList);
      });
      // });
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
      this.initConfigWebsocketFunc(result => {
        bmCommon.log("initConfigWebsocketFunc", result);
      });
    },
    resetCanvasSize() {
      let $window = $(window);
      let w_height = $window.height();
      let w_width = $window.width();
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
@import (less) "../assets/less/pages/view.less";
</style>

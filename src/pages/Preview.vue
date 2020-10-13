<template>
  <div class="bm-preview-page">
    <!-- <bm-header ref="bmHeader"></bm-header> -->
    <div class="flex-content">
      <div class="content-box">
        <div class="view-box" ref="viewBox">
          <div
            class="canvas-box"
            ref="canvasBox"
            :style="canvasStyle"
            :class="canvas.action"
          >
            <div class="bg" :style="bgStyle">
              <!-- <div class="grid" :style="gridStyle"></div> -->
            </div>
            <bm-com
              class="preview"
              :class="{
                //active: activeComIds.indexOf(item.id) > -1,
                locked: item.locked
              }"
              v-for="(item, index) in widgetList"
              :data-type="item.type"
              :data-id="item.id"
              type="preview"
              :info="item"
              :key="index"
            ></bm-com>
          </div>
          <!-- <bm-lines ref="bmLines"></bm-lines> -->
          <!-- <div class="slider-box" @mousedown.stop>
            {{ $toBig(zoom, 0) + "%" }}
            <el-slider
              v-model="zoom"
              :max="200"
              @mousedown.stop
              :format-tooltip="val => val + '%'"
            ></el-slider>
          </div> -->
        </div>
        <!-- <bm-info ref="bmInfo" v-if="rightMenuStatus"></bm-info> -->
      </div>
    </div>
    <!-- <ul
      class="context-menu"
      ref="contextMenuBox"
      v-show="showContextMenuStatus"
      :style="contextMenuStyle"
    >
      <li
        @click="cutEvent"
        v-if="showContextMenuType == 1 && activeCom.locked"
      >
        剪切 <small>Ctrl+X</small>
      </li>
      <li
        @click="copyEvent"
        v-if="showContextMenuType == 1 && activeCom.locked"
      >
        复制<small>Ctrl+C</small>
      </li>
      <li @click="pasteEvent" v-if="showContextMenuType == 2 && !!copyCom">
        粘贴<small>Ctrl+V</small>
      </li>
      <li
        @click="moveUpEvent"
        v-if="showContextMenuType == 1 && activeCom.locked"
        class="line"
        :class="{ disabled: topOrder == activeCom.order }"
      >
        上移一层<small>Ctrl+[</small>
      </li>
      <li
        @click="moveDownEvent"
        :class="{ disabled: bottomOrder == activeCom.order }"
        v-if="showContextMenuType == 1 && activeCom.locked"
      >
        下移一层<small>Ctrl+]</small>
      </li>
      <li
        @click="moveTopEvent"
        :class="{ disabled: topOrder == activeCom.order }"
        v-if="showContextMenuType == 1 && activeCom.locked"
      >
        置于顶层<small>Ctrl+Shift+[</small>
      </li>
      <li
        @click="moveBottomEvent"
        :class="{ disabled: bottomOrder == activeCom.order }"
        v-if="showContextMenuType == 1 && activeCom.locked"
      >
        置于底层<small>Ctrl+Shift+]</small>
      </li>
      <li
        class="line"
        @click="lockEvent(false)"
        v-if="showContextMenuType == 1 && activeCom.locked"
      >
        锁定<small>Ctrl+Shift+L</small>
      </li>
      <li
        @click="lockEvent(true)"
        v-if="showContextMenuType == 1 && !activeCom.locked"
      >
        解锁<small>Ctrl+Shift+L</small>
      </li>
      <li
        @click="deleteEvent"
        v-if="showContextMenuType == 1 && activeCom.locked"
      >
        删除<small>Delete</small>
      </li>
    </ul> -->
    <!-- <bm-footer ref="bmFooter"></bm-footer> -->
    <!-- <bm-select ref="bmSelect"></bm-select> -->
  </div>
</template>
<script>
// import bmCommon from "@/common/common";
// import { Constants } from "@/common/env";
import bmCom from "@/components/component";
// import bmHeader from "@/components/header";
// import bmNav from "@/components/nav";
// import bmFooter from "@/components/footer";
// import mixins from "@/mixins";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "bm-preview-page",
  data() {
    return {
      // comList: [],
      // activeComIds: "",
      // condition: {
      //   zoom: 100
      // }
      showContextMenuStatus: false,
      showContextMenuType: 1, //1 组件右键菜单   2是画布右键菜单
      copyCom: "",
      // shiftCtrlKeyDownStatus: false, //shit ctrl键被按下
      contextMenuStyle: {}
    };
  },
  // mixins: [mixins],
  components: {
    // bmHeader,
    // bmNav,
    // : () =>
    //   import(/* webpackChunkName: "iot-header-com" */ "@/components/header"),
    // bmLines: () =>
    //   import(/* webpackChunkName: "iot-lines-com" */ "@/components/lines"),
    // bmSelect: () =>
    //   import(/* webpackChunkName: "iot-select-com" */ "@/components/select"),
    // bmFooter,
    // : () =>
    //   import(/* webpackChunkName: "iot-footer-com" */ "@/components/footer"),
    // bmInfo: () =>
    //   import(/* webpackChunkName: "iot-info-com" */ "@/components/info"),
    bmCom
    // : () =>
    //   import(
    //     /* webpackChunkName: "iot-component-com" */ "@/components/component"
    //   ),
    // bmWidgetList: () =>
    //   import(
    //     /* webpackChunkName: "iot-widget-list-com" */ "@/components/widget-list"
    //   )
  },
  computed: {
    ...mapGetters({
      widgetList: "canvas/getWidgetList", //组件列表
      previewData: "canvas/getPreviewData", //组件列表
      getZoom: "canvas/getZoom", //放大缩小
      leftMenuStatus: "canvas/getLeftMenuStatus", //获取左侧菜单栏状态
      rightMenuStatus: "canvas/getRightMenuStatus", //获取右侧菜单栏状态
      canvas: "canvas/getCanvas", //画布属性
      selectBox: "canvas/getSelectBox", //选取框
      activeComs: "canvas/getActiveComs", //选中对象
      activeCom: "canvas/getActiveCom" //选中对象
    }),
    // bottomOrder() {
    //   let { widgetList = [] } = this;
    //   let orders = widgetList.map(item => item.order);
    //   let order = Math.min(...orders);
    //   return order;
    // },
    // topOrder() {
    //   let { widgetList = [] } = this;
    //   let orders = widgetList.map(item => item.order);
    //   let order = Math.max(...orders);
    //   return order;
    // },
    zoom: {
      get() {
        return parseInt(this.getZoom * 100);
      },
      set(val) {
        this.setZoom(val / 100);
      }
    },
    // activeComIds() {
    //   // let { activeCom = {} } = this;
    //   // let { id = "" } = activeCom || {};
    //   // return id || "";
    //   let {
    //     // widgetList = [],
    //     // selectBox = {},
    //     activeComs = [],
    //     activeCom = {}
    //   } = this;
    //   let ids = [];
    //   let { length = 0 } = activeComs || [];
    //   if (length > 1) {
    //     ids = activeComs.map(item => item.id);
    //   } else {
    //     let { id = "" } = activeCom || {};
    //     ids.push(id);
    //   }
    //   return ids || [];
    // },
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
        webkitTransform: `scale(${zoom})`
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
      setActiveCom: "canvas/setActiveCom",
      setActiveComs: "canvas/setActiveComs",
      initMove: "canvas/initMove",
      setLinkPoint: "canvas/setLinkPoint", //设置连接点信息
      moving: "canvas/moving",
      stopMove: "canvas/stopMove"
    }),
    ...mapActions({
      selectComAction: "canvas/selectCom",
      selectComsAction: "canvas/selectComs"
    }),
    init() {
      this.initEvent();
      // this.$nextTick(() => {
      //   let $canvasBox = $(this.$refs.canvasBox);
      //   let { canvas = {} } = this;
      //   let width = $canvasBox.innerWidth();
      //   let height = $canvasBox.innerHeight();
      //   canvas.width = width;
      //   canvas.height = height;
      // });
      let { previewData = {} } = this;
      let { widgetList = [], canvas = {} } = previewData || {};
      this.setWidgetList(widgetList || []);
      this.setCanvas(canvas || {});
    },
    initEvent() {
      $(window).on("resize", this.resetCanvasSize);
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

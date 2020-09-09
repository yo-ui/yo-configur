<template>
  <div class="bm-index-page">
    <bm-header ref="bmHeader"></bm-header>
    <div class="content-box">
      <bm-widget-list ref="bmWidgetList"></bm-widget-list>
      <div class="view-box" ref="viewBox">
        <!-- {{activeComId}} -->
        <!-- :active="activeComId == item.id" -->
        <!-- @drop="dropEvent" -->
        <div
          class="canvas-box"
          ref="canvasBox"
          :style="canvasStyle"
          :class="canvas.action"
        >
          <!-- @mousedown.native.stop.prevent="mousedownEvent(item)" -->
          <div class="bg" :style="gridStyle"></div>
          <bm-com
            :class="{ active: activeComId == item.id }"
            v-for="(item, index) in widgetList"
            :data-type="item.type"
            :data-id="item.id"
            :type="item.type"
            :info="item"
            :key="index"
          ></bm-com>
        </div>
        <div class="slider-box">
          {{ $toBig(zoom, 0) + "%" }}
          <!-- @input="changeZoomEvent" -->
          <el-slider
            v-model="zoom"
            :max="200"
            :format-tooltip="val => val + '%'"
          ></el-slider>
        </div>
      </div>
      <bm-info ref="bmInfo"></bm-info>
    </div>
    <ul
      class="context-menu"
      ref="contextMenuBox"
      v-show="showContextMenuStatus"
      :style="contextMenuStyle"
    >
      <li
        @click="cutEvent"
        v-if="showContextMenuType == 1 && activeCom.dragable"
      >
        剪切 <small>Ctrl+X</small>
      </li>
      <li
        @click="copyEvent"
        v-if="showContextMenuType == 1 && activeCom.dragable"
      >
        复制<small>Ctrl+C</small>
      </li>
      <li @click="pasteEvent" v-if="showContextMenuType == 2 && !!copyCom">
        粘贴<small>Ctrl+V</small>
      </li>
      <li
        @click="moveUpEvent"
        v-if="showContextMenuType == 1 && activeCom.dragable"
        class="line"
        :class="{ disabled: topOrder == activeCom.order }"
      >
        上移一层<small>Ctrl+[</small>
      </li>
      <li
        @click="moveDownEvent"
        :class="{ disabled: bottomOrder == activeCom.order }"
        v-if="showContextMenuType == 1 && activeCom.dragable"
      >
        下移一层<small>Ctrl+]</small>
      </li>
      <li
        @click="moveTopEvent"
        :class="{ disabled: topOrder == activeCom.order }"
        v-if="showContextMenuType == 1 && activeCom.dragable"
      >
        置于顶层<small>Ctrl+Shift+[</small>
      </li>
      <li
        @click="moveBottomEvent"
        :class="{ disabled: bottomOrder == activeCom.order }"
        v-if="showContextMenuType == 1 && activeCom.dragable"
      >
        置于底层<small>Ctrl+Shift+]</small>
      </li>
      <li
        class="line"
        @click="lockEvent(false)"
        v-if="showContextMenuType == 1 && activeCom.dragable"
      >
        锁定<small>Ctrl+Shift+L</small>
      </li>
      <li
        @click="lockEvent(true)"
        v-if="showContextMenuType == 1 && !activeCom.dragable"
      >
        解锁<small>Ctrl+Shift+L</small>
      </li>
      <li
        @click="deleteEvent"
        v-if="showContextMenuType == 1 && activeCom.dragable"
      >
        删除<small>Delete</small>
      </li>
    </ul>
    <bm-footer ref="bmFooter"></bm-footer>
  </div>
</template>
<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
import bmCom from "@/components/component";
import mixins from "@/mixins";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  data() {
    return {
      // comList: [],
      // activeComId: "",
      // condition: {
      //   zoom: 100
      // }
      showContextMenuStatus: false,
      showContextMenuType: 1, //1 组件右键菜单   2是画布右键菜单
      copyCom: "",
      contextMenuStyle: {}
    };
  },
  mixins: [mixins],
  components: {
    bmHeader: () =>
      import(/* webpackChunkName: "iot-header-com" */ "@/components/header"),
    bmFooter: () =>
      import(/* webpackChunkName: "iot-footer-com" */ "@/components/footer"),
    bmInfo: () =>
      import(/* webpackChunkName: "iot-info-com" */ "@/components/info"),
    bmCom,
    // : () =>
    //   import(
    //     /* webpackChunkName: "iot-component-com" */ "@/components/component"
    //   ),
    bmWidgetList: () =>
      import(
        /* webpackChunkName: "iot-widget-list-com" */ "@/components/widget-list"
      )
  },
  computed: {
    ...mapGetters({
      widgetList: "canvas/getWidgetList", //组件列表
      getZoom: "canvas/getZoom", //放大缩小
      canvas: "canvas/getCanvas", //画布属性
      activeCom: "canvas/getActiveCom" //选中对象
    }),
    bottomOrder() {
      let { widgetList = [] } = this;
      let orders = widgetList.map(item => item.order);
      let order = Math.min(...orders);
      return order;
    },
    topOrder() {
      let { widgetList = [] } = this;
      let orders = widgetList.map(item => item.order);
      let order = Math.max(...orders);
      return order;
    },
    zoom: {
      get() {
        return parseInt(this.getZoom * 100);
      },
      set(val) {
        this.setZoom(val / 100);
      }
    },
    activeComId() {
      let { activeCom = {} } = this;
      let { id = "" } = activeCom || {};
      return id;
    },
    gridStyle() {
      let { canvas = {} } = this;
      let { isGrid = false, gridStyle = {} } = canvas;

      let styles = {};
      if (isGrid) {
        let { width, height } = gridStyle || {};
        styles[
          "background"
        ] = `linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / ${width}px ${height}px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / ${width}px ${height}px`;
      }
      return styles || {};
    },
    canvasStyle() {
      let { zoom = 0, canvas = {} } = this;
      let {
        left = 0,
        top = 0,
        height = "",
        width = "",
        backgroundColor = "#fff",
        backgroundImage = ""
      } = canvas;
      zoom = zoom / 100;
      let styles = {
        left: `${left}px`,
        top: `${top}px`,
        // backgroundImage: ``,
        backgroundColor: `${backgroundColor}`,
        transform: `scale(${zoom})`,
        "-webkit-transform": `scale(${zoom})`,
        "-ms-transform": `scale(${zoom})`,
        "-o-transform": `scale(${zoom})`,
        "-moz-transform": `scale(${zoom})`
      };
      if (width) {
        styles["width"] = `${width}px`;
      }
      if (height) {
        styles["height"] = `${height}px`;
      }
      if (backgroundImage) {
        styles["backgroundImage"] = `url(${backgroundImage})`;
      }
      return styles || {};
    }
  },
  methods: {
    ...mapMutations({
      setZoom: "canvas/setZoom",
      setWidgetList: "canvas/setWidgetList", //设置组件列表
      // setActiveComId: "canvas/setActiveComId",
      setActiveCom: "canvas/setActiveCom",
      initMove: "canvas/initMove",
      moving: "canvas/moving",
      stopMove: "canvas/stopMove"
    }),
    ...mapActions({ selectComAction: "canvas/selectCom" }),
    init() {
      this.initEvent();
      this.$nextTick(() => {
        let $canvasBox = $(this.$refs.canvasBox);
        let { info = {} } = this;
        let width = $canvasBox.width();
        let height = $canvasBox.height();
        info.width = width;
        info.height = height;
      });
    },
    initEvent() {
      let viewBox = this.$refs.viewBox;
      $(viewBox).on("mousedown", this.viewBoxMousedownEvent);
      $(viewBox).on("contextmenu", this.viewBoxContextmenuEvent);
      $(viewBox).on("keydown", this.keydownEvent);
      $(document).on("mousedown", this.keydownEvent);
      this.selectComAction();
    },
    viewBoxContextmenuEvent(e) {
      e.stopPropagation();
      e.preventDefault();
      this.showContextMenuStatus = true;

      this.$nextTick(() => {
        let pos = bmCommon.getMousePosition(e);
        let { x = "", y = "" } = pos || {};
        let contextMenuBox = this.$refs.contextMenuBox;
        let { offsetHeight = 0 } = contextMenuBox || {};
        let { innerHeight = 0 } = window;
        y = y > innerHeight - offsetHeight ? innerHeight - offsetHeight : y;
        this.contextMenuStyle = {
          left: x + "px",
          top: y + "px"
        };
      });
    },
    viewBoxMousedownEvent(e) {
      let { target } = e;
      let $parent = $(target).parent();
      let type = $(target).attr("data-type");
      let id = $(target).attr("data-id");
      if (!type) {
        type = $parent.attr("data-type");
        id = $parent.attr("data-id");
      }
      if (type) {
        this.showContextMenuType = 1;
        this.selectComAction(id); //选中组件
        // 绑定移动事件：只有从属于 page 的，除背景图以外的元件才能移动
        let { activeCom = {} } = this;
        if (activeCom.dragable) {
          this.initMoveEvent(e); // 参见 mixins
        }
      } else {
        this.showContextMenuType = 2;
        // 取消选中组件
        this.selectComAction(id);
      }
      this.showContextMenuStatus = false;
    },
    keydownEvent(e) {
      let { keyCode = "" } = e;
      e.stopPropagation();
      // e.preventDefault();
      let { activeCom } = this;
      let { left, top } = activeCom || {};
      if (keyCode === 37) {
        // 左
        activeCom.left -= 1;
        bmCommon.log("左", activeCom);
      } else if (keyCode === 38) {
        // 上
        activeCom.top -= 1;
        bmCommon.log("上", activeCom);
      } else if (keyCode === 39 && left) {
        // 右
        activeCom.left += 1;
        bmCommon.log("右", activeCom);
      } else if (keyCode === 40 && top) {
        // 下
        activeCom.top += 1;
        bmCommon.log("下", activeCom);
      }
    },
    //剪切
    cutEvent() {
      let { activeCom = {}, widgetList = [] } = this;
      let { id = "" } = activeCom;
      this.copyCom = bmCommon.clone(activeCom || {});
      let index = widgetList.findIndex(item => id == item.id);
      widgetList.splice(index, 1);
      this.selectComAction();
      this.showContextMenuStatus = false;
    },
    // 复制
    copyEvent() {
      let { activeCom = {} } = this;
      this.copyCom = bmCommon.clone(activeCom || {});
      this.showContextMenuStatus = false;
    },
    // 粘贴
    pasteEvent(e) {
      let { copyCom = {}, widgetList = [] } = this;
      let id = bmCommon.uuid();
      // let obj = widgetList[widgetList.length - 1] || {};
      let { width = 0, height = 0 } = copyCom || {};
      let pos = bmCommon.getMousePosition(e, { x: 310, y: 90 });
      let { x: left = "", y: top = "" } = pos || {};
      let orders = widgetList.map(item => item.order);
      let order = Math.max(...orders);
      order += 1;
      let item = {
        ...copyCom,
        id,
        order,
        left: left - width / 2,
        top: top - height / 2
      };
      widgetList.push(item);
      this.setActiveCom(item);
    },
    // 删除
    deleteEvent() {
      let { activeCom = {}, widgetList = [] } = this;
      let { id = "" } = activeCom;
      let index = widgetList.findIndex(item => id == item.id);
      widgetList.splice(index, 1);
      this.selectComAction();
      this.showContextMenuStatus = false;
    },
    // 锁定/解锁
    lockEvent(dragable) {
      let { activeCom = {} } = this;
      activeCom.dragable = dragable;
      this.showContextMenuStatus = false;
    },
    // 上移一层
    moveUpEvent() {
      this.showContextMenuStatus = false;
      let { activeCom = {}, widgetList = [] } = this;
      let { order = "" } = activeCom;
      let obj = widgetList.find(item => order < item.order);
      let { order: _order = "" } = obj || {};
      activeCom.order = _order;
      obj.order = order;
    },
    // 下移一层
    moveDownEvent() {
      this.showContextMenuStatus = false;
      let { activeCom = {}, widgetList = [] } = this;
      let { order = "" } = activeCom;
      let obj = widgetList.find(item => order > item.order);
      let { order: _order = "" } = obj || {};
      activeCom.order = _order;
      obj.order = order;
    },
    // 置顶
    moveBottomEvent() {
      this.showContextMenuStatus = false;
      let { activeCom = {}, widgetList = [] } = this;
      let orders = widgetList.map(item => item.order);
      let order = Math.min(...orders);
      let { order: _order = 1 } = activeCom || {};
      if (order == _order) {
        return;
      }
      widgetList.forEach(item => {
        item.order++;
      });
      activeCom.order = 1;
    },
    // 置底
    moveTopEvent() {
      this.showContextMenuStatus = false;
      let { activeCom = {}, widgetList = [] } = this;
      let orders = widgetList.map(item => item.order);
      let order = Math.max(...orders);
      let { order: _order = 1 } = activeCom || {};
      if (order == _order) {
        return;
      }
      activeCom.order = order + 1;
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    let canvas = this.$refs.canvas;
    $(canvas).off("mousedown");
    $(document).off("keydown");
  }
};
</script>
<style lang="less">
@import (less) "../assets/less/pages/index.less";
</style>

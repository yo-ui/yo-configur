<template>
  <div class="bm-index-page">
    <bm-header ref="bmHeader"></bm-header>
    <div class="content-box">
      <bm-widget-list ref="bmWidgetList"></bm-widget-list>
      <div class="view-box" ref="viewBox">
        <!-- {{activeComId}} -->
        <!-- :active="activeComId == item.id" -->
        <!-- @drop="dropEvent" -->
        <div class="canvas-box" :style="canvasStyle" :class="canvas.action">
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
      // height: "canvas/getHeight", //画布高度
      // width: "canvas/getWidth", //画布宽度
      // backgroundColor: "canvas/getBackgroundColor", //画布颜色
      // backgroundImage: "canvas/getBackgroundImage", //画布背景图
      // isGrid: "canvas/getIsGrid", //画布是否显示网格
      // activeComId: "canvas/getActiveComId", //是否选中
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
    // mousedownEvent(item) {
    //   let { id = "" } = item || {};
    //   this.activeComId = id;
    // },
    init() {
      this.initEvent();
    },
    // changeZoomEvent(val) {
    //   this.setZoom(val / 100);
    // },
    initEvent() {
      let viewBox = this.$refs.viewBox;
      $(viewBox).on("mousedown", this.viewBoxMouseDownEvent);
      $(viewBox).on("keydown", this.keydownEvent);
      this.selectComAction();
    },
    viewBoxMouseDownEvent(e) {
      let { target } = e;
      let $parent = $(target).parent();
      // .getAttribute('data-type')
      // let {data-type:dataType=''}=attrs||{}
      let type = $(target).attr("data-type");
      if(!type){
        type = $parent.attr("data-type");
      }
      let id = "";
      if (type) {
        id = $parent.attr("data-id");
        // var uuid = target.getAttribute('data-uuid')

        // 设置选中元素
        // this.$vpd.commit('select', {
        //   uuid: uuid || -1
        // })
        // this.setActiveComId(id);
        // this.setActiveCom(id);
        this.selectComAction(id); //选中取消组件

        // 绑定移动事件：只有从属于 page 的，除背景图以外的元件才能移动
        // target = this.$vpd.state.activeElement;
        let { activeCom = {} } = this;
        if (activeCom.dragable) {
          this.initMoveEvent(e); // 参见 mixins
        }
      } else {
        // 取消选中元素
        // this.$vpd.commit('select', {
        //   uuid: -1
        // })
        // this.setActiveComId("");
        this.selectComAction(id); //选中取消组件
      }
    },
    keydownEvent(e) {
      let { keyCode = "" } = e;
      e.stopPropagation();
      // e.preventDefault();
      // bmCommon.log("------", keyCode);
      let { activeCom } = this;
      // let $activeCom = $(activeCom);
      // let { offset = {} } = activeCom;
      let { left, top } = activeCom || {};
      // 左
      if (keyCode === 37) {
        // target.left -= 1;
        // left--;
        activeCom.left -= 1;
        bmCommon.log("左", activeCom);
      } else if (keyCode === 38) {
        // 上
        // e.preventDefault();
        // target.top -= 1;
        // top--;
        // $activeCom.css({ top });
        activeCom.top -= 1;
        bmCommon.log("上", activeCom);
      } else if (keyCode === 39 && left) {
        // 右
        // target.left += 1;
        // left++;
        // $activeCom.css({ left });
        activeCom.left += 1;
        bmCommon.log("右", activeCom);
      } else if (keyCode === 40 && top) {
        // 下
        // e.preventDefault();
        // target.top += 1;
        // top++;
        // $activeCom.css({ top });
        activeCom.top += 1;
        bmCommon.log("下", activeCom);
      }
    }
  },
  mounted() {
    // let widgetList = [
    //   {
    //     type: "button",
    //     name: "按钮",
    //     id: 1,
    //     order: 1,
    //     dragable: true,
    //     left: 500,
    //     width: 200,
    //     height: 60,
    //     rotate: 0,
    //     top: 0,
    //     editable: false,
    //     content: "按钮"
    //   },
    //   {
    //     type: "text",
    //     name: "静态文本",
    //     id: 2,
    //     order: 2,
    //     dragable: true,
    //     left: 0,
    //     width: 300,
    //     height: 60,
    //     rotate: 0,
    //     top: 0,
    //     editable: false,
    //     content: "静态文本"
    //   },
    //   {
    //     type: "dynamicText",
    //     name: "动态文本",
    //     order: 3,
    //     id: 3,
    //     dragable: true,
    //     left: 800,
    //     width: 300,
    //     height: 60,
    //     rotate: 0,
    //     top: 0,
    //     editable: true,
    //     content: "动态文本"
    //   },
    //   {
    //     type: "image",
    //     id: 4,
    //     dragable: true,
    //     rotate: 0,
    //     width: 300,
    //     order: 4,
    //     height: 300,
    //     left: 0,
    //     top: 0,
    //     backgroundImage: "//pic.energyiot.cn/upload/180817095543907.jpg"
    //   }
    // ];
    // this.setWidgetList(widgetList);
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

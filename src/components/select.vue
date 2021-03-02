<template>
  <div v-show="showBoxStatus" class="bm-select-com" :style="comStyle">
    <!-- {{ $store.state.canvas.moving }} -->
    <!-- {{ selectBox }} -->
  </div>
</template>

<script>
// import vpd from '../../mixins/vpd'
import bmCommon from "@/common/common";
import Canvas from "@/core/Canvas";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters, mapState } = Vuex;
// let padding = 20;
export default {
  name: "bmSelectCom",
  data() {
    return {
      showBoxStatus: false
      // moving: false
      // selectBox: {
      //   left: 0,
      //   top: 0,
      //   width: 0,
      //   height: 0
      // }
    };
  },
  computed: {
    ...mapState({
      // moving: state => state.canvas.moving
    }),
    ...mapGetters({
      // widgetList: "canvas/getWidgetList", //组件列表
      // activeCom: "canvas/getActiveCom", //选中组件
      // activeComs: "canvas/getActiveComs", //选中组件
      selectBox: "canvas/getSelectBox", //选取框
      // zoom: "canvas/getZoom", //放大缩小
      canvas: "canvas/getCanvas" //画布组件
    }),
    // moving(){
    //   return this.$store?.state?.canvas?.moving;
    // },
    comStyle() {
      let { selectBox = {} } = this;
      let {
        left = 0,
        top = 0,
        width = 0,
        height = 0
        // transformOrigin = "left top"
      } = selectBox;
      return {
        left: `${left}px`,
        top: `${top}px`,
        // transform: `scale(${zoom})`,
        // webkitTransform: `scale(${zoom})`,
        // transformOrigin: `${transformOrigin}`,
        width: `${width}px`,
        height: `${height}px`
      };
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    $(".content-box").off("mousedown", this.mousedownEvent);
    $(document).off("mousemove", this.mousemoveEvent);
    $(document).off("mouseup", this.mouseupEvent);
  },
  methods: {
    ...mapMutations({
      // setSelectBox: "canvas/setSelectBox",
      // setActiveComs: "canvas/setActiveComs",
      // setActiveCom: "canvas/setActiveCom"
    }),
    ...mapActions(),
    init() {
      $(".content-box").on("mousedown", this.mousedownEvent);
    },
    mousedownEvent(e) {
      let { selectBox = {}, canvas = {} } = this;
      let { target } = e;
      let { action = "" } = canvas || {};
      let $parent = $(target).parents(".bm-component-com");
      let type = $(target).attr("type");
      if (!type) {
        type = $parent.attr("type");
      }
      // bmCommon.log(e.clientX, e.clientY, x, y, e.target);
      this.showBoxStatus = false;
      if (action != "select") {
        return;
      }
      if (type) {
        selectBox.left = 0;
        selectBox.top = 0;
        selectBox.width = 0;
        selectBox.height = 0;
        return;
      }
      // let pos = bmCommon.getMousePosition(e, { x: 310, y: 90 });
      e.stopPropagation();
      // this.setActiveCom(canvas);
      let pos = bmCommon.getMousePosition(e);
      let { x = "", y = "" } = pos || {};
      selectBox.left = x;
      selectBox.top = y;
      selectBox.originX = x;
      selectBox.originY = y;
      selectBox.width = 0;
      selectBox.height = 0;
      selectBox.moving = true;
      this.selectBoxShowStatus = true;
      // bmCommon.log(e.clientX, e.clientY, x, y);
      $(document).on("mousemove", this.mousemoveEvent);
      $(document).on("mouseup", this.mouseupEvent);
    },
    mousemoveEvent(e) {
      e.stopPropagation();
      e.preventDefault();
      let { selectBox = {} } = this;
      let { moving, originX = 0, originY = 0 } = selectBox || {};
      if (!moving) {
        this.showBoxStatus = false;
        return;
      }
      // let pos = bmCommon.getMousePosition(e, { x: 310, y: 150 });
      let pos = bmCommon.getMousePosition(e);
      let { x = 0, y = 0 } = pos || {};
      this.canvasSelect({ x, y, originX, originY });
    },
    mouseupEvent() {
      let { selectBox } = this;
      selectBox.moving = false;
      this.showBoxStatus = false;
      let bm_active_com_ids = window.bm_active_com_ids || [];
      let [bm_active_com_id = ""] = bm_active_com_ids || [];
      bmCommon.log("select 鼠标松开", bm_active_com_ids, bm_active_com_id);
      this.mouseupSetTimeoutId = setTimeout(() => {
        clearTimeout(this.mouseupSetTimeoutId);
        Canvas.setActiveCom(bm_active_com_id);
        if (bm_active_com_ids.length < 1) {
          Canvas.unactive();
        }
      }, 10);
      $(document).off("mousemove", this.mousemoveEvent);
      $(document).off("mouseup", this.mouseupEvent);
    },
    canvasSelect(item = {}) {
      let { selectBox } = this;
      let { x = 0, y = 0, originX: startX = 0, originY: startY = 0 } =
        item || {};

      // bmCommon.log("item=", item,x,y);
      // let { } = selectBox || {};
      let dx = x - startX;
      let dy = y - startY;

      // if (dx > 5 || dy > 5) {
      this.showBoxStatus = true;
      // }
      // selectBox.transformOrigin = "left top";
      if (dx < 0) {
        // selectBox.transformOrigin = "right bottom";
        selectBox.left = x;
        selectBox.width = Math.abs(dx);
      } else {
        selectBox.width = Math.abs(dx);
      }
      if (dy < 0) {
        selectBox.top = y;
        selectBox.height = Math.abs(dy);
      } else {
        selectBox.height = Math.abs(dy);
      }
      this.selectComs(selectBox);
      // bmCommon.log(dx, dy, startX, startY, x, y, selectBox);
      // selectBox.width = Math.abs(dx);
      // selectBox.height = Math.abs(dy);
    },
    //计算组件是否被框选
    selectComs(selectBox = {}) {
      // let {
      //   // widgetList = [],
      //   // selectBoxShowStatus = false
      //   // selectBox = {},
      //   // activeComs = [],
      //   // activeCom = {}
      //   // zoom = 1,
      //   // canvas = {}
      // } = this;
      let bm_active_com_ids = [];
      // let bm_active_com_id = window.bm_active_com_id;
      let bm_widgetMap = window.bm_widgetMap || {};
      // let widgets = [];
      let {
        // moving = false,
        left: boxX = 0,
        top: boxY = 0,
        width: boxWidth = 0,
        height: boxHeight = 0
      } = selectBox || {};
      // let offset = $(".view-box").offset();
      // let canvas_offset = document
      //   .querySelector(".canvas-box")
      //   .getBoundingClientRect();
      // let { left = 0, top = 0 } = canvas_offset || {};
      // boxX = boxX + left;
      // boxY = boxY + top;
      let boxX1 = boxX + boxWidth;
      let boxY1 = boxY + boxHeight;
      let points = [];
      points.push([boxX, boxY]);
      points.push([boxX1, boxY]);
      points.push([boxX, boxY1]);
      points.push([boxX1, boxY1]);
      Canvas.unactive();
      // points = new SVG.PointArray(points).size(
      //   boxWidth * zoom,
      //   boxHeight * zoom
      // );
      // let ids = [];
      if (boxWidth > 1) {
        // widgetList.forEach((item, index) => {
        for (let i in bm_widgetMap) {
          // let { left: x = 0, top: y = 0, width = 0, height = 0 } = item || {};
          let obj = bm_widgetMap[i];
          let { info = {} } = obj || {};
          let { id = "", locked = false } = info || {};
          bmCommon.log("-----select.vue", info);
          let com = document.getElementById(id);
          let rect = com.getBoundingClientRect();
          let { left: x = 0, top: y = 0, width = 0, height = 0 } = rect || {};
          // x = x + left;
          // y = y + top;
          let x1 = x + width;
          let y1 = y + height;
          //四点全在范围内
          // if (
          //   !locked &&
          //   bmCommon.isInPolygon([x, y], points) &&
          //   bmCommon.isInPolygon([x1, y], points) &&
          //   bmCommon.isInPolygon([x, y1], points) &&
          //   bmCommon.isInPolygon([x1, y1], points)
          // ) {
          // 只要有一点在范围内
          if (
            !locked &&
            (bmCommon.isInPolygon([x, y], points) ||
              bmCommon.isInPolygon([x1, y], points) ||
              bmCommon.isInPolygon([x, y1], points) ||
              bmCommon.isInPolygon([x1, y1], points))
          ) {
            // ids.push(id);
            // bmCommon.log(selectBoxShowStatus, "------",index);
            // if (selectBoxShowStatus) {
            //   // bmCommon.log(selectBoxShowStatus, "#######");
            //   this.selectBoxShowStatus = false;
            //   if (bm_active_com_id != id) {
            //     // this.setActiveCom(info);
            //     window.bm_active_com_id = id;
            //   }
            // }
            // widgets.push(item);
            bm_active_com_ids.push(id);
            Canvas.active(id);
          }
        }
        // if (bm_active_com_ids.length < 1) {
        //   this.setActiveCom(canvas);
        //   Canvas.unactive();
        // }
        window.bm_active_com_ids = bm_active_com_ids;
      }

      bmCommon.log(
        "-----鼠标移动select.vue",
        window.bm_active_com_i,
        window.bm_active_com_ids
      );
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../assets/less/common.less";
.bm-select-com {
  .squ(100%);
  // transform-origin: left top;
  .posa;
  .bor(1px solid #0a57ca);
  pointer-events: none;
  z-index: 999;
  top: 0;
  left: 0;
  .bc(rgba(148, 148, 249, 0.386));
}
</style>

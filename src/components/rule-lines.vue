<template>
  <div class="bm-rule-lines-com">
    <!-- 竖 -->
    <div
      class="v-line"
      :style="{ left: `${item.left}px` }"
      @mousedown.stop="moveVEvent($event, item)"
      v-for="(item, index) in vLines"
      :key="`v_${index}`"
    >
      <!-- {{ item.id }} -->
    </div>
    <!-- 横 -->
    <div
      class="h-line"
      :style="{ top: `${item.top}px` }"
      @mousedown.stop="moveHEvent($event, item)"
      v-for="(item, index) in hLines"
      :key="`h_${index}`"
    >
      <!-- {{ item.id }} -->
    </div>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters, mapState } = Vuex;
// let padding = 0;
const state = {};
export default {
  name: "bmRuleLinesCom",
  // mixins: [vpd],
  data() {
    return {
      vLines: [],
      hLines: [],
      activeVLine: {}, //激活横线
      activeHLine: {} //激活竖线
    };
  },
  computed: {
    ...mapState({
      // moving: state => state.canvas.moving
    }),
    ...mapGetters({
      zoom: "canvas/getZoom" //放大缩小
      // widgetList: "canvas/getWidgetList", //组件列表
      // activeCom: "canvas/getActiveCom", //选中组件
      // activeComs: "canvas/getActiveComs", //选中组件
      // moving: "canvas/getMoving", //获取鼠标移动状态
      // canvas: "canvas/getCanvas" //画布组件
    })
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapMutations(),
    ...mapActions(),
    init() {
      $(".left-rule").on("mousedown", this.leftRuleMouseDownEvent);
      $(".left-top-rule").on("mousedown", this.leftTopRuleMouseDownEvent);
      $(".top-rule").on("mousedown", this.topRuleMouseDownEvent);
    },
    leftRuleMouseDownEvent(e) {
      e.stopPropagation();
      this.mousedownEvent(e, "left");
    },
    leftTopRuleMouseDownEvent(e) {
      e.stopPropagation();
      this.mousedownEvent(e, "left-top");
    },
    topRuleMouseDownEvent(e) {
      e.stopPropagation();
      this.mousedownEvent(e, "top");
    },
    moveVEvent(e, item) {
      this.activeVLine = item || {};
      this.mousedownEvent(e, "move-v");
    },
    moveHEvent(e, item) {
      this.activeHLine = item || {};
      this.mousedownEvent(e, "move-h");
    },

    mousedownEvent(e, direction) {
      e.stopPropagation();
      e.preventDefault();
      let {
        vLines = [],
        hLines = [],
        activeHLine = {},
        activeVLine = {}
      } = this;
      let pos = bmCommon.getMousePosition(e);
      let { x = "", y = "" } = pos || {};
      // let {
      //   width: originWidth = "",
      //   height: originHeight = "",
      //   left,
      //   top,
      //   rotate: originRotate = ""
      // } = info || {};
      this.direction = direction;
      let originX = 0,
        originY = 0;
      // bmCommon.log("top==",direction);
      if (direction == "left") {
        //左边拉出标尺线
        let activeVLine = { left: 0, top: 0, id: bmCommon.uuid() };
        this.activeVLine = activeVLine || {};
        vLines.push(activeVLine);
        let { left = 0 } = activeVLine || {};
        originX = left;
      } else if (direction == "top") {
        //上边拉出标尺线
        let activeHLine = { left: 0, top: 0, id: bmCommon.uuid() };
        this.activeHLine = activeHLine || {};
        hLines.push(activeHLine);
        let { top = 0 } = activeHLine || {};
        originY = top;
      } else if (direction == "left-top") {
        //左上用拉出标尺线
        let activeHLine = { left: 0, top: 0, id: bmCommon.uuid() };
        let activeVLine = { left: 0, top: 0, id: bmCommon.uuid() };
        this.activeHLine = activeHLine || {};
        this.activeVLine = activeVLine || {};
        hLines.push(activeHLine);
        vLines.push(activeVLine);
        let { top = 0 } = activeHLine || {};
        originY = top;
        let { left = 0 } = activeVLine || {};
        originX = left;
      } else {
        let { top = 0 } = activeHLine || {};
        originY = top;
        let { left = 0 } = activeVLine || {};
        originX = left;
      }
      // this.setActiveCom(info);
      this.initMove({
        startX: x,
        startY: y,
        originX,
        originY
        // originRotate,
        // originWidth,
        // originHeight
      });
      $(document).on("mousemove", this.mousemoveEvent);
      $(document).on("mouseup", this.mouseupEvent);
    },
    initMove(item) {
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
    mousemoveEvent(e) {
      e.stopPropagation();
      let pos = bmCommon.getMousePosition(e);
      let { x = "", y = "" } = pos || {};
      let { direction = "" } = this;
      this.moving({
        x,
        y,
        direction
      });
    },

    mouseupEvent(e) {
      $(document).off("mousemove", this.mousemoveEvent);
      $(document).off("mouseup", this.mouseupEvent);
      // this.stopMove();
      // this.rotating = false;
      // this.resizing = false;
    },
    // 调整元件尺寸
    moving(item) {
      let { x, y, direction = "" } = item || {};
      let { startX, startY, originY = 0, originX = 0 } = state;
      let {
        zoom,
        activeVLine = {},
        activeHLine = {},
        vLines = [],
        hLines = []
      } = this;
      state.moving = false;
      var dx = x - startX;
      var dy = y - startY;
      if (direction === "top" || direction === "move-h") {
        // let { top: originY = 0 } = activeHLine || {};
        let top = originY + Math.floor(dy / zoom);
        if (top < 0) {
          //移除对应标尺线
          let index = hLines.findIndex(item => item.id == activeHLine.id);
          if (index > -1) {
            hLines.splice(index, 1);
          }
          return;
        }
        activeHLine.top = top;
        return;
      } else if (direction === "left" || direction === "move-v") {
        // let { left: originX = 0 } = activeVLine || {};
        let left = originX + Math.floor(dx / zoom);
        if (left < 0) {
          //移除对应标尺线
          let index = vLines.findIndex(item => item.id == activeVLine.id);
          if (index > -1) {
            vLines.splice(index, 1);
          }
          return;
        }
        // bmCommon.log(direction,activeVLine)
        activeVLine.left = left;
        return;
      } else if (direction === "left-top") {
        // let { top: originY = 0 } = activeHLine || {};
        // let { left: originX = 0 } = activeVLine || {};
        let top = originY + Math.floor(dy / zoom);
        let left = originX + Math.floor(dx / zoom);
        // if (left < 0) {
        //   //移除对应标尺线
        //   let index = vLines.findIndex(item => item.id == activeVLine.id);
        //   if (index > -1) {
        //     vLines.splice(index, 1);
        //   }
        //   return;
        // }
        // if (top < 0) {
        //   //移除对应标尺线

        //   let index = hLines.findIndex(item => item.id == activeHLine.id);
        //   if (index > -1) {
        //     hLines.splice(index, 1);
        //   }
        //   return;
        // }
        activeHLine.top = top;
        activeVLine.left = left;
        return;
      }
      state.startX = x;
      state.startY = y;

      // if (direction === "top") {
      //   height = originHeight - Math.floor((dy * 1) / zoom);
      //   if (height > 10) {
      //     activeCom.top -= height - activeCom.height;
      //     activeCom.height = height > 10 ? height : 10;
      //     if (equalScaleable) {
      //       activeCom.width = (originWidth * height) / originHeight;
      //     }
      //   }
      // }

      // if (direction === "bottom") {
      //   value = originHeight + Math.floor((dy * 1) / zoom);
      //   if (value > 10) {
      //     activeCom.height = value > 10 ? value : 10;
      //     if (equalScaleable) {
      //       activeCom.width = (originWidth * value) / originHeight;
      //     }
      //   }
      //   return;
      // }
      // if (direction === "topright") {
      //   width = originWidth + Math.floor((dx * 1) / zoom);
      //   height = originHeight - Math.floor((dy * 1) / zoom);
      //   if (equalScaleable) {
      //     if (dx > dy) {
      //       height = (originHeight * width) / originWidth;
      //     } else {
      //       width = (originWidth * height) / originHeight;
      //     }
      //   }
      //   if (width > 10 && height > 10) {
      //     activeCom.left -= (width - activeCom.width) / 2;
      //     activeCom.top -= (height - activeCom.height) / 2;
      //     activeCom.height = height > 10 ? height : 10;
      //     activeCom.width = width > 10 ? width : 10;
      //   }
      //   return;
      // }

      // if (direction === "bottomleft") {
      //   height = originHeight + Math.floor((dy * 1) / zoom);
      //   width = originWidth - Math.floor((dx * 1) / zoom);
      //   if (equalScaleable) {
      //     if (dx > dy) {
      //       height = (originHeight * width) / originWidth;
      //     } else {
      //       width = (originWidth * height) / originHeight;
      //     }
      //   }
      //   if (width > 10 && height > 10) {
      //     activeCom.left -= Math.floor((width - activeCom.width) / 2);
      //     activeCom.top -= Math.floor((height - activeCom.height) / 2);
      //     activeCom.height = height > 10 ? height : 10;
      //     activeCom.width = width > 10 ? width : 10;
      //   }
      //   return;
      // }
      // if (direction === "bottomright") {
      //   height = originHeight + Math.floor((dy * 1) / zoom);
      //   width = originWidth + Math.floor((dx * 1) / zoom);
      //   if (equalScaleable) {
      //     if (dx > dy) {
      //       height = (originHeight * width) / originWidth;
      //     } else {
      //       width = (originWidth * height) / originHeight;
      //     }
      //   }
      //   if (width > 10 && height > 10) {
      //     activeCom.left -= Math.floor((width - activeCom.width) / 2);
      //     activeCom.top -= Math.floor((height - activeCom.height) / 2);
      //     activeCom.height = height > 10 ? height : 10;
      //     activeCom.width = width > 10 ? width : 10;
      //   }
      //   return;
      // }
      // if (direction === "rotate") {
      //   let rect = bmComBox?.getBoundingClientRect() || {};
      //   let { left = 0, top = 0, width = 0, height = 0 } = rect || {};
      //   let center = { x: left + width / 2, y: top + height / 2 };
      //   let pos = bmCommon.getMousePosition(e);
      //   let y0 = startY - center.y,
      //     x0 = startX - center.x,
      //     y = pos.y - center.y,
      //     x = pos.x - center.x;
      //   let deg = Math.atan2(y, x) - Math.atan2(y0, x0);
      //   let angle = (180 * deg) / Math.PI;
      //   rotate = (angle + originRotate) % 360;
      //   state.startX = pos.x;
      //   state.startY = pos.y;
      //   state.originRotate = rotate;
      //   activeCom.rotate = rotate;
      //   return;
      // }
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../assets/less/common.less";
.bm-rule-lines-com {
  // .squ(100%);
  .posa;
  pointer-events: none;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: -80px;
  right: -80px;
  // .db !important;
  .v-line {
    .w(1);
    .h(100%);
    top: 0;
    // .borl(2px dashed transparent);
    &:hover {
      .tranf(scaleX(2));
    }
  }
  .h-line {
    .h(1);
    .w(100%);
    left: 0;
    // .bort(2px dashed transparent);
    // &.active {
    //   .bc(@red);
    //   opacity: 1;
    // }
    &:hover {
      .tranf(scaleY(2));
    }
  }
  .v-line,
  .h-line {
    .pointer;
    pointer-events: auto;
    opacity: 1;
    .posa;
    .bc(#f00);
    z-index: 9999;
    &.active {
      .bc(@red);
      opacity: 1;
    }
  }
}
</style>

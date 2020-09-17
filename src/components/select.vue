<template>
  <div v-show="showBoxStatus" class="bm-select-com" :style="comStyle">
    <!-- {{ $store.state.canvas.moving }} -->
    <!-- {{ selectBox }} -->
  </div>
</template>

<script>
// import vpd from '../../mixins/vpd'
import bmCommon from "@/common/common";
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
      widgetList: "canvas/getWidgetList", //组件列表
      activeCom: "canvas/getActiveCom", //选中组件
      selectBox: "canvas/getSelectBox", //选取框
      canvas: "canvas/getCanvas" //画布组件
    }),
    // moving(){
    //   return this.$store?.state?.canvas?.moving;
    // },
    comStyle() {
      let { selectBox } = this;
      let { left = 0, top = 0, width = 0, height = 0 } = selectBox;
      return {
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`,
        height: `${height}px`
      };
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapMutations({
      setSelectBox: "canvas/setSelectBox"
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
      let type = $(target).attr("data-type");
      if (!type) {
        type = $parent.attr("data-type");
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
      let pos = bmCommon.getMousePosition(e);
      let { x = "", y = "" } = pos || {};
      selectBox.left = x;
      selectBox.top = y;
      selectBox.originX = x;
      selectBox.originY = y;
      selectBox.width = 0;
      selectBox.height = 0;
      selectBox.moving = true;
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
    mouseupEvent(e) {
      let { selectBox } = this;
      // bmCommon.log("鼠标松开");
      selectBox.moving = false;
      this.showBoxStatus = false;
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
      if (dx < 0) {
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
      // bmCommon.log(dx, dy, startX, startY, x, y, selectBox);
      // selectBox.width = Math.abs(dx);
      // selectBox.height = Math.abs(dy);
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../assets/less/common.less";
.bm-select-com {
  .squ(100%);
  .posa;
  .bor(2px dashed #00f);
  pointer-events: none;
  z-index: 999;
  top: 0;
  left: 0;
}
</style>

<template>
  <div v-show="moving" class="bm-lines-com">
    <!-- 横线 -->
    <div
      :class="{ active: attachHoriz(item.val) }"
      v-for="item in horiz"
      :key="item.id"
      :data-id="item.id"
      :data-name="item.name"
      :style="{ top: item.val + 'px' }"
      class="horiz"
    >
      <!-- {{ item.name }} -->
      <!-- ---{{ horizontal }} -->
      <!-- {{ moving }} -->
    </div>

    <!-- 竖线 -->
    <div
      :class="{ active: attachVerti(item.val) }"
      v-for="item in verti"
      :key="item.id"
      :data-id="item.id"
      :data-name="item.name"
      :style="{ left: item.val + 'px' }"
      class="verti"
    >
      <!-- {{ item.name }} -->
      <!-- ---{{ vertical }}  -->
      <!-- {{ moving }} -->
    </div>
  </div>
</template>

<script>
// import vpd from '../../mixins/vpd'
import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters, mapState } = Vuex;
let padding = 20;
export default {
  name: "bmLinesCom",
  // mixins: [vpd],
  computed: {
    ...mapState({
      // moving: state => state.canvas.moving
    }),
    ...mapGetters({
      widgetList: "canvas/getWidgetList", //组件列表
      activeCom: "canvas/getActiveCom", //选中组件
      moving: "canvas/getMoving", //获取鼠标移动状态
      canvas: "canvas/getCanvas" //画布组件
    }),
    // moving() {
    //   return this.$store?.state?.canvas?.moving;
    // },
    guides() {
      // var state = this.$vpd.state
      let { widgetList = [], activeCom = {}, canvas = {} } = this;
      var guides = [];
      var { id = "" } = activeCom || {};
      let list = [canvas, ...widgetList];
      list.forEach((item = {}) => {
        // 排除选中元素
        // if (item.hasGuide && item.id === id) return
        let {
          id: _id = "",
          originWidth = "",
          originHeight = "",
          width = "",
          name = "",
          height = "",
          left = "",
          top = "",
          type = ""
        } = item || {};
        if (type == "canvas") {
          top = Math.round(height / 2);
          left = Math.round(width / 2);
        } else {
          if (_id === id) {
            return;
          }
        }
        // 排除容器中的元件
        // if (item.hasGuide && item.belong !== 'page') return
        // let padding=20
        guides.push({
          id: _id,
          // width:originWidth+padding,
          width: Math.round(width || originWidth) + padding,
          name,
          // height:originHeight+padding,
          height: Math.round(height || originHeight) + padding,
          top,
          left
        });
      });
      // bmCommon.log("guides", guides);
      return guides;
    },
    /**
     * 获取参考线
     *
     * 取画布中线以及每个元件上下边的坐标
     * 排除正在移动的元件
     * 排除画布边缘坐标
     * 排除重复坐标
     */
    horiz() {
      var { guides = [], canvas = {} } = this;
      var cor = [];
      let { height: canvasHeight = 0 } = canvas || {};

      guides.forEach(val => {
        let { top = 0, height = 0, id = "", name = "" } = val || {};
        // var top = val.top;
        var bottom = top + height;

        if (cor.indexOf(top) < 0 && height && top) {
          cor.push({
            id: `horiz-${id}-${top}`,
            name,
            val: top
          });
        }
        if (cor.indexOf(bottom) < 0 && height && bottom < canvasHeight) {
          cor.push({
            id: `horiz-${id}-${bottom}`,
            name,
            val: bottom
          });
        }
      });
      // bmCommon.log("horiz", cor);
      return cor;
    },

    verti() {
      let { guides = [], canvas = {} } = this;
      let { width: canvasWidth = 0 } = canvas || {};
      // let cor = [375];
      let cor = [];

      guides.forEach(val => {
        let { left = 0, width = 0, id = "", name = "" } = val || {};
        // var left = val.left;
        let right = left + width;

        if (cor.indexOf(left) < 0 && canvasWidth && left) {
          cor.push({
            id: `verti-${id}-${left}`,
            name,
            val: left
          });
        }
        if (cor.indexOf(right) < 0 && width && canvasWidth > right) {
          cor.push({
            id: `verti-${id}-${right}`,
            name,
            val: right
          });
        }
      });
      // bmCommon.log("verti", cor);
      return cor;
    },

    // 移动元素上下边坐标
    horizontal() {
      let { activeCom = {} } = this;
      // var a = this.$vpd.state.activeElement;
      let { type = "", height = "", originHeight = "", top = "" } =
        activeCom || {};
      if (type != "canvas") {
        // if (activeCom) {
        // let h = Math.round(height) + padding;
        var h = Math.round(((height || originHeight) + padding) / 2);
        // return [top, top + h];
        return [top, top + h, top + h * 2];
      } else {
        return [];
      }
    },

    // 移动元素左中右坐标
    vertical() {
      let { activeCom = {} } = this;
      // var a = this.$vpd.state.activeElement;
      let { type = "", width = "", originWidth = "", left = "" } =
        activeCom || {};
      if (type != "canvas") {
        var w = Math.round(((width || originWidth) + padding) / 2);
        return [left, left + w, left + w * 2];
      } else {
        return [];
      }
    }
  },
  methods: {
    ...mapMutations(),
    ...mapActions(),
    attachHoriz(value) {
      let { horizontal = [] } = this;
      return horizontal.some(val => Math.abs(val - value) <= 1);
    },
    attachVerti(value) {
      let { vertical = [] } = this;
      return vertical.some(val => Math.abs(val - value) <= 1);
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../assets/less/common.less";
.bm-lines-com {
  .squ(100%);
  .posa;
  pointer-events: none;
  z-index: 999;
  top: 0;
  left: 0;
  .verti {
    // position: absolute;
    .posa;
    .w(1);
    .borl(2px dashed @white);
    .h(100%);
    top: 0;
    // width: 1px;
    // height: 1000%;
    // top: -50px;
    // background: #18ffff;
    opacity: 0;
    .borc(#00f);
    &.active {
      .borc(@red);
      opacity: 1;
    }
  }
  .horiz {
    .h(0.5);
    .posa;
    .w(100%);
    left: 0;
    .bort(2px dashed @white);
    opacity: 0;
    //   position: absolute;
    //   height: 0.5px;
    // width: 1000%;
    // left: -500%;
    // background: #18ffff;
    .borc(#00f);
    &.active {
      .borc(@red);
      opacity: 1;
    }
  }
}
</style>

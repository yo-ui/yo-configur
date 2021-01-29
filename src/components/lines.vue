<template>
  <div v-show="moving" class="bm-lines-com">
    <!-- 横线 -->
    <!-- :data-id="item.id"
      :style="{ top: item.val + 'px' }"
      :data-name="item.name" -->
    <div
      :class="{ active: attachHoriz(item) }"
      v-for="(item, index) in horiz"
      :key="`horiz_${index}`"
      :style="{
        top: `${item.val}px`,
        width: `${(1 / zoom) * 100}%`,
        transform: `scaleY(${1 / zoom})`
        //left: `${item.left}px`,
      }"
      class="horiz"
    ></div>

    <!-- 竖线 -->
    <!-- :data-id="item.id"
      :data-name="item.name" -->
    <div
      :class="{ active: attachVerti(item) }"
      v-for="(item, index) in verti"
      :key="`verti_${index}`"
      :style="{
        left: `${item.val}px`,
        height: `${(1 / zoom) * 100}%`,
        transform: `scaleX(${1 / zoom})`
        //height: `${item.height}px`,
        //top: `${item.top}px`
      }"
      class="verti"
    ></div>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters, mapState } = Vuex;
let padding = 0;
export default {
  name: "bmLinesCom",
  // mixins: [vpd],
  computed: {
    ...mapState({
      // moving: state => state.canvas.moving
    }),
    ...mapGetters({
      widgetList: "canvas/getWidgetList", //组件列表
      zoom: "canvas/getZoom", //放大缩小
      activeCom: "canvas/getActiveCom", //选中组件
      activeComs: "canvas/getActiveComs", //选中组件
      moving: "canvas/getMoving", //获取鼠标移动状态
      canvas: "canvas/getCanvas" //画布组件
    }),
    // moving() {
    //   return this.$store?.state?.canvas?.moving;
    // },
    guides() {
      // var state = this.$vpd.state
      let {
        widgetList = [],
        activeCom = {},
        activeComs = [],
        canvas = {}
      } = this;
      let guides = [];
      let { length = 0 } = activeComs || [];
      let { id = "" } = activeCom || {};
      let ids = [];
      if (length > 1) {
        activeComs.forEach(item => {
          let { id = "" } = item || {};
          ids.push(id);
        });
      } else {
        ids.push(id);
      }
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
          if (ids.indexOf(_id) > -1) {
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
        let { top = 0, height = 0, id = "", name = "", width = "", left = "" } =
          val || {};
        // var top = val.top;
        var bottom = top + height;
        let center = top + height / 2;
        if (cor.indexOf(top) < 0 && height && top) {
          cor.push({
            id: `horiz-${id}-${Number(top).toFixed(0)}`,
            name,
            val: top,
            width,
            left
          });
        }
        if (cor.indexOf(center) < 0 && height && center) {
          cor.push({
            id: `horiz-${id}-${Number(center).toFixed(0)}`,
            name,
            val: center,
            width,
            left
          });
        }
        if (cor.indexOf(bottom) < 0 && height && bottom < canvasHeight) {
          cor.push({
            id: `horiz-${id}-${Number(bottom).toFixed(0)}`,
            name,
            val: bottom,
            width,
            left
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
        let { left = 0, width = 0, id = "", name = "", top = "", height = "" } =
          val || {};
        // var left = val.left;
        let right = left + width;
        let center = left + width / 2;

        if (cor.indexOf(left) < 0 && canvasWidth && left) {
          cor.push({
            id: `verti-${id}-${Number(left).toFixed(0)}`,
            name,
            val: left,
            top,
            height
          });
        }
        if (cor.indexOf(center) < 0 && canvasWidth && center) {
          cor.push({
            id: `verti-${id}-${Number(center).toFixed(0)}`,
            name,
            val: center,
            top,
            height
          });
        }
        if (cor.indexOf(right) < 0 && width && canvasWidth > right) {
          cor.push({
            id: `verti-${id}-${Number(right).toFixed(0)}`,

            name,
            val: right,
            top,
            height
          });
        }
      });
      // bmCommon.log("verti", cor);
      return cor;
    },

    // 移动元素上下边坐标
    horizontal() {
      let { activeCom = {}, activeComs = [] } = this;
      let pos = []; //位置信息数组
      let { length = 0 } = activeComs || [];
      let widgets = [];
      if (length > 1) {
        widgets = [...activeComs];
      } else {
        widgets = [activeCom];
      }
      widgets.forEach(item => {
        let { type = "", height = "", originHeight = "", top = "" } =
          item || {};
        let h = Math.round(((height || originHeight) + padding) / 2);
        if (type != "canvas") {
          pos.push([top, top + h, top + h * 2]);
        }
      });
      return pos;
      // } else {
      //   return [];
      // }
    },

    // 移动元素左中右坐标
    vertical() {
      let { activeCom = {}, activeComs = [] } = this;
      let pos = []; //位置信息数组
      let { length = 0 } = activeComs || [];
      let widgets = [];
      if (length > 1) {
        widgets = [...activeComs];
      } else {
        widgets = [activeCom];
      }
      widgets.forEach(item => {
        let { type = "", width = "", originWidth = "", left = "" } = item || {};
        var w = Math.round(((width || originWidth) + padding) / 2);
        if (type != "canvas") {
          pos.push([left, left + w, left + w * 2]);
        }
      });
      return pos;
      // } else {
      //   return [];
      // }
    }
  },
  methods: {
    ...mapMutations(),
    ...mapActions(),
    attachHoriz({ val: value }) {
      let { horizontal = [] } = this;
      // return horizontal.some(val => Math.abs(val - value) <= 5);
      try {
        horizontal.forEach(item => {
          let obj = item.find(val => Math.abs(val - value) <= 3);
          if (obj) {
            // let { id = "" } = activeCom || {};
            // let vue = document.querySelector(`#box_${id}`)?.__vue__;
            // let info = vue?.info || {};
            // info.top = obj;
            throw new Error("找到对应位置");
          }
        });
      } catch (error) {
        return true;
      }
      return false;
    },
    attachVerti({ val: value }) {
      let { vertical = [] } = this;
      // return vertical.some(val => Math.abs(val - value) <= 5);
      try {
        vertical.forEach(item => {
          let obj = item.some(val => Math.abs(val - value) <= 3);
          if (obj) {
            // let { id = "" } = activeCom || {};
            // let vue = document.querySelector(`#box_${id}`)?.__vue__;
            // let info = vue?.info || {};
            // info.left = obj;
            throw new Error("找到对应位置");
          }
        });
      } catch (error) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../assets/less/common.less";
.bm-lines-com {
  // .squ(100%);
  .posa;
  pointer-events: none;
  z-index: 999;
  top: 0;
  left: 0;
  right: -80px;
  bottom: -80px;
  // .db !important;
  .verti {
    .w(1);
    .h(100%);
    top: 0;
    .borl(2px dashed transparent);
    &.active {
      .borc(@red);
      opacity: 1;
    }
  }
  .horiz {
    .h(1);
    .w(100%);
    left: 0;
    .bort(2px dashed transparent);
    &.active {
      .borc(@red);
      opacity: 1;
    }
  }
  .verti,
  .horiz {
    pointer-events: none;
    opacity: 1;
    .posa;
    // .borc(#f00);
    z-index: 9999;
  }
}
</style>

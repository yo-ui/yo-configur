<!-- @click="clickEvent" -->
<!-- :class="{ active: showActiveStatus }" -->
<!-- @mousedown.stop="mousedownEvent" -->
<template>
  <div
    class="bm-component-com"
    ref="bmCom"
    :style="boxStyle"
    :class="animate ? `animated ${animate}` : ''"
  >
    <div class="info">
      <p class="txt">
        {{ info.name }}
      </p>
    </div>
    <i
      class="operate-btn el-icon-refresh-right"
      v-if="!moving && info.rotateable && info.dragable"
      @mousedown.stop="rotateClickEvent"
      title="旋转"
    ></i>
    <i
      class="operate-btn el-icon-top-left"
      v-if="!moving && info.scaleable && info.dragable"
      @mousedown.stop="leftTopClickEvent"
      title="左上角"
    ></i>
    <i
      class="operate-btn el-icon-top"
      v-if="!moving && info.scaleable && info.dragable"
      @mousedown.stop="topClickEvent"
      title="上"
    ></i>
    <i
      class="operate-btn el-icon-top-right"
      v-if="!moving && info.scaleable && info.dragable"
      @mousedown.stop="rightTopClickEvent"
      title="右上角"
    ></i>
    <i
      class="operate-btn el-icon-back"
      v-if="!moving && info.scaleable && info.dragable"
      @mousedown.stop="leftClickEvent"
      title="左"
    ></i>
    <i
      class="operate-btn el-icon-right"
      v-if="!moving && info.scaleable && info.dragable"
      @mousedown.stop="rightClickEvent"
      title="右"
    ></i>
    <i
      class="operate-btn el-icon-bottom-left"
      v-if="!moving && info.scaleable && info.dragable"
      @mousedown.stop="leftBottomClickEvent"
      title="左下角"
    ></i>
    <i
      class="operate-btn el-icon-bottom"
      v-if="!moving && info.scaleable && info.dragable"
      @mousedown.stop="bottomClickEvent"
      title="下"
    ></i>
    <i
      class="operate-btn el-icon-bottom-right"
      v-if="!moving && info.scaleable && info.dragable"
      @mousedown.stop="rightBottomClickEvent"
      title="右下角"
    ></i>
    <!-- <component :info="info" :is="info.type"></component> -->
    <!-- {{ info.type }} -->
    <component
      ref="bmCom"
      :info="info"
      :is="`${info.type}Com`"
      @success="loadSuccess"
    >
    </component>
    <!-- <bm-text></bm-text> -->
    <!-- <template v-if="type == 'text'">
      <div
        :contenteditable="editable"
        @dblclick.stop="dbClickEvent"
        :style="comStyle"
      >
        {{ content }}
      </div>
    </template>
    <template v-if="type == 'image'">
      <img
        src="//pic.energyiot.cn/upload/180817095543907.jpg"
        :style="comStyle"
      />
    </template> -->
  </div>
</template>

<script>
import bmCommon from "@/common/common";
import { widgets } from "@/widgets/index";
// import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  data() {
    return {
      animate: ""
    };
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  mounted() {
    // this.loadSuccess();
  },
  components: {
    ...widgets
  },
  computed: {
    ...mapGetters({
      moving: "canvas/getMoving"
    }),
    boxStyle() {
      let { info = {} } = this;
      let {
        left = "",
        top = "",
        // width = "",
        // height = "",
        animation = {},
        order: zIndex = "",
        // matrix = "",
        rotate = "",
        transformOrigin = ""
      } = info || {};
      let { direction = "", duration = "", iterationCount = 1 } =
        animation || {};
      // let { a, b, c, d, e, f } = matrix || {};
      // let radian = (Math.PI / 180) * rotate;
      // matrix.a = Math.cos(radian);
      // matrix.b = Math.sin(radian);
      // matrix.c = -Math.sin(radian);
      // matrix.d = Math.cos(radian);
      // bmCommon.log("matrix=", matrix);
      // let x = 0,
      //   y = 0;
      // if (transformOrigin == "left top") {
      //   x = width / 2 - left;
      //   y = height / 2 - top;
      //   e = x * a + y * c + e * 1;
      //   f = b * x + d * y + 1 * f;
      // }
      let styles = {
        left: left + "px",
        top: top + "px",
        zIndex,
        // transform: `matrix(${a},${b},${c},${d},${e},${f})`,
        transform: `rotate(${rotate}deg)`,
        transformOrigin: transformOrigin
      };
      if (!iterationCount) {
        iterationCount = "infinite";
      }
      styles["animation-iteration-count"] = iterationCount;
      styles["animation-duration"] = duration;
      styles["animation-direction"] = direction;
      return styles;
    },
    // animation() {
    //   let { info = {} } = this;
    //   let { animation = {} } = info || {};
    //   return animation || {};
    // }
  },
  methods: {
    ...mapMutations({
      initMove: "canvas/initMove",
      resize: "canvas/resize",
      rotate: "canvas/rotate",
      stopMove: "canvas/stopMove"
    }),
    ...mapActions(),
    loadSuccess() {
      this.$nextTick(() => {
        let bmCom = this.$refs.bmCom;
        let $bmCom = $(bmCom.$el);
        let { info = {} } = this;
        let width = $bmCom.outerWidth();
        let height = $bmCom.outerHeight();
        info.originWidth = width;
        info.originHeight = height;
        if (info.scaleable) {
          info.width = width;
          info.height = height;
        }
      });
    },
    mousedownEvent(e, type) {
      e.stopPropagation();
      e.preventDefault();
      let { info = {} } = this;
      let pos = bmCommon.getMousePosition(e);
      let { x = "", y = "" } = pos || {};
      let {
        width: originWidth = "",
        height: originHeight = "",
        left,
        top,
        rotate: originRotate = ""
      } = info || {};
      this.type = type;
      this.initMove({
        startX: x,
        startY: y,
        originX: left,
        originY: top,
        originRotate,
        originWidth,
        originHeight
      });
      $(document).on("mousemove", this.mousemoveEvent);
      $(document).on("mouseup", this.mouseupEvent);
    },
    mousemoveEvent(e) {
      e.stopPropagation();
      e.preventDefault();
      let pos = bmCommon.getMousePosition(e);
      let { x = "", y = "" } = pos || {};
      let { type = "" } = this;
      this.resize({
        x,
        y,
        type
      });
    },
    mouseupEvent(e) {
      $(document).off("mousemove", this.mousemoveEvent);
      $(document).off("mouseup", this.mouseupEvent);
      this.stopMove();
    },
    rotateClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      this.mousedownEvent(e, "rotate");
    },
    leftTopClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      this.mousedownEvent(e, "topleft");
    },
    topClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      this.mousedownEvent(e, "top");
    },
    rightTopClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      this.mousedownEvent(e, "topright");
    },
    leftClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      this.mousedownEvent(e, "left");
    },
    rightClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      this.mousedownEvent(e, "right");
    },
    leftBottomClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      this.mousedownEvent(e, "bottomleft");
    },
    bottomClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      this.mousedownEvent(e, "bottom");
    },
    rightBottomClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      this.mousedownEvent(e, "bottomright");
    }
  },
  watch: {
    "info.animation": {
      handler(newVal, oldVal) {
        // if (newVal != oldVal) {
        clearTimeout(this._setTimeoutId);
        let that = this;
        // let { info = {} } = this;
        // let { animation = {} } = info || {};
        let { name = "", iterationCount = "", duration = "" } = newVal || {};
        that.animate = name;
        if (iterationCount) {
          this._setTimeoutId = setTimeout(() => {
            that.animate = "";
          }, duration * 1000 + 100);
        }
        // }
      },
      deep: true
    }
  }
};
</script>

<style lang="less">
@import (less) "../assets/less/components/component.less";
@import (less) "../assets/less/components/common/wang.editor.less";
</style>

<!-- @click="clickEvent" -->
<!-- :class="{ active: showActiveStatus }" -->
<!-- @mousedown.stop="mousedownEvent" -->
<template>
  <div
    class="bm-component-com"
    @keydown.stop
    @mousedown="onComMousedownEvent"
    :id="`box_${info.id}`"
    ref="bmComBox"
    :style="boxStyle"
    :class="animate ? `animated ${animate}` : ''"
  >
    <div class="info">
      <p class="txt">
        {{ info.name }}
        <!-- {{info.showCoverStatus}} -->
        <!-- {{ moving }}--{{ info.rotateable }}--{{ info.locked }} -->
      </p>
    </div>
    <div
      class="cover"
      v-if="info.showCoverStatus && showType == 'edit'"
      @dblclick.prevent="info.showCoverStatus = false"
    ></div>
    <!-- ((!moving && info.rotateable) || rotating) &&
          !info.locked &&
          !info.showCoverStatus -->
    <i
      class="operate-btn el-icon-refresh-right"
      v-if="showRotateStatus"
      @mousedown.stop="rotateClickEvent"
      title="旋转"
    ></i>
    <!-- info.rotateable && !info.locked && rotating && !info.showCoverStatus -->
    <i
      class="operate-btn el-icon-axis"
      :style="
        `${
          {
            'left top': 'left: 0; top: 0; ',
            top: ' left: 50%; top: 0 ',
            'right top': ' left: 100%; top: 0 ',
            center: ' left: 50%; top: 50%;',
            right: ' left: 100%; top: 50% ',
            'right bottom': ' left: 100%; top: 100% ',
            bottom: ' left: 50%; top: 100% ',
            'left bottom': ' left: 0; top: 100% ',
            left: ' left: 0; top: 50%'
          }[info.transformOrigin]
        }`
      "
      v-if="showRotateOriginStatus"
      title="旋转轴"
    ></i>
    <i
      class="operate-btn el-icon-top-left"
      v-if="scaleBoxStatus"
      @mousedown.stop="leftTopClickEvent"
      title="左上角"
    ></i>
    <!-- !moving && info.scaleable && !info.locked && !rotating -->
    <i
      class="operate-btn el-icon-top"
      v-if="scaleBoxStatus"
      @mousedown.stop="topClickEvent"
      title="上"
    ></i>
    <i
      class="operate-btn el-icon-top-right"
      v-if="scaleBoxStatus"
      @mousedown.stop="rightTopClickEvent"
      title="右上角"
    ></i>
    <i
      class="operate-btn el-icon-back"
      v-if="scaleBoxStatus"
      @mousedown.stop="leftClickEvent"
      title="左"
    ></i>
    <i
      class="operate-btn el-icon-right"
      v-if="scaleBoxStatus"
      @mousedown.stop="rightClickEvent"
      title="右"
    ></i>
    <i
      class="operate-btn el-icon-bottom-left"
      v-if="scaleBoxStatus"
      @mousedown.stop="leftBottomClickEvent"
      title="左下角"
    ></i>
    <i
      class="operate-btn el-icon-bottom"
      v-if="scaleBoxStatus"
      @mousedown.stop="bottomClickEvent"
      title="下"
    ></i>
    <i
      class="operate-btn el-icon-bottom-right"
      v-if="scaleBoxStatus"
      @mousedown.stop="rightBottomClickEvent"
      title="右下角"
    ></i>
    <!-- <component :info="info" :is="info.type"></component> -->
    <!-- {{ info.type }} -->
    <component
      ref="bmCom"
      :type="showType"
      :info="info"
      :style="comStyle"
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
      animate: "",
      rotating: false
    };
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
    // type: {
    //   type: String,
    //   default: ""
    // }
  },
  mounted() {
    // this.loadSuccess();
    let { info = {} } = this;
    info.showCoverStatus = true;
  },
  components: {
    ...widgets
  },
  computed: {
    ...mapGetters({
      showType: "canvas/getShowType", //当前显示类型
      moving: "canvas/getMoving"
    }),
    showRotateStatus() {
      let { moving = false, info = {} } = this;
      let {
        rotateable = true,
        locked = false,
        rotating = false,
        showCoverStatus = true
      } = info || {};
      return (
        ((!moving && rotateable) || rotating) && !locked && !showCoverStatus
      );
    },
    showRotateOriginStatus() {
      let { info = {} } = this;
      let {
        rotateable = true,
        locked = false,
        rotating = false,
        showCoverStatus = true
      } = info || {};
      return rotateable && !locked && rotating && !showCoverStatus;
    },
    scaleBoxStatus() {
      let { moving = false, info = {} } = this;
      let {
        scaleable = true,
        locked = false,
        rotating = false,
        showCoverStatus = true
      } = info || {};
      // !moving && scaleable && !info.locked && !rotating && showCoverStatus
      return !moving && scaleable && !locked && !rotating && showCoverStatus;
    },
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
    comStyle() {
      let { info = {} } = this;
      let { opacity = "", visible = true, flipV = false, flipH = false } =
        info || {};
      let styles = {};
      styles["opacity"] = opacity / 100;
      styles["visibility"] = `${visible ? "visible" : "hidden"}`;
      if (flipV || flipH) {
        let scale = `scale(${flipH ? -1 : 1},${flipV ? -1 : 1})`;
        (styles["transform"] = `${scale}`),
          (styles["-webkit-transform"] = `${scale}`),
          (styles["-ms-transform"] = `${scale}`),
          (styles["-o-transform"] = `${scale}`),
          (styles["-moz-transform"] = `${scale}`);
      }
      return styles || {};
    }
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
          info.width = Number(width);
          info.height = Number(height);
        }
      });
    },
    onComMousedownEvent(e) {
      let { info = {} } = this;
      let { showCoverStatus = true } = info || {};
      if (!showCoverStatus) {
        e.stopPropagation();
      }
    },
    mousedownEvent(e, direction) {
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
      this.direction = direction;
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
      let { direction = "" } = this;
      let bmComBox = this.$refs.bmComBox;
      this.resize({
        x,
        y,
        e,
        bmComBox,
        direction
      });
    },
    mouseupEvent(e) {
      $(document).off("mousemove", this.mousemoveEvent);
      $(document).off("mouseup", this.mouseupEvent);
      this.stopMove();
      this.rotating = false;
    },
    rotateClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      this.rotating = true;
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
  beforeDestroy() {
    $(document).off("mousemove", this.mousemoveEvent);
    $(document).off("mouseup", this.mouseupEvent);
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
          }, iterationCount * duration * 1000 + 100);
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

<!-- @click="clickEvent" -->
<!-- :class="{ active: showActiveStatus }" -->
<!-- @mousedown.stop="mousedownEvent" -->
<template>
  <div class="bm-component-com" :style="boxStyle">
    <div class="info">
      <p class="txt">
      {{ info.name }}
      </p>
    </div>
    <i
      class="operate-btn el-icon-refresh-right"
      v-if="info.rotateable"
      @mousedown.stop="rotateClickEvent"
      title="旋转"
    ></i>
    <i
      class="operate-btn el-icon-top-left"
      v-if="info.scaleable"
      @mousedown.stop="leftTopClickEvent"
      title="左上角"
    ></i>
    <i
      class="operate-btn el-icon-top"
      v-if="info.scaleable"
      @mousedown.stop="topClickEvent"
      title="上"
    ></i>
    <i
      class="operate-btn el-icon-top-right"
      v-if="info.scaleable"
      @mousedown.stop="rightTopClickEvent"
      title="右上角"
    ></i>
    <i
      class="operate-btn el-icon-back"
      v-if="info.scaleable"
      @mousedown.stop="leftClickEvent"
      title="左"
    ></i>
    <i
      class="operate-btn el-icon-right"
      v-if="info.scaleable"
      @mousedown.stop="rightClickEvent"
      title="右"
    ></i>
    <i
      class="operate-btn el-icon-bottom-left"
      v-if="info.scaleable"
      @mousedown.stop="leftBottomClickEvent"
      title="左下角"
    ></i>
    <i
      class="operate-btn el-icon-bottom"
      v-if="info.scaleable"
      @mousedown.stop="bottomClickEvent"
      title="下"
    ></i>
    <i
      class="operate-btn el-icon-bottom-right"
      v-if="info.scaleable"
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
    ></component>
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
import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  data() {
    return {};
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  mounted() {},
  components: {
    ...widgets
  },
  computed: {
    ...mapGetters(),
    boxStyle() {
      let { info = {} } = this;
      let { left = "", top = "", order: zIndex = "", rotate = "0" } =
        info || {};
      return {
        left: left + "px",
        top: top + "px",
        zIndex,
        transform: `rotate(${rotate}deg)`,
        webkitTransform: `rotate(${rotate}deg)`
      };
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
        let width = $bmCom.width();
        let height = $bmCom.height();
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
      // bmCommon.log(info, x, y, type);

      $(document).on("mousemove", this.mousemoveEvent);
      $(document).on("mouseup", this.mouseupEvent);
    },
    mousemoveEvent(e) {
      e.stopPropagation();
      e.preventDefault();
      let pos = bmCommon.getMousePosition(e);
      let { x = "", y = "" } = pos || {};
      let { type = "" } = this;
      // this.$vpd.commit('resize', {
      //   x: e.pageX,
      //   y: e.pageY,
      //   type: this.type
      // })
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
  }
};
</script>

<style lang="less">
@import (less) "../assets/less/components/component.less";
</style>

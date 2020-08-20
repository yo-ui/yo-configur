<template>
  <div
    class="bm-configur-com"
    ref="bmCom"
    @mousedown="mousedownEvent"
    :class="{ active: activeStatus }"
  >
    <i class="bm-icon icon-rotate">旋转</i>
    <i class="bm-icon icon-rotate">左上角</i>
    <i class="bm-icon icon-rotate">上</i>
    <i class="bm-icon icon-rotate">右上角</i>
    <i class="bm-icon icon-rotate">左</i>
    <i class="bm-icon icon-rotate">右</i>
    <i class="bm-icon icon-rotate">左下角</i>
    <i class="bm-icon icon-rotate">下</i>
    <i class="bm-icon icon-rotate">右下角</i>
    <template v-if="type == 'text'">
      <span :contenteditable="editable" @dblclick="dbClickEvent">
        {{ content }}
      </span>
    </template>
    <template v-if="type == 'image'">
      <img src="//pic.energyiot.cn/upload/180817095543907.jpg" />
    </template>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
const Props = {
  type: [
    "text", //静态文本
    "image" //图片
  ]
};
let variablePool = {};
export default {
  data() {
    return {
      activeStatus: false,
      editable: false
    };
  },
  props: {
    contenteditable: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: "静态文本"
    },
    type: {
      type: String,
      validator(value) {
        return Props.type.indexOf(value) != -1;
      }
    }
  },
  mounted() {
    this.editable = this.contenteditable;
    // this.init();
  },
  methods: {
    addBodyEvent() {
      document.addEventListener("click", this.removeBodyEvent);
    },
    removeBodyEvent() {
      this.editable = false;
      document.removeEventListener("click", this.removeBodyEvent);
    },
    dbClickEvent() {
      this.editable = true;
      this.addBodyEvent();
    },
    mousedownEvent(e) {
      let { pageX = 0, pageY = 0 } = e || event;
      // let target = this.$refs.bmCom;
      variablePool.oldPosition = { x: pageX, y: pageY };
      $(document).on("mousemove", this.mouseMoveEvent);
      $(document).on("mouseup", this.mouseUpEvent);
    },
    mouseMoveEvent(e) {
      let { pageX = 0, pageY = 0 } = e || event;
      let target = this.$refs.bmCom;
      let { oldPosition = {} } = variablePool || {};
      // let offset = $(".canvas-box").offset();
      // let { top = 0, left = 0 } = offset || {};
      // bmCommon.log(pageY - top, pageX - left);
      // $(target).css({
      $(target).css({
        // top: pageY,
        top: pageY - top,
        cursor: "move",
        // left: pageX
        left: pageX - left
      });
    },
    mouseUpEvent(e) {
      // let { target } = e || event;
      // let target = this.$refs.bmCom;
      $(document).off("mousemove");
      $(document).off("mouseup");
    }
  }
};
</script>

<style lang="less">
@import (less) "../assets/less/components/component.less";
</style>

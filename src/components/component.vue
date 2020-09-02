<template>
  <!-- @click="clickEvent" -->
    <!-- :class="{ active: showActiveStatus }" -->
  <div
    class="bm-configur-com"
    ref="bmCom"
    @mousedown.stop="mousedownEvent"
  >
    <i
      class="bm-icon el-icon-refresh-right"
      @mousedown.stop="rotateClickEvent"
      title="旋转"
    ></i>
    <i
      class="bm-icon el-icon-top-left"
      @mousedown.stop="leftTopClickEvent"
      title="左上角"
    ></i>
    <i
      class="bm-icon el-icon-top"
      @mousedown.stop="topClickEvent"
      title="上"
    ></i>
    <i
      class="bm-icon el-icon-top-right"
      @mousedown.stop="rightTopClickEvent"
      title="右上角"
    ></i>
    <i
      class="bm-icon el-icon-back"
      @mousedown.stop="leftClickEvent"
      title="左"
    ></i>
    <i
      class="bm-icon el-icon-right"
      @mousedown.stop="rightClickEvent"
      title="右"
    ></i>
    <i
      class="bm-icon el-icon-bottom-left"
      @mousedown.stop="leftBottomClickEvent"
      title="左下角"
    ></i>
    <i
      class="bm-icon el-icon-bottom"
      @mousedown.stop="bottomClickEvent"
      title="下"
    ></i>
    <i
      class="bm-icon el-icon-bottom-right"
      @mousedown.stop="rightBottomClickEvent"
      title="右下角"
    ></i>
    <template v-if="type == 'text'">
      <span :contenteditable="editable" @dblclick.stop="dbClickEvent">
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
      showActiveStatus: false,
      editable: false
    };
  },
  props: {
    contenteditable: {
      type: Boolean,
      default: false
    },
    info: {
      type: Object,
      default: () => {
        return {};
      }
    },
    active: {
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
    // init() {
    //   this.addBodyEvent();
    // },
    // addBodyEvent() {
    //   $(document).click(() => {
    //     bmCommon.log("document.click");
    //     // this.editable = false;
    //     // this.showActiveStatus = true;
    //     this.removeBodyEvent()
    //   });
    // },
    // removeBodyEvent() {
    //   // this.editable = false;
    //   this.showActiveStatus = false;
    //   bmCommon.log("removeBodyEvent");
    //   $(document).off("click");
    // },
    dbClickEvent() {
      this.editable = true;
      // this.addBodyEvent();
    },
    // clickEvent() {
    //   this.activeStatus = true;
    //   this.addBodyEvent();
    // },
    mousedownEvent(e) {
      // let { pageX = 0, pageY = 0 } = e || event;
      let target = this.$refs.bmCom;
      let offset = { x: 0, y: 0 };
      let _offset = $(target).offset();
      let { top = 0, left = 0 } = _offset || {};
      // this.removeBodyEvent();
      // this.showActiveStatus = true;
      e.stopPropagation();
      // if (!this.active) {
      //   return;
      // }
      this.showActiveStatus = true; //显示为可编辑状态
      // bmCommon.log("mousedownEvent=", _offset);
      let o_pos = bmCommon.getMousePosition(e, offset, 1);
      // variablePool.o_pos = o_pos;
      variablePool.dis_pos = { x: o_pos.x - left, y: o_pos.y - top };
      // variablePool.mouseDownStatus=true
      $(document).on("mousemove", this.mouseMoveEvent);
      $(document).on("mouseup", this.mouseUpEvent);
      // this.addBodyEvent();
    },
    mouseMoveEvent(e) {
      // let { pageX = 0, pageY = 0 } = e || event;
      // let { showActiveStatus = false } = this;
      // if (!showActiveStatus) {
      //   return;
      // }
      e.preventDefault();
      e.stopPropagation();
      let target = this.$refs.bmCom;
      let offset = { x: 0, y: 0 };
      let new_pos = bmCommon.getMousePosition(e, offset, 1);
      // let { o_pos = {} } = variablePool;
      // variablePool.new_pos = new_pos;
      let { dis_pos = {} } = variablePool;
      // let _offset = $(target).offset();
      // let { top = 0, left = 0 } = _offset || {};
      // // $(target).css({
      // let _dis_pos = {
      //   x: new_pos.x - o_pos.x,
      //   y: new_pos.y - o_pos.y
      // };
      // bmCommon.log('mouseMoveEvent',
      //   new_pos,
      //   o_pos,
      //   _dis_pos,
      //   top + _dis_pos.y,
      //   left + _dis_pos.x
      // );
      let x = new_pos.x - dis_pos.x,
        y = new_pos.y - dis_pos.y;
      // let x = top + _dis_pos.y,
      //   y = left + _dis_pos.x;
      // bmCommon.log(x, y, dis_pos);
      $(target).css({
        // top: pageY,
        top: y,
        cursor: "move",
        // left: pageX
        left: x
      });
      variablePool.dis_pos = { x: new_pos.x - x, y: new_pos.y - y };
      // variablePool.o_pos = new_pos;
    },
    mouseUpEvent(e) {
      // let { target } = e || event;
      // let target = this.$refs.bmCom;
      // let { pageX = 0, pageY = 0 } = e || event;
      // let offset = { x: 0, y: 0 };
      // let new_pos = bmCommon.getMousePosition(e, offset, 1);
      // // let { dis_pos = {} } = variablePool;
      // let target = this.$refs.bmCom;
      // let _offset = $(target).offset();
      // let { top = 0, left = 0 } = _offset || {};
      // variablePool.dis_pos = { x: new_pos.x - left, y: new_pos.y - top };
      this._activeStatus = false; //显示为可编辑状态
      $(document).off("mousemove");
      $(document).off("mouseup");
      // this.addBodyEvent();
    },
    rotateClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    leftTopClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    topClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    rightTopClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    leftClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    rightClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    leftBottomClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    bottomClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    rightBottomClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
    }
  }
};
</script>

<style lang="less">
@import (less) "../assets/less/components/component.less";
</style>

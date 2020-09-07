<!-- @click="clickEvent" -->
<!-- :class="{ active: showActiveStatus }" -->
<!-- @mousedown.stop="mousedownEvent" -->
<template>
  <div class="bm-component-com" ref="bmCom" :style="boxStyle">
    <div class="info">
      {{ info.type }}
    </div>
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
    <!-- <component :info="info" :is="info.type"></component> -->
    <!-- {{ info.type }} -->
    <component :info="info" :is="`${info.type}Com`"></component>
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
import widgets from "@/widgets/index";
import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
// const Props = {
//   type: [
//     "text", //静态文本
//     "image" //图片
//   ]
// };
// let variablePool = {};
// bmCommon.log('======',...widgets)
export default {
  data() {
    return {
      // showActiveStatus: false,
      editable: false
    };
  },
  props: {
    // contenteditable: {
    //   type: Boolean,
    //   default: false
    // },
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
    // active: {
    //   type: Boolean,
    //   default: false
    // },
    // content: {
    //   type: String,
    //   default: "静态文本"
    // },
    // type: {
    //   type: String,
    //   validator(value) {
    //     return Props.type.indexOf(value) != -1;
    //   }
    // }
  },
  mounted() {
    this.editable = this.contenteditable;
    // this.init();
  },
  components: {
    ...widgets
    // bmText: () =>
    //   import(
    //     /* webpackChunkName: "bm-component-text" */ "@/components/component/basic/Text.vue"
    //   ),
    // bmButton: () =>
    //   import(
    //     /* webpackChunkName: "bm-component-button" */ "@/components/component/basic/Button.vue"
    //   ),
    // bmImage: () =>
    //   import(
    //     /* webpackChunkName: "bm-component-image" */ "@/components/component/basic/Image.vue"
    //   )
  },
  computed: {
    ...mapGetters(),
    boxStyle() {
      let { info = {} } = this;
      let { left = "", top = "", zIndex = "", rotate = "0" } = info || {};
      return {
        // position: 'absolute',
        // width: val.width / 7.5 + '%',
        // height: val.height / h * 100 + '%',
        left: left + "px",
        top: top + "px",
        zIndex: zIndex,
        transform: `rotate(${rotate}deg)`,
        webkitTransform: `rotate(${rotate}deg)`
        // backgroundColor: val.backgroundColor,
        // backgroundImage: 'url(' + val.backPic + ')',
        // color: val.color
      };
    }
  },
  methods: {
    ...mapMutations({
      initMove: "viewBox/initMove",
      resize: "viewBox/resize",
      rotate: "viewBox/rotate",
      stopMove: "viewBox/stopMove"
    }),
    mousedownEvent(e, type, originX, originY) {
      e.stopPropagation();
      e.preventDefault();
      // this.type = type
      // this.$vpd.commit('initmove', {
      //   startX: e.pageX,
      //   startY: e.pageY,
      //   originX: this.elm[originX],
      //   originY: this.elm[originY]
      // })
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
      bmCommon.log(info, x, y, type);

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

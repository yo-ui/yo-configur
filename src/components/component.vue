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
    :class="boxClasses"
  >
    <div class="info" v-show="showType == 'edit' && !moving">
      <p class="txt">
        {{ info.name }}
      </p>
    </div>
    <div
      class="cover"
      v-show="
        (info.type != 'panel' && info.showCoverStatus && showType == 'edit') ||
          (info.type == 'panel' &&
            info.showCoverStatus &&
            activeCom.type == 'panel') ||
          activeCom.type == 'canvas' ||
          (info.type == 'panel' &&
            info.children &&
            info.children.findIndex(item => item.id == activeCom.id) < 0 &&
            activeCom.type != 'panel' &&
            activeCom.type != 'canvas')
      "
      @dblclick.prevent.stop="coverEvent"
    >
      {{ info.parentId }}
    </div>
    <i
      class="operate-btn el-icon-refresh-right"
      v-if="showRotateStatus"
      @mousedown.stop="rotateClickEvent"
      title="旋转"
    ></i>
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
      v-show="showRotateOriginStatus"
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
      :style="comStyle(info)"
      :is="`${info.type}Com`"
      @success="loadSuccess"
    >
      <!-- <component
        :type="showType"
        :info="item"
        :style="comStyle(item)"
        v-for="(item, index) in info.children"
        :key="index"
        :is="`${item.type}Com`"
        @success="loadSuccess"
      >
      </component> -->
      <slot></slot>
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
const state = {};
export default {
  data() {
    return {
      animate: "",
      rotating: false,
      resizing: false
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
  created() {
    let { info = {} } = this;
    let { comName = "", name = "" } = info || {};
    info.comName = !comName ? name : comName;
    // let item = Constants.COMPONENTLIBRARYMAP[type] || {};
    // let { data = {} } = item || {};
    // let { infoType = "" } = data || {};
    // info.infoType = infoType;
    // this.selectComAction(id);
    // this.setActiveCom(info);
  },
  mounted() {
    // this.loadSuccess();
  },
  components: {
    ...widgets
  },
  computed: {
    ...mapGetters({
      showType: "canvas/getShowType", //当前显示类型
      zoom: "canvas/getZoom", //放大缩小
      draging: "canvas/getDraging", //组件拖动状态
      activeComs: "canvas/getActiveComs", //选中对象
      activeCom: "canvas/getActiveCom", //选中对象
      moving: "canvas/getMoving"
    }),
    activeComIds() {
      // let { activeCom = {} } = this;
      // let { id = "" } = activeCom || {};
      // return id || "";
      let {
        // widgetList = [],
        // selectBox = {},
        activeComs = [],
        activeCom = {}
      } = this;
      let ids = [];
      let { length = 0 } = activeComs || [];
      if (length > 1) {
        ids = activeComs.map(item => item.id);
      } else {
        let { id = "" } = activeCom || {};
        ids.push(id);
      }
      return ids || [];
    },
    boxClasses() {
      let {
        info = {},
        animate = "",
        locked = false,
        activeComIds = "",
        showType = ""
      } = this;
      let { type = "" } = info || {};
      let classes = [];
      if (showType == "edit") {
        if (animate) {
          classes.push("animated");
          classes.push(`${animate}`);
        }
        if (type) {
          classes.push(`${type}`);
        }
        if (activeComIds.indexOf(info.id) > -1) {
          classes.push("active");
        }
        if (
          activeComIds &&
          activeComIds.length > 0 &&
          !(activeComIds.indexOf(info.id) > -1) &&
          // activeCom.type != 'canvas'&&
          type != "panel"
        ) {
          classes.push("opacity");
        }
        if (locked) {
          classes.push("lock");
        }
      }
      return classes.join(" ");
    },
    showRotateStatus() {
      let {
        moving = false,
        resizing = false,
        rotating = false,
        info = {},
        showType = ""
      } = this;
      let { rotateable = true, locked = false, showCoverStatus = true } =
        info || {};
      return (
        (!moving || rotating) &&
        rotateable &&
        !locked &&
        !resizing &&
        showCoverStatus &&
        showType == "edit"
      );
    },
    showRotateOriginStatus() {
      let { info = {}, rotating = false, showType = "" } = this;
      let { rotateable = true, locked = false, showCoverStatus = true } =
        info || {};
      return (
        rotateable &&
        !locked &&
        rotating &&
        showCoverStatus &&
        showType == "edit"
      );
    },
    scaleBoxStatus() {
      let {
        moving = false,
        resizing = false,
        rotating = false,
        info = {},
        showType = ""
      } = this;
      let {
        scaleable = true,
        locked = false,
        showCoverStatus = true,
        type = ""
      } = info || {};
      // !moving && scaleable && !info.locked && !rotating && showCoverStatus
      return (
        (!moving || resizing) &&
        scaleable &&
        type != "panel" &&
        !locked &&
        !rotating &&
        showCoverStatus &&
        showType == "edit"
      );
    },
    // isSameGroup() {
    //   let { activeComs = [], widgetList = [], activeCom = {} } = this;
    //   let set = new Set();
    //   let { length = 0 } = activeComs || [];
    //   if (length > 0) {
    //     activeComs.forEach(item => {
    //       let { groupList = [] } = item || {};
    //       let [group = ""] = groupList || [];
    //       // if (group) {
    //       set.add(group);
    //       // }
    //     });
    //     return set.size == 1 && !set.has("");
    //   } else {
    //     let { groupList = [], type = "" } = activeCom || {};
    //     let [group = ""] = groupList || [];
    //     let widgets = [];
    //     if (group && type != "canvas") {
    //       widgets = widgetList.filter(item => {
    //         let { groupList = [] } = item || {};
    //         let [_group = ""] = groupList || [];
    //         return _group == group;
    //       });
    //     }
    //     return widgets.length > 1;
    //   }
    // },
    boxStyle() {
      let { info = {}, activeCom = {}, draging = false } = this;
      let {
        left = "",
        top = "",
        // width = "",
        // height = "",
        animation = {},
        order: zIndex = "",
        // showCoverStatus = true,
        // matrix = "",
        rotate = "",
        transformOrigin = "",
        type = "",
        children = []
      } = info || {};
      let { direction = "", duration = "", iterationCount = 1 } =
        animation || {};
      let { type: _type = "" } = activeCom || {};
      if (type == "panel" && _type != "canvas" && _type != "panel") {
        let group1 = bmCommon.clone(children || []);
        let group2 = bmCommon.clone(children || []);
        group1.sort((a, b) => a.left - b.left);
        // let max_left = Math.max(...group1.map(item => item.left + item.width));
        group2.sort((a, b) => a.top - b.top);
        // let max_top = Math.max(...group2.map(item => item.top + item.height));
        let { left: minLeft = 0 } = group1[0] || {};
        // let { width: maxWidth = 0, left: maxLeft = 0 } = group1[length - 1] || {};
        // let minLeft = minLeft;
        // maxLeft = maxLeft + maxWidth - minLeft;
        // max_left = max_left - minLeft;
        // if (maxLeft < max_left) {
        //   maxLeft = max_left;
        // }
        let { top: minTop = 0 } = group2[0] || {};
        // let { height: maxHeight = 0, top: maxTop = 0 } = group2[length - 1] || {};
        // let minTop = minTop;
        // maxTop = maxTop + maxHeight - minTop;
        // max_top = max_top - minTop;
        // if (maxTop < max_top) {
        //   maxTop = max_top;
        // }
        // width = maxLeft;
        // height = maxTop;
        left += minLeft;
        top += minTop;
        info.left = left;
        info.top = top;
        children.forEach(item => {
          item.left -= minLeft;
          item.top -= minTop;
        });
      }
      let transform = `rotate(${rotate}deg)`;
      let styles = {
        left: left + "px",
        top: top + "px",
        zIndex,
        // transform: `matrix(${a},${b},${c},${d},${e},${f})`,
        transform: `${transform}`,
        transformOrigin: transformOrigin
        // transformOrigin: "0 0"
      };
      if (!iterationCount) {
        iterationCount = "infinite";
      }
      // styles["pointer-events"] = !showCoverStatus ? "auto" : "none";
      styles["pointer-events"] = !draging ? "auto" : "none";
      // bmCommon.log("draging",draging)
      // bmCommon.log("pointer-events=",showCoverStatus)
      styles["animation-iteration-count"] = iterationCount;
      styles["animation-duration"] = duration;
      styles["animation-direction"] = direction;
      return styles;
    },
    comStyle() {
      return info => {
        // let { info = {} } = this;
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
      };
    }
  },
  methods: {
    ...mapMutations({
      // initMove: "canvas/initMove",
      setActiveCom: "canvas/setActiveCom", //设置当前选中组件
      // resize: "canvas/resize",
      // rotate: "canvas/rotate",
      stopMove: "canvas/stopMove"
    }),
    ...mapActions({
      selectComAction: "canvas/selectCom"
    }),
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
      let { showCoverStatus = true, type = "" } = info || {};
      if (!showCoverStatus && type !== "panel") {
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
      this.setActiveCom(info);
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

    // 调整元件尺寸
    resize(item) {
      let { x, y, direction = "", e = window.event, bmComBox = {} } =
        item || {};
      let { startX, startY, originWidth, originHeight, originRotate } = state;
      let { zoom, info: activeCom = {} } = this;
      state.moving = false;
      var dx = x - startX;
      var dy = y - startY;
      let value, width, height, rotate;
      let { equalScaleable = false } = activeCom || {};

      if (direction === "right") {
        value = originWidth + Math.floor((dx * 1) / zoom);
        if (value > 10) {
          activeCom.width = value;
          if (equalScaleable) {
            activeCom.height = (originHeight * value) / originWidth;
          }
        }
        return;
      }

      if (direction === "top") {
        height = originHeight - Math.floor((dy * 1) / zoom);
        if (height > 10) {
          activeCom.top -= height - activeCom.height;
          activeCom.height = height > 10 ? height : 10;
          if (equalScaleable) {
            activeCom.width = (originWidth * height) / originHeight;
          }
        }
      }

      if (direction === "bottom") {
        value = originHeight + Math.floor((dy * 1) / zoom);
        if (value > 10) {
          activeCom.height = value > 10 ? value : 10;
          if (equalScaleable) {
            activeCom.width = (originWidth * value) / originHeight;
          }
        }
        return;
      }

      if (direction === "left") {
        width = originWidth - Math.floor((dx * 1) / zoom);
        if (width > 10) {
          activeCom.left -= width - activeCom.width;
          activeCom.width = width > 10 ? width : 10;
          if (equalScaleable) {
            activeCom.height = (originHeight * width) / originWidth;
          }
        }
        return;
      }

      if (direction === "topleft") {
        width = originWidth - Math.floor((dx * 1) / zoom);
        height = originHeight - Math.floor((dy * 1) / zoom);
        if (equalScaleable) {
          if (dx > dy) {
            height = (originHeight * width) / originWidth;
          } else {
            width = (originWidth * height) / originHeight;
          }
        }
        if (width > 10 && height > 10) {
          activeCom.left -= (width - activeCom.width) / 2;
          activeCom.top -= (height - activeCom.height) / 2;
          activeCom.height = height > 10 ? height : 10;
          activeCom.width = width > 10 ? width : 10;
        }
        return;
      }
      if (direction === "topright") {
        width = originWidth + Math.floor((dx * 1) / zoom);
        height = originHeight - Math.floor((dy * 1) / zoom);
        if (equalScaleable) {
          if (dx > dy) {
            height = (originHeight * width) / originWidth;
          } else {
            width = (originWidth * height) / originHeight;
          }
        }
        if (width > 10 && height > 10) {
          activeCom.left -= (width - activeCom.width) / 2;
          activeCom.top -= (height - activeCom.height) / 2;
          activeCom.height = height > 10 ? height : 10;
          activeCom.width = width > 10 ? width : 10;
        }
        return;
      }

      if (direction === "bottomleft") {
        height = originHeight + Math.floor((dy * 1) / zoom);
        width = originWidth - Math.floor((dx * 1) / zoom);
        if (equalScaleable) {
          if (dx > dy) {
            height = (originHeight * width) / originWidth;
          } else {
            width = (originWidth * height) / originHeight;
          }
        }
        if (width > 10 && height > 10) {
          activeCom.left -= Math.floor((width - activeCom.width) / 2);
          activeCom.top -= Math.floor((height - activeCom.height) / 2);
          activeCom.height = height > 10 ? height : 10;
          activeCom.width = width > 10 ? width : 10;
        }
        return;
      }
      if (direction === "bottomright") {
        height = originHeight + Math.floor((dy * 1) / zoom);
        width = originWidth + Math.floor((dx * 1) / zoom);
        if (equalScaleable) {
          if (dx > dy) {
            height = (originHeight * width) / originWidth;
          } else {
            width = (originWidth * height) / originHeight;
          }
        }
        if (width > 10 && height > 10) {
          activeCom.left -= Math.floor((width - activeCom.width) / 2);
          activeCom.top -= Math.floor((height - activeCom.height) / 2);
          activeCom.height = height > 10 ? height : 10;
          activeCom.width = width > 10 ? width : 10;
        }
        return;
      }
      if (direction === "rotate") {
        let rect = bmComBox?.getBoundingClientRect() || {};
        let { left = 0, top = 0, width = 0, height = 0 } = rect || {};
        let center = { x: left + width / 2, y: top + height / 2 };
        let pos = bmCommon.getMousePosition(e);
        let y0 = startY - center.y,
          x0 = startX - center.x,
          y = pos.y - center.y,
          x = pos.x - center.x;
        let deg = Math.atan2(y, x) - Math.atan2(y0, x0);
        let angle = (180 * deg) / Math.PI;
        rotate = (angle + originRotate) % 360;
        state.startX = pos.x;
        state.startY = pos.y;
        state.originRotate = rotate;
        activeCom.rotate = rotate;
        return;
      }
    },
    coverEvent() {
      let { info = {} } = this;
      bmCommon.error("dbclick");
      info.showCoverStatus = false;
    },
    mouseupEvent(e) {
      $(document).off("mousemove", this.mousemoveEvent);
      $(document).off("mouseup", this.mouseupEvent);
      this.stopMove();
      this.rotating = false;
      this.resizing = false;
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
      this.resizing = true;
      this.mousedownEvent(e, "topleft");
    },
    topClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      this.resizing = true;
      this.mousedownEvent(e, "top");
    },
    rightTopClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      this.resizing = true;
      this.mousedownEvent(e, "topright");
    },
    leftClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      this.resizing = true;
      this.mousedownEvent(e, "left");
    },
    rightClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      this.resizing = true;
      this.mousedownEvent(e, "right");
    },
    leftBottomClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      this.resizing = true;
      this.mousedownEvent(e, "bottomleft");
    },
    bottomClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      this.resizing = true;
      this.mousedownEvent(e, "bottom");
    },
    rightBottomClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      this.resizing = true;
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

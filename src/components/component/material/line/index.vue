// 直线
<template>
  <div class="bm-material-line-com" :style="comStyle">
    <!-- :transform="`translate(${info.vboxX - 10} ${info.vboxY - 5})`" -->
    <svg
      version="1.1"
      :viewBox="`0 0 ${info.boxW} ${info.boxH}`"
      :width="`${info.boxW}`"
      :height="`${info.boxH}`"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
      ref="svg"
    >
      <defs>
        <template v-if="info.backgroundType == 'gradient'">
          <!-- {{info.gradientStyle.angle}} -->
          <linearGradient
            gradientUnits="userSpaceOnUse"
            :id="info.gradientStyle.gradientId"
            :x1="
              `${
                {
                  0: '0%',
                  45: '0%',
                  90: '0%',
                  135: '0%',
                  180: '100%',
                  225: '100%',
                  270: '100%',
                  315: '100%'
                }[info.gradientStyle.angle]
              }`
            "
            :y1="
              `${
                {
                  0: '100%',
                  45: '100%',
                  90: '100%',
                  135: '0%',
                  180: '0%',
                  225: '0%',
                  270: '100%',
                  315: '100%'
                }[info.gradientStyle.angle]
              }`
            "
            :x2="
              `${
                {
                  0: '0%',
                  45: '100%',
                  90: '100%',
                  135: '100%',
                  180: '100%',
                  225: '0%',
                  270: '0%',
                  315: '0%'
                }[info.gradientStyle.angle]
              }`
            "
            :y2="
              `${
                {
                  0: '0%',
                  45: '0%',
                  90: '100%',
                  135: '100%',
                  180: '100%',
                  225: '100%',
                  270: '100%',
                  315: '0%'
                }[info.gradientStyle.angle]
              }`
            "
            v-if="info.gradientStyle.type == 'linear'"
          >
            <stop
              v-for="(item, index) in info.gradientStyle.valueList"
              :key="index"
              :offset="`${item.value}%`"
              :style="`stop-color:${item.code};stop-opacity:1`"
            />
            <!-- <stop
              offset="100%"
              style="stop-color:rgb(255,0,0);stop-opacity:1"
            /> -->
          </linearGradient>
          <radialGradient
            gradientUnits="userSpaceOnUse"
            :id="info.gradientStyle.gradientId"
            v-else-if="info.gradientStyle.type == 'radial'"
            :cx="
              {
                '50% 50%': '50%',
                '0% 0%': '0%',
                '100% 0%': '100%',
                '0% 100%': '0%',
                '100% 100%': '100%'
              }[info.gradientStyle.center]
            "
            :cy="
              {
                '50% 50%': '50%',
                '0% 0%': '0%',
                '100% 0%': '0%',
                '0% 100%': '100%',
                '100% 100%': '100%'
              }[info.gradientStyle.center]
            "
            :r="
              {
                '50% 50%': '50%',
                '0% 0%': '160%',
                '100% 0%': '150%',
                '0% 100%': '150%',
                '100% 100%': '140%'
              }[info.gradientStyle.center]
            "
            :fx="
              {
                '50% 50%': '50%',
                '0% 0%': '0%',
                '100% 0%': '100%',
                '0% 100%': '0%',
                '100% 100%': '100%'
              }[info.gradientStyle.center]
            "
            :fy="
              {
                '50% 50%': '50%',
                '0% 0%': '0%',
                '100% 0%': '0%',
                '0% 100%': '100%',
                '100% 100%': '100%'
              }[info.gradientStyle.center]
            "
          >
            <stop
              v-for="(item, index) in info.gradientStyle.valueList"
              :key="index"
              :offset="`${item.value}%`"
              :style="`stop-color:${item.code};stop-opacity:1`"
            />
            <!-- <stop
              offset="100%"
              style="stop-color:rgb(0,0,255);stop-opacity:1"
            /> -->
          </radialGradient>
        </template>
      </defs>
      <!-- style="fill-rule:evenodd;clip-rule:evenodd;fill:${this.config.background.color};" -->
      <!-- <polygon :points="info.points" :style="svgStyle" /> -->
      <line
        ref="line"
        :x1="info.x1"
        :y1="info.y1"
        :x2="info.x2"
        :y2="info.y2"
        :style="svgStyle"
      />
      <rect
        class="rect-box"
        :width="info.boxW"
        :height="info.boxH"
        :x="info.boxX"
        :y="info.boxY"
        stroke="#0075e7"
        fill="transparent"
        stroke-width="1"
      ></rect>
      <rect
        class="rect"
        width="14"
        height="14"
        ref="rect1"
        :x="info.x1 - 7"
        :y="info.y1 - 7"
        stroke="#0075e7"
        @mousedown.stop="leftClickEvent"
        fill="#fff"
        stroke-width="1"
      ></rect>
      <rect
        class="rect"
        width="14"
        height="14"
        ref="rect2"
        :x="info.x2 - 7"
        fill="#fff"
        :y="info.y2 - 7"
        stroke="#0075e7"
        stroke-width="1"
        @mousedown.stop="rightClickEvent"
      ></rect>
    </svg>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
import CanvasEvent from "@/core/CanvasEvent.js";
const { mapActions, mapMutations, mapGetters } = Vuex;
//84,17.5,53.3,28.5,59.6,34.8,17.5,76.9,24.6,84,66.7,41.9,73,48.3
// const points = [
//   [84, 17.5],
//   [53.3, 28.5],
//   [59.6, 34.8],
//   [17.5, 76.9],
//   [24.6, 84],
//   [66.7, 41.9],
//   [73, 48.3]
// ];
export default {
  name: "materialLineCom",
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
  computed: {
    ...mapGetters({
      showType: "canvas/getShowType", //当前显示类型
      //widgetList: "canvas/getWidgetList"
      widgetList: [], //组件列表
      // moving: "canvas/getMoving",
      zoom: "canvas/getZoom" //放大缩小
    }),

    //渐变颜色样式
    gradientStyle() {
      return (info = {}) => {
        // let { info = {} } = this;
        let { gradientStyle = {} } = info || {};
        let {
          type = "",
          angle = "",
          center = "",
          radialShape = "",
          valueList = []
        } = gradientStyle || {};
        let styles = {};
        let colors = valueList.map(item => `${item.code} ${item.value}%`);
        if (type == "linear") {
          styles.backgroundImage = `linear-gradient(${angle}deg, ${colors.join()})`;
        } else if (type == "radial") {
          styles.backgroundImage = `radial-gradient(${radialShape} at ${center}, ${colors.join()})`;
        }
        return styles;
      };
    },
    svgStyle() {
      let { info = {} } = this;
      let {
        // width = "",
        // height = "",
        // color = "",
        gradientStyle = {},
        borderStyle = "",
        lineWidth = "",
        // borderRadiusTopLeft = 0,
        // borderRadiusTopRight = 0,
        // borderRadiusBottomLeft = 0,
        // borderRadiusBottomRight = 0,
        backgroundType = "",
        //
        // scale = "",
        //
        //
        //
        backgroundColor = ""
        // backgroundImage = "",
        // backgroundRepeat = "",
        // backgroundSize = ""
      } = info || {};
      let styles = {};
      if (borderStyle) {
        switch (borderStyle) {
          case "none":
            lineWidth = 0;
            borderStyle = "";
            break;
          case "solid":
            borderStyle = "";
            break;
          case "dotted":
            // styles["stroke-linecap"] = "round";
            borderStyle = `${lineWidth},${lineWidth}`;
            break;
          case "dashed":
            borderStyle = `${lineWidth * 2},${lineWidth}`;
            break;
          // case "space-dashed":
          //   borderStyle = `${borderWidth * 2},${borderWidth},${borderWidth /
          //     2} ,${borderWidth / 2},${borderWidth}`;
          //   break;

          default:
            break;
        }
        styles["stroke-width"] = lineWidth;
        if (borderStyle) {
          styles["stroke-dasharray"] = borderStyle;
        }
      }
      if (backgroundType == "purity") {
        //纯色
        styles["stroke"] = backgroundColor;
        // if (backgroundImage) {
        //   styles["background-image"] = `url(${this.$loadImgUrl(
        //     backgroundImage
        //   )})`;
        // }
      } else if (backgroundType == "gradient") {
        //渐变
        // styles = { ...styles, ...gradientStyle };
        let { gradientId = "" } = gradientStyle || {};
        styles["stroke"] = `url(#${gradientId})`;
      }
      return styles;
    },
    comStyle() {
      // let { info = {} } = this;
      // let { height = "" } = info || {};
      let styles = {};
      // if (height) {
      //   styles["height"] = `${height}px`;
      // }
      return styles || {};
    }
  },
  created() {
    let { info = {} } = this;
    let { x1 = 0, y1 = 0, height = 0, width = 0 } = info || {};
    info.lineLong = width;
    info.boxX = x1;
    info.boxY = y1;
    info.boxW = width > 20 ? width : 20;
    info.boxH = height > 20 ? height : 20;
  },
  mounted() {
    let { info = {} } = this;
    let { gradientStyle = {} } = info || {};
    this.$nextTick(() => {
      this.reloadSize();
    });
    gradientStyle.gradientId = bmCommon.uuid();
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),
    reloadSize() {
      let { info = {} } = this;
      let { x1 = 0, y1 = 0, x2 = 0, y2 = 0 } = info || {};
      let lineLong = Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2));
      let line = SVG(this.$refs.line);
      let bbox = line.bbox();
      // let bbox = line.bbox();
      let { w = 0, h = 0, x = 0, y = 0 } = bbox || {};
      info.boxX = x;
      info.boxY = y;
      info.lineLong = lineLong;
      // bmCommon.warn("rbox=", info.vboxX,info.vboxY);
      info.boxW = w > 20 ? w : 20;
      info.width = 0;
      info.boxH = h > 20 ? h : 20;
      info.height = 0;
    },
    leftClickEvent(e) {
      e.stopPropagation();
      e.preventDefault();
      let { info = {} } = this;
      let { id = "" } = info || {};
      CanvasEvent.selectComAction(id); //选中组件
      this.mousedownEvent(e, "left");
    },
    rightClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      let { info = {} } = this;
      let { id = "" } = info || {};
      CanvasEvent.selectComAction(id); //选中组件
      this.mousedownEvent(e, "right");
    },
    mousedownEvent(e, direction) {
      let { showType = "" } = this;
      if (showType != "edit") {
        return;
      }
      e.stopPropagation();
      e.preventDefault();
      // let { info = {} } = this;
      let pos = bmCommon.getMousePosition(e);
      let { x = "", y = "" } = pos || {};
      // let {
      //   width: originWidth = "",
      //   height: originHeight = "",
      //   left,
      //   top,
      //   rotate: originRotate = ""
      // } = info || {};
      this.direction = direction;
      this.startX = x;
      this.startY = y;
      // this.initMove({
      //   startX: x,
      //   startY: y,
      //   originX: left,
      //   originY: top,
      //   originRotate,
      //   originWidth,
      //   originHeight
      // });
      $(document).on("mousemove", this.mousemoveEvent);
      $(document).on("mouseup", this.mouseupEvent);
    },
    mousemoveEvent(e) {
      e.stopPropagation();
      e.preventDefault();
      let pos = bmCommon.getMousePosition(e);
      let { x = "", y = "" } = pos || {};
      let { direction = "" } = this;
      this.resize({
        x,
        y,
        e,
        direction
      });
    },
    mouseupEvent(e) {
      $(document).off("mousemove", this.mousemoveEvent);
      $(document).off("mouseup", this.mouseupEvent);
      // this.stopMove();
      CanvasEvent.createHistoryAction();
      this.rotating = false;
    },

    // 调整元件尺寸
    resize(item) {
      let { x, y, direction = "" } = item || {};
      let {
        startX,
        startY,
        // originX,
        // originY,
        // widgetList = [],
        zoom,
        info
        // originWidth,
        // originHeight,
        // originRotate
      } = this;
      zoom = 1;
      let dx = x - startX;
      let dy = y - startY;
      // const distance = 10;
      // let value, width, height, rotate;
      let { x1 = 0, x2 = 0, y1 = 0, y2 = 0 } = info || {};
      // bmCommon.warn("dx,dy=", direction, dx, dy, zoom, x, y);
      // let offset =
      //   document.querySelector(".canvas-box")?.getBoundingClientRect() || {};
      // let { x: boxX = 0, y: boxY = 0 } = offset || {};
      dx = Math.floor(dx / zoom);
      dy = Math.floor(dy / zoom);
      if (direction === "right") {
        // let rect2 = this.$refs.rect2;
        // let _offset = rect2?.getBoundingClientRect() || {};
        // let { x: _x2 = 0, y: _y2 = 0 } = _offset || {};
        // if (value > 10) {
        // x2 += dx;
        // y2 += dy;
        let __x2 = x2 + dx;
        let __y2 = y2 + dy;
        // if (Math.abs(x2 - __x2) > distance || Math.abs(y2 - __y2) > distance) {
        //   this.movingStatus = true; //大于判断距离则进行判断
        // }
        // // bmCommon.log("x=", _x2, x2, ",y=", _y2, y2);
        // if (this.movingStatus) {
        //   try {
        //     widgetList.forEach(item => {
        //       let { points = [] } = item || {};
        //       if (points && points.length > 0) {
        //         // bmCommon.log("比较---x=", points.toString());
        //         points.forEach(_item => {
        //           let [x = 0, y = 0] = _item || {};
        //           if (
        //             _x2 < x + distance &&
        //             _x2 > x - distance &&
        //             _y2 < y + distance &&
        //             _y2 > y - distance
        //           ) {
        //             __x2 = x - left - boxX;
        //             __y2 = y - top - boxY;
        //             this.movingStatus = false;
        //             throw new Error(`找到符合条件的点的坐标x=${x},y=${y}`);
        //           }
        //         });
        //       }
        //     });
        //   } catch (error) {
        //     bmCommon.error(error);
        //   }
        // }
        // bmCommon.log("x2====x=", __x2, ",y=", __y2);
        info.x2 = __x2;
        info.y2 = __y2;
        // }
        this.reloadSize();
      } else if (direction === "left") {
        // let rect1 = this.$refs.rect1;
        // let _offset = rect1?.getBoundingClientRect() || {};
        // let { x: _x1 = 0, y: _y1 = 0 } = _offset || {};
        let __x1 = x1 + dx;
        let __y1 = y1 + dy;
        // if (Math.abs(x1 - __x1) > distance || Math.abs(y1 - __y1) > distance) {
        //   this.movingStatus = true; //大于判断距离则进行判断
        // }
        // bmCommon.log("x1====x=", __x1, ",y=", __y1);
        // if (this.movingStatus) {
        //   try {
        //     widgetList.forEach(item => {
        //       let { points = [] } = item || {};
        //       // bmCommon.log("比较---x=", points.toString());
        //       if (points && points.length > 0) {
        //         points.forEach(_item => {
        //           let [x = 0, y = 0] = _item || {};
        //           if (
        //             _x1 < x + distance &&
        //             _x1 > x - distance &&
        //             _y1 < y + distance &&
        //             _y1 > y - distance
        //           ) {
        //             __x1 = x - left - boxX;
        //             __y1 = y - top - boxY;
        //             this.movingStatus = false;
        //             throw new Error(`找到符合条件的点的坐标x=${x},y=${y}`);
        //           }
        //         });
        //       }
        //     });
        //   } catch (error) {
        //     bmCommon.error(error);
        //   }
        // }
        info.x1 = __x1;
        info.y1 = __y1;
        this.reloadSize();
      }
      this.startX = x;
      this.startY = y;
    }
  }
};
</script>

<style lang="less">
@import (less) "../../../../assets/less/components/component/material/line.less";
</style>

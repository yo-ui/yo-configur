// 曲线
<template>
  <div class="bm-material-curve-line-com" :style="comStyle">
    <!-- :transform="`translate(${info.vboxX - 10} ${info.vboxY - 5})`" -->
    <svg
      version="1.1"
      :viewBox="`0 0 ${info.width} ${info.height}`"
      :width="`${info.width}`"
      :height="`${info.height}`"
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
      <path
        ref="line"
        :d="
          `M ${info.x1} ${info.y1} Q ${info.qx} ${info.qy},${info.x2} ${info.y2}`
        "
        fill="transparent"
        :style="svgStyle"
      />
      <circle
        class="circle"
        :cx="info.qx"
        :cy="info.qy"
        :r="5"
        stroke="#0075e7"
        fill="#7dd646"
        stroke-width="1"
        @mousedown.stop="centerClickEvent"
      />
      <rect
        class="rect"
        width="10"
        height="10"
        :x="info.x1 - 5"
        :y="info.y1 - 5"
        stroke="#0075e7"
        @mousedown.stop="leftClickEvent"
        fill="#fff"
        stroke-width="1"
      ></rect>
      <rect
        class="rect"
        width="10"
        height="10"
        :x="info.x2 - 5"
        fill="#fff"
        :y="info.y2 - 5"
        stroke="#0075e7"
        stroke-width="1"
        @mousedown.stop="rightClickEvent"
      ></rect>
    </svg>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
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
  name: "materialCurveLineCom",
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
      // showType: "canvas/getShowType", //当前显示类型
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
        //   styles["backgroundImage"] = `url(${this.$loadImgUrl(
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
      // let {
      //   // width = "",
      //   height = ""
      // } = info || {};
      let styles = {};

      // if (width) {
      // styles["width"] = `${width}px`;

      // }
      // if (height) {
      //   styles["height"] = `${height}px`;
      // }
      return styles || {};
    }
  },
  created() {
    let { info = {} } = this;
    let { x1 = 0, y1 = 0 } = info || {};
    info.vboxX = x1;
    info.vboxY = y1;
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
      // let { info = {} } = this;
      // let { x1, y1, x2, y2 } = info || {};
      // let line = SVG(this.$refs.line);
      // let rbox = line.rbox();
      // // let bbox = line.bbox();
      // let { w = 0, h = 0 } = rbox || {};
      // info.vboxX = Math.min(x1, x2);
      // info.vboxY = Math.min(y1, y2);
      // // bmCommon.warn("rbox=", info.vboxX,info.vboxY);
      // info.width = w;
      // info.height = h + 10;
    },
    leftClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      this.mousedownEvent(e, "left");
    },
    centerClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      this.mousedownEvent(e, "center");
    },
    rightClickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      this.mousedownEvent(e, "right");
    },
    mousedownEvent(e, direction) {
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
        zoom,
        info
        // originWidth,
        // originHeight,
        // originRotate
      } = this;
      var dx = x - startX;
      var dy = y - startY;
      // let value, width, height, rotate;
      // let { equalScaleable = false } = info || {};
      // bmCommon.warn("dx,dy=", direction, dx, dy, zoom, x, y);

      this.startX = x;
      this.startY = y;
      if (direction === "right") {
        dx = Math.floor((dx * 1) / zoom);
        dy = Math.floor((dy * 1) / zoom);
        // if (value > 10) {
        info.x2 += dx;
        info.y2 += dy;
        // }
        this.reloadSize();
        return;
      }

      if (direction === "left") {
        dx = Math.floor((dx * 1) / zoom);
        dy = Math.floor((dy * 1) / zoom);
        info.x1 += dx;
        info.y1 += dy;
        // }
        this.reloadSize();
        return;
      }
      if (direction === "center") {
        dx = Math.floor((dx * 1) / zoom);
        dy = Math.floor((dy * 1) / zoom);
        info.qx += dx;
        info.qy += dy;
        // }
        // this.reloadSize();
        return;
      }
    }
    // blurEvent(e) {
    //   let { target } = e;
    //   let { info = {} } = this;
    //   let name = $(target)
    //     .text()
    //     .trim();
    //   info.name = name;
    // }
  }
};
</script>

<style lang="less">
@import (reference) "./../../../../assets/less/common.less";
.active {
  .bm-material-curve-line-com {
    .rect {
      .db;
      &:hover {
        opacity: 1;
      }
    }
    .circle {
      .db;
      opacity: 1;
    }
  }
}
.bm-material-curve-line-com {
  .posr;
  pointer-events: none;
  z-index: 1000;
  .rect,
  .circle {
    .db(none);
    opacity: 0.1;
  }
  svg {
    overflow: inherit;
    path,
    rect,
    circle {
      cursor: move;
      pointer-events: auto;
    }
  }
}
</style>

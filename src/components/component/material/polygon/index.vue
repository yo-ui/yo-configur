// 多边形
<template>
  <div class="bm-material-polygon-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="
        `${0 - info.borderWidth} ${0 - info.borderWidth} ${info.width} ${
          info.height
        }`
      "
      :width="`${info.width}`"
      :height="`${info.height}`"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs>
        <template v-if="info.backgroundType == 'gradient'">
          <!-- {{info.gradientStyle.angle}} -->
          <linearGradient
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
      <polygon :points="info.points" :style="svgStyle" />
      <!-- <path :d="info.points" :style="svgStyle" /> -->
    </svg>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
// M50.5 9.3L94.2 41.1L77.5 92.5H23.5L6.8 41.1L50.5 9.3Z
const points = [
  ["M", 50.5, 9.3],
  ["L", 94.2, 41.1],
  ["L", 77.5, 92.5],
  ["H", 23.5],
  ["L", 6.8, 41.1],
  ["L", 50.5, 9.3],
  ["Z"]
];
export default {
  name: "materialPolygonCom",
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
    ...mapGetters(),
    svgStyle() {
      let { info = {} } = this;
      let {
        width = "",
        height = "",
        borderColor = "",
        gradientStyle = {},
        borderStyle = "",
        cornerCount = 3, //角数
        // outerRadius = 50, //外切圆半径
        borderWidth = "",
        backgroundType = "",
        backgroundColor = ""
      } = info || {};
      let styles = {};
      if (borderColor) {
        styles["stroke"] = borderColor;
      }
      if (borderStyle) {
        switch (borderStyle) {
          case "none":
            borderWidth = 0;
            borderStyle = "";
            break;
          case "solid":
            borderStyle = "";
            break;
          case "dotted":
            // styles["stroke-linecap"] = "round";
            borderStyle = `${borderWidth},${borderWidth}`;
            break;
          case "dashed":
            borderStyle = `${borderWidth * 2},${borderWidth}`;
            break;
          // case "space-dashed":
          //   borderStyle = `${borderWidth * 2},${borderWidth},${borderWidth /
          //     2} ,${borderWidth / 2},${borderWidth}`;
          //   break;

          default:
            break;
        }
        if (borderStyle) {
          styles["stroke-dasharray"] = borderStyle;
        }
      }
      styles["stroke-width"] = borderWidth;
      let point = [width / 2, 0]; //第一个点
      // let innerPoint = new SVG.Point([
      //   width / 2,
      //   height / 2
      // ]).transform({
      //   rotate: 360 / (cornerCount * 2),
      //   origin: {
      //     x: width / 2,
      //     y: height / 2
      //   }
      // }); //内切圆初始点
      let points = [];
      for (let i = 0; i < cornerCount; i++) {
        let _point = new SVG.Point(point).transform({
          rotate: (360 / cornerCount) * i,
          origin: { x: width / 2, y: height / 2 }
        });
        points.push(_point.toArray());
        // points2.push(_point.toArray());

        // _point = new SVG.Point(innerPoint).transform({
        //   rotate: (360 / cornerCount) * i,
        //   origin: { x: width / 2, y: height / 2 }
        // });
        // points.push(_point.toArray());
      }
      info.points = new SVG.PointArray(points)
        .size(width - borderWidth * 2, height - borderWidth * 2)
        .move(0, 0);
      bmCommon.log(info.points);
      if (backgroundType == "purity") {
        //纯色
        if (backgroundColor) {
          styles["fill"] = backgroundColor;
        }
      } else if (backgroundType == "gradient") {
        //渐变
        // styles = { ...styles, ...gradientStyle };
        let { gradientId = "" } = gradientStyle || {};
        styles["fill"] = `url(#${gradientId})`;
      }
      return styles;
    },
    comStyle() {
      let { info = {} } = this;
      let { width = "", height = "" } = info || {};
      let styles = {};

      // if (width) {
      styles["width"] = `${width}px`;

      // }
      // if (height) {
      styles["height"] = `${height}px`;

      return styles || {};
    }
  },
  mounted() {
    let { info = {} } = this;
    let { gradientStyle = {} } = info || {};
    info.point = new SVG.PathArray(points);
    gradientStyle.gradientId = bmCommon.uuid();
    //
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({})
  }
};
</script>

<style lang="less">
@import (less)
  "../../../../assets/less/components/component/material/circle.less";
</style>

<template>
  <div class="bm-material-star-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="
        `-${info.borderWidth} -${info.borderWidth} ${info.width} ${info.height}`
      "
      :width="`${info.width}`"
      :height="`${info.height}`"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs>
        <template v-if="info.backgroundType == 'gradient'">
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
          </radialGradient>
        </template>
      </defs>
      <!-- <path :d="info.points" :style="svgStyle" /> -->
      <polygon :points="info.points" :style="svgStyle" />
      <!-- <circle
        :cx="info.width / 2"
        :cy="info.height / 2"
        :r="info.innerRadius"
        style="stroke:#006600; fill:#00cc00"
      /> -->
      <!-- <polygon :points="info.points1" style="stroke:#006600; fill:#00cc00" />
      <polygon
        :points="info.points2"
        style="stroke:#006600; fill:#ff0000;opacity: .3;"
      /> -->
    </svg>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
// "M50.5 12.5L59.9 41.6L90.5 41.5L65.7 59.5L75.2 88.5L50.5 70.5L25.8 88.5L35.3 59.5L10.6 41.6L41.2 41.7L50.5 12.5Z";
const points = [
  // ["M", 50.5, 12.5],
  // ["L", 59.9, 41.6],
  // ["L", 90.5, 41.5],
  // ["L", 65.7, 59.5],
  // ["L", 75.2, 88.5],
  // ["L", 50.5, 70.5],
  // ["L", 25.8, 88.5],
  // ["L", 35.3, 59.5],
  // ["L", 10.6, 41.6],
  // ["L", 41.2, 41.7],
  // ["L", 50.5, 12.5],
  // ["Z"]
];
export default {
  name: "materialStarCom",
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
        width = "",
        height = "",
        borderColor = "",
        gradientStyle = {},
        borderStyle = "",
        borderWidth = "",
        cornerCount = 3, //角数
        innerRadius = 50, //内切圆半径
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
      let point = [width / 2, 0];
      let innerPoint = new SVG.Point([
        width / 2,
        height / 2 - innerRadius
      ]).transform(
        {
          rotate: 360 / (cornerCount * 2),
          origin: {
            x: width / 2,
            y: height / 2
          }
        }
        // new SVG.Matrix().rotate(360 / (cornerCount * 2)),
        // width / 2,
        // height / 2
      ); //内切圆初始点
      // bmCommon.log(width / 2, height / 2 - innerRadius, innerPoint);
      let points = [];
      // let points1 = [];
      // let points2 = [];
      // let xs = [],
      //   ys = [];
      for (let i = 0; i < cornerCount; i++) {
        let _point = new SVG.Point(point).transform(
          {
            rotate: (360 / cornerCount) * i,
            origin: { x: width / 2, y: height / 2 }
          }
          // new SVG.Matrix().rotate(
          //   (360 / cornerCount) * i,
          //   width / 2,
          //   height / 2
          // )
        );
        // bmCommon.log(points.toString());
        // let { x: _x = 0, y: _y = 0 } = _point;
        // xs.push(_x);
        // ys.push(_y);
        points.push(_point.toArray());
        // points2.push(_point.toArray());

        _point = new SVG.Point(innerPoint).transform(
          {
            rotate: (360 / cornerCount) * i,
            origin: { x: width / 2, y: height / 2 }
          }
          // new SVG.Matrix().rotate(
          //   (360 / cornerCount) * i,
          //   width / 2,
          //   height / 2
          // )
        );
        // points1.push(_point.toArray());
        // let { x = 0, y = 0 } = _point;
        // xs.push(x);
        // ys.push(y);
        points.push(_point.toArray());
      }
      // bmCommon.log("内切 points", xs ,ys);
      // info.vBoxx = Math.min.apply(null, xs);
      // info.vBoxy = Math.min.apply(null, ys);
      info.points = new SVG.PointArray(points)
        .size(width - borderWidth * 2, height - borderWidth * 2)
        .move(0, 0);
      // info.points1 = new SVG.PointArray(points1);
      // info.points2 = new SVG.PointArray(points2);
      // info.points = points;
      if (backgroundType == "purity") {
        //纯色
        if (backgroundColor) {
          styles["fill"] = backgroundColor;
        }
        // if (backgroundImage) {
        //   styles["backgroundImage"] = `url(${this.$loadImgUrl(
        //     backgroundImage
        //   )})`;
        // }
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
      let {
        width = "",
        height = ""
        // color = "",
        // borderColor = "",
        // borderStyle = "",
        // borderWidth = "",
        // borderRadiusTopLeft = 0,
        // borderRadiusTopRight = 0,
        // borderRadiusBottomLeft = 0,
        // borderRadiusBottomRight = 0,
        // backgroundType = "",
        // backgroundColor = "",
        // backgroundImage = "",
        // backgroundRepeat = "",
        // backgroundSize = ""
      } = info || {};
      let styles = {};

      // if (width) {
      styles["width"] = `${width}px`;
      // }
      // if (height) {
      styles["height"] = `${height}px`;
      // }
      // if (backgroundRepeat) {
      //   styles["backgroundRepeat"] = backgroundRepeat;
      // }
      // if (backgroundSize) {
      //   styles["backgroundSize"] = backgroundSize;
      // }
      // if (borderColor) {
      //   styles["borderColor"] = borderColor;
      // }
      // if (borderStyle) {
      //   styles["borderStyle"] = borderStyle;
      // }
      // styles["borderWidth"] = `${borderWidth}px`;

      // styles[
      //   "borderRadius"
      // ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;

      // if (backgroundType == "purity") {
      //   //纯色
      //   if (backgroundColor) {
      //     styles["backgroundColor"] = backgroundColor;
      //   }
      //   if (backgroundImage) {
      //     styles["backgroundImage"] = `url(${this.$loadImgUrl(
      //       backgroundImage
      //     )})`;
      //   }
      // } else if (backgroundType == "gradient") {
      //   //渐变
      //   styles = { ...styles, ...gradientStyle(info) };
      // }
      return styles || {};
    }
  },
  created() {
    let { info = {} } = this;
    let { gradientStyle = {} } = info || {};
    info.points = new SVG.PointArray(points);
    // info.points1 = [];
    // info.points2 = [];
    info.vBoxx = 0;
    info.vBoxy = 0;
    gradientStyle.gradientId = bmCommon.uuid();
    this.setActiveCom(info);
  },
  mounted() {
    //
  },
  methods: {
    ...mapMutations({
      setActiveCom: "canvas/setActiveCom" //设置当前选中组件
    }),
    ...mapActions({})
  }
};
</script>

<style lang="less">
@import (less) "../../../../assets/less/components/component/material/star.less";
</style>

<template>
  <div class="bm-material-circle-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 ${info.width} ${info.height}`"
      :width="info.width"
      :height="info.height"
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
    </svg>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
// 509.7,63.4 506.7,63.4 506.7,79 501.8,83.9 501.8,100 10.8,100 10.8,68.4 5.5,63.2 5.5,-0.1 2.5,-0.1 2.5,5.6 -0.5,8.6 -0.5,25.5 2.5,30.8 2.5,103 181.2,103 186.3,108.1 247.4,108.1 250.1,103 509.7,103
const points = [
  [509.7, 63.4],
  [506.7, 63.4],
  [506.7, 79],
  [501.8, 83.9],
  [501.8, 100],
  [10.8, 100],
  [10.8, 68.4],
  [5.5, 63.2],
  [5.5, -0.1],
  [2.5, -0.1],
  [2.5, 5.6],
  [-0.5, 8.6],
  [-0.5, 25.5],
  [2.5, 30.8],
  [2.5, 103],
  [181.2, 103],
  [186.3, 108.1],
  [247.4, 108.1],
  [250.1, 103],
  [509.7, 103]
];
export default {
  name: "materialCircleCom",
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
        // color = "",
        borderColor = "",
        gradientStyle = {},
        borderStyle = "",
        borderWidth = "",
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
      styles["stroke"] = borderColor;
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
      info.points = new SVG.PointArray(points).size(
        width - borderWidth * 2,
        height - borderWidth * 2
      );
      if (backgroundType == "purity") {
        //纯色
        styles["fill"] = backgroundColor;
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
        // // color = "",
        // borderColor = "",
        // borderStyle = "",
        // borderWidth = "",
        // borderRadiusTopLeft = 0,
        // borderRadiusTopRight = 0,
        // borderRadiusBottomLeft = 0,
        // borderRadiusBottomRight = 0,
        // backgroundType = "",

        // // scale = "",

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
  mounted() {
    let { info = {} } = this;
    let { gradientStyle = {} } = info || {};
    info.points = new SVG.PointArray(points);
    gradientStyle.gradientId = bmCommon.uuid();
    //
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({})
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
@import (less)
  "../../../../assets/less/components/component/material/circle.less";
</style>

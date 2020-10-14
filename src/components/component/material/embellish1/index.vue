<template>
  <div class="bm-material-embellish-1-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 ${info.width} ${info.height}`"
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
      <polygon
        :points="info.points"
        :style="svgStyle"
      />
    </svg>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
// 505.2,57.4 203.9,57.4 199.7,54 181.3,54 174.3,47 168,47 128,7 75.1,7 72.5,1.4 46.1,1.4 40.5,7 1,7 1,10 116,10 141.3,33.7 150.5,33.7 177.2,60.4 358,60.4 360.9,63.3 407.6,63.3 409.9,60.4 505.2,60.4
const points = [
  [505.2, 57.4],
  [203.9, 57.4],
  [199.7, 54],
  [181.3, 54],
  [174.3, 47],
  [168, 47],
  [128, 7],
  [75.1, 7],
  [72.5, 1.4],
  [46.1, 1.4],
  [40.5, 7],
  [1, 7],
  [1, 10],
  [116, 10],
  [141.3, 33.7],
  [150.5, 33.7],
  [177.2, 60.4],
  [358, 60.4],
  [360.9, 63.3],
  [407.6, 63.3],
  [409.9, 60.4],
  [505.2, 60.4]
];
export default {
  name: "materialEmbellishCom",
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
    // gradientStyle() {
    //   let { info = {} } = this;
    //   let { gradientStyle = {} } = info || {};
    //   let {
    //     type = "",
    //     angle = "",
    //     center = "",
    //     radialShape = "",
    //     valueList = []
    //   } = gradientStyle || {};
    //   let styles = {};
    //   let colors = valueList.map(item => `${item.code} ${item.value}%`);
    //   if (type == "linear") {
    //     styles.backgroundImage = `linear-gradient(${angle}deg, ${colors.join()})`;
    //   } else if (type == "radial") {
    //     styles.backgroundImage = `radial-gradient(${radialShape} at ${center}, ${colors.join()})`;
    //   }
    //   return styles;
    // },
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
        // borderRadius = "",
        backgroundType = "",
        // opacity = "",
        // scale = "",
        // visible = true,
        // flipV = false,
        // flipH = false,
        // fontFamily = "",
        // fontSize = "",
        // fontWeight = "",
        // fontStyle = ""
        backgroundColor = ""
        // backgroundImage = "",
        // backgroundRepeat = "",
        // backgroundSize = ""
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
      info.points = new SVG.PointArray(points).size(
        width - borderWidth*2,
        height - borderWidth*2
      );
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
        height = "",
        // color = "",
        // borderColor = "",
        // borderStyle = "",
        // borderWidth = "",
        // borderRadius = "",
        // backgroundType = "",
        opacity = "",
        // scale = "",
        visible = true,
        flipV = false,
        flipH = false
        // fontFamily = "",
        // fontSize = "",
        // fontWeight = "",
        // fontStyle = ""
        // backgroundColor = ""
        // backgroundImage = "",
        // backgroundRepeat = "",
        // backgroundSize = ""
      } = info || {};
      let styles = {};

      // if (width) {
      styles["width"] = `${width}px`;
      styles["visibility"] = `${visible ? "visible" : "hidden"}`;
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
      styles["opacity"] = opacity / 100;
      // styles["borderRadius"] = `${borderRadius}px`;
      if (flipV || flipH) {
        let scale = `scale(${flipH ? -1 : 1},${flipV ? -1 : 1})`;
        (styles["transform"] = `${scale}`),
          (styles["-webkit-transform"] = `${scale}`),
          (styles["-ms-transform"] = `${scale}`),
          (styles["-o-transform"] = `${scale}`),
          (styles["-moz-transform"] = `${scale}`);
      }
      // if (color) {
      //   styles["color"] = color;
      // }
      // if (fontSize) {
      //   styles["fontSize"] = `${fontSize}px`;
      // }
      // if (fontFamily) {
      //   styles["fontFamily"] = `${fontFamily}`;
      // }
      // if (fontWeight) {
      //   styles["fontWeight"] = fontWeight;
      // }
      // if (fontStyle) {
      //   styles["fontStyle"] = fontStyle;
      // }
      // if (backgroundType == "purity") {
      //   //纯色
      //   if (backgroundColor) {
      //     styles["backgroundColor"] = backgroundColor;
      //   }
      //   // if (backgroundImage) {
      //   //   styles["backgroundImage"] = `url(${this.$loadImgUrl(
      //   //     backgroundImage
      //   //   )})`;
      //   // }
      // } else if (backgroundType == "gradient") {
      //   //渐变
      //   styles = { ...styles, ...gradientStyle };
      // }
      // if (backgroundImage) {
      //   styles["backgroundImage"] = `url(${this.$loadImgUrl(backgroundImage)})`;
      // }
      return styles || {};
    }
  },
  mounted() {
    let { info = {} } = this;
    let { gradientStyle = {} } = info || {};
    info.points = new SVG.PointArray(points);
    gradientStyle.gradientId = bmCommon.uuid();
    // this.$emit("success"); //组件加载完成回调
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
  "../../../../assets/less/components/component/material/embellish.less";
</style>

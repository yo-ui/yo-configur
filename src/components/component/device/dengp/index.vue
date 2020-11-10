// 灯泡
<template>
  <div class="bm-device-dengp-com" :style="comStyle">
    <!-- :viewBox="`${info.vBoxx} ${info.vBoxy} ${info.width} ${info.height}`" -->
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="10 0 32 50"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
       <defs
        v-html="
          `
        <style type='text/css'>
        .dengp-st0{fill:url(#dengp_2_);}
        .dengp-st1{fill:url(#dengp_3_);}
        .dengp-st2{fill:url(#dengp_4_);}
        .dengp-st3{fill:#AEB4BA;}
        .dengp-st4{fill:#4B5156;}
        .dengp-st5{fill:url(#dengp_5_);}
        .dengp-st6{fill:url(#dengp_6_);}
      </style>
      `
        "
      ></defs>
      <g>
        <radialGradient
          id="dengp_5_"
          cx="25.8905"
          cy="31.0651"
          r="15.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style="stop-color:#C2C2C2" />
          <stop offset="1" style="stop-color:#7A7A7A" />
        </radialGradient>
        <path
          id="dengp_1405_"
          class="dengp-st5"
          d="M32.56,17.33v-3.22H19.22v3.17c0,1.86-0.79,3.68-2.26,4.82c-3.53,2.76-5.74,7.1-5.56,11.97
          c0.27,7.44,6.37,13.6,13.81,13.94c8.32,0.39,15.2-6.25,15.2-14.49c0-4.55-2.1-8.61-5.39-11.27C33.51,21.03,32.56,19.26,32.56,17.33
          z"
        />
        <linearGradient
          id="dengp_6_"
          gradientUnits="userSpaceOnUse"
          x1="18.8643"
          y1="10.7485"
          x2="32.9167"
          y2="10.7485"
        >
          <stop offset="0" style="stop-color:#ACB1B9" />
          <stop offset="0.4813" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#A9AEB7" />
        </linearGradient>
        <path
          id="dengp_1399_"
          class="dengp-st6"
          d="M18.86,4.96v8.22c0,1.86,3.15,3.36,7.03,3.36c3.88,0,7.03-1.5,7.03-3.36V4.96H18.86z"
        />
        <ellipse
          id="dengp_1398_"
          class="dengp-st3"
          cx="25.89"
          cy="4.96"
          rx="7.03"
          ry="3.36"
        />
        <path
          id="dengp_1404_"
          class="dengp-st4"
          d="M29.35,1.88L29.35,1.88L29.35,1.88c-0.05-0.03-0.09-0.06-0.13-0.08L27.9,0.96h-4.01
          l-0.91,0.6c-0.75,0.36-1.21,0.85-1.21,1.4c0,1.09,1.85,1.97,4.13,1.97s4.13-0.88,4.13-1.97C30.02,2.56,29.77,2.19,29.35,1.88z"
        />
        <ellipse
          id="dengp_1401_"
          class="dengp-st3"
          cx="25.89"
          cy="0.96"
          rx="2.01"
          ry="0.96"
        />
      </g>
      <g class="SVG_ani" v-if="pointValue == 1">
        <radialGradient
          id="dengp_2_"
          cx="26.186"
          cy="33.7572"
          r="26.186"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#FCFCB1;stop-opacity:0" />
        </radialGradient>
        <circle
          id="dengp_1409_"
          class="dengp-st0"
          cx="26.19"
          cy="33.76"
          r="26.19"
        />
        <radialGradient
          id="dengp_3_"
          cx="25.7781"
          cy="31.0932"
          r="15.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style="stop-color:#FFFFFF" />
          <stop offset="0.1762" style="stop-color:#FFFFFB" />
          <stop offset="0.3468" style="stop-color:#FEFDEF" />
          <stop offset="0.5151" style="stop-color:#FCFBDC" />
          <stop offset="0.6821" style="stop-color:#FAF8C1" />
          <stop offset="0.8464" style="stop-color:#F7F49E" />
          <stop offset="1" style="stop-color:#F4F076" />
        </radialGradient>
        <path
          id="dengp_1407_"
          class="dengp-st1"
          d="M32.45,17.36v-3.22H19.11v3.17c0,1.86-0.79,3.68-2.26,4.82c-3.53,2.76-5.74,7.1-5.56,11.97
          c0.27,7.44,6.37,13.6,13.81,13.94c8.32,0.39,15.2-6.25,15.2-14.49c0-4.55-2.1-8.61-5.39-11.27C33.4,21.06,32.45,19.29,32.45,17.36z
          "
        />
        <linearGradient
          id="dengp_4_"
          gradientUnits="userSpaceOnUse"
          x1="18.7519"
          y1="10.7767"
          x2="32.8042"
          y2="10.7767"
        >
          <stop offset="0" style="stop-color:#ACB1B9" />
          <stop offset="0.4813" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#A9AEB7" />
        </linearGradient>
        <path
          id="dengp_1406_"
          class="dengp-st2"
          d="M18.75,4.99v8.22c0,1.86,3.15,3.36,7.03,3.36c3.88,0,7.03-1.5,7.03-3.36V4.99H18.75z"
        />
        <ellipse
          id="dengp_1403_"
          class="dengp-st3"
          cx="25.78"
          cy="4.99"
          rx="7.03"
          ry="3.36"
        />
        <path
          id="dengp_1402_"
          class="dengp-st4"
          d="M29.23,1.91L29.23,1.91L29.23,1.91c-0.05-0.03-0.09-0.06-0.13-0.08l-1.32-0.84h-4.01
          l-0.91,0.6c-0.75,0.36-1.21,0.85-1.21,1.4c0,1.09,1.85,1.97,4.13,1.97s4.13-0.88,4.13-1.97C29.91,2.59,29.66,2.22,29.23,1.91z"
        />
        <ellipse
          id="dengp_1400_"
          class="dengp-st3"
          cx="25.78"
          cy="0.99"
          rx="2.01"
          ry="0.96"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;

const pointCode = "SwSts";
export default {
  name: "deviceDengpCom",
  data() {
    return {
      pointValue: "1" // expr:'SwSts',stop:0,start:1,alarm:2
    };
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
      showType: "canvas/getShowType" //当前显示类型
    }),
    comStyle() {
      let { info = {} } = this;
      let {
        width = "",
        height = "",
        // color = "",
        borderColor = "",
        borderStyle = "",
        borderWidth = "",
        borderRadius = "",
        opacity = "",
        scale = ""
        // fontFamily = "",
        // fontSize = "",
        // fontWeight = "",
        // fontStyle = ""
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
      if (borderColor) {
        styles["borderColor"] = borderColor;
      }
      if (borderStyle) {
        styles["borderStyle"] = borderStyle;
      }
      styles["borderWidth"] = `${borderWidth}px`;
      styles["opacity"] = opacity / 100;
      styles["borderRadius"] = `${borderRadius}px`;
      if (scale) {
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
      // if (backgroundColor) {
      //   styles["backgroundColor"] = backgroundColor;
      // }
      // if (backgroundImage) {
      //   styles["backgroundImage"] = `url(${this.$loadImgUrl(backgroundImage)})`;
      // }
      return styles || {};
    }
  },
  mounted() {
    // this.$emit("success"); //组件加载完成回调
    this.init();
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),

    init() {
      let { info = {}, showType = "" } = this;
      if (showType != "edit") {
        let { id = "" } = info || {};
        let { $vm } = window;
        // let { deviceId = "" } = bindData || {};
        $vm.$on(`devicePointEvent_${id}`, ({ device }) => {
          bmCommon.log("deviceShsbCom", device);
          let { pointList = [] } = device || {};
          let point = pointList.find(item => {
            let { point: id = "" } = item || {};
            return id == pointCode; // SwSts  开关状态
          });
          if (point) {
            let { value = "" } = point || {};
            this.pointValue = value;
            // this.pointValue = parseInt(Math.random() * 3);
          }
          // let { value = "", unit = "",id='' } = point || {};
          // info.content = value;
          // info.unit = unit;
          // info.width = $(this.$refs.bmText).width();
          // this.$emit("success"); //组件加载完成回调
        });
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
<style lang="less" scoped>
// @import (reference) "./../../../../assets/less/common.less";
// @import (less) "../../../../assets/less/components/component/device/common.less";
</style>

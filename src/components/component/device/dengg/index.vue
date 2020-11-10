// 灯管
<template>
  <div class="bm-device-dengg-com" :style="comStyle">
    <!-- :viewBox="`${info.vBoxx} ${info.vBoxy} ${info.width} ${info.height}`" -->
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 164 30"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>                       
                .dengg-st0{fill:#98A1A8;}
                .dengg-st1{fill:#C2C8CE;}
                .dengg-st2{fill:#DFE3E8;}
                .dengg-st3{fill:url(#dengg_16_);}
                .dengg-st4{fill:url(#dengg_17_);}
                .dengg-st5{fill:url(#dengg_18_);}
                .dengg-st6{fill:url(#dengg_19_);}
                .dengg-st7{fill:url(#dengg_20_);}
      </style>
      `
        "
      ></defs>
      <g>
        <g id="dengg_12_">
          <polygon
            id="dengg_15_"
            class="dengg-st0"
            points="6.68,8.67 15.58,1.46 15.58,15.42 7.64,31.09 		"
          />
          <polygon
            id="dengg_14_"
            class="dengg-st1"
            points="7.64,15.49 3.82,19.37 0,15.49 8.54,1.46 15.58,1.46 		"
          />
          <rect
            id="dengg_13_"
            x="0"
            y="15.49"
            class="dengg-st2"
            width="7.64"
            height="15.59"
          />
        </g>
        <linearGradient
          id="dengg_19_"
          gradientUnits="userSpaceOnUse"
          x1="84.58"
          y1="16.4783"
          x2="84.58"
          y2="6.4783"
        >
          <stop offset="0" style="stop-color:#828282" />
          <stop offset="0.5561" style="stop-color:#C2C2C2" />
          <stop offset="1" style="stop-color:#7A7A7A" />
        </linearGradient>
        <path
          id="dengg_11_"
          class="dengg-st6"
          d="M154.72,6.48H14.44c-1.4,0-2.54,2.24-2.54,5s1.14,5,2.54,5h140.28c1.4,0,2.54-2.24,2.54-5
                  S156.12,6.48,154.72,6.48z"
        />
        <linearGradient
          id="dengg_20_"
          gradientUnits="userSpaceOnUse"
          x1="81.3582"
          y1="24.959"
          x2="81.3582"
          y2="13.7458"
        >
          <stop offset="0" style="stop-color:#828282" />
          <stop offset="0.5561" style="stop-color:#C2C2C2" />
          <stop offset="1" style="stop-color:#7A7A7A" />
        </linearGradient>
        <path
          id="dengg_9_"
          class="dengg-st7"
          d="M151.83,13.75H10.89c-1.34,0-2.42,2.51-2.42,5.61s1.08,5.61,2.42,5.61h140.93
                  c1.34,0,2.42-2.51,2.42-5.61S153.16,13.75,151.83,13.75z"
        />
        <g id="dengg_5_">
          <polygon
            id="dengg_8_"
            class="dengg-st0"
            points="154.68,8.67 163.58,1.46 163.58,15.42 155.64,31.09 		"
          />
          <polygon
            id="dengg_7_"
            class="dengg-st1"
            points="155.64,15.49 151.82,19.37 148,15.49 156.54,1.46 163.58,1.46 		"
          />
          <rect
            id="dengg_6_"
            x="148"
            y="15.49"
            class="dengg-st2"
            width="7.64"
            height="15.59"
          />
        </g>
      </g>
      <g class="SVG_ani" v-if="pointValue == 1">
        <g id="dengg_1416_">
          <polygon
            id="dengg_1419_"
            class="dengg-st0"
            points="6.68,8.67 15.58,1.46 15.58,15.42 7.64,31.09 		"
          />
          <polygon
            id="dengg_1418_"
            class="dengg-st1"
            points="7.64,15.49 3.82,19.37 0,15.49 8.54,1.46 15.58,1.46 		"
          />
          <rect
            id="dengg_1417_"
            x="0"
            y="15.49"
            class="dengg-st2"
            width="7.64"
            height="15.59"
          />
        </g>
        <linearGradient
          id="dengg_16_"
          gradientUnits="userSpaceOnUse"
          x1="84.58"
          y1="16.4783"
          x2="84.58"
          y2="6.4783"
        >
          <stop offset="0" style="stop-color:#B6DEFF" />
          <stop offset="0.5561" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#B6DEFF" />
        </linearGradient>
        <path
          id="dengg_1411_"
          class="dengg-st3"
          d="M154.72,6.48H14.44c-1.4,0-2.54,2.24-2.54,5s1.14,5,2.54,5h140.28c1.4,0,2.54-2.24,2.54-5
                  S156.12,6.48,154.72,6.48z"
        />

        <radialGradient
          id="dengg_17_"
          cx="74.2881"
          cy="-1150.5645"
          r="61.9705"
          gradientTransform="matrix(1.161 0 0 0.3685 -4.9993 446.8132)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#B6DEFF;stop-opacity:0" />
        </radialGradient>
        <ellipse
          id="dengg_1408_"
          class="dengg-st4"
          cx="81.25"
          cy="22.84"
          rx="71.95"
          ry="22.84"
        />
        <linearGradient
          id="dengg_18_"
          gradientUnits="userSpaceOnUse"
          x1="81.3582"
          y1="24.959"
          x2="81.3582"
          y2="13.7458"
        >
          <stop offset="0" style="stop-color:#B6DEFF" />
          <stop offset="0.5561" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#B6DEFF" />
        </linearGradient>
        <path
          id="dengg_1410_"
          class="dengg-st5"
          d="M151.83,13.75H10.89c-1.34,0-2.42,2.51-2.42,5.61s1.08,5.61,2.42,5.61h140.93
                  c1.34,0,2.42-2.51,2.42-5.61S153.16,13.75,151.83,13.75z"
        />
        <g id="dengg_1_">
          <polygon
            id="dengg_4_"
            class="dengg-st0"
            points="154.68,8.67 163.58,1.46 163.58,15.42 155.64,31.09 		"
          />
          <polygon
            id="dengg_3_"
            class="dengg-st1"
            points="155.64,15.49 151.82,19.37 148,15.49 156.54,1.46 163.58,1.46 		"
          />
          <rect
            id="dengg_2_"
            x="148"
            y="15.49"
            class="dengg-st2"
            width="7.64"
            height="15.59"
          />
        </g>
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
  name: "deviceDenggCom",
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

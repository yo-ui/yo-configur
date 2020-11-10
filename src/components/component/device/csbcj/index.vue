// 超声波测距
<template>
  <div class="bm-device-csbcj-com" :style="comStyle">
    <!-- :viewBox="`${info.vBoxx} ${info.vBoxy} ${info.width} ${info.height}`" -->
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 56 33`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
					.csbcj-st0{fill:url(#csbcj_2_);}
					.csbcj-st1{fill:url(#csbcj_3_);}
					.csbcj-st2{fill:url(#csbcj_4_);}
					.csbcj-st3{fill:#C2C8CE;}
					.csbcj-st4{fill:url(#csbcj_5_);}
					.csbcj-st5{fill:url(#csbcj_6_);}
					.csbcj-st6{fill:url(#csbcj_7_);}
					.csbcj-st7{fill:#2F3438;}
					.csbcj-st8{fill:url(#csbcj_8_);}
					.csbcj-st9{fill:url(#csbcj_9_);}
					.csbcj-st10{fill:url(#csbcj_10_);}
					.csbcj-st11{fill:url(#csbcj_11_);}
      </style>
      `
        "
      ></defs>
      <linearGradient
        id="csbcj_2_"
        gradientUnits="userSpaceOnUse"
        x1="27.9691"
        y1="8.1992"
        x2="27.9691"
        y2="-1.075932e-009"
      >
        <stop offset="0" style="stop-color:#466B56" />
        <stop offset="1" style="stop-color:#254934" />
      </linearGradient>
      <polygon
        id="XMLID_1059_"
        class="csbcj-st0"
        points="55.9,6.2 27.5,8.2 0,6.2 4,0 51.9,0 "
      />
      <linearGradient
        id="csbcj_3_"
        gradientUnits="userSpaceOnUse"
        x1="27.9691"
        y1="32.0483"
        x2="27.9691"
        y2="6.1992"
      >
        <stop offset="0" style="stop-color:#466B56" />
        <stop offset="1" style="stop-color:#254934" />
      </linearGradient>
      <rect
        id="XMLID_1057_"
        y="6.2"
        class="csbcj-st1"
        width="55.9"
        height="25.8"
      />
      <g id="XMLID_1058_">
        <g id="XMLID_1048_">
          <linearGradient
            id="csbcj_4_"
            gradientUnits="userSpaceOnUse"
            x1="3.3357"
            y1="16.9458"
            x2="24.6025"
            y2="16.9458"
          >
            <stop offset="0" style="stop-color:#929DA0" />
            <stop offset="0.4286" style="stop-color:#E8EDF0" />
            <stop offset="1" style="stop-color:#929DA0" />
          </linearGradient>
          <path
            id="XMLID_1047_"
            class="csbcj-st2"
            d="M24.6,20.3c0-5.4-4.8-9.7-10.6-9.7S3.3,14.9,3.3,20.3v3h21.3V20.3z"
          />
          <ellipse
            id="XMLID_1042_"
            class="csbcj-st3"
            cx="14"
            cy="23.3"
            rx="10.6"
            ry="9.7"
          />
          <linearGradient
            id="csbcj_5_"
            gradientUnits="userSpaceOnUse"
            x1="4.4426"
            y1="23.3172"
            x2="23.4957"
            y2="23.3172"
          >
            <stop offset="0" style="stop-color:#67787C" />
            <stop offset="0.4926" style="stop-color:#E8EDF0" />
            <stop offset="1" style="stop-color:#67787C" />
          </linearGradient>
          <ellipse
            id="XMLID_1044_"
            class="csbcj-st4"
            cx="14"
            cy="23.3"
            rx="9.5"
            ry="8.6"
          />
          <linearGradient
            id="csbcj_6_"
            gradientUnits="userSpaceOnUse"
            x1="13.9691"
            y1="14.7305"
            x2="13.9691"
            y2="28.8922"
          >
            <stop offset="0" style="stop-color:#000000" />
            <stop offset="1" style="stop-color:#4B5356" />
          </linearGradient>
          <path
            id="XMLID_1049_"
            class="csbcj-st5"
            d="M14,14.7c-4.7,0-8.6,3.1-9.4,7.1c0.8,4,4.7,7.1,9.4,7.1s8.6-3.1,9.4-7.1
							C22.5,17.8,18.7,14.7,14,14.7z"
          />
          <linearGradient
            id="csbcj_7_"
            gradientUnits="userSpaceOnUse"
            x1="13.9691"
            y1="15.4038"
            x2="13.9691"
            y2="23.3172"
          >
            <stop offset="0" style="stop-color:#000000" />
            <stop offset="1" style="stop-color:#8F9A9E" />
          </linearGradient>
          <ellipse
            id="XMLID_1045_"
            class="csbcj-st6"
            cx="14"
            cy="19.4"
            rx="4.3"
            ry="4"
          />
          <ellipse
            id="XMLID_1046_"
            class="csbcj-st7"
            cx="14"
            cy="19.4"
            rx="2.8"
            ry="2.6"
          />
        </g>
        <g id="XMLID_1050_">
          <linearGradient
            id="csbcj_8_"
            gradientUnits="userSpaceOnUse"
            x1="31.3357"
            y1="16.9458"
            x2="52.6025"
            y2="16.9458"
          >
            <stop offset="0" style="stop-color:#929DA0" />
            <stop offset="0.4286" style="stop-color:#E8EDF0" />
            <stop offset="1" style="stop-color:#929DA0" />
          </linearGradient>
          <path
            id="XMLID_1056_"
            class="csbcj-st8"
            d="M52.6,20.3c0-5.4-4.8-9.7-10.6-9.7s-10.6,4.4-10.6,9.7v3h21.3V20.3z"
          />
          <ellipse
            id="XMLID_1055_"
            class="csbcj-st3"
            cx="42"
            cy="23.3"
            rx="10.6"
            ry="9.7"
          />
          <linearGradient
            id="csbcj_9_"
            gradientUnits="userSpaceOnUse"
            x1="32.4426"
            y1="23.3172"
            x2="51.4957"
            y2="23.3172"
          >
            <stop offset="0" style="stop-color:#67787C" />
            <stop offset="0.4926" style="stop-color:#E8EDF0" />
            <stop offset="1" style="stop-color:#67787C" />
          </linearGradient>
          <ellipse
            id="XMLID_1054_"
            class="csbcj-st9"
            cx="42"
            cy="23.3"
            rx="9.5"
            ry="8.6"
          />
          <linearGradient
            id="csbcj_10_"
            gradientUnits="userSpaceOnUse"
            x1="41.9691"
            y1="14.7305"
            x2="41.9691"
            y2="28.8922"
          >
            <stop offset="0" style="stop-color:#000000" />
            <stop offset="1" style="stop-color:#4B5356" />
          </linearGradient>
          <path
            id="XMLID_1053_"
            class="csbcj-st10"
            d="M42,14.7c-4.7,0-8.6,3.1-9.4,7.1c0.8,4,4.7,7.1,9.4,7.1s8.6-3.1,9.4-7.1
							C50.5,17.8,46.7,14.7,42,14.7z"
          />
          <linearGradient
            id="csbcj_11_"
            gradientUnits="userSpaceOnUse"
            x1="41.9691"
            y1="15.4038"
            x2="41.9691"
            y2="23.3172"
          >
            <stop offset="0" style="stop-color:#000000" />
            <stop offset="1" style="stop-color:#8F9A9E" />
          </linearGradient>
          <ellipse
            id="XMLID_1052_"
            class="csbcj-st11"
            cx="42"
            cy="19.4"
            rx="4.3"
            ry="4"
          />
          <ellipse
            id="XMLID_1051_"
            class="csbcj-st7"
            cx="42"
            cy="19.4"
            rx="2.8"
            ry="2.6"
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
  name: "deviceCsbcjCom",
  data() {
    return {
      pointValue: "" // expr:'SwSts',stop:0,start:1,alarm:2
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
          bmCommon.log("deviceDbCom", device);
          let { pointList = [] } = device || {};
          let point = pointList.find(item => {
            let { point: id = "" } = item || {};
            return id == pointCode; // SwSts  开关状态
          });
          if (point) {
            let { value = "" } = point || {};
            this.pointValue = value;
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

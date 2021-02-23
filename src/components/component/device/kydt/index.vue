// 客用电梯
<template>
  <div class="bm-device-kydt-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :width="info.width"
      :height="info.height"
      viewBox="0 0 230 290"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
        .kydt-${info.id}-st0 {
          fill: #e7e7e5;
        }
        .kydt-${info.id}-st1 {
          opacity: 0.3;
        }
        .kydt-${info.id}-st2 {
          fill: #5b5e6f;
        }
        .kydt-${info.id}-st3 {
          fill: #cbcbc9;
        }
        .kydt-${info.id}-st4 {
          fill: url(#kydt_${info.id}_1_);
        }
        .kydt-${info.id}-st5 {
          fill: url(#kydt_${info.id}_2_);
        }
        .kydt-${info.id}-st6 {
          opacity: 0.6;
        }
        .kydt-${info.id}-st7 {
          fill: #a5a9ac;
        }
        .kydt-${info.id}-st8 {
          fill: #c3c3c1;
        }
        .kydt-${info.id}-st9 {
          fill: url(#kydt_${info.id}_3_);
        }
        .kydt-${info.id}-st10 {
          fill: #ffffff;
        }
        .kydt-${info.id}-st11 {
          fill: #7a7e89;
        }
        .kydt-${info.id}-st12 {
          fill: url(#kydt_${info.id}_4_);
        }
        .kydt-${info.id}-st13 {
          fill: url(#kydt_${info.id}_5_);
        }
        .kydt-${info.id}-st14 {
          fill: #ff0000;
        }
        .kydt-${info.id}-st15 {
          fill: url(#kydt_${info.id}_6_);
        }
        .kydt-${info.id}-st16 {
          opacity: 0.4;
          fill: #ff0000;
        }
        .kydt-${info.id}-st17 {
          fill: url(#kydt_${info.id}_7_);
        }
        .kydt-${info.id}-st18 {
          opacity: 0.4;
        }

        .show {
          display: default;
        }
        .hide {
          display: none;
        }
        .f1 {
          display: default;
        }
        .f2 {
          display: none;
        }
      </style>
      `
        "
      ></defs>

      <g>
        <rect
          x="89.54"
          y="2"
          :class="`kydt-${info.id}-st0`"
          width="125"
          height="234"
        />
        <g :class="`kydt-${info.id}-st1`">
          <rect
            x="107.01"
            y="2"
            :class="`kydt-${info.id}-st2`"
            width="1.99"
            height="33.27"
          />
        </g>
        <g :class="`kydt-${info.id}-st1`">
          <rect
            x="111.01"
            y="2"
            :class="`kydt-${info.id}-st2`"
            width="1.99"
            height="33.27"
          />
        </g>
        <g :class="`kydt-${info.id}-st1`">
          <rect
            x="115.01"
            y="2"
            :class="`kydt-${info.id}-st2`"
            width="1.99"
            height="33.27"
          />
        </g>
        <g :class="`kydt-${info.id}-st1`">
          <rect
            x="185.01"
            y="2"
            :class="`kydt-${info.id}-st2`"
            width="1.99"
            height="33.27"
          />
        </g>
        <g :class="`kydt-${info.id}-st1`">
          <rect
            x="189.01"
            y="2"
            :class="`kydt-${info.id}-st2`"
            width="1.99"
            height="33.27"
          />
        </g>
        <g :class="`kydt-${info.id}-st1`">
          <rect
            x="193.01"
            y="2"
            :class="`kydt-${info.id}-st2`"
            width="1.99"
            height="33.27"
          />
        </g>
        <polygon
          :class="`kydt-${info.id}-st3`"
          points="89.54,237.47 28.54,281.47 28.54,46 89.54,2 	"
        />
        <g>
          <linearGradient
            :id="`kydt_${info.id}_1_`"
            gradientUnits="userSpaceOnUse"
            x1="88.5355"
            y1="287"
            x2="88.5355"
            y2="48"
          >
            <stop offset="0" style="stop-color:#BDBDBD" />
            <stop offset="0.5168" style="stop-color:#F4F4F4" />
            <stop offset="0.6083" style="stop-color:#EEEFEF" />
            <stop offset="0.728" style="stop-color:#DEDFE0" />
            <stop offset="0.8632" style="stop-color:#C3C5C7" />
            <stop offset="1" style="stop-color:#A0A4A7" />
          </linearGradient>
          <rect
            x="22.54"
            y="48"
            :class="`kydt-${info.id}-st4`"
            width="132"
            height="239"
          />
        </g>
        <g>
          <linearGradient
            :id="`kydt_${info.id}_2_`"
            gradientUnits="userSpaceOnUse"
            x1="154.5355"
            y1="143.5"
            x2="220.5355"
            y2="143.5"
          >
            <stop offset="0" style="stop-color:#888E9A" />
            <stop offset="1" style="stop-color:#5A5D6E" />
          </linearGradient>
          <polygon
            :class="`kydt-${info.id}-st5`"
            points="154.54,287 220.54,239 220.54,0 154.54,48 		"
          />
        </g>
        <g :class="`kydt-${info.id}-st6`">
          <polygon points="87.48,48 86.28,48 86.28,287 87.48,287 87.48,48 		" />
        </g>
        <g>
          <g>
            <path
              :class="`kydt-${info.id}-st7`"
              d="M88.54,0l-66,48h132l66-48H88.54z M153.54,46h-125l61-44h125L153.54,46z"
            />
          </g>
        </g>
        <g>
          <polygon
            :class="`kydt-${info.id}-st8`"
            points="170.59,26.44 0,26.44 4.34,23.13 174.93,23.13 		"
          />
        </g>
        <g>
          <polygon
            :class="`kydt-${info.id}-st2`"
            points="170.59,289 174.93,285.69 174.93,23.13 170.59,26.44 		"
          />
        </g>
        <g>
          <linearGradient
            :id="`kydt_${info.id}_3_`"
            gradientUnits="userSpaceOnUse"
            x1="85.2956"
            y1="289"
            x2="85.2956"
            y2="26.4376"
          >
            <stop offset="0" style="stop-color:#959A9E" />
            <stop offset="0.5168" style="stop-color:#E1E2DD" />
            <stop offset="1" style="stop-color:#838793" />
          </linearGradient>
          <polygon
            :class="`kydt-${info.id}-st9`"
            points="0,26.44 0,289 19,289 19,50 151,50 151,289 170.59,289 170.59,26.44 		"
          />
        </g>
        <g>
          <polygon
            :class="`kydt-${info.id}-st2`"
            points="22.54,50 19,50 19,289 22.54,287 		"
          />
        </g>
        <g>
          <rect
            x="66"
            y="29.44"
            :class="`kydt-${info.id}-st10`"
            width="40"
            height="17.56"
          />
        </g>
        <g>
          <rect
            x="153.93"
            y="156.07"
            :class="`kydt-${info.id}-st11`"
            width="14"
            height="30.72"
          />
        </g>
        <g :class="`kydt-${info.id}-st6`">
          <circle cx="161.32" cy="164.59" r="4.17" />
        </g>
        <g>
          <rect x="68" y="31.44" width="36" height="13.56" />
        </g>
        <g>
          <linearGradient
            :id="`kydt_${info.id}_4_`"
            gradientUnits="userSpaceOnUse"
            x1="158.9103"
            y1="162.0714"
            x2="161.7412"
            y2="166.1156"
          >
            <stop offset="0" style="stop-color:#959A9E" />
            <stop offset="1" style="stop-color:#E1E2DD" />
          </linearGradient>
          <circle
            :class="`kydt-${info.id}-st12`"
            cx="160.94"
            cy="164.97"
            r="3.78"
          />
        </g>
        <g :class="`kydt-${info.id}-st6`">
          <circle cx="161.32" cy="178.59" r="4.17" />
        </g>
        <g>
          <linearGradient
            :id="`kydt_${info.id}_5_`"
            gradientUnits="userSpaceOnUse"
            x1="158.9103"
            y1="176.0714"
            x2="161.7412"
            y2="180.1156"
          >
            <stop offset="0" style="stop-color:#959A9E" />
            <stop offset="1" style="stop-color:#E1E2DD" />
          </linearGradient>
          <circle
            :class="`kydt-${info.id}-st13`"
            cx="160.94"
            cy="178.97"
            r="3.78"
          />
        </g>
      </g>
      <g class="SVG_ani" v-if="info.content == 1">
        <g class="f1">
          <animate
            values="show;hide"
            dur="2s"
            attributeName="class"
            repeatCount="indefinite"
          />
          <polygon
            :class="`kydt-${info.id}-st14`"
            points="97.72,35.27 94.27,41.16 90.81,35.27 	"
          />

          <radialGradient
            :id="`kydt_${info.id}_6_`"
            cx="474.2651"
            cy="408.2188"
            r="6.7812"
            gradientTransform="matrix(-1 0 0 -1 568.5302 446.4377)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" style="stop-color:#FF0000" />
            <stop offset="1" style="stop-color:#FF0000;stop-opacity:0" />
          </radialGradient>
          <circle
            :class="`kydt-${info.id}-st15`"
            cx="94.27"
            cy="38.22"
            r="6.78"
          />
          <polygon
            :class="`kydt-${info.id}-st16`"
            points="73.81,41.16 77.27,35.27 80.72,41.16 	"
          />
        </g>
        <g class="f2">
          <animate
            values="hide;show;"
            dur="2s"
            attributeName="class"
            repeatCount="indefinite"
          />
          <polygon
            :class="`kydt-${info.id}-st14`"
            points="73.81,41.16 77.27,35.27 80.72,41.16 	"
          />
          <radialGradient
            :id="`kydt_${info.id}_7_`"
            cx="77.2651"
            cy="38.2188"
            r="6.7812"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" style="stop-color:#FF0000" />
            <stop offset="1" style="stop-color:#FF0000;stop-opacity:0" />
          </radialGradient>
          <circle
            :class="`kydt-${info.id}-st17`"
            cx="77.27"
            cy="38.22"
            r="6.78"
          />
          <polygon
            :class="`kydt-${info.id}-st16`"
            points="97.72,35.27 94.27,41.16 90.81,35.27 	"
          />
        </g>
      </g>

      <g class="SVG_sta" v-if="info.content === 0">
        <polygon
          :class="`kydt-${info.id}-st16`"
          points="73.81,41.16 77.27,35.27 80.72,41.16 	"
        />
        <polygon
          :class="`kydt-${info.id}-st16`"
          points="97.72,35.27 94.27,41.16 90.81,35.27 	"
        />
      </g>
      <g class="SVG_alert" v-if="info.content == 2">
        <g :class="`kydt-${info.id}-st18`">
          <polygon
            :class="`kydt-${info.id}-st14`"
            points="220.54,0 88.54,0 56.73,23.13 4.34,23.13 0,26.44 0,289 19,289 22.54,287 86.28,287 87.48,287
                    151,287 151,289 170.59,289 174.93,285.69 174.93,272.17 220.54,239 		"
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
  name: "deviceKydtCom",
  data() {
    return {
      // info.content: "1" // expr:'SwSts',stop:0,start:1,alarm:2
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

    comStyle() {
      let { info = {}, gradientStyle } = this;
      let {
        width = "",
        height = "",
        // color = "",
        borderColor = "",
        borderStyle = "",
        borderWidth = "",
        borderRadiusTopLeft = 0,
        borderRadiusTopRight = 0,
        borderRadiusBottomLeft = 0,
        borderRadiusBottomRight = 0,

        marginTop = 0,
        marginBottom = 0,
        marginLeft = 0,
        marginRight = 0,
        borderTop = 0,
        borderBottom = 0,
        borderLeft = 0,
        borderRight = 0,
        paddingTop = 0,
        paddingBottom = 0,
        paddingLeft = 0,
        paddingRight = 0,
        shadow = {},
        shadowable = false,
        backgroundType = "",
        backgroundColor = "",
        backgroundImage = "",
        backgroundRepeat = "",
        backgroundSize = ""
      } = info || {};
      let styles = {
        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
        padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
      };
      if (shadowable) {
        let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
          shadow || {};
        styles[
          "box-shadow"
        ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      }
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;
      if (backgroundRepeat) {
        styles["background-repeat"] = backgroundRepeat;
      }
      if (backgroundSize) {
        styles["background-size"] = backgroundSize;
      }
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;

      if (borderTop) {
        if (borderStyle) {
          styles["border-top-style"] = borderStyle;
        }
        styles["border-top-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-top-color"] = borderColor;
        }
      } else {
        styles["border-top"] = "none";
      }
      if (borderBottom) {
        if (borderStyle) {
          styles["border-bottom-style"] = borderStyle;
        }
        styles["border-bottom-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-bottom-color"] = borderColor;
        }
      } else {
        styles["border-bottom"] = "none";
      }
      if (borderLeft) {
        if (borderStyle) {
          styles["border-left-style"] = borderStyle;
        }
        styles["border-left-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-left-color"] = borderColor;
        }
      } else {
        styles["border-left"] = "none";
      }
      if (borderRight) {
        if (borderStyle) {
          styles["border-right-style"] = borderStyle;
        }
        styles["border-right-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-right-color"] = borderColor;
        }
      } else {
        styles["border-right"] = "none";
      }
      styles[
        "border-radius"
      ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
      if (backgroundType == "purity") {
        //纯色
        if (backgroundColor) {
          styles["backgroundColor"] = backgroundColor;
        }
        if (backgroundImage) {
          styles["backgroundImage"] = `url(${this.$loadImgUrl(
            backgroundImage
          )})`;
        }
      } else if (backgroundType == "gradient") {
        //渐变
        styles = { ...styles, ...gradientStyle(info) };
      }
      return styles || {};
    }
  },
  mounted() {
    let { info = {} } = this;
    info.content = 0;
    this.init();
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),
    init() {
      let { info = {}, showType = "" } = this;
      if (showType != "edit") {
        let { id = "", bindData = {} } = info || {};
        let { deviceId = "" } = bindData || {};
        if (!deviceId) {
          return;
        }
        $vm.$on(`devicePointEvent_${id}`, ({ device }) => {
          bmCommon.log("deviceKydtCom", device);
          let { pointList = [] } = device || {};
          let point = pointList.find(item => {
            let { point: id = "" } = item || {};
            return id == pointCode; // SwSts  开关状态
          });
          if (point) {
            let { value = "" } = point || {};
            info.content = value;
          }
        });
      }
      this.loadDeviceInfo();
    },
    loadDeviceInfo() {
      let { info = {} } = this;
      let { bindData = {} } = info || {};
      let { deviceId = "", devicePoint = "" } = bindData || {};
      if (!deviceId) {
        return;
      }
      devicePoint = pointCode;
      $vm.$emit("device", {
        deviceId,
        callback: (device = {}) => {
          let { points: pointList = [] } = device || {};
          let point = pointList.find(item => {
            let { id = "" } = item || {};
            return id == devicePoint; //
          });
          if (point) {
            let { value = 0 } = point || {};
            info.content = value;
          }
        }
      });
    }
  },
  watch: {
    "info.bindData.devicePoint": {
      handler(newVal, oldVal) {
        this.loadDeviceInfo();
      },
      deep: true
    }
  }
};
</script>
<style lang="less" scoped>
// @import (reference) "./../../../../assets/less/common.less";
</style>

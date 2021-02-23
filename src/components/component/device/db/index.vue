// 电表
<template>
  <div class="bm-device-db-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 70 69`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
      .db-${info.id}-st0 {
          fill: url(#db_${info.id}_1_);
        }
        .db-${info.id}-st1 {
          fill: #dfe3e8;
        }
        .db-${info.id}-st2 {
          fill: url(#db_${info.id}_11_);
        }
        .db-${info.id}-st3 {
          fill: #ffffff;
        }
        .db-${info.id}-st4 {
          fill: #c2c8ce;
        }
        .db-${info.id}-st5 {
          fill: #848776;
        }
        .db-${info.id}-st6 {
          fill: #25282b;
        }
        .db-${info.id}-st7 {
          fill: #8f9499;
        }
        .db-${info.id}-st8 {
          fill: #5b280e;
        }
        .db-${info.id}-st9 {
          fill: #f95d06;
        }
        .db-${info.id}-st10 {
          fill: url(#db_${info.id}_12_);
        }
        .db-${info.id}-st11 {
          opacity: 0.4;
          fill: #ff0000;
        }
      </style>
      `
        "
      ></defs>
      <g>
        <linearGradient
          :id="`db_${info.id}_1_`"
          gradientUnits="userSpaceOnUse"
          x1="60.525"
          y1="62.945"
          x2="54.1179"
          y2="57.8484"
        >
          <stop offset="0" style="stop-color:#C2C8CE" />
          <stop offset="1" style="stop-color:#848689" />
        </linearGradient>
        <path
          :class="`db-${info.id}-st0`"
          d="M67.73,41h-54.5v10.34c0,1.9,1.54,3.44,3.44,3.44h33.57l5.49,12.81l10.94-13.77c0.21-0.2,0.39-0.44,0.55-0.69
                  l0.04-0.05l-0.01-0.01c0.3-0.51,0.48-1.1,0.48-1.73V41z"
        />
        <path
          :id="`db_${info.id}_657_`"
          :class="`db-${info.id}-st1`"
          d="M56.5,55.08H2v10.34c0,1.9,1.54,3.44,3.44,3.44h47.62c1.9,0,3.44-1.54,3.44-3.44V55.08z"
        />
        <linearGradient
          :id="`db_${info.id}_11_`"
          gradientUnits="userSpaceOnUse"
          x1="29.2499"
          y1="58.6952"
          x2="29.2499"
          y2="49.8142"
        >
          <stop offset="0" style="stop-color:#000000;stop-opacity:0" />
          <stop offset="1" style="stop-color:#000000" />
        </linearGradient>
        <rect
          :id="`db_${info.id}_658_`"
          x="2"
          y="54.06"
          :class="`db-${info.id}-st2`"
          width="54.5"
          height="8.88"
        />
        <rect
          :id="`db_${info.id}_656_`"
          x="1"
          y="15.08"
          :class="`db-${info.id}-st3`"
          width="56.5"
          height="39"
        />
        <path
          :id="`db_${info.id}_653_`"
          :class="`db-${info.id}-st1`"
          d="M58.5,55.08H0v-41h58.5V55.08z M2,53.08h54.5v-37H2V53.08z"
        />
        <polygon
          :id="`db_${info.id}_652_`"
          :class="`db-${info.id}-st4`"
          points="58.5,14.08 0,14.08 12.23,0 69.73,0 	"
        />
        <g :id="`db_${info.id}_647_`">
          <rect
            :id="`db_${info.id}_651_`"
            x="9.5"
            y="21.5"
            :class="`db-${info.id}-st5`"
            width="40"
            height="12"
          />
          <path
            :id="`db_${info.id}_648_`"
            :class="`db-${info.id}-st6`"
            d="M50.5,34.5h-42v-14h42V34.5z M10.5,32.5h38v-10h-38V32.5z"
          />
        </g>
        <circle
          :id="`db_${info.id}_646_`"
          :class="`db-${info.id}-st7`"
          cx="11.97"
          cy="63.16"
          r="2.03"
        />
        <circle
          :id="`db_${info.id}_645_`"
          :class="`db-${info.id}-st7`"
          cx="29.22"
          cy="63.16"
          r="2.03"
        />
        <circle
          :id="`db_${info.id}_659_`"
          :class="`db-${info.id}-st7`"
          cx="46.22"
          cy="63.16"
          r="2.03"
        />
        <rect
          :id="`db_${info.id}_644_`"
          x="9.74"
          y="36.5"
          :class="`db-${info.id}-st6`"
          width="4.48"
          height="2.5"
        />
        <rect
          :id="`db_${info.id}_643_`"
          x="19.74"
          y="36.5"
          :class="`db-${info.id}-st6`"
          width="4.48"
          height="2.5"
        />
        <rect
          :id="`db_${info.id}_635_`"
          x="29.74"
          y="36.5"
          :class="`db-${info.id}-st6`"
          width="4.48"
          height="2.5"
        />
        <rect
          :id="`db_${info.id}_634_`"
          x="39.74"
          y="36.5"
          :class="`db-${info.id}-st6`"
          width="4.48"
          height="2.5"
        />
        <rect
          :id="`db_${info.id}_6_`"
          x="8.74"
          y="37.5"
          :class="`db-${info.id}-st7`"
          width="4.48"
          height="2.5"
        />
        <rect
          :id="`db_${info.id}_5_`"
          x="18.74"
          y="37.5"
          :class="`db-${info.id}-st7`"
          width="4.48"
          height="2.5"
        />
        <rect
          :id="`db_${info.id}_4_`"
          x="28.74"
          y="37.5"
          :class="`db-${info.id}-st7`"
          width="4.48"
          height="2.5"
        />
        <rect
          :id="`db_${info.id}_2_`"
          x="38.74"
          y="37.5"
          :class="`db-${info.id}-st7`"
          width="4.48"
          height="2.5"
        />
        <rect
          :id="`db_${info.id}_632_`"
          x="9.61"
          y="44.98"
          :class="`db-${info.id}-st8`"
          width="6.72"
          height="3.69"
        />
        <rect
          :id="`db_${info.id}_552_`"
          x="19.61"
          y="44.98"
          :class="`db-${info.id}-st8`"
          width="6.72"
          height="3.69"
        />
        <rect
          :id="`db_${info.id}_551_`"
          x="29.61"
          y="44.98"
          :class="`db-${info.id}-st8`"
          width="6.72"
          height="3.69"
        />
        <rect
          :id="`db_${info.id}_9_`"
          x="8.61"
          y="45.98"
          :class="`db-${info.id}-st9`"
          width="6.72"
          height="3.69"
        />
        <rect
          :id="`db_${info.id}_8_`"
          x="18.61"
          y="45.98"
          :class="`db-${info.id}-st9`"
          width="6.72"
          height="3.69"
        />
        <rect
          :id="`db_${info.id}_7_`"
          x="28.61"
          y="45.98"
          :class="`db-${info.id}-st9`"
          width="6.72"
          height="3.69"
        />
        <rect
          :id="`db_${info.id}_550_`"
          x="8.48"
          y="42.05"
          :class="`db-${info.id}-st4`"
          width="36.74"
          height="1"
        />
        <linearGradient
          :id="`db_${info.id}_12_`"
          gradientUnits="userSpaceOnUse"
          x1="64.1155"
          y1="55.0819"
          x2="64.1155"
          y2="0"
        >
          <stop offset="0" style="stop-color:#C2C8CE" />
          <stop offset="1" style="stop-color:#848689" />
        </linearGradient>
        <path
          :id="`db_${info.id}_1_`"
          :class="`db-${info.id}-st10`"
          d="M69.73,41L58.5,55.08v-41L69.73,0V41z"
        />
      </g>
      <g class="SVG_alert" v-if="pointValue == 2">
        <path
          :class="`db-${info.id}-st11`"
          d="M69.73,0h-57.5L0,14.08v41h2v7.86v2.48c0,1.9,1.54,3.44,3.44,3.44h47.62c1.08,0,2.04-0.51,2.67-1.29
                  l0.01,0.01l10.94-13.77c0.21-0.2,0.39-0.44,0.55-0.69l0.04-0.05l-0.01-0.01c0.3-0.51,0.48-1.1,0.48-1.73v-7.84l2-2.51V0z"
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
  name: "deviceDbCom",
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
            let { value = "" } = point || {};
            this.pointValue = value;
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
@import (less) "../../../../assets/less/components/component/device/common.less";
</style>

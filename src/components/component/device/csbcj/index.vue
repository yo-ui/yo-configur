// 超声波测距
<template>
  <div class="bm-device-csbcj-com" :style="comStyle">
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
					.csbcj-${info.id}-st0{fill:url(#csbcj_2_);}
					.csbcj-${info.id}-st1{fill:url(#csbcj_3_);}
					.csbcj-${info.id}-st2{fill:url(#csbcj_4_);}
					.csbcj-${info.id}-st3{fill:#C2C8CE;}
					.csbcj-${info.id}-st4{fill:url(#csbcj_5_);}
					.csbcj-${info.id}-st5{fill:url(#csbcj_6_);}
					.csbcj-${info.id}-st6{fill:url(#csbcj_7_);}
					.csbcj-${info.id}-st7{fill:#2F3438;}
					.csbcj-${info.id}-st8{fill:url(#csbcj_8_);}
					.csbcj-${info.id}-st9{fill:url(#csbcj_9_);}
					.csbcj-${info.id}-st10{fill:url(#csbcj_10_);}
					.csbcj-${info.id}-st11{fill:url(#csbcj_11_);}
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
        id="csbcj_1059_"
        :class="`csbcj-${info.id}-st0`"
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
        id="csbcj_1057_"
        y="6.2"
        :class="`csbcj-${info.id}-st1`"
        width="55.9"
        height="25.8"
      />
      <g id="csbcj_1058_">
        <g id="csbcj_1048_">
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
            id="csbcj_1047_"
            :class="`csbcj-${info.id}-st2`"
            d="M24.6,20.3c0-5.4-4.8-9.7-10.6-9.7S3.3,14.9,3.3,20.3v3h21.3V20.3z"
          />
          <ellipse
            id="csbcj_1042_"
            :class="`csbcj-${info.id}-st3`"
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
            id="csbcj_1044_"
            :class="`csbcj-${info.id}-st4`"
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
            id="csbcj_1049_"
            :class="`csbcj-${info.id}-st5`"
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
            id="csbcj_1045_"
            :class="`csbcj-${info.id}-st6`"
            cx="14"
            cy="19.4"
            rx="4.3"
            ry="4"
          />
          <ellipse
            id="csbcj_1046_"
            :class="`csbcj-${info.id}-st7`"
            cx="14"
            cy="19.4"
            rx="2.8"
            ry="2.6"
          />
        </g>
        <g id="csbcj_1050_">
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
            id="csbcj_1056_"
            :class="`csbcj-${info.id}-st8`"
            d="M52.6,20.3c0-5.4-4.8-9.7-10.6-9.7s-10.6,4.4-10.6,9.7v3h21.3V20.3z"
          />
          <ellipse
            id="csbcj_1055_"
            :class="`csbcj-${info.id}-st3`"
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
            id="csbcj_1054_"
            :class="`csbcj-${info.id}-st9`"
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
            id="csbcj_1053_"
            :class="`csbcj-${info.id}-st10`"
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
            id="csbcj_1052_"
            :class="`csbcj-${info.id}-st11`"
            cx="42"
            cy="19.4"
            rx="4.3"
            ry="4"
          />
          <ellipse
            id="csbcj_1051_"
            :class="`csbcj-${info.id}-st7`"
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
// import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "deviceCsbcjCom",
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
          "boxShadow"
        ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      }
      if (width) {
        styles["width"] = `${width}px`;
      }
      if (height) {
        styles["height"] = `${height}px`;
      }
      if (backgroundRepeat) {
        styles["backgroundRepeat"] = backgroundRepeat;
      }
      if (backgroundSize) {
        styles["backgroundSize"] = backgroundSize;
      }
      if (borderColor) {
        styles["borderColor"] = borderColor;
      }
      if (borderStyle) {
        styles["borderStyle"] = borderStyle;
      }
      styles["borderWidth"] = `${borderWidth}px`;

      styles[
        "borderRadius"
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

    init() {}
  }
};
</script>
<style lang="less" scoped>
// @import (reference) "./../../../../assets/less/common.less";
// @import (less) "../../../../assets/less/components/component/device/common.less";
</style>

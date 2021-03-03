//储液储气罐
<template>
  <div class="bm-device-cycqg-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 73 141`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
	.cycqg-${info.id}-st0{fill:url(#cycqg_${info.id}_SVGID_1_);}
	.cycqg-${info.id}-st1{fill:url(#cycqg_${info.id}_SVGID_2_);}
	.cycqg-${info.id}-st2{fill:url(#cycqg_${info.id}_SVGID_3_);}
      </style>
      `
        "
      ></defs>
      <g>
        <radialGradient
          :id="`cycqg_${info.id}_SVGID_1_`"
          cx="36.3914"
          cy="-141.5661"
          r="36.3914"
          gradientTransform="matrix(1 0 0 0.6746 0 120.0574)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style="stop-color:#92C1CC" />
          <stop offset="1" style="stop-color:#2C4B47" />
        </radialGradient>
        <ellipse
          :class="`cycqg-${info.id}-st0`"
          cx="36.4"
          cy="24.6"
          rx="36.4"
          ry="24.6"
        />
      </g>
      <g>
        <radialGradient
          :id="`cycqg_${info.id}_SVGID_2_`"
          cx="36.3914"
          cy="-5.3488"
          r="36.3914"
          gradientTransform="matrix(1 0 0 0.6746 0 120.0574)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style="stop-color:#92C1CC" />
          <stop offset="1" style="stop-color:#2C4B47" />
        </radialGradient>
        <ellipse
          :class="`cycqg-${info.id}-st1`"
          cx="36.4"
          cy="116.4"
          rx="36.4"
          ry="24.6"
        />
      </g>
      <linearGradient
        :id="`cycqg_${info.id}_SVGID_3_`"
        gradientUnits="userSpaceOnUse"
        x1="0"
        y1="70.5"
        x2="72.7827"
        y2="70.5"
      >
        <stop offset="0" style="stop-color:#2C4B47" />
        <stop offset="0.5" style="stop-color:#92C1CC" />
        <stop offset="1" style="stop-color:#2C4B47" />
      </linearGradient>
      <rect
        y="24.6"
        :class="`cycqg-${info.id}-st2`"
        width="72.8"
        height="91.9"
      />
    </svg>
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "deviceCycqgCom",
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
          styles["background-color"] = backgroundColor;
        }
        if (backgroundImage) {
          styles["background-image"] = `url(${this.$loadImgUrl(
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
</style>

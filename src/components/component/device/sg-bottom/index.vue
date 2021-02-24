// 水管（下）
<template>
  <div class="bm-device-sg-bottom-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 10 10`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
						.downWater-${info.id}-st0{fill:url(#downWater_6_);}
						.downWater-${info.id}-st1{fill:url(#downWater_7_);}
						.downWater-${info.id}-st2{fill:#FFFFFF;}
						.downWater-${info.id}-st3{fill:url(#downWater_8_);}
						.downWater-${info.id}-st4{fill:url(#downWater_9_);}
						.downWater-${info.id}-st5{fill:url(#downWater_10_);}
						.downWater-${info.id}-st6{fill:#777C7F;}
      </style>
      `
        "
      ></defs>
      <g>
        <linearGradient
          id="downWater_6_"
          gradientUnits="userSpaceOnUse"
          x1="-153.9816"
          y1="986.4756"
          x2="-153.9816"
          y2="992.4756"
          gradientTransform="matrix(1 0 0 -1 158.9816 994.4756)"
        >
          <stop offset="0" style="stop-color:#777C7F" />
          <stop offset="0.5" style="stop-color:#FFFFFF" />
          <stop offset="0.9803" style="stop-color:#777C7F" />
        </linearGradient>
        <rect
          id="sg_bottom_4_"
          y="2"
          :class="`downWater-${info.id}-st0`"
          width="10"
          height="6"
        />

        <linearGradient
          id="downWater_7_"
          gradientUnits="userSpaceOnUse"
          x1="-145.9816"
          y1="993.9756"
          x2="-145.9816"
          y2="999.9756"
          gradientTransform="matrix(-4.489659e-011 -1 -1 4.489659e-011 1001.9756 -144.4816)"
        >
          <stop offset="0" style="stop-color:#777C7F" />
          <stop offset="0.1755" style="stop-color:#ABAEB0" />
          <stop offset="0.3951" style="stop-color:#E7E8E9" />
          <stop offset="0.5" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#777C7F" />
        </linearGradient>
        <rect
          id="sg_bottom_551_"
          x="2"
          :class="`downWater-${info.id}-st1`"
          width="6"
          height="3"
        />
        <g id="sg_bottom_1_">
          <rect
            id="sg_bottom_558_"
            x="2"
            y="2"
            :class="`downWater-${info.id}-st2`"
            width="6"
            height="6"
          />

          <radialGradient
            id="downWater_8_"
            cx="-436.6401"
            cy="400.9946"
            r="13.4118"
            gradientTransform="matrix(2.648238e-011 -0.5898 -0.5898 -2.648238e-011 236.8701 -257.2069)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.2906" style="stop-color:#777C7F" />
            <stop offset="0.62" style="stop-color:#777C7F;stop-opacity:0" />
          </radialGradient>
          <rect
            id="sg_bottom_555_"
            x="2"
            y="2"
            :class="`downWater-${info.id}-st3`"
            width="6"
            height="6"
          />

          <radialGradient
            id="downWater_9_"
            cx="-436.377"
            cy="385.0338"
            r="13.4117"
            gradientTransform="matrix(2.648238e-011 -0.5898 -0.5898 -2.648238e-011 236.8701 -257.2069)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3103" style="stop-color:#777C7F" />
            <stop offset="0.62" style="stop-color:#777C7F;stop-opacity:0" />
          </radialGradient>
          <rect
            id="sg_bottom_554_"
            x="2"
            y="2"
            :class="`downWater-${info.id}-st4`"
            width="6"
            height="6"
          />

          <linearGradient
            id="downWater_10_"
            gradientUnits="userSpaceOnUse"
            x1="-446.0012"
            y1="395.7758"
            x2="-440.0012"
            y2="395.7758"
            gradientTransform="matrix(4.489700e-011 -1 -1 -4.489700e-011 400.7758 -438.0012)"
          >
            <stop offset="0" style="stop-color:#777C7F" />
            <stop offset="0.5" style="stop-color:#777C7F;stop-opacity:0" />
          </linearGradient>
          <rect
            id="sg_bottom_553_"
            x="2"
            y="2"
            :class="`downWater-${info.id}-st5`"
            width="6"
            height="6"
          />
        </g>
        <g id="sg_bottom_3_">
          <path
            id="sg_bottom_556_"
            :class="`downWater-${info.id}-st6`"
            d="M0,2c1.2,0,2-0.8,2-2v2H0z"
          />
          <path
            id="sg_bottom_2_"
            :class="`downWater-${info.id}-st6`"
            d="M10,2C8.8,2,8,1.2,8,0v2H10z"
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
  name: "deviceSgBottomCom",
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

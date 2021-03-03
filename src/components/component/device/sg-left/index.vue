// 水管（左）
<template>
  <div class="bm-device-sg-left-com" :style="comStyle">
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
      	.leftWater-${info.id}-st0{fill:url(#leftWater_6_);}
					.leftWater-${info.id}-st1{fill:url(#leftWater_7_);}
					.leftWater-${info.id}-st2{fill:#FFFFFF;}
					.leftWater-${info.id}-st3{fill:url(#leftWater_8_);}
					.leftWater-${info.id}-st4{fill:url(#leftWater_9_);}
					.leftWater-${info.id}-st5{fill:url(#leftWater_10_);}
					.leftWater-${info.id}-st6{fill:#777C7F;}
      </style>
      `
        "
      ></defs>
      <g>
        <linearGradient
          id="leftWater_6_"
          gradientUnits="userSpaceOnUse"
          x1="-152.9816"
          y1="987.4756"
          x2="-152.9816"
          y2="993.4756"
          gradientTransform="matrix(4.489659e-011 1 1 -4.489659e-011 -985.4756 157.9816)"
        >
          <stop offset="0" style="stop-color:#777C7F" />
          <stop offset="0.5" style="stop-color:#FFFFFF" />
          <stop offset="0.9803" style="stop-color:#777C7F" />
        </linearGradient>
        <rect
          id="sg_left_4_"
          x="2"
          y="0"
          :class="`leftWater-${info.id}-st0`"
          width="6"
          height="10"
        />

        <linearGradient
          id="leftWater_7_"
          gradientUnits="userSpaceOnUse"
          x1="-144.9816"
          y1="992.9756"
          x2="-144.9816"
          y2="998.9756"
          gradientTransform="matrix(1 0 0 -1 153.4816 1000.9756)"
        >
          <stop offset="0" style="stop-color:#777C7F" />
          <stop offset="0.1755" style="stop-color:#ABAEB0" />
          <stop offset="0.3951" style="stop-color:#E7E8E9" />
          <stop offset="0.5" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#777C7F" />
        </linearGradient>
        <rect
          id="sg_left_551_"
          x="7"
          y="2"
          :class="`leftWater-${info.id}-st1`"
          width="3"
          height="6"
        />
        <g id="sg_left_1_">
          <rect
            id="sg_left_558_"
            x="2"
            y="2"
            :class="`leftWater-${info.id}-st2`"
            width="6"
            height="6"
          />

          <radialGradient
            id="leftWater_8_"
            cx="-434.9446"
            cy="399.2991"
            r="13.4118"
            gradientTransform="matrix(0.5898 0 0 -0.5898 266.2069 235.8701)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.2906" style="stop-color:#777C7F" />
            <stop offset="0.62" style="stop-color:#777C7F;stop-opacity:0" />
          </radialGradient>
          <rect
            id="sg_left_555_"
            x="2"
            y="2"
            :class="`leftWater-${info.id}-st3`"
            width="6"
            height="6"
          />

          <radialGradient
            id="leftWater_9_"
            cx="-434.6815"
            cy="383.3383"
            r="13.4117"
            gradientTransform="matrix(0.5898 0 0 -0.5898 266.2069 235.8701)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3103" style="stop-color:#777C7F" />
            <stop offset="0.62" style="stop-color:#777C7F;stop-opacity:0" />
          </radialGradient>
          <rect
            id="sg_left_554_"
            x="2"
            y="2"
            :class="`leftWater-${info.id}-st4`"
            width="6"
            height="6"
          />

          <linearGradient
            id="leftWater_10_"
            gradientUnits="userSpaceOnUse"
            x1="-445.0012"
            y1="394.7758"
            x2="-439.0012"
            y2="394.7758"
            gradientTransform="matrix(1 0 0 -1 447.0012 399.7758)"
          >
            <stop offset="0" style="stop-color:#777C7F" />
            <stop offset="0.5" style="stop-color:#777C7F;stop-opacity:0" />
          </linearGradient>
          <rect
            id="sg_left_553_"
            x="2"
            y="2"
            :class="`leftWater-${info.id}-st5`"
            width="6"
            height="6"
          />
        </g>
        <g id="sg_left_3_">
          <path
            id="sg_left_556_"
            :class="`leftWater-${info.id}-st6`"
            d="M8,0c0,1.2,0.8,2,2,2H8V0z"
          />
          <path
            id="sg_left_2_"
            :class="`leftWater-${info.id}-st6`"
            d="M8,10c0-1.2,0.8-2,2-2H8V10z"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "deviceSgLeftCom",
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

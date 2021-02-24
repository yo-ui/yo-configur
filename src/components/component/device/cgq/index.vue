// 传感器
<template>
  <div class="bm-device-cgq-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 52 58`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
					.hjjccgqb-${info.id}-st0{fill:#C2C8CE;}
					.hjjccgqb-${info.id}-st1{fill:#DFE3E8;}
					.hjjccgqb-${info.id}-st2{fill:#15707C;}
					.hjjccgqb-${info.id}-st3{fill:#7A818C;}
					.hjjccgqb-${info.id}-st4{fill:#8F9499;}
					.hjjccgqb-${info.id}-st5{opacity:0.21;}
					.hjjccgqb-${info.id}-st6{fill:url(#hjjccgqb_2_);}
					.hjjccgqb-${info.id}-st7{fill:#AEB4BA;}
					.hjjccgqb-${info.id}-st8{opacity:0.5;}
					.hjjccgqb-${info.id}-st9{fill:url(#hjjccgqb_3_);}
      </style>
      `
        "
      ></defs>
      <path
        id="hjjccgqb_1085_"
        :class="`hjjccgqb-${info.id}-st0`"
        d="M52,34.1H0l4.3-10.9c0.4-1.2,1.6-2,2.9-2h37.7c1.3,0,2.4,0.8,2.9,2L52,34.1z"
      />
      <path
        id="hjjccgqb_1084_"
        :class="`hjjccgqb-${info.id}-st1`"
        d="M48.7,58H3.3C1.5,58,0,56.6,0,54.8V34.1c0-1.8,1.5-3.3,3.3-3.3h45.5c1.8,0,3.3,1.5,3.3,3.3
					v20.6C52,56.6,50.5,58,48.7,58z"
      />
      <path
        id="hjjccgqb_1087_"
        :class="`hjjccgqb-${info.id}-st2`"
        d="M48.4,37.5c-1.6,0-3-1.3-3-3c0-0.3,0.1-0.6,0.1-0.8H6.3c0.1,0.3,0.1,0.5,0.1,0.8
					c0,1.6-1.3,3-3,3c-0.2,0-0.4,0-0.6-0.1v14.4c0.2,0,0.4-0.1,0.6-0.1c1.6,0,3,1.3,3,3c0,0.2,0,0.4-0.1,0.5h39c0-0.2-0.1-0.3-0.1-0.5
					c0-1.6,1.3-3,3-3c0.2,0,0.5,0,0.7,0.1V37.4C48.8,37.5,48.6,37.5,48.4,37.5z"
      />
      <circle
        id="hjjccgqb_1088_"
        :class="`hjjccgqb-${info.id}-st3`"
        cx="3.5"
        cy="54.7"
        r="1.4"
      />
      <circle
        id="hjjccgqb_1086_"
        :class="`hjjccgqb-${info.id}-st3`"
        cx="3.5"
        cy="34.5"
        r="1.4"
      />
      <circle
        id="hjjccgqb_1090_"
        :class="`hjjccgqb-${info.id}-st3`"
        cx="48.6"
        cy="54.7"
        r="1.4"
      />
      <circle
        id="hjjccgqb_1089_"
        :class="`hjjccgqb-${info.id}-st3`"
        cx="48.6"
        cy="34.5"
        r="1.4"
      />
      <rect
        id="hjjccgqb_1096_"
        x="11.2"
        y="39.1"
        :class="`hjjccgqb-${info.id}-st4`"
        width="4.5"
        height="2.5"
      />
      <rect
        id="hjjccgqb_1095_"
        x="19.2"
        y="39.1"
        :class="`hjjccgqb-${info.id}-st4`"
        width="4.5"
        height="2.5"
      />
      <rect
        id="hjjccgqb_1094_"
        x="27.2"
        y="39.1"
        :class="`hjjccgqb-${info.id}-st4`"
        width="4.5"
        height="2.5"
      />
      <rect
        id="hjjccgqb_1093_"
        x="35.2"
        y="39.1"
        :class="`hjjccgqb-${info.id}-st4`"
        width="4.5"
        height="2.5"
      />
      <rect
        id="hjjccgqb_1092_"
        x="10.9"
        y="45.7"
        :class="`hjjccgqb-${info.id}-st0`"
        width="24.8"
        height="1"
      />
      <rect
        id="hjjccgqb_1091_"
        x="10.9"
        y="47.8"
        :class="`hjjccgqb-${info.id}-st0`"
        width="13.4"
        height="1"
      />
      <g id="hjjccgqb_1105_">
        <ellipse
          id="hjjccgqb_1104_"
          :class="`hjjccgqb-${info.id}-st5`"
          cx="36.6"
          cy="26"
          rx="4.5"
          ry="2.1"
        />
        <linearGradient
          id="hjjccgqb_2_"
          gradientUnits="userSpaceOnUse"
          x1="32.525"
          y1="14.7396"
          x2="40.7607"
          y2="14.7396"
        >
          <stop offset="0" style="stop-color:#ACB1B9" />
          <stop offset="0.4813" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#A9AEB7" />
        </linearGradient>
        <path
          id="hjjccgqb_1103_"
          :class="`hjjccgqb-${info.id}-st6`"
          d="M32.5,2v23.6c0,1.1,1.8,2,4.1,2c2.3,0,4.1-0.9,4.1-2V2H32.5z"
        />
        <ellipse
          id="hjjccgqb_1102_"
          :class="`hjjccgqb-${info.id}-st7`"
          cx="36.6"
          cy="2"
          rx="4.1"
          ry="2"
        />
        <g id="hjjccgqb_1097_" :class="`hjjccgqb-${info.id}-st8`">
          <path
            id="hjjccgqb_1101_"
            d="M36.1,6.9c-0.3,0-0.7-0.1-1-0.1v9c0.3,0.1,0.7,0.1,1,0.1V6.9z"
          />
          <path
            id="hjjccgqb_1100_"
            d="M34.1,6.5c-0.4-0.1-0.7-0.3-1-0.5v9c0.3,0.2,0.6,0.4,1,0.5V6.5z"
          />
          <path
            id="hjjccgqb_1099_"
            d="M40.1,6c-0.3,0.2-0.6,0.4-1,0.5v9c0.4-0.1,0.7-0.3,1-0.5V6z"
          />
          <path
            id="hjjccgqb_1098_"
            d="M38.1,6.8c-0.3,0.1-0.7,0.1-1,0.1v9c0.3,0,0.7-0.1,1-0.1V6.8z"
          />
        </g>
      </g>
      <g id="hjjccgqb_1106_">
        <ellipse
          id="hjjccgqb_1114_"
          :class="`hjjccgqb-${info.id}-st5`"
          cx="15.6"
          cy="26"
          rx="4.5"
          ry="2.1"
        />
        <linearGradient
          id="hjjccgqb_3_"
          gradientUnits="userSpaceOnUse"
          x1="11.525"
          y1="14.7396"
          x2="19.7607"
          y2="14.7396"
        >
          <stop offset="0" style="stop-color:#ACB1B9" />
          <stop offset="0.4813" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#A9AEB7" />
        </linearGradient>
        <path
          id="hjjccgqb_1113_"
          :class="`hjjccgqb-${info.id}-st9`"
          d="M11.5,2v23.6c0,1.1,1.8,2,4.1,2c2.3,0,4.1-0.9,4.1-2V2H11.5z"
        />
        <ellipse
          id="hjjccgqb_1112_"
          :class="`hjjccgqb-${info.id}-st7`"
          cx="15.6"
          cy="2"
          rx="4.1"
          ry="2"
        />
        <g id="hjjccgqb_1107_" :class="`hjjccgqb-${info.id}-st8`">
          <path
            id="hjjccgqb_1111_"
            d="M15.1,6.9c-0.3,0-0.7-0.1-1-0.1v9c0.3,0.1,0.7,0.1,1,0.1V6.9z"
          />
          <path
            id="hjjccgqb_1110_"
            d="M13.1,6.5c-0.4-0.1-0.7-0.3-1-0.5v9c0.3,0.2,0.6,0.4,1,0.5V6.5z"
          />
          <path
            id="hjjccgqb_1109_"
            d="M19.1,6c-0.3,0.2-0.6,0.4-1,0.5v9c0.4-0.1,0.7-0.3,1-0.5V6z"
          />
          <path
            id="hjjccgqb_1108_"
            d="M17.1,6.8c-0.3,0.1-0.7,0.1-1,0.1v9c0.3,0,0.7-0.1,1-0.1V6.8z"
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
  name: "deviceCgqCom",
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
    //
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

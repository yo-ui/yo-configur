//整体式热量表
<template>
  <div class="bm-device-ztsrlb-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 60 36`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
       	.ztsrlb-${info.id}-st0{fill:url(#ztsrlb_2_);}
					.ztsrlb-${info.id}-st1{opacity:0.15;}
					.ztsrlb-${info.id}-st2{fill:url(#ztsrlb_3_);}
					.ztsrlb-${info.id}-st3{fill:url(#ztsrlb_4_);}
					.ztsrlb-${info.id}-st4{fill:#21302F;}
					.ztsrlb-${info.id}-st5{fill:#415B5A;}
					.ztsrlb-${info.id}-st6{fill:#77A09F;}
					.ztsrlb-${info.id}-st7{fill:#848776;}
					.ztsrlb-${info.id}-st8{fill:#25282B;}
					.ztsrlb-${info.id}-st9{fill:#B60000;}
      </style>
      `
        "
      ></defs>
      <linearGradient
        id="ztsrlb_2_"
        gradientUnits="userSpaceOnUse"
        x1="29.6592"
        y1="33.3974"
        x2="29.6592"
        y2="20.541"
      >
        <stop offset="0" style="stop-color:#845100" />
        <stop offset="0.1209" style="stop-color:#9C6D24" />
        <stop offset="0.3521" style="stop-color:#C69F64" />
        <stop offset="0.5209" style="stop-color:#E0BE8C" />
        <stop offset="0.6084" style="stop-color:#EACA9B" />
        <stop offset="1" style="stop-color:#BF7600" />
      </linearGradient>
      <rect
        id="ztsrlb_953_"
        x="7.4"
        y="20.5"
        :class="`ztsrlb-${info.id}-st0`"
        width="44.5"
        height="12.9"
      />
      <rect
        id="ztsrlb_956_"
        x="49.8"
        y="20.5"
        :class="`ztsrlb-${info.id}-st1`"
        width="2.2"
        height="12.9"
      />
      <rect
        id="ztsrlb_957_"
        x="7"
        y="20.5"
        :class="`ztsrlb-${info.id}-st1`"
        width="2.2"
        height="12.9"
      />
      <linearGradient
        id="ztsrlb_3_"
        gradientUnits="userSpaceOnUse"
        x1="4.1167"
        y1="36.0038"
        x2="4.1167"
        y2="17.9347"
      >
        <stop offset="0" style="stop-color:#845100" />
        <stop offset="0.1209" style="stop-color:#9C6D24" />
        <stop offset="0.3521" style="stop-color:#C69F64" />
        <stop offset="0.5209" style="stop-color:#E0BE8C" />
        <stop offset="0.6084" style="stop-color:#EACA9B" />
        <stop offset="1" style="stop-color:#BF7600" />
      </linearGradient>
      <rect
        id="ztsrlb_951_"
        y="17.9"
        :class="`ztsrlb-${info.id}-st2`"
        width="8.2"
        height="18.1"
      />
      <linearGradient
        id="ztsrlb_4_"
        gradientUnits="userSpaceOnUse"
        x1="55.1199"
        y1="36.0038"
        x2="55.1199"
        y2="17.9347"
      >
        <stop offset="0" style="stop-color:#845100" />
        <stop offset="0.1209" style="stop-color:#9C6D24" />
        <stop offset="0.3521" style="stop-color:#C69F64" />
        <stop offset="0.5209" style="stop-color:#E0BE8C" />
        <stop offset="0.6084" style="stop-color:#EACA9B" />
        <stop offset="1" style="stop-color:#BF7600" />
      </linearGradient>
      <rect
        id="ztsrlb_952_"
        x="51"
        y="17.9"
        :class="`ztsrlb-${info.id}-st3`"
        width="8.2"
        height="18.1"
      />
      <rect
        id="ztsrlb_958_"
        x="18.8"
        y="24.7"
        :class="`ztsrlb-${info.id}-st4`"
        width="3.4"
        height="3.2"
      />
      <rect
        id="ztsrlb_959_"
        x="37.2"
        y="24.7"
        :class="`ztsrlb-${info.id}-st4`"
        width="3.4"
        height="3.2"
      />
      <path
        id="ztsrlb_955_"
        :class="`ztsrlb-${info.id}-st5`"
        d="M42.3,26H17c-1.6,0-2.8-1.3-2.8-2.8V7.8C14.1,6.3,15.4,5,17,5h25.3c1.6,0,2.8,1.3,2.8,2.8v15.3
					C45.1,24.7,43.8,26,42.3,26z"
      />
      <path
        id="ztsrlb_954_"
        :class="`ztsrlb-${info.id}-st6`"
        d="M42.3,21H17c-1.6,0-2.8-1.3-2.8-2.8V2.8C14.1,1.3,15.4,0,17,0h25.3c1.6,0,2.8,1.3,2.8,2.8v15.3
					C45.1,19.7,43.8,21,42.3,21z"
      />
      <g id="ztsrlb_960_">
        <rect
          id="ztsrlb_964_"
          x="18.2"
          y="4"
          :class="`ztsrlb-${info.id}-st7`"
          width="22.9"
          height="8.7"
        />
        <path
          id="ztsrlb_961_"
          :class="`ztsrlb-${info.id}-st8`"
          d="M42.1,13.7H17.2V3h24.9V13.7z M19.2,11.7h20.9V5H19.2V11.7z"
        />
      </g>
      <ellipse
        id="ztsrlb_965_"
        :class="`ztsrlb-${info.id}-st4`"
        cx="29.3"
        cy="17.3"
        rx="2.8"
        ry="2.3"
      />
      <ellipse
        id="ztsrlb_966_"
        :class="`ztsrlb-${info.id}-st9`"
        cx="29.3"
        cy="17.3"
        rx="1.9"
        ry="1.6"
      />
    </svg>
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "deviceZtsrlbCom",
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
          styles["backgroundColor"] = backgroundColor;
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

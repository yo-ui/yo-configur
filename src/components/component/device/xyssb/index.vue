// 旋翼式水表
<template>
  <div class="bm-device-xyssb-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 80 55`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
      .xyssb-${info.id}-st0{fill:url(#xyssb_2_);}
					.xyssb-${info.id}-st1{fill:url(#xyssb_3_);}
					.xyssb-${info.id}-st2{fill:url(#xyssb_4_);}
					.xyssb-${info.id}-st3{fill:url(#xyssb_5_);}
					.xyssb-${info.id}-st4{fill:url(#xyssb_6_);}
					.xyssb-${info.id}-st5{fill:#034081;}
					.xyssb-${info.id}-st6{fill:url(#xyssb_7_);}
					.xyssb-${info.id}-st7{fill:#F6C060;}
					.xyssb-${info.id}-st8{fill:#FFFFFF;}
					.xyssb-${info.id}-st9{fill:#E04520;}
					.xyssb-${info.id}-st10{fill:#5D5F65;}
					.xyssb-${info.id}-st11{fill:#1D1E1E;}
					.xyssb-${info.id}-st12{fill:#C57C15;}
      </style>
      `
        "
      ></defs>
      <linearGradient
        id="xyssb_2_"
        gradientUnits="userSpaceOnUse"
        x1="16.0725"
        y1="37.9619"
        x2="63.3258"
        y2="37.9619"
      >
        <stop offset="0" style="stop-color:#08396B" />
        <stop offset="0.4992" style="stop-color:#2797D4" />
        <stop offset="0.568" style="stop-color:#268BC3" />
        <stop offset="0.708" style="stop-color:#236999" />
        <stop offset="0.9045" style="stop-color:#1C3B63" />
        <stop offset="1" style="stop-color:#19274F" />
      </linearGradient>
      <path
        id="xyssb_938_"
        :class="`xyssb-${info.id}-st0`"
        d="M16.1,21.3v9.4c0,10.4,6,23.9,23.6,23.9c19,0,23.6-13.5,23.6-23.9v-9.4H16.1z"
      />
      <g id="xyssb_931_">
        <linearGradient
          id="xyssb_3_"
          gradientUnits="userSpaceOnUse"
          x1="12.6882"
          y1="22.14"
          x2="12.6882"
          y2="44.6115"
        >
          <stop offset="0" style="stop-color:#08396B" />
          <stop offset="0.3957" style="stop-color:#2797D4" />
          <stop offset="0.9412" style="stop-color:#19274F" />
        </linearGradient>
        <path
          id="xyssb_934_"
          :class="`xyssb-${info.id}-st1`"
          d="M20.5,45.5L4.9,41V26l11.9-4c0,0-0.1,6.8,0.9,13.1C18.4,40.6,20.5,45.5,20.5,45.5z"
        />
        <linearGradient
          id="xyssb_4_"
          gradientUnits="userSpaceOnUse"
          x1="3.1286"
          y1="44.4707"
          x2="3.1286"
          y2="22.4141"
        >
          <stop offset="0" style="stop-color:#A7AEB6" />
          <stop offset="0.508" style="stop-color:#DFE2E8" />
          <stop offset="0.7632" style="stop-color:#C0C5CB" />
          <stop offset="1" style="stop-color:#A7AEB6" />
        </linearGradient>
        <rect
          id="xyssb_932_"
          y="22.4"
          :class="`xyssb-${info.id}-st2`"
          width="6.3"
          height="22.1"
        />
      </g>
      <g id="xyssb_935_">
        <linearGradient
          id="xyssb_5_"
          gradientUnits="userSpaceOnUse"
          x1="-413.2452"
          y1="22.14"
          x2="-413.2452"
          y2="44.6115"
          gradientTransform="matrix(-1 0 0 1 -346.078 0)"
        >
          <stop offset="0" style="stop-color:#08396B" />
          <stop offset="0.3957" style="stop-color:#2797D4" />
          <stop offset="0.9412" style="stop-color:#19274F" />
        </linearGradient>
        <path
          id="xyssb_937_"
          :class="`xyssb-${info.id}-st3`"
          d="M59.3,45.5L75,41V26l-11.9-4c0,0,0.1,6.8-0.9,13.1C61.4,40.6,59.3,45.5,59.3,45.5z"
        />

        <linearGradient
          id="xyssb_6_"
          gradientUnits="userSpaceOnUse"
          x1="-422.8049"
          y1="44.4707"
          x2="-422.8049"
          y2="22.4141"
          gradientTransform="matrix(-1 0 0 1 -346.078 0)"
        >
          <stop offset="0" style="stop-color:#A7AEB6" />
          <stop offset="0.508" style="stop-color:#DFE2E8" />
          <stop offset="0.7632" style="stop-color:#C0C5CB" />
          <stop offset="1" style="stop-color:#A7AEB6" />
        </linearGradient>
        <rect
          id="xyssb_936_"
          x="73.6"
          y="22.4"
          :class="`xyssb-${info.id}-st4`"
          width="6.3"
          height="22.1"
        />
      </g>
      <ellipse
        id="xyssb_930_"
        :class="`xyssb-${info.id}-st5`"
        cx="39.7"
        cy="21.3"
        rx="23.6"
        ry="18.7"
      />
      <linearGradient
        id="xyssb_7_"
        gradientUnits="userSpaceOnUse"
        x1="19.8571"
        y1="25.8856"
        x2="59.5411"
        y2="25.8856"
      >
        <stop offset="0" style="stop-color:#815223" />
        <stop offset="0.5" style="stop-color:#D98811" />
        <stop offset="1" style="stop-color:#815223" />
      </linearGradient>
      <path
        id="xyssb_929_"
        :class="`xyssb-${info.id}-st6`"
        d="M19.9,15.7v4.5C19.9,29,28.7,36,39.7,36c11,0,19.8-7,19.8-15.7v-4.5H19.9z"
      />
      <ellipse
        id="xyssb_928_"
        :class="`xyssb-${info.id}-st7`"
        cx="39.7"
        cy="15.7"
        rx="19.8"
        ry="15.7"
      />
      <ellipse
        id="xyssb_927_"
        :class="`xyssb-${info.id}-st8`"
        cx="39.7"
        cy="15.5"
        rx="16.3"
        ry="12.7"
      />
      <ellipse
        id="xyssb_926_"
        :class="`xyssb-${info.id}-st9`"
        cx="35"
        cy="7.7"
        rx="1.6"
        ry="1.3"
      />
      <ellipse
        id="xyssb_925_"
        :class="`xyssb-${info.id}-st9`"
        cx="35"
        cy="23.2"
        rx="1.6"
        ry="1.3"
      />
      <ellipse
        id="xyssb_924_"
        :class="`xyssb-${info.id}-st9`"
        cx="29.7"
        cy="12.8"
        rx="1.6"
        ry="1.3"
      />
      <ellipse
        id="xyssb_923_"
        :class="`xyssb-${info.id}-st9`"
        cx="29.7"
        cy="19.1"
        rx="1.6"
        ry="1.3"
      />
      <rect
        id="xyssb_922_"
        x="48.1"
        y="11.4"
        :class="`xyssb-${info.id}-st10`"
        width="4"
        height="1.6"
      />
      <rect
        id="xyssb_921_"
        x="48.1"
        y="14.6"
        :class="`xyssb-${info.id}-st10`"
        width="4"
        height="1.6"
      />
      <rect
        id="xyssb_920_"
        x="48.1"
        y="17.9"
        :class="`xyssb-${info.id}-st10`"
        width="4"
        height="1.6"
      />
      <ellipse
        id="xyssb_919_"
        :class="`xyssb-${info.id}-st11`"
        cx="40"
        cy="15.5"
        rx="2.9"
        ry="2.2"
      />
      <path
        id="xyssb_918_"
        :class="`xyssb-${info.id}-st12`"
        d="M39.7,3.6c8.8,0,16,5.5,16.3,12.3c0-0.2,0-0.3,0-0.5c0-7-7.3-12.7-16.3-12.7
					S23.4,8.4,23.4,15.5c0,0.2,0,0.3,0,0.5C23.7,9.1,30.9,3.6,39.7,3.6z"
      />
    </svg>
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "deviceXyssbCom",
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
          "boxShadow"
        ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      }
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;
      if (backgroundRepeat) {
        styles["backgroundRepeat"] = backgroundRepeat;
      }
      if (backgroundSize) {
        styles["backgroundSize"] = backgroundSize;
      }
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;

      if (borderTop) {
        if (borderStyle) {
          styles["borderTopStyle"] = borderStyle;
        }
        styles["borderTopWidth"] = `${borderWidth}px`;
        if (borderColor) {
          styles["borderTopColor"] = borderColor;
        }
      } else {
        styles["borderTop"] = "none";
      }
      if (borderBottom) {
        if (borderStyle) {
          styles["borderBottomStyle"] = borderStyle;
        }
        styles["borderBottomWidth"] = `${borderWidth}px`;
        if (borderColor) {
          styles["borderBottomColor"] = borderColor;
        }
      } else {
        styles["borderBottom"] = "none";
      }
      if (borderLeft) {
        if (borderStyle) {
          styles["borderLeftStyle"] = borderStyle;
        }
        styles["borderLeftWidth"] = `${borderWidth}px`;
        if (borderColor) {
          styles["borderLeftColor"] = borderColor;
        }
      } else {
        styles["borderLeft"] = "none";
      }
      if (borderRight) {
        if (borderStyle) {
          styles["borderRightStyle"] = borderStyle;
        }
        styles["borderRightWidth"] = `${borderWidth}px`;
        if (borderColor) {
          styles["borderRightColor"] = borderColor;
        }
      } else {
        styles["borderRight"] = "none";
      }
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
</style>

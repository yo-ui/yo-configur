// 烟雾报警传感器
<template>
  <div class="bm-device-ywbjcgq-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 42 35`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
					.ywbjcgq-${info.id}-st0{fill:url(#ywbjcgq_2_);}
					.ywbjcgq-${info.id}-st1{fill:url(#ywbjcgq_3_);}
					.ywbjcgq-${info.id}-st2{fill:#C2C8CE;}
					.ywbjcgq-${info.id}-st3{fill:#ABB3BA;}
					.ywbjcgq-${info.id}-st4{fill:#778189;}
					.ywbjcgq-${info.id}-st5{fill:#222426;}
					.ywbjcgq-${info.id}-st6{fill:#FFFFFF;}
					.ywbjcgq-${info.id}-st7{fill:url(#ywbjcgq_4_);}
      </style>
      `
        "
      ></defs>
      <linearGradient
        id="ywbjcgq_2_"
        gradientUnits="userSpaceOnUse"
        x1="2.2839"
        y1="28.4091"
        x2="39.8048"
        y2="28.4091"
      >
        <stop offset="0" style="stop-color:#ACB1B9" />
        <stop offset="0.4813" style="stop-color:#DEDEDE" />
        <stop offset="1" style="stop-color:#A9AEB7" />
      </linearGradient>
      <path
        id="ywbjcgq_1435_"
        :class="`ywbjcgq-${info.id}-st0`"
        d="M2.3,22.2v6c0,4.1,9.7,6.4,18.8,6.4s18.7-2.2,18.7-6.4v-6L2.3,22.2z"
      />
      <linearGradient
        id="ywbjcgq_3_"
        gradientUnits="userSpaceOnUse"
        x1="0.4256"
        y1="22.8204"
        x2="41.6631"
        y2="22.8204"
      >
        <stop offset="0" style="stop-color:#BCC6C9" />
        <stop offset="0.4286" style="stop-color:#FFFFFF" />
        <stop offset="1" style="stop-color:#A8B2B7" />
      </linearGradient>
      <path
        id="ywbjcgq_1425_"
        :class="`ywbjcgq-${info.id}-st1`"
        d="M0.4,14.3v8.2c0,5.7,10.7,8.8,20.7,8.8s20.6-3.1,20.6-8.8v-8.2L0.4,14.3z"
      />
      <path
        id="ywbjcgq_1423_"
        :class="`ywbjcgq-${info.id}-st2`"
        d="M21,23.3c-10,0-20.6-3.2-20.6-9c0-5.8,10.6-9,20.6-9s20.6,3.2,20.6,9
					C41.7,20.1,31,23.3,21,23.3z"
      />
      <path
        id="ywbjcgq_1426_"
        :class="`ywbjcgq-${info.id}-st3`"
        d="M21.2,19.2c-7.7,0-15.9-2-15.9-5.7c0-3.7,8.2-5.7,15.9-5.7s15.9,2,15.9,5.7
					C37.1,17.2,28.9,19.2,21.2,19.2z"
      />
      <path
        id="ywbjcgq_1433_"
        :class="`ywbjcgq-${info.id}-st4`"
        d="M21.2,9.8c7,0,14.3,1.6,15.6,4.7c0.1-0.3,0.2-0.6,0.2-1c0-3.7-8.2-5.7-15.9-5.7
					c-7.7,0-15.9,2-15.9,5.7c0,0.4,0.1,0.7,0.2,1C6.9,11.5,14.2,9.8,21.2,9.8z"
      />
      <path
        id="ywbjcgq_1440_"
        :class="`ywbjcgq-${info.id}-st5`"
        d="M21,10.7c-5.2,0-10.8,1.6-10.8,4.7c0,1.3,1,2.3,2.5,3c2.6,0.6,5.6,0.9,8.5,0.9
					c2.7,0,5.5-0.3,8-0.7c1.6-0.8,2.7-1.8,2.7-3.1C31.8,12.3,26.3,10.7,21,10.7z"
      />
      <polygon
        id="ywbjcgq_1430_"
        :class="`ywbjcgq-${info.id}-st4`"
        points="8.5,14 6.8,17 9.3,17.4 11.4,11 9.9,10.1 "
      />
      <path
        id="ywbjcgq_1428_"
        :class="`ywbjcgq-${info.id}-st6`"
        d="M9.2,9.7c0,0-0.1,1.4-1.1,3.3c-0.7,1.3-2.5,3.2-2.5,3.2L6.8,17c0,0,1.2-1.6,2.2-3.3
					c0.7-1.2,1.1-3.2,1.1-3.2L9.2,9.7z"
      />
      <polygon
        id="ywbjcgq_1429_"
        :class="`ywbjcgq-${info.id}-st6`"
        points="16.6,13.2 15.4,19.3 17.2,19.4 18.2,13.1 "
      />
      <polygon
        id="ywbjcgq_1434_"
        :class="`ywbjcgq-${info.id}-st4`"
        points="33.6,14.1 35.3,17.1 32.8,17.5 30.7,11 32.2,10.2 "
      />
      <path
        id="ywbjcgq_1432_"
        :class="`ywbjcgq-${info.id}-st6`"
        d="M32.9,9.8c0,0,0.1,1.4,1.1,3.3c0.7,1.3,2.5,3.2,2.5,3.2l-1.2,0.8c0,0-1.2-1.6-2.2-3.3
					c-0.7-1.2-1.1-3.2-1.1-3.2L32.9,9.8z"
      />
      <polygon
        id="ywbjcgq_1431_"
        :class="`ywbjcgq-${info.id}-st6`"
        points="25.5,13.2 26.7,19.3 24.9,19.5 23.9,13.2 "
      />
      <linearGradient
        id="ywbjcgq_4_"
        gradientUnits="userSpaceOnUse"
        x1="8.4689"
        y1="9.7296"
        x2="33.6198"
        y2="9.7296"
      >
        <stop offset="0" style="stop-color:#BCC6C9" />
        <stop offset="0.4286" style="stop-color:#FFFFFF" />
        <stop offset="1" style="stop-color:#A8B2B7" />
      </linearGradient>
      <path
        id="ywbjcgq_1422_"
        :class="`ywbjcgq-${info.id}-st7`"
        d="M8.5,6v2.2c0,3.5,6.5,5.4,12.6,5.4s12.5-1.9,12.5-5.4V6L8.5,6z"
      />
      <path
        id="ywbjcgq_1420_"
        :class="`ywbjcgq-${info.id}-st2`"
        d="M21,11.4C14.9,11.4,8.5,9.5,8.5,6c0-3.6,6.5-5.5,12.6-5.5S33.6,2.4,33.6,6
					C33.6,9.5,27.1,11.4,21,11.4z"
      />
    </svg>
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "deviceYwbjcgqCom",
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
</style>

//太阳能热水器
<template>
  <div class="bm-device-tynrsq-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 135 128`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
	.tynrsq-${info.id}-st0{fill:#D9D9D9;}
	.tynrsq-${info.id}-st1{fill:#BDBDBD;}
	.tynrsq-${info.id}-st2{fill:url(#tynrsq_${info.id}_SVGID_1_);}
	.tynrsq-${info.id}-st3{fill:url(#tynrsq_${info.id}_SVGID_2_);}
	.tynrsq-${info.id}-st4{fill:url(#tynrsq_${info.id}_SVGID_3_);}
	.tynrsq-${info.id}-st5{fill:url(#tynrsq_${info.id}_SVGID_4_);}
	.tynrsq-${info.id}-st6{fill:url(#tynrsq_${info.id}_SVGID_5_);}
	.tynrsq-${info.id}-st7{fill:url(#tynrsq_${info.id}_SVGID_6_);}
	.tynrsq-${info.id}-st8{fill:url(#tynrsq_${info.id}_SVGID_7_);}
	.tynrsq-${info.id}-st9{fill:url(#tynrsq_${info.id}_SVGID_8_);}
	.tynrsq-${info.id}-st10{fill:url(#tynrsq_${info.id}_SVGID_9_);}
	.tynrsq-${info.id}-st11{fill:url(#tynrsq_${info.id}_SVGID_10_);}
	.tynrsq-${info.id}-st12{fill:url(#tynrsq_${info.id}_SVGID_11_);}
	.tynrsq-${info.id}-st13{fill:url(#tynrsq_${info.id}_SVGID_12_);}
      </style>
      `
        "
      ></defs>
      <rect
        y="5.4"
        :class="`tynrsq-${info.id}-st0`"
        width="134.7"
        height="12.4"
      />
      <rect :class="`tynrsq-${info.id}-st1`" width="134.7" height="5.4" />
      <linearGradient
        :id="`tynrsq_${info.id}_SVGID_1_`"
        gradientUnits="userSpaceOnUse"
        x1="3.2629"
        y1="61.5322"
        x2="10.8775"
        y2="61.5322"
      >
        <stop offset="0" style="stop-color:#0E255A" />
        <stop offset="0.4091" style="stop-color:#1456BB" />
        <stop offset="0.6337" style="stop-color:#94CEFF" />
        <stop offset="1" style="stop-color:#0E255A" />
      </linearGradient>
      <path
        :class="`tynrsq-${info.id}-st2`"
        d="M7.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C10.9,10.4,9.2,8.5,7.1,8.5z"
      />
      <linearGradient
        :id="`tynrsq_${info.id}_SVGID_2_`"
        gradientUnits="userSpaceOnUse"
        x1="14.2629"
        y1="61.5322"
        x2="21.8775"
        y2="61.5322"
      >
        <stop offset="0" style="stop-color:#0E255A" />
        <stop offset="0.4091" style="stop-color:#1456BB" />
        <stop offset="0.6337" style="stop-color:#94CEFF" />
        <stop offset="1" style="stop-color:#0E255A" />
      </linearGradient>
      <path
        :class="`tynrsq-${info.id}-st3`"
        d="M18.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C21.9,10.4,20.2,8.5,18.1,8.5z"
      />
      <linearGradient
        :id="`tynrsq_${info.id}_SVGID_3_`"
        gradientUnits="userSpaceOnUse"
        x1="25.2629"
        y1="61.5322"
        x2="32.8775"
        y2="61.5322"
      >
        <stop offset="0" style="stop-color:#0E255A" />
        <stop offset="0.4091" style="stop-color:#1456BB" />
        <stop offset="0.6337" style="stop-color:#94CEFF" />
        <stop offset="1" style="stop-color:#0E255A" />
      </linearGradient>
      <path
        :class="`tynrsq-${info.id}-st4`"
        d="M29.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C32.9,10.4,31.2,8.5,29.1,8.5z"
      />
      <linearGradient
        :id="`tynrsq_${info.id}_SVGID_4_`"
        gradientUnits="userSpaceOnUse"
        x1="36.2629"
        y1="61.5322"
        x2="43.8775"
        y2="61.5322"
      >
        <stop offset="0" style="stop-color:#0E255A" />
        <stop offset="0.4091" style="stop-color:#1456BB" />
        <stop offset="0.6337" style="stop-color:#94CEFF" />
        <stop offset="1" style="stop-color:#0E255A" />
      </linearGradient>
      <path
        :class="`tynrsq-${info.id}-st5`"
        d="M40.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C43.9,10.4,42.2,8.5,40.1,8.5z"
      />
      <linearGradient
        :id="`tynrsq_${info.id}_SVGID_5_`"
        gradientUnits="userSpaceOnUse"
        x1="47.2629"
        y1="61.5322"
        x2="54.8775"
        y2="61.5322"
      >
        <stop offset="0" style="stop-color:#0E255A" />
        <stop offset="0.4091" style="stop-color:#1456BB" />
        <stop offset="0.6337" style="stop-color:#94CEFF" />
        <stop offset="1" style="stop-color:#0E255A" />
      </linearGradient>
      <path
        :class="`tynrsq-${info.id}-st6`"
        d="M51.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C54.9,10.4,53.2,8.5,51.1,8.5z"
      />
      <linearGradient
        :id="`tynrsq_${info.id}_SVGID_6_`"
        gradientUnits="userSpaceOnUse"
        x1="58.2629"
        y1="61.5322"
        x2="65.8775"
        y2="61.5322"
      >
        <stop offset="0" style="stop-color:#0E255A" />
        <stop offset="0.4091" style="stop-color:#1456BB" />
        <stop offset="0.6337" style="stop-color:#94CEFF" />
        <stop offset="1" style="stop-color:#0E255A" />
      </linearGradient>
      <path
        :class="`tynrsq-${info.id}-st7`"
        d="M62.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C65.9,10.4,64.2,8.5,62.1,8.5z"
      />
      <linearGradient
        :id="`tynrsq_${info.id}_SVGID_7_`"
        gradientUnits="userSpaceOnUse"
        x1="69.2629"
        y1="61.5322"
        x2="76.8775"
        y2="61.5322"
      >
        <stop offset="0" style="stop-color:#0E255A" />
        <stop offset="0.4091" style="stop-color:#1456BB" />
        <stop offset="0.6337" style="stop-color:#94CEFF" />
        <stop offset="1" style="stop-color:#0E255A" />
      </linearGradient>
      <path
        :class="`tynrsq-${info.id}-st8`"
        d="M73.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C76.9,10.4,75.2,8.5,73.1,8.5z"
      />
      <linearGradient
        :id="`tynrsq_${info.id}_SVGID_8_`"
        gradientUnits="userSpaceOnUse"
        x1="80.2629"
        y1="61.5322"
        x2="87.8775"
        y2="61.5322"
      >
        <stop offset="0" style="stop-color:#0E255A" />
        <stop offset="0.4091" style="stop-color:#1456BB" />
        <stop offset="0.6337" style="stop-color:#94CEFF" />
        <stop offset="1" style="stop-color:#0E255A" />
      </linearGradient>
      <path
        :class="`tynrsq-${info.id}-st9`"
        d="M84.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C87.9,10.4,86.2,8.5,84.1,8.5z"
      />
      <linearGradient
        :id="`tynrsq_${info.id}_SVGID_9_`"
        gradientUnits="userSpaceOnUse"
        x1="90.2629"
        y1="61.5322"
        x2="97.8775"
        y2="61.5322"
      >
        <stop offset="0" style="stop-color:#0E255A" />
        <stop offset="0.4091" style="stop-color:#1456BB" />
        <stop offset="0.6337" style="stop-color:#94CEFF" />
        <stop offset="1" style="stop-color:#0E255A" />
      </linearGradient>
      <path
        :class="`tynrsq-${info.id}-st10`"
        d="M94.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C97.9,10.4,96.2,8.5,94.1,8.5z"
      />
      <linearGradient
        :id="`tynrsq_${info.id}_SVGID_10_`"
        gradientUnits="userSpaceOnUse"
        x1="101.2629"
        y1="61.5322"
        x2="108.8775"
        y2="61.5322"
      >
        <stop offset="0" style="stop-color:#0E255A" />
        <stop offset="0.4091" style="stop-color:#1456BB" />
        <stop offset="0.6337" style="stop-color:#94CEFF" />
        <stop offset="1" style="stop-color:#0E255A" />
      </linearGradient>
      <path
        :class="`tynrsq-${info.id}-st11`"
        d="M105.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C108.9,10.4,107.2,8.5,105.1,8.5z"
      />
      <linearGradient
        :id="`tynrsq_${info.id}_SVGID_11_`"
        gradientUnits="userSpaceOnUse"
        x1="112.2629"
        y1="61.5322"
        x2="119.8775"
        y2="61.5322"
      >
        <stop offset="0" style="stop-color:#0E255A" />
        <stop offset="0.4091" style="stop-color:#1456BB" />
        <stop offset="0.6337" style="stop-color:#94CEFF" />
        <stop offset="1" style="stop-color:#0E255A" />
      </linearGradient>
      <path
        :class="`tynrsq-${info.id}-st12`"
        d="M116.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C119.9,10.4,118.2,8.5,116.1,8.5z"
      />
      <linearGradient
        :id="`tynrsq_${info.id}_SVGID_12_`"
        gradientUnits="userSpaceOnUse"
        x1="123.2629"
        y1="61.5322"
        x2="130.8775"
        y2="61.5322"
      >
        <stop offset="0" style="stop-color:#0E255A" />
        <stop offset="0.4091" style="stop-color:#1456BB" />
        <stop offset="0.6337" style="stop-color:#94CEFF" />
        <stop offset="1" style="stop-color:#0E255A" />
      </linearGradient>
      <path
        :class="`tynrsq-${info.id}-st13`"
        d="M127.1,8.5c-2.1,0-3.8,1.8-3.8,4.1v101.9h7.6V12.6C130.9,10.4,129.2,8.5,127.1,8.5z"
      />
      <rect
        y="115.4"
        :class="`tynrsq-${info.id}-st0`"
        width="134.7"
        height="12.4"
      />
      <rect
        y="110"
        :class="`tynrsq-${info.id}-st1`"
        width="134.7"
        height="5.4"
      />
    </svg>
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "deviceTynrsqCom",
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

// 插卡式水表
<template>
  <div class="bm-device-ckssb-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 88 50`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
      .ckssb-${info.id}-st0{fill:url(#ckssb_${info.id}_2_);}
					.ckssb-${info.id}-st1{fill:url(#ckssb_${info.id}_3_);}
					.ckssb-${info.id}-st2{fill:#A5CDAD;}
					.ckssb-${info.id}-st3{fill:url(#ckssb_${info.id}_4_);}
					.ckssb-${info.id}-st4{fill:url(#ckssb_${info.id}_5_);}
					.ckssb-${info.id}-st5{fill:url(#ckssb_${info.id}_6_);}
					.ckssb-${info.id}-st6{fill:url(#ckssb_${info.id}_7_);}
					.ckssb-${info.id}-st7{fill:#A7AEB6;}
					.ckssb-${info.id}-st8{fill:#DFE2E8;}
					.ckssb-${info.id}-st9{fill:#FFFFFF;}
					.ckssb-${info.id}-st10{fill:#E04520;}
					.ckssb-${info.id}-st11{fill:#5D5F65;}
					.ckssb-${info.id}-st12{fill:#1D1E1E;}
					.ckssb-${info.id}-st13{fill:#838776;}
					.ckssb-${info.id}-st14{fill:#25282B;}
      </style>
      `
        "
      ></defs>
      <linearGradient
        :id="`ckssb_${info.id}_2_`"
        gradientUnits="userSpaceOnUse"
        x1="-895.6106"
        y1="19.6556"
        x2="-895.6106"
        y2="33.9811"
        gradientTransform="matrix(-1 0 0 1 -819.0268 0)"
      >
        <stop offset="0" style="stop-color:#182952" />
        <stop offset="0.508" style="stop-color:#1A54A5" />
        <stop offset="0.6204" style="stop-color:#1A498F" />
        <stop offset="0.8796" style="stop-color:#193161" />
        <stop offset="1" style="stop-color:#182952" />
      </linearGradient>
      <path
        :id="`ckssb_${info.id}_894_`"
        :class="`ckssb-${info.id}-st0`"
        d="M72.2,34.6h9.1v-15h-9.1c0,0-0.4,4-0.4,8S72.2,34.6,72.2,34.6z"
      />
      <linearGradient
        :id="`ckssb_${info.id}_3_`"
        gradientUnits="userSpaceOnUse"
        x1="-902.9611"
        y1="18.1224"
        x2="-902.9611"
        y2="35.363"
        gradientTransform="matrix(-1 0 0 1 -819.0268 0)"
      >
        <stop offset="0" style="stop-color:#A7AEB6" />
        <stop offset="0.508" style="stop-color:#DFE2E8" />
        <stop offset="0.7632" style="stop-color:#C0C5CB" />
        <stop offset="1" style="stop-color:#A7AEB6" />
      </linearGradient>
      <rect
        :id="`ckssb_${info.id}_893_`"
        x="79.8"
        y="18"
        :class="`ckssb-${info.id}-st1`"
        width="8.2"
        height="18.1"
      />
      <path
        :id="`ckssb_${info.id}_904_`"
        :class="`ckssb-${info.id}-st2`"
        d="M75,28.8h-3.7c-0.8,0-1.5-0.7-1.5-1.5V12.5c0-0.8,0.7-1.5,1.5-1.5H75c0.8,0,1.5,0.7,1.5,1.5
					v14.8C76.5,28.1,75.9,28.8,75,28.8z"
      />
      <linearGradient
        :id="`ckssb_${info.id}_4_`"
        gradientUnits="userSpaceOnUse"
        x1="13.492"
        y1="36.1269"
        x2="72.3183"
        y2="36.1269"
      >
        <stop offset="0" style="stop-color:#182952" />
        <stop offset="0.3155" style="stop-color:#1A54A5" />
        <stop offset="0.8717" style="stop-color:#1A54A5" />
        <stop offset="1" style="stop-color:#182952" />
      </linearGradient>
      <path
        :id="`ckssb_${info.id}_898_`"
        :class="`ckssb-${info.id}-st3`"
        d="M13.5,22.8v9.6c0.2,9.4,10,17.1,22,17.1h29.7c3.9,0,7.1-2.5,7.1-5.7v-9.7L13.5,22.8z"
      />
      <linearGradient
        :id="`ckssb_${info.id}_5_`"
        gradientUnits="userSpaceOnUse"
        x1="10.2998"
        y1="19.6556"
        x2="10.2998"
        y2="33.9811"
      >
        <stop offset="0" style="stop-color:#182952" />
        <stop offset="0.508" style="stop-color:#1A54A5" />
        <stop offset="0.6204" style="stop-color:#1A498F" />
        <stop offset="0.8796" style="stop-color:#193161" />
        <stop offset="1" style="stop-color:#182952" />
      </linearGradient>
      <path
        :id="`ckssb_${info.id}_897_`"
        :class="`ckssb-${info.id}-st4`"
        d="M13.5,34.6H6.7v-15h6.7c0,0,0.4,4,0.4,8S13.5,34.6,13.5,34.6z"
      />
      <linearGradient
        :id="`ckssb_${info.id}_6_`"
        gradientUnits="userSpaceOnUse"
        x1="4.1167"
        y1="18.1224"
        x2="4.1167"
        y2="35.363"
      >
        <stop offset="0" style="stop-color:#A7AEB6" />
        <stop offset="0.508" style="stop-color:#DFE2E8" />
        <stop offset="0.7632" style="stop-color:#C0C5CB" />
        <stop offset="1" style="stop-color:#A7AEB6" />
      </linearGradient>
      <rect
        :id="`ckssb_${info.id}_896_`"
        y="18"
        :class="`ckssb-${info.id}-st5`"
        width="8.2"
        height="18.1"
      />
      <linearGradient
        :id="`ckssb_${info.id}_7_`"
        gradientUnits="userSpaceOnUse"
        x1="13.492"
        y1="28.321"
        x2="72.3183"
        y2="28.321"
      >
        <stop offset="0" style="stop-color:#B3B7BB" />
        <stop offset="0.3155" style="stop-color:#FFFFFF" />
        <stop offset="0.8717" style="stop-color:#FFFFFF" />
        <stop offset="1" style="stop-color:#B3B7BB" />
      </linearGradient>
      <path
        :id="`ckssb_${info.id}_891_`"
        :class="`ckssb-${info.id}-st6`"
        d="M13.5,17.5v5.1c0.2,9.4,10,17.1,22,17.1h29.7c3.9,0,7.1-2.5,7.1-5.7V16.9L13.5,17.5z"
      />
      <path
        :id="`ckssb_${info.id}_889_`"
        :class="`ckssb-${info.id}-st7`"
        d="M65.2,34.6H35.5c-12,0-21.9-7.7-22-17.1c-0.1-4.7,2.1-9.1,6.3-12.4C23.9,1.8,29.4,0,35.2,0h30
					c3.9,0,7.1,2.5,7.1,5.7v23.3C72.3,32.1,69.1,34.6,65.2,34.6z"
      />
      <path
        :id="`ckssb_${info.id}_888_`"
        :class="`ckssb-${info.id}-st8`"
        d="M56,0.9H35.2c-11.5,0-20.8,7.3-20.6,16.3C14.8,26,24.2,33,35.5,33H56V0.9z"
      />
      <path
        :id="`ckssb_${info.id}_887_`"
        :class="`ckssb-${info.id}-st8`"
        d="M65.2,0.9h-8.3V33h8.3c3.3,0,6-2.1,6-4.7V5.5C71.2,3,68.5,0.9,65.2,0.9z"
      />
      <ellipse
        :id="`ckssb_${info.id}_885_`"
        :class="`ckssb-${info.id}-st9`"
        cx="35.2"
        cy="16.9"
        rx="17.6"
        ry="13.7"
      />
      <ellipse
        :id="`ckssb_${info.id}_884_`"
        :class="`ckssb-${info.id}-st10`"
        cx="30.2"
        cy="8.6"
        rx="1.7"
        ry="1.4"
      />
      <ellipse
        :id="`ckssb_${info.id}_883_`"
        :class="`ckssb-${info.id}-st10`"
        cx="30.2"
        cy="25.3"
        rx="1.7"
        ry="1.4"
      />
      <ellipse
        :id="`ckssb_${info.id}_882_`"
        :class="`ckssb-${info.id}-st10`"
        cx="24.4"
        cy="14.1"
        rx="1.7"
        ry="1.4"
      />
      <ellipse
        :id="`ckssb_${info.id}_881_`"
        :class="`ckssb-${info.id}-st10`"
        cx="24.4"
        cy="20.8"
        rx="1.7"
        ry="1.4"
      />
      <rect
        :id="`ckssb_${info.id}_879_`"
        x="44.3"
        y="12.5"
        :class="`ckssb-${info.id}-st11`"
        width="4.3"
        height="1.8"
      />
      <rect
        :id="`ckssb_${info.id}_878_`"
        x="44.3"
        y="16"
        :class="`ckssb-${info.id}-st11`"
        width="4.3"
        height="1.8"
      />
      <rect
        :id="`ckssb_${info.id}_877_`"
        x="44.3"
        y="19.5"
        :class="`ckssb-${info.id}-st11`"
        width="4.3"
        height="1.8"
      />
      <ellipse
        :id="`ckssb_${info.id}_875_`"
        :class="`ckssb-${info.id}-st12`"
        cx="35.5"
        cy="16.9"
        rx="3.1"
        ry="2.4"
      />
      <path
        :id="`ckssb_${info.id}_874_`"
        :class="`ckssb-${info.id}-st7`"
        d="M35.2,4.1c9.5,0,17.3,5.9,17.6,13.3c0-0.2,0-0.3,0-0.5c0-7.6-7.9-13.7-17.6-13.7
					S17.6,9.4,17.6,16.9c0,0.2,0,0.3,0,0.5C18,10,25.7,4.1,35.2,4.1z"
      />
      <g :id="`ckssb_${info.id}_899_`">
        <rect
          :id="`ckssb_${info.id}_903_`"
          x="60.1"
          y="5.8"
          :class="`ckssb-${info.id}-st13`"
          width="7.1"
          height="21.5"
        />
        <path
          :id="`ckssb_${info.id}_900_`"
          :class="`ckssb-${info.id}-st14`"
          d="M68.3,4.8v23.5h-9.1V4.8H68.3z M66.3,26.3V6.8h-5.1v19.5H66.3z"
        />
      </g>
    </svg>
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;

export default {
  name: "deviceCkssbCom",
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

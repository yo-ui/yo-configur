// 断路器
<template>
  <div class="bm-device-duanluqi-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 45 45`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
      .duanluqi-${info.id}-st0{fill:#DFE2E8;}
					.duanluqi-${info.id}-st1{fill:#C1C7CC;}
					.duanluqi-${info.id}-st2{fill:#54626C;}
					.duanluqi-${info.id}-st3{fill:#2E383D;}
					.duanluqi-${info.id}-st4{fill:#FFFFFF;}
					.duanluqi-${info.id}-st5{fill:#459E37;}
					.duanluqi-${info.id}-st6{fill:#CD5A59;}
					.duanluqi-${info.id}-st7{fill:#5D6471;}
					.duanluqi-${info.id}-st8{fill:#838B99;}
					.duanluqi-${info.id}-st9{fill:#B4BCC7;}
					.duanluqi-${info.id}-st10{fill:#ECF2F9;}
      </style>
      `
        "
      ></defs>
      <rect
        id="duanluqi_18_"
        x="1.3"
        y="17.2"
        :class="`duanluqi-${info.id}-st0`"
        width="42.2"
        height="26.2"
      />
      <polygon
        id="duanluqi_19_"
        :class="`duanluqi-${info.id}-st1`"
        points="43.5,17.2 1.3,17.2 3.5,11.8 41.3,11.8 "
      />
      <rect
        id="duanluqi_20_"
        x="3.5"
        y="1.3"
        :class="`duanluqi-${info.id}-st0`"
        width="37.8"
        height="10.5"
      />
      <rect
        id="duanluqi_21_"
        x="3.5"
        :class="`duanluqi-${info.id}-st1`"
        width="37.8"
        height="1.3"
      />
      <rect
        id="duanluqi_22_"
        x="6"
        y="23.8"
        :class="`duanluqi-${info.id}-st2`"
        width="32.8"
        height="20.7"
      />
      <rect
        id="duanluqi_23_"
        x="6"
        y="22.8"
        :class="`duanluqi-${info.id}-st3`"
        width="32.8"
        height="0.9"
      />
      <rect
        id="duanluqi_28_"
        x="21.9"
        y="22.8"
        :class="`duanluqi-${info.id}-st3`"
        width="0.9"
        height="21.7"
      />
      <circle
        id="duanluqi_24_"
        :class="`duanluqi-${info.id}-st4`"
        cx="14.4"
        cy="32.8"
        r="3.5"
      />
      <circle
        id="duanluqi_25_"
        :class="`duanluqi-${info.id}-st5`"
        cx="14.4"
        cy="32.8"
        r="2.8"
      />
      <circle
        id="duanluqi_27_"
        :class="`duanluqi-${info.id}-st4`"
        cx="30.4"
        cy="32.8"
        r="3.5"
      />
      <circle
        id="duanluqi_26_"
        :class="`duanluqi-${info.id}-st6`"
        cx="30.4"
        cy="32.8"
        r="2.8"
      />
      <path
        id="duanluqi_35_"
        :class="`duanluqi-${info.id}-st7`"
        d="M16.5,15.4h-6.1c-4.1,0-7.1-1.7-8.1-4.6C1.5,8.4,2.4,5.8,4.5,4.2c3-2.2,5.8-1.6,9.1-0.9
					c2.1,0.4,4.4,1,7.3,1c4.7,0,10.2,0.1,10.2,0.1L31.1,8C31.1,8,25.6,7.9,21,7.9c-3.4,0-6-0.6-8.1-1C9.7,6.2,8.3,5.9,6.7,7.1
					C5.8,7.7,5.4,8.8,5.7,9.7c0.4,1.3,2.2,2.1,4.6,2.1h6.1V15.4z"
      />
      <path
        id="duanluqi_36_"
        :class="`duanluqi-${info.id}-st8`"
        d="M16.5,14.7h-6.1c-3.8,0-6.5-1.5-7.4-4.1c-0.7-2.1,0.1-4.4,2-5.8c2.7-2,5.4-1.4,8.5-0.7
					c2.1,0.5,4.5,1,7.5,1c4.7,0,10.2,0.1,10.2,0.1l0,2.2c-0.1,0-5.5-0.1-10.2-0.1c-3.3,0-5.9-0.6-8-1c-3-0.7-4.8-1.1-6.8,0.4
					C5.1,7.3,4.7,8.7,5,9.9c0.5,1.6,2.5,2.6,5.3,2.6h6.1V14.7z"
      />
      <path
        id="duanluqi_37_"
        :class="`duanluqi-${info.id}-st9`"
        d="M16.5,14h-6.1c-3.4,0-5.9-1.4-6.7-3.6c-0.6-1.8,0.1-3.8,1.7-5c2.5-1.8,4.9-1.3,8-0.6
					c2.1,0.5,4.5,1,7.7,1c4.7,0,10.1,0.1,10.2,0.1l0,0.7c-0.1,0-5.5-0.1-10.2-0.1c-3.2,0-5.8-0.6-7.8-1C10,4.8,8,4.3,5.8,5.9
					c-1.4,1-1.9,2.7-1.4,4.2c0.6,1.9,2.9,3.1,6,3.1h6.1V14z"
      />
      <rect
        id="duanluqi_31_"
        x="9.2"
        y="12"
        :class="`duanluqi-${info.id}-st10`"
        width="9.2"
        height="4.3"
      />
      <polygon
        id="duanluqi_30_"
        :class="`duanluqi-${info.id}-st1`"
        points="18.4,12 9.2,12 9.7,9.8 18.4,9.8 "
      />
      <rect
        id="duanluqi_33_"
        x="21.1"
        y="4.9"
        :class="`duanluqi-${info.id}-st4`"
        width="11.6"
        height="5.1"
      />
      <polygon
        id="duanluqi_32_"
        :class="`duanluqi-${info.id}-st1`"
        points="21.1,4.9 32.7,4.9 32.1,2.3 21.1,2.3 "
      />
    </svg>
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "deviceDuanluqiCom",
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

// 水管（右）
<template>
  <div class="bm-device-sg-right-com" :style="comStyle">
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
      
					.sg-right-st0{fill:url(#sg_right_6_);}
					.sg-right-st1{fill:url(#sg_right_7_);}
					.sg-right-st2{fill:#FFFFFF;}
					.sg-right-st3{fill:url(#sg_right_8_);}
					.sg-right-st4{fill:url(#sg_right_9_);}
					.sg-right-st5{fill:url(#sg_right_10_);}
					.sg-right-st6{fill:#777C7F;}
      </style>
      `
        "
      ></defs>
      <g>
        <linearGradient
          id="sg_right_6_"
          gradientUnits="userSpaceOnUse"
          x1="-150.9816"
          y1="989.4756"
          x2="-150.9816"
          y2="995.4756"
          gradientTransform="matrix(-4.489659e-011 -1 -1 4.489659e-011 997.4756 -145.9816)"
        >
          <stop offset="0" style="stop-color:#777C7F" />
          <stop offset="0.5" style="stop-color:#FFFFFF" />
          <stop offset="0.9803" style="stop-color:#777C7F" />
        </linearGradient>
        <rect
          id="sg_right_4_"
          x="2"
          y="0"
          class="sg-right-st0"
          width="6"
          height="10"
        />

        <linearGradient
          id="sg_right_7_"
          gradientUnits="userSpaceOnUse"
          x1="-142.9816"
          y1="990.9756"
          x2="-142.9816"
          y2="996.9756"
          gradientTransform="matrix(-1 0 0 1 -141.4816 -988.9756)"
        >
          <stop offset="0" style="stop-color:#777C7F" />
          <stop offset="0.1755" style="stop-color:#ABAEB0" />
          <stop offset="0.3951" style="stop-color:#E7E8E9" />
          <stop offset="0.5" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#777C7F" />
        </linearGradient>
        <rect
          id="sg_right_551_"
          x="0"
          y="2"
          class="sg-right-st1"
          width="3"
          height="6"
        />
        <g id="sg_right_1_">
          <rect
            id="sg_right_558_"
            x="2"
            y="2"
            class="sg-right-st2"
            width="6"
            height="6"
          />

          <radialGradient
            id="sg_right_8_"
            cx="-431.5536"
            cy="395.9081"
            r="13.4118"
            gradientTransform="matrix(-0.5898 0 0 0.5898 -254.2069 -223.8701)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.2906" style="stop-color:#777C7F" />
            <stop offset="0.62" style="stop-color:#777C7F;stop-opacity:0" />
          </radialGradient>
          <rect
            id="sg_right_555_"
            x="2"
            y="2"
            class="sg-right-st3"
            width="6"
            height="6"
          />

          <radialGradient
            id="sg_right_9_"
            cx="-431.2906"
            cy="379.9474"
            r="13.4117"
            gradientTransform="matrix(-0.5898 0 0 0.5898 -254.2069 -223.8701)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3103" style="stop-color:#777C7F" />
            <stop offset="0.62" style="stop-color:#777C7F;stop-opacity:0" />
          </radialGradient>
          <rect
            id="sg_right_554_"
            x="2"
            y="2"
            class="sg-right-st4"
            width="6"
            height="6"
          />

          <linearGradient
            id="sg_right_10_"
            gradientUnits="userSpaceOnUse"
            x1="-443.0012"
            y1="392.7758"
            x2="-437.0012"
            y2="392.7758"
            gradientTransform="matrix(-1 0 0 1 -435.0012 -387.7758)"
          >
            <stop offset="0" style="stop-color:#777C7F" />
            <stop offset="0.5" style="stop-color:#777C7F;stop-opacity:0" />
          </linearGradient>
          <rect
            id="sg_right_553_"
            x="2"
            y="2"
            class="sg-right-st5"
            width="6"
            height="6"
          />
        </g>
        <g id="sg_right_3_">
          <path
            id="sg_right_556_"
            class="sg-right-st6"
            d="M2,10c0-1.2-0.8-2-2-2h2V10z"
          />
          <path
            id="sg_right_2_"
            class="sg-right-st6"
            d="M2,0c0,1.2-0.8,2-2,2h2V0z"
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
  name: "deviceSgRightCom",
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
      if (width) {
        styles["width"] = `${width}px`;
      }
      if (height) {
        styles["height"] = `${height}px`;
      }
      if (backgroundRepeat) {
        styles["backgroundRepeat"] = backgroundRepeat;
      }
      if (backgroundSize) {
        styles["backgroundSize"] = backgroundSize;
      }
      if (borderColor) {
        styles["borderColor"] = borderColor;
      }
      if (borderStyle) {
        styles["borderStyle"] = borderStyle;
      }
      styles["borderWidth"] = `${borderWidth}px`;

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

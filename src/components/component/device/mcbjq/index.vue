// 门磁报警器
<template>
  <div class="bm-device-mcbjq-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 48 44`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
      .mcbjq-st0{fill:#B0B9C1;}
					.mcbjq-st1{fill:url(#mcbjq_2_);}
					.mcbjq-st2{fill:#DFE3E8;}
					.mcbjq-st3{fill:#99A3AA;}
					.mcbjq-st4{fill:url(#mcbjq_3_);}
					.mcbjq-st5{fill:#AFB8BC;}
					.mcbjq-st6{fill:#F2F5F9;}
      </style>
      `
        "
      ></defs>
      <path
        id="mcbjq_1505_"
        class="mcbjq-st0"
        d="M22.8,0H9.3H9.2h-6C1.5,0,0,1.5,0,3.3v4.9h9.2h0.1H26V3.3C26,1.5,24.6,0,22.8,0z"
      />
      <linearGradient
        id="mcbjq_2_"
        gradientUnits="userSpaceOnUse"
        x1="5.593969e-006"
        y1="22.4756"
        x2="9.3225"
        y2="22.4756"
      >
        <stop offset="0.6471" style="stop-color:#DFE3E8" />
        <stop offset="1" style="stop-color:#A8B2B7" />
      </linearGradient>
      <path
        id="mcbjq_1503_"
        class="mcbjq-st1"
        d="M9.3,42.5H3.3C1.5,42.5,0,41,0,39.2V5.7c0-1.8,1.5-3.3,3.3-3.3h6.1V42.5z"
      />
      <path
        id="mcbjq_1500_"
        class="mcbjq-st2"
        d="M22.8,43.9H10.7c-0.8,0-1.5-0.7-1.5-1.5V6.4c0-0.8,0.7-1.5,1.5-1.5h12.1
					c1.8,0,3.3,1.5,3.3,3.3v32.5C26,42.5,24.6,43.9,22.8,43.9z"
      />
      <ellipse
        id="mcbjq_1501_"
        class="st3"
        cx="4.4"
        cy="9.6"
        rx="1.7"
        ry="1.5"
      />
      <ellipse
        id="mcbjq_1502_"
        class="st3"
        cx="4.4"
        cy="35.9"
        rx="1.7"
        ry="1.5"
      />
      <path
        id="mcbjq_1515_"
        class="mcbjq-st0"
        d="M32.3,0l6.4,0l0.1,0l6,0C46.6,0,48,1.5,48,3.3v4.9h-9.2h-0.1H29V3.3C29,1.5,30.5,0,32.3,0z"
      />
      <linearGradient
        id="mcbjq_3_"
        gradientUnits="userSpaceOnUse"
        x1="211.3258"
        y1="22.4756"
        x2="220.6483"
        y2="22.4756"
        gradientTransform="matrix(-1 0 0 1 259.3461 0)"
      >
        <stop offset="0.6471" style="stop-color:#DFE3E8" />
        <stop offset="1" style="stop-color:#A8B2B7" />
      </linearGradient>
      <path
        id="mcbjq_1514_"
        class="mcbjq-st4"
        d="M38.7,42.5h6.1c1.8,0,3.3-1.5,3.3-3.3V5.7c0-1.8-1.5-3.3-3.3-3.3h-6.1V42.5z"
      />
      <path
        id="mcbjq_1512_"
        class="mcbjq-st2"
        d="M32.3,43.9h5.1c0.8,0,1.5-0.7,1.5-1.5V6.4c0-0.8-0.7-1.5-1.5-1.5h-5.1c-1.8,0-3.3,1.5-3.3,3.3
					v32.5C29,42.5,30.5,43.9,32.3,43.9z"
      />
      <ellipse
        id="mcbjq_1508_"
        class="mcbjq-st3"
        cx="43.6"
        cy="9.6"
        rx="1.7"
        ry="1.5"
      />
      <ellipse
        id="mcbjq_1507_"
        class="mcbjq-st3"
        cx="43.6"
        cy="35.9"
        rx="1.7"
        ry="1.5"
      />
      <ellipse
        id="mcbjq_1506_"
        class="mcbjq-st3"
        cx="17.4"
        cy="12.8"
        rx="4.4"
        ry="3.9"
      />
      <rect
        id="mcbjq_1509_"
        x="11.8"
        y="32.3"
        class="mcbjq-st5"
        width="11.5"
        height="1"
      />
      <rect
        id="mcbjq_1510_"
        x="11.8"
        y="35.3"
        class="mcbjq-st5"
        width="11.5"
        height="1"
      />
      <rect
        id="mcbjq_1511_"
        x="11.8"
        y="38.3"
        class="mcbjq-st5"
        width="11.5"
        height="1"
      />
      <ellipse
        id="mcbjq_1504_"
        class="mcbjq-st6"
        cx="17.4"
        cy="13.3"
        rx="3.9"
        ry="3.4"
      />
    </svg>
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "deviceMcbjqCom",
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
// @import (less) "../../../../assets/less/components/component/device/common.less";
</style>

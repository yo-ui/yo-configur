// 挂式空调
<template>
  <div class="bm-device-gskt-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 163 64`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
					.gskt-${info.id}-st0{fill:#D0D4D8;}
					.gskt-${info.id}-st1{fill:url(#gskt_2_);}
					.gskt-${info.id}-st2{fill:url(#gskt_3_);}
					.gskt-${info.id}-st3{fill:#FFFFFF;}
					.gskt-${info.id}-st4{fill:#AFB6BB;}
					.gskt-${info.id}-st5{fill:url(#gskt_4_);}
      </style>
      `
        "
      ></defs>
      <path
        id="gskt_976_"
        :class="`gskt-${info.id}-st0`"
        d="M155.8,63H6.2C2.8,63,0,60.2,0,56.8V18.6L4,6.2C5.3,2.9,7.8,0,11.2,0h139.6
					c3.4,0,6.1,3,7.2,6.2l4,12.4v38.1C162,60.2,159.2,63,155.8,63z"
      />
      <linearGradient
        id="gskt_2_"
        gradientUnits="userSpaceOnUse"
        x1="0.7635"
        y1="38.8724"
        x2="161.2365"
        y2="38.8724"
      >
        <stop offset="0" style="stop-color:#CDCFD1" />
        <stop offset="4.000000e-002" style="stop-color:#FFFFFF" />
        <stop offset="0.96" style="stop-color:#FFFFFF" />
        <stop offset="1" style="stop-color:#CDCFD1" />
      </linearGradient>
      <path
        id="gskt_993_"
        :class="`gskt-${info.id}-st1`"
        d="M155.7,62.1H6.3c-3.1,0-5.6-2.5-5.6-5.6V21.2c0-3.1,2.5-5.6,5.6-5.6h149.4
					c3.1,0,5.6,2.5,5.6,5.6v35.4C161.2,59.6,158.7,62.1,155.7,62.1z"
      />
      <linearGradient
        id="gskt_3_"
        gradientUnits="userSpaceOnUse"
        x1="81"
        y1="49.7628"
        x2="81"
        y2="62.1319"
      >
        <stop offset="0" style="stop-color:#CDCFD1" />
        <stop offset="8.518696e-003" style="stop-color:#CED0D2" />
        <stop offset="0.2357" style="stop-color:#E4E5E6" />
        <stop offset="0.4714" style="stop-color:#F4F4F5" />
        <stop offset="0.7196" style="stop-color:#FDFDFD" />
        <stop offset="1" style="stop-color:#FFFFFF" />
      </linearGradient>
      <path
        id="gskt_996_"
        :class="`gskt-${info.id}-st2`"
        d="M0.8,49.8v6.8c0,3.1,2.5,5.6,5.6,5.6h149.4c3.1,0,5.6-2.5,5.6-5.6v-6.8H0.8z"
      />
      <g id="gskt_997_">
        <rect
          id="gskt_990_"
          x="36.7"
          y="44.6"
          :class="`gskt-${info.id}-st3`"
          width="1.3"
          height="11.5"
        />
        <rect
          id="gskt_994_"
          x="80.4"
          y="44.6"
          :class="`gskt-${info.id}-st3`"
          width="1.3"
          height="11.5"
        />
        <rect
          id="gskt_995_"
          x="124"
          y="44.6"
          :class="`gskt-${info.id}-st3`"
          width="1.3"
          height="11.5"
        />
      </g>
      <rect
        id="gskt_998_"
        x="6.8"
        y="22"
        :class="`gskt-${info.id}-st4`"
        width="14"
        height="2"
      />
      <linearGradient
        id="gskt_4_"
        gradientUnits="userSpaceOnUse"
        x1="81"
        y1="43.8025"
        x2="81"
        y2="38.1893"
      >
        <stop offset="0" style="stop-color:#515156" />
        <stop offset="1" style="stop-color:#040000" />
      </linearGradient>
      <rect
        id="gskt_999_"
        x="72.5"
        y="37.7"
        :class="`gskt-${info.id}-st5`"
        width="17"
        height="6.4"
      />
      <polygon
        id="gskt_1006_"
        :class="`gskt-${info.id}-st4`"
        points="107.1,5 152.8,5 152.2,3 107,3 "
      />
      <polygon
        id="gskt_1009_"
        :class="`gskt-${info.id}-st4`"
        points="107.5,9 154,9 153.4,7 107.3,7 "
      />
      <polygon
        id="gskt_1010_"
        :class="`gskt-${info.id}-st4`"
        points="107.8,13 155.2,13 154.6,11 107.6,11 "
      />
      <g id="gskt_1007_">
        <polygon
          id="gskt_1012_"
          :class="`gskt-${info.id}-st4`"
          points="54.1,11 7.6,11 7,13 53.9,13 	"
        />
        <polygon
          id="gskt_1013_"
          :class="`gskt-${info.id}-st4`"
          points="58.5,13 103.3,13 103.1,11 58.6,11 	"
        />
      </g>
      <g id="gskt_1001_">
        <polygon
          id="gskt_1002_"
          :class="`gskt-${info.id}-st4`"
          points="59.1,5 102.6,5 102.4,3 59.3,3 	"
        />
        <polygon
          id="gskt_1004_"
          :class="`gskt-${info.id}-st4`"
          points="54.8,3 10,3 9.4,5 54.6,5 	"
        />
      </g>
      <g id="gskt_1003_">
        <polygon
          id="gskt_1005_"
          :class="`gskt-${info.id}-st4`"
          points="58.8,9 102.9,9 102.8,7 59,7 	"
        />
        <polygon
          id="gskt_1008_"
          :class="`gskt-${info.id}-st4`"
          points="54.4,7 8.8,7 8.2,9 54.3,9 	"
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
  name: "deviceGsktCom",
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

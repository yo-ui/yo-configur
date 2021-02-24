<template>
  <div class="bm-basic-display-com" :style="comStyle">
    <!-- <img src="/static/img/svg/display.svg" /> -->
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 89 43"
      :width="info.width"
      :height="info.height"
      style="enable-background:new 0 0 89 43;"
      xml:space="preserve"
      preserveAspectRatio="none"
    >
      <defs
        v-html="
          `<style type='text/css'>
        .display-${info.id}-st0 {
          fill: #ffffff;
        }
        .display-${info.id}-st1 {
          fill: #dfe3e8;
        }
        .display-${info.id}-st2 {
          fill: #c2c8ce;
        }
        .display-${info.id}-st3 {
          fill: url(#display_4_);
        }
        .display-${info.id}-st4 {
          fill: #9da1a5;
        }
        .display-${info.id}-st5 {
          fill: #848776;
        }
        .display-${info.id}-st6 {
          fill: #25282b;
        }
      </style>`
        "
      ></defs>
      <g>
        <rect
          id="display_656_"
          x="1"
          y="4.1"
          :class="`display-${info.id}-st0`"
          width="79.5"
          height="38"
        />
        <path
          id="display_653_"
          :class="`display-${info.id}-st1`"
          d="M81.5,43.1H0v-40h81.5V43.1z M2,41.1h77.5v-36H2V41.1z"
        />
        <polygon
          id="display_652_"
          :class="`display-${info.id}-st2`"
          points="81.5,3.1 0,3.1 8.2,0 88.7,0 	"
        />
        <linearGradient
          id="display_4_"
          gradientUnits="userSpaceOnUse"
          x1="85.1155"
          y1="43.0819"
          x2="85.1155"
          y2="0"
        >
          <stop offset="0" style="stop-color:#C2C8CE" />
          <stop offset="1" style="stop-color:#848689" />
        </linearGradient>
        <path
          id="display_1_"
          :class="`display-${info.id}-st3`"
          d="M88.7,40l-7.2,3.1v-40L88.7,0V40z"
        />
      </g>
      <g>
        <path
          id="display_10_"
          :class="`display-${info.id}-st4`"
          d="M76.5,37.1H5v-5h71.5V37.1z"
        />
      </g>
      <g>
        <g id="display_647_">
          <rect
            id="display_651_"
            x="6.5"
            y="8.5"
            :class="`display-${info.id}-st5`"
            width="69"
            height="19"
          />
          <path
            id="display_648_"
            :class="`display-${info.id}-st6`"
            d="M76.5,28.5h-71v-21h71V28.5z M7.5,26.5h67v-17h-67V26.5z"
          />
        </g>
      </g>
    </svg>
    <span ref="bmText" class="text" :style="textStyle"
      >{{ this.$toBig(info.content, info.decimal)
      }}<small :style="unitStyle">{{ info.unit || "℃" }}</small></span
    >
  </div>
</template>

<script>
import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "displayCom",
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
      showType: "canvas/getShowType"
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

      if (shadowable) {
        let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
          shadow || {};
        styles[
          "box-shadow"
        ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      }

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
    },
    textStyle() {
      let { info = {} } = this;
      let {
        color = "",
        textShadow = {},
        textShadowable = false,
        textAlign = "",
        fontFamily = "",
        fontSize = "",
        fontWeight = "",
        fontStyle = "",
        textDecoration = "",

        marginTop = 0,
        marginBottom = 0,
        marginLeft = 0,
        marginRight = 0,
        paddingTop = 0,
        paddingBottom = 0,
        paddingLeft = 0,
        paddingRight = 0
      } = info || {};
      let styles = {
        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
        padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
      };
      if (color) {
        styles["color"] = color;
      }
      if (fontSize) {
        styles["font-size"] = `${fontSize}px`;
      }
      if (fontFamily) {
        styles["font-family"] = `${fontFamily}`;
      }
      if (fontWeight) {
        styles["font-weight"] = fontWeight;
      }
      if (fontStyle) {
        styles["font-style"] = fontStyle;
      }
      if (textAlign) {
        styles["text-align"] = textAlign;
        if (textAlign == "justify") {
          styles["text-align-last"] = textAlign;
        }
      }
      if (textDecoration) {
        styles["text-decoration"] = textDecoration;
      }
      if (textShadowable) {
        let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
        styles["text-shadow"] = `${x}px ${y}px ${blur}px ${color}`;
      }
      return styles || {};
    },
    unitStyle() {
      let { info = {} } = this;
      let { unitColor = "", unitFontFamily = "", unitFontSize = "" } =
        info || {};
      let styles = {};
      if (unitColor) {
        styles["color"] = unitColor;
      }
      if (unitFontSize) {
        styles["font-size"] = `${unitFontSize}px`;
      }
      if (unitFontFamily) {
        styles["font-family"] = `${unitFontFamily}`;
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
    init() {
      let { info = {}, showType = "" } = this;
      if (showType != "edit") {
        let { id = "", bindData = {} } = info || {};
        let { devicePoint = "" } = bindData || {};
        if (!devicePoint) {
          return;
        }
        $vm.$on(`devicePointEvent_${id}`, ({ device, point = {} }) => {
          bmCommon.log("displayCom", device, point);
          let { value = "", unit = "" } = point || {};
          info.content = value;
          info.unit = unit;
        });
      }
      this.loadDeviceInfo();
    },
    loadDeviceInfo() {
      let { info = {} } = this;
      let { bindData = {} } = info || {};
      let { deviceId = "", devicePoint = "" } = bindData || {};
      if (!deviceId) {
        return;
      }
      $vm.$emit("device", {
        deviceId,
        callback: (device = {}) => {
          let { points: pointList = [] } = device || {};
          let point = pointList.find(item => {
            let { id = "" } = item || {};
            return id == devicePoint; //
          });
          if (point) {
            let { value = "", unit = "" } = point || {};
            info.content = value;
            info.unit = unit;
          }
        }
      });
    }
  },
  watch: {
    "info.bindData.devicePoint": {
      handler(newVal, oldVal) {
        this.loadDeviceInfo();
      },
      deep: true
    }
  }
};
</script>

<style lang="less">
@import (less) "../../../../assets/less/components/component/basic/display.less";
</style>

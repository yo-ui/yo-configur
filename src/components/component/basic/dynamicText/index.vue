<template>
  <div ref="bmCom" :style="comStyle">
    <span
      >{{ this.$toBig(info.content, info.decimal)
      }}<small :style="unitStyle">{{ info.unit || "" }}</small></span
    >
    <!-- ℃ -->
  </div>
</template>

<script>
import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "dynamicTextCom",
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
      let { info = {} } = this;
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
    },
    comStyle() {
      let { info = {}, gradientStyle = {} } = this;
      let {
        width = "",
        height = "",
        color = "",
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
        textShadow = {},
        textShadowable = false,
        textAlign = "",
        scale = "",
        fontFamily = "",
        fontWeight = "",
        fontStyle = "",
        textDecoration = "",
        backgroundType = "",
        fontSize = "",
        backgroundColor = "",
        backgroundImage = "",
        backgroundRepeat = "",
        backgroundSize = ""
      } = info || {};
      let styles = {
        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
        padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
      };
      if (textAlign) {
        styles["textAlign"] = textAlign;
        if (textAlign == "justify") {
          styles["text-align-last"] = textAlign;
        }
      }
      if (shadowable) {
        let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
          shadow || {};
        styles[
          "boxShadow"
        ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      }
      if (textShadowable) {
        let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
        styles["textShadow"] = `${x}px ${y}px ${blur}px ${color}`;
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
      styles[
        "borderRadius"
      ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
      styles["borderWidth"] = `${borderWidth}px`;
      if (width) {
        styles["width"] = `${width}px`;
      }
      if (height) {
        styles["height"] = `${height}px`;
      }
      if (scale) {
        (styles["transform"] = `${scale}`),
          (styles["-webkit-transform"] = `${scale}`),
          (styles["-ms-transform"] = `${scale}`),
          (styles["-o-transform"] = `${scale}`),
          (styles["-moz-transform"] = `${scale}`);
      }
      if (color) {
        styles["color"] = color;
      }
      if (fontSize) {
        styles["fontSize"] = `${fontSize}px`;
      }
      if (fontFamily) {
        styles["fontFamily"] = `${fontFamily}`;
      }
      if (fontWeight) {
        styles["fontWeight"] = fontWeight;
      }
      if (fontStyle) {
        styles["fontStyle"] = fontStyle;
      }
      if (textDecoration) {
        styles["textDecoration"] = textDecoration;
      }
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
        styles = { ...styles, ...gradientStyle };
      }
      return styles || {};
    },
    // textStyle() {
    //   let { info = {} } = this;
    //   let {
    //     color = "",
    //     textShadow = {},
    //     textShadowable = false,
    //     textAlign = "",
    //     fontFamily = "",
    //     fontSize = "",
    //     fontWeight = "",
    //     fontStyle = "",
    //     textDecoration = "",

    //     marginTop = 0,
    //     marginBottom = 0,
    //     marginLeft = 0,
    //     marginRight = 0,
    //     paddingTop = 0,
    //     paddingBottom = 0,
    //     paddingLeft = 0,
    //     paddingRight = 0
    //   } = info || {};
    //   let styles = {
    //     margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
    //     padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
    //   };
    //   if (color) {
    //     styles["color"] = color;
    //   }
    //   if (fontSize) {
    //     styles["fontSize"] = `${fontSize}px`;
    //   }
    //   if (fontFamily) {
    //     styles["fontFamily"] = `${fontFamily}`;
    //   }
    //   if (fontWeight) {
    //     styles["fontWeight"] = fontWeight;
    //   }
    //   if (fontStyle) {
    //     styles["fontStyle"] = fontStyle;
    //   }
    //   if (textAlign) {
    //     styles["textAlign"] = textAlign;
    //     if (textAlign == "justify") {
    //       styles["text-align-last"] = textAlign;
    //     }
    //   }
    //   if (textDecoration) {
    //     styles["textDecoration"] = textDecoration;
    //   }
    //   if (textShadowable) {
    //     let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
    //     styles["textShadow"] = `${x}px ${y}px ${blur}px ${color}`;
    //   }
    //   return styles || {};
    // },
    unitStyle() {
      let { info = {} } = this;
      let { unitColor = "", unitFontFamily = "", unitFontSize = "" } =
        info || {};
      let styles = {};
      if (unitColor) {
        styles["color"] = unitColor;
      }
      if (unitFontSize) {
        styles["fontSize"] = `${unitFontSize}px`;
      }
      if (unitFontFamily) {
        styles["fontFamily"] = `${unitFontFamily}`;
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
          bmCommon.log("dynamicTextCom", device, point);
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

<style></style>

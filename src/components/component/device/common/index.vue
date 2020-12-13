<template>
  <div class="img-box">
    <img :src="info.backgroundImage" :style="comStyle" />
  </div>
</template>

<script>
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "deviceCommonCom",
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
    ...mapGetters(),

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
    },
    textStyle() {
      let { info = {} } = this;
      let {
        // width = "",
        // height = "",
        color = "",
        // borderColor = "",
        // borderStyle = "",
        // borderWidth = "",
        // scale = "",
        fontFamily = "",
        fontSize = "",
        fontWeight = "",
        fontStyle = ""
        // backgroundColor = "",
        // backgroundImage = "",
        // backgroundRepeat = "",
        // backgroundSize = ""
      } = info || {};
      let styles = {};

      // if (width) {
      //   styles["width"] = `${width}px`;
      // }
      // if (height) {
      //   styles["height"] = `${height}px`;
      // }
      // if (backgroundRepeat) {
      //   styles["backgroundRepeat"] = backgroundRepeat;
      // }
      // if (backgroundSize) {
      //   styles["backgroundSize"] = backgroundSize;
      // }
      // if (borderColor) {
      //   styles["borderColor"] = borderColor;
      // }
      // if (borderStyle) {
      //   styles["borderStyle"] = borderStyle;
      // }
      // // if (borderWidth) {
      // styles["borderWidth"] = `${borderWidth}px`;
      // }
      // if (scale) {
      //   (styles["transform"] = `${scale}`),
      //     (styles["-webkit-transform"] = `${scale}`),
      //     (styles["-ms-transform"] = `${scale}`),
      //     (styles["-o-transform"] = `${scale}`),
      //     (styles["-moz-transform"] = `${scale}`);
      // }
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
      // if (backgroundColor) {
      //   styles["backgroundColor"] = backgroundColor;
      // }
      // if (backgroundImage) {
      //   styles["backgroundImage"] = `url(${this.$loadImgUrl(backgroundImage)})`;
      // }
      return styles || {};
    }
  },
  mounted() {},
  methods: {
    ...mapMutations({}),
    ...mapActions({})
    // blurEvent(e) {
    //   let { target } = e;
    //   let { info = {} } = this;
    //   let name = $(target)
    //     .text()
    //     .trim();
    //   info.name = name;
    // }
  }
};
</script>

<style lang="less">
@import (less) "../../../../assets/less/components/component/device/common.less";
</style>

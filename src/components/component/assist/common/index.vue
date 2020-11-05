<template>
  <img :src="info.backgroundImage" :style="comStyle" />
</template>

<script>
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "assistCommonCom",
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
    comStyle() {
      let { info = {} } = this;
      let {
        width = "",
        height = "",
        // color = "",
        borderColor = "",
        borderStyle = "",
        borderWidth = "",
        borderRadius = "",
        opacity = "",
        visible = true,
        flipV = false,
        flipH = false
        // fontFamily = "",
        // fontSize = "",
        // fontWeight = "",
        // fontStyle = ""
        // backgroundColor = "",
        // backgroundImage = "",
        // backgroundRepeat = "",
        // backgroundSize = ""
      } = info || {};
      let styles = {};

      // if (width) {
      styles["width"] = `${width}px`;
      // }
      // if (height) {
      styles["height"] = `${height}px`;
      // }
      // if (backgroundRepeat) {
      //   styles["backgroundRepeat"] = backgroundRepeat;
      // }
      // if (backgroundSize) {
      //   styles["backgroundSize"] = backgroundSize;
      // }
      if (borderColor) {
        styles["borderColor"] = borderColor;
      }
      if (borderStyle) {
        styles["borderStyle"] = borderStyle;
      }
      styles["borderWidth"] = `${borderWidth}px`;
      styles["opacity"] = opacity / 100;
      styles["borderRadius"] = `${borderRadius}px`;
      styles["visibility"] = `${visible ? "visible" : "hidden"}`;
      if (flipV || flipH) {
        let scale = `scale(${flipH ? -1 : 1},${flipV ? -1 : 1})`;
        (styles["transform"] = `${scale}`),
          (styles["-webkit-transform"] = `${scale}`),
          (styles["-ms-transform"] = `${scale}`),
          (styles["-o-transform"] = `${scale}`),
          (styles["-moz-transform"] = `${scale}`);
      }
      // if (color) {
      //   styles["color"] = color;
      // }
      // if (fontSize) {
      //   styles["fontSize"] = `${fontSize}px`;
      // }
      // if (fontFamily) {
      //   styles["fontFamily"] = `${fontFamily}`;
      // }
      // if (fontWeight) {
      //   styles["fontWeight"] = fontWeight;
      // }
      // if (fontStyle) {
      //   styles["fontStyle"] = fontStyle;
      // }
      // if (backgroundColor) {
      //   styles["backgroundColor"] = backgroundColor;
      // }
      // if (backgroundImage) {
      //   styles["backgroundImage"] = `url(${this.$loadImgUrl(backgroundImage)})`;
      // }
      return styles || {};
    }
  },
  mounted() {
    this.$emit("success"); //组件加载完成回调
  },
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
@import (less) "../../../../assets/less/components/component/assist/common.less";
</style>

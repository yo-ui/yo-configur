<template>
  <div
    :style="comStyle"
  >
    {{ info.name }}
  </div>
</template>

<script>
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "textCom",
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
        color = "",
        borderColor = "",
        borderStyle = "",
        borderWidth = "",
        scale = "",
        fontFamily = "",
        fontWeight = "",
        fontStyle = "",
        fontSize = "",
        backgroundColor = "",
        backgroundImage = "",
        backgroundRepeat = "",
        backgroundSize = ""
      } = info || {};
      let styles = {
        width: `${width}px`,
        height: `${height}px`
      };
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
      // if (borderWidth) {
      styles["borderWidth"] = `${borderWidth}px`;
      // }
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
        styles["fontFamily"] = `'${fontFamily}'`;
      }
      if (fontWeight) {
        styles["fontWeight"] = fontWeight;
      }
      if (fontStyle) {
        styles["fontStyle"] = fontStyle;
      }
      if (backgroundColor) {
        styles["backgroundColor"] = backgroundColor;
      }
      if (backgroundImage) {
        styles["backgroundImage"] = `url(${this.$loadImgUrl(backgroundImage)})`;
      }
      return styles || {};
    }
  },
  methods: {
    ...mapMutations({}),
  }
};
</script>

<style></style>

<template>
  <div ref="bmCom" :style="comStyle">
    {{ info.content }}
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
        borderRadius = "",
        scale = "",
        fontFamily = "",
        fontWeight = "",
        fontStyle = "",
        textDecoration = "",
        fontSize = "",
        backgroundColor = "",
        backgroundImage = "",
        backgroundRepeat = "",
        backgroundSize = ""
      } = info || {};
      let styles = {};
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
      styles["borderRadius"] = `${borderRadius}px`;
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
      if (backgroundColor) {
        styles["backgroundColor"] = backgroundColor;
      }
      if (backgroundImage) {
        styles["backgroundImage"] = `url(${this.$loadImgUrl(backgroundImage)})`;
      }
      return styles || {};
    }
  },
  mounted() {
    // this.$nextTick(() => {
    //   let bmCom = this.$refs.bmCom;
    //   let $bmCom = $(bmCom);
    //   let { info = {} } = this;
    //   let width = $bmCom.width();
    //   let height = $bmCom.height();
    //   info.originWidth = width;
    //   info.originHeight = height;
    //   if (info.scaleable) {
    //     info.width = width;
    //     info.height = height;
    //   }
    // });
    this.$emit("success"); //组件加载完成回调
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({})
  }
};
</script>

<style></style>

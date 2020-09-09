<template>
  <button
    class="btn-com"
    :style="comStyle"
    :contenteditable="info.editable"
    @blur.stop="blurEvent"
  >
    {{ info.name }}
  </button>
</template>

<script>
export default {
  name: "buttonCom",
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
    blurEvent(e) {
      let { target } = e;
      let { info = {} } = this;
      let name = $(target)
        .text()
        .trim();
      info.name = name;
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../../../../assets/less/common.less";
.btn-com {
  .bor(1px solid @grayE);
}
</style>

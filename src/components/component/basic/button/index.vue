<template>
  <button class="btn-com"
    :style="comStyle"
    :contenteditable="info.editable"
    @keyup="keyupEvent"
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
        backgroundColor = "",
        backgroundImage = ""
      } = info || {};
      let styles = {
        width: width + "px",
        height: height + "px"
      };
      if (borderColor) {
        styles["borderColor"] = borderColor;
      }
      if (color) {
        styles["color"] = color;
      }
      if (backgroundColor) {
        styles["backgroundColor"] = backgroundColor;
      }
      if (backgroundImage) {
        styles["backgroundImage"] = `url(${backgroundImage})`;
      }
      return styles || {};
    }
  },
  methods: {
    keyupEvent(e) {
      let { target } = e;
      let { info = {} } = this;
      let name = $(target).html();
      info.name = name;
    }
  }
};
</script>

<style lang="less" scoped>
  @import (reference) "./../../../../assets/less/common.less";
  .btn-com{
    .bor(1px solid @grayE);
  }
</style>

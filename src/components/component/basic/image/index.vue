<template>
  <!-- <img
      :src="info.url"
        :style="comStyle"
      /> -->
  <div class="bm-basic-image-com" :style="comStyle">
    <bm-upload
      ref="bmUpload"
      v-if="!info.backgroundImage"
      @success="successCallback"
    ></bm-upload>
  </div>
</template>

<script>
export default {
  name: "imageCom",
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
  components: {
    bmUpload: () =>
      import(
        /* webpackChunkName: "bm-component-upload" */ "@/components/common/upload.vue"
      )
  },
  computed: {
    comStyle() {
      let { info = {} } = this;
      let {
        width = "",
        height = "",
        borderColor = "",
        borderStyle = "",
        borderWidth = "",
        scale = "",
        backgroundColor = "",
        backgroundImage = "",
        backgroundRepeat = "",
        backgroundSize = ""
      } = info || {};
      let styles = {
        width: `${width}px`,
        height: `${height}px`
      };
      if (borderColor) {
        styles["borderColor"] = borderColor;
      }
      if (borderStyle) {
        styles["borderStyle"] = borderStyle;
      }
      if (borderWidth) {
        styles["borderWidth"] = `${borderWidth}px`;
      }
      if (scale) {
        (styles["transform"] = `${scale}`),
          (styles["-webkit-transform"] = `${scale}`),
          (styles["-ms-transform"] = `${scale}`),
          (styles["-o-transform"] = `${scale}`),
          (styles["-moz-transform"] = `${scale}`);
      }
      // if (color) {
      //   styles["color"] = color;
      // }
      if (backgroundColor) {
        styles["backgroundColor"] = backgroundColor;
      }
      if (backgroundImage) {
        styles["backgroundImage"] = `url(${this.$loadImgUrl(backgroundImage)})`;
      }
      if (backgroundRepeat) {
        styles["backgroundRepeat"] = backgroundRepeat;
      }
      if (backgroundSize) {
        styles["backgroundSize"] = backgroundSize;
      }
      return styles || {};
    }
  },
  methods: {
    successCallback(url) {
      let { info = {} } = this;
      info.backgroundImage = url;
    }
  }
};
</script>
<style lang="less">
@import (less) "../../../../assets/less/components/component/basic/image.less";
</style>

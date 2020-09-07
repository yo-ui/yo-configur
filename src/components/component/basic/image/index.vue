<template>
  <!-- <img
      :src="info.url"
        :style="comStyle"
      /> -->
  <div class="bm-basic-image-com" :style="comStyle">
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
  computed: {
    comStyle() {
      let { info = {} } = this;
      let {
        width = "",
        height = "",
        backgroundColor = "",
        backgroundImage = ""
      } = info || {};
      return {
        width: width + "px",
        height: height + "px",
        backgroundColor: backgroundColor,
        backgroundImage: "url(" + backgroundImage + ")"
        // color: val.color
      };
    }
  }
};
</script>
<style lang="less">
@import (less) "../../../../assets/less/components/component/basic/image.less";
</style>

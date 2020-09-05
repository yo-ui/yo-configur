<template>
  <!-- <img
      :src="info.url"
        :style="comStyle"
      /> -->
  <div :style="comStyle">
    {{comStyle}}
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

<style></style>

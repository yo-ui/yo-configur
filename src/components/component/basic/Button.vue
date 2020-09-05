<template>
  <button :style="comStyle">
    {{ info.content }}
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
      let { width = "", height = "", backgroundColor = "" } = info || {};
      return {
        width: width + "px",
        height: height + "px",
        backgroundColor: backgroundColor
        // backgroundImage: 'url(' + val.backPic + ')',
        // color: val.color
      };
    }
  }
};
</script>

<style></style>

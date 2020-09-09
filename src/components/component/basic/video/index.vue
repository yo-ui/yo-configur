<template>
  <video class="bm-basic-display-com" controls autoplay :style="comStyle">
    <source src="" />
    <!-- <img src="/static/img/configur/display.svg" />
    <span class="text" :style="textStyle">{{info.content}}</span> -->
  </video>
</template>

<script>
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "displayCom",
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
        opacity = "",
        borderWidth = "",
        borderRadius = ""
        // scale = "",
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

      if (width) {
        styles["width"] = `${width}px`;
      }
      if (height) {
        styles["height"] = `${height}px`;
      }
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
      // if (scale) {
      //   (styles["transform"] = `${scale}`),
      //     (styles["-webkit-transform"] = `${scale}`),
      //     (styles["-ms-transform"] = `${scale}`),
      //     (styles["-o-transform"] = `${scale}`),
      //     (styles["-moz-transform"] = `${scale}`);
      // }
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
@import (less) "../../../../assets/less/components/component/basic/display.less";
</style>

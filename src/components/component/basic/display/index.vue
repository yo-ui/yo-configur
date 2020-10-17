<template>
  <div class="bm-basic-display-com" :style="comStyle">
    <img src="/static/img/svg/display.svg" />
    <span ref="bmText" class="text" :style="textStyle"
      >{{ info.content }}<small>{{ info.unit }}</small></span
    >
  </div>
</template>

<script>
import bmCommon from "@/common/common";
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
    ...mapGetters({
      showType: "canvas/getShowType"
    }),

    //渐变颜色样式
    gradientStyle() {
      let { info = {} } = this;
      let { gradientStyle = {} } = info || {};
      let {
        type = "",
        angle = "",
        center = "",
        radialShape = "",
        valueList = []
      } = gradientStyle || {};
      let styles = {};
      let colors = valueList.map(item => `${item.code} ${item.value}%`);
      if (type == "linear") {
        styles.backgroundImage = `linear-gradient(${angle}deg, ${colors.join()})`;
      } else if (type == "radial") {
        styles.backgroundImage = `radial-gradient(${radialShape} at ${center}, ${colors.join()})`;
      }
      return styles;
    },
    comStyle() {
      let { info = {} } = this;
      let {
        // width = "",
        height = "",
        // color = "",
        // borderColor = "",
        // borderStyle = "",
        // borderWidth = "",
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

      // if (width) {
      //   styles["width"] = `${width}px`;
      // }
      if (height) {
        styles["height"] = `${height}px`;
      }
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
      // styles["borderWidth"] = `${borderWidth}px`;
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
    this.init();
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),
    init() {
      let { info = {}, showType = "" } = this;
      if (showType != "edit") {
        let { id = "" } = info || {};
        let { $vm } = window;
        // let { deviceId = "" } = bindData || {};
        $vm.$on(`devicePointEvent_${id}`, ({ device, point = {} }) => {
          bmCommon.log("display", device, point);
          let { value = "", unit = "" } = point || {};
          info.content = value;
          info.unit = unit;
          // info.width = $(this.$refs.bmText).width();
          this.$emit("success"); //组件加载完成回调
        });
      }
    }
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

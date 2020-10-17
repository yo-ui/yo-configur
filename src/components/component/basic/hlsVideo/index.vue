<template>
  <video
    ref="bmVideo"
    class="bm-basic-hls-video-com"
    :controls="info.controls"
    :autoplay="info.autoplay"
    :loop="info.loop"
    :muted="info.muted"
    :preload="info.preload"
    :poster="info.poster"
    :style="comStyle"
  >
    <source :src="info.src" />
  </video>
</template>

<script>
import HLS from "hls.js";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "hlsVideoCom",
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
    // //渐变颜色样式
    // gradientStyle() {
    //   let { info = {} } = this;
    //   let { gradientStyle = {} } = info || {};
    //   let {
    //     type = "",
    //     angle = "",
    //     center = "",
    //     radialShape = "",
    //     valueList = []
    //   } = gradientStyle || {};
    //   let styles = {};
    //   let colors = valueList.map(item => `${item.code} ${item.value}%`);
    //   if (type == "linear") {
    //     styles.backgroundImage = `linear-gradient(${angle}deg, ${colors.join()})`;
    //   } else if (type == "radial") {
    //     styles.backgroundImage = `radial-gradient(${radialShape} at ${center}, ${colors.join()})`;
    //   }
    //   return styles;
    // },
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
    }
  },
  mounted() {
    this.init();
    // this.$emit("success"); //组件加载完成回调
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),
    init() {
      this.$nextTick(() => {
        let video = this.$refs.bmVideo;
        let { info = {} } = this;
        if (HLS.isSupported()) {
          var hls = new HLS();
          let { src = "" } = info || {};
          hls.loadSource(src);
          hls.attachMedia(video);
          hls.on(HLS.Events.MANIFEST_PARSED, () => {
            video.play();
          });
        }
      });
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
@import (less) "../../../../assets/less/components/component/basic/video.less";
</style>

<template>
  <!-- <img
      :src="info.url"
        :style="comStyle"
      /> -->
  <div class="bm-basic-image-com" :style="comStyle">
    <!-- <bm-upload
      ref="bmUpload"
      v-if="!info.backgroundImage"
      @success="successCallback"
    ></bm-upload> -->
    <div class="image" :style="imageStyle"></div>
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
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
    ...mapGetters(),

    //渐变颜色样式
    gradientStyle() {
      return (info = {}) => {
        // let { info = {} } = this;
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
      };
    },
    comStyle() {
      let { info = {}, gradientStyle = {} } = this;
      let {
        width = "",
        height = "",
        borderColor = "",
        borderStyle = "",
        borderWidth = "",
        borderRadiusTopLeft = 0,
        borderRadiusTopRight = 0,
        borderRadiusBottomLeft = 0,
        borderRadiusBottomRight = 0,
        // scale = "",
        backgroundColor = "",
        backgroundType = "",
        backgroundImage = "",
        backgroundRepeat = "",
        backgroundSize = ""
      } = info || {};
      let styles = {};
      if (width) {
        styles["width"] = `${width}px`;
      }
      if (height) {
        styles["height"] = `${height}px`;
      }
      if (borderColor) {
        styles["borderColor"] = borderColor;
      }
      if (borderStyle) {
        styles["borderStyle"] = borderStyle;
      }
      styles["borderWidth"] = `${borderWidth}px`;
      styles[
        "borderRadius"
      ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
      if (backgroundType == "purity") {
        //纯色
        if (backgroundColor) {
          styles["backgroundColor"] = backgroundColor;
        }
        if (backgroundImage) {
          styles["backgroundImage"] = `url(${this.$loadImgUrl(
            backgroundImage
          )})`;
          if (backgroundRepeat) {
            styles["backgroundRepeat"] = backgroundRepeat;
          }
          if (backgroundSize) {
            styles["backgroundSize"] = backgroundSize;
          }
        }
      } else if (backgroundType == "gradient") {
        //渐变
        styles = { ...styles, ...gradientStyle };
      }
      return styles || {};
    },
    imageStyle() {
      let { info = {} } = this;
      let {
        width = "",
        height = "",
        // borderColor = "",
        // borderStyle = "",
        // borderWidth = "",
        borderRadiusTopLeft = 0,
        borderRadiusTopRight = 0,
        borderRadiusBottomLeft = 0,
        borderRadiusBottomRight = 0,
        // scale = "",
        content = "",
        contentRepeat = "",
        // backgroundType = "",
        // backgroundImage = "",
        // backgroundRepeat = "",
        contentSize = ""
      } = info || {};
      let styles = {};
      if (content) {
        styles["backgroundImage"] = `url(${this.$loadImgUrl(content)})`;
        if (contentRepeat) {
          styles["backgroundRepeat"] = contentRepeat;
        }
        if (contentSize) {
          styles["backgroundSize"] = contentSize;
        }
      }
      if (width) {
        styles["width"] = `${width}px`;
      }
      if (height) {
        styles["height"] = `${height}px`;
      }
      // if (borderColor) {
      //   styles["borderColor"] = borderColor;
      // }
      // if (borderStyle) {
      //   styles["borderStyle"] = borderStyle;
      // }
      // styles["borderWidth"] = `${borderWidth}px`;
      styles[
        "borderRadius"
      ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
      // if (color) {
      //   styles["color"] = color;
      // }
      // if (backgroundType == "purity") {
      //   //纯色
      //   if (backgroundColor) {
      //     styles["backgroundColor"] = backgroundColor;
      //   }
      //   if (content) {
      //     styles["content"] = `url(${this.$loadImgUrl(
      //       content
      //     )})`;
      //     if (backgroundRepeat) {
      //       styles["backgroundRepeat"] = backgroundRepeat;
      //     }
      //     if (backgroundSize) {
      //       styles["backgroundSize"] = backgroundSize;
      //     }
      //   }
      // } else if (backgroundType == "gradient") {
      //   //渐变
      //   styles = { ...styles, ...gradientStyle };
      // }
      return styles || {};
    }
  },
  methods: {
    ...mapMutations(),
    ...mapActions()
    // successCallback(url) {
    //   let { info = {} } = this;
    //   info.backgroundImage = url;
    // }
  }
};
</script>
<style lang="less">
@import (less) "../../../../assets/less/components/component/basic/image.less";
</style>

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
    // bmUpload: () =>
    //   import(
    //     /* webpackChunkName: "bm-component-upload" */ "@/components/common/upload.vue"
    //   )
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
      let { info = {} } = this;
      let {
        width = "",
        height = "",
        borderColor = "",
        borderStyle = "",
        borderWidth = "",
        borderTop = 0,
        borderBottom = 0,
        borderLeft = 0,
        borderRight = 0,
        borderRadiusTopLeft = 0,
        borderRadiusTopRight = 0,
        borderRadiusBottomLeft = 0,
        borderRadiusBottomRight = 0,
        // scale = "",
        // backgroundColor = "",
        // backgroundType = "",
        content = ""
        // backgroundRepeat = "",
        // backgroundSize = ""
      } = info || {};
      let styles = {};
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;
      if (borderTop) {
        if (borderStyle) {
          styles["borderTopStyle"] = borderStyle;
        }
        styles["borderTopWidth"] = `${borderWidth}px`;
        if (borderColor) {
          styles["borderTopColor"] = borderColor;
        }
      } else {
        styles["borderTop"] = "none";
      }
      if (borderBottom) {
        if (borderStyle) {
          styles["borderBottomStyle"] = borderStyle;
        }
        styles["borderBottomWidth"] = `${borderWidth}px`;
        if (borderColor) {
          styles["borderBottomColor"] = borderColor;
        }
      } else {
        styles["borderBottom"] = "none";
      }
      if (borderLeft) {
        if (borderStyle) {
          styles["borderLeftStyle"] = borderStyle;
        }
        styles["borderLeftWidth"] = `${borderWidth}px`;
        if (borderColor) {
          styles["borderLeftColor"] = borderColor;
        }
      } else {
        styles["borderLeft"] = "none";
      }
      if (borderRight) {
        if (borderStyle) {
          styles["borderRightStyle"] = borderStyle;
        }
        styles["borderRightWidth"] = `${borderWidth}px`;
        if (borderColor) {
          styles["borderRightColor"] = borderColor;
        }
      } else {
        styles["borderRight"] = "none";
      }
      styles[
        "borderRadius"
      ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
      if (content) {
        styles["backgroundColor"] = "transparent";
        styles["backgroundImage"] = "none";
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
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;
      styles[
        "borderRadius"
      ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
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

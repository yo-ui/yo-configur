<template>
  <div class="bm-basic-panel-com" :style="comStyle">
    <slot></slot>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "bmBasicPanelCom",
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
      let { info = {}, gradientStyle } = this;
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
        backgroundColor = "",
        backgroundType = "",
        backgroundImage = "",
        backgroundRepeat = "",
        backgroundSize = "",
        children = []
      } = info || {};
      let group1 = bmCommon.clone(children || []);
      let group2 = bmCommon.clone(children || []);
      group1.sort((a, b) => a.left - b.left);
      let max_left = Math.max(...group1.map(item => item.left + item.width));
      group2.sort((a, b) => a.top - b.top);
      let max_top = Math.max(...group2.map(item => item.top + item.height));
      let { left: minLeft = 0 } = group1[0] || {};
      let { width: maxWidth = 0, left: maxLeft = 0 } = group1[length - 1] || {};
      // let minLeft = minLeft;
      maxLeft = maxLeft + maxWidth - minLeft;
      max_left = max_left - minLeft;
      if (maxLeft < max_left) {
        maxLeft = max_left;
      }
      let { top: minTop = 0 } = group2[0] || {};
      let { height: maxHeight = 0, top: maxTop = 0 } = group2[length - 1] || {};
      // let minTop = minTop;
      maxTop = maxTop + maxHeight - minTop;
      max_top = max_top - minTop;
      if (maxTop < max_top) {
        maxTop = max_top;
      }
      width = maxLeft;
      height = maxTop;
      // left = minLeft;
      // top = minTop;
      let styles = {};
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;
      if (borderTop) {
        if (borderStyle) {
          styles["border-top-style"] = borderStyle;
        }
        styles["border-top-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-top-color"] = borderColor;
        }
      } else {
        styles["border-top"] = "none";
      }
      if (borderBottom) {
        if (borderStyle) {
          styles["border-bottom-style"] = borderStyle;
        }
        styles["border-bottom-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-bottom-color"] = borderColor;
        }
      } else {
        styles["border-bottom"] = "none";
      }
      if (borderLeft) {
        if (borderStyle) {
          styles["border-left-style"] = borderStyle;
        }
        styles["border-left-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-left-color"] = borderColor;
        }
      } else {
        styles["border-left"] = "none";
      }
      if (borderRight) {
        if (borderStyle) {
          styles["border-right-style"] = borderStyle;
        }
        styles["border-right-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-right-color"] = borderColor;
        }
      } else {
        styles["border-right"] = "none";
      }
      styles[
        "border-radius"
      ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
      if (backgroundType == "purity") {
        //纯色
        if (backgroundColor) {
          styles["background-color"] = backgroundColor;
        }
        if (backgroundImage) {
          styles["background-image"] = `url(${this.$loadImgUrl(
            backgroundImage
          )})`;
          if (backgroundRepeat) {
            styles["background-repeat"] = backgroundRepeat;
          }
          if (backgroundSize) {
            styles["background-size"] = backgroundSize;
          }
        }
      } else if (backgroundType == "gradient") {
        //渐变
        styles = { ...styles, ...gradientStyle(info) };
      }
      return styles || {};
    },
    imageStyle() {
      let { info = {}, gradientStyle } = this;
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
        content = "",
        contentRepeat = "",
        backgroundColor = "",
        backgroundType = "",
        backgroundImage = "",
        backgroundSize = "",
        backgroundRepeat = "",
        contentSize = ""
      } = info || {};
      let styles = {};
      if (content) {
        styles["background-image"] = `url(${this.$loadImgUrl(content)})`;
        if (contentRepeat) {
          styles["background-repeat"] = contentRepeat;
        }
        if (contentSize) {
          styles["background-size"] = contentSize;
        }
      }
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;
      if (borderTop) {
        if (borderStyle) {
          styles["border-top-style"] = borderStyle;
        }
        styles["border-top-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-top-color"] = borderColor;
        }
      } else {
        styles["border-top"] = "none";
      }
      if (borderBottom) {
        if (borderStyle) {
          styles["border-bottom-style"] = borderStyle;
        }
        styles["border-bottom-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-bottom-color"] = borderColor;
        }
      } else {
        styles["border-bottom"] = "none";
      }
      if (borderLeft) {
        if (borderStyle) {
          styles["border-left-style"] = borderStyle;
        }
        styles["border-left-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-left-color"] = borderColor;
        }
      } else {
        styles["border-left"] = "none";
      }
      if (borderRight) {
        if (borderStyle) {
          styles["border-right-style"] = borderStyle;
        }
        styles["border-right-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-right-color"] = borderColor;
        }
      } else {
        styles["border-right"] = "none";
      }
      styles[
        "border-radius"
      ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
      // if (color) {
      //   styles["color"] = color;
      // }

      if (backgroundRepeat) {
        styles["background-repeat"] = backgroundRepeat;
      }
      if (backgroundSize) {
        styles["background-size"] = backgroundSize;
      }
      if (backgroundType == "purity") {
        //纯色
        if (backgroundColor) {
          styles["background-color"] = backgroundColor;
        }
        if (backgroundImage) {
          styles["background-image"] = `url(${this.$loadImgUrl(
            backgroundImage
          )})`;
        }
      } else if (backgroundType == "gradient") {
        //渐变
        styles = { ...styles, ...gradientStyle(info) };
      }
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

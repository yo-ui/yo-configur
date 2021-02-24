<template>
  <div ref="bmCom" class="bm-v-scroll-text-com" :style="comStyle">
    <div :style="textStyle" ref="text" class="inner-text">
      {{ info.content }}
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "vScrollTextCom",
  data() {
    return {
      transform: "",
      transition: ""
    };
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
        marginTop = 0,
        marginBottom = 0,
        marginLeft = 0,
        marginRight = 0,
        borderTop = 0,
        borderBottom = 0,
        borderLeft = 0,
        borderRight = 0,
        paddingTop = 0,
        paddingBottom = 0,
        paddingLeft = 0,
        paddingRight = 0,
        shadow = {},
        shadowable = false,
        backgroundType = "",
        backgroundColor = "",
        backgroundImage = "",
        backgroundRepeat = "",
        backgroundSize = ""
      } = info || {};
      let styles = {
        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
        padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
      };
      if (backgroundRepeat) {
        styles["background-repeat"] = backgroundRepeat;
      }
      if (shadowable) {
        let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
          shadow || {};
        styles[
          "box-shadow"
        ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      }
      if (backgroundSize) {
        styles["background-size"] = backgroundSize;
      }
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
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;
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
        styles = { ...styles, ...gradientStyle };
      }
      return styles || {};
    },
    textStyle() {
      let { info = {}, transition = "", transform = "" } = this;
      let {
        // width = "",
        height = "",
        color = "",
        // shadow = {},
        // shadowable = false,
        textShadow = {},
        textAlign = "",
        textShadowable = false,
        fontFamily = "",
        fontWeight = "",
        fontStyle = "",
        textDecoration = "",
        fontSize = ""
      } = info || {};
      let styles = {};
      if (textAlign) {
        styles["text-align"] = textAlign;
        if (textAlign == "justify") {
          styles["text-align-last"] = textAlign;
        }
      }
      if (textShadowable) {
        let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
        styles["text-shadow"] = `${x}px ${y}px ${blur}px ${color}`;
      }
      // if (width) {
      //   styles["width"] = `${width}px`;
      // }
      if (height) {
        styles["height"] = `${height}px`;
        styles["line-height"] = `${height}px`;
      }
      if (color) {
        styles["color"] = color;
      }
      if (transition) {
        styles["transition"] = `${transition}`;
      }
      if (transform) {
        styles["transform"] = `${transform}`;
      }
      if (fontSize) {
        styles["font-size"] = `${fontSize}px`;
      }
      if (fontFamily) {
        styles["font-family"] = `${fontFamily}`;
      }
      if (fontWeight) {
        styles["font-weight"] = fontWeight;
      }
      if (fontStyle) {
        styles["font-style"] = fontStyle;
      }
      if (textDecoration) {
        styles["text-decoration"] = textDecoration;
      }
      return styles || {};
    }
  },
  mounted() {
    // this.$nextTick(() => {
    //   let bmCom = this.$refs.bmCom;
    //   let $bmCom = $(bmCom);
    //   let { info = {} } = this;
    //   let width = $bmCom.width();
    //   let height = $bmCom.height();
    //   info.originWidth = width;
    //   info.originHeight = height;
    //   if (info.scaleable) {
    //     info.width = width;
    //     info.height = height;
    //   }
    // });
    //
    this.init();
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),
    init() {
      let { info = {} } = this;
      clearTimeout(this.timeoutId);
      clearTimeout(this.scrollTimeoutId);
      clearTimeout(this.endTimeoutId);
      this.$nextTick(() => {
        let text = this.$refs.text;
        let width = text.offsetWidth;
        info.textWidth = width;
        this.scrollAction();
        // this.timeoutId=setTimeout(()=>{
        //   clearTimeout(this.timeoutId)
        //   info.transform=''
        //   this.scrollTimeoutId=setTimeout(()=>{
        //     clearTimeout(this.timeoutId)
        //   },scrollTime)
        // },stayTime)
      });
    },
    scrollAction() {
      let { info = {} } = this;
      let { stayTime = 0, scrollTime = 0, textWidth = 0, width = 0 } =
        info || {};
      this.timeoutId = setTimeout(() => {
        clearTimeout(this.timeoutId);
        this.transform = `translateX(-${textWidth - width}px)`;
        this.transition = `transform ${scrollTime}ms linear 0s`;
        this.scrollTimeoutId = setTimeout(() => {
          clearTimeout(this.scrollTimeoutId);
          this.endTimeoutId = setTimeout(() => {
            clearTimeout(this.endTimeoutId);
            this.transform = "";
            this.transition = "";
            this.scrollAction();
          }, stayTime);
        }, scrollTime);
      }, stayTime);
    }
  },
  watch: {
    "info.scrollTime"(newVal, oldVal) {
      if (newVal != oldVal) {
        this.init();
      }
    },
    "info.stayTime"(newVal, oldVal) {
      if (newVal != oldVal) {
        this.init();
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../../../../assets/less/common.less";
.bm-v-scroll-text-com {
  .oh;
  .inner-text {
    white-space: nowrap;
    .dib;
  }
}
</style>

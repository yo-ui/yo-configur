<template>
  <div class="button-tab-com" :style="comStyle">
    <!-- @blur.stop="blurEvent($event, item)" -->
    <button
      :style="btnStyle(item, index)"
      v-for="(item, index) in info.contentList"
      :key="index"
      :contenteditable="info.editable"
      @click="clickEvent(item)"
    >
      {{ item.text }}
    </button>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "buttonTabCom",
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
    ...mapGetters({}),
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
    btnStyle() {
      let { info = {}, gradientStyle = {} } = this;
      let {
        width: _width = 0,
        button = {},
        content = "",
        buttonActive = {},
        contentList = []
      } = info || {};
      let {
        width = "",
        height = "",
        color = "",
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
        paddingTop = 0,
        paddingBottom = 0,
        paddingLeft = 0,
        paddingRight = 0,
        textShadow = {},
        textShadowable = false,
        textAlign = "",
        fontFamily = "",
        backgroundType = "",
        fontSize = "",
        fontWeight = "",
        fontStyle = "",
        textDecoration = "",
        backgroundColor = "",
        backgroundImage = "",
        backgroundRepeat = "",
        backgroundSize = ""
      } = button || {};
      let { length = 0 } = contentList || [];
      // bmCommon.log(length,index);
      return (item, index) => {
        let { value = "" } = item || {};
        let styles = {
          margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
          padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
        };
        if (width) {
          styles["width"] = `${width}px`;
        }
        if (height) {
          styles["height"] = `${height}px`;
        }
        if (textAlign) {
          styles["textAlign"] = textAlign;
          if (textAlign == "justify") {
            styles["text-align-last"] = textAlign;
          }
        }
        if (backgroundRepeat) {
          styles["backgroundRepeat"] = backgroundRepeat;
        }
        if (backgroundSize) {
          styles["backgroundSize"] = backgroundSize;
        }
        if (borderColor) {
          styles["borderColor"] = borderColor;
        }
        if (borderStyle) {
          styles["borderStyle"] = borderStyle;
        }
        styles["borderWidth"] = `${borderWidth}px`;
        if (length > 1) {
          if (index == length - 1) {
            styles[
              "borderWidth"
            ] = `${borderWidth}px ${borderWidth}px ${borderWidth}px ${borderWidth}px`;
          } else {
            if (_width < 2 * width) {
              //竖向
              if (!(marginBottom > 0 || marginTop > 0)) {
                styles[
                  "borderWidth"
                ] = `${borderWidth}px ${borderWidth}px 0 ${borderWidth}px`;
              }
            } else {
              //横向
              if (!(marginRight > 0 || marginLeft > 0)) {
                styles[
                  "borderWidth"
                ] = `${borderWidth}px 0 ${borderWidth}px ${borderWidth}px`;
              }
            }
          }
        }
        styles[
          "borderRadius"
        ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
        // if (shadowable) {
        //   let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
        //     shadow || {};
        //   styles[
        //     "boxShadow"
        //   ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
        // }
        if (textShadowable) {
          let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
          styles["textShadow"] = `${x}px ${y}px ${blur}px ${color}`;
        }
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
        if (textDecoration) {
          styles["textDecoration"] = textDecoration;
        }
        if (backgroundType == "purity") {
          //纯色
          if (backgroundColor) {
            styles["backgroundColor"] = backgroundColor;
          }
          if (backgroundImage) {
            styles["backgroundImage"] = `url(${this.$loadImgUrl(
              backgroundImage
            )})`;
          }
        } else if (backgroundType == "gradient") {
          //渐变
          styles = { ...styles, ...gradientStyle(button) };
        }
        if (content == value) {
          //按钮选中的样式
          let {
            color = "",
            backgroundColor = "",
            backgroundImage = "",
            backgroundRepeat = "",
            backgroundSize = "",
            textShadowable = false,
            textShadow = {},
            fontFamily = "",
            fontSize = "",
            fontWeight = "",
            fontStyle = "",
            textDecoration = "",
            backgroundType = "", //纯色和渐变色 purity  纯色  gradients 渐变色
            borderColor = ""
          } = buttonActive || {};

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
          if (textDecoration) {
            styles["textDecoration"] = textDecoration;
          }
          if (textShadowable) {
            let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
            styles["textShadow"] = `${x}px ${y}px ${blur}px ${color}`;
          }
          if (backgroundRepeat) {
            styles["backgroundRepeat"] = backgroundRepeat;
          }
          if (backgroundSize) {
            styles["backgroundSize"] = backgroundSize;
          }
          if (borderColor) {
            styles["borderColor"] = borderColor;
          }
          if (backgroundType == "purity") {
            //纯色
            if (backgroundColor) {
              styles["backgroundColor"] = backgroundColor;
            }
            if (backgroundImage) {
              styles["backgroundImage"] = `url(${this.$loadImgUrl(
                backgroundImage
              )})`;
            }
          } else if (backgroundType == "gradient") {
            //渐变
            styles = { ...styles, ...gradientStyle(buttonActive) };
          }
        }
        return styles || {};
      };
    },
    comStyle() {
      let { info = {}, gradientStyle } = this;
      let {
        width = "",
        height = "",
        color = "",
        borderColor = "",
        borderStyle = "",
        borderWidth = "",
        borderRadius = "",
        // scale = "",
        marginTop = 0,
        marginBottom = 0,
        marginLeft = 0,
        marginRight = 0,
        paddingTop = 0,
        paddingBottom = 0,
        paddingLeft = 0,
        paddingRight = 0,
        shadow = {},
        shadowable = false,
        textShadow = {},
        textShadowable = false,
        textAlign = "",
        fontFamily = "",
        backgroundType = "",
        fontSize = "",
        fontWeight = "",
        fontStyle = "",
        textDecoration = "",
        backgroundColor = "",
        backgroundImage = "",
        backgroundRepeat = "",
        backgroundSize = ""
      } = info || {};
      let styles = {
        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
        padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
      };
      if (width) {
        styles["width"] = `${width}px`;
      }
      if (height) {
        styles["height"] = `${height}px`;
      }
      if (textAlign) {
        styles["textAlign"] = textAlign;
        if (textAlign == "justify") {
          styles["text-align-last"] = textAlign;
        }
      }
      if (backgroundRepeat) {
        styles["backgroundRepeat"] = backgroundRepeat;
      }
      if (backgroundSize) {
        styles["backgroundSize"] = backgroundSize;
      }
      if (borderColor) {
        styles["borderColor"] = borderColor;
      }
      if (borderStyle) {
        styles["borderStyle"] = borderStyle;
      }
      styles["borderWidth"] = `${borderWidth}px`;
      styles["borderRadius"] = `${borderRadius}px`;
      if (shadowable) {
        let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
          shadow || {};
        styles[
          "boxShadow"
        ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      }
      if (textShadowable) {
        let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
        styles["textShadow"] = `${x}px ${y}px ${blur}px ${color}`;
      }
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
      if (textDecoration) {
        styles["textDecoration"] = textDecoration;
      }
      if (backgroundType == "purity") {
        //纯色
        if (backgroundColor) {
          styles["backgroundColor"] = backgroundColor;
        }
        if (backgroundImage) {
          styles["backgroundImage"] = `url(${this.$loadImgUrl(
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
  mounted() {
    this.$emit("success"); //组件加载完成回调
  },
  methods: {
    ...mapMutations(),
    ...mapActions(),
    blurEvent(e, item) {
      let { target } = e;
      let name = $(target)
        .text()
        .trim();
      item.name = name;
    },
    clickEvent(item) {
      let { info = {} } = this;
      let { value = "" } = item || {};
      info.content = value;
      bmCommon.log(info.content, value);
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../../../../assets/less/common.less";
.button-tab-com {
  // .df;
  // flex-wrap: wrap;
  button {
    .fl;
    .pointer;
    box-sizing: border-box;
  }
  // .bor(1px solid @grayE);
  // // background: linear-gradient(#34a5f8, #088ef0);
  // .p(5px 20px);
  // .br(20px);
  // &:active {
  //   text-shadow: 0 1px 0 hsla(0, 0%, 100%, 0.3);
  //   opacity: 0.9;
  //   .box-s(0 1px 3px rgba(0, 0, 0, 0.2));
  //   .c(@grayC) !important;
  // }
}
</style>

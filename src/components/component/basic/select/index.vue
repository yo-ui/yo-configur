<template>
  <!-- <div  :style="selectStyle"> -->
  <!-- <el-select
    class="bm-select-com"
    v-model="info.content"
    :placeholder="$lang('请选择')"
    filterable
    :style="inputStyle"
  >
    <el-option :style="optionStyle"
      v-for="item in info.contentList"
      :key="item.value"
      :label="item.text"
      :value="item.value"
    >
    </el-option>
  </el-select> -->
  <el-popover
    class="bm-select-com"
    popper-class="bm-select-com-poper"
    ref="popover"
    :visible-arrow="false"
    placement="bottom"
    :width="`${info.width}`"
    :trigger="showType == 'edit' ? 'manual' : 'click'"
    v-model="info.select.showable"
  >
    <!-- :style="selectStyle" -->
    <div
      slot="reference"
      class="select-text"
      :style="inputStyle"
      @click="clickEvent"
    >
      <span>{{ (contentMap[info.content] || {}).text }}</span>
      <i
        :class="
          !info.select.showable ? 'el-icon-arrow-down' : 'el-icon-arrow-up'
        "
        v-if="info.arrow.status"
        :style="arrowStyle"
      ></i>
    </div>
    <!-- <div class="poper-box"> -->
    <!-- <div class="popper__arrow" :style="selectArrowStyle"></div> -->
    <ul class="float-box" :style="selectStyle">
      <li
        v-for="(item, index) in info.contentList"
        :style="optionStyle(item, index)"
        :key="index"
        @click="optionClickEvent(item, index)"
      >
        {{ item.text }}
      </li>
    </ul>
    <!-- </div> -->
  </el-popover>
  <!-- </div> -->
</template>

<script>
// import bmCommon from "@/common/common";
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "bmSelectCom",
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
      zoom: "canvas/getZoom", //放大缩小
      boxZoom: "canvas/getBoxZoom", //放大缩小
      showType: "canvas/getShowType"
    }),
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
    contentMap() {
      let { info = {} } = this;
      let { contentList = [] } = info || {};
      let map = {};
      contentList.forEach(item => {
        let { value = "" } = item || {};
        map[value] = item || {};
      });
      return map || {};
    },
    optionStyle() {
      let { info = {}, gradientStyle = {} } = this;
      let {
        // width: _width = 0,
        option = {},
        select = {},
        content = "",
        optionActive = {},
        optionHover = {},
        contentList = []
      } = info || {};
      let {
        // width = "",
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
        textIndent = "",
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
      } = option || {};
      let { length = 0 } = contentList || [];
      // bmCommon.log(length,index);
      return (item, index) => {
        let { value = "" } = item || {};
        let styles = {
          margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
          padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
        };
        // if (width) {
        //   styles["width"] = `${width}px`;
        // }
        if (height) {
          styles["height"] = `${height}px`;
          styles["lineHeight"] = `${height}px`;
        }
        if (textAlign) {
          styles["text-align"] = textAlign;
          if (textAlign == "justify") {
            styles["text-align-last"] = textAlign;
          }
        }
        if (backgroundRepeat) {
          styles["background-repeat"] = backgroundRepeat;
        }
        if (backgroundSize) {
          styles["background-size"] = backgroundSize;
        }
        if (borderColor) {
          styles["borderColor"] = borderColor;
        }
        if (borderStyle) {
          styles["borderStyle"] = borderStyle;
        }
        styles["borderWidth"] = `${borderWidth}px`;
        styles["textIndent"] = `${textIndent}px`;
        // if (length > 1) {
        //   if (index == length - 1) {
        //     styles[
        //       "borderWidth"
        //     ] = `${borderWidth}px ${borderWidth}px ${borderWidth}px ${borderWidth}px`;
        //   } else {
        //     if (_width < 2 * width) {
        let { borderStyle: _borderStyle = "" } = select || {};
        //竖向
        if (marginBottom <= 0) {
          styles[
            "borderWidth"
          ] = `${borderWidth}px ${borderWidth}px 0 ${borderWidth}px`;
          if (_borderStyle != "none") {
            if (index == 0) {
              styles["borderWidth"] = `0 0 0 0`;
            } else if (index == length - 1) {
              styles["borderWidth"] = `${borderWidth}px 0 0 0`;
            } else {
              styles["borderWidth"] = `${borderWidth}px 0 0 0`;
            }
          } else {
            if (index == 0) {
              styles[
                "borderWidth"
              ] = `${borderWidth}px ${borderWidth}px 0 ${borderWidth}px`;
            } else if (index == length - 1) {
              styles[
                "borderWidth"
              ] = `${borderWidth}px ${borderWidth}px ${borderWidth}px ${borderWidth}px`;
            }
          }
          // if(index==length-1&&_borderStyle=='none'){

          // }
        }
        //     } else {
        //       //横向
        //       if (marginRight > 0) {
        //         styles[
        //           "borderWidth"
        //         ] = `${borderWidth}px 0 ${borderWidth}px ${borderWidth}px`;
        //       }
        //     }
        //   }
        // }
        styles[
          "border-radius"
        ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
        // if (shadowable) {
        //   let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
        //     shadow || {};
        //   styles[
        //     "box-shadow"
        //   ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
        // }
        if (textShadowable) {
          let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
          styles["text-shadow"] = `${x}px ${y}px ${blur}px ${color}`;
        }
        if (color) {
          styles["color"] = color;
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
        if (backgroundType == "purity") {
          //纯色
          if (backgroundColor) {
            styles["backgroundColor"] = backgroundColor;
          }
          if (backgroundImage) {
            styles["background-image"] = `url(${this.$loadImgUrl(
              backgroundImage
            )})`;
          }
        } else if (backgroundType == "gradient") {
          //渐变
          styles = { ...styles, ...gradientStyle(option) };
        }
        if (optionHover) {
          let {
            backgroundType = "",
            backgroundColor = "",
            color = ""
            // textShadowable = false,
            // textShadow = {}
          } = optionHover || {};

          // if (textShadowable) {
          //   let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
          //   styles[
          //     "--option-hover-text-shadow"
          //   ] = `${x}px ${y}px ${blur}px ${color}`;
          // }
          if (color) {
            styles["--option-hover-color"] = color;
          }
          if (backgroundType == "purity") {
            //纯色
            if (backgroundColor) {
              styles["--option-hover-background"] = backgroundColor;
            }
            // if (backgroundImage) {
            //   styles["background-image"] = `url(${this.$loadImgUrl(
            //     backgroundImage
            //   )})`;
            // }
          } else if (backgroundType == "gradient") {
            //渐变
            let { backgroundImage = "" } = gradientStyle(optionHover);
            if (backgroundImage) {
              styles["--option-hover-background"] = backgroundImage;
            }
          }
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
          } = optionActive || {};

          if (color) {
            styles["color"] = color;
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
          if (textShadowable) {
            let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
            styles["text-shadow"] = `${x}px ${y}px ${blur}px ${color}`;
          }
          if (backgroundRepeat) {
            styles["background-repeat"] = backgroundRepeat;
          }
          if (backgroundSize) {
            styles["background-size"] = backgroundSize;
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
              styles["background-image"] = `url(${this.$loadImgUrl(
                backgroundImage
              )})`;
            }
          } else if (backgroundType == "gradient") {
            //渐变
            styles = { ...styles, ...gradientStyle(optionActive) };
          }
        }
        return styles || {};
      };
    },
    inputStyle() {
      let { info = {}, gradientStyle } = this;
      let {
        width = "",
        height = "",
        color = "",
        borderColor = "",
        borderHoverColor = "",
        borderTop = 0,
        borderBottom = 0,
        borderLeft = 0,
        borderRight = 0,
        borderStyle = "",
        borderWidth = "",
        borderRadiusTopLeft = 0,
        borderRadiusTopRight = 0,
        borderRadiusBottomLeft = 0,
        borderRadiusBottomRight = 0,
        // scale = "",
        marginTop = 0,
        marginBottom = 0,
        marginLeft = 0,
        marginRight = 0,
        paddingTop = 0,
        paddingBottom = 0,
        textIndent = 0,
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
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;
      if (textAlign) {
        styles["text-align"] = textAlign;
        if (textAlign == "justify") {
          styles["text-align-last"] = textAlign;
        }
      }
      if (backgroundRepeat) {
        styles["background-repeat"] = backgroundRepeat;
      }
      if (backgroundSize) {
        styles["background-size"] = backgroundSize;
      }
      if (borderColor) {
        styles["borderColor"] = borderColor;
      }
      if (borderHoverColor) {
        styles["--border-hover-color"] = borderHoverColor;
      }
      if (borderStyle) {
        styles["borderStyle"] = borderStyle;
      }
      styles["borderWidth"] = `${borderWidth}px`;
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
      if (shadowable) {
        let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
          shadow || {};
        styles[
          "box-shadow"
        ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      }
      if (textShadowable) {
        let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
        styles["text-shadow"] = `${x}px ${y}px ${blur}px ${color}`;
      }
      if (color) {
        styles["color"] = color;
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
      styles["textIndent"] = `${textIndent}px`;
      if (fontStyle) {
        styles["font-style"] = fontStyle;
      }
      if (textDecoration) {
        styles["text-decoration"] = textDecoration;
      }
      if (backgroundType == "purity") {
        //纯色
        if (backgroundColor) {
          styles["backgroundColor"] = backgroundColor;
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
    },
    selectStyle() {
      let { info = {}, zoom = 1, boxZoom = 1 } = this;
      let { select = {} } = info || {};
      let {
        // width = "",
        maxHeight = "",
        // color = "",
        borderColor = "",
        borderStyle = "",
        borderWidth = "",
        borderRadiusTopLeft = 0,
        borderRadiusTopRight = 0,
        borderRadiusBottomLeft = 0,
        borderRadiusBottomRight = 0,
        // // scale = "",
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
        arrowColor = ""
      } = select || {};
      let styles = {
        transformOrigin: "top",
        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
        padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
      };
      if (zoom && boxZoom) {
        styles["transform"] = `scale(${zoom * boxZoom})`;
      }
      if (maxHeight) {
        styles["maxHeight"] = `${maxHeight}px`;
      }
      styles["--background-color"] = arrowColor;
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
      if (shadowable) {
        let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
          shadow || {};
        styles[
          "box-shadow"
        ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      }
      return styles || {};
    },
    arrowStyle() {
      let { info = {} } = this;
      let { arrow = {} } = info || {};
      let {
        color = "",
        fontSize = "",
        marginRight = 0,
        fontWeight = "",
        borderRadiusTopLeft = 0,
        borderRadiusTopRight = 0,
        borderRadiusBottomLeft = 0,
        borderRadiusBottomRight = 0
      } = arrow || {};
      let styles = {
        marginRight: `${marginRight}px `
        // padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
      };
      if (fontSize) {
        styles["font-size"] = `${fontSize}px`;
      }
      if (color) {
        styles["color"] = `${color}`;
      }
      if (fontWeight) {
        styles["font-weight"] = "bold";
      }
      // if (borderTop) {
      //   if (borderStyle) {
      //     styles["border-top-style"] = borderStyle;
      //   }
      //   styles["border-top-width"] = `${borderWidth}px`;
      //   if (borderColor) {
      //     styles["border-top-color"] = borderColor;
      //   }
      // } else {
      //   styles["border-top"] = "none";
      // }
      // if (borderBottom) {
      //   if (borderStyle) {
      //     styles["border-bottom-style"] = borderStyle;
      //   }
      //   styles["border-bottom-width"] = `${borderWidth}px`;
      //   if (borderColor) {
      //     styles["border-bottom-color"] = borderColor;
      //   }
      // } else {
      //   styles["border-bottom"] = "none";
      // }
      // if (borderLeft) {
      //   if (borderStyle) {
      //     styles["border-left-style"] = borderStyle;
      //   }
      //   styles["border-left-width"] = `${borderWidth}px`;
      //   if (borderColor) {
      //     styles["border-left-color"] = borderColor;
      //   }
      // } else {
      //   styles["border-left"] = "none";
      // }
      // if (borderRight) {
      //   if (borderStyle) {
      //     styles["border-right-style"] = borderStyle;
      //   }
      //   styles["border-right-width"] = `${borderWidth}px`;
      //   if (borderColor) {
      //     styles["border-right-color"] = borderColor;
      //   }
      // } else {
      //   styles["border-right"] = "none";
      // }
      styles[
        "border-radius"
      ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
      return styles || {};
    }
  },
  mounted() {
    //
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
    clickEvent() {
      let { showType = "", info = {} } = this;
      if (showType == "edit") {
        info.select.showable = !info.select.showable;
      }
    },
    optionClickEvent(item, index) {
      let { info = {} } = this;
      let { value = "" } = item || {};
      info.content = value;
      info.select.showable = false;
      // bmCommon.log(info.content, value);
    }
  }
  // watch: {
  //   zoom(newVal, oldVal) {
  //     bmCommon.log(newVal,oldVal)
  //     if (newVal != oldVal) {
  //       this.$refs.popover.$refs.popper.style.transform = `scale(${newVal})`;
  //     }
  //   }
  // }
};
</script>

<style lang="less">
@import (reference) "./../../../../assets/less/common.less";
.bm-select-com-poper {
  .p(0);
  .m(0) !important;
  .bc(transparent);
  .box-s(none);
  .bor(none);
  // .popper__arrow{
  // }
  .float-box {
    .touch-y;
    li {
      .pointer;
      &:hover {
        background: var(--option-hover-background) !important;
        .c(var(--option-hover-color)) !important;
        // .ts(var(--option-hover-text-shadow)) !important;
      }
    }
  }
}
.bm-select-com {
  .posr;
  .select-text {
    .df;
    .pointer;
    justify-content: space-between;
    align-items: center;
    .h(100%);
    &:hover {
      .borc(var(--border-hover-color)) !important;
    }
  }
  // .float-box {
  //   .posa;
  // }
}
</style>

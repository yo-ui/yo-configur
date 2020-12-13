<template>
  <div class="bm-basic-score-board-com" :style="comStyle">
    <span
      v-for="(item, index) in info.integer"
      :key="'integer' + index"
      :style="boardStyle"
    >
      {{ integer[index] }}
    </span>
    <span :style="boardStyle" v-if="info.decimal > 0">.</span>
    <template v-if="info.decimal > 0">
      <span
        v-for="(item, index) in info.decimal"
        :key="'decimal' + index"
        :style="boardStyle"
      >
        {{ decimal[index] }}
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: "scoreBoardCom",
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
    decimal() {
      let { info = {} } = this;
      let { decimal = 0, content: value = "", decimalSeat = "0" } = info || {};
      let arr = [];
      let values = (value + "").split(".");
      let [, decimals = ""] = values || [];
      let { length = 0 } = decimals + "";
      decimals = decimals.split("");
      for (let i = 0; i < decimal - length; i++) {
        arr.push(decimalSeat);
      }
      return [...decimals, ...arr];
    },
    integer() {
      let { info = {} } = this;
      let { integer = 1, content: value = "", integerSeat = "" } = info || {};
      let arr = [];
      let values = (value + "").split(".");
      let [integers = ""] = values || [];
      let { length = 0 } = integers + "";
      integers = integers.split("");
      for (let i = 0; i < integer - length; i++) {
        arr.push(integerSeat);
      }
      return [...arr, ...integers];
    },

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
        borderRadiusTopLeft = 0,
        borderRadiusTopRight = 0,
        borderRadiusBottomLeft = 0,
        borderRadiusBottomRight = 0,
        fontFamily = "",
        color = "",
        fontWeight = "",
        fontStyle = "",
        textDecoration = "",
        fontSize = "",
        marginTop = 0,
        marginBottom = 0,
        marginLeft = 0,
        marginRight = 0,
        paddingTop = 0,
        paddingBottom = 0,
        paddingLeft = 0,
        paddingRight = 0,
        // scale = "",
        textShadow = {},
        textShadowable = false,
        backgroundColor = "",
        backgroundType = "",
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
      if (textShadowable) {
        let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
        styles["textShadow"] = `${x}px ${y}px ${blur}px ${color}`;
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
          if (backgroundRepeat) {
            styles["backgroundRepeat"] = backgroundRepeat;
          }
          if (backgroundSize) {
            styles["backgroundSize"] = backgroundSize;
          }
        }
      } else if (backgroundType == "gradient") {
        //渐变
        styles = { ...styles, ...gradientStyle(info) };
      }
      return styles || {};
    },
    boardStyle() {
      let { info = {}, gradientStyle } = this;
      let { board = {} } = info || {};
      let {
        width = "",
        height = "",
        // distance = 0,
        textAlign = "",
        // fontFamily = "",
        // color = "",
        // fontWeight = "",
        // fontStyle = "",
        // textDecoration = "",
        // fontSize = "",
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
        shadowable = false,
        shadow,
        backgroundColor = "",
        backgroundType = "",
        backgroundImage = "",
        backgroundRepeat = "",
        backgroundSize = ""
      } = board || {};
      let styles = {
        // marginRight: `${distance}px`,
        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
        padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
      };
      if (width) {
        styles["width"] = `${width}px`;
        styles["minWidth"] = `${width}px`;
      }
      if (height) {
        styles["height"] = `${height}px`;
        styles["lineHeight"] = `${height}px`;
      }
      styles[
        "borderRadius"
      ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;

      if (textAlign) {
        styles["textAlign"] = textAlign;
        if (textAlign == "justify") {
          styles["text-align-last"] = textAlign;
        }
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
      // if (textDecoration) {
      //   styles["textDecoration"] = textDecoration;
      // }
      if (shadowable) {
        let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
          shadow || {};
        styles[
          "boxShadow"
        ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
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
          if (backgroundRepeat) {
            styles["backgroundRepeat"] = backgroundRepeat;
          }
          if (backgroundSize) {
            styles["backgroundSize"] = backgroundSize;
          }
        }
      } else if (backgroundType == "gradient") {
        //渐变
        styles = { ...styles, ...gradientStyle(info.board) };
      }
      return styles || {};
    }
  },
  methods: {
    // successCallback(url) {
    //   let { info = {} } = this;
    //   info.backgroundImage = url;
    // }
  },
  mounted() {}
};
</script>
<style lang="less">
@import (less)
  "../../../../assets/less/components/component/basic/score.board.less";
</style>

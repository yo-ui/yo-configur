<template>
  <button
    class="btn-com"
    :style="comStyle"
    :contenteditable="info.editable"
    @blur.stop="blurEvent"
    @click="controlEvent"
  >
    {{ info.content }}
  </button>
</template>

<script>
const { mapActions, mapMutations, mapGetters } = Vuex;
import bmCommon from "@/common/common";
export default {
  name: "buttonCom",
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
      userInfo: "getUserInfo"
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
      let { info = {}, gradientStyle = {} } = this;
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
        // scale = "",
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
        styles = { ...styles, ...gradientStyle };
      }
      return styles || {};
    }
  },
  mounted() {},
  methods: {
    ...mapMutations(),
    ...mapActions(),
    blurEvent(e) {
      let { target } = e;
      let { info = {} } = this;
      let name = $(target)
        .text()
        .trim();
      info.name = name;
    },
    init() {
      const { info = {}, showType = "" } = this;
      if (showType !== "edit") {
        const { id = "", bindData = {} } = info || {};
        const { devicePoint = "" } = bindData || {};
        if (!devicePoint) {
          return;
        }
        $vm.$on(`devicePointEvent_${id}`, ({ point }) => {
          bmCommon.log("basicBttonCom", point);
          // let { pointList = [] } = device || {};
          // let point = pointList.find(item => {
          //   let { point: id = "" } = item || {};
          //   return id === pointCode; // SwSts  开关状态
          // });
          if (point) {
            const { value = "" } = point || {};
            info.pointValue = value;
          }
        });
      }
      this.loadDeviceInfo();
    },
    loadDeviceInfo() {
      const { info = {} } = this;
      const { bindData = {} } = info || {};
      const { deviceId = "", devicePoint = "" } = bindData || {};
      if (!deviceId) {
        return;
      }
      // devicePoint = pointCode;
      $vm.$emit("device", {
        deviceId,
        callback: (device = {}) => {
          const { points: pointList = [] } = device || {};
          const point = pointList.find(item => {
            const { id = "" } = item || {};
            return id === devicePoint; //
          });
          if (point) {
            const { value = "" } = point || {};
            info.pointValue = value;
          }
        }
      });
    },

    controlEvent() {
      const { info = {} } = this;
      const { bindData = {}, pointValue: value = "" } = info || {};
      const { deviceId = "", devicePoint = "" } = bindData || {};
      if (!deviceId) {
        return;
      }
      const point = devicePoint;
      $vm.$emit("control", {
        deviceId,
        point,
        value,
        callback: flag => {
          // if (flag) {
          //   this.$$msgSuccess("指令发送成功");
          // } else {
          //   this.$$msgError("指令发送失败");
          // }
        }
      });
    }
    // clickEvent() {
    //   let { info = {}, userInfo = {} } = this;
    //   let { bindData = {} } = info || {};
    //   let { comId = "", content = "" } = bindData || {};
    //   if (comId) {
    //     let com = document.getElementById(`box_${comId}`);
    //     let vm = com.__vue__;
    //     let { info: _info = {} } = vm || {};
    //     let { token = "" } = userInfo || {};
    //     _info.content = this.$linkUrl(content, { "x-access-token": token });
    //   }
    // }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../../../../assets/less/common.less";
.btn-com {
  .bor(1px solid @grayE);
  // background: linear-gradient(#34a5f8, #088ef0);
  .p(5px 20px);
  .br(20px);
  &:active {
    text-shadow: 0 1px 0 hsla(0, 0%, 100%, 0.3);
    opacity: 0.9;
    .box-s(0 1px 3px rgba(0, 0, 0, 0.2));
    .c(@grayC) !important;
  }
}
</style>

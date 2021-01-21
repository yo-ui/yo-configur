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

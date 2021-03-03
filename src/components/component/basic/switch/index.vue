<template>
  <div
    class="bm-basic-switch-com"
    :style="comStyle"
    :active-color="info.activeColor"
    :inactive-color="info.inactiveColor"
    @click="controlEvent"
  >
    <span
      v-if="info.content"
      class="btn-text btn-open-text"
      :style="openTextStyle"
      >{{ info.openText }}</span
    >
    <span v-else class="btn-text btn-close-text" :style="closeTextStyle">{{
      info.closeText
    }}</span>
    <span
      v-if="info.content"
      class="btn-slider btn-open-slider"
      :style="openSliderStyle"
    ></span>
    <span
      v-else
      class="btn-slider btn-close-slider"
      :style="closeSliderStyle"
    ></span>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
const { mapActions, mapMutations, mapGetters } = Vuex;
const pointCode = "SwSts";
export default {
  name: "bmSwitchCom",
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
      showType: "canvas/getShowType" //当前显示类型
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
    openSliderStyle() {
      let { info = {} } = this;
      let {
        height = "",
        openSliderColor,
        sliderBorderColor = "",
        sliderBorderStyle = "",
        sliderBorderWidth = ""
      } = info || {};
      let styles = {};
      if (height) {
        let border = height * 0.2;
        styles["height"] = `${height - border - sliderBorderWidth}px`;
        styles["width"] = `${height - border - sliderBorderWidth}px`;
        styles["border-radius"] = `${height / 2}px`;
      }
      if (openSliderColor) {
        styles["background-color"] = openSliderColor;
      }
      if (sliderBorderColor) {
        styles["border-color"] = sliderBorderColor;
      }
      if (sliderBorderStyle) {
        styles["border-style"] = sliderBorderStyle;
      }
      styles["border-width"] = `${sliderBorderWidth}px`;
      return styles;
    },
    closeSliderStyle() {
      let { info = {} } = this;
      let {
        height = "",
        closeSliderColor = "",
        sliderBorderColor = "",
        sliderBorderStyle = "",
        sliderBorderWidth = ""
      } = info || {};
      let styles = {};
      if (height) {
        let border = height * 0.2;
        styles["height"] = `${height - border - sliderBorderWidth}px`;
        styles["width"] = `${height - border - sliderBorderWidth}px`;
        styles["border-radius"] = `${height / 2}px`;
      }
      if (closeSliderColor) {
        styles["background-color"] = closeSliderColor;
      }
      if (sliderBorderColor) {
        styles["border-color"] = sliderBorderColor;
      }
      if (sliderBorderStyle) {
        styles["border-style"] = sliderBorderStyle;
      }
      styles["border-width"] = `${sliderBorderWidth}px`;
      return styles;
    },
    closeTextStyle() {
      let { info = {} } = this;
      let { closeColor = "" } = info || {};
      let styles = {};
      if (closeColor) {
        styles["color"] = closeColor;
      }
      return styles;
    },
    openTextStyle() {
      let { info = {} } = this;
      let { openColor = "" } = info || {};
      let styles = {};
      if (openColor) {
        styles["color"] = openColor;
      }
      return styles;
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
        content = false,
        activeColor = "",
        inactiveColor = "",
        borderRadiusTopLeft = 0,
        borderRadiusTopRight = 0,
        borderRadiusBottomLeft = 0,
        borderRadiusBottomRight = 0,
        backgroundType = "",
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
      if (textAlign) {
        styles["text-align"] = textAlign;
        if (textAlign == "justify") {
          styles["text-align-last"] = textAlign;
        }
      }
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
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;
      if (backgroundRepeat) {
        styles["background-repeat"] = backgroundRepeat;
      }
      if (backgroundSize) {
        styles["background-size"] = backgroundSize;
      }
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;
      styles["border-radius"] = `${height / 2}px`;
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
      styles["background-color"] = content ? activeColor : inactiveColor;
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
    }
  },
  // created() {
  //   let { info = {} } = this;
  //   info.dataType = "device";
  //   this.setActiveCom(info);
  // },
  mounted() {
    let { info = {} } = this;
    // bmCommon.log("kg mounted=", info.content);
    let { content = "" } = info || {};
    if (content === "") {
      info.content = false;
    }
    this.init();
  },
  methods: {
    ...mapMutations({
      // setActiveCom: "canvas/setActiveCom" //设置当前选中组件
    }),
    ...mapActions({}),
    controlEvent() {
      let { info = {} } = this;
      let { content = false, bindData = {} } = info || {};
      let { deviceId = "" } = bindData || {};
      if (!deviceId) {
        info.content = !content;
        return;
      }
      let point = pointCode;
      let value = !content ? 1 : 0;
      $vm.$emit("control", {
        deviceId,
        point,
        value,
        callback: flag => {
          if (flag) {
            info.content = !content;
          } else {
            info.content = content; //如果取消则重置结果
          }
        }
      });
    },
    init() {
      let { info = {}, showType = "" } = this;
      if (showType != "edit") {
        let { id = "", bindData = {} } = info || {};
        let { devicePoint = "" } = bindData || {};
        if (!devicePoint) {
          return;
        }
        $vm.$on(`devicePointEvent_${id}`, ({ point }) => {
          bmCommon.log("deviceSwitchCom", point);
          if (point) {
            let { value = "" } = point || {};
            info.content = value == 1 ? true : false;
          }
        });
      }
      this.loadDeviceInfo();
    },
    loadDeviceInfo() {
      let { info = {} } = this;
      let { bindData = {} } = info || {};
      let { deviceId = "", devicePoint = "" } = bindData || {};
      if (!deviceId) {
        return;
      }
      $vm.$emit("device", {
        deviceId,
        callback: (device = {}) => {
          let { points: pointList = [] } = device || {};
          let point = pointList.find(item => {
            let { id = "" } = item || {};
            return id == devicePoint; //
          });
          if (point) {
            let { value = "" } = point || {};
            info.content = value == 1 ? true : false;
          }
        }
      });
    }
  },
  watch: {
    "info.bindData.devicePoint": {
      handler(newVal, oldVal) {
        this.loadDeviceInfo();
      },
      deep: true
    }
  }
};
</script>

<style lang="less">
@import (reference) "./../../../../assets/less/common.less";
.bm-basic-switch-com {
  .posr;
  .pointer;
  .btn-text {
    .posa;
    top: 50%;
    .tranf(translate(0, -50%));
  }
  .btn-close-text {
    right: 10%;
  }
  .btn-open-text {
    left: 10%;
  }
  .btn-slider {
    .posa;
    top: 50%;
    .br(50%);
    .tranf(translate(0, -50%));
  }
  .btn-close-slider {
    left: 4%;
  }
  .btn-open-slider {
    right: 4%;
  }
}
</style>

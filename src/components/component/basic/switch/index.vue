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
// eslint-disable-next-line no-undef
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
        styles["borderRadius"] = `${height / 2}px`;
      }
      if (openSliderColor) {
        styles["backgroundColor"] = openSliderColor;
      }
      if (sliderBorderColor) {
        styles["borderColor"] = sliderBorderColor;
      }
      if (sliderBorderStyle) {
        styles["borderStyle"] = sliderBorderStyle;
      }
      styles["borderWidth"] = `${sliderBorderWidth}px`;
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
        styles["borderRadius"] = `${height / 2}px`;
      }
      if (closeSliderColor) {
        styles["backgroundColor"] = closeSliderColor;
      }
      if (sliderBorderColor) {
        styles["borderColor"] = sliderBorderColor;
      }
      if (sliderBorderStyle) {
        styles["borderStyle"] = sliderBorderStyle;
      }
      styles["borderWidth"] = `${sliderBorderWidth}px`;
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
        styles["textAlign"] = textAlign;
        if (textAlign == "justify") {
          styles["text-align-last"] = textAlign;
        }
      }
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
      if (width) {
        styles["width"] = `${width}px`;
      }
      if (height) {
        styles["height"] = `${height}px`;
      }
      if (backgroundRepeat) {
        styles["backgroundRepeat"] = backgroundRepeat;
      }
      if (backgroundSize) {
        styles["backgroundSize"] = backgroundSize;
      }
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
      styles["borderRadius"] = `${height / 2}px`;
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
      styles[
        "borderRadius"
      ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
      styles["backgroundColor"] = content ? activeColor : inactiveColor;
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

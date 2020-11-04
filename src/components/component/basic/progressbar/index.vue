<template>
  <div class="bm-basic-progressbar-com" :style="comStyle" @click="controlEvent">
    <div class="background" :style="backgroundStyle">
      <div class="foreground" :style="foregroundStyle">
        <span v-if="info.showTag" class="text" :style="textStyle"
          >{{ $toBig(info.content, 0)
          }}<template v-if="info.showPercent">%</template>
        </span>
        <span class="slider" :style="sliderStyle"></span>
        <i
          v-if="info.showTag"
          class="tag el-icon-caret-top"
          :style="tagStyle"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
const pointCode = "SwSts";
export default {
  name: "bmProgressbarCom",
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
    foregroundStyle() {
      let { info = {} } = this;
      let {
        lineWidth = "",
        progressForegroundColor = "",
        sliderBackgroundColor = "#fff",
        gradientValue = 0,
        start = "",
        end = "",
        content = ""
      } = info || {};
      let styles = {};
      if (lineWidth) {
        // let border = height * 0.2;
        styles["height"] = `${lineWidth}px`;
        // styles["width"] = `${height - border - sliderBorderWidth}px`;
        styles["borderRadius"] = `${lineWidth / 2}px`;
      }
      styles["width"] = `${this.$toBig(
        ((content - start) / (end - start)) * 100,
        0
      )}%`;
      if (progressForegroundColor) {
        styles["backgroundColor"] = progressForegroundColor;
        let colors = [
          `${progressForegroundColor} 0%`,
          `${sliderBackgroundColor} ${(100 - gradientValue) * 10}%`
        ];
        styles.backgroundImage = `linear-gradient(90deg, ${colors.join()})`;
      }
      // if (sliderBorderColor) {
      //   styles["borderColor"] = sliderBorderColor;
      // }
      // if (sliderBorderStyle) {
      //   styles["borderStyle"] = sliderBorderStyle;
      // }
      // styles["borderWidth"] = `${sliderBorderWidth}px`;
      return styles;
    },
    backgroundStyle() {
      let { info = {} } = this;
      let {
        lineWidth = "",
        progressBackgroundColor = ""
        // sliderBorderColor = "",
        // sliderBorderStyle = "",
        // sliderBorderWidth = ""
      } = info || {};
      let styles = {};
      if (lineWidth) {
        styles["height"] = `${lineWidth}px`;
        // styles["width"] = `${height - border - sliderBorderWidth}px`;
        styles["borderRadius"] = `${lineWidth / 2}px`;
      }
      if (progressBackgroundColor) {
        styles["backgroundColor"] = progressBackgroundColor;
      }
      // if (sliderBorderColor) {
      //   styles["borderColor"] = sliderBorderColor;
      // }
      // if (sliderBorderStyle) {
      //   styles["borderStyle"] = sliderBorderStyle;
      // }
      // styles["borderWidth"] = `${sliderBorderWidth}px`;
      return styles;
    },
    tagStyle() {
      let { info = {} } = this;
      let { progressForegroundColor = "", lineWidth = "" } = info || {};
      let styles = {};
      if (progressForegroundColor) {
        styles["color"] = progressForegroundColor;
        styles["fontSize"] = `${lineWidth}px`;
      }
      let margin = lineWidth * 0.2;
      styles["right"] = `${margin}px`;
      return styles;
    },
    //滑块样式
    sliderStyle() {
      let { info = {} } = this;
      let { sliderBackgroundColor = "", lineWidth = "" } = info || {};
      let styles = {};
      if (sliderBackgroundColor) {
        styles["backgroundColor"] = sliderBackgroundColor;
      }
      if (lineWidth) {
        let margin = lineWidth * 0.2;
        styles["width"] = `${lineWidth - margin}px`;
        styles["height"] = `${lineWidth - margin}px`;
        styles["right"] = `${margin}px`;
        styles[
          "boxShadow"
        ] = `0px 0px ${lineWidth}px 5px ${sliderBackgroundColor}`;
      }
      return styles;
    },
    textStyle() {
      let { info = {} } = this;
      let { openColor = "", lineWidth = "" } = info || {};
      let styles = {};
      if (openColor) {
        styles["color"] = openColor;
      }
      let margin = lineWidth * 0.2;
      styles["right"] = `${margin}px`;
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
        content = false,
        activeColor = "",
        inactiveColor = "",
        borderRadius = "",
        backgroundType = "",
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
        // textAlign = "",
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
      // if (textAlign) {
      //   styles["textAlign"] = textAlign;
      //   if (textAlign == "justify") {
      //     styles["text-align-last"] = textAlign;
      //   }
      // }
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
      if (borderColor) {
        styles["borderColor"] = borderColor;
      }
      if (borderStyle) {
        styles["borderStyle"] = borderStyle;
      }
      styles["borderWidth"] = `${borderWidth}px`;
      styles["borderRadius"] = `${borderRadius}px`;
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
  methods: {
    ...mapMutations({}),
    ...mapActions({}),
    controlEvent() {
      let { info = {} } = this;
      let { content = false, bindData = {} } = info || {};
      info.content = !content;
      let { deviceId = "" } = bindData || {};
      if (!deviceId) {
        return;
      }
      let point = pointCode;
      let value = !content ? 1 : 0;
      $vm.$emit("control", {
        deviceId,
        point,
        value,
        callback: flag => {
          if (!flag) {
            info.content = content; //如果取消则重置结果
          }
        }
      });
    },
    init() {
      let { info = {}, showType = "" } = this;
      if (showType != "edit") {
        let { id = "" } = info || {};
        let { $vm } = window;
        // let { deviceId = "" } = bindData || {};
        $vm.$on(`devicePointEvent_${id}`, ({ device }) => {
          bmCommon.log("deviceKgCom", device);
          let { pointList = [] } = device || {};
          let point = pointList.find(item => {
            let { point: id = "" } = item || {};
            return id == pointCode; // SwSts  开关状态
          });
          if (point) {
            let { value = "" } = point || {};
            info.content = value == 1 ? true : false;
            // this.pointValue = parseInt(Math.random() * 3);
          }
          // let { value = "", unit = "",id='' } = point || {};
          // info.content = value;
          // info.unit = unit;
          // info.width = $(this.$refs.bmText).width();
          // this.$emit("success"); //组件加载完成回调
        });
      }
    }
  }
};
</script>

<style lang="less">
@import (reference) "./../../../../assets/less/common.less";
.bm-basic-progressbar-com {
  // .posr;
  // .pointer;
  .background {
    .posr;
    top: 50%;
    .tranf(translate(0, -50%));
    .foreground {
      .posa;
      left: 0;
      top: 0;
      .slider {
        .posa;
        right: 0;
        top: 50%;
        .tranf(translate(0, -50%));
        .br(50%);
      }
      .text {
        .posa;
        right: 0;
        .tranf(translate(25%, 0));
        bottom: 100%;
      }
      .tag {
        .posa;
        right: 0;
        .tranf(translate(25%, 0));
        top: 80%;
      }
    }
  }
}
</style>

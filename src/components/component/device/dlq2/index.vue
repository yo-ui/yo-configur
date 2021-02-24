// 断路器1
<template>
  <div class="bm-device-dlq2-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 25 40`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
	.dlq2-${info.id}-st1{display:inline;fill:${info.color};}
	.dlq2-${info.id}-st2{fill:${info.color};}
      </style>
      `
        "
      ></defs>
      <g id="图层_1" :class="`dlq2-${info.id}-st0`" v-if="info.content == 1">
        <rect
          x="5.7"
          y="21.6"
          transform="matrix(0.5524 -0.8335 0.8335 0.5524 -10.9379 24.7727)"
          :class="`dlq2-${info.id}-st1`"
          width="23.9"
          height="2"
        />
        <rect x="10.5" :class="`dlq2-${info.id}-st1`" width="2" height="7" />
        <rect
          x="10.5"
          y="30.8"
          :class="`dlq2-${info.id}-st1`"
          width="2"
          height="9.2"
        />
        <rect
          x="10.7"
          y="3.9"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -3.0551 10.7303)"
          :class="`dlq2-${info.id}-st1`"
          width="1.5"
          height="10.2"
        />
        <rect
          x="6.3"
          y="8.3"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -3.0551 10.7303)"
          :class="`dlq2-${info.id}-st1`"
          width="10.2"
          height="1.5"
        />
      </g>
      <g id="图层_1_x5F_复制" v-if="info.content == 0">
        <rect x="10.5" :class="`dlq2-${info.id}-st2`" width="2" height="7" />
        <rect
          x="10.5"
          y="11"
          :class="`dlq2-${info.id}-st2`"
          width="2"
          height="29"
        />
        <rect
          x="10.7"
          y="3.9"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -3.0551 10.7303)"
          :class="`dlq2-${info.id}-st2`"
          width="1.5"
          height="10.2"
        />
        <rect
          x="6.3"
          y="8.3"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -3.0551 10.7303)"
          :class="`dlq2-${info.id}-st2`"
          width="10.2"
          height="1.5"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "deviceDlq2Com",
  data() {
    return {
      pointValue: "" // expr:'SwSts',stop:0,start:1,alarm:2
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

    comStyle() {
      let { info = {}, gradientStyle } = this;
      let {
        width = "",
        height = "",
        // color = "",
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
      if (shadowable) {
        let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
          shadow || {};
        styles[
          "box-shadow"
        ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
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
        }
      } else if (backgroundType == "gradient") {
        //渐变
        styles = { ...styles, ...gradientStyle(info) };
      }
      return styles || {};
    }
    // contentColor() {
    //   let { info = {} } = this;
    //   let { contentList = [], content = "" } = info || {};
    //   let obj = contentList.find(item => item.value == content);
    //   let { color = "" } = obj || {};
    //   return color;
    // }
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),

    init() {
      let { info = {}, showType = "" } = this;
      if (showType != "edit") {
        let { id = "", bindData = {} } = info || {};
        let { devicePoint = "" } = bindData || {};
        if (!devicePoint) {
          return;
        }
        $vm.$on(`devicePointEvent_${id}`, ({ point }) => {
          bmCommon.log("deviceDlq2Com", point);
          if (point) {
            let { value = "" } = point || {};
            // let item = contentList.find(item => item.value == value);
            // if (item) {
            //   info.content = item.value;
            // }
            info.content = value;
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
            // let item = contentList.find(item => item.value == value);
            // if (item) {
            //   info.content = item.value;
            // }
            info.content = value;
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
<style lang="less" scoped>
// @import (reference) "./../../../../assets/less/common.less";
@import (less) "../../../../assets/less/components/component/device/common.less";
</style>

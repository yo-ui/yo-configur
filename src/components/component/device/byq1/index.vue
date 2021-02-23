// 变压器1
<template>
  <div class="bm-device-byq1-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 25 44`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
	.byq1-${info.id}-st0{fill:${info.color};}
      </style>
      `
        "
      ></defs>
      <path
        :class="`byq1-${info.id}-st0`"
        d="M12.5,25C5.6,25,0,19.4,0,12.5S5.6,0,12.5,0S25,5.6,25,12.5S19.4,25,12.5,25z M12.5,2C6.7,2,2,6.7,2,12.5
	C2,18.3,6.7,23,12.5,23C18.3,23,23,18.3,23,12.5C23,6.7,18.3,2,12.5,2z"
      />
      <path
        :class="`byq1-${info.id}-st0`"
        d="M21.2,18H3.8l8.7-14.7L21.2,18z M7.3,16h10.4l-5.2-8.8L7.3,16z"
      />
      <polygon
        :class="`byq1-${info.id}-st0`"
        points="12.5,34.4 4.8,26.4 6.3,25.1 12.5,31.6 18.8,25.1 20.2,26.4 "
      />
      <rect
        x="11.5"
        y="33"
        :class="`byq1-${info.id}-st0`"
        width="2"
        height="8"
      />
      <path
        :class="`byq1-${info.id}-st0`"
        d="M12.5,44C5.6,44,0,38.4,0,31.5S5.6,19,12.5,19S25,24.6,25,31.5S19.4,44,12.5,44z M12.5,21C6.7,21,2,25.7,2,31.5
	C2,37.3,6.7,42,12.5,42C18.3,42,23,37.3,23,31.5C23,25.7,18.3,21,12.5,21z"
      />
      <polygon
        :class="`byq1-${info.id}-st0`"
        points="12.5,34.4 4.8,26.4 6.3,25.1 12.5,31.6 18.8,25.1 20.2,26.4 "
      />
      <rect
        x="11.5"
        y="33"
        :class="`byq1-${info.id}-st0`"
        width="2"
        height="8"
      />
    </svg>
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;

export default {
  name: "deviceByq1Com",
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
    this.init();
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),

    init() {
      // let { info = {}, showType = "" } = this;
      // if (showType != "edit") {
      //   let { id = "", bindData = {} } = info || {};
      //   let { deviceId = "" } = bindData || {};
      //   if (!deviceId) {
      //     return;
      //   }
      //   $vm.$on(`devicePointEvent_${id}`, ({ device }) => {
      //     bmCommon.log("deviceByqCom", device);
      //     let { pointList = [] } = device || {};
      //     let point = pointList.find(item => {
      //       let { point: id = "" } = item || {};
      //       return id == pointCode; // SwSts  开关状态
      //     });
      //     if (point) {
      //       let { value = "" } = point || {};
      //       this.pointValue = value;
      //     }
      //   });
      // }
      // this.loadDeviceInfo();
    }
    // loadDeviceInfo() {
    //   let { info = {} } = this;
    //   let { bindData = {} } = info || {};
    //   let { deviceId = "", devicePoint = "" } = bindData || {};
    //   if (!deviceId) {
    //     return;
    //   }
    //   devicePoint = pointCode;
    //   $vm.$emit("device", {
    //     deviceId,
    //     callback: (device = {}) => {
    //       let { points: pointList = [] } = device || {};
    //       let point = pointList.find(item => {
    //         let { id = "" } = item || {};
    //         return id == devicePoint; //
    //       });
    //       if (point) {
    //         let { value = "" } = point || {};
    //         info.content = value == 1 ? true : false;
    //       }
    //     }
    //   });
    // }
  },
  watch: {
    //   "info.bindData.devicePoint": {
    //     handler(newVal, oldVal) {
    //       this.loadDeviceInfo();
    //     },
    //     deep: true
    //   }
  }
};
</script>
<style lang="less" scoped>
// @import (reference) "./../../../../assets/less/common.less";
</style>

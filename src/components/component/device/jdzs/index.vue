// 接地指示
<template>
  <div class="bm-device-jdzs-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 16 31`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
	.jdzs-${info.id}-st0{fill:${info.color};}
      </style>
      `
        "
      ></defs>
      <path
        :class="`jdzs-${info.id}-st0`"
        d="M16,31H0V0h16V31z M2,29h12V2H2V29z"
      />
      <path
        :class="`jdzs-${info.id}-st0`"
        d="M7.7,24.8L2.7,7h10.1L7.7,24.8z M5.3,9l2.4,8.4L10.1,9H5.3z"
      />
      <rect x="7" y="1" :class="`jdzs-${info.id}-st0`" width="2" height="6" />
    </svg>
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "deviceJdzsCom",
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
      //     bmCommon.log("deviceDbCom", device);
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
    //         this.pointValue = value;
    //       }
    //     }
    //   });
    // }
  },
  watch: {
    // "info.bindData.devicePoint": {
    //   handler(newVal, oldVal) {
    //     this.loadDeviceInfo();
    //   },
    //   deep: true
    // }
  }
};
</script>
<style lang="less" scoped>
// @import (reference) "./../../../../assets/less/common.less";
@import (less) "../../../../assets/less/components/component/device/common.less";
</style>

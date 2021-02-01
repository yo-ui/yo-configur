// 电流互感器1
<template>
  <div class="bm-device-dlhgq1-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 13 17`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
	.dlhgq1-${info.id}-st0{fill:${info.color};}
      </style>
      `
        "
      ></defs>
      <path
        :class="`dlhgq1-${info.id}-st0`"
        d="M4.5,13C2,13,0,11,0,8.5S2,4,4.5,4S9,6,9,8.5S7,13,4.5,13z M4.5,6C3.1,6,2,7.1,2,8.5C2,9.9,3.1,11,4.5,11
	C5.9,11,7,9.9,7,8.5C7,7.1,5.9,6,4.5,6z"
      />
      <rect
        x="4"
        y="0"
        :class="`dlhgq1-${info.id}-st0`"
        width="1"
        height="17"
      />
      <rect
        x="10"
        y="5"
        :class="`dlhgq1-${info.id}-st0`"
        width="1"
        height="7"
      />
      <rect
        x="12"
        y="5"
        :class="`dlhgq1-${info.id}-st0`"
        width="1"
        height="7"
      />
      <rect x="8" y="8" :class="`dlhgq1-${info.id}-st0`" width="5" height="1" />
    </svg>
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "deviceDlhgq1Com",
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
          "boxShadow"
        ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      }
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;
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

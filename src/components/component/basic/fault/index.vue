<template>
  <div class="bm-basic-fault-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 46 26`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
       	.fault-${info.id}-st0{display:none;}
	.fault-${info.id}-st1{display:inline;fill:url(#fault_${info.id}_SVGID_1_);}
	.fault-${info.id}-st2{display:inline;fill:url(#fault_${info.id}_SVGID_2_);}
	.fault-${info.id}-st3{display:inline;}
	.fault-${info.id}-st4{fill:#FFFFFF;}
	.fault-${info.id}-st5{fill:url(#fault_${info.id}_SVGID_3_);}
	.fault-${info.id}-st6{fill:url(#fault_${info.id}_SVGID_4_);}
      </style>
      `
        "
      ></defs>
      <g id="图层_1" v-if="info.content">
        <linearGradient
          :id="`fault_${info.id}_SVGID_1_`"
          gradientUnits="userSpaceOnUse"
          x1="23"
          y1="26"
          x2="23"
          y2="-9.094947e-13"
        >
          <stop offset="0" style="stop-color:#E6E6E6" />
          <stop offset="1" style="stop-color:#B3B3B3" />
        </linearGradient>
        <path
          :class="`fault-${info.id}-st1`"
          d="M43,26H3c-1.7,0-3-1.3-3-3V3c0-1.7,1.3-3,3-3h40c1.7,0,3,1.3,3,3v20C46,24.7,44.7,26,43,26z"
        />
        <linearGradient
          :id="`fault_${info.id}_SVGID_2_`"
          gradientUnits="userSpaceOnUse"
          x1="23"
          y1="24"
          x2="23"
          y2="2"
        >
          <stop offset="0" style="stop-color:#945300" />
          <stop offset="1" style="stop-color:#E98800" />
        </linearGradient>
        <path
          :class="`fault-${info.id}-st2`"
          d="M41,24H5c-1.7,0-3-1.3-3-3V5c0-1.7,1.3-3,3-3h36c1.7,0,3,1.3,3,3v16C44,22.7,42.7,24,41,24z"
        />
        <g :class="`fault-${info.id}-st3`">
          <path
            :class="`fault-${info.id}-st4`"
            d="M11.3,8.3V5.9h1.2v2.4h2.3v1.2h-2.3v2.7h1.8v5.4c0.6-0.4,1.1-0.8,1.6-1.2c0.5-0.4,0.9-0.8,1.2-1.2
			c0,0,0,0,0,0c-0.3-0.5-0.6-1.1-0.9-1.7s-0.5-1.2-0.6-1.9c-0.1,0.2-0.2,0.3-0.3,0.5c-0.1,0.2-0.2,0.3-0.3,0.5l-0.9-0.7
			c0.3-0.4,0.6-0.9,0.9-1.4s0.5-1,0.7-1.5s0.4-1,0.6-1.5s0.3-1,0.4-1.4l1.2,0.3c-0.1,0.4-0.2,0.7-0.3,1c-0.1,0.3-0.2,0.7-0.3,1h4.5
			v1.2h-1.2c-0.3,2.2-0.9,4-1.7,5.4l-0.2,0.3c0.4,0.5,0.9,1,1.5,1.5c0.6,0.5,1.2,0.9,1.8,1.4l-0.9,1.2c-1.4-1-2.4-2-3.3-3
			c-0.4,0.5-1,1-1.6,1.5s-1.3,1-2,1.5l-0.7-1H9.5v-6h1.9V9.5H9V8.3H11.3z M10.6,17h2.6v-3.6h-2.6V17z M16.7,9.3
			c0,0.1-0.1,0.2-0.1,0.3c0,0.1-0.1,0.2-0.1,0.3c0.1,0.8,0.3,1.5,0.5,2.2c0.2,0.7,0.5,1.3,0.9,1.9c0.7-1.3,1.2-2.8,1.4-4.7H16.7z"
          />
          <path
            :class="`fault-${info.id}-st4`"
            d="M27.2,6.8v1.1C27.1,8.5,27,9,26.8,9.5s-0.3,1-0.5,1.5c0.2,0.3,0.3,0.6,0.5,0.8s0.2,0.5,0.3,0.8
			s0.1,0.5,0.2,0.8s0.1,0.5,0.1,0.8c0,0.4,0,0.7-0.1,1c0,0.3-0.1,0.5-0.2,0.6c-0.1,0.2-0.2,0.3-0.4,0.4c-0.2,0.1-0.4,0.1-0.6,0.2
			c-0.1,0-0.3,0-0.4,0c-0.2,0-0.3,0-0.5,0l-0.2-1.1c0.2,0,0.5,0,0.7,0c0.2,0,0.3,0,0.4,0s0.2-0.1,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.3
			c0-0.2,0-0.4,0-0.6c0-0.4-0.1-0.9-0.2-1.4c-0.2-0.5-0.4-1-0.8-1.5c0.2-0.5,0.4-1.1,0.6-1.7s0.3-1.1,0.4-1.7h-1.6v11.2h-1V6.8H27.2
			z M30.8,16.4v-1H28v-4.3h6.7v4.3h-2.8v1h3.7v1h-3.7v1.7h-1.2v-1.7h-3.9v-1H30.8z M31.6,5.9c0,0.1,0.1,0.3,0.2,0.4s0.1,0.4,0.2,0.5
			l0.1,0.4h3.1v0.9h-1.9l0.5,0.2c-0.1,0.1-0.1,0.3-0.2,0.4s-0.2,0.3-0.3,0.5c0,0,0,0-0.1,0.1h2.4v0.9h-8.4V9.4h2.2L29.3,9
			c-0.1-0.2-0.2-0.3-0.2-0.4c-0.1-0.1-0.1-0.2-0.2-0.3l0.5-0.3h-1.5V7.2h3.1c0,0,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2
			c-0.1-0.2-0.1-0.3-0.2-0.5c-0.1-0.1-0.1-0.3-0.1-0.4L31.6,5.9z M29.1,12.8h4.6V12h-4.6V12.8z M33.6,14.6v-0.9h-4.6v0.9H33.6z
			 M30.3,9.4H32c0.1-0.1,0.3-0.3,0.4-0.6c0.1-0.1,0.2-0.3,0.2-0.4c0.1-0.1,0.1-0.2,0.2-0.3H30c0.1,0.2,0.3,0.4,0.4,0.6
			c0.1,0.2,0.2,0.4,0.3,0.6L30.3,9.4z"
          />
        </g>
      </g>
      <g id="图层_2" v-else>
        <linearGradient
          :id="`fault_${info.id}_SVGID_3_`"
          gradientUnits="userSpaceOnUse"
          x1="23"
          y1="26"
          x2="23"
          y2="-9.094947e-13"
        >
          <stop offset="0" style="stop-color:#E6E6E6" />
          <stop offset="1" style="stop-color:#B3B3B3" />
        </linearGradient>
        <path
          :class="`fault-${info.id}-st5`"
          d="M43,26H3c-1.7,0-3-1.3-3-3V3c0-1.7,1.3-3,3-3h40c1.7,0,3,1.3,3,3v20C46,24.7,44.7,26,43,26z"
        />
        <linearGradient
          :id="`fault_${info.id}_SVGID_4_`"
          gradientUnits="userSpaceOnUse"
          x1="23"
          y1="24"
          x2="23"
          y2="2"
        >
          <stop offset="0" style="stop-color:#3B7F00" />
          <stop offset="1" style="stop-color:#5DAA00" />
        </linearGradient>
        <path
          :class="`fault-${info.id}-st6`"
          d="M41,24H5c-1.7,0-3-1.3-3-3V5c0-1.7,1.3-3,3-3h36c1.7,0,3,1.3,3,3v16C44,22.7,42.7,24,41,24z"
        />
        <g>
          <path
            :class="`fault-${info.id}-st4`"
            d="M21.2,6.9v1.3h-4.7v3.3h4.2v1.3h-4.2v4.1h5.2v1.3H8.9v-1.3h2.2v-7h1.2v7h3V8.1H9.6V6.9H21.2z"
          />
          <path
            :class="`fault-${info.id}-st4`"
            d="M25.7,5.9c0.3,0.3,0.5,0.6,0.8,0.9s0.5,0.6,0.8,1L26.9,8h1.8V5.8h1.2V8h1.8l-0.5-0.4c0.3-0.2,0.6-0.5,0.9-0.8
			s0.6-0.6,0.9-1l0.9,0.7c-0.2,0.2-0.4,0.5-0.7,0.8c-0.3,0.3-0.5,0.5-0.8,0.7H35v2.8h-1.1V9.1h-9.2v1.8h-1.1V8H26
			c-0.2-0.3-0.4-0.6-0.6-0.8C25.2,7,25,6.7,24.8,6.5L25.7,5.9z M33.4,10.1v3h-3.5v1h4.5v2.1c0,0.4,0,0.7-0.1,0.9
			c0,0.2-0.1,0.4-0.2,0.6c-0.1,0.1-0.3,0.3-0.5,0.3c-0.2,0.1-0.5,0.1-0.8,0.2c-0.2,0-0.5,0-0.7,0.1c-0.3,0-0.5,0-0.7,0L31.3,17
			c0.2,0,0.4,0,0.6,0c0.2,0,0.4,0,0.5,0c0.2,0,0.4,0,0.5,0c0.1,0,0.2-0.1,0.3-0.2c0.1-0.1,0.1-0.2,0.1-0.3c0-0.2,0-0.4,0-0.6v-0.7
			h-3.3V19h-1.2v-3.8h-3.3v3h-1.1v-4.1h4.5v-1h-3.5v-3H33.4z M26.3,12.1h6V11h-6V12.1z"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "bmBasicFaultCom",
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
        backgroundType = "",
        backgroundColor = "",
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
        backgroundImage = "",
        backgroundRepeat = "",
        backgroundSize = ""
      } = info || {};
      let styles = {
        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
        padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
      };
      // if (textAlign) {
      //   styles["text-align"] = textAlign;
      //   if (textAlign == "justify") {
      //     styles["text-align-last"] = textAlign;
      //   }
      // }
      if (shadowable) {
        let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
          shadow || {};
        styles[
          "box-shadow"
        ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      }
      // if (textShadowable) {
      //   let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
      //   styles["text-shadow"] = `${x}px ${y}px ${blur}px ${color}`;
      // }
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
    // controlEvent() {
    //   let { info = {} } = this;
    //   let { content = false, bindData = {} } = info || {};
    //   let { deviceId = "" } = bindData || {};
    //   if (!deviceId) {
    //     info.content = !content;
    //     return;
    //   }
    //   let point = pointCode;
    //   let value = !content ? 1 : 0;
    //   $vm.$emit("control", {
    //     deviceId,
    //     point,
    //     value,
    //     callback: flag => {
    //       if (flag) {
    //         info.content = !content;
    //       } else {
    //         info.content = content; //如果取消则重置结果
    //       }
    //     }
    //   });
    // },
    init() {
      let { info = {}, showType = "" } = this;
      if (showType != "edit") {
        let { id = "", bindData = {} } = info || {};
        let { devicePoint = "" } = bindData || {};
        if (!devicePoint) {
          return;
        }
        $vm.$on(`devicePointEvent_${id}`, ({ point }) => {
          bmCommon.log("deviceFaultCom", point);
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
// @import (reference) "./../../../../assets/less/common.less";
</style>

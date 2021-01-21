<template>
  <div class="bm-basic-wkq-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 73 65`"
      :width="info.width"
      :height="info.height"
      preserveAspectRatio="none"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
	.wkq-${info.id}-st0{fill:#D8D9D9;}
	.wkq-${info.id}-st1{fill:url(#wkq_${info.id}_SVGID_1_);}
	.wkq-${info.id}-st2{fill:#FFFFFF;}
	.wkq-${info.id}-st3{fill:url(#wkq_${info.id}_SVGID_2_);}
	.wkq-${info.id}-st4{fill:#E8E8E8;}
	.wkq-${info.id}-st5{fill:url(#wkq_${info.id}_SVGID_3_);}
	.wkq-${info.id}-st6{fill:url(#wkq_${info.id}_SVGID_4_);}
	.wkq-${info.id}-st7{font-family:'OPPOSans-M';}
	.wkq-${info.id}-st8{font-size:10px;}
	.wkq-${info.id}-st9{font-family:'OPPOSans-H';}
	.wkq-${info.id}-st10{font-size:19px;}
      </style>
      `
        "
      ></defs>
      <g id="图层_1" v-if="info.content">
        <path
          :class="`wkq-${info.id}-st0`"
          d="M73,60H0V3c0-1.7,1.3-3,3-3h67c1.7,0,3,1.3,3,3V60z"
        />
        <linearGradient
          :id="`wkq_${info.id}_SVGID_3_`"
          gradientUnits="userSpaceOnUse"
          x1="36.5"
          y1="65"
          x2="36.5"
          y2="5"
        >
          <stop offset="0" style="stop-color:#D8D9D9" />
          <stop offset="1" style="stop-color:#B1B1B2" />
        </linearGradient>
        <path
          :class="`wkq-${info.id}-st5`"
          d="M70,65H3c-1.7,0-3-1.3-3-3V8c0-1.7,1.3-3,3-3h67c1.7,0,3,1.3,3,3v54C73,63.7,71.7,65,70,65z"
        />
        <path
          :class="`wkq-${info.id}-st2`"
          d="M66,54H7c-1.7,0-3-1.3-3-3V12c0-0.6,0.4-1,1-1h61c1.7,0,3,1.3,3,3v37C69,52.7,67.7,54,66,54z"
        />
        <linearGradient
          :id="`wkq_${info.id}_SVGID_4_`"
          gradientUnits="userSpaceOnUse"
          x1="36.5"
          y1="52"
          x2="36.5"
          y2="9"
        >
          <stop offset="0" style="stop-color:#0084E9" />
          <stop offset="1" style="stop-color:#0052AA" />
        </linearGradient>
        <path
          :class="`wkq-${info.id}-st6`"
          d="M66,52H7c-1.7,0-3-1.3-3-3V10c0-0.6,0.4-1,1-1h61c1.7,0,3,1.3,3,3v37C69,50.7,67.7,52,66,52z"
        />
        <g>
          <rect
            x="8"
            y="57"
            :class="`wkq-${info.id}-st2`"
            width="9"
            height="4"
          />
          <rect
            x="8"
            y="58"
            :class="`wkq-${info.id}-st4`"
            width="9"
            height="4"
          />
        </g>
        <g>
          <rect
            x="24"
            y="57"
            :class="`wkq-${info.id}-st2`"
            width="9"
            height="4"
          />
          <rect
            x="24"
            y="58"
            :class="`wkq-${info.id}-st4`"
            width="9"
            height="4"
          />
        </g>
        <g>
          <rect
            x="40"
            y="57"
            :class="`wkq-${info.id}-st2`"
            width="9"
            height="4"
          />
          <rect
            x="40"
            y="58"
            :class="`wkq-${info.id}-st4`"
            width="9"
            height="4"
          />
        </g>
        <g>
          <rect
            x="56"
            y="57"
            :class="`wkq-${info.id}-st2`"
            width="9"
            height="4"
          />
          <rect
            x="56"
            y="58"
            :class="`wkq-${info.id}-st4`"
            width="9"
            height="4"
          />
        </g>
      </g>
      <g id="图层_3" v-else>
        <path
          :class="`wkq-${info.id}-st0`"
          d="M73,60H0V3c0-1.7,1.3-3,3-3h67c1.7,0,3,1.3,3,3V60z"
        />
        <linearGradient
          :id="`wkq_${info.id}_SVGID_1_`"
          gradientUnits="userSpaceOnUse"
          x1="36.5"
          y1="65"
          x2="36.5"
          y2="5"
        >
          <stop offset="0" style="stop-color:#D8D9D9" />
          <stop offset="1" style="stop-color:#B1B1B2" />
        </linearGradient>
        <path
          :class="`wkq-${info.id}-st1`"
          d="M70,65H3c-1.7,0-3-1.3-3-3V8c0-1.7,1.3-3,3-3h67c1.7,0,3,1.3,3,3v54C73,63.7,71.7,65,70,65z"
        />
        <path
          :class="`wkq-${info.id}-st2`"
          d="M66,54H7c-1.7,0-3-1.3-3-3V12c0-0.6,0.4-1,1-1h61c1.7,0,3,1.3,3,3v37C69,52.7,67.7,54,66,54z"
        />
        <linearGradient
          :id="`wkq_${info.id}_SVGID_2_`"
          gradientUnits="userSpaceOnUse"
          x1="36.5"
          y1="52"
          x2="36.5"
          y2="9"
        >
          <stop offset="0" style="stop-color:#929CAD" />
          <stop offset="1" style="stop-color:#697284" />
        </linearGradient>
        <path
          :class="`wkq-${info.id}-st3`"
          d="M66,52H7c-1.7,0-3-1.3-3-3V10c0-0.6,0.4-1,1-1h61c1.7,0,3,1.3,3,3v37C69,50.7,67.7,52,66,52z"
        />
        <g>
          <rect
            x="8"
            y="57"
            :class="`wkq-${info.id}-st2`"
            width="9"
            height="4"
          />
          <rect
            x="8"
            y="58"
            :class="`wkq-${info.id}-st4`"
            width="9"
            height="4"
          />
        </g>
        <g>
          <rect
            x="24"
            y="57"
            :class="`wkq-${info.id}-st2`"
            width="9"
            height="4"
          />
          <rect
            x="24"
            y="58"
            :class="`wkq-${info.id}-st4`"
            width="9"
            height="4"
          />
        </g>
        <g>
          <rect
            x="40"
            y="57"
            :class="`wkq-${info.id}-st2`"
            width="9"
            height="4"
          />
          <rect
            x="40"
            y="58"
            :class="`wkq-${info.id}-st4`"
            width="9"
            height="4"
          />
        </g>
        <g>
          <rect
            x="56"
            y="57"
            :class="`wkq-${info.id}-st2`"
            width="9"
            height="4"
          />
          <rect
            x="56"
            y="58"
            :class="`wkq-${info.id}-st4`"
            width="9"
            height="4"
          />
        </g>
      </g>
      <g id="图层_2">
        <text
          transform="matrix(1 0 0 1 10 22)"
          :style="descrStyle"
          :class="`wkq-${info.id}-st2 wkq-${info.id}-st7 wkq-${info.id}-st8`"
        >
          {{
            info.descrStyle.showCode
              ? devicePoint
                ? point.id || point.point || ""
                : "Temp"
              : $ellipsis(
                  devicePoint ? point.name || point.descr || "" : "温度",
                  info.descrStyle.formatNum,
                  0,
                  "..."
                )
          }}
        </text>
        <text
          transform="matrix(1 0 0 1 15 44)"
          :class="`wkq-${info.id}-st2 wkq-${info.id}-st9 wkq-${info.id}-st10`"
          :style="valueStyle"
        >
          {{
            info.content
              ? $format(
                  devicePoint ? point.value : 26.5,
                  info.valueStyle.decimail
                )
              : "--"
          }}
        </text>
        <text
          transform="matrix(1 0 0 1 54 22)"
          :style="unitStyle"
          :class="`wkq-${info.id}-st2 wkq-${info.id}-st7 wkq-${info.id}-st8`"
        >
          {{ devicePoint ? point.unit : "℃" }}
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
const pointCode = "SwSts";
export default {
  name: "bmBasicWkqCom",
  data() {
    return {
      point: {}
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
    devicePoint() {
      let { info = {} } = this;
      let { bindData = {} } = info || {};
      let { devicePoint = "" } = bindData || {};
      return devicePoint || "";
    },

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
    descrStyle() {
      let { info = {} } = this;
      let { descrStyle = {} } = info || {};
      let { color = "", left = "", top = "", fontSize = "", fontFamily = "" } =
        descrStyle || {};
      let styles = {
        transform: `matrix(1, 0, 0 ,1 ,${left},${top})`
      };
      if (color) {
        styles["fill"] = color;
      }
      if (fontSize) {
        styles["fontSize"] = `${fontSize}px`;
      }
      if (fontFamily) {
        styles["fontFamily"] = fontFamily;
      }
      return styles || {};
    },
    valueStyle() {
      let { info = {} } = this;
      let { valueStyle = {} } = info || {};
      let { color = "", left = "", top = "", fontSize = "", fontFamily = "" } =
        valueStyle || {};
      let styles = { transform: `matrix(1, 0, 0 ,1 ,${left},${top})` };
      if (color) {
        styles["fill"] = color;
      }
      if (fontSize) {
        styles["fontSize"] = `${fontSize}px`;
      }
      if (fontFamily) {
        styles["fontFamily"] = fontFamily;
      }
      return styles || {};
    },
    unitStyle() {
      let { info = {} } = this;
      let { unitStyle = {} } = info || {};
      let { color = "", left = "", top = "", fontSize = "", fontFamily = "" } =
        unitStyle || {};
      let styles = { transform: `matrix(1, 0, 0 ,1 ,${left},${top})` };
      if (color) {
        styles["fill"] = color;
      }
      if (fontSize) {
        styles["fontSize"] = `${fontSize}px`;
      }
      if (fontFamily) {
        styles["fontFamily"] = fontFamily;
      }
      return styles || {};
    },
    comStyle() {
      let { info = {}, gradientStyle } = this;
      let {
        width = "",
        height = "",
        borderColor = "",
        borderStyle = "",
        borderWidth = "",
        borderRadiusTopLeft = 0,
        borderRadiusTopRight = 0,
        borderRadiusBottomLeft = 0,
        borderRadiusBottomRight = 0,
        backgroundType = "",
        backgroundColor = "",
        backgroundImage = "",
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
        $vm.$on(`devicePointEvent_${id}`, ({ device, point }) => {
          bmCommon.log("deviceWkqCom", device);
          let { pointList = [] } = device || {};
          let { descr = "", point: id = "" } = point || {};
          this.point = { ...(point || {}), name: descr, point: id };
          let _point = pointList.find(item => {
            let { point: id = "" } = item || {};
            return id == pointCode; // SwSts  开关状态
          });
          if (_point) {
            let { value = "" } = _point || {};
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
          pointList.forEach(item => {
            let { id = "", value = "" } = item || {};
            if (devicePoint == id) {
              this.point = item || {};
            } else if (id == pointCode) {
              info.content = value == 1 ? true : false;
            }
          });
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
// .bm-basic-switch-com {
//   .posr;
//   .pointer;
//   .btn-text {
//     .posa;
//     top: 50%;
//     .tranf(translate(0, -50%));
//   }
//   .btn-close-text {
//     right: 10%;
//   }
//   .btn-open-text {
//     left: 10%;
//   }
//   .btn-slider {
//     .posa;
//     top: 50%;
//     .br(50%);
//     .tranf(translate(0, -50%));
//   }
//   .btn-close-slider {
//     left: 4%;
//   }
//   .btn-open-slider {
//     right: 4%;
//   }
// }
</style>

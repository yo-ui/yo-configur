// 灯管
<template>
  <div class="bm-device-dengg-com" :style="comStyle" @click="controlEvent">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 164 30"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>                       
                .dengg-${info.id}-st0{fill:#98A1A8;}
                .dengg-${info.id}-st1{fill:#C2C8CE;}
                .dengg-${info.id}-st2{fill:#DFE3E8;}
                .dengg-${info.id}-st3{fill:url(#dengg_16_);}
                .dengg-${info.id}-st4{fill:url(#dengg_17_);}
                .dengg-${info.id}-st5{fill:url(#dengg_18_);}
                .dengg-${info.id}-st6{fill:url(#dengg_19_);}
                .dengg-${info.id}-st7{fill:url(#dengg_20_);}
      </style>
      `
        "
      ></defs>
      <g>
        <g id="dengg_12_">
          <polygon
            id="dengg_15_"
            :class="`dengg-${info.id}-st0`"
            points="6.68,8.67 15.58,1.46 15.58,15.42 7.64,31.09 		"
          />
          <polygon
            id="dengg_14_"
            :class="`dengg-${info.id}-st1`"
            points="7.64,15.49 3.82,19.37 0,15.49 8.54,1.46 15.58,1.46 		"
          />
          <rect
            id="dengg_13_"
            x="0"
            y="15.49"
            :class="`dengg-${info.id}-st2`"
            width="7.64"
            height="15.59"
          />
        </g>
        <linearGradient
          id="dengg_19_"
          gradientUnits="userSpaceOnUse"
          x1="84.58"
          y1="16.4783"
          x2="84.58"
          y2="6.4783"
        >
          <stop offset="0" style="stop-color:#828282" />
          <stop offset="0.5561" style="stop-color:#C2C2C2" />
          <stop offset="1" style="stop-color:#7A7A7A" />
        </linearGradient>
        <path
          id="dengg_11_"
          :class="`dengg-${info.id}-st6`"
          d="M154.72,6.48H14.44c-1.4,0-2.54,2.24-2.54,5s1.14,5,2.54,5h140.28c1.4,0,2.54-2.24,2.54-5
                  S156.12,6.48,154.72,6.48z"
        />
        <linearGradient
          id="dengg_20_"
          gradientUnits="userSpaceOnUse"
          x1="81.3582"
          y1="24.959"
          x2="81.3582"
          y2="13.7458"
        >
          <stop offset="0" style="stop-color:#828282" />
          <stop offset="0.5561" style="stop-color:#C2C2C2" />
          <stop offset="1" style="stop-color:#7A7A7A" />
        </linearGradient>
        <path
          id="dengg_9_"
          :class="`dengg-${info.id}-st7`"
          d="M151.83,13.75H10.89c-1.34,0-2.42,2.51-2.42,5.61s1.08,5.61,2.42,5.61h140.93
                  c1.34,0,2.42-2.51,2.42-5.61S153.16,13.75,151.83,13.75z"
        />
        <g id="dengg_5_">
          <polygon
            id="dengg_8_"
            :class="`dengg-${info.id}-st0`"
            points="154.68,8.67 163.58,1.46 163.58,15.42 155.64,31.09 		"
          />
          <polygon
            id="dengg_7_"
            :class="`dengg-${info.id}-st1`"
            points="155.64,15.49 151.82,19.37 148,15.49 156.54,1.46 163.58,1.46 		"
          />
          <rect
            id="dengg_6_"
            x="148"
            y="15.49"
            :class="`dengg-${info.id}-st2`"
            width="7.64"
            height="15.59"
          />
        </g>
      </g>
      <g class="SVG_ani" v-if="info.content">
        <g id="dengg_1416_">
          <polygon
            id="dengg_1419_"
            :class="`dengg-${info.id}-st0`"
            points="6.68,8.67 15.58,1.46 15.58,15.42 7.64,31.09 		"
          />
          <polygon
            id="dengg_1418_"
            :class="`dengg-${info.id}-st1`"
            points="7.64,15.49 3.82,19.37 0,15.49 8.54,1.46 15.58,1.46 		"
          />
          <rect
            id="dengg_1417_"
            x="0"
            y="15.49"
            :class="`dengg-${info.id}-st2`"
            width="7.64"
            height="15.59"
          />
        </g>
        <linearGradient
          id="dengg_16_"
          gradientUnits="userSpaceOnUse"
          x1="84.58"
          y1="16.4783"
          x2="84.58"
          y2="6.4783"
        >
          <stop offset="0" style="stop-color:#B6DEFF" />
          <stop offset="0.5561" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#B6DEFF" />
        </linearGradient>
        <path
          id="dengg_1411_"
          :class="`dengg-${info.id}-st3`"
          d="M154.72,6.48H14.44c-1.4,0-2.54,2.24-2.54,5s1.14,5,2.54,5h140.28c1.4,0,2.54-2.24,2.54-5
                  S156.12,6.48,154.72,6.48z"
        />

        <radialGradient
          id="dengg_17_"
          cx="74.2881"
          cy="-1150.5645"
          r="61.9705"
          gradientTransform="matrix(1.161 0 0 0.3685 -4.9993 446.8132)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#B6DEFF;stop-opacity:0" />
        </radialGradient>
        <ellipse
          id="dengg_1408_"
          :class="`dengg-${info.id}-st4`"
          cx="81.25"
          cy="22.84"
          rx="71.95"
          ry="22.84"
        />
        <linearGradient
          id="dengg_18_"
          gradientUnits="userSpaceOnUse"
          x1="81.3582"
          y1="24.959"
          x2="81.3582"
          y2="13.7458"
        >
          <stop offset="0" style="stop-color:#B6DEFF" />
          <stop offset="0.5561" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#B6DEFF" />
        </linearGradient>
        <path
          id="dengg_1410_"
          :class="`dengg-${info.id}-st5`"
          d="M151.83,13.75H10.89c-1.34,0-2.42,2.51-2.42,5.61s1.08,5.61,2.42,5.61h140.93
                  c1.34,0,2.42-2.51,2.42-5.61S153.16,13.75,151.83,13.75z"
        />
        <g id="dengg_1_">
          <polygon
            id="dengg_4_"
            :class="`dengg-${info.id}-st0`"
            points="154.68,8.67 163.58,1.46 163.58,15.42 155.64,31.09 		"
          />
          <polygon
            id="dengg_3_"
            :class="`dengg-${info.id}-st1`"
            points="155.64,15.49 151.82,19.37 148,15.49 156.54,1.46 163.58,1.46 		"
          />
          <rect
            id="dengg_2_"
            x="148"
            y="15.49"
            :class="`dengg-${info.id}-st2`"
            width="7.64"
            height="15.59"
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
let pointCode = "SwSts";
export default {
  name: "deviceDenggCom",
  data() {
    return {
      // pointValue: "0" // expr:'SwSts',stop:0,start:1,alarm:2
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
    let { info = {} } = this;
    // bmCommon.log("dengg mounted=", info.content);
    let { content = "" } = info || {};
    if (content === "") {
      info.content = false;
    }
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
          bmCommon.log("deviceDenggCom", point);
          // let { pointList = [] } = device || {};
          // let point = pointList.find(item => {
          //   let { point: id = "" } = item || {};
          //   return id == pointCode; // SwSts  开关状态
          // });
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
      // devicePoint = pointCode;
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
    },
    controlEvent() {
      let { info = {} } = this;
      let { bindData = {}, content = false } = info;
      let { deviceId = "", devicePoint: point = "" } = bindData || {};
      if (!deviceId) {
        info.content = !content;
        return;
      }
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
</style>

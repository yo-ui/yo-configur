// 组合式热量表
<template>
  <div class="bm-device-zhsrlb-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 82 68`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
					.zhsrlb-${info.id}-st0{fill:url(#zhsrlb_3_);}
					.zhsrlb-${info.id}-st1{fill:url(#zhsrlb_4_);}
					.zhsrlb-${info.id}-st2{fill:url(#zhsrlb_5_);}
					.zhsrlb-${info.id}-st3{fill:url(#zhsrlb_6_);}
					.zhsrlb-${info.id}-st4{fill:#B6BCC1;}
					.zhsrlb-${info.id}-st5{fill:#DFE3E8;}
					.zhsrlb-${info.id}-st6{fill:#77A09F;}
					.zhsrlb-${info.id}-st7{fill:#5C7775;}
					.zhsrlb-${info.id}-st8{fill:#2C3F99;}
					.zhsrlb-${info.id}-st9{fill:#A6D1CE;}
					.zhsrlb-${info.id}-st10{fill:#25282B;}
					.zhsrlb-${info.id}-st11{fill:#848776;}
					.zhsrlb-${info.id}-st12{fill:#61BC31;}
					.zhsrlb-${info.id}-st13{fill:#D20000;}
      </style>
      `
        "
      ></defs>
      <g id="zhsrlb_1_">
        <linearGradient
          id="zhsrlb_3_"
          gradientUnits="userSpaceOnUse"
          x1="10.2998"
          y1="37.0145"
          x2="10.2998"
          y2="51.3401"
        >
          <stop offset="0" style="stop-color:#0E255A" />
          <stop offset="0.508" style="stop-color:#1456BB" />
          <stop offset="0.8382" style="stop-color:#103377" />
          <stop offset="1" style="stop-color:#0E255A" />
        </linearGradient>
        <path
          id="zhsrlb_992_"
          :class="`zhsrlb-${info.id}-st0`"
          d="M13.5,51.9H6.7v-15h6.7c0,0,0.4,4,0.4,8S13.5,51.9,13.5,51.9z"
        />
        <linearGradient
          id="zhsrlb_4_"
          gradientUnits="userSpaceOnUse"
          x1="4.1167"
          y1="35.4814"
          x2="4.1167"
          y2="52.722"
        >
          <stop offset="0" style="stop-color:#845100" />
          <stop offset="0.1209" style="stop-color:#9C6D24" />
          <stop offset="0.3521" style="stop-color:#C69F64" />
          <stop offset="0.5209" style="stop-color:#E0BE8C" />
          <stop offset="0.6084" style="stop-color:#EACA9B" />
          <stop offset="1" style="stop-color:#BF7600" />
        </linearGradient>
        <rect
          id="zhsrlb_991_"
          y="35.3"
          :class="`zhsrlb-${info.id}-st1`"
          width="8.2"
          height="18.1"
        />
        <linearGradient
          id="zhsrlb_5_"
          gradientUnits="userSpaceOnUse"
          x1="-896.4429"
          y1="37.0145"
          x2="-896.4429"
          y2="51.3401"
          gradientTransform="matrix(-1 0 0 1 -825.0268 0)"
        >
          <stop offset="0" style="stop-color:#0E255A" />
          <stop offset="0.508" style="stop-color:#1456BB" />
          <stop offset="0.8382" style="stop-color:#103377" />
          <stop offset="1" style="stop-color:#0E255A" />
        </linearGradient>
        <path
          id="zhsrlb_989_"
          :class="`zhsrlb-${info.id}-st2`"
          d="M68.2,51.9H75v-15h-6.7c0,0-0.4,4-0.4,8S68.2,51.9,68.2,51.9z"
        />

        <linearGradient
          id="zhsrlb_6_"
          gradientUnits="userSpaceOnUse"
          x1="-902.626"
          y1="35.4814"
          x2="-902.626"
          y2="52.722"
          gradientTransform="matrix(-1 0 0 1 -825.0268 0)"
        >
          <stop offset="0" style="stop-color:#845100" />
          <stop offset="0.1209" style="stop-color:#9C6D24" />
          <stop offset="0.3521" style="stop-color:#C69F64" />
          <stop offset="0.5209" style="stop-color:#E0BE8C" />
          <stop offset="0.6084" style="stop-color:#EACA9B" />
          <stop offset="1" style="stop-color:#BF7600" />
        </linearGradient>
        <rect
          id="zhsrlb_982_"
          x="73.5"
          y="35.3"
          :class="`zhsrlb-${info.id}-st3`"
          width="8.2"
          height="18.1"
        />
        <path
          id="zhsrlb_987_"
          :class="`zhsrlb-${info.id}-st4`"
          d="M70,14.9H12L17.2,2c0.4-1.2,1.6-2,2.9-2h41.7c1.3,0,2.4,0.8,2.9,2L70,14.9z"
        />
        <path
          id="zhsrlb_986_"
          :class="`zhsrlb-${info.id}-st5`"
          d="M66.7,67.4H15.3c-1.8,0-3.3-1.5-3.3-3.3V14.9c0-1.8,1.5-3.3,3.3-3.3h51.5
						c1.8,0,3.3,1.5,3.3,3.3v49.2C70,65.9,68.5,67.4,66.7,67.4z"
        />
        <path
          id="zhsrlb_984_"
          :class="`zhsrlb-${info.id}-st6`"
          d="M63.2,62.1H18.7c-1,0-1.8-0.8-1.8-1.8V17.5c0-1,0.8-1.8,1.8-1.8h44.5c1,0,1.8,0.8,1.8,1.8
						v42.8C65,61.3,64.2,62.1,63.2,62.1z"
        />
        <path
          id="zhsrlb_983_"
          :class="`zhsrlb-${info.id}-st7`"
          d="M63.2,59.5H18.7c-1,0-1.8-0.8-1.8-1.8v2.6c0,1,0.8,1.8,1.8,1.8h44.5c1,0,1.8-0.8,1.8-1.8v-2.6
						C65,58.7,64.2,59.5,63.2,59.5z"
        />
        <path
          id="zhsrlb_988_"
          :class="`zhsrlb-${info.id}-st8`"
          d="M17.1,7.6h47.8c1.1,0,2,0.5,2.6,1.3l-1.8-4.5c-0.6-1-1.6-1.6-2.8-1.6H19
						c-1.2,0-2.3,0.7-2.8,1.6l-0.3,0.8c-0.1,0.3-0.2,0.4-0.3,0.7l-0.9,2.1l-0.4,1C14.9,8.3,15.9,7.6,17.1,7.6z"
        />
        <path
          id="zhsrlb_980_"
          :class="`zhsrlb-${info.id}-st9`"
          d="M60.1,49.6H21.8V19.5h38.3V49.6z"
        />
        <rect
          id="zhsrlb_979_"
          x="25.7"
          y="40.4"
          :class="`zhsrlb-${info.id}-st10`"
          width="4.5"
          height="2.5"
        />
        <rect
          id="zhsrlb_978_"
          x="33.7"
          y="40.4"
          :class="`zhsrlb-${info.id}-st10`"
          width="4.5"
          height="2.5"
        />
        <rect
          id="zhsrlb_977_"
          x="25.5"
          y="44.9"
          :class="`zhsrlb-${info.id}-st10`"
          width="30.3"
          height="1"
        />
        <g id="zhsrlb_967_">
          <rect
            id="zhsrlb_971_"
            x="26.8"
            y="24.8"
            :class="`zhsrlb-${info.id}-st11`"
            width="28.3"
            height="12"
          />
          <path
            id="zhsrlb_968_"
            :class="`zhsrlb-${info.id}-st10`"
            d="M56.1,37.8H25.8v-14h30.3V37.8z M27.8,35.8h26.3v-10H27.8V35.8z"
          />
        </g>
        <circle
          id="zhsrlb_972_"
          :class="`zhsrlb-${info.id}-st10`"
          cx="26.3"
          cy="54.8"
          r="2.5"
        />
        <circle
          id="zhsrlb_973_"
          :class="`zhsrlb-${info.id}-st12`"
          cx="26.3"
          cy="54.8"
          r="1.9"
        />
        <circle
          id="zhsrlb_975_"
          :class="`zhsrlb-${info.id}-st10`"
          cx="55.3"
          cy="54.8"
          r="2.5"
        />
        <circle
          id="zhsrlb_974_"
          :class="`zhsrlb-${info.id}-st13`"
          cx="55.3"
          cy="54.8"
          r="1.9"
        />
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
  name: "deviceZhsrlbCom",
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
        $vm.$on(`devicePointEvent_${id}`, ({ device }) => {
          bmCommon.log("deviceZhsrlbCom", device);
          let { pointList = [] } = device || {};
          let point = pointList.find(item => {
            let { point: id = "" } = item || {};
            return id == pointCode; // SwSts  开关状态
          });
          if (point) {
            let { value = "" } = point || {};
            this.pointValue = value;
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
      devicePoint = pointCode;
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
            this.pointValue = value;
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

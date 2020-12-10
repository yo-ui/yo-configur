// 摄像头
<template>
  <div class="bm-device-sxt-com" :style="comStyle" @click="previewEvent">
    <!-- :viewBox="`${info.vBoxx} ${info.vBoxy} ${info.width} ${info.height}`" -->
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 74 58"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
          .sxta-st0 {
            fill: #c2c8ce;
          }
          .sxta-st1 {
            fill: #a5aeb5;
          }
          .sxta-st2 {
            fill: #dfe3e8;
          }
          .sxta-st3 {
            fill: url(#sxta_2_);
          }
          .sxta-st4 {
            fill: url(#sxta_3_);
          }
          .sxta-st5 {
            fill: #979ca0;
          }
          .sxta-st6 {
            fill: url(#sxta_4_);
          }
          .sxta-st7 {
            fill: #5a636b;
          }
          .sxta-st8 {
            fill: url(#sxta_5_);
          }
          .sxta-st9 {
            fill: url(#sxta_6_);
          }
          .sxta-st10 {
            fill: url(#sxta_7_);
          }
          .sxta-st11 {
            fill: url(#sxta_8_);
          }
          .sxta-st12 {
            fill: url(#sxta_9_);
          }
          .sxta-st13 {
            fill: url(#sxta_10_);
          }
          </style>
      `
        "
      ></defs>
      <polygon
        id="sxta_1444_"
        class="sxta-st0"
        points="60.5,33.8 62.3,32.5 74,34.9 69.9,37.5 "
      />
      <polygon
        id="sxta_1443_"
        class="sxta-st1"
        points="74,56.2 72.1,57.5 71.3,51.5 72.1,36.1 74,34.9 "
      />
      <polygon
        id="sxta_1437_"
        class="sxta-st2"
        points="72.1,57.5 60.5,55.1 60.5,33.8 72.1,36.1 "
      />
      <linearGradient
        id="sxta_2_"
        gradientUnits="userSpaceOnUse"
        x1="38.8737"
        y1="52.9954"
        x2="44.8327"
        y2="52.9954"
      >
        <stop offset="0" style="stop-color:#83878E" />
        <stop offset="0.4813" style="stop-color:#D9DDE2" />
        <stop offset="1" style="stop-color:#83878E" />
      </linearGradient>
      <path
        id="sxta_1485_"
        class="sxta-st3"
        d="M38.9,47.9v9.2c0,0.5,1.3,1,3,1c1.6,0,3-0.4,3-1v-9.2H38.9z"
      />
      <linearGradient
        id="sxta_3_"
        gradientUnits="userSpaceOnUse"
        x1="37.0088"
        y1="48.5027"
        x2="70.2418"
        y2="48.5027"
      >
        <stop offset="0" style="stop-color:#BCC6C9" />
        <stop offset="0.1398" style="stop-color:#E8EDF0" />
        <stop offset="0.3529" style="stop-color:#A8B2B7" />
      </linearGradient>
      <path
        id="sxta_1486_"
        class="sxta-st4"
        d="M49.8,46L37,47.7v6.8c0,0,1,1.1,4.6,0.9c3.5-0.2,6.5-1.4,6.5-1.4s15.4-3.2,17.5-3
					c2.1,0.2,3.5,0.6,3.5,0.6s1-3.1,1.2-5.4c0.2-2.4-0.1-4.6-0.1-4.6L49.8,46z"
      />
      <path
        id="sxta_1483_"
        class="sxta-st5"
        d="M62.4,40.7l-24.1,5.9c0,0-2.8,0.8-0.2,1.9c2.6,1.1,6.3,0.3,6.3,0.3l24.7-6.5c0,0,3-1.1-2-1.9
					C64.9,40.2,62.4,40.7,62.4,40.7z"
      />
      <linearGradient
        id="sxta_4_"
        gradientUnits="userSpaceOnUse"
        x1="37.2257"
        y1="40.5697"
        x2="46.4807"
        y2="40.5697"
      >
        <stop offset="0" style="stop-color:#83878E" />
        <stop offset="0.4813" style="stop-color:#D9DDE2" />
        <stop offset="1" style="stop-color:#83878E" />
      </linearGradient>
      <path
        id="sxta_1484_"
        class="sxta-st6"
        d="M37.2,32.7v14.2c0,0.8,2.1,1.5,4.6,1.5c2.6,0,4.6-0.7,4.6-1.5V32.7H37.2z"
      />
      <path
        id="sxta_1478_"
        class="sxta-st7"
        d="M1.7,27.6c0,0-1.3,0.5-1.5,1.6c-0.3,1.4,0.5,2.4,0.5,2.4s0.7,1.2,2.9,1.2s4.3-0.6,4.3-0.6
					l3.1-3.4l-1-1.1L1.7,27.6z"
      />
      <linearGradient
        id="sxta_5_"
        gradientUnits="userSpaceOnUse"
        x1="34.5197"
        y1="22.7717"
        x2="46.7543"
        y2="38.2562"
      >
        <stop offset="0" style="stop-color:#BCC6C9" />
        <stop offset="0.4286" style="stop-color:#E8EDF0" />
        <stop offset="1" style="stop-color:#A8B2B7" />
      </linearGradient>
      <path
        id="sxta_1480_"
        class="sxta-st8"
        d="M53.1,9.8C48,3.4,40.4,1,36.2,4.4l-27,22.8l20.4,23.6l25.2-23.2C59,24.1,58.3,16.2,53.1,9.8z"
      />
      <ellipse
        id="sxta_1475_"
        transform="matrix(0.756 -0.6546 0.6546 0.756 -20.7934 22.1779)"
        class="sxta-st2"
        cx="19.4"
        cy="39"
        rx="10.3"
        ry="15.6"
      />
      <linearGradient
        id="sxta_6_"
        gradientUnits="userSpaceOnUse"
        x1="29.2541"
        y1="43.1684"
        x2="15.4902"
        y2="37.6245"
      >
        <stop offset="0" style="stop-color:#585F65" />
        <stop offset="1" style="stop-color:#2A2F35" />
      </linearGradient>
      <path
        id="sxta_1477_"
        class="sxta-st9"
        d="M25.5,33.8c5,5.7,6.2,12.8,2.8,15.8s-10.2,0.7-15.2-5.1s-6.2-12.8-2.8-15.8S20.5,28,25.5,33.8
					z"
      />
      <radialGradient
        id="sxta_7_"
        cx="16.4063"
        cy="38.7661"
        r="6.3265"
        gradientTransform="matrix(1 0 0 1.5352 0 -20.7473)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.2941" style="stop-color:#2F368C" />
        <stop offset="1" style="stop-color:#302A48" />
      </radialGradient>
      <path
        id="sxta_1481_"
        class="sxta-st10"
        d="M23.9,34.8c2.8,3.2,3.5,7.2,1.6,8.8c-1.9,1.7-5.7,0.4-8.5-2.8s-3.5-7.2-1.6-8.8
					C17.3,30.3,21.1,31.6,23.9,34.8z"
      />
      <linearGradient
        id="sxta_8_"
        gradientUnits="userSpaceOnUse"
        x1="7.9096"
        y1="32.4517"
        x2="29.3202"
        y2="45.0687"
      >
        <stop offset="0.5027" style="stop-color:#FFFFFF;stop-opacity:0.2" />
        <stop offset="0.5508" style="stop-color:#FFFFFF;stop-opacity:0" />
      </linearGradient>
      <path
        id="sxta_1482_"
        class="sxta-st11"
        d="M25.5,33.8c5,5.7,6.2,12.8,2.8,15.8s-10.2,0.7-15.2-5.1s-6.2-12.8-2.8-15.8
					S20.5,28,25.5,33.8z"
      />
      <linearGradient
        id="sxta_9_"
        gradientUnits="userSpaceOnUse"
        x1="-2.728484e-012"
        y1="30.1501"
        x2="33.861"
        y2="30.1501"
      >
        <stop offset="0.129" style="stop-color:#E8EDF0" />
        <stop offset="0.7312" style="stop-color:#D8DFE2" />
      </linearGradient>
      <path
        id="sxta_1476_"
        class="sxta-st12"
        d="M5.5,26.5l-3.7,0.6c0,0-1.3,0.6-1.7,1.9c-0.3,1.1,0.7,2.5,0.7,2.5S-0.3,30,0.7,29
					c1.4-1.4,1.7-1.1,1.7-1.1L17,28.4c0,0,2.2,0.1,3.6,1c2,1.1,4.4,4,7.5,4.4s5.7-0.5,5.7-0.5l-11.5-6L5.5,26.5z"
      />
      <linearGradient
        id="sxta_10_"
        gradientUnits="userSpaceOnUse"
        x1="24.3426"
        y1="9.5488"
        x2="39.8299"
        y2="29.0751"
      >
        <stop offset="0" style="stop-color:#B0B3B7" />
        <stop offset="8.021390e-002" style="stop-color:#C2C8CE" />
        <stop offset="0.369" style="stop-color:#C2C8CE" />
        <stop offset="0.4759" style="stop-color:#E6EDF4" />
        <stop offset="0.6043" style="stop-color:#B0B3B7" />
      </linearGradient>
      <path
        id="sxta_1472_"
        class="sxta-st13"
        d="M1.8,27.1l15.9,0.6c0,0,1.2-0.1,3.5,1.2c2.1,1.2,4.4,4.3,8.8,4.7c4.1,0.4,6.6-1.9,6.6-1.9
					l19.2-18c0,0,0.9-0.8,1-3s0.1-3.8,0.1-3.8l-0.7-2.6c0,0-0.8-2-2-3.1C53,0,50.6,0,50.6,0l-12,0.4c0,0-0.5-0.1-1.7,0.2
					c-1.2,0.4-2,1-2,1L1.8,27.1z"
      />
    </svg>
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;

// const pointCode = "SwSts";
export default {
  name: "deviceSxtCom",
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
      // showType: "canvas/getShowType" //当前显示类型
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
        borderRadius = "",
        opacity = "",
        backgroundType = "",
        backgroundColor = "",
        backgroundImage = "",
        backgroundRepeat = "",
        backgroundSize = ""
      } = info || {};
      let styles = {};

      // if (width) {
      styles["width"] = `${width}px`;
      // }
      // if (height) {
      styles["height"] = `${height}px`;
      // }
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
      styles["opacity"] = opacity / 100;
      styles["borderRadius"] = `${borderRadius}px`;
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
    // this.$emit("success"); //组件加载完成回调
    this.init();
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),

    init() {},
    previewEvent() {
      let { info = {} } = this;
      let { bindData = {} } = info;
      let { deviceId = "" } = bindData || {};
      if (!deviceId) {
        return;
      }
      $vm.$emit(`camera-preview`, { deviceId });
    }
  }
};
</script>

<style lang="less">
// @import (less) "../../../../assets/less/components/component/device/common.less";
</style>

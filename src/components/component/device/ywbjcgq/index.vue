// 烟雾报警传感器
<template>
  <div class="bm-device-ywbjcgq-com" :style="comStyle">
    <!-- :viewBox="`${info.vBoxx} ${info.vBoxy} ${info.width} ${info.height}`" -->
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 42 35`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
					.ywbjcgq-st0{fill:url(#ywbjcgq_2_);}
					.ywbjcgq-st1{fill:url(#ywbjcgq_3_);}
					.ywbjcgq-st2{fill:#C2C8CE;}
					.ywbjcgq-st3{fill:#ABB3BA;}
					.ywbjcgq-st4{fill:#778189;}
					.ywbjcgq-st5{fill:#222426;}
					.ywbjcgq-st6{fill:#FFFFFF;}
					.ywbjcgq-st7{fill:url(#ywbjcgq_4_);}
      </style>
      `
        "
      ></defs>
      <linearGradient
        id="ywbjcgq_2_"
        gradientUnits="userSpaceOnUse"
        x1="2.2839"
        y1="28.4091"
        x2="39.8048"
        y2="28.4091"
      >
        <stop offset="0" style="stop-color:#ACB1B9" />
        <stop offset="0.4813" style="stop-color:#DEDEDE" />
        <stop offset="1" style="stop-color:#A9AEB7" />
      </linearGradient>
      <path
        id="ywbjcgq_1435_"
        class="ywbjcgq-st0"
        d="M2.3,22.2v6c0,4.1,9.7,6.4,18.8,6.4s18.7-2.2,18.7-6.4v-6L2.3,22.2z"
      />
      <linearGradient
        id="ywbjcgq_3_"
        gradientUnits="userSpaceOnUse"
        x1="0.4256"
        y1="22.8204"
        x2="41.6631"
        y2="22.8204"
      >
        <stop offset="0" style="stop-color:#BCC6C9" />
        <stop offset="0.4286" style="stop-color:#FFFFFF" />
        <stop offset="1" style="stop-color:#A8B2B7" />
      </linearGradient>
      <path
        id="ywbjcgq_1425_"
        class="ywbjcgq-st1"
        d="M0.4,14.3v8.2c0,5.7,10.7,8.8,20.7,8.8s20.6-3.1,20.6-8.8v-8.2L0.4,14.3z"
      />
      <path
        id="ywbjcgq_1423_"
        class="ywbjcgq-st2"
        d="M21,23.3c-10,0-20.6-3.2-20.6-9c0-5.8,10.6-9,20.6-9s20.6,3.2,20.6,9
					C41.7,20.1,31,23.3,21,23.3z"
      />
      <path
        id="ywbjcgq_1426_"
        class="ywbjcgq-st3"
        d="M21.2,19.2c-7.7,0-15.9-2-15.9-5.7c0-3.7,8.2-5.7,15.9-5.7s15.9,2,15.9,5.7
					C37.1,17.2,28.9,19.2,21.2,19.2z"
      />
      <path
        id="ywbjcgq_1433_"
        class="ywbjcgq-st4"
        d="M21.2,9.8c7,0,14.3,1.6,15.6,4.7c0.1-0.3,0.2-0.6,0.2-1c0-3.7-8.2-5.7-15.9-5.7
					c-7.7,0-15.9,2-15.9,5.7c0,0.4,0.1,0.7,0.2,1C6.9,11.5,14.2,9.8,21.2,9.8z"
      />
      <path
        id="ywbjcgq_1440_"
        class="ywbjcgq-st5"
        d="M21,10.7c-5.2,0-10.8,1.6-10.8,4.7c0,1.3,1,2.3,2.5,3c2.6,0.6,5.6,0.9,8.5,0.9
					c2.7,0,5.5-0.3,8-0.7c1.6-0.8,2.7-1.8,2.7-3.1C31.8,12.3,26.3,10.7,21,10.7z"
      />
      <polygon
        id="ywbjcgq_1430_"
        class="ywbjcgq-st4"
        points="8.5,14 6.8,17 9.3,17.4 11.4,11 9.9,10.1 "
      />
      <path
        id="ywbjcgq_1428_"
        class="ywbjcgq-st6"
        d="M9.2,9.7c0,0-0.1,1.4-1.1,3.3c-0.7,1.3-2.5,3.2-2.5,3.2L6.8,17c0,0,1.2-1.6,2.2-3.3
					c0.7-1.2,1.1-3.2,1.1-3.2L9.2,9.7z"
      />
      <polygon
        id="ywbjcgq_1429_"
        class="ywbjcgq-st6"
        points="16.6,13.2 15.4,19.3 17.2,19.4 18.2,13.1 "
      />
      <polygon
        id="ywbjcgq_1434_"
        class="ywbjcgq-st4"
        points="33.6,14.1 35.3,17.1 32.8,17.5 30.7,11 32.2,10.2 "
      />
      <path
        id="ywbjcgq_1432_"
        class="ywbjcgq-st6"
        d="M32.9,9.8c0,0,0.1,1.4,1.1,3.3c0.7,1.3,2.5,3.2,2.5,3.2l-1.2,0.8c0,0-1.2-1.6-2.2-3.3
					c-0.7-1.2-1.1-3.2-1.1-3.2L32.9,9.8z"
      />
      <polygon
        id="ywbjcgq_1431_"
        class="ywbjcgq-st6"
        points="25.5,13.2 26.7,19.3 24.9,19.5 23.9,13.2 "
      />
      <linearGradient
        id="ywbjcgq_4_"
        gradientUnits="userSpaceOnUse"
        x1="8.4689"
        y1="9.7296"
        x2="33.6198"
        y2="9.7296"
      >
        <stop offset="0" style="stop-color:#BCC6C9" />
        <stop offset="0.4286" style="stop-color:#FFFFFF" />
        <stop offset="1" style="stop-color:#A8B2B7" />
      </linearGradient>
      <path
        id="ywbjcgq_1422_"
        class="ywbjcgq-st7"
        d="M8.5,6v2.2c0,3.5,6.5,5.4,12.6,5.4s12.5-1.9,12.5-5.4V6L8.5,6z"
      />
      <path
        id="ywbjcgq_1420_"
        class="ywbjcgq-st2"
        d="M21,11.4C14.9,11.4,8.5,9.5,8.5,6c0-3.6,6.5-5.5,12.6-5.5S33.6,2.4,33.6,6
					C33.6,9.5,27.1,11.4,21,11.4z"
      />
    </svg>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;

const pointCode = "SwSts";
export default {
  name: "deviceYwbjcgqCom",
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

    comStyle() {
      let { info = {} } = this;
      let {
        width = "",
        height = "",
        // color = "",
        borderColor = "",
        borderStyle = "",
        borderWidth = "",
        borderRadius = "",
        opacity = "",
        scale = ""
        // fontFamily = "",
        // fontSize = "",
        // fontWeight = "",
        // fontStyle = ""
        // backgroundColor = "",
        // backgroundImage = "",
        // backgroundRepeat = "",
        // backgroundSize = ""
      } = info || {};
      let styles = {};

      // if (width) {
      styles["width"] = `${width}px`;
      // }
      // if (height) {
      styles["height"] = `${height}px`;
      // }
      // if (backgroundRepeat) {
      //   styles["backgroundRepeat"] = backgroundRepeat;
      // }
      // if (backgroundSize) {
      //   styles["backgroundSize"] = backgroundSize;
      // }
      if (borderColor) {
        styles["borderColor"] = borderColor;
      }
      if (borderStyle) {
        styles["borderStyle"] = borderStyle;
      }
      styles["borderWidth"] = `${borderWidth}px`;
      styles["opacity"] = opacity / 100;
      styles["borderRadius"] = `${borderRadius}px`;
      if (scale) {
        (styles["transform"] = `${scale}`),
          (styles["-webkit-transform"] = `${scale}`),
          (styles["-ms-transform"] = `${scale}`),
          (styles["-o-transform"] = `${scale}`),
          (styles["-moz-transform"] = `${scale}`);
      }
      // if (color) {
      //   styles["color"] = color;
      // }
      // if (fontSize) {
      //   styles["fontSize"] = `${fontSize}px`;
      // }
      // if (fontFamily) {
      //   styles["fontFamily"] = `${fontFamily}`;
      // }
      // if (fontWeight) {
      //   styles["fontWeight"] = fontWeight;
      // }
      // if (fontStyle) {
      //   styles["fontStyle"] = fontStyle;
      // }
      // if (backgroundColor) {
      //   styles["backgroundColor"] = backgroundColor;
      // }
      // if (backgroundImage) {
      //   styles["backgroundImage"] = `url(${this.$loadImgUrl(backgroundImage)})`;
      // }
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

    init() {
      let { info = {}, showType = "" } = this;
      if (showType != "edit") {
        let { id = "" } = info || {};
        let { $vm } = window;
        // let { deviceId = "" } = bindData || {};
        $vm.$on(`devicePointEvent_${id}`, ({ device }) => {
          bmCommon.log("deviceDbCom", device);
          let { pointList = [] } = device || {};
          let point = pointList.find(item => {
            let { point: id = "" } = item || {};
            return id == pointCode; // SwSts  开关状态
          });
          if (point) {
            let { value = "" } = point || {};
            this.pointValue = value;
          }
          // let { value = "", unit = "",id='' } = point || {};
          // info.content = value;
          // info.unit = unit;
          // info.width = $(this.$refs.bmText).width();
          // this.$emit("success"); //组件加载完成回调
        });
      }
    }
    // blurEvent(e) {
    //   let { target } = e;
    //   let { info = {} } = this;
    //   let name = $(target)
    //     .text()
    //     .trim();
    //   info.name = name;
    // }
  }
};
</script>
<style lang="less" scoped>
// @import (reference) "./../../../../assets/less/common.less";
// @import (less) "../../../../assets/less/components/component/device/common.less";
</style>

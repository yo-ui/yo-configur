// 螺翼式水表
<template>
  <div class="bm-device-lyssb-com" :style="comStyle">
    <!-- :viewBox="`${info.vBoxx} ${info.vBoxy} ${info.width} ${info.height}`" -->
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 72 68`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
      .lyssb-st0{fill:url(#lyssb_2_);}
					.lyssb-st1{fill:#034081;}
					.lyssb-st2{fill:url(#lyssb_3_);}
					.lyssb-st3{fill:url(#lyssb_4_);}
					.lyssb-st4{fill:url(#lyssb_5_);}
					.lyssb-st5{fill:url(#lyssb_6_);}
					.lyssb-st6{fill:url(#lyssb_7_);}
					.lyssb-st7{fill:#F6C060;}
					.lyssb-st8{fill:#FFFFFF;}
					.lyssb-st9{fill:#E04520;}
					.lyssb-st10{fill:#5D5F65;}
					.lyssb-st11{fill:#1D1E1E;}
					.lyssb-st12{fill:#C57C15;}
      </style>
      `
        "
      ></defs>
      <linearGradient
        id="lyssb_2_"
        gradientUnits="userSpaceOnUse"
        x1="-530.7202"
        y1="15.1586"
        x2="-530.7202"
        y2="69.1397"
        gradientTransform="matrix(-1 0 0 1 -463.3202 0)"
      >
        <stop offset="0" style="stop-color:#08396B" />
        <stop offset="0.5027" style="stop-color:#2797D4" />
        <stop offset="1" style="stop-color:#08396B" />
      </linearGradient>
      <path
        id="lyssb_892_"
        class="lyssb-st0"
        d="M62.8,14.4H68c2.2,0,4,12,4,26.8s-1.8,26.8-4,26.8h-5.2V14.4z"
      />
      <ellipse
        id="lyssb_873_"
        class="lyssb-st1"
        cx="62.8"
        cy="41.2"
        rx="4"
        ry="26.8"
      />
      <linearGradient
        id="lyssb_3_"
        gradientUnits="userSpaceOnUse"
        x1="4.6127"
        y1="15.1586"
        x2="4.6127"
        y2="69.1397"
      >
        <stop offset="0" style="stop-color:#08396B" />
        <stop offset="0.5027" style="stop-color:#2797D4" />
        <stop offset="1" style="stop-color:#08396B" />
      </linearGradient>
      <path
        id="lyssb_886_"
        class="lyssb-st2"
        d="M9.2,14.4H4c-2.2,0-4,12-4,26.8C0,56,1.8,68.1,4,68.1h5.2V14.4z"
      />
      <ellipse
        id="lyssb_880_"
        class="lyssb-st1"
        cx="9.2"
        cy="41.2"
        rx="4"
        ry="26.8"
      />
      <linearGradient
        id="lyssb_4_"
        gradientUnits="userSpaceOnUse"
        x1="36.0654"
        y1="25.1502"
        x2="36.0654"
        y2="55.6155"
      >
        <stop offset="0" style="stop-color:#08396B" />
        <stop offset="0.3957" style="stop-color:#2797D4" />
        <stop offset="0.9412" style="stop-color:#19274F" />
      </linearGradient>
      <path
        id="lyssb_876_"
        class="lyssb-st3"
        d="M63,25.2H9.8c-0.9,0-2.2,6.9-2.2,15.5s1.3,15.5,2.2,15.5H63c0,0,1.6-4.5,1.6-15.5
					S63,25.2,63,25.2z"
      />
      <linearGradient
        id="lyssb_5_"
        gradientUnits="userSpaceOnUse"
        x1="18.0648"
        y1="33.906"
        x2="53.5924"
        y2="33.906"
      >
        <stop offset="0" style="stop-color:#08396B" />
        <stop offset="0.4992" style="stop-color:#2797D4" />
        <stop offset="0.568" style="stop-color:#268BC3" />
        <stop offset="0.708" style="stop-color:#236999" />
        <stop offset="0.9045" style="stop-color:#1C3B63" />
        <stop offset="1" style="stop-color:#19274F" />
      </linearGradient>
      <path
        id="lyssb_917_"
        class="lyssb-st4"
        d="M18.1,17.1v11.5c0,7.8,8,22.1,17.8,22.1c9.8,0,17.8-14.3,17.8-22.1V17.1H18.1z"
      />
      <linearGradient
        id="lyssb_6_"
        gradientUnits="userSpaceOnUse"
        x1="35.8286"
        y1="17.099"
        x2="35.8286"
        y2="50.7129"
      >
        <stop offset="0.5369" style="stop-color:#08396B;stop-opacity:0" />
        <stop offset="1" style="stop-color:#19274F;stop-opacity:0.8" />
      </linearGradient>
      <path
        id="lyssb_933_"
        class="lyssb-st5"
        d="M18.1,17.1v11.5c0,7.8,8,22.1,17.8,22.1c9.8,0,17.8-14.3,17.8-22.1V17.1H18.1z"
      />
      <ellipse
        id="lyssb_916_"
        class="lyssb-st1"
        cx="35.8"
        cy="17.1"
        rx="17.8"
        ry="14.1"
      />
      <linearGradient
        id="lyssb_7_"
        gradientUnits="userSpaceOnUse"
        x1="19.7222"
        y1="21.0122"
        x2="51.9351"
        y2="21.0122"
      >
        <stop offset="0" style="stop-color:#815223" />
        <stop offset="0.5" style="stop-color:#D98811" />
        <stop offset="1" style="stop-color:#815223" />
      </linearGradient>
      <path
        id="lyssb_915_"
        class="lyssb-st6"
        d="M19.7,12.8v3.7c0,7.1,7.2,12.8,16.1,12.8c8.9,0,16.1-5.7,16.1-12.8v-3.7H19.7z"
      />
      <ellipse
        id="lyssb_914_"
        class="lyssb-st7"
        cx="35.8"
        cy="12.8"
        rx="16.1"
        ry="12.8"
      />
      <ellipse
        id="lyssb_913_"
        class="lyssb-st8"
        cx="35.8"
        cy="12.5"
        rx="13.2"
        ry="10.3"
      />
      <ellipse
        id="lyssb_912_"
        class="lyssb-st9"
        cx="32.1"
        cy="6.3"
        rx="1.3"
        ry="1"
      />
      <ellipse
        id="lyssb_911_"
        class="lyssb-st9"
        cx="32.1"
        cy="18.8"
        rx="1.3"
        ry="1"
      />
      <ellipse
        id="lyssb_910_"
        class="lyssb-st9"
        cx="27.7"
        cy="10.4"
        rx="1.3"
        ry="1"
      />
      <ellipse
        id="lyssb_909_"
        class="lyssb-st9"
        cx="27.7"
        cy="15.5"
        rx="1.3"
        ry="1"
      />
      <rect
        id="lyssb_908_"
        x="42.6"
        y="9.2"
        class="lyssb-st10"
        width="3.2"
        height="1.3"
      />
      <rect
        id="lyssb_907_"
        x="42.6"
        y="11.9"
        class="lyssb-st10"
        width="3.2"
        height="1.3"
      />
      <rect
        id="lyssb_906_"
        x="42.6"
        y="14.5"
        class="lyssb-st10"
        width="3.2"
        height="1.3"
      />
      <ellipse
        id="lyssb_905_"
        class="lyssb-st11"
        cx="36"
        cy="12.5"
        rx="2.3"
        ry="1.8"
      />
      <path
        id="lyssb_895_"
        class="lyssb-st12"
        d="M35.8,2.9c7.1,0,13,4.5,13.2,10c0-0.1,0-0.2,0-0.4c0-5.7-5.9-10.3-13.2-10.3
					S22.6,6.9,22.6,12.5c0,0.1,0,0.2,0,0.4C22.9,7.4,28.7,2.9,35.8,2.9z"
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
  name: "deviceLyssbCom",
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
// .db-st0 {
//   fill: url(#db_1_);
// }
// .db-st1 {
//   fill: #dfe3e8;
// }
// .db-st2 {
//   fill: url(#db_11_);
// }
// .db-st3 {
//   fill: #ffffff;
// }
// .db-st4 {
//   fill: #c2c8ce;
// }
// .db-st5 {
//   fill: #848776;
// }
// .db-st6 {
//   fill: #25282b;
// }
// .db-st7 {
//   fill: #8f9499;
// }
// .db-st8 {
//   fill: #5b280e;
// }
// .db-st9 {
//   fill: #f95d06;
// }
// .db-st10 {
//   fill: url(#db_12_);
// }
// .db-st11 {
//   opacity: 0.4;
//   fill: #ff0000;
// }
</style>
<style lang="less">
// @import (less) "../../../../assets/less/components/component/device/common.less";
</style>

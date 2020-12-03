// 旋翼式水表
<template>
  <div class="bm-device-xyssb-com" :style="comStyle">
    <!-- :viewBox="`${info.vBoxx} ${info.vBoxy} ${info.width} ${info.height}`" -->
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 80 55`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
      .xyssb-st0{fill:url(#xyssb_2_);}
					.xyssb-st1{fill:url(#xyssb_3_);}
					.xyssb-st2{fill:url(#xyssb_4_);}
					.xyssb-st3{fill:url(#xyssb_5_);}
					.xyssb-st4{fill:url(#xyssb_6_);}
					.xyssb-st5{fill:#034081;}
					.xyssb-st6{fill:url(#xyssb_7_);}
					.xyssb-st7{fill:#F6C060;}
					.xyssb-st8{fill:#FFFFFF;}
					.xyssb-st9{fill:#E04520;}
					.xyssb-st10{fill:#5D5F65;}
					.xyssb-st11{fill:#1D1E1E;}
					.xyssb-st12{fill:#C57C15;}
      </style>
      `
        "
      ></defs>
      <linearGradient
        id="xyssb_2_"
        gradientUnits="userSpaceOnUse"
        x1="16.0725"
        y1="37.9619"
        x2="63.3258"
        y2="37.9619"
      >
        <stop offset="0" style="stop-color:#08396B" />
        <stop offset="0.4992" style="stop-color:#2797D4" />
        <stop offset="0.568" style="stop-color:#268BC3" />
        <stop offset="0.708" style="stop-color:#236999" />
        <stop offset="0.9045" style="stop-color:#1C3B63" />
        <stop offset="1" style="stop-color:#19274F" />
      </linearGradient>
      <path
        id="XMLID_938_"
        class="xyssb-st0"
        d="M16.1,21.3v9.4c0,10.4,6,23.9,23.6,23.9c19,0,23.6-13.5,23.6-23.9v-9.4H16.1z"
      />
      <g id="XMLID_931_">
        <linearGradient
          id="xyssb_3_"
          gradientUnits="userSpaceOnUse"
          x1="12.6882"
          y1="22.14"
          x2="12.6882"
          y2="44.6115"
        >
          <stop offset="0" style="stop-color:#08396B" />
          <stop offset="0.3957" style="stop-color:#2797D4" />
          <stop offset="0.9412" style="stop-color:#19274F" />
        </linearGradient>
        <path
          id="XMLID_934_"
          class="xyssb-st1"
          d="M20.5,45.5L4.9,41V26l11.9-4c0,0-0.1,6.8,0.9,13.1C18.4,40.6,20.5,45.5,20.5,45.5z"
        />
        <linearGradient
          id="xyssb_4_"
          gradientUnits="userSpaceOnUse"
          x1="3.1286"
          y1="44.4707"
          x2="3.1286"
          y2="22.4141"
        >
          <stop offset="0" style="stop-color:#A7AEB6" />
          <stop offset="0.508" style="stop-color:#DFE2E8" />
          <stop offset="0.7632" style="stop-color:#C0C5CB" />
          <stop offset="1" style="stop-color:#A7AEB6" />
        </linearGradient>
        <rect
          id="XMLID_932_"
          y="22.4"
          class="xyssb-st2"
          width="6.3"
          height="22.1"
        />
      </g>
      <g id="XMLID_935_">
        <linearGradient
          id="xyssb_5_"
          gradientUnits="userSpaceOnUse"
          x1="-413.2452"
          y1="22.14"
          x2="-413.2452"
          y2="44.6115"
          gradientTransform="matrix(-1 0 0 1 -346.078 0)"
        >
          <stop offset="0" style="stop-color:#08396B" />
          <stop offset="0.3957" style="stop-color:#2797D4" />
          <stop offset="0.9412" style="stop-color:#19274F" />
        </linearGradient>
        <path
          id="XMLID_937_"
          class="xyssb-st3"
          d="M59.3,45.5L75,41V26l-11.9-4c0,0,0.1,6.8-0.9,13.1C61.4,40.6,59.3,45.5,59.3,45.5z"
        />

        <linearGradient
          id="xyssb_6_"
          gradientUnits="userSpaceOnUse"
          x1="-422.8049"
          y1="44.4707"
          x2="-422.8049"
          y2="22.4141"
          gradientTransform="matrix(-1 0 0 1 -346.078 0)"
        >
          <stop offset="0" style="stop-color:#A7AEB6" />
          <stop offset="0.508" style="stop-color:#DFE2E8" />
          <stop offset="0.7632" style="stop-color:#C0C5CB" />
          <stop offset="1" style="stop-color:#A7AEB6" />
        </linearGradient>
        <rect
          id="XMLID_936_"
          x="73.6"
          y="22.4"
          class="xyssb-st4"
          width="6.3"
          height="22.1"
        />
      </g>
      <ellipse
        id="XMLID_930_"
        class="xyssb-st5"
        cx="39.7"
        cy="21.3"
        rx="23.6"
        ry="18.7"
      />
      <linearGradient
        id="xyssb_7_"
        gradientUnits="userSpaceOnUse"
        x1="19.8571"
        y1="25.8856"
        x2="59.5411"
        y2="25.8856"
      >
        <stop offset="0" style="stop-color:#815223" />
        <stop offset="0.5" style="stop-color:#D98811" />
        <stop offset="1" style="stop-color:#815223" />
      </linearGradient>
      <path
        id="XMLID_929_"
        class="xyssb-st6"
        d="M19.9,15.7v4.5C19.9,29,28.7,36,39.7,36c11,0,19.8-7,19.8-15.7v-4.5H19.9z"
      />
      <ellipse
        id="XMLID_928_"
        class="xyssb-st7"
        cx="39.7"
        cy="15.7"
        rx="19.8"
        ry="15.7"
      />
      <ellipse
        id="XMLID_927_"
        class="xyssb-st8"
        cx="39.7"
        cy="15.5"
        rx="16.3"
        ry="12.7"
      />
      <ellipse
        id="XMLID_926_"
        class="xyssb-st9"
        cx="35"
        cy="7.7"
        rx="1.6"
        ry="1.3"
      />
      <ellipse
        id="XMLID_925_"
        class="xyssb-st9"
        cx="35"
        cy="23.2"
        rx="1.6"
        ry="1.3"
      />
      <ellipse
        id="XMLID_924_"
        class="xyssb-st9"
        cx="29.7"
        cy="12.8"
        rx="1.6"
        ry="1.3"
      />
      <ellipse
        id="XMLID_923_"
        class="xyssb-st9"
        cx="29.7"
        cy="19.1"
        rx="1.6"
        ry="1.3"
      />
      <rect
        id="XMLID_922_"
        x="48.1"
        y="11.4"
        class="xyssb-st10"
        width="4"
        height="1.6"
      />
      <rect
        id="XMLID_921_"
        x="48.1"
        y="14.6"
        class="xyssb-st10"
        width="4"
        height="1.6"
      />
      <rect
        id="XMLID_920_"
        x="48.1"
        y="17.9"
        class="xyssb-st10"
        width="4"
        height="1.6"
      />
      <ellipse
        id="XMLID_919_"
        class="xyssb-st11"
        cx="40"
        cy="15.5"
        rx="2.9"
        ry="2.2"
      />
      <path
        id="XMLID_918_"
        class="xyssb-st12"
        d="M39.7,3.6c8.8,0,16,5.5,16.3,12.3c0-0.2,0-0.3,0-0.5c0-7-7.3-12.7-16.3-12.7
					S23.4,8.4,23.4,15.5c0,0.2,0,0.3,0,0.5C23.7,9.1,30.9,3.6,39.7,3.6z"
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
  name: "deviceXyssbCom",
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
@import (less) "../../../../assets/less/components/component/device/common.less";
</style>

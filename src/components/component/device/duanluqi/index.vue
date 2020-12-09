// 断路器
<template>
  <div class="bm-device-duanluqi-com" :style="comStyle">
    <!-- :viewBox="`${info.vBoxx} ${info.vBoxy} ${info.width} ${info.height}`" -->
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 45 45`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
      .duanluqi-st0{fill:#DFE2E8;}
					.duanluqi-st1{fill:#C1C7CC;}
					.duanluqi-st2{fill:#54626C;} 
					.duanluqi-st3{fill:#2E383D;}
					.duanluqi-st4{fill:#FFFFFF;}
					.duanluqi-st5{fill:#459E37;}
					.duanluqi-st6{fill:#CD5A59;}
					.duanluqi-st7{fill:#5D6471;}
					.duanluqi-st8{fill:#838B99;}
					.duanluqi-st9{fill:#B4BCC7;}
					.duanluqi-st10{fill:#ECF2F9;}
      </style>
      `
        "
      ></defs>
      <rect
        id="duanluqi_18_"
        x="1.3"
        y="17.2"
        class="duanluqi-st0"
        width="42.2"
        height="26.2"
      />
      <polygon
        id="duanluqi_19_"
        class="duanluqi-st1"
        points="43.5,17.2 1.3,17.2 3.5,11.8 41.3,11.8 "
      />
      <rect
        id="duanluqi_20_"
        x="3.5"
        y="1.3"
        class="duanluqi-st0"
        width="37.8"
        height="10.5"
      />
      <rect
        id="duanluqi_21_"
        x="3.5"
        class="duanluqi-st1"
        width="37.8"
        height="1.3"
      />
      <rect
        id="duanluqi_22_"
        x="6"
        y="23.8"
        class="duanluqi-st2"
        width="32.8"
        height="20.7"
      />
      <rect
        id="duanluqi_23_"
        x="6"
        y="22.8"
        class="duanluqi-st3"
        width="32.8"
        height="0.9"
      />
      <rect
        id="duanluqi_28_"
        x="21.9"
        y="22.8"
        class="duanluqi-st3"
        width="0.9"
        height="21.7"
      />
      <circle
        id="duanluqi_24_"
        class="duanluqi-st4"
        cx="14.4"
        cy="32.8"
        r="3.5"
      />
      <circle
        id="duanluqi_25_"
        class="duanluqi-st5"
        cx="14.4"
        cy="32.8"
        r="2.8"
      />
      <circle
        id="duanluqi_27_"
        class="duanluqi-st4"
        cx="30.4"
        cy="32.8"
        r="3.5"
      />
      <circle
        id="duanluqi_26_"
        class="duanluqi-st6"
        cx="30.4"
        cy="32.8"
        r="2.8"
      />
      <path
        id="duanluqi_35_"
        class="duanluqi-st7"
        d="M16.5,15.4h-6.1c-4.1,0-7.1-1.7-8.1-4.6C1.5,8.4,2.4,5.8,4.5,4.2c3-2.2,5.8-1.6,9.1-0.9
					c2.1,0.4,4.4,1,7.3,1c4.7,0,10.2,0.1,10.2,0.1L31.1,8C31.1,8,25.6,7.9,21,7.9c-3.4,0-6-0.6-8.1-1C9.7,6.2,8.3,5.9,6.7,7.1
					C5.8,7.7,5.4,8.8,5.7,9.7c0.4,1.3,2.2,2.1,4.6,2.1h6.1V15.4z"
      />
      <path
        id="duanluqi_36_"
        class="duanluqi-st8"
        d="M16.5,14.7h-6.1c-3.8,0-6.5-1.5-7.4-4.1c-0.7-2.1,0.1-4.4,2-5.8c2.7-2,5.4-1.4,8.5-0.7
					c2.1,0.5,4.5,1,7.5,1c4.7,0,10.2,0.1,10.2,0.1l0,2.2c-0.1,0-5.5-0.1-10.2-0.1c-3.3,0-5.9-0.6-8-1c-3-0.7-4.8-1.1-6.8,0.4
					C5.1,7.3,4.7,8.7,5,9.9c0.5,1.6,2.5,2.6,5.3,2.6h6.1V14.7z"
      />
      <path
        id="duanluqi_37_"
        class="duanluqi-st9"
        d="M16.5,14h-6.1c-3.4,0-5.9-1.4-6.7-3.6c-0.6-1.8,0.1-3.8,1.7-5c2.5-1.8,4.9-1.3,8-0.6
					c2.1,0.5,4.5,1,7.7,1c4.7,0,10.1,0.1,10.2,0.1l0,0.7c-0.1,0-5.5-0.1-10.2-0.1c-3.2,0-5.8-0.6-7.8-1C10,4.8,8,4.3,5.8,5.9
					c-1.4,1-1.9,2.7-1.4,4.2c0.6,1.9,2.9,3.1,6,3.1h6.1V14z"
      />
      <rect
        id="duanluqi_31_"
        x="9.2"
        y="12"
        class="duanluqi-st10"
        width="9.2"
        height="4.3"
      />
      <polygon
        id="duanluqi_30_"
        class="duanluqi-st1"
        points="18.4,12 9.2,12 9.7,9.8 18.4,9.8 "
      />
      <rect
        id="duanluqi_33_"
        x="21.1"
        y="4.9"
        class="duanluqi-st4"
        width="11.6"
        height="5.1"
      />
      <polygon
        id="duanluqi_32_"
        class="duanluqi-st1"
        points="21.1,4.9 32.7,4.9 32.1,2.3 21.1,2.3 "
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
  name: "deviceDuanluqiCom",
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

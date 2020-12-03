// 壁挂式电表
<template>
  <div class="bm-device-bgsdb-com" :style="comStyle">
    <!-- :viewBox="`${info.vBoxx} ${info.vBoxy} ${info.width} ${info.height}`" -->
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 58 75`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
      .bgsdb-st0{fill:#C1C7CC;}
					.bgsdb-st1{fill:#DFE2E8;}
					.bgsdb-st2{fill:#D5D7DB;}
					.bgsdb-st3{fill:#B8BDC0;}
					.bgsdb-st4{fill:#FFFFFF;}
					.bgsdb-st5{fill:#8F9398;}
					.bgsdb-st6{fill:#A2AAB1;}
					.bgsdb-st7{fill:#838776;}
					.bgsdb-st8{fill:#25282B;}
      </style>
      `
        "
      ></defs>
      <path
        id="XMLID_853_"
        class="bgsdb-st0"
        d="M58,12.9H0L4.3,2c0.4-1.2,1.6-2,2.9-2h43.7c1.3,0,2.4,0.8,2.9,2L58,12.9z"
      />
      <path
        id="XMLID_852_"
        class="bgsdb-st1"
        d="M54.7,74.8H3.3c-1.8,0-3.3-1.5-3.3-3.3V12.9c0-1.8,1.5-3.3,3.3-3.3h51.5c1.8,0,3.3,1.5,3.3,3.3
					v58.6C58,73.3,56.5,74.8,54.7,74.8z"
      />
      <path id="XMLID_854_" class="bgsdb-st2" d="M53,60.1H5v-43h48V60.1z" />
      <path id="XMLID_863_" class="bgsdb-st3" d="M53,17.1H5V16h48V17.1z" />
      <path id="XMLID_860_" class="bgsdb-st4" d="M50,57.1H8v-37h42V57.1z" />
      <rect
        id="XMLID_868_"
        x="11.9"
        y="42.6"
        class="bgsdb-st5"
        width="4.5"
        height="2.5"
      />
      <rect
        id="XMLID_867_"
        x="19.9"
        y="42.6"
        class="bgsdb-st5"
        width="4.5"
        height="2.5"
      />
      <rect
        id="XMLID_862_"
        x="11.7"
        y="47.2"
        class="bgsdb-st0"
        width="34"
        height="1"
      />
      <rect
        id="XMLID_865_"
        x="11.7"
        y="51.2"
        class="bgsdb-st0"
        width="34"
        height="1"
      />
      <rect
        id="XMLID_869_"
        x="0"
        y="63.4"
        class="bgsdb-st6"
        width="58"
        height="0.5"
      />
      <g id="XMLID_872_">
        <rect
          id="XMLID_870_"
          x="28.2"
          y="68.1"
          class="bgsdb-st5"
          width="1.6"
          height="3.6"
        />
        <circle id="XMLID_871_" class="bgsdb-st5" cx="29" cy="67.5" r="1.6" />
      </g>
      <g id="XMLID_855_">
        <rect
          id="XMLID_859_"
          x="13"
          y="27.1"
          class="bgsdb-st7"
          width="32"
          height="12"
        />
        <path
          id="XMLID_856_"
          class="bgsdb-st8"
          d="M46,40.1H12v-14h34V40.1z M14,38.1h30v-10H14V38.1z"
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
  name: "deviceBgsdbCom",
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

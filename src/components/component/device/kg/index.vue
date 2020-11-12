// 开关
<template>
  <div class="bm-device-kg-com" :style="comStyle" @click="controlEvent">
    <!-- :viewBox="`${info.vBoxx} ${info.vBoxy} ${info.width} ${info.height}`" -->
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 43 40"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
                        .kg-st0{fill:#B0B9C1;}
                        .kg-st1{fill:#DFE3E8;}
                        .kg-st2{fill:#C0C7CC;}
                        .kg-st3{fill:#FFFFFF;}
                        .kg-st4{fill:#90F22A;}
                        .kg-st5{fill:#67BA06;}
      </style>
      `
        "
      ></defs>
      <g class="SVG_ani" v-if="pointValue == 1">
        <path
          id="XMLID_1351_"
          class="kg-st0"
          d="M39.7,0H3.3C1.5,0,0,1.5,0,3.3v1.9h43V3.3C43,1.5,41.5,0,39.7,0z"
        />
        <path
          id="XMLID_1350_"
          class="kg-st1"
          d="M39.7,40.9H3.3c-1.8,0-3.3-1.5-3.3-3.3V5.2c0-1.8,1.5-3.3,3.3-3.3h36.5c1.8,0,3.3,1.5,3.3,3.3
                          v32.5C43,39.5,41.5,40.9,39.7,40.9z"
        />
        <path
          id="XMLID_1353_"
          class="kg-st2"
          d="M35.5,36.1H7.5C6.1,36.1,5,35,5,33.6V8.4C5,7,6.1,5.9,7.5,5.9h28.1C36.9,5.9,38,7,38,8.4v25.2
                          C38,35,36.9,36.1,35.5,36.1z"
        />
        <path
          id="XMLID_1352_"
          class="kg-st3"
          d="M34.5,36.1H8.5C7.1,36.1,6,35,6,33.6V11.4C6,10,7.1,8.9,8.5,8.9h26.1c1.4,0,2.5,1.1,2.5,2.5
                          v22.2C37,35,35.9,36.1,34.5,36.1z"
        />
        <path
          id="XMLID_1355_"
          class="kg-st4"
          d="M21.8,14.5h-0.7c-0.5,0-1-0.4-1-1V8.9h2.6v4.6C22.8,14,22.4,14.5,21.8,14.5z"
        />
        <g id="XMLID_1383_">
          <path
            id="XMLID_1384_"
            class="kg-st5"
            d="M11.9,24c0-1.5,0.4-2.8,1.2-3.6c0.8-0.9,1.9-1.3,3.2-1.3c0.9,0,1.6,0.2,2.3,0.6
                            s1.2,1,1.6,1.7c0.4,0.7,0.5,1.6,0.5,2.5c0,0.9-0.2,1.8-0.6,2.5s-0.9,1.3-1.6,1.7c-0.7,0.4-1.5,0.6-2.3,0.6c-0.9,0-1.7-0.2-2.3-0.6
                            s-1.2-1-1.6-1.7S11.9,24.8,11.9,24z M13.2,24c0,1.1,0.3,2,0.9,2.6c0.6,0.6,1.4,1,2.3,1c0.9,0,1.7-0.3,2.3-1
                            c0.6-0.7,0.9-1.6,0.9-2.8c0-0.8-0.1-1.4-0.4-2c-0.3-0.6-0.6-1-1.1-1.3c-0.5-0.3-1-0.5-1.7-0.5c-0.9,0-1.6,0.3-2.3,0.9
                            C13.5,21.6,13.2,22.6,13.2,24z"
          />
          <path
            id="XMLID_1387_"
            class="kg-st5"
            d="M22.4,28.5v-9.3h1.3l4.9,7.3v-7.3h1.2v9.3h-1.3l-4.9-7.3v7.3H22.4z"
          />
        </g>
      </g>

      <g class="SVG_sta" v-if="pointValue === 0">
        <path
          id="XMLID_1373_"
          class="kg-st0"
          d="M39.7,0H3.3C1.5,0,0,1.5,0,3.3v1.9h43V3.3C43,1.5,41.5,0,39.7,0z"
        />
        <path
          id="XMLID_1372_"
          class="kg-st1"
          d="M39.7,40.9H3.3c-1.8,0-3.3-1.5-3.3-3.3V5.2c0-1.8,1.5-3.3,3.3-3.3h36.5c1.8,0,3.3,1.5,3.3,3.3
                          v32.5C43,39.5,41.5,40.9,39.7,40.9z"
        />
        <path
          id="XMLID_1366_"
          class="kg-st2"
          d="M35.5,36.1H7.5C6.1,36.1,5,35,5,33.6V8.4C5,7,6.1,5.9,7.5,5.9h28.1C36.9,5.9,38,7,38,8.4v25.2
                          C38,35,36.9,36.1,35.5,36.1z"
        />
        <path
          id="XMLID_1364_"
          class="kg-st3"
          d="M34.5,34.1H8.5C7.1,34.1,6,33,6,31.6V9.4C6,8,7.1,6.9,8.5,6.9h26.1C35.9,6.9,37,8,37,9.4v22.2
                          C37,33,35.9,34.1,34.5,34.1z"
        />
        <path
          id="XMLID_1363_"
          class="kg-st2"
          d="M21.8,12.5h-0.7c-0.5,0-1-0.4-1-1V6.9h2.6v4.6C22.8,12,22.4,12.5,21.8,12.5z"
        />
        <g id="XMLID_1374_">
          <path
            id="XMLID_1375_"
            class="kg-st2"
            d="M8.9,24c0-1.5,0.4-2.8,1.2-3.6c0.8-0.9,1.9-1.3,3.2-1.3c0.9,0,1.6,0.2,2.3,0.6
                            c0.7,0.4,1.2,1,1.6,1.7c0.4,0.7,0.5,1.6,0.5,2.5c0,0.9-0.2,1.8-0.6,2.5s-0.9,1.3-1.6,1.7c-0.7,0.4-1.5,0.6-2.3,0.6
                            c-0.9,0-1.7-0.2-2.3-0.6s-1.2-1-1.6-1.7S8.9,24.8,8.9,24z M10.2,24c0,1.1,0.3,2,0.9,2.6c0.6,0.6,1.4,1,2.3,1c0.9,0,1.7-0.3,2.3-1
                            c0.6-0.7,0.9-1.6,0.9-2.8c0-0.8-0.1-1.4-0.4-2c-0.3-0.6-0.6-1-1.1-1.3c-0.5-0.3-1-0.5-1.7-0.5c-0.9,0-1.6,0.3-2.3,0.9
                            C10.5,21.6,10.2,22.6,10.2,24z"
          />
          <path
            id="XMLID_1379_"
            class="kg-st2"
            d="M19.5,28.5v-9.3h6.3v1.1h-5v2.9h4.4v1.1h-4.4v4.2H19.5z"
          />
          <path
            id="XMLID_1381_"
            class="kg-st2"
            d="M27.4,28.5v-9.3h6.3v1.1h-5v2.9H33v1.1h-4.4v4.2H27.4z"
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
  name: "deviceKgCom",
  data() {
    return {
      pointValue: "1" // expr:'SwSts',stop:0,start:1,alarm:2
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
      showType: "canvas/getShowType"
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
          bmCommon.log("deviceKgCom", device);
          let { pointList = [] } = device || {};
          let point = pointList.find(item => {
            let { point: id = "" } = item || {};
            return id == pointCode; // SwSts  开关状态
          });
          if (point) {
            let { value = "" } = point || {};
            this.pointValue = value;
            // this.pointValue = parseInt(Math.random() * 3);
          }
          // let { value = "", unit = "",id='' } = point || {};
          // info.content = value;
          // info.unit = unit;
          // info.width = $(this.$refs.bmText).width();
          // this.$emit("success"); //组件加载完成回调
        });
      }
    },
    controlEvent() {
      let { info = {}, pointValue = "" } = this;
      let { bindData = {} } = info;
      let { deviceId = "", devicePoint = "" } = bindData || {};
      if (!deviceId) {
        return;
      }
      // let { $vm } = window;
      pointCode = devicePoint;
      let point = pointCode;
      let value = pointValue === 0 ? 1 : 0;
      $vm.$emit("control", { deviceId, point, value });
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

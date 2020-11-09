// 单项导轨电表
<template>
  <div class="bm-device-dxdgdb-com" :style="comStyle">
    <!-- :viewBox="`${info.vBoxx} ${info.vBoxy} ${info.width} ${info.height}`" -->
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 64 60`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
      	.em-st0{fill:#C2C8CE;}
					.em-st1{fill:#DFE3E8;}
					.em-st2{fill:#FFFFFF;}
					.em-st3{fill:#8F9499;}
					.em-st4{fill:#848776;}
					.em-st5{fill:#25282B;}
					.em-st6{fill:#F95D06;}
					.em-st7{fill:#565656;}
					.em-st8{fill:#8BB70F;}
      </style>
      `
        "
      ></defs>
      <g id="XMLID_710_">
        <rect
          id="XMLID_719_"
          x="2"
          y="46.7"
          class="em-st0"
          width="60"
          height="4.5"
        />
        <rect
          id="XMLID_718_"
          x="2"
          y="51.2"
          class="em-st1"
          width="60"
          height="8.6"
        />
        <rect
          id="XMLID_717_"
          x="1"
          y="17.7"
          class="em-st2"
          width="62"
          height="29"
        />
        <path
          id="XMLID_714_"
          class="em-st1"
          d="M64,47.7H0v-31h64V47.7z M2,45.7h53v-27H2V45.7z"
        />
        <polygon
          id="XMLID_713_"
          class="em-st0"
          points="64,16.7 0,16.7 2,12.4 62,12.4 	"
        />
        <rect
          id="XMLID_712_"
          x="2"
          y="3.7"
          class="em-st1"
          width="60"
          height="8.7"
        />
        <polygon
          id="XMLID_711_"
          class="em-st0"
          points="59,0.2 5,0.2 2,3.7 62,3.7 	"
        />
      </g>
      <circle id="XMLID_709_" class="em-st3" cx="11.5" cy="8.1" r="2" />
      <circle id="XMLID_708_" class="em-st3" cx="45.2" cy="8.1" r="2" />
      <g id="XMLID_703_">
        <rect
          id="XMLID_707_"
          x="10.5"
          y="25.1"
          class="em-st4"
          width="27"
          height="12"
        />
        <path
          id="XMLID_704_"
          class="em-st5"
          d="M38.5,38.1h-29v-14h29V38.1z M11.5,36.1h25v-10h-25V36.1z"
        />
      </g>
      <circle id="XMLID_702_" class="em-st3" cx="11.5" cy="54.1" r="2" />
      <circle id="XMLID_701_" class="em-st3" cx="45.2" cy="54.1" r="2" />
      <rect
        id="XMLID_700_"
        x="43.1"
        y="22.1"
        class="em-st3"
        width="4.5"
        height="2.5"
      />
      <rect
        id="XMLID_699_"
        x="43"
        y="36.6"
        class="em-st6"
        width="6.7"
        height="3.7"
      />
      <rect
        id="XMLID_698_"
        x="42.8"
        y="28.6"
        class="em-st0"
        width="7.8"
        height="1"
      />
      <rect
        id="XMLID_697_"
        x="42.8"
        y="30.7"
        class="em-st0"
        width="5.4"
        height="1"
      />
      <g id="XMLID_748_">
        <rect
          id="XMLID_676_"
          x="58.8"
          y="25.8"
          class="em-st7"
          width="1"
          height="16"
        />
        <circle id="XMLID_694_" class="em-st8" cx="59.2" cy="22.2" r="1.5" />
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
  name: "deviceDxdgdbCom",
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

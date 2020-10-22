// 阀控水表
<template>
  <div class="bm-device-fksb-com" :style="comStyle">
    <!-- :viewBox="`${info.vBoxx} ${info.vBoxy} ${info.width} ${info.height}`" -->
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 70 69`"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs>
        <!-- <template v-if="info.backgroundType == 'gradient'">
          <linearGradient
            :id="info.gradientStyle.gradientId"
            :x1="
              `${
                {
                  0: '0%',
                  45: '0%',
                  90: '0%',
                  135: '0%',
                  180: '100%',
                  225: '100%',
                  270: '100%',
                  315: '100%'
                }[info.gradientStyle.angle]
              }`
            "
            :y1="
              `${
                {
                  0: '100%',
                  45: '100%',
                  90: '100%',
                  135: '0%',
                  180: '0%',
                  225: '0%',
                  270: '100%',
                  315: '100%'
                }[info.gradientStyle.angle]
              }`
            "
            :x2="
              `${
                {
                  0: '0%',
                  45: '100%',
                  90: '100%',
                  135: '100%',
                  180: '100%',
                  225: '0%',
                  270: '0%',
                  315: '0%'
                }[info.gradientStyle.angle]
              }`
            "
            :y2="
              `${
                {
                  0: '0%',
                  45: '0%',
                  90: '100%',
                  135: '100%',
                  180: '100%',
                  225: '100%',
                  270: '100%',
                  315: '0%'
                }[info.gradientStyle.angle]
              }`
            "
            v-if="info.gradientStyle.type == 'linear'"
          >
            <stop
              v-for="(item, index) in info.gradientStyle.valueList"
              :key="index"
              :offset="`${item.value}%`"
              :style="`stop-color:${item.code};stop-opacity:1`"
            />
          </linearGradient>
          <radialGradient
            :id="info.gradientStyle.gradientId"
            v-else-if="info.gradientStyle.type == 'radial'"
            :cx="
              {
                '50% 50%': '50%',
                '0% 0%': '0%',
                '100% 0%': '100%',
                '0% 100%': '0%',
                '100% 100%': '100%'
              }[info.gradientStyle.center]
            "
            :cy="
              {
                '50% 50%': '50%',
                '0% 0%': '0%',
                '100% 0%': '0%',
                '0% 100%': '100%',
                '100% 100%': '100%'
              }[info.gradientStyle.center]
            "
            :r="
              {
                '50% 50%': '50%',
                '0% 0%': '160%',
                '100% 0%': '150%',
                '0% 100%': '150%',
                '100% 100%': '140%'
              }[info.gradientStyle.center]
            "
            :fx="
              {
                '50% 50%': '50%',
                '0% 0%': '0%',
                '100% 0%': '100%',
                '0% 100%': '0%',
                '100% 100%': '100%'
              }[info.gradientStyle.center]
            "
            :fy="
              {
                '50% 50%': '50%',
                '0% 0%': '0%',
                '100% 0%': '0%',
                '0% 100%': '100%',
                '100% 100%': '100%'
              }[info.gradientStyle.center]
            "
          >
            <stop
              v-for="(item, index) in info.gradientStyle.valueList"
              :key="index"
              :offset="`${item.value}%`"
              :style="`stop-color:${item.code};stop-opacity:1`"
            />
          </radialGradient>
        </template> -->
      </defs>
      <g>
        <linearGradient
          id="db_1_"
          gradientUnits="userSpaceOnUse"
          x1="60.525"
          y1="62.945"
          x2="54.1179"
          y2="57.8484"
        >
          <stop offset="0" style="stop-color:#C2C8CE" />
          <stop offset="1" style="stop-color:#848689" />
        </linearGradient>
        <path
          class="db-st0"
          d="M67.73,41h-54.5v10.34c0,1.9,1.54,3.44,3.44,3.44h33.57l5.49,12.81l10.94-13.77c0.21-0.2,0.39-0.44,0.55-0.69
                  l0.04-0.05l-0.01-0.01c0.3-0.51,0.48-1.1,0.48-1.73V41z"
        />
        <path
          id="XMLID_657_"
          class="db-st1"
          d="M56.5,55.08H2v10.34c0,1.9,1.54,3.44,3.44,3.44h47.62c1.9,0,3.44-1.54,3.44-3.44V55.08z"
        />
        <linearGradient
          id="db_11_"
          gradientUnits="userSpaceOnUse"
          x1="29.2499"
          y1="58.6952"
          x2="29.2499"
          y2="49.8142"
        >
          <stop offset="0" style="stop-color:#000000;stop-opacity:0" />
          <stop offset="1" style="stop-color:#000000" />
        </linearGradient>
        <rect
          id="XMLID_658_"
          x="2"
          y="54.06"
          class="db-st2"
          width="54.5"
          height="8.88"
        />
        <rect
          id="XMLID_656_"
          x="1"
          y="15.08"
          class="db-st3"
          width="56.5"
          height="39"
        />
        <path
          id="XMLID_653_"
          class="db-st1"
          d="M58.5,55.08H0v-41h58.5V55.08z M2,53.08h54.5v-37H2V53.08z"
        />
        <polygon
          id="XMLID_652_"
          class="db-st4"
          points="58.5,14.08 0,14.08 12.23,0 69.73,0 	"
        />
        <g id="XMLID_647_">
          <rect
            id="XMLID_651_"
            x="9.5"
            y="21.5"
            class="db-st5"
            width="40"
            height="12"
          />
          <path
            id="XMLID_648_"
            class="db-st6"
            d="M50.5,34.5h-42v-14h42V34.5z M10.5,32.5h38v-10h-38V32.5z"
          />
        </g>
        <circle id="XMLID_646_" class="db-st7" cx="11.97" cy="63.16" r="2.03" />
        <circle id="XMLID_645_" class="db-st7" cx="29.22" cy="63.16" r="2.03" />
        <circle id="XMLID_659_" class="db-st7" cx="46.22" cy="63.16" r="2.03" />
        <rect
          id="XMLID_644_"
          x="9.74"
          y="36.5"
          class="db-st6"
          width="4.48"
          height="2.5"
        />
        <rect
          id="XMLID_643_"
          x="19.74"
          y="36.5"
          class="db-st6"
          width="4.48"
          height="2.5"
        />
        <rect
          id="XMLID_635_"
          x="29.74"
          y="36.5"
          class="db-st6"
          width="4.48"
          height="2.5"
        />
        <rect
          id="XMLID_634_"
          x="39.74"
          y="36.5"
          class="db-st6"
          width="4.48"
          height="2.5"
        />
        <rect
          id="XMLID_6_"
          x="8.74"
          y="37.5"
          class="db-st7"
          width="4.48"
          height="2.5"
        />
        <rect
          id="XMLID_5_"
          x="18.74"
          y="37.5"
          class="db-st7"
          width="4.48"
          height="2.5"
        />
        <rect
          id="XMLID_4_"
          x="28.74"
          y="37.5"
          class="db-st7"
          width="4.48"
          height="2.5"
        />
        <rect
          id="XMLID_2_"
          x="38.74"
          y="37.5"
          class="db-st7"
          width="4.48"
          height="2.5"
        />
        <rect
          id="XMLID_632_"
          x="9.61"
          y="44.98"
          class="db-st8"
          width="6.72"
          height="3.69"
        />
        <rect
          id="XMLID_552_"
          x="19.61"
          y="44.98"
          class="db-st8"
          width="6.72"
          height="3.69"
        />
        <rect
          id="XMLID_551_"
          x="29.61"
          y="44.98"
          class="db-st8"
          width="6.72"
          height="3.69"
        />
        <rect
          id="XMLID_9_"
          x="8.61"
          y="45.98"
          class="db-st9"
          width="6.72"
          height="3.69"
        />
        <rect
          id="XMLID_8_"
          x="18.61"
          y="45.98"
          class="db-st9"
          width="6.72"
          height="3.69"
        />
        <rect
          id="XMLID_7_"
          x="28.61"
          y="45.98"
          class="db-st9"
          width="6.72"
          height="3.69"
        />
        <rect
          id="XMLID_550_"
          x="8.48"
          y="42.05"
          class="db-st4"
          width="36.74"
          height="1"
        />
        <linearGradient
          id="db_12_"
          gradientUnits="userSpaceOnUse"
          x1="64.1155"
          y1="55.0819"
          x2="64.1155"
          y2="0"
        >
          <stop offset="0" style="stop-color:#C2C8CE" />
          <stop offset="1" style="stop-color:#848689" />
        </linearGradient>
        <path
          id="db_1_"
          class="db-st10"
          d="M69.73,41L58.5,55.08v-41L69.73,0V41z"
        />
      </g>
      <g class="SVG_alert" v-if="pointValue == 2">
        <path
          class="db-st11"
          d="M69.73,0h-57.5L0,14.08v41h2v7.86v2.48c0,1.9,1.54,3.44,3.44,3.44h47.62c1.08,0,2.04-0.51,2.67-1.29
                  l0.01,0.01l10.94-13.77c0.21-0.2,0.39-0.44,0.55-0.69l0.04-0.05l-0.01-0.01c0.3-0.51,0.48-1.1,0.48-1.73v-7.84l2-2.51V0z"
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
  name: "deviceFksbCom",
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
    ...mapGetters(),

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
          bmCommon.log("deviceFksbCom", device);
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
.db-st0 {
  fill: url(#db_1_);
}
.db-st1 {
  fill: #dfe3e8;
}
.db-st2 {
  fill: url(#db_11_);
}
.db-st3 {
  fill: #ffffff;
}
.db-st4 {
  fill: #c2c8ce;
}
.db-st5 {
  fill: #848776;
}
.db-st6 {
  fill: #25282b;
}
.db-st7 {
  fill: #8f9499;
}
.db-st8 {
  fill: #5b280e;
}
.db-st9 {
  fill: #f95d06;
}
.db-st10 {
  fill: url(#db_12_);
}
.db-st11 {
  opacity: 0.4;
  fill: #ff0000;
}
</style>
<style lang="less">
@import (less) "../../../../assets/less/components/component/device/common.less";
</style>

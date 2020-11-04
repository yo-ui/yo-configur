// 客用电梯
<template>
  <div class="bm-device-kydt-com" :style="comStyle">
    <!-- :viewBox="`${info.vBoxx} ${info.vBoxy} ${info.width} ${info.height}`" -->
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 230 290"
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
        <rect x="89.54" y="2" class="kydt-st0" width="125" height="234" />
        <g class="kydt-st1">
          <rect x="107.01" y="2" class="kydt-st2" width="1.99" height="33.27" />
        </g>
        <g class="kydt-st1">
          <rect x="111.01" y="2" class="kydt-st2" width="1.99" height="33.27" />
        </g>
        <g class="kydt-st1">
          <rect x="115.01" y="2" class="kydt-st2" width="1.99" height="33.27" />
        </g>
        <g class="kydt-st1">
          <rect x="185.01" y="2" class="kydt-st2" width="1.99" height="33.27" />
        </g>
        <g class="kydt-st1">
          <rect x="189.01" y="2" class="kydt-st2" width="1.99" height="33.27" />
        </g>
        <g class="kydt-st1">
          <rect x="193.01" y="2" class="kydt-st2" width="1.99" height="33.27" />
        </g>
        <polygon
          class="kydt-st3"
          points="89.54,237.47 28.54,281.47 28.54,46 89.54,2 	"
        />
        <g>
          <linearGradient
            id="kydt_1_"
            gradientUnits="userSpaceOnUse"
            x1="88.5355"
            y1="287"
            x2="88.5355"
            y2="48"
          >
            <stop offset="0" style="stop-color:#BDBDBD" />
            <stop offset="0.5168" style="stop-color:#F4F4F4" />
            <stop offset="0.6083" style="stop-color:#EEEFEF" />
            <stop offset="0.728" style="stop-color:#DEDFE0" />
            <stop offset="0.8632" style="stop-color:#C3C5C7" />
            <stop offset="1" style="stop-color:#A0A4A7" />
          </linearGradient>
          <rect x="22.54" y="48" class="kydt-st4" width="132" height="239" />
        </g>
        <g>
          <linearGradient
            id="kydt_2_"
            gradientUnits="userSpaceOnUse"
            x1="154.5355"
            y1="143.5"
            x2="220.5355"
            y2="143.5"
          >
            <stop offset="0" style="stop-color:#888E9A" />
            <stop offset="1" style="stop-color:#5A5D6E" />
          </linearGradient>
          <polygon
            class="kydt-st5"
            points="154.54,287 220.54,239 220.54,0 154.54,48 		"
          />
        </g>
        <g class="kydt-st6">
          <polygon points="87.48,48 86.28,48 86.28,287 87.48,287 87.48,48 		" />
        </g>
        <g>
          <g>
            <path
              class="kydt-st7"
              d="M88.54,0l-66,48h132l66-48H88.54z M153.54,46h-125l61-44h125L153.54,46z"
            />
          </g>
        </g>
        <g>
          <polygon
            class="kydt-st8"
            points="170.59,26.44 0,26.44 4.34,23.13 174.93,23.13 		"
          />
        </g>
        <g>
          <polygon
            class="kydt-st2"
            points="170.59,289 174.93,285.69 174.93,23.13 170.59,26.44 		"
          />
        </g>
        <g>
          <linearGradient
            id="kydt_3_"
            gradientUnits="userSpaceOnUse"
            x1="85.2956"
            y1="289"
            x2="85.2956"
            y2="26.4376"
          >
            <stop offset="0" style="stop-color:#959A9E" />
            <stop offset="0.5168" style="stop-color:#E1E2DD" />
            <stop offset="1" style="stop-color:#838793" />
          </linearGradient>
          <polygon
            class="kydt-st9"
            points="0,26.44 0,289 19,289 19,50 151,50 151,289 170.59,289 170.59,26.44 		"
          />
        </g>
        <g>
          <polygon class="kydt-st2" points="22.54,50 19,50 19,289 22.54,287 		" />
        </g>
        <g>
          <rect x="66" y="29.44" class="kydt-st10" width="40" height="17.56" />
        </g>
        <g>
          <rect
            x="153.93"
            y="156.07"
            class="kydt-st11"
            width="14"
            height="30.72"
          />
        </g>
        <g class="kydt-st6">
          <circle cx="161.32" cy="164.59" r="4.17" />
        </g>
        <g>
          <rect x="68" y="31.44" width="36" height="13.56" />
        </g>
        <g>
          <linearGradient
            id="kydt_4_"
            gradientUnits="userSpaceOnUse"
            x1="158.9103"
            y1="162.0714"
            x2="161.7412"
            y2="166.1156"
          >
            <stop offset="0" style="stop-color:#959A9E" />
            <stop offset="1" style="stop-color:#E1E2DD" />
          </linearGradient>
          <circle class="kydt-st12" cx="160.94" cy="164.97" r="3.78" />
        </g>
        <g class="kydt-st6">
          <circle cx="161.32" cy="178.59" r="4.17" />
        </g>
        <g>
          <linearGradient
            id="kydt_5_"
            gradientUnits="userSpaceOnUse"
            x1="158.9103"
            y1="176.0714"
            x2="161.7412"
            y2="180.1156"
          >
            <stop offset="0" style="stop-color:#959A9E" />
            <stop offset="1" style="stop-color:#E1E2DD" />
          </linearGradient>
          <circle class="kydt-st13" cx="160.94" cy="178.97" r="3.78" />
        </g>
      </g>
      <g class="SVG_ani" v-if="pointValue == 1">
        <g class="f1">
          <animate
            values="show;hide"
            dur="2s"
            attributeName="class"
            repeatCount="indefinite"
          />
          <polygon
            class="kydt-st14"
            points="97.72,35.27 94.27,41.16 90.81,35.27 	"
          />

          <radialGradient
            id="kydt_6_"
            cx="474.2651"
            cy="408.2188"
            r="6.7812"
            gradientTransform="matrix(-1 0 0 -1 568.5302 446.4377)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" style="stop-color:#FF0000" />
            <stop offset="1" style="stop-color:#FF0000;stop-opacity:0" />
          </radialGradient>
          <circle class="kydt-st15" cx="94.27" cy="38.22" r="6.78" />
          <polygon
            class="kydt-st16"
            points="73.81,41.16 77.27,35.27 80.72,41.16 	"
          />
        </g>
        <g class="f2">
          <animate
            values="hide;show;"
            dur="2s"
            attributeName="class"
            repeatCount="indefinite"
          />
          <polygon
            class="kydt-st14"
            points="73.81,41.16 77.27,35.27 80.72,41.16 	"
          />
          <radialGradient
            id="kydt_7_"
            cx="77.2651"
            cy="38.2188"
            r="6.7812"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" style="stop-color:#FF0000" />
            <stop offset="1" style="stop-color:#FF0000;stop-opacity:0" />
          </radialGradient>
          <circle class="kydt-st17" cx="77.27" cy="38.22" r="6.78" />
          <polygon
            class="kydt-st16"
            points="97.72,35.27 94.27,41.16 90.81,35.27 	"
          />
        </g>
      </g>

      <g class="SVG_sta" v-if="pointValue === 0">
        <polygon
          class="kydt-st16"
          points="73.81,41.16 77.27,35.27 80.72,41.16 	"
        />
        <polygon
          class="kydt-st16"
          points="97.72,35.27 94.27,41.16 90.81,35.27 	"
        />
      </g>
      <g class="SVG_alert" v-if="pointValue == 2">
        <g class="kydt-st18">
          <polygon
            class="kydt-st14"
            points="220.54,0 88.54,0 56.73,23.13 4.34,23.13 0,26.44 0,289 19,289 22.54,287 86.28,287 87.48,287 
                    151,287 151,289 170.59,289 174.93,285.69 174.93,272.17 220.54,239 		"
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

const pointCode = "SwSts";
export default {
  name: "deviceKydtCom",
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
          bmCommon.log("deviceKydtCom", device);
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
.kydt-st0 {
  fill: #e7e7e5;
}
.kydt-st1 {
  opacity: 0.3;
}
.kydt-st2 {
  fill: #5b5e6f;
}
.kydt-st3 {
  fill: #cbcbc9;
}
.kydt-st4 {
  fill: url(#kydt_1_);
}
.kydt-st5 {
  fill: url(#kydt_2_);
}
.kydt-st6 {
  opacity: 0.6;
}
.kydt-st7 {
  fill: #a5a9ac;
}
.kydt-st8 {
  fill: #c3c3c1;
}
.kydt-st9 {
  fill: url(#kydt_3_);
}
.kydt-st10 {
  fill: #ffffff;
}
.kydt-st11 {
  fill: #7a7e89;
}
.kydt-st12 {
  fill: url(#kydt_4_);
}
.kydt-st13 {
  fill: url(#kydt_5_);
}
.kydt-st14 {
  fill: #ff0000;
}
.kydt-st15 {
  fill: url(#kydt_6_);
}
.kydt-st16 {
  opacity: 0.4;
  fill: #ff0000;
}
.kydt-st17 {
  fill: url(#kydt_7_);
}
.kydt-st18 {
  opacity: 0.4;
}

.show {
  display: default;
}
.hide {
  display: none;
}
.f1 {
  display: default;
}
.f2 {
  display: none;
}
</style>
<style lang="less">
@import (less) "../../../../assets/less/components/component/device/common.less";
</style>

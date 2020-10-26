// 消防水泵
<template>
  <div class="bm-device-xfsb-com" :style="comStyle">
    <!-- :viewBox="`${info.vBoxx} ${info.vBoxy} ${info.width} ${info.height}`" -->
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 194"
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
      <g id="图层_2">
        <path
          id="XMLID_1032_"
          class="st0"
          d="M96.1,195H5.7c-2.5,0-4.5-2-4.5-4.5V14.4l2.9-8.9C5,3.1,6.8,1,9.3,1h83.2
		c2.5,0,4.4,2.2,5.2,4.5l2.9,8.9v176.1C100.6,193,98.6,195,96.1,195z"
        />
        <linearGradient
          id="XMLID_2_"
          gradientUnits="userSpaceOnUse"
          x1="1.7594"
          y1="103.3102"
          x2="100.0523"
          y2="103.3102"
        >
          <stop offset="0" style="stop-color:#CDCFD1" />
          <stop offset="6.000000e-02" style="stop-color:#FFFFFF" />
          <stop offset="0.94" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#CDCFD1" />
        </linearGradient>
        <path
          id="XMLID_1031_"
          class="st1"
          d="M94.5,194.4H7.3c-3.1,0-5.6-2.5-5.6-5.6v-171c0-3.1,2.5-5.6,5.6-5.6h87.2
		c3.1,0,5.6,2.5,5.6,5.6v171C100.1,191.9,97.6,194.4,94.5,194.4z"
        />
        <path
          id="XMLID_1017_"
          class="st2"
          d="M100.4,72.3c0,1.2-1.7,2.2-3.9,2.2H5.2c-2.1,0-3.9-1-3.9-2.2"
        />
        <g>
          <polygon points="35.2,24.7 24,25 13.9,24.7 13.9,23.7 35.2,23.7 		" />
          <rect x="13.9" y="24.7" class="st3" width="21.4" height="15.5" />
          <linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="30.5343"
            y1="36.5012"
            x2="19.7833"
            y2="27.7571"
          >
            <stop offset="0" style="stop-color:#FFFFFF" />
            <stop offset="1" style="stop-color:#B5BABD" />
          </linearGradient>
          <polygon
            class="st4"
            points="33.3,34.4 30.5,37.3 16.7,37.3 16.7,26.7 33.3,26.7 		"
          />
          <polygon points="15.8,37.3 15.8,38.3 29.5,38.3 30.5,37.3 		" />
        </g>
        <g>
          <polygon points="62.2,24.7 51,25 40.9,24.7 40.9,23.7 62.2,23.7 		" />
          <rect x="40.9" y="24.7" class="st3" width="21.4" height="15.5" />
          <linearGradient
            id="SVGID_2_"
            gradientUnits="userSpaceOnUse"
            x1="57.5343"
            y1="36.5012"
            x2="46.7833"
            y2="27.7571"
          >
            <stop offset="0" style="stop-color:#FFFFFF" />
            <stop offset="1" style="stop-color:#B5BABD" />
          </linearGradient>
          <polygon
            class="st5"
            points="60.3,34.4 57.5,37.3 43.7,37.3 43.7,26.7 60.3,26.7 		"
          />
          <polygon points="42.8,37.3 42.8,38.3 56.5,38.3 57.5,37.3 		" />
        </g>
        <g>
          <polygon points="89.2,24.7 78,25 67.9,24.7 67.9,23.7 89.2,23.7 		" />
          <rect x="67.9" y="24.7" class="st3" width="21.4" height="15.5" />
          <linearGradient
            id="SVGID_3_"
            gradientUnits="userSpaceOnUse"
            x1="84.5343"
            y1="36.5012"
            x2="73.7833"
            y2="27.7571"
          >
            <stop offset="0" style="stop-color:#FFFFFF" />
            <stop offset="1" style="stop-color:#B5BABD" />
          </linearGradient>
          <polygon
            class="st6"
            points="87.3,34.4 84.5,37.3 70.7,37.3 70.7,26.7 87.3,26.7 		"
          />
          <polygon points="69.8,37.3 69.8,38.3 83.5,38.3 84.5,37.3 		" />
        </g>
        <g>
          <circle class="st7" cx="29" cy="58" r="4.9" />
          <circle class="st8" cx="29" cy="59" r="4.6" />
          <linearGradient
            id="SVGID_4_"
            gradientUnits="userSpaceOnUse"
            x1="29"
            y1="62.5285"
            x2="29"
            y2="55.4715"
          >
            <stop offset="0" style="stop-color:#8CD400" />
            <stop offset="1" style="stop-color:#4D7F00" />
          </linearGradient>
          <circle class="st9" cx="29" cy="59" r="3.5" />
        </g>
        <g>
          <circle class="st7" cx="51.3" cy="58" r="4.9" />
          <circle class="st8" cx="51.3" cy="59" r="4.6" />
          <linearGradient
            id="SVGID_5_"
            gradientUnits="userSpaceOnUse"
            x1="51.326"
            y1="62.5285"
            x2="51.326"
            y2="55.4715"
          >
            <stop offset="0" style="stop-color:#FF8955" />
            <stop offset="1" style="stop-color:#970000" />
          </linearGradient>
          <circle class="st10" cx="51.3" cy="59" r="3.5" />
        </g>
        <g>
          <circle class="st7" cx="74.3" cy="58" r="4.9" />
          <circle class="st8" cx="74.3" cy="59" r="4.6" />
          <linearGradient
            id="SVGID_6_"
            gradientUnits="userSpaceOnUse"
            x1="74.326"
            y1="62.5285"
            x2="74.326"
            y2="55.4715"
          >
            <stop offset="0" style="stop-color:#FF8955" />
            <stop offset="1" style="stop-color:#970000" />
          </linearGradient>
          <circle class="st11" cx="74.3" cy="59" r="3.5" />
        </g>
        <g id="XMLID_620_">
          <rect
            id="XMLID_624_"
            x="36.7"
            y="85.9"
            class="st12"
            width="30"
            height="16.9"
          />
          <path
            id="XMLID_621_"
            class="st13"
            d="M67.7,103.9h-32V84.9h32V103.9z M37.7,101.9h28V86.9h-28V101.9z"
          />
        </g>
        <g id="XMLID_543_">
          <path
            id="XMLID_546_"
            class="st14"
            d="M19.2,99.5c-1.5,0-2.6,1.2-2.6,2.6v15.4c0,1.5,1.2,2.6,2.6,2.6c1.5,0,2.6-1.2,2.6-2.6v-15.4
			C21.8,100.7,20.7,99.5,19.2,99.5z"
          />
          <path
            id="XMLID_354_"
            class="st15"
            d="M19.2,101c-0.8,0-1.4,0.6-1.4,1.4v14.9c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4v-14.9
			C20.6,101.6,20,101,19.2,101z"
          />
        </g>
        <g>
          <rect
            x="14"
            y="183.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -126.1876 64.9021)"
            class="st16"
            width="2.5"
            height="2.5"
          />

          <rect
            x="22"
            y="183.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -123.8444 70.559)"
            class="st16"
            width="2.5"
            height="2.5"
          />

          <rect
            x="30"
            y="183.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -121.5013 76.2158)"
            class="st16"
            width="2.5"
            height="2.5"
          />

          <rect
            x="38"
            y="183.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -119.1581 81.8727)"
            class="st16"
            width="2.5"
            height="2.5"
          />

          <rect
            x="46"
            y="183.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -116.815 87.5295)"
            class="st16"
            width="2.5"
            height="2.5"
          />

          <rect
            x="54"
            y="183.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -114.4718 93.1864)"
            class="st16"
            width="2.5"
            height="2.5"
          />

          <rect
            x="62"
            y="183.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -112.1287 98.8433)"
            class="st16"
            width="2.5"
            height="2.5"
          />

          <rect
            x="70"
            y="183.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -109.7856 104.5001)"
            class="st16"
            width="2.5"
            height="2.5"
          />

          <rect
            x="78"
            y="183.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -107.4424 110.157)"
            class="st16"
            width="2.5"
            height="2.5"
          />

          <rect
            x="86"
            y="183.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -105.0993 115.8138)"
            class="st16"
            width="2.5"
            height="2.5"
          />
        </g>
        <g>
          <rect
            x="18"
            y="176.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -120.0663 65.6803)"
            class="st16"
            width="2.5"
            height="2.5"
          />

          <rect
            x="26"
            y="176.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -117.7231 71.3372)"
            class="st16"
            width="2.5"
            height="2.5"
          />
          <rect
            x="34"
            y="176.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -115.38 76.994)"
            class="st16"
            width="2.5"
            height="2.5"
          />

          <rect
            x="42"
            y="176.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -113.0368 82.6509)"
            class="st16"
            width="2.5"
            height="2.5"
          />

          <rect
            x="50"
            y="176.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -110.6937 88.3077)"
            class="st16"
            width="2.5"
            height="2.5"
          />

          <rect
            x="58"
            y="176.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -108.3505 93.9646)"
            class="st16"
            width="2.5"
            height="2.5"
          />

          <rect
            x="66"
            y="176.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -106.0074 99.6214)"
            class="st16"
            width="2.5"
            height="2.5"
          />

          <rect
            x="74"
            y="176.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -103.6642 105.2783)"
            class="st16"
            width="2.5"
            height="2.5"
          />

          <rect
            x="82"
            y="176.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -101.3211 110.9351)"
            class="st16"
            width="2.5"
            height="2.5"
          />
        </g>
      </g>
      <g id="SVG_ani" v-if="pointValue == 1">
        <linearGradient
          id="SVGID_7_"
          gradientUnits="userSpaceOnUse"
          x1="1.7594"
          y1="134.6873"
          x2="100.0523"
          y2="134.6873"
        >
          <stop offset="6.149733e-02" style="stop-color:#394147" />
          <stop offset="8.673798e-02" style="stop-color:#616668" />
          <stop offset="0.9118" style="stop-color:#616668" />
          <stop offset="0.9186" style="stop-color:#616668" />
          <stop offset="0.9465" style="stop-color:#394147" />
        </linearGradient>
        <path
          class="st17"
          d="M1.8,75v113.8c0,3.1,2.5,5.6,5.6,5.6h87.2c3.1,0,5.6-2.5,5.6-5.6V75H1.8z"
        />
        <path
          class="st18"
          d="M100,189.4l-1.9-6c-0.8-2.3-2.8-4.5-5.2-4.5H9c-2.5,0-4.3,2.1-5.2,4.5l-1.9,6c0.3,2.8,2.7,4.9,5.5,4.9h87.2
		C97.3,194.4,99.7,192.2,100,189.4z"
        />
        <g>
          <path
            class="st19"
            d="M78.8,171h-2.7c-4,0-7.2-3.2-7.2-7.2V89c0-1.8-1.4-3.2-3.2-3.2h-2.7c-1.8,0-3.2,1.4-3.2,3.2v74.8
			c0,4-3.2,7.2-7.2,7.2h-2.7c-4,0-7.2-3.2-7.2-7.2V89c0-1.8-1.4-3.2-3.2-3.2H37c-1.8,0-3.2,1.4-3.2,3.2v74.8c0,4-3.2,7.2-7.2,7.2H24
			c-4,0-7.2-3.2-7.2-7.2v-80h4v80c0,1.8,1.4,3.2,3.2,3.2h2.7c1.8,0,3.2-1.4,3.2-3.2V89c0-4,3.2-7.2,7.2-7.2h2.7c4,0,7.2,3.2,7.2,7.2
			v74.8c0,1.8,1.4,3.2,3.2,3.2h2.7c1.8,0,3.2-1.4,3.2-3.2V89c0-4,3.2-7.2,7.2-7.2h2.7c4,0,7.2,3.2,7.2,7.2v74.8
			c0,1.8,1.4,3.2,3.2,3.2h2.7c1.8,0,3.2-1.4,3.2-3.2v-80h4v80C86,167.8,82.8,171,78.8,171z"
          />
        </g>
      </g>

      <g id="SVG_alert" v-if="pointValue == 2">
        <path
          class="st20"
          d="M97.7,5.5C96.9,3.2,95,1,92.5,1H9.3C6.8,1,5,3.1,4.1,5.5l-2.9,8.9v176.1c0,2.5,2,4.5,4.5,4.5h90.4
		c2.5,0,4.5-2,4.5-4.5V14.4L97.7,5.5z"
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
  name: "deviceXfsbCom",
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
          bmCommon.log("deviceShsbCom", device);
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
.st0 {
  fill: #d0d4d8;
}
.st1 {
  fill: url(#XMLID_2_);
}
.st2 {
  fill: none;
  stroke: #d0d4d8;
  stroke-width: 0.75;
  stroke-miterlimit: 10;
}
.st3 {
  fill: #333333;
}
.st4 {
  fill: url(#SVGID_1_);
}
.st5 {
  fill: url(#SVGID_2_);
}
.st6 {
  fill: url(#SVGID_3_);
}
.st7 {
  fill: #3b3b3b;
}
.st8 {
  fill: #ffffff;
}
.st9 {
  fill: url(#SVGID_4_);
}
.st10 {
  fill: url(#SVGID_5_);
}
.st11 {
  fill: url(#SVGID_6_);
}
.st12 {
  fill: #848776;
}
.st13 {
  fill: #25282b;
}
.st14 {
  fill: #444444;
}
.st15 {
  fill: #666666;
}
.st16 {
  fill: #7d7d7d;
}
.st17 {
  fill: url(#SVGID_7_);
}
.st18 {
  fill: #2f3133;
}
.st19 {
  fill: #fffa63;
}
.st20 {
  opacity: 0.38;
  fill: #ff0000;
}
</style>
<style lang="less">
@import (less) "../../../../assets/less/components/component/device/common.less";
</style>

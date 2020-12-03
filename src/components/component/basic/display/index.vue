<template>
  <div class="bm-basic-display-com" :style="comStyle">
    <!-- <img src="/static/img/svg/display.svg" /> -->
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 89 43"
      :width="info.width"
      :height="info.height"
      style="enable-background:new 0 0 89 43;"
      xml:space="preserve"
      preserveAspectRatio="none"
    >
      <defs
        v-html="
          `<style type='text/css'>
        .display-st0 {
          fill: #ffffff;
        }
        .display-st1 {
          fill: #dfe3e8;
        }
        .display-st2 {
          fill: #c2c8ce;
        }
        .display-st3 {
          fill: url(#display_4_);
        }
        .display-st4 {
          fill: #9da1a5;
        }
        .display-st5 {
          fill: #848776;
        }
        .display-st6 {
          fill: #25282b;
        }
      </style>`
        "
      ></defs>
      <g>
        <rect
          id="XMLID_656_"
          x="1"
          y="4.1"
          class="display-st0"
          width="79.5"
          height="38"
        />
        <path
          id="XMLID_653_"
          class="display-st1"
          d="M81.5,43.1H0v-40h81.5V43.1z M2,41.1h77.5v-36H2V41.1z"
        />
        <polygon
          id="XMLID_652_"
          class="display-st2"
          points="81.5,3.1 0,3.1 8.2,0 88.7,0 	"
        />
        <linearGradient
          id="display_4_"
          gradientUnits="userSpaceOnUse"
          x1="85.1155"
          y1="43.0819"
          x2="85.1155"
          y2="0"
        >
          <stop offset="0" style="stop-color:#C2C8CE" />
          <stop offset="1" style="stop-color:#848689" />
        </linearGradient>
        <path
          id="XMLID_1_"
          class="display-st3"
          d="M88.7,40l-7.2,3.1v-40L88.7,0V40z"
        />
      </g>
      <g>
        <path
          id="XMLID_10_"
          class="display-st4"
          d="M76.5,37.1H5v-5h71.5V37.1z"
        />
      </g>
      <g>
        <g id="XMLID_647_">
          <rect
            id="XMLID_651_"
            x="6.5"
            y="8.5"
            class="display-st5"
            width="69"
            height="19"
          />
          <path
            id="XMLID_648_"
            class="st6"
            d="M76.5,28.5h-71v-21h71V28.5z M7.5,26.5h67v-17h-67V26.5z"
          />
        </g>
      </g>
    </svg>
    <span ref="bmText" class="text" :style="textStyle"
      >{{ info.content
      }}<small :style="unitStyle">{{ info.unit || "℃" }}</small></span
    >
  </div>
</template>

<script>
import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "displayCom",
  data() {
    return {};
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

    // //渐变颜色样式
    // gradientStyle() {
    //   let { info = {} } = this;
    //   let { gradientStyle = {} } = info || {};
    //   let {
    //     type = "",
    //     angle = "",
    //     center = "",
    //     radialShape = "",
    //     valueList = []
    //   } = gradientStyle || {};
    //   let styles = {};
    //   let colors = valueList.map(item => `${item.code} ${item.value}%`);
    //   if (type == "linear") {
    //     styles.backgroundImage = `linear-gradient(${angle}deg, ${colors.join()})`;
    //   } else if (type == "radial") {
    //     styles.backgroundImage = `radial-gradient(${radialShape} at ${center}, ${colors.join()})`;
    //   }
    //   return styles;
    // },
    comStyle() {
      let { info = {} } = this;
      let {
        width = "",
        height = ""
        // color = "",
        // borderColor = "",
        // borderStyle = "",
        // borderWidth = "",
        // borderRadius = "",
        // scale = "",
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

      if (width) {
        styles["width"] = `${width}px`;
      }
      if (height) {
        styles["height"] = `${height}px`;
      }
      // if (backgroundRepeat) {
      //   styles["backgroundRepeat"] = backgroundRepeat;
      // }
      // if (backgroundSize) {
      //   styles["backgroundSize"] = backgroundSize;
      // }
      // if (borderColor) {
      //   styles["borderColor"] = borderColor;
      // }
      // if (borderStyle) {
      //   styles["borderStyle"] = borderStyle;
      // }
      // styles["borderWidth"] = `${borderWidth}px`;
      // styles["borderRadius"] = `${borderRadius}px`;
      // if (scale) {
      //   (styles["transform"] = `${scale}`),
      //     (styles["-webkit-transform"] = `${scale}`),
      //     (styles["-ms-transform"] = `${scale}`),
      //     (styles["-o-transform"] = `${scale}`),
      //     (styles["-moz-transform"] = `${scale}`);
      // }
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
    },
    textStyle() {
      let { info = {} } = this;
      let {
        color = "",
        textShadow = {},
        textShadowable = false,
        textAlign = "",
        fontFamily = "",
        fontSize = "",
        fontWeight = "",
        fontStyle = "",
        textDecoration = "",

        marginTop = 0,
        marginBottom = 0,
        marginLeft = 0,
        marginRight = 0,
        paddingTop = 0,
        paddingBottom = 0,
        paddingLeft = 0,
        paddingRight = 0
      } = info || {};
      let styles = {
        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
        padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
      };
      if (color) {
        styles["color"] = color;
      }
      if (fontSize) {
        styles["fontSize"] = `${fontSize}px`;
      }
      if (fontFamily) {
        styles["fontFamily"] = `${fontFamily}`;
      }
      if (fontWeight) {
        styles["fontWeight"] = fontWeight;
      }
      if (fontStyle) {
        styles["fontStyle"] = fontStyle;
      }
      if (textAlign) {
        styles["textAlign"] = textAlign;
        if (textAlign == "justify") {
          styles["text-align-last"] = textAlign;
        }
      }
      if (textDecoration) {
        styles["textDecoration"] = textDecoration;
      }
      if (textShadowable) {
        let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
        styles["textShadow"] = `${x}px ${y}px ${blur}px ${color}`;
      }
      return styles || {};
    },
    unitStyle() {
      let { info = {} } = this;
      let { unitColor = "", unitFontFamily = "", unitFontSize = "" } =
        info || {};
      let styles = {};
      if (unitColor) {
        styles["color"] = unitColor;
      }
      if (unitFontSize) {
        styles["fontSize"] = `${unitFontSize}px`;
      }
      if (unitFontFamily) {
        styles["fontFamily"] = `${unitFontFamily}`;
      }
      return styles || {};
    }
  },
  mounted() {
    this.$emit("success"); //组件加载完成回调
    this.init();
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),
    init() {
      let { info = {}, showType = "" } = this;
      if (showType != "edit") {
        let { id = "" } = info || {};
        let { bindData = {} } = info || {};
        let { deviceId = "", devicePoint = "" } = bindData || {};
        if (!deviceId) {
          return;
        }
        $vm.$on(`devicePointEvent_${id}`, ({ device, point = {} }) => {
          bmCommon.log("displayCom", device, point);
          let { value = "", unit = "" } = point || {};
          info.content = value;
          info.unit = unit;
          this.$emit("success"); //组件加载完成回调
        });
        $vm.$emit(`deviceList`, {
          ids: [deviceId],
          callback: (deviceList = []) => {
            let device = deviceList.find(item => {
              return deviceId == item.id;
            });
            if (device) {
              let { points = [] } = device || {};
              let pointObj = points.find(item => {
                return item.id == devicePoint;
              });
              if (pointObj) {
                let { value = "", unit = "" } = pointObj || {};
                info.content = value;
                info.unit = unit;
              }
            }
            // info.width = $(this.$refs.bmText).width();
            this.$emit("success"); //组件加载完成回调
          }
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

<style lang="less">
@import (less) "../../../../assets/less/components/component/basic/display.less";
</style>

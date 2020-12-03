// 接地刀闸
<template>
  <div class="bm-basic-compass-com" :style="comStyle">
    <!-- :viewBox="`${info.vBoxx} ${info.vBoxy} ${info.width} ${info.height}`" -->
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 200 200`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
	.st0{fill:#FFFFFF;}
	.st1{fill:#BFBFBF;}
	.st2{fill-rule:evenodd;clip-rule:evenodd;fill:#C60909;}
	.st3{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}
      </style>
      `
        "
      ></defs>

      <g id="图层_3">
        <path
          class="st0"
          d="M100,3C46.4,3,3,46.4,3,100s43.4,97,97,97s97-43.4,97-97S153.6,3,100,3L100,3z"
        />
      </g>
      <g id="图层_1">
        <path
          class="st1"
          d="M100,41c32.5,0,59,26.5,59,59s-26.5,59-59,59s-59-26.5-59-59S67.5,41,100,41 M100,37c-34.8,0-63,28.2-63,63
		s28.2,63,63,63s63-28.2,63-63S134.8,37,100,37L100,37z"
        />
        <g>
          <rect x="98" y="39.2" class="st1" width="4" height="13.8" />
          <rect x="98" y="147" class="st1" width="4" height="13.8" />
        </g>
        <g>
          <rect x="147" y="98" class="st1" width="13.8" height="4" />
          <rect x="39.2" y="98" class="st1" width="13.8" height="4" />
        </g>
        <polygon class="st2" points="100,146 82.4,100 100,54 117.6,100 	" />
        <polygon class="st3" points="100,140 84.7,100 115.3,100 	" />
      </g>
      <g id="图层_2">
        <g>
          <g>
            <path
              d="M92.9,27.5V8.9h2.6c2.8,4.4,9.2,14.3,10.3,16.3h0c-0.2-2.6-0.1-5.4-0.1-8.4V8.9h1.9v18.6h-2.5
				c-2.6-4.2-9.2-14.6-10.4-16.7h0c0.1,2.3,0.1,5.2,0.1,8.6v8.1H92.9z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M94.5,184.5c0.5,2.4,2.1,3.7,5,3.7c3.2,0,4.4-1.5,4.4-3.5c0-2-0.9-3.2-4.9-4.1c-4.1-1-5.8-2.4-5.8-5.1
				c0-2.6,1.9-4.9,6-4.9c4.2,0,6,2.5,6.3,4.9h-2c-0.4-1.8-1.6-3.2-4.4-3.2c-2.5,0-3.9,1.1-3.9,3.1c0,1.9,1.1,2.7,4.5,3.5
				c5.3,1.3,6.1,3.4,6.1,5.7c0,2.9-2.1,5.2-6.5,5.2c-4.7,0-6.5-2.6-6.9-5.3H94.5z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M184.2,99.6h-9.4v7.3h10.3l-0.3,1.7h-11.9V89.9h11.7v1.7h-9.9v6.3h9.4V99.6z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M14.1,108.5L9,89.9h2c1.3,5.2,3.8,14.3,4.2,16.5h0c0.4-2,3.2-11.6,4.5-16.5h2c1.2,4.4,4,14.6,4.3,16.4h0
				c0.6-2.9,3.5-12.3,4.6-16.4h1.9L27,108.5h-2.1c-1.2-4.3-3.9-14.3-4.2-16.1h0c-0.5,2.6-3.2,11.7-4.4,16.1H14.1z"
            />
          </g>
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
  name: "basicCompassCom",
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
    //渐变颜色样式
    gradientStyle() {
      return (info = {}) => {
        // let { info = {} } = this;
        let { gradientStyle = {} } = info || {};
        let {
          type = "",
          angle = "",
          center = "",
          radialShape = "",
          valueList = []
        } = gradientStyle || {};
        let styles = {};
        let colors = valueList.map(item => `${item.code} ${item.value}%`);
        if (type == "linear") {
          styles.backgroundImage = `linear-gradient(${angle}deg, ${colors.join()})`;
        } else if (type == "radial") {
          styles.backgroundImage = `radial-gradient(${radialShape} at ${center}, ${colors.join()})`;
        }
        return styles;
      };
    },
    comStyle() {
      let { info = {} ,gradientStyle} = this;
      let {
        width = "",
        height = "",
        color = "",
        borderColor = "",
        borderStyle = "",
        borderWidth = "",
        borderRadius = "",
        // scale = "",
        marginTop = 0,
        marginBottom = 0,
        marginLeft = 0,
        marginRight = 0,
        paddingTop = 0,
        paddingBottom = 0,
        paddingLeft = 0,
        paddingRight = 0,
        shadow = {},
        shadowable = false,
        textShadow = {},
        textShadowable = false,
        textAlign = "",
        fontFamily = "",
        backgroundType = "",
        fontSize = "",
        fontWeight = "",
        fontStyle = "",
        textDecoration = "",
        backgroundColor = "",
        backgroundImage = "",
        backgroundRepeat = "",
        backgroundSize = ""
      } = info || {};
      let styles = {
        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
        padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
      };
      if (width) {
        styles["width"] = `${width}px`;
      }
      if (height) {
        styles["height"] = `${height}px`;
      }
      if (textAlign) {
        styles["textAlign"] = textAlign;
        if (textAlign == "justify") {
          styles["text-align-last"] = textAlign;
        }
      }
      if (backgroundRepeat) {
        styles["backgroundRepeat"] = backgroundRepeat;
      }
      if (backgroundSize) {
        styles["backgroundSize"] = backgroundSize;
      }
      if (borderColor) {
        styles["borderColor"] = borderColor;
      }
      if (borderStyle) {
        styles["borderStyle"] = borderStyle;
      }
      styles["borderWidth"] = `${borderWidth}px`;
      styles["borderRadius"] = `${borderRadius}px`;
      if (shadowable) {
        let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
          shadow || {};
        styles[
          "boxShadow"
        ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      }
      if (textShadowable) {
        let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
        styles["textShadow"] = `${x}px ${y}px ${blur}px ${color}`;
      }
      // if (scale) {
      //   (styles["transform"] = `${scale}`),
      //     (styles["-webkit-transform"] = `${scale}`),
      //     (styles["-ms-transform"] = `${scale}`),
      //     (styles["-o-transform"] = `${scale}`),
      //     (styles["-moz-transform"] = `${scale}`);
      // }
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
      if (textDecoration) {
        styles["textDecoration"] = textDecoration;
      }
      if (backgroundType == "purity") {
        //纯色
        if (backgroundColor) {
          styles["backgroundColor"] = backgroundColor;
        }
        if (backgroundImage) {
          styles["backgroundImage"] = `url(${this.$loadImgUrl(
            backgroundImage
          )})`;
        }
      } else if (backgroundType == "gradient") {
        //渐变
        styles = { ...styles, ...gradientStyle(info) };
      }
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

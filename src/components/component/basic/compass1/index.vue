// 接地刀闸
<template>
  <div class="bm-basic-compass1-com" :style="comStyle">
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
	.compass1-${info.id}-st0{opacity:0.3;fill:#494949;}
	.compass1-${info.id}-st1{opacity:0.5;}
	.compass1-${info.id}-st2{fill:#FFFFFF;}
	.compass1-${info.id}-st3{opacity:0.5;fill:#FFFFFF;}
      </style>
      `
        "
      ></defs>

      <g id="图层_3">
        <path
          :class="`compass1-${info.id}-st0`"
          d="M100,3C46.4,3,3,46.4,3,100s43.4,97,97,97s97-43.4,97-97S153.6,3,100,3L100,3z"
        />
      </g>
      <g id="图层_5">
        <g :class="`compass1-${info.id}-st1`">
          <path
            :class="`compass1-${info.id}-st2`"
            d="M124.4,54.3l-2.2,3.8l3,1.7l2.2-3.8c6.7,4.2,12.4,9.9,16.6,16.6l-3.8,2.2l1.7,3l3.8-2.2c2.3,4.2,4,8.8,5,13.6
			l7.4,1.9c-3.8-25.3-23.8-45.3-49.1-49.1l1.9,7.4C115.6,50.4,120.1,52.1,124.4,54.3z"
          />
          <path
            :class="`compass1-${info.id}-st2`"
            d="M42,91.1l7.4-1.9c1-4.8,2.7-9.4,5-13.6l3.8,2.2l1.7-3l-3.8-2.2c4.2-6.7,9.9-12.4,16.6-16.6l2.2,3.8l3-1.7
			l-2.2-3.8c4.2-2.3,8.8-4,13.6-5l1.9-7.4C65.8,45.8,45.8,65.8,42,91.1z"
          />
          <path
            :class="`compass1-${info.id}-st2`"
            d="M75.6,145.7l2.2-3.8l-3-1.7l-2.2,3.8c-6.7-4.2-12.4-9.9-16.6-16.6l3.8-2.2l-1.7-3l-3.8,2.2
			c-2.3-4.2-4-8.8-5-13.6l-7.4-1.9c3.8,25.3,23.8,45.3,49.1,49.1l-1.9-7.4C84.4,149.6,79.9,147.9,75.6,145.7z"
          />
          <path
            :class="`compass1-${info.id}-st2`"
            d="M145.7,124.4l-3.8-2.2l-1.7,3l3.8,2.2c-4.2,6.7-9.9,12.4-16.6,16.6l-2.2-3.8l-3,1.7l2.2,3.8
			c-4.2,2.3-8.8,4-13.6,5l-1.9,7.4c25.3-3.8,45.3-23.8,49.1-49.1l-7.4,1.9C149.6,115.6,147.9,120.1,145.7,124.4z"
          />
        </g>

        <ellipse
          id="compass1_422_"
          transform="matrix(0.8488 -0.5287 0.5287 0.8488 -37.7502 67.986)"
          :class="`compass1-${info.id}-st3`"
          cx="100"
          cy="100"
          rx="6.8"
          ry="6.8"
        />
        <path
          id="compass1_434_"
          :class="`compass1-${info.id}-st2`"
          d="M131.3,68.4l-19.1,12.7L100,33.2L87.8,81.6L68.4,68.7l12.7,19.1L33.2,100l48.4,12.2
		l-12.9,19.4l19.1-12.7l12.1,47.9l12.2-48.4l19.4,12.9l-12.7-19.1l47.9-12.1l-48.4-12.2L131.3,68.4z M100,51.6l8.6,33.9
		c-2.5-1.5-5.4-2.3-8.6-2.3V51.6z M83.1,100H51.6l33.9-8.6C83.9,93.9,83.1,96.9,83.1,100z M100,148.4l-8.6-33.9
		c2.5,1.5,5.4,2.3,8.6,2.3V148.4z M100,113.5c-7.4,0-13.5-6-13.5-13.5c0-7.4,6-13.5,13.5-13.5c7.4,0,13.5,6,13.5,13.5
		C113.5,107.4,107.4,113.5,100,113.5z M148.4,100l-33.9,8.6c1.5-2.5,2.3-5.4,2.3-8.6H148.4z"
        />
        <polygon
          id="compass1_439_"
          :class="`compass1-${info.id}-st2`"
          points="96.1,17 96.2,17 103.6,29 107.6,29 107.6,11.1 103.9,11.1 103.9,23.1 103.8,23.1
		96.4,11.1 92.4,11.1 92.4,29 96.1,29 	"
        />
        <path
          id="compass1_440_"
          :class="`compass1-${info.id}-st2`"
          d="M105.4,181.1c-0.6-0.4-1.2-0.7-1.8-0.8c-0.6-0.2-1.1-0.3-1.4-0.4c-1.1-0.3-2-0.5-2.7-0.7
		c-0.7-0.2-1.2-0.4-1.6-0.6c-0.4-0.2-0.7-0.4-0.8-0.6c-0.1-0.2-0.2-0.5-0.2-0.9c0-0.4,0.1-0.7,0.3-1c0.2-0.3,0.4-0.5,0.6-0.6
		c0.3-0.2,0.5-0.3,0.9-0.4c0.3-0.1,0.6-0.1,1-0.1c0.5,0,0.9,0,1.3,0.1c0.4,0.1,0.8,0.2,1.1,0.4c0.3,0.2,0.6,0.5,0.8,0.8
		c0.2,0.4,0.3,0.8,0.3,1.3h3.8c0-1-0.2-1.9-0.6-2.6c-0.4-0.7-0.9-1.3-1.6-1.8c-0.7-0.5-1.4-0.8-2.3-1c-0.9-0.2-1.8-0.3-2.7-0.3
		c-0.8,0-1.6,0.1-2.4,0.3c-0.8,0.2-1.5,0.6-2.2,1c-0.6,0.5-1.1,1-1.5,1.7c-0.4,0.7-0.6,1.5-0.6,2.4c0,0.8,0.2,1.5,0.5,2.1
		c0.3,0.6,0.7,1.1,1.2,1.4c0.5,0.4,1.1,0.7,1.7,0.9c0.6,0.2,1.3,0.4,2,0.6c0.7,0.2,1.3,0.4,1.9,0.5c0.6,0.2,1.2,0.3,1.7,0.5
		c0.5,0.2,0.9,0.5,1.2,0.8c0.3,0.3,0.5,0.7,0.5,1.2c0,0.5-0.1,0.8-0.4,1.1c-0.2,0.3-0.5,0.5-0.9,0.7c-0.4,0.2-0.7,0.3-1.1,0.3
		c-0.4,0.1-0.8,0.1-1.1,0.1c-0.5,0-1-0.1-1.5-0.2c-0.5-0.1-0.9-0.3-1.3-0.6c-0.4-0.3-0.6-0.6-0.9-1c-0.2-0.4-0.3-0.9-0.3-1.5h-3.8
		c0,1.1,0.2,2.1,0.6,2.9c0.4,0.8,1,1.5,1.7,2c0.7,0.5,1.5,0.9,2.5,1.1c0.9,0.2,1.9,0.4,2.9,0.4c1.2,0,2.3-0.1,3.2-0.4
		c0.9-0.3,1.7-0.7,2.3-1.2c0.6-0.5,1.1-1.1,1.4-1.8c0.3-0.7,0.5-1.5,0.5-2.3c0-1-0.2-1.8-0.6-2.5C106.5,182,106,181.5,105.4,181.1z"
        />
        <polygon
          id="compass1_441_"
          :class="`compass1-${info.id}-st2`"
          points="24,103 23.9,103 20.9,90.7 17.2,90.7 14.1,102.9 14,102.9 11.2,90.7 7.3,90.7
		12,108.6 16,108.6 19,96.4 19,96.4 22.1,108.6 26,108.6 30.8,90.7 26.9,90.7 	"
        />
        <polygon
          id="compass1_442_"
          :class="`compass1-${info.id}-st2`"
          points="177.4,105.3 177.4,100.9 186.1,100.9 186.1,97.8 177.4,97.8 177.4,94 186.9,94
		186.9,90.7 173.5,90.7 173.5,108.6 187.1,108.6 187.1,105.3 	"
        />
      </g>
    </svg>
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "basicCompass1Com",
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
      let { info = {}, gradientStyle } = this;
      let {
        width = "",
        height = "",
        color = "",
        borderColor = "",
        borderStyle = "",
        borderWidth = "",
        borderRadiusTopLeft = 0,
        borderRadiusTopRight = 0,
        borderRadiusBottomLeft = 0,
        borderRadiusBottomRight = 0,
        // scale = "",
        marginTop = 0,
        marginBottom = 0,
        marginLeft = 0,
        marginRight = 0,
        borderTop = 0,
        borderBottom = 0,
        borderLeft = 0,
        borderRight = 0,
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
      if (borderTop) {
        if (borderStyle) {
          styles["borderTopStyle"] = borderStyle;
        }
        styles["borderTopWidth"] = `${borderWidth}px`;
        if (borderColor) {
          styles["borderTopColor"] = borderColor;
        }
      } else {
        styles["borderTop"] = "none";
      }
      if (borderBottom) {
        if (borderStyle) {
          styles["borderBottomStyle"] = borderStyle;
        }
        styles["borderBottomWidth"] = `${borderWidth}px`;
        if (borderColor) {
          styles["borderBottomColor"] = borderColor;
        }
      } else {
        styles["borderBottom"] = "none";
      }
      if (borderLeft) {
        if (borderStyle) {
          styles["borderLeftStyle"] = borderStyle;
        }
        styles["borderLeftWidth"] = `${borderWidth}px`;
        if (borderColor) {
          styles["borderLeftColor"] = borderColor;
        }
      } else {
        styles["borderLeft"] = "none";
      }
      if (borderRight) {
        if (borderStyle) {
          styles["borderRightStyle"] = borderStyle;
        }
        styles["borderRightWidth"] = `${borderWidth}px`;
        if (borderColor) {
          styles["borderRightColor"] = borderColor;
        }
      } else {
        styles["borderRight"] = "none";
      }
      styles[
        "borderRadius"
      ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
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
    this.init();
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),

    init() {}
  }
};
</script>
<style lang="less" scoped>
// @import (less) "../../../../assets/less/components/component/device/common.less";
</style>

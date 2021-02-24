<template>
  <div class="bm-basic-start-stop-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 87 26`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
       	.start-stop-${info.id}-st0{display:none;}
	.start-stop-${info.id}-st1{display:inline;fill:url(#start_stop_${info.id}_SVGID_1_);}
	.start-stop-${info.id}-st2{display:inline;fill:url(#start_stop_${info.id}_SVGID_2_);}
	.start-stop-${info.id}-st3{display:inline;opacity:0.6;}
	.start-stop-${info.id}-st4{display:inline;}
	.start-stop-${info.id}-st5{fill:#FFFFFF;}
	.start-stop-${info.id}-st6{fill:url(#start_stop_${info.id}_SVGID_3_);}
	.start-stop-${info.id}-st7{fill:url(#start_stop_${info.id}_SVGID_4_);}
	.start-stop-${info.id}-st8{fill:#666666;}
      </style>
      `
        "
      ></defs>
      <g id="图层_2" v-if="info.content">
        <linearGradient
          :id="`start_stop_${info.id}_SVGID_1_`"
          gradientUnits="userSpaceOnUse"
          x1="43.5"
          y1="26"
          x2="43.5"
          y2="-9.094947e-13"
        >
          <stop offset="0" style="stop-color:#E6E6E6" />
          <stop offset="1" style="stop-color:#B3B3B3" />
        </linearGradient>
        <path
          :class="`start-stop-${info.id}-st1`"
          d="M84,26H3c-1.7,0-3-1.3-3-3V3c0-1.7,1.3-3,3-3h81c1.7,0,3,1.3,3,3v20C87,24.7,85.7,26,84,26z"
        />
        <linearGradient
          :id="`start_stop_${info.id}_SVGID_2_`"
          gradientUnits="userSpaceOnUse"
          x1="64"
          y1="24"
          x2="64"
          y2="2"
        >
          <stop offset="0" style="stop-color:#697284" />
          <stop offset="1" style="stop-color:#929CAD" />
        </linearGradient>
        <path
          :class="`start-stop-${info.id}-st2`"
          d="M82,24H46c-1.7,0-3-1.3-3-3V5c0-1.7,1.3-3,3-3h36c1.7,0,3,1.3,3,3v16C85,22.7,83.7,24,82,24z"
        />
        <g :class="`start-stop-${info.id}-st3`">
          <path
            d="M8.6,17.8c0.8-1.1,1.3-2.2,1.6-3.2c0.3-1,0.4-2.3,0.4-3.9V7.3h4.7L15.2,7c-0.1-0.2-0.1-0.4-0.2-0.6
			c-0.1-0.2-0.1-0.3-0.2-0.5L16,5.7c0.1,0.3,0.3,0.6,0.4,1.1l0.2,0.5h4.3v4.2h-9.1c0,1.4-0.2,2.6-0.5,3.6c-0.2,0.5-0.4,1.1-0.7,1.7
			c-0.3,0.6-0.6,1.2-1,1.8L8.6,17.8z M11.8,10.3h7.9v-2h-7.9V10.3z M20.6,13.2v5.4h-8.4v-5.4H20.6z M13.5,17.5h5.9v-3.1h-5.9V17.5z"
          />
          <path
            d="M27.8,12.8c0.1,0.2,0.2,0.5,0.3,0.8c0.1,0.3,0.3,0.7,0.4,1.1c0.1,0.4,0.3,0.7,0.4,1.1c0.1,0.4,0.3,0.7,0.3,1
			c0.2-0.3,0.3-0.6,0.4-0.9c0.1-0.3,0.2-0.6,0.3-0.9c0.1-0.5,0.2-1.2,0.3-2.1c0.1-0.9,0.2-1.9,0.2-3.1h-1.8V8.5h1.8l0.1-2.7h1.1
			l-0.1,2.7h3.3c0,0.6,0,1.3,0,2c0,0.7,0,1.4,0,2.2s0,1.5-0.1,2.2c0,0.7-0.1,1.4-0.1,2c0,0.5-0.2,0.9-0.4,1.2
			c-0.2,0.3-0.6,0.5-1.1,0.5c-0.1,0-0.3,0-0.4,0s-0.3,0-0.5,0c-0.2,0-0.4,0-0.5,0s-0.3,0-0.5,0l-0.3-1.3c0.3,0,0.7,0,0.9,0
			c0.3,0,0.5,0,0.8,0c0.2,0,0.3,0,0.4,0c0.1,0,0.2-0.1,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.3s0-0.3,0.1-0.5c0-0.5,0.1-1,0.1-1.6
			c0-0.6,0-1.2,0.1-1.8s0-1.2,0-1.8c0-0.6,0-1.1,0-1.6h-2.2c0,1.3-0.1,2.3-0.2,3.3s-0.2,1.7-0.3,2.3c-0.3,1.2-1,2.6-2.1,4l-1.1-0.7
			c0.4-0.5,0.7-1,1-1.4l-0.8,0.3L28.2,17c-0.4,0.1-0.8,0.1-1.2,0.2s-0.8,0.1-1.3,0.1c-0.4,0-0.9,0.1-1.3,0.1s-0.8,0.1-1.2,0.1
			l-0.3-1.2c0.2-0.1,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.2,0.2-0.4,0.3-0.7c0.1-0.3,0.3-0.7,0.4-1.1
			c0.1-0.4,0.3-0.8,0.4-1.2c0.1-0.4,0.3-0.8,0.4-1.1h-2v-1.2h6.2v1.2h-2.9c-0.2,0.6-0.4,1.3-0.7,2.1c-0.2,0.5-0.4,1-0.5,1.4
			c-0.2,0.4-0.3,0.8-0.5,1c0.5,0,0.9-0.1,1.5-0.1c0.5-0.1,1.1-0.1,1.7-0.2c-0.1-0.2-0.2-0.5-0.3-0.7c-0.1-0.3-0.2-0.5-0.3-0.7
			c-0.1-0.2-0.2-0.5-0.3-0.7c-0.1-0.2-0.2-0.4-0.2-0.5L27.8,12.8z M28.8,6.9V8h-5.2V6.9H28.8z"
          />
        </g>
        <g :class="`start-stop-${info.id}-st4`">
          <path
            :class="`start-stop-${info.id}-st5`"
            d="M51.5,12.5c0.4-0.6,0.7-1.1,1-1.7c0.3-0.6,0.5-1.1,0.8-1.7c0.2-0.6,0.5-1.1,0.6-1.7c0.2-0.6,0.4-1.1,0.5-1.7
			l1.1,0.3c-0.2,0.6-0.4,1.2-0.5,1.7s-0.3,1-0.5,1.4v9.7h-1.1v-7.2c-0.1,0.3-0.3,0.5-0.4,0.8c-0.2,0.3-0.3,0.5-0.5,0.8L51.5,12.5z
			 M64.3,12.3v2.5h-1.1v-1.5h-6.6v1.5h-1.1v-2.5H64.3z M60.1,5.8c0.1,0.1,0.1,0.2,0.2,0.4c0.1,0.2,0.2,0.4,0.2,0.5
			c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0.1,0.1,0.1,0.2h3.6v1h-8.6v-1h3.8C59.4,6.8,59.2,6.4,59,6L60.1,5.8z M63.4,9v2.5h-6.8V9H63.4z
			 M57.5,17.6c0.2,0,0.4,0,0.6,0c0.2,0,0.5,0,0.7,0c0.2,0,0.3,0,0.4,0c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.1,0.1-0.3
			c0-0.1,0-0.3,0-0.5v-1.3h-2.7v-1.1H63v1.1h-2.3v1.8c0,0.3,0,0.5-0.1,0.7c0,0.2-0.1,0.3-0.2,0.4c-0.1,0.1-0.2,0.2-0.4,0.3
			s-0.4,0.1-0.7,0.1c-0.3,0-0.6,0.1-0.9,0.1c-0.3,0-0.5,0-0.8,0L57.5,17.6z M57.7,10.7h4.6V9.8h-4.6V10.7z"
          />
          <path
            :class="`start-stop-${info.id}-st5`"
            d="M73.7,5.8v4.1h4.2v1.2h-4.2V17h4.9v1.2H66V17h2.3V8.2h1.2V17h3V5.8H73.7z"
          />
        </g>
      </g>
      <g id="图层_1" v-else>
        <linearGradient
          :id="`start_stop_${info.id}_SVGID_3_`"
          gradientUnits="userSpaceOnUse"
          x1="43.5"
          y1="26"
          x2="43.5"
          y2="-9.094947e-13"
        >
          <stop offset="0" style="stop-color:#E6E6E6" />
          <stop offset="1" style="stop-color:#B3B3B3" />
        </linearGradient>
        <path
          :class="`start-stop-${info.id}-st6`"
          d="M84,26H3c-1.7,0-3-1.3-3-3V3c0-1.7,1.3-3,3-3h81c1.7,0,3,1.3,3,3v20C87,24.7,85.7,26,84,26z"
        />
        <linearGradient
          :id="`start_stop_${info.id}_SVGID_4_`"
          gradientUnits="userSpaceOnUse"
          x1="23"
          y1="24"
          x2="23"
          y2="2"
        >
          <stop offset="0" style="stop-color:#0052AA" />
          <stop offset="1" style="stop-color:#0084E9" />
        </linearGradient>
        <path
          :class="`start-stop-${info.id}-st7`"
          d="M41,24H5c-1.7,0-3-1.3-3-3V5c0-1.7,1.3-3,3-3h36c1.7,0,3,1.3,3,3v16C44,22.7,42.7,24,41,24z"
        />
        <g>
          <path
            :class="`start-stop-${info.id}-st5`"
            d="M8.6,17.8c0.8-1.1,1.3-2.2,1.6-3.2c0.3-1,0.4-2.3,0.4-3.9V7.3h4.7L15.2,7c-0.1-0.2-0.1-0.4-0.2-0.6
			c-0.1-0.2-0.1-0.3-0.2-0.5L16,5.7c0.1,0.3,0.3,0.6,0.4,1.1l0.2,0.5h4.3v4.2h-9.1c0,1.4-0.2,2.6-0.5,3.6c-0.2,0.5-0.4,1.1-0.7,1.7
			c-0.3,0.6-0.6,1.2-1,1.8L8.6,17.8z M11.8,10.3h7.9v-2h-7.9V10.3z M20.6,13.2v5.4h-8.4v-5.4H20.6z M13.5,17.5h5.9v-3.1h-5.9V17.5z"
          />
          <path
            :class="`start-stop-${info.id}-st5`"
            d="M27.8,12.8c0.1,0.2,0.2,0.5,0.3,0.8c0.1,0.3,0.3,0.7,0.4,1.1c0.1,0.4,0.3,0.7,0.4,1.1c0.1,0.4,0.3,0.7,0.3,1
			c0.2-0.3,0.3-0.6,0.4-0.9c0.1-0.3,0.2-0.6,0.3-0.9c0.1-0.5,0.2-1.2,0.3-2.1c0.1-0.9,0.2-1.9,0.2-3.1h-1.8V8.5h1.8l0.1-2.7h1.1
			l-0.1,2.7h3.3c0,0.6,0,1.3,0,2c0,0.7,0,1.4,0,2.2s0,1.5-0.1,2.2c0,0.7-0.1,1.4-0.1,2c0,0.5-0.2,0.9-0.4,1.2
			c-0.2,0.3-0.6,0.5-1.1,0.5c-0.1,0-0.3,0-0.4,0s-0.3,0-0.5,0c-0.2,0-0.4,0-0.5,0s-0.3,0-0.5,0l-0.3-1.3c0.3,0,0.7,0,0.9,0
			c0.3,0,0.5,0,0.8,0c0.2,0,0.3,0,0.4,0c0.1,0,0.2-0.1,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.3s0-0.3,0.1-0.5c0-0.5,0.1-1,0.1-1.6
			c0-0.6,0-1.2,0.1-1.8s0-1.2,0-1.8c0-0.6,0-1.1,0-1.6h-2.2c0,1.3-0.1,2.3-0.2,3.3s-0.2,1.7-0.3,2.3c-0.3,1.2-1,2.6-2.1,4l-1.1-0.7
			c0.4-0.5,0.7-1,1-1.4l-0.8,0.3L28.2,17c-0.4,0.1-0.8,0.1-1.2,0.2s-0.8,0.1-1.3,0.1c-0.4,0-0.9,0.1-1.3,0.1s-0.8,0.1-1.2,0.1
			l-0.3-1.2c0.2-0.1,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.2,0.2-0.4,0.3-0.7c0.1-0.3,0.3-0.7,0.4-1.1
			c0.1-0.4,0.3-0.8,0.4-1.2c0.1-0.4,0.3-0.8,0.4-1.1h-2v-1.2h6.2v1.2h-2.9c-0.2,0.6-0.4,1.3-0.7,2.1c-0.2,0.5-0.4,1-0.5,1.4
			c-0.2,0.4-0.3,0.8-0.5,1c0.5,0,0.9-0.1,1.5-0.1c0.5-0.1,1.1-0.1,1.7-0.2c-0.1-0.2-0.2-0.5-0.3-0.7c-0.1-0.3-0.2-0.5-0.3-0.7
			c-0.1-0.2-0.2-0.5-0.3-0.7c-0.1-0.2-0.2-0.4-0.2-0.5L27.8,12.8z M28.8,6.9V8h-5.2V6.9H28.8z"
          />
        </g>
        <g>
          <path
            :class="`start-stop-${info.id}-st8`"
            d="M51.5,12.5c0.4-0.6,0.7-1.1,1-1.7c0.3-0.6,0.5-1.1,0.8-1.7c0.2-0.6,0.5-1.1,0.6-1.7c0.2-0.6,0.4-1.1,0.5-1.7
			l1.1,0.3c-0.2,0.6-0.4,1.2-0.5,1.7s-0.3,1-0.5,1.4v9.7h-1.1v-7.2c-0.1,0.3-0.3,0.5-0.4,0.8c-0.2,0.3-0.3,0.5-0.5,0.8L51.5,12.5z
			 M64.3,12.3v2.5h-1.1v-1.5h-6.6v1.5h-1.1v-2.5H64.3z M60.1,5.8c0.1,0.1,0.1,0.2,0.2,0.4c0.1,0.2,0.2,0.4,0.2,0.5
			c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0.1,0.1,0.1,0.2h3.6v1h-8.6v-1h3.8C59.4,6.8,59.2,6.4,59,6L60.1,5.8z M63.4,9v2.5h-6.8V9H63.4z
			 M57.5,17.6c0.2,0,0.4,0,0.6,0c0.2,0,0.5,0,0.7,0c0.2,0,0.3,0,0.4,0c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.1,0.1-0.3
			c0-0.1,0-0.3,0-0.5v-1.3h-2.7v-1.1H63v1.1h-2.3v1.8c0,0.3,0,0.5-0.1,0.7c0,0.2-0.1,0.3-0.2,0.4c-0.1,0.1-0.2,0.2-0.4,0.3
			s-0.4,0.1-0.7,0.1c-0.3,0-0.6,0.1-0.9,0.1c-0.3,0-0.5,0-0.8,0L57.5,17.6z M57.7,10.7h4.6V9.8h-4.6V10.7z"
          />
          <path
            :class="`start-stop-${info.id}-st8`"
            d="M73.7,5.8v4.1h4.2v1.2h-4.2V17h4.9v1.2H66V17h2.3V8.2h1.2V17h3V5.8H73.7z"
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
export default {
  name: "bmBasicStartStopCom",
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
        // color = "",
        borderColor = "",
        borderStyle = "",
        borderWidth = "",
        borderRadiusTopLeft = 0,
        borderRadiusTopRight = 0,
        borderRadiusBottomLeft = 0,
        borderRadiusBottomRight = 0,
        backgroundType = "",
        backgroundColor = "",
        backgroundImage = "",
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
        backgroundRepeat = "",
        backgroundSize = ""
      } = info || {};
      let styles = {
        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
        padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
      };
      // if (textAlign) {
      //   styles["text-align"] = textAlign;
      //   if (textAlign == "justify") {
      //     styles["text-align-last"] = textAlign;
      //   }
      // }
      if (shadowable) {
        let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
          shadow || {};
        styles[
          "box-shadow"
        ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      }
      // if (textShadowable) {
      //   let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
      //   styles["text-shadow"] = `${x}px ${y}px ${blur}px ${color}`;
      // }
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;
      if (backgroundRepeat) {
        styles["background-repeat"] = backgroundRepeat;
      }
      if (backgroundSize) {
        styles["background-size"] = backgroundSize;
      }
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;
      if (borderTop) {
        if (borderStyle) {
          styles["border-top-style"] = borderStyle;
        }
        styles["border-top-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-top-color"] = borderColor;
        }
      } else {
        styles["border-top"] = "none";
      }
      if (borderBottom) {
        if (borderStyle) {
          styles["border-bottom-style"] = borderStyle;
        }
        styles["border-bottom-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-bottom-color"] = borderColor;
        }
      } else {
        styles["border-bottom"] = "none";
      }
      if (borderLeft) {
        if (borderStyle) {
          styles["border-left-style"] = borderStyle;
        }
        styles["border-left-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-left-color"] = borderColor;
        }
      } else {
        styles["border-left"] = "none";
      }
      if (borderRight) {
        if (borderStyle) {
          styles["border-right-style"] = borderStyle;
        }
        styles["border-right-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-right-color"] = borderColor;
        }
      } else {
        styles["border-right"] = "none";
      }
      styles[
        "border-radius"
      ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
      if (borderTop) {
        if (borderStyle) {
          styles["border-top-style"] = borderStyle;
        }
        styles["border-top-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-top-color"] = borderColor;
        }
      } else {
        styles["border-top"] = "none";
      }
      if (borderBottom) {
        if (borderStyle) {
          styles["border-bottom-style"] = borderStyle;
        }
        styles["border-bottom-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-bottom-color"] = borderColor;
        }
      } else {
        styles["border-bottom"] = "none";
      }
      if (borderLeft) {
        if (borderStyle) {
          styles["border-left-style"] = borderStyle;
        }
        styles["border-left-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-left-color"] = borderColor;
        }
      } else {
        styles["border-left"] = "none";
      }
      if (borderRight) {
        if (borderStyle) {
          styles["border-right-style"] = borderStyle;
        }
        styles["border-right-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-right-color"] = borderColor;
        }
      } else {
        styles["border-right"] = "none";
      }
      styles[
        "border-radius"
      ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;

      // if (color) {
      //   styles["color"] = color;
      // }
      // if (fontSize) {
      //   styles["font-size"] = `${fontSize}px`;
      // }
      // if (fontFamily) {
      //   styles["font-family"] = `${fontFamily}`;
      // }
      // if (fontWeight) {
      //   styles["font-weight"] = fontWeight;
      // }
      // if (fontStyle) {
      //   styles["font-style"] = fontStyle;
      // }
      // if (textDecoration) {
      //   styles["text-decoration"] = textDecoration;
      // }

      if (backgroundType == "purity") {
        //纯色
        if (backgroundColor) {
          styles["background-color"] = backgroundColor;
        }
        if (backgroundImage) {
          styles["background-image"] = `url(${this.$loadImgUrl(
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
  // created() {
  //   let { info = {} } = this;
  //   info.dataType = "device";
  //   this.setActiveCom(info);
  // },
  mounted() {
    let { info = {} } = this;
    // bmCommon.log("kg mounted=", info.content);
    let { content = "" } = info || {};
    if (content === "") {
      info.content = false;
    }
    this.init();
  },
  methods: {
    ...mapMutations({
      // setActiveCom: "canvas/setActiveCom" //设置当前选中组件
    }),
    ...mapActions({}),
    // controlEvent() {
    //   let { info = {} } = this;
    //   let { content = false, bindData = {} } = info || {};
    //   let { deviceId = "" } = bindData || {};
    //   if (!deviceId) {
    //     info.content = !content;
    //     return;
    //   }
    //   let point = pointCode;
    //   let value = !content ? 1 : 0;
    //   $vm.$emit("control", {
    //     deviceId,
    //     point,
    //     value,
    //     callback: flag => {
    //       if (flag) {
    //         info.content = !content;
    //       } else {
    //         info.content = content; //如果取消则重置结果
    //       }
    //     }
    //   });
    // },
    init() {
      let { info = {}, showType = "" } = this;
      if (showType != "edit") {
        let { id = "", bindData = {} } = info || {};
        let { devicePoint = "" } = bindData || {};
        if (!devicePoint) {
          return;
        }
        $vm.$on(`devicePointEvent_${id}`, ({ point }) => {
          bmCommon.log("deviceStartStopCom", point);
          if (point) {
            let { value = "" } = point || {};
            info.content = value == 1 ? true : false;
          }
        });
      }
      this.loadDeviceInfo();
    },
    loadDeviceInfo() {
      let { info = {} } = this;
      let { bindData = {} } = info || {};
      let { deviceId = "", devicePoint = "" } = bindData || {};
      if (!deviceId) {
        return;
      }
      $vm.$emit("device", {
        deviceId,
        callback: (device = {}) => {
          let { points: pointList = [] } = device || {};
          let point = pointList.find(item => {
            let { id = "" } = item || {};
            return id == devicePoint; //
          });
          if (point) {
            let { value = "" } = point || {};
            info.content = value == 1 ? true : false;
          }
        }
      });
    }
  },
  watch: {
    "info.bindData.devicePoint": {
      handler(newVal, oldVal) {
        this.loadDeviceInfo();
      },
      deep: true
    }
  }
};
</script>

<style lang="less"></style>

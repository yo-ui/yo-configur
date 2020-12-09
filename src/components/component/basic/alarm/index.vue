<template>
  <div class="bm-basic-alarm-com" :style="comStyle">
    <!-- :viewBox="`${info.vBoxx} ${info.vBoxy} ${info.width} ${info.height}`" -->
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 46 26`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
       .alarm-st0{display:none;}
	.alarm-st1{display:inline;fill:url(#alarm_${info.id}_SVGID_1_);}
	.alarm-st2{display:inline;fill:url(#alarm_${info.id}_SVGID_2_);}
	.alarm-st3{display:inline;}
	.alarm-st4{fill:#FFFFFF;}
	.alarm-st5{fill:url(#alarm_${info.id}_SVGID_3_);}
	.alarm-st6{fill:url(#alarm_${info.id}_SVGID_4_);}
      </style>
      `
        "
      ></defs>

      <g id="图层_1" v-if="info.content">
        <linearGradient
          :id="`alarm_${info.id}_SVGID_1_`"
          gradientUnits="userSpaceOnUse"
          x1="23"
          y1="26"
          x2="23"
          y2="-9.094947e-13"
        >
          <stop offset="0" style="stop-color:#E6E6E6" />
          <stop offset="1" style="stop-color:#B3B3B3" />
        </linearGradient>
        <path
          class="alarm-st1"
          d="M43,26H3c-1.7,0-3-1.3-3-3V3c0-1.7,1.3-3,3-3h40c1.7,0,3,1.3,3,3v20C46,24.7,44.7,26,43,26z"
        />
        <linearGradient
          :id="`alarm_${info.id}_SVGID_2_`"
          gradientUnits="userSpaceOnUse"
          x1="23"
          y1="24"
          x2="23"
          y2="2"
        >
          <stop offset="0" style="stop-color:#7E0000" />
          <stop offset="1" style="stop-color:#C90000" />
        </linearGradient>
        <path
          class="alarm-st2"
          d="M41,24H5c-1.7,0-3-1.3-3-3V5c0-1.7,1.3-3,3-3h36c1.7,0,3,1.3,3,3v16C44,22.7,42.7,24,41,24z"
        />
        <g class="alarm-st3">
          <path
            class="alarm-st4"
            d="M8.8,13c0.3-0.1,0.6-0.1,0.9-0.2c0.4-0.1,0.8-0.2,1.2-0.3V9.6H9V8.5H11V5.9h1.2v2.6h1.6v1.1h-1.6V12
			c0.3-0.1,0.5-0.2,0.7-0.3c0.2-0.1,0.4-0.2,0.6-0.2l0.1,1.1c-0.2,0.1-0.4,0.2-0.7,0.3c-0.2,0.1-0.5,0.2-0.8,0.3v4.1
			c0,0.3,0,0.5,0,0.6c0,0.2-0.1,0.3-0.2,0.4c-0.1,0.1-0.2,0.2-0.4,0.3c-0.2,0.1-0.4,0.1-0.6,0.2c-0.2,0-0.4,0-0.6,0.1
			c-0.2,0-0.5,0-0.7,0l-0.3-1.2c0.2,0,0.3,0,0.5,0c0.2,0,0.4,0,0.5,0c0.1,0,0.3,0,0.4,0c0.1,0,0.2,0,0.2-0.1s0.1-0.1,0.1-0.2
			c0-0.1,0-0.2,0-0.4v-3.3c-0.4,0.1-0.7,0.2-1,0.3C9.6,14,9.3,14,9.1,14.1L8.8,13z M20.7,6.5c0,0.5,0,0.9,0,1.3c0,0.4,0,0.7-0.1,1.1
			c0,0.4-0.1,0.7-0.3,0.9c-0.2,0.2-0.5,0.3-1,0.4c-0.4,0-0.8,0.1-1.2,0.1c-0.4,0-0.8,0-1.2,0l-0.2-1.1c0.3,0,0.7,0,1,0.1
			c0.3,0,0.7,0,1,0c0.3,0,0.5-0.1,0.7-0.1s0.2-0.2,0.2-0.4c0-0.1,0-0.3,0-0.5c0-0.2,0-0.4,0-0.5h-4.3v3.5h5.6l0,1.1
			c-0.1,0.6-0.4,1.1-0.6,1.7s-0.6,1.1-1,1.6L18.9,16c0.4,0.3,0.8,0.7,1.2,1c0.5,0.3,1,0.6,1.5,0.9l-0.6,1c-1.2-0.7-2.1-1.4-2.9-2.1
			c-0.4,0.4-0.8,0.7-1.2,1c-0.4,0.3-0.8,0.6-1.2,0.9L15.3,18V19h-1.2V6.5H20.7z M17.4,15.9c-0.2-0.2-0.4-0.5-0.6-0.8
			c-0.2-0.3-0.4-0.6-0.5-0.9c-0.2-0.3-0.3-0.6-0.5-1c-0.1-0.3-0.3-0.7-0.4-1h-0.3v5.3c0.5-0.3,0.9-0.5,1.2-0.8S17.1,16.2,17.4,15.9z
			 M16.6,12.2c0.2,0.6,0.4,1.1,0.7,1.6s0.6,0.9,0.8,1.3l0,0c0.4-0.4,0.7-0.9,0.9-1.3c0.3-0.5,0.5-1,0.6-1.5H16.6z"
          />
          <path
            class="alarm-st4"
            d="M22.7,9.6c0.1-0.1,0.3-0.2,0.4-0.4c0.2-0.2,0.3-0.3,0.5-0.5c0.2-0.2,0.3-0.4,0.4-0.5s0.3-0.4,0.4-0.5L25.2,8
			l-0.1,0.2h4.5c0,0.5,0,1,0,1.4c0,0.4,0,0.8,0,1.2c0,0.3-0.1,0.6-0.3,0.7c-0.1,0.1-0.4,0.2-0.6,0.3c-0.2,0-0.3,0-0.5,0
			c-0.2,0-0.3,0-0.5,0l-0.2-0.9c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3,0c0.2,0,0.3,0,0.3-0.1c0-0.1,0.1-0.2,0.1-0.4c0-0.3,0-0.5,0-0.8
			s0-0.5,0-0.8h-4c-0.1,0.1-0.2,0.2-0.2,0.3s-0.2,0.2-0.3,0.3h3.2v1.9H24V9.6c-0.1,0.1-0.2,0.2-0.3,0.3s-0.2,0.2-0.3,0.3L22.7,9.6z
			 M28.9,12.5l-0.3-0.5l1-0.3c0,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.1,0.2,0.2,0.4l0.1,0.2h5.5v0.8H22.9v-0.8H28.9z M28.5,5.8v0.8h1.7
			v0.7h-1.7v0.5h-1V7.4H26v0.4h-1V7.4h-1.8V6.7H25V5.8h1v0.8h1.5V5.8H28.5z M34.1,16.2v2.5h-9.7v-2.5H34.1z M33.9,13.8v0.7h-9.3
			v-0.7H33.9z M33.9,15v0.7h-9.3V15H33.9z M24.8,10.8h1.7v-0.7h-1.7V10.8z M25.5,18H33v-1h-7.5V18z M29.7,10.9
			c0.4-0.1,0.8-0.2,1.2-0.4c0.3-0.1,0.6-0.3,0.9-0.4c-0.4-0.4-0.8-0.9-1-1.4c-0.1,0.1-0.2,0.2-0.2,0.3s-0.2,0.2-0.3,0.3l-0.7-0.6
			c0.4-0.5,0.8-1,1.1-1.4c0.3-0.5,0.5-0.9,0.8-1.4l1,0.3c-0.2,0.3-0.3,0.7-0.5,1h3.6v0.9h-0.8c-0.2,0.4-0.4,0.8-0.6,1.2
			c-0.2,0.4-0.5,0.7-0.7,1c0.3,0.2,0.6,0.3,1,0.4s0.8,0.3,1.2,0.4l-0.4,1c-0.5-0.2-1-0.3-1.4-0.5s-0.8-0.4-1.1-0.6
			c-0.7,0.4-1.5,0.8-2.5,1.1L29.7,10.9z M31.3,7.9c0.3,0.6,0.7,1.2,1.2,1.6c0.2-0.2,0.4-0.4,0.6-0.7c0.2-0.3,0.4-0.6,0.5-0.9
			L31.3,7.9L31.3,7.9z"
          />
        </g>
      </g>
      <g id="图层_2" v-else>
        <linearGradient
          :id="`alarm_${info.id}_SVGID_3_`"
          gradientUnits="userSpaceOnUse"
          x1="23"
          y1="26"
          x2="23"
          y2="-9.094947e-13"
        >
          <stop offset="0" style="stop-color:#E6E6E6" />
          <stop offset="1" style="stop-color:#B3B3B3" />
        </linearGradient>
        <path
          class="alarm-st5"
          d="M43,26H3c-1.7,0-3-1.3-3-3V3c0-1.7,1.3-3,3-3h40c1.7,0,3,1.3,3,3v20C46,24.7,44.7,26,43,26z"
        />
        <linearGradient
          :id="`alarm_${info.id}_SVGID_4_`"
          gradientUnits="userSpaceOnUse"
          x1="23"
          y1="24"
          x2="23"
          y2="2"
        >
          <stop offset="0" style="stop-color:#3B7F00" />
          <stop offset="1" style="stop-color:#5DAA00" />
        </linearGradient>
        <path
          class="alarm-st6"
          d="M41,24H5c-1.7,0-3-1.3-3-3V5c0-1.7,1.3-3,3-3h36c1.7,0,3,1.3,3,3v16C44,22.7,42.7,24,41,24z"
        />
        <g>
          <path
            class="alarm-st4"
            d="M21.2,6.9v1.3h-4.7v3.3h4.2v1.3h-4.2v4.1h5.2v1.3H8.9v-1.3h2.2v-7h1.2v7h3V8.1H9.6V6.9H21.2z"
          />
          <path
            class="alarm-st4"
            d="M25.7,5.9c0.3,0.3,0.5,0.6,0.8,0.9s0.5,0.6,0.8,1L26.9,8h1.8V5.8h1.2V8h1.8l-0.5-0.4c0.3-0.2,0.6-0.5,0.9-0.8
			s0.6-0.6,0.9-1l0.9,0.7c-0.2,0.2-0.4,0.5-0.7,0.8c-0.3,0.3-0.5,0.5-0.8,0.7H35v2.8h-1.1V9.1h-9.2v1.8h-1.1V8H26
			c-0.2-0.3-0.4-0.6-0.6-0.8C25.2,7,25,6.7,24.8,6.5L25.7,5.9z M33.4,10.1v3h-3.5v1h4.5v2.1c0,0.4,0,0.7-0.1,0.9
			c0,0.2-0.1,0.4-0.2,0.6c-0.1,0.1-0.3,0.3-0.5,0.3c-0.2,0.1-0.5,0.1-0.8,0.2c-0.2,0-0.5,0-0.7,0.1c-0.3,0-0.5,0-0.7,0L31.3,17
			c0.2,0,0.4,0,0.6,0c0.2,0,0.4,0,0.5,0c0.2,0,0.4,0,0.5,0c0.1,0,0.2-0.1,0.3-0.2c0.1-0.1,0.1-0.2,0.1-0.3c0-0.2,0-0.4,0-0.6v-0.7
			h-3.3V19h-1.2v-3.8h-3.3v3h-1.1v-4.1h4.5v-1h-3.5v-3H33.4z M26.3,12.1h6V11h-6V12.1z"
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
  name: "bmBasicAlarmCom",
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
        // content = false,
        // activeColor = "",
        // inactiveColor = "",
        // borderRadius = "",
        // backgroundType = "",
        // scale = "",
        // marginTop = 0,
        // marginBottom = 0,
        // marginLeft = 0,
        // marginRight = 0,
        // paddingTop = 0,
        // paddingBottom = 0,
        // paddingLeft = 0,
        // paddingRight = 0,
        shadow = {},
        shadowable = false
        // textShadow = {},
        // textShadowable = false,
        // textAlign = "",
        // fontFamily = "",
        // fontSize = "",
        // fontWeight = "",
        // fontStyle = "",
        // borderRadius=0,
        // textDecoration = ""
        // backgroundColor = "",
        // backgroundImage = "",
        // backgroundRepeat = "",
        // backgroundSize = ""
      } = info || {};
      let styles = {
        // margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
        // padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
      };
      // if (textAlign) {
      //   styles["textAlign"] = textAlign;
      //   if (textAlign == "justify") {
      //     styles["text-align-last"] = textAlign;
      //   }
      // }
      if (shadowable) {
        let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
          shadow || {};
        styles[
          "boxShadow"
        ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      }
      // if (textShadowable) {
      //   let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
      //   styles["textShadow"] = `${x}px ${y}px ${blur}px ${color}`;
      // }
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
      if (borderColor) {
        styles["borderColor"] = borderColor;
      }
      if (borderStyle) {
        styles["borderStyle"] = borderStyle;
      }
      styles["borderWidth"] = `${borderWidth}px`;
      // styles["borderRadius"] = `${borderRadius}px`;
      // if (scale) {
      //   (styles["transform"] = `${scale}`),
      //     (styles["-webkit-transform"] = `${scale}`),
      //     (styles["-ms-transform"] = `${scale}`),
      //     (styles["-o-transform"] = `${scale}`),
      //     (styles["-moz-transform"] = `${scale}`);
      // }
      styles[
        "borderRadius"
      ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;

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
      // if (textDecoration) {
      //   styles["textDecoration"] = textDecoration;
      // }

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
    controlEvent() {
      let { info = {} } = this;
      let { content = false, bindData = {} } = info || {};
      let { deviceId = "" } = bindData || {};
      if (!deviceId) {
        info.content = !content;
        return;
      }
      let point = pointCode;
      let value = !content ? 1 : 0;
      $vm.$emit("control", {
        deviceId,
        point,
        value,
        callback: flag => {
          if (flag) {
            info.content = !content;
          } else {
            info.content = content; //如果取消则重置结果
          }
        }
      });
    },
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
            info.content = value == 1 ? true : false;
          }
        });
      }
    }
  }
};
</script>

<style lang="less">
// @import (reference) "./../../../../assets/less/common.less";
// .bm-basic-switch-com {
//   .posr;
//   .pointer;
//   .btn-text {
//     .posa;
//     top: 50%;
//     .tranf(translate(0, -50%));
//   }
//   .btn-close-text {
//     right: 10%;
//   }
//   .btn-open-text {
//     left: 10%;
//   }
//   .btn-slider {
//     .posa;
//     top: 50%;
//     .br(50%);
//     .tranf(translate(0, -50%));
//   }
//   .btn-close-slider {
//     left: 4%;
//   }
//   .btn-open-slider {
//     right: 4%;
//   }
// }
</style>

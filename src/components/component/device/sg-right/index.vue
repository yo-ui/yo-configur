// 水管（右）
<template>
  <div class="bm-device-sg-right-com" :style="comStyle">
    <!-- :viewBox="`${info.vBoxx} ${info.vBoxy} ${info.width} ${info.height}`" -->
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 10 10`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
      
					.st0{fill:url(#XMLID_6_);}
					.st1{fill:url(#XMLID_7_);}
					.st2{fill:#FFFFFF;}
					.st3{fill:url(#XMLID_8_);}
					.st4{fill:url(#XMLID_9_);}
					.st5{fill:url(#XMLID_10_);}
					.st6{fill:#777C7F;}
      </style>
      `
        "
      ></defs>
      <g>
					<linearGradient id="XMLID_6_" gradientUnits="userSpaceOnUse" x1="-150.9816" y1="989.4756" x2="-150.9816" y2="995.4756" gradientTransform="matrix(-4.489659e-011 -1 -1 4.489659e-011 997.4756 -145.9816)">
					<stop  offset="0" style="stop-color:#777C7F"/>
					<stop  offset="0.5" style="stop-color:#FFFFFF"/>
					<stop  offset="0.9803" style="stop-color:#777C7F"/>
				</linearGradient>
				<rect id="XMLID_4_" x="2" y="0" class="st0" width="6" height="10"/>
				
					<linearGradient id="XMLID_7_" gradientUnits="userSpaceOnUse" x1="-142.9816" y1="990.9756" x2="-142.9816" y2="996.9756" gradientTransform="matrix(-1 0 0 1 -141.4816 -988.9756)">
					<stop  offset="0" style="stop-color:#777C7F"/>
					<stop  offset="0.1755" style="stop-color:#ABAEB0"/>
					<stop  offset="0.3951" style="stop-color:#E7E8E9"/>
					<stop  offset="0.5" style="stop-color:#FFFFFF"/>
					<stop  offset="1" style="stop-color:#777C7F"/>
				</linearGradient>
				<rect id="XMLID_551_" x="0" y="2" class="st1" width="3" height="6"/>
				<g id="XMLID_1_">
					<rect id="XMLID_558_" x="2" y="2" class="st2" width="6" height="6"/>
					
						<radialGradient id="XMLID_8_" cx="-431.5536" cy="395.9081" r="13.4118" gradientTransform="matrix(-0.5898 0 0 0.5898 -254.2069 -223.8701)" gradientUnits="userSpaceOnUse">
						<stop  offset="0.2906" style="stop-color:#777C7F"/>
						<stop  offset="0.62" style="stop-color:#777C7F;stop-opacity:0"/>
					</radialGradient>
					<rect id="XMLID_555_" x="2" y="2" class="st3" width="6" height="6"/>
					
						<radialGradient id="XMLID_9_" cx="-431.2906" cy="379.9474" r="13.4117" gradientTransform="matrix(-0.5898 0 0 0.5898 -254.2069 -223.8701)" gradientUnits="userSpaceOnUse">
						<stop  offset="0.3103" style="stop-color:#777C7F"/>
						<stop  offset="0.62" style="stop-color:#777C7F;stop-opacity:0"/>
					</radialGradient>
					<rect id="XMLID_554_" x="2" y="2" class="st4" width="6" height="6"/>
					
						<linearGradient id="XMLID_10_" gradientUnits="userSpaceOnUse" x1="-443.0012" y1="392.7758" x2="-437.0012" y2="392.7758" gradientTransform="matrix(-1 0 0 1 -435.0012 -387.7758)">
						<stop  offset="0" style="stop-color:#777C7F"/>
						<stop  offset="0.5" style="stop-color:#777C7F;stop-opacity:0"/>
					</linearGradient>
					<rect id="XMLID_553_" x="2" y="2" class="st5" width="6" height="6"/>
				</g>
				<g id="XMLID_3_">
					<path id="XMLID_556_" class="st6" d="M2,10c0-1.2-0.8-2-2-2h2V10z"/>
					<path id="XMLID_2_" class="st6" d="M2,0c0,1.2-0.8,2-2,2h2V0z"/>
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
  name: "deviceSgRightCom",
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
// @import (less) "../../../../assets/less/components/component/device/common.less";
</style>

// 单项导轨电表
<template>
  <div class="bm-device-dxdgdb-com" :style="comStyle">
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
      	.dxdgdb-st0{fill:#C2C8CE;}
					.dxdgdb-st1{fill:#DFE3E8;}
					.dxdgdb-st2{fill:#FFFFFF;}
					.dxdgdb-st3{fill:#8F9499;}
					.dxdgdb-st4{fill:#848776;}
					.dxdgdb-st5{fill:#25282B;}
					.dxdgdb-st6{fill:#F95D06;}
					.dxdgdb-st7{fill:#565656;}
					.dxdgdb-st8{fill:#8BB70F;}
      </style>
      `
        "
      ></defs>
      <g id="dxdgdb_710_">
        <rect
          id="dxdgdb_719_"
          x="2"
          y="46.7"
          class="dxdgdb-st0"
          width="60"
          height="4.5"
        />
        <rect
          id="dxdgdb_718_"
          x="2"
          y="51.2"
          class="dxdgdb-st1"
          width="60"
          height="8.6"
        />
        <rect
          id="dxdgdb_717_"
          x="1"
          y="17.7"
          class="dxdgdb-st2"
          width="62"
          height="29"
        />
        <path
          id="dxdgdb_714_"
          class="dxdgdb-st1"
          d="M64,47.7H0v-31h64V47.7z M2,45.7h53v-27H2V45.7z"
        />
        <polygon
          id="dxdgdb_713_"
          class="dxdgdb-st0"
          points="64,16.7 0,16.7 2,12.4 62,12.4 	"
        />
        <rect
          id="dxdgdb_712_"
          x="2"
          y="3.7"
          class="dxdgdb-st1"
          width="60"
          height="8.7"
        />
        <polygon
          id="dxdgdb_711_"
          class="dxdgdb-st0"
          points="59,0.2 5,0.2 2,3.7 62,3.7 	"
        />
      </g>
      <circle id="dxdgdb_709_" class="dxdgdb-st3" cx="11.5" cy="8.1" r="2" />
      <circle id="dxdgdb_708_" class="dxdgdb-st3" cx="45.2" cy="8.1" r="2" />
      <g id="dxdgdb_703_">
        <rect
          id="dxdgdb_707_"
          x="10.5"
          y="25.1"
          class="dxdgdb-st4"
          width="27"
          height="12"
        />
        <path
          id="dxdgdb_704_"
          class="dxdgdb-st5"
          d="M38.5,38.1h-29v-14h29V38.1z M11.5,36.1h25v-10h-25V36.1z"
        />
      </g>
      <circle id="dxdgdb_702_" class="dxdgdb-st3" cx="11.5" cy="54.1" r="2" />
      <circle id="dxdgdb_701_" class="dxdgdb-st3" cx="45.2" cy="54.1" r="2" />
      <rect
        id="dxdgdb_700_"
        x="43.1"
        y="22.1"
        class="dxdgdb-st3"
        width="4.5"
        height="2.5"
      />
      <rect
        id="dxdgdb_699_"
        x="43"
        y="36.6"
        class="dxdgdb-st6"
        width="6.7"
        height="3.7"
      />
      <rect
        id="dxdgdb_698_"
        x="42.8"
        y="28.6"
        class="dxdgdb-st0"
        width="7.8"
        height="1"
      />
      <rect
        id="dxdgdb_697_"
        x="42.8"
        y="30.7"
        class="dxdgdb-st0"
        width="5.4"
        height="1"
      />
      <g id="dxdgdb_748_">
        <rect
          id="dxdgdb_676_"
          x="58.8"
          y="25.8"
          class="dxdgdb-st7"
          width="1"
          height="16"
        />
        <circle
          id="dxdgdb_694_"
          class="dxdgdb-st8"
          cx="59.2"
          cy="22.2"
          r="1.5"
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
  name: "deviceDxdgdbCom",
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
        backgroundType = "",
        backgroundColor = "",
        backgroundImage = "",
        backgroundRepeat = "",
        backgroundSize = ""
      } = info || {};
      let styles = {
        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
        padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
      };
      if (shadowable) {
        let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
          shadow || {};
        styles[
          "boxShadow"
        ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      }
      if (width) {
        styles["width"] = `${width}px`;
      }
      if (height) {
        styles["height"] = `${height}px`;
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

      styles[
        "borderRadius"
      ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
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

    init() {}
  }
};
</script>
<style lang="less" scoped>
// @import (reference) "./../../../../assets/less/common.less";
</style>

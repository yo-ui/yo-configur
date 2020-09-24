<template>
  <el-table
    class="bm-basic-table-com"
    :show-header="info.headerable"
    ref="bmCom"
    :height="info.height"
    :data="dataList"
    :style="comStyle"
  >
    <el-table-column
      v-for="(item, index) in tableKeys"
      :key="index"
      :prop="item.code"
      :label="item.name"
      min-width="120"
    >
      <template #header>
        <span :style="theaderStyle">{{ item.name }}</span>
      </template>
      <template #default="scope">
        <span :style="tbodyStyle">
          <template v-if="item.code == 'time'">
            {{ scope.row[item.code] | $dateFormat }}
          </template>
          <template v-else>
            {{ scope.row[item.code] }}
          </template>
        </span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "tableCom",
  data() {
    return {
      dataList: [
        { time: new Date(), temp: 27, city: "上海", hd: 34, aq: 54 },
        { time: new Date(), temp: 27, city: "广州", hd: 34, aq: 54 },
        { time: new Date(), temp: 27, city: "北京", hd: 34, aq: 54 },
        { time: new Date(), temp: 27, city: "长沙", hd: 34, aq: 54 },
        { time: new Date(), temp: 27, city: "上海", hd: 34, aq: 54 },
        { time: new Date(), temp: 27, city: "上海", hd: 34, aq: 54 }
      ],
      tableKeys: [
        { code: "time", name: "时间戳" },
        { code: "city", name: "城市" },
        // { code: "temp", name: "温度" },
        { code: "hd", name: "温度" },
        { code: "aq", name: "空气质量" }
      ]
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
    //渐变颜色样式
    gradientStyle() {
      let { info = {} } = this;
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
    },
    tbodyStyle() {
      let { info = {} } = this;
      let { tbody = {} } = info;
      let {
        color = "",
        fontFamily = "",
        fontWeight = "",
        fontStyle = "",
        textDecoration = "",
        fontSize = "",
        textAlign = "",
        cSplitBorderColor = "",
        rSplitBorderColor = ""
        // backgroundColor = "",
        //   backgroundImage = "",
        //   backgroundRepeat = "",
        //   backgroundSize = ""
      } = tbody || {};
      let styles = {
        // margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
        // padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
      };
      // if (shadowable) {
      //   let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
      //     shadow || {};
      //   styles[
      //     "boxShadow"
      //   ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      // }
      if (color) {
        styles["color"] = color;
      }
      if (cSplitBorderColor) {
        styles["borderRight"] = `1px solid ${cSplitBorderColor}`;
      }
      if (rSplitBorderColor) {
        styles["borderBottom"] = `1px solid ${rSplitBorderColor}`;
      }
      if (textAlign) {
        styles["textAlign"] = textAlign;
        if (textAlign == "justify") {
          styles["text-align-last"] = textAlign;
        }
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
      return styles || {};
    },
    theaderStyle() {
      let { info = {}, gradientStyle = {} } = this;

      let { theader = {} } = info;
      let {
        color = "",
        fontFamily = "",
        fontWeight = "",
        fontStyle = "",
        textDecoration = "",
        backgroundType = "",
        fontSize = "",
        textAlign = "",
        backgroundColor = "",
        splitBorderColor = ""
      } = theader || {};
      let styles = {};
      // if (shadowable) {
      //   let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
      //     shadow || {};
      //   styles[
      //     "boxShadow"
      //   ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      // }
      if (color) {
        styles["color"] = color;
      }
      if (splitBorderColor) {
        styles["borderRight"] = `1px solid ${splitBorderColor}`;
      }
      if (textAlign) {
        styles["textAlign"] = textAlign;
        if (textAlign == "justify") {
          styles["text-align-last"] = textAlign;
        }
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
      } else if (backgroundType == "gradient") {
        //渐变
        styles = { ...styles, ...gradientStyle };
      }
      return styles || {};
    },
    comStyle() {
      let { info = {}, gradientStyle = {} } = this;
      let {
        width = "",
        // height = "",
        color = "",
        borderColor = "",
        borderStyle = "",
        borderWidth = "",
        borderRadius = "",
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
        scale = "",
        fontFamily = "",
        fontWeight = "",
        fontStyle = "",
        textDecoration = "",
        backgroundType = "",
        fontSize = "",
        backgroundColor = "",
        backgroundImage = "",
        backgroundRepeat = "",
        backgroundSize = ""
      } = info || {};
      let styles = {
        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
        padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
      };
      if (backgroundRepeat) {
        styles["backgroundRepeat"] = backgroundRepeat;
      }
      if (shadowable) {
        let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
          shadow || {};
        styles[
          "boxShadow"
        ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
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
      styles["borderRadius"] = `${borderRadius}px`;
      styles["borderWidth"] = `${borderWidth}px`;
      if (width) {
        styles["width"] = `${width}px`;
      }
      // if (height) {
      //   styles["height"] = `${height}px`;
      // }
      if (scale) {
        (styles["transform"] = `${scale}`),
          (styles["-webkit-transform"] = `${scale}`),
          (styles["-ms-transform"] = `${scale}`),
          (styles["-o-transform"] = `${scale}`),
          (styles["-moz-transform"] = `${scale}`);
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
        styles = { ...styles, ...gradientStyle };
      }
      return styles || {};
    }
  },
  mounted() {
    // this.$nextTick(() => {
    //   let bmCom = this.$refs.bmCom;
    //   let $bmCom = $(bmCom);
    //   let { info = {} } = this;
    //   let width = $bmCom.width();
    //   let height = $bmCom.height();
    //   info.originWidth = width;
    //   info.originHeight = height;
    //   if (info.scaleable) {
    //     info.width = width;
    //     info.height = height;
    //   }
    // });
    // this.$emit("success"); //组件加载完成回调
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({})
  }
};
</script>
<style lang="less">
@import (less) "../../../../assets/less/components/component/basic/table.less";
</style>

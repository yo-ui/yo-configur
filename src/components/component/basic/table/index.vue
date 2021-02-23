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
      //     "box-shadow"
      //   ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      // }
      if (color) {
        styles["color"] = color;
      }
      if (cSplitBorderColor) {
        styles["border-right"] = `1px solid ${cSplitBorderColor}`;
      }
      if (rSplitBorderColor) {
        styles["border-bottom"] = `1px solid ${rSplitBorderColor}`;
      }
      if (textAlign) {
        styles["text-align"] = textAlign;
        if (textAlign == "justify") {
          styles["text-align-last"] = textAlign;
        }
      }
      if (fontSize) {
        styles["font-size"] = `${fontSize}px`;
      }
      if (fontFamily) {
        styles["font-family"] = `${fontFamily}`;
      }
      if (fontWeight) {
        styles["font-weight"] = fontWeight;
      }
      if (fontStyle) {
        styles["font-style"] = fontStyle;
      }
      if (textDecoration) {
        styles["text-decoration"] = textDecoration;
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
      //     "box-shadow"
      //   ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      // }
      if (color) {
        styles["color"] = color;
      }
      if (splitBorderColor) {
        styles["border-right"] = `1px solid ${splitBorderColor}`;
      }
      if (textAlign) {
        styles["text-align"] = textAlign;
        if (textAlign == "justify") {
          styles["text-align-last"] = textAlign;
        }
      }
      if (fontSize) {
        styles["font-size"] = `${fontSize}px`;
      }
      if (fontFamily) {
        styles["font-family"] = `${fontFamily}`;
      }
      if (fontWeight) {
        styles["font-weight"] = fontWeight;
      }
      if (fontStyle) {
        styles["font-style"] = fontStyle;
      }
      if (textDecoration) {
        styles["text-decoration"] = textDecoration;
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
        borderRadiusTopLeft = 0,
        borderRadiusTopRight = 0,
        borderRadiusBottomLeft = 0,
        borderRadiusBottomRight = 0,
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
        styles["background-repeat"] = backgroundRepeat;
      }
      if (shadowable) {
        let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
          shadow || {};
        styles[
          "box-shadow"
        ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      }
      if (backgroundSize) {
        styles["background-size"] = backgroundSize;
      }
      if (borderColor) {
        styles["borderColor"] = borderColor;
      }
      if (borderStyle) {
        styles["borderStyle"] = borderStyle;
      }
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
      styles["borderWidth"] = `${borderWidth}px`;
      if (width) {
        styles["width"] = `${width}px`;
      }
      // if (height) {
      //   styles["height"] = `${height}px`;
      // }

      if (color) {
        styles["color"] = color;
      }
      if (fontSize) {
        styles["font-size"] = `${fontSize}px`;
      }
      if (fontFamily) {
        styles["font-family"] = `${fontFamily}`;
      }
      if (fontWeight) {
        styles["font-weight"] = fontWeight;
      }
      if (fontStyle) {
        styles["font-style"] = fontStyle;
      }
      if (textDecoration) {
        styles["text-decoration"] = textDecoration;
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
    //
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

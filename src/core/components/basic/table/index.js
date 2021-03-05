// import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import Echart from "@/common/lib/echarts/echart";
import "../../../../assets/less/components/component/basic/table.less";
// 表格
class Text extends Component {
  deviceInfo = {};
  echart = null;
  constructor(props) {
    super(props);
  }
  init() {
    this.loadVueTemplate();
  }

  //组件样式
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
  }
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
        styles["background-color"] = backgroundColor;
      }
    } else if (backgroundType == "gradient") {
      //渐变
      styles = { ...styles, ...gradientStyle };
    }
    return styles || {};
  }

  template() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    return super.wrap(
      { info },
      `
      <div id="vue_${id}"
    >

    </div>
    `
    );
  }

  //加载数据
  loadData() {
    this.loadDeviceInfo();
  }

  loadVueTemplate() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    this.vue = new Vue({
      el: `#vue_${id}`,
      data: {
        comStyle: super.comStyle(),
        theaderStyle: this.theaderStyle(),
        tbodyStyle: this.tbodyStyle(),
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
        ],
        showType: window.bm_show_type,
        info,
        deviceInfo: {}
      },
      methods: {},
      template: `
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
      `
    });
    // bmCommon.log(this.vue.chartOptions);
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    // let { id = "" } = info || {};
    // let $container = $(`#${id}>.component`);
    // let $selectBox = $container.find(".select-box");
    // $selectBox.html(this.renderSelect());
    this.vue.info = info;
    this.vue.comStyle = this.comStyle();
    this.vue.tbodyStyle = this.tbodyStyle();
    this.vue.theaderStyle = this.theaderStyle();
  }
  selectPointEvent() {
    this.loadPointData();
  }

  event() {
    // let { info = {} } = this;
    // let { id = "", bindData = {} } = info || {};
    // let $container = $(`#${id}>.component`);
    // // let $select = $container.find(".select");
    // let that = this;
    // // bmCommon.log("evnet ", $select);
    // $container.on("change", ".select", function(e) {
    //   e.stopPropagation();
    //   let $this = $(this);
    //   let id = $this.val();
    //   bindData.devicePoint = id;
    //   that.selectPointEvent();
    // });
  }
}

export default Text;

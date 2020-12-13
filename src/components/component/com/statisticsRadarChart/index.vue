// 统计雷达图
<template>
  <div class="bm-chart-box bm-basic-statistics-radar-chart-com">
    <h2 class="title">
      {{ deviceInfo.name || "设备"
      }}<el-select
        v-if="
          deviceInfo.points &&
            deviceInfo.points.length > 0 &&
            showType == 'edit'
        "
        v-model="info.bindData.devicePoint"
        placeholder="请选择设备点位"
        filterable
        @change="selectPointEvent"
      >
        <el-option
          v-for="item in deviceInfo.points"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        >
        </el-option> </el-select
      >{{ $lang("实时数据") }}
    </h2>
    <v-chart
      theme="macarons"
      autoresize
      :style="comStyle"
      :init-options="{ renderer: 'svg' }"
      :options="chartOptions"
    />
  </div>
</template>

<script>
// import { graphic } from "echarts/lib/export";
import "echarts-liquidfill";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "statisticsRadarChartCom",
  data() {
    return {
      deviceInfo: {},
      condition: {
        point: ""
      },
      chartOptions: {}
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
    comStyle() {
      let { info = {}, gradientStyle = {} } = this;
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

        scale = "",
        backgroundType = "",
        // fontFamily = "",
        // fontSize = "",
        // fontWeight = "",
        // fontStyle = ""
        backgroundColor = "",
        backgroundImage = "",
        backgroundRepeat = "",
        backgroundSize = ""
      } = info || {};
      let styles = {};

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
    this.init();
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),
    init() {
      let { info = {} } = this;
      let { bindData = {} } = info || {};
      let { deviceId = "" } = bindData || {};
      // condition.deviceId=deviceId
      // condition.devicePoint=devicePoint
      if (deviceId) {
        this.loadDeviceInfo();
      } else {
        this.loadChartOptions();
      }
    },
    selectPointEvent() {
      this.loadPointData();
    },
    loadDeviceInfo() {
      let { info = {} } = this;
      let { bindData = {} } = info || {};
      let { deviceId = "", devicePoint = "" } = bindData || {};
      $vm.$emit("device", {
        deviceId,
        callback: (device = {}) => {
          this.deviceInfo = device || {};
          // let { condition } = this;
          if (!devicePoint) {
            let { points = [] } = device || {};
            let [point = {}] = points || [];
            let { id = "" } = point || {};
            info.bindData.devicePoint = id;
          }
          this.loadPointData();
        }
      });
      // this.commonGetDeviceFunc(deviceId, (device = {}) => {
      //   this.deviceInfo = device || {};
      //   let { condition } = this;
      //   let { points = [] } = device || {};
      //   let [point = {}] = points || [];
      //   let { id = "" } = point || {};
      //   condition.point = id;
      //   this.loadPointData();
      // });
    },
    loadPointData() {
      let { info = {} } = this;
      let { bindData = {} } = info || {};
      let { deviceId = "", devicePoint: point = "" } = bindData || {};
      let startTime = this.$moment().format("YYYY-MM-DD 00:00:00");
      let endTime = this.$moment().format("YYYY-MM-DD HH:mm:ss");
      $vm.$emit("device-point-hst-data", {
        point,
        startTime,
        endTime,
        deviceId,
        callback: data => {
          this.loadChartOptions(data);
        }
      });
      // this.commonDevicePointHstDataFunc(data => {
      //   this.loadChartOptions(data);
      // });
    },
    loadChartOptions(data) {
      let times = [];
      let values = [];
      let name = this.$lang("用量");
      if (data) {
        let { dataList = [], name: _name = "" } = data || {};
        dataList.forEach(item => {
          let { time = "", value = "" } = item || {};
          times.push(time);
          values.push(Number(value));
        });
        name = _name;
      } else {
        for (let i = 0; i < 12; i++) {
          times.push(
            this.$moment()
              .subtract(i, "d")
              .format("YYYY-MM-DD")
          );
          values.push(parseInt(Math.random() * 1000));
        }
      }
      // for (let i = 0; i < 12; i++) {
      //   times.push(
      //     this.$moment()
      //       .subtract(i, "d")
      //       .format("YYYY-MM-DD")
      //   );
      //   values.push(parseInt(Math.random() * 1000));
      // }
      this.chartOptions = {
        title: {
          text: "基础雷达图",
          show: false
        },
        tooltip: {},
        legend: {
          name,
          data: ["预算分配", "实际开销"],
          top: "8%"
        },
        radar: {
          // shape: 'circle',
          center: ["50%", "60%"],
          radius: "50%",
          name: {
            textStyle: {
              color: "#000",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: "销售", max: 6500 },
            { name: "管理", max: 16000 },
            { name: "信息技术", max: 30000 },
            { name: "客服", max: 38000 },
            { name: "研发", max: 52000 },
            { name: "市场", max: 25000 }
          ]
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: "预算分配"
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: "实际开销"
              }
            ]
          }
        ]
      };
    }
    // blurEvent(e) {
    //   let { target } = e;
    //   let { info = {} } = this;
    //   let name = $(target)
    //     .text()
    //     .trim();
    //   info.name = name;
    // }
  },
  watch: {
    "info.bindData"(newVal, oldVal) {
      if (newVal && oldVal && newVal.deviceId != oldVal.deviceId) {
        let { deviceId = "" } = newVal || {};
        if (deviceId) {
          this.loadDeviceInfo(deviceId);
        }
      }
    }
  }
};
</script>

<style lang="less">
@import (less) "../../../../assets/less/components/component/basic/bar.less";
</style>

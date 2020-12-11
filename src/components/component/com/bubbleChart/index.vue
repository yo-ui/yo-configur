//气泡图
<template>
  <div class="bm-chart-box bm-basic-bubble-chart-com">
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
import { graphic } from "echarts/lib/export";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "bubbleChartCom",
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
    this.$emit("success"); //组件加载完成回调
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
      var valueList = [
        [
          [28604, 77, 17096869, "Australia", 1990],
          [31163, 77.4, 27662440, "Canada", 1990],
          [1516, 68, 1154605773, "China", 1990],
          [13670, 74.7, 10582082, "Cuba", 1990],
          [28599, 75, 4986705, "Finland", 1990],
          [29476, 77.1, 56943299, "France", 1990],
          [31476, 75.4, 78958237, "Germany", 1990],
          [28666, 78.1, 254830, "Iceland", 1990],
          [1777, 57.7, 870601776, "India", 1990],
          [29550, 79.1, 122249285, "Japan", 1990],
          [2076, 67.9, 20194354, "North Korea", 1990],
          [12087, 72, 42972254, "South Korea", 1990],
          [24021, 75.4, 3397534, "New Zealand", 1990],
          [43296, 76.8, 4240375, "Norway", 1990],
          [10088, 70.8, 38195258, "Poland", 1990],
          [19349, 69.6, 147568552, "Russia", 1990],
          [10670, 67.3, 53994605, "Turkey", 1990],
          [26424, 75.7, 57110117, "United Kingdom", 1990],
          [37062, 75.4, 252847810, "United States", 1990]
        ],
        [
          [44056, 81.8, 23968973, "Australia", 2015],
          [43294, 81.7, 35939927, "Canada", 2015],
          [13334, 76.9, 1376048943, "China", 2015],
          [21291, 78.5, 11389562, "Cuba", 2015],
          [38923, 80.8, 5503457, "Finland", 2015],
          [37599, 81.9, 64395345, "France", 2015],
          [44053, 81.1, 80688545, "Germany", 2015],
          [42182, 82.8, 329425, "Iceland", 2015],
          [5903, 66.8, 1311050527, "India", 2015],
          [36162, 83.5, 126573481, "Japan", 2015],
          [1390, 71.4, 25155317, "North Korea", 2015],
          [34644, 80.7, 50293439, "South Korea", 2015],
          [34186, 80.6, 4528526, "New Zealand", 2015],
          [64304, 81.6, 5210967, "Norway", 2015],
          [24787, 77.3, 38611794, "Poland", 2015],
          [23038, 73.13, 143456918, "Russia", 2015],
          [19360, 76.5, 78665830, "Turkey", 2015],
          [38225, 81.4, 64715810, "United Kingdom", 2015],
          [53354, 79.1, 321773631, "United States", 2015]
        ]
      ];

      this.chartOptions = {
        // backgroundColor: new graphic.RadialGradient(0.3, 0.3, 0.8, [
        //   {
        //     offset: 0,
        //     color: "#f7f8fa"
        //   },
        //   {
        //     offset: 1,
        //     color: "#cdd0d5"
        //   }
        // ]),
        title: {
          text: "1990 与 2015 年各国家人均寿命与 GDP",
          show: false
        },
        legend: {
          name,
          right: 10,
          data: ["1990", "2015"]
        },
        xAxis: {
          splitLine: {
            lineStyle: {
              type: "dashed"
            }
          }
        },
        yAxis: {
          splitLine: {
            lineStyle: {
              type: "dashed"
            }
          },
          scale: true
        },
        series: [
          {
            name: "1990",
            data: valueList[0],
            type: "scatter",
            symbolSize: function(data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
              label: {
                show: true,
                formatter: function(param) {
                  return param.data[3];
                },
                position: "top"
              }
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(120, 36, 50, 0.5)",
              shadowOffsetY: 5,
              color: new graphic.RadialGradient(0.4, 0.3, 1, [
                {
                  offset: 0,
                  color: "rgb(251, 118, 123)"
                },
                {
                  offset: 1,
                  color: "rgb(204, 46, 72)"
                }
              ])
            }
          },
          {
            name: "2015",
            data: valueList[1],
            type: "scatter",
            symbolSize: function(data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
              label: {
                show: true,
                formatter: function(param) {
                  return param.data[3];
                },
                position: "top"
              }
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(25, 100, 150, 0.5)",
              shadowOffsetY: 5,
              color: new graphic.RadialGradient(0.4, 0.3, 1, [
                {
                  offset: 0,
                  color: "rgb(129, 227, 238)"
                },
                {
                  offset: 1,
                  color: "rgb(25, 183, 207)"
                }
              ])
            }
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

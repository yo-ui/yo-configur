// 南丁格尔图
<template>
  <!-- <v-chart
    theme="macarons"
    autoresize
    :style="comStyle"
    :init-options="{ renderer: 'svg' }"
    :options="chartOptions"
  /> -->
  <div class="bm-chart-box bm-basic-nightingale-pie-chart-com">
    <h2 class="title">
      {{ deviceInfo.name || "设备"
      }}<el-select
        v-if="
          deviceInfo.points &&
            deviceInfo.points.length > 0 &&
            showType == 'edit'
        "
        v-model="condition.point"
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
      :init-options="{ renderer: 'svg' }"
      theme="macarons"
      autoresize
      :style="comStyle"
      :options="chartOptions"
    />
  </div>
</template>

<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "nightingalePieChartCom",
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
        backgroundType = "",
        borderRadius = "",
        opacity = "",
        scale = "",
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
    // this.$emit("success"); //组件加载完成回调
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      commonGetDeviceAction: "commonGetDevice",
      commonDevicePointHstDataAction: "commonDevicePointHstData"
    }),
    init() {
      // this.loadChartOptions();
      let { info = {} } = this;
      let { bindData = {} } = info || {};
      let { deviceId = "" } = bindData || {};
      // if (deviceId) {
      this.loadDeviceInfo(deviceId);
      let { $vm } = window;
      $vm.$on("devicePointEvent", deviceList => {
        bmCommon.log("pieChart", deviceList);
      });
    },
    selectPointEvent() {
      this.loadPointData();
    },
    loadDeviceInfo(deviceId) {
      this.commonGetDeviceFunc(deviceId, (device = {}) => {
        this.deviceInfo = device || {};
        let { condition } = this;
        let { points = [] } = device || {};
        let [point = {}] = points || [];
        let { id = "" } = point || {};
        condition.point = id;
        this.loadPointData();
      });
    },
    loadPointData() {
      this.commonDevicePointHstDataFunc(data => {
        this.loadChartOptions(data);
      });
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
        for (let i = 0; i < 5; i++) {
          let value = parseInt(Math.random() * 1000);
          let name = this.$moment()
            .subtract(i, "d")
            .format("YYYY-MM-DD");
          times.push(name);
          values.push({ value, name });
        }
      }
      this.chartOptions = {
        // backgroundColor: "#2c343c",
        title: {
          text: "Customized Pie",
          left: "center",
          top: 20,
          textStyle: {
            color: "#ccc"
          },
          show: false
        },

        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 274, name: "联盟广告" },
              { value: 235, name: "视频广告" },
              { value: 400, name: "搜索引擎" }
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            label: {
              color: "#000"
            },
            labelLine: {
              lineStyle: {
                color: "#000"
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: "#c23531",
              shadowBlur: 200,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            },

            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function(idx) {
              return Math.random() * 200;
            }
          }
        ]
      };
    },
    // 获取设备信息
    commonGetDeviceFunc(deviceId, callback) {
      let value = {};
      if (!deviceId) {
        // this.dataLoadingStatus = false;
        callback && callback();
        return;
      }
      // this.dataLoadingStatus = true;
      this.commonGetDeviceAction({ deviceId })
        .then(({ data }) => {
          let { code = "", result = {}, message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            value = result || {};
          } else {
            bmCommon.error(message);
          }
          // this.dataLoadingStatus = false;
          callback && callback(value || {});
        })
        .catch(err => {
          // this.dataLoadingStatus = false;
          callback && callback(value || {});
          bmCommon.error("获取数据失败=>commonGetDevice", err);
        });
    },
    // 获取设备点位信息
    commonDevicePointHstDataFunc(callback) {
      let value = {};
      let { condition, deviceInfo = {} } = this;
      let { id: deviceId = "" } = deviceInfo || {};
      if (!deviceId) {
        // this.dataLoadingStatus = false;
        callback && callback();
        return;
      }
      let { point = "" } = condition;
      let startTime = this.$moment().format("YYYY-MM-DD 00:00:00");
      let endTime = this.$moment().format("YYYY-MM-DD HH:mm:ss");
      // this.dataLoadingStatus = true;
      this.commonDevicePointHstDataAction({
        deviceId,
        point,
        startTime,
        endTime
      })
        .then(({ data }) => {
          let { code = "", result = {}, message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            value = result || {};
          } else {
            bmCommon.error(message);
          }
          // this.dataLoadingStatus = false;
          callback && callback(value || {});
        })
        .catch(err => {
          // this.dataLoadingStatus = false;
          callback && callback(value || {});
          bmCommon.error("获取数据失败=>commonDevicePointHstData", err);
        });
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
@import (less) "../../../../assets/less/components/component/basic/pie.less";
</style>

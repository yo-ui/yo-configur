// 时序折线图
<template>
  <div class="bm-chart-box bm-basic-sequence-line-chart-com">
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
    <!-- :init-options="{ renderer: 'svg' }" -->
    <v-chart
      theme="macarons"
      autoresize
      :style="comStyle"
      :options="chartOptions"
    />
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
// import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "sequenceLineChartCom",
  data() {
    return {
      deviceInfo: {},
      condition: {
        point: ""
      },
      // dataLoadingStatus:false,
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
    // this.$emit("success"); //组件加载完成回调
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      // commonGetDeviceAction: "commonGetDevice",
      // commonDevicePointHstDataAction: "commonDevicePointHstData"
    }),
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
      this.chartOptions = {
        title: {
          text: "折线图堆叠",
          show: false
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          name,
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
          top: "10%"
        },
        grid: {
          top: "30%",
          bottom: "8%"
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };
    }
    // // 获取设备信息
    // commonGetDeviceFunc(deviceId, callback) {
    //   let value = {};
    //   if (!deviceId) {
    //     // this.dataLoadingStatus = false;
    //     callback && callback();
    //     return;
    //   }
    //   // this.dataLoadingStatus = true;
    //   this.commonGetDeviceAction({ deviceId })
    //     .then(({ data }) => {
    //       let { code = "", result = {}, message = "" } = data || {};
    //       if (code == Constants.CODES.SUCCESS) {
    //         value = result || {};
    //       } else {
    //         bmCommon.error(message);
    //       }
    //       // this.dataLoadingStatus = false;
    //       callback && callback(value || {});
    //     })
    //     .catch(err => {
    //       // this.dataLoadingStatus = false;
    //       callback && callback(value || {});
    //       bmCommon.error("获取数据失败=>commonGetDevice", err);
    //     });
    // },
    // // 获取设备点位信息
    // commonDevicePointHstDataFunc(callback) {
    //   let value = {};
    //   let { condition, deviceInfo = {} } = this;
    //   let { id: deviceId = "" } = deviceInfo || {};
    //   if (!deviceId) {
    //     // this.dataLoadingStatus = false;
    //     callback && callback();
    //     return;
    //   }
    //   let { point = "" } = condition;
    //   let startTime = this.$moment().format("YYYY-MM-DD 00:00:00");
    //   let endTime = this.$moment().format("YYYY-MM-DD HH:mm:ss");
    //   // this.dataLoadingStatus = true;
    //   this.commonDevicePointHstDataAction({
    //     deviceId,
    //     point,
    //     startTime,
    //     endTime
    //   })
    //     .then(({ data }) => {
    //       let { code = "", result = {}, message = "" } = data || {};
    //       if (code == Constants.CODES.SUCCESS) {
    //         value = result || {};
    //       } else {
    //         bmCommon.error(message);
    //       }
    //       // this.dataLoadingStatus = false;
    //       callback && callback(value || {});
    //     })
    //     .catch(err => {
    //       // this.dataLoadingStatus = false;
    //       callback && callback(value || {});
    //       bmCommon.error("获取数据失败=>commonDevicePointHstData", err);
    //     });
    // }
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
@import (less) "../../../../assets/less/components/component/basic/line.less";
</style>

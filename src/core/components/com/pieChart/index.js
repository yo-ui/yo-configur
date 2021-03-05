import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import Echart from "@/common/lib/echarts/echart";
// import "../../../../assets/less/components/component/com/line.less";
// 饼图
class Text extends Component {
  deviceInfo = {};
  echart = null;
  constructor(props) {
    super(props);
  }
  init() {
    // this.echart = new Echart({
    //   autoresize: true,
    //   theme: "macarons",
    //   initOptions: { renderer: "svg" }
    // });
    this.loadVueTemplate();
    let { info = {} } = this;
    let { bindData = {} } = info || {};
    let { deviceId = "" } = bindData || {};
    if (deviceId) {
      this.loadDeviceInfo();
    } else {
      this.loadChartOptions();
    }
  }

  //组件样式

  renderSelect() {
    let selectText = ``;

    let { deviceInfo = {} } = this;
    let { points = [] } = deviceInfo || {};
    let showType = window.bm_show_type;
    let { length = 0 } = points || [];
    if (length > 0 && showType == "edit") {
      let options = [];
      let i = 0;
      for (; i < length; i++) {
        let item = points[i];
        let { name = "", id = "" } = item || {};
        options.push(`<option
          value="${id}"
        >${name}
        </option>`);
      }
      selectText = `<select class="select"
      placeholder="请选择设备点位"
    >
    ${options.join("")}
       </select
    >`;
    }
    return selectText;
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

  comStyle() {
    return {};
  }

  //加载数据
  loadData() {
    this.loadDeviceInfo();
  }

  loadVueTemplate() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let that = this;
    this.vue = new Vue({
      el: `#vue_${id}`,
      data: {
        comStyle: super.comStyle(),
        chartOptions: {},
        showType: window.bm_show_type,
        info,
        deviceInfo: {}
      },
      methods: {
        selectPointEvent() {
          that.selectPointEvent();
        }
      },
      template: `
      <div
      class="bm-chart-box bm-com-pie-chart-com component">
      <h2 class="title">
      {{ deviceInfo.name || "设备"
      }}<el-select @mousedown.native.stop
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
      `
    });
    bmCommon.log(this.vue.chartOptions);
  }

  //刷新内容
  refreshContent(data) {
    let { info = {} } = this;
    let { bindData = {} } = info || {};
    let { devicePoint = "" } = bindData || {};
    let { device } = data || {};
    this.vue.deviceInfo = device || {};
    // let { condition } = this;
    if (!devicePoint) {
      let { points = [] } = device || {};
      let [point = {}] = points || [];
      let { id = "" } = point || {};
      info.bindData.devicePoint = id;
    }
    this.loadPointData();
  }

  loadPointData() {
    let { info = {} } = this;
    let { bindData = {} } = info || {};
    let { deviceId = "", devicePoint: point = "" } = bindData || {};
    let startTime = moment().format("YYYY-MM-DD 00:00:00");
    let endTime = moment().format("YYYY-MM-DD HH:mm:ss");
    $vm.$emit("device-point-hst-data", {
      point,
      startTime,
      endTime,
      deviceId,
      callback: data => {
        this.loadChartOptions(data);
        this.refresh();
      }
    });
  }
  loadChartOptions(data) {
    let times = [];
    let values = [];
    let name = $vm.$lang("用量");
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
        let name = moment()
          .subtract(i, "d")
          .format("YYYY-MM-DD");
        times.push(name);
        values.push({ value, name });
      }
    }
    let chartOptions = {
      title: {
        text: $vm.$lang("设备实时数据"),
        show: false
        // left: 'center'
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        left: "right",
        top: "10%",
        data: times
      },
      series: [
        {
          name,
          type: "pie",
          radius: "55%",
          center: ["40%", "60%"],
          data: values
          // emphasis: {
          //   itemStyle: {
          //     shadowBlur: 10,
          //     shadowOffsetX: 0,
          //     shadowColor: "rgba(0, 0, 0, 0.5)"
          //   }
          // }
        }
      ]
    };
    // this.echart.setOptions(chartOptions);
    this.vue.chartOptions = chartOptions;
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    // let { id = "" } = info || {};
    // let $container = $(`#${id}>.component`);
    // let $selectBox = $container.find(".select-box");
    // $selectBox.html(this.renderSelect());
    this.vue.info = info;
    this.vue.comStyle = super.comStyle();
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

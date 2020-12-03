//设备数据绑定
<template>
  <el-dialog
    class="bm-dialog-data-assign-com"
    v-dialogDrag="true"
    :title="$lang('指定生成')"
    @keydown.native.stop
    :visible.sync="showDialogStatus"
    width="500px"
  >
    <el-form
      :model="condition"
      ref="form"
      label-suffix=":"
      :inline="false"
      size="normal"
    >
      <el-form-item label="" required>
        <el-input
          type="textarea"
          v-model="condition.ruleContent"
          clearable
          rows="5"
          maxlength="50"
        ></el-input>
      </el-form-item>
      <div class="tip">
        {{ $lang("使用英文逗号分割字符串'true'或'false'") }}
      </div>
    </el-form>
    <div class="line"></div>
    <template #footer>
      <el-button @click="closeEvent">{{ $lang("取消") }}</el-button>
      <el-button type="primary" @click="submitEvent">{{
        $lang("确定")
      }}</el-button>
    </template>
  </el-dialog>
</template>

<script>
/* eslint-disable vue/no-parsing-error */
// import bmCommon from "@/common/common";
// import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "bm-dialog-data-com",
  data() {
    let typeList = Object.freeze([
      { code: "simulate", name: "模拟数据" },
      { code: "static", name: "静态数据", disabled: true },
      { code: "interactive", name: "交互数据" }
    ]);
    let updateTypeList = Object.freeze([
      { code: "append", name: "追加" },
      { code: "overide", name: "覆盖" }
    ]);
    let dataTypeList = Object.freeze([
      {
        code: "boolean",
        name: "布尔列",
        ruleList: [
          { code: "diy", name: "指定" },
          { code: "random", name: "随机" }
        ]
      },
      {
        code: "date",
        name: "时间列",
        ruleList: [
          { code: "diy", name: "指定" },
          { code: "random", name: "随机" },
          { code: "add", name: "自增/减" }
        ]
      },
      {
        code: "number",
        name: "数字列",
        ruleList: [
          { code: "diy", name: "指定" },
          { code: "random", name: "随机" },
          { code: "add", name: "自增/减" }
        ]
      },
      {
        code: "string",
        name: "字符串列",
        ruleList: [
          { code: "diy", name: "指定" },
          { code: "random", name: "随机" }
        ]
      }
    ]);
    //模拟数据表格式
    let simulateTableKeys = Object.freeze([
      { code: "index", name: "序号" },
      { code: "name", name: "列名", descr: "数据表每一列的名称" },
      { code: "type", name: "类型", descr: "数据表每一列的类型" },
      { code: "rule", name: "生成规则", descr: "数据表每一列的数据生成规则" }
    ]);
    //交互数据表格式
    let interactiveTableKeys = Object.freeze([
      { code: "data", name: "数据", descr: "每个单元格的数据，必填" },
      {
        code: "descr",
        name: "说明",
        descr: "每个数据的说明，选填,类似代码注释"
      }
    ]);
    return {
      showDialogStatus: false,
      typeList,
      updateTypeList,
      dataTypeList,
      interactiveTableKeys,
      simulateTableKeys,
      defaultActive: 0,
      // pointList: [],
      // device: null,
      dataLoadingStatus: true,
      // showPopoverStatus: false,
      // defaultExpandedKeys: [],
      uploadHeaders: {},
      uploadUrl: "",
      condition: {
        id: "",
        name: "", //名称
        type: typeList[0].code, //类型
        line: 10, //单次更新行数
        time: 2, //单次更新时间间隔
        updateType: "append", // append 追加 overide 覆盖
        columns: [] //表列
        // orgKeywords: "",
        // orgName: "",
        // orgId: "",
        // deviceId: "",
        // infoType: "",
        // pointIds: [],
        // // pointId: "",
        // deviceName: ""
        // // pointName: ""
      }
    };
  },
  components: {},
  computed: {
    ...mapGetters({
      // canvas: "canvas/getCanvas",
      // zoom: "canvas/getZoom", //放大缩小
      // leftMenuStatus: "canvas/getLeftMenuStatus", //获取左侧菜单栏状态
      // rightMenuStatus: "canvas/getRightMenuStatus", //获取右侧菜单栏状态
      // activeCom: "canvas/getActiveCom",
      // activeComs: "canvas/getActiveComs",
      // treeData: "common/getOrganizeList",
      widgetList: "canvas/getWidgetList"
    })
    // deviceMap() {
    //   let { deviceList = [] } = this;
    //   let map = {};
    //   deviceList.forEach(item => {
    //     let { id = "" } = item || {};
    //     map[id] = item || {};
    //   });
    //   return map || {};
    // }
  },
  methods: {
    ...mapMutations({
      // setActiveCom: "canvas/setActiveCom",
      // setZoom: "canvas/setZoom",
      // setWidgetList: "canvas/setWidgetList"
      // setOrganizeList: "common/setOrganizeList"
      // setLeftMenuStatus: "canvas/setLeftMenuStatus",
      // setRightMenuStatus: "canvas/setRightMenuStatus"
    }),
    ...mapActions({
      // selectComAction: "canvas/selectCom"
      // commonDevicePointsAction: "commonDevicePoints"
      // orgStrucListByLevelAction: "orgStrucListByLevel"
    }),
    // 初始化
    init() {
      // this.storeProductFunc();
      // this.orgStrucListByLevelFunc((list = []) => {
      //   let [org = {}] = list || [];
      //   let { id = "" } = org || {};
      //   // condition.orgId = id;
      //   // condition.orgName = name;
      //   this.defaultExpandedKeys = [id];
      //   // this.$nextTick(() => {
      //   //   this.$refs.tree?.setCurrentKey(id);
      //   // });
      //   // this.loadReportDeviceList();
      // });
    },
    show(item = {}) {
      // let { treeData = [], condition } = this;
      // let { id = "", bindData = {}, infoType = "" } = item || {};
      // let { devicePoint = "", deviceId = "", orgId = "", pointIds = [] } =
      //   bindData || {};
      // this.deviceList = null;
      // this.pointList = null;
      this.defaultActive = 0;
      this.showDialogStatus = true;
      // this.typeChangeEvent();

    },
    // 切换数据类型
    dataTypeChangeEvent(item) {
      let { dataTypeList = [] } = this;
      let map = {};
      dataTypeList.forEach(item => {
        let { code = "" } = item || {};
        map[code] = item || {};
      });
      let { type = "" } = item || {};
      let { ruleList = [] } = map[type] || {};
      item.ruleList = ruleList || [];
      let [ruleObj = {}] = ruleList || [];
      let { code: rule = "" } = ruleObj || {};
      item.rule = rule;
    },
    //移除列数据
    removeColumnEvent(index) {
      let { condition } = this;
      let { columns = [] } = condition;
      columns.splice(index, 1);
    },
    // 添加列数据
    addColumnEvent() {
      let { condition, dataTypeList = [] } = this;
      let { columns = [] } = condition;
      let [item = {}] = dataTypeList || [];
      let { code: type = "", ruleList = [] } = item || {};
      let [ruleObj = {}] = ruleList || [];
      let { code: rule = "" } = ruleObj || {};
      columns.push({
        name: "未命名列",
        type,
        rule,
        ruleList
      });
    },
    // 规则切换事件
    ruleChangeEvent() {},
    // 类型切换事件
    typeChangeEvent() {
      let { condition, dataTypeList = [] } = this;
      let { type = "" } = condition;
      let columns = [];
      if (type == "simulate") {
        dataTypeList.forEach(item => {
          let { name = "", code: type = "", ruleList = [] } = item || {};
          let [ruleObj = {}] = ruleList || [];
          let { code: rule = "" } = ruleObj || {};
          columns.push({ name, type, rule, ruleList });
        });
      } else if (type == "static") {
        condition.columns = [];
      } else if (type == "interactive") {
        condition.columns = [];
      }
      condition.columns = columns || [];
    },
    closeEvent() {
      this.showDialogStatus = false;
    },
    addEvent() {},
    // loadDeviceList() {
    //   this.dataLoadingStatus = true;
    //   this.commonDevicePointsFunc((list = []) => {
    //     this.deviceList = list || [];
    //     let { condition, deviceMap = {} } = this;
    //     let { deviceId = "", pointIds = [] } = condition;
    //     if (deviceId) {
    //       let device = deviceMap[deviceId] || {}; // let [device = {}] = list || [];
    //       this.device = device || {};
    //       let { points = [], id = "" } = device || {};
    //       condition.deviceId = id;
    //       this.device = device || {};
    //       this.pointList = points || [];
    //       let { length = 0 } = pointIds || [];
    //       if (length < 1) {
    //         condition.pointIds = points.map(item => {
    //           return item.id;
    //         });
    //       }
    //     }
    //     this.dataLoadingStatus = false;
    //   });
    // },
    // selectDeviceEvent() {
    //   let { condition, device = {} } = this;
    //   let { points = [], id = "", pointIds = [] } = device || {};
    //   condition.deviceId = id;
    //   this.resetStatus = false;
    //   this.pointList = points || [];
    //   let { length = 0 } = pointIds || [];
    //   if (length < 1) {
    //     condition.pointIds = points.map(item => {
    //       return item.id;
    //     });
    //   }
    //   // let [point = {}] = points || [];
    //   // let { id: pointId = "" } = point || {};
    //   // condition.pointId = pointId;
    // },
    // //过滤树结点
    // filterTree(val, data) {
    //   if (!val) {
    //     return true;
    //   }
    //   let name = (data.name || "").toUpperCase();
    //   val = val.toUpperCase();
    //   return name.indexOf(val) != -1;
    // },
    // selectDeviceEvent() {
    //   this.resetStatus = false;
    // },
    //点击组织事件
    // nodeClickEvent(item, node, com) {
    //   let { condition } = this;
    //   let { id = "", name = "" } = item || {};
    //   condition.orgId = id;
    //   this.resetStatus = false;
    //   condition.orgName = name;
    //   this.defaultExpandedKeys = [id];
    //   this.showPopoverStatus = false;
    //   // this.loadReportDeviceList();
    // },
    resetEvent() {
      let { condition } = this;
      condition.orgId = "";
      condition.orgName = "";
      this.device = null;
      condition.deviceId = "";
      condition.pointIds = [];
      this.resetStatus = true;
      this.$nextTick(() => {
        this.$refs.form?.clearValidate();
      });
    },
    prevEvent() {
      this.defaultActive = 0;
    },
    submitEvent() {
      let { defaultActive = 0 } = this;
      if (defaultActive != 1) {
        this.defaultActive = 1;
        return;
      }
      let callback = () => {
        let { widgetList = [], condition } = this;
        let {
          orgId = "",
          deviceId = "",
          comId = "",
          pointIds = []
        } = condition;
        let activeCom = widgetList.find(item => item.id == comId) || {};
        activeCom.bindData = {
          orgId,
          deviceId,
          pointIds
        };
        this.showDialogStatus = false;
      };
      if (resetStatus) {
        callback && callback();
        return;
      }
      this.$refs.form?.validate((valid, msg) => {
        if (valid) {
          callback();
        } else {
          if (msg) {
            for (let key in msg) {
              let item = msg[key];
              let message = item[0].message;
              message && this.$$msgError(message);
              return false;
            }
          }
          return false;
        }
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="less">
@import (less) "../../assets/less/components/data/assign.less";
</style>

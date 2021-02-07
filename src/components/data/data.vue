//设备数据绑定
<template>
  <div class="data-box">
    <el-dialog
      class="bm-dialog-data-com"
      v-dialogDrag="true"
      :title="$lang(`${condition.id ? '修改' : '新建'}数据表`)"
      @keydown.native.stop
      :visible.sync="showDialogStatus"
      width="1000px"
    >
      <el-steps :active="defaultActive" simple>
        <template v-if="condition.type == 'simulate'">
          <el-step :title="$lang('配置模拟数据')">
            <template #icon>
              1
            </template>
          </el-step>
          <el-step :title="$lang('预览数据')">
            <template #icon>
              2
            </template>
          </el-step>
        </template>
        <template v-else-if="condition.type == 'static'">
          <el-step :title="$lang('上传文件')">
            <template #icon>
              1
            </template></el-step
          >
          <el-step :title="$lang('修改数据')">
            <template #icon>
              2
            </template></el-step
          >
        </template>
        <template v-else-if="condition.type == 'interactive'">
          <el-step :title="$lang('配置交互数据')">
            <template #icon>
              1
            </template></el-step
          >
          <el-step :title="$lang('预览数据')">
            <template #icon>
              2
            </template></el-step
          >
        </template>
      </el-steps>
      <el-form
        :model="condition"
        ref="form"
        label-width="120px"
        label-suffix=":"
        :inline="false"
        size="normal"
      >
        <!-- 新建  -->
        <template v-if="defaultActive == 0">
          <el-form-item :label="$lang('名称')" required>
            <el-input
              v-model="condition.name"
              clearable
              maxlength="50"
            ></el-input>
          </el-form-item>
          <el-form-item :label="$lang('类型')" required>
            <el-radio-group v-model="condition.type" @change="typeChangeEvent">
              <el-radio-button
                v-for="item in typeList"
                :key="item.code"
                :label="item.code"
                :disabled="!!item.disabled"
              >
                {{ item.name }}
              </el-radio-button>
            </el-radio-group>
          </el-form-item>

          <template v-if="condition.type == 'static'">
            <el-form-item :label="$lang('文件类型')" required>
              <el-radio-group v-model="condition.fileType">
                <el-radio label="JSON">
                  JSON
                </el-radio>
                <el-radio label="CSV">
                  CSV
                </el-radio>
              </el-radio-group>
              <el-upload
                :action="uploadUrl"
                :headers="uploadHeaders"
                ref="upload"
                :auto-upload="false"
                :limit="1"
              >
                <el-button slot="trigger" size="small" type="primary"
                  >选择文件</el-button
                >
                <div slot="tip" class="el-upload__tip">
                  jpg/png files with a size less than 500kb
                </div>
              </el-upload>
            </el-form-item>
          </template>
          <template v-else-if="condition.type == 'simulate'">
            <el-form-item :label="$lang('单次更新行数')" required>
              <el-input-number
                controls-position="right"
                v-model="condition.line"
                :placeholder="$lang('请输入单次更新行数')"
                size="normal"
                :min="1"
                :max="1000"
                clearable
              ></el-input-number>
              <el-tooltip
                :content="$lang('单批次生成的数据行数，范围为[1,1000]！')"
                placement="top"
                effect="dark"
              >
                <i class="el-icon-warning-outline"></i>
              </el-tooltip>
            </el-form-item>
            <el-form-item :label="$lang('更新时间间隔')" required>
              <el-input-number
                controls-position="right"
                v-model="condition.time"
                :placeholder="$lang('请输入更新时间间隔')"
                size="normal"
                :min="0"
                :max="1000"
                clearable
              ></el-input-number>
              <el-tooltip
                :content="
                  $lang(
                    '单位为秒，范围为[0,1000],0表示仅生成一次，无后续更新！'
                  )
                "
                placement="top"
                effect="dark"
              >
                <i class="el-icon-warning-outline"></i>
              </el-tooltip>
            </el-form-item>
            <el-form-item :label="$lang('数据更新方式')" required>
              <el-radio-group v-model="condition.updateType">
                <el-radio-button
                  v-for="item in updateTypeList"
                  :key="item.code"
                  :label="item.code"
                >
                  {{ item.name }}
                </el-radio-button>
              </el-radio-group>
              <el-tooltip
                :content="
                  $lang(
                    '追加：新生成数据置于现有数据之前，覆盖：新数据替换现有数据'
                  )
                "
                placement="top"
                effect="dark"
              >
                <i class="el-icon-warning-outline"></i>
              </el-tooltip>
            </el-form-item>
            <el-form-item :label="$lang('数据表格式')" required>
              <el-table
                header-row-class-name="table-header"
                :data="condition.columns"
                stripe
                min-height="300"
              >
                <el-table-column align="center" width="50">
                  <template #default="scope">
                    <el-button
                      type="text"
                      size="default"
                      :disabled="condition.columns.length == 1"
                      @click="removeColumnEvent(scope.$index)"
                    >
                      <i class="el-icon-delete"></i>
                    </el-button>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  v-for="item in simulateTableKeys"
                  :prop="item.code"
                  :key="item.code"
                  :label="item.name"
                >
                  <template #header>
                    {{ item.name }}
                    <el-tooltip
                      v-if="item.descr"
                      :content="$lang(item.descr)"
                      placement="top"
                      effect="dark"
                    >
                      <i class="el-icon-warning-outline"></i>
                    </el-tooltip>
                  </template>
                  <template #default="scope">
                    <template v-if="item.code == 'index'">
                      {{ scope.$index + 1 }}
                    </template>
                    <template v-else-if="item.code == 'type'">
                      <el-select
                        v-model="scope.row.type"
                        @change="dataTypeChangeEvent(scope.row)"
                      >
                        <el-option
                          v-for="item in dataTypeList"
                          :key="item.code"
                          :label="item.code"
                          :value="item.code"
                        >
                        </el-option>
                      </el-select>
                    </template>
                    <template v-else-if="item.code == 'rule'">
                      <el-select
                        class="rule-select"
                        v-model="scope.row.rule"
                        @change="ruleChangeEvent(scope.row)"
                      >
                        <el-option
                          v-for="item in scope.row.ruleList"
                          :key="item.code"
                          :label="item.name"
                          :value="item.code"
                        >
                        </el-option>
                      </el-select>
                      <i
                        class="el-icon-edit-outline"
                        v-if="
                          !(
                            scope.row.type == 'boolean' &&
                            scope.row.rule == 'random'
                          )
                        "
                        @click="editRuleEvent(scope.row)"
                      ></i>
                      <i v-else class="el-icon-edit-outline opacity"></i>
                    </template>
                    <template v-else>
                      {{ scope.row[item.code] }}
                    </template>
                  </template>
                </el-table-column>
              </el-table>
            </el-form-item>
            <el-form-item label="">
              <el-button type="primary" size="default" @click="addColumnEvent">
                <i class="el-icon-plus"></i>
                添加列
              </el-button>
            </el-form-item>
          </template>
          <template v-else-if="condition.type == 'interactive'">
            <el-form-item :label="$lang('说明')" required>
              {{
                $lang(
                  "交互数据表可以让各个组件之间协同通讯，以达成一些交互效果（例如切换 Tab时隐藏/显示其他组件）,一个交互数据可以让多套组件使用，因此推荐一个仪表盘只创建一个交互数据。交互数据表不能添加后续的操作流程（如新建列，列排序等）。"
                )
              }}
            </el-form-item>
            <el-form-item :label="$lang('交互内容')" required>
              <el-table
                header-row-class-name="table-header"
                :data="condition.columns"
                border
                stripe
                min-height="300"
              >
                <el-table-column
                  align="center"
                  v-for="item in interactiveTableKeys"
                  :prop="item.code"
                  :key="item.code"
                  :label="item.name"
                >
                  <template #header>
                    {{ item.name }}
                    <el-tooltip
                      v-if="item.descr"
                      :content="$lang(item.descr)"
                      placement="top"
                      effect="dark"
                    >
                      <i class="el-icon-warning-outline"></i>
                    </el-tooltip>
                  </template>
                </el-table-column>
              </el-table>
            </el-form-item>
          </template>
        </template>
        <!-- 预览 -->
        <template v-if="defaultActive == 0">
          <el-form-item :label="$lang('数据预览')">
            <el-table
              header-row-class-name="table-header"
              :data="previewDataList"
              border
              stripe
              min-height="300"
            >
              <el-table-column
                align="center"
                v-for="(item, index) in condition.columns"
                :prop="index"
                :key="index"
                :label="item.name"
              >
                <template #header>
                  {{ item.name }}
                  <!-- <el-tooltip
                    v-if="item.descr"
                    :content="$lang(item.descr)"
                    placement="top"
                    effect="dark"
                  >
                    <i class="el-icon-warning-outline"></i>
                  </el-tooltip> -->
                </template>
              </el-table-column>
            </el-table>
            <el-pagination background layout="prev, pager, next" :total="1000">
            </el-pagination>
          </el-form-item>
        </template>
      </el-form>
      <div class="line"></div>
      <template #footer>
        <!-- <el-button @click="resetEvent">{{ $lang("取消") }}</el-button> -->
        <el-button type="primary" @click="prevEvent" v-if="defaultActive > 0">{{
          $lang("上一步")
        }}</el-button>
        <el-button type="primary" @click="submitEvent">{{
          $lang(defaultActive == 1 ? "确定" : "下一步")
        }}</el-button>
        <el-button @click="closeEvent">{{ $lang("取消") }}</el-button>
      </template>
    </el-dialog>
    <bm-random ref="bmRandom"></bm-random>
    <bm-assign ref="bmAssign"></bm-assign>
    <bm-in-decrement ref="bmInDecrement"></bm-in-decrement>
  </div>
</template>

<script>
/* eslint-disable vue/no-parsing-error */
import bmCommon from "@/common/common";
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
          { code: "assign", name: "指定" },
          { code: "random", name: "随机" }
        ]
      },
      {
        code: "date",
        name: "时间列",
        ruleList: [
          { code: "assign", name: "指定" },
          { code: "random", name: "随机" },
          { code: "in-decrement", name: "自增/减" }
        ]
      },
      {
        code: "number",
        name: "数字列",
        ruleList: [
          { code: "assign", name: "指定" },
          { code: "random", name: "随机" },
          { code: "in-decrement", name: "自增/减" }
        ]
      },
      {
        code: "string",
        name: "字符串列",
        ruleList: [
          { code: "assign", name: "指定" },
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
      previewDataList: [],
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
  components: {
    bmRandom: () =>
      import(
        /* webpackChunkName: "bm-random-com" */ "@/components/data/random"
      ),
    bmInDecrement: () =>
      import(
        /* webpackChunkName: "bm-in-decrement-com" */ "@/components/data/in-decrement"
      ),
    bmAssign: () =>
      import(/* webpackChunkName: "bm-assign-com" */ "@/components/data/assign")
  },
  computed: {
    ...mapGetters({
      // canvas: "canvas/getCanvas",
      // zoom: "canvas/getZoom", //放大缩小
      // leftMenuStatus: "canvas/getLeftMenuStatus", //获取左侧菜单栏状态
      // rightMenuStatus: "canvas/getRightMenuStatus", //获取右侧菜单栏状态
      // activeCom: "canvas/getActiveCom",
      // activeComs: "canvas/getActiveComs",
      // treeData: "common/getOrganizeList",
      //widgetList: "canvas/getWidgetList"
      widgetList: []
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
      this.typeChangeEvent();
    },
    editRuleEvent(item = {}) {
      let { type = "", rule = "" } = item || {};
      let callback = ({ ruleContent = "" }) => {
        item.ruleContent = ruleContent;
      };
      if (type == "boolean") {
        if (rule == "assign") {
          this.$refs.bmAssign?.show({ type, rule, callback });
        }
      } else if (type == "date" || type == "number") {
        if (rule == "assign") {
          this.$refs.bmAssign?.show({ type, rule, callback });
        } else if (rule == "random") {
          this.$refs.bmRandom?.show({ type, rule, callback });
        } else if (rule == "in-decrement") {
          this.$refs.bmInDecrement?.show({ type, rule, callback });
        }
      } else if (type == "string") {
        if (rule == "assign") {
          this.$refs.bmAssign?.show({ type, rule, callback });
        } else if (rule == "random") {
          this.$refs.bmRandom?.show({ type, rule, callback });
        }
      }
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
      let id = bmCommon.uuid();
      columns.push({
        id,
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
          let id = bmCommon.uuid();
          columns.push({ id, name, type, rule, ruleList });
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
      // if (resetStatus) {
      //   callback && callback();
      //   return;
      // }
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
    // 获取设备和点位信息
    // commonDevicePointsFunc(callback) {
    //   let value = [];
    //   let { condition } = this;
    //   let { orgId = "" } = condition;
    //   this.commonDevicePointsAction({ orgId })
    //     .then(({ data }) => {
    //       let { code = "", result = [], message = "" } = data || {};
    //       if (code == Constants.CODES.SUCCESS) {
    //         value = result || [];
    //       } else {
    //         bmCommon.error(message);
    //       }
    //       callback && callback(value || []);
    //     })
    //     .catch(err => {
    //       callback && callback(value || []);
    //       bmCommon.error("获取数据失败=>commonDevicePoints", err);
    //     });
    // }
    // 获取组织列表
    // orgStrucListByLevelFunc(callback) {
    //   let that = this;
    //   let value = [];
    //   that
    //     .orgStrucListByLevelAction()
    //     .then(({ data }) => {
    //       let { code = "", result = [] } = data || {};
    //       if (code == Constants.CODES.SUCCESS) {
    //         value = bmCommon.recursiveTree(result || [], "pid");
    //         // that.ORGANIZETYPELIST = Object.freeze(_ORGANIZETYPELIST || []);
    //       }
    //       // that.treeData = value || [];
    //       that.setOrganizeList(value || []);
    //       callback && callback(value || []);
    //     })
    //     .catch(err => {
    //       that.setOrganizeList(value || []);
    //       callback && callback(value || []);
    //       bmCommon.error("获取数据失败=>orgStrucListByLevel", err);
    //     });
    // }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="less">
@import (less) "../../assets/less/components/data/data.less";
</style>

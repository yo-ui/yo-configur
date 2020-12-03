//设备数据绑定
<template>
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
      <el-form-item :label="$lang('名称')" required>
        <el-input v-model="condition.name" clearable maxlength="50"></el-input>
      </el-form-item>
      <el-form-item :label="$lang('类型')" required>
        <el-radio-group v-model="condition.type">
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
              $lang('单位为秒，范围为[0,1000],0表示仅生成一次，无后续更新！')
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
        </el-form-item>
        <el-form-item :label="$lang('数据表格式')" required>
          <el-table
            header-row-class-name="table-header"
            :data="condition.columns"
            border
            stripe
            min-height="300"
          >
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
            </el-table-column>
          </el-table>
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
    </el-form>

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
      // this.resetStatus = false;
      // this.$refs.form?.resetFields();
      // condition.comId = id; //组件id
      // condition.infoType = infoType;
      // if (orgId) {
      //   condition.deviceId = deviceId;
      //   condition.pointIds = pointIds;
      //   condition.pointId = devicePoint;
      //   condition.orgId = orgId;
      //   this.defaultExpandedKeys = [orgId];
      //   this.$nextTick(() => {
      //     let node = this.$refs.tree?.getNode(orgId);
      //     this.$refs.tree?.setCurrentKey(orgId);
      //     let { label: name = "" } = node || {};
      //     condition.orgName = name;
      //   });
      // } else {
      //   this.device = "";
      //   let [org = {}] = treeData || [];
      //   let { id = "", name = "" } = org || {};
      //   condition.orgId = id;
      //   condition.orgName = name;
      //   this.defaultExpandedKeys = [id];
      //   condition.deviceId = "";
      //   condition.pointId = "";
      // }
      // this.loadDeviceList();
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

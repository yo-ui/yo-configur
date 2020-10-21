//设备数据绑定
<template>
  <el-dialog
    class="bm-dialog-device-com"
    v-dialogDrag="true"
    :title="$lang('数据绑定')"
    @keydown.native.stop
    :visible.sync="showDialogStatus"
    width="500px"
    ><el-form
      ref="form"
      :model="condition"
      :show-message="$store.state.showMessage"
      :status-icon="false"
      autocomplete="off"
      label-width="100px"
      v-loading="dataLoadingStatus"
    >
      <el-form-item
        prop="orgId"
        :label="$lang('组织名称')"
        :rules="[{ required: true, message: '请选择组织', trigger: 'change' }]"
      >
        <el-popover
          placement="bottom-start"
          popper-class="org-list-popper"
          width="330"
          trigger="click"
          v-model="showPopoverStatus"
        >
          <!-- <el-button slot="reference">content</el-button> -->
          <el-input
            class="search-box"
            v-model="condition.orgName"
            slot="reference"
            :placeholder="$lang('请选择组织')"
            readonly
            suffix-icon="el-icon-arrow-down"
          ></el-input>
          <el-input
            v-model="condition.orgKeywords"
            :placeholder="$lang('请输入搜索关键字(组织名称)')"
            suffix-icon="el-icon-search"
            clearable
          ></el-input>
          <el-tree
            ref="tree"
            :default-expanded-keys="defaultExpandedKeys"
            :filter-node-method="filterTree"
            default-expand-all
            :check-strictly="true"
            :expand-on-click-node="false"
            @node-click="nodeClickEvent"
            node-key="id"
            :props="{ label: 'name' }"
            :data="treeData"
          >
            <template slot-scope="{ node, data }">
              <el-tooltip
                effect="dark"
                :content="$lang(node.label)"
                placement="right"
              >
                <span class="tree-txt"
                  ><i class="bm-icon" :class="'bm-icon-tree-' + data.type"></i
                  >{{ $lang(node.label) }}</span
                >
              </el-tooltip>
            </template>
          </el-tree>
        </el-popover>
      </el-form-item>

      <el-form-item
        prop="deviceId"
        :label="$lang('设备名称')"
        :rules="[{ required: true, message: '请选择设备', trigger: 'change' }]"
      >
        <el-select
          v-model="device"
          filterable
          clearable
          @change="selectDeviceEvent"
          placeholder="请选择设备名称"
          value-key="id"
        >
          <el-option
            v-for="item in deviceList"
            :key="item.id"
            :label="item.name"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <h2 class="tip">{{ $lang("注:选择需要显示的点位") }}</h2>
      <el-form-item
        prop="pointIds"
        :label="$lang('点位选择')"
        :rules="[
          { required: true, message: '请选择需要显示的点位', trigger: 'change' }
        ]"
      >
        <el-checkbox-group v-model="condition.pointIds" :min="1">
          <el-checkbox
            v-for="(item, index) in pointList"
            :key="index"
            :label="item.id"
          >
            {{ item.name }}
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
    <template #footer>
      <!-- <el-button @click="closeEvent">{{ $lang("关闭") }}</el-button> -->
      <el-button @click="resetEvent">{{ $lang("重置") }}</el-button>
      <el-button type="primary" @click="submitEvent">{{
        $lang("确定")
      }}</el-button>
    </template>
  </el-dialog>
</template>

<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "bm-dialog-device-com",
  data() {
    return {
      showDialogStatus: false,
      deviceList: [],
      pointList: [],
      device: null,
      dataLoadingStatus: true,
      showPopoverStatus: false,
      defaultExpandedKeys: [],
      condition: {
        orgKeywords: "",
        orgName: "",
        orgId: "",
        deviceId: "",
        pointIds: [],
        // pointId: "",
        deviceName: ""
        // pointName: ""
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
      treeData: "common/getOrganizeList",
      widgetList: "canvas/getWidgetList"
    }),
    deviceMap() {
      let { deviceList = [] } = this;
      let map = {};
      deviceList.forEach(item => {
        let { id = "" } = item || {};
        map[id] = item || {};
      });
      return map || {};
    }
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
      commonDevicePointsAction: "commonDevicePoints"
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
      let { treeData = [], condition } = this;
      let { id = "", bindData = {} } = item || {};
      let { devicePoint = "", deviceId = "", orgId = "", pointIds = [] } =
        bindData || {};
      this.deviceList = null;
      this.pointList = null;
      this.showDialogStatus = true;
      this.resetStatus = false;
      this.$refs.form?.resetFields();
      condition.comId = id; //组件id
      if (orgId) {
        condition.deviceId = deviceId;
        condition.pointIds = pointIds;
        condition.pointId = devicePoint;
        condition.orgId = orgId;
        this.defaultExpandedKeys = [orgId];
        this.$nextTick(() => {
          let node = this.$refs.tree?.getNode(orgId);
          this.$refs.tree?.setCurrentKey(orgId);
          let { label: name = "" } = node || {};
          condition.orgName = name;
        });
      } else {
        this.device = "";
        let [org = {}] = treeData || [];
        let { id = "", name = "" } = org || {};
        condition.orgId = id;
        condition.orgName = name;
        this.defaultExpandedKeys = [id];
        condition.deviceId = "";
        condition.pointId = "";
      }
      this.loadDeviceList();
    },
    closeEvent() {
      this.showDialogStatus = false;
    },
    loadDeviceList() {
      this.dataLoadingStatus = true;
      this.commonDevicePointsFunc((list = []) => {
        this.deviceList = list || [];
        let { condition, deviceMap = {} } = this;
        let { deviceId = "", pointIds = [] } = condition;
        if (deviceId) {
          let device = deviceMap[deviceId] || {}; // let [device = {}] = list || [];
          this.device = device || {};
          let { points = [], id = "" } = device || {};
          condition.deviceId = id;
          this.device = device || {};
          this.pointList = points || [];
          let { length = 0 } = pointIds || [];
          if (length < 1) {
            condition.pointIds = points.map(item => {
              return item.id;
            });
          }
        }
        this.dataLoadingStatus = false;
      });
    },
    selectDeviceEvent() {
      let { condition } = this;
      let { device = {} } = this;
      let { points = [], id = "" } = device || {};
      condition.deviceId = id;
      this.resetStatus = false;
      this.pointList = points || [];
      // let [point = {}] = points || [];
      // let { id: pointId = "" } = point || {};
      // condition.pointId = pointId;
    },
    //过滤树结点
    filterTree(val, data) {
      if (!val) {
        return true;
      }
      let name = (data.name || "").toUpperCase();
      val = val.toUpperCase();
      return name.indexOf(val) != -1;
    },
    // selectDeviceEvent() {
    //   this.resetStatus = false;
    // },
    //点击组织事件
    nodeClickEvent(item, node, com) {
      let { condition } = this;
      let { id = "", name = "" } = item || {};
      condition.orgId = id;
      this.resetStatus = false;
      condition.orgName = name;
      this.defaultExpandedKeys = [id];
      this.showPopoverStatus = false;
      // this.loadReportDeviceList();
    },
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
    submitEvent() {
      let { resetStatus = false } = this;
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
    },
    // 获取设备和点位信息
    commonDevicePointsFunc(callback) {
      let value = [];
      let { condition } = this;
      let { orgId = "" } = condition;
      this.commonDevicePointsAction({ orgId })
        .then(({ data }) => {
          let { code = "", result = [], message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            value = result || [];
          } else {
            bmCommon.error(message);
          }
          callback && callback(value || []);
        })
        .catch(err => {
          callback && callback(value || []);
          bmCommon.error("获取数据失败=>commonDevicePoints", err);
        });
    }
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
  },
  watch: {
    "condition.orgKeywords"(newVal, oldVal) {
      if (newVal != oldVal) {
        this.$refs.tree?.filter(newVal);
      }
    }
  }
};
</script>

<style lang="less">
@import (less) "../../assets/less/components/data/device.less";
</style>

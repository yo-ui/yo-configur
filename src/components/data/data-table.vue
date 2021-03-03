//设备数据绑定
<template>
  <div class="bm-dialog-data-table-com">
    <el-dialog
      class=""
      v-dialogDrag="true"
      :title="$lang('数据表')"
      @keydown.native.stop
      :visible.sync="showDialogStatus"
      width="80%"
    >
      <!-- @open="handleOpen"
      @close="handleClose"> -->
      <div class="flex-content">
        <div class="left">
          <div class="title">
            {{ $lang("数据表") }}
            <i class="el-icon-plus" @click="addEvent">{{ $lang("新建") }}</i>
          </div>
          <el-menu :default-active="defaultActive">
            <el-menu-item
              :index="`${item.id}`"
              :key="item.id"
              v-for="item in menuList"
            >
              <div class="txt">
                <i class="el-icon-document"></i>
                <span slot="title">{{ $lang(item.name) }}</span>
              </div>
              <div class="icon-box">
                <i class="icon-circle"></i>
                <el-dropdown trigger="click">
                  <i class="el-icon-more"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>{{ $lang("运行") }}</el-dropdown-item>
                    <el-dropdown-item>{{ $lang("暂停") }}</el-dropdown-item>
                    <el-dropdown-item>{{ $lang("编辑") }}</el-dropdown-item>
                    <el-dropdown-item>{{ $lang("删除") }}</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="right"></div>
      </div>
      <template #footer>
        <el-button @click="closeEvent">{{ $lang("关闭") }}</el-button>
        <!-- <el-button @click="resetEvent">{{ $lang("重置") }}</el-button> -->
        <el-button type="primary" @click="submitEvent">{{
          $lang("确定")
        }}</el-button>
      </template>
    </el-dialog>
    <bm-data ref="bmData"></bm-data>
  </div>
</template>

<script>
/* eslint-disable vue/no-parsing-error */

// import bmCommon from "@/common/common";
// import { Constants } from "@/common/env";
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "bm-dialog-data-table-com",
  data() {
    let menuList = [];
    for (let i = 0; i < 6; i++) {
      menuList.push({ id: i, name: `数据${i}` });
    }
    return {
      showDialogStatus: false,
      menuList,
      defaultActive: "0",
      // pointList: [],
      // device: null,
      dataLoadingStatus: true,
      // showPopoverStatus: false,
      // defaultExpandedKeys: [],
      condition: {
        // orgKeywords: "",
        // orgName: "",
        // orgId: "",
        // deviceId: "",
        // infoType: "",
        // pointIds: [],
        // // pointId: "",
        // deviceName: ""
        // pointName: ""
      }
    };
  },
  components: {
    bmData: () =>
      import(/* webpackChunkName: "bm-data-com" */ "@/components/data/data")
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
    addEvent() {
      this.$refs.bmData?.show({});
    },
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
    //过滤树结点
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
    // //点击组织事件
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
@import (less) "../../assets/less/components/data/data.table.less";
</style>

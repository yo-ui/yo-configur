//预览
<template>
  <!-- :close-on-click-modal="false"
    :close-on-press-escape="false" -->
  <el-dialog
    :destroy-on-close="true"
    class="bm-dialog-preview-com"
    v-dialogDrag="true"
    :title="$lang('预览')"
    :visible.sync="showDialogStatus"
    width="70%"
  >
    <template #title>
      {{ $lang("预览") }}
      <i class="el-icon-monitor" @click="$openPage(iframeUrl, true)"></i>
    </template>
    <!-- <div v-loading="dataLoadingStatus"> -->
    <iframe
      :src="iframeUrl"
      frameborder="0"
      v-if="showDialogStatus"
      @load="loadEvent"
    ></iframe>
    <!-- <bm-preview
      ref="bmPreview"
      :canvasId="$route.query.canvasId"
      :type="$route.query.type"
    ></bm-preview> -->
    <!-- </div> -->
    <!-- <template #footer>
      <el-button
        type="primary"
        :disabled="!condition.remark"
        @click="submitEvent"
        >{{ $lang("提交") }}</el-button
      >
    </template> -->
  </el-dialog>
</template>

<script>
// import bmCommon from "@/common/common";
// import { Constants } from "@/common/env";
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  data() {
    return {
      showDialogStatus: false,
      dataLoadingStatus: true,
      iframeUrl: "",
      condition: {
        // remark: ""
      }
    };
  },
  components: {
    // bmPreview: () => import(/* webpackChunkName: "iot-preview-com" */ "@/pages/Preview")
  },
  computed: {
    ...mapGetters({
      // canvas: "canvas/getCanvas",
      // zoom: "canvas/getZoom", //放大缩小
      // leftMenuStatus: "canvas/getLeftMenuStatus", //获取左侧菜单栏状态
      // rightMenuStatus: "canvas/getRightMenuStatus", //获取右侧菜单栏状态
      // activeCom: "canvas/getActiveCom",
      // activeComs: "canvas/getActiveComs",
      // recordList: "canvas/getRecordList",
      // widgetList: "canvas/getWidgetList"
    })
  },
  methods: {
    ...mapMutations({
      // setActiveCom: "canvas/setActiveCom",
      // setRecordList: "canvas/setRecordList"
      // setZoom: "canvas/setZoom",
      // setLeftMenuStatus: "canvas/setLeftMenuStatus",
      // setRightMenuStatus: "canvas/setRightMenuStatus"
    }),
    ...mapActions({
      // selectComAction: "canvas/selectCom",
      // upload2OssAction: "upload2Oss"
    }),
    loadEvent() {
      this.dataLoadingStatus = false;
    },
    // 初始化
    init() {
      // this.storeProductFunc();
    },
    show() {
      let { $route } = this;
      let { query = {} } = $route;
      let { canvasId = "" } = query || {};
      this.iframeUrl = `${this.$RouterURL.preview.name}?canvasId=${canvasId}`;
      this.showDialogStatus = true;
      this.dataLoadingStatus = true;
      // let { condition } = this;
      // this.selectComAction(); //选中组件
      // condition.remark = "";
    },
    closeEvent() {
      this.showDialogStatus = false;
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="less">
@import (less) "../assets/less/components/preview.less";
</style>

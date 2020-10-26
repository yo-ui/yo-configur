//预览
<template>
  <!-- :close-on-click-modal="false"
    :close-on-press-escape="false" -->
  <el-dialog
    class="bm-dialog-preview-com"
    v-dialogDrag="true"
    :title="$lang('预览')"
    :visible.sync="showDialogStatus"
    width="800px"
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
// const html2canvas = require("@/common/lib/html2canvas");
// eslint-disable-next-line no-undef
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
    // submitEvent() {
    //   let { widgetList = [], condition, recordList = [] } = this;
    //   let { remark: name = "" } = condition;
    //   let time = this.$moment().valueOf();
    //   let id = bmCommon.uuid();
    //   html2canvas($(".canvas-box")[0], {}).then(canvas => {
    //     // window.open(canvas.toDataURL())
    //     // bmCommon.log(canvas.toDataURL());
    //     let blob = bmCommon.convertBase64ToBlob(canvas.toDataURL());
    //     let formData = new FormData();
    //     formData.append("files", blob, `${Date.now()}.png`);
    //     formData.append("subDir", Constants.UPLOADDIR.FILE);
    //     this.upload2OssFunc(
    //       {
    //         formData
    //       },
    //       img => {
    //         recordList.unshift({
    //           id,
    //           name,
    //           time,
    //           img,
    //           type: "manual", //手动记录
    //           widgetList
    //         });
    //         this.setRecordList(recordList);
    //         this.showDialogStatus = false;
    //       }
    //     );
    //   });
    // },
    // //上传图片
    // upload2OssFunc(options, callback) {
    //   let value = "";
    //   if (this._upload2OssStatus) {
    //     return;
    //   }
    //   this._upload2OssStatus = true;
    //   this.upload2OssAction(options)
    //     .then(({ data }) => {
    //       let { code = "", result = [], message = "" } = data || {};
    //       if (code == Constants.CODES.SUCCESS) {
    //         let [fileName = ""] = result || [];
    //         // this.$$msgSuccess("添附件成功");
    //         value = fileName;
    //       } else {
    //         // this.$$msgError(message || "添附件失败");
    //         bmCommon.error(message || "图片上传失败");
    //       }
    //       callback && callback(value);
    //       this._upload2OssStatus = false;
    //     })
    //     .catch(err => {
    //       callback && callback(value);
    //       // this.$$msgError("添附件失败");
    //       this._upload2OssStatus = false;
    //       bmCommon.error("图片上传失败", err);
    //     });
    // }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="less">
@import (less) "../assets/less/components/preview.less";
</style>

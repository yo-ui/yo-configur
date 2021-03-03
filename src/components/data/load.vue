//加载外部json
<template>
  <el-dialog
    class="bm-dialog-load-com"
    v-dialogDrag="true"
    :title="$lang('加载外部JSON')"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :visible.sync="showDialogStatus"
    width="800px"
    @mousedown.native.stop
    @keydown.native.stop
  >
    <el-input
      v-model="condition.remark"
      type="textarea"
      rows="10"
      :placeholder="$lang('加载外部项目的JSON，格式要符合要求')"
    ></el-input>
    <template #footer>
      <el-button
        type="primary"
        :disabled="!condition.remark"
        @click="submitEvent"
        >{{ $lang("提交") }}</el-button
      >
    </template>
  </el-dialog>
</template>

<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
import widgetListVue from "../home/widget-list.vue";
const html2canvas = require("@/common/lib/html2canvas");
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  data() {
    return {
      showDialogStatus: false,
      condition: {
        remark: ""
      }
    };
  },
  components: {},
  computed: {
    ...mapGetters({
      canvas: "canvas/getCanvas",
      // zoom: "canvas/getZoom", //放大缩小
      // leftMenuStatus: "canvas/getLeftMenuStatus", //获取左侧菜单栏状态
      // rightMenuStatus: "canvas/getRightMenuStatus", //获取右侧菜单栏状态
      // activeCom: "canvas/getActiveCom",
      // activeComs: "canvas/getActiveComs",
      recordList: "canvas/getRecordList",
      widgetList: "canvas/getWidgetList"
    })
  },
  methods: {
    ...mapMutations({
      // setActiveCom: "canvas/setActiveCom",
      setRecordList: "canvas/setRecordList"
      // setZoom: "canvas/setZoom",
      // setLeftMenuStatus: "canvas/setLeftMenuStatus",
      // setRightMenuStatus: "canvas/setRightMenuStatus"
    }),
    ...mapActions({
      selectComAction: "canvas/selectCom",
      upload2OssAction: "upload2Oss"
    }),
    // 初始化
    init() {
      // this.storeProductFunc();
    },
    show() {
      this.showDialogStatus = true;
      let { condition, canvas = {} } = this;
      let bm_widgetMap = window.bm_widgetMap;
      let widgetList = [];
      for (let i in bm_widgetMap) {
        let obj = bm_widgetMap[i];
        let { info = {} } = obj || {};
        widgetList.push(info);
      }
      this.selectComAction(); //选中组件
      condition.remark = JSON.stringify({
        canvas,
        widgetList
      });
    },
    closeEvent() {
      this.showDialogStatus = false;
    },
    submitEvent() {
      let { widgetList = [], condition, recordList = [] } = this;
      let { remark: name = "" } = condition;
      let time = this.$moment().valueOf();
      let id = bmCommon.uuid();
      html2canvas($(".canvas-box")[0], {}).then(canvas => {
        // window.open(canvas.toDataURL())
        // bmCommon.log(canvas.toDataURL());
        let blob = bmCommon.convertBase64ToBlob(canvas.toDataURL());
        let formData = new FormData();
        formData.append("files", blob, `${Date.now()}.png`);
        formData.append("subDir", Constants.UPLOADDIR.FILE);
        recordList = [...recordList];
        this.upload2OssFunc(
          {
            formData
          },
          img => {
            recordList.unshift({
              id,
              name,
              time,
              img,
              type: "manual", //手动记录
              widgetList
            });
            this.setRecordList(recordList);
            this.showDialogStatus = false;
          }
        );
      });
    },
    //上传图片
    upload2OssFunc(options, callback) {
      let value = "";
      if (this._upload2OssStatus) {
        return;
      }
      this._upload2OssStatus = true;
      this.upload2OssAction(options)
        .then(({ data }) => {
          let { code = "", result = [], message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            let [fileName = ""] = result || [];
            // this.$$msgSuccess("添附件成功");
            value = fileName;
          } else {
            // this.$$msgError(message || "添附件失败");
            bmCommon.error(message || "图片上传失败");
          }
          callback && callback(value);
          this._upload2OssStatus = false;
        })
        .catch(err => {
          callback && callback(value);
          // this.$$msgError("添附件失败");
          this._upload2OssStatus = false;
          bmCommon.error("图片上传失败", err);
        });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="less">
@import (less) "../../assets/less/components/load.less";
</style>

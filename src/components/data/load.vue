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
    v-loading="dataLoadingStatus"
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
      <el-button @click="closeEvent">{{ $lang("关闭") }}</el-button>
    </template>
  </el-dialog>
</template>

<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
import Canvas from "@/core/Canvas";
import CanvasEvent from "@/core/CanvasEvent";
import Core from "@/core/index";
// const html2canvas = require("@/common/lib/html2canvas");
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  data() {
    return {
      showDialogStatus: false,
      dataLoadingStatus: true,
      condition: {
        remark: ""
      }
    };
  },
  components: {},
  computed: {
    ...mapGetters({
      canvas: "canvas/getCanvas"
    })
  },
  methods: {
    ...mapMutations({
      setCanvas: "canvas/setCanvas"
    }),
    ...mapActions({
      selectComAction: "canvas/selectCom",
      upload2OssAction: "upload2Oss"
    }),
    // 初始化
    init() {},
    show() {
      this.showDialogStatus = true;
      this.dataLoadingStatus = true;
      let { condition, canvas = {} } = this;
      this._setTimeoutId = setTimeout(() => {
        clearTimeout(this._setTimeoutId);
        let widgetList = Canvas.getWidgetList();
        condition.remark = JSON.stringify({
          canvas,
          widgetList
        });
        this.dataLoadingStatus = false;
      }, 10);
    },
    closeEvent() {
      this.showDialogStatus = false;
    },
    submitEvent() {
      let { condition, canvas = {} } = this;
      let { remark = "" } = condition;
      if (!remark) {
        this.$$msgError("请输入加载内宾JSON");
        return;
      }
      remark = JSON.parse(remark);
      let { canvasId = "" } = canvas || {};
      let { widgetList = [], canvas: _canvas = {} } = remark || {};
      this.setCanvas({ ..._canvas, canvasId });
      Core.init(widgetList);
      Canvas.clearHistoryList();
      Canvas.setHistoryIndex(0);
      CanvasEvent.createHistoryAction();
      this.closeEvent();
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

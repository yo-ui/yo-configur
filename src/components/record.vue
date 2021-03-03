//创建记录点
<template>
  <el-dialog
    class="bm-dialog-record-com"
    v-dialogDrag="true"
    :title="$lang('创建记录点')"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :visible.sync="showDialogStatus"
    width="800px"
  >
    <el-input
      v-model="condition.remark"
      type="textarea"
      rows="10"
      :placeholder="
        $lang(
          `输入可以描述当前状态的信息，例如'某功能已完成','某图表已添加'等。`
        )
      "
    ></el-input>
    <p>
      {{
        $lang(
          `执行此操作可以将仪表盘的当前状态生成一个记录点，从而允许在以后用回退功能让仪表盘回到过去。仪表盘的回退操作和保存操作`
        )
      }}
      <strong>{{ $lang(`并不相同`) }}</strong>
      {{ $lang(`物可视具有自动保存功能，每个操作都会`) }}
      <strong>{{ $lang(`自动保存`) }}</strong>
      {{ $lang(`，但并非都能回退，请勿混淆。`) }}
    </p>
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
import Canvas from "@/core/Canvas";
const html2canvas = require("@/common/lib/html2canvas");
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
    ...mapGetters({})
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      upload2OssAction: "upload2Oss"
    }),
    // 初始化
    init() {},
    show() {
      this.showDialogStatus = true;
      let { condition } = this;
      condition.remark = "";
    },
    closeEvent() {
      this.showDialogStatus = false;
    },
    submitEvent() {
      let { condition } = this;
      let bm_widgetMap = window.bm_widgetMap;
      let widgetList = [];
      for (let i in bm_widgetMap) {
        let obj = bm_widgetMap[i];
        let { info = {} } = obj || {};
        widgetList.push(info);
      }

      let { remark: name = "" } = condition;
      let time = moment().valueOf();
      let id = bmCommon.uuid();
      html2canvas($(".canvas-box")[0], {}).then(canvas => {
        // window.open(canvas.toDataURL())
        // bmCommon.log(canvas.toDataURL());
        let blob = bmCommon.convertBase64ToBlob(canvas.toDataURL());
        let formData = new FormData();
        formData.append("files", blob, `${Date.now()}.png`);
        formData.append("subDir", Constants.UPLOADDIR.FILE);
        this.upload2OssFunc(
          {
            formData
          },
          img => {
            let record = {
              id,
              name,
              time,
              img,
              type: "manual", //手动记录
              widgetList
            };
            let recordList = Canvas.getRecordList();
            recordList.push(record);
            Canvas.setRecordList(recordList);
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
@import (less) "../assets/less/components/record.less";
</style>

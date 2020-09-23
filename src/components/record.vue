//创建记录点
<template>
  <el-dialog
    class="bm-dialog-record-com"
    v-dialogDrag
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
      <el-button type="primary" :disabled="!condition.remark" @click="submitEvent">{{
        $lang("提交")
      }}</el-button>
    </template>
  </el-dialog>
</template>

<script>
import bmCommon from "@/common/common";
// import { Constants } from "@/common/env";
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
      // canvas: "canvas/getCanvas",
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
      // selectComAction: "canvas/selectCom"
    }),
    // 初始化
    init() {
      // this.storeProductFunc();
    },
    show() {
      this.showDialogStatus = true;
      let { condition } = this;
      condition.remark = "";
    },
    closeEvent() {
      this.showDialogStatus = false;
    },
    submitEvent() {
      let { widgetList = [], condition, recordList = [] } = this;
      let { remark: name = "" } = condition;
      let time = this.$moment().valueOf();
      let id = bmCommon.uuid();
      recordList.push({
        id,
        name,
        time,
        widgetList
      });
      this.setRecordList(recordList);
      this.showDialogStatus = false;
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

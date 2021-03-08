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
  components: {},
  computed: {
    ...mapGetters({})
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),
    loadEvent() {
      this.dataLoadingStatus = false;
    },
    // 初始化
    init() {},
    show() {
      let { $route } = this;
      let { query = {} } = $route;
      let { canvasId = "" } = query || {};
      this.iframeUrl = `${this.$RouterURL.preview.name}?canvasId=${canvasId}`;
      this.showDialogStatus = true;
      this.dataLoadingStatus = true;
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

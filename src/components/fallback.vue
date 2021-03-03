//回退记录
<template>
  <el-dialog
    class="bm-dialog-fallback-com"
    v-dialogDrag="true"
    :title="$lang('回退记录')"
    :visible.sync="showDialogStatus"
    width="1000px"
  >
    <div class="content">
      <!-- {{recordList}} -->
      <div class="list-box">
        <el-radio-group v-model="record" class="list">
          <el-radio v-for="item in dataList" :key="item.id" :label="item">
            <span class="name">{{ item.name }}</span>
            <span class="time"
              >{{ $moment(item.time).fromNow() }}
              <i class="el-icon-delete" @click="deleteEvent(item)"></i
            ></span>
          </el-radio>
        </el-radio-group>
        <el-pagination
          background
          @size-change="handleSizeChangeEvent"
          @current-change="handleCurrentChangeEvent"
          :current-page="condition.pageNo"
          :page-sizes="[5, 10, 20, 50, 100]"
          :page-size="condition.pageSize"
          layout="total, prev, pager, next"
          :total="recordList.length"
        >
        </el-pagination>
      </div>
      <div
        class="bm-icon img-box"
        :style="
          record && record.img
            ? `background-image:url(${$loadImgUrl(record.img)})`
            : ''
        "
      ></div>
    </div>
    <div class="line"></div>
    <template #footer>
      <!-- <el-button @click="closeEvent">取 消</el-button> -->
      <span class="tip">{{
        $lang("一旦回退版本后将无法恢复，请谨慎操作！")
      }}</span>
      <el-button type="primary" :disabled="!record" @click="submitEvent">{{
        $lang("回退")
      }}</el-button>
    </template>
  </el-dialog>
</template>

<script>
// import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
import Canvas from "@/core/Canvas";
import Core from "@/core/index";
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  data() {
    return {
      showDialogStatus: false,
      record: null,
      recordList: [],
      condition: {
        pageNo: 1,
        pageSize: 10,
        totalRecord: 0
      }
    };
  },
  components: {},
  computed: {
    ...mapGetters({}),
    dataList() {
      let { condition, recordList = [] } = this;
      let { pageNo = 1, pageSize = Constants.PAGESIZE } = condition;
      return recordList.slice(pageSize * (pageNo - 1), pageSize * pageNo);
    }
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),
    // 初始化
    init() {},
    show() {
      this.showDialogStatus = true;
      this.recordList = Canvas.getRecordList(true);
      this.record = null;
    },
    closeEvent() {
      this.showDialogStatus = false;
    },
    submitEvent() {
      let { record = {} } = this;
      let { id = "" } = record || {};
      record = Canvas.getRecord(id);
      // this.setWidgetList(widgetList);
      let { widgetList = [] } = record || {};
      Core.init(widgetList);
      this.showDialogStatus = false;
    },
    deleteEvent(item) {
      let { id = "" } = item || {};
      // let { recordList = [] } = this;
      let recordList = Canvas.getRecordList();
      let index = recordList.findIndex(item => item.id == id);
      recordList.splice(index, 1);
      Canvas.setRecordList(recordList);
      this.record = null;
    },
    // 切换每页数据
    handleSizeChangeEvent(val) {
      let { condition } = this;
      // console.log(`每页 ${val} 条`);
      condition.pageNo = 1;
      condition.pageSize = val;
    },
    // 切换页号
    handleCurrentChangeEvent(val) {
      // console.log(`当前页: ${val}`);
      this.condition.pageNo = val;
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="less">
@import (less) "../assets/less/components/fallback.less";
</style>

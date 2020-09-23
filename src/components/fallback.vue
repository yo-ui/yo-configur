//回退记录
<template>
  <el-dialog
    class="bm-dialog-fallback-com"
    v-dialogDrag
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
            <span class="time">{{ $moment(item.time).fromNow() }}</span>
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
      <div class="img-box"></div>
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
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  data() {
    return {
      showDialogStatus: false,
      record: null,
      condition: {
        pageNo: 1,
        pageSize: 10,
        totalRecord: 0
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
      recordList: "canvas/getRecordList"
      // widgetList: "canvas/getWidgetList"
    }),
    dataList() {
      let { condition, recordList = [] } = this;
      let { pageNo = 1, pageSize = Constants.PAGESIZE } = condition;
      return recordList.slice(pageSize * (pageNo - 1), pageSize * pageNo);
    }
  },
  methods: {
    ...mapMutations({
      // setActiveCom: "canvas/setActiveCom",
      // setZoom: "canvas/setZoom",
      setWidgetList: "canvas/setWidgetList"
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
      this.record = null;
    },
    closeEvent() {
      this.showDialogStatus = false;
    },
    submitEvent() {
      let { record = {} } = this;
      let { widgetList = [] } = record || {};
      this.setWidgetList(widgetList);
      this.showDialogStatus = false;
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

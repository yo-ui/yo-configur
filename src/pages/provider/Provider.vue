<template>
  <div class="bm-provider-page">
    <div class="operator-btn">
      <el-input
        clearable
        @clear="providerQueryListFunc"
        @keyup.enter.native.stop="providerQueryListFunc"
        :placeholder="$lang('请输入服务商名称/管理员姓名/手机号码关键字')"
        v-model="condition.keywords"
      >
        <el-button
          native-type="button"
          @click="providerQueryListFunc"
          slot="append"
          type="primary"
          icon="el-icon-search"
          >{{ $lang("查询") }}</el-button
        >
      </el-input>
      <el-button
        type="primary"
        native-type="button"
        @click="addEvent"
        icon="el-icon-circle-plus-outline"
      >
        {{ $lang("添加服务商") }}
      </el-button>
    </div>
    <div class="table-box" ref="tableBox">
      <el-table
        :data="dataList"
        style="width:100%"
        :height="tableHeight"
        v-loading="dataLoadingStatus"
        tooltip-effect="dark"
      >
        <template slot="empty">
          {{ dataLoadingStatus ? "" : $lang("暂无数据") }}
        </template>
        <el-table-column
          align="center"
          type="index"
          fixed
          :index="
            index => {
              return index + 1;
            }
          "
          :label="$lang('序号')"
          min-width="50"
        >
        </el-table-column>
        <el-table-column
          align="center"
          fixed
          prop="enterpriseName"
          min-width="200"
          :label="$lang('服务商名称')"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="domain"
          min-width="200"
          :label="$lang('服务商域名')"
        >
          <template v-slot:default="scope">
            <a
              v-if="scope.row.domain"
              target="_blank"
              :href="'https://' + scope.row.domain"
              >{{ scope.row.domain }}</a
            >
            <template v-else>
              --
            </template>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          min-width="100"
          prop="projectCount"
          :label="$lang('项目数量')"
        >
          <template v-slot:default="scope">
            <el-button
              native-type="button"
              @click="showProjectListEvent(scope.row)"
              plain
              type="primary"
              >{{ scope.row.projectCount }}</el-button
            >
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          min-width="130"
          prop="deviceCount"
          :label="$lang('设备接入数量')"
        >
        </el-table-column>
        <el-table-column
          align="center"
          min-width="130"
          prop="mainName"
          :label="$lang('管理员姓名')"
        >
        </el-table-column>
        <el-table-column
          align="center"
          min-width="150"
          prop="mobilephone"
          :label="$lang('手机号码')"
        >
        </el-table-column>
        <el-table-column
          align="center"
          fixed="right"
          width="250"
          :label="$lang('操作')"
        >
          <template v-slot:default="scope">
            <el-button
              type="primary"
              @click.stop="showPriceEvent(scope.row)"
              icon="icon icon-price"
              plain
              >{{ $lang("设置价格") }}</el-button
            >
            <el-button
              type="primary"
              @click.stop="editEvent(scope.row)"
              icon="el-icon-edit"
              plain
              >{{ $lang("修改") }}</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      background
      @size-change="handleSizeChangeEvent"
      @current-change="handleCurrentChangeEvent"
      :current-page="condition.pageNo"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="condition.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="condition.totalRecord"
    >
    </el-pagination>

    <bm-project-list ref="bmProjectList"></bm-project-list>
    <bm-provider ref="bmProvider"></bm-provider>
    <bm-price ref="bmPrice"></bm-price>
  </div>
</template>
<script>
import bmCommon from "@/common/common";
// import { URL as _URL } from "@/common/env";
import { Constants } from "@/common/env";
import BmProjectList from "@/components/provider/project-list";
import BmProvider from "@/components/provider/provider";
import BmPrice from "@/components/provider/price";
// eslint-disable-next-line no-undef
const { mapMutations } = Vuex;

export default {
  created() {},
  data() {
    return {
      condition: {
        keywords: "",
        pageSize: 20,
        pageNo: 1,
        totalRecord: 0
      },
      // 表格高度
      tableHeight: 500,
      // 服务商列表加载状态
      dataLoadingStatus: true
    };
  },
  components: {
    BmProjectList,
    BmPrice,
    BmProvider
  },
  computed: {
    dataList() {
      let { condition } = this;
      let {
        // keywords: keyword = "",
        pageSize = Constants.PAGESIZE,
        pageNo = 0
      } = condition;
      let params = {
        // keyword,
        pageSize,
        pageNo
      };
      return (
        this.$store.getters["provider/getProviderListCacheMap"](
          JSON.stringify(params)
        ) || []
      );
    }
  },
  methods: {
    ...mapMutations({
      updateDataList: "provider/setProviderListCacheMap"
    }),
    // 设置价格
    showPriceEvent(item) {
      this.$refs.bmPrice?.show(item);
    },
    //显示添加服务商
    addEvent(item) {
      this.$refs.bmProvider?.show({});
    },
    editEvent(item) {
      this.$refs.bmProvider?.show(item);
    },
    // 切换每页数据
    handleSizeChangeEvent(val) {
      // console.log(`每页 ${val} 条`);
      this.condition.pageNo = 1;
      this.condition.pageSize = val;
      this.providerQueryListFunc();
    },
    // 切换页号
    handleCurrentChangeEvent(val) {
      // console.log(`当前页: ${val}`);
      this.condition.pageNo = val;
      this.providerQueryListFunc();
    },
    // 显示服务商项目列表
    showProjectListEvent(item) {
      this.$refs.bmProjectList?.show(item);
    },
    // 获取服务商列表
    providerQueryListFunc() {
      let that = this;
      let { condition, dataList: providerList = [] } = that;
      let {
        keywords: keyword = "",
        pageSize = Constants.PAGESIZE,
        pageNo = 0
      } = condition;
      that.dataLoadingStatus = true;
      let dataList = [];
      let params = {
        // keyword,
        pageSize,
        pageNo
      };
      if (providerList && providerList.length > 0) {
        this.dataLoadingStatus = false;
      }
      that.$store
        .dispatch("providerQueryList", { ...params, keyword })
        .then(({ data }) => {
          that.dataLoadingStatus = false;
          let { code = "", result } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            let {
              list = [],
              pageSize = Constants.PAGESIZE,
              totalNum = 0,
              pageNo = 1
            } = result || {};
            dataList = list;
            condition.pageSize = pageSize;
            condition.pageNo = pageNo;
            condition.totalRecord = totalNum;
          }
          that.updateDataList({
            key: JSON.stringify(params),
            value: dataList || []
          });
        })
        .catch(err => {
          that.updateDataList({
            key: JSON.stringify(params),
            value: dataList || []
          });
          that.dataLoadingStatus = false;
          bmCommon.error("获取服务商列表失败", err);
        });
    },
    loadTableHeight() {
      this.$nextTick(() => {
        this.tableHeight = this.$refs.tableBox?.offsetHeight;
      });
    }
  },
  mounted: function() {
    this.providerQueryListFunc();
    this.loadTableHeight();
  },
  watch: {
    dataList(newValue, oldValue) {
      if (newValue != oldValue) {
        this.loadTableHeight();
      }
    },
    "condition.keywords"(newVal, oldVal) {
      if (newVal != oldVal) {
        clearTimeout(this._setTimeoutId);
        this._setTimeoutId = setTimeout(() => {
          clearTimeout(this._setTimeoutId);
          this.providerQueryListFunc();
        }, 500);
      }
    }
  }
};
</script>

<style lang="less">
@import (less) "../../assets/less/pages/provider/provider.less";
</style>

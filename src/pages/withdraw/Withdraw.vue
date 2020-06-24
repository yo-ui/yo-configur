<template>
  <div class="bm-withdraw-page">
    <div class="operator-box">
      {{ $lang("提现状态：") }}
      <el-select
        v-model="condition.status"
        :placeholder="$lang('请选择')"
        @change="changeSelectStatusEvent"
      >
        <el-option
          v-for="item in statusList"
          :key="item.code"
          :label="$lang(item.name)"
          :value="item.code"
        >
        </el-option>
      </el-select>
      <div class="time-box" v-if="condition.status == 1">
        {{ $lang("提现时间：") }}
        <el-date-picker
          v-model="condition.times"
          type="datetimerange"
          @change="changeSelectTimeEvent"
          :picker-options="pickerOptions"
          :range-separator="$lang('至')"
          :start-placeholder="$lang('开始日期')"
          :end-placeholder="$lang('结束日期')"
        >
        </el-date-picker>
      </div>
    </div>

    <el-table
      :data="enterpriseList"
      style="width:100%"
      border
      v-loading="dataLoadingStatus"
      :height="tableHeight"
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
        width="60"
      >
      </el-table-column>
      <el-table-column
        align="center"
        min-width="180"
        prop="name"
        fixed
        show-overflow-tooltip
        :label="$lang('企业名称')"
      >
      </el-table-column>
      <el-table-column
        align="center"
        min-width="180"
        prop="accountName"
        show-overflow-tooltip
        :label="$lang('开户名称')"
      >
      </el-table-column>
      <el-table-column
        align="center"
        min-width="200"
        show-overflow-tooltip
        prop="accountNumber"
        :label="$lang('账户')"
      >
      </el-table-column>
      <el-table-column
        align="center"
        min-width="150"
        :label="$lang('提现渠道')"
      >
        <template v-slot:default="scope">
          {{ $lang(scope.row.channel == 2 ? "支付宝" : "银行") }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        min-width="150"
        prop="withdrawAmount"
        :label="$lang('提现金额')"
      >
      </el-table-column>
      <el-table-column
        align="center"
        min-width="150"
        prop="serviceFee"
        :label="$lang('服务费')"
      >
      </el-table-column>
      <el-table-column
        align="center"
        min-width="150"
        prop="amount"
        :label="$lang('打款金额')"
      >
      </el-table-column>
      <el-table-column
        align="center"
        min-width="180"
        prop="withdrawTime"
        :label="$lang('提现时间')"
      >
      </el-table-column>
      <el-table-column
        align="center"
        min-width="150"
        prop="name"
        :label="$lang('状态')"
      >
        <template v-slot:default="scope">
          {{ WITHDRAWTYPEMAP[scope.row.status] }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        fixed="right"
        min-width="150"
        prop="name"
        :label="$lang('操作')"
      >
        <!-- :label="$lang(condition.status == 0 ? '操作' : '详情')" -->
        <template v-slot:default="scope">
          <el-button
            native-type="button"
            type="primary"
            v-if="condition.status == 0"
            @click="showDisposeEvent(scope.row)"
            >{{ $lang("处理") }}</el-button
          >
          <el-button
            native-type="button"
            type="primary"
            v-else
            @click="showDetailEvent(scope.row)"
            >{{ $lang("查看") }}</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <bm-detail ref="bmDetail"></bm-detail>
    <bm-dispose ref="bmDispose"></bm-dispose>
  </div>
</template>
<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
import BmDetail from "@/components/withdraw/detail.vue";
import BmDispose from "@/components/withdraw/dispose.vue";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  data() {
    return {
      // 状态列表
      statusList: [
        { name: "未处理", code: 0 },
        { name: "已处理", code: 1 }
      ],
      condition: {
        // 提现状态
        status: 0,
        //提现历史时间区间
        times: [
          this.$moment()
            .hours(0)
            .minutes(0)
            .seconds(0),
          this.$moment()
        ]
      },
      // 表格高度
      tableHeight: 500,
      dataLoadingStatus: true, //数据加载状态
      // 状态类型
      WITHDRAWTYPEMAP: Constants.WITHDRAWTYPEMAP
    };
  },
  components: {
    BmDetail,
    BmDispose
  },
  computed: {
    ...mapGetters(),
    pickerOptions() {
      let that = this;
      let { $moment } = that;
      return {
        shortcuts: [
          {
            text: that.$lang("今天"),
            onClick(picker) {
              const end = new Date();
              const start = $moment()
                .hours(0)
                .minutes(0)
                .seconds(0);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: that.$lang("最近一周"),
            onClick(picker) {
              const end = new Date();
              const start = $moment().subtract(7, "w");
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: that.$lang("最近一个月"),
            onClick(picker) {
              const end = new Date();
              const start = $moment().subtract(1, "M");
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: that.$lang("最近三个月"),
            onClick(picker) {
              const end = new Date();
              const start = $moment().subtract(3, "M");
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: that.$lang("最近一年"),
            onClick(picker) {
              const end = new Date();
              const start = $moment().subtract(1, "y");
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: that.$lang("最近三年"),
            onClick(picker) {
              const end = new Date();
              const start = $moment().subtract(3, "y");
              picker.$emit("pick", [start, end]);
            }
          }
        ],
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      };
    },
    enterpriseList() {
      let { condition } = this;
      let {
        status = "",
        times = [
          this.$moment()
            .hours(0)
            .minutes(0)
            .seconds(0),
          this.$moment()
        ]
      } = condition;
      let enterpriseList = [];
      let params = {
        startTime: this.$moment(times[0]).format("YYYYMMDDHHmmss"),
        endTime: this.$moment(times[1]).format("YYYYMMDDHHmmss")
      };
      if (status == 0) {
        enterpriseList =
          this.$store.getters["withdraw/getWithdrawEnterprises"] || [];
      } else {
        enterpriseList =
          this.$store.getters["withdraw/getWithdrawHistoryEnterprisesCacheMap"](
            JSON.stringify(params)
          ) || [];
      }
      return enterpriseList || [];
    }
  },
  methods: {
    ...mapMutations({
      updateEnterprises: "withdraw/setWithdrawEnterprises",
      updateHistoryEnterprises: "withdraw/setWithdrawHistoryEnterprisesCacheMap"
    }),
    ...mapActions({
      withdrawEnterprisesAction: "withdrawEnterprises",
      withdrawHistoryEnterprisesAction: "withdrawHistoryEnterprises"
    }),
    // 显示提现详情
    showDisposeEvent(item) {
      this.$refs.bmDispose?.show(item);
    },
    // 显示提现详情
    showDetailEvent(item) {
      this.$refs.bmDetail?.show(item);
    },
    changeSelectStatusEvent() {
      let { condition } = this;
      if (condition.status == 0) {
        this.withdrawEnterprisesFunc();
      } else {
        // condition.times = [
        //   this.$moment()
        //     .hours(0)
        //     .minutes(0)
        //     .seconds(0),
        //   this.$moment()
        // ];
        this.withdrawHistoryEnterprisesFunc();
      }
    },
    //选择时间事件
    changeSelectTimeEvent() {
      let { condition } = this;
      if (condition.status == 0) {
        this.withdrawEnterprisesFunc();
      } else {
        this.withdrawHistoryEnterprisesFunc();
      }
    },
    // 获取企业未处理提现记录
    withdrawEnterprisesFunc(callback) {
      let that = this;
      that.dataLoadingStatus = true;
      let { enterpriseList = [] } = that;
      if (enterpriseList && enterpriseList.length > 0) {
        that.dataLoadingStatus = false;
      }
      let dataList = [];
      that
        .withdrawEnterprisesAction()
        .then(({ data }) => {
          that.dataLoadingStatus = false;
          let { code = "", result } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            let { enterprises } = result || {};
            dataList = enterprises;
          }
          callback && callback();
          that.updateEnterprises(dataList || []);
        })
        .catch(err => {
          callback && callback();
          that.updateEnterprises(dataList || []);
          that.dataLoadingStatus = false;
          bmCommon.error("获取企业未处理提现记录失败", err);
        });
    },
    // 获取企业已处理提现记录
    withdrawHistoryEnterprisesFunc(callback) {
      let that = this;
      let { condition } = that;
      that.dataLoadingStatus = true;
      let { enterpriseList = [] } = that;
      if (enterpriseList && enterpriseList.length > 0) {
        that.dataLoadingStatus = false;
      }
      let dataList = [];
      let params = {
        startTime: that.$moment(condition.times[0]).format("YYYYMMDDHHmmss"),
        endTime: that.$moment(condition.times[1]).format("YYYYMMDDHHmmss")
      };
      that
        .withdrawHistoryEnterprisesAction(params)
        .then(({ data }) => {
          that.dataLoadingStatus = false;
          let { code = "", result } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            let { enterprises } = result || {};
            dataList = enterprises;
          }
          callback && callback();
          that.updateHistoryEnterprises({
            key: JSON.stringify(params),
            value: dataList || []
          });
        })
        .catch(err => {
          that.updateHistoryEnterprises({
            key: JSON.stringify(params),
            value: dataList || []
          });
          callback && callback();
          that.dataLoadingStatus = false;
          bmCommon.error("获取企业已处理提现记录失败", err);
        });
    }
  },
  mounted() {
    this.withdrawEnterprisesFunc();
  }
};
</script>

<style lang="less">
@import (less) "../../assets/less/pages/withdraw/withdraw.less";
</style>

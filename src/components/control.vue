<template>
  <el-dialog
    :title="$lang('请输入控制密码')"
    v-dialogDrag="true"
    class="bm-control-com"
    :close-on-click-modal="false"
    :visible.sync="showDialogStatus"
    :show-close="false"
    width="400px"
    ><template #title>
      <span class="title">
        {{ $lang("请输入控制密码") }}
      </span>
      <i class="el-icon-close" @click="closeEvent"></i>
    </template>
    <div class="loading" v-loading="dataLoadingStatus">
      <bm-pay-password
        ref="bmPayPassword"
        :maxlength="6"
        v-model="condition.password"
        type="Number"
      ></bm-pay-password>
      <div class="el-dialog__footer">
        <el-button
          type="primary"
          :disabled="condition.password.length != 6"
          @click="submitEvent"
          >{{ $lang("确 定") }}</el-button
        >
      </div>
    </div>
    <!-- <template v-slot:footer>
      <el-button
        type="primary"
        :disabled="condition.password.length != 6"
        @click="submitEvent"
        >{{ $lang("确 定") }}</el-button
      >
    </template> -->
  </el-dialog>
</template>

<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
import bmPayPassword from "@/components/common/pay-password";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  data() {
    return {
      showDialogStatus: false,
      dataLoadingStatus: false,
      condition: {
        password: ""
      }
    };
  },
  computed: {
    ...mapGetters()
  },
  components: {
    bmPayPassword
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      canvasControlAction: "canvasControl"
    }),
    show({ point = "", value = "", deviceId = "", callback = () => {} }) {
      let { condition } = this;
      //1 开关选项 2   有select选项   其它   radio选项
      condition.deviceId = deviceId;
      condition.password = "";
      // condition.payType="
      condition.point = point;
      condition.value = value;
      condition.callback = callback;
      this.showDialogStatus = true;
      this.$nextTick(() => {
        this.$refs.bmPayPassword?.show();
      });
    },
    closeEvent() {
      this.showDialogStatus = false;
      let { condition } = this;
      let { callback = () => {} } = condition;
      callback && callback(false);
      // this.$emit("close");
    },
    //余额支付
    submitEvent() {
      let { condition } = this;
      let { password = "" } = condition;
      if (!password) {
        this.$$msgError("请输入控制密码！");
        return;
      }
      if (
        !bmCommon.variablePool.regs.number.test(password) ||
        password.length != 6
      ) {
        this.$$msgError("控制密码为6位数字组成");
        return;
      }
      //控制设备
      this.canvasControlFunc();
    },
    // 获取设备点位列表
    canvasControlFunc() {
      let { condition } = this;
      let {
        deviceId = "",
        point = "",
        value = "",
        password: ctrlPwd = "",
        callback
      } = condition;
      let params = {
        deviceId,
        point,
        value,
        ctrlPwd //: bmCommon.commonMd5(password)
      };
      // if(payType==1){
      // }else if(payType==2){
      // }else {
      // }
      this.dataLoadingStatus = true;
      this.canvasControlAction(params)
        .then(({ data }) => {
          this.dataLoadingStatus = false;
          let { code = "", message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            this.showDialogStatus = false;
            callback && callback(true);
          } else {
            callback && callback(false);
            // this.$emit("fail", message || this.$lang("控制失败！"));
            condition.password = "";
            this.$refs.bmPayPassword?.clear();
            this.$$msgError("控制失败！");
            bmCommon.error(message);
          }
        })
        .catch(err => {
          // this.$emit("fail");
          callback && callback(false);
          condition.password = "";
          this.dataLoadingStatus = false;
          bmCommon.error("获取设备点位列表失败！", err);
        });
    }
  }
};
</script>

<style lang="less">
@import (less) "../assets/less/components/control.less";
</style>

<template>
  <el-dialog
    :title="$lang('请输入控制密码')"
    v-dialogDrag="true"
    class="bm-control-com"
    :close-on-click-modal="false"
    :visible.sync="showDialogStatus"
    width="400px"
  >
    <bm-pay-password
      ref="bmPayPassword"
      :maxlength="6"
      v-model="condition.password"
      type="Number"
    ></bm-pay-password>
    <template v-slot:footer>
      <el-button
        type="primary"
        :disabled="condition.password.length != 6"
        @click="submitEvent"
        >{{ $lang("确 定") }}</el-button
      >
    </template>
  </el-dialog>
</template>

<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
import BmPayPassword from "@/components/common/pay-password";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  data() {
    return {
      showDialogStatus: false,
      condition: {
        password: ""
      }
    };
  },
  computed: {
    ...mapGetters()
  },
  components: {
    BmPayPassword
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
      let that = this;
      let { condition } = that;
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
      that._canvasControlStatus = true;
      that
        .canvasControlAction(params)
        .then(({ data }) => {
          that._canvasControlStatus = false;
          let { code = "", message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            // that.$emit("success");
            that.$$msgError("控制失败！");
            this.showDialogStatus = false;
            callback && callback(true);
          } else {
            callback && callback(false);
            // that.$emit("fail", message || that.$lang("控制失败！"));
            condition.password = "";
            that.$$msgError(message || "控制失败！");
          }
        })
        .catch(err => {
          that.$emit("fail");
          condition.password = "";
          that._canvasControlStatus = false;
          bmCommon.error("获取设备点位列表失败！", err);
        });
    }
  }
};
</script>

<style lang="less">
@import (less) "../assets/less/components/control.less";
</style>

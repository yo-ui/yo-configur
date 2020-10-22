//设备信息
<template>
  <el-form
    class="bm-device-info-com"
    ref="form"
    label-width="120px"
    v-loading="dataLoadingStatus"
  >
    <h2 class="title">{{ deviceInfo.name }}</h2>
    <!-- {{ pointIds }} -->
    <template v-if="pointList && pointList.length > 0">
      <el-form-item
        :label="item.name"
        v-for="(item, index) in pointList"
        :key="index"
      >
        <!-- <template v-if="item.type==2||item.type==4">
        <el-select v-model="condition." placeholder="" clearable filterable v-if="item.optionValList&&item.optionValList.length>0">
          <el-option v-for="(_item,_index) in item.optionValList"
            :key="_index"
            :label="_item"
            :value="_item.value">
          </el-option>
        </el-select>
        
      </template>
      <template v-else> -->
        {{ item.value || "--" }} <small v-if="item.unit">{{ item.unit }}</small>
        <!-- </template> -->
      </el-form-item>
    </template>
  </el-form>
</template>

<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "deviceInfoCom",
  // props: ["info"],
  data() {
    return {
      dataLoadingStatus: true,
      deviceInfo: {},
      pointIds: []
    };
  },
  computed: {
    ...mapGetters(),
    pointList() {
      let { deviceInfo = {}, pointIds = [] } = this;
      let { points = [] } = deviceInfo || {};
      let { length = 0 } = pointIds || [];
      if (length < 1) {
        return points || [];
      }
      return (points || []).filter(item => {
        return pointIds.indexOf(item.id) > -1;
      });
    }
  },
  methods: {
    ...mapMutations(),
    ...mapActions({
      commonGetDeviceAction: "commonGetDevice"
    }),
    show(info = {}) {
      let { bindData = {} } = info || {};
      let { deviceId = "", pointIds = [] } = bindData || {};
      this.pointIds = pointIds || [];
      this.commonGetDeviceFunc(deviceId, device => {
        bmCommon.log(device);
        this.deviceInfo = device || {};
      });
    },
    // 获取设备信息
    commonGetDeviceFunc(deviceId, callback) {
      let value = {};
      if (!deviceId) {
        this.dataLoadingStatus = false;
        return;
      }
      this.dataLoadingStatus = true;
      this.commonGetDeviceAction({ deviceId })
        .then(({ data }) => {
          let { code = "", result = {}, message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            value = result || {};
          } else {
            bmCommon.error(message);
          }
          this.dataLoadingStatus = false;
          callback && callback(value || {});
        })
        .catch(err => {
          this.dataLoadingStatus = false;
          callback && callback(value || {});
          bmCommon.error("获取数据失败=>commonGetDevice", err);
        });
    }
  }
};
</script>

<style lang="less">
@import (less) "../../assets/less/components/data/device.info.less";
</style>

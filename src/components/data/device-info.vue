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
        {{
          item.status && item.status.length > 0
            ? (item.status.find(_item => item.value == _item.value) || {}).name
            : item.value || "--"
        }}
        <template v-if="!(item.status && item.status.length > 0)">
          <small v-if="item.unit">{{ item.unit }}</small>
        </template>
        <!-- </template> -->
      </el-form-item>
    </template>
  </el-form>
</template>

<script>
// import bmCommon from "@/common/common";
// import { Constants } from "@/common/env";
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
    ...mapActions({}),
    show(info = {}) {
      let { bindData = {} } = info || {};
      let { deviceId = "", pointIds = [] } = bindData || {};
      this.pointIds = pointIds || [];
      $vm.$emit("device", {
        deviceId,
        callback: (device = {}) => {
          this.deviceInfo = device || {};
          this.dataLoadingStatus = false;
          this.$emit("load", info);
        }
      });
    }
  }
};
</script>

<style lang="less">
@import (less) "../../assets/less/components/data/device.info.less";
</style>

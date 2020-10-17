//设备信息
<template>
  <el-form
    class="bm-device-info-com"
    ref="form"
    label-width="120px"
    v-if="pointList && pointList.length > 0"
  >
    <el-form-item :label="item.name" v-for="item in pointList" :key="item.id">
      {{ item.value || "--" }} <small v-if="item.unit">{{ item.unit }}</small>
    </el-form-item>
  </el-form>
</template>

<script>
// import bmCommon from "@/common/common";
// import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  props: ["pointList"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters()
  },
  methods: {
    ...mapMutations(),
    ...mapActions()
  }
};
</script>

<style lang="less">
@import (less) "../../assets/less/components/data/device.info.less";
</style>

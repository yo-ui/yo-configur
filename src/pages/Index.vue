<template>
  <div class="bm-index-page">
    <div class="canvas-box">
      <bm-com
        v-for="(item, index) in comList"
        :type="item.type"
        :key="index"
      ></bm-com>
    </div>
    <bm-info ref="bmInfo"></bm-info>
  </div>
</template>
<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  data() {
    return {
      comList: []
    };
  },
  components: {
    bmInfo: () =>
      import(/* webpackChunkName: "iot-configur-info" */ "@/components/info"),
    bmCom: () =>
      import(
        /* webpackChunkName: "iot-configur-com" */ "@/components/component"
      )
  },
  methods: {},
  mounted() {
    this.comList.push({ type: "text" });
    this.comList.push({ type: "image" });
  }
};
</script>
<style lang="less">
@import (less) "../assets/less/pages/index.less";
</style>

<template>
  <div class="bm-index-page">
    <div class="canvas-box">
      <!-- {{activeComId}} -->
      <bm-com
        :class="{ active: activeComId == item.id }"
        @mousedown.native.stop.prevent="mousedownEvent(item)"
        v-for="(item, index) in comList"
        :type="item.type"
        :info="item"
        :active="activeComId == item.id"
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
      comList: [],
      activeComId: ""
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
  methods: {
    mousedownEvent(item) {
      let { id = "" } = item || {};
      this.activeComId = id;
    },
    init() {
      this.addBodyEvent();
    },
    addBodyEvent() {
      $(document).on("click", e => {
        // this.editable = false;
        let { target } = e || {};
        bmCommon.log("document.click", $(target).parent(".bm-configur-com"));
        if ($(target).parent(".bm-configur-com").length > 0) {
          return;
        }
        this.activeComId = "";
      });
    },
    removeBodyEvent() {
      // this.editable = false;
      this.activeComId = "";
      bmCommon.log("removeBodyEvent");
      $(document).off("click");
    }
  },
  mounted() {
    this.comList.push({ type: "text", id: 1 });
    this.comList.push({ type: "image", id: 2 });
    this.init();
  }
};
</script>
<style lang="less">
@import (less) "../assets/less/pages/index.less";
</style>

<template>
  <div class="bm-header-com">
    <div class="left"></div>
    <div class="title">
      {{ canvas.name }}
    </div>
    <div class="right">
      <i class="el-icon-copy-document" @click="copyEvent"></i>
      <i class="el-icon-delete" @click="deleteEvent"></i>
      <i class="el-icon-full-screen" @click="fullScreenEvent"></i>
    </div>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapGetters({
      canvas: "canvas/getCanvas",
      activeCom: "canvas/getActiveCom",
      widgetList: "canvas/getWidgetList"
    })
  },
  methods: {
    ...mapMutations({
      setActiveCom: "canvas/setActiveCom"
    }),
    ...mapActions({ selectComAction: "canvas/selectCom" }),
    // 初始化
    init() {
      // this.storeProductFunc();
    },
    copyEvent() {
      let { activeCom = {}, widgetList = [] } = this;
      let id = bmCommon.uuid();
      let orders = widgetList.map(item => item.order);
      let order = Math.max(...orders);
      order += 1;
      let item = { ...activeCom, id, order };
      widgetList.push(item);
      this.setActiveCom(item);
    },
    deleteEvent() {
      let { activeCom = {}, widgetList = [] } = this;
      let { id = "" } = activeCom;
      let index = widgetList.findIndex(item => id == item.id);
      widgetList.splice(index, 1);
      this.selectComAction();
    },
    // 全屏事件
    fullScreenEvent() {
      let { fullScreenStatus } = this;
      if (fullScreenStatus) {
        this.exitFullscreen();
      } else {
        this.showFullScreen();
      }
      this.fullScreenStatus = !fullScreenStatus;
    },
    showFullScreen() {
      var element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      }
    },
    // 退出全屏
    exitFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="less">
@import (less) "../assets/less/components/header.less";
</style>

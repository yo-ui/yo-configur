<template>
  <div class="bm-preview-nav-com" @mousedown.stop>
    <h2>{{ $lang("导航") }}</h2>
    <div class="container"></div>
    <div class="box"></div>
  </div>
</template>

<script>
/* eslint-disable vue/no-parsing-error */
// import bmCommon from "@/common/common";
// import { Constants } from "@/common/env";
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "bm-preview-nav-com",
  data() {
    return {
      condition: {
        tip: ""
      }
    };
  },
  components: {},
  computed: {
    ...mapGetters({
      widgetList: "canvas/getWidgetList"
    })
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),
    // 初始化
    init() {},
    show(item = {}) {},
    submitEvent() {
      let { condition } = this;
      let { callback = () => {}, ruleContent = "" } = condition;
      this.$refs.form?.validate((valid, msg) => {
        if (valid) {
          callback && callback({ ruleContent });
          this.showDialogStatus = false;
        } else {
          if (msg) {
            for (let key in msg) {
              let item = msg[key];
              let message = item[0].message;
              message && this.$$msgError(message);
              return false;
            }
          }
          return false;
        }
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="less" scope>
@import (reference) "./../assets/less/common.less";
.bm-preview-nav-com {
  .posa;
  right: -40px;
  top: 0;
  .wh(200;250);
  .bc(@grayE);
  z-index: 9;
  h2 {
    .bc(@grayC);
    .fz(13);
    .p(0 10px);
    .h(30);
    .lh(30);
  }
  .container {
    .bc(@white);
    .posa;
    left: 20px;
    right: 20px;
    bottom: 20px;
    top: 50px;
    .box {
      .posa;
      left: 0;
      top: 0;
    }
  }
}
</style>

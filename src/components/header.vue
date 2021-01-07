<template>
  <div class="bm-header-com">
    <div class="left" @click.stop="$replacePage(configurUrl)">
      <i class="bm-icon icon-back"></i>{{ $lang("返回") }}
    </div>
    <div class="title">
      {{ canvas.name }}
    </div>
    <div class="right" @click.stop="prevPageEvent">
      <i class="bm-icon icon-next icon-prev"></i>{{ $lang("上一画面") }}
    </div>
    <div class="right" @click.stop="nextPageEvent">
      {{ $lang("下一画面") }}<i class="bm-icon icon-next"></i>
    </div>
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
import apiConfig from "@/common/conf/index";
let { manageConfigur = "" } = apiConfig || {};
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  data() {
    return {
      configurUrl: manageConfigur,
      canvasList: []
    };
  },
  components: {},
  computed: {
    ...mapGetters({
      canvas: "canvas/getCanvas"
    })
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),
    init() {
      $vm.$on("canvas-list", ({ canvasList = [] }) => {
        this.canvasList = canvasList || [];
      });
    },
    nextPageEvent() {
      let { canvasList = [], canvas = {}, $route } = this;
      let { canvasId = "" } = canvas || {};
      let index = canvasList.findIndex(item => item.id == canvasId);
      let { length = 0 } = canvasList || [];
      let { query = {} } = $route;
      if (length > 0) {
        if (++index < length) {
          let { type = "", [Constants.AUTHORIZATION]: token = "" } =
            query || {};
          let canvas = canvasList[index] || {};
          let { id = "" } = canvas || {};
          this.$jumpPage(
            this.$RouterURL.index.name,
            {},
            {
              canvasId: id,
              type,
              [Constants.AUTHORIZATION]: token
            }
          );
        } else {
          this.$$msgWarn("不存在下一画面");
        }
      }
    },
    prevPageEvent() {
      let { canvasList = [], canvas = {}, $route } = this;
      let { canvasId = "" } = canvas || {};
      let index = canvasList.findIndex(item => item.id == canvasId);
      let { query = {} } = $route;
      if (--index > -1) {
        let { type = "", [Constants.AUTHORIZATION]: token = "" } = query || {};
        let canvas = canvasList[index] || {};
        let { id = "" } = canvas || {};
        this.$jumpPage(
          this.$RouterURL.index.name,
          {},
          {
            canvasId: id,
            type,
            [Constants.AUTHORIZATION]: token
          }
        );
      } else {
        this.$$msgWarn("不存在上一画面");
      }
    }
  }
};
</script>

<style lang="less">
@import (less) "../assets/less/components/header.less";
</style>

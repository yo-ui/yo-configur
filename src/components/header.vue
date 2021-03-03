<template>
  <div class="bm-header-com">
    <div class="left" @click.stop="changeEvent('back')">
      <i class="bm-icon icon-back"></i>{{ $lang("返回") }}
    </div>
    <div class="title">
      {{ canvas.name }}
    </div>
    <div class="right" @click.stop="changeEvent('prev')">
      <i class="bm-icon icon-next icon-prev"></i>{{ $lang("上一画面") }}
    </div>
    <div class="right" @click.stop="changeEvent('next')">
      {{ $lang("下一画面") }}<i class="bm-icon icon-next"></i>
    </div>
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
import apiConfig from "@/common/conf/index";
let { manageConfigur = "" } = apiConfig || {};
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  data() {
    return {
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
    // backEvent() {
    //   this.$confirm(
    //     this.$lang("该切换操作将不会保存当前数据，请确认是否已经保存?"),
    //     this.$lang("提示"),
    //     {
    //       confirmButtonText: this.$lang("确定"),
    //       cancelButtonText: this.$lang("取消"),
    //       type: "warning"
    //     }
    //   )
    //     .then(() => {
    //       this.$replacePage(manageConfigur);
    //     })
    //     .catch(() => {
    //       this.$message({
    //         type: "info",
    //         message: this.$lang("已取消返回")
    //       });
    //     });
    // },
    changeEvent(type) {
      this.$confirm(
        this.$lang("该切换操作将不会保存当前数据，请确认是否已经保存?"),
        this.$lang("提示"),
        {
          confirmButtonText: this.$lang("确定"),
          cancelButtonText: this.$lang("取消"),
          type: "warning"
        }
      )
        .then(() => {
          if (type == "back") {
            this.$replacePage(manageConfigur);
          } else if (type == "prev") {
            this.prevPageEvent();
          } else if (type == "next") {
            this.nextPageEvent();
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: this.$lang("已取消返回")
          });
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

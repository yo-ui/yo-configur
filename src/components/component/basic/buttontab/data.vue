<template>
  <div class="bm-button-tab-data-com">
    <el-collapse v-model="activeNames">
      <!-- <el-collapse-item :title="$lang('通用绑定')" name="name" disabled> -->
      <bm-common-data :info="info"></bm-common-data>
      <!-- <el-collapse-item :title="$lang('属性绑定')" name="props">
        <p>
          <span class="label"> {{ $lang("标签项") }}: </span>
          <el-tooltip
            :content="$lang('添加绑定')"
            placement="top"
            effect="dark"
          >
            <i
              class="el-icon-link"
              @click.stop="addEvent(info)"
              :class="{
                active: info.bindData && info.bindData.tagList !== ''
              }"
            ></i>
          </el-tooltip>
        </p>
        <p>
          <span class="label"> {{ $lang("当前值") }}: </span>
          <el-tooltip
            :content="$lang('添加绑定')"
            placement="top"
            effect="dark"
          >
            <i
              class="el-icon-link"
              @click.stop="addEvent(info)"
              :class="{
                active: info.bindData && info.bindData.content !== ''
              }"
            ></i>
          </el-tooltip>
        </p>
      </el-collapse-item>
      <el-collapse-item :title="$lang('写绑定')" name="write">
        <p>
          <span class="label"> {{ $lang("当前值") }}: </span>
          <el-tooltip
            :content="$lang('添加绑定')"
            placement="top"
            effect="dark"
          >
            <i
              class="el-icon-link"
              @click.stop="writeEvent(info, 'writeContent')"
              :class="{
                active: info.bindData && info.bindData.writeContent !== ''
              }"
            ></i>
          </el-tooltip>
        </p>
      </el-collapse-item> -->
    </el-collapse>
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
// import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "buttontabDataCom",
  data() {
    return {
      activeNames: ["name", "props", "write"]
    };
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  components: {
    bmCommonData: () =>
      import(
        /* webpackChunkName: "bm-component-common-data" */ "@/components/common/data.vue"
      )
  },
  computed: {
    ...mapGetters({
      widgetList: "canvas/getWidgetList"
    })
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),
    addEvent(item = {}) {
      // eslint-disable-next-line no-undef
      $vm.$emit("bind-device", item);
    },
    writeEvent(item = {}) {
      $vm.$emit("bind-write", item);
    }
  }
};
</script>

<style lang="less">
// @import (reference) "./../../../../assets/less/common.less";
// .bm-image-style-com {
// }
</style>

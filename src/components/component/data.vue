<template>
  <div class="bm-data-com">
    <el-collapse v-model="activeNames">
      <el-collapse-item :title="$lang('通用绑定')" name="name">
        <p v-if="info.dataType == 'device'">
          <span class="label"> {{ $lang("绑定设备") }}: </span>
          <el-tooltip
            :content="$lang('添加设备绑定')"
            placement="top"
            effect="dark"
          >
            <i
              class="el-icon-link"
              @click.stop="addEvent(info)"
              :class="{ active: info.bindData && info.bindData.orgId }"
            ></i>
          </el-tooltip>
        </p>
        <p v-if="info.dataType == 'point'">
          <span class="label"> {{ $lang("绑定点位") }}: </span>
          <el-tooltip
            :content="$lang('添加设备点位绑定')"
            placement="top"
            effect="dark"
          >
            <i
              class="el-icon-link"
              @click.stop="addEvent(info)"
              :class="{ active: info.bindData && info.bindData.orgId }"
            ></i>
          </el-tooltip>
        </p>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
// import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "dataCom",
  data() {
    return {
      activeNames: ["name"]
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
  components: {},
  computed: {
    ...mapGetters()
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),
    addEvent(item = {}) {
      // eslint-disable-next-line no-undef
      $vm.$emit("bindDevice", item);
    }
  }
};
</script>

<style lang="less">
// @import (reference) "./../../../../assets/less/common.less";
// .bm-image-style-com {
// }
</style>

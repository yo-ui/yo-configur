<template>
  <div class="bm-info-com">
    <el-tabs v-model="activeIndex" type="card">
      <el-tab-pane
        v-for="item in tabList"
        :key="item.code"
        :label="item.name"
        :name="item.code"
      >
      </el-tab-pane>
    </el-tabs>
    <template v-if="activeIndex == 'basic'">
      <div></div>
    </template>
    <template v-if="activeIndex == 'element'">
      <ul class="com-box">
        <li
          :class="{ active: activeComId == item.id }"
          v-for="item in widgetList"
          @click="selectComEvent(item)"
          :key="item.id"
        >
          {{ item.type }}
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
const Props = {
  type: [
    "text" //静态文本
  ]
};
export default {
  data() {
    let tabList = Object.freeze([
      { code: "basic", name: "基本样式" },
      { code: "element", name: "画布" }
    ]);
    return {
      tabList,
      activeIndex: tabList[0].code
    };
  },
  props: {
    type: {
      type: String,
      validator(value) {
        return Props.type.indexOf(value) != -1;
      }
    }
  },
  computed: {
    ...mapGetters({
      widgetList: "viewBox/getWidgetList",
      activeCom: "viewBox/getActiveCom" //选中对象
    }),
    activeComId() {
      let { activeCom = {} } = this;
      let { id = "" } = activeCom || {};
      return id;
    }
  },
  methods: {
    ...mapMutations({
      setActiveCom: "viewBox/setActiveCom"
    }),
    ...mapActions(),
    selectComEvent(item) {
      this.setActiveCom(item);
    }
  }
};
</script>

<style lang="less">
@import (less) "../assets/less/components/info.less";
</style>

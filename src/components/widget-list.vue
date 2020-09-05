<template>
  <div class="bm-widget-list-com">
    <el-tabs v-model="activeIndex" tab-position="left" type="card">
      <el-tab-pane v-for="item in tabList" :key="item.code" :name="item.code">
        <template #label>
          <i class="el-icon-s-grid"></i>
          <p>{{ item.name }}</p>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
const Props = {
  type: [
    "text" //静态文本
  ]
};
export default {
  data() {
    let tabList = Object.freeze([
      { code: "basic", name: "基本" },
      { code: "component", name: "组件" },
      { code: "device", name: "设备" },
      { code: "assist", name: "辅助" }
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
  }
};
</script>

<style lang="less">
@import (less) "../assets/less/components/widget.list.less";
</style>

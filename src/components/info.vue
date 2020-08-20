<template>
  <div class="bm-configur-info-com">
    <el-tabs v-model="activeIndex"
      type="card">
      <el-tab-pane v-for="item in tabList"
        :key="item.code"
        :label = "item.name"
        :name="item.code">
        
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
    let tabList=Object.freeze([
      {code:'basic',name:'基本样式'},
      {code:'element',name:'画布fq'},
    ])
    return {
      tabList,
      activeIndex:tabList[0].code
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
@import (less) "../assets/less/components/info.less";
</style>

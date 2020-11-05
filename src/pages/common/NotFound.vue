<template>
  <div class="bm-404-com">
    <img src="/static/img/common/logo_iot.svg" class="logo" />
    <div class="circle"></div>
    <div class="picture" :class="{ error: pageType == 'error' }">
      <span v-if="pageType == 'error'">{{ $lang(errorCode) }}</span>
    </div>
    <div class="title">{{ $lang(errorText) }}</div>
    <a class="sub-title" href="/">{{ $lang("回到首页") }}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageType: "error"
    };
  },
  mounted() {
    let { $route } = this;
    let { query = {} } = $route;
    let { type = "" } = query || {};
    this.pageType = type || this.type;
  },
  props: {
    type: { type: String, default: "error" },
    errorCode: { type: String, default: "404" },
    errorText: { type: String, default: "..页面没有找到.." }
  }
};
</script>
<style lang="less">
@import (less) "../../assets/less/pages/common/not.found.less";
</style>

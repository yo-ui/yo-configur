<template>
  <div id="app">
    <keep-alive>
      <router-view
        class="child-view flex-content-box"
        v-if="$route.meta.cache"
      ></router-view>
    </keep-alive>
    <router-view
      class="child-view flex-content-box"
      v-if="!$route.meta.cache"
    ></router-view>
  </div>
</template>

<script>
// import { Constants } from "@/common/env";
// import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapMutations, mapGetters, mapActions } = Vuex;
export default {
  name: "app",
  created() {},
  computed: {
    ...mapGetters()
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({})
  },
  mounted: function() {}
};
</script>

<style lang="less">
@import (less) "./assets/less/main.less";
</style>

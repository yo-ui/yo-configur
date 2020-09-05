<template>
  <div class="bm-footer-com">
    ©Copyright 2020 卜米物联
  </div>
</template>

<script>
import bmCommon from "@/common/common";
// import RouterURL from "@/router/routers.conf";
import { Constants } from "@/common/env";
export default {
  data() {
    return {};
  },
  components: {},
  computed: {
    
  },
  methods: {
    // 初始化
    init() {
      // this.storeProductFunc();
    },
    // 获取增值服务产品详情
    // storeProductFunc() {
    //   let that = this;
    //   let { $route } = that;
    //   let { params } = $route;
    //   let { id } = params || {};
    //   //第一次加载缓存数据
    //   that.loadProduct();
    //   that.$store
    //     .dispatch("storeProduct", {
    //       id: id
    //     })
    //     .then(({ data }) => {
    //       let { code="", result,message="" } = data||{};
    //       if (success) {
            
    //         let product = result || {};
    //         that.$store.commit("setDataCacheMap", {
    //           key: Constants.DATACACHEMAPKEY.STOREPRODUCT + id,
    //           value: product
    //         });
    //         that.loadProduct();
    //       }
    //     })
    //     .catch(err => {
    //       bmCommon.error("获取增值服务产品详情失败！", err);
    //     });
    // },
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="less">
@import (less) "../assets/less/components/footer.less";
</style>

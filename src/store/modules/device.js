/* eslint-disable no-undef */
// import { URL } from "@/common/env";
// import bmCommon from "@/common/common";
// import { post, get } from "@/store/axios";
// import { Constants } from "@/common/env";
export default {
  namespaced: true, //必须加它不然报错
  strict: process.env.NODE_ENV !== "production",
  state: {
    deviceCacheMap: {}
  },
  getters: {
    //获取缓存数据对象
    getDeviceCacheMap(state) {
      let deviceCacheMap = state.deviceCacheMap || {};
      return key => {
        return deviceCacheMap[key] || [];
      };
    }
  },
  mutations: {
    //设置缓存对象
    setDeviceCacheMap(state, { key = "", value = {} } = {}) {
      let deviceCacheMap = JSON.parse(
        JSON.stringify(state.deviceCacheMap || {})
      );
      deviceCacheMap[key] = value || {};
      state.deviceCacheMap = deviceCacheMap;
    }
  },
  actions: {}
};

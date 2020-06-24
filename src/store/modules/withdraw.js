// import { URL } from "@/common/env";
// import bmCommon from "@/common/common";
// import { post, get } from "@/store/axios";
// import { Constants } from "@/common/env";
export default {
  namespaced: true, //必须加它不然报错
  strict: process.env.NODE_ENV !== "production",
  state: {
    withdrawHistoryEnterpriseCacheMap: null,
    withdrawHistoryEnterprisesCacheMap: null,
    withdrawEnterpriseCacheMap: null,
    withdrawEnterprises: null
  },
  getters: {
    getWithdrawEnterprises(state) {
      return state.withdrawEnterprises;
    },
    //获取缓存数据对象
    getWithdrawHistoryEnterpriseCacheMap(state) {
      let withdrawHistoryEnterpriseCacheMap =
        state.withdrawHistoryEnterpriseCacheMap || {};
      return key => {
        return withdrawHistoryEnterpriseCacheMap[key];
      };
    },
    //获取缓存数据对象
    getWithdrawHistoryEnterprisesCacheMap(state) {
      let withdrawHistoryEnterprisesCacheMap =
        state.withdrawHistoryEnterprisesCacheMap || {};
      return key => {
        return withdrawHistoryEnterprisesCacheMap[key];
      };
    },
    //获取缓存数据对象
    getWithdrawEnterpriseCacheMap(state) {
      let withdrawEnterpriseCacheMap = state.withdrawEnterpriseCacheMap || {};
      return key => {
        return withdrawEnterpriseCacheMap[key];
      };
    }
  },
  mutations: {
    //设置缓存对象
    setWithdrawHistoryEnterpriseCacheMap(state, { key, value } = {}) {
      let withdrawHistoryEnterpriseCacheMap = JSON.parse(
        JSON.stringify(state.withdrawHistoryEnterpriseCacheMap || {})
      );
      withdrawHistoryEnterpriseCacheMap[key] = value;
      state.withdrawHistoryEnterpriseCacheMap = withdrawHistoryEnterpriseCacheMap;
    },
    //设置缓存对象
    setWithdrawHistoryEnterprisesCacheMap(state, { key, value } = {}) {
      let withdrawHistoryEnterprisesCacheMap = JSON.parse(
        JSON.stringify(state.withdrawHistoryEnterprisesCacheMap || {})
      );
      withdrawHistoryEnterprisesCacheMap[key] = value;
      state.withdrawHistoryEnterprisesCacheMap = withdrawHistoryEnterprisesCacheMap;
    },
    //设置缓存对象
    setWithdrawEnterpriseCacheMap(state, { key, value } = {}) {
      let withdrawEnterpriseCacheMap = JSON.parse(
        JSON.stringify(state.withdrawEnterpriseCacheMap || {})
      );
      withdrawEnterpriseCacheMap[key] = value;
      state.withdrawEnterpriseCacheMap = withdrawEnterpriseCacheMap;
    },
    //设置缓存对象
    setWithdrawEnterprises(state, item) {
      state.withdrawEnterprises = item;
    }
  },
  actions: {}
};

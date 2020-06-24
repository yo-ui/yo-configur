// import { URL } from "@/common/env";
// import bmCommon from "@/common/common";
// import { post, get } from "@/store/axios";
// import { Constants } from "@/common/env";
export default {
  namespaced: true, //必须加它不然报错
  strict: process.env.NODE_ENV !== "production",
  state: {
    // deviceCategTree: null,
    // financePricingStrategiesCacheMap: null,
    deviceCategPointListMap: null
    // financeEnterpriserProvincesCacheMap: null
  },
  getters: {
    // //获取缓存数据对象
    // getDeviceTypeCategoryList(state) {
    //   let deviceTypeCategoryList = state.deviceTypeCategoryList || [];
    //   return deviceTypeCategoryList || [];
    // },
    //获取缓存数据对象
    getDeviceCategPointListMap(state) {
      let deviceCategPointListMap = state.deviceCategPointListMap || {};
      return key => {
        return deviceCategPointListMap[key] || [];
      };
    },
    //获取缓存数据对象
    // getDeviceCategTree(state) {
    //   return state.deviceCategTree || [];
    // }
    // //获取缓存数据对象
    // getDevicePointOptionalsCacheMap(state) {
    //   let devicePointOptionalsCacheMap = state.devicePointOptionalsCacheMap || {};
    //   return key => {
    //     return devicePointOptionalsCacheMap[key];
    //   };
    // }
    // //获取缓存数据对象
    // getProjectListCacheMap(state) {
    //   let projectListCacheMap = state.projectListCacheMap || {};
    //   return key => {
    //     return projectListCacheMap[key];
    //   };
    // }
    // //获取缓存数据对象
    // getFinanceEnterpriserProvincesCacheMap(state) {
    //   let financeEnterpriserProvincesCacheMap =
    //     state.financeEnterpriserProvincesCacheMap || {};
    //   if (!financeEnterpriserProvincesCacheMap) {
    //     financeEnterpriserProvincesCacheMap = bmCommon.getItem(
    //       Constants.LOCALSTORAGEKEY.FINANCIALENTERPRISERPROVINCECITIES
    //     );
    //     financeEnterpriserProvincesCacheMap = JSON.parse(
    //       financeEnterpriserProvincesCacheMap
    //     );
    //   }
    //   financeEnterpriserProvincesCacheMap = JSON.parse(
    //     JSON.stringify(financeEnterpriserProvincesCacheMap)
    //   );
    //   if (!financeEnterpriserProvincesCacheMap) {
    //     financeEnterpriserProvincesCacheMap = {};
    //   }
    //   return key => {
    //     return financeEnterpriserProvincesCacheMap[key];
    //   };
    // }
  },
  mutations: {
    // //设置缓存对象
    // setDeviceTypeCategoryList(state, item = []) {
    //   state.deviceTypeCategoryList = item || [];
    // },
    //设置缓存对象
    setDeviceCategPointListMap(state, { key = "", value = [] } = {}) {
      let deviceCategPointListMap = JSON.parse(
        JSON.stringify(state.deviceCategPointListMap || {})
      );
      deviceCategPointListMap[key] = value || [];
      state.deviceCategPointListMap = deviceCategPointListMap;
    },
    // //设置缓存对象
    // setDevicePointSelectCacheMap(state, { key, value } = {}) {
    //   let devicePointSelectCacheMap = JSON.parse(
    //     JSON.stringify(state.devicePointSelectCacheMap || {})
    //   );
    //   devicePointSelectCacheMap[key] = value;
    //   state.devicePointSelectCacheMap = devicePointSelectCacheMap;
    // },
    // //设置缓存对象
    // setDeviceCategTree(state, item = []) {
    //   state.deviceCategTree = item || [];
    // }
    // //设置缓存对象
    // setProjectListCacheMap(state, { key, value } = {}) {
    //   let projectListCacheMap = JSON.parse(
    //     JSON.stringify(state.projectListCacheMap || {})
    //   );
    //   projectListCacheMap[key] = value;
    //   state.projectListCacheMap = projectListCacheMap;
    // }
    // //设置缓存对象
    // setFinanceEnterpriserProvincesCacheMap(state, { key, value } = {}) {
    //   let financeEnterpriserProvincesCacheMap = JSON.parse(
    //     JSON.stringify(state.financeEnterpriserProvincesCacheMap)
    //   );
    //   if (!financeEnterpriserProvincesCacheMap) {
    //     financeEnterpriserProvincesCacheMap = bmCommon.getItem(
    //       Constants.LOCALSTORAGEKEY.FINANCIALENTERPRISERPROVINCECITIES
    //     );
    //     financeEnterpriserProvincesCacheMap = JSON.parse(
    //       financeEnterpriserProvincesCacheMap || "{}"
    //     );
    //   }
    //   if (!financeEnterpriserProvincesCacheMap) {
    //     financeEnterpriserProvincesCacheMap = {};
    //   }
    //   financeEnterpriserProvincesCacheMap[key] = value;
    //   bmCommon.setItem(
    //     Constants.LOCALSTORAGEKEY.FINANCIALENTERPRISERPROVINCECITIES,
    //     JSON.stringify(financeEnterpriserProvincesCacheMap)
    //   );
    //   state.financeEnterpriserProvincesCacheMap = financeEnterpriserProvincesCacheMap;
    // }
  },
  actions: {}
};

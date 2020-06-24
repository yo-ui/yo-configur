// import { URL } from "@/common/env";
// import bmCommon from "@/common/common";
// import { post, get } from "@/store/axios";
// import { Constants } from "@/common/env";
export default {
  namespaced: true, //必须加它不然报错
  strict: process.env.NODE_ENV !== "production",
  state: {
    manufacturerList: null
    // projectListCacheMap: null
    // financePricingStrategiesCacheMap: null,
    // financePricingStrategieOrgStrucCacheMap: null,
    // financeEnterpriserProvincesCacheMap: null
  },
  getters: {
    // //获取缓存数据对象
    // getFinancePricingStrategiesCacheMap(state) {
    //   let financePricingStrategiesCacheMap =
    //     state.financePricingStrategiesCacheMap || {};
    //   return key => {
    //     return financePricingStrategiesCacheMap[key];
    //   };
    // },
    // //获取缓存数据对象
    // getFinancePricingStrategieOrgStrucCacheMap(state) {
    //   let financePricingStrategieOrgStrucCacheMap =
    //     state.financePricingStrategieOrgStrucCacheMap || {};
    //   return key => {
    //     return financePricingStrategieOrgStrucCacheMap[key];
    //   };
    // },
    //获取缓存数据对象
    getManufacturerList(state) {
      let manufacturerList = state.manufacturerList || [];
      return manufacturerList || [];
    }
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
    // setFinancePricingStrategiesCacheMap(state, { key, value } = {}) {
    //   let financePricingStrategiesCacheMap = JSON.parse(
    //     JSON.stringify(state.financePricingStrategiesCacheMap || {})
    //   );
    //   financePricingStrategiesCacheMap[key] = value;
    //   state.financePricingStrategiesCacheMap = financePricingStrategiesCacheMap;
    // },
    // //设置缓存对象
    // setFinancePricingStrategieOrgStrucCacheMap(state, { key, value } = {}) {
    //   let financePricingStrategieOrgStrucCacheMap = JSON.parse(
    //     JSON.stringify(state.financePricingStrategieOrgStrucCacheMap || {})
    //   );
    //   financePricingStrategieOrgStrucCacheMap[key] = value;
    //   state.financePricingStrategieOrgStrucCacheMap = financePricingStrategieOrgStrucCacheMap;
    // },
    //设置缓存对象
    setManufacturerList(state, item = []) {
      state.manufacturerList = item || [];
    }
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

import { Constants } from "@/common/env";
import { getLang } from "@/common/lang/index";
import bmCommon from "@/common/common";

export default {
  getLangObj(state) {
    let langObj = state.langObj;
    if (!langObj) {
      let lang = state.lang;
      langObj = getLang(lang);
    }
    return langObj;
  },
  //获取缓存数据对象
  getDataCacheMap(state) {
    let dataCacheMap = state.dataCacheMap;
    return key => {
      return dataCacheMap[key];
    };
  },
  getUserInfo(state) {
    let userInfo = state.userInfo;
    if (!userInfo) {
      userInfo = bmCommon.getItem(Constants.LOCALSTORAGEKEY.USERKEY.USERINFO);
      userInfo = JSON.parse(userInfo);
    }
    userInfo = JSON.parse(JSON.stringify(userInfo));
    if (!userInfo) {
      userInfo = {};
    }
    return userInfo;
  },
  getAccountMenuMap(state) {
    let accountMenuMap = state.accountMenuMap;
    if (!accountMenuMap) {
      accountMenuMap = bmCommon.getItem(
        Constants.LOCALSTORAGEKEY.ACCOUNTMENUMAP
      );
      accountMenuMap = JSON.parse(accountMenuMap);
    }
    accountMenuMap = JSON.parse(JSON.stringify(accountMenuMap));
    if (!accountMenuMap) {
      accountMenuMap = {};
    }
    return accountMenuMap || {};
  },
  getAccountMenuList(state) {
    let accountMenuList = state.accountMenuList;
    if (!accountMenuList) {
      accountMenuList = bmCommon.getItem(
        Constants.LOCALSTORAGEKEY.ACCOUNTMENULIST
      );
      accountMenuList = JSON.parse(accountMenuList);
    }
    accountMenuList = JSON.parse(JSON.stringify(accountMenuList));
    if (!accountMenuList) {
      accountMenuList = [];
    }
    return accountMenuList || {};
  }
};

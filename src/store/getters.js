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
    let { userInfo = {} } = state;
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
  // 获取图片列表
  getImageList(state) {
    let { imageList = [] } = state;
    if (!(imageList && imageList.length > 0)) {
      imageList = bmCommon.getItem(Constants.LOCALSTORAGEKEY.IMAGELIST);
      imageList = JSON.parse(imageList);
    }
    imageList = JSON.parse(JSON.stringify(imageList));
    if (!imageList) {
      imageList = [];
    }
    return imageList;
  },
  getPlatform(state) {
    let platform = state.platform;
    if (!platform) {
      platform = bmCommon.getItem(Constants.LOCALSTORAGEKEY.PLATFORM);
    }
    return platform;
  }
  // getAccountMenuMap(state) {
  //   let accountMenuMap = state.accountMenuMap;
  //   if (!accountMenuMap) {
  //     accountMenuMap = bmCommon.getItem(
  //       Constants.LOCALSTORAGEKEY.ACCOUNTMENUMAP
  //     );
  //     accountMenuMap = JSON.parse(accountMenuMap);
  //   }
  //   accountMenuMap = JSON.parse(JSON.stringify(accountMenuMap));
  //   if (!accountMenuMap) {
  //     accountMenuMap = {};
  //   }
  //   return accountMenuMap || {};
  // },
  // getAccountMenuList(state) {
  //   let accountMenuList = state.accountMenuList;
  //   if (!accountMenuList) {
  //     accountMenuList = bmCommon.getItem(
  //       Constants.LOCALSTORAGEKEY.ACCOUNTMENULIST
  //     );
  //     accountMenuList = JSON.parse(accountMenuList);
  //   }
  //   accountMenuList = JSON.parse(JSON.stringify(accountMenuList));
  //   if (!accountMenuList) {
  //     accountMenuList = [];
  //   }
  //   return accountMenuList || {};
  // }
};

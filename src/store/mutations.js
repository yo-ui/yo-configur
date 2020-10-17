/* !!
 * $store.commit
 * ===== ===== =====
 */
import { Constants } from "@/common/env";
import { getLang } from "@/common/lang/index";
import bmCommon from "@/common/common";

export default {
  //设置登录用户信息
  setUserInfo(state, item) {
    if (item) {
      bmCommon.setItem(
        Constants.LOCALSTORAGEKEY.USERKEY.USERINFO,
        JSON.stringify(item)
      );
    } else {
      bmCommon.removeItem(Constants.LOCALSTORAGEKEY.USERKEY.USERINFO);
    }
    state.userInfo = item;
  },
  //设置缓存对象
  setDataCacheMap(state, item) {
    let dataCacheMap = state.dataCacheMap || {};
    let key = item.key,
      value = item.value;
    dataCacheMap[key] = value;
  },
  //设置当前的语言环境
  setCurrentLang(state, item) {
    bmCommon.setItem(Constants.LOCALSTORAGEKEY.LANGUAGE, item);
    state.lang = item;
    state.langObj = getLang(item);
  },
  setPlatform(state, item) {
    bmCommon.setItem(Constants.LOCALSTORAGEKEY.PLATFORM, item);
    state.platform = item;
  }
};

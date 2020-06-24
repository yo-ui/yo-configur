import { Constants } from "@/common/env";
import bmCommon from "@/common/common";
export default {
  dataCacheMap: {}, //缓存数据map
  showMessage: true, //是否显示验证消息
  messageShowClose: true, //消息提示是否显示关闭
  ruleMessage: true, //是否提示弹窗验证消息
  lang:
    bmCommon.getItem(Constants.LOCALSTORAGEKEY.LANGUAGE) ||
    bmCommon.variablePool.language ||
    "EN", //默认语言
  userInfo: null, //用户信息
  accountMenuList: null, //用户菜单列表
  accountMenuMap: null //用户菜单权限
};

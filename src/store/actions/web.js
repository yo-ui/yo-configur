import { URL } from "@/common/env";
import bmCommon from "@/common/common";
import { post } from "@/store/axios";
export default {
  accountMenuHandler(context, data) {
    let menuMap = {};
    data &&
      data.sort((a, b) => {
        return a.priority - b.priority;
      });
    let root = bmCommon.recursiveTree(data, "pid");
    let menuList = root && root.length > 0 ? root[0].children : [];
    menuList &&
      menuList.forEach((item, index) => {
        if (index == 0) {
          //默认第一个为选中状态
          item.active = true;
        }
        item.url && (menuMap[item.url] = true);
      });
    context.commit("setAccountMenuList", menuList);
    context.commit("setAccountMenuMap", menuMap);
    // bmCommon.log(menuMap, menuList);
  },
  //用户退出
  async logout(context, options) {
    let url = URL.logoutUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  }
};

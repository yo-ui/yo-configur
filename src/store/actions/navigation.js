import { URL } from "@/common/env";
// import bmCommon from '@/common/common'
import { post } from "@/store/axios";
import { Constants } from "@/common/env";
export default {
  //获取导航权限
  async navigationFindAccountNavs(context, options) {
    let url = URL.navigationFindAccountNavsUrl;
    const result = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    let { data } = result;
    let { code = "", result: list = [] } = data || {};
    if (code == Constants.CODES.SUCCESS) {
      context.dispatch("accountMenuHandler", list);
    }
    return data;
  }
};

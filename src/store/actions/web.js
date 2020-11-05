import { URL } from "@/common/env";
// import bmCommon from "@/common/common";
import { post, get } from "@/store/axios";
export default {
  async push(context, options) {
    const data = await get({
      url: URL.pushUrl,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //登录
  async loginAuthent(context, options) {
    const data = await post({
      url: URL.loginAuthentUrl,
      params: options,
      store: context
    });
    return data;
  }
};

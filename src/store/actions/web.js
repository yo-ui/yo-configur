import { URL } from "@/common/env";
import bmCommon from "@/common/common";
import { post } from "@/store/axios";
export default {
  // : `${host}/attachment/del/{id}`, //删除单个【附件】
  async push(context, options) {
    const data = await post({
      url: bmCommon.substitute(URL.pushUrl, options),
      params: {},
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

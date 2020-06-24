import { URL } from "@/common/env";
// import bmCommon from '@/common/common'
import { get } from "@/store/axios";
export default {
  //用户登录
  async loginAuthent(context, options) {
    let url = URL.loginAuthentUrl;
    const data = await get({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  }
};

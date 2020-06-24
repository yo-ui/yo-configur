import { URL } from "@/common/env";
// import bmCommon from '@/common/common'
import { get } from "@/store/axios";
export default {
  //用户登录
  async energyCnvFactorListAll(context, options) {
    let url = URL.energyCnvFactorListAllUrl;
    const data = await get({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  }
};

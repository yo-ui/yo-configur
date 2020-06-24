import { URL } from "@/common/env";
// import bmCommon from '@/common/common'
import { get } from "@/store/axios";
// import { Constants } from "@/common/env";
export default {
  //返回图片或其它资源访问的前缀
  async uploadGetEndPoint(context, options) {
    let url = URL.uploadGetEndPointUrl;
    const data = await get({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  }
};

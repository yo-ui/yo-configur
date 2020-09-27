import { URL } from "@/common/env";
// import bmCommon from '@/common/common'
import { get } from "@/store/axios";
export default {
  // 获取组织结构
  async orgStrucListByLevel(context, options) {
    const data = await get({
      url: URL.orgStrucListByLevelUrl,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
}
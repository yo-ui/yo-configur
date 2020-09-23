import { URL } from "@/common/env";
// import bmCommon from '@/common/common'
import { get } from "@/store/axios";
export default {
  //查询【设备系统】列表
  async deviceSysListAll(context, options) {
    let url = URL.deviceSysListAllUrl;
    const data = await get({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  }
};

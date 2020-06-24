import { URL } from "@/common/env";
// import bmCommon from '@/common/common'
import { post } from "@/store/axios";

export default {
  //设备参数选项
  async devicePointOptionals(context, options) {
    let url = URL.devicePointOptionalsUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //删除设备参数
  async devicePointDelete(context, options) {
    let url = URL.devicePointDeleteUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //添加设备参数
  async devicePointInsert(context, options) {
    let url = URL.devicePointInsertUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //设备参数选择
  async devicePointSelect(context, options) {
    let url = URL.devicePointSelectUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  }
};

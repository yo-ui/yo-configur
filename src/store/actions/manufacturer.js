import { URL } from "@/common/env";
// import bmCommon from '@/common/common'
import { post } from "@/store/axios";

export default {
  //删除厂商信息
  async manufacturerDelete(context, options) {
    let url = URL.manufacturerDeleteUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //更新厂商信息
  async manufacturerUpdate(context, options) {
    let url = URL.manufacturerUpdateUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //获取厂商信息
  async manufacturerGet(context, options) {
    let url = URL.manufacturerGetUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //添加厂商信息
  async manufacturerInsert(context, options) {
    let url = URL.manufacturerInsertUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //获取厂商列表
  async manufacturerSelect(context, options) {
    let url = URL.manufacturerSelectUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  }
};

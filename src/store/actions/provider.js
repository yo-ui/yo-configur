import { URL } from "@/common/env";
// import bmCommon from '@/common/common'
import { post, get } from "@/store/axios";

export default {
  //获取服务商列表
  async providerQueryList(context, options) {
    let url = URL.providerQueryListUrl;
    const data = await get({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //获取服务商项目列表
  async providerProjectList(context, options) {
    let url = URL.providerProjectListUrl;
    const data = await get({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //验证手机号码
  async providerVerifyMobilephoneList(context, options) {
    let url = URL.providerVerifyMobilephoneListUrl;
    const data = await get({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //获取服务商详情
  async providerGet(context, options) {
    let url = URL.providerGetUrl;
    const data = await get({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //添加服务商
  async providerInsert(context, options) {
    let url = URL.providerInsertUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //更新服务商
  async providerUpdate(context, options) {
    let url = URL.providerUpdateUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //获取价格
  async providerGetPrice(context, options) {
    let url = URL.providerGetPriceUrl;
    const data = await get({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //更新价格
  async providerInsertPrice(context, options) {
    let url = URL.providerInsertPriceUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  }
};

import { URL } from "@/common/env";
// import bmCommon from '@/common/common'
import { post, get } from "@/store/axios";

export default {
  //获取提现企业列表
  async withdrawEnterprises(context, options) {
    let url = URL.withdrawEnterprisesUrl;
    const data = await get({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //获取提现企业信息
  async withdrawEnterprise(context, options) {
    let url = URL.withdrawEnterpriseUrl;
    const data = await get({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //获取提现企业历史
  async withdrawHistoryEnterprises(context, options) {
    let url = URL.withdrawHistoryEnterprisesUrl;
    const data = await get({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //获取提现企业历史详情
  async withdrawHistoryEnterprise(context, options) {
    let url = URL.withdrawHistoryEnterpriseUrl;
    const data = await get({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //提现
  async withdrawDispose(context, options) {
    let url = URL.withdrawDisposeUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  }
};

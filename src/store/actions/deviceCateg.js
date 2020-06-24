import { URL } from "@/common/env";
import bmCommon from "@/common/common";
import { get, post } from "@/store/axios";
export default {
  // 设备分类
  // : `${host}/deviceCateg/add`,
  //添加单个【设备类别】
  async deviceCategAdd(context, options) {
    const data = await post({
      url: URL.deviceCategAddUrl,
      params: options,
      store: context,
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      }
      // needToken:true,
    });
    return data;
  },
  // : `${host}/deviceCateg/del/{id}`,
  //删除单个【设备类别】
  async deviceCategDel(context, options) {
    const data = await get({
      url: bmCommon.substitute(URL.deviceCategDelUrl, options),
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  // : `${host}/deviceCateg/get/{id}`,
  //查询单个【设备类别】
  async deviceCategGet(context, options) {
    const data = await get({
      url: bmCommon.substitute(URL.deviceCategGetUrl, options),
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  // : `${host}/deviceCateg/list`,
  //分页查询【设备类别】列表
  async deviceCategSearch(context, options) {
    let { pid = "" } = options || {};
    delete options.pid;
    const data = await get({
      url: bmCommon.substitute(URL.deviceCategSearchUrl, { pid }),
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  // : `${host}/deviceCateg/tree`,
  //查询设备分类树
  async deviceCategTree(context, options) {
    const data = await get({
      url: URL.deviceCategTreeUrl,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  // : `${host}/deviceCateg/update`,
  //更新单个【设备类别】
  async deviceCategUpdate(context, options) {
    const data = await post({
      url: URL.deviceCategUpdateUrl,
      params: options,
      store: context,
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      }
      // needToken:true,
    });
    return data;
  }
};

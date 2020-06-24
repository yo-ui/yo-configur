import { URL } from "@/common/env";
import bmCommon from "@/common/common";
import { get, post } from "@/store/axios";
export default {
  // 设备类别对应的点位
  // : `${host}/deviceCategPoint/add`,
  //添加单个【设备类别对应的点位】
  async deviceCategPointAdd(context, options) {
    const data = await post({
      url: URL.deviceCategPointAddUrl,
      params: options,
      store: context,
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      }
      // needToken:true,
    });
    return data;
  },
  // : `${host}/deviceCategPoint/del/{id}`,
  //删除单个【设备类别对应的点位】
  async deviceCategPointDel(context, options) {
    const data = await post({
      url: bmCommon.substitute(URL.deviceCategPointDelUrl, options),
      params: {},
      store: context
      // needToken:true,
    });
    return data;
  },
  // : `${host}/deviceCategPoint/get/{id}`,
  //查询单个【设备类别对应的点位】
  async deviceCategPointGet(context, options) {
    const data = await get({
      url: bmCommon.substitute(URL.deviceCategPointGetUrl, options),
      params: {},
      store: context
      // needToken:true,
    });
    return data;
  },
  // : `${host}/deviceCategPoint/list`,
  //分页查询【设备类别对应的点位】列表
  async deviceCategPointSearch(context, options) {
    let { deviceCategId = "" } = options || {};
    delete options.deviceCategId;
    const data = await get({
      url: bmCommon.substitute(URL.deviceCategPointSearchUrl, {
        deviceCategId
      }),
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  // : `${host}/deviceCategPoint/update`,
  //更新单个【设备类别对应的点位】
  async deviceCategPointUpdate(context, options) {
    const data = await post({
      url: URL.deviceCategPointUpdateUrl,
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

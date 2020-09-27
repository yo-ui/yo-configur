import { URL } from "@/common/env";
// import bmCommon from '@/common/common'
import { post } from "@/store/axios";
export default {
  // //获取用户信息
  async commonVerifyInfo(context, options) {
    const data = await post({
      url: URL.commonVerifyInfoUrl,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  async orgStrucListByLevel(context, options) {
    const data = await post({
      url: URL.orgStrucListByLevelUrl,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  async commonDevicePoints(context, options) {
    const data = await post({
      url: URL.commonDevicePointsUrl,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  async commonDevicePointHstData(context, options) {
    const data = await post({
      url: URL.commonDevicePointHstDataUrl,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  // : `${host}/configur/common/deviceList`,
  async commonDeviceList(context, options) {
    const data = await post({
      url: URL.commonDeviceListUrl,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  async commonGetDevice(context, options) {
    const data = await post({
      url: URL.commonGetDeviceUrl,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  }
};

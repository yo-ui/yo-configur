import { URL } from "@/common/env";
// import bmCommon from '@/common/common'
import { get, post } from "@/store/axios";
export default {
  //查询【设备系统】列表
  // canvasGetUrl: `${host}/configur/canvas/get`,
  async canvasGet(context, options) {
    let url = URL.canvasGetUrl;
    const data = await get({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  // canvasSaveUrl: `${host}/configur/canvas/save`,
  async canvasSave(context, options) {
    let url = URL.canvasSaveUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  // canvasControlUrl: `${host}/configur/canvas/control`,
  async canvasControl(context, options) {
    let url = URL.canvasControlUrl;
    const data = await get({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  // canvasTokenUrl: `${host}/configur/canvas/token`,
  async canvasToken(context, options) {
    let url = URL.canvasTokenUrl;
    const data = await get({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  // canvasStartUrl: `${host}/configur/canvas/start`,
  async canvasStart(context, options) {
    let url = URL.canvasStartUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  // canvasStopUrl: `${host}/configur/canvas/stop`,
  async canvasStop(context, options) {
    let url = URL.canvasStopUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  }
};

import { URL } from "@/common/env";
import bmCommon from "@/common/common";
import { get, post } from "@/store/axios";
export default {
  // // `${host}/device/add`, //添加单个【网关设备】
  // async deviceAdd(context, options) {
  //   const data = await post({
  //     url: URL.deviceAddUrl,
  //     params: options,
  //     store: context,
  //     headers: {
  //       "Content-Type": "application/json;charset=UTF-8"
  //     }
  //   });
  //   return data;
  // },
  // // `${host}/device/update`, //修改单个【网关设备】
  // async deviceUpdate(context, options) {
  //   const data = await post({
  //     url: URL.deviceUpdateUrl,
  //     params: options,
  //     store: context,
  //     headers: {
  //       "Content-Type": "application/json;charset=UTF-8"
  //     }
  //   });
  //   return data;
  // },
  // `${host}/device/get/{deviceId}`, //查询单个【网关设备】
  async deviceGet(context, options) {
    const data = await get({
      url: bmCommon.substitute(URL.deviceGetUrl, options),
      params: {},
      store: context
    });
    return data;
  },
  // // `${host}/device/camara/get/{deviceId}`, //查询单个【摄像头】
  // async deviceCamaraGet(context, options) {
  //   const data = await get({
  //     url: bmCommon.substitute(URL.deviceCamaraGetUrl, options),
  //     params: {},
  //     store: context
  //   });
  //   return data;
  // },
  // // `${host}/device/camera/add`, //添加单个【摄像头设备】
  // async deviceCameraAdd(context, options) {
  //   const data = await post({
  //     url: URL.deviceCameraAddUrl,
  //     params: options,
  //     store: context,
  //     headers: {
  //       "Content-Type": "application/json;charset=UTF-8"
  //     }
  //   });
  //   return data;
  // },
  // // `${host}/device/camera/update`, //修改单个【摄像头设备】
  // async deviceCameraUpdate(context, options) {
  //   const data = await post({
  //     url: URL.deviceCameraUpdateUrl,
  //     params: options,
  //     store: context,
  //     headers: {
  //       "Content-Type": "application/json;charset=UTF-8"
  //     }
  //   });
  //   return data;
  // },
  // // `${host}/device/direct/add`, //添加单个【直连设备】
  // async deviceDirectAdd(context, options) {
  //   const data = await post({
  //     url: URL.deviceDirectAddUrl,
  //     params: options,
  //     store: context,
  //     headers: {
  //       "Content-Type": "application/json;charset=UTF-8"
  //     }
  //   });
  //   return data;
  // },
  // // `${host}/device/direct/get/{deviceId}`, //查询单个【直连设备】
  // async deviceDirectGet(context, options) {
  //   const data = await get({
  //     url: bmCommon.substitute(URL.deviceDirectGetUrl, options),
  //     params: {},
  //     store: context
  //   });
  //   return data;
  // },
  // // `${host}/device/direct/update`, //修改单个【直连设备】
  // async deviceDirectUpdate(context, options) {
  //   const data = await post({
  //     url: URL.deviceDirectUpdateUrl,
  //     params: options,
  //     store: context,
  //     headers: {
  //       "Content-Type": "application/json;charset=UTF-8"
  //     }
  //   });
  //   return data;
  // }
};

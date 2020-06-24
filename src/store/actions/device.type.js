import { URL } from "@/common/env";
import bmCommon from "@/common/common";
import { post , get } from "@/store/axios";

export default {
  // //添加设备类型信息
  // async deviceTypeInsert(context, options) {
  //   let url = URL.deviceTypeInsertUrl;
  //   const data = await post({
  //     url: url,
  //     params: options,
  //     store: context
  //     // needToken:true,
  //   });
  //   return data;
  // },
  //添加设备类型信息
  async deviceTypeInsert(context, options) {
    let url = URL.deviceTypeInsertUrl;
    const data = await post({
      url: url,
      params: options,
      store: context,
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      }
      // needToken:true,
    });
    return data;
  },
  //获取设备类型分类
  async deviceTypeCategories(context, options) {
    let url = URL.deviceTypeCategoriesUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //删除设备类型
  async deviceTypeDelete(context, options) {
    let url = URL.deviceTypeDeleteUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //更新设备类型
  async deviceTypeUpdate(context, options) {
    let url = URL.deviceTypeUpdateUrl;
    const data = await post({
      url: url,
      params: options,
      store: context,
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      }
      // needToken:true,
    });
    return data;
  },
  //获取设备类型信息
  async deviceTypeGet(context, options) {
    const data = await get({
      url: bmCommon.substitute(URL.deviceTypeGetUrl, options),
      params: {},
      store: context
      // needToken:true,
    });
    return data;
  },
  //验证设备类型
  async deviceTypeVerify(context, options) {
    let url = URL.deviceTypeVerifyUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //选择设备类型
  async deviceTypeSelect(context, options) {
    const data = await get({
      url: bmCommon.substitute(URL.deviceTypeSelectUrl, options),
      params: {},
      store: context
      // needToken:true,
    });
    return data;
  }
};

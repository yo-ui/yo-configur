import { URL } from "@/common/env";
// import bmCommon from '@/common/common'
import { post } from "@/store/axios";

export default {
  //删除设备参数值
  async pointValueDelete(context, options) {
    let url = URL.pointValueDeleteUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //更新设备参数值
  async pointValueUpdate(context, options) {
    let url = URL.pointValueUpdateUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //获取设备参数值
  async pointValueGet(context, options) {
    let url = URL.pointValueGetUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //添加设备参数值
  async pointValueInsert(context, options) {
    let url = URL.pointValueInsertUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  //选择设备参数值
  async pointValueSelect(context, options) {
    let url = URL.pointValueSelectUrl;
    const data = await post({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  }
};

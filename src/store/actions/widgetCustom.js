import { URL } from "@/common/env";
import bmCommon from "@/common/common";
import { get, post } from "@/store/axios";
export default {
  // : `${host}/widgetCustom/add`, //添加单个【自定义组件】
  async widgetCustomAdd(context, options) {
    let url = URL.widgetCustomAddUrl;
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
  // : `${host}/widgetCustom/del/{id}`, //删除单个【自定义组件】
  async widgetCustomDel(context, options) {
    let url = bmCommon.substitute(URL.widgetCustomDelUrl, options);
    const data = await get({
      url: url,
      params: {},
      store: context
      // needToken:true,
    });
    return data;
  },
  // : `${host}/widgetCustom/get/{id}`, //查询单个【自定义组件】
  async widgetCustomGet(context, options) {
    let url = bmCommon.substitute(URL.widgetCustomGetUrl, options);
    const data = await get({
      url: url,
      params: {},
      store: context
      // needToken:true,
    });
    return data;
  },
  // : `${host}/widgetCustom/list`, //分页查询【自定义组件】列表
  async widgetCustomList(context, options) {
    let url = URL.widgetCustomListUrl;
    const data = await get({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  // : `${host}/widgetCustom/update`, //更新单个【自定义组件】
  async widgetCustomUpdate(context, options) {
    let url = URL.widgetCustomUpdateUrl;
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
  }
};

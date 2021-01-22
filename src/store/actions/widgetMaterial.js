import { URL } from "@/common/env";
import bmCommon from "@/common/common";
import { get, post } from "@/store/axios";
export default {
  // : `${host}/widgetMaterial/add`, //添加单个【小组件素材】
  async widgetMaterialAdd(context, options) {
    let url = URL.widgetMaterialAddUrl;
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
  // : `${host}/widgetMaterial/del/{id}`, //删除单个【小组件素材】
  async widgetMaterialDel(context, options) {
    let url = bmCommon.substitute(URL.widgetMaterialDelUrl, options);
    const data = await get({
      url: url,
      params: {},
      store: context
      // needToken:true,
    });
    return data;
  },
  // : `${host}/widgetMaterial/get/{id}`, //查询单个【小组件素材】
  async widgetMaterialGet(context, options) {
    let url = bmCommon.substitute(URL.widgetMaterialGetUrl, options);
    const data = await get({
      url: url,
      params: {},
      store: context
      // needToken:true,
    });
    return data;
  },
  // : `${host}/widgetMaterial/list`, //分页查询【小组件素材】列表
  async widgetMaterialList(context, options) {
    let url = URL.widgetMaterialListUrl;
    const data = await get({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  // : `${host}/widgetMaterial/update`, //更新单个【小组件素材】
  async widgetMaterialUpdate(context, options) {
    let url = URL.widgetMaterialUpdateUrl;
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

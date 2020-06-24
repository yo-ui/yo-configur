import { URL } from "@/common/env";
import bmCommon from "@/common/common";
import { get } from "@/store/axios";
export default {
  //查询字典数据列表   dictListDataUrl: `${host}/dict/list/data/{typeList}`, //查询字典数据列表
  async dictListData(context, options) {
    const data = await get({
      url: bmCommon.substitute(URL.dictListDataUrl, options),
      params: {},
      store: context
      // needToken:true,
    });
    return data;
  },
  //查询字典类型列表   dictListTypeUrl: `${host}/dict/list/type`, //查询字典类型列表
  async dictListType(context, options) {
    let url = URL.dictListTypeUrl;
    const data = await get({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  }
};

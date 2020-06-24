import { URL } from "@/common/env";
import bmCommon from "@/common/common";
import { post, get,postUpload } from "@/store/axios";
export default {
  // : `${host}/attachment/del/{id}`, //删除单个【附件】
  async attachmentDel(context, options) {
    const data = await get({
      url: bmCommon.substitute(URL.attachmentDelUrl, options),
      params: {},
      store: context
      // needToken:true,
    });
    return data;
  },
  // : `${host}/attachment/list`, //分页查询【附件】列表
  async attachmentList(context, options) {
    let { deviceTypeId = "" } = options;
    delete options.deviceTypeId;
    const data = await get({
      url: bmCommon.substitute(URL.attachmentListUrl, { deviceTypeId }),
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  // : `${host}/attachment/upload`, //分页查询【附件】列表
  async attachmentUpload(context, options) {
    let { deviceTypeId = "" } = options;
    delete options.deviceTypeId;
    const data = await postUpload({
      url: bmCommon.substitute(URL.attachmentUploadUrl, { deviceTypeId }),
      params: options.formData,
      store: context,
      headers: {
        "Content-Type": "multipart/form-data"
      }
      // needToken:true,
    });
    return data;
  }
};

import { URL } from "@/common/env";
// import bmCommon from '@/common/common'
import { postUpload } from "@/store/axios";
export default {
  //上传文件到阿里云oss
  async upload2Oss(context, options) {
    const data = await postUpload({
      url: URL.upload2OssUrl,
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

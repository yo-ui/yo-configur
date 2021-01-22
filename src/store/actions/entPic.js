import { URL } from "@/common/env";
import bmCommon from "@/common/common";
import { get, post } from "@/store/axios";
export default {
  // : `${host}/entPic/add`, //添加单个【项目图片】
  async entPicAdd(context, options) {
    let url = URL.entPicAddUrl;
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
  // : `${host}/entPic/del/{id}`, //删除单个【项目图片】
  async entPicDel(context, options) {
    let url = bmCommon.substitute(URL.entPicDelUrl, options);
    const data = await get({
      url: url,
      params: {},
      store: context
      // needToken:true,
    });
    return data;
  },
  // // : `${host}/entPic/get/{id}`, //查询单个【项目图片】
  // async entPicGet(context, options) {
  //   let url = bmCommon.substitute(URL.entPicGetUrl, options);
  //   const data = await get({
  //     url: url,
  //     params: {},
  //     store: context
  //     // needToken:true,
  //   });
  //   return data;
  // },
  // : `${host}/entPic/list`, //分页查询【项目图片】列表
  async entPicList(context, options) {
    let url = URL.entPicListUrl;
    const data = await get({
      url: url,
      params: options,
      store: context
      // needToken:true,
    });
    return data;
  },
  // : `${host}/entPic/update`, //更新单个【项目图片】
  async entPicUpdate(context, options) {
    let url = URL.entPicUpdateUrl;
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

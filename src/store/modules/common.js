// import { URL } from "@/common/env";
import bmCommon from "@/common/common";
// import { post, get } from "@/store/axios";
import { Constants } from "@/common/env";
export default {
  namespaced: true, //必须加它不然报错
  strict: process.env.NODE_ENV !== "production",
  state: {
    organizeList: null,
  },
  getters: {
    //获取缓存数据对象
    getOrganizeList(state) {
      return state.organizeList || [];
    },
  },
  mutations: {
    //设置缓存对象
    setOrganizeList(state, item = []) {
      state.organizeList = item || [];
    },
  },
  actions: {}
};

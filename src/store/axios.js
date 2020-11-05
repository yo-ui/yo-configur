/* eslint-disable no-undef */
import { Constants } from "@/common/env";
import bmCommon from "@/common/common";
import apiConfig from "@/common/conf/index";
let { serviceHost = "", manageHost = "", manageLogin = "", serviceLogin = "" } =
  apiConfig || {};
let errorDialog = null;
// import axios from "axios";
// import Mprogress from "mprogress/mprogress.min";
// import Qs from "qs";
// const mprogress = new Mprogress({
//   template: 3
// });
//Vue函数添加一个原型属性$axios 指向axios,这样vue实例或组件中不用再去重复引用Axios 直接用this.$axios就能执行axios 方法
const CancelToken = axios.CancelToken;
async function get(options, callback) {
  return request("get", options, callback);
}
async function put(options, callback) {
  return request("put", options, callback);
}
async function post(options, callback) {
  return request("post", options, callback);
}
async function postUpload(options, callback) {
  return request("postUpload", options, callback);
}
async function del(options, callback) {
  return request("delete", options, callback);
}

async function request(type, options, callback) {
  if (!options) {
    options = {};
  }
  let { url, params, headers, vm, retry } = options;
  vm = window.$vm;
  //数据加载进度条开始
  vm.$NProgress.start();
  // store = store || vm.$store;
  if (!params) {
    params = {};
  }
  if (!headers) {
    headers = {};
  }
  if (options.headers) {
    for (let i in options.headers) {
      if (Object.prototype.hasOwnProperty.call(options.headers, i)) {
        headers[i] = options.headers[i];
      }
    }
  }
  !headers["Content-Type"] &&
    (headers["Content-Type"] = "application/x-www-form-urlencoded");
  retry && (headers["retry"] = 1);
  !headers["clientId"] && (headers["clientId"] = "web_operations");
  !headers["clientTime"] && (headers["clientTime"] = Date.now());
  !headers["request-type"] && (headers["request-type"] = "ajax");
  !headers["isAjax"] && (headers["isAjax"] = true);
  !headers["X-Requested-With"] &&
    (headers["X-Requested-With"] = "XMLHttpRequest");
  let { $store = {} } = $vm;
  let platform = "";
  if ($store) {
    let { getters = {} } = $store;
    let { getUserInfo: userInfo = {}, getPlatform = "" } = getters || {};
    platform = getPlatform;
    // let userInfo = $store.getters.getUserInfo;
    let { token = "" } = userInfo || {};
    headers[Constants.AUTHORIZATION] = token;
    // let platform=
    if (platform == "service") {
      //应用平台跳转过来
      url = `${serviceHost}${url}`;
    } else if (platform == "manage") {
      //管理平台跳转过来
      url = `${manageHost}${url}`;
    }
  }

  bmCommon.warn("当前请求地址：", url, "当前请求参数", params);
  let data = null;
  let cancelToken = new CancelToken(cancel => {
    //强行中断请求要用到的
    vm.$httpRequestList.push(cancel);
  });
  if (type == "get") {
    data = getFunc(url, cancelToken, params, headers, callback);
  } else if (type == "post") {
    data = postFunc(url, cancelToken, params, headers, callback);
  } else if (type == "delete") {
    data = delFunc(url, cancelToken, params, headers, callback);
  } else if (type == "put") {
    data = putFunc(url, cancelToken, params, headers, callback);
  } else if (type == "postUpload") {
    data = postUploadFunc(url, cancelToken, params, headers, callback);
  } else {
    data = postFunc(url, cancelToken, params, headers, callback);
  }

  //判断返回值处理
  return new Promise((resolve, reject) => {
    //封装axios
    data
      .then(res => {
        //数据加载进度条结束
        vm.$NProgress.done();
        let { data } = res;
        data = data && typeof data === "string" ? JSON.parse(data) : data;
        let { result = "", code = "", message = "" } = data;
        try {
          result =
            result && typeof result === "string" ? JSON.parse(result) : result;
        } catch (err) {
          bmCommon.error("类型转换异常", err);
        }
        if (code == Constants.CODES.LOGIN) {
          // vm.$jumpLogin();
          errorDialog?.close();
          errorDialog = vm.$$msgWarn("当前登录已经过期，请返回重新进入！");
          if (platform == "service") {
            //应用平台跳转过来
            url = `${serviceLogin}?redirecturl=${encodeURI(
              location.href.replace(/&x-access-token.*$/, "")
            )}`;
          } else if (platform == "manage") {
            //管理平台跳转过来
            url = `${manageLogin}?redirecturl=${encodeURI(
              location.href.replace(/&x-access-token.*$/, "")
            )}`;
          }
          vm.$openPage(url);
          reject();
        } else if (code == Constants.CODES.REDIRECT) {
          // let url =
          //   result.indexOf("?") < 0
          //     ? `${result}?${Constants.AUTHORIZATION}=${token}`
          //     : `${result}&${Constants.AUTHORIZATION}=${token}`;
          vm.$openPage(result);
          reject();
        } else {
          if (code == Constants.CODES.SYSTEM_ERROR) {
            //系统错误
            code = Constants.CODES.ERROR;
            message = "系统开小差了，请重试！";
          } else if (code == Constants.CODES.PARAM_ERROR) {
            //参数错误
            code = Constants.CODES.ERROR;
            message = "参数错误";
          }
          let { totalNum = 0 } = result || {};
          if (totalNum) {
            result.totalNum = Number(totalNum || 0);
          }
          data.code = code || "";
          data.message = message || "";
          data.result = result;
          res.data = data;
          resolve(res);
        }
      })
      .catch(error => {
        //数据加载进度条结束
        vm.$NProgress.done();
        //中断请求和请求出错的处理
        if (error.message == Constants.INTERRUPT) {
          bmCommon.log(`已中断请求url=${url}`);
        }
        reject(error);
      });
  });
}
/**
 * post 请求
 * @param {*} params
 * @param {*} callback
 */
function postFunc(url, cancelToken, params, headers) {
  let contentType = (headers || {})["Content-Type"];
  return axios.post(
    url,
    contentType == "application/json;charset=UTF-8"
      ? params
      : Qs.stringify(params),
    {
      cancelToken: cancelToken,
      headers: headers,
      timeout: Constants.AXIOTIMEOUT
    }
  );
}
/**
 * post 请求
 * @param {*} params
 * @param {*} callback
 */
function postUploadFunc(url, cancelToken, params, headers) {
  return axios.post(url, params, {
    cancelToken: cancelToken,
    headers: headers,
    timeout: Constants.AXIOTIMEOUT
  });
}
/**
 * put 请求
 * @param {*} params
 * @param {*} callback
 */
function putFunc(url, cancelToken, params, headers) {
  return axios.put(url, Qs.stringify(params), {
    cancelToken: cancelToken,
    headers: headers,
    timeout: Constants.AXIOTIMEOUT
  });
}
/**
 * delete 请求
 * @param {*} params
 * @param {*} callback
 */
function delFunc(url, cancelToken, params, headers) {
  return axios.patch(url, Qs.stringify(params), {
    // params:params,
    // data:params,
    cancelToken: cancelToken,
    headers: headers,
    paramsSerializer: params => {
      return Qs.stringify(params, { indices: false });
    },
    timeout: Constants.AXIOTIMEOUT
  });
}

/**
 * get 请求
 * @param {*} params
 * @param {*} callback
 */

function getFunc(url, cancelToken, params, headers) {
  return axios.get(url, {
    cancelToken: cancelToken,
    params: params,
    headers: headers,
    paramsSerializer: params => {
      return Qs.stringify(params, { indices: false });
    },
    timeout: Constants.AXIOTIMEOUT
  });
}

export { get, post, put, del, postUpload };

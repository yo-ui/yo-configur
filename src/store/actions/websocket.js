/* eslint-disable no-undef */
import { Constants, URL } from "@/common/env";
import bmCommon from "@/common/common";
// import bmWebSocket from "@/common/webSocket";
// socket功能
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import apiConfig from "@/common/conf/index";
let { wsServiceHost = "", wsManageHost = "" } = apiConfig || {};
// let variablePool = {};

// variablePool.websocketMap = {}; //初始化Websocket 连接池
// variablePool.handCloseConfigWsCount = 0;
export default {
  //订阅主题
  websocketSubscribe(context, options = {}) {
    let { stompClient = "" } = $vm || {};
    let { subject = "", callback = () => {} } = options;
    let value = {};
    stompClient.subscribe(subject, (res = {}) => {
      let { body = "" } = res || {};
      let data = body && typeof body === "string" ? JSON.parse(body) : body;
      let { code = "", result = {}, message = "" } = data || {};
      // bmCommon.log("websocketSubscribe", message);
      if (code == Constants.CODES.SUCCESS) {
        value = result || {};
      } else {
        bmCommon.error(message);
      }
      callback && callback(value || {});
    });
  },
  //初始化配置相关websocket
  initConfigWebsocket(context, options = {}) {
    //websocket 地址//reConnection 重连函数
    let {
      subject = "",
      callback = () => {},
      reConnection = () => {}
    } = options;
    let { getters = {} } = context;
    let { getUserInfo: userInfo = {}, getPlatform: platform = "" } =
      getters || {};
    let { token = "" } = userInfo || {};
    // let socket = new SockJS(url);
    let url = URL.websocketUrl;
    if (platform == "service") {
      //应用平台跳转过来
      url = `${wsServiceHost}${url}`;
    } else if (platform == "manage") {
      //管理平台跳转过来
      url = `${wsManageHost}${url}`;
    }
    bmCommon.log("websocket url=", url);
    let socket = new SockJS(`${url}?x-access-token=${token}`);
    let stompClient = Stomp.over(socket);
    let headers = {};
    headers[Constants.AUTHORIZATION] = token;
    stompClient.connect(
      headers,
      () => {
        bmCommon.log("连接成功！", url);
        $vm.stompClient = stompClient;
        context.dispatch("websocketSubscribe", { subject, callback });
        let heartbeatTime = Date.now();
        context.dispatch("websocketSubscribe", {
          subject: "/user/queue/pong",
          callback: () => {
            bmCommon.log("收到服务端心跳回复");
            let currentTime = Date.now();
            let interval = currentTime - heartbeatTime;
            if (interval > 90 * 1000) {
              //若大于90秒还未有心跳返回，则进行业务重连
              reConnection && reConnection();
              clearInterval($vm.setIntervalId);
            }
          }
        });
        $vm.setIntervalId = setInterval(() => {
          stompClient.send(
            `/ws/ping`,
            {},
            JSON.stringify({
              token
            })
          );
        }, 1000 * 60); //1分钟心跳
      },
      err => {
        clearInterval($vm.setIntervalId);
        bmCommon.error("连接失败=>error: ", err);
      }
    );
  }
};

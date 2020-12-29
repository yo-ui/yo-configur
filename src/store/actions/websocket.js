/* eslint-disable no-undef */
import { Constants, URL } from "@/common/env";
import bmCommon from "@/common/common";
// import bmWebSocket from "@/common/webSocket";
// socket功能
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import apiConfig from "@/common/conf/index";
const { wsServiceHost = "", wsManageHost = "" } = apiConfig || {};
// let variablePool = {};

// variablePool.websocketMap = {}; //初始化Websocket 连接池
// variablePool.handCloseConfigWsCount = 0;
export default {
  // 订阅主题
  websocketSubscribe(context, options = {}) {
    const { stompClient = "" } = $vm || {};
    const { subject = "", callback = () => {} } = options;
    let value = {};
    stompClient.subscribe(subject, (res = {}) => {
      const { body = "" } = res || {};
      const data = body && typeof body === "string" ? JSON.parse(body) : body;
      const { code = "", result = {}, message = "" } = data || {};
      // bmCommon.log("websocketSubscribe", message);
      if (code == Constants.CODES.SUCCESS) {
        value = result || {};
      } else {
        bmCommon.error(message);
      }
      callback && callback(value || {});
    });
  },
  websocketSend(context, options = {}) {
    const { stompClient = "" } = $vm || {};
    const { subject = "", token = "" } = options;
    stompClient.send(
      subject,
      {},
      JSON.stringify({
        token,
      })
    );
  },
  // 初始化配置相关websocket
  initConfigWebsocket(context, options = {}) {
    // websocket 地址//reConnection 重连函数
    bmCommon.log("websocket 初始化！");
    const {
      subject = "",
      callback = () => {},
      reConnection = () => {},
    } = options;
    const { getters = {} } = context;
    const { getUserInfo: userInfo = {}, getPlatform: platform = "" } =
      getters || {};
    const { token = "" } = userInfo || {};
    // let socket = new SockJS(url);
    let url = URL.websocketUrl;
    if (platform == "service") {
      // 应用平台跳转过来
      url = `${wsServiceHost}${url}`;
    } else if (platform == "manage") {
      // 管理平台跳转过来
      url = `${wsManageHost}${url}`;
    }
    bmCommon.log("websocket url=", url);
    const socket = new SockJS(`${url}?x-access-token=${token}`);
    const stompClient = Stomp.over(socket);
    const headers = {};
    let count = 0;
    headers[Constants.AUTHORIZATION] = token;
    stompClient.connect(
      headers,
      () => {
        bmCommon.log("连接成功！", url);
        $vm.stompClient = stompClient;
        context.dispatch("websocketSubscribe", { subject, callback });
        const heartbeatTime = Date.now();
        context.dispatch("websocketSubscribe", {
          subject: "/user/queue/pong",
          callback: () => {
            bmCommon.log("收到服务端心跳回复");
            const currentTime = Date.now();
            const interval = currentTime - heartbeatTime;
            if (interval > 90 * 1000) {
              // 若大于90秒还未有心跳返回，则进行业务重连
              $vm.setTimeoutId = setTimeout(() => {
                clearTimeout($vm.setTimeoutId);
                reConnection && reConnection();
              }, 1000 * 60 * count++);
              clearInterval($vm.setIntervalId);
            }
          },
        });
        bmCommon.log("立即发起心跳");
        context.dispatch("websocketSend", {
          subject: "/ws/ping",
          token,
        });
        $vm.setIntervalId = setInterval(() => {
          bmCommon.log("发起心跳");
          context.dispatch("websocketSend", {
            subject: "/ws/ping",
            token,
          });
        }, 1000 * 60); // 1分钟心跳
      },
      (err) => {
        clearInterval($vm.setIntervalId);
        $vm.setTimeoutId = setTimeout(() => {
          clearTimeout($vm.setTimeoutId);
          reConnection && reConnection();
        }, 1000 * 60 * count++);
        bmCommon.error("连接失败=>error: ", err);
      }
    );
  },
};

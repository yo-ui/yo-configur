/* eslint-disable no-undef */
import { Constants, URL } from "@/common/env";
import bmCommon from "@/common/common";
// import bmWebSocket from "@/common/webSocket";
// socket功能
import SockJS from "sockjs-client";
import Stomp from "stompjs";
// let variablePool = {};

// variablePool.websocketMap = {}; //初始化Websocket 连接池
// variablePool.handCloseConfigWsCount = 0;
export default {
  //订阅主题
  websocketSubscribe(context, options = {}) {
    let { stompClient = "" } = $vm || {};
    let { subject = "", callback = () => {} } = options;
    stompClient.subscribe(subject, (data = {}) => {
      let { code = "", result = {}, message = "" } = data || {};
      // let result = JSON.parse(payload.body);
      bmCommon.log(result, message);
      if (code == Constants.CODES.SUCCESS) {
        value = result || {};
      }
      callback && callback(value || {});
    });
  },
  //初始化配置相关websocket
  initConfigWebsocket(context, options = {}) {
    //websocket 地址
    let { subject = "", callback = () => {} } = options;
    let userInfo = context.getters.getUserInfo || {};
    let { token = "" } = userInfo || {};
    // let socket = new SockJS(url);
    let socket = new SockJS(URL.websocketUrl);
    let stompClient = Stomp.over(socket);
    let headers = {};
    headers[Constants.AUTHORIZATION] = token;
    let value = {};
    stompClient.connect(
      headers,
      () => {
        bmCommon.log("连接成功！", url);
        $vm.stompClient = stompClient;
        stompClient.subscribe(subject, (data = {}) => {
          let { code = "", result = {}, message = "" } = data || {};
          // let result = JSON.parse(payload.body);
          bmCommon.log(result, message);
          if (code == Constants.CODES.SUCCESS) {
            value = result || {};
          }
          callback && callback(value || {});
        });
      },
      err => {
        bmCommon.error("error: " , err);
      }
    );
    // $vm.websocket = new bmWebSocket(
    //   URL.websocketUrl,
    //   {
    //     onopen(evt, ws) {
    //       // Web Socket 已连接上，使用 send() 方法发送数据
    //       $vm.websocketLinkStatus = true; //websocket 连接成功
    //       bmCommon.info(
    //         "数据发送中...",
    //         "Web Socket 已连接上，使用 send() 方法发送数据"
    //       );
    //     },
    //     onclose(evt, ws) {
    //       // 关闭 websocket
    //       bmCommon.warn("configWebsocket 连接已关闭...", evt, ws);
    //       $vm.websocketLinkStatus = false; //websocket 连接失败 或关闭
    //       if (!variablePool.handCloseConfigWsStatus) {
    //         if (
    //           variablePool.handCloseConfigWsCount >=
    //           Constants.WEBSOCKETRETRYCOUNT
    //         ) {
    //           bmCommon.warn(
    //             "configWebsocket 连接重试次数为" +
    //               variablePool.handCloseConfigWsCount +
    //               ",不再进行重试"
    //           );
    //           return;
    //         }
    //         variablePool.handCloseConfigWsCount++;
    //         setTimeout(() => {
    //           context.dispatch("initConfigWebsocket", options);
    //         }, 3000);
    //         bmCommon.log(
    //           "非主动关闭的连接，重新建立configWebsocket连接,次数为" +
    //             variablePool.handCloseConfigWsCount
    //         );
    //       } else {
    //         variablePool.handCloseConfigWsCount = 0;
    //         bmCommon.warn("主动关闭的连接，不需要重连configWebsocket...");
    //         variablePool.handCloseConfigWsStatus = false;
    //       }
    //     },
    //     onmessage(evt, ws) {
    //       $vm.websocketLinkStatus = true; //websocket 连接成功
    //       variablePool.handCloseConfigWsCount = 0;
    //       let result = evt.data;
    //       if (result && typeof result === "string") {
    //         result = JSON.parse(result);
    //       }
    //       if (result && typeof result === "object") {
    //         let event = result.event;
    //         // bmCommon.log('当前接收的websocket 数据事件为',event)
    //         switch (event) {
    //           case Constants.WEBSOCKETEVENT.TICKER: //ticker

    //             break;
    //           case Constants.WEBSOCKETEVENT.TRADE: //最新交易

    //             break;
    //           case Constants.WEBSOCKETEVENT.DEPTHS: //深度数据

    //             break;
    //           case Constants.WEBSOCKETEVENT.KLINEMESSAGE: //k线数据

    //             break;
    //           case Constants.WEBSOCKETEVENT.ORDERUNDOSUCCESS: //订单撤销成功的推送

    //             break;
    //           case Constants.WEBSOCKETEVENT.ORDERUNDOFAILURE: //订单撤销失败  订单正在撮合中不能撤消
    //             break;
    //           case Constants.WEBSOCKETEVENT.ORDERPFL: //下单成功

    //             break;
    //           case Constants.WEBSOCKETEVENT.USERMESSAGE: //用户信息推送
    //             break;
    //           case Constants.WEBSOCKETEVENT.RECHARGESUCCESS: //用户充值状态 @TODO
    //             break;
    //           case Constants.WEBSOCKETEVENT.AGENCYCERSUC: //账户类型推送  机构账户认证成功
    //             break;
    //           case Constants.WEBSOCKETEVENT.PING: //心跳
    //             break;
    //           default:
    //             break;
    //         }
    //       }
    //     },
    //     onerror(evt, ws) {
    //       $vm.websocketLinkStatus = false; //websocket 连接失败 或关闭
    //       bmCommon.error(
    //         "[store][initConfigWebsocket]",
    //         "websocket 连接失败",
    //         evt
    //       );
    //     }
    //   },
    //   { token: userInfo.token }
    // );
  }
};

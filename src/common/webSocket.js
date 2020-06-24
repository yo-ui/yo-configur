/**
 * websocket 初始化
 * @param {*} url
 * @param {*} options
 */
import bmCommon from "@/common/common";

function FqWebSocket(url, options, params) {
  bmCommon.log("---------url=" + url);
  if ("WebSocket" in window) {
    bmCommon.warn("恭喜，当前浏览器支持Websocket");
    let webSocket = new WebSocket(url);
    if (options.onpen) {
      webSocket.onopen = function(evt) {
        options.onopen(evt, webSocket, params);
      };
    }
    if (options.onerror) {
      webSocket.onerror = function(evt) {
        options.onerror(evt, webSocket, params);
      };
    }
    if (options.onmessage) {
      webSocket.onmessage = function(evt) {
        options.onmessage(evt, webSocket, params);
      };
    }
    if (options.onclose) {
      webSocket.onclose = function(evt) {
        options.onclose(evt, webSocket, params);
      };
    }
    return webSocket;
  } else {
    bmCommon.warn("当前浏览器不支持Websocket");
  }
}

export default FqWebSocket;

/* !!
 * $store.dispatch
 * return Promise
 * ===== ===== =====
 */
import webActions from "@/store/actions/web"; //展示相关
import commonActions from "@/store/actions/common"; //公共相关
import canvasActions from "@/store/actions/canvas"; //画布相关
import websocketActions from "@/store/actions/websocket"; //websocket相关
export default {
  ...canvasActions,
  ...commonActions,
  ...websocketActions,
  ...webActions,
};

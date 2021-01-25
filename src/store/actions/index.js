/* !!
 * $store.dispatch
 * return Promise
 * ===== ===== =====
 */
import webActions from "@/store/actions/web"; //展示相关
import commonActions from "@/store/actions/common"; //公共相关
import canvasActions from "@/store/actions/canvas"; //画布相关
import uploadActions from "@/store/actions/upload"; //上传相关
import orgStrucActions from "@/store/actions/orgStruc"; //组织结构相关
import websocketActions from "@/store/actions/websocket"; //websocket相关
import deviceActions from "@/store/actions/device"; //设备相关
import modelActions from "@/store/actions/model"; //基础建模
import widgetCustomActions from "@/store/actions/widgetCustom"; //自定义组件
import widgetMaterialActions from "@/store/actions/widgetMaterial"; //素材组件
import entPicActions from "@/store/actions/entPic"; //图片库
export default {
  ...widgetCustomActions,
  ...widgetMaterialActions,
  ...entPicActions,
  ...uploadActions,
  ...canvasActions,
  ...orgStrucActions,
  ...commonActions,
  ...websocketActions,
  ...deviceActions,
  ...modelActions,
  ...webActions
};
